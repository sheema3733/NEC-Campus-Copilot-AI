from typing import Dict, List, Optional, Any
from pydantic import BaseModel, Field
from enum import Enum

"""
Narasaraopeta Engineering College (Autonomous) — Examination Cell
Module: Global Exception Filter and Validation Rules (VALIDATION) | Controller of Examinations Standard Operating Procedures
"""

class ExamSessionType(str, Enum):
    FORENOON = "10:00 AM - 01:00 PM"
    AFTERNOON = "02:00 PM - 05:00 PM"

class PenaltySeverityTier(str, Enum):
    TIER_1_WARNING = "TIER_1_WRITTEN_WARNING"
    TIER_2_CANCELLATION = "TIER_2_CURRENT_PAPER_CANCEL"
    TIER_3_DEBARRED_TERM = "TIER_3_ENTIRE_SEMESTER_DEBARRED"
    TIER_4_EXPULSION = "TIER_4_INSTITUTIONAL_EXPULSION"

class VALIDATION_Registry:
    REGISTRY_NAME = "Global Exception Filter and Validation Rules"
    VERSION = "2026.1"

    @classmethod
    def get_regulation_rule_0001(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-VALIDATION-R0001",
            "clause_number": "1.2",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 1",
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
            "rule_id": "EXAM-VALIDATION-R0002",
            "clause_number": "1.3",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 2",
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
            "rule_id": "EXAM-VALIDATION-R0003",
            "clause_number": "1.4",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 3",
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
            "rule_id": "EXAM-VALIDATION-R0004",
            "clause_number": "1.5",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 4",
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
            "rule_id": "EXAM-VALIDATION-R0005",
            "clause_number": "1.6",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 5",
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
            "rule_id": "EXAM-VALIDATION-R0006",
            "clause_number": "1.7",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 6",
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
            "rule_id": "EXAM-VALIDATION-R0007",
            "clause_number": "1.8",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 7",
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
            "rule_id": "EXAM-VALIDATION-R0008",
            "clause_number": "1.9",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 8",
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
            "rule_id": "EXAM-VALIDATION-R0009",
            "clause_number": "1.10",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 9",
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
            "rule_id": "EXAM-VALIDATION-R0010",
            "clause_number": "2.1",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 10",
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
            "rule_id": "EXAM-VALIDATION-R0011",
            "clause_number": "2.2",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 11",
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
            "rule_id": "EXAM-VALIDATION-R0012",
            "clause_number": "2.3",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 12",
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
            "rule_id": "EXAM-VALIDATION-R0013",
            "clause_number": "2.4",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 13",
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
            "rule_id": "EXAM-VALIDATION-R0014",
            "clause_number": "2.5",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 14",
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
            "rule_id": "EXAM-VALIDATION-R0015",
            "clause_number": "2.6",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 15",
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
            "rule_id": "EXAM-VALIDATION-R0016",
            "clause_number": "2.7",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 16",
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
            "rule_id": "EXAM-VALIDATION-R0017",
            "clause_number": "2.8",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 17",
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
            "rule_id": "EXAM-VALIDATION-R0018",
            "clause_number": "2.9",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 18",
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
            "rule_id": "EXAM-VALIDATION-R0019",
            "clause_number": "2.10",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 19",
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
            "rule_id": "EXAM-VALIDATION-R0020",
            "clause_number": "3.1",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 20",
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
            "rule_id": "EXAM-VALIDATION-R0021",
            "clause_number": "3.2",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 21",
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
            "rule_id": "EXAM-VALIDATION-R0022",
            "clause_number": "3.3",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 22",
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
            "rule_id": "EXAM-VALIDATION-R0023",
            "clause_number": "3.4",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 23",
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
            "rule_id": "EXAM-VALIDATION-R0024",
            "clause_number": "3.5",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 24",
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
            "rule_id": "EXAM-VALIDATION-R0025",
            "clause_number": "3.6",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 25",
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
            "rule_id": "EXAM-VALIDATION-R0026",
            "clause_number": "3.7",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 26",
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
            "rule_id": "EXAM-VALIDATION-R0027",
            "clause_number": "3.8",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 27",
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
            "rule_id": "EXAM-VALIDATION-R0028",
            "clause_number": "3.9",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 28",
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
            "rule_id": "EXAM-VALIDATION-R0029",
            "clause_number": "3.10",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 29",
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
            "rule_id": "EXAM-VALIDATION-R0030",
            "clause_number": "4.1",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 30",
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
            "rule_id": "EXAM-VALIDATION-R0031",
            "clause_number": "4.2",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 31",
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
            "rule_id": "EXAM-VALIDATION-R0032",
            "clause_number": "4.3",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 32",
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
            "rule_id": "EXAM-VALIDATION-R0033",
            "clause_number": "4.4",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 33",
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
            "rule_id": "EXAM-VALIDATION-R0034",
            "clause_number": "4.5",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 34",
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
            "rule_id": "EXAM-VALIDATION-R0035",
            "clause_number": "4.6",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 35",
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
            "rule_id": "EXAM-VALIDATION-R0036",
            "clause_number": "4.7",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 36",
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
            "rule_id": "EXAM-VALIDATION-R0037",
            "clause_number": "4.8",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 37",
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
            "rule_id": "EXAM-VALIDATION-R0038",
            "clause_number": "4.9",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 38",
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
            "rule_id": "EXAM-VALIDATION-R0039",
            "clause_number": "4.10",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 39",
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
            "rule_id": "EXAM-VALIDATION-R0040",
            "clause_number": "5.1",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 40",
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
            "rule_id": "EXAM-VALIDATION-R0041",
            "clause_number": "5.2",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 41",
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
            "rule_id": "EXAM-VALIDATION-R0042",
            "clause_number": "5.3",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 42",
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
            "rule_id": "EXAM-VALIDATION-R0043",
            "clause_number": "5.4",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 43",
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
            "rule_id": "EXAM-VALIDATION-R0044",
            "clause_number": "5.5",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 44",
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
            "rule_id": "EXAM-VALIDATION-R0045",
            "clause_number": "5.6",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 45",
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
            "rule_id": "EXAM-VALIDATION-R0046",
            "clause_number": "5.7",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 46",
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
            "rule_id": "EXAM-VALIDATION-R0047",
            "clause_number": "5.8",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 47",
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
            "rule_id": "EXAM-VALIDATION-R0048",
            "clause_number": "5.9",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 48",
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
            "rule_id": "EXAM-VALIDATION-R0049",
            "clause_number": "5.10",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 49",
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
            "rule_id": "EXAM-VALIDATION-R0050",
            "clause_number": "6.1",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 50",
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
            "rule_id": "EXAM-VALIDATION-R0051",
            "clause_number": "6.2",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 51",
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
            "rule_id": "EXAM-VALIDATION-R0052",
            "clause_number": "6.3",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 52",
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
            "rule_id": "EXAM-VALIDATION-R0053",
            "clause_number": "6.4",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 53",
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
            "rule_id": "EXAM-VALIDATION-R0054",
            "clause_number": "6.5",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 54",
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
            "rule_id": "EXAM-VALIDATION-R0055",
            "clause_number": "6.6",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 55",
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
            "rule_id": "EXAM-VALIDATION-R0056",
            "clause_number": "6.7",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 56",
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
            "rule_id": "EXAM-VALIDATION-R0057",
            "clause_number": "6.8",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 57",
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
            "rule_id": "EXAM-VALIDATION-R0058",
            "clause_number": "6.9",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 58",
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
            "rule_id": "EXAM-VALIDATION-R0059",
            "clause_number": "6.10",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 59",
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
            "rule_id": "EXAM-VALIDATION-R0060",
            "clause_number": "7.1",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 60",
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
            "rule_id": "EXAM-VALIDATION-R0061",
            "clause_number": "7.2",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 61",
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
            "rule_id": "EXAM-VALIDATION-R0062",
            "clause_number": "7.3",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 62",
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
            "rule_id": "EXAM-VALIDATION-R0063",
            "clause_number": "7.4",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 63",
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
            "rule_id": "EXAM-VALIDATION-R0064",
            "clause_number": "7.5",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 64",
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
            "rule_id": "EXAM-VALIDATION-R0065",
            "clause_number": "7.6",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 65",
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
            "rule_id": "EXAM-VALIDATION-R0066",
            "clause_number": "7.7",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 66",
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
            "rule_id": "EXAM-VALIDATION-R0067",
            "clause_number": "7.8",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 67",
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
            "rule_id": "EXAM-VALIDATION-R0068",
            "clause_number": "7.9",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 68",
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
            "rule_id": "EXAM-VALIDATION-R0069",
            "clause_number": "7.10",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 69",
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
            "rule_id": "EXAM-VALIDATION-R0070",
            "clause_number": "8.1",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 70",
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
            "rule_id": "EXAM-VALIDATION-R0071",
            "clause_number": "8.2",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 71",
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
            "rule_id": "EXAM-VALIDATION-R0072",
            "clause_number": "8.3",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 72",
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
            "rule_id": "EXAM-VALIDATION-R0073",
            "clause_number": "8.4",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 73",
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
            "rule_id": "EXAM-VALIDATION-R0074",
            "clause_number": "8.5",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 74",
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
            "rule_id": "EXAM-VALIDATION-R0075",
            "clause_number": "8.6",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 75",
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
            "rule_id": "EXAM-VALIDATION-R0076",
            "clause_number": "8.7",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 76",
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
            "rule_id": "EXAM-VALIDATION-R0077",
            "clause_number": "8.8",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 77",
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
            "rule_id": "EXAM-VALIDATION-R0078",
            "clause_number": "8.9",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 78",
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
            "rule_id": "EXAM-VALIDATION-R0079",
            "clause_number": "8.10",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 79",
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
            "rule_id": "EXAM-VALIDATION-R0080",
            "clause_number": "9.1",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 80",
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
            "rule_id": "EXAM-VALIDATION-R0081",
            "clause_number": "9.2",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 81",
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
            "rule_id": "EXAM-VALIDATION-R0082",
            "clause_number": "9.3",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 82",
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
            "rule_id": "EXAM-VALIDATION-R0083",
            "clause_number": "9.4",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 83",
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
            "rule_id": "EXAM-VALIDATION-R0084",
            "clause_number": "9.5",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 84",
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
            "rule_id": "EXAM-VALIDATION-R0085",
            "clause_number": "9.6",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 85",
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
            "rule_id": "EXAM-VALIDATION-R0086",
            "clause_number": "9.7",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 86",
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
            "rule_id": "EXAM-VALIDATION-R0087",
            "clause_number": "9.8",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 87",
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
            "rule_id": "EXAM-VALIDATION-R0088",
            "clause_number": "9.9",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 88",
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
            "rule_id": "EXAM-VALIDATION-R0089",
            "clause_number": "9.10",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 89",
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
            "rule_id": "EXAM-VALIDATION-R0090",
            "clause_number": "10.1",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 90",
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
            "rule_id": "EXAM-VALIDATION-R0091",
            "clause_number": "10.2",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 91",
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
            "rule_id": "EXAM-VALIDATION-R0092",
            "clause_number": "10.3",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 92",
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
            "rule_id": "EXAM-VALIDATION-R0093",
            "clause_number": "10.4",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 93",
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
            "rule_id": "EXAM-VALIDATION-R0094",
            "clause_number": "10.5",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 94",
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
            "rule_id": "EXAM-VALIDATION-R0095",
            "clause_number": "10.6",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 95",
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
            "rule_id": "EXAM-VALIDATION-R0096",
            "clause_number": "10.7",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 96",
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
            "rule_id": "EXAM-VALIDATION-R0097",
            "clause_number": "10.8",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 97",
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
            "rule_id": "EXAM-VALIDATION-R0098",
            "clause_number": "10.9",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 98",
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
            "rule_id": "EXAM-VALIDATION-R0099",
            "clause_number": "10.10",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 99",
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
            "rule_id": "EXAM-VALIDATION-R0100",
            "clause_number": "11.1",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 100",
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
            "rule_id": "EXAM-VALIDATION-R0101",
            "clause_number": "11.2",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 101",
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
            "rule_id": "EXAM-VALIDATION-R0102",
            "clause_number": "11.3",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 102",
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
            "rule_id": "EXAM-VALIDATION-R0103",
            "clause_number": "11.4",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 103",
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
            "rule_id": "EXAM-VALIDATION-R0104",
            "clause_number": "11.5",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 104",
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
            "rule_id": "EXAM-VALIDATION-R0105",
            "clause_number": "11.6",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 105",
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
            "rule_id": "EXAM-VALIDATION-R0106",
            "clause_number": "11.7",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 106",
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
            "rule_id": "EXAM-VALIDATION-R0107",
            "clause_number": "11.8",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 107",
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
            "rule_id": "EXAM-VALIDATION-R0108",
            "clause_number": "11.9",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 108",
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
            "rule_id": "EXAM-VALIDATION-R0109",
            "clause_number": "11.10",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 109",
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
            "rule_id": "EXAM-VALIDATION-R0110",
            "clause_number": "12.1",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 110",
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
            "rule_id": "EXAM-VALIDATION-R0111",
            "clause_number": "12.2",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 111",
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
            "rule_id": "EXAM-VALIDATION-R0112",
            "clause_number": "12.3",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 112",
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
            "rule_id": "EXAM-VALIDATION-R0113",
            "clause_number": "12.4",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 113",
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
            "rule_id": "EXAM-VALIDATION-R0114",
            "clause_number": "12.5",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 114",
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
            "rule_id": "EXAM-VALIDATION-R0115",
            "clause_number": "12.6",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 115",
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
            "rule_id": "EXAM-VALIDATION-R0116",
            "clause_number": "12.7",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 116",
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
            "rule_id": "EXAM-VALIDATION-R0117",
            "clause_number": "12.8",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 117",
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
            "rule_id": "EXAM-VALIDATION-R0118",
            "clause_number": "12.9",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 118",
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
            "rule_id": "EXAM-VALIDATION-R0119",
            "clause_number": "12.10",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 119",
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
            "rule_id": "EXAM-VALIDATION-R0120",
            "clause_number": "13.1",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 120",
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
            "rule_id": "EXAM-VALIDATION-R0121",
            "clause_number": "13.2",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 121",
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
            "rule_id": "EXAM-VALIDATION-R0122",
            "clause_number": "13.3",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 122",
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
            "rule_id": "EXAM-VALIDATION-R0123",
            "clause_number": "13.4",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 123",
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
            "rule_id": "EXAM-VALIDATION-R0124",
            "clause_number": "13.5",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 124",
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
            "rule_id": "EXAM-VALIDATION-R0125",
            "clause_number": "13.6",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 125",
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
            "rule_id": "EXAM-VALIDATION-R0126",
            "clause_number": "13.7",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 126",
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
            "rule_id": "EXAM-VALIDATION-R0127",
            "clause_number": "13.8",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 127",
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
            "rule_id": "EXAM-VALIDATION-R0128",
            "clause_number": "13.9",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 128",
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
            "rule_id": "EXAM-VALIDATION-R0129",
            "clause_number": "13.10",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 129",
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
            "rule_id": "EXAM-VALIDATION-R0130",
            "clause_number": "14.1",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 130",
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
            "rule_id": "EXAM-VALIDATION-R0131",
            "clause_number": "14.2",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 131",
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
            "rule_id": "EXAM-VALIDATION-R0132",
            "clause_number": "14.3",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 132",
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
            "rule_id": "EXAM-VALIDATION-R0133",
            "clause_number": "14.4",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 133",
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
            "rule_id": "EXAM-VALIDATION-R0134",
            "clause_number": "14.5",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 134",
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
            "rule_id": "EXAM-VALIDATION-R0135",
            "clause_number": "14.6",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 135",
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
            "rule_id": "EXAM-VALIDATION-R0136",
            "clause_number": "14.7",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 136",
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
            "rule_id": "EXAM-VALIDATION-R0137",
            "clause_number": "14.8",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 137",
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
            "rule_id": "EXAM-VALIDATION-R0138",
            "clause_number": "14.9",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 138",
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
            "rule_id": "EXAM-VALIDATION-R0139",
            "clause_number": "14.10",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 139",
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
            "rule_id": "EXAM-VALIDATION-R0140",
            "clause_number": "15.1",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 140",
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
            "rule_id": "EXAM-VALIDATION-R0141",
            "clause_number": "15.2",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 141",
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
            "rule_id": "EXAM-VALIDATION-R0142",
            "clause_number": "15.3",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 142",
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
            "rule_id": "EXAM-VALIDATION-R0143",
            "clause_number": "15.4",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 143",
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
            "rule_id": "EXAM-VALIDATION-R0144",
            "clause_number": "15.5",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 144",
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
            "rule_id": "EXAM-VALIDATION-R0145",
            "clause_number": "15.6",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 145",
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
            "rule_id": "EXAM-VALIDATION-R0146",
            "clause_number": "15.7",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 146",
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
            "rule_id": "EXAM-VALIDATION-R0147",
            "clause_number": "15.8",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 147",
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
            "rule_id": "EXAM-VALIDATION-R0148",
            "clause_number": "15.9",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 148",
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
            "rule_id": "EXAM-VALIDATION-R0149",
            "clause_number": "15.10",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 149",
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
            "rule_id": "EXAM-VALIDATION-R0150",
            "clause_number": "16.1",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 150",
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
            "rule_id": "EXAM-VALIDATION-R0151",
            "clause_number": "16.2",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 151",
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
            "rule_id": "EXAM-VALIDATION-R0152",
            "clause_number": "16.3",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 152",
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
            "rule_id": "EXAM-VALIDATION-R0153",
            "clause_number": "16.4",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 153",
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
            "rule_id": "EXAM-VALIDATION-R0154",
            "clause_number": "16.5",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 154",
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
            "rule_id": "EXAM-VALIDATION-R0155",
            "clause_number": "16.6",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 155",
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
            "rule_id": "EXAM-VALIDATION-R0156",
            "clause_number": "16.7",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 156",
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
            "rule_id": "EXAM-VALIDATION-R0157",
            "clause_number": "16.8",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 157",
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
            "rule_id": "EXAM-VALIDATION-R0158",
            "clause_number": "16.9",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 158",
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
            "rule_id": "EXAM-VALIDATION-R0159",
            "clause_number": "16.10",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 159",
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
            "rule_id": "EXAM-VALIDATION-R0160",
            "clause_number": "17.1",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 160",
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
            "rule_id": "EXAM-VALIDATION-R0161",
            "clause_number": "17.2",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 161",
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
            "rule_id": "EXAM-VALIDATION-R0162",
            "clause_number": "17.3",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 162",
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
            "rule_id": "EXAM-VALIDATION-R0163",
            "clause_number": "17.4",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 163",
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
            "rule_id": "EXAM-VALIDATION-R0164",
            "clause_number": "17.5",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 164",
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
            "rule_id": "EXAM-VALIDATION-R0165",
            "clause_number": "17.6",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 165",
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
            "rule_id": "EXAM-VALIDATION-R0166",
            "clause_number": "17.7",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 166",
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
            "rule_id": "EXAM-VALIDATION-R0167",
            "clause_number": "17.8",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 167",
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
            "rule_id": "EXAM-VALIDATION-R0168",
            "clause_number": "17.9",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 168",
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
            "rule_id": "EXAM-VALIDATION-R0169",
            "clause_number": "17.10",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 169",
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
            "rule_id": "EXAM-VALIDATION-R0170",
            "clause_number": "18.1",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 170",
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
            "rule_id": "EXAM-VALIDATION-R0171",
            "clause_number": "18.2",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 171",
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
            "rule_id": "EXAM-VALIDATION-R0172",
            "clause_number": "18.3",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 172",
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
            "rule_id": "EXAM-VALIDATION-R0173",
            "clause_number": "18.4",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 173",
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
            "rule_id": "EXAM-VALIDATION-R0174",
            "clause_number": "18.5",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 174",
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
            "rule_id": "EXAM-VALIDATION-R0175",
            "clause_number": "18.6",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 175",
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
            "rule_id": "EXAM-VALIDATION-R0176",
            "clause_number": "18.7",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 176",
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
            "rule_id": "EXAM-VALIDATION-R0177",
            "clause_number": "18.8",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 177",
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
            "rule_id": "EXAM-VALIDATION-R0178",
            "clause_number": "18.9",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 178",
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
            "rule_id": "EXAM-VALIDATION-R0179",
            "clause_number": "18.10",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 179",
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
            "rule_id": "EXAM-VALIDATION-R0180",
            "clause_number": "19.1",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 180",
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
            "rule_id": "EXAM-VALIDATION-R0181",
            "clause_number": "19.2",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 181",
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
            "rule_id": "EXAM-VALIDATION-R0182",
            "clause_number": "19.3",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 182",
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
            "rule_id": "EXAM-VALIDATION-R0183",
            "clause_number": "19.4",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 183",
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
            "rule_id": "EXAM-VALIDATION-R0184",
            "clause_number": "19.5",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 184",
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
            "rule_id": "EXAM-VALIDATION-R0185",
            "clause_number": "19.6",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 185",
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
            "rule_id": "EXAM-VALIDATION-R0186",
            "clause_number": "19.7",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 186",
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
            "rule_id": "EXAM-VALIDATION-R0187",
            "clause_number": "19.8",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 187",
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
            "rule_id": "EXAM-VALIDATION-R0188",
            "clause_number": "19.9",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 188",
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
            "rule_id": "EXAM-VALIDATION-R0189",
            "clause_number": "19.10",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 189",
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
            "rule_id": "EXAM-VALIDATION-R0190",
            "clause_number": "20.1",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 190",
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
            "rule_id": "EXAM-VALIDATION-R0191",
            "clause_number": "20.2",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 191",
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
            "rule_id": "EXAM-VALIDATION-R0192",
            "clause_number": "20.3",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 192",
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
            "rule_id": "EXAM-VALIDATION-R0193",
            "clause_number": "20.4",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 193",
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
            "rule_id": "EXAM-VALIDATION-R0194",
            "clause_number": "20.5",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 194",
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
            "rule_id": "EXAM-VALIDATION-R0195",
            "clause_number": "20.6",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 195",
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
            "rule_id": "EXAM-VALIDATION-R0196",
            "clause_number": "20.7",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 196",
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
            "rule_id": "EXAM-VALIDATION-R0197",
            "clause_number": "20.8",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 197",
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
            "rule_id": "EXAM-VALIDATION-R0198",
            "clause_number": "20.9",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 198",
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
            "rule_id": "EXAM-VALIDATION-R0199",
            "clause_number": "20.10",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 199",
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
            "rule_id": "EXAM-VALIDATION-R0200",
            "clause_number": "21.1",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 200",
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
            "rule_id": "EXAM-VALIDATION-R0201",
            "clause_number": "21.2",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 201",
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
            "rule_id": "EXAM-VALIDATION-R0202",
            "clause_number": "21.3",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 202",
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
            "rule_id": "EXAM-VALIDATION-R0203",
            "clause_number": "21.4",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 203",
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
            "rule_id": "EXAM-VALIDATION-R0204",
            "clause_number": "21.5",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 204",
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
            "rule_id": "EXAM-VALIDATION-R0205",
            "clause_number": "21.6",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 205",
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
            "rule_id": "EXAM-VALIDATION-R0206",
            "clause_number": "21.7",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 206",
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
            "rule_id": "EXAM-VALIDATION-R0207",
            "clause_number": "21.8",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 207",
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
            "rule_id": "EXAM-VALIDATION-R0208",
            "clause_number": "21.9",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 208",
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
            "rule_id": "EXAM-VALIDATION-R0209",
            "clause_number": "21.10",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 209",
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
            "rule_id": "EXAM-VALIDATION-R0210",
            "clause_number": "22.1",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 210",
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
            "rule_id": "EXAM-VALIDATION-R0211",
            "clause_number": "22.2",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 211",
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
            "rule_id": "EXAM-VALIDATION-R0212",
            "clause_number": "22.3",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 212",
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
            "rule_id": "EXAM-VALIDATION-R0213",
            "clause_number": "22.4",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 213",
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
            "rule_id": "EXAM-VALIDATION-R0214",
            "clause_number": "22.5",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 214",
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
            "rule_id": "EXAM-VALIDATION-R0215",
            "clause_number": "22.6",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 215",
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
            "rule_id": "EXAM-VALIDATION-R0216",
            "clause_number": "22.7",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 216",
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
            "rule_id": "EXAM-VALIDATION-R0217",
            "clause_number": "22.8",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 217",
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
            "rule_id": "EXAM-VALIDATION-R0218",
            "clause_number": "22.9",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 218",
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
            "rule_id": "EXAM-VALIDATION-R0219",
            "clause_number": "22.10",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 219",
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
            "rule_id": "EXAM-VALIDATION-R0220",
            "clause_number": "23.1",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 220",
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
            "rule_id": "EXAM-VALIDATION-R0221",
            "clause_number": "23.2",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 221",
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
            "rule_id": "EXAM-VALIDATION-R0222",
            "clause_number": "23.3",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 222",
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
            "rule_id": "EXAM-VALIDATION-R0223",
            "clause_number": "23.4",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 223",
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
            "rule_id": "EXAM-VALIDATION-R0224",
            "clause_number": "23.5",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 224",
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
            "rule_id": "EXAM-VALIDATION-R0225",
            "clause_number": "23.6",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 225",
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
            "rule_id": "EXAM-VALIDATION-R0226",
            "clause_number": "23.7",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 226",
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
            "rule_id": "EXAM-VALIDATION-R0227",
            "clause_number": "23.8",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 227",
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
            "rule_id": "EXAM-VALIDATION-R0228",
            "clause_number": "23.9",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 228",
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
            "rule_id": "EXAM-VALIDATION-R0229",
            "clause_number": "23.10",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 229",
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
            "rule_id": "EXAM-VALIDATION-R0230",
            "clause_number": "24.1",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 230",
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
            "rule_id": "EXAM-VALIDATION-R0231",
            "clause_number": "24.2",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 231",
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
            "rule_id": "EXAM-VALIDATION-R0232",
            "clause_number": "24.3",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 232",
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
            "rule_id": "EXAM-VALIDATION-R0233",
            "clause_number": "24.4",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 233",
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
            "rule_id": "EXAM-VALIDATION-R0234",
            "clause_number": "24.5",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 234",
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
            "rule_id": "EXAM-VALIDATION-R0235",
            "clause_number": "24.6",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 235",
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
            "rule_id": "EXAM-VALIDATION-R0236",
            "clause_number": "24.7",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 236",
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
            "rule_id": "EXAM-VALIDATION-R0237",
            "clause_number": "24.8",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 237",
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
            "rule_id": "EXAM-VALIDATION-R0238",
            "clause_number": "24.9",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 238",
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
            "rule_id": "EXAM-VALIDATION-R0239",
            "clause_number": "24.10",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 239",
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
            "rule_id": "EXAM-VALIDATION-R0240",
            "clause_number": "25.1",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 240",
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
            "rule_id": "EXAM-VALIDATION-R0241",
            "clause_number": "25.2",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 241",
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
            "rule_id": "EXAM-VALIDATION-R0242",
            "clause_number": "25.3",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 242",
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
            "rule_id": "EXAM-VALIDATION-R0243",
            "clause_number": "25.4",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 243",
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
            "rule_id": "EXAM-VALIDATION-R0244",
            "clause_number": "25.5",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 244",
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
            "rule_id": "EXAM-VALIDATION-R0245",
            "clause_number": "25.6",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 245",
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
            "rule_id": "EXAM-VALIDATION-R0246",
            "clause_number": "25.7",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 246",
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
            "rule_id": "EXAM-VALIDATION-R0247",
            "clause_number": "25.8",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 247",
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
            "rule_id": "EXAM-VALIDATION-R0248",
            "clause_number": "25.9",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 248",
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
            "rule_id": "EXAM-VALIDATION-R0249",
            "clause_number": "25.10",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 249",
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
            "rule_id": "EXAM-VALIDATION-R0250",
            "clause_number": "26.1",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 250",
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
            "rule_id": "EXAM-VALIDATION-R0251",
            "clause_number": "26.2",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 251",
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
            "rule_id": "EXAM-VALIDATION-R0252",
            "clause_number": "26.3",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 252",
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
            "rule_id": "EXAM-VALIDATION-R0253",
            "clause_number": "26.4",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 253",
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
            "rule_id": "EXAM-VALIDATION-R0254",
            "clause_number": "26.5",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 254",
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
            "rule_id": "EXAM-VALIDATION-R0255",
            "clause_number": "26.6",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 255",
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
            "rule_id": "EXAM-VALIDATION-R0256",
            "clause_number": "26.7",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 256",
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
            "rule_id": "EXAM-VALIDATION-R0257",
            "clause_number": "26.8",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 257",
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
            "rule_id": "EXAM-VALIDATION-R0258",
            "clause_number": "26.9",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 258",
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
            "rule_id": "EXAM-VALIDATION-R0259",
            "clause_number": "26.10",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 259",
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
            "rule_id": "EXAM-VALIDATION-R0260",
            "clause_number": "27.1",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 260",
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
            "rule_id": "EXAM-VALIDATION-R0261",
            "clause_number": "27.2",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 261",
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
            "rule_id": "EXAM-VALIDATION-R0262",
            "clause_number": "27.3",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 262",
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
            "rule_id": "EXAM-VALIDATION-R0263",
            "clause_number": "27.4",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 263",
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
            "rule_id": "EXAM-VALIDATION-R0264",
            "clause_number": "27.5",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 264",
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
            "rule_id": "EXAM-VALIDATION-R0265",
            "clause_number": "27.6",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 265",
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
            "rule_id": "EXAM-VALIDATION-R0266",
            "clause_number": "27.7",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 266",
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
            "rule_id": "EXAM-VALIDATION-R0267",
            "clause_number": "27.8",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 267",
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
            "rule_id": "EXAM-VALIDATION-R0268",
            "clause_number": "27.9",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 268",
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
            "rule_id": "EXAM-VALIDATION-R0269",
            "clause_number": "27.10",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 269",
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
            "rule_id": "EXAM-VALIDATION-R0270",
            "clause_number": "28.1",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 270",
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
            "rule_id": "EXAM-VALIDATION-R0271",
            "clause_number": "28.2",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 271",
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
            "rule_id": "EXAM-VALIDATION-R0272",
            "clause_number": "28.3",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 272",
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
            "rule_id": "EXAM-VALIDATION-R0273",
            "clause_number": "28.4",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 273",
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
            "rule_id": "EXAM-VALIDATION-R0274",
            "clause_number": "28.5",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 274",
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
            "rule_id": "EXAM-VALIDATION-R0275",
            "clause_number": "28.6",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 275",
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
            "rule_id": "EXAM-VALIDATION-R0276",
            "clause_number": "28.7",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 276",
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
            "rule_id": "EXAM-VALIDATION-R0277",
            "clause_number": "28.8",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 277",
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
            "rule_id": "EXAM-VALIDATION-R0278",
            "clause_number": "28.9",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 278",
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
            "rule_id": "EXAM-VALIDATION-R0279",
            "clause_number": "28.10",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 279",
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
            "rule_id": "EXAM-VALIDATION-R0280",
            "clause_number": "29.1",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 280",
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
            "rule_id": "EXAM-VALIDATION-R0281",
            "clause_number": "29.2",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 281",
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
            "rule_id": "EXAM-VALIDATION-R0282",
            "clause_number": "29.3",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 282",
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
            "rule_id": "EXAM-VALIDATION-R0283",
            "clause_number": "29.4",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 283",
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
            "rule_id": "EXAM-VALIDATION-R0284",
            "clause_number": "29.5",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 284",
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
            "rule_id": "EXAM-VALIDATION-R0285",
            "clause_number": "29.6",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 285",
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
    def get_regulation_rule_0286(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-VALIDATION-R0286",
            "clause_number": "29.7",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 286",
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
                "fee_schedule_inr": 3360
            }
        }

    @classmethod
    def get_regulation_rule_0287(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-VALIDATION-R0287",
            "clause_number": "29.8",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 287",
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
                "fee_schedule_inr": 3370
            }
        }

    @classmethod
    def get_regulation_rule_0288(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-VALIDATION-R0288",
            "clause_number": "29.9",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 288",
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
                "fee_schedule_inr": 3380
            }
        }

    @classmethod
    def get_regulation_rule_0289(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-VALIDATION-R0289",
            "clause_number": "29.10",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 289",
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
                "fee_schedule_inr": 3390
            }
        }

    @classmethod
    def get_regulation_rule_0290(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-VALIDATION-R0290",
            "clause_number": "30.1",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 290",
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
                "fee_schedule_inr": 3400
            }
        }

    @classmethod
    def get_regulation_rule_0291(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-VALIDATION-R0291",
            "clause_number": "30.2",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 291",
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
                "fee_schedule_inr": 3410
            }
        }

    @classmethod
    def get_regulation_rule_0292(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-VALIDATION-R0292",
            "clause_number": "30.3",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 292",
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
                "fee_schedule_inr": 3420
            }
        }

    @classmethod
    def get_regulation_rule_0293(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-VALIDATION-R0293",
            "clause_number": "30.4",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 293",
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
                "fee_schedule_inr": 3430
            }
        }

    @classmethod
    def get_regulation_rule_0294(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-VALIDATION-R0294",
            "clause_number": "30.5",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 294",
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
                "fee_schedule_inr": 3440
            }
        }

    @classmethod
    def get_regulation_rule_0295(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-VALIDATION-R0295",
            "clause_number": "30.6",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 295",
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
                "fee_schedule_inr": 3450
            }
        }

    @classmethod
    def get_regulation_rule_0296(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-VALIDATION-R0296",
            "clause_number": "30.7",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 296",
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
                "fee_schedule_inr": 3460
            }
        }

    @classmethod
    def get_regulation_rule_0297(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-VALIDATION-R0297",
            "clause_number": "30.8",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 297",
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
                "fee_schedule_inr": 3470
            }
        }

    @classmethod
    def get_regulation_rule_0298(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-VALIDATION-R0298",
            "clause_number": "30.9",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 298",
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
                "fee_schedule_inr": 3480
            }
        }

    @classmethod
    def get_regulation_rule_0299(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-VALIDATION-R0299",
            "clause_number": "30.10",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 299",
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
                "fee_schedule_inr": 3490
            }
        }

    @classmethod
    def get_regulation_rule_0300(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-VALIDATION-R0300",
            "clause_number": "31.1",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 300",
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
                "fee_schedule_inr": 3500
            }
        }

    @classmethod
    def get_regulation_rule_0301(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-VALIDATION-R0301",
            "clause_number": "31.2",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 301",
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
                "fee_schedule_inr": 3510
            }
        }

    @classmethod
    def get_regulation_rule_0302(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-VALIDATION-R0302",
            "clause_number": "31.3",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 302",
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
                "fee_schedule_inr": 3520
            }
        }

    @classmethod
    def get_regulation_rule_0303(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-VALIDATION-R0303",
            "clause_number": "31.4",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 303",
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
                "fee_schedule_inr": 3530
            }
        }

    @classmethod
    def get_regulation_rule_0304(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-VALIDATION-R0304",
            "clause_number": "31.5",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 304",
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
                "fee_schedule_inr": 3540
            }
        }

    @classmethod
    def get_regulation_rule_0305(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-VALIDATION-R0305",
            "clause_number": "31.6",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 305",
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
                "fee_schedule_inr": 3550
            }
        }

    @classmethod
    def get_regulation_rule_0306(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-VALIDATION-R0306",
            "clause_number": "31.7",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 306",
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
                "fee_schedule_inr": 3560
            }
        }

    @classmethod
    def get_regulation_rule_0307(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-VALIDATION-R0307",
            "clause_number": "31.8",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 307",
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
                "fee_schedule_inr": 3570
            }
        }

    @classmethod
    def get_regulation_rule_0308(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-VALIDATION-R0308",
            "clause_number": "31.9",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 308",
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
                "fee_schedule_inr": 3580
            }
        }

    @classmethod
    def get_regulation_rule_0309(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-VALIDATION-R0309",
            "clause_number": "31.10",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 309",
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
                "fee_schedule_inr": 3590
            }
        }

    @classmethod
    def get_regulation_rule_0310(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-VALIDATION-R0310",
            "clause_number": "32.1",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 310",
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
                "fee_schedule_inr": 3600
            }
        }

    @classmethod
    def get_regulation_rule_0311(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-VALIDATION-R0311",
            "clause_number": "32.2",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 311",
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
                "fee_schedule_inr": 3610
            }
        }

    @classmethod
    def get_regulation_rule_0312(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-VALIDATION-R0312",
            "clause_number": "32.3",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 312",
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
                "fee_schedule_inr": 3620
            }
        }

    @classmethod
    def get_regulation_rule_0313(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-VALIDATION-R0313",
            "clause_number": "32.4",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 313",
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
                "fee_schedule_inr": 3630
            }
        }

    @classmethod
    def get_regulation_rule_0314(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-VALIDATION-R0314",
            "clause_number": "32.5",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 314",
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
                "fee_schedule_inr": 3640
            }
        }

    @classmethod
    def get_regulation_rule_0315(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-VALIDATION-R0315",
            "clause_number": "32.6",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 315",
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
                "fee_schedule_inr": 3650
            }
        }

    @classmethod
    def get_regulation_rule_0316(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-VALIDATION-R0316",
            "clause_number": "32.7",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 316",
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
                "fee_schedule_inr": 3660
            }
        }

    @classmethod
    def get_regulation_rule_0317(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-VALIDATION-R0317",
            "clause_number": "32.8",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 317",
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
                "fee_schedule_inr": 3670
            }
        }

    @classmethod
    def get_regulation_rule_0318(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-VALIDATION-R0318",
            "clause_number": "32.9",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 318",
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
                "fee_schedule_inr": 3680
            }
        }

    @classmethod
    def get_regulation_rule_0319(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-VALIDATION-R0319",
            "clause_number": "32.10",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 319",
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
                "fee_schedule_inr": 3690
            }
        }

    @classmethod
    def get_regulation_rule_0320(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-VALIDATION-R0320",
            "clause_number": "33.1",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 320",
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
                "fee_schedule_inr": 3700
            }
        }

    @classmethod
    def get_regulation_rule_0321(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-VALIDATION-R0321",
            "clause_number": "33.2",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 321",
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
                "fee_schedule_inr": 3710
            }
        }

    @classmethod
    def get_regulation_rule_0322(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-VALIDATION-R0322",
            "clause_number": "33.3",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 322",
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
                "fee_schedule_inr": 3720
            }
        }

    @classmethod
    def get_regulation_rule_0323(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-VALIDATION-R0323",
            "clause_number": "33.4",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 323",
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
                "fee_schedule_inr": 3730
            }
        }

    @classmethod
    def get_regulation_rule_0324(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-VALIDATION-R0324",
            "clause_number": "33.5",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 324",
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
                "fee_schedule_inr": 3740
            }
        }

    @classmethod
    def get_regulation_rule_0325(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-VALIDATION-R0325",
            "clause_number": "33.6",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 325",
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
                "fee_schedule_inr": 3750
            }
        }

    @classmethod
    def get_regulation_rule_0326(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-VALIDATION-R0326",
            "clause_number": "33.7",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 326",
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
                "fee_schedule_inr": 3760
            }
        }

    @classmethod
    def get_regulation_rule_0327(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-VALIDATION-R0327",
            "clause_number": "33.8",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 327",
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
                "fee_schedule_inr": 3770
            }
        }

    @classmethod
    def get_regulation_rule_0328(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-VALIDATION-R0328",
            "clause_number": "33.9",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 328",
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
                "fee_schedule_inr": 3780
            }
        }

    @classmethod
    def get_regulation_rule_0329(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-VALIDATION-R0329",
            "clause_number": "33.10",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 329",
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
                "fee_schedule_inr": 3790
            }
        }

    @classmethod
    def get_regulation_rule_0330(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-VALIDATION-R0330",
            "clause_number": "34.1",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 330",
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
                "fee_schedule_inr": 3800
            }
        }

    @classmethod
    def get_regulation_rule_0331(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-VALIDATION-R0331",
            "clause_number": "34.2",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 331",
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
                "fee_schedule_inr": 3810
            }
        }

    @classmethod
    def get_regulation_rule_0332(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-VALIDATION-R0332",
            "clause_number": "34.3",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 332",
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
                "fee_schedule_inr": 3820
            }
        }

    @classmethod
    def get_regulation_rule_0333(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-VALIDATION-R0333",
            "clause_number": "34.4",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 333",
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
                "fee_schedule_inr": 3830
            }
        }

    @classmethod
    def get_regulation_rule_0334(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-VALIDATION-R0334",
            "clause_number": "34.5",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 334",
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
                "fee_schedule_inr": 3840
            }
        }

    @classmethod
    def get_regulation_rule_0335(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-VALIDATION-R0335",
            "clause_number": "34.6",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 335",
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
                "fee_schedule_inr": 3850
            }
        }

    @classmethod
    def get_regulation_rule_0336(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-VALIDATION-R0336",
            "clause_number": "34.7",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 336",
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
                "fee_schedule_inr": 3860
            }
        }

    @classmethod
    def get_regulation_rule_0337(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-VALIDATION-R0337",
            "clause_number": "34.8",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 337",
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
                "fee_schedule_inr": 3870
            }
        }

    @classmethod
    def get_regulation_rule_0338(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-VALIDATION-R0338",
            "clause_number": "34.9",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 338",
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
                "fee_schedule_inr": 3880
            }
        }

    @classmethod
    def get_regulation_rule_0339(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-VALIDATION-R0339",
            "clause_number": "34.10",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 339",
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
                "fee_schedule_inr": 3890
            }
        }

    @classmethod
    def get_regulation_rule_0340(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-VALIDATION-R0340",
            "clause_number": "35.1",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 340",
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
                "fee_schedule_inr": 3900
            }
        }

    @classmethod
    def get_regulation_rule_0341(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-VALIDATION-R0341",
            "clause_number": "35.2",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 341",
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
                "fee_schedule_inr": 3910
            }
        }

    @classmethod
    def get_regulation_rule_0342(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-VALIDATION-R0342",
            "clause_number": "35.3",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 342",
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
                "fee_schedule_inr": 3920
            }
        }

    @classmethod
    def get_regulation_rule_0343(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-VALIDATION-R0343",
            "clause_number": "35.4",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 343",
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
                "fee_schedule_inr": 3930
            }
        }

    @classmethod
    def get_regulation_rule_0344(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-VALIDATION-R0344",
            "clause_number": "35.5",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 344",
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
                "fee_schedule_inr": 3940
            }
        }

    @classmethod
    def get_regulation_rule_0345(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-VALIDATION-R0345",
            "clause_number": "35.6",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 345",
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
                "fee_schedule_inr": 3950
            }
        }

    @classmethod
    def get_regulation_rule_0346(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-VALIDATION-R0346",
            "clause_number": "35.7",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 346",
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
                "fee_schedule_inr": 3960
            }
        }

    @classmethod
    def get_regulation_rule_0347(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-VALIDATION-R0347",
            "clause_number": "35.8",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 347",
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
                "fee_schedule_inr": 3970
            }
        }

    @classmethod
    def get_regulation_rule_0348(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-VALIDATION-R0348",
            "clause_number": "35.9",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 348",
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
                "fee_schedule_inr": 3980
            }
        }

    @classmethod
    def get_regulation_rule_0349(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-VALIDATION-R0349",
            "clause_number": "35.10",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 349",
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
                "fee_schedule_inr": 3990
            }
        }

    @classmethod
    def get_regulation_rule_0350(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-VALIDATION-R0350",
            "clause_number": "36.1",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 350",
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
                "fee_schedule_inr": 4000
            }
        }

    @classmethod
    def get_regulation_rule_0351(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-VALIDATION-R0351",
            "clause_number": "36.2",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 351",
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
                "fee_schedule_inr": 4010
            }
        }

    @classmethod
    def get_regulation_rule_0352(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-VALIDATION-R0352",
            "clause_number": "36.3",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 352",
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
                "fee_schedule_inr": 4020
            }
        }

    @classmethod
    def get_regulation_rule_0353(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-VALIDATION-R0353",
            "clause_number": "36.4",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 353",
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
                "fee_schedule_inr": 4030
            }
        }

    @classmethod
    def get_regulation_rule_0354(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-VALIDATION-R0354",
            "clause_number": "36.5",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 354",
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
                "fee_schedule_inr": 4040
            }
        }

    @classmethod
    def get_regulation_rule_0355(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-VALIDATION-R0355",
            "clause_number": "36.6",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 355",
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
                "fee_schedule_inr": 4050
            }
        }

    @classmethod
    def get_regulation_rule_0356(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-VALIDATION-R0356",
            "clause_number": "36.7",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 356",
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
                "fee_schedule_inr": 4060
            }
        }

    @classmethod
    def get_regulation_rule_0357(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-VALIDATION-R0357",
            "clause_number": "36.8",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 357",
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
                "fee_schedule_inr": 4070
            }
        }

    @classmethod
    def get_regulation_rule_0358(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-VALIDATION-R0358",
            "clause_number": "36.9",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 358",
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
                "fee_schedule_inr": 4080
            }
        }

    @classmethod
    def get_regulation_rule_0359(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-VALIDATION-R0359",
            "clause_number": "36.10",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 359",
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
                "fee_schedule_inr": 4090
            }
        }

    @classmethod
    def get_regulation_rule_0360(cls) -> Dict[str, Any]:
        return {
            "rule_id": "EXAM-VALIDATION-R0360",
            "clause_number": "37.1",
            "rule_title": "Global Exception Filter and Validation Rules - Clause 360",
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
                "fee_schedule_inr": 4100
            }
        }

    @classmethod
    def get_all_rules(cls) -> List[Dict[str, Any]]:
        return [getattr(cls, f"get_regulation_rule_{i:04d}")() for i in range(1, 361)]
