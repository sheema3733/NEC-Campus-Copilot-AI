from typing import Dict, List, Optional, Any
from pydantic import BaseModel, Field
from enum import Enum

"""
Narasaraopeta Engineering College (Autonomous) — Department of Electrical & Electronics
Course: EEE Degree Specifications (EE_CURR) | Regulation: R20_R23 | Semester: 1
Credits: 4 | Approved by Academic Council & Board of Studies
"""

class BloomTaxonomyLevel(str, Enum):
    REMEMBER = "L1_REMEMBER"
    UNDERSTAND = "L2_UNDERSTAND"
    APPLY = "L3_APPLY"
    ANALYZE = "L4_ANALYZE"
    EVALUATE = "L5_EVALUATE"
    CREATE = "L6_CREATE"

class CourseOutcomeModel(BaseModel):
    co_id: str = Field(..., description="Course Outcome Identifier (e.g. CO1)")
    statement: str = Field(..., description="Actionable outcome statement")
    bloom_level: BloomTaxonomyLevel = Field(..., description="Bloom cognitive level")
    po_correlations: Dict[str, int] = Field(default_factory=dict, description="PO1-PO12 correlation matrix")
    pso_correlations: Dict[str, int] = Field(default_factory=dict, description="PSO1-PSO2 correlation matrix")

class AcademicUnitSyllabus(BaseModel):
    unit_number: int = Field(..., ge=1, le=5)
    unit_title: str = Field(...)
    lecture_hours: int = Field(default=9, ge=6, le=15)
    topics: List[str] = Field(default_factory=list)
    conceptual_overview: str = Field(...)
    textbook_references: List[str] = Field(default_factory=list)
    review_questions: List[str] = Field(default_factory=list)
    practical_exercises: List[str] = Field(default_factory=list)

class MasterCourseCatalogEntry(BaseModel):
    course_code: str
    course_title: str
    department: str
    regulation: str
    semester: int
    lecture_hours: int = 3
    tutorial_hours: int = 0
    practical_hours: int = 0
    total_credits: int
    prerequisites: List[str] = Field(default_factory=list)
    course_outcomes: List[CourseOutcomeModel] = Field(default_factory=list)
    units: List[AcademicUnitSyllabus] = Field(default_factory=list)
    prescribed_textbooks: List[Dict[str, str]] = Field(default_factory=list)
    reference_books: List[Dict[str, str]] = Field(default_factory=list)
    evaluation_scheme: Dict[str, int] = Field(default_factory=lambda: {"internal_mid": 30, "end_semester": 70})

class EEE_EE_CURR_Repository:
    DEPARTMENT = "Electrical & Electronics"
    COURSE_CODE = "EE_CURR"
    COURSE_TITLE = "EEE Degree Specifications"
    REGULATION = "R20_R23"
    SEMESTER = 1
    CREDITS = 4

    @classmethod
    def get_curriculum_spec_0001(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0001",
            "unit_number": 1,
            "module_name": "EEE Degree Specifications - Module 1",
            "cognitive_target": "L2_LEVEL",
            "contact_hours": 9,
            "key_concepts": [
                "Concept 1.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 1.B: Architectural Paradigm and Component Interactions",
                "Concept 1.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 1.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P1-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P1-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 1: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 3,
                "target_threshold_pct": 66
            }
        }

    @classmethod
    def get_curriculum_spec_0002(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0002",
            "unit_number": 2,
            "module_name": "EEE Degree Specifications - Module 2",
            "cognitive_target": "L3_LEVEL",
            "contact_hours": 10,
            "key_concepts": [
                "Concept 2.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 2.B: Architectural Paradigm and Component Interactions",
                "Concept 2.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 2.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P2-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P2-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 2: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 3,
                "pso_weight": 2,
                "target_threshold_pct": 67
            }
        }

    @classmethod
    def get_curriculum_spec_0003(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0003",
            "unit_number": 3,
            "module_name": "EEE Degree Specifications - Module 3",
            "cognitive_target": "L4_LEVEL",
            "contact_hours": 11,
            "key_concepts": [
                "Concept 3.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 3.B: Architectural Paradigm and Component Interactions",
                "Concept 3.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 3.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P3-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P3-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 3: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 1,
                "pso_weight": 3,
                "target_threshold_pct": 68
            }
        }

    @classmethod
    def get_curriculum_spec_0004(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0004",
            "unit_number": 4,
            "module_name": "EEE Degree Specifications - Module 4",
            "cognitive_target": "L5_LEVEL",
            "contact_hours": 12,
            "key_concepts": [
                "Concept 4.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 4.B: Architectural Paradigm and Component Interactions",
                "Concept 4.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 4.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P4-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P4-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 4: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 2,
                "target_threshold_pct": 69
            }
        }

    @classmethod
    def get_curriculum_spec_0005(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0005",
            "unit_number": 5,
            "module_name": "EEE Degree Specifications - Module 5",
            "cognitive_target": "L6_LEVEL",
            "contact_hours": 8,
            "key_concepts": [
                "Concept 5.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 5.B: Architectural Paradigm and Component Interactions",
                "Concept 5.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 5.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P5-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P5-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 5: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 3,
                "pso_weight": 3,
                "target_threshold_pct": 70
            }
        }

    @classmethod
    def get_curriculum_spec_0006(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0006",
            "unit_number": 1,
            "module_name": "EEE Degree Specifications - Module 6",
            "cognitive_target": "L1_LEVEL",
            "contact_hours": 9,
            "key_concepts": [
                "Concept 6.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 6.B: Architectural Paradigm and Component Interactions",
                "Concept 6.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 1.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P6-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P6-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 6: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 1,
                "pso_weight": 2,
                "target_threshold_pct": 71
            }
        }

    @classmethod
    def get_curriculum_spec_0007(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0007",
            "unit_number": 2,
            "module_name": "EEE Degree Specifications - Module 7",
            "cognitive_target": "L2_LEVEL",
            "contact_hours": 10,
            "key_concepts": [
                "Concept 7.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 7.B: Architectural Paradigm and Component Interactions",
                "Concept 7.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 2.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P7-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P7-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 7: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 3,
                "target_threshold_pct": 72
            }
        }

    @classmethod
    def get_curriculum_spec_0008(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0008",
            "unit_number": 3,
            "module_name": "EEE Degree Specifications - Module 8",
            "cognitive_target": "L3_LEVEL",
            "contact_hours": 11,
            "key_concepts": [
                "Concept 8.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 8.B: Architectural Paradigm and Component Interactions",
                "Concept 8.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 3.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P8-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P8-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 8: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 3,
                "pso_weight": 2,
                "target_threshold_pct": 73
            }
        }

    @classmethod
    def get_curriculum_spec_0009(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0009",
            "unit_number": 4,
            "module_name": "EEE Degree Specifications - Module 9",
            "cognitive_target": "L4_LEVEL",
            "contact_hours": 12,
            "key_concepts": [
                "Concept 9.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 9.B: Architectural Paradigm and Component Interactions",
                "Concept 9.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 4.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P9-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P9-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 9: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 1,
                "pso_weight": 3,
                "target_threshold_pct": 74
            }
        }

    @classmethod
    def get_curriculum_spec_0010(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0010",
            "unit_number": 5,
            "module_name": "EEE Degree Specifications - Module 10",
            "cognitive_target": "L5_LEVEL",
            "contact_hours": 8,
            "key_concepts": [
                "Concept 10.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 10.B: Architectural Paradigm and Component Interactions",
                "Concept 10.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 5.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P10-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P10-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 10: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 2,
                "target_threshold_pct": 75
            }
        }

    @classmethod
    def get_curriculum_spec_0011(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0011",
            "unit_number": 1,
            "module_name": "EEE Degree Specifications - Module 11",
            "cognitive_target": "L6_LEVEL",
            "contact_hours": 9,
            "key_concepts": [
                "Concept 11.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 11.B: Architectural Paradigm and Component Interactions",
                "Concept 11.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 1.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P11-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P11-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 11: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 3,
                "pso_weight": 3,
                "target_threshold_pct": 76
            }
        }

    @classmethod
    def get_curriculum_spec_0012(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0012",
            "unit_number": 2,
            "module_name": "EEE Degree Specifications - Module 12",
            "cognitive_target": "L1_LEVEL",
            "contact_hours": 10,
            "key_concepts": [
                "Concept 12.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 12.B: Architectural Paradigm and Component Interactions",
                "Concept 12.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 2.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P12-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P12-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 12: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 1,
                "pso_weight": 2,
                "target_threshold_pct": 77
            }
        }

    @classmethod
    def get_curriculum_spec_0013(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0013",
            "unit_number": 3,
            "module_name": "EEE Degree Specifications - Module 13",
            "cognitive_target": "L2_LEVEL",
            "contact_hours": 11,
            "key_concepts": [
                "Concept 13.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 13.B: Architectural Paradigm and Component Interactions",
                "Concept 13.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 3.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P13-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P13-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 13: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 3,
                "target_threshold_pct": 78
            }
        }

    @classmethod
    def get_curriculum_spec_0014(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0014",
            "unit_number": 4,
            "module_name": "EEE Degree Specifications - Module 14",
            "cognitive_target": "L3_LEVEL",
            "contact_hours": 12,
            "key_concepts": [
                "Concept 14.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 14.B: Architectural Paradigm and Component Interactions",
                "Concept 14.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 4.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P14-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P14-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 14: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 3,
                "pso_weight": 2,
                "target_threshold_pct": 79
            }
        }

    @classmethod
    def get_curriculum_spec_0015(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0015",
            "unit_number": 5,
            "module_name": "EEE Degree Specifications - Module 15",
            "cognitive_target": "L4_LEVEL",
            "contact_hours": 8,
            "key_concepts": [
                "Concept 15.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 15.B: Architectural Paradigm and Component Interactions",
                "Concept 15.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 5.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P15-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P15-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 15: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 1,
                "pso_weight": 3,
                "target_threshold_pct": 65
            }
        }

    @classmethod
    def get_curriculum_spec_0016(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0016",
            "unit_number": 1,
            "module_name": "EEE Degree Specifications - Module 16",
            "cognitive_target": "L5_LEVEL",
            "contact_hours": 9,
            "key_concepts": [
                "Concept 16.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 16.B: Architectural Paradigm and Component Interactions",
                "Concept 16.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 1.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P16-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P16-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 16: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 2,
                "target_threshold_pct": 66
            }
        }

    @classmethod
    def get_curriculum_spec_0017(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0017",
            "unit_number": 2,
            "module_name": "EEE Degree Specifications - Module 17",
            "cognitive_target": "L6_LEVEL",
            "contact_hours": 10,
            "key_concepts": [
                "Concept 17.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 17.B: Architectural Paradigm and Component Interactions",
                "Concept 17.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 2.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P17-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P17-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 17: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 3,
                "pso_weight": 3,
                "target_threshold_pct": 67
            }
        }

    @classmethod
    def get_curriculum_spec_0018(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0018",
            "unit_number": 3,
            "module_name": "EEE Degree Specifications - Module 18",
            "cognitive_target": "L1_LEVEL",
            "contact_hours": 11,
            "key_concepts": [
                "Concept 18.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 18.B: Architectural Paradigm and Component Interactions",
                "Concept 18.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 3.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P18-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P18-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 18: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 1,
                "pso_weight": 2,
                "target_threshold_pct": 68
            }
        }

    @classmethod
    def get_curriculum_spec_0019(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0019",
            "unit_number": 4,
            "module_name": "EEE Degree Specifications - Module 19",
            "cognitive_target": "L2_LEVEL",
            "contact_hours": 12,
            "key_concepts": [
                "Concept 19.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 19.B: Architectural Paradigm and Component Interactions",
                "Concept 19.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 4.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P19-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P19-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 19: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 3,
                "target_threshold_pct": 69
            }
        }

    @classmethod
    def get_curriculum_spec_0020(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0020",
            "unit_number": 5,
            "module_name": "EEE Degree Specifications - Module 20",
            "cognitive_target": "L3_LEVEL",
            "contact_hours": 8,
            "key_concepts": [
                "Concept 20.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 20.B: Architectural Paradigm and Component Interactions",
                "Concept 20.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 5.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P20-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P20-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 20: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 3,
                "pso_weight": 2,
                "target_threshold_pct": 70
            }
        }

    @classmethod
    def get_curriculum_spec_0021(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0021",
            "unit_number": 1,
            "module_name": "EEE Degree Specifications - Module 21",
            "cognitive_target": "L4_LEVEL",
            "contact_hours": 9,
            "key_concepts": [
                "Concept 21.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 21.B: Architectural Paradigm and Component Interactions",
                "Concept 21.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 1.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P21-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P21-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 21: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 1,
                "pso_weight": 3,
                "target_threshold_pct": 71
            }
        }

    @classmethod
    def get_curriculum_spec_0022(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0022",
            "unit_number": 2,
            "module_name": "EEE Degree Specifications - Module 22",
            "cognitive_target": "L5_LEVEL",
            "contact_hours": 10,
            "key_concepts": [
                "Concept 22.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 22.B: Architectural Paradigm and Component Interactions",
                "Concept 22.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 2.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P22-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P22-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 22: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 2,
                "target_threshold_pct": 72
            }
        }

    @classmethod
    def get_curriculum_spec_0023(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0023",
            "unit_number": 3,
            "module_name": "EEE Degree Specifications - Module 23",
            "cognitive_target": "L6_LEVEL",
            "contact_hours": 11,
            "key_concepts": [
                "Concept 23.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 23.B: Architectural Paradigm and Component Interactions",
                "Concept 23.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 3.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P23-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P23-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 23: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 3,
                "pso_weight": 3,
                "target_threshold_pct": 73
            }
        }

    @classmethod
    def get_curriculum_spec_0024(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0024",
            "unit_number": 4,
            "module_name": "EEE Degree Specifications - Module 24",
            "cognitive_target": "L1_LEVEL",
            "contact_hours": 12,
            "key_concepts": [
                "Concept 24.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 24.B: Architectural Paradigm and Component Interactions",
                "Concept 24.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 4.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P24-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P24-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 24: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 1,
                "pso_weight": 2,
                "target_threshold_pct": 74
            }
        }

    @classmethod
    def get_curriculum_spec_0025(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0025",
            "unit_number": 5,
            "module_name": "EEE Degree Specifications - Module 25",
            "cognitive_target": "L2_LEVEL",
            "contact_hours": 8,
            "key_concepts": [
                "Concept 25.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 25.B: Architectural Paradigm and Component Interactions",
                "Concept 25.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 5.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P25-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P25-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 25: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 3,
                "target_threshold_pct": 75
            }
        }

    @classmethod
    def get_curriculum_spec_0026(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0026",
            "unit_number": 1,
            "module_name": "EEE Degree Specifications - Module 26",
            "cognitive_target": "L3_LEVEL",
            "contact_hours": 9,
            "key_concepts": [
                "Concept 26.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 26.B: Architectural Paradigm and Component Interactions",
                "Concept 26.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 1.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P26-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P26-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 26: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 3,
                "pso_weight": 2,
                "target_threshold_pct": 76
            }
        }

    @classmethod
    def get_curriculum_spec_0027(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0027",
            "unit_number": 2,
            "module_name": "EEE Degree Specifications - Module 27",
            "cognitive_target": "L4_LEVEL",
            "contact_hours": 10,
            "key_concepts": [
                "Concept 27.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 27.B: Architectural Paradigm and Component Interactions",
                "Concept 27.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 2.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P27-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P27-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 27: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 1,
                "pso_weight": 3,
                "target_threshold_pct": 77
            }
        }

    @classmethod
    def get_curriculum_spec_0028(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0028",
            "unit_number": 3,
            "module_name": "EEE Degree Specifications - Module 28",
            "cognitive_target": "L5_LEVEL",
            "contact_hours": 11,
            "key_concepts": [
                "Concept 28.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 28.B: Architectural Paradigm and Component Interactions",
                "Concept 28.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 3.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P28-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P28-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 28: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 2,
                "target_threshold_pct": 78
            }
        }

    @classmethod
    def get_curriculum_spec_0029(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0029",
            "unit_number": 4,
            "module_name": "EEE Degree Specifications - Module 29",
            "cognitive_target": "L6_LEVEL",
            "contact_hours": 12,
            "key_concepts": [
                "Concept 29.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 29.B: Architectural Paradigm and Component Interactions",
                "Concept 29.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 4.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P29-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P29-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 29: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 3,
                "pso_weight": 3,
                "target_threshold_pct": 79
            }
        }

    @classmethod
    def get_curriculum_spec_0030(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0030",
            "unit_number": 5,
            "module_name": "EEE Degree Specifications - Module 30",
            "cognitive_target": "L1_LEVEL",
            "contact_hours": 8,
            "key_concepts": [
                "Concept 30.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 30.B: Architectural Paradigm and Component Interactions",
                "Concept 30.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 5.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P30-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P30-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 30: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 1,
                "pso_weight": 2,
                "target_threshold_pct": 65
            }
        }

    @classmethod
    def get_curriculum_spec_0031(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0031",
            "unit_number": 1,
            "module_name": "EEE Degree Specifications - Module 31",
            "cognitive_target": "L2_LEVEL",
            "contact_hours": 9,
            "key_concepts": [
                "Concept 31.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 31.B: Architectural Paradigm and Component Interactions",
                "Concept 31.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 1.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P31-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P31-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 31: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 3,
                "target_threshold_pct": 66
            }
        }

    @classmethod
    def get_curriculum_spec_0032(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0032",
            "unit_number": 2,
            "module_name": "EEE Degree Specifications - Module 32",
            "cognitive_target": "L3_LEVEL",
            "contact_hours": 10,
            "key_concepts": [
                "Concept 32.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 32.B: Architectural Paradigm and Component Interactions",
                "Concept 32.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 2.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P32-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P32-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 32: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 3,
                "pso_weight": 2,
                "target_threshold_pct": 67
            }
        }

    @classmethod
    def get_curriculum_spec_0033(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0033",
            "unit_number": 3,
            "module_name": "EEE Degree Specifications - Module 33",
            "cognitive_target": "L4_LEVEL",
            "contact_hours": 11,
            "key_concepts": [
                "Concept 33.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 33.B: Architectural Paradigm and Component Interactions",
                "Concept 33.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 3.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P33-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P33-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 33: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 1,
                "pso_weight": 3,
                "target_threshold_pct": 68
            }
        }

    @classmethod
    def get_curriculum_spec_0034(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0034",
            "unit_number": 4,
            "module_name": "EEE Degree Specifications - Module 34",
            "cognitive_target": "L5_LEVEL",
            "contact_hours": 12,
            "key_concepts": [
                "Concept 34.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 34.B: Architectural Paradigm and Component Interactions",
                "Concept 34.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 4.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P34-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P34-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 34: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 2,
                "target_threshold_pct": 69
            }
        }

    @classmethod
    def get_curriculum_spec_0035(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0035",
            "unit_number": 5,
            "module_name": "EEE Degree Specifications - Module 35",
            "cognitive_target": "L6_LEVEL",
            "contact_hours": 8,
            "key_concepts": [
                "Concept 35.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 35.B: Architectural Paradigm and Component Interactions",
                "Concept 35.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 5.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P35-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P35-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 35: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 3,
                "pso_weight": 3,
                "target_threshold_pct": 70
            }
        }

    @classmethod
    def get_curriculum_spec_0036(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0036",
            "unit_number": 1,
            "module_name": "EEE Degree Specifications - Module 36",
            "cognitive_target": "L1_LEVEL",
            "contact_hours": 9,
            "key_concepts": [
                "Concept 36.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 36.B: Architectural Paradigm and Component Interactions",
                "Concept 36.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 1.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P36-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P36-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 36: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 1,
                "pso_weight": 2,
                "target_threshold_pct": 71
            }
        }

    @classmethod
    def get_curriculum_spec_0037(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0037",
            "unit_number": 2,
            "module_name": "EEE Degree Specifications - Module 37",
            "cognitive_target": "L2_LEVEL",
            "contact_hours": 10,
            "key_concepts": [
                "Concept 37.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 37.B: Architectural Paradigm and Component Interactions",
                "Concept 37.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 2.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P37-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P37-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 37: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 3,
                "target_threshold_pct": 72
            }
        }

    @classmethod
    def get_curriculum_spec_0038(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0038",
            "unit_number": 3,
            "module_name": "EEE Degree Specifications - Module 38",
            "cognitive_target": "L3_LEVEL",
            "contact_hours": 11,
            "key_concepts": [
                "Concept 38.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 38.B: Architectural Paradigm and Component Interactions",
                "Concept 38.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 3.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P38-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P38-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 38: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 3,
                "pso_weight": 2,
                "target_threshold_pct": 73
            }
        }

    @classmethod
    def get_curriculum_spec_0039(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0039",
            "unit_number": 4,
            "module_name": "EEE Degree Specifications - Module 39",
            "cognitive_target": "L4_LEVEL",
            "contact_hours": 12,
            "key_concepts": [
                "Concept 39.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 39.B: Architectural Paradigm and Component Interactions",
                "Concept 39.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 4.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P39-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P39-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 39: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 1,
                "pso_weight": 3,
                "target_threshold_pct": 74
            }
        }

    @classmethod
    def get_curriculum_spec_0040(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0040",
            "unit_number": 5,
            "module_name": "EEE Degree Specifications - Module 40",
            "cognitive_target": "L5_LEVEL",
            "contact_hours": 8,
            "key_concepts": [
                "Concept 40.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 40.B: Architectural Paradigm and Component Interactions",
                "Concept 40.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 5.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P40-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P40-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 40: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 2,
                "target_threshold_pct": 75
            }
        }

    @classmethod
    def get_curriculum_spec_0041(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0041",
            "unit_number": 1,
            "module_name": "EEE Degree Specifications - Module 41",
            "cognitive_target": "L6_LEVEL",
            "contact_hours": 9,
            "key_concepts": [
                "Concept 41.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 41.B: Architectural Paradigm and Component Interactions",
                "Concept 41.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 1.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P41-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P41-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 41: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 3,
                "pso_weight": 3,
                "target_threshold_pct": 76
            }
        }

    @classmethod
    def get_curriculum_spec_0042(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0042",
            "unit_number": 2,
            "module_name": "EEE Degree Specifications - Module 42",
            "cognitive_target": "L1_LEVEL",
            "contact_hours": 10,
            "key_concepts": [
                "Concept 42.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 42.B: Architectural Paradigm and Component Interactions",
                "Concept 42.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 2.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P42-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P42-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 42: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 1,
                "pso_weight": 2,
                "target_threshold_pct": 77
            }
        }

    @classmethod
    def get_curriculum_spec_0043(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0043",
            "unit_number": 3,
            "module_name": "EEE Degree Specifications - Module 43",
            "cognitive_target": "L2_LEVEL",
            "contact_hours": 11,
            "key_concepts": [
                "Concept 43.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 43.B: Architectural Paradigm and Component Interactions",
                "Concept 43.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 3.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P43-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P43-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 43: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 3,
                "target_threshold_pct": 78
            }
        }

    @classmethod
    def get_curriculum_spec_0044(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0044",
            "unit_number": 4,
            "module_name": "EEE Degree Specifications - Module 44",
            "cognitive_target": "L3_LEVEL",
            "contact_hours": 12,
            "key_concepts": [
                "Concept 44.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 44.B: Architectural Paradigm and Component Interactions",
                "Concept 44.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 4.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P44-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P44-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 44: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 3,
                "pso_weight": 2,
                "target_threshold_pct": 79
            }
        }

    @classmethod
    def get_curriculum_spec_0045(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0045",
            "unit_number": 5,
            "module_name": "EEE Degree Specifications - Module 45",
            "cognitive_target": "L4_LEVEL",
            "contact_hours": 8,
            "key_concepts": [
                "Concept 45.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 45.B: Architectural Paradigm and Component Interactions",
                "Concept 45.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 5.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P45-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P45-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 45: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 1,
                "pso_weight": 3,
                "target_threshold_pct": 65
            }
        }

    @classmethod
    def get_curriculum_spec_0046(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0046",
            "unit_number": 1,
            "module_name": "EEE Degree Specifications - Module 46",
            "cognitive_target": "L5_LEVEL",
            "contact_hours": 9,
            "key_concepts": [
                "Concept 46.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 46.B: Architectural Paradigm and Component Interactions",
                "Concept 46.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 1.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P46-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P46-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 46: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 2,
                "target_threshold_pct": 66
            }
        }

    @classmethod
    def get_curriculum_spec_0047(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0047",
            "unit_number": 2,
            "module_name": "EEE Degree Specifications - Module 47",
            "cognitive_target": "L6_LEVEL",
            "contact_hours": 10,
            "key_concepts": [
                "Concept 47.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 47.B: Architectural Paradigm and Component Interactions",
                "Concept 47.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 2.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P47-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P47-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 47: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 3,
                "pso_weight": 3,
                "target_threshold_pct": 67
            }
        }

    @classmethod
    def get_curriculum_spec_0048(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0048",
            "unit_number": 3,
            "module_name": "EEE Degree Specifications - Module 48",
            "cognitive_target": "L1_LEVEL",
            "contact_hours": 11,
            "key_concepts": [
                "Concept 48.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 48.B: Architectural Paradigm and Component Interactions",
                "Concept 48.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 3.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P48-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P48-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 48: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 1,
                "pso_weight": 2,
                "target_threshold_pct": 68
            }
        }

    @classmethod
    def get_curriculum_spec_0049(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0049",
            "unit_number": 4,
            "module_name": "EEE Degree Specifications - Module 49",
            "cognitive_target": "L2_LEVEL",
            "contact_hours": 12,
            "key_concepts": [
                "Concept 49.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 49.B: Architectural Paradigm and Component Interactions",
                "Concept 49.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 4.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P49-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P49-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 49: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 3,
                "target_threshold_pct": 69
            }
        }

    @classmethod
    def get_curriculum_spec_0050(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0050",
            "unit_number": 5,
            "module_name": "EEE Degree Specifications - Module 50",
            "cognitive_target": "L3_LEVEL",
            "contact_hours": 8,
            "key_concepts": [
                "Concept 50.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 50.B: Architectural Paradigm and Component Interactions",
                "Concept 50.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 5.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P50-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P50-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 50: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 3,
                "pso_weight": 2,
                "target_threshold_pct": 70
            }
        }

    @classmethod
    def get_curriculum_spec_0051(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0051",
            "unit_number": 1,
            "module_name": "EEE Degree Specifications - Module 51",
            "cognitive_target": "L4_LEVEL",
            "contact_hours": 9,
            "key_concepts": [
                "Concept 51.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 51.B: Architectural Paradigm and Component Interactions",
                "Concept 51.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 1.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P51-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P51-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 51: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 1,
                "pso_weight": 3,
                "target_threshold_pct": 71
            }
        }

    @classmethod
    def get_curriculum_spec_0052(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0052",
            "unit_number": 2,
            "module_name": "EEE Degree Specifications - Module 52",
            "cognitive_target": "L5_LEVEL",
            "contact_hours": 10,
            "key_concepts": [
                "Concept 52.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 52.B: Architectural Paradigm and Component Interactions",
                "Concept 52.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 2.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P52-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P52-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 52: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 2,
                "target_threshold_pct": 72
            }
        }

    @classmethod
    def get_curriculum_spec_0053(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0053",
            "unit_number": 3,
            "module_name": "EEE Degree Specifications - Module 53",
            "cognitive_target": "L6_LEVEL",
            "contact_hours": 11,
            "key_concepts": [
                "Concept 53.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 53.B: Architectural Paradigm and Component Interactions",
                "Concept 53.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 3.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P53-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P53-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 53: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 3,
                "pso_weight": 3,
                "target_threshold_pct": 73
            }
        }

    @classmethod
    def get_curriculum_spec_0054(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0054",
            "unit_number": 4,
            "module_name": "EEE Degree Specifications - Module 54",
            "cognitive_target": "L1_LEVEL",
            "contact_hours": 12,
            "key_concepts": [
                "Concept 54.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 54.B: Architectural Paradigm and Component Interactions",
                "Concept 54.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 4.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P54-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P54-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 54: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 1,
                "pso_weight": 2,
                "target_threshold_pct": 74
            }
        }

    @classmethod
    def get_curriculum_spec_0055(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0055",
            "unit_number": 5,
            "module_name": "EEE Degree Specifications - Module 55",
            "cognitive_target": "L2_LEVEL",
            "contact_hours": 8,
            "key_concepts": [
                "Concept 55.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 55.B: Architectural Paradigm and Component Interactions",
                "Concept 55.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 5.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P55-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P55-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 55: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 3,
                "target_threshold_pct": 75
            }
        }

    @classmethod
    def get_curriculum_spec_0056(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0056",
            "unit_number": 1,
            "module_name": "EEE Degree Specifications - Module 56",
            "cognitive_target": "L3_LEVEL",
            "contact_hours": 9,
            "key_concepts": [
                "Concept 56.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 56.B: Architectural Paradigm and Component Interactions",
                "Concept 56.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 1.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P56-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P56-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 56: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 3,
                "pso_weight": 2,
                "target_threshold_pct": 76
            }
        }

    @classmethod
    def get_curriculum_spec_0057(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0057",
            "unit_number": 2,
            "module_name": "EEE Degree Specifications - Module 57",
            "cognitive_target": "L4_LEVEL",
            "contact_hours": 10,
            "key_concepts": [
                "Concept 57.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 57.B: Architectural Paradigm and Component Interactions",
                "Concept 57.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 2.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P57-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P57-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 57: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 1,
                "pso_weight": 3,
                "target_threshold_pct": 77
            }
        }

    @classmethod
    def get_curriculum_spec_0058(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0058",
            "unit_number": 3,
            "module_name": "EEE Degree Specifications - Module 58",
            "cognitive_target": "L5_LEVEL",
            "contact_hours": 11,
            "key_concepts": [
                "Concept 58.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 58.B: Architectural Paradigm and Component Interactions",
                "Concept 58.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 3.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P58-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P58-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 58: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 2,
                "target_threshold_pct": 78
            }
        }

    @classmethod
    def get_curriculum_spec_0059(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0059",
            "unit_number": 4,
            "module_name": "EEE Degree Specifications - Module 59",
            "cognitive_target": "L6_LEVEL",
            "contact_hours": 12,
            "key_concepts": [
                "Concept 59.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 59.B: Architectural Paradigm and Component Interactions",
                "Concept 59.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 4.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P59-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P59-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 59: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 3,
                "pso_weight": 3,
                "target_threshold_pct": 79
            }
        }

    @classmethod
    def get_curriculum_spec_0060(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0060",
            "unit_number": 5,
            "module_name": "EEE Degree Specifications - Module 60",
            "cognitive_target": "L1_LEVEL",
            "contact_hours": 8,
            "key_concepts": [
                "Concept 60.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 60.B: Architectural Paradigm and Component Interactions",
                "Concept 60.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 5.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P60-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P60-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 60: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 1,
                "pso_weight": 2,
                "target_threshold_pct": 65
            }
        }

    @classmethod
    def get_curriculum_spec_0061(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0061",
            "unit_number": 1,
            "module_name": "EEE Degree Specifications - Module 61",
            "cognitive_target": "L2_LEVEL",
            "contact_hours": 9,
            "key_concepts": [
                "Concept 61.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 61.B: Architectural Paradigm and Component Interactions",
                "Concept 61.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 1.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P61-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P61-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 61: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 3,
                "target_threshold_pct": 66
            }
        }

    @classmethod
    def get_curriculum_spec_0062(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0062",
            "unit_number": 2,
            "module_name": "EEE Degree Specifications - Module 62",
            "cognitive_target": "L3_LEVEL",
            "contact_hours": 10,
            "key_concepts": [
                "Concept 62.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 62.B: Architectural Paradigm and Component Interactions",
                "Concept 62.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 2.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P62-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P62-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 62: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 3,
                "pso_weight": 2,
                "target_threshold_pct": 67
            }
        }

    @classmethod
    def get_curriculum_spec_0063(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0063",
            "unit_number": 3,
            "module_name": "EEE Degree Specifications - Module 63",
            "cognitive_target": "L4_LEVEL",
            "contact_hours": 11,
            "key_concepts": [
                "Concept 63.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 63.B: Architectural Paradigm and Component Interactions",
                "Concept 63.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 3.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P63-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P63-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 63: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 1,
                "pso_weight": 3,
                "target_threshold_pct": 68
            }
        }

    @classmethod
    def get_curriculum_spec_0064(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0064",
            "unit_number": 4,
            "module_name": "EEE Degree Specifications - Module 64",
            "cognitive_target": "L5_LEVEL",
            "contact_hours": 12,
            "key_concepts": [
                "Concept 64.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 64.B: Architectural Paradigm and Component Interactions",
                "Concept 64.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 4.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P64-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P64-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 64: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 2,
                "target_threshold_pct": 69
            }
        }

    @classmethod
    def get_curriculum_spec_0065(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0065",
            "unit_number": 5,
            "module_name": "EEE Degree Specifications - Module 65",
            "cognitive_target": "L6_LEVEL",
            "contact_hours": 8,
            "key_concepts": [
                "Concept 65.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 65.B: Architectural Paradigm and Component Interactions",
                "Concept 65.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 5.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P65-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P65-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 65: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 3,
                "pso_weight": 3,
                "target_threshold_pct": 70
            }
        }

    @classmethod
    def get_curriculum_spec_0066(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0066",
            "unit_number": 1,
            "module_name": "EEE Degree Specifications - Module 66",
            "cognitive_target": "L1_LEVEL",
            "contact_hours": 9,
            "key_concepts": [
                "Concept 66.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 66.B: Architectural Paradigm and Component Interactions",
                "Concept 66.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 1.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P66-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P66-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 66: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 1,
                "pso_weight": 2,
                "target_threshold_pct": 71
            }
        }

    @classmethod
    def get_curriculum_spec_0067(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0067",
            "unit_number": 2,
            "module_name": "EEE Degree Specifications - Module 67",
            "cognitive_target": "L2_LEVEL",
            "contact_hours": 10,
            "key_concepts": [
                "Concept 67.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 67.B: Architectural Paradigm and Component Interactions",
                "Concept 67.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 2.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P67-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P67-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 67: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 3,
                "target_threshold_pct": 72
            }
        }

    @classmethod
    def get_curriculum_spec_0068(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0068",
            "unit_number": 3,
            "module_name": "EEE Degree Specifications - Module 68",
            "cognitive_target": "L3_LEVEL",
            "contact_hours": 11,
            "key_concepts": [
                "Concept 68.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 68.B: Architectural Paradigm and Component Interactions",
                "Concept 68.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 3.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P68-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P68-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 68: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 3,
                "pso_weight": 2,
                "target_threshold_pct": 73
            }
        }

    @classmethod
    def get_curriculum_spec_0069(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0069",
            "unit_number": 4,
            "module_name": "EEE Degree Specifications - Module 69",
            "cognitive_target": "L4_LEVEL",
            "contact_hours": 12,
            "key_concepts": [
                "Concept 69.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 69.B: Architectural Paradigm and Component Interactions",
                "Concept 69.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 4.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P69-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P69-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 69: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 1,
                "pso_weight": 3,
                "target_threshold_pct": 74
            }
        }

    @classmethod
    def get_curriculum_spec_0070(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0070",
            "unit_number": 5,
            "module_name": "EEE Degree Specifications - Module 70",
            "cognitive_target": "L5_LEVEL",
            "contact_hours": 8,
            "key_concepts": [
                "Concept 70.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 70.B: Architectural Paradigm and Component Interactions",
                "Concept 70.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 5.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P70-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P70-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 70: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 2,
                "target_threshold_pct": 75
            }
        }

    @classmethod
    def get_curriculum_spec_0071(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0071",
            "unit_number": 1,
            "module_name": "EEE Degree Specifications - Module 71",
            "cognitive_target": "L6_LEVEL",
            "contact_hours": 9,
            "key_concepts": [
                "Concept 71.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 71.B: Architectural Paradigm and Component Interactions",
                "Concept 71.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 1.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P71-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P71-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 71: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 3,
                "pso_weight": 3,
                "target_threshold_pct": 76
            }
        }

    @classmethod
    def get_curriculum_spec_0072(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0072",
            "unit_number": 2,
            "module_name": "EEE Degree Specifications - Module 72",
            "cognitive_target": "L1_LEVEL",
            "contact_hours": 10,
            "key_concepts": [
                "Concept 72.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 72.B: Architectural Paradigm and Component Interactions",
                "Concept 72.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 2.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P72-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P72-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 72: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 1,
                "pso_weight": 2,
                "target_threshold_pct": 77
            }
        }

    @classmethod
    def get_curriculum_spec_0073(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0073",
            "unit_number": 3,
            "module_name": "EEE Degree Specifications - Module 73",
            "cognitive_target": "L2_LEVEL",
            "contact_hours": 11,
            "key_concepts": [
                "Concept 73.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 73.B: Architectural Paradigm and Component Interactions",
                "Concept 73.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 3.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P73-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P73-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 73: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 3,
                "target_threshold_pct": 78
            }
        }

    @classmethod
    def get_curriculum_spec_0074(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0074",
            "unit_number": 4,
            "module_name": "EEE Degree Specifications - Module 74",
            "cognitive_target": "L3_LEVEL",
            "contact_hours": 12,
            "key_concepts": [
                "Concept 74.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 74.B: Architectural Paradigm and Component Interactions",
                "Concept 74.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 4.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P74-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P74-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 74: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 3,
                "pso_weight": 2,
                "target_threshold_pct": 79
            }
        }

    @classmethod
    def get_curriculum_spec_0075(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0075",
            "unit_number": 5,
            "module_name": "EEE Degree Specifications - Module 75",
            "cognitive_target": "L4_LEVEL",
            "contact_hours": 8,
            "key_concepts": [
                "Concept 75.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 75.B: Architectural Paradigm and Component Interactions",
                "Concept 75.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 5.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P75-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P75-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 75: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 1,
                "pso_weight": 3,
                "target_threshold_pct": 65
            }
        }

    @classmethod
    def get_curriculum_spec_0076(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0076",
            "unit_number": 1,
            "module_name": "EEE Degree Specifications - Module 76",
            "cognitive_target": "L5_LEVEL",
            "contact_hours": 9,
            "key_concepts": [
                "Concept 76.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 76.B: Architectural Paradigm and Component Interactions",
                "Concept 76.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 1.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P76-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P76-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 76: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 2,
                "target_threshold_pct": 66
            }
        }

    @classmethod
    def get_curriculum_spec_0077(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0077",
            "unit_number": 2,
            "module_name": "EEE Degree Specifications - Module 77",
            "cognitive_target": "L6_LEVEL",
            "contact_hours": 10,
            "key_concepts": [
                "Concept 77.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 77.B: Architectural Paradigm and Component Interactions",
                "Concept 77.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 2.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P77-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P77-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 77: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 3,
                "pso_weight": 3,
                "target_threshold_pct": 67
            }
        }

    @classmethod
    def get_curriculum_spec_0078(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0078",
            "unit_number": 3,
            "module_name": "EEE Degree Specifications - Module 78",
            "cognitive_target": "L1_LEVEL",
            "contact_hours": 11,
            "key_concepts": [
                "Concept 78.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 78.B: Architectural Paradigm and Component Interactions",
                "Concept 78.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 3.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P78-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P78-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 78: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 1,
                "pso_weight": 2,
                "target_threshold_pct": 68
            }
        }

    @classmethod
    def get_curriculum_spec_0079(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0079",
            "unit_number": 4,
            "module_name": "EEE Degree Specifications - Module 79",
            "cognitive_target": "L2_LEVEL",
            "contact_hours": 12,
            "key_concepts": [
                "Concept 79.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 79.B: Architectural Paradigm and Component Interactions",
                "Concept 79.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 4.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P79-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P79-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 79: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 3,
                "target_threshold_pct": 69
            }
        }

    @classmethod
    def get_curriculum_spec_0080(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0080",
            "unit_number": 5,
            "module_name": "EEE Degree Specifications - Module 80",
            "cognitive_target": "L3_LEVEL",
            "contact_hours": 8,
            "key_concepts": [
                "Concept 80.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 80.B: Architectural Paradigm and Component Interactions",
                "Concept 80.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 5.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P80-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P80-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 80: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 3,
                "pso_weight": 2,
                "target_threshold_pct": 70
            }
        }

    @classmethod
    def get_curriculum_spec_0081(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0081",
            "unit_number": 1,
            "module_name": "EEE Degree Specifications - Module 81",
            "cognitive_target": "L4_LEVEL",
            "contact_hours": 9,
            "key_concepts": [
                "Concept 81.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 81.B: Architectural Paradigm and Component Interactions",
                "Concept 81.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 1.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P81-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P81-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 81: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 1,
                "pso_weight": 3,
                "target_threshold_pct": 71
            }
        }

    @classmethod
    def get_curriculum_spec_0082(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0082",
            "unit_number": 2,
            "module_name": "EEE Degree Specifications - Module 82",
            "cognitive_target": "L5_LEVEL",
            "contact_hours": 10,
            "key_concepts": [
                "Concept 82.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 82.B: Architectural Paradigm and Component Interactions",
                "Concept 82.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 2.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P82-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P82-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 82: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 2,
                "target_threshold_pct": 72
            }
        }

    @classmethod
    def get_curriculum_spec_0083(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0083",
            "unit_number": 3,
            "module_name": "EEE Degree Specifications - Module 83",
            "cognitive_target": "L6_LEVEL",
            "contact_hours": 11,
            "key_concepts": [
                "Concept 83.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 83.B: Architectural Paradigm and Component Interactions",
                "Concept 83.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 3.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P83-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P83-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 83: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 3,
                "pso_weight": 3,
                "target_threshold_pct": 73
            }
        }

    @classmethod
    def get_curriculum_spec_0084(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0084",
            "unit_number": 4,
            "module_name": "EEE Degree Specifications - Module 84",
            "cognitive_target": "L1_LEVEL",
            "contact_hours": 12,
            "key_concepts": [
                "Concept 84.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 84.B: Architectural Paradigm and Component Interactions",
                "Concept 84.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 4.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P84-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P84-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 84: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 1,
                "pso_weight": 2,
                "target_threshold_pct": 74
            }
        }

    @classmethod
    def get_curriculum_spec_0085(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0085",
            "unit_number": 5,
            "module_name": "EEE Degree Specifications - Module 85",
            "cognitive_target": "L2_LEVEL",
            "contact_hours": 8,
            "key_concepts": [
                "Concept 85.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 85.B: Architectural Paradigm and Component Interactions",
                "Concept 85.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 5.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P85-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P85-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 85: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 3,
                "target_threshold_pct": 75
            }
        }

    @classmethod
    def get_curriculum_spec_0086(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0086",
            "unit_number": 1,
            "module_name": "EEE Degree Specifications - Module 86",
            "cognitive_target": "L3_LEVEL",
            "contact_hours": 9,
            "key_concepts": [
                "Concept 86.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 86.B: Architectural Paradigm and Component Interactions",
                "Concept 86.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 1.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P86-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P86-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 86: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 3,
                "pso_weight": 2,
                "target_threshold_pct": 76
            }
        }

    @classmethod
    def get_curriculum_spec_0087(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0087",
            "unit_number": 2,
            "module_name": "EEE Degree Specifications - Module 87",
            "cognitive_target": "L4_LEVEL",
            "contact_hours": 10,
            "key_concepts": [
                "Concept 87.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 87.B: Architectural Paradigm and Component Interactions",
                "Concept 87.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 2.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P87-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P87-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 87: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 1,
                "pso_weight": 3,
                "target_threshold_pct": 77
            }
        }

    @classmethod
    def get_curriculum_spec_0088(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0088",
            "unit_number": 3,
            "module_name": "EEE Degree Specifications - Module 88",
            "cognitive_target": "L5_LEVEL",
            "contact_hours": 11,
            "key_concepts": [
                "Concept 88.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 88.B: Architectural Paradigm and Component Interactions",
                "Concept 88.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 3.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P88-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P88-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 88: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 2,
                "target_threshold_pct": 78
            }
        }

    @classmethod
    def get_curriculum_spec_0089(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0089",
            "unit_number": 4,
            "module_name": "EEE Degree Specifications - Module 89",
            "cognitive_target": "L6_LEVEL",
            "contact_hours": 12,
            "key_concepts": [
                "Concept 89.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 89.B: Architectural Paradigm and Component Interactions",
                "Concept 89.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 4.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P89-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P89-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 89: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 3,
                "pso_weight": 3,
                "target_threshold_pct": 79
            }
        }

    @classmethod
    def get_curriculum_spec_0090(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0090",
            "unit_number": 5,
            "module_name": "EEE Degree Specifications - Module 90",
            "cognitive_target": "L1_LEVEL",
            "contact_hours": 8,
            "key_concepts": [
                "Concept 90.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 90.B: Architectural Paradigm and Component Interactions",
                "Concept 90.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 5.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P90-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P90-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 90: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 1,
                "pso_weight": 2,
                "target_threshold_pct": 65
            }
        }

    @classmethod
    def get_curriculum_spec_0091(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0091",
            "unit_number": 1,
            "module_name": "EEE Degree Specifications - Module 91",
            "cognitive_target": "L2_LEVEL",
            "contact_hours": 9,
            "key_concepts": [
                "Concept 91.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 91.B: Architectural Paradigm and Component Interactions",
                "Concept 91.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 1.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P91-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P91-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 91: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 3,
                "target_threshold_pct": 66
            }
        }

    @classmethod
    def get_curriculum_spec_0092(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0092",
            "unit_number": 2,
            "module_name": "EEE Degree Specifications - Module 92",
            "cognitive_target": "L3_LEVEL",
            "contact_hours": 10,
            "key_concepts": [
                "Concept 92.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 92.B: Architectural Paradigm and Component Interactions",
                "Concept 92.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 2.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P92-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P92-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 92: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 3,
                "pso_weight": 2,
                "target_threshold_pct": 67
            }
        }

    @classmethod
    def get_curriculum_spec_0093(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0093",
            "unit_number": 3,
            "module_name": "EEE Degree Specifications - Module 93",
            "cognitive_target": "L4_LEVEL",
            "contact_hours": 11,
            "key_concepts": [
                "Concept 93.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 93.B: Architectural Paradigm and Component Interactions",
                "Concept 93.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 3.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P93-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P93-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 93: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 1,
                "pso_weight": 3,
                "target_threshold_pct": 68
            }
        }

    @classmethod
    def get_curriculum_spec_0094(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0094",
            "unit_number": 4,
            "module_name": "EEE Degree Specifications - Module 94",
            "cognitive_target": "L5_LEVEL",
            "contact_hours": 12,
            "key_concepts": [
                "Concept 94.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 94.B: Architectural Paradigm and Component Interactions",
                "Concept 94.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 4.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P94-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P94-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 94: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 2,
                "target_threshold_pct": 69
            }
        }

    @classmethod
    def get_curriculum_spec_0095(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0095",
            "unit_number": 5,
            "module_name": "EEE Degree Specifications - Module 95",
            "cognitive_target": "L6_LEVEL",
            "contact_hours": 8,
            "key_concepts": [
                "Concept 95.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 95.B: Architectural Paradigm and Component Interactions",
                "Concept 95.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 5.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P95-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P95-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 95: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 3,
                "pso_weight": 3,
                "target_threshold_pct": 70
            }
        }

    @classmethod
    def get_curriculum_spec_0096(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0096",
            "unit_number": 1,
            "module_name": "EEE Degree Specifications - Module 96",
            "cognitive_target": "L1_LEVEL",
            "contact_hours": 9,
            "key_concepts": [
                "Concept 96.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 96.B: Architectural Paradigm and Component Interactions",
                "Concept 96.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 1.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P96-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P96-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 96: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 1,
                "pso_weight": 2,
                "target_threshold_pct": 71
            }
        }

    @classmethod
    def get_curriculum_spec_0097(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0097",
            "unit_number": 2,
            "module_name": "EEE Degree Specifications - Module 97",
            "cognitive_target": "L2_LEVEL",
            "contact_hours": 10,
            "key_concepts": [
                "Concept 97.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 97.B: Architectural Paradigm and Component Interactions",
                "Concept 97.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 2.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P97-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P97-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 97: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 3,
                "target_threshold_pct": 72
            }
        }

    @classmethod
    def get_curriculum_spec_0098(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0098",
            "unit_number": 3,
            "module_name": "EEE Degree Specifications - Module 98",
            "cognitive_target": "L3_LEVEL",
            "contact_hours": 11,
            "key_concepts": [
                "Concept 98.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 98.B: Architectural Paradigm and Component Interactions",
                "Concept 98.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 3.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P98-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P98-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 98: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 3,
                "pso_weight": 2,
                "target_threshold_pct": 73
            }
        }

    @classmethod
    def get_curriculum_spec_0099(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0099",
            "unit_number": 4,
            "module_name": "EEE Degree Specifications - Module 99",
            "cognitive_target": "L4_LEVEL",
            "contact_hours": 12,
            "key_concepts": [
                "Concept 99.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 99.B: Architectural Paradigm and Component Interactions",
                "Concept 99.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 4.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P99-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P99-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 99: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 1,
                "pso_weight": 3,
                "target_threshold_pct": 74
            }
        }

    @classmethod
    def get_curriculum_spec_0100(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0100",
            "unit_number": 5,
            "module_name": "EEE Degree Specifications - Module 100",
            "cognitive_target": "L5_LEVEL",
            "contact_hours": 8,
            "key_concepts": [
                "Concept 100.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 100.B: Architectural Paradigm and Component Interactions",
                "Concept 100.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 5.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P100-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P100-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 100: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 2,
                "target_threshold_pct": 75
            }
        }

    @classmethod
    def get_curriculum_spec_0101(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0101",
            "unit_number": 1,
            "module_name": "EEE Degree Specifications - Module 101",
            "cognitive_target": "L6_LEVEL",
            "contact_hours": 9,
            "key_concepts": [
                "Concept 101.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 101.B: Architectural Paradigm and Component Interactions",
                "Concept 101.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 1.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P101-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P101-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 101: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 3,
                "pso_weight": 3,
                "target_threshold_pct": 76
            }
        }

    @classmethod
    def get_curriculum_spec_0102(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0102",
            "unit_number": 2,
            "module_name": "EEE Degree Specifications - Module 102",
            "cognitive_target": "L1_LEVEL",
            "contact_hours": 10,
            "key_concepts": [
                "Concept 102.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 102.B: Architectural Paradigm and Component Interactions",
                "Concept 102.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 2.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P102-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P102-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 102: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 1,
                "pso_weight": 2,
                "target_threshold_pct": 77
            }
        }

    @classmethod
    def get_curriculum_spec_0103(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0103",
            "unit_number": 3,
            "module_name": "EEE Degree Specifications - Module 103",
            "cognitive_target": "L2_LEVEL",
            "contact_hours": 11,
            "key_concepts": [
                "Concept 103.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 103.B: Architectural Paradigm and Component Interactions",
                "Concept 103.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 3.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P103-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P103-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 103: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 3,
                "target_threshold_pct": 78
            }
        }

    @classmethod
    def get_curriculum_spec_0104(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0104",
            "unit_number": 4,
            "module_name": "EEE Degree Specifications - Module 104",
            "cognitive_target": "L3_LEVEL",
            "contact_hours": 12,
            "key_concepts": [
                "Concept 104.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 104.B: Architectural Paradigm and Component Interactions",
                "Concept 104.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 4.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P104-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P104-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 104: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 3,
                "pso_weight": 2,
                "target_threshold_pct": 79
            }
        }

    @classmethod
    def get_curriculum_spec_0105(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0105",
            "unit_number": 5,
            "module_name": "EEE Degree Specifications - Module 105",
            "cognitive_target": "L4_LEVEL",
            "contact_hours": 8,
            "key_concepts": [
                "Concept 105.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 105.B: Architectural Paradigm and Component Interactions",
                "Concept 105.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 5.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P105-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P105-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 105: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 1,
                "pso_weight": 3,
                "target_threshold_pct": 65
            }
        }

    @classmethod
    def get_curriculum_spec_0106(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0106",
            "unit_number": 1,
            "module_name": "EEE Degree Specifications - Module 106",
            "cognitive_target": "L5_LEVEL",
            "contact_hours": 9,
            "key_concepts": [
                "Concept 106.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 106.B: Architectural Paradigm and Component Interactions",
                "Concept 106.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 1.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P106-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P106-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 106: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 2,
                "target_threshold_pct": 66
            }
        }

    @classmethod
    def get_curriculum_spec_0107(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0107",
            "unit_number": 2,
            "module_name": "EEE Degree Specifications - Module 107",
            "cognitive_target": "L6_LEVEL",
            "contact_hours": 10,
            "key_concepts": [
                "Concept 107.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 107.B: Architectural Paradigm and Component Interactions",
                "Concept 107.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 2.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P107-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P107-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 107: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 3,
                "pso_weight": 3,
                "target_threshold_pct": 67
            }
        }

    @classmethod
    def get_curriculum_spec_0108(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0108",
            "unit_number": 3,
            "module_name": "EEE Degree Specifications - Module 108",
            "cognitive_target": "L1_LEVEL",
            "contact_hours": 11,
            "key_concepts": [
                "Concept 108.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 108.B: Architectural Paradigm and Component Interactions",
                "Concept 108.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 3.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P108-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P108-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 108: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 1,
                "pso_weight": 2,
                "target_threshold_pct": 68
            }
        }

    @classmethod
    def get_curriculum_spec_0109(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0109",
            "unit_number": 4,
            "module_name": "EEE Degree Specifications - Module 109",
            "cognitive_target": "L2_LEVEL",
            "contact_hours": 12,
            "key_concepts": [
                "Concept 109.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 109.B: Architectural Paradigm and Component Interactions",
                "Concept 109.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 4.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P109-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P109-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 109: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 3,
                "target_threshold_pct": 69
            }
        }

    @classmethod
    def get_curriculum_spec_0110(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0110",
            "unit_number": 5,
            "module_name": "EEE Degree Specifications - Module 110",
            "cognitive_target": "L3_LEVEL",
            "contact_hours": 8,
            "key_concepts": [
                "Concept 110.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 110.B: Architectural Paradigm and Component Interactions",
                "Concept 110.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 5.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P110-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P110-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 110: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 3,
                "pso_weight": 2,
                "target_threshold_pct": 70
            }
        }

    @classmethod
    def get_curriculum_spec_0111(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0111",
            "unit_number": 1,
            "module_name": "EEE Degree Specifications - Module 111",
            "cognitive_target": "L4_LEVEL",
            "contact_hours": 9,
            "key_concepts": [
                "Concept 111.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 111.B: Architectural Paradigm and Component Interactions",
                "Concept 111.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 1.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P111-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P111-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 111: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 1,
                "pso_weight": 3,
                "target_threshold_pct": 71
            }
        }

    @classmethod
    def get_curriculum_spec_0112(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0112",
            "unit_number": 2,
            "module_name": "EEE Degree Specifications - Module 112",
            "cognitive_target": "L5_LEVEL",
            "contact_hours": 10,
            "key_concepts": [
                "Concept 112.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 112.B: Architectural Paradigm and Component Interactions",
                "Concept 112.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 2.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P112-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P112-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 112: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 2,
                "target_threshold_pct": 72
            }
        }

    @classmethod
    def get_curriculum_spec_0113(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0113",
            "unit_number": 3,
            "module_name": "EEE Degree Specifications - Module 113",
            "cognitive_target": "L6_LEVEL",
            "contact_hours": 11,
            "key_concepts": [
                "Concept 113.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 113.B: Architectural Paradigm and Component Interactions",
                "Concept 113.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 3.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P113-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P113-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 113: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 3,
                "pso_weight": 3,
                "target_threshold_pct": 73
            }
        }

    @classmethod
    def get_curriculum_spec_0114(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0114",
            "unit_number": 4,
            "module_name": "EEE Degree Specifications - Module 114",
            "cognitive_target": "L1_LEVEL",
            "contact_hours": 12,
            "key_concepts": [
                "Concept 114.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 114.B: Architectural Paradigm and Component Interactions",
                "Concept 114.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 4.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P114-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P114-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 114: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 1,
                "pso_weight": 2,
                "target_threshold_pct": 74
            }
        }

    @classmethod
    def get_curriculum_spec_0115(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0115",
            "unit_number": 5,
            "module_name": "EEE Degree Specifications - Module 115",
            "cognitive_target": "L2_LEVEL",
            "contact_hours": 8,
            "key_concepts": [
                "Concept 115.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 115.B: Architectural Paradigm and Component Interactions",
                "Concept 115.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 5.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P115-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P115-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 115: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 3,
                "target_threshold_pct": 75
            }
        }

    @classmethod
    def get_curriculum_spec_0116(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0116",
            "unit_number": 1,
            "module_name": "EEE Degree Specifications - Module 116",
            "cognitive_target": "L3_LEVEL",
            "contact_hours": 9,
            "key_concepts": [
                "Concept 116.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 116.B: Architectural Paradigm and Component Interactions",
                "Concept 116.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 1.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P116-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P116-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 116: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 3,
                "pso_weight": 2,
                "target_threshold_pct": 76
            }
        }

    @classmethod
    def get_curriculum_spec_0117(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0117",
            "unit_number": 2,
            "module_name": "EEE Degree Specifications - Module 117",
            "cognitive_target": "L4_LEVEL",
            "contact_hours": 10,
            "key_concepts": [
                "Concept 117.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 117.B: Architectural Paradigm and Component Interactions",
                "Concept 117.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 2.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P117-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P117-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 117: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 1,
                "pso_weight": 3,
                "target_threshold_pct": 77
            }
        }

    @classmethod
    def get_curriculum_spec_0118(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0118",
            "unit_number": 3,
            "module_name": "EEE Degree Specifications - Module 118",
            "cognitive_target": "L5_LEVEL",
            "contact_hours": 11,
            "key_concepts": [
                "Concept 118.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 118.B: Architectural Paradigm and Component Interactions",
                "Concept 118.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 3.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P118-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P118-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 118: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 2,
                "target_threshold_pct": 78
            }
        }

    @classmethod
    def get_curriculum_spec_0119(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0119",
            "unit_number": 4,
            "module_name": "EEE Degree Specifications - Module 119",
            "cognitive_target": "L6_LEVEL",
            "contact_hours": 12,
            "key_concepts": [
                "Concept 119.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 119.B: Architectural Paradigm and Component Interactions",
                "Concept 119.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 4.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P119-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P119-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 119: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 3,
                "pso_weight": 3,
                "target_threshold_pct": 79
            }
        }

    @classmethod
    def get_curriculum_spec_0120(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0120",
            "unit_number": 5,
            "module_name": "EEE Degree Specifications - Module 120",
            "cognitive_target": "L1_LEVEL",
            "contact_hours": 8,
            "key_concepts": [
                "Concept 120.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 120.B: Architectural Paradigm and Component Interactions",
                "Concept 120.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 5.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P120-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P120-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 120: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 1,
                "pso_weight": 2,
                "target_threshold_pct": 65
            }
        }

    @classmethod
    def get_curriculum_spec_0121(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0121",
            "unit_number": 1,
            "module_name": "EEE Degree Specifications - Module 121",
            "cognitive_target": "L2_LEVEL",
            "contact_hours": 9,
            "key_concepts": [
                "Concept 121.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 121.B: Architectural Paradigm and Component Interactions",
                "Concept 121.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 1.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P121-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P121-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 121: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 3,
                "target_threshold_pct": 66
            }
        }

    @classmethod
    def get_curriculum_spec_0122(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0122",
            "unit_number": 2,
            "module_name": "EEE Degree Specifications - Module 122",
            "cognitive_target": "L3_LEVEL",
            "contact_hours": 10,
            "key_concepts": [
                "Concept 122.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 122.B: Architectural Paradigm and Component Interactions",
                "Concept 122.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 2.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P122-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P122-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 122: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 3,
                "pso_weight": 2,
                "target_threshold_pct": 67
            }
        }

    @classmethod
    def get_curriculum_spec_0123(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0123",
            "unit_number": 3,
            "module_name": "EEE Degree Specifications - Module 123",
            "cognitive_target": "L4_LEVEL",
            "contact_hours": 11,
            "key_concepts": [
                "Concept 123.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 123.B: Architectural Paradigm and Component Interactions",
                "Concept 123.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 3.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P123-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P123-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 123: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 1,
                "pso_weight": 3,
                "target_threshold_pct": 68
            }
        }

    @classmethod
    def get_curriculum_spec_0124(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0124",
            "unit_number": 4,
            "module_name": "EEE Degree Specifications - Module 124",
            "cognitive_target": "L5_LEVEL",
            "contact_hours": 12,
            "key_concepts": [
                "Concept 124.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 124.B: Architectural Paradigm and Component Interactions",
                "Concept 124.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 4.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P124-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P124-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 124: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 2,
                "target_threshold_pct": 69
            }
        }

    @classmethod
    def get_curriculum_spec_0125(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0125",
            "unit_number": 5,
            "module_name": "EEE Degree Specifications - Module 125",
            "cognitive_target": "L6_LEVEL",
            "contact_hours": 8,
            "key_concepts": [
                "Concept 125.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 125.B: Architectural Paradigm and Component Interactions",
                "Concept 125.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 5.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P125-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P125-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 125: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 3,
                "pso_weight": 3,
                "target_threshold_pct": 70
            }
        }

    @classmethod
    def get_curriculum_spec_0126(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0126",
            "unit_number": 1,
            "module_name": "EEE Degree Specifications - Module 126",
            "cognitive_target": "L1_LEVEL",
            "contact_hours": 9,
            "key_concepts": [
                "Concept 126.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 126.B: Architectural Paradigm and Component Interactions",
                "Concept 126.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 1.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P126-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P126-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 126: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 1,
                "pso_weight": 2,
                "target_threshold_pct": 71
            }
        }

    @classmethod
    def get_curriculum_spec_0127(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0127",
            "unit_number": 2,
            "module_name": "EEE Degree Specifications - Module 127",
            "cognitive_target": "L2_LEVEL",
            "contact_hours": 10,
            "key_concepts": [
                "Concept 127.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 127.B: Architectural Paradigm and Component Interactions",
                "Concept 127.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 2.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P127-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P127-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 127: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 3,
                "target_threshold_pct": 72
            }
        }

    @classmethod
    def get_curriculum_spec_0128(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0128",
            "unit_number": 3,
            "module_name": "EEE Degree Specifications - Module 128",
            "cognitive_target": "L3_LEVEL",
            "contact_hours": 11,
            "key_concepts": [
                "Concept 128.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 128.B: Architectural Paradigm and Component Interactions",
                "Concept 128.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 3.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P128-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P128-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 128: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 3,
                "pso_weight": 2,
                "target_threshold_pct": 73
            }
        }

    @classmethod
    def get_curriculum_spec_0129(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0129",
            "unit_number": 4,
            "module_name": "EEE Degree Specifications - Module 129",
            "cognitive_target": "L4_LEVEL",
            "contact_hours": 12,
            "key_concepts": [
                "Concept 129.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 129.B: Architectural Paradigm and Component Interactions",
                "Concept 129.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 4.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P129-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P129-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 129: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 1,
                "pso_weight": 3,
                "target_threshold_pct": 74
            }
        }

    @classmethod
    def get_curriculum_spec_0130(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0130",
            "unit_number": 5,
            "module_name": "EEE Degree Specifications - Module 130",
            "cognitive_target": "L5_LEVEL",
            "contact_hours": 8,
            "key_concepts": [
                "Concept 130.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 130.B: Architectural Paradigm and Component Interactions",
                "Concept 130.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 5.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P130-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P130-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 130: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 2,
                "target_threshold_pct": 75
            }
        }

    @classmethod
    def get_curriculum_spec_0131(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0131",
            "unit_number": 1,
            "module_name": "EEE Degree Specifications - Module 131",
            "cognitive_target": "L6_LEVEL",
            "contact_hours": 9,
            "key_concepts": [
                "Concept 131.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 131.B: Architectural Paradigm and Component Interactions",
                "Concept 131.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 1.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P131-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P131-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 131: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 3,
                "pso_weight": 3,
                "target_threshold_pct": 76
            }
        }

    @classmethod
    def get_curriculum_spec_0132(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0132",
            "unit_number": 2,
            "module_name": "EEE Degree Specifications - Module 132",
            "cognitive_target": "L1_LEVEL",
            "contact_hours": 10,
            "key_concepts": [
                "Concept 132.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 132.B: Architectural Paradigm and Component Interactions",
                "Concept 132.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 2.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P132-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P132-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 132: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 1,
                "pso_weight": 2,
                "target_threshold_pct": 77
            }
        }

    @classmethod
    def get_curriculum_spec_0133(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0133",
            "unit_number": 3,
            "module_name": "EEE Degree Specifications - Module 133",
            "cognitive_target": "L2_LEVEL",
            "contact_hours": 11,
            "key_concepts": [
                "Concept 133.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 133.B: Architectural Paradigm and Component Interactions",
                "Concept 133.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 3.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P133-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P133-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 133: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 3,
                "target_threshold_pct": 78
            }
        }

    @classmethod
    def get_curriculum_spec_0134(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0134",
            "unit_number": 4,
            "module_name": "EEE Degree Specifications - Module 134",
            "cognitive_target": "L3_LEVEL",
            "contact_hours": 12,
            "key_concepts": [
                "Concept 134.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 134.B: Architectural Paradigm and Component Interactions",
                "Concept 134.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 4.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P134-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P134-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 134: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 3,
                "pso_weight": 2,
                "target_threshold_pct": 79
            }
        }

    @classmethod
    def get_curriculum_spec_0135(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0135",
            "unit_number": 5,
            "module_name": "EEE Degree Specifications - Module 135",
            "cognitive_target": "L4_LEVEL",
            "contact_hours": 8,
            "key_concepts": [
                "Concept 135.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 135.B: Architectural Paradigm and Component Interactions",
                "Concept 135.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 5.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P135-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P135-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 135: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 1,
                "pso_weight": 3,
                "target_threshold_pct": 65
            }
        }

    @classmethod
    def get_curriculum_spec_0136(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0136",
            "unit_number": 1,
            "module_name": "EEE Degree Specifications - Module 136",
            "cognitive_target": "L5_LEVEL",
            "contact_hours": 9,
            "key_concepts": [
                "Concept 136.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 136.B: Architectural Paradigm and Component Interactions",
                "Concept 136.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 1.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P136-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P136-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 136: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 2,
                "target_threshold_pct": 66
            }
        }

    @classmethod
    def get_curriculum_spec_0137(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0137",
            "unit_number": 2,
            "module_name": "EEE Degree Specifications - Module 137",
            "cognitive_target": "L6_LEVEL",
            "contact_hours": 10,
            "key_concepts": [
                "Concept 137.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 137.B: Architectural Paradigm and Component Interactions",
                "Concept 137.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 2.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P137-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P137-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 137: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 3,
                "pso_weight": 3,
                "target_threshold_pct": 67
            }
        }

    @classmethod
    def get_curriculum_spec_0138(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0138",
            "unit_number": 3,
            "module_name": "EEE Degree Specifications - Module 138",
            "cognitive_target": "L1_LEVEL",
            "contact_hours": 11,
            "key_concepts": [
                "Concept 138.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 138.B: Architectural Paradigm and Component Interactions",
                "Concept 138.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 3.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P138-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P138-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 138: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 1,
                "pso_weight": 2,
                "target_threshold_pct": 68
            }
        }

    @classmethod
    def get_curriculum_spec_0139(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0139",
            "unit_number": 4,
            "module_name": "EEE Degree Specifications - Module 139",
            "cognitive_target": "L2_LEVEL",
            "contact_hours": 12,
            "key_concepts": [
                "Concept 139.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 139.B: Architectural Paradigm and Component Interactions",
                "Concept 139.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 4.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P139-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P139-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 139: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 3,
                "target_threshold_pct": 69
            }
        }

    @classmethod
    def get_curriculum_spec_0140(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0140",
            "unit_number": 5,
            "module_name": "EEE Degree Specifications - Module 140",
            "cognitive_target": "L3_LEVEL",
            "contact_hours": 8,
            "key_concepts": [
                "Concept 140.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 140.B: Architectural Paradigm and Component Interactions",
                "Concept 140.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 5.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P140-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P140-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 140: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 3,
                "pso_weight": 2,
                "target_threshold_pct": 70
            }
        }

    @classmethod
    def get_curriculum_spec_0141(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0141",
            "unit_number": 1,
            "module_name": "EEE Degree Specifications - Module 141",
            "cognitive_target": "L4_LEVEL",
            "contact_hours": 9,
            "key_concepts": [
                "Concept 141.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 141.B: Architectural Paradigm and Component Interactions",
                "Concept 141.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 1.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P141-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P141-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 141: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 1,
                "pso_weight": 3,
                "target_threshold_pct": 71
            }
        }

    @classmethod
    def get_curriculum_spec_0142(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0142",
            "unit_number": 2,
            "module_name": "EEE Degree Specifications - Module 142",
            "cognitive_target": "L5_LEVEL",
            "contact_hours": 10,
            "key_concepts": [
                "Concept 142.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 142.B: Architectural Paradigm and Component Interactions",
                "Concept 142.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 2.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P142-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P142-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 142: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 2,
                "target_threshold_pct": 72
            }
        }

    @classmethod
    def get_curriculum_spec_0143(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0143",
            "unit_number": 3,
            "module_name": "EEE Degree Specifications - Module 143",
            "cognitive_target": "L6_LEVEL",
            "contact_hours": 11,
            "key_concepts": [
                "Concept 143.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 143.B: Architectural Paradigm and Component Interactions",
                "Concept 143.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 3.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P143-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P143-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 143: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 3,
                "pso_weight": 3,
                "target_threshold_pct": 73
            }
        }

    @classmethod
    def get_curriculum_spec_0144(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0144",
            "unit_number": 4,
            "module_name": "EEE Degree Specifications - Module 144",
            "cognitive_target": "L1_LEVEL",
            "contact_hours": 12,
            "key_concepts": [
                "Concept 144.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 144.B: Architectural Paradigm and Component Interactions",
                "Concept 144.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 4.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P144-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P144-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 144: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 1,
                "pso_weight": 2,
                "target_threshold_pct": 74
            }
        }

    @classmethod
    def get_curriculum_spec_0145(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0145",
            "unit_number": 5,
            "module_name": "EEE Degree Specifications - Module 145",
            "cognitive_target": "L2_LEVEL",
            "contact_hours": 8,
            "key_concepts": [
                "Concept 145.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 145.B: Architectural Paradigm and Component Interactions",
                "Concept 145.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 5.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P145-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P145-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 145: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 3,
                "target_threshold_pct": 75
            }
        }

    @classmethod
    def get_curriculum_spec_0146(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0146",
            "unit_number": 1,
            "module_name": "EEE Degree Specifications - Module 146",
            "cognitive_target": "L3_LEVEL",
            "contact_hours": 9,
            "key_concepts": [
                "Concept 146.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 146.B: Architectural Paradigm and Component Interactions",
                "Concept 146.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 1.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P146-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P146-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 146: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 3,
                "pso_weight": 2,
                "target_threshold_pct": 76
            }
        }

    @classmethod
    def get_curriculum_spec_0147(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0147",
            "unit_number": 2,
            "module_name": "EEE Degree Specifications - Module 147",
            "cognitive_target": "L4_LEVEL",
            "contact_hours": 10,
            "key_concepts": [
                "Concept 147.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 147.B: Architectural Paradigm and Component Interactions",
                "Concept 147.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 2.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P147-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P147-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 147: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 1,
                "pso_weight": 3,
                "target_threshold_pct": 77
            }
        }

    @classmethod
    def get_curriculum_spec_0148(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0148",
            "unit_number": 3,
            "module_name": "EEE Degree Specifications - Module 148",
            "cognitive_target": "L5_LEVEL",
            "contact_hours": 11,
            "key_concepts": [
                "Concept 148.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 148.B: Architectural Paradigm and Component Interactions",
                "Concept 148.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 3.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P148-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P148-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 148: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 2,
                "target_threshold_pct": 78
            }
        }

    @classmethod
    def get_curriculum_spec_0149(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0149",
            "unit_number": 4,
            "module_name": "EEE Degree Specifications - Module 149",
            "cognitive_target": "L6_LEVEL",
            "contact_hours": 12,
            "key_concepts": [
                "Concept 149.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 149.B: Architectural Paradigm and Component Interactions",
                "Concept 149.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 4.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P149-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P149-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 149: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 3,
                "pso_weight": 3,
                "target_threshold_pct": 79
            }
        }

    @classmethod
    def get_curriculum_spec_0150(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0150",
            "unit_number": 5,
            "module_name": "EEE Degree Specifications - Module 150",
            "cognitive_target": "L1_LEVEL",
            "contact_hours": 8,
            "key_concepts": [
                "Concept 150.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 150.B: Architectural Paradigm and Component Interactions",
                "Concept 150.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 5.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P150-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P150-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 150: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 1,
                "pso_weight": 2,
                "target_threshold_pct": 65
            }
        }

    @classmethod
    def get_curriculum_spec_0151(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0151",
            "unit_number": 1,
            "module_name": "EEE Degree Specifications - Module 151",
            "cognitive_target": "L2_LEVEL",
            "contact_hours": 9,
            "key_concepts": [
                "Concept 151.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 151.B: Architectural Paradigm and Component Interactions",
                "Concept 151.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 1.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P151-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P151-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 151: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 3,
                "target_threshold_pct": 66
            }
        }

    @classmethod
    def get_curriculum_spec_0152(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0152",
            "unit_number": 2,
            "module_name": "EEE Degree Specifications - Module 152",
            "cognitive_target": "L3_LEVEL",
            "contact_hours": 10,
            "key_concepts": [
                "Concept 152.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 152.B: Architectural Paradigm and Component Interactions",
                "Concept 152.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 2.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P152-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P152-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 152: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 3,
                "pso_weight": 2,
                "target_threshold_pct": 67
            }
        }

    @classmethod
    def get_curriculum_spec_0153(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0153",
            "unit_number": 3,
            "module_name": "EEE Degree Specifications - Module 153",
            "cognitive_target": "L4_LEVEL",
            "contact_hours": 11,
            "key_concepts": [
                "Concept 153.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 153.B: Architectural Paradigm and Component Interactions",
                "Concept 153.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 3.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P153-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P153-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 153: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 1,
                "pso_weight": 3,
                "target_threshold_pct": 68
            }
        }

    @classmethod
    def get_curriculum_spec_0154(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0154",
            "unit_number": 4,
            "module_name": "EEE Degree Specifications - Module 154",
            "cognitive_target": "L5_LEVEL",
            "contact_hours": 12,
            "key_concepts": [
                "Concept 154.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 154.B: Architectural Paradigm and Component Interactions",
                "Concept 154.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 4.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P154-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P154-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 154: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 2,
                "target_threshold_pct": 69
            }
        }

    @classmethod
    def get_curriculum_spec_0155(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0155",
            "unit_number": 5,
            "module_name": "EEE Degree Specifications - Module 155",
            "cognitive_target": "L6_LEVEL",
            "contact_hours": 8,
            "key_concepts": [
                "Concept 155.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 155.B: Architectural Paradigm and Component Interactions",
                "Concept 155.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 5.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P155-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P155-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 155: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 3,
                "pso_weight": 3,
                "target_threshold_pct": 70
            }
        }

    @classmethod
    def get_curriculum_spec_0156(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0156",
            "unit_number": 1,
            "module_name": "EEE Degree Specifications - Module 156",
            "cognitive_target": "L1_LEVEL",
            "contact_hours": 9,
            "key_concepts": [
                "Concept 156.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 156.B: Architectural Paradigm and Component Interactions",
                "Concept 156.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 1.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P156-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P156-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 156: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 1,
                "pso_weight": 2,
                "target_threshold_pct": 71
            }
        }

    @classmethod
    def get_curriculum_spec_0157(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0157",
            "unit_number": 2,
            "module_name": "EEE Degree Specifications - Module 157",
            "cognitive_target": "L2_LEVEL",
            "contact_hours": 10,
            "key_concepts": [
                "Concept 157.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 157.B: Architectural Paradigm and Component Interactions",
                "Concept 157.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 2.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P157-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P157-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 157: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 3,
                "target_threshold_pct": 72
            }
        }

    @classmethod
    def get_curriculum_spec_0158(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0158",
            "unit_number": 3,
            "module_name": "EEE Degree Specifications - Module 158",
            "cognitive_target": "L3_LEVEL",
            "contact_hours": 11,
            "key_concepts": [
                "Concept 158.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 158.B: Architectural Paradigm and Component Interactions",
                "Concept 158.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 3.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P158-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P158-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 158: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 3,
                "pso_weight": 2,
                "target_threshold_pct": 73
            }
        }

    @classmethod
    def get_curriculum_spec_0159(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0159",
            "unit_number": 4,
            "module_name": "EEE Degree Specifications - Module 159",
            "cognitive_target": "L4_LEVEL",
            "contact_hours": 12,
            "key_concepts": [
                "Concept 159.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 159.B: Architectural Paradigm and Component Interactions",
                "Concept 159.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 4.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P159-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P159-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 159: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 1,
                "pso_weight": 3,
                "target_threshold_pct": 74
            }
        }

    @classmethod
    def get_curriculum_spec_0160(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0160",
            "unit_number": 5,
            "module_name": "EEE Degree Specifications - Module 160",
            "cognitive_target": "L5_LEVEL",
            "contact_hours": 8,
            "key_concepts": [
                "Concept 160.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 160.B: Architectural Paradigm and Component Interactions",
                "Concept 160.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 5.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P160-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P160-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 160: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 2,
                "target_threshold_pct": 75
            }
        }

    @classmethod
    def get_curriculum_spec_0161(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0161",
            "unit_number": 1,
            "module_name": "EEE Degree Specifications - Module 161",
            "cognitive_target": "L6_LEVEL",
            "contact_hours": 9,
            "key_concepts": [
                "Concept 161.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 161.B: Architectural Paradigm and Component Interactions",
                "Concept 161.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 1.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P161-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P161-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 161: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 3,
                "pso_weight": 3,
                "target_threshold_pct": 76
            }
        }

    @classmethod
    def get_curriculum_spec_0162(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0162",
            "unit_number": 2,
            "module_name": "EEE Degree Specifications - Module 162",
            "cognitive_target": "L1_LEVEL",
            "contact_hours": 10,
            "key_concepts": [
                "Concept 162.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 162.B: Architectural Paradigm and Component Interactions",
                "Concept 162.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 2.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P162-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P162-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 162: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 1,
                "pso_weight": 2,
                "target_threshold_pct": 77
            }
        }

    @classmethod
    def get_curriculum_spec_0163(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0163",
            "unit_number": 3,
            "module_name": "EEE Degree Specifications - Module 163",
            "cognitive_target": "L2_LEVEL",
            "contact_hours": 11,
            "key_concepts": [
                "Concept 163.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 163.B: Architectural Paradigm and Component Interactions",
                "Concept 163.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 3.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P163-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P163-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 163: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 3,
                "target_threshold_pct": 78
            }
        }

    @classmethod
    def get_curriculum_spec_0164(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0164",
            "unit_number": 4,
            "module_name": "EEE Degree Specifications - Module 164",
            "cognitive_target": "L3_LEVEL",
            "contact_hours": 12,
            "key_concepts": [
                "Concept 164.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 164.B: Architectural Paradigm and Component Interactions",
                "Concept 164.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 4.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P164-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P164-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 164: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 3,
                "pso_weight": 2,
                "target_threshold_pct": 79
            }
        }

    @classmethod
    def get_curriculum_spec_0165(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0165",
            "unit_number": 5,
            "module_name": "EEE Degree Specifications - Module 165",
            "cognitive_target": "L4_LEVEL",
            "contact_hours": 8,
            "key_concepts": [
                "Concept 165.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 165.B: Architectural Paradigm and Component Interactions",
                "Concept 165.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 5.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P165-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P165-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 165: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 1,
                "pso_weight": 3,
                "target_threshold_pct": 65
            }
        }

    @classmethod
    def get_curriculum_spec_0166(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0166",
            "unit_number": 1,
            "module_name": "EEE Degree Specifications - Module 166",
            "cognitive_target": "L5_LEVEL",
            "contact_hours": 9,
            "key_concepts": [
                "Concept 166.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 166.B: Architectural Paradigm and Component Interactions",
                "Concept 166.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 1.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P166-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P166-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 166: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 2,
                "target_threshold_pct": 66
            }
        }

    @classmethod
    def get_curriculum_spec_0167(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0167",
            "unit_number": 2,
            "module_name": "EEE Degree Specifications - Module 167",
            "cognitive_target": "L6_LEVEL",
            "contact_hours": 10,
            "key_concepts": [
                "Concept 167.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 167.B: Architectural Paradigm and Component Interactions",
                "Concept 167.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 2.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P167-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P167-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 167: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 3,
                "pso_weight": 3,
                "target_threshold_pct": 67
            }
        }

    @classmethod
    def get_curriculum_spec_0168(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0168",
            "unit_number": 3,
            "module_name": "EEE Degree Specifications - Module 168",
            "cognitive_target": "L1_LEVEL",
            "contact_hours": 11,
            "key_concepts": [
                "Concept 168.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 168.B: Architectural Paradigm and Component Interactions",
                "Concept 168.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 3.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P168-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P168-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 168: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 1,
                "pso_weight": 2,
                "target_threshold_pct": 68
            }
        }

    @classmethod
    def get_curriculum_spec_0169(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0169",
            "unit_number": 4,
            "module_name": "EEE Degree Specifications - Module 169",
            "cognitive_target": "L2_LEVEL",
            "contact_hours": 12,
            "key_concepts": [
                "Concept 169.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 169.B: Architectural Paradigm and Component Interactions",
                "Concept 169.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 4.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P169-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P169-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 169: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 3,
                "target_threshold_pct": 69
            }
        }

    @classmethod
    def get_curriculum_spec_0170(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0170",
            "unit_number": 5,
            "module_name": "EEE Degree Specifications - Module 170",
            "cognitive_target": "L3_LEVEL",
            "contact_hours": 8,
            "key_concepts": [
                "Concept 170.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 170.B: Architectural Paradigm and Component Interactions",
                "Concept 170.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 5.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P170-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P170-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 170: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 3,
                "pso_weight": 2,
                "target_threshold_pct": 70
            }
        }

    @classmethod
    def get_curriculum_spec_0171(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0171",
            "unit_number": 1,
            "module_name": "EEE Degree Specifications - Module 171",
            "cognitive_target": "L4_LEVEL",
            "contact_hours": 9,
            "key_concepts": [
                "Concept 171.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 171.B: Architectural Paradigm and Component Interactions",
                "Concept 171.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 1.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P171-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P171-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 171: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 1,
                "pso_weight": 3,
                "target_threshold_pct": 71
            }
        }

    @classmethod
    def get_curriculum_spec_0172(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0172",
            "unit_number": 2,
            "module_name": "EEE Degree Specifications - Module 172",
            "cognitive_target": "L5_LEVEL",
            "contact_hours": 10,
            "key_concepts": [
                "Concept 172.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 172.B: Architectural Paradigm and Component Interactions",
                "Concept 172.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 2.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P172-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P172-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 172: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 2,
                "target_threshold_pct": 72
            }
        }

    @classmethod
    def get_curriculum_spec_0173(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0173",
            "unit_number": 3,
            "module_name": "EEE Degree Specifications - Module 173",
            "cognitive_target": "L6_LEVEL",
            "contact_hours": 11,
            "key_concepts": [
                "Concept 173.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 173.B: Architectural Paradigm and Component Interactions",
                "Concept 173.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 3.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P173-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P173-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 173: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 3,
                "pso_weight": 3,
                "target_threshold_pct": 73
            }
        }

    @classmethod
    def get_curriculum_spec_0174(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0174",
            "unit_number": 4,
            "module_name": "EEE Degree Specifications - Module 174",
            "cognitive_target": "L1_LEVEL",
            "contact_hours": 12,
            "key_concepts": [
                "Concept 174.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 174.B: Architectural Paradigm and Component Interactions",
                "Concept 174.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 4.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P174-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P174-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 174: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 1,
                "pso_weight": 2,
                "target_threshold_pct": 74
            }
        }

    @classmethod
    def get_curriculum_spec_0175(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0175",
            "unit_number": 5,
            "module_name": "EEE Degree Specifications - Module 175",
            "cognitive_target": "L2_LEVEL",
            "contact_hours": 8,
            "key_concepts": [
                "Concept 175.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 175.B: Architectural Paradigm and Component Interactions",
                "Concept 175.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 5.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P175-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P175-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 175: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 3,
                "target_threshold_pct": 75
            }
        }

    @classmethod
    def get_curriculum_spec_0176(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0176",
            "unit_number": 1,
            "module_name": "EEE Degree Specifications - Module 176",
            "cognitive_target": "L3_LEVEL",
            "contact_hours": 9,
            "key_concepts": [
                "Concept 176.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 176.B: Architectural Paradigm and Component Interactions",
                "Concept 176.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 1.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P176-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P176-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 176: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 3,
                "pso_weight": 2,
                "target_threshold_pct": 76
            }
        }

    @classmethod
    def get_curriculum_spec_0177(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0177",
            "unit_number": 2,
            "module_name": "EEE Degree Specifications - Module 177",
            "cognitive_target": "L4_LEVEL",
            "contact_hours": 10,
            "key_concepts": [
                "Concept 177.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 177.B: Architectural Paradigm and Component Interactions",
                "Concept 177.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 2.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P177-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P177-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 177: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 1,
                "pso_weight": 3,
                "target_threshold_pct": 77
            }
        }

    @classmethod
    def get_curriculum_spec_0178(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0178",
            "unit_number": 3,
            "module_name": "EEE Degree Specifications - Module 178",
            "cognitive_target": "L5_LEVEL",
            "contact_hours": 11,
            "key_concepts": [
                "Concept 178.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 178.B: Architectural Paradigm and Component Interactions",
                "Concept 178.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 3.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P178-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P178-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 178: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 2,
                "target_threshold_pct": 78
            }
        }

    @classmethod
    def get_curriculum_spec_0179(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0179",
            "unit_number": 4,
            "module_name": "EEE Degree Specifications - Module 179",
            "cognitive_target": "L6_LEVEL",
            "contact_hours": 12,
            "key_concepts": [
                "Concept 179.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 179.B: Architectural Paradigm and Component Interactions",
                "Concept 179.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 4.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P179-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P179-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 179: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 3,
                "pso_weight": 3,
                "target_threshold_pct": 79
            }
        }

    @classmethod
    def get_curriculum_spec_0180(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0180",
            "unit_number": 5,
            "module_name": "EEE Degree Specifications - Module 180",
            "cognitive_target": "L1_LEVEL",
            "contact_hours": 8,
            "key_concepts": [
                "Concept 180.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 180.B: Architectural Paradigm and Component Interactions",
                "Concept 180.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 5.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P180-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P180-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 180: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 1,
                "pso_weight": 2,
                "target_threshold_pct": 65
            }
        }

    @classmethod
    def get_curriculum_spec_0181(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0181",
            "unit_number": 1,
            "module_name": "EEE Degree Specifications - Module 181",
            "cognitive_target": "L2_LEVEL",
            "contact_hours": 9,
            "key_concepts": [
                "Concept 181.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 181.B: Architectural Paradigm and Component Interactions",
                "Concept 181.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 1.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P181-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P181-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 181: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 3,
                "target_threshold_pct": 66
            }
        }

    @classmethod
    def get_curriculum_spec_0182(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0182",
            "unit_number": 2,
            "module_name": "EEE Degree Specifications - Module 182",
            "cognitive_target": "L3_LEVEL",
            "contact_hours": 10,
            "key_concepts": [
                "Concept 182.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 182.B: Architectural Paradigm and Component Interactions",
                "Concept 182.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 2.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P182-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P182-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 182: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 3,
                "pso_weight": 2,
                "target_threshold_pct": 67
            }
        }

    @classmethod
    def get_curriculum_spec_0183(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0183",
            "unit_number": 3,
            "module_name": "EEE Degree Specifications - Module 183",
            "cognitive_target": "L4_LEVEL",
            "contact_hours": 11,
            "key_concepts": [
                "Concept 183.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 183.B: Architectural Paradigm and Component Interactions",
                "Concept 183.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 3.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P183-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P183-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 183: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 1,
                "pso_weight": 3,
                "target_threshold_pct": 68
            }
        }

    @classmethod
    def get_curriculum_spec_0184(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0184",
            "unit_number": 4,
            "module_name": "EEE Degree Specifications - Module 184",
            "cognitive_target": "L5_LEVEL",
            "contact_hours": 12,
            "key_concepts": [
                "Concept 184.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 184.B: Architectural Paradigm and Component Interactions",
                "Concept 184.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 4.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P184-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P184-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 184: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 2,
                "target_threshold_pct": 69
            }
        }

    @classmethod
    def get_curriculum_spec_0185(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0185",
            "unit_number": 5,
            "module_name": "EEE Degree Specifications - Module 185",
            "cognitive_target": "L6_LEVEL",
            "contact_hours": 8,
            "key_concepts": [
                "Concept 185.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 185.B: Architectural Paradigm and Component Interactions",
                "Concept 185.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 5.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P185-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P185-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 185: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 3,
                "pso_weight": 3,
                "target_threshold_pct": 70
            }
        }

    @classmethod
    def get_curriculum_spec_0186(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0186",
            "unit_number": 1,
            "module_name": "EEE Degree Specifications - Module 186",
            "cognitive_target": "L1_LEVEL",
            "contact_hours": 9,
            "key_concepts": [
                "Concept 186.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 186.B: Architectural Paradigm and Component Interactions",
                "Concept 186.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 1.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P186-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P186-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 186: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 1,
                "pso_weight": 2,
                "target_threshold_pct": 71
            }
        }

    @classmethod
    def get_curriculum_spec_0187(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0187",
            "unit_number": 2,
            "module_name": "EEE Degree Specifications - Module 187",
            "cognitive_target": "L2_LEVEL",
            "contact_hours": 10,
            "key_concepts": [
                "Concept 187.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 187.B: Architectural Paradigm and Component Interactions",
                "Concept 187.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 2.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P187-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P187-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 187: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 3,
                "target_threshold_pct": 72
            }
        }

    @classmethod
    def get_curriculum_spec_0188(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0188",
            "unit_number": 3,
            "module_name": "EEE Degree Specifications - Module 188",
            "cognitive_target": "L3_LEVEL",
            "contact_hours": 11,
            "key_concepts": [
                "Concept 188.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 188.B: Architectural Paradigm and Component Interactions",
                "Concept 188.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 3.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P188-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P188-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 188: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 3,
                "pso_weight": 2,
                "target_threshold_pct": 73
            }
        }

    @classmethod
    def get_curriculum_spec_0189(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0189",
            "unit_number": 4,
            "module_name": "EEE Degree Specifications - Module 189",
            "cognitive_target": "L4_LEVEL",
            "contact_hours": 12,
            "key_concepts": [
                "Concept 189.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 189.B: Architectural Paradigm and Component Interactions",
                "Concept 189.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 4.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P189-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P189-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 189: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 1,
                "pso_weight": 3,
                "target_threshold_pct": 74
            }
        }

    @classmethod
    def get_curriculum_spec_0190(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0190",
            "unit_number": 5,
            "module_name": "EEE Degree Specifications - Module 190",
            "cognitive_target": "L5_LEVEL",
            "contact_hours": 8,
            "key_concepts": [
                "Concept 190.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 190.B: Architectural Paradigm and Component Interactions",
                "Concept 190.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 5.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P190-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P190-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 190: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 2,
                "target_threshold_pct": 75
            }
        }

    @classmethod
    def get_curriculum_spec_0191(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0191",
            "unit_number": 1,
            "module_name": "EEE Degree Specifications - Module 191",
            "cognitive_target": "L6_LEVEL",
            "contact_hours": 9,
            "key_concepts": [
                "Concept 191.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 191.B: Architectural Paradigm and Component Interactions",
                "Concept 191.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 1.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P191-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P191-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 191: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 3,
                "pso_weight": 3,
                "target_threshold_pct": 76
            }
        }

    @classmethod
    def get_curriculum_spec_0192(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0192",
            "unit_number": 2,
            "module_name": "EEE Degree Specifications - Module 192",
            "cognitive_target": "L1_LEVEL",
            "contact_hours": 10,
            "key_concepts": [
                "Concept 192.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 192.B: Architectural Paradigm and Component Interactions",
                "Concept 192.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 2.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P192-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P192-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 192: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 1,
                "pso_weight": 2,
                "target_threshold_pct": 77
            }
        }

    @classmethod
    def get_curriculum_spec_0193(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0193",
            "unit_number": 3,
            "module_name": "EEE Degree Specifications - Module 193",
            "cognitive_target": "L2_LEVEL",
            "contact_hours": 11,
            "key_concepts": [
                "Concept 193.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 193.B: Architectural Paradigm and Component Interactions",
                "Concept 193.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 3.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P193-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P193-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 193: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 3,
                "target_threshold_pct": 78
            }
        }

    @classmethod
    def get_curriculum_spec_0194(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0194",
            "unit_number": 4,
            "module_name": "EEE Degree Specifications - Module 194",
            "cognitive_target": "L3_LEVEL",
            "contact_hours": 12,
            "key_concepts": [
                "Concept 194.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 194.B: Architectural Paradigm and Component Interactions",
                "Concept 194.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 4.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P194-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P194-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 194: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 3,
                "pso_weight": 2,
                "target_threshold_pct": 79
            }
        }

    @classmethod
    def get_curriculum_spec_0195(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0195",
            "unit_number": 5,
            "module_name": "EEE Degree Specifications - Module 195",
            "cognitive_target": "L4_LEVEL",
            "contact_hours": 8,
            "key_concepts": [
                "Concept 195.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 195.B: Architectural Paradigm and Component Interactions",
                "Concept 195.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 5.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P195-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P195-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 195: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 1,
                "pso_weight": 3,
                "target_threshold_pct": 65
            }
        }

    @classmethod
    def get_curriculum_spec_0196(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0196",
            "unit_number": 1,
            "module_name": "EEE Degree Specifications - Module 196",
            "cognitive_target": "L5_LEVEL",
            "contact_hours": 9,
            "key_concepts": [
                "Concept 196.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 196.B: Architectural Paradigm and Component Interactions",
                "Concept 196.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 1.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P196-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P196-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 196: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 2,
                "target_threshold_pct": 66
            }
        }

    @classmethod
    def get_curriculum_spec_0197(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0197",
            "unit_number": 2,
            "module_name": "EEE Degree Specifications - Module 197",
            "cognitive_target": "L6_LEVEL",
            "contact_hours": 10,
            "key_concepts": [
                "Concept 197.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 197.B: Architectural Paradigm and Component Interactions",
                "Concept 197.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 2.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P197-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P197-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 197: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 3,
                "pso_weight": 3,
                "target_threshold_pct": 67
            }
        }

    @classmethod
    def get_curriculum_spec_0198(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0198",
            "unit_number": 3,
            "module_name": "EEE Degree Specifications - Module 198",
            "cognitive_target": "L1_LEVEL",
            "contact_hours": 11,
            "key_concepts": [
                "Concept 198.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 198.B: Architectural Paradigm and Component Interactions",
                "Concept 198.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 3.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P198-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P198-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 198: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 1,
                "pso_weight": 2,
                "target_threshold_pct": 68
            }
        }

    @classmethod
    def get_curriculum_spec_0199(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0199",
            "unit_number": 4,
            "module_name": "EEE Degree Specifications - Module 199",
            "cognitive_target": "L2_LEVEL",
            "contact_hours": 12,
            "key_concepts": [
                "Concept 199.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 199.B: Architectural Paradigm and Component Interactions",
                "Concept 199.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 4.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P199-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P199-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 199: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 3,
                "target_threshold_pct": 69
            }
        }

    @classmethod
    def get_curriculum_spec_0200(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0200",
            "unit_number": 5,
            "module_name": "EEE Degree Specifications - Module 200",
            "cognitive_target": "L3_LEVEL",
            "contact_hours": 8,
            "key_concepts": [
                "Concept 200.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 200.B: Architectural Paradigm and Component Interactions",
                "Concept 200.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 5.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P200-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P200-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 200: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 3,
                "pso_weight": 2,
                "target_threshold_pct": 70
            }
        }

    @classmethod
    def get_curriculum_spec_0201(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0201",
            "unit_number": 1,
            "module_name": "EEE Degree Specifications - Module 201",
            "cognitive_target": "L4_LEVEL",
            "contact_hours": 9,
            "key_concepts": [
                "Concept 201.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 201.B: Architectural Paradigm and Component Interactions",
                "Concept 201.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 1.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P201-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P201-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 201: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 1,
                "pso_weight": 3,
                "target_threshold_pct": 71
            }
        }

    @classmethod
    def get_curriculum_spec_0202(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0202",
            "unit_number": 2,
            "module_name": "EEE Degree Specifications - Module 202",
            "cognitive_target": "L5_LEVEL",
            "contact_hours": 10,
            "key_concepts": [
                "Concept 202.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 202.B: Architectural Paradigm and Component Interactions",
                "Concept 202.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 2.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P202-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P202-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 202: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 2,
                "target_threshold_pct": 72
            }
        }

    @classmethod
    def get_curriculum_spec_0203(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0203",
            "unit_number": 3,
            "module_name": "EEE Degree Specifications - Module 203",
            "cognitive_target": "L6_LEVEL",
            "contact_hours": 11,
            "key_concepts": [
                "Concept 203.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 203.B: Architectural Paradigm and Component Interactions",
                "Concept 203.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 3.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P203-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P203-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 203: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 3,
                "pso_weight": 3,
                "target_threshold_pct": 73
            }
        }

    @classmethod
    def get_curriculum_spec_0204(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0204",
            "unit_number": 4,
            "module_name": "EEE Degree Specifications - Module 204",
            "cognitive_target": "L1_LEVEL",
            "contact_hours": 12,
            "key_concepts": [
                "Concept 204.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 204.B: Architectural Paradigm and Component Interactions",
                "Concept 204.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 4.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P204-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P204-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 204: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 1,
                "pso_weight": 2,
                "target_threshold_pct": 74
            }
        }

    @classmethod
    def get_curriculum_spec_0205(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0205",
            "unit_number": 5,
            "module_name": "EEE Degree Specifications - Module 205",
            "cognitive_target": "L2_LEVEL",
            "contact_hours": 8,
            "key_concepts": [
                "Concept 205.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 205.B: Architectural Paradigm and Component Interactions",
                "Concept 205.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 5.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P205-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P205-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 205: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 3,
                "target_threshold_pct": 75
            }
        }

    @classmethod
    def get_curriculum_spec_0206(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0206",
            "unit_number": 1,
            "module_name": "EEE Degree Specifications - Module 206",
            "cognitive_target": "L3_LEVEL",
            "contact_hours": 9,
            "key_concepts": [
                "Concept 206.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 206.B: Architectural Paradigm and Component Interactions",
                "Concept 206.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 1.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P206-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P206-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 206: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 3,
                "pso_weight": 2,
                "target_threshold_pct": 76
            }
        }

    @classmethod
    def get_curriculum_spec_0207(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0207",
            "unit_number": 2,
            "module_name": "EEE Degree Specifications - Module 207",
            "cognitive_target": "L4_LEVEL",
            "contact_hours": 10,
            "key_concepts": [
                "Concept 207.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 207.B: Architectural Paradigm and Component Interactions",
                "Concept 207.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 2.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P207-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P207-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 207: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 1,
                "pso_weight": 3,
                "target_threshold_pct": 77
            }
        }

    @classmethod
    def get_curriculum_spec_0208(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0208",
            "unit_number": 3,
            "module_name": "EEE Degree Specifications - Module 208",
            "cognitive_target": "L5_LEVEL",
            "contact_hours": 11,
            "key_concepts": [
                "Concept 208.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 208.B: Architectural Paradigm and Component Interactions",
                "Concept 208.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 3.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P208-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P208-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 208: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 2,
                "target_threshold_pct": 78
            }
        }

    @classmethod
    def get_curriculum_spec_0209(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0209",
            "unit_number": 4,
            "module_name": "EEE Degree Specifications - Module 209",
            "cognitive_target": "L6_LEVEL",
            "contact_hours": 12,
            "key_concepts": [
                "Concept 209.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 209.B: Architectural Paradigm and Component Interactions",
                "Concept 209.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 4.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P209-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P209-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 209: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 3,
                "pso_weight": 3,
                "target_threshold_pct": 79
            }
        }

    @classmethod
    def get_curriculum_spec_0210(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0210",
            "unit_number": 5,
            "module_name": "EEE Degree Specifications - Module 210",
            "cognitive_target": "L1_LEVEL",
            "contact_hours": 8,
            "key_concepts": [
                "Concept 210.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 210.B: Architectural Paradigm and Component Interactions",
                "Concept 210.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 5.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P210-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P210-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 210: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 1,
                "pso_weight": 2,
                "target_threshold_pct": 65
            }
        }

    @classmethod
    def get_curriculum_spec_0211(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0211",
            "unit_number": 1,
            "module_name": "EEE Degree Specifications - Module 211",
            "cognitive_target": "L2_LEVEL",
            "contact_hours": 9,
            "key_concepts": [
                "Concept 211.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 211.B: Architectural Paradigm and Component Interactions",
                "Concept 211.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 1.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P211-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P211-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 211: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 3,
                "target_threshold_pct": 66
            }
        }

    @classmethod
    def get_curriculum_spec_0212(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0212",
            "unit_number": 2,
            "module_name": "EEE Degree Specifications - Module 212",
            "cognitive_target": "L3_LEVEL",
            "contact_hours": 10,
            "key_concepts": [
                "Concept 212.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 212.B: Architectural Paradigm and Component Interactions",
                "Concept 212.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 2.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P212-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P212-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 212: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 3,
                "pso_weight": 2,
                "target_threshold_pct": 67
            }
        }

    @classmethod
    def get_curriculum_spec_0213(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0213",
            "unit_number": 3,
            "module_name": "EEE Degree Specifications - Module 213",
            "cognitive_target": "L4_LEVEL",
            "contact_hours": 11,
            "key_concepts": [
                "Concept 213.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 213.B: Architectural Paradigm and Component Interactions",
                "Concept 213.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 3.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P213-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P213-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 213: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 1,
                "pso_weight": 3,
                "target_threshold_pct": 68
            }
        }

    @classmethod
    def get_curriculum_spec_0214(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0214",
            "unit_number": 4,
            "module_name": "EEE Degree Specifications - Module 214",
            "cognitive_target": "L5_LEVEL",
            "contact_hours": 12,
            "key_concepts": [
                "Concept 214.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 214.B: Architectural Paradigm and Component Interactions",
                "Concept 214.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 4.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P214-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P214-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 214: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 2,
                "target_threshold_pct": 69
            }
        }

    @classmethod
    def get_curriculum_spec_0215(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0215",
            "unit_number": 5,
            "module_name": "EEE Degree Specifications - Module 215",
            "cognitive_target": "L6_LEVEL",
            "contact_hours": 8,
            "key_concepts": [
                "Concept 215.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 215.B: Architectural Paradigm and Component Interactions",
                "Concept 215.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 5.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P215-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P215-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 215: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 3,
                "pso_weight": 3,
                "target_threshold_pct": 70
            }
        }

    @classmethod
    def get_curriculum_spec_0216(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0216",
            "unit_number": 1,
            "module_name": "EEE Degree Specifications - Module 216",
            "cognitive_target": "L1_LEVEL",
            "contact_hours": 9,
            "key_concepts": [
                "Concept 216.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 216.B: Architectural Paradigm and Component Interactions",
                "Concept 216.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 1.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P216-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P216-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 216: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 1,
                "pso_weight": 2,
                "target_threshold_pct": 71
            }
        }

    @classmethod
    def get_curriculum_spec_0217(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0217",
            "unit_number": 2,
            "module_name": "EEE Degree Specifications - Module 217",
            "cognitive_target": "L2_LEVEL",
            "contact_hours": 10,
            "key_concepts": [
                "Concept 217.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 217.B: Architectural Paradigm and Component Interactions",
                "Concept 217.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 2.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P217-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P217-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 217: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 3,
                "target_threshold_pct": 72
            }
        }

    @classmethod
    def get_curriculum_spec_0218(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0218",
            "unit_number": 3,
            "module_name": "EEE Degree Specifications - Module 218",
            "cognitive_target": "L3_LEVEL",
            "contact_hours": 11,
            "key_concepts": [
                "Concept 218.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 218.B: Architectural Paradigm and Component Interactions",
                "Concept 218.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 3.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P218-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P218-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 218: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 3,
                "pso_weight": 2,
                "target_threshold_pct": 73
            }
        }

    @classmethod
    def get_curriculum_spec_0219(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0219",
            "unit_number": 4,
            "module_name": "EEE Degree Specifications - Module 219",
            "cognitive_target": "L4_LEVEL",
            "contact_hours": 12,
            "key_concepts": [
                "Concept 219.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 219.B: Architectural Paradigm and Component Interactions",
                "Concept 219.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 4.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P219-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P219-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 219: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 1,
                "pso_weight": 3,
                "target_threshold_pct": 74
            }
        }

    @classmethod
    def get_curriculum_spec_0220(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0220",
            "unit_number": 5,
            "module_name": "EEE Degree Specifications - Module 220",
            "cognitive_target": "L5_LEVEL",
            "contact_hours": 8,
            "key_concepts": [
                "Concept 220.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 220.B: Architectural Paradigm and Component Interactions",
                "Concept 220.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 5.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P220-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P220-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 220: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 2,
                "target_threshold_pct": 75
            }
        }

    @classmethod
    def get_curriculum_spec_0221(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0221",
            "unit_number": 1,
            "module_name": "EEE Degree Specifications - Module 221",
            "cognitive_target": "L6_LEVEL",
            "contact_hours": 9,
            "key_concepts": [
                "Concept 221.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 221.B: Architectural Paradigm and Component Interactions",
                "Concept 221.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 1.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P221-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P221-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 221: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 3,
                "pso_weight": 3,
                "target_threshold_pct": 76
            }
        }

    @classmethod
    def get_curriculum_spec_0222(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0222",
            "unit_number": 2,
            "module_name": "EEE Degree Specifications - Module 222",
            "cognitive_target": "L1_LEVEL",
            "contact_hours": 10,
            "key_concepts": [
                "Concept 222.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 222.B: Architectural Paradigm and Component Interactions",
                "Concept 222.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 2.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P222-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P222-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 222: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 1,
                "pso_weight": 2,
                "target_threshold_pct": 77
            }
        }

    @classmethod
    def get_curriculum_spec_0223(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0223",
            "unit_number": 3,
            "module_name": "EEE Degree Specifications - Module 223",
            "cognitive_target": "L2_LEVEL",
            "contact_hours": 11,
            "key_concepts": [
                "Concept 223.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 223.B: Architectural Paradigm and Component Interactions",
                "Concept 223.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 3.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P223-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P223-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 223: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 3,
                "target_threshold_pct": 78
            }
        }

    @classmethod
    def get_curriculum_spec_0224(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0224",
            "unit_number": 4,
            "module_name": "EEE Degree Specifications - Module 224",
            "cognitive_target": "L3_LEVEL",
            "contact_hours": 12,
            "key_concepts": [
                "Concept 224.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 224.B: Architectural Paradigm and Component Interactions",
                "Concept 224.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 4.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P224-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P224-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 224: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 3,
                "pso_weight": 2,
                "target_threshold_pct": 79
            }
        }

    @classmethod
    def get_curriculum_spec_0225(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0225",
            "unit_number": 5,
            "module_name": "EEE Degree Specifications - Module 225",
            "cognitive_target": "L4_LEVEL",
            "contact_hours": 8,
            "key_concepts": [
                "Concept 225.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 225.B: Architectural Paradigm and Component Interactions",
                "Concept 225.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 5.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P225-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P225-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 225: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 1,
                "pso_weight": 3,
                "target_threshold_pct": 65
            }
        }

    @classmethod
    def get_curriculum_spec_0226(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0226",
            "unit_number": 1,
            "module_name": "EEE Degree Specifications - Module 226",
            "cognitive_target": "L5_LEVEL",
            "contact_hours": 9,
            "key_concepts": [
                "Concept 226.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 226.B: Architectural Paradigm and Component Interactions",
                "Concept 226.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 1.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P226-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P226-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 226: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 2,
                "target_threshold_pct": 66
            }
        }

    @classmethod
    def get_curriculum_spec_0227(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0227",
            "unit_number": 2,
            "module_name": "EEE Degree Specifications - Module 227",
            "cognitive_target": "L6_LEVEL",
            "contact_hours": 10,
            "key_concepts": [
                "Concept 227.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 227.B: Architectural Paradigm and Component Interactions",
                "Concept 227.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 2.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P227-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P227-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 227: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 3,
                "pso_weight": 3,
                "target_threshold_pct": 67
            }
        }

    @classmethod
    def get_curriculum_spec_0228(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0228",
            "unit_number": 3,
            "module_name": "EEE Degree Specifications - Module 228",
            "cognitive_target": "L1_LEVEL",
            "contact_hours": 11,
            "key_concepts": [
                "Concept 228.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 228.B: Architectural Paradigm and Component Interactions",
                "Concept 228.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 3.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P228-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P228-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 228: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 1,
                "pso_weight": 2,
                "target_threshold_pct": 68
            }
        }

    @classmethod
    def get_curriculum_spec_0229(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0229",
            "unit_number": 4,
            "module_name": "EEE Degree Specifications - Module 229",
            "cognitive_target": "L2_LEVEL",
            "contact_hours": 12,
            "key_concepts": [
                "Concept 229.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 229.B: Architectural Paradigm and Component Interactions",
                "Concept 229.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 4.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P229-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P229-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 229: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 3,
                "target_threshold_pct": 69
            }
        }

    @classmethod
    def get_curriculum_spec_0230(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0230",
            "unit_number": 5,
            "module_name": "EEE Degree Specifications - Module 230",
            "cognitive_target": "L3_LEVEL",
            "contact_hours": 8,
            "key_concepts": [
                "Concept 230.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 230.B: Architectural Paradigm and Component Interactions",
                "Concept 230.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 5.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P230-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P230-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 230: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 3,
                "pso_weight": 2,
                "target_threshold_pct": 70
            }
        }

    @classmethod
    def get_curriculum_spec_0231(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0231",
            "unit_number": 1,
            "module_name": "EEE Degree Specifications - Module 231",
            "cognitive_target": "L4_LEVEL",
            "contact_hours": 9,
            "key_concepts": [
                "Concept 231.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 231.B: Architectural Paradigm and Component Interactions",
                "Concept 231.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 1.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P231-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P231-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 231: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 1,
                "pso_weight": 3,
                "target_threshold_pct": 71
            }
        }

    @classmethod
    def get_curriculum_spec_0232(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0232",
            "unit_number": 2,
            "module_name": "EEE Degree Specifications - Module 232",
            "cognitive_target": "L5_LEVEL",
            "contact_hours": 10,
            "key_concepts": [
                "Concept 232.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 232.B: Architectural Paradigm and Component Interactions",
                "Concept 232.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 2.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P232-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P232-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 232: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 2,
                "target_threshold_pct": 72
            }
        }

    @classmethod
    def get_curriculum_spec_0233(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0233",
            "unit_number": 3,
            "module_name": "EEE Degree Specifications - Module 233",
            "cognitive_target": "L6_LEVEL",
            "contact_hours": 11,
            "key_concepts": [
                "Concept 233.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 233.B: Architectural Paradigm and Component Interactions",
                "Concept 233.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 3.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P233-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P233-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 233: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 3,
                "pso_weight": 3,
                "target_threshold_pct": 73
            }
        }

    @classmethod
    def get_curriculum_spec_0234(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0234",
            "unit_number": 4,
            "module_name": "EEE Degree Specifications - Module 234",
            "cognitive_target": "L1_LEVEL",
            "contact_hours": 12,
            "key_concepts": [
                "Concept 234.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 234.B: Architectural Paradigm and Component Interactions",
                "Concept 234.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 4.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P234-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P234-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 234: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 1,
                "pso_weight": 2,
                "target_threshold_pct": 74
            }
        }

    @classmethod
    def get_curriculum_spec_0235(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0235",
            "unit_number": 5,
            "module_name": "EEE Degree Specifications - Module 235",
            "cognitive_target": "L2_LEVEL",
            "contact_hours": 8,
            "key_concepts": [
                "Concept 235.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 235.B: Architectural Paradigm and Component Interactions",
                "Concept 235.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 5.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P235-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P235-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 235: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 3,
                "target_threshold_pct": 75
            }
        }

    @classmethod
    def get_curriculum_spec_0236(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0236",
            "unit_number": 1,
            "module_name": "EEE Degree Specifications - Module 236",
            "cognitive_target": "L3_LEVEL",
            "contact_hours": 9,
            "key_concepts": [
                "Concept 236.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 236.B: Architectural Paradigm and Component Interactions",
                "Concept 236.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 1.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P236-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P236-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 236: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 3,
                "pso_weight": 2,
                "target_threshold_pct": 76
            }
        }

    @classmethod
    def get_curriculum_spec_0237(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0237",
            "unit_number": 2,
            "module_name": "EEE Degree Specifications - Module 237",
            "cognitive_target": "L4_LEVEL",
            "contact_hours": 10,
            "key_concepts": [
                "Concept 237.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 237.B: Architectural Paradigm and Component Interactions",
                "Concept 237.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 2.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P237-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P237-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 237: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 1,
                "pso_weight": 3,
                "target_threshold_pct": 77
            }
        }

    @classmethod
    def get_curriculum_spec_0238(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0238",
            "unit_number": 3,
            "module_name": "EEE Degree Specifications - Module 238",
            "cognitive_target": "L5_LEVEL",
            "contact_hours": 11,
            "key_concepts": [
                "Concept 238.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 238.B: Architectural Paradigm and Component Interactions",
                "Concept 238.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 3.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P238-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P238-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 238: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 2,
                "target_threshold_pct": 78
            }
        }

    @classmethod
    def get_curriculum_spec_0239(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0239",
            "unit_number": 4,
            "module_name": "EEE Degree Specifications - Module 239",
            "cognitive_target": "L6_LEVEL",
            "contact_hours": 12,
            "key_concepts": [
                "Concept 239.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 239.B: Architectural Paradigm and Component Interactions",
                "Concept 239.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 4.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P239-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P239-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 239: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 3,
                "pso_weight": 3,
                "target_threshold_pct": 79
            }
        }

    @classmethod
    def get_curriculum_spec_0240(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0240",
            "unit_number": 5,
            "module_name": "EEE Degree Specifications - Module 240",
            "cognitive_target": "L1_LEVEL",
            "contact_hours": 8,
            "key_concepts": [
                "Concept 240.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 240.B: Architectural Paradigm and Component Interactions",
                "Concept 240.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 5.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P240-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P240-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 240: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 1,
                "pso_weight": 2,
                "target_threshold_pct": 65
            }
        }

    @classmethod
    def get_curriculum_spec_0241(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0241",
            "unit_number": 1,
            "module_name": "EEE Degree Specifications - Module 241",
            "cognitive_target": "L2_LEVEL",
            "contact_hours": 9,
            "key_concepts": [
                "Concept 241.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 241.B: Architectural Paradigm and Component Interactions",
                "Concept 241.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 1.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P241-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P241-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 241: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 3,
                "target_threshold_pct": 66
            }
        }

    @classmethod
    def get_curriculum_spec_0242(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0242",
            "unit_number": 2,
            "module_name": "EEE Degree Specifications - Module 242",
            "cognitive_target": "L3_LEVEL",
            "contact_hours": 10,
            "key_concepts": [
                "Concept 242.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 242.B: Architectural Paradigm and Component Interactions",
                "Concept 242.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 2.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P242-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P242-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 242: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 3,
                "pso_weight": 2,
                "target_threshold_pct": 67
            }
        }

    @classmethod
    def get_curriculum_spec_0243(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0243",
            "unit_number": 3,
            "module_name": "EEE Degree Specifications - Module 243",
            "cognitive_target": "L4_LEVEL",
            "contact_hours": 11,
            "key_concepts": [
                "Concept 243.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 243.B: Architectural Paradigm and Component Interactions",
                "Concept 243.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 3.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P243-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P243-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 243: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 1,
                "pso_weight": 3,
                "target_threshold_pct": 68
            }
        }

    @classmethod
    def get_curriculum_spec_0244(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0244",
            "unit_number": 4,
            "module_name": "EEE Degree Specifications - Module 244",
            "cognitive_target": "L5_LEVEL",
            "contact_hours": 12,
            "key_concepts": [
                "Concept 244.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 244.B: Architectural Paradigm and Component Interactions",
                "Concept 244.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 4.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P244-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P244-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 244: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 2,
                "target_threshold_pct": 69
            }
        }

    @classmethod
    def get_curriculum_spec_0245(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0245",
            "unit_number": 5,
            "module_name": "EEE Degree Specifications - Module 245",
            "cognitive_target": "L6_LEVEL",
            "contact_hours": 8,
            "key_concepts": [
                "Concept 245.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 245.B: Architectural Paradigm and Component Interactions",
                "Concept 245.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 5.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P245-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P245-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 245: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 3,
                "pso_weight": 3,
                "target_threshold_pct": 70
            }
        }

    @classmethod
    def get_curriculum_spec_0246(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0246",
            "unit_number": 1,
            "module_name": "EEE Degree Specifications - Module 246",
            "cognitive_target": "L1_LEVEL",
            "contact_hours": 9,
            "key_concepts": [
                "Concept 246.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 246.B: Architectural Paradigm and Component Interactions",
                "Concept 246.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 1.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P246-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P246-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 246: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 1,
                "pso_weight": 2,
                "target_threshold_pct": 71
            }
        }

    @classmethod
    def get_curriculum_spec_0247(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0247",
            "unit_number": 2,
            "module_name": "EEE Degree Specifications - Module 247",
            "cognitive_target": "L2_LEVEL",
            "contact_hours": 10,
            "key_concepts": [
                "Concept 247.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 247.B: Architectural Paradigm and Component Interactions",
                "Concept 247.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 2.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P247-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P247-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 247: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 3,
                "target_threshold_pct": 72
            }
        }

    @classmethod
    def get_curriculum_spec_0248(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0248",
            "unit_number": 3,
            "module_name": "EEE Degree Specifications - Module 248",
            "cognitive_target": "L3_LEVEL",
            "contact_hours": 11,
            "key_concepts": [
                "Concept 248.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 248.B: Architectural Paradigm and Component Interactions",
                "Concept 248.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 3.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P248-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P248-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 248: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 3,
                "pso_weight": 2,
                "target_threshold_pct": 73
            }
        }

    @classmethod
    def get_curriculum_spec_0249(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0249",
            "unit_number": 4,
            "module_name": "EEE Degree Specifications - Module 249",
            "cognitive_target": "L4_LEVEL",
            "contact_hours": 12,
            "key_concepts": [
                "Concept 249.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 249.B: Architectural Paradigm and Component Interactions",
                "Concept 249.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 4.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P249-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P249-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 249: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 1,
                "pso_weight": 3,
                "target_threshold_pct": 74
            }
        }

    @classmethod
    def get_curriculum_spec_0250(cls) -> Dict[str, Any]:
        return {
            "spec_id": "EEE-EE_CURR-S0250",
            "unit_number": 5,
            "module_name": "EEE Degree Specifications - Module 250",
            "cognitive_target": "L5_LEVEL",
            "contact_hours": 8,
            "key_concepts": [
                "Concept 250.A: Theoretical Foundations and Mathematical Formulation",
                "Concept 250.B: Architectural Paradigm and Component Interactions",
                "Concept 250.C: Industry Benchmarks and Practical Implementation Patterns"
            ],
            "syllabus_breakdown": {
                "topic_overview": "Deep dive into EEE Degree Specifications domain principles for unit 5.",
                "learning_outcomes": [
                    "Analyze structural properties of system components in Electrical & Electronics.",
                    "Formulate computational workflows adhering to NEC Autonomous standards.",
                    "Evaluate performance trade-offs under real-world engineering constraints."
                ],
                "sample_problems": [
                    {"problem_id": "P250-1", "description": "Calculate optimal parameter distribution under load.", "complexity": "Medium"},
                    {"problem_id": "P250-2", "description": "Design modular verification routine for edge cases.", "complexity": "Hard"}
                ],
                "laboratory_tie_ins": [
                    "Experiment 250: Hands-on verification in NEC departmental lab.",
                    "Viva Voce Focus: Critical analysis of boundary criteria."
                ]
            },
            "accreditation_attainment": {
                "po_direct_weight": 2,
                "pso_weight": 2,
                "target_threshold_pct": 75
            }
        }

    @classmethod
    def get_all_specifications(cls) -> List[Dict[str, Any]]:
        return [getattr(cls, f"get_curriculum_spec_{i:04d}")() for i in range(1, 251)]

    @classmethod
    def filter_by_unit(cls, unit_number: int) -> List[Dict[str, Any]]:
        return [spec for spec in cls.get_all_specifications() if spec["unit_number"] == unit_number]

    @classmethod
    def compute_total_hours(cls) -> int:
        return sum(spec["contact_hours"] for spec in cls.get_all_specifications())
