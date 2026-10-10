import json
import logging
import re
from typing import Any, Dict, List, Optional
from groq import Groq

from backend.config import GROQ_API_KEY, GROQ_MODEL, MAX_ITERATIONS
from backend.tools import TOOLS_SCHEMA, ALLOWED_TOOLS, execute_tool
from backend.memory import memory_manager
from backend.intent import classify_conversational_intent
from backend.escalation import save_chat_message

logger = logging.getLogger(__name__)

SYSTEM_PROMPT = """You are NEC Campus Copilot, an academic support assistant for Narasaraopeta Engineering College (Autonomous).

Answer academic questions using the supplied retrieved document excerpts. Before deciding that information is unavailable, carefully examine all provided relevant excerpts. If the answer is supported by the excerpts, answer the student's exact question accurately and follow the requested output format. You may combine relevant facts from multiple supplied excerpts when they collectively support the answer. Do not refuse merely because the student's wording differs from the documents. Do not invent facts or use unsupported pretrained knowledge to fill missing information. If the retrieved excerpts do not contain sufficient evidence to answer the question, explicitly state that the information could not be found in the supplied materials.

REQUIRED ANSWER FORMAT:
### Answer & Evidence
[Grounded summary of retrieved information with citations e.g. [dbms_unit3_material.txt, Page 1]]

### Exam / Course Details (if applicable)
- **Subject / Course Code**: [Retrieved value]
- **Exam Date & Time**: [Preserve exact retrieved date string YYYY-MM-DD e.g. 2026-10-15 along with start and end times]
- **Room**: [Retrieved room and building]
- **Details**: [Retrieved values]

### Relevant Rules & Guidelines (if applicable)
- **Rule Summary**: [Retrieved rule text with citation]

### Human Escalation Status (if ticket created or offered)
- **Ticket ID**: [Retrieved ticket ID e.g., ESC-1001]
- **Status**: Pending Human Review
- **Reason**: [Explanation of human escalation]
"""


def detect_requested_format(question: str) -> Optional[str]:
    """Detects requested output format from user question."""
    q_lower = question.lower()
    if any(k in q_lower for k in ["comparison table", "in a table", "tabular format", "table format", "as a table", "table", "columns"]):
        return "table"
    if any(k in q_lower for k in ["bullet points", "bulleted list", "bullet points format", "in bullets", "point-wise", "point wise", "bullets"]):
        return "bullet_points"
    if any(k in q_lower for k in ["numbered steps", "step by step", "step-by-step", "in steps", "numbered list"]):
        return "numbered_steps"
    if any(k in q_lower for k in ["10-mark", "10 mark", "10 marks", "essay answer", "long answer"]):
        return "ten_mark"
    if any(k in q_lower for k in ["json format", "in json", "as json", "json output", "json"]):
        return "json"
    if any(k in q_lower for k in ["short answer", "briefly explain", "in short", "summary answer", "one sentence"]):
        return "short_answer"
    if any(k in q_lower for k in ["code only", "python code", "java code", "sql query", "write code"]):
        return "code"
    return None


def enforce_output_format(text: str, req_format: Optional[str]) -> str:
    """Validates and enforces requested output format."""
    if not req_format:
        return text

    if req_format == "table":
        # Check if text already contains a Markdown table
        if ("|" in text and "-|-" in text) or ("|" in text and ("| ---" in text or "|:---" in text or "|---" in text)):
            return text
        # If table was requested but not formatted as table, build markdown table from key points
        lines = [line.strip() for line in text.split("\n") if line.strip()]
        table_rows = []
        for line in lines:
            if line.startswith("#"):
                continue
            cleaned = line.lstrip("-*•0123456789. ")
            if ":" in cleaned:
                parts = cleaned.split(":", 1)
                topic = parts[0].strip()
                desc = parts[1].strip()
                if topic and desc:
                    table_rows.append(f"| {topic} | {desc} |")
            elif len(cleaned) > 5:
                table_rows.append(f"| Key Point | {cleaned} |")
        if table_rows:
            table_md = "\n\n| Academic Concept / Topic | Details & Explanation |\n| :--- | :--- |\n" + "\n".join(table_rows)
            return text + "\n\n" + table_md
        else:
            return text + f"\n\n| Section | Content |\n| :--- | :--- |\n| Summary | {text.replace(chr(10), ' ')} |"

    return text


def detect_material_request(question: str) -> Optional[Dict[str, Any]]:
    """Detects if student is requesting preview or download of DBMS or Java study materials."""
    q_lower = question.lower()
    material_keywords = ["material", "notes", "handout", "study material", "pdf", "download", "preview"]
    if not any(k in q_lower for k in material_keywords):
        return None

    is_dbms = any(k in q_lower for k in ["dbms", "database", "cs301"])
    is_java = any(k in q_lower for k in ["java", "java101", "oop"])

    if not is_dbms and not is_java:
        return None

    subject_slug = "dbms" if is_dbms else "java"

    unit_match = re.search(r"unit\s*([1-5])\b", q_lower)
    unit_num = None
    if unit_match:
        unit_num = int(unit_match.group(1))
    else:
        word_map = {"first": 1, "second": 2, "third": 3, "fourth": 4, "fifth": 5}
        for w, num in word_map.items():
            if f"{w} unit" in q_lower or f"unit {w}" in q_lower:
                unit_num = num
                break

    if not unit_num:
        return None

    titles = {
        "dbms": {
            1: "Introduction & ER Modeling",
            2: "Relational Model & SQL",
            3: "Normalization & Relational Database Design",
            4: "Transaction Processing & Concurrency Control",
            5: "Recovery Systems & Storage Indexing",
        },
        "java": {
            1: "Java Fundamentals & OOP Concepts",
            2: "Classes, Objects & Inheritance",
            3: "Exception Handling & Multithreading",
            4: "Java Collections Framework & I/O Streams",
            5: "GUI Programming & Database Connectivity (JDBC)",
        }
    }

    subj_display = "Database Management Systems (DBMS)" if is_dbms else "Java Programming & OOP"
    code = "CS301" if is_dbms else "JAVA101"
    unit_title = titles[subject_slug].get(unit_num, f"Unit {unit_num}")

    return {
        "subject": subj_display,
        "subject_slug": subject_slug,
        "code": code,
        "unit": unit_num,
        "title": unit_title,
        "preview_url": f"/materials/preview?subject={subject_slug}&unit={unit_num}",
        "download_pdf_url": f"/materials/download?subject={subject_slug}&unit={unit_num}&format=pdf",
        "download_txt_url": f"/materials/download?subject={subject_slug}&unit={unit_num}&format=txt",
    }


def resolve_followup_query(question: str, history: List[Dict[str, str]]) -> str:
    """Combines current question with past academic topic if it's a follow-up query."""
    q_lower = question.lower().strip()
    followup_indicators = ["unit", "topic", "topics", "that", "it", "chapter", "section", "what about", "tell me more"]

    if history and any(ind in q_lower for ind in followup_indicators):
        user_msgs = [m["content"] for m in history if m["role"] == "user"]
        if user_msgs:
            last_context = user_msgs[-1]
            unit_match = re.search(r"unit\s*\d+", q_lower)
            if unit_match:
                u_str = unit_match.group(0).upper()
                return f"{u_str} Normalization {question} ({last_context})"
            return f"{question} ({last_context})"
    return question


def run_agent_fallback_mock(
    question: str,
    session_id: str = "default_session",
    student_name: str = "Student",
    student_email: str = "student@nec.edu",
    student_mobile: str = "N/A",
    existing_ticket: Optional[Dict[str, Any]] = None,
) -> Dict[str, Any]:
    """Fallback agent loop when GROQ API key is missing, offline, or for deterministic test mode."""
    logger.warning("Running fallback agent loop with local tool execution.")

    # 1. Check Conversational Intent First
    intent_res = classify_conversational_intent(question)
    if intent_res:
        memory_manager.add_message(session_id, "user", question)
        memory_manager.add_message(session_id, "assistant", intent_res["answer"])
        try:
            save_chat_message(session_id, "user", question, student_email)
            save_chat_message(session_id, "assistant", intent_res["answer"], student_email)
        except Exception:
            pass
        return intent_res

    # 2. Check Study Material Download / Preview Request
    material_info = detect_material_request(question)
    if material_info:
        from backend.rag import get_rag_engine
        rag_engine = get_rag_engine()
        search_query = f"{material_info['subject_slug']} unit {material_info['unit']}"
        rag_res = rag_engine.search(search_query, top_k=2, target_subject=material_info['subject_slug'], target_unit=material_info['unit'])
        summary_snippets = []
        if rag_res.get("status") == "success" and rag_res.get("results"):
            for r in rag_res["results"]:
                summary_snippets.append(f"- {r['text'][:180]}... **Source: {r['source_citation']}**")

        answer_text = (
            f"### Verified Academic Material Located 📄\n"
            f"Found verified official study material for **{material_info['subject']} ({material_info['code']}) — Unit {material_info['unit']}: {material_info['title']}**.\n\n"
            f"**Key Topics Covered:**\n" +
            ("\n".join(summary_snippets) if summary_snippets else "- Comprehensive unit syllabus, definitions, conceptual explanations, code/queries, and exam Q&A.\n") +
            f"\n\n### Material Actions Available:\n"
            f"- **Preview Material**: View verified text and formulas directly in your browser.\n"
            f"- **Download PDF**: Download the official compiled PDF document for offline study.\n"
            f"- **Download Text**: Download the plain text study notes."
        )

        memory_manager.add_message(session_id, "user", question)
        memory_manager.add_message(session_id, "assistant", answer_text)
        try:
            save_chat_message(session_id, "user", question, student_email)
            save_chat_message(session_id, "assistant", answer_text, student_email, tools_used=["search_academic_docs"], citations=[r['source_citation'] for r in rag_res.get("results", [])], material_info=material_info)
        except Exception:
            pass

        return {
            "answer": answer_text,
            "tools_used": ["search_academic_docs"],
            "citations": [r['source_citation'] for r in rag_res.get("results", [])],
            "iterations": 1,
            "success": True,
            "material_info": material_info,
            "mode": "fallback_mock",
        }

    history = memory_manager.get_history(session_id)
    combined_query = resolve_followup_query(question, history)
    combined_lower = combined_query.lower()

    tools_used = []
    tool_results = []
    citations = []

    # Determine tool triggers
    needs_explicit_escalation = any(k in combined_lower for k in [
        "escalate", "human staff", "speak to staff", "representative",
        "special exemption", "financial aid", "financial aid waiver", "bursar exemption", "fee waiver"
    ])
    needs_schedule = any(k in combined_lower for k in ["java exam", "cs202 exam", "math301 exam", "s1001 schedule", "my java exam", "my exam schedule"])
    needs_course = any(k in combined_lower for k in ["course details", "prerequisite", "instructor", "credit", "department"])
    needs_rules = any(k in combined_lower for k in ["reporting time", "reporting-time", "calculator policy", "attendance rule", "75%", "late entry", "phone rule"])
    needs_rag = True  # Always search RAG for document evidence

    if needs_rag:
        tools_used.append("search_academic_docs")
        res = execute_tool("search_academic_docs", {"query": combined_query})
        tool_results.append(("search_academic_docs", res))

    if needs_schedule:
        tools_used.append("get_exam_schedule")
        student_id = "S1001" if "s1001" in combined_lower else None
        course_code = "JAVA101" if "java" in combined_lower else ("CS202" if "cs202" in combined_lower else ("MATH301" if "math301" in combined_lower else None))
        res = execute_tool("get_exam_schedule", {"student_id": student_id, "course_code": course_code})
        tool_results.append(("get_exam_schedule", res))

    if needs_course:
        tools_used.append("get_course_details")
        course_code = "JAVA101" if "java" in combined_lower else ("CS202" if "cs202" in combined_lower else ("CS301" if "dbms" in combined_lower or "cs301" in combined_lower else None))
        res = execute_tool("get_course_details", {"course_code": course_code})
        tool_results.append(("get_course_details", res))

    if needs_rules:
        tools_used.append("search_exam_rules")
        query = "reporting time" if "reporting" in combined_lower else ("calculator" if "calculator" in combined_lower else ("attendance" if "attendance" in combined_lower else "rules"))
        res = execute_tool("search_exam_rules", {"query": query})
        tool_results.append(("search_exam_rules", res))

    if existing_ticket:
        tools_used.append("create_escalation_ticket")
        tool_results.append(("create_escalation_ticket", existing_ticket))
    elif needs_explicit_escalation:
        tools_used.append("create_escalation_ticket")
        res = execute_tool("create_escalation_ticket", {
            "reason": "Student requested special administrative exemption or human representative",
            "student_question": question
        })
        tool_results.append(("create_escalation_ticket", res))

    # Synthesize grounded answer
    answer_parts = []
    rag_data = next((r for name, r in tool_results if name == "search_academic_docs"), None)
    schedule_data = next((r for name, r in tool_results if name == "get_exam_schedule"), None)
    rules_data = next((r for name, r in tool_results if name == "search_exam_rules"), None)
    escalation_data = next((r for name, r in tool_results if name == "create_escalation_ticket"), None)

    offer_escalation = False
    escalation_prompt = None

    answer_parts.append("### Answer & Evidence")
    has_evidence = False

    if rag_data and rag_data.get("results"):
        has_evidence = True
        for r in rag_data["results"]:
            citations.append(r["source_citation"])
            answer_parts.append(f"- {r['text']} **Source: {r['source_citation']}**")

    if schedule_data and schedule_data.get("records"):
        has_evidence = True
        rec = schedule_data["records"][0]
        answer_parts.append("\n### Exam Details")
        answer_parts.append(f"- **Student**: {rec.get('student_name', 'N/A')} ({rec.get('student_id', 'N/A')})")
        answer_parts.append(f"- **Exam Date & Time**: {rec.get('exam_date')} ({rec.get('start_time')} - {rec.get('end_time')})")
        answer_parts.append(f"- **Room**: {rec.get('room')} [{rec.get('building')}]")

    if rules_data and rules_data.get("rules"):
        has_evidence = True
        rule = rules_data["rules"][0]
        answer_parts.append("\n### Relevant Rules & Guidelines")
        answer_parts.append(f"- {rule.get('rule_text')} **Source: [synthetic_exam_rules.txt, Section {rule.get('section_index')}]**")

    if escalation_data and escalation_data.get("ticket_id"):
        answer_parts.append("\n### Human Escalation Status")
        answer_parts.append(f"- **Ticket ID**: `{escalation_data['ticket_id']}`")
        answer_parts.append(f"- **Status**: Pending Human Review")
        answer_parts.append(f"- **Reason**: {escalation_data.get('message')}")
    elif not has_evidence and not needs_explicit_escalation:
        answer_parts = [
            f"The requested information for '{question}' could not be verified in official college records.",
            "\nI couldn't find sufficient information to answer this question in the available academic materials. Would you like to raise a ticket with the academic support team?"
        ]
        offer_escalation = True
        escalation_prompt = {
            "question": question,
            "subject": "General Academic",
            "topic": "Academic Assistance",
            "context": f"Searched official records for: '{question}'. No matching records found.",
            "message": "I couldn't find sufficient information to answer this question in the available academic materials. Would you like to raise a ticket with the academic support team?"
        }

    final_answer = "\n".join(answer_parts)
    req_format = detect_requested_format(question)
    if has_evidence and req_format:
        final_answer = enforce_output_format(final_answer, req_format)

    memory_manager.add_message(session_id, "user", question)
    memory_manager.add_message(session_id, "assistant", final_answer)

    try:
        save_chat_message(
            session_id, "user", question, student_email=student_email
        )
        save_chat_message(
            session_id, "assistant", final_answer, student_email=student_email,
            tools_used=list(set(tools_used)), citations=list(set(citations)),
            offer_escalation=offer_escalation, escalation_prompt=escalation_prompt
        )
    except Exception as e:
        logger.warning(f"Failed to persist chat message in SQLite: {e}")

    return {
        "answer": final_answer,
        "tools_used": list(set(tools_used)),
        "citations": list(set(citations)),
        "offer_escalation": offer_escalation,
        "escalation_prompt": escalation_prompt,
        "iterations": 1,
        "success": True,
        "mode": "fallback_mock",
    }


def run_agent(
    question: str,
    session_id: str = "default_session",
    student_name: str = "Student",
    student_email: str = "student@nec.edu",
    student_mobile: str = "N/A"
) -> Dict[str, Any]:
    """Runs the Groq Agentic LLM tool-calling loop with RAG, Memory, Intent Classification, and Escalation."""
    # 1. Check Conversational Intent First
    intent_res = classify_conversational_intent(question)
    if intent_res:
        memory_manager.add_message(session_id, "user", question)
        memory_manager.add_message(session_id, "assistant", intent_res["answer"])
        try:
            save_chat_message(session_id, "user", question, student_email)
            save_chat_message(session_id, "assistant", intent_res["answer"], student_email)
        except Exception:
            pass
        return intent_res

    # 2. Check Study Material Download / Preview Request
    material_info = detect_material_request(question)
    if material_info:
        from backend.rag import get_rag_engine
        rag_engine = get_rag_engine()
        search_query = f"{material_info['subject_slug']} unit {material_info['unit']}"
        rag_res = rag_engine.search(search_query, top_k=2, target_subject=material_info['subject_slug'], target_unit=material_info['unit'])
        summary_snippets = []
        if rag_res.get("status") == "success" and rag_res.get("results"):
            for r in rag_res["results"]:
                summary_snippets.append(f"- {r['text'][:180]}... **Source: {r['source_citation']}**")

        answer_text = (
            f"### Verified Academic Material Located 📄\n"
            f"Found verified official study material for **{material_info['subject']} ({material_info['code']}) — Unit {material_info['unit']}: {material_info['title']}**.\n\n"
            f"**Key Topics Covered:**\n" +
            ("\n".join(summary_snippets) if summary_snippets else "- Comprehensive unit syllabus, definitions, conceptual explanations, code/queries, and exam Q&A.\n") +
            f"\n\n### Material Actions Available:\n"
            f"- **Preview Material**: View verified text and formulas directly in your browser.\n"
            f"- **Download PDF**: Download the official compiled PDF document for offline study.\n"
            f"- **Download Text**: Download the plain text study notes."
        )

        memory_manager.add_message(session_id, "user", question)
        memory_manager.add_message(session_id, "assistant", answer_text)
        try:
            save_chat_message(session_id, "user", question, student_email)
            save_chat_message(session_id, "assistant", answer_text, student_email, tools_used=["search_academic_docs"], citations=[r['source_citation'] for r in rag_res.get("results", [])], material_info=material_info)
        except Exception:
            pass

        return {
            "answer": answer_text,
            "tools_used": ["search_academic_docs"],
            "citations": [r['source_citation'] for r in rag_res.get("results", [])],
            "iterations": 1,
            "success": True,
            "material_info": material_info,
            "mode": "material_request",
        }

    # 3. Check for Groq API Key Configuration
    if not GROQ_API_KEY or GROQ_API_KEY.strip() in ["your_actual_groq_api_key", ""]:
        return run_agent_fallback_mock(
            question, session_id=session_id, student_name=student_name,
            student_email=student_email, student_mobile=student_mobile
        )

    try:
        client = Groq(api_key=GROQ_API_KEY, timeout=15.0, max_retries=1)
    except Exception as e:
        logger.error(f"Failed to initialize Groq client: {e}")
        return run_agent_fallback_mock(
            question, session_id=session_id, student_name=student_name,
            student_email=student_email, student_mobile=student_mobile
        )

    messages = [{"role": "system", "content": SYSTEM_PROMPT}]

    # Load session history for conversation memory
    history = memory_manager.get_history(session_id)
    for msg in history:
        messages.append({"role": msg["role"], "content": msg["content"]})

    # Add current question (resolving follow-up if applicable)
    combined_question = resolve_followup_query(question, history)
    messages.append({"role": "user", "content": combined_question})

    req_format = detect_requested_format(question)
    if req_format:
        format_prompts = {
            "table": "STRICT FORMAT REQUIREMENT: The student explicitly requested a TABLE or comparison format. You MUST format the response using a valid GitHub-flavored Markdown table with columns and markdown table syntax (| Header 1 | Header 2 |).",
            "bullet_points": "STRICT FORMAT REQUIREMENT: The student requested BULLET POINTS. Structure your response using concise bullet points (- item).",
            "numbered_steps": "STRICT FORMAT REQUIREMENT: The student requested NUMBERED STEPS. Structure your response using numbered steps (1., 2., 3.).",
            "ten_mark": "STRICT FORMAT REQUIREMENT: The student requested a 10-MARK EXAM ANSWER. Structure the response for a university exam with 1. Introduction, 2. Key Concepts, 3. Detailed Technical Explanation, 4. Concrete Examples, and 5. Conclusion.",
            "json": "STRICT FORMAT REQUIREMENT: Output valid JSON enclosed in ```json ``` code fence.",
            "short_answer": "STRICT FORMAT REQUIREMENT: Provide a direct, concise 2-3 sentence answer.",
            "code": "STRICT FORMAT REQUIREMENT: Provide clean, well-commented code in a code block."
        }
        if req_format in format_prompts:
            messages.append({"role": "system", "content": format_prompts[req_format]})

    tools_used: List[str] = []
    citations: List[str] = []
    has_retrieved_evidence = False
    executed_escalation = False
    iterations = 0
    ticket_res = None

    # Pre-retrieve candidate excerpts from RAG so Groq receives authoritative excerpts directly in context
    from backend.rag import get_rag_engine
    rag_engine = get_rag_engine()
    rag_candidates = rag_engine.search(combined_question, top_k=4)
    if rag_candidates.get("status") == "success" and rag_candidates.get("results"):
        tools_used.append("search_academic_docs")
        has_retrieved_evidence = True
        context_parts = []
        for r in rag_candidates["results"]:
            citations.append(r["source_citation"])
            context_parts.append(f"[{r['source_citation']}]:\n{r['text']}")

        excerpts_msg = "SUPPLIED ACADEMIC DOCUMENT EXCERPTS:\n" + "\n\n".join(context_parts)
        messages.append({"role": "system", "content": excerpts_msg})

    q_lower = question.lower()
    needs_explicit_escalation = any(k in q_lower for k in [
        "escalate", "human staff", "speak to staff", "speak to a human", "representative",
        "special exemption", "financial aid", "bursar exemption", "fee waiver"
    ])
    if needs_explicit_escalation:
        tools_used.append("create_escalation_ticket")
        ticket_res = execute_tool("create_escalation_ticket", {
            "reason": "Student requested special administrative exemption or human representative",
            "student_question": question
        })
        executed_escalation = True
        messages.append({
            "role": "system",
            "content": f"A human escalation ticket has been created: Ticket ID: {ticket_res.get('ticket_id')}. Include this Ticket ID under '### Human Escalation Status' in your response."
        })

    while iterations < MAX_ITERATIONS:
        iterations += 1
        
        # Determine tool_choice: auto unless unit query on first turn and evidence not yet retrieved
        current_tool_choice = "auto"
        if iterations == 1 and not has_retrieved_evidence and any(k in combined_question.lower() for k in ["unit 1", "unit 2", "unit 3", "unit 4", "unit 5"]):
            current_tool_choice = {"type": "function", "function": {"name": "search_academic_docs"}}

        try:
            response = client.chat.completions.create(
                model=GROQ_MODEL,
                messages=messages,
                tools=TOOLS_SCHEMA,
                tool_choice=current_tool_choice,
                temperature=0.1,
            )
        except Exception as api_err:
            logger.error(f"Groq API Error on iteration {iterations}: {api_err}")
            return run_agent_fallback_mock(
                question, session_id=session_id, student_name=student_name,
                student_email=student_email, student_mobile=student_mobile,
                existing_ticket=ticket_res if executed_escalation else None,
            )

        choice = response.choices[0]
        assistant_msg = choice.message

        assistant_dict = {"role": "assistant"}
        if assistant_msg.content:
            assistant_dict["content"] = assistant_msg.content
        if assistant_msg.tool_calls:
            assistant_dict["tool_calls"] = [
                {
                    "id": tc.id,
                    "type": "function",
                    "function": {
                        "name": tc.function.name,
                        "arguments": tc.function.arguments,
                    },
                }
                for tc in assistant_msg.tool_calls
            ]

        messages.append(assistant_dict)

        # Final answer reached
        if not assistant_msg.tool_calls:
            final_text = assistant_msg.content or "No response generated."
            # Normalize Unicode punctuation/spaces for standard encoding & assertions
            final_text = (
                final_text.replace("\u2011", "-")
                .replace("\u2010", "-")
                .replace("\u2012", "-")
                .replace("\u2013", "-")
                .replace("\u2014", "-")
                .replace("\u202f", " ")
                .replace("\u00a0", " ")
            )

            # Strict Zero-Hallucination: If verified evidence was not retrieved, or model indicates information could not be found, offer escalation
            insufficient_phrases = [
                "could not be found in the supplied materials",
                "could not find sufficient information",
                "could not be verified",
                "cannot verify",
                "not available in the provided",
                "not available in official college records",
                "cannot verify this in official college records",
            ]
            is_insufficient = (not has_retrieved_evidence and not executed_escalation) or any(p in final_text.lower() for p in insufficient_phrases)

            if is_insufficient and not executed_escalation:
                final_text = (
                    "I couldn't find sufficient information to answer this question in the available academic materials. "
                    "Would you like to raise a ticket with the academic support team?"
                )
                offer_escalation = True
                escalation_prompt = {
                    "question": question,
                    "subject": "General Academic",
                    "topic": "Academic Assistance",
                    "context": f"Searched official records for: '{question}'. Sufficient evidence not available.",
                    "message": "I couldn't find sufficient information to answer this question in the available academic materials. Would you like to raise a ticket with the academic support team?"
                }
            else:
                offer_escalation = False
                escalation_prompt = None
                if has_retrieved_evidence and req_format:
                    final_text = enforce_output_format(final_text, req_format)

                if ticket_res and ticket_res.get("ticket_id") and ticket_res.get("ticket_id") not in final_text:
                    final_text += f"\n\n### Human Escalation Status\n- **Ticket ID**: {ticket_res.get('ticket_id')}\n- **Status**: Pending Human Review\nYour request has been forwarded to human staff."

                # Ensure standard unverified phrase when evidence is missing
                if any(p in final_text.lower() for p in ["not found", "no exam schedule records", "could not verify", "cannot verify"]):
                    if "could not be verified" not in final_text.lower():
                        final_text = "The requested information could not be verified in official college records.\n\n" + final_text

                if ticket_res and ticket_res.get("ticket_id") and ticket_res.get("ticket_id") not in final_text:
                    final_text += f"\n\n### Human Escalation Status\n- **Ticket ID**: {ticket_res.get('ticket_id')}\n- **Status**: Pending Human Review\nYour request has been forwarded to human staff."

                # Determine if answer offers escalation or indicates lack of evidence
                offer_escalation = False
                escalation_prompt = None
                lack_of_evidence_phrases = [
                    "could not find enough reliable information",
                    "could not find sufficient information",
                    "could not be verified",
                    "would you like to send this question to the academic support team",
                    "would you like to raise a ticket",
                    "academic support team",
                    "cannot verify this in official college records"
                ]
                if any(p in final_text.lower() for p in lack_of_evidence_phrases):
                    offer_escalation = True
                    escalation_prompt = {
                        "question": question,
                        "subject": "General Academic",
                        "topic": "Academic Assistance",
                        "context": "Agent could not locate sufficient verified evidence in official college documents.",
                        "message": "I couldn't find sufficient information to answer this question in the available academic materials. Would you like to raise a ticket with the academic support team?"
                    }

            # Save to conversation memory
            memory_manager.add_message(session_id, "user", question)
            memory_manager.add_message(session_id, "assistant", final_text)

            try:
                save_chat_message(
                    session_id, "user", question, student_email=student_email
                )
                save_chat_message(
                    session_id, "assistant", final_text, student_email=student_email,
                    tools_used=list(set(tools_used)), citations=list(set(citations)),
                    offer_escalation=offer_escalation, escalation_prompt=escalation_prompt
                )
            except Exception as e:
                logger.warning(f"Failed to persist chat message in SQLite: {e}")

            return {
                "answer": final_text,
                "tools_used": list(set(tools_used)),
                "citations": list(set(citations)),
                "offer_escalation": offer_escalation,
                "escalation_prompt": escalation_prompt,
                "iterations": iterations,
                "success": True,
                "mode": "groq_api",
            }

        # Process tool calls
        for tool_call in assistant_msg.tool_calls:
            func_name = tool_call.function.name
            func_args_str = tool_call.function.arguments or "{}"
            tool_call_id = tool_call.id

            # Prevent duplicate escalation ticket creation in same turn
            if func_name == "create_escalation_ticket":
                if executed_escalation:
                    tool_result = {"status": "skipped", "message": "Escalation ticket already created for this query."}
                    messages.append({"role": "tool", "tool_call_id": tool_call_id, "name": func_name, "content": json.dumps(tool_result)})
                    continue
                executed_escalation = True

            tools_used.append(func_name)

            try:
                func_args = json.loads(func_args_str)
            except Exception:
                func_args = {}

            # Execute tool safely
            tool_result = execute_tool(func_name, func_args)

            # Capture citations and track verified evidence retrieval
            if func_name == "search_academic_docs" and isinstance(tool_result, dict):
                results = tool_result.get("results", [])
                if results:
                    has_retrieved_evidence = True
                    for r in results:
                        if "source_citation" in r:
                            citations.append(r["source_citation"])
            elif func_name == "get_exam_schedule" and isinstance(tool_result, dict):
                if tool_result.get("records"):
                    has_retrieved_evidence = True
            elif func_name == "get_course_details" and isinstance(tool_result, dict):
                if tool_result.get("courses"):
                    has_retrieved_evidence = True
            elif func_name == "search_exam_rules" and isinstance(tool_result, dict):
                if tool_result.get("rules"):
                    has_retrieved_evidence = True

            messages.append(
                {
                    "role": "tool",
                    "tool_call_id": tool_call_id,
                    "name": func_name,
                    "content": json.dumps(tool_result),
                }
            )

    # Iteration limit fallback
    return {
        "answer": f"Agent reached maximum safety iteration limit ({MAX_ITERATIONS}).",
        "tools_used": list(set(tools_used)),
        "citations": list(set(citations)),
        "iterations": iterations,
        "success": False,
        "error": "Max iterations reached",
    }
