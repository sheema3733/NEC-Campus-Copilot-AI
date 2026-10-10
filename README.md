# NEC Campus Copilot AI — Student Academic Support Agent

**Narasaraopeta Engineering College (Autonomous), Andhra Pradesh**  
*AI-Powered Agentic Academic Assistance, RAG Knowledge Base, Multi-Unit Study Hub, Persistent Chat Memory & Student-Approved Human Escalation*

---

## 🌟 Overview & Key Capabilities

**NEC Campus Copilot AI** is a production-grade academic assistant designed for students and administration of Narasaraopeta Engineering College (Autonomous), Andhra Pradesh. It combines genuine **Groq Tool Calling** (`openai/gpt-oss-20b`), **RAG Document Vector Retrieval**, **Persistent SQLite Conversation Memory**, **Interactive 3D Study Hub**, and a **Student-Approved Human Escalation Workflow**.

---

### 🚀 Key Upgrades & Features

1. **Complete 5-Unit Academic Materials (DBMS & Java)**:
   - **Database Management Systems (CS301)**:
     - Unit 1: ER Modeling, Conceptual Design, Weak Entities & Schema Mapping
     - Unit 2: Relational Model, Relational Algebra (σ, π, ⨝) & SQL Operations
     - Unit 3: Normalization (1NF, 2NF, 3NF, BCNF) & Dependency Preservation
     - Unit 4: Transaction Processing, ACID Properties, 2PL & Concurrency Control
     - Unit 5: Storage Structures, File Organization & B+ Tree Indexing
   - **Java Programming (JAVA101 / CS202)**:
     - Unit 1: Java Fundamentals, JVM Architecture, OOP Principles & Control Flow
     - Unit 2: Inheritance, Dynamic Method Dispatch, Packages & Interfaces
     - Unit 3: Exception Handling (try-catch-finally) & Multithreading Synchronization
     - Unit 4: Java Collections Framework (List, Set, Map) & I/O Streams
     - Unit 5: GUI Programming (AWT/Swing Events) & JDBC Database Connectivity
   - **In-Browser Preview & Direct Downloads**:
     - Direct in-chat preview modal with formatted conceptual breakdowns, SQL/Java code snippets, and exam questions.
     - Direct PDF download (`/materials/download?subject=...&unit=...&format=pdf`) and plain text download.

2. **Student-Approved Human Escalation Workflow**:
   - **Confidence Evaluation**: When the agent cannot find reliable evidence or student requests special exemptions, it offers human assistance:
     > *"I couldn't find enough reliable information in the available study materials to answer this question accurately. Would you like to send this question to the academic support team?"*
   - **Explicit Choice**:
     - **[Send to Admin]**: Opens a ticket confirmation dialog displaying question, identified subject/topic, context, and optional notes for staff.
     - **[Continue Chat]**: Dismisses the suggestion without creating any database records.
   - **Zero Automatic Creation**: Tickets reach administrative staff **only** after explicit student confirmation.
   - **Persisted Tracking**: Returns unique Ticket ID (e.g. `ESC-202610...`), visible under **My Queries & Tickets** and the **Admin Portal**.

3. **Persistent Student Chat History & Continuation**:
   - Backed by SQLite tables (`conversations` and `chat_messages`).
   - Automatically saves and restores messages and context.
   - Conversation sessions listed in the chat sidebar.
   - **+ New Chat**: Start clean conversation sessions at any time.
   - **Resume**: Click any past session to continue conversation seamlessly.
   - **Rename**: Edit conversation titles to meaningful topics.
   - **Delete**: Confirmation dialog ensures no accidental data loss; permanently purges from SQLite.
   - Strict student authorization: students can only access their own conversations.

4. **Interactive Study Hub**:
   - Topic-specific synthesis avoiding cross-contamination (e.g., DBMS questions never return Java notes).
   - 5 Study Actions:
     - 💡 **Explain Simply**: Core concept breakdown for quick learning.
     - 🛠️ **Practical Example**: Real-world engineering architecture & queries.
     - 📝 **5 Practice Questions**: Exam-oriented practice with answer keys.
     - 🎴 **3D Interactive Flashcards**: Flip-card concept revision widget.
     - 📌 **Summarize Notes**: Bullet-point revision summaries.
   - Topic Validation: If a topic is unverified, offers student-approved human escalation.

5. **Strict Role Isolation**:
   - **Student Dashboard**: Overview, Academic Assistant, Interactive Study Hub, My Queries & Notifications. (No student Knowledge Hub clutter).
   - **Admin Dashboard**: Escalation Tickets Management, Admin Knowledge Hub & Vector Ingestion, Overview. (No "Contact Admin (VST)" button for Admin).

6. **Fully Responsive Across All Viewports**:
   - Optimized for mobile (360px), tablet portrait/landscape (768px), laptop (1024px), and desktop (1440px).
   - Sliding collapsible navigation drawer on mobile with backdrop overlay.
   - Zero horizontal overflow, clean wrapped chat bubbles, responsive modals and tables.

---

## 📁 Architecture & File Structure

```
NEC_Campus_Copilot_AI/
├── backend/
│   ├── main.py                # FastAPI server: Chat, Materials, Conversations, Escalations, Admin Docs
│   ├── agent.py               # Groq LLM tool-calling agent, Unicode sanitization, Material router
│   ├── study_mode.py          # 5-action Study Mode generator with 5-unit DBMS & Java knowledge
│   ├── intent.py               # Conversational intent classifier (greetings, thanks)
│   ├── tools.py               # Groq JSON function tools (schedules, syllabi, courses, rules, tickets)
│   ├── rag.py                 # Ingestion, pure-Python / sklearn TF-IDF vectorizer, document preview & delete
│   ├── memory.py              # In-memory session context cache
│   ├── escalation.py          # SQLite persistence: users, tickets, conversations, chat messages, email logs
│   ├── data_loader.py         # CSV & text data parser
│   ├── config.py              # Configuration loader with safe fallbacks
│   ├── requirements.txt       # Python dependencies
│   ├── .env                   # Active environment configuration
│   ├── .env.example           # Environment template with placeholders
│   └── data/                  # Official NEC academic data
│       ├── docs/              # 10 unit materials (dbms_unit1-5, java_unit1-5) + official syllabi & rules
│       ├── materials/pdf/     # 10 compiled PDF documents for DBMS & Java
│       └── escalations.db     # SQLite relational database
├── frontend/
│   ├── src/
│   │   ├── App.jsx            # React dashboard (responsive layout, chat history, modals, study hub)
│   │   ├── App.css            # Responsive styles for 360px, 768px, 1024px, 1440px
│   │   └── main.jsx           # Vite entry point
│   ├── index.html             # Shell HTML
│   ├── package.json           # Frontend dependencies
│   └── vite.config.js         # Vite configuration
├── tests/
│   ├── test_agent.py          # Unit tests for multi-step agent loop
│   ├── test_api_upgrades.py   # Integration tests for conversation lifecycle, materials, escalations, docs
│   └── test_regression_fixes.py # Regression tests: schedule, courses, rules, intent, follow-up, tickets
└── README.md                  # System Documentation
```

---

## 🚀 Quickstart: Running Locally

### 1. Backend Setup & Startup
```bash
# In project root:
cd backend
python -m uvicorn backend.main:app --reload --port 8000
```
- Health Check: [http://localhost:8000/health](http://localhost:8000/health)
- API Docs: [http://localhost:8000/docs](http://localhost:8000/docs)

### 2. Frontend Setup & Startup
In a separate terminal:
```bash
cd frontend
npm install
npm run dev
```
- Student & Admin Portal: [http://localhost:5173](http://localhost:5173)

### 3. Logins
- **Student**: Register or log in with any email (e.g. `student@nec.edu`).
- **Admin**: Select "Admin (VST) Login" — Name: `VST`, Password: `577577`.

---

## 🧪 Running Automated Tests

Run all unit, integration, and regression tests:
```bash
# Core agent & new API endpoints test suite:
python -m pytest tests/test_agent.py tests/test_api_upgrades.py

# Multi-turn regression test suite:
python -m pytest tests/test_regression_fixes.py
```
*All tests pass with 100% green status.*
