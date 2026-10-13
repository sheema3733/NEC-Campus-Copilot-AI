# NEC Campus Copilot AI — REST API Reference

## Authentication & Authorization
- `POST /api/auth/login`: Authenticate and issue JWT.
- `POST /api/auth/register`: Student self-registration.

## Agent & RAG
- `POST /api/chat`: Multi-turn conversational academic assistant.
- `GET /api/documents`: List indexed college documents.
- `POST /api/documents/upload`: Upload academic document with MIME validation.

## Study Hub & Examination
- `POST /api/study/synthesize`: 5-action conceptual synthesis.
- `GET /api/exam/regulations`: Fetch autonomous rules and bylaws.
- `POST /api/exam/hallticket`: Generate verified digital hall ticket.

## Escalation & Support
- `POST /api/escalation/create`: Create student-confirmed human escalation ticket.
- `GET /api/escalation/status`: Check ticket progress and staff responses.
