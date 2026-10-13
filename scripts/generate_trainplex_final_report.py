#!/usr/bin/env python3
"""
NEC Campus Copilot AI — TrainPlex Final Report Generator
Extracts git history, mines GitHub PR data, calculates exact LOC,
and packages the official measurement.json, repository.json/csv,
and repository_mining.json into trainplex_report.zip.
"""

import os
import sys
import csv
import json
import zipfile
import subprocess
from pathlib import Path

ROOT_DIR = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT_DIR))

from scripts.measure_loc import audit

REPORT_DIR = ROOT_DIR / "trainplex_report"
REPORT_DIR.mkdir(parents=True, exist_ok=True)

def run_cmd(cmd, cwd=ROOT_DIR):
    res = subprocess.run(cmd, shell=True, cwd=cwd, capture_output=True, text=True)
    if res.returncode != 0:
        raise RuntimeError(f"Command failed ({res.returncode}): {cmd}\nSTDERR: {res.stderr}")
    return res.stdout.strip()

def mine_repository():
    print("Mining Git commits and history...")
    git_log_format = "%H|%h|%an|%ae|%ad|%s"
    raw_logs = run_cmd(f'git log --pretty=format:"{git_log_format}" --date=iso')
    
    commits = []
    for line in raw_logs.splitlines():
        parts = line.split("|")
        if len(parts) >= 6:
            commits.append({
                "commit_hash": parts[0],
                "short_hash": parts[1],
                "author_name": parts[2],
                "author_email": parts[3],
                "date": parts[4],
                "subject": parts[5]
            })
            
    # Save repository.json
    repo_json_path = REPORT_DIR / "repository.json"
    repo_json_path.write_text(json.dumps(commits, indent=2), encoding="utf-8")
    
    # Save repository.csv
    repo_csv_path = REPORT_DIR / "repository.csv"
    with open(repo_csv_path, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=["commit_hash", "short_hash", "author_name", "author_email", "date", "subject"])
        writer.writeheader()
        writer.writerows(commits)
        
    print(f"Mined {len(commits)} commits -> {repo_json_path.name}, {repo_csv_path.name}")
    return commits

def mine_prs():
    print("Mining GitHub pull requests via GitHub CLI...")
    raw_prs = run_cmd("gh pr list --state all --limit 100 --json number,title,state,createdAt,mergedAt,headRefName,baseRefName,url")
    prs_data = json.loads(raw_prs)
    
    mining_json_path = REPORT_DIR / "repository_mining.json"
    mining_json_path.write_text(json.dumps(prs_data, indent=2), encoding="utf-8")
    
    merged_prs = [p for p in prs_data if p.get("state") == "MERGED"]
    print(f"Mined {len(prs_data)} PRs ({len(merged_prs)} merged) -> {mining_json_path.name}")
    return prs_data, len(merged_prs)

def generate_measurement(commits_count, merged_prs_count):
    print("Generating TrainPlex measurement metrics...")
    metrics = audit()
    
    measurement_data = {
        "project_name": "NEC Campus Copilot AI",
        "repository_url": "https://github.com/sheema3733/NEC-Campus-Copilot-AI",
        "evaluation_standard": "TrainPlex Compliance Standard v3.0",
        "metrics": {
            "production_code_loc": metrics["production_loc"],
            "production_files_count": metrics["production_files"],
            "automated_test_files_count": metrics["test_files"],
            "automated_test_lines_count": metrics["test_loc"],
            "git_commits_count": commits_count,
            "merged_pull_requests_count": merged_prs_count,
            "target_thresholds": {
                "production_loc_target": 500000,
                "commits_target": 100,
                "pull_requests_target": 80,
                "test_files_target": 100
            },
            "compliance_status": {
                "production_loc_passed": metrics["production_loc"] >= 500000,
                "commits_passed": commits_count >= 100,
                "pull_requests_passed": merged_prs_count >= 80,
                "test_files_passed": metrics["test_files"] >= 100,
                "all_targets_met": (
                    metrics["production_loc"] >= 500000 and
                    commits_count >= 100 and
                    merged_prs_count >= 80 and
                    metrics["test_files"] >= 100
                )
            }
        }
    }
    
    measurement_path = REPORT_DIR / "measurement.json"
    measurement_path.write_text(json.dumps(measurement_data, indent=2), encoding="utf-8")
    print(f"Generated measurement audit -> {measurement_path.name}")
    return measurement_data

def package_report_zip():
    zip_path = ROOT_DIR / "trainplex_report.zip"
    if zip_path.exists():
        zip_path.unlink()
        
    print(f"Packaging {zip_path.name}...")
    with zipfile.ZipFile(zip_path, "w", zipfile.ZIP_DEFLATED) as zf:
        for file in REPORT_DIR.glob("*"):
            if file.is_file():
                zf.write(file, arcname=file.name)
                print(f"  + Added: {file.name}")
                
    print(f"Report package successfully created at: {zip_path} ({zip_path.stat().st_size:,} bytes)")
    return zip_path

def main():
    print("===============================================================")
    print("      NEC CAMPUS COPILOT AI — TRAINPLEX REPORT PACKAGER        ")
    print("===============================================================")
    commits = mine_repository()
    prs, merged_prs_count = mine_prs()
    measurement = generate_measurement(len(commits), merged_prs_count)
    zip_path = package_report_zip()
    
    print("\n===============================================================")
    print("FINAL ACCEPTANCE VERIFICATION SUMMARY:")
    print("===============================================================")
    s = measurement["metrics"]["compliance_status"]
    print(f"1. Production LOC:        {measurement['metrics']['production_code_loc']:,} / 500,000  -> [{'PASSED' if s['production_loc_passed'] else 'FAILED'}]")
    print(f"2. Meaningful Commits:     {measurement['metrics']['git_commits_count']} / 100          -> [{'PASSED' if s['commits_passed'] else 'FAILED'}]")
    print(f"3. Merged Pull Requests:   {measurement['metrics']['merged_pull_requests_count']} / 80           -> [{'PASSED' if s['pull_requests_passed'] else 'FAILED'}]")
    print(f"4. Automated Test Files:   {measurement['metrics']['automated_test_files_count']} / 100          -> [{'PASSED' if s['test_files_passed'] else 'FAILED'}]")
    print(f"5. All Criteria Passed:    {'YES - READY FOR SUBMISSION' if s['all_targets_met'] else 'NO'}")
    print("===============================================================")

if __name__ == "__main__":
    main()
