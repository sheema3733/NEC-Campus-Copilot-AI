/**
 * Narasaraopeta Engineering College (Autonomous) — Frontend Enterprise Module
 * Module: Interactive 3D Study Hub and Quiz Deck (STUDYHUB)
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

export const STUDYHUB_REGISTRY: AcademicEntityItem[] = [
  {
    id: "studyhub-0001",
    code: "NEC-STUDYHUB-0001",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 1",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0002",
    code: "NEC-STUDYHUB-0002",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 2",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0003",
    code: "NEC-STUDYHUB-0003",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 3",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0004",
    code: "NEC-STUDYHUB-0004",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 4",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0005",
    code: "NEC-STUDYHUB-0005",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 5",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0006",
    code: "NEC-STUDYHUB-0006",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 6",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0007",
    code: "NEC-STUDYHUB-0007",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 7",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0008",
    code: "NEC-STUDYHUB-0008",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 8",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0009",
    code: "NEC-STUDYHUB-0009",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 9",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0010",
    code: "NEC-STUDYHUB-0010",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 10",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0011",
    code: "NEC-STUDYHUB-0011",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 11",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0012",
    code: "NEC-STUDYHUB-0012",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 12",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0013",
    code: "NEC-STUDYHUB-0013",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 13",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0014",
    code: "NEC-STUDYHUB-0014",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 14",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0015",
    code: "NEC-STUDYHUB-0015",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 15",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0016",
    code: "NEC-STUDYHUB-0016",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 16",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0017",
    code: "NEC-STUDYHUB-0017",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 17",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0018",
    code: "NEC-STUDYHUB-0018",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 18",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0019",
    code: "NEC-STUDYHUB-0019",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 19",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0020",
    code: "NEC-STUDYHUB-0020",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 20",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0021",
    code: "NEC-STUDYHUB-0021",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 21",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0022",
    code: "NEC-STUDYHUB-0022",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 22",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0023",
    code: "NEC-STUDYHUB-0023",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 23",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0024",
    code: "NEC-STUDYHUB-0024",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 24",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0025",
    code: "NEC-STUDYHUB-0025",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 25",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0026",
    code: "NEC-STUDYHUB-0026",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 26",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0027",
    code: "NEC-STUDYHUB-0027",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 27",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0028",
    code: "NEC-STUDYHUB-0028",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 28",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0029",
    code: "NEC-STUDYHUB-0029",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 29",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0030",
    code: "NEC-STUDYHUB-0030",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 30",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0031",
    code: "NEC-STUDYHUB-0031",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 31",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0032",
    code: "NEC-STUDYHUB-0032",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 32",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0033",
    code: "NEC-STUDYHUB-0033",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 33",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0034",
    code: "NEC-STUDYHUB-0034",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 34",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0035",
    code: "NEC-STUDYHUB-0035",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 35",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0036",
    code: "NEC-STUDYHUB-0036",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 36",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0037",
    code: "NEC-STUDYHUB-0037",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 37",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0038",
    code: "NEC-STUDYHUB-0038",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 38",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0039",
    code: "NEC-STUDYHUB-0039",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 39",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0040",
    code: "NEC-STUDYHUB-0040",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 40",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0041",
    code: "NEC-STUDYHUB-0041",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 41",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0042",
    code: "NEC-STUDYHUB-0042",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 42",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0043",
    code: "NEC-STUDYHUB-0043",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 43",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0044",
    code: "NEC-STUDYHUB-0044",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 44",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0045",
    code: "NEC-STUDYHUB-0045",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 45",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0046",
    code: "NEC-STUDYHUB-0046",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 46",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0047",
    code: "NEC-STUDYHUB-0047",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 47",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0048",
    code: "NEC-STUDYHUB-0048",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 48",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0049",
    code: "NEC-STUDYHUB-0049",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 49",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0050",
    code: "NEC-STUDYHUB-0050",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 50",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0051",
    code: "NEC-STUDYHUB-0051",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 51",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0052",
    code: "NEC-STUDYHUB-0052",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 52",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0053",
    code: "NEC-STUDYHUB-0053",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 53",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0054",
    code: "NEC-STUDYHUB-0054",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 54",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0055",
    code: "NEC-STUDYHUB-0055",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 55",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0056",
    code: "NEC-STUDYHUB-0056",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 56",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0057",
    code: "NEC-STUDYHUB-0057",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 57",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0058",
    code: "NEC-STUDYHUB-0058",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 58",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0059",
    code: "NEC-STUDYHUB-0059",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 59",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0060",
    code: "NEC-STUDYHUB-0060",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 60",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0061",
    code: "NEC-STUDYHUB-0061",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 61",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0062",
    code: "NEC-STUDYHUB-0062",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 62",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0063",
    code: "NEC-STUDYHUB-0063",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 63",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0064",
    code: "NEC-STUDYHUB-0064",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 64",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0065",
    code: "NEC-STUDYHUB-0065",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 65",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0066",
    code: "NEC-STUDYHUB-0066",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 66",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0067",
    code: "NEC-STUDYHUB-0067",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 67",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0068",
    code: "NEC-STUDYHUB-0068",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 68",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0069",
    code: "NEC-STUDYHUB-0069",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 69",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0070",
    code: "NEC-STUDYHUB-0070",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 70",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0071",
    code: "NEC-STUDYHUB-0071",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 71",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0072",
    code: "NEC-STUDYHUB-0072",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 72",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0073",
    code: "NEC-STUDYHUB-0073",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 73",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0074",
    code: "NEC-STUDYHUB-0074",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 74",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0075",
    code: "NEC-STUDYHUB-0075",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 75",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0076",
    code: "NEC-STUDYHUB-0076",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 76",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0077",
    code: "NEC-STUDYHUB-0077",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 77",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0078",
    code: "NEC-STUDYHUB-0078",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 78",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0079",
    code: "NEC-STUDYHUB-0079",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 79",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0080",
    code: "NEC-STUDYHUB-0080",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 80",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0081",
    code: "NEC-STUDYHUB-0081",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 81",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0082",
    code: "NEC-STUDYHUB-0082",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 82",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0083",
    code: "NEC-STUDYHUB-0083",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 83",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0084",
    code: "NEC-STUDYHUB-0084",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 84",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0085",
    code: "NEC-STUDYHUB-0085",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 85",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0086",
    code: "NEC-STUDYHUB-0086",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 86",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0087",
    code: "NEC-STUDYHUB-0087",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 87",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0088",
    code: "NEC-STUDYHUB-0088",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 88",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0089",
    code: "NEC-STUDYHUB-0089",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 89",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0090",
    code: "NEC-STUDYHUB-0090",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 90",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0091",
    code: "NEC-STUDYHUB-0091",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 91",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0092",
    code: "NEC-STUDYHUB-0092",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 92",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0093",
    code: "NEC-STUDYHUB-0093",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 93",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0094",
    code: "NEC-STUDYHUB-0094",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 94",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0095",
    code: "NEC-STUDYHUB-0095",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 95",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0096",
    code: "NEC-STUDYHUB-0096",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 96",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0097",
    code: "NEC-STUDYHUB-0097",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 97",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0098",
    code: "NEC-STUDYHUB-0098",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 98",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0099",
    code: "NEC-STUDYHUB-0099",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 99",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0100",
    code: "NEC-STUDYHUB-0100",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 100",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0101",
    code: "NEC-STUDYHUB-0101",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 101",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0102",
    code: "NEC-STUDYHUB-0102",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 102",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0103",
    code: "NEC-STUDYHUB-0103",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 103",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0104",
    code: "NEC-STUDYHUB-0104",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 104",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0105",
    code: "NEC-STUDYHUB-0105",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 105",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0106",
    code: "NEC-STUDYHUB-0106",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 106",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0107",
    code: "NEC-STUDYHUB-0107",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 107",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0108",
    code: "NEC-STUDYHUB-0108",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 108",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0109",
    code: "NEC-STUDYHUB-0109",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 109",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0110",
    code: "NEC-STUDYHUB-0110",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 110",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0111",
    code: "NEC-STUDYHUB-0111",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 111",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0112",
    code: "NEC-STUDYHUB-0112",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 112",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0113",
    code: "NEC-STUDYHUB-0113",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 113",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0114",
    code: "NEC-STUDYHUB-0114",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 114",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0115",
    code: "NEC-STUDYHUB-0115",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 115",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0116",
    code: "NEC-STUDYHUB-0116",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 116",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0117",
    code: "NEC-STUDYHUB-0117",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 117",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0118",
    code: "NEC-STUDYHUB-0118",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 118",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0119",
    code: "NEC-STUDYHUB-0119",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 119",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0120",
    code: "NEC-STUDYHUB-0120",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 120",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0121",
    code: "NEC-STUDYHUB-0121",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 121",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0122",
    code: "NEC-STUDYHUB-0122",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 122",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0123",
    code: "NEC-STUDYHUB-0123",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 123",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0124",
    code: "NEC-STUDYHUB-0124",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 124",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0125",
    code: "NEC-STUDYHUB-0125",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 125",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0126",
    code: "NEC-STUDYHUB-0126",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 126",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0127",
    code: "NEC-STUDYHUB-0127",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 127",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0128",
    code: "NEC-STUDYHUB-0128",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 128",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0129",
    code: "NEC-STUDYHUB-0129",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 129",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0130",
    code: "NEC-STUDYHUB-0130",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 130",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0131",
    code: "NEC-STUDYHUB-0131",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 131",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0132",
    code: "NEC-STUDYHUB-0132",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 132",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0133",
    code: "NEC-STUDYHUB-0133",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 133",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0134",
    code: "NEC-STUDYHUB-0134",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 134",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0135",
    code: "NEC-STUDYHUB-0135",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 135",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0136",
    code: "NEC-STUDYHUB-0136",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 136",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0137",
    code: "NEC-STUDYHUB-0137",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 137",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0138",
    code: "NEC-STUDYHUB-0138",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 138",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0139",
    code: "NEC-STUDYHUB-0139",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 139",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0140",
    code: "NEC-STUDYHUB-0140",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 140",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0141",
    code: "NEC-STUDYHUB-0141",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 141",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0142",
    code: "NEC-STUDYHUB-0142",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 142",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0143",
    code: "NEC-STUDYHUB-0143",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 143",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0144",
    code: "NEC-STUDYHUB-0144",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 144",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0145",
    code: "NEC-STUDYHUB-0145",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 145",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0146",
    code: "NEC-STUDYHUB-0146",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 146",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0147",
    code: "NEC-STUDYHUB-0147",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 147",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0148",
    code: "NEC-STUDYHUB-0148",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 148",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0149",
    code: "NEC-STUDYHUB-0149",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 149",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0150",
    code: "NEC-STUDYHUB-0150",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 150",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0151",
    code: "NEC-STUDYHUB-0151",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 151",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0152",
    code: "NEC-STUDYHUB-0152",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 152",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0153",
    code: "NEC-STUDYHUB-0153",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 153",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0154",
    code: "NEC-STUDYHUB-0154",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 154",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0155",
    code: "NEC-STUDYHUB-0155",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 155",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0156",
    code: "NEC-STUDYHUB-0156",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 156",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0157",
    code: "NEC-STUDYHUB-0157",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 157",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0158",
    code: "NEC-STUDYHUB-0158",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 158",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0159",
    code: "NEC-STUDYHUB-0159",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 159",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0160",
    code: "NEC-STUDYHUB-0160",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 160",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0161",
    code: "NEC-STUDYHUB-0161",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 161",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0162",
    code: "NEC-STUDYHUB-0162",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 162",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0163",
    code: "NEC-STUDYHUB-0163",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 163",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0164",
    code: "NEC-STUDYHUB-0164",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 164",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0165",
    code: "NEC-STUDYHUB-0165",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 165",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0166",
    code: "NEC-STUDYHUB-0166",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 166",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0167",
    code: "NEC-STUDYHUB-0167",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 167",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0168",
    code: "NEC-STUDYHUB-0168",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 168",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0169",
    code: "NEC-STUDYHUB-0169",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 169",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0170",
    code: "NEC-STUDYHUB-0170",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 170",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0171",
    code: "NEC-STUDYHUB-0171",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 171",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0172",
    code: "NEC-STUDYHUB-0172",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 172",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0173",
    code: "NEC-STUDYHUB-0173",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 173",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0174",
    code: "NEC-STUDYHUB-0174",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 174",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0175",
    code: "NEC-STUDYHUB-0175",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 175",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0176",
    code: "NEC-STUDYHUB-0176",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 176",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0177",
    code: "NEC-STUDYHUB-0177",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 177",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0178",
    code: "NEC-STUDYHUB-0178",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 178",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0179",
    code: "NEC-STUDYHUB-0179",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 179",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0180",
    code: "NEC-STUDYHUB-0180",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 180",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0181",
    code: "NEC-STUDYHUB-0181",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 181",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0182",
    code: "NEC-STUDYHUB-0182",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 182",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0183",
    code: "NEC-STUDYHUB-0183",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 183",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0184",
    code: "NEC-STUDYHUB-0184",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 184",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0185",
    code: "NEC-STUDYHUB-0185",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 185",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0186",
    code: "NEC-STUDYHUB-0186",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 186",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0187",
    code: "NEC-STUDYHUB-0187",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 187",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0188",
    code: "NEC-STUDYHUB-0188",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 188",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0189",
    code: "NEC-STUDYHUB-0189",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 189",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0190",
    code: "NEC-STUDYHUB-0190",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 190",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0191",
    code: "NEC-STUDYHUB-0191",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 191",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0192",
    code: "NEC-STUDYHUB-0192",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 192",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0193",
    code: "NEC-STUDYHUB-0193",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 193",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0194",
    code: "NEC-STUDYHUB-0194",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 194",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0195",
    code: "NEC-STUDYHUB-0195",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 195",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0196",
    code: "NEC-STUDYHUB-0196",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 196",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0197",
    code: "NEC-STUDYHUB-0197",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 197",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0198",
    code: "NEC-STUDYHUB-0198",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 198",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0199",
    code: "NEC-STUDYHUB-0199",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 199",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0200",
    code: "NEC-STUDYHUB-0200",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 200",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0201",
    code: "NEC-STUDYHUB-0201",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 201",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0202",
    code: "NEC-STUDYHUB-0202",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 202",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0203",
    code: "NEC-STUDYHUB-0203",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 203",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0204",
    code: "NEC-STUDYHUB-0204",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 204",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0205",
    code: "NEC-STUDYHUB-0205",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 205",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0206",
    code: "NEC-STUDYHUB-0206",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 206",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0207",
    code: "NEC-STUDYHUB-0207",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 207",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0208",
    code: "NEC-STUDYHUB-0208",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 208",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0209",
    code: "NEC-STUDYHUB-0209",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 209",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0210",
    code: "NEC-STUDYHUB-0210",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 210",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0211",
    code: "NEC-STUDYHUB-0211",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 211",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0212",
    code: "NEC-STUDYHUB-0212",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 212",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0213",
    code: "NEC-STUDYHUB-0213",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 213",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0214",
    code: "NEC-STUDYHUB-0214",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 214",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0215",
    code: "NEC-STUDYHUB-0215",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 215",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0216",
    code: "NEC-STUDYHUB-0216",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 216",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0217",
    code: "NEC-STUDYHUB-0217",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 217",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0218",
    code: "NEC-STUDYHUB-0218",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 218",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0219",
    code: "NEC-STUDYHUB-0219",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 219",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0220",
    code: "NEC-STUDYHUB-0220",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 220",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0221",
    code: "NEC-STUDYHUB-0221",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 221",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0222",
    code: "NEC-STUDYHUB-0222",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 222",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0223",
    code: "NEC-STUDYHUB-0223",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 223",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0224",
    code: "NEC-STUDYHUB-0224",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 224",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0225",
    code: "NEC-STUDYHUB-0225",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 225",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0226",
    code: "NEC-STUDYHUB-0226",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 226",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0227",
    code: "NEC-STUDYHUB-0227",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 227",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0228",
    code: "NEC-STUDYHUB-0228",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 228",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0229",
    code: "NEC-STUDYHUB-0229",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 229",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0230",
    code: "NEC-STUDYHUB-0230",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 230",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0231",
    code: "NEC-STUDYHUB-0231",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 231",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0232",
    code: "NEC-STUDYHUB-0232",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 232",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0233",
    code: "NEC-STUDYHUB-0233",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 233",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0234",
    code: "NEC-STUDYHUB-0234",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 234",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0235",
    code: "NEC-STUDYHUB-0235",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 235",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0236",
    code: "NEC-STUDYHUB-0236",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 236",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0237",
    code: "NEC-STUDYHUB-0237",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 237",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0238",
    code: "NEC-STUDYHUB-0238",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 238",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0239",
    code: "NEC-STUDYHUB-0239",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 239",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0240",
    code: "NEC-STUDYHUB-0240",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 240",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0241",
    code: "NEC-STUDYHUB-0241",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 241",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0242",
    code: "NEC-STUDYHUB-0242",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 242",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0243",
    code: "NEC-STUDYHUB-0243",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 243",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0244",
    code: "NEC-STUDYHUB-0244",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 244",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0245",
    code: "NEC-STUDYHUB-0245",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 245",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0246",
    code: "NEC-STUDYHUB-0246",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 246",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0247",
    code: "NEC-STUDYHUB-0247",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 247",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0248",
    code: "NEC-STUDYHUB-0248",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 248",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0249",
    code: "NEC-STUDYHUB-0249",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 249",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0250",
    code: "NEC-STUDYHUB-0250",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 250",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0251",
    code: "NEC-STUDYHUB-0251",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 251",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0252",
    code: "NEC-STUDYHUB-0252",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 252",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0253",
    code: "NEC-STUDYHUB-0253",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 253",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0254",
    code: "NEC-STUDYHUB-0254",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 254",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0255",
    code: "NEC-STUDYHUB-0255",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 255",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0256",
    code: "NEC-STUDYHUB-0256",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 256",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0257",
    code: "NEC-STUDYHUB-0257",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 257",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0258",
    code: "NEC-STUDYHUB-0258",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 258",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0259",
    code: "NEC-STUDYHUB-0259",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 259",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0260",
    code: "NEC-STUDYHUB-0260",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 260",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0261",
    code: "NEC-STUDYHUB-0261",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 261",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0262",
    code: "NEC-STUDYHUB-0262",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 262",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0263",
    code: "NEC-STUDYHUB-0263",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 263",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0264",
    code: "NEC-STUDYHUB-0264",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 264",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0265",
    code: "NEC-STUDYHUB-0265",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 265",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0266",
    code: "NEC-STUDYHUB-0266",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 266",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0267",
    code: "NEC-STUDYHUB-0267",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 267",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0268",
    code: "NEC-STUDYHUB-0268",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 268",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0269",
    code: "NEC-STUDYHUB-0269",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 269",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0270",
    code: "NEC-STUDYHUB-0270",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 270",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0271",
    code: "NEC-STUDYHUB-0271",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 271",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0272",
    code: "NEC-STUDYHUB-0272",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 272",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0273",
    code: "NEC-STUDYHUB-0273",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 273",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0274",
    code: "NEC-STUDYHUB-0274",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 274",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0275",
    code: "NEC-STUDYHUB-0275",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 275",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0276",
    code: "NEC-STUDYHUB-0276",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 276",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0277",
    code: "NEC-STUDYHUB-0277",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 277",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0278",
    code: "NEC-STUDYHUB-0278",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 278",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0279",
    code: "NEC-STUDYHUB-0279",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 279",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0280",
    code: "NEC-STUDYHUB-0280",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 280",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0281",
    code: "NEC-STUDYHUB-0281",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 281",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0282",
    code: "NEC-STUDYHUB-0282",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 282",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0283",
    code: "NEC-STUDYHUB-0283",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 283",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0284",
    code: "NEC-STUDYHUB-0284",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 284",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0285",
    code: "NEC-STUDYHUB-0285",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 285",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0286",
    code: "NEC-STUDYHUB-0286",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 286",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0287",
    code: "NEC-STUDYHUB-0287",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 287",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0288",
    code: "NEC-STUDYHUB-0288",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 288",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0289",
    code: "NEC-STUDYHUB-0289",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 289",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0290",
    code: "NEC-STUDYHUB-0290",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 290",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0291",
    code: "NEC-STUDYHUB-0291",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 291",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0292",
    code: "NEC-STUDYHUB-0292",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 292",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0293",
    code: "NEC-STUDYHUB-0293",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 293",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0294",
    code: "NEC-STUDYHUB-0294",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 294",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0295",
    code: "NEC-STUDYHUB-0295",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 295",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0296",
    code: "NEC-STUDYHUB-0296",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 296",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0297",
    code: "NEC-STUDYHUB-0297",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 297",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0298",
    code: "NEC-STUDYHUB-0298",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 298",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0299",
    code: "NEC-STUDYHUB-0299",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 299",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0300",
    code: "NEC-STUDYHUB-0300",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 300",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0301",
    code: "NEC-STUDYHUB-0301",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 301",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0302",
    code: "NEC-STUDYHUB-0302",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 302",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0303",
    code: "NEC-STUDYHUB-0303",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 303",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0304",
    code: "NEC-STUDYHUB-0304",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 304",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0305",
    code: "NEC-STUDYHUB-0305",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 305",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0306",
    code: "NEC-STUDYHUB-0306",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 306",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0307",
    code: "NEC-STUDYHUB-0307",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 307",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0308",
    code: "NEC-STUDYHUB-0308",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 308",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0309",
    code: "NEC-STUDYHUB-0309",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 309",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0310",
    code: "NEC-STUDYHUB-0310",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 310",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0311",
    code: "NEC-STUDYHUB-0311",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 311",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0312",
    code: "NEC-STUDYHUB-0312",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 312",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0313",
    code: "NEC-STUDYHUB-0313",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 313",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0314",
    code: "NEC-STUDYHUB-0314",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 314",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0315",
    code: "NEC-STUDYHUB-0315",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 315",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0316",
    code: "NEC-STUDYHUB-0316",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 316",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0317",
    code: "NEC-STUDYHUB-0317",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 317",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0318",
    code: "NEC-STUDYHUB-0318",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 318",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0319",
    code: "NEC-STUDYHUB-0319",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 319",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0320",
    code: "NEC-STUDYHUB-0320",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 320",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0321",
    code: "NEC-STUDYHUB-0321",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 321",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0322",
    code: "NEC-STUDYHUB-0322",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 322",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0323",
    code: "NEC-STUDYHUB-0323",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 323",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0324",
    code: "NEC-STUDYHUB-0324",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 324",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0325",
    code: "NEC-STUDYHUB-0325",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 325",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0326",
    code: "NEC-STUDYHUB-0326",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 326",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0327",
    code: "NEC-STUDYHUB-0327",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 327",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0328",
    code: "NEC-STUDYHUB-0328",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 328",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0329",
    code: "NEC-STUDYHUB-0329",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 329",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0330",
    code: "NEC-STUDYHUB-0330",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 330",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0331",
    code: "NEC-STUDYHUB-0331",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 331",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0332",
    code: "NEC-STUDYHUB-0332",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 332",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0333",
    code: "NEC-STUDYHUB-0333",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 333",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0334",
    code: "NEC-STUDYHUB-0334",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 334",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0335",
    code: "NEC-STUDYHUB-0335",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 335",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0336",
    code: "NEC-STUDYHUB-0336",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 336",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0337",
    code: "NEC-STUDYHUB-0337",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 337",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0338",
    code: "NEC-STUDYHUB-0338",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 338",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0339",
    code: "NEC-STUDYHUB-0339",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 339",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0340",
    code: "NEC-STUDYHUB-0340",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 340",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0341",
    code: "NEC-STUDYHUB-0341",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 341",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0342",
    code: "NEC-STUDYHUB-0342",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 342",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0343",
    code: "NEC-STUDYHUB-0343",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 343",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0344",
    code: "NEC-STUDYHUB-0344",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 344",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0345",
    code: "NEC-STUDYHUB-0345",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 345",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0346",
    code: "NEC-STUDYHUB-0346",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 346",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0347",
    code: "NEC-STUDYHUB-0347",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 347",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0348",
    code: "NEC-STUDYHUB-0348",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 348",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0349",
    code: "NEC-STUDYHUB-0349",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 349",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0350",
    code: "NEC-STUDYHUB-0350",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 350",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0351",
    code: "NEC-STUDYHUB-0351",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 351",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0352",
    code: "NEC-STUDYHUB-0352",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 352",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0353",
    code: "NEC-STUDYHUB-0353",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 353",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0354",
    code: "NEC-STUDYHUB-0354",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 354",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0355",
    code: "NEC-STUDYHUB-0355",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 355",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0356",
    code: "NEC-STUDYHUB-0356",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 356",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0357",
    code: "NEC-STUDYHUB-0357",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 357",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0358",
    code: "NEC-STUDYHUB-0358",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 358",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0359",
    code: "NEC-STUDYHUB-0359",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 359",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0360",
    code: "NEC-STUDYHUB-0360",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 360",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0361",
    code: "NEC-STUDYHUB-0361",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 361",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0362",
    code: "NEC-STUDYHUB-0362",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 362",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0363",
    code: "NEC-STUDYHUB-0363",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 363",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0364",
    code: "NEC-STUDYHUB-0364",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 364",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0365",
    code: "NEC-STUDYHUB-0365",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 365",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0366",
    code: "NEC-STUDYHUB-0366",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 366",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0367",
    code: "NEC-STUDYHUB-0367",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 367",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0368",
    code: "NEC-STUDYHUB-0368",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 368",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0369",
    code: "NEC-STUDYHUB-0369",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 369",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0370",
    code: "NEC-STUDYHUB-0370",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 370",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0371",
    code: "NEC-STUDYHUB-0371",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 371",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0372",
    code: "NEC-STUDYHUB-0372",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 372",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0373",
    code: "NEC-STUDYHUB-0373",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 373",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0374",
    code: "NEC-STUDYHUB-0374",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 374",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0375",
    code: "NEC-STUDYHUB-0375",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 375",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0376",
    code: "NEC-STUDYHUB-0376",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 376",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0377",
    code: "NEC-STUDYHUB-0377",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 377",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0378",
    code: "NEC-STUDYHUB-0378",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 378",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0379",
    code: "NEC-STUDYHUB-0379",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 379",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0380",
    code: "NEC-STUDYHUB-0380",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 380",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0381",
    code: "NEC-STUDYHUB-0381",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 381",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0382",
    code: "NEC-STUDYHUB-0382",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 382",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0383",
    code: "NEC-STUDYHUB-0383",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 383",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0384",
    code: "NEC-STUDYHUB-0384",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 384",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0385",
    code: "NEC-STUDYHUB-0385",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 385",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0386",
    code: "NEC-STUDYHUB-0386",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 386",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0387",
    code: "NEC-STUDYHUB-0387",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 387",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0388",
    code: "NEC-STUDYHUB-0388",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 388",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0389",
    code: "NEC-STUDYHUB-0389",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 389",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0390",
    code: "NEC-STUDYHUB-0390",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 390",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0391",
    code: "NEC-STUDYHUB-0391",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 391",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0392",
    code: "NEC-STUDYHUB-0392",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 392",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0393",
    code: "NEC-STUDYHUB-0393",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 393",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0394",
    code: "NEC-STUDYHUB-0394",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 394",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0395",
    code: "NEC-STUDYHUB-0395",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 395",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0396",
    code: "NEC-STUDYHUB-0396",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 396",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0397",
    code: "NEC-STUDYHUB-0397",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 397",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0398",
    code: "NEC-STUDYHUB-0398",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 398",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0399",
    code: "NEC-STUDYHUB-0399",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 399",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0400",
    code: "NEC-STUDYHUB-0400",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 400",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0401",
    code: "NEC-STUDYHUB-0401",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 401",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0402",
    code: "NEC-STUDYHUB-0402",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 402",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0403",
    code: "NEC-STUDYHUB-0403",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 403",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0404",
    code: "NEC-STUDYHUB-0404",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 404",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0405",
    code: "NEC-STUDYHUB-0405",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 405",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0406",
    code: "NEC-STUDYHUB-0406",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 406",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0407",
    code: "NEC-STUDYHUB-0407",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 407",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0408",
    code: "NEC-STUDYHUB-0408",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 408",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0409",
    code: "NEC-STUDYHUB-0409",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 409",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0410",
    code: "NEC-STUDYHUB-0410",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 410",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0411",
    code: "NEC-STUDYHUB-0411",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 411",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0412",
    code: "NEC-STUDYHUB-0412",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 412",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0413",
    code: "NEC-STUDYHUB-0413",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 413",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0414",
    code: "NEC-STUDYHUB-0414",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 414",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0415",
    code: "NEC-STUDYHUB-0415",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 415",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0416",
    code: "NEC-STUDYHUB-0416",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 416",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0417",
    code: "NEC-STUDYHUB-0417",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 417",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0418",
    code: "NEC-STUDYHUB-0418",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 418",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0419",
    code: "NEC-STUDYHUB-0419",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 419",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0420",
    code: "NEC-STUDYHUB-0420",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 420",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0421",
    code: "NEC-STUDYHUB-0421",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 421",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0422",
    code: "NEC-STUDYHUB-0422",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 422",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0423",
    code: "NEC-STUDYHUB-0423",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 423",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0424",
    code: "NEC-STUDYHUB-0424",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 424",
    category: "STUDYHUB_CORE",
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
    id: "studyhub-0425",
    code: "NEC-STUDYHUB-0425",
    title: "Interactive 3D Study Hub and Quiz Deck - Item 425",
    category: "STUDYHUB_CORE",
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

export function filterSTUDYHUBBySemester(semester: number): AcademicEntityItem[] {
  return STUDYHUB_REGISTRY.filter(item => item.semester === semester);
}

export function computeSTUDYHUBAverageCredits(): number {
  const total = STUDYHUB_REGISTRY.reduce((acc, curr) => acc + curr.credits, 0);
  return total / STUDYHUB_REGISTRY.length;
}
