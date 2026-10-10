import io
import unittest
import zipfile
from pathlib import Path
from fastapi.testclient import TestClient

from backend.main import app
from backend.rag import RAGEngine, get_rag_engine, DATA_DIR, DOCS_DIR
from backend.agent import run_agent, run_agent_fallback_mock
from backend.escalation import get_all_tickets
from backend.memory import memory_manager


class TestRAGPipelineSuite(unittest.TestCase):
    """
    Automated Regression Test Suite for RAG Document Retrieval and Academic Assistance.
    Covers the 10 critical requirements:
    1. Answer exists in PDF
    2. Answer exists in TXT
    3. Answer exists in DOCX
    4. Answer exists in legacy DOC / graceful handling
    5. Multi-document evidence combination
    6. Paraphrased query
    7. Truly unsupported question (zero-hallucination + escalation)
    8. Irrelevant document rejected
    9. Indexing failure / diagnostics reporting
    10. Existing project regression
    """

    @classmethod
    def setUpClass(cls):
        cls.client = TestClient(app)
        cls.rag = get_rag_engine()
        cls.test_docx_path = DATA_DIR / "materials" / "test_cloud_virtualization.docx"
        cls._create_test_docx(cls.test_docx_path)
        # Re-index to ensure dynamic DOCX is in the vector store
        cls.rag.ingest_all_documents()

    @classmethod
    def tearDownClass(cls):
        # Clean up temporary test DOCX
        if cls.test_docx_path.exists():
            try:
                cls.test_docx_path.unlink()
            except Exception:
                pass
        cls.rag.ingest_all_documents()

    @staticmethod
    def _create_test_docx(file_path: Path):
        """Generates a valid OOXML .docx file containing academic content."""
        file_path.parent.mkdir(parents=True, exist_ok=True)
        buf = io.BytesIO()
        with zipfile.ZipFile(buf, "w", zipfile.ZIP_DEFLATED) as zf:
            zf.writestr(
                "[Content_Types].xml",
                '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
                '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">'
                '<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>'
                '<Default Extension="xml" ContentType="application/xml"/>'
                '<Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>'
                "</Types>",
            )
            zf.writestr(
                "_rels/.rels",
                '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
                '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">'
                '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>'
                "</Relationships>",
            )
            zf.writestr(
                "word/document.xml",
                '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
                '<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">'
                "<w:body>"
                "<w:p><w:r><w:t>"
                "Cloud Computing Virtualization: Hypervisor Type 1 bare-metal runs directly on underlying hardware "
                "providing superior I/O performance and tenant isolation, whereas Type 2 hosted hypervisor executes "
                "as a software virtualization layer on top of a host operating system."
                "</w:t></w:r></w:p>"
                "</w:body></w:document>",
            )
        file_path.write_bytes(buf.getvalue())

    def test_1_answer_exists_in_pdf(self):
        """Test 1: Query answer exists in PDF document and retrieves accurate citations."""
        res = self.rag.search("What topics are in M3 Unit 2 Laplace transforms or differential equations?", top_k=3)
        self.assertEqual(res["status"], "success")
        self.assertGreater(len(res["results"]), 0)

        pdf_results = [r for r in res["results"] if r["filename"].lower().endswith(".pdf")]
        self.assertGreater(len(pdf_results), 0, "Expected at least one PDF chunk to be retrieved.")
        top_pdf = pdf_results[0]
        self.assertIn("Page", top_pdf["source_citation"])
        self.assertGreater(top_pdf["similarity_score"], 0.05)

    def test_2_answer_exists_in_txt(self):
        """Test 2: Query answer exists in TXT document with full terminology and citation."""
        res = self.rag.search("Why do we normalize tables in DBMS? Explain 1NF 2NF 3NF and BCNF.", top_k=3)
        self.assertEqual(res["status"], "success")
        self.assertGreater(len(res["results"]), 0)

        txt_results = [r for r in res["results"] if r["filename"].lower().endswith(".txt")]
        self.assertGreater(len(txt_results), 0, "Expected at least one TXT chunk to be retrieved.")
        top_txt = txt_results[0]
        self.assertTrue(any(term in top_txt["text"].upper() for term in ["NORMAL", "BCNF", "1 NF", "2 NF"]))
        self.assertIn(".txt", top_txt["source_citation"])

    def test_3_answer_exists_in_docx(self):
        """Test 3: Query answer exists in DOCX document parsed and indexed accurately."""
        self.assertTrue(self.test_docx_path.exists())
        res = self.rag.search("Cloud Computing Virtualization Hypervisor Type 1 bare-metal vs Type 2 hosted", top_k=3)
        self.assertEqual(res["status"], "success")
        self.assertGreater(len(res["results"]), 0)

        docx_matches = [r for r in res["results"] if "test_cloud_virtualization.docx" in r["filename"]]
        self.assertGreater(len(docx_matches), 0, "Expected chunks from test_cloud_virtualization.docx")
        self.assertIn("Hypervisor", docx_matches[0]["text"])

    def test_4_legacy_doc_graceful_handling(self):
        """Test 4: Legacy binary .doc format handles parsing gracefully without crashing the pipeline."""
        dummy_doc = DATA_DIR / "materials" / "legacy_test.doc"
        dummy_doc.write_bytes(b"\xd0\xcf\x11\xe0\xa1\xb1\x1a\xe1" + b"Legacy Microsoft Word binary stream")
        try:
            chunks = self.rag.parse_doc(dummy_doc)
            # Should either extract readable ASCII or safely record failure without raising unhandled exception
            self.assertIsInstance(chunks, list)
            if not chunks:
                self.assertTrue(any(f["filename"] == "legacy_test.doc" for f in self.rag.diagnostics["failed_files"]))
        finally:
            if dummy_doc.exists():
                dummy_doc.unlink()

    def test_5_multi_document_evidence_combination(self):
        """Test 5: Multi-document evidence combination retrieves chunks from multiple distinct documents."""
        res = self.rag.search("DBMS Normalization functional dependencies 3NF BCNF relational database design", top_k=5)
        self.assertEqual(res["status"], "success")
        self.assertGreaterEqual(len(res["results"]), 2)

        distinct_files = {r["filename"] for r in res["results"]}
        self.assertGreaterEqual(len(distinct_files), 2, "Expected evidence combined from at least 2 distinct files.")

    def test_6_paraphrased_query(self):
        """Test 6: Paraphrased query matches semantic content despite lexical and morphological variation."""
        # Query uses colloquial and paraphrased terms ("reorganize relation", "stop duplicating data")
        res = self.rag.search("Why do we normalize relations and tables to eliminate data redundancy in DBMS?", top_k=3)
        self.assertEqual(res["status"], "success")
        self.assertGreater(len(res["results"]), 0)
        top_match = res["results"][0]
        self.assertTrue(
            any(k in top_match["text"].lower() for k in ["normal", "redundancy", "dependency", "table", "schema"])
        )

    def test_7_truly_unsupported_question_offers_escalation(self):
        """Test 7: Unsupported out-of-domain question returns no results and agent offers escalation."""
        unsupported_query = "Who won the 2022 FIFA World Cup in Qatar?"
        rag_res = self.rag.search(unsupported_query)
        self.assertEqual(rag_res["status"], "no_results")
        self.assertEqual(len(rag_res["results"]), 0)

        # Agent response check
        agent_res = run_agent(unsupported_query, session_id="test_unsupported_session")
        self.assertTrue(agent_res["success"])
        answer_lower = agent_res["answer"].lower()
        self.assertTrue(
            any(phrase in answer_lower for phrase in [
                "could not be verified",
                "couldn't find sufficient information",
                "not available in the available academic materials",
                "raise a ticket",
                "support team"
            ])
        )
        self.assertNotIn("argentina", answer_lower)
        self.assertNotIn("lionel messi", answer_lower)

    def test_8_irrelevant_document_rejected(self):
        """Test 8: Irrelevant query is completely rejected without false positive document leakage."""
        irrelevant_query = "underwater scuba diving coral reef deep sea marine biology"
        res = self.rag.search(irrelevant_query)
        self.assertEqual(res["status"], "no_results")
        self.assertEqual(len(res["results"]), 0)

    def test_9_indexing_failure_and_diagnostics_reporting(self):
        """Test 9: Admin diagnostics and re-indexing report health, counts, and unparseable files."""
        diag_resp = self.client.get("/admin/rag/diagnostics")
        self.assertEqual(diag_resp.status_code, 200)
        data = diag_resp.json()
        self.assertIn(data["status"], ["ok", "success"])
        self.assertIn("total_files_discovered", data)
        self.assertIn("successfully_extracted_files", data)
        self.assertIn("total_indexed_chunks", data)
        self.assertIn("ocr_required_files", data)
        self.assertIn("failed_files", data)
        self.assertGreater(data["total_files_discovered"], 0)
        self.assertGreater(data["total_indexed_chunks"], 0)

        reindex_resp = self.client.post("/admin/rag/reindex")
        self.assertEqual(reindex_resp.status_code, 200)
        reindex_data = reindex_resp.json()
        self.assertIn(reindex_data["status"], ["ok", "success"])
        self.assertGreater(reindex_data["total_chunks"], 0)

    def test_10_existing_project_regression(self):
        """Test 10: Existing project features (chat API, tickets, memory) remain fully operational."""
        # Chat endpoint
        chat_resp = self.client.post("/chat", json={
            "question": "What is covered in DBMS Unit 3?",
            "session_id": "test_regression_session",
            "student_name": "Test Student",
            "student_email": "test@nec.edu"
        })
        self.assertEqual(chat_resp.status_code, 200)
        chat_data = chat_resp.json()
        self.assertTrue(chat_data["success"])
        self.assertIn("answer", chat_data)

        # Memory verification
        history = memory_manager.get_history("test_regression_session")
        self.assertGreater(len(history), 0)

        # Escalation ticket system
        tickets = get_all_tickets()
        self.assertIsInstance(tickets, list)


if __name__ == "__main__":
    unittest.main()
