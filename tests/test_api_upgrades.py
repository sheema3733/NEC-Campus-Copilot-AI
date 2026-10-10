import unittest
from fastapi.testclient import TestClient
from backend.main import app

class TestAPIUpgrades(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.client = TestClient(app)
        cls.test_email = "test_student_api@nec.edu"

    def test_materials_list(self):
        """Verify GET /materials/list returns all 10 DBMS and Java units."""
        response = self.client.get("/materials/list")
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertEqual(data["status"], "success")
        self.assertEqual(data["count"], 10)
        slugs = [m["slug"] for m in data["materials"]]
        self.assertEqual(slugs.count("dbms"), 5)
        self.assertEqual(slugs.count("java"), 5)

    def test_material_preview(self):
        """Verify GET /materials/preview returns genuine unit content."""
        response = self.client.get("/materials/preview?subject=dbms&unit=1")
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertEqual(data["status"], "success")
        self.assertEqual(data["subject"], "Database Management Systems")
        self.assertIn("ER", data["content"])

    def test_material_download_pdf_and_txt(self):
        """Verify GET /materials/download returns valid downloadable files."""
        # PDF download
        res_pdf = self.client.get("/materials/download?subject=java&unit=1&format=pdf")
        self.assertEqual(res_pdf.status_code, 200)
        self.assertTrue(len(res_pdf.content) > 100)

        # TXT download
        res_txt = self.client.get("/materials/download?subject=dbms&unit=3&format=txt")
        self.assertEqual(res_txt.status_code, 200)
        self.assertIn("NORMALIZATION", res_txt.text.upper())

    def test_conversation_lifecycle(self):
        """Verify create, list, rename, and delete conversation flow with authorization."""
        # 1. Create conversation
        res = self.client.post("/conversations", json={
            "email": self.test_email,
            "title": "DBMS Revision Session"
        })
        self.assertEqual(res.status_code, 200)
        conv = res.json()["conversation"]
        conv_id = conv["id"]
        self.assertEqual(conv["title"], "DBMS Revision Session")

        # 2. List conversations
        res_list = self.client.get(f"/conversations?email={self.test_email}")
        self.assertEqual(res_list.status_code, 200)
        conv_ids = [c["id"] for c in res_list.json()["conversations"]]
        self.assertIn(conv_id, conv_ids)

        # 3. Get messages (empty initially)
        res_msgs = self.client.get(f"/conversations/{conv_id}/messages?email={self.test_email}")
        self.assertEqual(res_msgs.status_code, 200)
        self.assertIsInstance(res_msgs.json()["messages"], list)

        # 4. Rename conversation
        res_rename = self.client.patch(f"/conversations/{conv_id}", json={
            "email": self.test_email,
            "title": "Renamed DBMS Session"
        })
        self.assertEqual(res_rename.status_code, 200)

        # 5. Unauthorized rename fails
        res_unauth = self.client.patch(f"/conversations/{conv_id}", json={
            "email": "different_student@nec.edu",
            "title": "Hacked Title"
        })
        self.assertEqual(res_unauth.status_code, 404)

        # 6. Delete conversation
        res_del = self.client.delete(f"/conversations/{conv_id}?email={self.test_email}")
        self.assertEqual(res_del.status_code, 200)

        # 7. Verify deletion persists
        res_list_after = self.client.get(f"/conversations?email={self.test_email}")
        conv_ids_after = [c["id"] for c in res_list_after.json()["conversations"]]
        self.assertNotIn(conv_id, conv_ids_after)

    def test_student_confirmed_escalation(self):
        """Verify student-approved ticket creation flow."""
        res = self.client.post("/escalations/confirm", json={
            "student_question": "Can I get an extension for the CS301 lab submission?",
            "reason": "Medical leave exemption request",
            "subject": "DBMS",
            "topic": "Lab Submission Extension",
            "context_notes": "Submitted medical certificate copy.",
            "student_name": "Test Student",
            "email": self.test_email,
            "mobile": "9999888877"
        })
        self.assertEqual(res.status_code, 200)
        data = res.json()
        ticket_id = data["ticket_id"]
        self.assertTrue(ticket_id.startswith("ESC-"))

        # Verify visible in student tickets
        res_stu = self.client.get(f"/student-tickets?email={self.test_email}")
        self.assertEqual(res_stu.status_code, 200)
        stu_tickets = [t["ticket_id"] for t in res_stu.json()["tickets"]]
        self.assertIn(ticket_id, stu_tickets)

        # Verify visible in Admin escalations
        res_admin = self.client.get("/escalations")
        self.assertEqual(res_admin.status_code, 200)
        admin_tickets = [t["ticket_id"] for t in res_admin.json()["tickets"]]
        self.assertIn(ticket_id, admin_tickets)

    def test_admin_document_management(self):
        """Verify Admin Knowledge Hub listing, previewing, and re-indexing."""
        res_list = self.client.get("/admin/documents")
        self.assertEqual(res_list.status_code, 200)
        self.assertGreater(res_list.json()["count"], 0)

        # Preview document
        res_prev = self.client.get("/admin/documents/dbms_unit1_material.txt/preview")
        self.assertEqual(res_prev.status_code, 200)
        self.assertEqual(res_prev.json()["status"], "success")

        # Re-index
        res_reindex = self.client.post("/admin/documents/reindex")
        self.assertEqual(res_reindex.status_code, 200)
        self.assertEqual(res_reindex.json()["status"], "success")

if __name__ == "__main__":
    unittest.main()
