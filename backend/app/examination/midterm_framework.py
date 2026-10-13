from typing import Dict, List, Optional, Any
from pydantic import BaseModel, Field
from enum import Enum

"""
Narasaraopeta Engineering College (Autonomous) — Examination Cell
Module: Continuous Internal Assessment Specifications (MIDTERM) | Controller of Examinations Standard Operating Procedures
"""

class ExamSessionType(str, Enum):
    FORENOON = "10:00 AM - 01:00 PM"
    AFTERNOON = "02:00 PM - 05:00 PM"

class PenaltySeverityTier(str, Enum):
    TIER_1_WARNING = "TIER_1_WRITTEN_WARNING"
    TIER_2_CANCELLATION = "TIER_2_CURRENT_PAPER_CANCEL"
    TIER_3_DEBARRED_TERM = "TIER_3_ENTIRE_SEMESTER_DEBARRED"
    TIER_4_EXPULSION = "TIER_4_INSTITUTIONAL_EXPULSION"

class MIDTERM_Registry:
    REGISTRY_NAME = "Continuous Internal Assessment Specifications"
    VERSION = "2026.1"

    @classmethod
    def get_regulation_rule_0001(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0001",
            "clause_number": "1.2",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 1",
            "severity": PenaltySeverityTier.TIER_1_WARNING,
            "minimum_pass_marks_theory": 36,
            "minimum_aggregate_percentage": 41,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 11,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 510
            }
        }

    @classmethod
    def get_regulation_rule_0002(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0002",
            "clause_number": "1.3",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 2",
            "severity": PenaltySeverityTier.TIER_2_CANCELLATION,
            "minimum_pass_marks_theory": 37,
            "minimum_aggregate_percentage": 42,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 12,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 520
            }
        }

    @classmethod
    def get_regulation_rule_0003(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0003",
            "clause_number": "1.4",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 3",
            "severity": PenaltySeverityTier.TIER_3_DEBARRED_TERM,
            "minimum_pass_marks_theory": 38,
            "minimum_aggregate_percentage": 43,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 13,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 530
            }
        }

    @classmethod
    def get_regulation_rule_0004(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0004",
            "clause_number": "1.5",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 4",
            "severity": PenaltySeverityTier.TIER_4_EXPULSION,
            "minimum_pass_marks_theory": 39,
            "minimum_aggregate_percentage": 44,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 14,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 540
            }
        }

    @classmethod
    def get_regulation_rule_0005(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0005",
            "clause_number": "1.6",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 5",
            "severity": PenaltySeverityTier.TIER_1_WARNING,
            "minimum_pass_marks_theory": 40,
            "minimum_aggregate_percentage": 40,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 10,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 550
            }
        }

    @classmethod
    def get_regulation_rule_0006(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0006",
            "clause_number": "1.7",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 6",
            "severity": PenaltySeverityTier.TIER_2_CANCELLATION,
            "minimum_pass_marks_theory": 35,
            "minimum_aggregate_percentage": 41,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 11,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 560
            }
        }

    @classmethod
    def get_regulation_rule_0007(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0007",
            "clause_number": "1.8",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 7",
            "severity": PenaltySeverityTier.TIER_3_DEBARRED_TERM,
            "minimum_pass_marks_theory": 36,
            "minimum_aggregate_percentage": 42,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 12,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 570
            }
        }

    @classmethod
    def get_regulation_rule_0008(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0008",
            "clause_number": "1.9",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 8",
            "severity": PenaltySeverityTier.TIER_4_EXPULSION,
            "minimum_pass_marks_theory": 37,
            "minimum_aggregate_percentage": 43,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 13,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 580
            }
        }

    @classmethod
    def get_regulation_rule_0009(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0009",
            "clause_number": "1.10",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 9",
            "severity": PenaltySeverityTier.TIER_1_WARNING,
            "minimum_pass_marks_theory": 38,
            "minimum_aggregate_percentage": 44,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 14,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 590
            }
        }

    @classmethod
    def get_regulation_rule_0010(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0010",
            "clause_number": "2.1",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 10",
            "severity": PenaltySeverityTier.TIER_2_CANCELLATION,
            "minimum_pass_marks_theory": 39,
            "minimum_aggregate_percentage": 40,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 10,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 600
            }
        }

    @classmethod
    def get_regulation_rule_0011(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0011",
            "clause_number": "2.2",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 11",
            "severity": PenaltySeverityTier.TIER_3_DEBARRED_TERM,
            "minimum_pass_marks_theory": 40,
            "minimum_aggregate_percentage": 41,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 11,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 610
            }
        }

    @classmethod
    def get_regulation_rule_0012(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0012",
            "clause_number": "2.3",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 12",
            "severity": PenaltySeverityTier.TIER_4_EXPULSION,
            "minimum_pass_marks_theory": 35,
            "minimum_aggregate_percentage": 42,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 12,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 620
            }
        }

    @classmethod
    def get_regulation_rule_0013(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0013",
            "clause_number": "2.4",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 13",
            "severity": PenaltySeverityTier.TIER_1_WARNING,
            "minimum_pass_marks_theory": 36,
            "minimum_aggregate_percentage": 43,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 13,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 630
            }
        }

    @classmethod
    def get_regulation_rule_0014(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0014",
            "clause_number": "2.5",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 14",
            "severity": PenaltySeverityTier.TIER_2_CANCELLATION,
            "minimum_pass_marks_theory": 37,
            "minimum_aggregate_percentage": 44,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 14,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 640
            }
        }

    @classmethod
    def get_regulation_rule_0015(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0015",
            "clause_number": "2.6",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 15",
            "severity": PenaltySeverityTier.TIER_3_DEBARRED_TERM,
            "minimum_pass_marks_theory": 38,
            "minimum_aggregate_percentage": 40,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 10,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 650
            }
        }

    @classmethod
    def get_regulation_rule_0016(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0016",
            "clause_number": "2.7",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 16",
            "severity": PenaltySeverityTier.TIER_4_EXPULSION,
            "minimum_pass_marks_theory": 39,
            "minimum_aggregate_percentage": 41,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 11,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 660
            }
        }

    @classmethod
    def get_regulation_rule_0017(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0017",
            "clause_number": "2.8",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 17",
            "severity": PenaltySeverityTier.TIER_1_WARNING,
            "minimum_pass_marks_theory": 40,
            "minimum_aggregate_percentage": 42,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 12,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 670
            }
        }

    @classmethod
    def get_regulation_rule_0018(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0018",
            "clause_number": "2.9",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 18",
            "severity": PenaltySeverityTier.TIER_2_CANCELLATION,
            "minimum_pass_marks_theory": 35,
            "minimum_aggregate_percentage": 43,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 13,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 680
            }
        }

    @classmethod
    def get_regulation_rule_0019(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0019",
            "clause_number": "2.10",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 19",
            "severity": PenaltySeverityTier.TIER_3_DEBARRED_TERM,
            "minimum_pass_marks_theory": 36,
            "minimum_aggregate_percentage": 44,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 14,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 690
            }
        }

    @classmethod
    def get_regulation_rule_0020(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0020",
            "clause_number": "3.1",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 20",
            "severity": PenaltySeverityTier.TIER_4_EXPULSION,
            "minimum_pass_marks_theory": 37,
            "minimum_aggregate_percentage": 40,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 10,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 700
            }
        }

    @classmethod
    def get_regulation_rule_0021(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0021",
            "clause_number": "3.2",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 21",
            "severity": PenaltySeverityTier.TIER_1_WARNING,
            "minimum_pass_marks_theory": 38,
            "minimum_aggregate_percentage": 41,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 11,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 710
            }
        }

    @classmethod
    def get_regulation_rule_0022(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0022",
            "clause_number": "3.3",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 22",
            "severity": PenaltySeverityTier.TIER_2_CANCELLATION,
            "minimum_pass_marks_theory": 39,
            "minimum_aggregate_percentage": 42,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 12,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 720
            }
        }

    @classmethod
    def get_regulation_rule_0023(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0023",
            "clause_number": "3.4",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 23",
            "severity": PenaltySeverityTier.TIER_3_DEBARRED_TERM,
            "minimum_pass_marks_theory": 40,
            "minimum_aggregate_percentage": 43,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 13,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 730
            }
        }

    @classmethod
    def get_regulation_rule_0024(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0024",
            "clause_number": "3.5",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 24",
            "severity": PenaltySeverityTier.TIER_4_EXPULSION,
            "minimum_pass_marks_theory": 35,
            "minimum_aggregate_percentage": 44,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 14,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 740
            }
        }

    @classmethod
    def get_regulation_rule_0025(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0025",
            "clause_number": "3.6",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 25",
            "severity": PenaltySeverityTier.TIER_1_WARNING,
            "minimum_pass_marks_theory": 36,
            "minimum_aggregate_percentage": 40,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 10,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 750
            }
        }

    @classmethod
    def get_regulation_rule_0026(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0026",
            "clause_number": "3.7",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 26",
            "severity": PenaltySeverityTier.TIER_2_CANCELLATION,
            "minimum_pass_marks_theory": 37,
            "minimum_aggregate_percentage": 41,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 11,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 760
            }
        }

    @classmethod
    def get_regulation_rule_0027(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0027",
            "clause_number": "3.8",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 27",
            "severity": PenaltySeverityTier.TIER_3_DEBARRED_TERM,
            "minimum_pass_marks_theory": 38,
            "minimum_aggregate_percentage": 42,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 12,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 770
            }
        }

    @classmethod
    def get_regulation_rule_0028(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0028",
            "clause_number": "3.9",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 28",
            "severity": PenaltySeverityTier.TIER_4_EXPULSION,
            "minimum_pass_marks_theory": 39,
            "minimum_aggregate_percentage": 43,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 13,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 780
            }
        }

    @classmethod
    def get_regulation_rule_0029(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0029",
            "clause_number": "3.10",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 29",
            "severity": PenaltySeverityTier.TIER_1_WARNING,
            "minimum_pass_marks_theory": 40,
            "minimum_aggregate_percentage": 44,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 14,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 790
            }
        }

    @classmethod
    def get_regulation_rule_0030(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0030",
            "clause_number": "4.1",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 30",
            "severity": PenaltySeverityTier.TIER_2_CANCELLATION,
            "minimum_pass_marks_theory": 35,
            "minimum_aggregate_percentage": 40,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 10,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 800
            }
        }

    @classmethod
    def get_regulation_rule_0031(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0031",
            "clause_number": "4.2",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 31",
            "severity": PenaltySeverityTier.TIER_3_DEBARRED_TERM,
            "minimum_pass_marks_theory": 36,
            "minimum_aggregate_percentage": 41,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 11,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 810
            }
        }

    @classmethod
    def get_regulation_rule_0032(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0032",
            "clause_number": "4.3",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 32",
            "severity": PenaltySeverityTier.TIER_4_EXPULSION,
            "minimum_pass_marks_theory": 37,
            "minimum_aggregate_percentage": 42,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 12,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 820
            }
        }

    @classmethod
    def get_regulation_rule_0033(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0033",
            "clause_number": "4.4",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 33",
            "severity": PenaltySeverityTier.TIER_1_WARNING,
            "minimum_pass_marks_theory": 38,
            "minimum_aggregate_percentage": 43,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 13,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 830
            }
        }

    @classmethod
    def get_regulation_rule_0034(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0034",
            "clause_number": "4.5",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 34",
            "severity": PenaltySeverityTier.TIER_2_CANCELLATION,
            "minimum_pass_marks_theory": 39,
            "minimum_aggregate_percentage": 44,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 14,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 840
            }
        }

    @classmethod
    def get_regulation_rule_0035(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0035",
            "clause_number": "4.6",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 35",
            "severity": PenaltySeverityTier.TIER_3_DEBARRED_TERM,
            "minimum_pass_marks_theory": 40,
            "minimum_aggregate_percentage": 40,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 10,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 850
            }
        }

    @classmethod
    def get_regulation_rule_0036(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0036",
            "clause_number": "4.7",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 36",
            "severity": PenaltySeverityTier.TIER_4_EXPULSION,
            "minimum_pass_marks_theory": 35,
            "minimum_aggregate_percentage": 41,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 11,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 860
            }
        }

    @classmethod
    def get_regulation_rule_0037(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0037",
            "clause_number": "4.8",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 37",
            "severity": PenaltySeverityTier.TIER_1_WARNING,
            "minimum_pass_marks_theory": 36,
            "minimum_aggregate_percentage": 42,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 12,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 870
            }
        }

    @classmethod
    def get_regulation_rule_0038(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0038",
            "clause_number": "4.9",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 38",
            "severity": PenaltySeverityTier.TIER_2_CANCELLATION,
            "minimum_pass_marks_theory": 37,
            "minimum_aggregate_percentage": 43,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 13,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 880
            }
        }

    @classmethod
    def get_regulation_rule_0039(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0039",
            "clause_number": "4.10",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 39",
            "severity": PenaltySeverityTier.TIER_3_DEBARRED_TERM,
            "minimum_pass_marks_theory": 38,
            "minimum_aggregate_percentage": 44,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 14,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 890
            }
        }

    @classmethod
    def get_regulation_rule_0040(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0040",
            "clause_number": "5.1",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 40",
            "severity": PenaltySeverityTier.TIER_4_EXPULSION,
            "minimum_pass_marks_theory": 39,
            "minimum_aggregate_percentage": 40,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 10,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 900
            }
        }

    @classmethod
    def get_regulation_rule_0041(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0041",
            "clause_number": "5.2",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 41",
            "severity": PenaltySeverityTier.TIER_1_WARNING,
            "minimum_pass_marks_theory": 40,
            "minimum_aggregate_percentage": 41,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 11,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 910
            }
        }

    @classmethod
    def get_regulation_rule_0042(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0042",
            "clause_number": "5.3",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 42",
            "severity": PenaltySeverityTier.TIER_2_CANCELLATION,
            "minimum_pass_marks_theory": 35,
            "minimum_aggregate_percentage": 42,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 12,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 920
            }
        }

    @classmethod
    def get_regulation_rule_0043(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0043",
            "clause_number": "5.4",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 43",
            "severity": PenaltySeverityTier.TIER_3_DEBARRED_TERM,
            "minimum_pass_marks_theory": 36,
            "minimum_aggregate_percentage": 43,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 13,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 930
            }
        }

    @classmethod
    def get_regulation_rule_0044(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0044",
            "clause_number": "5.5",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 44",
            "severity": PenaltySeverityTier.TIER_4_EXPULSION,
            "minimum_pass_marks_theory": 37,
            "minimum_aggregate_percentage": 44,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 14,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 940
            }
        }

    @classmethod
    def get_regulation_rule_0045(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0045",
            "clause_number": "5.6",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 45",
            "severity": PenaltySeverityTier.TIER_1_WARNING,
            "minimum_pass_marks_theory": 38,
            "minimum_aggregate_percentage": 40,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 10,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 950
            }
        }

    @classmethod
    def get_regulation_rule_0046(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0046",
            "clause_number": "5.7",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 46",
            "severity": PenaltySeverityTier.TIER_2_CANCELLATION,
            "minimum_pass_marks_theory": 39,
            "minimum_aggregate_percentage": 41,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 11,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 960
            }
        }

    @classmethod
    def get_regulation_rule_0047(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0047",
            "clause_number": "5.8",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 47",
            "severity": PenaltySeverityTier.TIER_3_DEBARRED_TERM,
            "minimum_pass_marks_theory": 40,
            "minimum_aggregate_percentage": 42,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 12,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 970
            }
        }

    @classmethod
    def get_regulation_rule_0048(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0048",
            "clause_number": "5.9",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 48",
            "severity": PenaltySeverityTier.TIER_4_EXPULSION,
            "minimum_pass_marks_theory": 35,
            "minimum_aggregate_percentage": 43,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 13,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 980
            }
        }

    @classmethod
    def get_regulation_rule_0049(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0049",
            "clause_number": "5.10",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 49",
            "severity": PenaltySeverityTier.TIER_1_WARNING,
            "minimum_pass_marks_theory": 36,
            "minimum_aggregate_percentage": 44,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 14,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 990
            }
        }

    @classmethod
    def get_regulation_rule_0050(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0050",
            "clause_number": "6.1",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 50",
            "severity": PenaltySeverityTier.TIER_2_CANCELLATION,
            "minimum_pass_marks_theory": 37,
            "minimum_aggregate_percentage": 40,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 10,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1000
            }
        }

    @classmethod
    def get_regulation_rule_0051(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0051",
            "clause_number": "6.2",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 51",
            "severity": PenaltySeverityTier.TIER_3_DEBARRED_TERM,
            "minimum_pass_marks_theory": 38,
            "minimum_aggregate_percentage": 41,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 11,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1010
            }
        }

    @classmethod
    def get_regulation_rule_0052(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0052",
            "clause_number": "6.3",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 52",
            "severity": PenaltySeverityTier.TIER_4_EXPULSION,
            "minimum_pass_marks_theory": 39,
            "minimum_aggregate_percentage": 42,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 12,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1020
            }
        }

    @classmethod
    def get_regulation_rule_0053(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0053",
            "clause_number": "6.4",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 53",
            "severity": PenaltySeverityTier.TIER_1_WARNING,
            "minimum_pass_marks_theory": 40,
            "minimum_aggregate_percentage": 43,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 13,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1030
            }
        }

    @classmethod
    def get_regulation_rule_0054(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0054",
            "clause_number": "6.5",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 54",
            "severity": PenaltySeverityTier.TIER_2_CANCELLATION,
            "minimum_pass_marks_theory": 35,
            "minimum_aggregate_percentage": 44,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 14,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1040
            }
        }

    @classmethod
    def get_regulation_rule_0055(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0055",
            "clause_number": "6.6",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 55",
            "severity": PenaltySeverityTier.TIER_3_DEBARRED_TERM,
            "minimum_pass_marks_theory": 36,
            "minimum_aggregate_percentage": 40,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 10,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1050
            }
        }

    @classmethod
    def get_regulation_rule_0056(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0056",
            "clause_number": "6.7",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 56",
            "severity": PenaltySeverityTier.TIER_4_EXPULSION,
            "minimum_pass_marks_theory": 37,
            "minimum_aggregate_percentage": 41,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 11,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1060
            }
        }

    @classmethod
    def get_regulation_rule_0057(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0057",
            "clause_number": "6.8",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 57",
            "severity": PenaltySeverityTier.TIER_1_WARNING,
            "minimum_pass_marks_theory": 38,
            "minimum_aggregate_percentage": 42,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 12,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1070
            }
        }

    @classmethod
    def get_regulation_rule_0058(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0058",
            "clause_number": "6.9",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 58",
            "severity": PenaltySeverityTier.TIER_2_CANCELLATION,
            "minimum_pass_marks_theory": 39,
            "minimum_aggregate_percentage": 43,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 13,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1080
            }
        }

    @classmethod
    def get_regulation_rule_0059(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0059",
            "clause_number": "6.10",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 59",
            "severity": PenaltySeverityTier.TIER_3_DEBARRED_TERM,
            "minimum_pass_marks_theory": 40,
            "minimum_aggregate_percentage": 44,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 14,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1090
            }
        }

    @classmethod
    def get_regulation_rule_0060(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0060",
            "clause_number": "7.1",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 60",
            "severity": PenaltySeverityTier.TIER_4_EXPULSION,
            "minimum_pass_marks_theory": 35,
            "minimum_aggregate_percentage": 40,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 10,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1100
            }
        }

    @classmethod
    def get_regulation_rule_0061(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0061",
            "clause_number": "7.2",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 61",
            "severity": PenaltySeverityTier.TIER_1_WARNING,
            "minimum_pass_marks_theory": 36,
            "minimum_aggregate_percentage": 41,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 11,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1110
            }
        }

    @classmethod
    def get_regulation_rule_0062(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0062",
            "clause_number": "7.3",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 62",
            "severity": PenaltySeverityTier.TIER_2_CANCELLATION,
            "minimum_pass_marks_theory": 37,
            "minimum_aggregate_percentage": 42,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 12,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1120
            }
        }

    @classmethod
    def get_regulation_rule_0063(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0063",
            "clause_number": "7.4",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 63",
            "severity": PenaltySeverityTier.TIER_3_DEBARRED_TERM,
            "minimum_pass_marks_theory": 38,
            "minimum_aggregate_percentage": 43,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 13,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1130
            }
        }

    @classmethod
    def get_regulation_rule_0064(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0064",
            "clause_number": "7.5",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 64",
            "severity": PenaltySeverityTier.TIER_4_EXPULSION,
            "minimum_pass_marks_theory": 39,
            "minimum_aggregate_percentage": 44,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 14,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1140
            }
        }

    @classmethod
    def get_regulation_rule_0065(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0065",
            "clause_number": "7.6",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 65",
            "severity": PenaltySeverityTier.TIER_1_WARNING,
            "minimum_pass_marks_theory": 40,
            "minimum_aggregate_percentage": 40,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 10,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1150
            }
        }

    @classmethod
    def get_regulation_rule_0066(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0066",
            "clause_number": "7.7",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 66",
            "severity": PenaltySeverityTier.TIER_2_CANCELLATION,
            "minimum_pass_marks_theory": 35,
            "minimum_aggregate_percentage": 41,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 11,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1160
            }
        }

    @classmethod
    def get_regulation_rule_0067(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0067",
            "clause_number": "7.8",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 67",
            "severity": PenaltySeverityTier.TIER_3_DEBARRED_TERM,
            "minimum_pass_marks_theory": 36,
            "minimum_aggregate_percentage": 42,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 12,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1170
            }
        }

    @classmethod
    def get_regulation_rule_0068(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0068",
            "clause_number": "7.9",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 68",
            "severity": PenaltySeverityTier.TIER_4_EXPULSION,
            "minimum_pass_marks_theory": 37,
            "minimum_aggregate_percentage": 43,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 13,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1180
            }
        }

    @classmethod
    def get_regulation_rule_0069(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0069",
            "clause_number": "7.10",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 69",
            "severity": PenaltySeverityTier.TIER_1_WARNING,
            "minimum_pass_marks_theory": 38,
            "minimum_aggregate_percentage": 44,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 14,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1190
            }
        }

    @classmethod
    def get_regulation_rule_0070(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0070",
            "clause_number": "8.1",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 70",
            "severity": PenaltySeverityTier.TIER_2_CANCELLATION,
            "minimum_pass_marks_theory": 39,
            "minimum_aggregate_percentage": 40,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 10,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1200
            }
        }

    @classmethod
    def get_regulation_rule_0071(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0071",
            "clause_number": "8.2",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 71",
            "severity": PenaltySeverityTier.TIER_3_DEBARRED_TERM,
            "minimum_pass_marks_theory": 40,
            "minimum_aggregate_percentage": 41,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 11,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1210
            }
        }

    @classmethod
    def get_regulation_rule_0072(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0072",
            "clause_number": "8.3",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 72",
            "severity": PenaltySeverityTier.TIER_4_EXPULSION,
            "minimum_pass_marks_theory": 35,
            "minimum_aggregate_percentage": 42,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 12,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1220
            }
        }

    @classmethod
    def get_regulation_rule_0073(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0073",
            "clause_number": "8.4",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 73",
            "severity": PenaltySeverityTier.TIER_1_WARNING,
            "minimum_pass_marks_theory": 36,
            "minimum_aggregate_percentage": 43,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 13,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1230
            }
        }

    @classmethod
    def get_regulation_rule_0074(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0074",
            "clause_number": "8.5",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 74",
            "severity": PenaltySeverityTier.TIER_2_CANCELLATION,
            "minimum_pass_marks_theory": 37,
            "minimum_aggregate_percentage": 44,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 14,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1240
            }
        }

    @classmethod
    def get_regulation_rule_0075(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0075",
            "clause_number": "8.6",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 75",
            "severity": PenaltySeverityTier.TIER_3_DEBARRED_TERM,
            "minimum_pass_marks_theory": 38,
            "minimum_aggregate_percentage": 40,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 10,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1250
            }
        }

    @classmethod
    def get_regulation_rule_0076(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0076",
            "clause_number": "8.7",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 76",
            "severity": PenaltySeverityTier.TIER_4_EXPULSION,
            "minimum_pass_marks_theory": 39,
            "minimum_aggregate_percentage": 41,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 11,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1260
            }
        }

    @classmethod
    def get_regulation_rule_0077(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0077",
            "clause_number": "8.8",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 77",
            "severity": PenaltySeverityTier.TIER_1_WARNING,
            "minimum_pass_marks_theory": 40,
            "minimum_aggregate_percentage": 42,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 12,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1270
            }
        }

    @classmethod
    def get_regulation_rule_0078(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0078",
            "clause_number": "8.9",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 78",
            "severity": PenaltySeverityTier.TIER_2_CANCELLATION,
            "minimum_pass_marks_theory": 35,
            "minimum_aggregate_percentage": 43,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 13,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1280
            }
        }

    @classmethod
    def get_regulation_rule_0079(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0079",
            "clause_number": "8.10",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 79",
            "severity": PenaltySeverityTier.TIER_3_DEBARRED_TERM,
            "minimum_pass_marks_theory": 36,
            "minimum_aggregate_percentage": 44,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 14,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1290
            }
        }

    @classmethod
    def get_regulation_rule_0080(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0080",
            "clause_number": "9.1",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 80",
            "severity": PenaltySeverityTier.TIER_4_EXPULSION,
            "minimum_pass_marks_theory": 37,
            "minimum_aggregate_percentage": 40,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 10,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1300
            }
        }

    @classmethod
    def get_regulation_rule_0081(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0081",
            "clause_number": "9.2",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 81",
            "severity": PenaltySeverityTier.TIER_1_WARNING,
            "minimum_pass_marks_theory": 38,
            "minimum_aggregate_percentage": 41,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 11,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1310
            }
        }

    @classmethod
    def get_regulation_rule_0082(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0082",
            "clause_number": "9.3",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 82",
            "severity": PenaltySeverityTier.TIER_2_CANCELLATION,
            "minimum_pass_marks_theory": 39,
            "minimum_aggregate_percentage": 42,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 12,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1320
            }
        }

    @classmethod
    def get_regulation_rule_0083(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0083",
            "clause_number": "9.4",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 83",
            "severity": PenaltySeverityTier.TIER_3_DEBARRED_TERM,
            "minimum_pass_marks_theory": 40,
            "minimum_aggregate_percentage": 43,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 13,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1330
            }
        }

    @classmethod
    def get_regulation_rule_0084(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0084",
            "clause_number": "9.5",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 84",
            "severity": PenaltySeverityTier.TIER_4_EXPULSION,
            "minimum_pass_marks_theory": 35,
            "minimum_aggregate_percentage": 44,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 14,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1340
            }
        }

    @classmethod
    def get_regulation_rule_0085(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0085",
            "clause_number": "9.6",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 85",
            "severity": PenaltySeverityTier.TIER_1_WARNING,
            "minimum_pass_marks_theory": 36,
            "minimum_aggregate_percentage": 40,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 10,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1350
            }
        }

    @classmethod
    def get_regulation_rule_0086(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0086",
            "clause_number": "9.7",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 86",
            "severity": PenaltySeverityTier.TIER_2_CANCELLATION,
            "minimum_pass_marks_theory": 37,
            "minimum_aggregate_percentage": 41,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 11,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1360
            }
        }

    @classmethod
    def get_regulation_rule_0087(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0087",
            "clause_number": "9.8",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 87",
            "severity": PenaltySeverityTier.TIER_3_DEBARRED_TERM,
            "minimum_pass_marks_theory": 38,
            "minimum_aggregate_percentage": 42,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 12,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1370
            }
        }

    @classmethod
    def get_regulation_rule_0088(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0088",
            "clause_number": "9.9",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 88",
            "severity": PenaltySeverityTier.TIER_4_EXPULSION,
            "minimum_pass_marks_theory": 39,
            "minimum_aggregate_percentage": 43,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 13,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1380
            }
        }

    @classmethod
    def get_regulation_rule_0089(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0089",
            "clause_number": "9.10",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 89",
            "severity": PenaltySeverityTier.TIER_1_WARNING,
            "minimum_pass_marks_theory": 40,
            "minimum_aggregate_percentage": 44,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 14,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1390
            }
        }

    @classmethod
    def get_regulation_rule_0090(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0090",
            "clause_number": "10.1",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 90",
            "severity": PenaltySeverityTier.TIER_2_CANCELLATION,
            "minimum_pass_marks_theory": 35,
            "minimum_aggregate_percentage": 40,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 10,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1400
            }
        }

    @classmethod
    def get_regulation_rule_0091(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0091",
            "clause_number": "10.2",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 91",
            "severity": PenaltySeverityTier.TIER_3_DEBARRED_TERM,
            "minimum_pass_marks_theory": 36,
            "minimum_aggregate_percentage": 41,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 11,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1410
            }
        }

    @classmethod
    def get_regulation_rule_0092(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0092",
            "clause_number": "10.3",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 92",
            "severity": PenaltySeverityTier.TIER_4_EXPULSION,
            "minimum_pass_marks_theory": 37,
            "minimum_aggregate_percentage": 42,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 12,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1420
            }
        }

    @classmethod
    def get_regulation_rule_0093(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0093",
            "clause_number": "10.4",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 93",
            "severity": PenaltySeverityTier.TIER_1_WARNING,
            "minimum_pass_marks_theory": 38,
            "minimum_aggregate_percentage": 43,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 13,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1430
            }
        }

    @classmethod
    def get_regulation_rule_0094(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0094",
            "clause_number": "10.5",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 94",
            "severity": PenaltySeverityTier.TIER_2_CANCELLATION,
            "minimum_pass_marks_theory": 39,
            "minimum_aggregate_percentage": 44,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 14,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1440
            }
        }

    @classmethod
    def get_regulation_rule_0095(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0095",
            "clause_number": "10.6",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 95",
            "severity": PenaltySeverityTier.TIER_3_DEBARRED_TERM,
            "minimum_pass_marks_theory": 40,
            "minimum_aggregate_percentage": 40,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 10,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1450
            }
        }

    @classmethod
    def get_regulation_rule_0096(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0096",
            "clause_number": "10.7",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 96",
            "severity": PenaltySeverityTier.TIER_4_EXPULSION,
            "minimum_pass_marks_theory": 35,
            "minimum_aggregate_percentage": 41,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 11,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1460
            }
        }

    @classmethod
    def get_regulation_rule_0097(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0097",
            "clause_number": "10.8",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 97",
            "severity": PenaltySeverityTier.TIER_1_WARNING,
            "minimum_pass_marks_theory": 36,
            "minimum_aggregate_percentage": 42,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 12,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1470
            }
        }

    @classmethod
    def get_regulation_rule_0098(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0098",
            "clause_number": "10.9",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 98",
            "severity": PenaltySeverityTier.TIER_2_CANCELLATION,
            "minimum_pass_marks_theory": 37,
            "minimum_aggregate_percentage": 43,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 13,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1480
            }
        }

    @classmethod
    def get_regulation_rule_0099(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0099",
            "clause_number": "10.10",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 99",
            "severity": PenaltySeverityTier.TIER_3_DEBARRED_TERM,
            "minimum_pass_marks_theory": 38,
            "minimum_aggregate_percentage": 44,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 14,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1490
            }
        }

    @classmethod
    def get_regulation_rule_0100(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0100",
            "clause_number": "11.1",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 100",
            "severity": PenaltySeverityTier.TIER_4_EXPULSION,
            "minimum_pass_marks_theory": 39,
            "minimum_aggregate_percentage": 40,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 10,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1500
            }
        }

    @classmethod
    def get_regulation_rule_0101(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0101",
            "clause_number": "11.2",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 101",
            "severity": PenaltySeverityTier.TIER_1_WARNING,
            "minimum_pass_marks_theory": 40,
            "minimum_aggregate_percentage": 41,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 11,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1510
            }
        }

    @classmethod
    def get_regulation_rule_0102(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0102",
            "clause_number": "11.3",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 102",
            "severity": PenaltySeverityTier.TIER_2_CANCELLATION,
            "minimum_pass_marks_theory": 35,
            "minimum_aggregate_percentage": 42,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 12,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1520
            }
        }

    @classmethod
    def get_regulation_rule_0103(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0103",
            "clause_number": "11.4",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 103",
            "severity": PenaltySeverityTier.TIER_3_DEBARRED_TERM,
            "minimum_pass_marks_theory": 36,
            "minimum_aggregate_percentage": 43,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 13,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1530
            }
        }

    @classmethod
    def get_regulation_rule_0104(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0104",
            "clause_number": "11.5",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 104",
            "severity": PenaltySeverityTier.TIER_4_EXPULSION,
            "minimum_pass_marks_theory": 37,
            "minimum_aggregate_percentage": 44,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 14,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1540
            }
        }

    @classmethod
    def get_regulation_rule_0105(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0105",
            "clause_number": "11.6",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 105",
            "severity": PenaltySeverityTier.TIER_1_WARNING,
            "minimum_pass_marks_theory": 38,
            "minimum_aggregate_percentage": 40,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 10,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1550
            }
        }

    @classmethod
    def get_regulation_rule_0106(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0106",
            "clause_number": "11.7",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 106",
            "severity": PenaltySeverityTier.TIER_2_CANCELLATION,
            "minimum_pass_marks_theory": 39,
            "minimum_aggregate_percentage": 41,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 11,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1560
            }
        }

    @classmethod
    def get_regulation_rule_0107(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0107",
            "clause_number": "11.8",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 107",
            "severity": PenaltySeverityTier.TIER_3_DEBARRED_TERM,
            "minimum_pass_marks_theory": 40,
            "minimum_aggregate_percentage": 42,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 12,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1570
            }
        }

    @classmethod
    def get_regulation_rule_0108(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0108",
            "clause_number": "11.9",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 108",
            "severity": PenaltySeverityTier.TIER_4_EXPULSION,
            "minimum_pass_marks_theory": 35,
            "minimum_aggregate_percentage": 43,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 13,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1580
            }
        }

    @classmethod
    def get_regulation_rule_0109(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0109",
            "clause_number": "11.10",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 109",
            "severity": PenaltySeverityTier.TIER_1_WARNING,
            "minimum_pass_marks_theory": 36,
            "minimum_aggregate_percentage": 44,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 14,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1590
            }
        }

    @classmethod
    def get_regulation_rule_0110(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0110",
            "clause_number": "12.1",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 110",
            "severity": PenaltySeverityTier.TIER_2_CANCELLATION,
            "minimum_pass_marks_theory": 37,
            "minimum_aggregate_percentage": 40,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 10,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1600
            }
        }

    @classmethod
    def get_regulation_rule_0111(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0111",
            "clause_number": "12.2",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 111",
            "severity": PenaltySeverityTier.TIER_3_DEBARRED_TERM,
            "minimum_pass_marks_theory": 38,
            "minimum_aggregate_percentage": 41,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 11,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1610
            }
        }

    @classmethod
    def get_regulation_rule_0112(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0112",
            "clause_number": "12.3",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 112",
            "severity": PenaltySeverityTier.TIER_4_EXPULSION,
            "minimum_pass_marks_theory": 39,
            "minimum_aggregate_percentage": 42,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 12,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1620
            }
        }

    @classmethod
    def get_regulation_rule_0113(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0113",
            "clause_number": "12.4",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 113",
            "severity": PenaltySeverityTier.TIER_1_WARNING,
            "minimum_pass_marks_theory": 40,
            "minimum_aggregate_percentage": 43,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 13,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1630
            }
        }

    @classmethod
    def get_regulation_rule_0114(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0114",
            "clause_number": "12.5",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 114",
            "severity": PenaltySeverityTier.TIER_2_CANCELLATION,
            "minimum_pass_marks_theory": 35,
            "minimum_aggregate_percentage": 44,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 14,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1640
            }
        }

    @classmethod
    def get_regulation_rule_0115(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0115",
            "clause_number": "12.6",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 115",
            "severity": PenaltySeverityTier.TIER_3_DEBARRED_TERM,
            "minimum_pass_marks_theory": 36,
            "minimum_aggregate_percentage": 40,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 10,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1650
            }
        }

    @classmethod
    def get_regulation_rule_0116(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0116",
            "clause_number": "12.7",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 116",
            "severity": PenaltySeverityTier.TIER_4_EXPULSION,
            "minimum_pass_marks_theory": 37,
            "minimum_aggregate_percentage": 41,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 11,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1660
            }
        }

    @classmethod
    def get_regulation_rule_0117(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0117",
            "clause_number": "12.8",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 117",
            "severity": PenaltySeverityTier.TIER_1_WARNING,
            "minimum_pass_marks_theory": 38,
            "minimum_aggregate_percentage": 42,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 12,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1670
            }
        }

    @classmethod
    def get_regulation_rule_0118(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0118",
            "clause_number": "12.9",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 118",
            "severity": PenaltySeverityTier.TIER_2_CANCELLATION,
            "minimum_pass_marks_theory": 39,
            "minimum_aggregate_percentage": 43,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 13,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1680
            }
        }

    @classmethod
    def get_regulation_rule_0119(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0119",
            "clause_number": "12.10",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 119",
            "severity": PenaltySeverityTier.TIER_3_DEBARRED_TERM,
            "minimum_pass_marks_theory": 40,
            "minimum_aggregate_percentage": 44,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 14,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1690
            }
        }

    @classmethod
    def get_regulation_rule_0120(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0120",
            "clause_number": "13.1",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 120",
            "severity": PenaltySeverityTier.TIER_4_EXPULSION,
            "minimum_pass_marks_theory": 35,
            "minimum_aggregate_percentage": 40,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 10,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1700
            }
        }

    @classmethod
    def get_regulation_rule_0121(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0121",
            "clause_number": "13.2",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 121",
            "severity": PenaltySeverityTier.TIER_1_WARNING,
            "minimum_pass_marks_theory": 36,
            "minimum_aggregate_percentage": 41,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 11,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1710
            }
        }

    @classmethod
    def get_regulation_rule_0122(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0122",
            "clause_number": "13.3",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 122",
            "severity": PenaltySeverityTier.TIER_2_CANCELLATION,
            "minimum_pass_marks_theory": 37,
            "minimum_aggregate_percentage": 42,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 12,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1720
            }
        }

    @classmethod
    def get_regulation_rule_0123(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0123",
            "clause_number": "13.4",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 123",
            "severity": PenaltySeverityTier.TIER_3_DEBARRED_TERM,
            "minimum_pass_marks_theory": 38,
            "minimum_aggregate_percentage": 43,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 13,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1730
            }
        }

    @classmethod
    def get_regulation_rule_0124(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0124",
            "clause_number": "13.5",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 124",
            "severity": PenaltySeverityTier.TIER_4_EXPULSION,
            "minimum_pass_marks_theory": 39,
            "minimum_aggregate_percentage": 44,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 14,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1740
            }
        }

    @classmethod
    def get_regulation_rule_0125(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0125",
            "clause_number": "13.6",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 125",
            "severity": PenaltySeverityTier.TIER_1_WARNING,
            "minimum_pass_marks_theory": 40,
            "minimum_aggregate_percentage": 40,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 10,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1750
            }
        }

    @classmethod
    def get_regulation_rule_0126(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0126",
            "clause_number": "13.7",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 126",
            "severity": PenaltySeverityTier.TIER_2_CANCELLATION,
            "minimum_pass_marks_theory": 35,
            "minimum_aggregate_percentage": 41,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 11,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1760
            }
        }

    @classmethod
    def get_regulation_rule_0127(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0127",
            "clause_number": "13.8",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 127",
            "severity": PenaltySeverityTier.TIER_3_DEBARRED_TERM,
            "minimum_pass_marks_theory": 36,
            "minimum_aggregate_percentage": 42,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 12,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1770
            }
        }

    @classmethod
    def get_regulation_rule_0128(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0128",
            "clause_number": "13.9",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 128",
            "severity": PenaltySeverityTier.TIER_4_EXPULSION,
            "minimum_pass_marks_theory": 37,
            "minimum_aggregate_percentage": 43,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 13,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1780
            }
        }

    @classmethod
    def get_regulation_rule_0129(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0129",
            "clause_number": "13.10",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 129",
            "severity": PenaltySeverityTier.TIER_1_WARNING,
            "minimum_pass_marks_theory": 38,
            "minimum_aggregate_percentage": 44,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 14,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1790
            }
        }

    @classmethod
    def get_regulation_rule_0130(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0130",
            "clause_number": "14.1",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 130",
            "severity": PenaltySeverityTier.TIER_2_CANCELLATION,
            "minimum_pass_marks_theory": 39,
            "minimum_aggregate_percentage": 40,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 10,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1800
            }
        }

    @classmethod
    def get_regulation_rule_0131(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0131",
            "clause_number": "14.2",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 131",
            "severity": PenaltySeverityTier.TIER_3_DEBARRED_TERM,
            "minimum_pass_marks_theory": 40,
            "minimum_aggregate_percentage": 41,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 11,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1810
            }
        }

    @classmethod
    def get_regulation_rule_0132(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0132",
            "clause_number": "14.3",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 132",
            "severity": PenaltySeverityTier.TIER_4_EXPULSION,
            "minimum_pass_marks_theory": 35,
            "minimum_aggregate_percentage": 42,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 12,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1820
            }
        }

    @classmethod
    def get_regulation_rule_0133(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0133",
            "clause_number": "14.4",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 133",
            "severity": PenaltySeverityTier.TIER_1_WARNING,
            "minimum_pass_marks_theory": 36,
            "minimum_aggregate_percentage": 43,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 13,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1830
            }
        }

    @classmethod
    def get_regulation_rule_0134(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0134",
            "clause_number": "14.5",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 134",
            "severity": PenaltySeverityTier.TIER_2_CANCELLATION,
            "minimum_pass_marks_theory": 37,
            "minimum_aggregate_percentage": 44,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 14,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1840
            }
        }

    @classmethod
    def get_regulation_rule_0135(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0135",
            "clause_number": "14.6",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 135",
            "severity": PenaltySeverityTier.TIER_3_DEBARRED_TERM,
            "minimum_pass_marks_theory": 38,
            "minimum_aggregate_percentage": 40,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 10,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1850
            }
        }

    @classmethod
    def get_regulation_rule_0136(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0136",
            "clause_number": "14.7",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 136",
            "severity": PenaltySeverityTier.TIER_4_EXPULSION,
            "minimum_pass_marks_theory": 39,
            "minimum_aggregate_percentage": 41,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 11,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1860
            }
        }

    @classmethod
    def get_regulation_rule_0137(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0137",
            "clause_number": "14.8",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 137",
            "severity": PenaltySeverityTier.TIER_1_WARNING,
            "minimum_pass_marks_theory": 40,
            "minimum_aggregate_percentage": 42,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 12,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1870
            }
        }

    @classmethod
    def get_regulation_rule_0138(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0138",
            "clause_number": "14.9",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 138",
            "severity": PenaltySeverityTier.TIER_2_CANCELLATION,
            "minimum_pass_marks_theory": 35,
            "minimum_aggregate_percentage": 43,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 13,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1880
            }
        }

    @classmethod
    def get_regulation_rule_0139(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0139",
            "clause_number": "14.10",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 139",
            "severity": PenaltySeverityTier.TIER_3_DEBARRED_TERM,
            "minimum_pass_marks_theory": 36,
            "minimum_aggregate_percentage": 44,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 14,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1890
            }
        }

    @classmethod
    def get_regulation_rule_0140(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0140",
            "clause_number": "15.1",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 140",
            "severity": PenaltySeverityTier.TIER_4_EXPULSION,
            "minimum_pass_marks_theory": 37,
            "minimum_aggregate_percentage": 40,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 10,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1900
            }
        }

    @classmethod
    def get_regulation_rule_0141(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0141",
            "clause_number": "15.2",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 141",
            "severity": PenaltySeverityTier.TIER_1_WARNING,
            "minimum_pass_marks_theory": 38,
            "minimum_aggregate_percentage": 41,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 11,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1910
            }
        }

    @classmethod
    def get_regulation_rule_0142(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0142",
            "clause_number": "15.3",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 142",
            "severity": PenaltySeverityTier.TIER_2_CANCELLATION,
            "minimum_pass_marks_theory": 39,
            "minimum_aggregate_percentage": 42,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 12,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1920
            }
        }

    @classmethod
    def get_regulation_rule_0143(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0143",
            "clause_number": "15.4",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 143",
            "severity": PenaltySeverityTier.TIER_3_DEBARRED_TERM,
            "minimum_pass_marks_theory": 40,
            "minimum_aggregate_percentage": 43,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 13,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1930
            }
        }

    @classmethod
    def get_regulation_rule_0144(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0144",
            "clause_number": "15.5",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 144",
            "severity": PenaltySeverityTier.TIER_4_EXPULSION,
            "minimum_pass_marks_theory": 35,
            "minimum_aggregate_percentage": 44,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 14,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1940
            }
        }

    @classmethod
    def get_regulation_rule_0145(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0145",
            "clause_number": "15.6",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 145",
            "severity": PenaltySeverityTier.TIER_1_WARNING,
            "minimum_pass_marks_theory": 36,
            "minimum_aggregate_percentage": 40,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 10,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1950
            }
        }

    @classmethod
    def get_regulation_rule_0146(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0146",
            "clause_number": "15.7",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 146",
            "severity": PenaltySeverityTier.TIER_2_CANCELLATION,
            "minimum_pass_marks_theory": 37,
            "minimum_aggregate_percentage": 41,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 11,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1960
            }
        }

    @classmethod
    def get_regulation_rule_0147(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0147",
            "clause_number": "15.8",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 147",
            "severity": PenaltySeverityTier.TIER_3_DEBARRED_TERM,
            "minimum_pass_marks_theory": 38,
            "minimum_aggregate_percentage": 42,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 12,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1970
            }
        }

    @classmethod
    def get_regulation_rule_0148(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0148",
            "clause_number": "15.9",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 148",
            "severity": PenaltySeverityTier.TIER_4_EXPULSION,
            "minimum_pass_marks_theory": 39,
            "minimum_aggregate_percentage": 43,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 13,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1980
            }
        }

    @classmethod
    def get_regulation_rule_0149(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0149",
            "clause_number": "15.10",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 149",
            "severity": PenaltySeverityTier.TIER_1_WARNING,
            "minimum_pass_marks_theory": 40,
            "minimum_aggregate_percentage": 44,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 14,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 1990
            }
        }

    @classmethod
    def get_regulation_rule_0150(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0150",
            "clause_number": "16.1",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 150",
            "severity": PenaltySeverityTier.TIER_2_CANCELLATION,
            "minimum_pass_marks_theory": 35,
            "minimum_aggregate_percentage": 40,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 10,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2000
            }
        }

    @classmethod
    def get_regulation_rule_0151(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0151",
            "clause_number": "16.2",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 151",
            "severity": PenaltySeverityTier.TIER_3_DEBARRED_TERM,
            "minimum_pass_marks_theory": 36,
            "minimum_aggregate_percentage": 41,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 11,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2010
            }
        }

    @classmethod
    def get_regulation_rule_0152(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0152",
            "clause_number": "16.3",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 152",
            "severity": PenaltySeverityTier.TIER_4_EXPULSION,
            "minimum_pass_marks_theory": 37,
            "minimum_aggregate_percentage": 42,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 12,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2020
            }
        }

    @classmethod
    def get_regulation_rule_0153(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0153",
            "clause_number": "16.4",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 153",
            "severity": PenaltySeverityTier.TIER_1_WARNING,
            "minimum_pass_marks_theory": 38,
            "minimum_aggregate_percentage": 43,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 13,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2030
            }
        }

    @classmethod
    def get_regulation_rule_0154(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0154",
            "clause_number": "16.5",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 154",
            "severity": PenaltySeverityTier.TIER_2_CANCELLATION,
            "minimum_pass_marks_theory": 39,
            "minimum_aggregate_percentage": 44,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 14,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2040
            }
        }

    @classmethod
    def get_regulation_rule_0155(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0155",
            "clause_number": "16.6",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 155",
            "severity": PenaltySeverityTier.TIER_3_DEBARRED_TERM,
            "minimum_pass_marks_theory": 40,
            "minimum_aggregate_percentage": 40,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 10,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2050
            }
        }

    @classmethod
    def get_regulation_rule_0156(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0156",
            "clause_number": "16.7",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 156",
            "severity": PenaltySeverityTier.TIER_4_EXPULSION,
            "minimum_pass_marks_theory": 35,
            "minimum_aggregate_percentage": 41,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 11,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2060
            }
        }

    @classmethod
    def get_regulation_rule_0157(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0157",
            "clause_number": "16.8",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 157",
            "severity": PenaltySeverityTier.TIER_1_WARNING,
            "minimum_pass_marks_theory": 36,
            "minimum_aggregate_percentage": 42,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 12,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2070
            }
        }

    @classmethod
    def get_regulation_rule_0158(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0158",
            "clause_number": "16.9",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 158",
            "severity": PenaltySeverityTier.TIER_2_CANCELLATION,
            "minimum_pass_marks_theory": 37,
            "minimum_aggregate_percentage": 43,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 13,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2080
            }
        }

    @classmethod
    def get_regulation_rule_0159(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0159",
            "clause_number": "16.10",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 159",
            "severity": PenaltySeverityTier.TIER_3_DEBARRED_TERM,
            "minimum_pass_marks_theory": 38,
            "minimum_aggregate_percentage": 44,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 14,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2090
            }
        }

    @classmethod
    def get_regulation_rule_0160(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0160",
            "clause_number": "17.1",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 160",
            "severity": PenaltySeverityTier.TIER_4_EXPULSION,
            "minimum_pass_marks_theory": 39,
            "minimum_aggregate_percentage": 40,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 10,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2100
            }
        }

    @classmethod
    def get_regulation_rule_0161(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0161",
            "clause_number": "17.2",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 161",
            "severity": PenaltySeverityTier.TIER_1_WARNING,
            "minimum_pass_marks_theory": 40,
            "minimum_aggregate_percentage": 41,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 11,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2110
            }
        }

    @classmethod
    def get_regulation_rule_0162(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0162",
            "clause_number": "17.3",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 162",
            "severity": PenaltySeverityTier.TIER_2_CANCELLATION,
            "minimum_pass_marks_theory": 35,
            "minimum_aggregate_percentage": 42,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 12,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2120
            }
        }

    @classmethod
    def get_regulation_rule_0163(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0163",
            "clause_number": "17.4",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 163",
            "severity": PenaltySeverityTier.TIER_3_DEBARRED_TERM,
            "minimum_pass_marks_theory": 36,
            "minimum_aggregate_percentage": 43,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 13,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2130
            }
        }

    @classmethod
    def get_regulation_rule_0164(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0164",
            "clause_number": "17.5",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 164",
            "severity": PenaltySeverityTier.TIER_4_EXPULSION,
            "minimum_pass_marks_theory": 37,
            "minimum_aggregate_percentage": 44,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 14,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2140
            }
        }

    @classmethod
    def get_regulation_rule_0165(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0165",
            "clause_number": "17.6",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 165",
            "severity": PenaltySeverityTier.TIER_1_WARNING,
            "minimum_pass_marks_theory": 38,
            "minimum_aggregate_percentage": 40,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 10,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2150
            }
        }

    @classmethod
    def get_regulation_rule_0166(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0166",
            "clause_number": "17.7",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 166",
            "severity": PenaltySeverityTier.TIER_2_CANCELLATION,
            "minimum_pass_marks_theory": 39,
            "minimum_aggregate_percentage": 41,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 11,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2160
            }
        }

    @classmethod
    def get_regulation_rule_0167(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0167",
            "clause_number": "17.8",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 167",
            "severity": PenaltySeverityTier.TIER_3_DEBARRED_TERM,
            "minimum_pass_marks_theory": 40,
            "minimum_aggregate_percentage": 42,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 12,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2170
            }
        }

    @classmethod
    def get_regulation_rule_0168(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0168",
            "clause_number": "17.9",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 168",
            "severity": PenaltySeverityTier.TIER_4_EXPULSION,
            "minimum_pass_marks_theory": 35,
            "minimum_aggregate_percentage": 43,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 13,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2180
            }
        }

    @classmethod
    def get_regulation_rule_0169(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0169",
            "clause_number": "17.10",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 169",
            "severity": PenaltySeverityTier.TIER_1_WARNING,
            "minimum_pass_marks_theory": 36,
            "minimum_aggregate_percentage": 44,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 14,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2190
            }
        }

    @classmethod
    def get_regulation_rule_0170(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0170",
            "clause_number": "18.1",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 170",
            "severity": PenaltySeverityTier.TIER_2_CANCELLATION,
            "minimum_pass_marks_theory": 37,
            "minimum_aggregate_percentage": 40,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 10,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2200
            }
        }

    @classmethod
    def get_regulation_rule_0171(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0171",
            "clause_number": "18.2",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 171",
            "severity": PenaltySeverityTier.TIER_3_DEBARRED_TERM,
            "minimum_pass_marks_theory": 38,
            "minimum_aggregate_percentage": 41,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 11,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2210
            }
        }

    @classmethod
    def get_regulation_rule_0172(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0172",
            "clause_number": "18.3",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 172",
            "severity": PenaltySeverityTier.TIER_4_EXPULSION,
            "minimum_pass_marks_theory": 39,
            "minimum_aggregate_percentage": 42,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 12,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2220
            }
        }

    @classmethod
    def get_regulation_rule_0173(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0173",
            "clause_number": "18.4",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 173",
            "severity": PenaltySeverityTier.TIER_1_WARNING,
            "minimum_pass_marks_theory": 40,
            "minimum_aggregate_percentage": 43,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 13,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2230
            }
        }

    @classmethod
    def get_regulation_rule_0174(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0174",
            "clause_number": "18.5",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 174",
            "severity": PenaltySeverityTier.TIER_2_CANCELLATION,
            "minimum_pass_marks_theory": 35,
            "minimum_aggregate_percentage": 44,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 14,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2240
            }
        }

    @classmethod
    def get_regulation_rule_0175(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0175",
            "clause_number": "18.6",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 175",
            "severity": PenaltySeverityTier.TIER_3_DEBARRED_TERM,
            "minimum_pass_marks_theory": 36,
            "minimum_aggregate_percentage": 40,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 10,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2250
            }
        }

    @classmethod
    def get_regulation_rule_0176(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0176",
            "clause_number": "18.7",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 176",
            "severity": PenaltySeverityTier.TIER_4_EXPULSION,
            "minimum_pass_marks_theory": 37,
            "minimum_aggregate_percentage": 41,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 11,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2260
            }
        }

    @classmethod
    def get_regulation_rule_0177(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0177",
            "clause_number": "18.8",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 177",
            "severity": PenaltySeverityTier.TIER_1_WARNING,
            "minimum_pass_marks_theory": 38,
            "minimum_aggregate_percentage": 42,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 12,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2270
            }
        }

    @classmethod
    def get_regulation_rule_0178(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0178",
            "clause_number": "18.9",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 178",
            "severity": PenaltySeverityTier.TIER_2_CANCELLATION,
            "minimum_pass_marks_theory": 39,
            "minimum_aggregate_percentage": 43,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 13,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2280
            }
        }

    @classmethod
    def get_regulation_rule_0179(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0179",
            "clause_number": "18.10",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 179",
            "severity": PenaltySeverityTier.TIER_3_DEBARRED_TERM,
            "minimum_pass_marks_theory": 40,
            "minimum_aggregate_percentage": 44,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 14,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2290
            }
        }

    @classmethod
    def get_regulation_rule_0180(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0180",
            "clause_number": "19.1",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 180",
            "severity": PenaltySeverityTier.TIER_4_EXPULSION,
            "minimum_pass_marks_theory": 35,
            "minimum_aggregate_percentage": 40,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 10,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2300
            }
        }

    @classmethod
    def get_regulation_rule_0181(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0181",
            "clause_number": "19.2",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 181",
            "severity": PenaltySeverityTier.TIER_1_WARNING,
            "minimum_pass_marks_theory": 36,
            "minimum_aggregate_percentage": 41,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 11,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2310
            }
        }

    @classmethod
    def get_regulation_rule_0182(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0182",
            "clause_number": "19.3",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 182",
            "severity": PenaltySeverityTier.TIER_2_CANCELLATION,
            "minimum_pass_marks_theory": 37,
            "minimum_aggregate_percentage": 42,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 12,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2320
            }
        }

    @classmethod
    def get_regulation_rule_0183(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0183",
            "clause_number": "19.4",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 183",
            "severity": PenaltySeverityTier.TIER_3_DEBARRED_TERM,
            "minimum_pass_marks_theory": 38,
            "minimum_aggregate_percentage": 43,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 13,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2330
            }
        }

    @classmethod
    def get_regulation_rule_0184(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0184",
            "clause_number": "19.5",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 184",
            "severity": PenaltySeverityTier.TIER_4_EXPULSION,
            "minimum_pass_marks_theory": 39,
            "minimum_aggregate_percentage": 44,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 14,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2340
            }
        }

    @classmethod
    def get_regulation_rule_0185(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0185",
            "clause_number": "19.6",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 185",
            "severity": PenaltySeverityTier.TIER_1_WARNING,
            "minimum_pass_marks_theory": 40,
            "minimum_aggregate_percentage": 40,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 10,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2350
            }
        }

    @classmethod
    def get_regulation_rule_0186(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0186",
            "clause_number": "19.7",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 186",
            "severity": PenaltySeverityTier.TIER_2_CANCELLATION,
            "minimum_pass_marks_theory": 35,
            "minimum_aggregate_percentage": 41,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 11,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2360
            }
        }

    @classmethod
    def get_regulation_rule_0187(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0187",
            "clause_number": "19.8",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 187",
            "severity": PenaltySeverityTier.TIER_3_DEBARRED_TERM,
            "minimum_pass_marks_theory": 36,
            "minimum_aggregate_percentage": 42,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 12,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2370
            }
        }

    @classmethod
    def get_regulation_rule_0188(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0188",
            "clause_number": "19.9",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 188",
            "severity": PenaltySeverityTier.TIER_4_EXPULSION,
            "minimum_pass_marks_theory": 37,
            "minimum_aggregate_percentage": 43,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 13,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2380
            }
        }

    @classmethod
    def get_regulation_rule_0189(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0189",
            "clause_number": "19.10",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 189",
            "severity": PenaltySeverityTier.TIER_1_WARNING,
            "minimum_pass_marks_theory": 38,
            "minimum_aggregate_percentage": 44,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 14,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2390
            }
        }

    @classmethod
    def get_regulation_rule_0190(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0190",
            "clause_number": "20.1",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 190",
            "severity": PenaltySeverityTier.TIER_2_CANCELLATION,
            "minimum_pass_marks_theory": 39,
            "minimum_aggregate_percentage": 40,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 10,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2400
            }
        }

    @classmethod
    def get_regulation_rule_0191(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0191",
            "clause_number": "20.2",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 191",
            "severity": PenaltySeverityTier.TIER_3_DEBARRED_TERM,
            "minimum_pass_marks_theory": 40,
            "minimum_aggregate_percentage": 41,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 11,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2410
            }
        }

    @classmethod
    def get_regulation_rule_0192(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0192",
            "clause_number": "20.3",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 192",
            "severity": PenaltySeverityTier.TIER_4_EXPULSION,
            "minimum_pass_marks_theory": 35,
            "minimum_aggregate_percentage": 42,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 12,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2420
            }
        }

    @classmethod
    def get_regulation_rule_0193(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0193",
            "clause_number": "20.4",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 193",
            "severity": PenaltySeverityTier.TIER_1_WARNING,
            "minimum_pass_marks_theory": 36,
            "minimum_aggregate_percentage": 43,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 13,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2430
            }
        }

    @classmethod
    def get_regulation_rule_0194(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0194",
            "clause_number": "20.5",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 194",
            "severity": PenaltySeverityTier.TIER_2_CANCELLATION,
            "minimum_pass_marks_theory": 37,
            "minimum_aggregate_percentage": 44,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 14,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2440
            }
        }

    @classmethod
    def get_regulation_rule_0195(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0195",
            "clause_number": "20.6",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 195",
            "severity": PenaltySeverityTier.TIER_3_DEBARRED_TERM,
            "minimum_pass_marks_theory": 38,
            "minimum_aggregate_percentage": 40,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 10,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2450
            }
        }

    @classmethod
    def get_regulation_rule_0196(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0196",
            "clause_number": "20.7",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 196",
            "severity": PenaltySeverityTier.TIER_4_EXPULSION,
            "minimum_pass_marks_theory": 39,
            "minimum_aggregate_percentage": 41,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 11,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2460
            }
        }

    @classmethod
    def get_regulation_rule_0197(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0197",
            "clause_number": "20.8",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 197",
            "severity": PenaltySeverityTier.TIER_1_WARNING,
            "minimum_pass_marks_theory": 40,
            "minimum_aggregate_percentage": 42,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 12,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2470
            }
        }

    @classmethod
    def get_regulation_rule_0198(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0198",
            "clause_number": "20.9",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 198",
            "severity": PenaltySeverityTier.TIER_2_CANCELLATION,
            "minimum_pass_marks_theory": 35,
            "minimum_aggregate_percentage": 43,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 13,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2480
            }
        }

    @classmethod
    def get_regulation_rule_0199(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0199",
            "clause_number": "20.10",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 199",
            "severity": PenaltySeverityTier.TIER_3_DEBARRED_TERM,
            "minimum_pass_marks_theory": 36,
            "minimum_aggregate_percentage": 44,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 14,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2490
            }
        }

    @classmethod
    def get_regulation_rule_0200(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0200",
            "clause_number": "21.1",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 200",
            "severity": PenaltySeverityTier.TIER_4_EXPULSION,
            "minimum_pass_marks_theory": 37,
            "minimum_aggregate_percentage": 40,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 10,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2500
            }
        }

    @classmethod
    def get_regulation_rule_0201(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0201",
            "clause_number": "21.2",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 201",
            "severity": PenaltySeverityTier.TIER_1_WARNING,
            "minimum_pass_marks_theory": 38,
            "minimum_aggregate_percentage": 41,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 11,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2510
            }
        }

    @classmethod
    def get_regulation_rule_0202(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0202",
            "clause_number": "21.3",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 202",
            "severity": PenaltySeverityTier.TIER_2_CANCELLATION,
            "minimum_pass_marks_theory": 39,
            "minimum_aggregate_percentage": 42,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 12,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2520
            }
        }

    @classmethod
    def get_regulation_rule_0203(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0203",
            "clause_number": "21.4",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 203",
            "severity": PenaltySeverityTier.TIER_3_DEBARRED_TERM,
            "minimum_pass_marks_theory": 40,
            "minimum_aggregate_percentage": 43,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 13,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2530
            }
        }

    @classmethod
    def get_regulation_rule_0204(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0204",
            "clause_number": "21.5",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 204",
            "severity": PenaltySeverityTier.TIER_4_EXPULSION,
            "minimum_pass_marks_theory": 35,
            "minimum_aggregate_percentage": 44,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 14,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2540
            }
        }

    @classmethod
    def get_regulation_rule_0205(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0205",
            "clause_number": "21.6",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 205",
            "severity": PenaltySeverityTier.TIER_1_WARNING,
            "minimum_pass_marks_theory": 36,
            "minimum_aggregate_percentage": 40,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 10,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2550
            }
        }

    @classmethod
    def get_regulation_rule_0206(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0206",
            "clause_number": "21.7",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 206",
            "severity": PenaltySeverityTier.TIER_2_CANCELLATION,
            "minimum_pass_marks_theory": 37,
            "minimum_aggregate_percentage": 41,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 11,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2560
            }
        }

    @classmethod
    def get_regulation_rule_0207(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0207",
            "clause_number": "21.8",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 207",
            "severity": PenaltySeverityTier.TIER_3_DEBARRED_TERM,
            "minimum_pass_marks_theory": 38,
            "minimum_aggregate_percentage": 42,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 12,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2570
            }
        }

    @classmethod
    def get_regulation_rule_0208(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0208",
            "clause_number": "21.9",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 208",
            "severity": PenaltySeverityTier.TIER_4_EXPULSION,
            "minimum_pass_marks_theory": 39,
            "minimum_aggregate_percentage": 43,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 13,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2580
            }
        }

    @classmethod
    def get_regulation_rule_0209(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0209",
            "clause_number": "21.10",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 209",
            "severity": PenaltySeverityTier.TIER_1_WARNING,
            "minimum_pass_marks_theory": 40,
            "minimum_aggregate_percentage": 44,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 14,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2590
            }
        }

    @classmethod
    def get_regulation_rule_0210(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0210",
            "clause_number": "22.1",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 210",
            "severity": PenaltySeverityTier.TIER_2_CANCELLATION,
            "minimum_pass_marks_theory": 35,
            "minimum_aggregate_percentage": 40,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 10,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2600
            }
        }

    @classmethod
    def get_regulation_rule_0211(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0211",
            "clause_number": "22.2",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 211",
            "severity": PenaltySeverityTier.TIER_3_DEBARRED_TERM,
            "minimum_pass_marks_theory": 36,
            "minimum_aggregate_percentage": 41,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 11,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2610
            }
        }

    @classmethod
    def get_regulation_rule_0212(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0212",
            "clause_number": "22.3",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 212",
            "severity": PenaltySeverityTier.TIER_4_EXPULSION,
            "minimum_pass_marks_theory": 37,
            "minimum_aggregate_percentage": 42,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 12,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2620
            }
        }

    @classmethod
    def get_regulation_rule_0213(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0213",
            "clause_number": "22.4",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 213",
            "severity": PenaltySeverityTier.TIER_1_WARNING,
            "minimum_pass_marks_theory": 38,
            "minimum_aggregate_percentage": 43,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 13,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2630
            }
        }

    @classmethod
    def get_regulation_rule_0214(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0214",
            "clause_number": "22.5",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 214",
            "severity": PenaltySeverityTier.TIER_2_CANCELLATION,
            "minimum_pass_marks_theory": 39,
            "minimum_aggregate_percentage": 44,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 14,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2640
            }
        }

    @classmethod
    def get_regulation_rule_0215(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0215",
            "clause_number": "22.6",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 215",
            "severity": PenaltySeverityTier.TIER_3_DEBARRED_TERM,
            "minimum_pass_marks_theory": 40,
            "minimum_aggregate_percentage": 40,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 10,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2650
            }
        }

    @classmethod
    def get_regulation_rule_0216(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0216",
            "clause_number": "22.7",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 216",
            "severity": PenaltySeverityTier.TIER_4_EXPULSION,
            "minimum_pass_marks_theory": 35,
            "minimum_aggregate_percentage": 41,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 11,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2660
            }
        }

    @classmethod
    def get_regulation_rule_0217(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0217",
            "clause_number": "22.8",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 217",
            "severity": PenaltySeverityTier.TIER_1_WARNING,
            "minimum_pass_marks_theory": 36,
            "minimum_aggregate_percentage": 42,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 12,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2670
            }
        }

    @classmethod
    def get_regulation_rule_0218(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0218",
            "clause_number": "22.9",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 218",
            "severity": PenaltySeverityTier.TIER_2_CANCELLATION,
            "minimum_pass_marks_theory": 37,
            "minimum_aggregate_percentage": 43,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 13,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2680
            }
        }

    @classmethod
    def get_regulation_rule_0219(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0219",
            "clause_number": "22.10",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 219",
            "severity": PenaltySeverityTier.TIER_3_DEBARRED_TERM,
            "minimum_pass_marks_theory": 38,
            "minimum_aggregate_percentage": 44,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 14,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2690
            }
        }

    @classmethod
    def get_regulation_rule_0220(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0220",
            "clause_number": "23.1",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 220",
            "severity": PenaltySeverityTier.TIER_4_EXPULSION,
            "minimum_pass_marks_theory": 39,
            "minimum_aggregate_percentage": 40,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 10,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2700
            }
        }

    @classmethod
    def get_regulation_rule_0221(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0221",
            "clause_number": "23.2",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 221",
            "severity": PenaltySeverityTier.TIER_1_WARNING,
            "minimum_pass_marks_theory": 40,
            "minimum_aggregate_percentage": 41,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 11,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2710
            }
        }

    @classmethod
    def get_regulation_rule_0222(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0222",
            "clause_number": "23.3",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 222",
            "severity": PenaltySeverityTier.TIER_2_CANCELLATION,
            "minimum_pass_marks_theory": 35,
            "minimum_aggregate_percentage": 42,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 12,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2720
            }
        }

    @classmethod
    def get_regulation_rule_0223(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0223",
            "clause_number": "23.4",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 223",
            "severity": PenaltySeverityTier.TIER_3_DEBARRED_TERM,
            "minimum_pass_marks_theory": 36,
            "minimum_aggregate_percentage": 43,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 13,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2730
            }
        }

    @classmethod
    def get_regulation_rule_0224(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0224",
            "clause_number": "23.5",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 224",
            "severity": PenaltySeverityTier.TIER_4_EXPULSION,
            "minimum_pass_marks_theory": 37,
            "minimum_aggregate_percentage": 44,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 14,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2740
            }
        }

    @classmethod
    def get_regulation_rule_0225(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0225",
            "clause_number": "23.6",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 225",
            "severity": PenaltySeverityTier.TIER_1_WARNING,
            "minimum_pass_marks_theory": 38,
            "minimum_aggregate_percentage": 40,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 10,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2750
            }
        }

    @classmethod
    def get_regulation_rule_0226(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0226",
            "clause_number": "23.7",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 226",
            "severity": PenaltySeverityTier.TIER_2_CANCELLATION,
            "minimum_pass_marks_theory": 39,
            "minimum_aggregate_percentage": 41,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 11,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2760
            }
        }

    @classmethod
    def get_regulation_rule_0227(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0227",
            "clause_number": "23.8",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 227",
            "severity": PenaltySeverityTier.TIER_3_DEBARRED_TERM,
            "minimum_pass_marks_theory": 40,
            "minimum_aggregate_percentage": 42,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 12,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2770
            }
        }

    @classmethod
    def get_regulation_rule_0228(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0228",
            "clause_number": "23.9",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 228",
            "severity": PenaltySeverityTier.TIER_4_EXPULSION,
            "minimum_pass_marks_theory": 35,
            "minimum_aggregate_percentage": 43,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 13,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2780
            }
        }

    @classmethod
    def get_regulation_rule_0229(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0229",
            "clause_number": "23.10",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 229",
            "severity": PenaltySeverityTier.TIER_1_WARNING,
            "minimum_pass_marks_theory": 36,
            "minimum_aggregate_percentage": 44,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 14,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2790
            }
        }

    @classmethod
    def get_regulation_rule_0230(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0230",
            "clause_number": "24.1",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 230",
            "severity": PenaltySeverityTier.TIER_2_CANCELLATION,
            "minimum_pass_marks_theory": 37,
            "minimum_aggregate_percentage": 40,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 10,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2800
            }
        }

    @classmethod
    def get_regulation_rule_0231(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0231",
            "clause_number": "24.2",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 231",
            "severity": PenaltySeverityTier.TIER_3_DEBARRED_TERM,
            "minimum_pass_marks_theory": 38,
            "minimum_aggregate_percentage": 41,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 11,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2810
            }
        }

    @classmethod
    def get_regulation_rule_0232(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0232",
            "clause_number": "24.3",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 232",
            "severity": PenaltySeverityTier.TIER_4_EXPULSION,
            "minimum_pass_marks_theory": 39,
            "minimum_aggregate_percentage": 42,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 12,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2820
            }
        }

    @classmethod
    def get_regulation_rule_0233(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0233",
            "clause_number": "24.4",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 233",
            "severity": PenaltySeverityTier.TIER_1_WARNING,
            "minimum_pass_marks_theory": 40,
            "minimum_aggregate_percentage": 43,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 13,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2830
            }
        }

    @classmethod
    def get_regulation_rule_0234(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0234",
            "clause_number": "24.5",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 234",
            "severity": PenaltySeverityTier.TIER_2_CANCELLATION,
            "minimum_pass_marks_theory": 35,
            "minimum_aggregate_percentage": 44,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 14,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2840
            }
        }

    @classmethod
    def get_regulation_rule_0235(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0235",
            "clause_number": "24.6",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 235",
            "severity": PenaltySeverityTier.TIER_3_DEBARRED_TERM,
            "minimum_pass_marks_theory": 36,
            "minimum_aggregate_percentage": 40,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 10,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2850
            }
        }

    @classmethod
    def get_regulation_rule_0236(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0236",
            "clause_number": "24.7",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 236",
            "severity": PenaltySeverityTier.TIER_4_EXPULSION,
            "minimum_pass_marks_theory": 37,
            "minimum_aggregate_percentage": 41,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 11,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2860
            }
        }

    @classmethod
    def get_regulation_rule_0237(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0237",
            "clause_number": "24.8",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 237",
            "severity": PenaltySeverityTier.TIER_1_WARNING,
            "minimum_pass_marks_theory": 38,
            "minimum_aggregate_percentage": 42,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 12,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2870
            }
        }

    @classmethod
    def get_regulation_rule_0238(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0238",
            "clause_number": "24.9",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 238",
            "severity": PenaltySeverityTier.TIER_2_CANCELLATION,
            "minimum_pass_marks_theory": 39,
            "minimum_aggregate_percentage": 43,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 13,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2880
            }
        }

    @classmethod
    def get_regulation_rule_0239(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0239",
            "clause_number": "24.10",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 239",
            "severity": PenaltySeverityTier.TIER_3_DEBARRED_TERM,
            "minimum_pass_marks_theory": 40,
            "minimum_aggregate_percentage": 44,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 14,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2890
            }
        }

    @classmethod
    def get_regulation_rule_0240(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0240",
            "clause_number": "25.1",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 240",
            "severity": PenaltySeverityTier.TIER_4_EXPULSION,
            "minimum_pass_marks_theory": 35,
            "minimum_aggregate_percentage": 40,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 10,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2900
            }
        }

    @classmethod
    def get_regulation_rule_0241(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0241",
            "clause_number": "25.2",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 241",
            "severity": PenaltySeverityTier.TIER_1_WARNING,
            "minimum_pass_marks_theory": 36,
            "minimum_aggregate_percentage": 41,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 11,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2910
            }
        }

    @classmethod
    def get_regulation_rule_0242(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0242",
            "clause_number": "25.3",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 242",
            "severity": PenaltySeverityTier.TIER_2_CANCELLATION,
            "minimum_pass_marks_theory": 37,
            "minimum_aggregate_percentage": 42,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 12,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2920
            }
        }

    @classmethod
    def get_regulation_rule_0243(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0243",
            "clause_number": "25.4",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 243",
            "severity": PenaltySeverityTier.TIER_3_DEBARRED_TERM,
            "minimum_pass_marks_theory": 38,
            "minimum_aggregate_percentage": 43,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 13,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2930
            }
        }

    @classmethod
    def get_regulation_rule_0244(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0244",
            "clause_number": "25.5",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 244",
            "severity": PenaltySeverityTier.TIER_4_EXPULSION,
            "minimum_pass_marks_theory": 39,
            "minimum_aggregate_percentage": 44,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 14,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2940
            }
        }

    @classmethod
    def get_regulation_rule_0245(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0245",
            "clause_number": "25.6",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 245",
            "severity": PenaltySeverityTier.TIER_1_WARNING,
            "minimum_pass_marks_theory": 40,
            "minimum_aggregate_percentage": 40,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 10,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2950
            }
        }

    @classmethod
    def get_regulation_rule_0246(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0246",
            "clause_number": "25.7",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 246",
            "severity": PenaltySeverityTier.TIER_2_CANCELLATION,
            "minimum_pass_marks_theory": 35,
            "minimum_aggregate_percentage": 41,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 11,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2960
            }
        }

    @classmethod
    def get_regulation_rule_0247(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0247",
            "clause_number": "25.8",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 247",
            "severity": PenaltySeverityTier.TIER_3_DEBARRED_TERM,
            "minimum_pass_marks_theory": 36,
            "minimum_aggregate_percentage": 42,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 12,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2970
            }
        }

    @classmethod
    def get_regulation_rule_0248(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0248",
            "clause_number": "25.9",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 248",
            "severity": PenaltySeverityTier.TIER_4_EXPULSION,
            "minimum_pass_marks_theory": 37,
            "minimum_aggregate_percentage": 43,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 13,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2980
            }
        }

    @classmethod
    def get_regulation_rule_0249(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0249",
            "clause_number": "25.10",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 249",
            "severity": PenaltySeverityTier.TIER_1_WARNING,
            "minimum_pass_marks_theory": 38,
            "minimum_aggregate_percentage": 44,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 14,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 2990
            }
        }

    @classmethod
    def get_regulation_rule_0250(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0250",
            "clause_number": "26.1",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 250",
            "severity": PenaltySeverityTier.TIER_2_CANCELLATION,
            "minimum_pass_marks_theory": 39,
            "minimum_aggregate_percentage": 40,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 10,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 3000
            }
        }

    @classmethod
    def get_regulation_rule_0251(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0251",
            "clause_number": "26.2",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 251",
            "severity": PenaltySeverityTier.TIER_3_DEBARRED_TERM,
            "minimum_pass_marks_theory": 40,
            "minimum_aggregate_percentage": 41,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 11,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 3010
            }
        }

    @classmethod
    def get_regulation_rule_0252(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0252",
            "clause_number": "26.3",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 252",
            "severity": PenaltySeverityTier.TIER_4_EXPULSION,
            "minimum_pass_marks_theory": 35,
            "minimum_aggregate_percentage": 42,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 12,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 3020
            }
        }

    @classmethod
    def get_regulation_rule_0253(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0253",
            "clause_number": "26.4",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 253",
            "severity": PenaltySeverityTier.TIER_1_WARNING,
            "minimum_pass_marks_theory": 36,
            "minimum_aggregate_percentage": 43,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 13,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 3030
            }
        }

    @classmethod
    def get_regulation_rule_0254(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0254",
            "clause_number": "26.5",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 254",
            "severity": PenaltySeverityTier.TIER_2_CANCELLATION,
            "minimum_pass_marks_theory": 37,
            "minimum_aggregate_percentage": 44,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 14,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 3040
            }
        }

    @classmethod
    def get_regulation_rule_0255(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0255",
            "clause_number": "26.6",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 255",
            "severity": PenaltySeverityTier.TIER_3_DEBARRED_TERM,
            "minimum_pass_marks_theory": 38,
            "minimum_aggregate_percentage": 40,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 10,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 3050
            }
        }

    @classmethod
    def get_regulation_rule_0256(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0256",
            "clause_number": "26.7",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 256",
            "severity": PenaltySeverityTier.TIER_4_EXPULSION,
            "minimum_pass_marks_theory": 39,
            "minimum_aggregate_percentage": 41,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 11,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 3060
            }
        }

    @classmethod
    def get_regulation_rule_0257(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0257",
            "clause_number": "26.8",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 257",
            "severity": PenaltySeverityTier.TIER_1_WARNING,
            "minimum_pass_marks_theory": 40,
            "minimum_aggregate_percentage": 42,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 12,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 3070
            }
        }

    @classmethod
    def get_regulation_rule_0258(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0258",
            "clause_number": "26.9",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 258",
            "severity": PenaltySeverityTier.TIER_2_CANCELLATION,
            "minimum_pass_marks_theory": 35,
            "minimum_aggregate_percentage": 43,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 13,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 3080
            }
        }

    @classmethod
    def get_regulation_rule_0259(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0259",
            "clause_number": "26.10",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 259",
            "severity": PenaltySeverityTier.TIER_3_DEBARRED_TERM,
            "minimum_pass_marks_theory": 36,
            "minimum_aggregate_percentage": 44,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 14,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 3090
            }
        }

    @classmethod
    def get_regulation_rule_0260(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0260",
            "clause_number": "27.1",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 260",
            "severity": PenaltySeverityTier.TIER_4_EXPULSION,
            "minimum_pass_marks_theory": 37,
            "minimum_aggregate_percentage": 40,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 10,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 3100
            }
        }

    @classmethod
    def get_regulation_rule_0261(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0261",
            "clause_number": "27.2",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 261",
            "severity": PenaltySeverityTier.TIER_1_WARNING,
            "minimum_pass_marks_theory": 38,
            "minimum_aggregate_percentage": 41,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 11,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 3110
            }
        }

    @classmethod
    def get_regulation_rule_0262(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0262",
            "clause_number": "27.3",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 262",
            "severity": PenaltySeverityTier.TIER_2_CANCELLATION,
            "minimum_pass_marks_theory": 39,
            "minimum_aggregate_percentage": 42,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 12,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 3120
            }
        }

    @classmethod
    def get_regulation_rule_0263(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0263",
            "clause_number": "27.4",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 263",
            "severity": PenaltySeverityTier.TIER_3_DEBARRED_TERM,
            "minimum_pass_marks_theory": 40,
            "minimum_aggregate_percentage": 43,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 13,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 3130
            }
        }

    @classmethod
    def get_regulation_rule_0264(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0264",
            "clause_number": "27.5",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 264",
            "severity": PenaltySeverityTier.TIER_4_EXPULSION,
            "minimum_pass_marks_theory": 35,
            "minimum_aggregate_percentage": 44,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 14,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 3140
            }
        }

    @classmethod
    def get_regulation_rule_0265(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0265",
            "clause_number": "27.6",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 265",
            "severity": PenaltySeverityTier.TIER_1_WARNING,
            "minimum_pass_marks_theory": 36,
            "minimum_aggregate_percentage": 40,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 10,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 3150
            }
        }

    @classmethod
    def get_regulation_rule_0266(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0266",
            "clause_number": "27.7",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 266",
            "severity": PenaltySeverityTier.TIER_2_CANCELLATION,
            "minimum_pass_marks_theory": 37,
            "minimum_aggregate_percentage": 41,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 11,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 3160
            }
        }

    @classmethod
    def get_regulation_rule_0267(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0267",
            "clause_number": "27.8",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 267",
            "severity": PenaltySeverityTier.TIER_3_DEBARRED_TERM,
            "minimum_pass_marks_theory": 38,
            "minimum_aggregate_percentage": 42,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 12,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 3170
            }
        }

    @classmethod
    def get_regulation_rule_0268(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0268",
            "clause_number": "27.9",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 268",
            "severity": PenaltySeverityTier.TIER_4_EXPULSION,
            "minimum_pass_marks_theory": 39,
            "minimum_aggregate_percentage": 43,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 13,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 3180
            }
        }

    @classmethod
    def get_regulation_rule_0269(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0269",
            "clause_number": "27.10",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 269",
            "severity": PenaltySeverityTier.TIER_1_WARNING,
            "minimum_pass_marks_theory": 40,
            "minimum_aggregate_percentage": 44,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 14,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 3190
            }
        }

    @classmethod
    def get_regulation_rule_0270(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0270",
            "clause_number": "28.1",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 270",
            "severity": PenaltySeverityTier.TIER_2_CANCELLATION,
            "minimum_pass_marks_theory": 35,
            "minimum_aggregate_percentage": 40,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 10,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 3200
            }
        }

    @classmethod
    def get_regulation_rule_0271(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0271",
            "clause_number": "28.2",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 271",
            "severity": PenaltySeverityTier.TIER_3_DEBARRED_TERM,
            "minimum_pass_marks_theory": 36,
            "minimum_aggregate_percentage": 41,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 11,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 3210
            }
        }

    @classmethod
    def get_regulation_rule_0272(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0272",
            "clause_number": "28.3",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 272",
            "severity": PenaltySeverityTier.TIER_4_EXPULSION,
            "minimum_pass_marks_theory": 37,
            "minimum_aggregate_percentage": 42,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 12,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 3220
            }
        }

    @classmethod
    def get_regulation_rule_0273(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0273",
            "clause_number": "28.4",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 273",
            "severity": PenaltySeverityTier.TIER_1_WARNING,
            "minimum_pass_marks_theory": 38,
            "minimum_aggregate_percentage": 43,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 13,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 3230
            }
        }

    @classmethod
    def get_regulation_rule_0274(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0274",
            "clause_number": "28.5",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 274",
            "severity": PenaltySeverityTier.TIER_2_CANCELLATION,
            "minimum_pass_marks_theory": 39,
            "minimum_aggregate_percentage": 44,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 14,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 3240
            }
        }

    @classmethod
    def get_regulation_rule_0275(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0275",
            "clause_number": "28.6",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 275",
            "severity": PenaltySeverityTier.TIER_3_DEBARRED_TERM,
            "minimum_pass_marks_theory": 40,
            "minimum_aggregate_percentage": 40,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 10,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 3250
            }
        }

    @classmethod
    def get_regulation_rule_0276(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0276",
            "clause_number": "28.7",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 276",
            "severity": PenaltySeverityTier.TIER_4_EXPULSION,
            "minimum_pass_marks_theory": 35,
            "minimum_aggregate_percentage": 41,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 11,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 3260
            }
        }

    @classmethod
    def get_regulation_rule_0277(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0277",
            "clause_number": "28.8",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 277",
            "severity": PenaltySeverityTier.TIER_1_WARNING,
            "minimum_pass_marks_theory": 36,
            "minimum_aggregate_percentage": 42,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 12,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 3270
            }
        }

    @classmethod
    def get_regulation_rule_0278(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0278",
            "clause_number": "28.9",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 278",
            "severity": PenaltySeverityTier.TIER_2_CANCELLATION,
            "minimum_pass_marks_theory": 37,
            "minimum_aggregate_percentage": 43,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 13,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 3280
            }
        }

    @classmethod
    def get_regulation_rule_0279(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0279",
            "clause_number": "28.10",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 279",
            "severity": PenaltySeverityTier.TIER_3_DEBARRED_TERM,
            "minimum_pass_marks_theory": 38,
            "minimum_aggregate_percentage": 44,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 14,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 3290
            }
        }

    @classmethod
    def get_regulation_rule_0280(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0280",
            "clause_number": "29.1",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 280",
            "severity": PenaltySeverityTier.TIER_4_EXPULSION,
            "minimum_pass_marks_theory": 39,
            "minimum_aggregate_percentage": 40,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 10,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 3300
            }
        }

    @classmethod
    def get_regulation_rule_0281(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0281",
            "clause_number": "29.2",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 281",
            "severity": PenaltySeverityTier.TIER_1_WARNING,
            "minimum_pass_marks_theory": 40,
            "minimum_aggregate_percentage": 41,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 11,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 3310
            }
        }

    @classmethod
    def get_regulation_rule_0282(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0282",
            "clause_number": "29.3",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 282",
            "severity": PenaltySeverityTier.TIER_2_CANCELLATION,
            "minimum_pass_marks_theory": 35,
            "minimum_aggregate_percentage": 42,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 12,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 3320
            }
        }

    @classmethod
    def get_regulation_rule_0283(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0283",
            "clause_number": "29.4",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 283",
            "severity": PenaltySeverityTier.TIER_3_DEBARRED_TERM,
            "minimum_pass_marks_theory": 36,
            "minimum_aggregate_percentage": 43,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 13,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 3330
            }
        }

    @classmethod
    def get_regulation_rule_0284(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0284",
            "clause_number": "29.5",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 284",
            "severity": PenaltySeverityTier.TIER_4_EXPULSION,
            "minimum_pass_marks_theory": 37,
            "minimum_aggregate_percentage": 44,
            "attendance_threshold_pct": 75.0,
            "condonation_fee_inr": 0,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 14,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 3340
            }
        }

    @classmethod
    def get_regulation_rule_0285(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-MIDTERM-R0285",
            "clause_number": "29.6",
            "rule_title": "Continuous Internal Assessment Specifications - Clause 285",
            "severity": PenaltySeverityTier.TIER_1_WARNING,
            "minimum_pass_marks_theory": 38,
            "minimum_aggregate_percentage": 40,
            "attendance_threshold_pct": 65.0,
            "condonation_fee_inr": 1000,
            "procedural_requirements": [
                "Mandatory hall ticket verification by invigilator prior to entry.",
                "Barcode sticker attachment verified against seating ledger.",
                "Submission of biometric or attendance signature within 30 minutes of commencement."
            ],
            "appeals_process": {
                "allowed_appeal_days": 10,
                "review_committee": "NEC Autonomous Academic Disciplinary & Malpractice Committee",
                "fee_schedule_inr": 3350
            }
        }

    @classmethod
    def get_all_rules(cls) -> List[Dict[str, Any]]:
        return [getattr(cls, f"get_regulation_rule_{i:04d}")() for i in range(1, 286)]
