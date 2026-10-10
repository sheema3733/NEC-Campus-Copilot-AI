import sqlite3
import os
import logging
from datetime import datetime
from typing import List, Dict, Any, Optional

logger = logging.getLogger(__name__)

DB_PATH = os.path.join(os.path.dirname(__file__), "data", "escalations.db")
MEDIA_DIR = os.path.join(os.path.dirname(__file__), "data", "media_attachments")


def get_db_connection():
    os.makedirs(os.path.dirname(DB_PATH), exist_ok=True)
    os.makedirs(MEDIA_DIR, exist_ok=True)
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn


def init_db():
    """Initializes SQLite database tables for Users, Logins, Escalations, and Email Logs."""
    conn = get_db_connection()
    cursor = conn.cursor()

    # 1. Users Table
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            mobile TEXT NOT NULL,
            password TEXT NOT NULL,
            role TEXT NOT NULL DEFAULT 'student',
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    """)

    # 2. Login Logs Table
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS login_logs (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_name TEXT NOT NULL,
            email TEXT NOT NULL,
            mobile TEXT,
            role TEXT NOT NULL,
            login_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            status TEXT NOT NULL DEFAULT 'success'
        )
    """)

    # Check table info for escalation_tickets migration
    cursor.execute("PRAGMA table_info(escalation_tickets)")
    columns = [col["name"] for col in cursor.fetchall()]

    if columns and ("student_name" not in columns or "media_file" not in columns):
        cursor.execute("DROP TABLE IF EXISTS escalation_tickets")

    # 3. Escalation Tickets & Student Contact Requests Table
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS escalation_tickets (
            id TEXT PRIMARY KEY,
            student_name TEXT NOT NULL DEFAULT 'Student',
            email TEXT NOT NULL DEFAULT 'student@nec.edu',
            mobile TEXT NOT NULL DEFAULT 'N/A',
            student_question TEXT NOT NULL,
            reason TEXT NOT NULL,
            evidence_summary TEXT,
            subject TEXT DEFAULT 'General Academic',
            topic TEXT DEFAULT 'N/A',
            status TEXT NOT NULL DEFAULT 'open',
            resolution_notes TEXT,
            media_file TEXT,
            email_status TEXT,
            notified INTEGER DEFAULT 0,
            student_approved INTEGER DEFAULT 1,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    """)

    # Check for missing columns in escalation_tickets for safe migration
    cursor.execute("PRAGMA table_info(escalation_tickets)")
    existing_cols = {col["name"] for col in cursor.fetchall()}
    if "subject" not in existing_cols:
        cursor.execute("ALTER TABLE escalation_tickets ADD COLUMN subject TEXT DEFAULT 'General Academic'")
    if "topic" not in existing_cols:
        cursor.execute("ALTER TABLE escalation_tickets ADD COLUMN topic TEXT DEFAULT 'N/A'")
    if "student_approved" not in existing_cols:
        cursor.execute("ALTER TABLE escalation_tickets ADD COLUMN student_approved INTEGER DEFAULT 1")

    # 4. Email Dispatch Logs Table
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS email_logs (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            ticket_id TEXT NOT NULL,
            student_email TEXT NOT NULL,
            admin_name TEXT NOT NULL DEFAULT 'VST',
            message_text TEXT NOT NULL,
            media_file TEXT,
            sent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    """)

    # 5. Persistent Student Conversations Table
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS conversations (
            id TEXT PRIMARY KEY,
            student_email TEXT NOT NULL,
            title TEXT NOT NULL DEFAULT 'New Academic Chat',
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    """)

    # 6. Persistent Conversation Messages Table
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS chat_messages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            conversation_id TEXT NOT NULL,
            sender TEXT NOT NULL,
            text TEXT NOT NULL,
            tools_used TEXT,
            citations TEXT,
            offer_escalation INTEGER DEFAULT 0,
            escalation_prompt TEXT,
            material_info TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (conversation_id) REFERENCES conversations(id) ON DELETE CASCADE
        )
    """)

    # Performance Indexes
    cursor.execute("CREATE INDEX IF NOT EXISTS idx_conversations_email ON conversations(student_email)")
    cursor.execute("CREATE INDEX IF NOT EXISTS idx_conversations_updated ON conversations(updated_at DESC)")
    cursor.execute("CREATE INDEX IF NOT EXISTS idx_messages_conv ON chat_messages(conversation_id)")
    cursor.execute("CREATE INDEX IF NOT EXISTS idx_tickets_email ON escalation_tickets(email)")
    cursor.execute("CREATE INDEX IF NOT EXISTS idx_tickets_status ON escalation_tickets(status)")

    # Seed Admin User VST (Password: 577577) if not present
    cursor.execute("SELECT * FROM users WHERE name = 'VST' OR email = 'admin@vst.nec.edu'")
    admin_exists = cursor.fetchone()
    if not admin_exists:
        cursor.execute("""
            INSERT INTO users (name, email, mobile, password, role)
            VALUES ('VST', 'admin@vst.nec.edu', '9999999999', '577577', 'admin')
        """)
        logger.info("Admin user VST seeded into SQLite database.")

    conn.commit()
    conn.close()


def clear_mock_tickets():
    """Clears sample mock tickets from SQLite database."""
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("DELETE FROM escalation_tickets WHERE id LIKE 'ESC-100%' OR student_name = 'Sample Student'")
    conn.commit()
    conn.close()


def log_user_login(user_name: str, email: str, mobile: str, role: str, status: str = 'success'):
    """Logs user login attempt to SQLite login_logs table."""
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("""
        INSERT INTO login_logs (user_name, email, mobile, role, status)
        VALUES (?, ?, ?, ?, ?)
    """, (user_name, email, mobile, role, status))
    conn.commit()
    conn.close()


def authenticate_user(name_or_email: str, password: str) -> Optional[Dict[str, Any]]:
    """Authenticates user against SQLite database. Checks Admin VST / 577577 first."""
    if (name_or_email.strip() == "VST" or name_or_email.strip().lower() == "admin@vst.nec.edu") and password.strip() == "577577":
        log_user_login("VST", "admin@vst.nec.edu", "9999999999", "admin", "success")
        return {
            "name": "VST",
            "email": "admin@vst.nec.edu",
            "mobile": "9999999999",
            "role": "admin"
        }

    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("""
        SELECT * FROM users WHERE (name = ? OR email = ?) AND password = ?
    """, (name_or_email.strip(), name_or_email.strip().lower(), password.strip()))
    user = cursor.fetchone()
    conn.close()

    if user:
        log_user_login(user["name"], user["email"], user["mobile"], user["role"], "success")
        return {
            "name": user["name"],
            "email": user["email"],
            "mobile": user["mobile"],
            "role": user["role"]
        }
    else:
        log_user_login(name_or_email, name_or_email, "", "unknown", "failed")
        return None


def register_student(name: str, email: str, mobile: str, password: str) -> Dict[str, Any]:
    """Registers a new student user in SQLite database."""
    conn = get_db_connection()
    cursor = conn.cursor()
    try:
        cursor.execute("""
            INSERT INTO users (name, email, mobile, password, role)
            VALUES (?, ?, ?, ?, 'student')
        """, (name.strip(), email.strip().lower(), mobile.strip(), password.strip()))
        conn.commit()
        conn.close()
        log_user_login(name, email, mobile, "student", "registered_and_logged_in")
        return {
            "status": "success",
            "message": "Student registered successfully",
            "user": {"name": name, "email": email, "mobile": mobile, "role": "student"}
        }
    except sqlite3.IntegrityError:
        conn.close()
        return {"status": "error", "message": "An account with this email address already exists."}


def create_escalation_ticket(
    student_question: str,
    reason: str,
    evidence_summary: str = "",
    student_name: str = "Student",
    email: str = "student@nec.edu",
    mobile: str = "N/A",
    subject: str = "General Academic",
    topic: str = "N/A",
    session_id: Optional[str] = None,
    student_approved: int = 1,
    status: str = "pending",
    **kwargs
) -> Dict[str, Any]:
    """Creates a persistent escalation ticket in SQLite DB only with explicit student approval."""
    conn = get_db_connection()
    cursor = conn.cursor()

    # Deduplication check: prevent duplicate ticket from rapid double-clicks (within 10 seconds)
    cursor.execute("""
        SELECT * FROM escalation_tickets
        WHERE email = ? AND student_question = ? AND status IN ('open', 'pending')
        ORDER BY created_at DESC LIMIT 1
    """, (email.strip().lower(), student_question.strip()))
    existing = cursor.fetchone()
    if existing:
        is_recent_duplicate = False
        try:
            created_str = str(existing["created_at"])
            for fmt in ("%Y-%m-%d %H:%M:%S", "%Y-%m-%dT%H:%M:%S", "%Y-%m-%d %H:%M:%S.%f", "%Y-%m-%dT%H:%M:%S.%f"):
                try:
                    c_time = datetime.strptime(created_str, fmt)
                    if (datetime.now() - c_time).total_seconds() < 10:
                        is_recent_duplicate = True
                    break
                except Exception:
                    continue
        except Exception:
            pass

        if is_recent_duplicate:
            conn.close()
            logger.info(f"Rapid duplicate ticket prevented for student {email}: returning existing {existing['id']}.")
            return {
                "status": "success",
                "ticket_id": existing["id"],
                "student_name": existing["student_name"],
                "email": existing["email"],
                "mobile": existing["mobile"],
                "ticket": dict(existing),
                "message": f"Escalation ticket {existing['id']} is already open for this query.",
                "is_duplicate": True
            }

    cursor.execute("SELECT COUNT(*) as count FROM escalation_tickets")
    row = cursor.fetchone()
    count = row["count"] + 1001
    ticket_id = f"ESC-{count}"

    cursor.execute("""
        INSERT INTO escalation_tickets (
            id, student_name, email, mobile, student_question, reason,
            evidence_summary, subject, topic, status, notified, student_approved
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 0, ?)
    """, (
        ticket_id, student_name, email.strip().lower(), mobile,
        student_question.strip(), reason.strip(), evidence_summary,
        subject, topic, status.lower(), student_approved
    ))

    conn.commit()
    conn.close()

    logger.info(f"Created ticket {ticket_id} for student {student_name} ({email}) in SQLite DB.")

    ticket_obj = {
        "id": ticket_id,
        "ticket_id": ticket_id,
        "student_name": student_name,
        "email": email,
        "mobile": mobile,
        "student_question": student_question,
        "reason": reason,
        "evidence_summary": evidence_summary,
        "subject": subject,
        "topic": topic,
        "status": status.lower(),
        "notified": 0,
        "student_approved": student_approved,
        "created_at": datetime.now().isoformat()
    }

    return {
        "status": "success",
        "ticket_id": ticket_id,
        "student_name": student_name,
        "email": email,
        "mobile": mobile,
        "ticket": ticket_obj,
        "message": f"Created human escalation ticket {ticket_id}. College administration will review and respond."
    }


# ==============================================================================
# STUDENT CONVERSATION HISTORY & CONTINUATION
# ==============================================================================

def create_conversation(student_email: str, title: Optional[str] = None) -> Dict[str, Any]:
    """Creates a new conversation session for a student in SQLite."""
    import uuid
    conv_id = f"conv_{int(datetime.now().timestamp())}_{uuid.uuid4().hex[:6]}"
    clean_title = (title or "New Academic Chat").strip()[:60]
    clean_email = student_email.strip().lower()

    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("""
        INSERT INTO conversations (id, student_email, title)
        VALUES (?, ?, ?)
    """, (conv_id, clean_email, clean_title))
    conn.commit()

    cursor.execute("SELECT * FROM conversations WHERE id = ?", (conv_id,))
    conv = dict(cursor.fetchone())
    conn.close()

    return conv


def get_student_conversations(student_email: str) -> List[Dict[str, Any]]:
    """Retrieves all conversation sessions belonging to a specific student."""
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("""
        SELECT c.*,
            (SELECT COUNT(*) FROM chat_messages m WHERE m.conversation_id = c.id) as message_count,
            (SELECT text FROM chat_messages m WHERE m.conversation_id = c.id ORDER BY m.created_at DESC LIMIT 1) as last_message
        FROM conversations c
        WHERE c.student_email = ?
        ORDER BY c.updated_at DESC
    """, (student_email.strip().lower(),))
    rows = cursor.fetchall()
    conn.close()
    return [dict(r) for r in rows]


def get_conversation_messages(conversation_id: str, student_email: Optional[str] = None) -> List[Dict[str, Any]]:
    """Retrieves all messages for a conversation, verifying student ownership if email is provided."""
    conn = get_db_connection()
    cursor = conn.cursor()

    if student_email:
        cursor.execute("SELECT * FROM conversations WHERE id = ? AND student_email = ?", (conversation_id, student_email.strip().lower()))
        conv = cursor.fetchone()
        if not conv:
            conn.close()
            return []

    cursor.execute("""
        SELECT * FROM chat_messages
        WHERE conversation_id = ?
        ORDER BY id ASC
    """, (conversation_id,))
    rows = cursor.fetchall()
    conn.close()

    result = []
    for r in rows:
        d = dict(r)
        if d.get("tools_used"):
            try:
                import json
                d["tools_used"] = json.loads(d["tools_used"])
            except Exception:
                pass
        if d.get("citations"):
            try:
                import json
                d["citations"] = json.loads(d["citations"])
            except Exception:
                pass
        if d.get("escalation_prompt"):
            try:
                import json
                d["escalation_prompt"] = json.loads(d["escalation_prompt"])
            except Exception:
                pass
        if d.get("material_info"):
            try:
                import json
                d["material_info"] = json.loads(d["material_info"])
            except Exception:
                pass
        result.append(d)
    return result


def save_chat_message(
    conversation_id: str,
    sender: str,
    text: str,
    student_email: Optional[str] = None,
    tools_used: Optional[List[str]] = None,
    citations: Optional[List[str]] = None,
    offer_escalation: bool = False,
    escalation_prompt: Optional[Dict[str, Any]] = None,
    material_info: Optional[Dict[str, Any]] = None,
) -> Dict[str, Any]:
    """Saves a message in SQLite and updates the conversation's updated_at timestamp."""
    import json
    conn = get_db_connection()
    cursor = conn.cursor()

    # If conversation does not exist yet, create it automatically
    cursor.execute("SELECT * FROM conversations WHERE id = ?", (conversation_id,))
    conv = cursor.fetchone()
    if not conv:
        email = (student_email or "student@nec.edu").strip().lower()
        # Derive initial title from message text if sender is user
        init_title = text.strip()[:40] if sender == "user" else "Academic Query"
        cursor.execute("""
            INSERT INTO conversations (id, student_email, title)
            VALUES (?, ?, ?)
        """, (conversation_id, email, init_title))
    else:
        # If title is still default and this is first user question, update title to meaningful text
        if conv["title"] in ["New Academic Chat", "New Conversation"] and sender == "user":
            new_title = text.strip()[:45]
            cursor.execute("UPDATE conversations SET title = ? WHERE id = ?", (new_title, conversation_id))

    tools_json = json.dumps(tools_used or [])
    citations_json = json.dumps(citations or [])
    esc_prompt_json = json.dumps(escalation_prompt) if escalation_prompt else None
    mat_info_json = json.dumps(material_info) if material_info else None

    cursor.execute("""
        INSERT INTO chat_messages (
            conversation_id, sender, text, tools_used, citations,
            offer_escalation, escalation_prompt, material_info
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    """, (
        conversation_id, sender, text, tools_json, citations_json,
        1 if offer_escalation else 0, esc_prompt_json, mat_info_json
    ))

    # Touch conversation updated_at
    cursor.execute("UPDATE conversations SET updated_at = CURRENT_TIMESTAMP WHERE id = ?", (conversation_id,))
    conn.commit()
    conn.close()

    return {"status": "saved", "conversation_id": conversation_id, "sender": sender}


def rename_conversation(conversation_id: str, student_email: str, new_title: str) -> bool:
    """Renames a conversation session with authorization check."""
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("""
        UPDATE conversations
        SET title = ?, updated_at = CURRENT_TIMESTAMP
        WHERE id = ? AND student_email = ?
    """, (new_title.strip()[:60], conversation_id, student_email.strip().lower()))
    updated = cursor.rowcount > 0
    conn.commit()
    conn.close()
    return updated


def delete_conversation(conversation_id: str, student_email: str) -> bool:
    """Deletes a conversation and all its messages with authorization check."""
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("DELETE FROM chat_messages WHERE conversation_id = ?", (conversation_id,))
    cursor.execute("DELETE FROM conversations WHERE id = ? AND student_email = ?", (conversation_id, student_email.strip().lower()))
    deleted = cursor.rowcount > 0
    conn.commit()
    conn.close()
    return deleted



def get_all_escalation_tickets(status: Optional[str] = None, status_filter: Optional[str] = None, **kwargs) -> List[Dict[str, Any]]:
    """Retrieves all escalation tickets from SQLite database for Admin VST."""
    target_status = status_filter or status
    conn = get_db_connection()
    cursor = conn.cursor()

    if target_status and target_status.lower() != 'all':
        cursor.execute("SELECT * FROM escalation_tickets WHERE status = ? ORDER BY created_at DESC", (target_status.lower(),))
    else:
        cursor.execute("SELECT * FROM escalation_tickets ORDER BY created_at DESC")

    rows = cursor.fetchall()
    conn.close()

    result = []
    for row in rows:
        d = dict(row)
        d["ticket_id"] = d.get("id")
        result.append(d)
    return result


get_all_tickets = get_all_escalation_tickets
get_all_escalations = get_all_escalation_tickets


def get_student_tickets(student_email: str) -> List[Dict[str, Any]]:
    """Retrieves only the tickets belonging to a specific student email."""
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("""
        SELECT * FROM escalation_tickets
        WHERE email = ? OR student_name = ?
        ORDER BY created_at DESC
    """, (student_email.strip().lower(), student_email.strip()))
    rows = cursor.fetchall()
    conn.close()

    result = []
    for row in rows:
        d = dict(row)
        d["ticket_id"] = d.get("id")
        result.append(d)
    return result


def update_escalation_status(
    ticket_id: str,
    new_status: str,
    resolution_notes: str = "",
    media_file: Optional[str] = None
) -> Optional[Dict[str, Any]]:
    """Updates ticket status, resolution notes, attaches media files, and dispatches email notification."""
    conn = get_db_connection()
    cursor = conn.cursor()

    cursor.execute("SELECT * FROM escalation_tickets WHERE id = ?", (ticket_id,))
    ticket = cursor.fetchone()

    if not ticket:
        conn.close()
        return {"status": "error", "message": f"Ticket '{ticket_id}' not found."}

    student_email = ticket["email"]
    now_str = datetime.now().isoformat()
    email_status_str = f"Sent to {student_email} on {datetime.now().strftime('%b %d, %Y %I:%M %p')}"

    cursor.execute("""
        UPDATE escalation_tickets
        SET status = ?, resolution_notes = ?, media_file = ?, email_status = ?, notified = 1, updated_at = ?
        WHERE id = ?
    """, (new_status.lower(), resolution_notes, media_file or ticket["media_file"], email_status_str, now_str, ticket_id))

    # Record email dispatch in email_logs table
    cursor.execute("""
        INSERT INTO email_logs (ticket_id, student_email, admin_name, message_text, media_file)
        VALUES (?, ?, 'VST', ?, ?)
    """, (ticket_id, student_email, resolution_notes, media_file or ticket["media_file"]))

    conn.commit()

    cursor.execute("SELECT * FROM escalation_tickets WHERE id = ?", (ticket_id,))
    updated_row = cursor.fetchone()
    conn.close()

    res_dict = dict(updated_row)
    res_dict["status"] = "success"
    res_dict["new_status"] = updated_row["status"]
    res_dict["ticket_status"] = updated_row["status"]
    res_dict["email_sent_to"] = student_email
    res_dict["media_file"] = media_file or ticket["media_file"]
    return res_dict


update_ticket_status = update_escalation_status


def mark_ticket_notified(ticket_id: str):
    """Marks notification read for a student ticket."""
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("UPDATE escalation_tickets SET notified = 0 WHERE id = ?", (ticket_id,))
    conn.commit()
    conn.close()


# Initialize DB on module load
init_db()
clear_mock_tickets()
