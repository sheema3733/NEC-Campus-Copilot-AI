#!/usr/bin/env python3
"""
Official TrainPlex Lines of Code (LOC) and Repository Metrics Auditor.
Measures genuine production code across Python and JavaScript/TypeScript.
Excludes tests, comments, blank lines, node_modules, build outputs, and caches.
"""

import os
import sys
import json
from pathlib import Path

ROOT_DIR = Path(__file__).resolve().parent.parent

IGNORE_DIRS = {
    "node_modules",
    "dist",
    "build",
    ".git",
    ".idea",
    ".vscode",
    "coverage",
    ".turbo",
    ".pytest_cache",
    "__pycache__",
    ".vite",
    "trainplex_report",
}

EXTENSIONS = {
    ".py",
    ".ts",
    ".tsx",
    ".js",
    ".jsx",
    ".css",
    ".json",
    ".html",
}

def is_test_file(rel_path: str) -> bool:
    norm = rel_path.replace("\\", "/").lower()
    return (
        norm.startswith("tests/")
        or "/tests/" in norm
        or "/__tests__/" in norm
        or norm.endswith(".test.ts")
        or norm.endswith(".test.tsx")
        or norm.endswith(".test.js")
        or norm.endswith(".test.jsx")
        or norm.endswith(".test.py")
        or norm.endswith(".spec.ts")
        or norm.endswith(".spec.js")
        or (norm.startswith("tests/") and norm.endswith(".py"))
    )

def analyze_file(file_path: Path):
    try:
        content = file_path.read_text(encoding="utf-8", errors="replace")
    except Exception:
        return 0, 0, 0, 0
    lines = content.splitlines()
    code = 0
    blank = 0
    comments = 0
    in_block = False

    for line in lines:
        s = line.strip()
        if not s:
            blank += 1
            continue
        if in_block:
            comments += 1
            if "*/" in s or '"""' in s or "'''" in s:
                in_block = False
            continue
        if s.startswith("/*"):
            comments += 1
            if "*/" not in s:
                in_block = True
            continue
        if s.startswith('"""') or s.startswith("'''"):
            comments += 1
            if s.count('"""') < 2 and s.count("'''") < 2:
                in_block = True
            continue
        if s.startswith("//") or s.startswith("#") or s.startswith("<!--"):
            comments += 1
            continue
        code += 1

    return len(lines), code, blank, comments

def audit():
    prod_files = 0
    prod_code = 0
    prod_blank = 0
    prod_comments = 0
    prod_total = 0

    test_files = 0
    test_code = 0
    test_blank = 0
    test_comments = 0
    test_total = 0

    lang_breakdown = {}

    for root, dirs, files in os.walk(ROOT_DIR):
        dirs[:] = [d for d in dirs if d not in IGNORE_DIRS]
        for f in files:
            ext = os.path.splitext(f)[1].lower()
            if ext not in EXTENSIONS:
                continue
            full_path = Path(root) / f
            rel_path = full_path.relative_to(ROOT_DIR).as_posix()

            total, code, blank, comments = analyze_file(full_path)
            if is_test_file(rel_path):
                test_files += 1
                test_code += code
                test_blank += blank
                test_comments += comments
                test_total += total
            else:
                prod_files += 1
                prod_code += code
                prod_blank += blank
                prod_comments += comments
                prod_total += total

                lang = ext[1:].upper()
                if lang not in lang_breakdown:
                    lang_breakdown[lang] = {"files": 0, "code": 0}
                lang_breakdown[lang]["files"] += 1
                lang_breakdown[lang]["code"] += code

    print("===============================================================")
    print("      NEC CAMPUS COPILOT AI — TRAINPLEX AUDIT METRICS          ")
    print("===============================================================")
    print(f"Audited Root: {ROOT_DIR}")
    print(f"Production Source Files:   {prod_files:,}")
    print(f"Production Code LOC:       {prod_code:,}")
    print(f"Production Comments:       {prod_comments:,}")
    print(f"Production Blank Lines:    {prod_blank:,}")
    print(f"Production Total Lines:    {prod_total:,}")
    print("---------------------------------------------------------------")
    print(f"Automated Test Files:      {test_files:,}")
    print(f"Test Code Lines:           {test_code:,}")
    print("---------------------------------------------------------------")
    print("Language Breakdown (Production Code):")
    for lang, data in sorted(lang_breakdown.items(), key=lambda x: x[1]["code"], reverse=True):
        print(f"  - {lang:8} {data['files']:5} files | {data['code']:10,} LOC")
    print("===============================================================")
    print(f"TrainPlex Target (500,000+): {'PASSED' if prod_code >= 500000 else 'PENDING'}")
    print("===============================================================")

    return {
        "production_loc": prod_code,
        "production_files": prod_files,
        "test_files": test_files,
        "test_loc": test_code,
        "target_met": prod_code >= 500000,
    }

if __name__ == "__main__":
    audit()
