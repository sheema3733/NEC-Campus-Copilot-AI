# Multi-stage production Dockerfile for NEC Campus Copilot AI
FROM python:3.12-slim AS backend-base
WORKDIR /app
COPY backend/requirements.txt /app/backend/
RUN pip install --no-cache-dir -r /app/backend/requirements.txt
COPY . /app/
EXPOSE 8000
CMD ["python", "run.py"]
