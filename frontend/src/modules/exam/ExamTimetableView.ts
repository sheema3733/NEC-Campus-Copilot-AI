/**
 * Narasaraopeta Engineering College (Autonomous) — Frontend Enterprise Module
 * Module: Examination Timetable and Rules Viewer (EXAMTIMETABLE)
 */

export interface AcademicEntityItem {
  id: string;
  code: string;
  title: string;
  category: string;
  department: string;
  semester: number;
  credits: number;
  status: "ACTIVE" | "PENDING" | "ARCHIVED" | "UNDER_REVIEW";
  metrics: {
    targetScore: number;
    completionRate: number;
    complianceAuditPassed: boolean;
  };
  tags: string[];
}

export const EXAMTIMETABLE_REGISTRY: AcademicEntityItem[] = [
  {
    id: "examtimetable-0001",
    code: "NEC-EXAMTIMETABLE-0001",
    title: "Examination Timetable and Rules Viewer - Item 1",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 2,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 71,
      completionRate: 86,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_1"]
  },
  {
    id: "examtimetable-0002",
    code: "NEC-EXAMTIMETABLE-0002",
    title: "Examination Timetable and Rules Viewer - Item 2",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 3,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 72,
      completionRate: 87,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_2"]
  },
  {
    id: "examtimetable-0003",
    code: "NEC-EXAMTIMETABLE-0003",
    title: "Examination Timetable and Rules Viewer - Item 3",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 4,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 73,
      completionRate: 88,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_3"]
  },
  {
    id: "examtimetable-0004",
    code: "NEC-EXAMTIMETABLE-0004",
    title: "Examination Timetable and Rules Viewer - Item 4",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 5,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 74,
      completionRate: 89,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_4"]
  },
  {
    id: "examtimetable-0005",
    code: "NEC-EXAMTIMETABLE-0005",
    title: "Examination Timetable and Rules Viewer - Item 5",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 6,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 75,
      completionRate: 90,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_5"]
  },
  {
    id: "examtimetable-0006",
    code: "NEC-EXAMTIMETABLE-0006",
    title: "Examination Timetable and Rules Viewer - Item 6",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 7,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 76,
      completionRate: 91,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_6"]
  },
  {
    id: "examtimetable-0007",
    code: "NEC-EXAMTIMETABLE-0007",
    title: "Examination Timetable and Rules Viewer - Item 7",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 8,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 77,
      completionRate: 92,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_7"]
  },
  {
    id: "examtimetable-0008",
    code: "NEC-EXAMTIMETABLE-0008",
    title: "Examination Timetable and Rules Viewer - Item 8",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 1,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 78,
      completionRate: 93,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_8"]
  },
  {
    id: "examtimetable-0009",
    code: "NEC-EXAMTIMETABLE-0009",
    title: "Examination Timetable and Rules Viewer - Item 9",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 2,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 79,
      completionRate: 94,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_9"]
  },
  {
    id: "examtimetable-0010",
    code: "NEC-EXAMTIMETABLE-0010",
    title: "Examination Timetable and Rules Viewer - Item 10",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 3,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 80,
      completionRate: 95,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_10"]
  },
  {
    id: "examtimetable-0011",
    code: "NEC-EXAMTIMETABLE-0011",
    title: "Examination Timetable and Rules Viewer - Item 11",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 4,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 81,
      completionRate: 96,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_11"]
  },
  {
    id: "examtimetable-0012",
    code: "NEC-EXAMTIMETABLE-0012",
    title: "Examination Timetable and Rules Viewer - Item 12",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 5,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 82,
      completionRate: 97,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_12"]
  },
  {
    id: "examtimetable-0013",
    code: "NEC-EXAMTIMETABLE-0013",
    title: "Examination Timetable and Rules Viewer - Item 13",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 6,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 83,
      completionRate: 98,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_13"]
  },
  {
    id: "examtimetable-0014",
    code: "NEC-EXAMTIMETABLE-0014",
    title: "Examination Timetable and Rules Viewer - Item 14",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 7,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 84,
      completionRate: 99,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_14"]
  },
  {
    id: "examtimetable-0015",
    code: "NEC-EXAMTIMETABLE-0015",
    title: "Examination Timetable and Rules Viewer - Item 15",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 8,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 85,
      completionRate: 85,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_15"]
  },
  {
    id: "examtimetable-0016",
    code: "NEC-EXAMTIMETABLE-0016",
    title: "Examination Timetable and Rules Viewer - Item 16",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 1,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 86,
      completionRate: 86,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_16"]
  },
  {
    id: "examtimetable-0017",
    code: "NEC-EXAMTIMETABLE-0017",
    title: "Examination Timetable and Rules Viewer - Item 17",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 2,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 87,
      completionRate: 87,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_17"]
  },
  {
    id: "examtimetable-0018",
    code: "NEC-EXAMTIMETABLE-0018",
    title: "Examination Timetable and Rules Viewer - Item 18",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 3,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 88,
      completionRate: 88,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_18"]
  },
  {
    id: "examtimetable-0019",
    code: "NEC-EXAMTIMETABLE-0019",
    title: "Examination Timetable and Rules Viewer - Item 19",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 4,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 89,
      completionRate: 89,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_19"]
  },
  {
    id: "examtimetable-0020",
    code: "NEC-EXAMTIMETABLE-0020",
    title: "Examination Timetable and Rules Viewer - Item 20",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 5,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 90,
      completionRate: 90,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_20"]
  },
  {
    id: "examtimetable-0021",
    code: "NEC-EXAMTIMETABLE-0021",
    title: "Examination Timetable and Rules Viewer - Item 21",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 6,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 91,
      completionRate: 91,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_21"]
  },
  {
    id: "examtimetable-0022",
    code: "NEC-EXAMTIMETABLE-0022",
    title: "Examination Timetable and Rules Viewer - Item 22",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 7,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 92,
      completionRate: 92,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_22"]
  },
  {
    id: "examtimetable-0023",
    code: "NEC-EXAMTIMETABLE-0023",
    title: "Examination Timetable and Rules Viewer - Item 23",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 8,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 93,
      completionRate: 93,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_23"]
  },
  {
    id: "examtimetable-0024",
    code: "NEC-EXAMTIMETABLE-0024",
    title: "Examination Timetable and Rules Viewer - Item 24",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 1,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 94,
      completionRate: 94,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_24"]
  },
  {
    id: "examtimetable-0025",
    code: "NEC-EXAMTIMETABLE-0025",
    title: "Examination Timetable and Rules Viewer - Item 25",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 2,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 70,
      completionRate: 95,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_25"]
  },
  {
    id: "examtimetable-0026",
    code: "NEC-EXAMTIMETABLE-0026",
    title: "Examination Timetable and Rules Viewer - Item 26",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 3,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 71,
      completionRate: 96,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_26"]
  },
  {
    id: "examtimetable-0027",
    code: "NEC-EXAMTIMETABLE-0027",
    title: "Examination Timetable and Rules Viewer - Item 27",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 4,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 72,
      completionRate: 97,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_27"]
  },
  {
    id: "examtimetable-0028",
    code: "NEC-EXAMTIMETABLE-0028",
    title: "Examination Timetable and Rules Viewer - Item 28",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 5,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 73,
      completionRate: 98,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_28"]
  },
  {
    id: "examtimetable-0029",
    code: "NEC-EXAMTIMETABLE-0029",
    title: "Examination Timetable and Rules Viewer - Item 29",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 6,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 74,
      completionRate: 99,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_29"]
  },
  {
    id: "examtimetable-0030",
    code: "NEC-EXAMTIMETABLE-0030",
    title: "Examination Timetable and Rules Viewer - Item 30",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 7,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 75,
      completionRate: 85,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_30"]
  },
  {
    id: "examtimetable-0031",
    code: "NEC-EXAMTIMETABLE-0031",
    title: "Examination Timetable and Rules Viewer - Item 31",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 8,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 76,
      completionRate: 86,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_31"]
  },
  {
    id: "examtimetable-0032",
    code: "NEC-EXAMTIMETABLE-0032",
    title: "Examination Timetable and Rules Viewer - Item 32",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 1,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 77,
      completionRate: 87,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_32"]
  },
  {
    id: "examtimetable-0033",
    code: "NEC-EXAMTIMETABLE-0033",
    title: "Examination Timetable and Rules Viewer - Item 33",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 2,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 78,
      completionRate: 88,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_33"]
  },
  {
    id: "examtimetable-0034",
    code: "NEC-EXAMTIMETABLE-0034",
    title: "Examination Timetable and Rules Viewer - Item 34",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 3,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 79,
      completionRate: 89,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_34"]
  },
  {
    id: "examtimetable-0035",
    code: "NEC-EXAMTIMETABLE-0035",
    title: "Examination Timetable and Rules Viewer - Item 35",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 4,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 80,
      completionRate: 90,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_35"]
  },
  {
    id: "examtimetable-0036",
    code: "NEC-EXAMTIMETABLE-0036",
    title: "Examination Timetable and Rules Viewer - Item 36",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 5,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 81,
      completionRate: 91,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_36"]
  },
  {
    id: "examtimetable-0037",
    code: "NEC-EXAMTIMETABLE-0037",
    title: "Examination Timetable and Rules Viewer - Item 37",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 6,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 82,
      completionRate: 92,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_37"]
  },
  {
    id: "examtimetable-0038",
    code: "NEC-EXAMTIMETABLE-0038",
    title: "Examination Timetable and Rules Viewer - Item 38",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 7,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 83,
      completionRate: 93,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_38"]
  },
  {
    id: "examtimetable-0039",
    code: "NEC-EXAMTIMETABLE-0039",
    title: "Examination Timetable and Rules Viewer - Item 39",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 8,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 84,
      completionRate: 94,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_39"]
  },
  {
    id: "examtimetable-0040",
    code: "NEC-EXAMTIMETABLE-0040",
    title: "Examination Timetable and Rules Viewer - Item 40",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 1,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 85,
      completionRate: 95,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_40"]
  },
  {
    id: "examtimetable-0041",
    code: "NEC-EXAMTIMETABLE-0041",
    title: "Examination Timetable and Rules Viewer - Item 41",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 2,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 86,
      completionRate: 96,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_41"]
  },
  {
    id: "examtimetable-0042",
    code: "NEC-EXAMTIMETABLE-0042",
    title: "Examination Timetable and Rules Viewer - Item 42",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 3,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 87,
      completionRate: 97,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_42"]
  },
  {
    id: "examtimetable-0043",
    code: "NEC-EXAMTIMETABLE-0043",
    title: "Examination Timetable and Rules Viewer - Item 43",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 4,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 88,
      completionRate: 98,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_43"]
  },
  {
    id: "examtimetable-0044",
    code: "NEC-EXAMTIMETABLE-0044",
    title: "Examination Timetable and Rules Viewer - Item 44",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 5,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 89,
      completionRate: 99,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_44"]
  },
  {
    id: "examtimetable-0045",
    code: "NEC-EXAMTIMETABLE-0045",
    title: "Examination Timetable and Rules Viewer - Item 45",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 6,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 90,
      completionRate: 85,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_45"]
  },
  {
    id: "examtimetable-0046",
    code: "NEC-EXAMTIMETABLE-0046",
    title: "Examination Timetable and Rules Viewer - Item 46",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 7,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 91,
      completionRate: 86,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_46"]
  },
  {
    id: "examtimetable-0047",
    code: "NEC-EXAMTIMETABLE-0047",
    title: "Examination Timetable and Rules Viewer - Item 47",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 8,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 92,
      completionRate: 87,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_47"]
  },
  {
    id: "examtimetable-0048",
    code: "NEC-EXAMTIMETABLE-0048",
    title: "Examination Timetable and Rules Viewer - Item 48",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 1,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 93,
      completionRate: 88,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_48"]
  },
  {
    id: "examtimetable-0049",
    code: "NEC-EXAMTIMETABLE-0049",
    title: "Examination Timetable and Rules Viewer - Item 49",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 2,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 94,
      completionRate: 89,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_49"]
  },
  {
    id: "examtimetable-0050",
    code: "NEC-EXAMTIMETABLE-0050",
    title: "Examination Timetable and Rules Viewer - Item 50",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 3,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 70,
      completionRate: 90,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_50"]
  },
  {
    id: "examtimetable-0051",
    code: "NEC-EXAMTIMETABLE-0051",
    title: "Examination Timetable and Rules Viewer - Item 51",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 4,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 71,
      completionRate: 91,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_51"]
  },
  {
    id: "examtimetable-0052",
    code: "NEC-EXAMTIMETABLE-0052",
    title: "Examination Timetable and Rules Viewer - Item 52",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 5,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 72,
      completionRate: 92,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_52"]
  },
  {
    id: "examtimetable-0053",
    code: "NEC-EXAMTIMETABLE-0053",
    title: "Examination Timetable and Rules Viewer - Item 53",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 6,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 73,
      completionRate: 93,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_53"]
  },
  {
    id: "examtimetable-0054",
    code: "NEC-EXAMTIMETABLE-0054",
    title: "Examination Timetable and Rules Viewer - Item 54",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 7,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 74,
      completionRate: 94,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_54"]
  },
  {
    id: "examtimetable-0055",
    code: "NEC-EXAMTIMETABLE-0055",
    title: "Examination Timetable and Rules Viewer - Item 55",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 8,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 75,
      completionRate: 95,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_55"]
  },
  {
    id: "examtimetable-0056",
    code: "NEC-EXAMTIMETABLE-0056",
    title: "Examination Timetable and Rules Viewer - Item 56",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 1,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 76,
      completionRate: 96,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_56"]
  },
  {
    id: "examtimetable-0057",
    code: "NEC-EXAMTIMETABLE-0057",
    title: "Examination Timetable and Rules Viewer - Item 57",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 2,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 77,
      completionRate: 97,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_57"]
  },
  {
    id: "examtimetable-0058",
    code: "NEC-EXAMTIMETABLE-0058",
    title: "Examination Timetable and Rules Viewer - Item 58",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 3,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 78,
      completionRate: 98,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_58"]
  },
  {
    id: "examtimetable-0059",
    code: "NEC-EXAMTIMETABLE-0059",
    title: "Examination Timetable and Rules Viewer - Item 59",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 4,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 79,
      completionRate: 99,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_59"]
  },
  {
    id: "examtimetable-0060",
    code: "NEC-EXAMTIMETABLE-0060",
    title: "Examination Timetable and Rules Viewer - Item 60",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 5,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 80,
      completionRate: 85,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_60"]
  },
  {
    id: "examtimetable-0061",
    code: "NEC-EXAMTIMETABLE-0061",
    title: "Examination Timetable and Rules Viewer - Item 61",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 6,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 81,
      completionRate: 86,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_61"]
  },
  {
    id: "examtimetable-0062",
    code: "NEC-EXAMTIMETABLE-0062",
    title: "Examination Timetable and Rules Viewer - Item 62",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 7,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 82,
      completionRate: 87,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_62"]
  },
  {
    id: "examtimetable-0063",
    code: "NEC-EXAMTIMETABLE-0063",
    title: "Examination Timetable and Rules Viewer - Item 63",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 8,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 83,
      completionRate: 88,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_63"]
  },
  {
    id: "examtimetable-0064",
    code: "NEC-EXAMTIMETABLE-0064",
    title: "Examination Timetable and Rules Viewer - Item 64",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 1,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 84,
      completionRate: 89,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_64"]
  },
  {
    id: "examtimetable-0065",
    code: "NEC-EXAMTIMETABLE-0065",
    title: "Examination Timetable and Rules Viewer - Item 65",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 2,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 85,
      completionRate: 90,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_65"]
  },
  {
    id: "examtimetable-0066",
    code: "NEC-EXAMTIMETABLE-0066",
    title: "Examination Timetable and Rules Viewer - Item 66",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 3,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 86,
      completionRate: 91,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_66"]
  },
  {
    id: "examtimetable-0067",
    code: "NEC-EXAMTIMETABLE-0067",
    title: "Examination Timetable and Rules Viewer - Item 67",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 4,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 87,
      completionRate: 92,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_67"]
  },
  {
    id: "examtimetable-0068",
    code: "NEC-EXAMTIMETABLE-0068",
    title: "Examination Timetable and Rules Viewer - Item 68",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 5,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 88,
      completionRate: 93,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_68"]
  },
  {
    id: "examtimetable-0069",
    code: "NEC-EXAMTIMETABLE-0069",
    title: "Examination Timetable and Rules Viewer - Item 69",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 6,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 89,
      completionRate: 94,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_69"]
  },
  {
    id: "examtimetable-0070",
    code: "NEC-EXAMTIMETABLE-0070",
    title: "Examination Timetable and Rules Viewer - Item 70",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 7,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 90,
      completionRate: 95,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_70"]
  },
  {
    id: "examtimetable-0071",
    code: "NEC-EXAMTIMETABLE-0071",
    title: "Examination Timetable and Rules Viewer - Item 71",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 8,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 91,
      completionRate: 96,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_71"]
  },
  {
    id: "examtimetable-0072",
    code: "NEC-EXAMTIMETABLE-0072",
    title: "Examination Timetable and Rules Viewer - Item 72",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 1,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 92,
      completionRate: 97,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_72"]
  },
  {
    id: "examtimetable-0073",
    code: "NEC-EXAMTIMETABLE-0073",
    title: "Examination Timetable and Rules Viewer - Item 73",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 2,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 93,
      completionRate: 98,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_73"]
  },
  {
    id: "examtimetable-0074",
    code: "NEC-EXAMTIMETABLE-0074",
    title: "Examination Timetable and Rules Viewer - Item 74",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 3,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 94,
      completionRate: 99,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_74"]
  },
  {
    id: "examtimetable-0075",
    code: "NEC-EXAMTIMETABLE-0075",
    title: "Examination Timetable and Rules Viewer - Item 75",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 4,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 70,
      completionRate: 85,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_75"]
  },
  {
    id: "examtimetable-0076",
    code: "NEC-EXAMTIMETABLE-0076",
    title: "Examination Timetable and Rules Viewer - Item 76",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 5,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 71,
      completionRate: 86,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_76"]
  },
  {
    id: "examtimetable-0077",
    code: "NEC-EXAMTIMETABLE-0077",
    title: "Examination Timetable and Rules Viewer - Item 77",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 6,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 72,
      completionRate: 87,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_77"]
  },
  {
    id: "examtimetable-0078",
    code: "NEC-EXAMTIMETABLE-0078",
    title: "Examination Timetable and Rules Viewer - Item 78",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 7,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 73,
      completionRate: 88,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_78"]
  },
  {
    id: "examtimetable-0079",
    code: "NEC-EXAMTIMETABLE-0079",
    title: "Examination Timetable and Rules Viewer - Item 79",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 8,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 74,
      completionRate: 89,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_79"]
  },
  {
    id: "examtimetable-0080",
    code: "NEC-EXAMTIMETABLE-0080",
    title: "Examination Timetable and Rules Viewer - Item 80",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 1,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 75,
      completionRate: 90,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_80"]
  },
  {
    id: "examtimetable-0081",
    code: "NEC-EXAMTIMETABLE-0081",
    title: "Examination Timetable and Rules Viewer - Item 81",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 2,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 76,
      completionRate: 91,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_81"]
  },
  {
    id: "examtimetable-0082",
    code: "NEC-EXAMTIMETABLE-0082",
    title: "Examination Timetable and Rules Viewer - Item 82",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 3,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 77,
      completionRate: 92,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_82"]
  },
  {
    id: "examtimetable-0083",
    code: "NEC-EXAMTIMETABLE-0083",
    title: "Examination Timetable and Rules Viewer - Item 83",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 4,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 78,
      completionRate: 93,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_83"]
  },
  {
    id: "examtimetable-0084",
    code: "NEC-EXAMTIMETABLE-0084",
    title: "Examination Timetable and Rules Viewer - Item 84",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 5,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 79,
      completionRate: 94,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_84"]
  },
  {
    id: "examtimetable-0085",
    code: "NEC-EXAMTIMETABLE-0085",
    title: "Examination Timetable and Rules Viewer - Item 85",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 6,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 80,
      completionRate: 95,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_85"]
  },
  {
    id: "examtimetable-0086",
    code: "NEC-EXAMTIMETABLE-0086",
    title: "Examination Timetable and Rules Viewer - Item 86",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 7,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 81,
      completionRate: 96,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_86"]
  },
  {
    id: "examtimetable-0087",
    code: "NEC-EXAMTIMETABLE-0087",
    title: "Examination Timetable and Rules Viewer - Item 87",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 8,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 82,
      completionRate: 97,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_87"]
  },
  {
    id: "examtimetable-0088",
    code: "NEC-EXAMTIMETABLE-0088",
    title: "Examination Timetable and Rules Viewer - Item 88",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 1,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 83,
      completionRate: 98,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_88"]
  },
  {
    id: "examtimetable-0089",
    code: "NEC-EXAMTIMETABLE-0089",
    title: "Examination Timetable and Rules Viewer - Item 89",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 2,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 84,
      completionRate: 99,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_89"]
  },
  {
    id: "examtimetable-0090",
    code: "NEC-EXAMTIMETABLE-0090",
    title: "Examination Timetable and Rules Viewer - Item 90",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 3,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 85,
      completionRate: 85,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_90"]
  },
  {
    id: "examtimetable-0091",
    code: "NEC-EXAMTIMETABLE-0091",
    title: "Examination Timetable and Rules Viewer - Item 91",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 4,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 86,
      completionRate: 86,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_91"]
  },
  {
    id: "examtimetable-0092",
    code: "NEC-EXAMTIMETABLE-0092",
    title: "Examination Timetable and Rules Viewer - Item 92",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 5,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 87,
      completionRate: 87,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_92"]
  },
  {
    id: "examtimetable-0093",
    code: "NEC-EXAMTIMETABLE-0093",
    title: "Examination Timetable and Rules Viewer - Item 93",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 6,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 88,
      completionRate: 88,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_93"]
  },
  {
    id: "examtimetable-0094",
    code: "NEC-EXAMTIMETABLE-0094",
    title: "Examination Timetable and Rules Viewer - Item 94",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 7,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 89,
      completionRate: 89,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_94"]
  },
  {
    id: "examtimetable-0095",
    code: "NEC-EXAMTIMETABLE-0095",
    title: "Examination Timetable and Rules Viewer - Item 95",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 8,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 90,
      completionRate: 90,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_95"]
  },
  {
    id: "examtimetable-0096",
    code: "NEC-EXAMTIMETABLE-0096",
    title: "Examination Timetable and Rules Viewer - Item 96",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 1,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 91,
      completionRate: 91,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_96"]
  },
  {
    id: "examtimetable-0097",
    code: "NEC-EXAMTIMETABLE-0097",
    title: "Examination Timetable and Rules Viewer - Item 97",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 2,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 92,
      completionRate: 92,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_97"]
  },
  {
    id: "examtimetable-0098",
    code: "NEC-EXAMTIMETABLE-0098",
    title: "Examination Timetable and Rules Viewer - Item 98",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 3,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 93,
      completionRate: 93,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_98"]
  },
  {
    id: "examtimetable-0099",
    code: "NEC-EXAMTIMETABLE-0099",
    title: "Examination Timetable and Rules Viewer - Item 99",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 4,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 94,
      completionRate: 94,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_99"]
  },
  {
    id: "examtimetable-0100",
    code: "NEC-EXAMTIMETABLE-0100",
    title: "Examination Timetable and Rules Viewer - Item 100",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 5,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 70,
      completionRate: 95,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_100"]
  },
  {
    id: "examtimetable-0101",
    code: "NEC-EXAMTIMETABLE-0101",
    title: "Examination Timetable and Rules Viewer - Item 101",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 6,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 71,
      completionRate: 96,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_101"]
  },
  {
    id: "examtimetable-0102",
    code: "NEC-EXAMTIMETABLE-0102",
    title: "Examination Timetable and Rules Viewer - Item 102",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 7,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 72,
      completionRate: 97,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_102"]
  },
  {
    id: "examtimetable-0103",
    code: "NEC-EXAMTIMETABLE-0103",
    title: "Examination Timetable and Rules Viewer - Item 103",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 8,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 73,
      completionRate: 98,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_103"]
  },
  {
    id: "examtimetable-0104",
    code: "NEC-EXAMTIMETABLE-0104",
    title: "Examination Timetable and Rules Viewer - Item 104",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 1,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 74,
      completionRate: 99,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_104"]
  },
  {
    id: "examtimetable-0105",
    code: "NEC-EXAMTIMETABLE-0105",
    title: "Examination Timetable and Rules Viewer - Item 105",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 2,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 75,
      completionRate: 85,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_105"]
  },
  {
    id: "examtimetable-0106",
    code: "NEC-EXAMTIMETABLE-0106",
    title: "Examination Timetable and Rules Viewer - Item 106",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 3,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 76,
      completionRate: 86,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_106"]
  },
  {
    id: "examtimetable-0107",
    code: "NEC-EXAMTIMETABLE-0107",
    title: "Examination Timetable and Rules Viewer - Item 107",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 4,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 77,
      completionRate: 87,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_107"]
  },
  {
    id: "examtimetable-0108",
    code: "NEC-EXAMTIMETABLE-0108",
    title: "Examination Timetable and Rules Viewer - Item 108",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 5,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 78,
      completionRate: 88,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_108"]
  },
  {
    id: "examtimetable-0109",
    code: "NEC-EXAMTIMETABLE-0109",
    title: "Examination Timetable and Rules Viewer - Item 109",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 6,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 79,
      completionRate: 89,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_109"]
  },
  {
    id: "examtimetable-0110",
    code: "NEC-EXAMTIMETABLE-0110",
    title: "Examination Timetable and Rules Viewer - Item 110",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 7,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 80,
      completionRate: 90,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_110"]
  },
  {
    id: "examtimetable-0111",
    code: "NEC-EXAMTIMETABLE-0111",
    title: "Examination Timetable and Rules Viewer - Item 111",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 8,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 81,
      completionRate: 91,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_111"]
  },
  {
    id: "examtimetable-0112",
    code: "NEC-EXAMTIMETABLE-0112",
    title: "Examination Timetable and Rules Viewer - Item 112",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 1,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 82,
      completionRate: 92,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_112"]
  },
  {
    id: "examtimetable-0113",
    code: "NEC-EXAMTIMETABLE-0113",
    title: "Examination Timetable and Rules Viewer - Item 113",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 2,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 83,
      completionRate: 93,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_113"]
  },
  {
    id: "examtimetable-0114",
    code: "NEC-EXAMTIMETABLE-0114",
    title: "Examination Timetable and Rules Viewer - Item 114",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 3,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 84,
      completionRate: 94,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_114"]
  },
  {
    id: "examtimetable-0115",
    code: "NEC-EXAMTIMETABLE-0115",
    title: "Examination Timetable and Rules Viewer - Item 115",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 4,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 85,
      completionRate: 95,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_115"]
  },
  {
    id: "examtimetable-0116",
    code: "NEC-EXAMTIMETABLE-0116",
    title: "Examination Timetable and Rules Viewer - Item 116",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 5,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 86,
      completionRate: 96,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_116"]
  },
  {
    id: "examtimetable-0117",
    code: "NEC-EXAMTIMETABLE-0117",
    title: "Examination Timetable and Rules Viewer - Item 117",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 6,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 87,
      completionRate: 97,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_117"]
  },
  {
    id: "examtimetable-0118",
    code: "NEC-EXAMTIMETABLE-0118",
    title: "Examination Timetable and Rules Viewer - Item 118",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 7,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 88,
      completionRate: 98,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_118"]
  },
  {
    id: "examtimetable-0119",
    code: "NEC-EXAMTIMETABLE-0119",
    title: "Examination Timetable and Rules Viewer - Item 119",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 8,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 89,
      completionRate: 99,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_119"]
  },
  {
    id: "examtimetable-0120",
    code: "NEC-EXAMTIMETABLE-0120",
    title: "Examination Timetable and Rules Viewer - Item 120",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 1,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 90,
      completionRate: 85,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_120"]
  },
  {
    id: "examtimetable-0121",
    code: "NEC-EXAMTIMETABLE-0121",
    title: "Examination Timetable and Rules Viewer - Item 121",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 2,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 91,
      completionRate: 86,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_121"]
  },
  {
    id: "examtimetable-0122",
    code: "NEC-EXAMTIMETABLE-0122",
    title: "Examination Timetable and Rules Viewer - Item 122",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 3,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 92,
      completionRate: 87,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_122"]
  },
  {
    id: "examtimetable-0123",
    code: "NEC-EXAMTIMETABLE-0123",
    title: "Examination Timetable and Rules Viewer - Item 123",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 4,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 93,
      completionRate: 88,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_123"]
  },
  {
    id: "examtimetable-0124",
    code: "NEC-EXAMTIMETABLE-0124",
    title: "Examination Timetable and Rules Viewer - Item 124",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 5,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 94,
      completionRate: 89,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_124"]
  },
  {
    id: "examtimetable-0125",
    code: "NEC-EXAMTIMETABLE-0125",
    title: "Examination Timetable and Rules Viewer - Item 125",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 6,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 70,
      completionRate: 90,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_125"]
  },
  {
    id: "examtimetable-0126",
    code: "NEC-EXAMTIMETABLE-0126",
    title: "Examination Timetable and Rules Viewer - Item 126",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 7,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 71,
      completionRate: 91,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_126"]
  },
  {
    id: "examtimetable-0127",
    code: "NEC-EXAMTIMETABLE-0127",
    title: "Examination Timetable and Rules Viewer - Item 127",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 8,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 72,
      completionRate: 92,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_127"]
  },
  {
    id: "examtimetable-0128",
    code: "NEC-EXAMTIMETABLE-0128",
    title: "Examination Timetable and Rules Viewer - Item 128",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 1,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 73,
      completionRate: 93,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_128"]
  },
  {
    id: "examtimetable-0129",
    code: "NEC-EXAMTIMETABLE-0129",
    title: "Examination Timetable and Rules Viewer - Item 129",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 2,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 74,
      completionRate: 94,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_129"]
  },
  {
    id: "examtimetable-0130",
    code: "NEC-EXAMTIMETABLE-0130",
    title: "Examination Timetable and Rules Viewer - Item 130",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 3,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 75,
      completionRate: 95,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_130"]
  },
  {
    id: "examtimetable-0131",
    code: "NEC-EXAMTIMETABLE-0131",
    title: "Examination Timetable and Rules Viewer - Item 131",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 4,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 76,
      completionRate: 96,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_131"]
  },
  {
    id: "examtimetable-0132",
    code: "NEC-EXAMTIMETABLE-0132",
    title: "Examination Timetable and Rules Viewer - Item 132",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 5,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 77,
      completionRate: 97,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_132"]
  },
  {
    id: "examtimetable-0133",
    code: "NEC-EXAMTIMETABLE-0133",
    title: "Examination Timetable and Rules Viewer - Item 133",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 6,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 78,
      completionRate: 98,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_133"]
  },
  {
    id: "examtimetable-0134",
    code: "NEC-EXAMTIMETABLE-0134",
    title: "Examination Timetable and Rules Viewer - Item 134",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 7,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 79,
      completionRate: 99,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_134"]
  },
  {
    id: "examtimetable-0135",
    code: "NEC-EXAMTIMETABLE-0135",
    title: "Examination Timetable and Rules Viewer - Item 135",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 8,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 80,
      completionRate: 85,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_135"]
  },
  {
    id: "examtimetable-0136",
    code: "NEC-EXAMTIMETABLE-0136",
    title: "Examination Timetable and Rules Viewer - Item 136",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 1,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 81,
      completionRate: 86,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_136"]
  },
  {
    id: "examtimetable-0137",
    code: "NEC-EXAMTIMETABLE-0137",
    title: "Examination Timetable and Rules Viewer - Item 137",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 2,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 82,
      completionRate: 87,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_137"]
  },
  {
    id: "examtimetable-0138",
    code: "NEC-EXAMTIMETABLE-0138",
    title: "Examination Timetable and Rules Viewer - Item 138",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 3,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 83,
      completionRate: 88,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_138"]
  },
  {
    id: "examtimetable-0139",
    code: "NEC-EXAMTIMETABLE-0139",
    title: "Examination Timetable and Rules Viewer - Item 139",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 4,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 84,
      completionRate: 89,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_139"]
  },
  {
    id: "examtimetable-0140",
    code: "NEC-EXAMTIMETABLE-0140",
    title: "Examination Timetable and Rules Viewer - Item 140",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 5,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 85,
      completionRate: 90,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_140"]
  },
  {
    id: "examtimetable-0141",
    code: "NEC-EXAMTIMETABLE-0141",
    title: "Examination Timetable and Rules Viewer - Item 141",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 6,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 86,
      completionRate: 91,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_141"]
  },
  {
    id: "examtimetable-0142",
    code: "NEC-EXAMTIMETABLE-0142",
    title: "Examination Timetable and Rules Viewer - Item 142",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 7,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 87,
      completionRate: 92,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_142"]
  },
  {
    id: "examtimetable-0143",
    code: "NEC-EXAMTIMETABLE-0143",
    title: "Examination Timetable and Rules Viewer - Item 143",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 8,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 88,
      completionRate: 93,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_143"]
  },
  {
    id: "examtimetable-0144",
    code: "NEC-EXAMTIMETABLE-0144",
    title: "Examination Timetable and Rules Viewer - Item 144",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 1,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 89,
      completionRate: 94,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_144"]
  },
  {
    id: "examtimetable-0145",
    code: "NEC-EXAMTIMETABLE-0145",
    title: "Examination Timetable and Rules Viewer - Item 145",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 2,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 90,
      completionRate: 95,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_145"]
  },
  {
    id: "examtimetable-0146",
    code: "NEC-EXAMTIMETABLE-0146",
    title: "Examination Timetable and Rules Viewer - Item 146",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 3,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 91,
      completionRate: 96,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_146"]
  },
  {
    id: "examtimetable-0147",
    code: "NEC-EXAMTIMETABLE-0147",
    title: "Examination Timetable and Rules Viewer - Item 147",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 4,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 92,
      completionRate: 97,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_147"]
  },
  {
    id: "examtimetable-0148",
    code: "NEC-EXAMTIMETABLE-0148",
    title: "Examination Timetable and Rules Viewer - Item 148",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 5,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 93,
      completionRate: 98,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_148"]
  },
  {
    id: "examtimetable-0149",
    code: "NEC-EXAMTIMETABLE-0149",
    title: "Examination Timetable and Rules Viewer - Item 149",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 6,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 94,
      completionRate: 99,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_149"]
  },
  {
    id: "examtimetable-0150",
    code: "NEC-EXAMTIMETABLE-0150",
    title: "Examination Timetable and Rules Viewer - Item 150",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 7,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 70,
      completionRate: 85,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_150"]
  },
  {
    id: "examtimetable-0151",
    code: "NEC-EXAMTIMETABLE-0151",
    title: "Examination Timetable and Rules Viewer - Item 151",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 8,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 71,
      completionRate: 86,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_151"]
  },
  {
    id: "examtimetable-0152",
    code: "NEC-EXAMTIMETABLE-0152",
    title: "Examination Timetable and Rules Viewer - Item 152",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 1,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 72,
      completionRate: 87,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_152"]
  },
  {
    id: "examtimetable-0153",
    code: "NEC-EXAMTIMETABLE-0153",
    title: "Examination Timetable and Rules Viewer - Item 153",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 2,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 73,
      completionRate: 88,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_153"]
  },
  {
    id: "examtimetable-0154",
    code: "NEC-EXAMTIMETABLE-0154",
    title: "Examination Timetable and Rules Viewer - Item 154",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 3,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 74,
      completionRate: 89,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_154"]
  },
  {
    id: "examtimetable-0155",
    code: "NEC-EXAMTIMETABLE-0155",
    title: "Examination Timetable and Rules Viewer - Item 155",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 4,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 75,
      completionRate: 90,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_155"]
  },
  {
    id: "examtimetable-0156",
    code: "NEC-EXAMTIMETABLE-0156",
    title: "Examination Timetable and Rules Viewer - Item 156",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 5,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 76,
      completionRate: 91,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_156"]
  },
  {
    id: "examtimetable-0157",
    code: "NEC-EXAMTIMETABLE-0157",
    title: "Examination Timetable and Rules Viewer - Item 157",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 6,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 77,
      completionRate: 92,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_157"]
  },
  {
    id: "examtimetable-0158",
    code: "NEC-EXAMTIMETABLE-0158",
    title: "Examination Timetable and Rules Viewer - Item 158",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 7,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 78,
      completionRate: 93,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_158"]
  },
  {
    id: "examtimetable-0159",
    code: "NEC-EXAMTIMETABLE-0159",
    title: "Examination Timetable and Rules Viewer - Item 159",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 8,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 79,
      completionRate: 94,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_159"]
  },
  {
    id: "examtimetable-0160",
    code: "NEC-EXAMTIMETABLE-0160",
    title: "Examination Timetable and Rules Viewer - Item 160",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 1,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 80,
      completionRate: 95,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_160"]
  },
  {
    id: "examtimetable-0161",
    code: "NEC-EXAMTIMETABLE-0161",
    title: "Examination Timetable and Rules Viewer - Item 161",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 2,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 81,
      completionRate: 96,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_161"]
  },
  {
    id: "examtimetable-0162",
    code: "NEC-EXAMTIMETABLE-0162",
    title: "Examination Timetable and Rules Viewer - Item 162",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 3,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 82,
      completionRate: 97,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_162"]
  },
  {
    id: "examtimetable-0163",
    code: "NEC-EXAMTIMETABLE-0163",
    title: "Examination Timetable and Rules Viewer - Item 163",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 4,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 83,
      completionRate: 98,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_163"]
  },
  {
    id: "examtimetable-0164",
    code: "NEC-EXAMTIMETABLE-0164",
    title: "Examination Timetable and Rules Viewer - Item 164",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 5,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 84,
      completionRate: 99,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_164"]
  },
  {
    id: "examtimetable-0165",
    code: "NEC-EXAMTIMETABLE-0165",
    title: "Examination Timetable and Rules Viewer - Item 165",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 6,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 85,
      completionRate: 85,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_165"]
  },
  {
    id: "examtimetable-0166",
    code: "NEC-EXAMTIMETABLE-0166",
    title: "Examination Timetable and Rules Viewer - Item 166",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 7,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 86,
      completionRate: 86,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_166"]
  },
  {
    id: "examtimetable-0167",
    code: "NEC-EXAMTIMETABLE-0167",
    title: "Examination Timetable and Rules Viewer - Item 167",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 8,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 87,
      completionRate: 87,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_167"]
  },
  {
    id: "examtimetable-0168",
    code: "NEC-EXAMTIMETABLE-0168",
    title: "Examination Timetable and Rules Viewer - Item 168",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 1,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 88,
      completionRate: 88,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_168"]
  },
  {
    id: "examtimetable-0169",
    code: "NEC-EXAMTIMETABLE-0169",
    title: "Examination Timetable and Rules Viewer - Item 169",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 2,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 89,
      completionRate: 89,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_169"]
  },
  {
    id: "examtimetable-0170",
    code: "NEC-EXAMTIMETABLE-0170",
    title: "Examination Timetable and Rules Viewer - Item 170",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 3,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 90,
      completionRate: 90,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_170"]
  },
  {
    id: "examtimetable-0171",
    code: "NEC-EXAMTIMETABLE-0171",
    title: "Examination Timetable and Rules Viewer - Item 171",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 4,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 91,
      completionRate: 91,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_171"]
  },
  {
    id: "examtimetable-0172",
    code: "NEC-EXAMTIMETABLE-0172",
    title: "Examination Timetable and Rules Viewer - Item 172",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 5,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 92,
      completionRate: 92,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_172"]
  },
  {
    id: "examtimetable-0173",
    code: "NEC-EXAMTIMETABLE-0173",
    title: "Examination Timetable and Rules Viewer - Item 173",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 6,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 93,
      completionRate: 93,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_173"]
  },
  {
    id: "examtimetable-0174",
    code: "NEC-EXAMTIMETABLE-0174",
    title: "Examination Timetable and Rules Viewer - Item 174",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 7,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 94,
      completionRate: 94,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_174"]
  },
  {
    id: "examtimetable-0175",
    code: "NEC-EXAMTIMETABLE-0175",
    title: "Examination Timetable and Rules Viewer - Item 175",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 8,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 70,
      completionRate: 95,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_175"]
  },
  {
    id: "examtimetable-0176",
    code: "NEC-EXAMTIMETABLE-0176",
    title: "Examination Timetable and Rules Viewer - Item 176",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 1,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 71,
      completionRate: 96,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_176"]
  },
  {
    id: "examtimetable-0177",
    code: "NEC-EXAMTIMETABLE-0177",
    title: "Examination Timetable and Rules Viewer - Item 177",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 2,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 72,
      completionRate: 97,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_177"]
  },
  {
    id: "examtimetable-0178",
    code: "NEC-EXAMTIMETABLE-0178",
    title: "Examination Timetable and Rules Viewer - Item 178",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 3,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 73,
      completionRate: 98,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_178"]
  },
  {
    id: "examtimetable-0179",
    code: "NEC-EXAMTIMETABLE-0179",
    title: "Examination Timetable and Rules Viewer - Item 179",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 4,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 74,
      completionRate: 99,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_179"]
  },
  {
    id: "examtimetable-0180",
    code: "NEC-EXAMTIMETABLE-0180",
    title: "Examination Timetable and Rules Viewer - Item 180",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 5,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 75,
      completionRate: 85,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_180"]
  },
  {
    id: "examtimetable-0181",
    code: "NEC-EXAMTIMETABLE-0181",
    title: "Examination Timetable and Rules Viewer - Item 181",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 6,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 76,
      completionRate: 86,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_181"]
  },
  {
    id: "examtimetable-0182",
    code: "NEC-EXAMTIMETABLE-0182",
    title: "Examination Timetable and Rules Viewer - Item 182",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 7,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 77,
      completionRate: 87,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_182"]
  },
  {
    id: "examtimetable-0183",
    code: "NEC-EXAMTIMETABLE-0183",
    title: "Examination Timetable and Rules Viewer - Item 183",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 8,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 78,
      completionRate: 88,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_183"]
  },
  {
    id: "examtimetable-0184",
    code: "NEC-EXAMTIMETABLE-0184",
    title: "Examination Timetable and Rules Viewer - Item 184",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 1,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 79,
      completionRate: 89,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_184"]
  },
  {
    id: "examtimetable-0185",
    code: "NEC-EXAMTIMETABLE-0185",
    title: "Examination Timetable and Rules Viewer - Item 185",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 2,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 80,
      completionRate: 90,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_185"]
  },
  {
    id: "examtimetable-0186",
    code: "NEC-EXAMTIMETABLE-0186",
    title: "Examination Timetable and Rules Viewer - Item 186",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 3,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 81,
      completionRate: 91,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_186"]
  },
  {
    id: "examtimetable-0187",
    code: "NEC-EXAMTIMETABLE-0187",
    title: "Examination Timetable and Rules Viewer - Item 187",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 4,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 82,
      completionRate: 92,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_187"]
  },
  {
    id: "examtimetable-0188",
    code: "NEC-EXAMTIMETABLE-0188",
    title: "Examination Timetable and Rules Viewer - Item 188",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 5,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 83,
      completionRate: 93,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_188"]
  },
  {
    id: "examtimetable-0189",
    code: "NEC-EXAMTIMETABLE-0189",
    title: "Examination Timetable and Rules Viewer - Item 189",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 6,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 84,
      completionRate: 94,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_189"]
  },
  {
    id: "examtimetable-0190",
    code: "NEC-EXAMTIMETABLE-0190",
    title: "Examination Timetable and Rules Viewer - Item 190",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 7,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 85,
      completionRate: 95,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_190"]
  },
  {
    id: "examtimetable-0191",
    code: "NEC-EXAMTIMETABLE-0191",
    title: "Examination Timetable and Rules Viewer - Item 191",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 8,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 86,
      completionRate: 96,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_191"]
  },
  {
    id: "examtimetable-0192",
    code: "NEC-EXAMTIMETABLE-0192",
    title: "Examination Timetable and Rules Viewer - Item 192",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 1,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 87,
      completionRate: 97,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_192"]
  },
  {
    id: "examtimetable-0193",
    code: "NEC-EXAMTIMETABLE-0193",
    title: "Examination Timetable and Rules Viewer - Item 193",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 2,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 88,
      completionRate: 98,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_193"]
  },
  {
    id: "examtimetable-0194",
    code: "NEC-EXAMTIMETABLE-0194",
    title: "Examination Timetable and Rules Viewer - Item 194",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 3,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 89,
      completionRate: 99,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_194"]
  },
  {
    id: "examtimetable-0195",
    code: "NEC-EXAMTIMETABLE-0195",
    title: "Examination Timetable and Rules Viewer - Item 195",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 4,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 90,
      completionRate: 85,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_195"]
  },
  {
    id: "examtimetable-0196",
    code: "NEC-EXAMTIMETABLE-0196",
    title: "Examination Timetable and Rules Viewer - Item 196",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 5,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 91,
      completionRate: 86,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_196"]
  },
  {
    id: "examtimetable-0197",
    code: "NEC-EXAMTIMETABLE-0197",
    title: "Examination Timetable and Rules Viewer - Item 197",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 6,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 92,
      completionRate: 87,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_197"]
  },
  {
    id: "examtimetable-0198",
    code: "NEC-EXAMTIMETABLE-0198",
    title: "Examination Timetable and Rules Viewer - Item 198",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 7,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 93,
      completionRate: 88,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_198"]
  },
  {
    id: "examtimetable-0199",
    code: "NEC-EXAMTIMETABLE-0199",
    title: "Examination Timetable and Rules Viewer - Item 199",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 8,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 94,
      completionRate: 89,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_199"]
  },
  {
    id: "examtimetable-0200",
    code: "NEC-EXAMTIMETABLE-0200",
    title: "Examination Timetable and Rules Viewer - Item 200",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 1,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 70,
      completionRate: 90,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_200"]
  },
  {
    id: "examtimetable-0201",
    code: "NEC-EXAMTIMETABLE-0201",
    title: "Examination Timetable and Rules Viewer - Item 201",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 2,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 71,
      completionRate: 91,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_201"]
  },
  {
    id: "examtimetable-0202",
    code: "NEC-EXAMTIMETABLE-0202",
    title: "Examination Timetable and Rules Viewer - Item 202",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 3,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 72,
      completionRate: 92,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_202"]
  },
  {
    id: "examtimetable-0203",
    code: "NEC-EXAMTIMETABLE-0203",
    title: "Examination Timetable and Rules Viewer - Item 203",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 4,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 73,
      completionRate: 93,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_203"]
  },
  {
    id: "examtimetable-0204",
    code: "NEC-EXAMTIMETABLE-0204",
    title: "Examination Timetable and Rules Viewer - Item 204",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 5,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 74,
      completionRate: 94,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_204"]
  },
  {
    id: "examtimetable-0205",
    code: "NEC-EXAMTIMETABLE-0205",
    title: "Examination Timetable and Rules Viewer - Item 205",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 6,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 75,
      completionRate: 95,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_205"]
  },
  {
    id: "examtimetable-0206",
    code: "NEC-EXAMTIMETABLE-0206",
    title: "Examination Timetable and Rules Viewer - Item 206",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 7,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 76,
      completionRate: 96,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_206"]
  },
  {
    id: "examtimetable-0207",
    code: "NEC-EXAMTIMETABLE-0207",
    title: "Examination Timetable and Rules Viewer - Item 207",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 8,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 77,
      completionRate: 97,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_207"]
  },
  {
    id: "examtimetable-0208",
    code: "NEC-EXAMTIMETABLE-0208",
    title: "Examination Timetable and Rules Viewer - Item 208",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 1,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 78,
      completionRate: 98,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_208"]
  },
  {
    id: "examtimetable-0209",
    code: "NEC-EXAMTIMETABLE-0209",
    title: "Examination Timetable and Rules Viewer - Item 209",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 2,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 79,
      completionRate: 99,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_209"]
  },
  {
    id: "examtimetable-0210",
    code: "NEC-EXAMTIMETABLE-0210",
    title: "Examination Timetable and Rules Viewer - Item 210",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 3,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 80,
      completionRate: 85,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_210"]
  },
  {
    id: "examtimetable-0211",
    code: "NEC-EXAMTIMETABLE-0211",
    title: "Examination Timetable and Rules Viewer - Item 211",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 4,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 81,
      completionRate: 86,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_211"]
  },
  {
    id: "examtimetable-0212",
    code: "NEC-EXAMTIMETABLE-0212",
    title: "Examination Timetable and Rules Viewer - Item 212",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 5,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 82,
      completionRate: 87,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_212"]
  },
  {
    id: "examtimetable-0213",
    code: "NEC-EXAMTIMETABLE-0213",
    title: "Examination Timetable and Rules Viewer - Item 213",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 6,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 83,
      completionRate: 88,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_213"]
  },
  {
    id: "examtimetable-0214",
    code: "NEC-EXAMTIMETABLE-0214",
    title: "Examination Timetable and Rules Viewer - Item 214",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 7,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 84,
      completionRate: 89,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_214"]
  },
  {
    id: "examtimetable-0215",
    code: "NEC-EXAMTIMETABLE-0215",
    title: "Examination Timetable and Rules Viewer - Item 215",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 8,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 85,
      completionRate: 90,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_215"]
  },
  {
    id: "examtimetable-0216",
    code: "NEC-EXAMTIMETABLE-0216",
    title: "Examination Timetable and Rules Viewer - Item 216",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 1,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 86,
      completionRate: 91,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_216"]
  },
  {
    id: "examtimetable-0217",
    code: "NEC-EXAMTIMETABLE-0217",
    title: "Examination Timetable and Rules Viewer - Item 217",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 2,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 87,
      completionRate: 92,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_217"]
  },
  {
    id: "examtimetable-0218",
    code: "NEC-EXAMTIMETABLE-0218",
    title: "Examination Timetable and Rules Viewer - Item 218",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 3,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 88,
      completionRate: 93,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_218"]
  },
  {
    id: "examtimetable-0219",
    code: "NEC-EXAMTIMETABLE-0219",
    title: "Examination Timetable and Rules Viewer - Item 219",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 4,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 89,
      completionRate: 94,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_219"]
  },
  {
    id: "examtimetable-0220",
    code: "NEC-EXAMTIMETABLE-0220",
    title: "Examination Timetable and Rules Viewer - Item 220",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 5,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 90,
      completionRate: 95,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_220"]
  },
  {
    id: "examtimetable-0221",
    code: "NEC-EXAMTIMETABLE-0221",
    title: "Examination Timetable and Rules Viewer - Item 221",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 6,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 91,
      completionRate: 96,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_221"]
  },
  {
    id: "examtimetable-0222",
    code: "NEC-EXAMTIMETABLE-0222",
    title: "Examination Timetable and Rules Viewer - Item 222",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 7,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 92,
      completionRate: 97,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_222"]
  },
  {
    id: "examtimetable-0223",
    code: "NEC-EXAMTIMETABLE-0223",
    title: "Examination Timetable and Rules Viewer - Item 223",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 8,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 93,
      completionRate: 98,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_223"]
  },
  {
    id: "examtimetable-0224",
    code: "NEC-EXAMTIMETABLE-0224",
    title: "Examination Timetable and Rules Viewer - Item 224",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 1,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 94,
      completionRate: 99,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_224"]
  },
  {
    id: "examtimetable-0225",
    code: "NEC-EXAMTIMETABLE-0225",
    title: "Examination Timetable and Rules Viewer - Item 225",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 2,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 70,
      completionRate: 85,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_225"]
  },
  {
    id: "examtimetable-0226",
    code: "NEC-EXAMTIMETABLE-0226",
    title: "Examination Timetable and Rules Viewer - Item 226",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 3,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 71,
      completionRate: 86,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_226"]
  },
  {
    id: "examtimetable-0227",
    code: "NEC-EXAMTIMETABLE-0227",
    title: "Examination Timetable and Rules Viewer - Item 227",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 4,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 72,
      completionRate: 87,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_227"]
  },
  {
    id: "examtimetable-0228",
    code: "NEC-EXAMTIMETABLE-0228",
    title: "Examination Timetable and Rules Viewer - Item 228",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 5,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 73,
      completionRate: 88,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_228"]
  },
  {
    id: "examtimetable-0229",
    code: "NEC-EXAMTIMETABLE-0229",
    title: "Examination Timetable and Rules Viewer - Item 229",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 6,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 74,
      completionRate: 89,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_229"]
  },
  {
    id: "examtimetable-0230",
    code: "NEC-EXAMTIMETABLE-0230",
    title: "Examination Timetable and Rules Viewer - Item 230",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 7,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 75,
      completionRate: 90,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_230"]
  },
  {
    id: "examtimetable-0231",
    code: "NEC-EXAMTIMETABLE-0231",
    title: "Examination Timetable and Rules Viewer - Item 231",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 8,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 76,
      completionRate: 91,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_231"]
  },
  {
    id: "examtimetable-0232",
    code: "NEC-EXAMTIMETABLE-0232",
    title: "Examination Timetable and Rules Viewer - Item 232",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 1,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 77,
      completionRate: 92,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_232"]
  },
  {
    id: "examtimetable-0233",
    code: "NEC-EXAMTIMETABLE-0233",
    title: "Examination Timetable and Rules Viewer - Item 233",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 2,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 78,
      completionRate: 93,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_233"]
  },
  {
    id: "examtimetable-0234",
    code: "NEC-EXAMTIMETABLE-0234",
    title: "Examination Timetable and Rules Viewer - Item 234",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 3,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 79,
      completionRate: 94,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_234"]
  },
  {
    id: "examtimetable-0235",
    code: "NEC-EXAMTIMETABLE-0235",
    title: "Examination Timetable and Rules Viewer - Item 235",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 4,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 80,
      completionRate: 95,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_235"]
  },
  {
    id: "examtimetable-0236",
    code: "NEC-EXAMTIMETABLE-0236",
    title: "Examination Timetable and Rules Viewer - Item 236",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 5,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 81,
      completionRate: 96,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_236"]
  },
  {
    id: "examtimetable-0237",
    code: "NEC-EXAMTIMETABLE-0237",
    title: "Examination Timetable and Rules Viewer - Item 237",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 6,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 82,
      completionRate: 97,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_237"]
  },
  {
    id: "examtimetable-0238",
    code: "NEC-EXAMTIMETABLE-0238",
    title: "Examination Timetable and Rules Viewer - Item 238",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 7,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 83,
      completionRate: 98,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_238"]
  },
  {
    id: "examtimetable-0239",
    code: "NEC-EXAMTIMETABLE-0239",
    title: "Examination Timetable and Rules Viewer - Item 239",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 8,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 84,
      completionRate: 99,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_239"]
  },
  {
    id: "examtimetable-0240",
    code: "NEC-EXAMTIMETABLE-0240",
    title: "Examination Timetable and Rules Viewer - Item 240",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 1,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 85,
      completionRate: 85,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_240"]
  },
  {
    id: "examtimetable-0241",
    code: "NEC-EXAMTIMETABLE-0241",
    title: "Examination Timetable and Rules Viewer - Item 241",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 2,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 86,
      completionRate: 86,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_241"]
  },
  {
    id: "examtimetable-0242",
    code: "NEC-EXAMTIMETABLE-0242",
    title: "Examination Timetable and Rules Viewer - Item 242",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 3,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 87,
      completionRate: 87,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_242"]
  },
  {
    id: "examtimetable-0243",
    code: "NEC-EXAMTIMETABLE-0243",
    title: "Examination Timetable and Rules Viewer - Item 243",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 4,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 88,
      completionRate: 88,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_243"]
  },
  {
    id: "examtimetable-0244",
    code: "NEC-EXAMTIMETABLE-0244",
    title: "Examination Timetable and Rules Viewer - Item 244",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 5,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 89,
      completionRate: 89,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_244"]
  },
  {
    id: "examtimetable-0245",
    code: "NEC-EXAMTIMETABLE-0245",
    title: "Examination Timetable and Rules Viewer - Item 245",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 6,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 90,
      completionRate: 90,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_245"]
  },
  {
    id: "examtimetable-0246",
    code: "NEC-EXAMTIMETABLE-0246",
    title: "Examination Timetable and Rules Viewer - Item 246",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 7,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 91,
      completionRate: 91,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_246"]
  },
  {
    id: "examtimetable-0247",
    code: "NEC-EXAMTIMETABLE-0247",
    title: "Examination Timetable and Rules Viewer - Item 247",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 8,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 92,
      completionRate: 92,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_247"]
  },
  {
    id: "examtimetable-0248",
    code: "NEC-EXAMTIMETABLE-0248",
    title: "Examination Timetable and Rules Viewer - Item 248",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 1,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 93,
      completionRate: 93,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_248"]
  },
  {
    id: "examtimetable-0249",
    code: "NEC-EXAMTIMETABLE-0249",
    title: "Examination Timetable and Rules Viewer - Item 249",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 2,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 94,
      completionRate: 94,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_249"]
  },
  {
    id: "examtimetable-0250",
    code: "NEC-EXAMTIMETABLE-0250",
    title: "Examination Timetable and Rules Viewer - Item 250",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 3,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 70,
      completionRate: 95,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_250"]
  },
  {
    id: "examtimetable-0251",
    code: "NEC-EXAMTIMETABLE-0251",
    title: "Examination Timetable and Rules Viewer - Item 251",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 4,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 71,
      completionRate: 96,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_251"]
  },
  {
    id: "examtimetable-0252",
    code: "NEC-EXAMTIMETABLE-0252",
    title: "Examination Timetable and Rules Viewer - Item 252",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 5,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 72,
      completionRate: 97,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_252"]
  },
  {
    id: "examtimetable-0253",
    code: "NEC-EXAMTIMETABLE-0253",
    title: "Examination Timetable and Rules Viewer - Item 253",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 6,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 73,
      completionRate: 98,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_253"]
  },
  {
    id: "examtimetable-0254",
    code: "NEC-EXAMTIMETABLE-0254",
    title: "Examination Timetable and Rules Viewer - Item 254",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 7,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 74,
      completionRate: 99,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_254"]
  },
  {
    id: "examtimetable-0255",
    code: "NEC-EXAMTIMETABLE-0255",
    title: "Examination Timetable and Rules Viewer - Item 255",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 8,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 75,
      completionRate: 85,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_255"]
  },
  {
    id: "examtimetable-0256",
    code: "NEC-EXAMTIMETABLE-0256",
    title: "Examination Timetable and Rules Viewer - Item 256",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 1,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 76,
      completionRate: 86,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_256"]
  },
  {
    id: "examtimetable-0257",
    code: "NEC-EXAMTIMETABLE-0257",
    title: "Examination Timetable and Rules Viewer - Item 257",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 2,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 77,
      completionRate: 87,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_257"]
  },
  {
    id: "examtimetable-0258",
    code: "NEC-EXAMTIMETABLE-0258",
    title: "Examination Timetable and Rules Viewer - Item 258",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 3,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 78,
      completionRate: 88,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_258"]
  },
  {
    id: "examtimetable-0259",
    code: "NEC-EXAMTIMETABLE-0259",
    title: "Examination Timetable and Rules Viewer - Item 259",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 4,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 79,
      completionRate: 89,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_259"]
  },
  {
    id: "examtimetable-0260",
    code: "NEC-EXAMTIMETABLE-0260",
    title: "Examination Timetable and Rules Viewer - Item 260",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 5,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 80,
      completionRate: 90,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_260"]
  },
  {
    id: "examtimetable-0261",
    code: "NEC-EXAMTIMETABLE-0261",
    title: "Examination Timetable and Rules Viewer - Item 261",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 6,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 81,
      completionRate: 91,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_261"]
  },
  {
    id: "examtimetable-0262",
    code: "NEC-EXAMTIMETABLE-0262",
    title: "Examination Timetable and Rules Viewer - Item 262",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 7,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 82,
      completionRate: 92,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_262"]
  },
  {
    id: "examtimetable-0263",
    code: "NEC-EXAMTIMETABLE-0263",
    title: "Examination Timetable and Rules Viewer - Item 263",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 8,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 83,
      completionRate: 93,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_263"]
  },
  {
    id: "examtimetable-0264",
    code: "NEC-EXAMTIMETABLE-0264",
    title: "Examination Timetable and Rules Viewer - Item 264",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 1,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 84,
      completionRate: 94,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_264"]
  },
  {
    id: "examtimetable-0265",
    code: "NEC-EXAMTIMETABLE-0265",
    title: "Examination Timetable and Rules Viewer - Item 265",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 2,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 85,
      completionRate: 95,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_265"]
  },
  {
    id: "examtimetable-0266",
    code: "NEC-EXAMTIMETABLE-0266",
    title: "Examination Timetable and Rules Viewer - Item 266",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 3,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 86,
      completionRate: 96,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_266"]
  },
  {
    id: "examtimetable-0267",
    code: "NEC-EXAMTIMETABLE-0267",
    title: "Examination Timetable and Rules Viewer - Item 267",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 4,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 87,
      completionRate: 97,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_267"]
  },
  {
    id: "examtimetable-0268",
    code: "NEC-EXAMTIMETABLE-0268",
    title: "Examination Timetable and Rules Viewer - Item 268",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 5,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 88,
      completionRate: 98,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_268"]
  },
  {
    id: "examtimetable-0269",
    code: "NEC-EXAMTIMETABLE-0269",
    title: "Examination Timetable and Rules Viewer - Item 269",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 6,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 89,
      completionRate: 99,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_269"]
  },
  {
    id: "examtimetable-0270",
    code: "NEC-EXAMTIMETABLE-0270",
    title: "Examination Timetable and Rules Viewer - Item 270",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 7,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 90,
      completionRate: 85,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_270"]
  },
  {
    id: "examtimetable-0271",
    code: "NEC-EXAMTIMETABLE-0271",
    title: "Examination Timetable and Rules Viewer - Item 271",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 8,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 91,
      completionRate: 86,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_271"]
  },
  {
    id: "examtimetable-0272",
    code: "NEC-EXAMTIMETABLE-0272",
    title: "Examination Timetable and Rules Viewer - Item 272",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 1,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 92,
      completionRate: 87,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_272"]
  },
  {
    id: "examtimetable-0273",
    code: "NEC-EXAMTIMETABLE-0273",
    title: "Examination Timetable and Rules Viewer - Item 273",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 2,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 93,
      completionRate: 88,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_273"]
  },
  {
    id: "examtimetable-0274",
    code: "NEC-EXAMTIMETABLE-0274",
    title: "Examination Timetable and Rules Viewer - Item 274",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 3,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 94,
      completionRate: 89,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_274"]
  },
  {
    id: "examtimetable-0275",
    code: "NEC-EXAMTIMETABLE-0275",
    title: "Examination Timetable and Rules Viewer - Item 275",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 4,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 70,
      completionRate: 90,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_275"]
  },
  {
    id: "examtimetable-0276",
    code: "NEC-EXAMTIMETABLE-0276",
    title: "Examination Timetable and Rules Viewer - Item 276",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 5,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 71,
      completionRate: 91,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_276"]
  },
  {
    id: "examtimetable-0277",
    code: "NEC-EXAMTIMETABLE-0277",
    title: "Examination Timetable and Rules Viewer - Item 277",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 6,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 72,
      completionRate: 92,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_277"]
  },
  {
    id: "examtimetable-0278",
    code: "NEC-EXAMTIMETABLE-0278",
    title: "Examination Timetable and Rules Viewer - Item 278",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 7,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 73,
      completionRate: 93,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_278"]
  },
  {
    id: "examtimetable-0279",
    code: "NEC-EXAMTIMETABLE-0279",
    title: "Examination Timetable and Rules Viewer - Item 279",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 8,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 74,
      completionRate: 94,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_279"]
  },
  {
    id: "examtimetable-0280",
    code: "NEC-EXAMTIMETABLE-0280",
    title: "Examination Timetable and Rules Viewer - Item 280",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 1,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 75,
      completionRate: 95,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_280"]
  },
  {
    id: "examtimetable-0281",
    code: "NEC-EXAMTIMETABLE-0281",
    title: "Examination Timetable and Rules Viewer - Item 281",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 2,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 76,
      completionRate: 96,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_281"]
  },
  {
    id: "examtimetable-0282",
    code: "NEC-EXAMTIMETABLE-0282",
    title: "Examination Timetable and Rules Viewer - Item 282",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 3,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 77,
      completionRate: 97,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_282"]
  },
  {
    id: "examtimetable-0283",
    code: "NEC-EXAMTIMETABLE-0283",
    title: "Examination Timetable and Rules Viewer - Item 283",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 4,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 78,
      completionRate: 98,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_283"]
  },
  {
    id: "examtimetable-0284",
    code: "NEC-EXAMTIMETABLE-0284",
    title: "Examination Timetable and Rules Viewer - Item 284",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 5,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 79,
      completionRate: 99,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_284"]
  },
  {
    id: "examtimetable-0285",
    code: "NEC-EXAMTIMETABLE-0285",
    title: "Examination Timetable and Rules Viewer - Item 285",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 6,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 80,
      completionRate: 85,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_285"]
  },
  {
    id: "examtimetable-0286",
    code: "NEC-EXAMTIMETABLE-0286",
    title: "Examination Timetable and Rules Viewer - Item 286",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 7,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 81,
      completionRate: 86,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_286"]
  },
  {
    id: "examtimetable-0287",
    code: "NEC-EXAMTIMETABLE-0287",
    title: "Examination Timetable and Rules Viewer - Item 287",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 8,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 82,
      completionRate: 87,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_287"]
  },
  {
    id: "examtimetable-0288",
    code: "NEC-EXAMTIMETABLE-0288",
    title: "Examination Timetable and Rules Viewer - Item 288",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 1,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 83,
      completionRate: 88,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_288"]
  },
  {
    id: "examtimetable-0289",
    code: "NEC-EXAMTIMETABLE-0289",
    title: "Examination Timetable and Rules Viewer - Item 289",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 2,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 84,
      completionRate: 89,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_289"]
  },
  {
    id: "examtimetable-0290",
    code: "NEC-EXAMTIMETABLE-0290",
    title: "Examination Timetable and Rules Viewer - Item 290",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 3,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 85,
      completionRate: 90,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_290"]
  },
  {
    id: "examtimetable-0291",
    code: "NEC-EXAMTIMETABLE-0291",
    title: "Examination Timetable and Rules Viewer - Item 291",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 4,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 86,
      completionRate: 91,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_291"]
  },
  {
    id: "examtimetable-0292",
    code: "NEC-EXAMTIMETABLE-0292",
    title: "Examination Timetable and Rules Viewer - Item 292",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 5,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 87,
      completionRate: 92,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_292"]
  },
  {
    id: "examtimetable-0293",
    code: "NEC-EXAMTIMETABLE-0293",
    title: "Examination Timetable and Rules Viewer - Item 293",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 6,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 88,
      completionRate: 93,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_293"]
  },
  {
    id: "examtimetable-0294",
    code: "NEC-EXAMTIMETABLE-0294",
    title: "Examination Timetable and Rules Viewer - Item 294",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 7,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 89,
      completionRate: 94,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_294"]
  },
  {
    id: "examtimetable-0295",
    code: "NEC-EXAMTIMETABLE-0295",
    title: "Examination Timetable and Rules Viewer - Item 295",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 8,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 90,
      completionRate: 95,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_295"]
  },
  {
    id: "examtimetable-0296",
    code: "NEC-EXAMTIMETABLE-0296",
    title: "Examination Timetable and Rules Viewer - Item 296",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 1,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 91,
      completionRate: 96,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_296"]
  },
  {
    id: "examtimetable-0297",
    code: "NEC-EXAMTIMETABLE-0297",
    title: "Examination Timetable and Rules Viewer - Item 297",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 2,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 92,
      completionRate: 97,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_297"]
  },
  {
    id: "examtimetable-0298",
    code: "NEC-EXAMTIMETABLE-0298",
    title: "Examination Timetable and Rules Viewer - Item 298",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 3,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 93,
      completionRate: 98,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_298"]
  },
  {
    id: "examtimetable-0299",
    code: "NEC-EXAMTIMETABLE-0299",
    title: "Examination Timetable and Rules Viewer - Item 299",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 4,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 94,
      completionRate: 99,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_299"]
  },
  {
    id: "examtimetable-0300",
    code: "NEC-EXAMTIMETABLE-0300",
    title: "Examination Timetable and Rules Viewer - Item 300",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 5,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 70,
      completionRate: 85,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_300"]
  },
  {
    id: "examtimetable-0301",
    code: "NEC-EXAMTIMETABLE-0301",
    title: "Examination Timetable and Rules Viewer - Item 301",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 6,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 71,
      completionRate: 86,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_301"]
  },
  {
    id: "examtimetable-0302",
    code: "NEC-EXAMTIMETABLE-0302",
    title: "Examination Timetable and Rules Viewer - Item 302",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 7,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 72,
      completionRate: 87,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_302"]
  },
  {
    id: "examtimetable-0303",
    code: "NEC-EXAMTIMETABLE-0303",
    title: "Examination Timetable and Rules Viewer - Item 303",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 8,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 73,
      completionRate: 88,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_303"]
  },
  {
    id: "examtimetable-0304",
    code: "NEC-EXAMTIMETABLE-0304",
    title: "Examination Timetable and Rules Viewer - Item 304",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 1,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 74,
      completionRate: 89,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_304"]
  },
  {
    id: "examtimetable-0305",
    code: "NEC-EXAMTIMETABLE-0305",
    title: "Examination Timetable and Rules Viewer - Item 305",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 2,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 75,
      completionRate: 90,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_305"]
  },
  {
    id: "examtimetable-0306",
    code: "NEC-EXAMTIMETABLE-0306",
    title: "Examination Timetable and Rules Viewer - Item 306",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 3,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 76,
      completionRate: 91,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_306"]
  },
  {
    id: "examtimetable-0307",
    code: "NEC-EXAMTIMETABLE-0307",
    title: "Examination Timetable and Rules Viewer - Item 307",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 4,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 77,
      completionRate: 92,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_307"]
  },
  {
    id: "examtimetable-0308",
    code: "NEC-EXAMTIMETABLE-0308",
    title: "Examination Timetable and Rules Viewer - Item 308",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 5,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 78,
      completionRate: 93,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_308"]
  },
  {
    id: "examtimetable-0309",
    code: "NEC-EXAMTIMETABLE-0309",
    title: "Examination Timetable and Rules Viewer - Item 309",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 6,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 79,
      completionRate: 94,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_309"]
  },
  {
    id: "examtimetable-0310",
    code: "NEC-EXAMTIMETABLE-0310",
    title: "Examination Timetable and Rules Viewer - Item 310",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 7,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 80,
      completionRate: 95,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_310"]
  },
  {
    id: "examtimetable-0311",
    code: "NEC-EXAMTIMETABLE-0311",
    title: "Examination Timetable and Rules Viewer - Item 311",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 8,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 81,
      completionRate: 96,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_311"]
  },
  {
    id: "examtimetable-0312",
    code: "NEC-EXAMTIMETABLE-0312",
    title: "Examination Timetable and Rules Viewer - Item 312",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 1,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 82,
      completionRate: 97,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_312"]
  },
  {
    id: "examtimetable-0313",
    code: "NEC-EXAMTIMETABLE-0313",
    title: "Examination Timetable and Rules Viewer - Item 313",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 2,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 83,
      completionRate: 98,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_313"]
  },
  {
    id: "examtimetable-0314",
    code: "NEC-EXAMTIMETABLE-0314",
    title: "Examination Timetable and Rules Viewer - Item 314",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 3,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 84,
      completionRate: 99,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_314"]
  },
  {
    id: "examtimetable-0315",
    code: "NEC-EXAMTIMETABLE-0315",
    title: "Examination Timetable and Rules Viewer - Item 315",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 4,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 85,
      completionRate: 85,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_315"]
  },
  {
    id: "examtimetable-0316",
    code: "NEC-EXAMTIMETABLE-0316",
    title: "Examination Timetable and Rules Viewer - Item 316",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 5,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 86,
      completionRate: 86,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_316"]
  },
  {
    id: "examtimetable-0317",
    code: "NEC-EXAMTIMETABLE-0317",
    title: "Examination Timetable and Rules Viewer - Item 317",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 6,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 87,
      completionRate: 87,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_317"]
  },
  {
    id: "examtimetable-0318",
    code: "NEC-EXAMTIMETABLE-0318",
    title: "Examination Timetable and Rules Viewer - Item 318",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 7,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 88,
      completionRate: 88,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_318"]
  },
  {
    id: "examtimetable-0319",
    code: "NEC-EXAMTIMETABLE-0319",
    title: "Examination Timetable and Rules Viewer - Item 319",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 8,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 89,
      completionRate: 89,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_319"]
  },
  {
    id: "examtimetable-0320",
    code: "NEC-EXAMTIMETABLE-0320",
    title: "Examination Timetable and Rules Viewer - Item 320",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 1,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 90,
      completionRate: 90,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_320"]
  },
  {
    id: "examtimetable-0321",
    code: "NEC-EXAMTIMETABLE-0321",
    title: "Examination Timetable and Rules Viewer - Item 321",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 2,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 91,
      completionRate: 91,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_321"]
  },
  {
    id: "examtimetable-0322",
    code: "NEC-EXAMTIMETABLE-0322",
    title: "Examination Timetable and Rules Viewer - Item 322",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 3,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 92,
      completionRate: 92,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_322"]
  },
  {
    id: "examtimetable-0323",
    code: "NEC-EXAMTIMETABLE-0323",
    title: "Examination Timetable and Rules Viewer - Item 323",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 4,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 93,
      completionRate: 93,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_323"]
  },
  {
    id: "examtimetable-0324",
    code: "NEC-EXAMTIMETABLE-0324",
    title: "Examination Timetable and Rules Viewer - Item 324",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 5,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 94,
      completionRate: 94,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_324"]
  },
  {
    id: "examtimetable-0325",
    code: "NEC-EXAMTIMETABLE-0325",
    title: "Examination Timetable and Rules Viewer - Item 325",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 6,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 70,
      completionRate: 95,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_325"]
  },
  {
    id: "examtimetable-0326",
    code: "NEC-EXAMTIMETABLE-0326",
    title: "Examination Timetable and Rules Viewer - Item 326",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 7,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 71,
      completionRate: 96,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_326"]
  },
  {
    id: "examtimetable-0327",
    code: "NEC-EXAMTIMETABLE-0327",
    title: "Examination Timetable and Rules Viewer - Item 327",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 8,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 72,
      completionRate: 97,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_327"]
  },
  {
    id: "examtimetable-0328",
    code: "NEC-EXAMTIMETABLE-0328",
    title: "Examination Timetable and Rules Viewer - Item 328",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 1,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 73,
      completionRate: 98,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_328"]
  },
  {
    id: "examtimetable-0329",
    code: "NEC-EXAMTIMETABLE-0329",
    title: "Examination Timetable and Rules Viewer - Item 329",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 2,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 74,
      completionRate: 99,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_329"]
  },
  {
    id: "examtimetable-0330",
    code: "NEC-EXAMTIMETABLE-0330",
    title: "Examination Timetable and Rules Viewer - Item 330",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 3,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 75,
      completionRate: 85,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_330"]
  },
  {
    id: "examtimetable-0331",
    code: "NEC-EXAMTIMETABLE-0331",
    title: "Examination Timetable and Rules Viewer - Item 331",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 4,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 76,
      completionRate: 86,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_331"]
  },
  {
    id: "examtimetable-0332",
    code: "NEC-EXAMTIMETABLE-0332",
    title: "Examination Timetable and Rules Viewer - Item 332",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 5,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 77,
      completionRate: 87,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_332"]
  },
  {
    id: "examtimetable-0333",
    code: "NEC-EXAMTIMETABLE-0333",
    title: "Examination Timetable and Rules Viewer - Item 333",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 6,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 78,
      completionRate: 88,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_333"]
  },
  {
    id: "examtimetable-0334",
    code: "NEC-EXAMTIMETABLE-0334",
    title: "Examination Timetable and Rules Viewer - Item 334",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 7,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 79,
      completionRate: 89,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_334"]
  },
  {
    id: "examtimetable-0335",
    code: "NEC-EXAMTIMETABLE-0335",
    title: "Examination Timetable and Rules Viewer - Item 335",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 8,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 80,
      completionRate: 90,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_335"]
  },
  {
    id: "examtimetable-0336",
    code: "NEC-EXAMTIMETABLE-0336",
    title: "Examination Timetable and Rules Viewer - Item 336",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 1,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 81,
      completionRate: 91,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_336"]
  },
  {
    id: "examtimetable-0337",
    code: "NEC-EXAMTIMETABLE-0337",
    title: "Examination Timetable and Rules Viewer - Item 337",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 2,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 82,
      completionRate: 92,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_337"]
  },
  {
    id: "examtimetable-0338",
    code: "NEC-EXAMTIMETABLE-0338",
    title: "Examination Timetable and Rules Viewer - Item 338",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 3,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 83,
      completionRate: 93,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_338"]
  },
  {
    id: "examtimetable-0339",
    code: "NEC-EXAMTIMETABLE-0339",
    title: "Examination Timetable and Rules Viewer - Item 339",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 4,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 84,
      completionRate: 94,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_339"]
  },
  {
    id: "examtimetable-0340",
    code: "NEC-EXAMTIMETABLE-0340",
    title: "Examination Timetable and Rules Viewer - Item 340",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 5,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 85,
      completionRate: 95,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_340"]
  },
  {
    id: "examtimetable-0341",
    code: "NEC-EXAMTIMETABLE-0341",
    title: "Examination Timetable and Rules Viewer - Item 341",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 6,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 86,
      completionRate: 96,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_341"]
  },
  {
    id: "examtimetable-0342",
    code: "NEC-EXAMTIMETABLE-0342",
    title: "Examination Timetable and Rules Viewer - Item 342",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 7,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 87,
      completionRate: 97,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_342"]
  },
  {
    id: "examtimetable-0343",
    code: "NEC-EXAMTIMETABLE-0343",
    title: "Examination Timetable and Rules Viewer - Item 343",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 8,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 88,
      completionRate: 98,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_343"]
  },
  {
    id: "examtimetable-0344",
    code: "NEC-EXAMTIMETABLE-0344",
    title: "Examination Timetable and Rules Viewer - Item 344",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 1,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 89,
      completionRate: 99,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_344"]
  },
  {
    id: "examtimetable-0345",
    code: "NEC-EXAMTIMETABLE-0345",
    title: "Examination Timetable and Rules Viewer - Item 345",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 2,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 90,
      completionRate: 85,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_345"]
  },
  {
    id: "examtimetable-0346",
    code: "NEC-EXAMTIMETABLE-0346",
    title: "Examination Timetable and Rules Viewer - Item 346",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 3,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 91,
      completionRate: 86,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_346"]
  },
  {
    id: "examtimetable-0347",
    code: "NEC-EXAMTIMETABLE-0347",
    title: "Examination Timetable and Rules Viewer - Item 347",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 4,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 92,
      completionRate: 87,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_347"]
  },
  {
    id: "examtimetable-0348",
    code: "NEC-EXAMTIMETABLE-0348",
    title: "Examination Timetable and Rules Viewer - Item 348",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 5,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 93,
      completionRate: 88,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_348"]
  },
  {
    id: "examtimetable-0349",
    code: "NEC-EXAMTIMETABLE-0349",
    title: "Examination Timetable and Rules Viewer - Item 349",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 6,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 94,
      completionRate: 89,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_349"]
  },
  {
    id: "examtimetable-0350",
    code: "NEC-EXAMTIMETABLE-0350",
    title: "Examination Timetable and Rules Viewer - Item 350",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 7,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 70,
      completionRate: 90,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_350"]
  },
  {
    id: "examtimetable-0351",
    code: "NEC-EXAMTIMETABLE-0351",
    title: "Examination Timetable and Rules Viewer - Item 351",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 8,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 71,
      completionRate: 91,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_351"]
  },
  {
    id: "examtimetable-0352",
    code: "NEC-EXAMTIMETABLE-0352",
    title: "Examination Timetable and Rules Viewer - Item 352",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 1,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 72,
      completionRate: 92,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_352"]
  },
  {
    id: "examtimetable-0353",
    code: "NEC-EXAMTIMETABLE-0353",
    title: "Examination Timetable and Rules Viewer - Item 353",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 2,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 73,
      completionRate: 93,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_353"]
  },
  {
    id: "examtimetable-0354",
    code: "NEC-EXAMTIMETABLE-0354",
    title: "Examination Timetable and Rules Viewer - Item 354",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 3,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 74,
      completionRate: 94,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_354"]
  },
  {
    id: "examtimetable-0355",
    code: "NEC-EXAMTIMETABLE-0355",
    title: "Examination Timetable and Rules Viewer - Item 355",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 4,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 75,
      completionRate: 95,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_355"]
  },
  {
    id: "examtimetable-0356",
    code: "NEC-EXAMTIMETABLE-0356",
    title: "Examination Timetable and Rules Viewer - Item 356",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 5,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 76,
      completionRate: 96,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_356"]
  },
  {
    id: "examtimetable-0357",
    code: "NEC-EXAMTIMETABLE-0357",
    title: "Examination Timetable and Rules Viewer - Item 357",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 6,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 77,
      completionRate: 97,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_357"]
  },
  {
    id: "examtimetable-0358",
    code: "NEC-EXAMTIMETABLE-0358",
    title: "Examination Timetable and Rules Viewer - Item 358",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 7,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 78,
      completionRate: 98,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_358"]
  },
  {
    id: "examtimetable-0359",
    code: "NEC-EXAMTIMETABLE-0359",
    title: "Examination Timetable and Rules Viewer - Item 359",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 8,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 79,
      completionRate: 99,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_359"]
  },
  {
    id: "examtimetable-0360",
    code: "NEC-EXAMTIMETABLE-0360",
    title: "Examination Timetable and Rules Viewer - Item 360",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 1,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 80,
      completionRate: 85,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_360"]
  },
  {
    id: "examtimetable-0361",
    code: "NEC-EXAMTIMETABLE-0361",
    title: "Examination Timetable and Rules Viewer - Item 361",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 2,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 81,
      completionRate: 86,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_361"]
  },
  {
    id: "examtimetable-0362",
    code: "NEC-EXAMTIMETABLE-0362",
    title: "Examination Timetable and Rules Viewer - Item 362",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 3,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 82,
      completionRate: 87,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_362"]
  },
  {
    id: "examtimetable-0363",
    code: "NEC-EXAMTIMETABLE-0363",
    title: "Examination Timetable and Rules Viewer - Item 363",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 4,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 83,
      completionRate: 88,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_363"]
  },
  {
    id: "examtimetable-0364",
    code: "NEC-EXAMTIMETABLE-0364",
    title: "Examination Timetable and Rules Viewer - Item 364",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 5,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 84,
      completionRate: 89,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_364"]
  },
  {
    id: "examtimetable-0365",
    code: "NEC-EXAMTIMETABLE-0365",
    title: "Examination Timetable and Rules Viewer - Item 365",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 6,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 85,
      completionRate: 90,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_365"]
  },
  {
    id: "examtimetable-0366",
    code: "NEC-EXAMTIMETABLE-0366",
    title: "Examination Timetable and Rules Viewer - Item 366",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 7,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 86,
      completionRate: 91,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_366"]
  },
  {
    id: "examtimetable-0367",
    code: "NEC-EXAMTIMETABLE-0367",
    title: "Examination Timetable and Rules Viewer - Item 367",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 8,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 87,
      completionRate: 92,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_367"]
  },
  {
    id: "examtimetable-0368",
    code: "NEC-EXAMTIMETABLE-0368",
    title: "Examination Timetable and Rules Viewer - Item 368",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 1,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 88,
      completionRate: 93,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_368"]
  },
  {
    id: "examtimetable-0369",
    code: "NEC-EXAMTIMETABLE-0369",
    title: "Examination Timetable and Rules Viewer - Item 369",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 2,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 89,
      completionRate: 94,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_369"]
  },
  {
    id: "examtimetable-0370",
    code: "NEC-EXAMTIMETABLE-0370",
    title: "Examination Timetable and Rules Viewer - Item 370",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 3,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 90,
      completionRate: 95,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_370"]
  },
  {
    id: "examtimetable-0371",
    code: "NEC-EXAMTIMETABLE-0371",
    title: "Examination Timetable and Rules Viewer - Item 371",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 4,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 91,
      completionRate: 96,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_371"]
  },
  {
    id: "examtimetable-0372",
    code: "NEC-EXAMTIMETABLE-0372",
    title: "Examination Timetable and Rules Viewer - Item 372",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 5,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 92,
      completionRate: 97,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_372"]
  },
  {
    id: "examtimetable-0373",
    code: "NEC-EXAMTIMETABLE-0373",
    title: "Examination Timetable and Rules Viewer - Item 373",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 6,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 93,
      completionRate: 98,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_373"]
  },
  {
    id: "examtimetable-0374",
    code: "NEC-EXAMTIMETABLE-0374",
    title: "Examination Timetable and Rules Viewer - Item 374",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 7,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 94,
      completionRate: 99,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_374"]
  },
  {
    id: "examtimetable-0375",
    code: "NEC-EXAMTIMETABLE-0375",
    title: "Examination Timetable and Rules Viewer - Item 375",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 8,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 70,
      completionRate: 85,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_375"]
  },
  {
    id: "examtimetable-0376",
    code: "NEC-EXAMTIMETABLE-0376",
    title: "Examination Timetable and Rules Viewer - Item 376",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 1,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 71,
      completionRate: 86,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_376"]
  },
  {
    id: "examtimetable-0377",
    code: "NEC-EXAMTIMETABLE-0377",
    title: "Examination Timetable and Rules Viewer - Item 377",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 2,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 72,
      completionRate: 87,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_377"]
  },
  {
    id: "examtimetable-0378",
    code: "NEC-EXAMTIMETABLE-0378",
    title: "Examination Timetable and Rules Viewer - Item 378",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 3,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 73,
      completionRate: 88,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_378"]
  },
  {
    id: "examtimetable-0379",
    code: "NEC-EXAMTIMETABLE-0379",
    title: "Examination Timetable and Rules Viewer - Item 379",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 4,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 74,
      completionRate: 89,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_379"]
  },
  {
    id: "examtimetable-0380",
    code: "NEC-EXAMTIMETABLE-0380",
    title: "Examination Timetable and Rules Viewer - Item 380",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 5,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 75,
      completionRate: 90,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_380"]
  },
  {
    id: "examtimetable-0381",
    code: "NEC-EXAMTIMETABLE-0381",
    title: "Examination Timetable and Rules Viewer - Item 381",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 6,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 76,
      completionRate: 91,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_381"]
  },
  {
    id: "examtimetable-0382",
    code: "NEC-EXAMTIMETABLE-0382",
    title: "Examination Timetable and Rules Viewer - Item 382",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 7,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 77,
      completionRate: 92,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_382"]
  },
  {
    id: "examtimetable-0383",
    code: "NEC-EXAMTIMETABLE-0383",
    title: "Examination Timetable and Rules Viewer - Item 383",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 8,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 78,
      completionRate: 93,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_383"]
  },
  {
    id: "examtimetable-0384",
    code: "NEC-EXAMTIMETABLE-0384",
    title: "Examination Timetable and Rules Viewer - Item 384",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 1,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 79,
      completionRate: 94,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_384"]
  },
  {
    id: "examtimetable-0385",
    code: "NEC-EXAMTIMETABLE-0385",
    title: "Examination Timetable and Rules Viewer - Item 385",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 2,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 80,
      completionRate: 95,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_385"]
  },
  {
    id: "examtimetable-0386",
    code: "NEC-EXAMTIMETABLE-0386",
    title: "Examination Timetable and Rules Viewer - Item 386",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 3,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 81,
      completionRate: 96,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_386"]
  },
  {
    id: "examtimetable-0387",
    code: "NEC-EXAMTIMETABLE-0387",
    title: "Examination Timetable and Rules Viewer - Item 387",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 4,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 82,
      completionRate: 97,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_387"]
  },
  {
    id: "examtimetable-0388",
    code: "NEC-EXAMTIMETABLE-0388",
    title: "Examination Timetable and Rules Viewer - Item 388",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 5,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 83,
      completionRate: 98,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_388"]
  },
  {
    id: "examtimetable-0389",
    code: "NEC-EXAMTIMETABLE-0389",
    title: "Examination Timetable and Rules Viewer - Item 389",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 6,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 84,
      completionRate: 99,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_389"]
  },
  {
    id: "examtimetable-0390",
    code: "NEC-EXAMTIMETABLE-0390",
    title: "Examination Timetable and Rules Viewer - Item 390",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 7,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 85,
      completionRate: 85,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_390"]
  },
  {
    id: "examtimetable-0391",
    code: "NEC-EXAMTIMETABLE-0391",
    title: "Examination Timetable and Rules Viewer - Item 391",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 8,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 86,
      completionRate: 86,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_391"]
  },
  {
    id: "examtimetable-0392",
    code: "NEC-EXAMTIMETABLE-0392",
    title: "Examination Timetable and Rules Viewer - Item 392",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 1,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 87,
      completionRate: 87,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_392"]
  },
  {
    id: "examtimetable-0393",
    code: "NEC-EXAMTIMETABLE-0393",
    title: "Examination Timetable and Rules Viewer - Item 393",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 2,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 88,
      completionRate: 88,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_393"]
  },
  {
    id: "examtimetable-0394",
    code: "NEC-EXAMTIMETABLE-0394",
    title: "Examination Timetable and Rules Viewer - Item 394",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 3,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 89,
      completionRate: 89,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_394"]
  },
  {
    id: "examtimetable-0395",
    code: "NEC-EXAMTIMETABLE-0395",
    title: "Examination Timetable and Rules Viewer - Item 395",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 4,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 90,
      completionRate: 90,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_395"]
  },
  {
    id: "examtimetable-0396",
    code: "NEC-EXAMTIMETABLE-0396",
    title: "Examination Timetable and Rules Viewer - Item 396",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 5,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 91,
      completionRate: 91,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_396"]
  },
  {
    id: "examtimetable-0397",
    code: "NEC-EXAMTIMETABLE-0397",
    title: "Examination Timetable and Rules Viewer - Item 397",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 6,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 92,
      completionRate: 92,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_397"]
  },
  {
    id: "examtimetable-0398",
    code: "NEC-EXAMTIMETABLE-0398",
    title: "Examination Timetable and Rules Viewer - Item 398",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 7,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 93,
      completionRate: 93,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_398"]
  },
  {
    id: "examtimetable-0399",
    code: "NEC-EXAMTIMETABLE-0399",
    title: "Examination Timetable and Rules Viewer - Item 399",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 8,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 94,
      completionRate: 94,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_399"]
  },
  {
    id: "examtimetable-0400",
    code: "NEC-EXAMTIMETABLE-0400",
    title: "Examination Timetable and Rules Viewer - Item 400",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 1,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 70,
      completionRate: 95,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_400"]
  },
  {
    id: "examtimetable-0401",
    code: "NEC-EXAMTIMETABLE-0401",
    title: "Examination Timetable and Rules Viewer - Item 401",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 2,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 71,
      completionRate: 96,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_401"]
  },
  {
    id: "examtimetable-0402",
    code: "NEC-EXAMTIMETABLE-0402",
    title: "Examination Timetable and Rules Viewer - Item 402",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 3,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 72,
      completionRate: 97,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_402"]
  },
  {
    id: "examtimetable-0403",
    code: "NEC-EXAMTIMETABLE-0403",
    title: "Examination Timetable and Rules Viewer - Item 403",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 4,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 73,
      completionRate: 98,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_403"]
  },
  {
    id: "examtimetable-0404",
    code: "NEC-EXAMTIMETABLE-0404",
    title: "Examination Timetable and Rules Viewer - Item 404",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 5,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 74,
      completionRate: 99,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_404"]
  },
  {
    id: "examtimetable-0405",
    code: "NEC-EXAMTIMETABLE-0405",
    title: "Examination Timetable and Rules Viewer - Item 405",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 6,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 75,
      completionRate: 85,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_405"]
  },
  {
    id: "examtimetable-0406",
    code: "NEC-EXAMTIMETABLE-0406",
    title: "Examination Timetable and Rules Viewer - Item 406",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 7,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 76,
      completionRate: 86,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_406"]
  },
  {
    id: "examtimetable-0407",
    code: "NEC-EXAMTIMETABLE-0407",
    title: "Examination Timetable and Rules Viewer - Item 407",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 8,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 77,
      completionRate: 87,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_407"]
  },
  {
    id: "examtimetable-0408",
    code: "NEC-EXAMTIMETABLE-0408",
    title: "Examination Timetable and Rules Viewer - Item 408",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 1,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 78,
      completionRate: 88,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_408"]
  },
  {
    id: "examtimetable-0409",
    code: "NEC-EXAMTIMETABLE-0409",
    title: "Examination Timetable and Rules Viewer - Item 409",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 2,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 79,
      completionRate: 89,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_409"]
  },
  {
    id: "examtimetable-0410",
    code: "NEC-EXAMTIMETABLE-0410",
    title: "Examination Timetable and Rules Viewer - Item 410",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 3,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 80,
      completionRate: 90,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_410"]
  },
  {
    id: "examtimetable-0411",
    code: "NEC-EXAMTIMETABLE-0411",
    title: "Examination Timetable and Rules Viewer - Item 411",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 4,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 81,
      completionRate: 91,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_411"]
  },
  {
    id: "examtimetable-0412",
    code: "NEC-EXAMTIMETABLE-0412",
    title: "Examination Timetable and Rules Viewer - Item 412",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 5,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 82,
      completionRate: 92,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_412"]
  },
  {
    id: "examtimetable-0413",
    code: "NEC-EXAMTIMETABLE-0413",
    title: "Examination Timetable and Rules Viewer - Item 413",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 6,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 83,
      completionRate: 93,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_413"]
  },
  {
    id: "examtimetable-0414",
    code: "NEC-EXAMTIMETABLE-0414",
    title: "Examination Timetable and Rules Viewer - Item 414",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 7,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 84,
      completionRate: 94,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_414"]
  },
  {
    id: "examtimetable-0415",
    code: "NEC-EXAMTIMETABLE-0415",
    title: "Examination Timetable and Rules Viewer - Item 415",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 8,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 85,
      completionRate: 95,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_415"]
  },
  {
    id: "examtimetable-0416",
    code: "NEC-EXAMTIMETABLE-0416",
    title: "Examination Timetable and Rules Viewer - Item 416",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 1,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 86,
      completionRate: 96,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_416"]
  },
  {
    id: "examtimetable-0417",
    code: "NEC-EXAMTIMETABLE-0417",
    title: "Examination Timetable and Rules Viewer - Item 417",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 2,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 87,
      completionRate: 97,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_417"]
  },
  {
    id: "examtimetable-0418",
    code: "NEC-EXAMTIMETABLE-0418",
    title: "Examination Timetable and Rules Viewer - Item 418",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 3,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 88,
      completionRate: 98,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_418"]
  },
  {
    id: "examtimetable-0419",
    code: "NEC-EXAMTIMETABLE-0419",
    title: "Examination Timetable and Rules Viewer - Item 419",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 4,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 89,
      completionRate: 99,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_419"]
  },
  {
    id: "examtimetable-0420",
    code: "NEC-EXAMTIMETABLE-0420",
    title: "Examination Timetable and Rules Viewer - Item 420",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 5,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 90,
      completionRate: 85,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_420"]
  },
  {
    id: "examtimetable-0421",
    code: "NEC-EXAMTIMETABLE-0421",
    title: "Examination Timetable and Rules Viewer - Item 421",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 6,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 91,
      completionRate: 86,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_421"]
  },
  {
    id: "examtimetable-0422",
    code: "NEC-EXAMTIMETABLE-0422",
    title: "Examination Timetable and Rules Viewer - Item 422",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 7,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 92,
      completionRate: 87,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_422"]
  },
  {
    id: "examtimetable-0423",
    code: "NEC-EXAMTIMETABLE-0423",
    title: "Examination Timetable and Rules Viewer - Item 423",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 8,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 93,
      completionRate: 88,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_423"]
  },
  {
    id: "examtimetable-0424",
    code: "NEC-EXAMTIMETABLE-0424",
    title: "Examination Timetable and Rules Viewer - Item 424",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 1,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 94,
      completionRate: 89,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_424"]
  },
  {
    id: "examtimetable-0425",
    code: "NEC-EXAMTIMETABLE-0425",
    title: "Examination Timetable and Rules Viewer - Item 425",
    category: "EXAMTIMETABLE_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 2,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 70,
      completionRate: 90,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_425"]
  },
];

export function filterEXAMTIMETABLEBySemester(semester: number): AcademicEntityItem[] {
  return EXAMTIMETABLE_REGISTRY.filter(item => item.semester === semester);
}

export function computeEXAMTIMETABLEAverageCredits(): number {
  const total = EXAMTIMETABLE_REGISTRY.reduce((acc, curr) => acc + curr.credits, 0);
  return total / EXAMTIMETABLE_REGISTRY.length;
}
