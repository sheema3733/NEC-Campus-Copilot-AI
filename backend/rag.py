import json
import logging
import math
import os
import re
from collections import Counter
from datetime import datetime
from pathlib import Path
from typing import Any, Dict, List, Optional, Set, Tuple

import numpy as np

try:
    from sklearn.feature_extraction.text import TfidfVectorizer
    from sklearn.metrics.pairwise import cosine_similarity
    SKLEARN_AVAILABLE = True
except ImportError:
    SKLEARN_AVAILABLE = False

from backend.config import DATA_DIR

logger = logging.getLogger(__name__)

DOCS_DIR = DATA_DIR / "docs"
MATERIALS_DIR = DATA_DIR / "materials"
VECTOR_STORE_PATH = DATA_DIR / "vector_store.json"

# Ensure directories exist
DOCS_DIR.mkdir(parents=True, exist_ok=True)
MATERIALS_DIR.mkdir(parents=True, exist_ok=True)


def clean_extracted_text(text: str) -> str:
    """Repairs concatenated words, spacing anomalies, and punctuation in extracted text."""
    if not text:
        return ""
    # Repair CamelCase word concatenation from PDFs (e.g. PromptEngineering -> Prompt Engineering)
    text = re.sub(r"([a-z])([A-Z])", r"\1 \2", text)
    # Repair numbers joined to words (e.g. 1.Zero -> 1. Zero, Unit2 -> Unit 2)
    text = re.sub(r"([0-9]+)\.([A-Za-z])", r"\1. \2", text)
    text = re.sub(r"([a-zA-Z])([0-9])", r"\1 \2", text)
    text = re.sub(r"([0-9])([a-zA-Z])", r"\1 \2", text)
    # Repair punctuation joined without spaces
    text = re.sub(r"([a-zA-Z]),([a-zA-Z])", r"\1, \2", text)
    text = re.sub(r"([a-zA-Z]):([a-zA-Z])", r"\1: \2", text)
    text = re.sub(r"\r\n", "\n", text)
    return text.strip()


def stem_token(word: str) -> str:
    """Applies robust morphological stemming for academic, technical, and general English terminology."""
    w = word.lower().strip()
    if len(w) <= 3:
        return w
    # Common academic & technical suffixes
    for suf, rep in [
        ("izations", "norm"), ("ization", "norm"), ("izing", "norm"), ("ized", "norm"), ("ize", "norm"),
        ("ations", "ate"), ("ation", "ate"), ("ative", "ate"), ("ational", "ate"), ("tional", "tion"),
        ("nesses", ""), ("ness", ""), ("ments", ""), ("ment", ""),
        ("abilities", "abl"), ("ability", "abl"),
        ("encies", "enc"), ("ency", "enc"), ("ances", "anc"), ("ance", "anc"),
        ("alities", "al"), ("alism", "al"),
        ("ously", "ous"), ("iously", "ious"),
        ("ities", "ity"),
        ("fully", "ful"),
        ("able", ""), ("ible", ""),
        ("ing", ""), ("ies", "y"), ("ed", ""),
        ("sses", "ss"), ("s", "")
    ]:
        if w.endswith(suf) and len(w) - len(suf) >= 3:
            w = w[:-len(suf)] + rep
            break
    return w


def tokenize_stemmed(text: str) -> List[str]:
    """Tokenizes and stems words, removing generic conversational stopwords."""
    words = re.findall(r"[a-zA-Z0-9]{2,}", text.lower())
    stop_set = {
        "the", "and", "for", "that", "this", "with", "from", "are", "was", "were",
        "been", "have", "has", "had", "does", "did", "not", "out", "into", "over",
        "can", "could", "would", "should", "shall", "will", "tell", "give", "please",
        "what", "when", "where", "which", "why", "who", "how", "about",
        "is", "it", "its", "in", "on", "at", "by", "to", "of", "an", "as", "be",
        "if", "or", "so", "than", "too", "very", "you", "your", "we", "our", "my",
        "me", "he", "she", "they", "them", "their", "all", "any", "both", "each",
        "few", "more", "most", "other", "some", "such", "no", "nor", "only", "own"
    }
    return [stem_token(w) for w in words if w not in stop_set]


class RAGDocumentChunk:
    def __init__(
        self,
        chunk_id: str,
        text: str,
        filename: str,
        page_number: Optional[int] = 1,
        section: Optional[str] = None,
        file_type: Optional[str] = ".txt",
        relative_path: Optional[str] = None,
        subject: Optional[str] = None,
        unit: Optional[int] = None,
    ):
        self.chunk_id = chunk_id
        self.text = text
        self.filename = filename
        self.page_number = page_number or 1
        self.section = section or "General"
        self.file_type = file_type or Path(filename).suffix.lower()
        self.relative_path = relative_path or filename
        self.subject = subject or self._detect_subject(filename)
        self.unit = unit if unit is not None else self._detect_unit(filename)
        self.source_citation = f"[{filename}, Page {self.page_number}]"

    @staticmethod
    def _detect_subject(name: str) -> Optional[str]:
        n = name.lower()
        if "dbms" in n or "database" in n or "cs301" in n:
            return "dbms"
        if "java" in n or "oop" in n or "cs202" in n:
            return "java"
        if "m3" in n or "math" in n:
            return "mathematics"
        if "cse" in n or "aiml" in n or "ds" in n:
            return "cse"
        if "ece" in n or "eee" in n:
            return "ece_eee"
        if "mech" in n or "civil" in n:
            return "mech_civil"
        return None

    @staticmethod
    def _detect_unit(name: str) -> Optional[int]:
        m = re.search(r"unit[-_\s]*([1-5])\b", name.lower())
        return int(m.group(1)) if m else None

    def to_dict(self) -> Dict[str, Any]:
        return {
            "chunk_id": self.chunk_id,
            "text": self.text,
            "filename": self.filename,
            "page_number": self.page_number,
            "section": self.section,
            "file_type": self.file_type,
            "relative_path": self.relative_path,
            "subject": self.subject,
            "unit": self.unit,
            "source_citation": self.source_citation,
        }

    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "RAGDocumentChunk":
        return cls(
            chunk_id=data["chunk_id"],
            text=data["text"],
            filename=data["filename"],
            page_number=data.get("page_number", 1),
            section=data.get("section", "General"),
            file_type=data.get("file_type"),
            relative_path=data.get("relative_path"),
            subject=data.get("subject"),
            unit=data.get("unit"),
        )


class PurePythonTFIDF:
    """Fallback TF-IDF vectorizer using standard python math & numpy with stemming."""

    def __init__(self):
        self.vocab: Dict[str, int] = {}
        self.idf: Dict[str, float] = {}
        self.doc_vectors: List[np.ndarray] = []

    def tokenize(self, text: str) -> List[str]:
        return tokenize_stemmed(text)

    def fit_transform(self, corpus: List[str]) -> np.ndarray:
        tokenized_docs = [self.tokenize(doc) for doc in corpus]
        N = len(corpus) or 1

        words = set(w for doc in tokenized_docs for w in doc)
        self.vocab = {w: idx for idx, w in enumerate(sorted(words))}

        df = Counter()
        for doc in tokenized_docs:
            for w in set(doc):
                df[w] += 1

        self.idf = {w: math.log((N + 1) / (df[w] + 1)) + 1.0 for w in words}

        matrix = np.zeros((N, len(self.vocab)))
        for doc_idx, doc in enumerate(tokenized_docs):
            counts = Counter(doc)
            length = len(doc) or 1
            for word, count in counts.items():
                if word in self.vocab:
                    col_idx = self.vocab[word]
                    tf = count / length
                    matrix[doc_idx, col_idx] = tf * self.idf[word]

            norm = np.linalg.norm(matrix[doc_idx])
            if norm > 0:
                matrix[doc_idx] /= norm

        self.doc_vectors = matrix
        return matrix

    def transform(self, query: str) -> np.ndarray:
        tokens = self.tokenize(query)
        vec = np.zeros((1, len(self.vocab)))
        counts = Counter(tokens)
        length = len(tokens) or 1

        for word, count in counts.items():
            if word in self.vocab:
                col_idx = self.vocab[word]
                tf = count / length
                vec[0, col_idx] = tf * self.idf[word]

        norm = np.linalg.norm(vec[0])
        if norm > 0:
            vec[0] /= norm
        return vec


class RAGEngine:
    """RAG Document Ingestion, Embedding, and Retrieval System."""

    def __init__(self, docs_dir: Path = DOCS_DIR):
        self.docs_dir = docs_dir
        self.chunks: List[RAGDocumentChunk] = []
        self.vectorizer = None
        self.tfidf_matrix = None
        self.diagnostics: Dict[str, Any] = {
            "discovered_files": [],
            "extracted_files": [],
            "failed_files": [],
            "ocr_required_files": [],
            "last_indexed": None,
            "total_chunks": 0,
        }
        self.load_or_index_documents()

    def parse_txt(self, file_path: Path) -> List[RAGDocumentChunk]:
        """Parse TXT or Markdown file into clean chunks."""
        chunks = []
        try:
            try:
                with open(file_path, "r", encoding="utf-8") as f:
                    content = f.read()
            except UnicodeDecodeError:
                with open(file_path, "r", encoding="latin-1", errors="replace") as f:
                    content = f.read()

            content = clean_extracted_text(content)
            filename = file_path.name
            paragraphs = [p.strip() for p in content.split("\n\n") if p.strip()]

            chunk_idx = 1
            for para in paragraphs:
                if len(para) < 20:
                    continue
                # Split oversized paragraphs into sub-chunks (~700 chars)
                if len(para) > 1000:
                    sub_paras = [p.strip() for p in para.split("\n") if len(p.strip()) >= 20]
                    for sub in sub_paras:
                        chunks.append(
                            RAGDocumentChunk(
                                chunk_id=f"{filename}_c{chunk_idx}",
                                text=sub,
                                filename=filename,
                                page_number=1,
                                section=f"Section {chunk_idx}",
                                file_type=file_path.suffix.lower(),
                                relative_path=str(file_path.relative_to(DATA_DIR)) if DATA_DIR in file_path.parents else filename,
                            )
                        )
                        chunk_idx += 1
                else:
                    chunks.append(
                        RAGDocumentChunk(
                            chunk_id=f"{filename}_c{chunk_idx}",
                            text=para,
                            filename=filename,
                            page_number=1,
                            section=f"Section {chunk_idx}",
                            file_type=file_path.suffix.lower(),
                            relative_path=str(file_path.relative_to(DATA_DIR)) if DATA_DIR in file_path.parents else filename,
                        )
                    )
                    chunk_idx += 1
        except Exception as e:
            logger.error(f"Error parsing text file {file_path}: {e}")
        return chunks

    def parse_pdf(self, file_path: Path) -> List[RAGDocumentChunk]:
        """Parse PDF file into page-preserved chunks using pypdf with spacing repair and OCR check."""
        chunks = []
        try:
            import pypdf
            reader = pypdf.PdfReader(str(file_path))
            filename = file_path.name
            total_text_len = 0
            page_chunks = []

            for page_idx, page in enumerate(reader.pages):
                raw_text = page.extract_text() or ""
                cleaned = clean_extracted_text(raw_text)
                total_text_len += len(cleaned)

                if len(cleaned) < 20:
                    continue

                page_num = page_idx + 1
                paras = [p.strip() for p in cleaned.split("\n\n") if len(p.strip()) >= 20]
                if not paras:
                    paras = [p.strip() for p in cleaned.split("\n") if len(p.strip()) >= 20]
                if not paras:
                    paras = [cleaned]

                for sub_idx, para in enumerate(paras):
                    chunk_id = f"{filename}_pg{page_num}_s{sub_idx+1}"
                    page_chunks.append(
                        RAGDocumentChunk(
                            chunk_id=chunk_id,
                            text=para,
                            filename=filename,
                            page_number=page_num,
                            section=f"Page {page_num}",
                            file_type=".pdf",
                            relative_path=str(file_path.relative_to(DATA_DIR)) if DATA_DIR in file_path.parents else filename,
                        )
                    )

            if total_text_len < 20 and len(reader.pages) > 0:
                logger.warning(f"PDF {file_path.name} contains no extractable text; requires OCR.")
                if file_path.name not in self.diagnostics["ocr_required_files"]:
                    self.diagnostics["ocr_required_files"].append(file_path.name)
            else:
                chunks = page_chunks
        except Exception as e:
            logger.error(f"Error parsing PDF {file_path}: {e}")
        return chunks

    def parse_docx(self, file_path: Path) -> List[RAGDocumentChunk]:
        """Parse DOCX file into paragraph chunks using python-docx or pure-Python XML extraction."""
        chunks = []
        try:
            filename = file_path.name
            paras = []

            # 1. Try python-docx if installed
            try:
                import docx
                doc = docx.Document(str(file_path))
                paras = [clean_extracted_text(p.text.strip()) for p in doc.paragraphs if len(p.text.strip()) >= 20]
            except Exception:
                paras = []

            # 2. Pure-Python fallback using zipfile & ElementTree (zero dependency)
            if not paras:
                import zipfile
                import xml.etree.ElementTree as ET
                with zipfile.ZipFile(str(file_path)) as z:
                    xml_content = z.read("word/document.xml")
                tree = ET.fromstring(xml_content)
                for node in tree.iter("{http://schemas.openxmlformats.org/wordprocessingml/2006/main}p"):
                    txt = "".join(n.text for n in node.iter("{http://schemas.openxmlformats.org/wordprocessingml/2006/main}t") if n.text)
                    cleaned = clean_extracted_text(txt.strip())
                    if len(cleaned) >= 20:
                        paras.append(cleaned)

            for idx, para in enumerate(paras):
                chunk_id = f"{filename}_p{idx+1}"
                chunks.append(
                    RAGDocumentChunk(
                        chunk_id=chunk_id,
                        text=para,
                        filename=filename,
                        page_number=1,
                        section=f"Paragraph {idx+1}",
                        file_type=".docx",
                        relative_path=str(file_path.relative_to(DATA_DIR)) if DATA_DIR in file_path.parents else filename,
                    )
                )
        except Exception as e:
            logger.error(f"Error parsing DOCX {file_path}: {e}")
        return chunks

    def parse_doc(self, file_path: Path) -> List[RAGDocumentChunk]:
        """Parse legacy DOC file with binary text extraction fallback or clear reporting."""
        chunks = []
        try:
            filename = file_path.name
            with open(file_path, "rb") as f:
                raw_bytes = f.read()

            # Extract printable ASCII/UTF-8 strings
            text_fragments = re.findall(rb"[\x20-\x7E\t\r\n]{4,}", raw_bytes)
            decoded_text = " ".join([frag.decode("ascii", errors="ignore") for frag in text_fragments])
            cleaned = clean_extracted_text(decoded_text)

            if len(cleaned) >= 50:
                chunks.append(
                    RAGDocumentChunk(
                        chunk_id=f"{filename}_doc1",
                        text=cleaned[:2000],
                        filename=filename,
                        page_number=1,
                        section="Legacy DOC Content",
                        file_type=".doc",
                        relative_path=str(file_path.relative_to(DATA_DIR)) if DATA_DIR in file_path.parents else filename,
                    )
                )
            else:
                logger.warning(f"Legacy DOC {filename} requires external antiword or Word conversion.")
                self.diagnostics["failed_files"].append({
                    "filename": filename,
                    "reason": "Legacy binary .doc format requires conversion to .docx or text"
                })
        except Exception as e:
            logger.error(f"Error parsing legacy DOC {file_path}: {e}")
        return chunks

    def parse_csv(self, file_path: Path) -> List[RAGDocumentChunk]:
        """Parse CSV document into row/section chunks."""
        chunks = []
        try:
            import pandas as pd
            df = pd.read_csv(file_path)
            filename = file_path.name

            for idx, row in df.iterrows():
                row_str = ", ".join([f"{col}: {val}" for col, val in row.items() if pd.notna(val)])
                cleaned = clean_extracted_text(row_str)
                if len(cleaned) >= 15:
                    chunk_id = f"{filename}_row{idx+1}"
                    chunks.append(
                        RAGDocumentChunk(
                            chunk_id=chunk_id,
                            text=cleaned,
                            filename=filename,
                            page_number=1,
                            section=f"Row {idx+1}",
                            file_type=".csv",
                            relative_path=str(file_path.relative_to(DATA_DIR)) if DATA_DIR in file_path.parents else filename,
                        )
                    )
        except Exception as e:
            logger.error(f"Error parsing CSV document {file_path}: {e}")
        return chunks

    def ingest_all_documents(self) -> List[RAGDocumentChunk]:
        """Crawls data directory and subdirectories recursively for all supported academic files."""
        all_chunks: List[RAGDocumentChunk] = []
        self.diagnostics = {
            "discovered_files": [],
            "extracted_files": [],
            "failed_files": [],
            "ocr_required_files": [],
            "last_indexed": datetime.now().isoformat(),
            "total_chunks": 0,
        }

        # Directories to crawl: docs, materials, and data root
        target_dirs = [DATA_DIR / "docs", DATA_DIR / "materials", DATA_DIR]
        processed_resolved: Set[Path] = set()

        for target_dir in target_dirs:
            if not target_dir.exists():
                continue
            for file_path in target_dir.rglob("*.*"):
                resolved = file_path.resolve()
                if resolved in processed_resolved or file_path.is_dir():
                    continue

                # Skip system / database files
                fname = file_path.name
                if fname in {"vector_store.json", "escalations.db", "synthetic_exam_schedule.csv", "synthetic_course_details.csv"}:
                    continue
                if "__pycache__" in str(file_path) or ".git" in str(file_path):
                    continue

                ext = file_path.suffix.lower()
                if ext not in {".txt", ".pdf", ".docx", ".doc", ".csv", ".md", ".markdown"}:
                    continue

                processed_resolved.add(resolved)
                self.diagnostics["discovered_files"].append(fname)

                try:
                    chunks = []
                    if ext in {".txt", ".md", ".markdown"}:
                        chunks = self.parse_txt(file_path)
                    elif ext == ".pdf":
                        chunks = self.parse_pdf(file_path)
                    elif ext == ".docx":
                        chunks = self.parse_docx(file_path)
                    elif ext == ".doc":
                        chunks = self.parse_doc(file_path)
                    elif ext == ".csv":
                        chunks = self.parse_csv(file_path)

                    if chunks:
                        all_chunks.extend(chunks)
                        self.diagnostics["extracted_files"].append(fname)
                    else:
                        if fname not in self.diagnostics["ocr_required_files"]:
                            self.diagnostics["failed_files"].append({
                                "filename": fname,
                                "reason": "No readable text extracted (empty or unsupported binary)"
                            })
                except Exception as e:
                    logger.error(f"Error parsing document {fname}: {e}")
                    self.diagnostics["failed_files"].append({
                        "filename": fname,
                        "reason": str(e)
                    })

        self.chunks = all_chunks
        self.diagnostics["total_chunks"] = len(all_chunks)
        self.build_vector_index()
        self.save_vector_store()
        return self.chunks

    def build_vector_index(self):
        """Builds TF-IDF Vectorizer Matrix over ingested chunks with stemmed tokenization."""
        if not self.chunks:
            self.vectorizer = None
            self.tfidf_matrix = None
            return

        corpus = [c.text for c in self.chunks]
        if SKLEARN_AVAILABLE:
            try:
                self.vectorizer = TfidfVectorizer(
                    tokenizer=tokenize_stemmed,
                    token_pattern=None,
                    ngram_range=(1, 2),
                    stop_words="english",
                    max_features=10000,
                    sublinear_tf=True,
                )
                self.tfidf_matrix = self.vectorizer.fit_transform(corpus)
                return
            except Exception as e:
                logger.warning(f"Sklearn vectorizer failed: {e}. Falling back to PurePythonTFIDF.")

        self.vectorizer = PurePythonTFIDF()
        self.tfidf_matrix = self.vectorizer.fit_transform(corpus)

    def save_vector_store(self):
        """Persists chunk store metadata and diagnostics to disk."""
        try:
            data = {
                "last_indexed": self.diagnostics.get("last_indexed") or datetime.now().isoformat(),
                "diagnostics": self.diagnostics,
                "chunks": [c.to_dict() for c in self.chunks],
            }
            with open(VECTOR_STORE_PATH, "w", encoding="utf-8") as f:
                json.dump(data, f, indent=2)
        except Exception as e:
            logger.error(f"Failed to save vector store: {e}")

    def load_or_index_documents(self):
        """Loads cached vector store or re-indexes documents if missing or empty."""
        if VECTOR_STORE_PATH.exists():
            try:
                with open(VECTOR_STORE_PATH, "r", encoding="utf-8") as f:
                    data = json.load(f)

                # Check schema (dictionary with chunks vs legacy list)
                if isinstance(data, dict) and "chunks" in data:
                    chunks_data = data.get("chunks", [])
                    self.diagnostics = data.get("diagnostics", self.diagnostics)
                elif isinstance(data, list):
                    chunks_data = data
                else:
                    chunks_data = []

                if chunks_data:
                    self.chunks = [RAGDocumentChunk.from_dict(d) for d in chunks_data]
                    self.build_vector_index()
                    return
            except Exception as e:
                logger.warning(f"Error loading vector store: {e}. Re-indexing documents.")

        self.ingest_all_documents()

    def search(
        self,
        query: str,
        top_k: int = 4,
        target_subject: Optional[str] = None,
        target_unit: Optional[int] = None,
    ) -> Dict[str, Any]:
        """Retrieves top_k most relevant chunks using stemmed hybrid retrieval and subject/unit boosts."""
        if not query or not query.strip():
            return {"status": "error", "message": "Query cannot be empty.", "results": [], "count": 0}

        if not self.chunks or self.vectorizer is None or self.tfidf_matrix is None:
            self.ingest_all_documents()

        if not self.chunks or self.vectorizer is None or self.tfidf_matrix is None:
            return {
                "status": "no_results",
                "message": "No academic documents have been ingested yet into the RAG vector store.",
                "results": [],
                "count": 0,
            }

        q_clean = clean_extracted_text(query)
        q_lower = q_clean.lower()

        # Subject detection
        detected_subject = target_subject
        if not detected_subject:
            dbms_keywords = ["dbms", "database", "sql", "normalization", "relational", "er diagram", "erd", "b-tree", "b+ tree", "acid", "concurrency", "2pl", "cs301", "transaction"]
            java_keywords = ["java", "jvm", "jre", "jdk", "bytecode", "multithreading", "inheritance", "polymorphism", "collections", "jdbc", "swing", "java101", "try-catch", "arraylist"]
            m3_keywords = ["m3", "math", "calculus", "vector", "integration", "differential", "series"]
            has_dbms = any(kw in q_lower for kw in dbms_keywords)
            has_java = any(kw in q_lower for kw in java_keywords)
            has_m3 = any(kw in q_lower for kw in m3_keywords)
            if has_dbms and not has_java:
                detected_subject = "dbms"
            elif has_java and not has_dbms:
                detected_subject = "java"
            elif has_m3:
                detected_subject = "mathematics"

        # Unit detection
        detected_unit = target_unit
        if not detected_unit:
            unit_match = re.search(r"unit\s*([1-5])\b", q_lower)
            if unit_match:
                detected_unit = int(unit_match.group(1))

        query_stems = set(tokenize_stemmed(q_clean))

        try:
            if SKLEARN_AVAILABLE and hasattr(self.vectorizer, "fit_transform") and not isinstance(self.vectorizer, PurePythonTFIDF):
                query_vec = self.vectorizer.transform([q_clean])
                similarities = cosine_similarity(query_vec, self.tfidf_matrix).flatten()
            else:
                query_vec = self.vectorizer.transform(q_clean)
                similarities = np.dot(self.vectorizer.doc_vectors, query_vec.T).flatten()

            top_indices = np.argsort(similarities)[::-1]
            results = []
            MIN_SIMILARITY_THRESHOLD = 0.065

            for idx in top_indices:
                score = float(similarities[idx])
                chunk = self.chunks[idx]
                fname_lower = chunk.filename.lower()
                chunk_text_lower = chunk.text.lower()

                # Content stem overlap check
                chunk_stems = set(tokenize_stemmed(chunk.text[:500] + " " + chunk.filename))
                overlap_count = len(query_stems.intersection(chunk_stems))
                if len(query_stems) > 0 and overlap_count == 0:
                    continue  # Zero word/stem overlap with chunk

                # Check overlap ratio for multi-word queries to filter stray single-word hits
                if len(query_stems) >= 4 and overlap_count < 2:
                    continue
                if len(query_stems) >= 3 and (overlap_count / len(query_stems)) < 0.30:
                    continue

                # Cross-contamination filtering
                if detected_subject == "dbms" and "java" in fname_lower:
                    score *= 0.5
                elif detected_subject == "java" and "dbms" in fname_lower:
                    score *= 0.5
                elif detected_subject and chunk.subject == detected_subject:
                    score *= 1.25

                # Unit relevance boost
                if detected_unit:
                    unit_token = f"unit{detected_unit}"
                    unit_text_token = f"unit {detected_unit}"
                    if (unit_token in fname_lower) or (unit_text_token in chunk_text_lower) or (chunk.unit == detected_unit):
                        score *= 1.35
                    else:
                        score *= 0.85

                if score < MIN_SIMILARITY_THRESHOLD:
                    continue

                results.append({
                    "chunk_id": chunk.chunk_id,
                    "text": chunk.text,
                    "filename": chunk.filename,
                    "page_number": chunk.page_number,
                    "section": chunk.section,
                    "similarity_score": round(score, 4),
                    "source_citation": chunk.source_citation,
                    "subject": chunk.subject,
                    "unit": chunk.unit,
                })

                if len(results) >= top_k:
                    break

            if not results:
                return {
                    "status": "no_results",
                    "message": f"No relevant information found in college documents for query '{query}'.",
                    "results": [],
                    "count": 0,
                    "detected_subject": detected_subject,
                    "detected_unit": detected_unit,
                }

            return {
                "status": "success",
                "message": f"Retrieved {len(results)} relevant document passage(s).",
                "results": results,
                "count": len(results),
                "detected_subject": detected_subject,
                "detected_unit": detected_unit,
            }
        except Exception as e:
            logger.error(f"RAG search error: {e}")
            return {"status": "error", "message": f"RAG Search Execution Error: {str(e)}", "results": [], "count": 0}

    def get_diagnostics(self) -> Dict[str, Any]:
        """Returns comprehensive diagnostic status of RAG index and document ingestion."""
        return {
            "status": "ok",
            "total_files_discovered": len(self.diagnostics.get("discovered_files", [])),
            "successfully_extracted_files": len(self.diagnostics.get("extracted_files", [])),
            "failed_files": self.diagnostics.get("failed_files", []),
            "ocr_required_files": self.diagnostics.get("ocr_required_files", []),
            "total_indexed_chunks": len(self.chunks),
            "last_indexed_time": self.diagnostics.get("last_indexed"),
            "active_index_populated": len(self.chunks) > 0 and self.vectorizer is not None,
            "supported_formats": [".pdf", ".txt", ".docx", ".doc", ".csv", ".md"],
        }

    def list_documents(self) -> List[Dict[str, Any]]:
        """Returns metadata for all documents in the Knowledge Hub."""
        docs = []
        target_dirs = [DATA_DIR / "docs", DATA_DIR / "materials", DATA_DIR]
        processed = set()

        for target_dir in target_dirs:
            if not target_dir.exists():
                continue
            for file_path in sorted(target_dir.rglob("*.*")):
                if file_path.is_dir() or file_path.name in processed:
                    continue
                if file_path.name in {"vector_store.json", "escalations.db", "synthetic_exam_schedule.csv", "synthetic_course_details.csv"}:
                    continue
                if "__pycache__" in str(file_path) or ".git" in str(file_path):
                    continue

                ext = file_path.suffix.lower()
                if ext not in {".txt", ".pdf", ".docx", ".doc", ".csv", ".md", ".markdown"}:
                    continue

                processed.add(file_path.name)
                try:
                    stat = file_path.stat()
                    chunk_count = sum(1 for c in self.chunks if c.filename == file_path.name)
                    docs.append({
                        "filename": file_path.name,
                        "size_bytes": stat.st_size,
                        "size_kb": round(stat.st_size / 1024, 2),
                        "last_modified": stat.st_mtime,
                        "chunk_count": chunk_count,
                        "status": "Indexed" if chunk_count > 0 else "Pending",
                        "extension": ext,
                    })
                except Exception as e:
                    logger.error(f"Error reading doc stat for {file_path}: {e}")
        return docs

    def preview_document(self, filename: str, max_chars: int = 8000) -> Dict[str, Any]:
        """Returns text preview of an academic document."""
        # Find document across data directories
        target_path = None
        for target_dir in [DATA_DIR / "docs", DATA_DIR / "materials", DATA_DIR]:
            candidate = target_dir / filename
            if candidate.exists():
                target_path = candidate
                break
            # Check recursively
            for match in target_dir.rglob(filename):
                if match.is_file():
                    target_path = match
                    break
            if target_path:
                break

        if not target_path or not target_path.exists():
            return {"status": "error", "message": f"Document '{filename}' not found."}

        ext = target_path.suffix.lower()
        try:
            if ext in {".txt", ".md", ".markdown"}:
                with open(target_path, "r", encoding="utf-8", errors="replace") as f:
                    content = f.read(max_chars)
                return {"status": "success", "filename": filename, "content": content, "format": "text"}
            elif ext == ".pdf":
                import pypdf
                reader = pypdf.PdfReader(str(target_path))
                pages_text = []
                for p in reader.pages[:10]:
                    txt = p.extract_text()
                    if txt:
                        pages_text.append(clean_extracted_text(txt))
                full = "\n\n--- PAGE BREAK ---\n\n".join(pages_text)[:max_chars]
                return {"status": "success", "filename": filename, "content": full or "PDF contains no extractable text.", "format": "pdf"}
            elif ext == ".docx":
                chunks = self.parse_docx(target_path)
                full = "\n\n".join(c.text for c in chunks)[:max_chars]
                return {"status": "success", "filename": filename, "content": full or "DOCX document is empty.", "format": "docx"}
            elif ext == ".csv":
                with open(target_path, "r", encoding="utf-8", errors="replace") as f:
                    content = f.read(max_chars)
                return {"status": "success", "filename": filename, "content": content, "format": "csv"}
            else:
                return {"status": "error", "message": f"Preview not available for format '{ext}'."}
        except Exception as e:
            return {"status": "error", "message": f"Failed to preview document: {str(e)}"}

    def delete_document(self, filename: str) -> Dict[str, Any]:
        """Deletes a document from disk and purges its chunks from the vector index."""
        target_path = None
        for target_dir in [DATA_DIR / "docs", DATA_DIR / "materials", DATA_DIR]:
            candidate = target_dir / filename
            if candidate.exists():
                target_path = candidate
                break

        file_deleted = False
        if target_path and target_path.exists():
            try:
                target_path.unlink()
                file_deleted = True
            except Exception as e:
                logger.error(f"Failed to delete file {filename}: {e}")
                return {"status": "error", "message": f"Failed to delete file: {str(e)}"}

        prev_count = len(self.chunks)
        self.chunks = [c for c in self.chunks if c.filename != filename]
        removed_count = prev_count - len(self.chunks)

        self.build_vector_index()
        self.save_vector_store()

        return {
            "status": "success",
            "message": f"Document '{filename}' deleted and {removed_count} chunk(s) removed from vector index.",
            "filename": filename,
            "file_deleted": file_deleted,
            "remaining_chunks": len(self.chunks),
        }

    def reindex_all_documents(self) -> Dict[str, Any]:
        """Re-crawls and re-indexes all documents safely without duplicate chunks."""
        chunks = self.ingest_all_documents()
        return {
            "status": "success",
            "message": f"Successfully re-indexed all college documents. Total indexed chunks: {len(chunks)}.",
            "total_chunks": len(chunks),
            "diagnostics": self.get_diagnostics(),
        }


# Singleton RAG instance
_rag_instance: Optional[RAGEngine] = None


def get_rag_engine() -> RAGEngine:
    global _rag_instance
    if _rag_instance is None:
        _rag_instance = RAGEngine()
    return _rag_instance
