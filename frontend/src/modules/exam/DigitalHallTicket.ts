/**
 * Narasaraopeta Engineering College (Autonomous) — Frontend Enterprise Module
 * Module: Digital Hall Ticket View and Print Sheet (HALLTICKETUI)
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

export const HALLTICKETUI_REGISTRY: AcademicEntityItem[] = [
  {
    id: "hallticketui-0001",
    code: "NEC-HALLTICKETUI-0001",
    title: "Digital Hall Ticket View and Print Sheet - Item 1",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0002",
    code: "NEC-HALLTICKETUI-0002",
    title: "Digital Hall Ticket View and Print Sheet - Item 2",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0003",
    code: "NEC-HALLTICKETUI-0003",
    title: "Digital Hall Ticket View and Print Sheet - Item 3",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0004",
    code: "NEC-HALLTICKETUI-0004",
    title: "Digital Hall Ticket View and Print Sheet - Item 4",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0005",
    code: "NEC-HALLTICKETUI-0005",
    title: "Digital Hall Ticket View and Print Sheet - Item 5",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0006",
    code: "NEC-HALLTICKETUI-0006",
    title: "Digital Hall Ticket View and Print Sheet - Item 6",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0007",
    code: "NEC-HALLTICKETUI-0007",
    title: "Digital Hall Ticket View and Print Sheet - Item 7",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0008",
    code: "NEC-HALLTICKETUI-0008",
    title: "Digital Hall Ticket View and Print Sheet - Item 8",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0009",
    code: "NEC-HALLTICKETUI-0009",
    title: "Digital Hall Ticket View and Print Sheet - Item 9",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0010",
    code: "NEC-HALLTICKETUI-0010",
    title: "Digital Hall Ticket View and Print Sheet - Item 10",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0011",
    code: "NEC-HALLTICKETUI-0011",
    title: "Digital Hall Ticket View and Print Sheet - Item 11",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0012",
    code: "NEC-HALLTICKETUI-0012",
    title: "Digital Hall Ticket View and Print Sheet - Item 12",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0013",
    code: "NEC-HALLTICKETUI-0013",
    title: "Digital Hall Ticket View and Print Sheet - Item 13",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0014",
    code: "NEC-HALLTICKETUI-0014",
    title: "Digital Hall Ticket View and Print Sheet - Item 14",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0015",
    code: "NEC-HALLTICKETUI-0015",
    title: "Digital Hall Ticket View and Print Sheet - Item 15",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0016",
    code: "NEC-HALLTICKETUI-0016",
    title: "Digital Hall Ticket View and Print Sheet - Item 16",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0017",
    code: "NEC-HALLTICKETUI-0017",
    title: "Digital Hall Ticket View and Print Sheet - Item 17",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0018",
    code: "NEC-HALLTICKETUI-0018",
    title: "Digital Hall Ticket View and Print Sheet - Item 18",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0019",
    code: "NEC-HALLTICKETUI-0019",
    title: "Digital Hall Ticket View and Print Sheet - Item 19",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0020",
    code: "NEC-HALLTICKETUI-0020",
    title: "Digital Hall Ticket View and Print Sheet - Item 20",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0021",
    code: "NEC-HALLTICKETUI-0021",
    title: "Digital Hall Ticket View and Print Sheet - Item 21",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0022",
    code: "NEC-HALLTICKETUI-0022",
    title: "Digital Hall Ticket View and Print Sheet - Item 22",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0023",
    code: "NEC-HALLTICKETUI-0023",
    title: "Digital Hall Ticket View and Print Sheet - Item 23",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0024",
    code: "NEC-HALLTICKETUI-0024",
    title: "Digital Hall Ticket View and Print Sheet - Item 24",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0025",
    code: "NEC-HALLTICKETUI-0025",
    title: "Digital Hall Ticket View and Print Sheet - Item 25",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0026",
    code: "NEC-HALLTICKETUI-0026",
    title: "Digital Hall Ticket View and Print Sheet - Item 26",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0027",
    code: "NEC-HALLTICKETUI-0027",
    title: "Digital Hall Ticket View and Print Sheet - Item 27",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0028",
    code: "NEC-HALLTICKETUI-0028",
    title: "Digital Hall Ticket View and Print Sheet - Item 28",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0029",
    code: "NEC-HALLTICKETUI-0029",
    title: "Digital Hall Ticket View and Print Sheet - Item 29",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0030",
    code: "NEC-HALLTICKETUI-0030",
    title: "Digital Hall Ticket View and Print Sheet - Item 30",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0031",
    code: "NEC-HALLTICKETUI-0031",
    title: "Digital Hall Ticket View and Print Sheet - Item 31",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0032",
    code: "NEC-HALLTICKETUI-0032",
    title: "Digital Hall Ticket View and Print Sheet - Item 32",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0033",
    code: "NEC-HALLTICKETUI-0033",
    title: "Digital Hall Ticket View and Print Sheet - Item 33",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0034",
    code: "NEC-HALLTICKETUI-0034",
    title: "Digital Hall Ticket View and Print Sheet - Item 34",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0035",
    code: "NEC-HALLTICKETUI-0035",
    title: "Digital Hall Ticket View and Print Sheet - Item 35",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0036",
    code: "NEC-HALLTICKETUI-0036",
    title: "Digital Hall Ticket View and Print Sheet - Item 36",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0037",
    code: "NEC-HALLTICKETUI-0037",
    title: "Digital Hall Ticket View and Print Sheet - Item 37",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0038",
    code: "NEC-HALLTICKETUI-0038",
    title: "Digital Hall Ticket View and Print Sheet - Item 38",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0039",
    code: "NEC-HALLTICKETUI-0039",
    title: "Digital Hall Ticket View and Print Sheet - Item 39",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0040",
    code: "NEC-HALLTICKETUI-0040",
    title: "Digital Hall Ticket View and Print Sheet - Item 40",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0041",
    code: "NEC-HALLTICKETUI-0041",
    title: "Digital Hall Ticket View and Print Sheet - Item 41",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0042",
    code: "NEC-HALLTICKETUI-0042",
    title: "Digital Hall Ticket View and Print Sheet - Item 42",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0043",
    code: "NEC-HALLTICKETUI-0043",
    title: "Digital Hall Ticket View and Print Sheet - Item 43",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0044",
    code: "NEC-HALLTICKETUI-0044",
    title: "Digital Hall Ticket View and Print Sheet - Item 44",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0045",
    code: "NEC-HALLTICKETUI-0045",
    title: "Digital Hall Ticket View and Print Sheet - Item 45",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0046",
    code: "NEC-HALLTICKETUI-0046",
    title: "Digital Hall Ticket View and Print Sheet - Item 46",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0047",
    code: "NEC-HALLTICKETUI-0047",
    title: "Digital Hall Ticket View and Print Sheet - Item 47",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0048",
    code: "NEC-HALLTICKETUI-0048",
    title: "Digital Hall Ticket View and Print Sheet - Item 48",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0049",
    code: "NEC-HALLTICKETUI-0049",
    title: "Digital Hall Ticket View and Print Sheet - Item 49",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0050",
    code: "NEC-HALLTICKETUI-0050",
    title: "Digital Hall Ticket View and Print Sheet - Item 50",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0051",
    code: "NEC-HALLTICKETUI-0051",
    title: "Digital Hall Ticket View and Print Sheet - Item 51",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0052",
    code: "NEC-HALLTICKETUI-0052",
    title: "Digital Hall Ticket View and Print Sheet - Item 52",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0053",
    code: "NEC-HALLTICKETUI-0053",
    title: "Digital Hall Ticket View and Print Sheet - Item 53",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0054",
    code: "NEC-HALLTICKETUI-0054",
    title: "Digital Hall Ticket View and Print Sheet - Item 54",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0055",
    code: "NEC-HALLTICKETUI-0055",
    title: "Digital Hall Ticket View and Print Sheet - Item 55",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0056",
    code: "NEC-HALLTICKETUI-0056",
    title: "Digital Hall Ticket View and Print Sheet - Item 56",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0057",
    code: "NEC-HALLTICKETUI-0057",
    title: "Digital Hall Ticket View and Print Sheet - Item 57",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0058",
    code: "NEC-HALLTICKETUI-0058",
    title: "Digital Hall Ticket View and Print Sheet - Item 58",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0059",
    code: "NEC-HALLTICKETUI-0059",
    title: "Digital Hall Ticket View and Print Sheet - Item 59",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0060",
    code: "NEC-HALLTICKETUI-0060",
    title: "Digital Hall Ticket View and Print Sheet - Item 60",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0061",
    code: "NEC-HALLTICKETUI-0061",
    title: "Digital Hall Ticket View and Print Sheet - Item 61",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0062",
    code: "NEC-HALLTICKETUI-0062",
    title: "Digital Hall Ticket View and Print Sheet - Item 62",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0063",
    code: "NEC-HALLTICKETUI-0063",
    title: "Digital Hall Ticket View and Print Sheet - Item 63",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0064",
    code: "NEC-HALLTICKETUI-0064",
    title: "Digital Hall Ticket View and Print Sheet - Item 64",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0065",
    code: "NEC-HALLTICKETUI-0065",
    title: "Digital Hall Ticket View and Print Sheet - Item 65",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0066",
    code: "NEC-HALLTICKETUI-0066",
    title: "Digital Hall Ticket View and Print Sheet - Item 66",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0067",
    code: "NEC-HALLTICKETUI-0067",
    title: "Digital Hall Ticket View and Print Sheet - Item 67",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0068",
    code: "NEC-HALLTICKETUI-0068",
    title: "Digital Hall Ticket View and Print Sheet - Item 68",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0069",
    code: "NEC-HALLTICKETUI-0069",
    title: "Digital Hall Ticket View and Print Sheet - Item 69",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0070",
    code: "NEC-HALLTICKETUI-0070",
    title: "Digital Hall Ticket View and Print Sheet - Item 70",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0071",
    code: "NEC-HALLTICKETUI-0071",
    title: "Digital Hall Ticket View and Print Sheet - Item 71",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0072",
    code: "NEC-HALLTICKETUI-0072",
    title: "Digital Hall Ticket View and Print Sheet - Item 72",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0073",
    code: "NEC-HALLTICKETUI-0073",
    title: "Digital Hall Ticket View and Print Sheet - Item 73",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0074",
    code: "NEC-HALLTICKETUI-0074",
    title: "Digital Hall Ticket View and Print Sheet - Item 74",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0075",
    code: "NEC-HALLTICKETUI-0075",
    title: "Digital Hall Ticket View and Print Sheet - Item 75",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0076",
    code: "NEC-HALLTICKETUI-0076",
    title: "Digital Hall Ticket View and Print Sheet - Item 76",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0077",
    code: "NEC-HALLTICKETUI-0077",
    title: "Digital Hall Ticket View and Print Sheet - Item 77",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0078",
    code: "NEC-HALLTICKETUI-0078",
    title: "Digital Hall Ticket View and Print Sheet - Item 78",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0079",
    code: "NEC-HALLTICKETUI-0079",
    title: "Digital Hall Ticket View and Print Sheet - Item 79",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0080",
    code: "NEC-HALLTICKETUI-0080",
    title: "Digital Hall Ticket View and Print Sheet - Item 80",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0081",
    code: "NEC-HALLTICKETUI-0081",
    title: "Digital Hall Ticket View and Print Sheet - Item 81",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0082",
    code: "NEC-HALLTICKETUI-0082",
    title: "Digital Hall Ticket View and Print Sheet - Item 82",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0083",
    code: "NEC-HALLTICKETUI-0083",
    title: "Digital Hall Ticket View and Print Sheet - Item 83",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0084",
    code: "NEC-HALLTICKETUI-0084",
    title: "Digital Hall Ticket View and Print Sheet - Item 84",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0085",
    code: "NEC-HALLTICKETUI-0085",
    title: "Digital Hall Ticket View and Print Sheet - Item 85",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0086",
    code: "NEC-HALLTICKETUI-0086",
    title: "Digital Hall Ticket View and Print Sheet - Item 86",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0087",
    code: "NEC-HALLTICKETUI-0087",
    title: "Digital Hall Ticket View and Print Sheet - Item 87",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0088",
    code: "NEC-HALLTICKETUI-0088",
    title: "Digital Hall Ticket View and Print Sheet - Item 88",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0089",
    code: "NEC-HALLTICKETUI-0089",
    title: "Digital Hall Ticket View and Print Sheet - Item 89",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0090",
    code: "NEC-HALLTICKETUI-0090",
    title: "Digital Hall Ticket View and Print Sheet - Item 90",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0091",
    code: "NEC-HALLTICKETUI-0091",
    title: "Digital Hall Ticket View and Print Sheet - Item 91",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0092",
    code: "NEC-HALLTICKETUI-0092",
    title: "Digital Hall Ticket View and Print Sheet - Item 92",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0093",
    code: "NEC-HALLTICKETUI-0093",
    title: "Digital Hall Ticket View and Print Sheet - Item 93",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0094",
    code: "NEC-HALLTICKETUI-0094",
    title: "Digital Hall Ticket View and Print Sheet - Item 94",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0095",
    code: "NEC-HALLTICKETUI-0095",
    title: "Digital Hall Ticket View and Print Sheet - Item 95",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0096",
    code: "NEC-HALLTICKETUI-0096",
    title: "Digital Hall Ticket View and Print Sheet - Item 96",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0097",
    code: "NEC-HALLTICKETUI-0097",
    title: "Digital Hall Ticket View and Print Sheet - Item 97",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0098",
    code: "NEC-HALLTICKETUI-0098",
    title: "Digital Hall Ticket View and Print Sheet - Item 98",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0099",
    code: "NEC-HALLTICKETUI-0099",
    title: "Digital Hall Ticket View and Print Sheet - Item 99",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0100",
    code: "NEC-HALLTICKETUI-0100",
    title: "Digital Hall Ticket View and Print Sheet - Item 100",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0101",
    code: "NEC-HALLTICKETUI-0101",
    title: "Digital Hall Ticket View and Print Sheet - Item 101",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0102",
    code: "NEC-HALLTICKETUI-0102",
    title: "Digital Hall Ticket View and Print Sheet - Item 102",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0103",
    code: "NEC-HALLTICKETUI-0103",
    title: "Digital Hall Ticket View and Print Sheet - Item 103",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0104",
    code: "NEC-HALLTICKETUI-0104",
    title: "Digital Hall Ticket View and Print Sheet - Item 104",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0105",
    code: "NEC-HALLTICKETUI-0105",
    title: "Digital Hall Ticket View and Print Sheet - Item 105",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0106",
    code: "NEC-HALLTICKETUI-0106",
    title: "Digital Hall Ticket View and Print Sheet - Item 106",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0107",
    code: "NEC-HALLTICKETUI-0107",
    title: "Digital Hall Ticket View and Print Sheet - Item 107",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0108",
    code: "NEC-HALLTICKETUI-0108",
    title: "Digital Hall Ticket View and Print Sheet - Item 108",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0109",
    code: "NEC-HALLTICKETUI-0109",
    title: "Digital Hall Ticket View and Print Sheet - Item 109",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0110",
    code: "NEC-HALLTICKETUI-0110",
    title: "Digital Hall Ticket View and Print Sheet - Item 110",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0111",
    code: "NEC-HALLTICKETUI-0111",
    title: "Digital Hall Ticket View and Print Sheet - Item 111",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0112",
    code: "NEC-HALLTICKETUI-0112",
    title: "Digital Hall Ticket View and Print Sheet - Item 112",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0113",
    code: "NEC-HALLTICKETUI-0113",
    title: "Digital Hall Ticket View and Print Sheet - Item 113",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0114",
    code: "NEC-HALLTICKETUI-0114",
    title: "Digital Hall Ticket View and Print Sheet - Item 114",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0115",
    code: "NEC-HALLTICKETUI-0115",
    title: "Digital Hall Ticket View and Print Sheet - Item 115",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0116",
    code: "NEC-HALLTICKETUI-0116",
    title: "Digital Hall Ticket View and Print Sheet - Item 116",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0117",
    code: "NEC-HALLTICKETUI-0117",
    title: "Digital Hall Ticket View and Print Sheet - Item 117",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0118",
    code: "NEC-HALLTICKETUI-0118",
    title: "Digital Hall Ticket View and Print Sheet - Item 118",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0119",
    code: "NEC-HALLTICKETUI-0119",
    title: "Digital Hall Ticket View and Print Sheet - Item 119",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0120",
    code: "NEC-HALLTICKETUI-0120",
    title: "Digital Hall Ticket View and Print Sheet - Item 120",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0121",
    code: "NEC-HALLTICKETUI-0121",
    title: "Digital Hall Ticket View and Print Sheet - Item 121",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0122",
    code: "NEC-HALLTICKETUI-0122",
    title: "Digital Hall Ticket View and Print Sheet - Item 122",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0123",
    code: "NEC-HALLTICKETUI-0123",
    title: "Digital Hall Ticket View and Print Sheet - Item 123",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0124",
    code: "NEC-HALLTICKETUI-0124",
    title: "Digital Hall Ticket View and Print Sheet - Item 124",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0125",
    code: "NEC-HALLTICKETUI-0125",
    title: "Digital Hall Ticket View and Print Sheet - Item 125",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0126",
    code: "NEC-HALLTICKETUI-0126",
    title: "Digital Hall Ticket View and Print Sheet - Item 126",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0127",
    code: "NEC-HALLTICKETUI-0127",
    title: "Digital Hall Ticket View and Print Sheet - Item 127",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0128",
    code: "NEC-HALLTICKETUI-0128",
    title: "Digital Hall Ticket View and Print Sheet - Item 128",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0129",
    code: "NEC-HALLTICKETUI-0129",
    title: "Digital Hall Ticket View and Print Sheet - Item 129",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0130",
    code: "NEC-HALLTICKETUI-0130",
    title: "Digital Hall Ticket View and Print Sheet - Item 130",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0131",
    code: "NEC-HALLTICKETUI-0131",
    title: "Digital Hall Ticket View and Print Sheet - Item 131",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0132",
    code: "NEC-HALLTICKETUI-0132",
    title: "Digital Hall Ticket View and Print Sheet - Item 132",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0133",
    code: "NEC-HALLTICKETUI-0133",
    title: "Digital Hall Ticket View and Print Sheet - Item 133",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0134",
    code: "NEC-HALLTICKETUI-0134",
    title: "Digital Hall Ticket View and Print Sheet - Item 134",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0135",
    code: "NEC-HALLTICKETUI-0135",
    title: "Digital Hall Ticket View and Print Sheet - Item 135",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0136",
    code: "NEC-HALLTICKETUI-0136",
    title: "Digital Hall Ticket View and Print Sheet - Item 136",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0137",
    code: "NEC-HALLTICKETUI-0137",
    title: "Digital Hall Ticket View and Print Sheet - Item 137",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0138",
    code: "NEC-HALLTICKETUI-0138",
    title: "Digital Hall Ticket View and Print Sheet - Item 138",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0139",
    code: "NEC-HALLTICKETUI-0139",
    title: "Digital Hall Ticket View and Print Sheet - Item 139",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0140",
    code: "NEC-HALLTICKETUI-0140",
    title: "Digital Hall Ticket View and Print Sheet - Item 140",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0141",
    code: "NEC-HALLTICKETUI-0141",
    title: "Digital Hall Ticket View and Print Sheet - Item 141",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0142",
    code: "NEC-HALLTICKETUI-0142",
    title: "Digital Hall Ticket View and Print Sheet - Item 142",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0143",
    code: "NEC-HALLTICKETUI-0143",
    title: "Digital Hall Ticket View and Print Sheet - Item 143",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0144",
    code: "NEC-HALLTICKETUI-0144",
    title: "Digital Hall Ticket View and Print Sheet - Item 144",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0145",
    code: "NEC-HALLTICKETUI-0145",
    title: "Digital Hall Ticket View and Print Sheet - Item 145",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0146",
    code: "NEC-HALLTICKETUI-0146",
    title: "Digital Hall Ticket View and Print Sheet - Item 146",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0147",
    code: "NEC-HALLTICKETUI-0147",
    title: "Digital Hall Ticket View and Print Sheet - Item 147",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0148",
    code: "NEC-HALLTICKETUI-0148",
    title: "Digital Hall Ticket View and Print Sheet - Item 148",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0149",
    code: "NEC-HALLTICKETUI-0149",
    title: "Digital Hall Ticket View and Print Sheet - Item 149",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0150",
    code: "NEC-HALLTICKETUI-0150",
    title: "Digital Hall Ticket View and Print Sheet - Item 150",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0151",
    code: "NEC-HALLTICKETUI-0151",
    title: "Digital Hall Ticket View and Print Sheet - Item 151",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0152",
    code: "NEC-HALLTICKETUI-0152",
    title: "Digital Hall Ticket View and Print Sheet - Item 152",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0153",
    code: "NEC-HALLTICKETUI-0153",
    title: "Digital Hall Ticket View and Print Sheet - Item 153",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0154",
    code: "NEC-HALLTICKETUI-0154",
    title: "Digital Hall Ticket View and Print Sheet - Item 154",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0155",
    code: "NEC-HALLTICKETUI-0155",
    title: "Digital Hall Ticket View and Print Sheet - Item 155",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0156",
    code: "NEC-HALLTICKETUI-0156",
    title: "Digital Hall Ticket View and Print Sheet - Item 156",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0157",
    code: "NEC-HALLTICKETUI-0157",
    title: "Digital Hall Ticket View and Print Sheet - Item 157",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0158",
    code: "NEC-HALLTICKETUI-0158",
    title: "Digital Hall Ticket View and Print Sheet - Item 158",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0159",
    code: "NEC-HALLTICKETUI-0159",
    title: "Digital Hall Ticket View and Print Sheet - Item 159",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0160",
    code: "NEC-HALLTICKETUI-0160",
    title: "Digital Hall Ticket View and Print Sheet - Item 160",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0161",
    code: "NEC-HALLTICKETUI-0161",
    title: "Digital Hall Ticket View and Print Sheet - Item 161",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0162",
    code: "NEC-HALLTICKETUI-0162",
    title: "Digital Hall Ticket View and Print Sheet - Item 162",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0163",
    code: "NEC-HALLTICKETUI-0163",
    title: "Digital Hall Ticket View and Print Sheet - Item 163",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0164",
    code: "NEC-HALLTICKETUI-0164",
    title: "Digital Hall Ticket View and Print Sheet - Item 164",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0165",
    code: "NEC-HALLTICKETUI-0165",
    title: "Digital Hall Ticket View and Print Sheet - Item 165",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0166",
    code: "NEC-HALLTICKETUI-0166",
    title: "Digital Hall Ticket View and Print Sheet - Item 166",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0167",
    code: "NEC-HALLTICKETUI-0167",
    title: "Digital Hall Ticket View and Print Sheet - Item 167",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0168",
    code: "NEC-HALLTICKETUI-0168",
    title: "Digital Hall Ticket View and Print Sheet - Item 168",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0169",
    code: "NEC-HALLTICKETUI-0169",
    title: "Digital Hall Ticket View and Print Sheet - Item 169",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0170",
    code: "NEC-HALLTICKETUI-0170",
    title: "Digital Hall Ticket View and Print Sheet - Item 170",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0171",
    code: "NEC-HALLTICKETUI-0171",
    title: "Digital Hall Ticket View and Print Sheet - Item 171",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0172",
    code: "NEC-HALLTICKETUI-0172",
    title: "Digital Hall Ticket View and Print Sheet - Item 172",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0173",
    code: "NEC-HALLTICKETUI-0173",
    title: "Digital Hall Ticket View and Print Sheet - Item 173",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0174",
    code: "NEC-HALLTICKETUI-0174",
    title: "Digital Hall Ticket View and Print Sheet - Item 174",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0175",
    code: "NEC-HALLTICKETUI-0175",
    title: "Digital Hall Ticket View and Print Sheet - Item 175",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0176",
    code: "NEC-HALLTICKETUI-0176",
    title: "Digital Hall Ticket View and Print Sheet - Item 176",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0177",
    code: "NEC-HALLTICKETUI-0177",
    title: "Digital Hall Ticket View and Print Sheet - Item 177",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0178",
    code: "NEC-HALLTICKETUI-0178",
    title: "Digital Hall Ticket View and Print Sheet - Item 178",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0179",
    code: "NEC-HALLTICKETUI-0179",
    title: "Digital Hall Ticket View and Print Sheet - Item 179",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0180",
    code: "NEC-HALLTICKETUI-0180",
    title: "Digital Hall Ticket View and Print Sheet - Item 180",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0181",
    code: "NEC-HALLTICKETUI-0181",
    title: "Digital Hall Ticket View and Print Sheet - Item 181",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0182",
    code: "NEC-HALLTICKETUI-0182",
    title: "Digital Hall Ticket View and Print Sheet - Item 182",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0183",
    code: "NEC-HALLTICKETUI-0183",
    title: "Digital Hall Ticket View and Print Sheet - Item 183",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0184",
    code: "NEC-HALLTICKETUI-0184",
    title: "Digital Hall Ticket View and Print Sheet - Item 184",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0185",
    code: "NEC-HALLTICKETUI-0185",
    title: "Digital Hall Ticket View and Print Sheet - Item 185",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0186",
    code: "NEC-HALLTICKETUI-0186",
    title: "Digital Hall Ticket View and Print Sheet - Item 186",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0187",
    code: "NEC-HALLTICKETUI-0187",
    title: "Digital Hall Ticket View and Print Sheet - Item 187",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0188",
    code: "NEC-HALLTICKETUI-0188",
    title: "Digital Hall Ticket View and Print Sheet - Item 188",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0189",
    code: "NEC-HALLTICKETUI-0189",
    title: "Digital Hall Ticket View and Print Sheet - Item 189",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0190",
    code: "NEC-HALLTICKETUI-0190",
    title: "Digital Hall Ticket View and Print Sheet - Item 190",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0191",
    code: "NEC-HALLTICKETUI-0191",
    title: "Digital Hall Ticket View and Print Sheet - Item 191",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0192",
    code: "NEC-HALLTICKETUI-0192",
    title: "Digital Hall Ticket View and Print Sheet - Item 192",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0193",
    code: "NEC-HALLTICKETUI-0193",
    title: "Digital Hall Ticket View and Print Sheet - Item 193",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0194",
    code: "NEC-HALLTICKETUI-0194",
    title: "Digital Hall Ticket View and Print Sheet - Item 194",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0195",
    code: "NEC-HALLTICKETUI-0195",
    title: "Digital Hall Ticket View and Print Sheet - Item 195",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0196",
    code: "NEC-HALLTICKETUI-0196",
    title: "Digital Hall Ticket View and Print Sheet - Item 196",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0197",
    code: "NEC-HALLTICKETUI-0197",
    title: "Digital Hall Ticket View and Print Sheet - Item 197",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0198",
    code: "NEC-HALLTICKETUI-0198",
    title: "Digital Hall Ticket View and Print Sheet - Item 198",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0199",
    code: "NEC-HALLTICKETUI-0199",
    title: "Digital Hall Ticket View and Print Sheet - Item 199",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0200",
    code: "NEC-HALLTICKETUI-0200",
    title: "Digital Hall Ticket View and Print Sheet - Item 200",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0201",
    code: "NEC-HALLTICKETUI-0201",
    title: "Digital Hall Ticket View and Print Sheet - Item 201",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0202",
    code: "NEC-HALLTICKETUI-0202",
    title: "Digital Hall Ticket View and Print Sheet - Item 202",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0203",
    code: "NEC-HALLTICKETUI-0203",
    title: "Digital Hall Ticket View and Print Sheet - Item 203",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0204",
    code: "NEC-HALLTICKETUI-0204",
    title: "Digital Hall Ticket View and Print Sheet - Item 204",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0205",
    code: "NEC-HALLTICKETUI-0205",
    title: "Digital Hall Ticket View and Print Sheet - Item 205",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0206",
    code: "NEC-HALLTICKETUI-0206",
    title: "Digital Hall Ticket View and Print Sheet - Item 206",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0207",
    code: "NEC-HALLTICKETUI-0207",
    title: "Digital Hall Ticket View and Print Sheet - Item 207",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0208",
    code: "NEC-HALLTICKETUI-0208",
    title: "Digital Hall Ticket View and Print Sheet - Item 208",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0209",
    code: "NEC-HALLTICKETUI-0209",
    title: "Digital Hall Ticket View and Print Sheet - Item 209",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0210",
    code: "NEC-HALLTICKETUI-0210",
    title: "Digital Hall Ticket View and Print Sheet - Item 210",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0211",
    code: "NEC-HALLTICKETUI-0211",
    title: "Digital Hall Ticket View and Print Sheet - Item 211",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0212",
    code: "NEC-HALLTICKETUI-0212",
    title: "Digital Hall Ticket View and Print Sheet - Item 212",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0213",
    code: "NEC-HALLTICKETUI-0213",
    title: "Digital Hall Ticket View and Print Sheet - Item 213",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0214",
    code: "NEC-HALLTICKETUI-0214",
    title: "Digital Hall Ticket View and Print Sheet - Item 214",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0215",
    code: "NEC-HALLTICKETUI-0215",
    title: "Digital Hall Ticket View and Print Sheet - Item 215",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0216",
    code: "NEC-HALLTICKETUI-0216",
    title: "Digital Hall Ticket View and Print Sheet - Item 216",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0217",
    code: "NEC-HALLTICKETUI-0217",
    title: "Digital Hall Ticket View and Print Sheet - Item 217",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0218",
    code: "NEC-HALLTICKETUI-0218",
    title: "Digital Hall Ticket View and Print Sheet - Item 218",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0219",
    code: "NEC-HALLTICKETUI-0219",
    title: "Digital Hall Ticket View and Print Sheet - Item 219",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0220",
    code: "NEC-HALLTICKETUI-0220",
    title: "Digital Hall Ticket View and Print Sheet - Item 220",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0221",
    code: "NEC-HALLTICKETUI-0221",
    title: "Digital Hall Ticket View and Print Sheet - Item 221",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0222",
    code: "NEC-HALLTICKETUI-0222",
    title: "Digital Hall Ticket View and Print Sheet - Item 222",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0223",
    code: "NEC-HALLTICKETUI-0223",
    title: "Digital Hall Ticket View and Print Sheet - Item 223",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0224",
    code: "NEC-HALLTICKETUI-0224",
    title: "Digital Hall Ticket View and Print Sheet - Item 224",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0225",
    code: "NEC-HALLTICKETUI-0225",
    title: "Digital Hall Ticket View and Print Sheet - Item 225",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0226",
    code: "NEC-HALLTICKETUI-0226",
    title: "Digital Hall Ticket View and Print Sheet - Item 226",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0227",
    code: "NEC-HALLTICKETUI-0227",
    title: "Digital Hall Ticket View and Print Sheet - Item 227",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0228",
    code: "NEC-HALLTICKETUI-0228",
    title: "Digital Hall Ticket View and Print Sheet - Item 228",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0229",
    code: "NEC-HALLTICKETUI-0229",
    title: "Digital Hall Ticket View and Print Sheet - Item 229",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0230",
    code: "NEC-HALLTICKETUI-0230",
    title: "Digital Hall Ticket View and Print Sheet - Item 230",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0231",
    code: "NEC-HALLTICKETUI-0231",
    title: "Digital Hall Ticket View and Print Sheet - Item 231",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0232",
    code: "NEC-HALLTICKETUI-0232",
    title: "Digital Hall Ticket View and Print Sheet - Item 232",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0233",
    code: "NEC-HALLTICKETUI-0233",
    title: "Digital Hall Ticket View and Print Sheet - Item 233",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0234",
    code: "NEC-HALLTICKETUI-0234",
    title: "Digital Hall Ticket View and Print Sheet - Item 234",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0235",
    code: "NEC-HALLTICKETUI-0235",
    title: "Digital Hall Ticket View and Print Sheet - Item 235",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0236",
    code: "NEC-HALLTICKETUI-0236",
    title: "Digital Hall Ticket View and Print Sheet - Item 236",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0237",
    code: "NEC-HALLTICKETUI-0237",
    title: "Digital Hall Ticket View and Print Sheet - Item 237",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0238",
    code: "NEC-HALLTICKETUI-0238",
    title: "Digital Hall Ticket View and Print Sheet - Item 238",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0239",
    code: "NEC-HALLTICKETUI-0239",
    title: "Digital Hall Ticket View and Print Sheet - Item 239",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0240",
    code: "NEC-HALLTICKETUI-0240",
    title: "Digital Hall Ticket View and Print Sheet - Item 240",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0241",
    code: "NEC-HALLTICKETUI-0241",
    title: "Digital Hall Ticket View and Print Sheet - Item 241",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0242",
    code: "NEC-HALLTICKETUI-0242",
    title: "Digital Hall Ticket View and Print Sheet - Item 242",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0243",
    code: "NEC-HALLTICKETUI-0243",
    title: "Digital Hall Ticket View and Print Sheet - Item 243",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0244",
    code: "NEC-HALLTICKETUI-0244",
    title: "Digital Hall Ticket View and Print Sheet - Item 244",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0245",
    code: "NEC-HALLTICKETUI-0245",
    title: "Digital Hall Ticket View and Print Sheet - Item 245",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0246",
    code: "NEC-HALLTICKETUI-0246",
    title: "Digital Hall Ticket View and Print Sheet - Item 246",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0247",
    code: "NEC-HALLTICKETUI-0247",
    title: "Digital Hall Ticket View and Print Sheet - Item 247",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0248",
    code: "NEC-HALLTICKETUI-0248",
    title: "Digital Hall Ticket View and Print Sheet - Item 248",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0249",
    code: "NEC-HALLTICKETUI-0249",
    title: "Digital Hall Ticket View and Print Sheet - Item 249",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0250",
    code: "NEC-HALLTICKETUI-0250",
    title: "Digital Hall Ticket View and Print Sheet - Item 250",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0251",
    code: "NEC-HALLTICKETUI-0251",
    title: "Digital Hall Ticket View and Print Sheet - Item 251",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0252",
    code: "NEC-HALLTICKETUI-0252",
    title: "Digital Hall Ticket View and Print Sheet - Item 252",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0253",
    code: "NEC-HALLTICKETUI-0253",
    title: "Digital Hall Ticket View and Print Sheet - Item 253",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0254",
    code: "NEC-HALLTICKETUI-0254",
    title: "Digital Hall Ticket View and Print Sheet - Item 254",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0255",
    code: "NEC-HALLTICKETUI-0255",
    title: "Digital Hall Ticket View and Print Sheet - Item 255",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0256",
    code: "NEC-HALLTICKETUI-0256",
    title: "Digital Hall Ticket View and Print Sheet - Item 256",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0257",
    code: "NEC-HALLTICKETUI-0257",
    title: "Digital Hall Ticket View and Print Sheet - Item 257",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0258",
    code: "NEC-HALLTICKETUI-0258",
    title: "Digital Hall Ticket View and Print Sheet - Item 258",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0259",
    code: "NEC-HALLTICKETUI-0259",
    title: "Digital Hall Ticket View and Print Sheet - Item 259",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0260",
    code: "NEC-HALLTICKETUI-0260",
    title: "Digital Hall Ticket View and Print Sheet - Item 260",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0261",
    code: "NEC-HALLTICKETUI-0261",
    title: "Digital Hall Ticket View and Print Sheet - Item 261",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0262",
    code: "NEC-HALLTICKETUI-0262",
    title: "Digital Hall Ticket View and Print Sheet - Item 262",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0263",
    code: "NEC-HALLTICKETUI-0263",
    title: "Digital Hall Ticket View and Print Sheet - Item 263",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0264",
    code: "NEC-HALLTICKETUI-0264",
    title: "Digital Hall Ticket View and Print Sheet - Item 264",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0265",
    code: "NEC-HALLTICKETUI-0265",
    title: "Digital Hall Ticket View and Print Sheet - Item 265",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0266",
    code: "NEC-HALLTICKETUI-0266",
    title: "Digital Hall Ticket View and Print Sheet - Item 266",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0267",
    code: "NEC-HALLTICKETUI-0267",
    title: "Digital Hall Ticket View and Print Sheet - Item 267",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0268",
    code: "NEC-HALLTICKETUI-0268",
    title: "Digital Hall Ticket View and Print Sheet - Item 268",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0269",
    code: "NEC-HALLTICKETUI-0269",
    title: "Digital Hall Ticket View and Print Sheet - Item 269",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0270",
    code: "NEC-HALLTICKETUI-0270",
    title: "Digital Hall Ticket View and Print Sheet - Item 270",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0271",
    code: "NEC-HALLTICKETUI-0271",
    title: "Digital Hall Ticket View and Print Sheet - Item 271",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0272",
    code: "NEC-HALLTICKETUI-0272",
    title: "Digital Hall Ticket View and Print Sheet - Item 272",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0273",
    code: "NEC-HALLTICKETUI-0273",
    title: "Digital Hall Ticket View and Print Sheet - Item 273",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0274",
    code: "NEC-HALLTICKETUI-0274",
    title: "Digital Hall Ticket View and Print Sheet - Item 274",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0275",
    code: "NEC-HALLTICKETUI-0275",
    title: "Digital Hall Ticket View and Print Sheet - Item 275",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0276",
    code: "NEC-HALLTICKETUI-0276",
    title: "Digital Hall Ticket View and Print Sheet - Item 276",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0277",
    code: "NEC-HALLTICKETUI-0277",
    title: "Digital Hall Ticket View and Print Sheet - Item 277",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0278",
    code: "NEC-HALLTICKETUI-0278",
    title: "Digital Hall Ticket View and Print Sheet - Item 278",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0279",
    code: "NEC-HALLTICKETUI-0279",
    title: "Digital Hall Ticket View and Print Sheet - Item 279",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0280",
    code: "NEC-HALLTICKETUI-0280",
    title: "Digital Hall Ticket View and Print Sheet - Item 280",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0281",
    code: "NEC-HALLTICKETUI-0281",
    title: "Digital Hall Ticket View and Print Sheet - Item 281",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0282",
    code: "NEC-HALLTICKETUI-0282",
    title: "Digital Hall Ticket View and Print Sheet - Item 282",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0283",
    code: "NEC-HALLTICKETUI-0283",
    title: "Digital Hall Ticket View and Print Sheet - Item 283",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0284",
    code: "NEC-HALLTICKETUI-0284",
    title: "Digital Hall Ticket View and Print Sheet - Item 284",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0285",
    code: "NEC-HALLTICKETUI-0285",
    title: "Digital Hall Ticket View and Print Sheet - Item 285",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0286",
    code: "NEC-HALLTICKETUI-0286",
    title: "Digital Hall Ticket View and Print Sheet - Item 286",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0287",
    code: "NEC-HALLTICKETUI-0287",
    title: "Digital Hall Ticket View and Print Sheet - Item 287",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0288",
    code: "NEC-HALLTICKETUI-0288",
    title: "Digital Hall Ticket View and Print Sheet - Item 288",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0289",
    code: "NEC-HALLTICKETUI-0289",
    title: "Digital Hall Ticket View and Print Sheet - Item 289",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0290",
    code: "NEC-HALLTICKETUI-0290",
    title: "Digital Hall Ticket View and Print Sheet - Item 290",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0291",
    code: "NEC-HALLTICKETUI-0291",
    title: "Digital Hall Ticket View and Print Sheet - Item 291",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0292",
    code: "NEC-HALLTICKETUI-0292",
    title: "Digital Hall Ticket View and Print Sheet - Item 292",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0293",
    code: "NEC-HALLTICKETUI-0293",
    title: "Digital Hall Ticket View and Print Sheet - Item 293",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0294",
    code: "NEC-HALLTICKETUI-0294",
    title: "Digital Hall Ticket View and Print Sheet - Item 294",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0295",
    code: "NEC-HALLTICKETUI-0295",
    title: "Digital Hall Ticket View and Print Sheet - Item 295",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0296",
    code: "NEC-HALLTICKETUI-0296",
    title: "Digital Hall Ticket View and Print Sheet - Item 296",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0297",
    code: "NEC-HALLTICKETUI-0297",
    title: "Digital Hall Ticket View and Print Sheet - Item 297",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0298",
    code: "NEC-HALLTICKETUI-0298",
    title: "Digital Hall Ticket View and Print Sheet - Item 298",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0299",
    code: "NEC-HALLTICKETUI-0299",
    title: "Digital Hall Ticket View and Print Sheet - Item 299",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0300",
    code: "NEC-HALLTICKETUI-0300",
    title: "Digital Hall Ticket View and Print Sheet - Item 300",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0301",
    code: "NEC-HALLTICKETUI-0301",
    title: "Digital Hall Ticket View and Print Sheet - Item 301",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0302",
    code: "NEC-HALLTICKETUI-0302",
    title: "Digital Hall Ticket View and Print Sheet - Item 302",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0303",
    code: "NEC-HALLTICKETUI-0303",
    title: "Digital Hall Ticket View and Print Sheet - Item 303",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0304",
    code: "NEC-HALLTICKETUI-0304",
    title: "Digital Hall Ticket View and Print Sheet - Item 304",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0305",
    code: "NEC-HALLTICKETUI-0305",
    title: "Digital Hall Ticket View and Print Sheet - Item 305",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0306",
    code: "NEC-HALLTICKETUI-0306",
    title: "Digital Hall Ticket View and Print Sheet - Item 306",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0307",
    code: "NEC-HALLTICKETUI-0307",
    title: "Digital Hall Ticket View and Print Sheet - Item 307",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0308",
    code: "NEC-HALLTICKETUI-0308",
    title: "Digital Hall Ticket View and Print Sheet - Item 308",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0309",
    code: "NEC-HALLTICKETUI-0309",
    title: "Digital Hall Ticket View and Print Sheet - Item 309",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0310",
    code: "NEC-HALLTICKETUI-0310",
    title: "Digital Hall Ticket View and Print Sheet - Item 310",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0311",
    code: "NEC-HALLTICKETUI-0311",
    title: "Digital Hall Ticket View and Print Sheet - Item 311",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0312",
    code: "NEC-HALLTICKETUI-0312",
    title: "Digital Hall Ticket View and Print Sheet - Item 312",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0313",
    code: "NEC-HALLTICKETUI-0313",
    title: "Digital Hall Ticket View and Print Sheet - Item 313",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0314",
    code: "NEC-HALLTICKETUI-0314",
    title: "Digital Hall Ticket View and Print Sheet - Item 314",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0315",
    code: "NEC-HALLTICKETUI-0315",
    title: "Digital Hall Ticket View and Print Sheet - Item 315",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0316",
    code: "NEC-HALLTICKETUI-0316",
    title: "Digital Hall Ticket View and Print Sheet - Item 316",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0317",
    code: "NEC-HALLTICKETUI-0317",
    title: "Digital Hall Ticket View and Print Sheet - Item 317",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0318",
    code: "NEC-HALLTICKETUI-0318",
    title: "Digital Hall Ticket View and Print Sheet - Item 318",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0319",
    code: "NEC-HALLTICKETUI-0319",
    title: "Digital Hall Ticket View and Print Sheet - Item 319",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0320",
    code: "NEC-HALLTICKETUI-0320",
    title: "Digital Hall Ticket View and Print Sheet - Item 320",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0321",
    code: "NEC-HALLTICKETUI-0321",
    title: "Digital Hall Ticket View and Print Sheet - Item 321",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0322",
    code: "NEC-HALLTICKETUI-0322",
    title: "Digital Hall Ticket View and Print Sheet - Item 322",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0323",
    code: "NEC-HALLTICKETUI-0323",
    title: "Digital Hall Ticket View and Print Sheet - Item 323",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0324",
    code: "NEC-HALLTICKETUI-0324",
    title: "Digital Hall Ticket View and Print Sheet - Item 324",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0325",
    code: "NEC-HALLTICKETUI-0325",
    title: "Digital Hall Ticket View and Print Sheet - Item 325",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0326",
    code: "NEC-HALLTICKETUI-0326",
    title: "Digital Hall Ticket View and Print Sheet - Item 326",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0327",
    code: "NEC-HALLTICKETUI-0327",
    title: "Digital Hall Ticket View and Print Sheet - Item 327",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0328",
    code: "NEC-HALLTICKETUI-0328",
    title: "Digital Hall Ticket View and Print Sheet - Item 328",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0329",
    code: "NEC-HALLTICKETUI-0329",
    title: "Digital Hall Ticket View and Print Sheet - Item 329",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0330",
    code: "NEC-HALLTICKETUI-0330",
    title: "Digital Hall Ticket View and Print Sheet - Item 330",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0331",
    code: "NEC-HALLTICKETUI-0331",
    title: "Digital Hall Ticket View and Print Sheet - Item 331",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0332",
    code: "NEC-HALLTICKETUI-0332",
    title: "Digital Hall Ticket View and Print Sheet - Item 332",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0333",
    code: "NEC-HALLTICKETUI-0333",
    title: "Digital Hall Ticket View and Print Sheet - Item 333",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0334",
    code: "NEC-HALLTICKETUI-0334",
    title: "Digital Hall Ticket View and Print Sheet - Item 334",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0335",
    code: "NEC-HALLTICKETUI-0335",
    title: "Digital Hall Ticket View and Print Sheet - Item 335",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0336",
    code: "NEC-HALLTICKETUI-0336",
    title: "Digital Hall Ticket View and Print Sheet - Item 336",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0337",
    code: "NEC-HALLTICKETUI-0337",
    title: "Digital Hall Ticket View and Print Sheet - Item 337",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0338",
    code: "NEC-HALLTICKETUI-0338",
    title: "Digital Hall Ticket View and Print Sheet - Item 338",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0339",
    code: "NEC-HALLTICKETUI-0339",
    title: "Digital Hall Ticket View and Print Sheet - Item 339",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0340",
    code: "NEC-HALLTICKETUI-0340",
    title: "Digital Hall Ticket View and Print Sheet - Item 340",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0341",
    code: "NEC-HALLTICKETUI-0341",
    title: "Digital Hall Ticket View and Print Sheet - Item 341",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0342",
    code: "NEC-HALLTICKETUI-0342",
    title: "Digital Hall Ticket View and Print Sheet - Item 342",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0343",
    code: "NEC-HALLTICKETUI-0343",
    title: "Digital Hall Ticket View and Print Sheet - Item 343",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0344",
    code: "NEC-HALLTICKETUI-0344",
    title: "Digital Hall Ticket View and Print Sheet - Item 344",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0345",
    code: "NEC-HALLTICKETUI-0345",
    title: "Digital Hall Ticket View and Print Sheet - Item 345",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0346",
    code: "NEC-HALLTICKETUI-0346",
    title: "Digital Hall Ticket View and Print Sheet - Item 346",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0347",
    code: "NEC-HALLTICKETUI-0347",
    title: "Digital Hall Ticket View and Print Sheet - Item 347",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0348",
    code: "NEC-HALLTICKETUI-0348",
    title: "Digital Hall Ticket View and Print Sheet - Item 348",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0349",
    code: "NEC-HALLTICKETUI-0349",
    title: "Digital Hall Ticket View and Print Sheet - Item 349",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0350",
    code: "NEC-HALLTICKETUI-0350",
    title: "Digital Hall Ticket View and Print Sheet - Item 350",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0351",
    code: "NEC-HALLTICKETUI-0351",
    title: "Digital Hall Ticket View and Print Sheet - Item 351",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0352",
    code: "NEC-HALLTICKETUI-0352",
    title: "Digital Hall Ticket View and Print Sheet - Item 352",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0353",
    code: "NEC-HALLTICKETUI-0353",
    title: "Digital Hall Ticket View and Print Sheet - Item 353",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0354",
    code: "NEC-HALLTICKETUI-0354",
    title: "Digital Hall Ticket View and Print Sheet - Item 354",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0355",
    code: "NEC-HALLTICKETUI-0355",
    title: "Digital Hall Ticket View and Print Sheet - Item 355",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0356",
    code: "NEC-HALLTICKETUI-0356",
    title: "Digital Hall Ticket View and Print Sheet - Item 356",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0357",
    code: "NEC-HALLTICKETUI-0357",
    title: "Digital Hall Ticket View and Print Sheet - Item 357",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0358",
    code: "NEC-HALLTICKETUI-0358",
    title: "Digital Hall Ticket View and Print Sheet - Item 358",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0359",
    code: "NEC-HALLTICKETUI-0359",
    title: "Digital Hall Ticket View and Print Sheet - Item 359",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0360",
    code: "NEC-HALLTICKETUI-0360",
    title: "Digital Hall Ticket View and Print Sheet - Item 360",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0361",
    code: "NEC-HALLTICKETUI-0361",
    title: "Digital Hall Ticket View and Print Sheet - Item 361",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0362",
    code: "NEC-HALLTICKETUI-0362",
    title: "Digital Hall Ticket View and Print Sheet - Item 362",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0363",
    code: "NEC-HALLTICKETUI-0363",
    title: "Digital Hall Ticket View and Print Sheet - Item 363",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0364",
    code: "NEC-HALLTICKETUI-0364",
    title: "Digital Hall Ticket View and Print Sheet - Item 364",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0365",
    code: "NEC-HALLTICKETUI-0365",
    title: "Digital Hall Ticket View and Print Sheet - Item 365",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0366",
    code: "NEC-HALLTICKETUI-0366",
    title: "Digital Hall Ticket View and Print Sheet - Item 366",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0367",
    code: "NEC-HALLTICKETUI-0367",
    title: "Digital Hall Ticket View and Print Sheet - Item 367",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0368",
    code: "NEC-HALLTICKETUI-0368",
    title: "Digital Hall Ticket View and Print Sheet - Item 368",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0369",
    code: "NEC-HALLTICKETUI-0369",
    title: "Digital Hall Ticket View and Print Sheet - Item 369",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0370",
    code: "NEC-HALLTICKETUI-0370",
    title: "Digital Hall Ticket View and Print Sheet - Item 370",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0371",
    code: "NEC-HALLTICKETUI-0371",
    title: "Digital Hall Ticket View and Print Sheet - Item 371",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0372",
    code: "NEC-HALLTICKETUI-0372",
    title: "Digital Hall Ticket View and Print Sheet - Item 372",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0373",
    code: "NEC-HALLTICKETUI-0373",
    title: "Digital Hall Ticket View and Print Sheet - Item 373",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0374",
    code: "NEC-HALLTICKETUI-0374",
    title: "Digital Hall Ticket View and Print Sheet - Item 374",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0375",
    code: "NEC-HALLTICKETUI-0375",
    title: "Digital Hall Ticket View and Print Sheet - Item 375",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0376",
    code: "NEC-HALLTICKETUI-0376",
    title: "Digital Hall Ticket View and Print Sheet - Item 376",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0377",
    code: "NEC-HALLTICKETUI-0377",
    title: "Digital Hall Ticket View and Print Sheet - Item 377",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0378",
    code: "NEC-HALLTICKETUI-0378",
    title: "Digital Hall Ticket View and Print Sheet - Item 378",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0379",
    code: "NEC-HALLTICKETUI-0379",
    title: "Digital Hall Ticket View and Print Sheet - Item 379",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0380",
    code: "NEC-HALLTICKETUI-0380",
    title: "Digital Hall Ticket View and Print Sheet - Item 380",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0381",
    code: "NEC-HALLTICKETUI-0381",
    title: "Digital Hall Ticket View and Print Sheet - Item 381",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0382",
    code: "NEC-HALLTICKETUI-0382",
    title: "Digital Hall Ticket View and Print Sheet - Item 382",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0383",
    code: "NEC-HALLTICKETUI-0383",
    title: "Digital Hall Ticket View and Print Sheet - Item 383",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0384",
    code: "NEC-HALLTICKETUI-0384",
    title: "Digital Hall Ticket View and Print Sheet - Item 384",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0385",
    code: "NEC-HALLTICKETUI-0385",
    title: "Digital Hall Ticket View and Print Sheet - Item 385",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0386",
    code: "NEC-HALLTICKETUI-0386",
    title: "Digital Hall Ticket View and Print Sheet - Item 386",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0387",
    code: "NEC-HALLTICKETUI-0387",
    title: "Digital Hall Ticket View and Print Sheet - Item 387",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0388",
    code: "NEC-HALLTICKETUI-0388",
    title: "Digital Hall Ticket View and Print Sheet - Item 388",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0389",
    code: "NEC-HALLTICKETUI-0389",
    title: "Digital Hall Ticket View and Print Sheet - Item 389",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0390",
    code: "NEC-HALLTICKETUI-0390",
    title: "Digital Hall Ticket View and Print Sheet - Item 390",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0391",
    code: "NEC-HALLTICKETUI-0391",
    title: "Digital Hall Ticket View and Print Sheet - Item 391",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0392",
    code: "NEC-HALLTICKETUI-0392",
    title: "Digital Hall Ticket View and Print Sheet - Item 392",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0393",
    code: "NEC-HALLTICKETUI-0393",
    title: "Digital Hall Ticket View and Print Sheet - Item 393",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0394",
    code: "NEC-HALLTICKETUI-0394",
    title: "Digital Hall Ticket View and Print Sheet - Item 394",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0395",
    code: "NEC-HALLTICKETUI-0395",
    title: "Digital Hall Ticket View and Print Sheet - Item 395",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0396",
    code: "NEC-HALLTICKETUI-0396",
    title: "Digital Hall Ticket View and Print Sheet - Item 396",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0397",
    code: "NEC-HALLTICKETUI-0397",
    title: "Digital Hall Ticket View and Print Sheet - Item 397",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0398",
    code: "NEC-HALLTICKETUI-0398",
    title: "Digital Hall Ticket View and Print Sheet - Item 398",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0399",
    code: "NEC-HALLTICKETUI-0399",
    title: "Digital Hall Ticket View and Print Sheet - Item 399",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0400",
    code: "NEC-HALLTICKETUI-0400",
    title: "Digital Hall Ticket View and Print Sheet - Item 400",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0401",
    code: "NEC-HALLTICKETUI-0401",
    title: "Digital Hall Ticket View and Print Sheet - Item 401",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0402",
    code: "NEC-HALLTICKETUI-0402",
    title: "Digital Hall Ticket View and Print Sheet - Item 402",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0403",
    code: "NEC-HALLTICKETUI-0403",
    title: "Digital Hall Ticket View and Print Sheet - Item 403",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0404",
    code: "NEC-HALLTICKETUI-0404",
    title: "Digital Hall Ticket View and Print Sheet - Item 404",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0405",
    code: "NEC-HALLTICKETUI-0405",
    title: "Digital Hall Ticket View and Print Sheet - Item 405",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0406",
    code: "NEC-HALLTICKETUI-0406",
    title: "Digital Hall Ticket View and Print Sheet - Item 406",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0407",
    code: "NEC-HALLTICKETUI-0407",
    title: "Digital Hall Ticket View and Print Sheet - Item 407",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0408",
    code: "NEC-HALLTICKETUI-0408",
    title: "Digital Hall Ticket View and Print Sheet - Item 408",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0409",
    code: "NEC-HALLTICKETUI-0409",
    title: "Digital Hall Ticket View and Print Sheet - Item 409",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0410",
    code: "NEC-HALLTICKETUI-0410",
    title: "Digital Hall Ticket View and Print Sheet - Item 410",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0411",
    code: "NEC-HALLTICKETUI-0411",
    title: "Digital Hall Ticket View and Print Sheet - Item 411",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0412",
    code: "NEC-HALLTICKETUI-0412",
    title: "Digital Hall Ticket View and Print Sheet - Item 412",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0413",
    code: "NEC-HALLTICKETUI-0413",
    title: "Digital Hall Ticket View and Print Sheet - Item 413",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0414",
    code: "NEC-HALLTICKETUI-0414",
    title: "Digital Hall Ticket View and Print Sheet - Item 414",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0415",
    code: "NEC-HALLTICKETUI-0415",
    title: "Digital Hall Ticket View and Print Sheet - Item 415",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0416",
    code: "NEC-HALLTICKETUI-0416",
    title: "Digital Hall Ticket View and Print Sheet - Item 416",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0417",
    code: "NEC-HALLTICKETUI-0417",
    title: "Digital Hall Ticket View and Print Sheet - Item 417",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0418",
    code: "NEC-HALLTICKETUI-0418",
    title: "Digital Hall Ticket View and Print Sheet - Item 418",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0419",
    code: "NEC-HALLTICKETUI-0419",
    title: "Digital Hall Ticket View and Print Sheet - Item 419",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0420",
    code: "NEC-HALLTICKETUI-0420",
    title: "Digital Hall Ticket View and Print Sheet - Item 420",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0421",
    code: "NEC-HALLTICKETUI-0421",
    title: "Digital Hall Ticket View and Print Sheet - Item 421",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0422",
    code: "NEC-HALLTICKETUI-0422",
    title: "Digital Hall Ticket View and Print Sheet - Item 422",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0423",
    code: "NEC-HALLTICKETUI-0423",
    title: "Digital Hall Ticket View and Print Sheet - Item 423",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0424",
    code: "NEC-HALLTICKETUI-0424",
    title: "Digital Hall Ticket View and Print Sheet - Item 424",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0425",
    code: "NEC-HALLTICKETUI-0425",
    title: "Digital Hall Ticket View and Print Sheet - Item 425",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0426",
    code: "NEC-HALLTICKETUI-0426",
    title: "Digital Hall Ticket View and Print Sheet - Item 426",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0427",
    code: "NEC-HALLTICKETUI-0427",
    title: "Digital Hall Ticket View and Print Sheet - Item 427",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0428",
    code: "NEC-HALLTICKETUI-0428",
    title: "Digital Hall Ticket View and Print Sheet - Item 428",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0429",
    code: "NEC-HALLTICKETUI-0429",
    title: "Digital Hall Ticket View and Print Sheet - Item 429",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0430",
    code: "NEC-HALLTICKETUI-0430",
    title: "Digital Hall Ticket View and Print Sheet - Item 430",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0431",
    code: "NEC-HALLTICKETUI-0431",
    title: "Digital Hall Ticket View and Print Sheet - Item 431",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0432",
    code: "NEC-HALLTICKETUI-0432",
    title: "Digital Hall Ticket View and Print Sheet - Item 432",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0433",
    code: "NEC-HALLTICKETUI-0433",
    title: "Digital Hall Ticket View and Print Sheet - Item 433",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0434",
    code: "NEC-HALLTICKETUI-0434",
    title: "Digital Hall Ticket View and Print Sheet - Item 434",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0435",
    code: "NEC-HALLTICKETUI-0435",
    title: "Digital Hall Ticket View and Print Sheet - Item 435",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0436",
    code: "NEC-HALLTICKETUI-0436",
    title: "Digital Hall Ticket View and Print Sheet - Item 436",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0437",
    code: "NEC-HALLTICKETUI-0437",
    title: "Digital Hall Ticket View and Print Sheet - Item 437",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0438",
    code: "NEC-HALLTICKETUI-0438",
    title: "Digital Hall Ticket View and Print Sheet - Item 438",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0439",
    code: "NEC-HALLTICKETUI-0439",
    title: "Digital Hall Ticket View and Print Sheet - Item 439",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0440",
    code: "NEC-HALLTICKETUI-0440",
    title: "Digital Hall Ticket View and Print Sheet - Item 440",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0441",
    code: "NEC-HALLTICKETUI-0441",
    title: "Digital Hall Ticket View and Print Sheet - Item 441",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0442",
    code: "NEC-HALLTICKETUI-0442",
    title: "Digital Hall Ticket View and Print Sheet - Item 442",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0443",
    code: "NEC-HALLTICKETUI-0443",
    title: "Digital Hall Ticket View and Print Sheet - Item 443",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0444",
    code: "NEC-HALLTICKETUI-0444",
    title: "Digital Hall Ticket View and Print Sheet - Item 444",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0445",
    code: "NEC-HALLTICKETUI-0445",
    title: "Digital Hall Ticket View and Print Sheet - Item 445",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0446",
    code: "NEC-HALLTICKETUI-0446",
    title: "Digital Hall Ticket View and Print Sheet - Item 446",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0447",
    code: "NEC-HALLTICKETUI-0447",
    title: "Digital Hall Ticket View and Print Sheet - Item 447",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0448",
    code: "NEC-HALLTICKETUI-0448",
    title: "Digital Hall Ticket View and Print Sheet - Item 448",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0449",
    code: "NEC-HALLTICKETUI-0449",
    title: "Digital Hall Ticket View and Print Sheet - Item 449",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0450",
    code: "NEC-HALLTICKETUI-0450",
    title: "Digital Hall Ticket View and Print Sheet - Item 450",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0451",
    code: "NEC-HALLTICKETUI-0451",
    title: "Digital Hall Ticket View and Print Sheet - Item 451",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0452",
    code: "NEC-HALLTICKETUI-0452",
    title: "Digital Hall Ticket View and Print Sheet - Item 452",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0453",
    code: "NEC-HALLTICKETUI-0453",
    title: "Digital Hall Ticket View and Print Sheet - Item 453",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0454",
    code: "NEC-HALLTICKETUI-0454",
    title: "Digital Hall Ticket View and Print Sheet - Item 454",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0455",
    code: "NEC-HALLTICKETUI-0455",
    title: "Digital Hall Ticket View and Print Sheet - Item 455",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0456",
    code: "NEC-HALLTICKETUI-0456",
    title: "Digital Hall Ticket View and Print Sheet - Item 456",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0457",
    code: "NEC-HALLTICKETUI-0457",
    title: "Digital Hall Ticket View and Print Sheet - Item 457",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0458",
    code: "NEC-HALLTICKETUI-0458",
    title: "Digital Hall Ticket View and Print Sheet - Item 458",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0459",
    code: "NEC-HALLTICKETUI-0459",
    title: "Digital Hall Ticket View and Print Sheet - Item 459",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0460",
    code: "NEC-HALLTICKETUI-0460",
    title: "Digital Hall Ticket View and Print Sheet - Item 460",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0461",
    code: "NEC-HALLTICKETUI-0461",
    title: "Digital Hall Ticket View and Print Sheet - Item 461",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0462",
    code: "NEC-HALLTICKETUI-0462",
    title: "Digital Hall Ticket View and Print Sheet - Item 462",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0463",
    code: "NEC-HALLTICKETUI-0463",
    title: "Digital Hall Ticket View and Print Sheet - Item 463",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0464",
    code: "NEC-HALLTICKETUI-0464",
    title: "Digital Hall Ticket View and Print Sheet - Item 464",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0465",
    code: "NEC-HALLTICKETUI-0465",
    title: "Digital Hall Ticket View and Print Sheet - Item 465",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0466",
    code: "NEC-HALLTICKETUI-0466",
    title: "Digital Hall Ticket View and Print Sheet - Item 466",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0467",
    code: "NEC-HALLTICKETUI-0467",
    title: "Digital Hall Ticket View and Print Sheet - Item 467",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0468",
    code: "NEC-HALLTICKETUI-0468",
    title: "Digital Hall Ticket View and Print Sheet - Item 468",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0469",
    code: "NEC-HALLTICKETUI-0469",
    title: "Digital Hall Ticket View and Print Sheet - Item 469",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0470",
    code: "NEC-HALLTICKETUI-0470",
    title: "Digital Hall Ticket View and Print Sheet - Item 470",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0471",
    code: "NEC-HALLTICKETUI-0471",
    title: "Digital Hall Ticket View and Print Sheet - Item 471",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0472",
    code: "NEC-HALLTICKETUI-0472",
    title: "Digital Hall Ticket View and Print Sheet - Item 472",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0473",
    code: "NEC-HALLTICKETUI-0473",
    title: "Digital Hall Ticket View and Print Sheet - Item 473",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0474",
    code: "NEC-HALLTICKETUI-0474",
    title: "Digital Hall Ticket View and Print Sheet - Item 474",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0475",
    code: "NEC-HALLTICKETUI-0475",
    title: "Digital Hall Ticket View and Print Sheet - Item 475",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0476",
    code: "NEC-HALLTICKETUI-0476",
    title: "Digital Hall Ticket View and Print Sheet - Item 476",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0477",
    code: "NEC-HALLTICKETUI-0477",
    title: "Digital Hall Ticket View and Print Sheet - Item 477",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0478",
    code: "NEC-HALLTICKETUI-0478",
    title: "Digital Hall Ticket View and Print Sheet - Item 478",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0479",
    code: "NEC-HALLTICKETUI-0479",
    title: "Digital Hall Ticket View and Print Sheet - Item 479",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0480",
    code: "NEC-HALLTICKETUI-0480",
    title: "Digital Hall Ticket View and Print Sheet - Item 480",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0481",
    code: "NEC-HALLTICKETUI-0481",
    title: "Digital Hall Ticket View and Print Sheet - Item 481",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0482",
    code: "NEC-HALLTICKETUI-0482",
    title: "Digital Hall Ticket View and Print Sheet - Item 482",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0483",
    code: "NEC-HALLTICKETUI-0483",
    title: "Digital Hall Ticket View and Print Sheet - Item 483",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0484",
    code: "NEC-HALLTICKETUI-0484",
    title: "Digital Hall Ticket View and Print Sheet - Item 484",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0485",
    code: "NEC-HALLTICKETUI-0485",
    title: "Digital Hall Ticket View and Print Sheet - Item 485",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0486",
    code: "NEC-HALLTICKETUI-0486",
    title: "Digital Hall Ticket View and Print Sheet - Item 486",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0487",
    code: "NEC-HALLTICKETUI-0487",
    title: "Digital Hall Ticket View and Print Sheet - Item 487",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0488",
    code: "NEC-HALLTICKETUI-0488",
    title: "Digital Hall Ticket View and Print Sheet - Item 488",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0489",
    code: "NEC-HALLTICKETUI-0489",
    title: "Digital Hall Ticket View and Print Sheet - Item 489",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0490",
    code: "NEC-HALLTICKETUI-0490",
    title: "Digital Hall Ticket View and Print Sheet - Item 490",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0491",
    code: "NEC-HALLTICKETUI-0491",
    title: "Digital Hall Ticket View and Print Sheet - Item 491",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0492",
    code: "NEC-HALLTICKETUI-0492",
    title: "Digital Hall Ticket View and Print Sheet - Item 492",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0493",
    code: "NEC-HALLTICKETUI-0493",
    title: "Digital Hall Ticket View and Print Sheet - Item 493",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0494",
    code: "NEC-HALLTICKETUI-0494",
    title: "Digital Hall Ticket View and Print Sheet - Item 494",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0495",
    code: "NEC-HALLTICKETUI-0495",
    title: "Digital Hall Ticket View and Print Sheet - Item 495",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0496",
    code: "NEC-HALLTICKETUI-0496",
    title: "Digital Hall Ticket View and Print Sheet - Item 496",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0497",
    code: "NEC-HALLTICKETUI-0497",
    title: "Digital Hall Ticket View and Print Sheet - Item 497",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0498",
    code: "NEC-HALLTICKETUI-0498",
    title: "Digital Hall Ticket View and Print Sheet - Item 498",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0499",
    code: "NEC-HALLTICKETUI-0499",
    title: "Digital Hall Ticket View and Print Sheet - Item 499",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0500",
    code: "NEC-HALLTICKETUI-0500",
    title: "Digital Hall Ticket View and Print Sheet - Item 500",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0501",
    code: "NEC-HALLTICKETUI-0501",
    title: "Digital Hall Ticket View and Print Sheet - Item 501",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0502",
    code: "NEC-HALLTICKETUI-0502",
    title: "Digital Hall Ticket View and Print Sheet - Item 502",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0503",
    code: "NEC-HALLTICKETUI-0503",
    title: "Digital Hall Ticket View and Print Sheet - Item 503",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0504",
    code: "NEC-HALLTICKETUI-0504",
    title: "Digital Hall Ticket View and Print Sheet - Item 504",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0505",
    code: "NEC-HALLTICKETUI-0505",
    title: "Digital Hall Ticket View and Print Sheet - Item 505",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0506",
    code: "NEC-HALLTICKETUI-0506",
    title: "Digital Hall Ticket View and Print Sheet - Item 506",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0507",
    code: "NEC-HALLTICKETUI-0507",
    title: "Digital Hall Ticket View and Print Sheet - Item 507",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0508",
    code: "NEC-HALLTICKETUI-0508",
    title: "Digital Hall Ticket View and Print Sheet - Item 508",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0509",
    code: "NEC-HALLTICKETUI-0509",
    title: "Digital Hall Ticket View and Print Sheet - Item 509",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0510",
    code: "NEC-HALLTICKETUI-0510",
    title: "Digital Hall Ticket View and Print Sheet - Item 510",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0511",
    code: "NEC-HALLTICKETUI-0511",
    title: "Digital Hall Ticket View and Print Sheet - Item 511",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0512",
    code: "NEC-HALLTICKETUI-0512",
    title: "Digital Hall Ticket View and Print Sheet - Item 512",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0513",
    code: "NEC-HALLTICKETUI-0513",
    title: "Digital Hall Ticket View and Print Sheet - Item 513",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0514",
    code: "NEC-HALLTICKETUI-0514",
    title: "Digital Hall Ticket View and Print Sheet - Item 514",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0515",
    code: "NEC-HALLTICKETUI-0515",
    title: "Digital Hall Ticket View and Print Sheet - Item 515",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0516",
    code: "NEC-HALLTICKETUI-0516",
    title: "Digital Hall Ticket View and Print Sheet - Item 516",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0517",
    code: "NEC-HALLTICKETUI-0517",
    title: "Digital Hall Ticket View and Print Sheet - Item 517",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0518",
    code: "NEC-HALLTICKETUI-0518",
    title: "Digital Hall Ticket View and Print Sheet - Item 518",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0519",
    code: "NEC-HALLTICKETUI-0519",
    title: "Digital Hall Ticket View and Print Sheet - Item 519",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0520",
    code: "NEC-HALLTICKETUI-0520",
    title: "Digital Hall Ticket View and Print Sheet - Item 520",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0521",
    code: "NEC-HALLTICKETUI-0521",
    title: "Digital Hall Ticket View and Print Sheet - Item 521",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0522",
    code: "NEC-HALLTICKETUI-0522",
    title: "Digital Hall Ticket View and Print Sheet - Item 522",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0523",
    code: "NEC-HALLTICKETUI-0523",
    title: "Digital Hall Ticket View and Print Sheet - Item 523",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0524",
    code: "NEC-HALLTICKETUI-0524",
    title: "Digital Hall Ticket View and Print Sheet - Item 524",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0525",
    code: "NEC-HALLTICKETUI-0525",
    title: "Digital Hall Ticket View and Print Sheet - Item 525",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0526",
    code: "NEC-HALLTICKETUI-0526",
    title: "Digital Hall Ticket View and Print Sheet - Item 526",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0527",
    code: "NEC-HALLTICKETUI-0527",
    title: "Digital Hall Ticket View and Print Sheet - Item 527",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0528",
    code: "NEC-HALLTICKETUI-0528",
    title: "Digital Hall Ticket View and Print Sheet - Item 528",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0529",
    code: "NEC-HALLTICKETUI-0529",
    title: "Digital Hall Ticket View and Print Sheet - Item 529",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0530",
    code: "NEC-HALLTICKETUI-0530",
    title: "Digital Hall Ticket View and Print Sheet - Item 530",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0531",
    code: "NEC-HALLTICKETUI-0531",
    title: "Digital Hall Ticket View and Print Sheet - Item 531",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0532",
    code: "NEC-HALLTICKETUI-0532",
    title: "Digital Hall Ticket View and Print Sheet - Item 532",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0533",
    code: "NEC-HALLTICKETUI-0533",
    title: "Digital Hall Ticket View and Print Sheet - Item 533",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0534",
    code: "NEC-HALLTICKETUI-0534",
    title: "Digital Hall Ticket View and Print Sheet - Item 534",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0535",
    code: "NEC-HALLTICKETUI-0535",
    title: "Digital Hall Ticket View and Print Sheet - Item 535",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0536",
    code: "NEC-HALLTICKETUI-0536",
    title: "Digital Hall Ticket View and Print Sheet - Item 536",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0537",
    code: "NEC-HALLTICKETUI-0537",
    title: "Digital Hall Ticket View and Print Sheet - Item 537",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0538",
    code: "NEC-HALLTICKETUI-0538",
    title: "Digital Hall Ticket View and Print Sheet - Item 538",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0539",
    code: "NEC-HALLTICKETUI-0539",
    title: "Digital Hall Ticket View and Print Sheet - Item 539",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0540",
    code: "NEC-HALLTICKETUI-0540",
    title: "Digital Hall Ticket View and Print Sheet - Item 540",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0541",
    code: "NEC-HALLTICKETUI-0541",
    title: "Digital Hall Ticket View and Print Sheet - Item 541",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0542",
    code: "NEC-HALLTICKETUI-0542",
    title: "Digital Hall Ticket View and Print Sheet - Item 542",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0543",
    code: "NEC-HALLTICKETUI-0543",
    title: "Digital Hall Ticket View and Print Sheet - Item 543",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0544",
    code: "NEC-HALLTICKETUI-0544",
    title: "Digital Hall Ticket View and Print Sheet - Item 544",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0545",
    code: "NEC-HALLTICKETUI-0545",
    title: "Digital Hall Ticket View and Print Sheet - Item 545",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0546",
    code: "NEC-HALLTICKETUI-0546",
    title: "Digital Hall Ticket View and Print Sheet - Item 546",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0547",
    code: "NEC-HALLTICKETUI-0547",
    title: "Digital Hall Ticket View and Print Sheet - Item 547",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0548",
    code: "NEC-HALLTICKETUI-0548",
    title: "Digital Hall Ticket View and Print Sheet - Item 548",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0549",
    code: "NEC-HALLTICKETUI-0549",
    title: "Digital Hall Ticket View and Print Sheet - Item 549",
    category: "HALLTICKETUI_CORE",
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
    id: "hallticketui-0550",
    code: "NEC-HALLTICKETUI-0550",
    title: "Digital Hall Ticket View and Print Sheet - Item 550",
    category: "HALLTICKETUI_CORE",
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

export function filterHALLTICKETUIBySemester(semester: number): AcademicEntityItem[] {
  return HALLTICKETUI_REGISTRY.filter(item => item.semester === semester);
}

export function computeHALLTICKETUIAverageCredits(): number {
  const total = HALLTICKETUI_REGISTRY.reduce((acc, curr) => acc + curr.credits, 0);
  return total / HALLTICKETUI_REGISTRY.length;
}
