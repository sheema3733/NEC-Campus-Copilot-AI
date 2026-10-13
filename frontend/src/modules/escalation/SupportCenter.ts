/**
 * Narasaraopeta Engineering College (Autonomous) — Frontend Enterprise Module
 * Module: Human Support Center and Ticket Tracker (SUPPORTCENTER)
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

export const SUPPORTCENTER_REGISTRY: AcademicEntityItem[] = [
  {
    id: "supportcenter-0001",
    code: "NEC-SUPPORTCENTER-0001",
    title: "Human Support Center and Ticket Tracker - Item 1",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0002",
    code: "NEC-SUPPORTCENTER-0002",
    title: "Human Support Center and Ticket Tracker - Item 2",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0003",
    code: "NEC-SUPPORTCENTER-0003",
    title: "Human Support Center and Ticket Tracker - Item 3",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0004",
    code: "NEC-SUPPORTCENTER-0004",
    title: "Human Support Center and Ticket Tracker - Item 4",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0005",
    code: "NEC-SUPPORTCENTER-0005",
    title: "Human Support Center and Ticket Tracker - Item 5",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0006",
    code: "NEC-SUPPORTCENTER-0006",
    title: "Human Support Center and Ticket Tracker - Item 6",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0007",
    code: "NEC-SUPPORTCENTER-0007",
    title: "Human Support Center and Ticket Tracker - Item 7",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0008",
    code: "NEC-SUPPORTCENTER-0008",
    title: "Human Support Center and Ticket Tracker - Item 8",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0009",
    code: "NEC-SUPPORTCENTER-0009",
    title: "Human Support Center and Ticket Tracker - Item 9",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0010",
    code: "NEC-SUPPORTCENTER-0010",
    title: "Human Support Center and Ticket Tracker - Item 10",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0011",
    code: "NEC-SUPPORTCENTER-0011",
    title: "Human Support Center and Ticket Tracker - Item 11",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0012",
    code: "NEC-SUPPORTCENTER-0012",
    title: "Human Support Center and Ticket Tracker - Item 12",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0013",
    code: "NEC-SUPPORTCENTER-0013",
    title: "Human Support Center and Ticket Tracker - Item 13",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0014",
    code: "NEC-SUPPORTCENTER-0014",
    title: "Human Support Center and Ticket Tracker - Item 14",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0015",
    code: "NEC-SUPPORTCENTER-0015",
    title: "Human Support Center and Ticket Tracker - Item 15",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0016",
    code: "NEC-SUPPORTCENTER-0016",
    title: "Human Support Center and Ticket Tracker - Item 16",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0017",
    code: "NEC-SUPPORTCENTER-0017",
    title: "Human Support Center and Ticket Tracker - Item 17",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0018",
    code: "NEC-SUPPORTCENTER-0018",
    title: "Human Support Center and Ticket Tracker - Item 18",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0019",
    code: "NEC-SUPPORTCENTER-0019",
    title: "Human Support Center and Ticket Tracker - Item 19",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0020",
    code: "NEC-SUPPORTCENTER-0020",
    title: "Human Support Center and Ticket Tracker - Item 20",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0021",
    code: "NEC-SUPPORTCENTER-0021",
    title: "Human Support Center and Ticket Tracker - Item 21",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0022",
    code: "NEC-SUPPORTCENTER-0022",
    title: "Human Support Center and Ticket Tracker - Item 22",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0023",
    code: "NEC-SUPPORTCENTER-0023",
    title: "Human Support Center and Ticket Tracker - Item 23",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0024",
    code: "NEC-SUPPORTCENTER-0024",
    title: "Human Support Center and Ticket Tracker - Item 24",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0025",
    code: "NEC-SUPPORTCENTER-0025",
    title: "Human Support Center and Ticket Tracker - Item 25",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0026",
    code: "NEC-SUPPORTCENTER-0026",
    title: "Human Support Center and Ticket Tracker - Item 26",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0027",
    code: "NEC-SUPPORTCENTER-0027",
    title: "Human Support Center and Ticket Tracker - Item 27",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0028",
    code: "NEC-SUPPORTCENTER-0028",
    title: "Human Support Center and Ticket Tracker - Item 28",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0029",
    code: "NEC-SUPPORTCENTER-0029",
    title: "Human Support Center and Ticket Tracker - Item 29",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0030",
    code: "NEC-SUPPORTCENTER-0030",
    title: "Human Support Center and Ticket Tracker - Item 30",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0031",
    code: "NEC-SUPPORTCENTER-0031",
    title: "Human Support Center and Ticket Tracker - Item 31",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0032",
    code: "NEC-SUPPORTCENTER-0032",
    title: "Human Support Center and Ticket Tracker - Item 32",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0033",
    code: "NEC-SUPPORTCENTER-0033",
    title: "Human Support Center and Ticket Tracker - Item 33",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0034",
    code: "NEC-SUPPORTCENTER-0034",
    title: "Human Support Center and Ticket Tracker - Item 34",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0035",
    code: "NEC-SUPPORTCENTER-0035",
    title: "Human Support Center and Ticket Tracker - Item 35",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0036",
    code: "NEC-SUPPORTCENTER-0036",
    title: "Human Support Center and Ticket Tracker - Item 36",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0037",
    code: "NEC-SUPPORTCENTER-0037",
    title: "Human Support Center and Ticket Tracker - Item 37",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0038",
    code: "NEC-SUPPORTCENTER-0038",
    title: "Human Support Center and Ticket Tracker - Item 38",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0039",
    code: "NEC-SUPPORTCENTER-0039",
    title: "Human Support Center and Ticket Tracker - Item 39",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0040",
    code: "NEC-SUPPORTCENTER-0040",
    title: "Human Support Center and Ticket Tracker - Item 40",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0041",
    code: "NEC-SUPPORTCENTER-0041",
    title: "Human Support Center and Ticket Tracker - Item 41",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0042",
    code: "NEC-SUPPORTCENTER-0042",
    title: "Human Support Center and Ticket Tracker - Item 42",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0043",
    code: "NEC-SUPPORTCENTER-0043",
    title: "Human Support Center and Ticket Tracker - Item 43",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0044",
    code: "NEC-SUPPORTCENTER-0044",
    title: "Human Support Center and Ticket Tracker - Item 44",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0045",
    code: "NEC-SUPPORTCENTER-0045",
    title: "Human Support Center and Ticket Tracker - Item 45",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0046",
    code: "NEC-SUPPORTCENTER-0046",
    title: "Human Support Center and Ticket Tracker - Item 46",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0047",
    code: "NEC-SUPPORTCENTER-0047",
    title: "Human Support Center and Ticket Tracker - Item 47",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0048",
    code: "NEC-SUPPORTCENTER-0048",
    title: "Human Support Center and Ticket Tracker - Item 48",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0049",
    code: "NEC-SUPPORTCENTER-0049",
    title: "Human Support Center and Ticket Tracker - Item 49",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0050",
    code: "NEC-SUPPORTCENTER-0050",
    title: "Human Support Center and Ticket Tracker - Item 50",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0051",
    code: "NEC-SUPPORTCENTER-0051",
    title: "Human Support Center and Ticket Tracker - Item 51",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0052",
    code: "NEC-SUPPORTCENTER-0052",
    title: "Human Support Center and Ticket Tracker - Item 52",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0053",
    code: "NEC-SUPPORTCENTER-0053",
    title: "Human Support Center and Ticket Tracker - Item 53",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0054",
    code: "NEC-SUPPORTCENTER-0054",
    title: "Human Support Center and Ticket Tracker - Item 54",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0055",
    code: "NEC-SUPPORTCENTER-0055",
    title: "Human Support Center and Ticket Tracker - Item 55",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0056",
    code: "NEC-SUPPORTCENTER-0056",
    title: "Human Support Center and Ticket Tracker - Item 56",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0057",
    code: "NEC-SUPPORTCENTER-0057",
    title: "Human Support Center and Ticket Tracker - Item 57",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0058",
    code: "NEC-SUPPORTCENTER-0058",
    title: "Human Support Center and Ticket Tracker - Item 58",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0059",
    code: "NEC-SUPPORTCENTER-0059",
    title: "Human Support Center and Ticket Tracker - Item 59",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0060",
    code: "NEC-SUPPORTCENTER-0060",
    title: "Human Support Center and Ticket Tracker - Item 60",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0061",
    code: "NEC-SUPPORTCENTER-0061",
    title: "Human Support Center and Ticket Tracker - Item 61",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0062",
    code: "NEC-SUPPORTCENTER-0062",
    title: "Human Support Center and Ticket Tracker - Item 62",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0063",
    code: "NEC-SUPPORTCENTER-0063",
    title: "Human Support Center and Ticket Tracker - Item 63",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0064",
    code: "NEC-SUPPORTCENTER-0064",
    title: "Human Support Center and Ticket Tracker - Item 64",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0065",
    code: "NEC-SUPPORTCENTER-0065",
    title: "Human Support Center and Ticket Tracker - Item 65",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0066",
    code: "NEC-SUPPORTCENTER-0066",
    title: "Human Support Center and Ticket Tracker - Item 66",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0067",
    code: "NEC-SUPPORTCENTER-0067",
    title: "Human Support Center and Ticket Tracker - Item 67",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0068",
    code: "NEC-SUPPORTCENTER-0068",
    title: "Human Support Center and Ticket Tracker - Item 68",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0069",
    code: "NEC-SUPPORTCENTER-0069",
    title: "Human Support Center and Ticket Tracker - Item 69",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0070",
    code: "NEC-SUPPORTCENTER-0070",
    title: "Human Support Center and Ticket Tracker - Item 70",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0071",
    code: "NEC-SUPPORTCENTER-0071",
    title: "Human Support Center and Ticket Tracker - Item 71",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0072",
    code: "NEC-SUPPORTCENTER-0072",
    title: "Human Support Center and Ticket Tracker - Item 72",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0073",
    code: "NEC-SUPPORTCENTER-0073",
    title: "Human Support Center and Ticket Tracker - Item 73",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0074",
    code: "NEC-SUPPORTCENTER-0074",
    title: "Human Support Center and Ticket Tracker - Item 74",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0075",
    code: "NEC-SUPPORTCENTER-0075",
    title: "Human Support Center and Ticket Tracker - Item 75",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0076",
    code: "NEC-SUPPORTCENTER-0076",
    title: "Human Support Center and Ticket Tracker - Item 76",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0077",
    code: "NEC-SUPPORTCENTER-0077",
    title: "Human Support Center and Ticket Tracker - Item 77",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0078",
    code: "NEC-SUPPORTCENTER-0078",
    title: "Human Support Center and Ticket Tracker - Item 78",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0079",
    code: "NEC-SUPPORTCENTER-0079",
    title: "Human Support Center and Ticket Tracker - Item 79",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0080",
    code: "NEC-SUPPORTCENTER-0080",
    title: "Human Support Center and Ticket Tracker - Item 80",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0081",
    code: "NEC-SUPPORTCENTER-0081",
    title: "Human Support Center and Ticket Tracker - Item 81",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0082",
    code: "NEC-SUPPORTCENTER-0082",
    title: "Human Support Center and Ticket Tracker - Item 82",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0083",
    code: "NEC-SUPPORTCENTER-0083",
    title: "Human Support Center and Ticket Tracker - Item 83",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0084",
    code: "NEC-SUPPORTCENTER-0084",
    title: "Human Support Center and Ticket Tracker - Item 84",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0085",
    code: "NEC-SUPPORTCENTER-0085",
    title: "Human Support Center and Ticket Tracker - Item 85",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0086",
    code: "NEC-SUPPORTCENTER-0086",
    title: "Human Support Center and Ticket Tracker - Item 86",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0087",
    code: "NEC-SUPPORTCENTER-0087",
    title: "Human Support Center and Ticket Tracker - Item 87",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0088",
    code: "NEC-SUPPORTCENTER-0088",
    title: "Human Support Center and Ticket Tracker - Item 88",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0089",
    code: "NEC-SUPPORTCENTER-0089",
    title: "Human Support Center and Ticket Tracker - Item 89",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0090",
    code: "NEC-SUPPORTCENTER-0090",
    title: "Human Support Center and Ticket Tracker - Item 90",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0091",
    code: "NEC-SUPPORTCENTER-0091",
    title: "Human Support Center and Ticket Tracker - Item 91",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0092",
    code: "NEC-SUPPORTCENTER-0092",
    title: "Human Support Center and Ticket Tracker - Item 92",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0093",
    code: "NEC-SUPPORTCENTER-0093",
    title: "Human Support Center and Ticket Tracker - Item 93",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0094",
    code: "NEC-SUPPORTCENTER-0094",
    title: "Human Support Center and Ticket Tracker - Item 94",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0095",
    code: "NEC-SUPPORTCENTER-0095",
    title: "Human Support Center and Ticket Tracker - Item 95",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0096",
    code: "NEC-SUPPORTCENTER-0096",
    title: "Human Support Center and Ticket Tracker - Item 96",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0097",
    code: "NEC-SUPPORTCENTER-0097",
    title: "Human Support Center and Ticket Tracker - Item 97",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0098",
    code: "NEC-SUPPORTCENTER-0098",
    title: "Human Support Center and Ticket Tracker - Item 98",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0099",
    code: "NEC-SUPPORTCENTER-0099",
    title: "Human Support Center and Ticket Tracker - Item 99",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0100",
    code: "NEC-SUPPORTCENTER-0100",
    title: "Human Support Center and Ticket Tracker - Item 100",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0101",
    code: "NEC-SUPPORTCENTER-0101",
    title: "Human Support Center and Ticket Tracker - Item 101",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0102",
    code: "NEC-SUPPORTCENTER-0102",
    title: "Human Support Center and Ticket Tracker - Item 102",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0103",
    code: "NEC-SUPPORTCENTER-0103",
    title: "Human Support Center and Ticket Tracker - Item 103",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0104",
    code: "NEC-SUPPORTCENTER-0104",
    title: "Human Support Center and Ticket Tracker - Item 104",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0105",
    code: "NEC-SUPPORTCENTER-0105",
    title: "Human Support Center and Ticket Tracker - Item 105",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0106",
    code: "NEC-SUPPORTCENTER-0106",
    title: "Human Support Center and Ticket Tracker - Item 106",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0107",
    code: "NEC-SUPPORTCENTER-0107",
    title: "Human Support Center and Ticket Tracker - Item 107",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0108",
    code: "NEC-SUPPORTCENTER-0108",
    title: "Human Support Center and Ticket Tracker - Item 108",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0109",
    code: "NEC-SUPPORTCENTER-0109",
    title: "Human Support Center and Ticket Tracker - Item 109",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0110",
    code: "NEC-SUPPORTCENTER-0110",
    title: "Human Support Center and Ticket Tracker - Item 110",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0111",
    code: "NEC-SUPPORTCENTER-0111",
    title: "Human Support Center and Ticket Tracker - Item 111",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0112",
    code: "NEC-SUPPORTCENTER-0112",
    title: "Human Support Center and Ticket Tracker - Item 112",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0113",
    code: "NEC-SUPPORTCENTER-0113",
    title: "Human Support Center and Ticket Tracker - Item 113",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0114",
    code: "NEC-SUPPORTCENTER-0114",
    title: "Human Support Center and Ticket Tracker - Item 114",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0115",
    code: "NEC-SUPPORTCENTER-0115",
    title: "Human Support Center and Ticket Tracker - Item 115",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0116",
    code: "NEC-SUPPORTCENTER-0116",
    title: "Human Support Center and Ticket Tracker - Item 116",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0117",
    code: "NEC-SUPPORTCENTER-0117",
    title: "Human Support Center and Ticket Tracker - Item 117",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0118",
    code: "NEC-SUPPORTCENTER-0118",
    title: "Human Support Center and Ticket Tracker - Item 118",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0119",
    code: "NEC-SUPPORTCENTER-0119",
    title: "Human Support Center and Ticket Tracker - Item 119",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0120",
    code: "NEC-SUPPORTCENTER-0120",
    title: "Human Support Center and Ticket Tracker - Item 120",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0121",
    code: "NEC-SUPPORTCENTER-0121",
    title: "Human Support Center and Ticket Tracker - Item 121",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0122",
    code: "NEC-SUPPORTCENTER-0122",
    title: "Human Support Center and Ticket Tracker - Item 122",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0123",
    code: "NEC-SUPPORTCENTER-0123",
    title: "Human Support Center and Ticket Tracker - Item 123",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0124",
    code: "NEC-SUPPORTCENTER-0124",
    title: "Human Support Center and Ticket Tracker - Item 124",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0125",
    code: "NEC-SUPPORTCENTER-0125",
    title: "Human Support Center and Ticket Tracker - Item 125",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0126",
    code: "NEC-SUPPORTCENTER-0126",
    title: "Human Support Center and Ticket Tracker - Item 126",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0127",
    code: "NEC-SUPPORTCENTER-0127",
    title: "Human Support Center and Ticket Tracker - Item 127",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0128",
    code: "NEC-SUPPORTCENTER-0128",
    title: "Human Support Center and Ticket Tracker - Item 128",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0129",
    code: "NEC-SUPPORTCENTER-0129",
    title: "Human Support Center and Ticket Tracker - Item 129",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0130",
    code: "NEC-SUPPORTCENTER-0130",
    title: "Human Support Center and Ticket Tracker - Item 130",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0131",
    code: "NEC-SUPPORTCENTER-0131",
    title: "Human Support Center and Ticket Tracker - Item 131",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0132",
    code: "NEC-SUPPORTCENTER-0132",
    title: "Human Support Center and Ticket Tracker - Item 132",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0133",
    code: "NEC-SUPPORTCENTER-0133",
    title: "Human Support Center and Ticket Tracker - Item 133",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0134",
    code: "NEC-SUPPORTCENTER-0134",
    title: "Human Support Center and Ticket Tracker - Item 134",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0135",
    code: "NEC-SUPPORTCENTER-0135",
    title: "Human Support Center and Ticket Tracker - Item 135",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0136",
    code: "NEC-SUPPORTCENTER-0136",
    title: "Human Support Center and Ticket Tracker - Item 136",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0137",
    code: "NEC-SUPPORTCENTER-0137",
    title: "Human Support Center and Ticket Tracker - Item 137",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0138",
    code: "NEC-SUPPORTCENTER-0138",
    title: "Human Support Center and Ticket Tracker - Item 138",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0139",
    code: "NEC-SUPPORTCENTER-0139",
    title: "Human Support Center and Ticket Tracker - Item 139",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0140",
    code: "NEC-SUPPORTCENTER-0140",
    title: "Human Support Center and Ticket Tracker - Item 140",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0141",
    code: "NEC-SUPPORTCENTER-0141",
    title: "Human Support Center and Ticket Tracker - Item 141",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0142",
    code: "NEC-SUPPORTCENTER-0142",
    title: "Human Support Center and Ticket Tracker - Item 142",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0143",
    code: "NEC-SUPPORTCENTER-0143",
    title: "Human Support Center and Ticket Tracker - Item 143",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0144",
    code: "NEC-SUPPORTCENTER-0144",
    title: "Human Support Center and Ticket Tracker - Item 144",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0145",
    code: "NEC-SUPPORTCENTER-0145",
    title: "Human Support Center and Ticket Tracker - Item 145",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0146",
    code: "NEC-SUPPORTCENTER-0146",
    title: "Human Support Center and Ticket Tracker - Item 146",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0147",
    code: "NEC-SUPPORTCENTER-0147",
    title: "Human Support Center and Ticket Tracker - Item 147",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0148",
    code: "NEC-SUPPORTCENTER-0148",
    title: "Human Support Center and Ticket Tracker - Item 148",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0149",
    code: "NEC-SUPPORTCENTER-0149",
    title: "Human Support Center and Ticket Tracker - Item 149",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0150",
    code: "NEC-SUPPORTCENTER-0150",
    title: "Human Support Center and Ticket Tracker - Item 150",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0151",
    code: "NEC-SUPPORTCENTER-0151",
    title: "Human Support Center and Ticket Tracker - Item 151",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0152",
    code: "NEC-SUPPORTCENTER-0152",
    title: "Human Support Center and Ticket Tracker - Item 152",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0153",
    code: "NEC-SUPPORTCENTER-0153",
    title: "Human Support Center and Ticket Tracker - Item 153",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0154",
    code: "NEC-SUPPORTCENTER-0154",
    title: "Human Support Center and Ticket Tracker - Item 154",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0155",
    code: "NEC-SUPPORTCENTER-0155",
    title: "Human Support Center and Ticket Tracker - Item 155",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0156",
    code: "NEC-SUPPORTCENTER-0156",
    title: "Human Support Center and Ticket Tracker - Item 156",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0157",
    code: "NEC-SUPPORTCENTER-0157",
    title: "Human Support Center and Ticket Tracker - Item 157",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0158",
    code: "NEC-SUPPORTCENTER-0158",
    title: "Human Support Center and Ticket Tracker - Item 158",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0159",
    code: "NEC-SUPPORTCENTER-0159",
    title: "Human Support Center and Ticket Tracker - Item 159",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0160",
    code: "NEC-SUPPORTCENTER-0160",
    title: "Human Support Center and Ticket Tracker - Item 160",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0161",
    code: "NEC-SUPPORTCENTER-0161",
    title: "Human Support Center and Ticket Tracker - Item 161",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0162",
    code: "NEC-SUPPORTCENTER-0162",
    title: "Human Support Center and Ticket Tracker - Item 162",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0163",
    code: "NEC-SUPPORTCENTER-0163",
    title: "Human Support Center and Ticket Tracker - Item 163",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0164",
    code: "NEC-SUPPORTCENTER-0164",
    title: "Human Support Center and Ticket Tracker - Item 164",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0165",
    code: "NEC-SUPPORTCENTER-0165",
    title: "Human Support Center and Ticket Tracker - Item 165",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0166",
    code: "NEC-SUPPORTCENTER-0166",
    title: "Human Support Center and Ticket Tracker - Item 166",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0167",
    code: "NEC-SUPPORTCENTER-0167",
    title: "Human Support Center and Ticket Tracker - Item 167",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0168",
    code: "NEC-SUPPORTCENTER-0168",
    title: "Human Support Center and Ticket Tracker - Item 168",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0169",
    code: "NEC-SUPPORTCENTER-0169",
    title: "Human Support Center and Ticket Tracker - Item 169",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0170",
    code: "NEC-SUPPORTCENTER-0170",
    title: "Human Support Center and Ticket Tracker - Item 170",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0171",
    code: "NEC-SUPPORTCENTER-0171",
    title: "Human Support Center and Ticket Tracker - Item 171",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0172",
    code: "NEC-SUPPORTCENTER-0172",
    title: "Human Support Center and Ticket Tracker - Item 172",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0173",
    code: "NEC-SUPPORTCENTER-0173",
    title: "Human Support Center and Ticket Tracker - Item 173",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0174",
    code: "NEC-SUPPORTCENTER-0174",
    title: "Human Support Center and Ticket Tracker - Item 174",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0175",
    code: "NEC-SUPPORTCENTER-0175",
    title: "Human Support Center and Ticket Tracker - Item 175",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0176",
    code: "NEC-SUPPORTCENTER-0176",
    title: "Human Support Center and Ticket Tracker - Item 176",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0177",
    code: "NEC-SUPPORTCENTER-0177",
    title: "Human Support Center and Ticket Tracker - Item 177",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0178",
    code: "NEC-SUPPORTCENTER-0178",
    title: "Human Support Center and Ticket Tracker - Item 178",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0179",
    code: "NEC-SUPPORTCENTER-0179",
    title: "Human Support Center and Ticket Tracker - Item 179",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0180",
    code: "NEC-SUPPORTCENTER-0180",
    title: "Human Support Center and Ticket Tracker - Item 180",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0181",
    code: "NEC-SUPPORTCENTER-0181",
    title: "Human Support Center and Ticket Tracker - Item 181",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0182",
    code: "NEC-SUPPORTCENTER-0182",
    title: "Human Support Center and Ticket Tracker - Item 182",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0183",
    code: "NEC-SUPPORTCENTER-0183",
    title: "Human Support Center and Ticket Tracker - Item 183",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0184",
    code: "NEC-SUPPORTCENTER-0184",
    title: "Human Support Center and Ticket Tracker - Item 184",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0185",
    code: "NEC-SUPPORTCENTER-0185",
    title: "Human Support Center and Ticket Tracker - Item 185",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0186",
    code: "NEC-SUPPORTCENTER-0186",
    title: "Human Support Center and Ticket Tracker - Item 186",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0187",
    code: "NEC-SUPPORTCENTER-0187",
    title: "Human Support Center and Ticket Tracker - Item 187",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0188",
    code: "NEC-SUPPORTCENTER-0188",
    title: "Human Support Center and Ticket Tracker - Item 188",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0189",
    code: "NEC-SUPPORTCENTER-0189",
    title: "Human Support Center and Ticket Tracker - Item 189",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0190",
    code: "NEC-SUPPORTCENTER-0190",
    title: "Human Support Center and Ticket Tracker - Item 190",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0191",
    code: "NEC-SUPPORTCENTER-0191",
    title: "Human Support Center and Ticket Tracker - Item 191",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0192",
    code: "NEC-SUPPORTCENTER-0192",
    title: "Human Support Center and Ticket Tracker - Item 192",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0193",
    code: "NEC-SUPPORTCENTER-0193",
    title: "Human Support Center and Ticket Tracker - Item 193",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0194",
    code: "NEC-SUPPORTCENTER-0194",
    title: "Human Support Center and Ticket Tracker - Item 194",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0195",
    code: "NEC-SUPPORTCENTER-0195",
    title: "Human Support Center and Ticket Tracker - Item 195",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0196",
    code: "NEC-SUPPORTCENTER-0196",
    title: "Human Support Center and Ticket Tracker - Item 196",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0197",
    code: "NEC-SUPPORTCENTER-0197",
    title: "Human Support Center and Ticket Tracker - Item 197",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0198",
    code: "NEC-SUPPORTCENTER-0198",
    title: "Human Support Center and Ticket Tracker - Item 198",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0199",
    code: "NEC-SUPPORTCENTER-0199",
    title: "Human Support Center and Ticket Tracker - Item 199",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0200",
    code: "NEC-SUPPORTCENTER-0200",
    title: "Human Support Center and Ticket Tracker - Item 200",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0201",
    code: "NEC-SUPPORTCENTER-0201",
    title: "Human Support Center and Ticket Tracker - Item 201",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0202",
    code: "NEC-SUPPORTCENTER-0202",
    title: "Human Support Center and Ticket Tracker - Item 202",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0203",
    code: "NEC-SUPPORTCENTER-0203",
    title: "Human Support Center and Ticket Tracker - Item 203",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0204",
    code: "NEC-SUPPORTCENTER-0204",
    title: "Human Support Center and Ticket Tracker - Item 204",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0205",
    code: "NEC-SUPPORTCENTER-0205",
    title: "Human Support Center and Ticket Tracker - Item 205",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0206",
    code: "NEC-SUPPORTCENTER-0206",
    title: "Human Support Center and Ticket Tracker - Item 206",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0207",
    code: "NEC-SUPPORTCENTER-0207",
    title: "Human Support Center and Ticket Tracker - Item 207",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0208",
    code: "NEC-SUPPORTCENTER-0208",
    title: "Human Support Center and Ticket Tracker - Item 208",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0209",
    code: "NEC-SUPPORTCENTER-0209",
    title: "Human Support Center and Ticket Tracker - Item 209",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0210",
    code: "NEC-SUPPORTCENTER-0210",
    title: "Human Support Center and Ticket Tracker - Item 210",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0211",
    code: "NEC-SUPPORTCENTER-0211",
    title: "Human Support Center and Ticket Tracker - Item 211",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0212",
    code: "NEC-SUPPORTCENTER-0212",
    title: "Human Support Center and Ticket Tracker - Item 212",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0213",
    code: "NEC-SUPPORTCENTER-0213",
    title: "Human Support Center and Ticket Tracker - Item 213",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0214",
    code: "NEC-SUPPORTCENTER-0214",
    title: "Human Support Center and Ticket Tracker - Item 214",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0215",
    code: "NEC-SUPPORTCENTER-0215",
    title: "Human Support Center and Ticket Tracker - Item 215",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0216",
    code: "NEC-SUPPORTCENTER-0216",
    title: "Human Support Center and Ticket Tracker - Item 216",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0217",
    code: "NEC-SUPPORTCENTER-0217",
    title: "Human Support Center and Ticket Tracker - Item 217",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0218",
    code: "NEC-SUPPORTCENTER-0218",
    title: "Human Support Center and Ticket Tracker - Item 218",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0219",
    code: "NEC-SUPPORTCENTER-0219",
    title: "Human Support Center and Ticket Tracker - Item 219",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0220",
    code: "NEC-SUPPORTCENTER-0220",
    title: "Human Support Center and Ticket Tracker - Item 220",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0221",
    code: "NEC-SUPPORTCENTER-0221",
    title: "Human Support Center and Ticket Tracker - Item 221",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0222",
    code: "NEC-SUPPORTCENTER-0222",
    title: "Human Support Center and Ticket Tracker - Item 222",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0223",
    code: "NEC-SUPPORTCENTER-0223",
    title: "Human Support Center and Ticket Tracker - Item 223",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0224",
    code: "NEC-SUPPORTCENTER-0224",
    title: "Human Support Center and Ticket Tracker - Item 224",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0225",
    code: "NEC-SUPPORTCENTER-0225",
    title: "Human Support Center and Ticket Tracker - Item 225",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0226",
    code: "NEC-SUPPORTCENTER-0226",
    title: "Human Support Center and Ticket Tracker - Item 226",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0227",
    code: "NEC-SUPPORTCENTER-0227",
    title: "Human Support Center and Ticket Tracker - Item 227",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0228",
    code: "NEC-SUPPORTCENTER-0228",
    title: "Human Support Center and Ticket Tracker - Item 228",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0229",
    code: "NEC-SUPPORTCENTER-0229",
    title: "Human Support Center and Ticket Tracker - Item 229",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0230",
    code: "NEC-SUPPORTCENTER-0230",
    title: "Human Support Center and Ticket Tracker - Item 230",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0231",
    code: "NEC-SUPPORTCENTER-0231",
    title: "Human Support Center and Ticket Tracker - Item 231",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0232",
    code: "NEC-SUPPORTCENTER-0232",
    title: "Human Support Center and Ticket Tracker - Item 232",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0233",
    code: "NEC-SUPPORTCENTER-0233",
    title: "Human Support Center and Ticket Tracker - Item 233",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0234",
    code: "NEC-SUPPORTCENTER-0234",
    title: "Human Support Center and Ticket Tracker - Item 234",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0235",
    code: "NEC-SUPPORTCENTER-0235",
    title: "Human Support Center and Ticket Tracker - Item 235",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0236",
    code: "NEC-SUPPORTCENTER-0236",
    title: "Human Support Center and Ticket Tracker - Item 236",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0237",
    code: "NEC-SUPPORTCENTER-0237",
    title: "Human Support Center and Ticket Tracker - Item 237",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0238",
    code: "NEC-SUPPORTCENTER-0238",
    title: "Human Support Center and Ticket Tracker - Item 238",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0239",
    code: "NEC-SUPPORTCENTER-0239",
    title: "Human Support Center and Ticket Tracker - Item 239",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0240",
    code: "NEC-SUPPORTCENTER-0240",
    title: "Human Support Center and Ticket Tracker - Item 240",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0241",
    code: "NEC-SUPPORTCENTER-0241",
    title: "Human Support Center and Ticket Tracker - Item 241",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0242",
    code: "NEC-SUPPORTCENTER-0242",
    title: "Human Support Center and Ticket Tracker - Item 242",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0243",
    code: "NEC-SUPPORTCENTER-0243",
    title: "Human Support Center and Ticket Tracker - Item 243",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0244",
    code: "NEC-SUPPORTCENTER-0244",
    title: "Human Support Center and Ticket Tracker - Item 244",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0245",
    code: "NEC-SUPPORTCENTER-0245",
    title: "Human Support Center and Ticket Tracker - Item 245",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0246",
    code: "NEC-SUPPORTCENTER-0246",
    title: "Human Support Center and Ticket Tracker - Item 246",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0247",
    code: "NEC-SUPPORTCENTER-0247",
    title: "Human Support Center and Ticket Tracker - Item 247",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0248",
    code: "NEC-SUPPORTCENTER-0248",
    title: "Human Support Center and Ticket Tracker - Item 248",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0249",
    code: "NEC-SUPPORTCENTER-0249",
    title: "Human Support Center and Ticket Tracker - Item 249",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0250",
    code: "NEC-SUPPORTCENTER-0250",
    title: "Human Support Center and Ticket Tracker - Item 250",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0251",
    code: "NEC-SUPPORTCENTER-0251",
    title: "Human Support Center and Ticket Tracker - Item 251",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0252",
    code: "NEC-SUPPORTCENTER-0252",
    title: "Human Support Center and Ticket Tracker - Item 252",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0253",
    code: "NEC-SUPPORTCENTER-0253",
    title: "Human Support Center and Ticket Tracker - Item 253",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0254",
    code: "NEC-SUPPORTCENTER-0254",
    title: "Human Support Center and Ticket Tracker - Item 254",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0255",
    code: "NEC-SUPPORTCENTER-0255",
    title: "Human Support Center and Ticket Tracker - Item 255",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0256",
    code: "NEC-SUPPORTCENTER-0256",
    title: "Human Support Center and Ticket Tracker - Item 256",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0257",
    code: "NEC-SUPPORTCENTER-0257",
    title: "Human Support Center and Ticket Tracker - Item 257",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0258",
    code: "NEC-SUPPORTCENTER-0258",
    title: "Human Support Center and Ticket Tracker - Item 258",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0259",
    code: "NEC-SUPPORTCENTER-0259",
    title: "Human Support Center and Ticket Tracker - Item 259",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0260",
    code: "NEC-SUPPORTCENTER-0260",
    title: "Human Support Center and Ticket Tracker - Item 260",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0261",
    code: "NEC-SUPPORTCENTER-0261",
    title: "Human Support Center and Ticket Tracker - Item 261",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0262",
    code: "NEC-SUPPORTCENTER-0262",
    title: "Human Support Center and Ticket Tracker - Item 262",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0263",
    code: "NEC-SUPPORTCENTER-0263",
    title: "Human Support Center and Ticket Tracker - Item 263",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0264",
    code: "NEC-SUPPORTCENTER-0264",
    title: "Human Support Center and Ticket Tracker - Item 264",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0265",
    code: "NEC-SUPPORTCENTER-0265",
    title: "Human Support Center and Ticket Tracker - Item 265",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0266",
    code: "NEC-SUPPORTCENTER-0266",
    title: "Human Support Center and Ticket Tracker - Item 266",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0267",
    code: "NEC-SUPPORTCENTER-0267",
    title: "Human Support Center and Ticket Tracker - Item 267",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0268",
    code: "NEC-SUPPORTCENTER-0268",
    title: "Human Support Center and Ticket Tracker - Item 268",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0269",
    code: "NEC-SUPPORTCENTER-0269",
    title: "Human Support Center and Ticket Tracker - Item 269",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0270",
    code: "NEC-SUPPORTCENTER-0270",
    title: "Human Support Center and Ticket Tracker - Item 270",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0271",
    code: "NEC-SUPPORTCENTER-0271",
    title: "Human Support Center and Ticket Tracker - Item 271",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0272",
    code: "NEC-SUPPORTCENTER-0272",
    title: "Human Support Center and Ticket Tracker - Item 272",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0273",
    code: "NEC-SUPPORTCENTER-0273",
    title: "Human Support Center and Ticket Tracker - Item 273",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0274",
    code: "NEC-SUPPORTCENTER-0274",
    title: "Human Support Center and Ticket Tracker - Item 274",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0275",
    code: "NEC-SUPPORTCENTER-0275",
    title: "Human Support Center and Ticket Tracker - Item 275",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0276",
    code: "NEC-SUPPORTCENTER-0276",
    title: "Human Support Center and Ticket Tracker - Item 276",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0277",
    code: "NEC-SUPPORTCENTER-0277",
    title: "Human Support Center and Ticket Tracker - Item 277",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0278",
    code: "NEC-SUPPORTCENTER-0278",
    title: "Human Support Center and Ticket Tracker - Item 278",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0279",
    code: "NEC-SUPPORTCENTER-0279",
    title: "Human Support Center and Ticket Tracker - Item 279",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0280",
    code: "NEC-SUPPORTCENTER-0280",
    title: "Human Support Center and Ticket Tracker - Item 280",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0281",
    code: "NEC-SUPPORTCENTER-0281",
    title: "Human Support Center and Ticket Tracker - Item 281",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0282",
    code: "NEC-SUPPORTCENTER-0282",
    title: "Human Support Center and Ticket Tracker - Item 282",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0283",
    code: "NEC-SUPPORTCENTER-0283",
    title: "Human Support Center and Ticket Tracker - Item 283",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0284",
    code: "NEC-SUPPORTCENTER-0284",
    title: "Human Support Center and Ticket Tracker - Item 284",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0285",
    code: "NEC-SUPPORTCENTER-0285",
    title: "Human Support Center and Ticket Tracker - Item 285",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0286",
    code: "NEC-SUPPORTCENTER-0286",
    title: "Human Support Center and Ticket Tracker - Item 286",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0287",
    code: "NEC-SUPPORTCENTER-0287",
    title: "Human Support Center and Ticket Tracker - Item 287",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0288",
    code: "NEC-SUPPORTCENTER-0288",
    title: "Human Support Center and Ticket Tracker - Item 288",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0289",
    code: "NEC-SUPPORTCENTER-0289",
    title: "Human Support Center and Ticket Tracker - Item 289",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0290",
    code: "NEC-SUPPORTCENTER-0290",
    title: "Human Support Center and Ticket Tracker - Item 290",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0291",
    code: "NEC-SUPPORTCENTER-0291",
    title: "Human Support Center and Ticket Tracker - Item 291",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0292",
    code: "NEC-SUPPORTCENTER-0292",
    title: "Human Support Center and Ticket Tracker - Item 292",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0293",
    code: "NEC-SUPPORTCENTER-0293",
    title: "Human Support Center and Ticket Tracker - Item 293",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0294",
    code: "NEC-SUPPORTCENTER-0294",
    title: "Human Support Center and Ticket Tracker - Item 294",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0295",
    code: "NEC-SUPPORTCENTER-0295",
    title: "Human Support Center and Ticket Tracker - Item 295",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0296",
    code: "NEC-SUPPORTCENTER-0296",
    title: "Human Support Center and Ticket Tracker - Item 296",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0297",
    code: "NEC-SUPPORTCENTER-0297",
    title: "Human Support Center and Ticket Tracker - Item 297",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0298",
    code: "NEC-SUPPORTCENTER-0298",
    title: "Human Support Center and Ticket Tracker - Item 298",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0299",
    code: "NEC-SUPPORTCENTER-0299",
    title: "Human Support Center and Ticket Tracker - Item 299",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0300",
    code: "NEC-SUPPORTCENTER-0300",
    title: "Human Support Center and Ticket Tracker - Item 300",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0301",
    code: "NEC-SUPPORTCENTER-0301",
    title: "Human Support Center and Ticket Tracker - Item 301",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0302",
    code: "NEC-SUPPORTCENTER-0302",
    title: "Human Support Center and Ticket Tracker - Item 302",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0303",
    code: "NEC-SUPPORTCENTER-0303",
    title: "Human Support Center and Ticket Tracker - Item 303",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0304",
    code: "NEC-SUPPORTCENTER-0304",
    title: "Human Support Center and Ticket Tracker - Item 304",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0305",
    code: "NEC-SUPPORTCENTER-0305",
    title: "Human Support Center and Ticket Tracker - Item 305",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0306",
    code: "NEC-SUPPORTCENTER-0306",
    title: "Human Support Center and Ticket Tracker - Item 306",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0307",
    code: "NEC-SUPPORTCENTER-0307",
    title: "Human Support Center and Ticket Tracker - Item 307",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0308",
    code: "NEC-SUPPORTCENTER-0308",
    title: "Human Support Center and Ticket Tracker - Item 308",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0309",
    code: "NEC-SUPPORTCENTER-0309",
    title: "Human Support Center and Ticket Tracker - Item 309",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0310",
    code: "NEC-SUPPORTCENTER-0310",
    title: "Human Support Center and Ticket Tracker - Item 310",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0311",
    code: "NEC-SUPPORTCENTER-0311",
    title: "Human Support Center and Ticket Tracker - Item 311",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0312",
    code: "NEC-SUPPORTCENTER-0312",
    title: "Human Support Center and Ticket Tracker - Item 312",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0313",
    code: "NEC-SUPPORTCENTER-0313",
    title: "Human Support Center and Ticket Tracker - Item 313",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0314",
    code: "NEC-SUPPORTCENTER-0314",
    title: "Human Support Center and Ticket Tracker - Item 314",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0315",
    code: "NEC-SUPPORTCENTER-0315",
    title: "Human Support Center and Ticket Tracker - Item 315",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0316",
    code: "NEC-SUPPORTCENTER-0316",
    title: "Human Support Center and Ticket Tracker - Item 316",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0317",
    code: "NEC-SUPPORTCENTER-0317",
    title: "Human Support Center and Ticket Tracker - Item 317",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0318",
    code: "NEC-SUPPORTCENTER-0318",
    title: "Human Support Center and Ticket Tracker - Item 318",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0319",
    code: "NEC-SUPPORTCENTER-0319",
    title: "Human Support Center and Ticket Tracker - Item 319",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0320",
    code: "NEC-SUPPORTCENTER-0320",
    title: "Human Support Center and Ticket Tracker - Item 320",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0321",
    code: "NEC-SUPPORTCENTER-0321",
    title: "Human Support Center and Ticket Tracker - Item 321",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0322",
    code: "NEC-SUPPORTCENTER-0322",
    title: "Human Support Center and Ticket Tracker - Item 322",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0323",
    code: "NEC-SUPPORTCENTER-0323",
    title: "Human Support Center and Ticket Tracker - Item 323",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0324",
    code: "NEC-SUPPORTCENTER-0324",
    title: "Human Support Center and Ticket Tracker - Item 324",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0325",
    code: "NEC-SUPPORTCENTER-0325",
    title: "Human Support Center and Ticket Tracker - Item 325",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0326",
    code: "NEC-SUPPORTCENTER-0326",
    title: "Human Support Center and Ticket Tracker - Item 326",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0327",
    code: "NEC-SUPPORTCENTER-0327",
    title: "Human Support Center and Ticket Tracker - Item 327",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0328",
    code: "NEC-SUPPORTCENTER-0328",
    title: "Human Support Center and Ticket Tracker - Item 328",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0329",
    code: "NEC-SUPPORTCENTER-0329",
    title: "Human Support Center and Ticket Tracker - Item 329",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0330",
    code: "NEC-SUPPORTCENTER-0330",
    title: "Human Support Center and Ticket Tracker - Item 330",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0331",
    code: "NEC-SUPPORTCENTER-0331",
    title: "Human Support Center and Ticket Tracker - Item 331",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0332",
    code: "NEC-SUPPORTCENTER-0332",
    title: "Human Support Center and Ticket Tracker - Item 332",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0333",
    code: "NEC-SUPPORTCENTER-0333",
    title: "Human Support Center and Ticket Tracker - Item 333",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0334",
    code: "NEC-SUPPORTCENTER-0334",
    title: "Human Support Center and Ticket Tracker - Item 334",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0335",
    code: "NEC-SUPPORTCENTER-0335",
    title: "Human Support Center and Ticket Tracker - Item 335",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0336",
    code: "NEC-SUPPORTCENTER-0336",
    title: "Human Support Center and Ticket Tracker - Item 336",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0337",
    code: "NEC-SUPPORTCENTER-0337",
    title: "Human Support Center and Ticket Tracker - Item 337",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0338",
    code: "NEC-SUPPORTCENTER-0338",
    title: "Human Support Center and Ticket Tracker - Item 338",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0339",
    code: "NEC-SUPPORTCENTER-0339",
    title: "Human Support Center and Ticket Tracker - Item 339",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0340",
    code: "NEC-SUPPORTCENTER-0340",
    title: "Human Support Center and Ticket Tracker - Item 340",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0341",
    code: "NEC-SUPPORTCENTER-0341",
    title: "Human Support Center and Ticket Tracker - Item 341",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0342",
    code: "NEC-SUPPORTCENTER-0342",
    title: "Human Support Center and Ticket Tracker - Item 342",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0343",
    code: "NEC-SUPPORTCENTER-0343",
    title: "Human Support Center and Ticket Tracker - Item 343",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0344",
    code: "NEC-SUPPORTCENTER-0344",
    title: "Human Support Center and Ticket Tracker - Item 344",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0345",
    code: "NEC-SUPPORTCENTER-0345",
    title: "Human Support Center and Ticket Tracker - Item 345",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0346",
    code: "NEC-SUPPORTCENTER-0346",
    title: "Human Support Center and Ticket Tracker - Item 346",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0347",
    code: "NEC-SUPPORTCENTER-0347",
    title: "Human Support Center and Ticket Tracker - Item 347",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0348",
    code: "NEC-SUPPORTCENTER-0348",
    title: "Human Support Center and Ticket Tracker - Item 348",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0349",
    code: "NEC-SUPPORTCENTER-0349",
    title: "Human Support Center and Ticket Tracker - Item 349",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0350",
    code: "NEC-SUPPORTCENTER-0350",
    title: "Human Support Center and Ticket Tracker - Item 350",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0351",
    code: "NEC-SUPPORTCENTER-0351",
    title: "Human Support Center and Ticket Tracker - Item 351",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0352",
    code: "NEC-SUPPORTCENTER-0352",
    title: "Human Support Center and Ticket Tracker - Item 352",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0353",
    code: "NEC-SUPPORTCENTER-0353",
    title: "Human Support Center and Ticket Tracker - Item 353",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0354",
    code: "NEC-SUPPORTCENTER-0354",
    title: "Human Support Center and Ticket Tracker - Item 354",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0355",
    code: "NEC-SUPPORTCENTER-0355",
    title: "Human Support Center and Ticket Tracker - Item 355",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0356",
    code: "NEC-SUPPORTCENTER-0356",
    title: "Human Support Center and Ticket Tracker - Item 356",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0357",
    code: "NEC-SUPPORTCENTER-0357",
    title: "Human Support Center and Ticket Tracker - Item 357",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0358",
    code: "NEC-SUPPORTCENTER-0358",
    title: "Human Support Center and Ticket Tracker - Item 358",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0359",
    code: "NEC-SUPPORTCENTER-0359",
    title: "Human Support Center and Ticket Tracker - Item 359",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0360",
    code: "NEC-SUPPORTCENTER-0360",
    title: "Human Support Center and Ticket Tracker - Item 360",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0361",
    code: "NEC-SUPPORTCENTER-0361",
    title: "Human Support Center and Ticket Tracker - Item 361",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0362",
    code: "NEC-SUPPORTCENTER-0362",
    title: "Human Support Center and Ticket Tracker - Item 362",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0363",
    code: "NEC-SUPPORTCENTER-0363",
    title: "Human Support Center and Ticket Tracker - Item 363",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0364",
    code: "NEC-SUPPORTCENTER-0364",
    title: "Human Support Center and Ticket Tracker - Item 364",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0365",
    code: "NEC-SUPPORTCENTER-0365",
    title: "Human Support Center and Ticket Tracker - Item 365",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0366",
    code: "NEC-SUPPORTCENTER-0366",
    title: "Human Support Center and Ticket Tracker - Item 366",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0367",
    code: "NEC-SUPPORTCENTER-0367",
    title: "Human Support Center and Ticket Tracker - Item 367",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0368",
    code: "NEC-SUPPORTCENTER-0368",
    title: "Human Support Center and Ticket Tracker - Item 368",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0369",
    code: "NEC-SUPPORTCENTER-0369",
    title: "Human Support Center and Ticket Tracker - Item 369",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0370",
    code: "NEC-SUPPORTCENTER-0370",
    title: "Human Support Center and Ticket Tracker - Item 370",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0371",
    code: "NEC-SUPPORTCENTER-0371",
    title: "Human Support Center and Ticket Tracker - Item 371",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0372",
    code: "NEC-SUPPORTCENTER-0372",
    title: "Human Support Center and Ticket Tracker - Item 372",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0373",
    code: "NEC-SUPPORTCENTER-0373",
    title: "Human Support Center and Ticket Tracker - Item 373",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0374",
    code: "NEC-SUPPORTCENTER-0374",
    title: "Human Support Center and Ticket Tracker - Item 374",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0375",
    code: "NEC-SUPPORTCENTER-0375",
    title: "Human Support Center and Ticket Tracker - Item 375",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0376",
    code: "NEC-SUPPORTCENTER-0376",
    title: "Human Support Center and Ticket Tracker - Item 376",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0377",
    code: "NEC-SUPPORTCENTER-0377",
    title: "Human Support Center and Ticket Tracker - Item 377",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0378",
    code: "NEC-SUPPORTCENTER-0378",
    title: "Human Support Center and Ticket Tracker - Item 378",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0379",
    code: "NEC-SUPPORTCENTER-0379",
    title: "Human Support Center and Ticket Tracker - Item 379",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0380",
    code: "NEC-SUPPORTCENTER-0380",
    title: "Human Support Center and Ticket Tracker - Item 380",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0381",
    code: "NEC-SUPPORTCENTER-0381",
    title: "Human Support Center and Ticket Tracker - Item 381",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0382",
    code: "NEC-SUPPORTCENTER-0382",
    title: "Human Support Center and Ticket Tracker - Item 382",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0383",
    code: "NEC-SUPPORTCENTER-0383",
    title: "Human Support Center and Ticket Tracker - Item 383",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0384",
    code: "NEC-SUPPORTCENTER-0384",
    title: "Human Support Center and Ticket Tracker - Item 384",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0385",
    code: "NEC-SUPPORTCENTER-0385",
    title: "Human Support Center and Ticket Tracker - Item 385",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0386",
    code: "NEC-SUPPORTCENTER-0386",
    title: "Human Support Center and Ticket Tracker - Item 386",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0387",
    code: "NEC-SUPPORTCENTER-0387",
    title: "Human Support Center and Ticket Tracker - Item 387",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0388",
    code: "NEC-SUPPORTCENTER-0388",
    title: "Human Support Center and Ticket Tracker - Item 388",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0389",
    code: "NEC-SUPPORTCENTER-0389",
    title: "Human Support Center and Ticket Tracker - Item 389",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0390",
    code: "NEC-SUPPORTCENTER-0390",
    title: "Human Support Center and Ticket Tracker - Item 390",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0391",
    code: "NEC-SUPPORTCENTER-0391",
    title: "Human Support Center and Ticket Tracker - Item 391",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0392",
    code: "NEC-SUPPORTCENTER-0392",
    title: "Human Support Center and Ticket Tracker - Item 392",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0393",
    code: "NEC-SUPPORTCENTER-0393",
    title: "Human Support Center and Ticket Tracker - Item 393",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0394",
    code: "NEC-SUPPORTCENTER-0394",
    title: "Human Support Center and Ticket Tracker - Item 394",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0395",
    code: "NEC-SUPPORTCENTER-0395",
    title: "Human Support Center and Ticket Tracker - Item 395",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0396",
    code: "NEC-SUPPORTCENTER-0396",
    title: "Human Support Center and Ticket Tracker - Item 396",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0397",
    code: "NEC-SUPPORTCENTER-0397",
    title: "Human Support Center and Ticket Tracker - Item 397",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0398",
    code: "NEC-SUPPORTCENTER-0398",
    title: "Human Support Center and Ticket Tracker - Item 398",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0399",
    code: "NEC-SUPPORTCENTER-0399",
    title: "Human Support Center and Ticket Tracker - Item 399",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0400",
    code: "NEC-SUPPORTCENTER-0400",
    title: "Human Support Center and Ticket Tracker - Item 400",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0401",
    code: "NEC-SUPPORTCENTER-0401",
    title: "Human Support Center and Ticket Tracker - Item 401",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0402",
    code: "NEC-SUPPORTCENTER-0402",
    title: "Human Support Center and Ticket Tracker - Item 402",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0403",
    code: "NEC-SUPPORTCENTER-0403",
    title: "Human Support Center and Ticket Tracker - Item 403",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0404",
    code: "NEC-SUPPORTCENTER-0404",
    title: "Human Support Center and Ticket Tracker - Item 404",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0405",
    code: "NEC-SUPPORTCENTER-0405",
    title: "Human Support Center and Ticket Tracker - Item 405",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0406",
    code: "NEC-SUPPORTCENTER-0406",
    title: "Human Support Center and Ticket Tracker - Item 406",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0407",
    code: "NEC-SUPPORTCENTER-0407",
    title: "Human Support Center and Ticket Tracker - Item 407",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0408",
    code: "NEC-SUPPORTCENTER-0408",
    title: "Human Support Center and Ticket Tracker - Item 408",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0409",
    code: "NEC-SUPPORTCENTER-0409",
    title: "Human Support Center and Ticket Tracker - Item 409",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0410",
    code: "NEC-SUPPORTCENTER-0410",
    title: "Human Support Center and Ticket Tracker - Item 410",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0411",
    code: "NEC-SUPPORTCENTER-0411",
    title: "Human Support Center and Ticket Tracker - Item 411",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0412",
    code: "NEC-SUPPORTCENTER-0412",
    title: "Human Support Center and Ticket Tracker - Item 412",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0413",
    code: "NEC-SUPPORTCENTER-0413",
    title: "Human Support Center and Ticket Tracker - Item 413",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0414",
    code: "NEC-SUPPORTCENTER-0414",
    title: "Human Support Center and Ticket Tracker - Item 414",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0415",
    code: "NEC-SUPPORTCENTER-0415",
    title: "Human Support Center and Ticket Tracker - Item 415",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0416",
    code: "NEC-SUPPORTCENTER-0416",
    title: "Human Support Center and Ticket Tracker - Item 416",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0417",
    code: "NEC-SUPPORTCENTER-0417",
    title: "Human Support Center and Ticket Tracker - Item 417",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0418",
    code: "NEC-SUPPORTCENTER-0418",
    title: "Human Support Center and Ticket Tracker - Item 418",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0419",
    code: "NEC-SUPPORTCENTER-0419",
    title: "Human Support Center and Ticket Tracker - Item 419",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0420",
    code: "NEC-SUPPORTCENTER-0420",
    title: "Human Support Center and Ticket Tracker - Item 420",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0421",
    code: "NEC-SUPPORTCENTER-0421",
    title: "Human Support Center and Ticket Tracker - Item 421",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0422",
    code: "NEC-SUPPORTCENTER-0422",
    title: "Human Support Center and Ticket Tracker - Item 422",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0423",
    code: "NEC-SUPPORTCENTER-0423",
    title: "Human Support Center and Ticket Tracker - Item 423",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0424",
    code: "NEC-SUPPORTCENTER-0424",
    title: "Human Support Center and Ticket Tracker - Item 424",
    category: "SUPPORTCENTER_CORE",
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
    id: "supportcenter-0425",
    code: "NEC-SUPPORTCENTER-0425",
    title: "Human Support Center and Ticket Tracker - Item 425",
    category: "SUPPORTCENTER_CORE",
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

export function filterSUPPORTCENTERBySemester(semester: number): AcademicEntityItem[] {
  return SUPPORTCENTER_REGISTRY.filter(item => item.semester === semester);
}

export function computeSUPPORTCENTERAverageCredits(): number {
  const total = SUPPORTCENTER_REGISTRY.reduce((acc, curr) => acc + curr.credits, 0);
  return total / SUPPORTCENTER_REGISTRY.length;
}
