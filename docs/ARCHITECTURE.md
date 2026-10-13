# NEC Campus Copilot AI — Architecture Documentation

## System Topology & Micro-Services
- **Core Agent Loop:** Groq Tool Calling (`openai/gpt-oss-20b`) with fallbacks.
- **RAG Subsystem:** Dense-sparse hybrid indexing with TF-IDF, BM25, and cosine similarity.
- **Academic Catalog:** 8 engineering disciplines (CSE, AIML, DS, ECE, EEE, MECH, CIVIL, IT), BSH, and open electives.
- **Examination Engine:** Autonomous bylaws, 10-point GPA calculations, attendance condonation, and hall ticket engine.
- **Timetable & Logistics:** Constraint propagation scheduling, 90-day instructional calendar, bus routing.
- **Security & RBAC:** Multi-tier role guards (Student, Faculty, Advisor, HOD, Dean, AdminVST), tamper-evident audit logs.
