/**
 * Narasaraopeta Engineering College (Autonomous) — Frontend Enterprise Module
 * Module: Common UI Primitives and Modals (PRIMITIVES)
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

export const PRIMITIVES_REGISTRY: AcademicEntityItem[] = [
  {
    id: "primitives-0001",
    code: "NEC-PRIMITIVES-0001",
    title: "Common UI Primitives and Modals - Item 1",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0002",
    code: "NEC-PRIMITIVES-0002",
    title: "Common UI Primitives and Modals - Item 2",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0003",
    code: "NEC-PRIMITIVES-0003",
    title: "Common UI Primitives and Modals - Item 3",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0004",
    code: "NEC-PRIMITIVES-0004",
    title: "Common UI Primitives and Modals - Item 4",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0005",
    code: "NEC-PRIMITIVES-0005",
    title: "Common UI Primitives and Modals - Item 5",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0006",
    code: "NEC-PRIMITIVES-0006",
    title: "Common UI Primitives and Modals - Item 6",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0007",
    code: "NEC-PRIMITIVES-0007",
    title: "Common UI Primitives and Modals - Item 7",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0008",
    code: "NEC-PRIMITIVES-0008",
    title: "Common UI Primitives and Modals - Item 8",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0009",
    code: "NEC-PRIMITIVES-0009",
    title: "Common UI Primitives and Modals - Item 9",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0010",
    code: "NEC-PRIMITIVES-0010",
    title: "Common UI Primitives and Modals - Item 10",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0011",
    code: "NEC-PRIMITIVES-0011",
    title: "Common UI Primitives and Modals - Item 11",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0012",
    code: "NEC-PRIMITIVES-0012",
    title: "Common UI Primitives and Modals - Item 12",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0013",
    code: "NEC-PRIMITIVES-0013",
    title: "Common UI Primitives and Modals - Item 13",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0014",
    code: "NEC-PRIMITIVES-0014",
    title: "Common UI Primitives and Modals - Item 14",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0015",
    code: "NEC-PRIMITIVES-0015",
    title: "Common UI Primitives and Modals - Item 15",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0016",
    code: "NEC-PRIMITIVES-0016",
    title: "Common UI Primitives and Modals - Item 16",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0017",
    code: "NEC-PRIMITIVES-0017",
    title: "Common UI Primitives and Modals - Item 17",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0018",
    code: "NEC-PRIMITIVES-0018",
    title: "Common UI Primitives and Modals - Item 18",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0019",
    code: "NEC-PRIMITIVES-0019",
    title: "Common UI Primitives and Modals - Item 19",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0020",
    code: "NEC-PRIMITIVES-0020",
    title: "Common UI Primitives and Modals - Item 20",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0021",
    code: "NEC-PRIMITIVES-0021",
    title: "Common UI Primitives and Modals - Item 21",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0022",
    code: "NEC-PRIMITIVES-0022",
    title: "Common UI Primitives and Modals - Item 22",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0023",
    code: "NEC-PRIMITIVES-0023",
    title: "Common UI Primitives and Modals - Item 23",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0024",
    code: "NEC-PRIMITIVES-0024",
    title: "Common UI Primitives and Modals - Item 24",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0025",
    code: "NEC-PRIMITIVES-0025",
    title: "Common UI Primitives and Modals - Item 25",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0026",
    code: "NEC-PRIMITIVES-0026",
    title: "Common UI Primitives and Modals - Item 26",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0027",
    code: "NEC-PRIMITIVES-0027",
    title: "Common UI Primitives and Modals - Item 27",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0028",
    code: "NEC-PRIMITIVES-0028",
    title: "Common UI Primitives and Modals - Item 28",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0029",
    code: "NEC-PRIMITIVES-0029",
    title: "Common UI Primitives and Modals - Item 29",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0030",
    code: "NEC-PRIMITIVES-0030",
    title: "Common UI Primitives and Modals - Item 30",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0031",
    code: "NEC-PRIMITIVES-0031",
    title: "Common UI Primitives and Modals - Item 31",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0032",
    code: "NEC-PRIMITIVES-0032",
    title: "Common UI Primitives and Modals - Item 32",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0033",
    code: "NEC-PRIMITIVES-0033",
    title: "Common UI Primitives and Modals - Item 33",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0034",
    code: "NEC-PRIMITIVES-0034",
    title: "Common UI Primitives and Modals - Item 34",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0035",
    code: "NEC-PRIMITIVES-0035",
    title: "Common UI Primitives and Modals - Item 35",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0036",
    code: "NEC-PRIMITIVES-0036",
    title: "Common UI Primitives and Modals - Item 36",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0037",
    code: "NEC-PRIMITIVES-0037",
    title: "Common UI Primitives and Modals - Item 37",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0038",
    code: "NEC-PRIMITIVES-0038",
    title: "Common UI Primitives and Modals - Item 38",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0039",
    code: "NEC-PRIMITIVES-0039",
    title: "Common UI Primitives and Modals - Item 39",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0040",
    code: "NEC-PRIMITIVES-0040",
    title: "Common UI Primitives and Modals - Item 40",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0041",
    code: "NEC-PRIMITIVES-0041",
    title: "Common UI Primitives and Modals - Item 41",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0042",
    code: "NEC-PRIMITIVES-0042",
    title: "Common UI Primitives and Modals - Item 42",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0043",
    code: "NEC-PRIMITIVES-0043",
    title: "Common UI Primitives and Modals - Item 43",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0044",
    code: "NEC-PRIMITIVES-0044",
    title: "Common UI Primitives and Modals - Item 44",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0045",
    code: "NEC-PRIMITIVES-0045",
    title: "Common UI Primitives and Modals - Item 45",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0046",
    code: "NEC-PRIMITIVES-0046",
    title: "Common UI Primitives and Modals - Item 46",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0047",
    code: "NEC-PRIMITIVES-0047",
    title: "Common UI Primitives and Modals - Item 47",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0048",
    code: "NEC-PRIMITIVES-0048",
    title: "Common UI Primitives and Modals - Item 48",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0049",
    code: "NEC-PRIMITIVES-0049",
    title: "Common UI Primitives and Modals - Item 49",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0050",
    code: "NEC-PRIMITIVES-0050",
    title: "Common UI Primitives and Modals - Item 50",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0051",
    code: "NEC-PRIMITIVES-0051",
    title: "Common UI Primitives and Modals - Item 51",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0052",
    code: "NEC-PRIMITIVES-0052",
    title: "Common UI Primitives and Modals - Item 52",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0053",
    code: "NEC-PRIMITIVES-0053",
    title: "Common UI Primitives and Modals - Item 53",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0054",
    code: "NEC-PRIMITIVES-0054",
    title: "Common UI Primitives and Modals - Item 54",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0055",
    code: "NEC-PRIMITIVES-0055",
    title: "Common UI Primitives and Modals - Item 55",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0056",
    code: "NEC-PRIMITIVES-0056",
    title: "Common UI Primitives and Modals - Item 56",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0057",
    code: "NEC-PRIMITIVES-0057",
    title: "Common UI Primitives and Modals - Item 57",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0058",
    code: "NEC-PRIMITIVES-0058",
    title: "Common UI Primitives and Modals - Item 58",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0059",
    code: "NEC-PRIMITIVES-0059",
    title: "Common UI Primitives and Modals - Item 59",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0060",
    code: "NEC-PRIMITIVES-0060",
    title: "Common UI Primitives and Modals - Item 60",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0061",
    code: "NEC-PRIMITIVES-0061",
    title: "Common UI Primitives and Modals - Item 61",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0062",
    code: "NEC-PRIMITIVES-0062",
    title: "Common UI Primitives and Modals - Item 62",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0063",
    code: "NEC-PRIMITIVES-0063",
    title: "Common UI Primitives and Modals - Item 63",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0064",
    code: "NEC-PRIMITIVES-0064",
    title: "Common UI Primitives and Modals - Item 64",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0065",
    code: "NEC-PRIMITIVES-0065",
    title: "Common UI Primitives and Modals - Item 65",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0066",
    code: "NEC-PRIMITIVES-0066",
    title: "Common UI Primitives and Modals - Item 66",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0067",
    code: "NEC-PRIMITIVES-0067",
    title: "Common UI Primitives and Modals - Item 67",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0068",
    code: "NEC-PRIMITIVES-0068",
    title: "Common UI Primitives and Modals - Item 68",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0069",
    code: "NEC-PRIMITIVES-0069",
    title: "Common UI Primitives and Modals - Item 69",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0070",
    code: "NEC-PRIMITIVES-0070",
    title: "Common UI Primitives and Modals - Item 70",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0071",
    code: "NEC-PRIMITIVES-0071",
    title: "Common UI Primitives and Modals - Item 71",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0072",
    code: "NEC-PRIMITIVES-0072",
    title: "Common UI Primitives and Modals - Item 72",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0073",
    code: "NEC-PRIMITIVES-0073",
    title: "Common UI Primitives and Modals - Item 73",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0074",
    code: "NEC-PRIMITIVES-0074",
    title: "Common UI Primitives and Modals - Item 74",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0075",
    code: "NEC-PRIMITIVES-0075",
    title: "Common UI Primitives and Modals - Item 75",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0076",
    code: "NEC-PRIMITIVES-0076",
    title: "Common UI Primitives and Modals - Item 76",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0077",
    code: "NEC-PRIMITIVES-0077",
    title: "Common UI Primitives and Modals - Item 77",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0078",
    code: "NEC-PRIMITIVES-0078",
    title: "Common UI Primitives and Modals - Item 78",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0079",
    code: "NEC-PRIMITIVES-0079",
    title: "Common UI Primitives and Modals - Item 79",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0080",
    code: "NEC-PRIMITIVES-0080",
    title: "Common UI Primitives and Modals - Item 80",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0081",
    code: "NEC-PRIMITIVES-0081",
    title: "Common UI Primitives and Modals - Item 81",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0082",
    code: "NEC-PRIMITIVES-0082",
    title: "Common UI Primitives and Modals - Item 82",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0083",
    code: "NEC-PRIMITIVES-0083",
    title: "Common UI Primitives and Modals - Item 83",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0084",
    code: "NEC-PRIMITIVES-0084",
    title: "Common UI Primitives and Modals - Item 84",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0085",
    code: "NEC-PRIMITIVES-0085",
    title: "Common UI Primitives and Modals - Item 85",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0086",
    code: "NEC-PRIMITIVES-0086",
    title: "Common UI Primitives and Modals - Item 86",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0087",
    code: "NEC-PRIMITIVES-0087",
    title: "Common UI Primitives and Modals - Item 87",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0088",
    code: "NEC-PRIMITIVES-0088",
    title: "Common UI Primitives and Modals - Item 88",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0089",
    code: "NEC-PRIMITIVES-0089",
    title: "Common UI Primitives and Modals - Item 89",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0090",
    code: "NEC-PRIMITIVES-0090",
    title: "Common UI Primitives and Modals - Item 90",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0091",
    code: "NEC-PRIMITIVES-0091",
    title: "Common UI Primitives and Modals - Item 91",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0092",
    code: "NEC-PRIMITIVES-0092",
    title: "Common UI Primitives and Modals - Item 92",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0093",
    code: "NEC-PRIMITIVES-0093",
    title: "Common UI Primitives and Modals - Item 93",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0094",
    code: "NEC-PRIMITIVES-0094",
    title: "Common UI Primitives and Modals - Item 94",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0095",
    code: "NEC-PRIMITIVES-0095",
    title: "Common UI Primitives and Modals - Item 95",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0096",
    code: "NEC-PRIMITIVES-0096",
    title: "Common UI Primitives and Modals - Item 96",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0097",
    code: "NEC-PRIMITIVES-0097",
    title: "Common UI Primitives and Modals - Item 97",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0098",
    code: "NEC-PRIMITIVES-0098",
    title: "Common UI Primitives and Modals - Item 98",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0099",
    code: "NEC-PRIMITIVES-0099",
    title: "Common UI Primitives and Modals - Item 99",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0100",
    code: "NEC-PRIMITIVES-0100",
    title: "Common UI Primitives and Modals - Item 100",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0101",
    code: "NEC-PRIMITIVES-0101",
    title: "Common UI Primitives and Modals - Item 101",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0102",
    code: "NEC-PRIMITIVES-0102",
    title: "Common UI Primitives and Modals - Item 102",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0103",
    code: "NEC-PRIMITIVES-0103",
    title: "Common UI Primitives and Modals - Item 103",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0104",
    code: "NEC-PRIMITIVES-0104",
    title: "Common UI Primitives and Modals - Item 104",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0105",
    code: "NEC-PRIMITIVES-0105",
    title: "Common UI Primitives and Modals - Item 105",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0106",
    code: "NEC-PRIMITIVES-0106",
    title: "Common UI Primitives and Modals - Item 106",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0107",
    code: "NEC-PRIMITIVES-0107",
    title: "Common UI Primitives and Modals - Item 107",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0108",
    code: "NEC-PRIMITIVES-0108",
    title: "Common UI Primitives and Modals - Item 108",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0109",
    code: "NEC-PRIMITIVES-0109",
    title: "Common UI Primitives and Modals - Item 109",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0110",
    code: "NEC-PRIMITIVES-0110",
    title: "Common UI Primitives and Modals - Item 110",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0111",
    code: "NEC-PRIMITIVES-0111",
    title: "Common UI Primitives and Modals - Item 111",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0112",
    code: "NEC-PRIMITIVES-0112",
    title: "Common UI Primitives and Modals - Item 112",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0113",
    code: "NEC-PRIMITIVES-0113",
    title: "Common UI Primitives and Modals - Item 113",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0114",
    code: "NEC-PRIMITIVES-0114",
    title: "Common UI Primitives and Modals - Item 114",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0115",
    code: "NEC-PRIMITIVES-0115",
    title: "Common UI Primitives and Modals - Item 115",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0116",
    code: "NEC-PRIMITIVES-0116",
    title: "Common UI Primitives and Modals - Item 116",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0117",
    code: "NEC-PRIMITIVES-0117",
    title: "Common UI Primitives and Modals - Item 117",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0118",
    code: "NEC-PRIMITIVES-0118",
    title: "Common UI Primitives and Modals - Item 118",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0119",
    code: "NEC-PRIMITIVES-0119",
    title: "Common UI Primitives and Modals - Item 119",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0120",
    code: "NEC-PRIMITIVES-0120",
    title: "Common UI Primitives and Modals - Item 120",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0121",
    code: "NEC-PRIMITIVES-0121",
    title: "Common UI Primitives and Modals - Item 121",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0122",
    code: "NEC-PRIMITIVES-0122",
    title: "Common UI Primitives and Modals - Item 122",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0123",
    code: "NEC-PRIMITIVES-0123",
    title: "Common UI Primitives and Modals - Item 123",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0124",
    code: "NEC-PRIMITIVES-0124",
    title: "Common UI Primitives and Modals - Item 124",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0125",
    code: "NEC-PRIMITIVES-0125",
    title: "Common UI Primitives and Modals - Item 125",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0126",
    code: "NEC-PRIMITIVES-0126",
    title: "Common UI Primitives and Modals - Item 126",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0127",
    code: "NEC-PRIMITIVES-0127",
    title: "Common UI Primitives and Modals - Item 127",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0128",
    code: "NEC-PRIMITIVES-0128",
    title: "Common UI Primitives and Modals - Item 128",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0129",
    code: "NEC-PRIMITIVES-0129",
    title: "Common UI Primitives and Modals - Item 129",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0130",
    code: "NEC-PRIMITIVES-0130",
    title: "Common UI Primitives and Modals - Item 130",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0131",
    code: "NEC-PRIMITIVES-0131",
    title: "Common UI Primitives and Modals - Item 131",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0132",
    code: "NEC-PRIMITIVES-0132",
    title: "Common UI Primitives and Modals - Item 132",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0133",
    code: "NEC-PRIMITIVES-0133",
    title: "Common UI Primitives and Modals - Item 133",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0134",
    code: "NEC-PRIMITIVES-0134",
    title: "Common UI Primitives and Modals - Item 134",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0135",
    code: "NEC-PRIMITIVES-0135",
    title: "Common UI Primitives and Modals - Item 135",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0136",
    code: "NEC-PRIMITIVES-0136",
    title: "Common UI Primitives and Modals - Item 136",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0137",
    code: "NEC-PRIMITIVES-0137",
    title: "Common UI Primitives and Modals - Item 137",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0138",
    code: "NEC-PRIMITIVES-0138",
    title: "Common UI Primitives and Modals - Item 138",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0139",
    code: "NEC-PRIMITIVES-0139",
    title: "Common UI Primitives and Modals - Item 139",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0140",
    code: "NEC-PRIMITIVES-0140",
    title: "Common UI Primitives and Modals - Item 140",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0141",
    code: "NEC-PRIMITIVES-0141",
    title: "Common UI Primitives and Modals - Item 141",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0142",
    code: "NEC-PRIMITIVES-0142",
    title: "Common UI Primitives and Modals - Item 142",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0143",
    code: "NEC-PRIMITIVES-0143",
    title: "Common UI Primitives and Modals - Item 143",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0144",
    code: "NEC-PRIMITIVES-0144",
    title: "Common UI Primitives and Modals - Item 144",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0145",
    code: "NEC-PRIMITIVES-0145",
    title: "Common UI Primitives and Modals - Item 145",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0146",
    code: "NEC-PRIMITIVES-0146",
    title: "Common UI Primitives and Modals - Item 146",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0147",
    code: "NEC-PRIMITIVES-0147",
    title: "Common UI Primitives and Modals - Item 147",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0148",
    code: "NEC-PRIMITIVES-0148",
    title: "Common UI Primitives and Modals - Item 148",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0149",
    code: "NEC-PRIMITIVES-0149",
    title: "Common UI Primitives and Modals - Item 149",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0150",
    code: "NEC-PRIMITIVES-0150",
    title: "Common UI Primitives and Modals - Item 150",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0151",
    code: "NEC-PRIMITIVES-0151",
    title: "Common UI Primitives and Modals - Item 151",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0152",
    code: "NEC-PRIMITIVES-0152",
    title: "Common UI Primitives and Modals - Item 152",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0153",
    code: "NEC-PRIMITIVES-0153",
    title: "Common UI Primitives and Modals - Item 153",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0154",
    code: "NEC-PRIMITIVES-0154",
    title: "Common UI Primitives and Modals - Item 154",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0155",
    code: "NEC-PRIMITIVES-0155",
    title: "Common UI Primitives and Modals - Item 155",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0156",
    code: "NEC-PRIMITIVES-0156",
    title: "Common UI Primitives and Modals - Item 156",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0157",
    code: "NEC-PRIMITIVES-0157",
    title: "Common UI Primitives and Modals - Item 157",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0158",
    code: "NEC-PRIMITIVES-0158",
    title: "Common UI Primitives and Modals - Item 158",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0159",
    code: "NEC-PRIMITIVES-0159",
    title: "Common UI Primitives and Modals - Item 159",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0160",
    code: "NEC-PRIMITIVES-0160",
    title: "Common UI Primitives and Modals - Item 160",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0161",
    code: "NEC-PRIMITIVES-0161",
    title: "Common UI Primitives and Modals - Item 161",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0162",
    code: "NEC-PRIMITIVES-0162",
    title: "Common UI Primitives and Modals - Item 162",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0163",
    code: "NEC-PRIMITIVES-0163",
    title: "Common UI Primitives and Modals - Item 163",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0164",
    code: "NEC-PRIMITIVES-0164",
    title: "Common UI Primitives and Modals - Item 164",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0165",
    code: "NEC-PRIMITIVES-0165",
    title: "Common UI Primitives and Modals - Item 165",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0166",
    code: "NEC-PRIMITIVES-0166",
    title: "Common UI Primitives and Modals - Item 166",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0167",
    code: "NEC-PRIMITIVES-0167",
    title: "Common UI Primitives and Modals - Item 167",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0168",
    code: "NEC-PRIMITIVES-0168",
    title: "Common UI Primitives and Modals - Item 168",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0169",
    code: "NEC-PRIMITIVES-0169",
    title: "Common UI Primitives and Modals - Item 169",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0170",
    code: "NEC-PRIMITIVES-0170",
    title: "Common UI Primitives and Modals - Item 170",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0171",
    code: "NEC-PRIMITIVES-0171",
    title: "Common UI Primitives and Modals - Item 171",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0172",
    code: "NEC-PRIMITIVES-0172",
    title: "Common UI Primitives and Modals - Item 172",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0173",
    code: "NEC-PRIMITIVES-0173",
    title: "Common UI Primitives and Modals - Item 173",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0174",
    code: "NEC-PRIMITIVES-0174",
    title: "Common UI Primitives and Modals - Item 174",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0175",
    code: "NEC-PRIMITIVES-0175",
    title: "Common UI Primitives and Modals - Item 175",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0176",
    code: "NEC-PRIMITIVES-0176",
    title: "Common UI Primitives and Modals - Item 176",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0177",
    code: "NEC-PRIMITIVES-0177",
    title: "Common UI Primitives and Modals - Item 177",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0178",
    code: "NEC-PRIMITIVES-0178",
    title: "Common UI Primitives and Modals - Item 178",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0179",
    code: "NEC-PRIMITIVES-0179",
    title: "Common UI Primitives and Modals - Item 179",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0180",
    code: "NEC-PRIMITIVES-0180",
    title: "Common UI Primitives and Modals - Item 180",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0181",
    code: "NEC-PRIMITIVES-0181",
    title: "Common UI Primitives and Modals - Item 181",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0182",
    code: "NEC-PRIMITIVES-0182",
    title: "Common UI Primitives and Modals - Item 182",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0183",
    code: "NEC-PRIMITIVES-0183",
    title: "Common UI Primitives and Modals - Item 183",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0184",
    code: "NEC-PRIMITIVES-0184",
    title: "Common UI Primitives and Modals - Item 184",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0185",
    code: "NEC-PRIMITIVES-0185",
    title: "Common UI Primitives and Modals - Item 185",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0186",
    code: "NEC-PRIMITIVES-0186",
    title: "Common UI Primitives and Modals - Item 186",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0187",
    code: "NEC-PRIMITIVES-0187",
    title: "Common UI Primitives and Modals - Item 187",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0188",
    code: "NEC-PRIMITIVES-0188",
    title: "Common UI Primitives and Modals - Item 188",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0189",
    code: "NEC-PRIMITIVES-0189",
    title: "Common UI Primitives and Modals - Item 189",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0190",
    code: "NEC-PRIMITIVES-0190",
    title: "Common UI Primitives and Modals - Item 190",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0191",
    code: "NEC-PRIMITIVES-0191",
    title: "Common UI Primitives and Modals - Item 191",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0192",
    code: "NEC-PRIMITIVES-0192",
    title: "Common UI Primitives and Modals - Item 192",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0193",
    code: "NEC-PRIMITIVES-0193",
    title: "Common UI Primitives and Modals - Item 193",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0194",
    code: "NEC-PRIMITIVES-0194",
    title: "Common UI Primitives and Modals - Item 194",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0195",
    code: "NEC-PRIMITIVES-0195",
    title: "Common UI Primitives and Modals - Item 195",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0196",
    code: "NEC-PRIMITIVES-0196",
    title: "Common UI Primitives and Modals - Item 196",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0197",
    code: "NEC-PRIMITIVES-0197",
    title: "Common UI Primitives and Modals - Item 197",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0198",
    code: "NEC-PRIMITIVES-0198",
    title: "Common UI Primitives and Modals - Item 198",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0199",
    code: "NEC-PRIMITIVES-0199",
    title: "Common UI Primitives and Modals - Item 199",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0200",
    code: "NEC-PRIMITIVES-0200",
    title: "Common UI Primitives and Modals - Item 200",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0201",
    code: "NEC-PRIMITIVES-0201",
    title: "Common UI Primitives and Modals - Item 201",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0202",
    code: "NEC-PRIMITIVES-0202",
    title: "Common UI Primitives and Modals - Item 202",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0203",
    code: "NEC-PRIMITIVES-0203",
    title: "Common UI Primitives and Modals - Item 203",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0204",
    code: "NEC-PRIMITIVES-0204",
    title: "Common UI Primitives and Modals - Item 204",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0205",
    code: "NEC-PRIMITIVES-0205",
    title: "Common UI Primitives and Modals - Item 205",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0206",
    code: "NEC-PRIMITIVES-0206",
    title: "Common UI Primitives and Modals - Item 206",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0207",
    code: "NEC-PRIMITIVES-0207",
    title: "Common UI Primitives and Modals - Item 207",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0208",
    code: "NEC-PRIMITIVES-0208",
    title: "Common UI Primitives and Modals - Item 208",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0209",
    code: "NEC-PRIMITIVES-0209",
    title: "Common UI Primitives and Modals - Item 209",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0210",
    code: "NEC-PRIMITIVES-0210",
    title: "Common UI Primitives and Modals - Item 210",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0211",
    code: "NEC-PRIMITIVES-0211",
    title: "Common UI Primitives and Modals - Item 211",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0212",
    code: "NEC-PRIMITIVES-0212",
    title: "Common UI Primitives and Modals - Item 212",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0213",
    code: "NEC-PRIMITIVES-0213",
    title: "Common UI Primitives and Modals - Item 213",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0214",
    code: "NEC-PRIMITIVES-0214",
    title: "Common UI Primitives and Modals - Item 214",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0215",
    code: "NEC-PRIMITIVES-0215",
    title: "Common UI Primitives and Modals - Item 215",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0216",
    code: "NEC-PRIMITIVES-0216",
    title: "Common UI Primitives and Modals - Item 216",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0217",
    code: "NEC-PRIMITIVES-0217",
    title: "Common UI Primitives and Modals - Item 217",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0218",
    code: "NEC-PRIMITIVES-0218",
    title: "Common UI Primitives and Modals - Item 218",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0219",
    code: "NEC-PRIMITIVES-0219",
    title: "Common UI Primitives and Modals - Item 219",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0220",
    code: "NEC-PRIMITIVES-0220",
    title: "Common UI Primitives and Modals - Item 220",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0221",
    code: "NEC-PRIMITIVES-0221",
    title: "Common UI Primitives and Modals - Item 221",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0222",
    code: "NEC-PRIMITIVES-0222",
    title: "Common UI Primitives and Modals - Item 222",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0223",
    code: "NEC-PRIMITIVES-0223",
    title: "Common UI Primitives and Modals - Item 223",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0224",
    code: "NEC-PRIMITIVES-0224",
    title: "Common UI Primitives and Modals - Item 224",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0225",
    code: "NEC-PRIMITIVES-0225",
    title: "Common UI Primitives and Modals - Item 225",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0226",
    code: "NEC-PRIMITIVES-0226",
    title: "Common UI Primitives and Modals - Item 226",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0227",
    code: "NEC-PRIMITIVES-0227",
    title: "Common UI Primitives and Modals - Item 227",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0228",
    code: "NEC-PRIMITIVES-0228",
    title: "Common UI Primitives and Modals - Item 228",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0229",
    code: "NEC-PRIMITIVES-0229",
    title: "Common UI Primitives and Modals - Item 229",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0230",
    code: "NEC-PRIMITIVES-0230",
    title: "Common UI Primitives and Modals - Item 230",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0231",
    code: "NEC-PRIMITIVES-0231",
    title: "Common UI Primitives and Modals - Item 231",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0232",
    code: "NEC-PRIMITIVES-0232",
    title: "Common UI Primitives and Modals - Item 232",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0233",
    code: "NEC-PRIMITIVES-0233",
    title: "Common UI Primitives and Modals - Item 233",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0234",
    code: "NEC-PRIMITIVES-0234",
    title: "Common UI Primitives and Modals - Item 234",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0235",
    code: "NEC-PRIMITIVES-0235",
    title: "Common UI Primitives and Modals - Item 235",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0236",
    code: "NEC-PRIMITIVES-0236",
    title: "Common UI Primitives and Modals - Item 236",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0237",
    code: "NEC-PRIMITIVES-0237",
    title: "Common UI Primitives and Modals - Item 237",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0238",
    code: "NEC-PRIMITIVES-0238",
    title: "Common UI Primitives and Modals - Item 238",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0239",
    code: "NEC-PRIMITIVES-0239",
    title: "Common UI Primitives and Modals - Item 239",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0240",
    code: "NEC-PRIMITIVES-0240",
    title: "Common UI Primitives and Modals - Item 240",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0241",
    code: "NEC-PRIMITIVES-0241",
    title: "Common UI Primitives and Modals - Item 241",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0242",
    code: "NEC-PRIMITIVES-0242",
    title: "Common UI Primitives and Modals - Item 242",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0243",
    code: "NEC-PRIMITIVES-0243",
    title: "Common UI Primitives and Modals - Item 243",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0244",
    code: "NEC-PRIMITIVES-0244",
    title: "Common UI Primitives and Modals - Item 244",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0245",
    code: "NEC-PRIMITIVES-0245",
    title: "Common UI Primitives and Modals - Item 245",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0246",
    code: "NEC-PRIMITIVES-0246",
    title: "Common UI Primitives and Modals - Item 246",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0247",
    code: "NEC-PRIMITIVES-0247",
    title: "Common UI Primitives and Modals - Item 247",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0248",
    code: "NEC-PRIMITIVES-0248",
    title: "Common UI Primitives and Modals - Item 248",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0249",
    code: "NEC-PRIMITIVES-0249",
    title: "Common UI Primitives and Modals - Item 249",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0250",
    code: "NEC-PRIMITIVES-0250",
    title: "Common UI Primitives and Modals - Item 250",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0251",
    code: "NEC-PRIMITIVES-0251",
    title: "Common UI Primitives and Modals - Item 251",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0252",
    code: "NEC-PRIMITIVES-0252",
    title: "Common UI Primitives and Modals - Item 252",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0253",
    code: "NEC-PRIMITIVES-0253",
    title: "Common UI Primitives and Modals - Item 253",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0254",
    code: "NEC-PRIMITIVES-0254",
    title: "Common UI Primitives and Modals - Item 254",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0255",
    code: "NEC-PRIMITIVES-0255",
    title: "Common UI Primitives and Modals - Item 255",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0256",
    code: "NEC-PRIMITIVES-0256",
    title: "Common UI Primitives and Modals - Item 256",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0257",
    code: "NEC-PRIMITIVES-0257",
    title: "Common UI Primitives and Modals - Item 257",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0258",
    code: "NEC-PRIMITIVES-0258",
    title: "Common UI Primitives and Modals - Item 258",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0259",
    code: "NEC-PRIMITIVES-0259",
    title: "Common UI Primitives and Modals - Item 259",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0260",
    code: "NEC-PRIMITIVES-0260",
    title: "Common UI Primitives and Modals - Item 260",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0261",
    code: "NEC-PRIMITIVES-0261",
    title: "Common UI Primitives and Modals - Item 261",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0262",
    code: "NEC-PRIMITIVES-0262",
    title: "Common UI Primitives and Modals - Item 262",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0263",
    code: "NEC-PRIMITIVES-0263",
    title: "Common UI Primitives and Modals - Item 263",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0264",
    code: "NEC-PRIMITIVES-0264",
    title: "Common UI Primitives and Modals - Item 264",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0265",
    code: "NEC-PRIMITIVES-0265",
    title: "Common UI Primitives and Modals - Item 265",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0266",
    code: "NEC-PRIMITIVES-0266",
    title: "Common UI Primitives and Modals - Item 266",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0267",
    code: "NEC-PRIMITIVES-0267",
    title: "Common UI Primitives and Modals - Item 267",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0268",
    code: "NEC-PRIMITIVES-0268",
    title: "Common UI Primitives and Modals - Item 268",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0269",
    code: "NEC-PRIMITIVES-0269",
    title: "Common UI Primitives and Modals - Item 269",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0270",
    code: "NEC-PRIMITIVES-0270",
    title: "Common UI Primitives and Modals - Item 270",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0271",
    code: "NEC-PRIMITIVES-0271",
    title: "Common UI Primitives and Modals - Item 271",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0272",
    code: "NEC-PRIMITIVES-0272",
    title: "Common UI Primitives and Modals - Item 272",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0273",
    code: "NEC-PRIMITIVES-0273",
    title: "Common UI Primitives and Modals - Item 273",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0274",
    code: "NEC-PRIMITIVES-0274",
    title: "Common UI Primitives and Modals - Item 274",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0275",
    code: "NEC-PRIMITIVES-0275",
    title: "Common UI Primitives and Modals - Item 275",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0276",
    code: "NEC-PRIMITIVES-0276",
    title: "Common UI Primitives and Modals - Item 276",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0277",
    code: "NEC-PRIMITIVES-0277",
    title: "Common UI Primitives and Modals - Item 277",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0278",
    code: "NEC-PRIMITIVES-0278",
    title: "Common UI Primitives and Modals - Item 278",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0279",
    code: "NEC-PRIMITIVES-0279",
    title: "Common UI Primitives and Modals - Item 279",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0280",
    code: "NEC-PRIMITIVES-0280",
    title: "Common UI Primitives and Modals - Item 280",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0281",
    code: "NEC-PRIMITIVES-0281",
    title: "Common UI Primitives and Modals - Item 281",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0282",
    code: "NEC-PRIMITIVES-0282",
    title: "Common UI Primitives and Modals - Item 282",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0283",
    code: "NEC-PRIMITIVES-0283",
    title: "Common UI Primitives and Modals - Item 283",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0284",
    code: "NEC-PRIMITIVES-0284",
    title: "Common UI Primitives and Modals - Item 284",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0285",
    code: "NEC-PRIMITIVES-0285",
    title: "Common UI Primitives and Modals - Item 285",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0286",
    code: "NEC-PRIMITIVES-0286",
    title: "Common UI Primitives and Modals - Item 286",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0287",
    code: "NEC-PRIMITIVES-0287",
    title: "Common UI Primitives and Modals - Item 287",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0288",
    code: "NEC-PRIMITIVES-0288",
    title: "Common UI Primitives and Modals - Item 288",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0289",
    code: "NEC-PRIMITIVES-0289",
    title: "Common UI Primitives and Modals - Item 289",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0290",
    code: "NEC-PRIMITIVES-0290",
    title: "Common UI Primitives and Modals - Item 290",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0291",
    code: "NEC-PRIMITIVES-0291",
    title: "Common UI Primitives and Modals - Item 291",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0292",
    code: "NEC-PRIMITIVES-0292",
    title: "Common UI Primitives and Modals - Item 292",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0293",
    code: "NEC-PRIMITIVES-0293",
    title: "Common UI Primitives and Modals - Item 293",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0294",
    code: "NEC-PRIMITIVES-0294",
    title: "Common UI Primitives and Modals - Item 294",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0295",
    code: "NEC-PRIMITIVES-0295",
    title: "Common UI Primitives and Modals - Item 295",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0296",
    code: "NEC-PRIMITIVES-0296",
    title: "Common UI Primitives and Modals - Item 296",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0297",
    code: "NEC-PRIMITIVES-0297",
    title: "Common UI Primitives and Modals - Item 297",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0298",
    code: "NEC-PRIMITIVES-0298",
    title: "Common UI Primitives and Modals - Item 298",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0299",
    code: "NEC-PRIMITIVES-0299",
    title: "Common UI Primitives and Modals - Item 299",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0300",
    code: "NEC-PRIMITIVES-0300",
    title: "Common UI Primitives and Modals - Item 300",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0301",
    code: "NEC-PRIMITIVES-0301",
    title: "Common UI Primitives and Modals - Item 301",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0302",
    code: "NEC-PRIMITIVES-0302",
    title: "Common UI Primitives and Modals - Item 302",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0303",
    code: "NEC-PRIMITIVES-0303",
    title: "Common UI Primitives and Modals - Item 303",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0304",
    code: "NEC-PRIMITIVES-0304",
    title: "Common UI Primitives and Modals - Item 304",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0305",
    code: "NEC-PRIMITIVES-0305",
    title: "Common UI Primitives and Modals - Item 305",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0306",
    code: "NEC-PRIMITIVES-0306",
    title: "Common UI Primitives and Modals - Item 306",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0307",
    code: "NEC-PRIMITIVES-0307",
    title: "Common UI Primitives and Modals - Item 307",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0308",
    code: "NEC-PRIMITIVES-0308",
    title: "Common UI Primitives and Modals - Item 308",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0309",
    code: "NEC-PRIMITIVES-0309",
    title: "Common UI Primitives and Modals - Item 309",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0310",
    code: "NEC-PRIMITIVES-0310",
    title: "Common UI Primitives and Modals - Item 310",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0311",
    code: "NEC-PRIMITIVES-0311",
    title: "Common UI Primitives and Modals - Item 311",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0312",
    code: "NEC-PRIMITIVES-0312",
    title: "Common UI Primitives and Modals - Item 312",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0313",
    code: "NEC-PRIMITIVES-0313",
    title: "Common UI Primitives and Modals - Item 313",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0314",
    code: "NEC-PRIMITIVES-0314",
    title: "Common UI Primitives and Modals - Item 314",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0315",
    code: "NEC-PRIMITIVES-0315",
    title: "Common UI Primitives and Modals - Item 315",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0316",
    code: "NEC-PRIMITIVES-0316",
    title: "Common UI Primitives and Modals - Item 316",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0317",
    code: "NEC-PRIMITIVES-0317",
    title: "Common UI Primitives and Modals - Item 317",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0318",
    code: "NEC-PRIMITIVES-0318",
    title: "Common UI Primitives and Modals - Item 318",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0319",
    code: "NEC-PRIMITIVES-0319",
    title: "Common UI Primitives and Modals - Item 319",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0320",
    code: "NEC-PRIMITIVES-0320",
    title: "Common UI Primitives and Modals - Item 320",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0321",
    code: "NEC-PRIMITIVES-0321",
    title: "Common UI Primitives and Modals - Item 321",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0322",
    code: "NEC-PRIMITIVES-0322",
    title: "Common UI Primitives and Modals - Item 322",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0323",
    code: "NEC-PRIMITIVES-0323",
    title: "Common UI Primitives and Modals - Item 323",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0324",
    code: "NEC-PRIMITIVES-0324",
    title: "Common UI Primitives and Modals - Item 324",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0325",
    code: "NEC-PRIMITIVES-0325",
    title: "Common UI Primitives and Modals - Item 325",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0326",
    code: "NEC-PRIMITIVES-0326",
    title: "Common UI Primitives and Modals - Item 326",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0327",
    code: "NEC-PRIMITIVES-0327",
    title: "Common UI Primitives and Modals - Item 327",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0328",
    code: "NEC-PRIMITIVES-0328",
    title: "Common UI Primitives and Modals - Item 328",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0329",
    code: "NEC-PRIMITIVES-0329",
    title: "Common UI Primitives and Modals - Item 329",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0330",
    code: "NEC-PRIMITIVES-0330",
    title: "Common UI Primitives and Modals - Item 330",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0331",
    code: "NEC-PRIMITIVES-0331",
    title: "Common UI Primitives and Modals - Item 331",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0332",
    code: "NEC-PRIMITIVES-0332",
    title: "Common UI Primitives and Modals - Item 332",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0333",
    code: "NEC-PRIMITIVES-0333",
    title: "Common UI Primitives and Modals - Item 333",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0334",
    code: "NEC-PRIMITIVES-0334",
    title: "Common UI Primitives and Modals - Item 334",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0335",
    code: "NEC-PRIMITIVES-0335",
    title: "Common UI Primitives and Modals - Item 335",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0336",
    code: "NEC-PRIMITIVES-0336",
    title: "Common UI Primitives and Modals - Item 336",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0337",
    code: "NEC-PRIMITIVES-0337",
    title: "Common UI Primitives and Modals - Item 337",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0338",
    code: "NEC-PRIMITIVES-0338",
    title: "Common UI Primitives and Modals - Item 338",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0339",
    code: "NEC-PRIMITIVES-0339",
    title: "Common UI Primitives and Modals - Item 339",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0340",
    code: "NEC-PRIMITIVES-0340",
    title: "Common UI Primitives and Modals - Item 340",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0341",
    code: "NEC-PRIMITIVES-0341",
    title: "Common UI Primitives and Modals - Item 341",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0342",
    code: "NEC-PRIMITIVES-0342",
    title: "Common UI Primitives and Modals - Item 342",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0343",
    code: "NEC-PRIMITIVES-0343",
    title: "Common UI Primitives and Modals - Item 343",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0344",
    code: "NEC-PRIMITIVES-0344",
    title: "Common UI Primitives and Modals - Item 344",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0345",
    code: "NEC-PRIMITIVES-0345",
    title: "Common UI Primitives and Modals - Item 345",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0346",
    code: "NEC-PRIMITIVES-0346",
    title: "Common UI Primitives and Modals - Item 346",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0347",
    code: "NEC-PRIMITIVES-0347",
    title: "Common UI Primitives and Modals - Item 347",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0348",
    code: "NEC-PRIMITIVES-0348",
    title: "Common UI Primitives and Modals - Item 348",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0349",
    code: "NEC-PRIMITIVES-0349",
    title: "Common UI Primitives and Modals - Item 349",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0350",
    code: "NEC-PRIMITIVES-0350",
    title: "Common UI Primitives and Modals - Item 350",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0351",
    code: "NEC-PRIMITIVES-0351",
    title: "Common UI Primitives and Modals - Item 351",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0352",
    code: "NEC-PRIMITIVES-0352",
    title: "Common UI Primitives and Modals - Item 352",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0353",
    code: "NEC-PRIMITIVES-0353",
    title: "Common UI Primitives and Modals - Item 353",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0354",
    code: "NEC-PRIMITIVES-0354",
    title: "Common UI Primitives and Modals - Item 354",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0355",
    code: "NEC-PRIMITIVES-0355",
    title: "Common UI Primitives and Modals - Item 355",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0356",
    code: "NEC-PRIMITIVES-0356",
    title: "Common UI Primitives and Modals - Item 356",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0357",
    code: "NEC-PRIMITIVES-0357",
    title: "Common UI Primitives and Modals - Item 357",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0358",
    code: "NEC-PRIMITIVES-0358",
    title: "Common UI Primitives and Modals - Item 358",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0359",
    code: "NEC-PRIMITIVES-0359",
    title: "Common UI Primitives and Modals - Item 359",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0360",
    code: "NEC-PRIMITIVES-0360",
    title: "Common UI Primitives and Modals - Item 360",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0361",
    code: "NEC-PRIMITIVES-0361",
    title: "Common UI Primitives and Modals - Item 361",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0362",
    code: "NEC-PRIMITIVES-0362",
    title: "Common UI Primitives and Modals - Item 362",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0363",
    code: "NEC-PRIMITIVES-0363",
    title: "Common UI Primitives and Modals - Item 363",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0364",
    code: "NEC-PRIMITIVES-0364",
    title: "Common UI Primitives and Modals - Item 364",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0365",
    code: "NEC-PRIMITIVES-0365",
    title: "Common UI Primitives and Modals - Item 365",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0366",
    code: "NEC-PRIMITIVES-0366",
    title: "Common UI Primitives and Modals - Item 366",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0367",
    code: "NEC-PRIMITIVES-0367",
    title: "Common UI Primitives and Modals - Item 367",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0368",
    code: "NEC-PRIMITIVES-0368",
    title: "Common UI Primitives and Modals - Item 368",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0369",
    code: "NEC-PRIMITIVES-0369",
    title: "Common UI Primitives and Modals - Item 369",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0370",
    code: "NEC-PRIMITIVES-0370",
    title: "Common UI Primitives and Modals - Item 370",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0371",
    code: "NEC-PRIMITIVES-0371",
    title: "Common UI Primitives and Modals - Item 371",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0372",
    code: "NEC-PRIMITIVES-0372",
    title: "Common UI Primitives and Modals - Item 372",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0373",
    code: "NEC-PRIMITIVES-0373",
    title: "Common UI Primitives and Modals - Item 373",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0374",
    code: "NEC-PRIMITIVES-0374",
    title: "Common UI Primitives and Modals - Item 374",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0375",
    code: "NEC-PRIMITIVES-0375",
    title: "Common UI Primitives and Modals - Item 375",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0376",
    code: "NEC-PRIMITIVES-0376",
    title: "Common UI Primitives and Modals - Item 376",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0377",
    code: "NEC-PRIMITIVES-0377",
    title: "Common UI Primitives and Modals - Item 377",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0378",
    code: "NEC-PRIMITIVES-0378",
    title: "Common UI Primitives and Modals - Item 378",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0379",
    code: "NEC-PRIMITIVES-0379",
    title: "Common UI Primitives and Modals - Item 379",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0380",
    code: "NEC-PRIMITIVES-0380",
    title: "Common UI Primitives and Modals - Item 380",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0381",
    code: "NEC-PRIMITIVES-0381",
    title: "Common UI Primitives and Modals - Item 381",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0382",
    code: "NEC-PRIMITIVES-0382",
    title: "Common UI Primitives and Modals - Item 382",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0383",
    code: "NEC-PRIMITIVES-0383",
    title: "Common UI Primitives and Modals - Item 383",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0384",
    code: "NEC-PRIMITIVES-0384",
    title: "Common UI Primitives and Modals - Item 384",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0385",
    code: "NEC-PRIMITIVES-0385",
    title: "Common UI Primitives and Modals - Item 385",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0386",
    code: "NEC-PRIMITIVES-0386",
    title: "Common UI Primitives and Modals - Item 386",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0387",
    code: "NEC-PRIMITIVES-0387",
    title: "Common UI Primitives and Modals - Item 387",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0388",
    code: "NEC-PRIMITIVES-0388",
    title: "Common UI Primitives and Modals - Item 388",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0389",
    code: "NEC-PRIMITIVES-0389",
    title: "Common UI Primitives and Modals - Item 389",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0390",
    code: "NEC-PRIMITIVES-0390",
    title: "Common UI Primitives and Modals - Item 390",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0391",
    code: "NEC-PRIMITIVES-0391",
    title: "Common UI Primitives and Modals - Item 391",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0392",
    code: "NEC-PRIMITIVES-0392",
    title: "Common UI Primitives and Modals - Item 392",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0393",
    code: "NEC-PRIMITIVES-0393",
    title: "Common UI Primitives and Modals - Item 393",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0394",
    code: "NEC-PRIMITIVES-0394",
    title: "Common UI Primitives and Modals - Item 394",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0395",
    code: "NEC-PRIMITIVES-0395",
    title: "Common UI Primitives and Modals - Item 395",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0396",
    code: "NEC-PRIMITIVES-0396",
    title: "Common UI Primitives and Modals - Item 396",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0397",
    code: "NEC-PRIMITIVES-0397",
    title: "Common UI Primitives and Modals - Item 397",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0398",
    code: "NEC-PRIMITIVES-0398",
    title: "Common UI Primitives and Modals - Item 398",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0399",
    code: "NEC-PRIMITIVES-0399",
    title: "Common UI Primitives and Modals - Item 399",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0400",
    code: "NEC-PRIMITIVES-0400",
    title: "Common UI Primitives and Modals - Item 400",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0401",
    code: "NEC-PRIMITIVES-0401",
    title: "Common UI Primitives and Modals - Item 401",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0402",
    code: "NEC-PRIMITIVES-0402",
    title: "Common UI Primitives and Modals - Item 402",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0403",
    code: "NEC-PRIMITIVES-0403",
    title: "Common UI Primitives and Modals - Item 403",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0404",
    code: "NEC-PRIMITIVES-0404",
    title: "Common UI Primitives and Modals - Item 404",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0405",
    code: "NEC-PRIMITIVES-0405",
    title: "Common UI Primitives and Modals - Item 405",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0406",
    code: "NEC-PRIMITIVES-0406",
    title: "Common UI Primitives and Modals - Item 406",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0407",
    code: "NEC-PRIMITIVES-0407",
    title: "Common UI Primitives and Modals - Item 407",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0408",
    code: "NEC-PRIMITIVES-0408",
    title: "Common UI Primitives and Modals - Item 408",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0409",
    code: "NEC-PRIMITIVES-0409",
    title: "Common UI Primitives and Modals - Item 409",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0410",
    code: "NEC-PRIMITIVES-0410",
    title: "Common UI Primitives and Modals - Item 410",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0411",
    code: "NEC-PRIMITIVES-0411",
    title: "Common UI Primitives and Modals - Item 411",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0412",
    code: "NEC-PRIMITIVES-0412",
    title: "Common UI Primitives and Modals - Item 412",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0413",
    code: "NEC-PRIMITIVES-0413",
    title: "Common UI Primitives and Modals - Item 413",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0414",
    code: "NEC-PRIMITIVES-0414",
    title: "Common UI Primitives and Modals - Item 414",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0415",
    code: "NEC-PRIMITIVES-0415",
    title: "Common UI Primitives and Modals - Item 415",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0416",
    code: "NEC-PRIMITIVES-0416",
    title: "Common UI Primitives and Modals - Item 416",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0417",
    code: "NEC-PRIMITIVES-0417",
    title: "Common UI Primitives and Modals - Item 417",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0418",
    code: "NEC-PRIMITIVES-0418",
    title: "Common UI Primitives and Modals - Item 418",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0419",
    code: "NEC-PRIMITIVES-0419",
    title: "Common UI Primitives and Modals - Item 419",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0420",
    code: "NEC-PRIMITIVES-0420",
    title: "Common UI Primitives and Modals - Item 420",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0421",
    code: "NEC-PRIMITIVES-0421",
    title: "Common UI Primitives and Modals - Item 421",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0422",
    code: "NEC-PRIMITIVES-0422",
    title: "Common UI Primitives and Modals - Item 422",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0423",
    code: "NEC-PRIMITIVES-0423",
    title: "Common UI Primitives and Modals - Item 423",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0424",
    code: "NEC-PRIMITIVES-0424",
    title: "Common UI Primitives and Modals - Item 424",
    category: "PRIMITIVES_CORE",
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
    id: "primitives-0425",
    code: "NEC-PRIMITIVES-0425",
    title: "Common UI Primitives and Modals - Item 425",
    category: "PRIMITIVES_CORE",
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
  {
    id: "primitives-0426",
    code: "NEC-PRIMITIVES-0426",
    title: "Common UI Primitives and Modals - Item 426",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 3,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 71,
      completionRate: 91,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_426"]
  },
  {
    id: "primitives-0427",
    code: "NEC-PRIMITIVES-0427",
    title: "Common UI Primitives and Modals - Item 427",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 4,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 72,
      completionRate: 92,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_427"]
  },
  {
    id: "primitives-0428",
    code: "NEC-PRIMITIVES-0428",
    title: "Common UI Primitives and Modals - Item 428",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 5,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 73,
      completionRate: 93,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_428"]
  },
  {
    id: "primitives-0429",
    code: "NEC-PRIMITIVES-0429",
    title: "Common UI Primitives and Modals - Item 429",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 6,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 74,
      completionRate: 94,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_429"]
  },
  {
    id: "primitives-0430",
    code: "NEC-PRIMITIVES-0430",
    title: "Common UI Primitives and Modals - Item 430",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 7,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 75,
      completionRate: 95,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_430"]
  },
  {
    id: "primitives-0431",
    code: "NEC-PRIMITIVES-0431",
    title: "Common UI Primitives and Modals - Item 431",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 8,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 76,
      completionRate: 96,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_431"]
  },
  {
    id: "primitives-0432",
    code: "NEC-PRIMITIVES-0432",
    title: "Common UI Primitives and Modals - Item 432",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 1,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 77,
      completionRate: 97,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_432"]
  },
  {
    id: "primitives-0433",
    code: "NEC-PRIMITIVES-0433",
    title: "Common UI Primitives and Modals - Item 433",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 2,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 78,
      completionRate: 98,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_433"]
  },
  {
    id: "primitives-0434",
    code: "NEC-PRIMITIVES-0434",
    title: "Common UI Primitives and Modals - Item 434",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 3,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 79,
      completionRate: 99,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_434"]
  },
  {
    id: "primitives-0435",
    code: "NEC-PRIMITIVES-0435",
    title: "Common UI Primitives and Modals - Item 435",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 4,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 80,
      completionRate: 85,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_435"]
  },
  {
    id: "primitives-0436",
    code: "NEC-PRIMITIVES-0436",
    title: "Common UI Primitives and Modals - Item 436",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 5,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 81,
      completionRate: 86,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_436"]
  },
  {
    id: "primitives-0437",
    code: "NEC-PRIMITIVES-0437",
    title: "Common UI Primitives and Modals - Item 437",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 6,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 82,
      completionRate: 87,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_437"]
  },
  {
    id: "primitives-0438",
    code: "NEC-PRIMITIVES-0438",
    title: "Common UI Primitives and Modals - Item 438",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 7,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 83,
      completionRate: 88,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_438"]
  },
  {
    id: "primitives-0439",
    code: "NEC-PRIMITIVES-0439",
    title: "Common UI Primitives and Modals - Item 439",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 8,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 84,
      completionRate: 89,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_439"]
  },
  {
    id: "primitives-0440",
    code: "NEC-PRIMITIVES-0440",
    title: "Common UI Primitives and Modals - Item 440",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 1,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 85,
      completionRate: 90,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_440"]
  },
  {
    id: "primitives-0441",
    code: "NEC-PRIMITIVES-0441",
    title: "Common UI Primitives and Modals - Item 441",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 2,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 86,
      completionRate: 91,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_441"]
  },
  {
    id: "primitives-0442",
    code: "NEC-PRIMITIVES-0442",
    title: "Common UI Primitives and Modals - Item 442",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 3,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 87,
      completionRate: 92,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_442"]
  },
  {
    id: "primitives-0443",
    code: "NEC-PRIMITIVES-0443",
    title: "Common UI Primitives and Modals - Item 443",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 4,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 88,
      completionRate: 93,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_443"]
  },
  {
    id: "primitives-0444",
    code: "NEC-PRIMITIVES-0444",
    title: "Common UI Primitives and Modals - Item 444",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 5,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 89,
      completionRate: 94,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_444"]
  },
  {
    id: "primitives-0445",
    code: "NEC-PRIMITIVES-0445",
    title: "Common UI Primitives and Modals - Item 445",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 6,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 90,
      completionRate: 95,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_445"]
  },
  {
    id: "primitives-0446",
    code: "NEC-PRIMITIVES-0446",
    title: "Common UI Primitives and Modals - Item 446",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 7,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 91,
      completionRate: 96,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_446"]
  },
  {
    id: "primitives-0447",
    code: "NEC-PRIMITIVES-0447",
    title: "Common UI Primitives and Modals - Item 447",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 8,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 92,
      completionRate: 97,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_447"]
  },
  {
    id: "primitives-0448",
    code: "NEC-PRIMITIVES-0448",
    title: "Common UI Primitives and Modals - Item 448",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 1,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 93,
      completionRate: 98,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_448"]
  },
  {
    id: "primitives-0449",
    code: "NEC-PRIMITIVES-0449",
    title: "Common UI Primitives and Modals - Item 449",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 2,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 94,
      completionRate: 99,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_449"]
  },
  {
    id: "primitives-0450",
    code: "NEC-PRIMITIVES-0450",
    title: "Common UI Primitives and Modals - Item 450",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 3,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 70,
      completionRate: 85,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_450"]
  },
  {
    id: "primitives-0451",
    code: "NEC-PRIMITIVES-0451",
    title: "Common UI Primitives and Modals - Item 451",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 4,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 71,
      completionRate: 86,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_451"]
  },
  {
    id: "primitives-0452",
    code: "NEC-PRIMITIVES-0452",
    title: "Common UI Primitives and Modals - Item 452",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 5,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 72,
      completionRate: 87,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_452"]
  },
  {
    id: "primitives-0453",
    code: "NEC-PRIMITIVES-0453",
    title: "Common UI Primitives and Modals - Item 453",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 6,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 73,
      completionRate: 88,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_453"]
  },
  {
    id: "primitives-0454",
    code: "NEC-PRIMITIVES-0454",
    title: "Common UI Primitives and Modals - Item 454",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 7,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 74,
      completionRate: 89,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_454"]
  },
  {
    id: "primitives-0455",
    code: "NEC-PRIMITIVES-0455",
    title: "Common UI Primitives and Modals - Item 455",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 8,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 75,
      completionRate: 90,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_455"]
  },
  {
    id: "primitives-0456",
    code: "NEC-PRIMITIVES-0456",
    title: "Common UI Primitives and Modals - Item 456",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 1,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 76,
      completionRate: 91,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_456"]
  },
  {
    id: "primitives-0457",
    code: "NEC-PRIMITIVES-0457",
    title: "Common UI Primitives and Modals - Item 457",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 2,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 77,
      completionRate: 92,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_457"]
  },
  {
    id: "primitives-0458",
    code: "NEC-PRIMITIVES-0458",
    title: "Common UI Primitives and Modals - Item 458",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 3,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 78,
      completionRate: 93,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_458"]
  },
  {
    id: "primitives-0459",
    code: "NEC-PRIMITIVES-0459",
    title: "Common UI Primitives and Modals - Item 459",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 4,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 79,
      completionRate: 94,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_459"]
  },
  {
    id: "primitives-0460",
    code: "NEC-PRIMITIVES-0460",
    title: "Common UI Primitives and Modals - Item 460",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 5,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 80,
      completionRate: 95,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_460"]
  },
  {
    id: "primitives-0461",
    code: "NEC-PRIMITIVES-0461",
    title: "Common UI Primitives and Modals - Item 461",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 6,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 81,
      completionRate: 96,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_461"]
  },
  {
    id: "primitives-0462",
    code: "NEC-PRIMITIVES-0462",
    title: "Common UI Primitives and Modals - Item 462",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 7,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 82,
      completionRate: 97,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_462"]
  },
  {
    id: "primitives-0463",
    code: "NEC-PRIMITIVES-0463",
    title: "Common UI Primitives and Modals - Item 463",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 8,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 83,
      completionRate: 98,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_463"]
  },
  {
    id: "primitives-0464",
    code: "NEC-PRIMITIVES-0464",
    title: "Common UI Primitives and Modals - Item 464",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 1,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 84,
      completionRate: 99,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_464"]
  },
  {
    id: "primitives-0465",
    code: "NEC-PRIMITIVES-0465",
    title: "Common UI Primitives and Modals - Item 465",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 2,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 85,
      completionRate: 85,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_465"]
  },
  {
    id: "primitives-0466",
    code: "NEC-PRIMITIVES-0466",
    title: "Common UI Primitives and Modals - Item 466",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 3,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 86,
      completionRate: 86,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_466"]
  },
  {
    id: "primitives-0467",
    code: "NEC-PRIMITIVES-0467",
    title: "Common UI Primitives and Modals - Item 467",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 4,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 87,
      completionRate: 87,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_467"]
  },
  {
    id: "primitives-0468",
    code: "NEC-PRIMITIVES-0468",
    title: "Common UI Primitives and Modals - Item 468",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 5,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 88,
      completionRate: 88,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_468"]
  },
  {
    id: "primitives-0469",
    code: "NEC-PRIMITIVES-0469",
    title: "Common UI Primitives and Modals - Item 469",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 6,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 89,
      completionRate: 89,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_469"]
  },
  {
    id: "primitives-0470",
    code: "NEC-PRIMITIVES-0470",
    title: "Common UI Primitives and Modals - Item 470",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 7,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 90,
      completionRate: 90,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_470"]
  },
  {
    id: "primitives-0471",
    code: "NEC-PRIMITIVES-0471",
    title: "Common UI Primitives and Modals - Item 471",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 8,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 91,
      completionRate: 91,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_471"]
  },
  {
    id: "primitives-0472",
    code: "NEC-PRIMITIVES-0472",
    title: "Common UI Primitives and Modals - Item 472",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 1,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 92,
      completionRate: 92,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_472"]
  },
  {
    id: "primitives-0473",
    code: "NEC-PRIMITIVES-0473",
    title: "Common UI Primitives and Modals - Item 473",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 2,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 93,
      completionRate: 93,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_473"]
  },
  {
    id: "primitives-0474",
    code: "NEC-PRIMITIVES-0474",
    title: "Common UI Primitives and Modals - Item 474",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 3,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 94,
      completionRate: 94,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_474"]
  },
  {
    id: "primitives-0475",
    code: "NEC-PRIMITIVES-0475",
    title: "Common UI Primitives and Modals - Item 475",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 4,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 70,
      completionRate: 95,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_475"]
  },
  {
    id: "primitives-0476",
    code: "NEC-PRIMITIVES-0476",
    title: "Common UI Primitives and Modals - Item 476",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 5,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 71,
      completionRate: 96,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_476"]
  },
  {
    id: "primitives-0477",
    code: "NEC-PRIMITIVES-0477",
    title: "Common UI Primitives and Modals - Item 477",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 6,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 72,
      completionRate: 97,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_477"]
  },
  {
    id: "primitives-0478",
    code: "NEC-PRIMITIVES-0478",
    title: "Common UI Primitives and Modals - Item 478",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 7,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 73,
      completionRate: 98,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_478"]
  },
  {
    id: "primitives-0479",
    code: "NEC-PRIMITIVES-0479",
    title: "Common UI Primitives and Modals - Item 479",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 8,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 74,
      completionRate: 99,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_479"]
  },
  {
    id: "primitives-0480",
    code: "NEC-PRIMITIVES-0480",
    title: "Common UI Primitives and Modals - Item 480",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 1,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 75,
      completionRate: 85,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_480"]
  },
  {
    id: "primitives-0481",
    code: "NEC-PRIMITIVES-0481",
    title: "Common UI Primitives and Modals - Item 481",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 2,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 76,
      completionRate: 86,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_481"]
  },
  {
    id: "primitives-0482",
    code: "NEC-PRIMITIVES-0482",
    title: "Common UI Primitives and Modals - Item 482",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 3,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 77,
      completionRate: 87,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_482"]
  },
  {
    id: "primitives-0483",
    code: "NEC-PRIMITIVES-0483",
    title: "Common UI Primitives and Modals - Item 483",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 4,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 78,
      completionRate: 88,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_483"]
  },
  {
    id: "primitives-0484",
    code: "NEC-PRIMITIVES-0484",
    title: "Common UI Primitives and Modals - Item 484",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 5,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 79,
      completionRate: 89,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_484"]
  },
  {
    id: "primitives-0485",
    code: "NEC-PRIMITIVES-0485",
    title: "Common UI Primitives and Modals - Item 485",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 6,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 80,
      completionRate: 90,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_485"]
  },
  {
    id: "primitives-0486",
    code: "NEC-PRIMITIVES-0486",
    title: "Common UI Primitives and Modals - Item 486",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 7,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 81,
      completionRate: 91,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_486"]
  },
  {
    id: "primitives-0487",
    code: "NEC-PRIMITIVES-0487",
    title: "Common UI Primitives and Modals - Item 487",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 8,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 82,
      completionRate: 92,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_487"]
  },
  {
    id: "primitives-0488",
    code: "NEC-PRIMITIVES-0488",
    title: "Common UI Primitives and Modals - Item 488",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 1,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 83,
      completionRate: 93,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_488"]
  },
  {
    id: "primitives-0489",
    code: "NEC-PRIMITIVES-0489",
    title: "Common UI Primitives and Modals - Item 489",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 2,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 84,
      completionRate: 94,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_489"]
  },
  {
    id: "primitives-0490",
    code: "NEC-PRIMITIVES-0490",
    title: "Common UI Primitives and Modals - Item 490",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 3,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 85,
      completionRate: 95,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_490"]
  },
  {
    id: "primitives-0491",
    code: "NEC-PRIMITIVES-0491",
    title: "Common UI Primitives and Modals - Item 491",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 4,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 86,
      completionRate: 96,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_491"]
  },
  {
    id: "primitives-0492",
    code: "NEC-PRIMITIVES-0492",
    title: "Common UI Primitives and Modals - Item 492",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 5,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 87,
      completionRate: 97,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_492"]
  },
  {
    id: "primitives-0493",
    code: "NEC-PRIMITIVES-0493",
    title: "Common UI Primitives and Modals - Item 493",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 6,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 88,
      completionRate: 98,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_493"]
  },
  {
    id: "primitives-0494",
    code: "NEC-PRIMITIVES-0494",
    title: "Common UI Primitives and Modals - Item 494",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 7,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 89,
      completionRate: 99,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_494"]
  },
  {
    id: "primitives-0495",
    code: "NEC-PRIMITIVES-0495",
    title: "Common UI Primitives and Modals - Item 495",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 8,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 90,
      completionRate: 85,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_495"]
  },
  {
    id: "primitives-0496",
    code: "NEC-PRIMITIVES-0496",
    title: "Common UI Primitives and Modals - Item 496",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 1,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 91,
      completionRate: 86,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_496"]
  },
  {
    id: "primitives-0497",
    code: "NEC-PRIMITIVES-0497",
    title: "Common UI Primitives and Modals - Item 497",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 2,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 92,
      completionRate: 87,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_497"]
  },
  {
    id: "primitives-0498",
    code: "NEC-PRIMITIVES-0498",
    title: "Common UI Primitives and Modals - Item 498",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 3,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 93,
      completionRate: 88,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_498"]
  },
  {
    id: "primitives-0499",
    code: "NEC-PRIMITIVES-0499",
    title: "Common UI Primitives and Modals - Item 499",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 4,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 94,
      completionRate: 89,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_499"]
  },
  {
    id: "primitives-0500",
    code: "NEC-PRIMITIVES-0500",
    title: "Common UI Primitives and Modals - Item 500",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 5,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 70,
      completionRate: 90,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_500"]
  },
  {
    id: "primitives-0501",
    code: "NEC-PRIMITIVES-0501",
    title: "Common UI Primitives and Modals - Item 501",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 6,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 71,
      completionRate: 91,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_501"]
  },
  {
    id: "primitives-0502",
    code: "NEC-PRIMITIVES-0502",
    title: "Common UI Primitives and Modals - Item 502",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 7,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 72,
      completionRate: 92,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_502"]
  },
  {
    id: "primitives-0503",
    code: "NEC-PRIMITIVES-0503",
    title: "Common UI Primitives and Modals - Item 503",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 8,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 73,
      completionRate: 93,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_503"]
  },
  {
    id: "primitives-0504",
    code: "NEC-PRIMITIVES-0504",
    title: "Common UI Primitives and Modals - Item 504",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 1,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 74,
      completionRate: 94,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_504"]
  },
  {
    id: "primitives-0505",
    code: "NEC-PRIMITIVES-0505",
    title: "Common UI Primitives and Modals - Item 505",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 2,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 75,
      completionRate: 95,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_505"]
  },
  {
    id: "primitives-0506",
    code: "NEC-PRIMITIVES-0506",
    title: "Common UI Primitives and Modals - Item 506",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 3,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 76,
      completionRate: 96,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_506"]
  },
  {
    id: "primitives-0507",
    code: "NEC-PRIMITIVES-0507",
    title: "Common UI Primitives and Modals - Item 507",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 4,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 77,
      completionRate: 97,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_507"]
  },
  {
    id: "primitives-0508",
    code: "NEC-PRIMITIVES-0508",
    title: "Common UI Primitives and Modals - Item 508",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 5,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 78,
      completionRate: 98,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_508"]
  },
  {
    id: "primitives-0509",
    code: "NEC-PRIMITIVES-0509",
    title: "Common UI Primitives and Modals - Item 509",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 6,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 79,
      completionRate: 99,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_509"]
  },
  {
    id: "primitives-0510",
    code: "NEC-PRIMITIVES-0510",
    title: "Common UI Primitives and Modals - Item 510",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 7,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 80,
      completionRate: 85,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_510"]
  },
  {
    id: "primitives-0511",
    code: "NEC-PRIMITIVES-0511",
    title: "Common UI Primitives and Modals - Item 511",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 8,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 81,
      completionRate: 86,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_511"]
  },
  {
    id: "primitives-0512",
    code: "NEC-PRIMITIVES-0512",
    title: "Common UI Primitives and Modals - Item 512",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 1,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 82,
      completionRate: 87,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_512"]
  },
  {
    id: "primitives-0513",
    code: "NEC-PRIMITIVES-0513",
    title: "Common UI Primitives and Modals - Item 513",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 2,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 83,
      completionRate: 88,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_513"]
  },
  {
    id: "primitives-0514",
    code: "NEC-PRIMITIVES-0514",
    title: "Common UI Primitives and Modals - Item 514",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 3,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 84,
      completionRate: 89,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_514"]
  },
  {
    id: "primitives-0515",
    code: "NEC-PRIMITIVES-0515",
    title: "Common UI Primitives and Modals - Item 515",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 4,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 85,
      completionRate: 90,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_515"]
  },
  {
    id: "primitives-0516",
    code: "NEC-PRIMITIVES-0516",
    title: "Common UI Primitives and Modals - Item 516",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 5,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 86,
      completionRate: 91,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_516"]
  },
  {
    id: "primitives-0517",
    code: "NEC-PRIMITIVES-0517",
    title: "Common UI Primitives and Modals - Item 517",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 6,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 87,
      completionRate: 92,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_517"]
  },
  {
    id: "primitives-0518",
    code: "NEC-PRIMITIVES-0518",
    title: "Common UI Primitives and Modals - Item 518",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 7,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 88,
      completionRate: 93,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_518"]
  },
  {
    id: "primitives-0519",
    code: "NEC-PRIMITIVES-0519",
    title: "Common UI Primitives and Modals - Item 519",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 8,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 89,
      completionRate: 94,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_519"]
  },
  {
    id: "primitives-0520",
    code: "NEC-PRIMITIVES-0520",
    title: "Common UI Primitives and Modals - Item 520",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 1,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 90,
      completionRate: 95,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_520"]
  },
  {
    id: "primitives-0521",
    code: "NEC-PRIMITIVES-0521",
    title: "Common UI Primitives and Modals - Item 521",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 2,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 91,
      completionRate: 96,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_521"]
  },
  {
    id: "primitives-0522",
    code: "NEC-PRIMITIVES-0522",
    title: "Common UI Primitives and Modals - Item 522",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 3,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 92,
      completionRate: 97,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_522"]
  },
  {
    id: "primitives-0523",
    code: "NEC-PRIMITIVES-0523",
    title: "Common UI Primitives and Modals - Item 523",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 4,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 93,
      completionRate: 98,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_523"]
  },
  {
    id: "primitives-0524",
    code: "NEC-PRIMITIVES-0524",
    title: "Common UI Primitives and Modals - Item 524",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 5,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 94,
      completionRate: 99,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_524"]
  },
  {
    id: "primitives-0525",
    code: "NEC-PRIMITIVES-0525",
    title: "Common UI Primitives and Modals - Item 525",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 6,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 70,
      completionRate: 85,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_525"]
  },
  {
    id: "primitives-0526",
    code: "NEC-PRIMITIVES-0526",
    title: "Common UI Primitives and Modals - Item 526",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 7,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 71,
      completionRate: 86,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_526"]
  },
  {
    id: "primitives-0527",
    code: "NEC-PRIMITIVES-0527",
    title: "Common UI Primitives and Modals - Item 527",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 8,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 72,
      completionRate: 87,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_527"]
  },
  {
    id: "primitives-0528",
    code: "NEC-PRIMITIVES-0528",
    title: "Common UI Primitives and Modals - Item 528",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 1,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 73,
      completionRate: 88,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_528"]
  },
  {
    id: "primitives-0529",
    code: "NEC-PRIMITIVES-0529",
    title: "Common UI Primitives and Modals - Item 529",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 2,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 74,
      completionRate: 89,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_529"]
  },
  {
    id: "primitives-0530",
    code: "NEC-PRIMITIVES-0530",
    title: "Common UI Primitives and Modals - Item 530",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 3,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 75,
      completionRate: 90,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_530"]
  },
  {
    id: "primitives-0531",
    code: "NEC-PRIMITIVES-0531",
    title: "Common UI Primitives and Modals - Item 531",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 4,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 76,
      completionRate: 91,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_531"]
  },
  {
    id: "primitives-0532",
    code: "NEC-PRIMITIVES-0532",
    title: "Common UI Primitives and Modals - Item 532",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 5,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 77,
      completionRate: 92,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_532"]
  },
  {
    id: "primitives-0533",
    code: "NEC-PRIMITIVES-0533",
    title: "Common UI Primitives and Modals - Item 533",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 6,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 78,
      completionRate: 93,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_533"]
  },
  {
    id: "primitives-0534",
    code: "NEC-PRIMITIVES-0534",
    title: "Common UI Primitives and Modals - Item 534",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 7,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 79,
      completionRate: 94,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_534"]
  },
  {
    id: "primitives-0535",
    code: "NEC-PRIMITIVES-0535",
    title: "Common UI Primitives and Modals - Item 535",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 8,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 80,
      completionRate: 95,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_535"]
  },
  {
    id: "primitives-0536",
    code: "NEC-PRIMITIVES-0536",
    title: "Common UI Primitives and Modals - Item 536",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 1,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 81,
      completionRate: 96,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_536"]
  },
  {
    id: "primitives-0537",
    code: "NEC-PRIMITIVES-0537",
    title: "Common UI Primitives and Modals - Item 537",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 2,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 82,
      completionRate: 97,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_537"]
  },
  {
    id: "primitives-0538",
    code: "NEC-PRIMITIVES-0538",
    title: "Common UI Primitives and Modals - Item 538",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 3,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 83,
      completionRate: 98,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_538"]
  },
  {
    id: "primitives-0539",
    code: "NEC-PRIMITIVES-0539",
    title: "Common UI Primitives and Modals - Item 539",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 4,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 84,
      completionRate: 99,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_539"]
  },
  {
    id: "primitives-0540",
    code: "NEC-PRIMITIVES-0540",
    title: "Common UI Primitives and Modals - Item 540",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 5,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 85,
      completionRate: 85,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_540"]
  },
  {
    id: "primitives-0541",
    code: "NEC-PRIMITIVES-0541",
    title: "Common UI Primitives and Modals - Item 541",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 6,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 86,
      completionRate: 86,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_541"]
  },
  {
    id: "primitives-0542",
    code: "NEC-PRIMITIVES-0542",
    title: "Common UI Primitives and Modals - Item 542",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 7,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 87,
      completionRate: 87,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_542"]
  },
  {
    id: "primitives-0543",
    code: "NEC-PRIMITIVES-0543",
    title: "Common UI Primitives and Modals - Item 543",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 8,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 88,
      completionRate: 88,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_543"]
  },
  {
    id: "primitives-0544",
    code: "NEC-PRIMITIVES-0544",
    title: "Common UI Primitives and Modals - Item 544",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 1,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 89,
      completionRate: 89,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_544"]
  },
  {
    id: "primitives-0545",
    code: "NEC-PRIMITIVES-0545",
    title: "Common UI Primitives and Modals - Item 545",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 2,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 90,
      completionRate: 90,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_545"]
  },
  {
    id: "primitives-0546",
    code: "NEC-PRIMITIVES-0546",
    title: "Common UI Primitives and Modals - Item 546",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 3,
    credits: 3,
    status: "ACTIVE",
    metrics: {
      targetScore: 91,
      completionRate: 91,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_546"]
  },
  {
    id: "primitives-0547",
    code: "NEC-PRIMITIVES-0547",
    title: "Common UI Primitives and Modals - Item 547",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 4,
    credits: 4,
    status: "PENDING",
    metrics: {
      targetScore: 92,
      completionRate: 92,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_547"]
  },
  {
    id: "primitives-0548",
    code: "NEC-PRIMITIVES-0548",
    title: "Common UI Primitives and Modals - Item 548",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 5,
    credits: 3,
    status: "UNDER_REVIEW",
    metrics: {
      targetScore: 93,
      completionRate: 93,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_548"]
  },
  {
    id: "primitives-0549",
    code: "NEC-PRIMITIVES-0549",
    title: "Common UI Primitives and Modals - Item 549",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 6,
    credits: 4,
    status: "ACTIVE",
    metrics: {
      targetScore: 94,
      completionRate: 94,
      complianceAuditPassed: true
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_549"]
  },
  {
    id: "primitives-0550",
    code: "NEC-PRIMITIVES-0550",
    title: "Common UI Primitives and Modals - Item 550",
    category: "PRIMITIVES_CORE",
    department: "ENGINEERING_ACADEMICS",
    semester: 7,
    credits: 3,
    status: "PENDING",
    metrics: {
      targetScore: 70,
      completionRate: 95,
      complianceAuditPassed: false
    },
    tags: ["NEC_AUTONOMOUS", "R20_R23", "MODULE_550"]
  },
];

export function filterPRIMITIVESBySemester(semester: number): AcademicEntityItem[] {
  return PRIMITIVES_REGISTRY.filter(item => item.semester === semester);
}

export function computePRIMITIVESAverageCredits(): number {
  const total = PRIMITIVES_REGISTRY.reduce((acc, curr) => acc + curr.credits, 0);
  return total / PRIMITIVES_REGISTRY.length;
}
