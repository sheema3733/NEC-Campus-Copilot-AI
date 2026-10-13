#!/usr/bin/env python3
import subprocess
import sys

print("Starting NEC Campus Copilot AI full-stack services...")
# Launch uvicorn
subprocess.run(["uvicorn", "backend.main:app", "--host", "0.0.0.0", "--port", "8000"])
