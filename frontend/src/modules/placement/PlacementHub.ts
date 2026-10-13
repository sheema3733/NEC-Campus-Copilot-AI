/**
 * Narasaraopeta Engineering College (Autonomous) — Frontend Enterprise Module
 * Module: Corporate Placement Hub and Eligibility Card (PLACEMENTHUB)
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

export const PLACEMENTHUB_REGISTRY: AcademicEntityItem[] = [
  {
    id: "placementhub-0001",
    code: "NEC-PLACEMENTHUB-0001",
    title: "Corporate Placement Hub and Eligibility Card - Item 1",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0002",
    code: "NEC-PLACEMENTHUB-0002",
    title: "Corporate Placement Hub and Eligibility Card - Item 2",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0003",
    code: "NEC-PLACEMENTHUB-0003",
    title: "Corporate Placement Hub and Eligibility Card - Item 3",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0004",
    code: "NEC-PLACEMENTHUB-0004",
    title: "Corporate Placement Hub and Eligibility Card - Item 4",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0005",
    code: "NEC-PLACEMENTHUB-0005",
    title: "Corporate Placement Hub and Eligibility Card - Item 5",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0006",
    code: "NEC-PLACEMENTHUB-0006",
    title: "Corporate Placement Hub and Eligibility Card - Item 6",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0007",
    code: "NEC-PLACEMENTHUB-0007",
    title: "Corporate Placement Hub and Eligibility Card - Item 7",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0008",
    code: "NEC-PLACEMENTHUB-0008",
    title: "Corporate Placement Hub and Eligibility Card - Item 8",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0009",
    code: "NEC-PLACEMENTHUB-0009",
    title: "Corporate Placement Hub and Eligibility Card - Item 9",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0010",
    code: "NEC-PLACEMENTHUB-0010",
    title: "Corporate Placement Hub and Eligibility Card - Item 10",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0011",
    code: "NEC-PLACEMENTHUB-0011",
    title: "Corporate Placement Hub and Eligibility Card - Item 11",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0012",
    code: "NEC-PLACEMENTHUB-0012",
    title: "Corporate Placement Hub and Eligibility Card - Item 12",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0013",
    code: "NEC-PLACEMENTHUB-0013",
    title: "Corporate Placement Hub and Eligibility Card - Item 13",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0014",
    code: "NEC-PLACEMENTHUB-0014",
    title: "Corporate Placement Hub and Eligibility Card - Item 14",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0015",
    code: "NEC-PLACEMENTHUB-0015",
    title: "Corporate Placement Hub and Eligibility Card - Item 15",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0016",
    code: "NEC-PLACEMENTHUB-0016",
    title: "Corporate Placement Hub and Eligibility Card - Item 16",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0017",
    code: "NEC-PLACEMENTHUB-0017",
    title: "Corporate Placement Hub and Eligibility Card - Item 17",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0018",
    code: "NEC-PLACEMENTHUB-0018",
    title: "Corporate Placement Hub and Eligibility Card - Item 18",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0019",
    code: "NEC-PLACEMENTHUB-0019",
    title: "Corporate Placement Hub and Eligibility Card - Item 19",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0020",
    code: "NEC-PLACEMENTHUB-0020",
    title: "Corporate Placement Hub and Eligibility Card - Item 20",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0021",
    code: "NEC-PLACEMENTHUB-0021",
    title: "Corporate Placement Hub and Eligibility Card - Item 21",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0022",
    code: "NEC-PLACEMENTHUB-0022",
    title: "Corporate Placement Hub and Eligibility Card - Item 22",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0023",
    code: "NEC-PLACEMENTHUB-0023",
    title: "Corporate Placement Hub and Eligibility Card - Item 23",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0024",
    code: "NEC-PLACEMENTHUB-0024",
    title: "Corporate Placement Hub and Eligibility Card - Item 24",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0025",
    code: "NEC-PLACEMENTHUB-0025",
    title: "Corporate Placement Hub and Eligibility Card - Item 25",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0026",
    code: "NEC-PLACEMENTHUB-0026",
    title: "Corporate Placement Hub and Eligibility Card - Item 26",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0027",
    code: "NEC-PLACEMENTHUB-0027",
    title: "Corporate Placement Hub and Eligibility Card - Item 27",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0028",
    code: "NEC-PLACEMENTHUB-0028",
    title: "Corporate Placement Hub and Eligibility Card - Item 28",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0029",
    code: "NEC-PLACEMENTHUB-0029",
    title: "Corporate Placement Hub and Eligibility Card - Item 29",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0030",
    code: "NEC-PLACEMENTHUB-0030",
    title: "Corporate Placement Hub and Eligibility Card - Item 30",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0031",
    code: "NEC-PLACEMENTHUB-0031",
    title: "Corporate Placement Hub and Eligibility Card - Item 31",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0032",
    code: "NEC-PLACEMENTHUB-0032",
    title: "Corporate Placement Hub and Eligibility Card - Item 32",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0033",
    code: "NEC-PLACEMENTHUB-0033",
    title: "Corporate Placement Hub and Eligibility Card - Item 33",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0034",
    code: "NEC-PLACEMENTHUB-0034",
    title: "Corporate Placement Hub and Eligibility Card - Item 34",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0035",
    code: "NEC-PLACEMENTHUB-0035",
    title: "Corporate Placement Hub and Eligibility Card - Item 35",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0036",
    code: "NEC-PLACEMENTHUB-0036",
    title: "Corporate Placement Hub and Eligibility Card - Item 36",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0037",
    code: "NEC-PLACEMENTHUB-0037",
    title: "Corporate Placement Hub and Eligibility Card - Item 37",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0038",
    code: "NEC-PLACEMENTHUB-0038",
    title: "Corporate Placement Hub and Eligibility Card - Item 38",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0039",
    code: "NEC-PLACEMENTHUB-0039",
    title: "Corporate Placement Hub and Eligibility Card - Item 39",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0040",
    code: "NEC-PLACEMENTHUB-0040",
    title: "Corporate Placement Hub and Eligibility Card - Item 40",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0041",
    code: "NEC-PLACEMENTHUB-0041",
    title: "Corporate Placement Hub and Eligibility Card - Item 41",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0042",
    code: "NEC-PLACEMENTHUB-0042",
    title: "Corporate Placement Hub and Eligibility Card - Item 42",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0043",
    code: "NEC-PLACEMENTHUB-0043",
    title: "Corporate Placement Hub and Eligibility Card - Item 43",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0044",
    code: "NEC-PLACEMENTHUB-0044",
    title: "Corporate Placement Hub and Eligibility Card - Item 44",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0045",
    code: "NEC-PLACEMENTHUB-0045",
    title: "Corporate Placement Hub and Eligibility Card - Item 45",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0046",
    code: "NEC-PLACEMENTHUB-0046",
    title: "Corporate Placement Hub and Eligibility Card - Item 46",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0047",
    code: "NEC-PLACEMENTHUB-0047",
    title: "Corporate Placement Hub and Eligibility Card - Item 47",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0048",
    code: "NEC-PLACEMENTHUB-0048",
    title: "Corporate Placement Hub and Eligibility Card - Item 48",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0049",
    code: "NEC-PLACEMENTHUB-0049",
    title: "Corporate Placement Hub and Eligibility Card - Item 49",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0050",
    code: "NEC-PLACEMENTHUB-0050",
    title: "Corporate Placement Hub and Eligibility Card - Item 50",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0051",
    code: "NEC-PLACEMENTHUB-0051",
    title: "Corporate Placement Hub and Eligibility Card - Item 51",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0052",
    code: "NEC-PLACEMENTHUB-0052",
    title: "Corporate Placement Hub and Eligibility Card - Item 52",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0053",
    code: "NEC-PLACEMENTHUB-0053",
    title: "Corporate Placement Hub and Eligibility Card - Item 53",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0054",
    code: "NEC-PLACEMENTHUB-0054",
    title: "Corporate Placement Hub and Eligibility Card - Item 54",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0055",
    code: "NEC-PLACEMENTHUB-0055",
    title: "Corporate Placement Hub and Eligibility Card - Item 55",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0056",
    code: "NEC-PLACEMENTHUB-0056",
    title: "Corporate Placement Hub and Eligibility Card - Item 56",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0057",
    code: "NEC-PLACEMENTHUB-0057",
    title: "Corporate Placement Hub and Eligibility Card - Item 57",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0058",
    code: "NEC-PLACEMENTHUB-0058",
    title: "Corporate Placement Hub and Eligibility Card - Item 58",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0059",
    code: "NEC-PLACEMENTHUB-0059",
    title: "Corporate Placement Hub and Eligibility Card - Item 59",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0060",
    code: "NEC-PLACEMENTHUB-0060",
    title: "Corporate Placement Hub and Eligibility Card - Item 60",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0061",
    code: "NEC-PLACEMENTHUB-0061",
    title: "Corporate Placement Hub and Eligibility Card - Item 61",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0062",
    code: "NEC-PLACEMENTHUB-0062",
    title: "Corporate Placement Hub and Eligibility Card - Item 62",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0063",
    code: "NEC-PLACEMENTHUB-0063",
    title: "Corporate Placement Hub and Eligibility Card - Item 63",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0064",
    code: "NEC-PLACEMENTHUB-0064",
    title: "Corporate Placement Hub and Eligibility Card - Item 64",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0065",
    code: "NEC-PLACEMENTHUB-0065",
    title: "Corporate Placement Hub and Eligibility Card - Item 65",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0066",
    code: "NEC-PLACEMENTHUB-0066",
    title: "Corporate Placement Hub and Eligibility Card - Item 66",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0067",
    code: "NEC-PLACEMENTHUB-0067",
    title: "Corporate Placement Hub and Eligibility Card - Item 67",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0068",
    code: "NEC-PLACEMENTHUB-0068",
    title: "Corporate Placement Hub and Eligibility Card - Item 68",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0069",
    code: "NEC-PLACEMENTHUB-0069",
    title: "Corporate Placement Hub and Eligibility Card - Item 69",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0070",
    code: "NEC-PLACEMENTHUB-0070",
    title: "Corporate Placement Hub and Eligibility Card - Item 70",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0071",
    code: "NEC-PLACEMENTHUB-0071",
    title: "Corporate Placement Hub and Eligibility Card - Item 71",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0072",
    code: "NEC-PLACEMENTHUB-0072",
    title: "Corporate Placement Hub and Eligibility Card - Item 72",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0073",
    code: "NEC-PLACEMENTHUB-0073",
    title: "Corporate Placement Hub and Eligibility Card - Item 73",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0074",
    code: "NEC-PLACEMENTHUB-0074",
    title: "Corporate Placement Hub and Eligibility Card - Item 74",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0075",
    code: "NEC-PLACEMENTHUB-0075",
    title: "Corporate Placement Hub and Eligibility Card - Item 75",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0076",
    code: "NEC-PLACEMENTHUB-0076",
    title: "Corporate Placement Hub and Eligibility Card - Item 76",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0077",
    code: "NEC-PLACEMENTHUB-0077",
    title: "Corporate Placement Hub and Eligibility Card - Item 77",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0078",
    code: "NEC-PLACEMENTHUB-0078",
    title: "Corporate Placement Hub and Eligibility Card - Item 78",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0079",
    code: "NEC-PLACEMENTHUB-0079",
    title: "Corporate Placement Hub and Eligibility Card - Item 79",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0080",
    code: "NEC-PLACEMENTHUB-0080",
    title: "Corporate Placement Hub and Eligibility Card - Item 80",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0081",
    code: "NEC-PLACEMENTHUB-0081",
    title: "Corporate Placement Hub and Eligibility Card - Item 81",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0082",
    code: "NEC-PLACEMENTHUB-0082",
    title: "Corporate Placement Hub and Eligibility Card - Item 82",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0083",
    code: "NEC-PLACEMENTHUB-0083",
    title: "Corporate Placement Hub and Eligibility Card - Item 83",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0084",
    code: "NEC-PLACEMENTHUB-0084",
    title: "Corporate Placement Hub and Eligibility Card - Item 84",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0085",
    code: "NEC-PLACEMENTHUB-0085",
    title: "Corporate Placement Hub and Eligibility Card - Item 85",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0086",
    code: "NEC-PLACEMENTHUB-0086",
    title: "Corporate Placement Hub and Eligibility Card - Item 86",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0087",
    code: "NEC-PLACEMENTHUB-0087",
    title: "Corporate Placement Hub and Eligibility Card - Item 87",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0088",
    code: "NEC-PLACEMENTHUB-0088",
    title: "Corporate Placement Hub and Eligibility Card - Item 88",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0089",
    code: "NEC-PLACEMENTHUB-0089",
    title: "Corporate Placement Hub and Eligibility Card - Item 89",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0090",
    code: "NEC-PLACEMENTHUB-0090",
    title: "Corporate Placement Hub and Eligibility Card - Item 90",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0091",
    code: "NEC-PLACEMENTHUB-0091",
    title: "Corporate Placement Hub and Eligibility Card - Item 91",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0092",
    code: "NEC-PLACEMENTHUB-0092",
    title: "Corporate Placement Hub and Eligibility Card - Item 92",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0093",
    code: "NEC-PLACEMENTHUB-0093",
    title: "Corporate Placement Hub and Eligibility Card - Item 93",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0094",
    code: "NEC-PLACEMENTHUB-0094",
    title: "Corporate Placement Hub and Eligibility Card - Item 94",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0095",
    code: "NEC-PLACEMENTHUB-0095",
    title: "Corporate Placement Hub and Eligibility Card - Item 95",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0096",
    code: "NEC-PLACEMENTHUB-0096",
    title: "Corporate Placement Hub and Eligibility Card - Item 96",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0097",
    code: "NEC-PLACEMENTHUB-0097",
    title: "Corporate Placement Hub and Eligibility Card - Item 97",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0098",
    code: "NEC-PLACEMENTHUB-0098",
    title: "Corporate Placement Hub and Eligibility Card - Item 98",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0099",
    code: "NEC-PLACEMENTHUB-0099",
    title: "Corporate Placement Hub and Eligibility Card - Item 99",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0100",
    code: "NEC-PLACEMENTHUB-0100",
    title: "Corporate Placement Hub and Eligibility Card - Item 100",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0101",
    code: "NEC-PLACEMENTHUB-0101",
    title: "Corporate Placement Hub and Eligibility Card - Item 101",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0102",
    code: "NEC-PLACEMENTHUB-0102",
    title: "Corporate Placement Hub and Eligibility Card - Item 102",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0103",
    code: "NEC-PLACEMENTHUB-0103",
    title: "Corporate Placement Hub and Eligibility Card - Item 103",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0104",
    code: "NEC-PLACEMENTHUB-0104",
    title: "Corporate Placement Hub and Eligibility Card - Item 104",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0105",
    code: "NEC-PLACEMENTHUB-0105",
    title: "Corporate Placement Hub and Eligibility Card - Item 105",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0106",
    code: "NEC-PLACEMENTHUB-0106",
    title: "Corporate Placement Hub and Eligibility Card - Item 106",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0107",
    code: "NEC-PLACEMENTHUB-0107",
    title: "Corporate Placement Hub and Eligibility Card - Item 107",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0108",
    code: "NEC-PLACEMENTHUB-0108",
    title: "Corporate Placement Hub and Eligibility Card - Item 108",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0109",
    code: "NEC-PLACEMENTHUB-0109",
    title: "Corporate Placement Hub and Eligibility Card - Item 109",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0110",
    code: "NEC-PLACEMENTHUB-0110",
    title: "Corporate Placement Hub and Eligibility Card - Item 110",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0111",
    code: "NEC-PLACEMENTHUB-0111",
    title: "Corporate Placement Hub and Eligibility Card - Item 111",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0112",
    code: "NEC-PLACEMENTHUB-0112",
    title: "Corporate Placement Hub and Eligibility Card - Item 112",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0113",
    code: "NEC-PLACEMENTHUB-0113",
    title: "Corporate Placement Hub and Eligibility Card - Item 113",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0114",
    code: "NEC-PLACEMENTHUB-0114",
    title: "Corporate Placement Hub and Eligibility Card - Item 114",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0115",
    code: "NEC-PLACEMENTHUB-0115",
    title: "Corporate Placement Hub and Eligibility Card - Item 115",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0116",
    code: "NEC-PLACEMENTHUB-0116",
    title: "Corporate Placement Hub and Eligibility Card - Item 116",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0117",
    code: "NEC-PLACEMENTHUB-0117",
    title: "Corporate Placement Hub and Eligibility Card - Item 117",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0118",
    code: "NEC-PLACEMENTHUB-0118",
    title: "Corporate Placement Hub and Eligibility Card - Item 118",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0119",
    code: "NEC-PLACEMENTHUB-0119",
    title: "Corporate Placement Hub and Eligibility Card - Item 119",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0120",
    code: "NEC-PLACEMENTHUB-0120",
    title: "Corporate Placement Hub and Eligibility Card - Item 120",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0121",
    code: "NEC-PLACEMENTHUB-0121",
    title: "Corporate Placement Hub and Eligibility Card - Item 121",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0122",
    code: "NEC-PLACEMENTHUB-0122",
    title: "Corporate Placement Hub and Eligibility Card - Item 122",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0123",
    code: "NEC-PLACEMENTHUB-0123",
    title: "Corporate Placement Hub and Eligibility Card - Item 123",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0124",
    code: "NEC-PLACEMENTHUB-0124",
    title: "Corporate Placement Hub and Eligibility Card - Item 124",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0125",
    code: "NEC-PLACEMENTHUB-0125",
    title: "Corporate Placement Hub and Eligibility Card - Item 125",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0126",
    code: "NEC-PLACEMENTHUB-0126",
    title: "Corporate Placement Hub and Eligibility Card - Item 126",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0127",
    code: "NEC-PLACEMENTHUB-0127",
    title: "Corporate Placement Hub and Eligibility Card - Item 127",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0128",
    code: "NEC-PLACEMENTHUB-0128",
    title: "Corporate Placement Hub and Eligibility Card - Item 128",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0129",
    code: "NEC-PLACEMENTHUB-0129",
    title: "Corporate Placement Hub and Eligibility Card - Item 129",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0130",
    code: "NEC-PLACEMENTHUB-0130",
    title: "Corporate Placement Hub and Eligibility Card - Item 130",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0131",
    code: "NEC-PLACEMENTHUB-0131",
    title: "Corporate Placement Hub and Eligibility Card - Item 131",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0132",
    code: "NEC-PLACEMENTHUB-0132",
    title: "Corporate Placement Hub and Eligibility Card - Item 132",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0133",
    code: "NEC-PLACEMENTHUB-0133",
    title: "Corporate Placement Hub and Eligibility Card - Item 133",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0134",
    code: "NEC-PLACEMENTHUB-0134",
    title: "Corporate Placement Hub and Eligibility Card - Item 134",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0135",
    code: "NEC-PLACEMENTHUB-0135",
    title: "Corporate Placement Hub and Eligibility Card - Item 135",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0136",
    code: "NEC-PLACEMENTHUB-0136",
    title: "Corporate Placement Hub and Eligibility Card - Item 136",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0137",
    code: "NEC-PLACEMENTHUB-0137",
    title: "Corporate Placement Hub and Eligibility Card - Item 137",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0138",
    code: "NEC-PLACEMENTHUB-0138",
    title: "Corporate Placement Hub and Eligibility Card - Item 138",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0139",
    code: "NEC-PLACEMENTHUB-0139",
    title: "Corporate Placement Hub and Eligibility Card - Item 139",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0140",
    code: "NEC-PLACEMENTHUB-0140",
    title: "Corporate Placement Hub and Eligibility Card - Item 140",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0141",
    code: "NEC-PLACEMENTHUB-0141",
    title: "Corporate Placement Hub and Eligibility Card - Item 141",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0142",
    code: "NEC-PLACEMENTHUB-0142",
    title: "Corporate Placement Hub and Eligibility Card - Item 142",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0143",
    code: "NEC-PLACEMENTHUB-0143",
    title: "Corporate Placement Hub and Eligibility Card - Item 143",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0144",
    code: "NEC-PLACEMENTHUB-0144",
    title: "Corporate Placement Hub and Eligibility Card - Item 144",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0145",
    code: "NEC-PLACEMENTHUB-0145",
    title: "Corporate Placement Hub and Eligibility Card - Item 145",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0146",
    code: "NEC-PLACEMENTHUB-0146",
    title: "Corporate Placement Hub and Eligibility Card - Item 146",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0147",
    code: "NEC-PLACEMENTHUB-0147",
    title: "Corporate Placement Hub and Eligibility Card - Item 147",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0148",
    code: "NEC-PLACEMENTHUB-0148",
    title: "Corporate Placement Hub and Eligibility Card - Item 148",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0149",
    code: "NEC-PLACEMENTHUB-0149",
    title: "Corporate Placement Hub and Eligibility Card - Item 149",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0150",
    code: "NEC-PLACEMENTHUB-0150",
    title: "Corporate Placement Hub and Eligibility Card - Item 150",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0151",
    code: "NEC-PLACEMENTHUB-0151",
    title: "Corporate Placement Hub and Eligibility Card - Item 151",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0152",
    code: "NEC-PLACEMENTHUB-0152",
    title: "Corporate Placement Hub and Eligibility Card - Item 152",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0153",
    code: "NEC-PLACEMENTHUB-0153",
    title: "Corporate Placement Hub and Eligibility Card - Item 153",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0154",
    code: "NEC-PLACEMENTHUB-0154",
    title: "Corporate Placement Hub and Eligibility Card - Item 154",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0155",
    code: "NEC-PLACEMENTHUB-0155",
    title: "Corporate Placement Hub and Eligibility Card - Item 155",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0156",
    code: "NEC-PLACEMENTHUB-0156",
    title: "Corporate Placement Hub and Eligibility Card - Item 156",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0157",
    code: "NEC-PLACEMENTHUB-0157",
    title: "Corporate Placement Hub and Eligibility Card - Item 157",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0158",
    code: "NEC-PLACEMENTHUB-0158",
    title: "Corporate Placement Hub and Eligibility Card - Item 158",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0159",
    code: "NEC-PLACEMENTHUB-0159",
    title: "Corporate Placement Hub and Eligibility Card - Item 159",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0160",
    code: "NEC-PLACEMENTHUB-0160",
    title: "Corporate Placement Hub and Eligibility Card - Item 160",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0161",
    code: "NEC-PLACEMENTHUB-0161",
    title: "Corporate Placement Hub and Eligibility Card - Item 161",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0162",
    code: "NEC-PLACEMENTHUB-0162",
    title: "Corporate Placement Hub and Eligibility Card - Item 162",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0163",
    code: "NEC-PLACEMENTHUB-0163",
    title: "Corporate Placement Hub and Eligibility Card - Item 163",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0164",
    code: "NEC-PLACEMENTHUB-0164",
    title: "Corporate Placement Hub and Eligibility Card - Item 164",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0165",
    code: "NEC-PLACEMENTHUB-0165",
    title: "Corporate Placement Hub and Eligibility Card - Item 165",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0166",
    code: "NEC-PLACEMENTHUB-0166",
    title: "Corporate Placement Hub and Eligibility Card - Item 166",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0167",
    code: "NEC-PLACEMENTHUB-0167",
    title: "Corporate Placement Hub and Eligibility Card - Item 167",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0168",
    code: "NEC-PLACEMENTHUB-0168",
    title: "Corporate Placement Hub and Eligibility Card - Item 168",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0169",
    code: "NEC-PLACEMENTHUB-0169",
    title: "Corporate Placement Hub and Eligibility Card - Item 169",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0170",
    code: "NEC-PLACEMENTHUB-0170",
    title: "Corporate Placement Hub and Eligibility Card - Item 170",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0171",
    code: "NEC-PLACEMENTHUB-0171",
    title: "Corporate Placement Hub and Eligibility Card - Item 171",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0172",
    code: "NEC-PLACEMENTHUB-0172",
    title: "Corporate Placement Hub and Eligibility Card - Item 172",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0173",
    code: "NEC-PLACEMENTHUB-0173",
    title: "Corporate Placement Hub and Eligibility Card - Item 173",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0174",
    code: "NEC-PLACEMENTHUB-0174",
    title: "Corporate Placement Hub and Eligibility Card - Item 174",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0175",
    code: "NEC-PLACEMENTHUB-0175",
    title: "Corporate Placement Hub and Eligibility Card - Item 175",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0176",
    code: "NEC-PLACEMENTHUB-0176",
    title: "Corporate Placement Hub and Eligibility Card - Item 176",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0177",
    code: "NEC-PLACEMENTHUB-0177",
    title: "Corporate Placement Hub and Eligibility Card - Item 177",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0178",
    code: "NEC-PLACEMENTHUB-0178",
    title: "Corporate Placement Hub and Eligibility Card - Item 178",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0179",
    code: "NEC-PLACEMENTHUB-0179",
    title: "Corporate Placement Hub and Eligibility Card - Item 179",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0180",
    code: "NEC-PLACEMENTHUB-0180",
    title: "Corporate Placement Hub and Eligibility Card - Item 180",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0181",
    code: "NEC-PLACEMENTHUB-0181",
    title: "Corporate Placement Hub and Eligibility Card - Item 181",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0182",
    code: "NEC-PLACEMENTHUB-0182",
    title: "Corporate Placement Hub and Eligibility Card - Item 182",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0183",
    code: "NEC-PLACEMENTHUB-0183",
    title: "Corporate Placement Hub and Eligibility Card - Item 183",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0184",
    code: "NEC-PLACEMENTHUB-0184",
    title: "Corporate Placement Hub and Eligibility Card - Item 184",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0185",
    code: "NEC-PLACEMENTHUB-0185",
    title: "Corporate Placement Hub and Eligibility Card - Item 185",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0186",
    code: "NEC-PLACEMENTHUB-0186",
    title: "Corporate Placement Hub and Eligibility Card - Item 186",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0187",
    code: "NEC-PLACEMENTHUB-0187",
    title: "Corporate Placement Hub and Eligibility Card - Item 187",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0188",
    code: "NEC-PLACEMENTHUB-0188",
    title: "Corporate Placement Hub and Eligibility Card - Item 188",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0189",
    code: "NEC-PLACEMENTHUB-0189",
    title: "Corporate Placement Hub and Eligibility Card - Item 189",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0190",
    code: "NEC-PLACEMENTHUB-0190",
    title: "Corporate Placement Hub and Eligibility Card - Item 190",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0191",
    code: "NEC-PLACEMENTHUB-0191",
    title: "Corporate Placement Hub and Eligibility Card - Item 191",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0192",
    code: "NEC-PLACEMENTHUB-0192",
    title: "Corporate Placement Hub and Eligibility Card - Item 192",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0193",
    code: "NEC-PLACEMENTHUB-0193",
    title: "Corporate Placement Hub and Eligibility Card - Item 193",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0194",
    code: "NEC-PLACEMENTHUB-0194",
    title: "Corporate Placement Hub and Eligibility Card - Item 194",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0195",
    code: "NEC-PLACEMENTHUB-0195",
    title: "Corporate Placement Hub and Eligibility Card - Item 195",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0196",
    code: "NEC-PLACEMENTHUB-0196",
    title: "Corporate Placement Hub and Eligibility Card - Item 196",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0197",
    code: "NEC-PLACEMENTHUB-0197",
    title: "Corporate Placement Hub and Eligibility Card - Item 197",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0198",
    code: "NEC-PLACEMENTHUB-0198",
    title: "Corporate Placement Hub and Eligibility Card - Item 198",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0199",
    code: "NEC-PLACEMENTHUB-0199",
    title: "Corporate Placement Hub and Eligibility Card - Item 199",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0200",
    code: "NEC-PLACEMENTHUB-0200",
    title: "Corporate Placement Hub and Eligibility Card - Item 200",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0201",
    code: "NEC-PLACEMENTHUB-0201",
    title: "Corporate Placement Hub and Eligibility Card - Item 201",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0202",
    code: "NEC-PLACEMENTHUB-0202",
    title: "Corporate Placement Hub and Eligibility Card - Item 202",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0203",
    code: "NEC-PLACEMENTHUB-0203",
    title: "Corporate Placement Hub and Eligibility Card - Item 203",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0204",
    code: "NEC-PLACEMENTHUB-0204",
    title: "Corporate Placement Hub and Eligibility Card - Item 204",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0205",
    code: "NEC-PLACEMENTHUB-0205",
    title: "Corporate Placement Hub and Eligibility Card - Item 205",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0206",
    code: "NEC-PLACEMENTHUB-0206",
    title: "Corporate Placement Hub and Eligibility Card - Item 206",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0207",
    code: "NEC-PLACEMENTHUB-0207",
    title: "Corporate Placement Hub and Eligibility Card - Item 207",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0208",
    code: "NEC-PLACEMENTHUB-0208",
    title: "Corporate Placement Hub and Eligibility Card - Item 208",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0209",
    code: "NEC-PLACEMENTHUB-0209",
    title: "Corporate Placement Hub and Eligibility Card - Item 209",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0210",
    code: "NEC-PLACEMENTHUB-0210",
    title: "Corporate Placement Hub and Eligibility Card - Item 210",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0211",
    code: "NEC-PLACEMENTHUB-0211",
    title: "Corporate Placement Hub and Eligibility Card - Item 211",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0212",
    code: "NEC-PLACEMENTHUB-0212",
    title: "Corporate Placement Hub and Eligibility Card - Item 212",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0213",
    code: "NEC-PLACEMENTHUB-0213",
    title: "Corporate Placement Hub and Eligibility Card - Item 213",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0214",
    code: "NEC-PLACEMENTHUB-0214",
    title: "Corporate Placement Hub and Eligibility Card - Item 214",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0215",
    code: "NEC-PLACEMENTHUB-0215",
    title: "Corporate Placement Hub and Eligibility Card - Item 215",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0216",
    code: "NEC-PLACEMENTHUB-0216",
    title: "Corporate Placement Hub and Eligibility Card - Item 216",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0217",
    code: "NEC-PLACEMENTHUB-0217",
    title: "Corporate Placement Hub and Eligibility Card - Item 217",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0218",
    code: "NEC-PLACEMENTHUB-0218",
    title: "Corporate Placement Hub and Eligibility Card - Item 218",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0219",
    code: "NEC-PLACEMENTHUB-0219",
    title: "Corporate Placement Hub and Eligibility Card - Item 219",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0220",
    code: "NEC-PLACEMENTHUB-0220",
    title: "Corporate Placement Hub and Eligibility Card - Item 220",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0221",
    code: "NEC-PLACEMENTHUB-0221",
    title: "Corporate Placement Hub and Eligibility Card - Item 221",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0222",
    code: "NEC-PLACEMENTHUB-0222",
    title: "Corporate Placement Hub and Eligibility Card - Item 222",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0223",
    code: "NEC-PLACEMENTHUB-0223",
    title: "Corporate Placement Hub and Eligibility Card - Item 223",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0224",
    code: "NEC-PLACEMENTHUB-0224",
    title: "Corporate Placement Hub and Eligibility Card - Item 224",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0225",
    code: "NEC-PLACEMENTHUB-0225",
    title: "Corporate Placement Hub and Eligibility Card - Item 225",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0226",
    code: "NEC-PLACEMENTHUB-0226",
    title: "Corporate Placement Hub and Eligibility Card - Item 226",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0227",
    code: "NEC-PLACEMENTHUB-0227",
    title: "Corporate Placement Hub and Eligibility Card - Item 227",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0228",
    code: "NEC-PLACEMENTHUB-0228",
    title: "Corporate Placement Hub and Eligibility Card - Item 228",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0229",
    code: "NEC-PLACEMENTHUB-0229",
    title: "Corporate Placement Hub and Eligibility Card - Item 229",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0230",
    code: "NEC-PLACEMENTHUB-0230",
    title: "Corporate Placement Hub and Eligibility Card - Item 230",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0231",
    code: "NEC-PLACEMENTHUB-0231",
    title: "Corporate Placement Hub and Eligibility Card - Item 231",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0232",
    code: "NEC-PLACEMENTHUB-0232",
    title: "Corporate Placement Hub and Eligibility Card - Item 232",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0233",
    code: "NEC-PLACEMENTHUB-0233",
    title: "Corporate Placement Hub and Eligibility Card - Item 233",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0234",
    code: "NEC-PLACEMENTHUB-0234",
    title: "Corporate Placement Hub and Eligibility Card - Item 234",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0235",
    code: "NEC-PLACEMENTHUB-0235",
    title: "Corporate Placement Hub and Eligibility Card - Item 235",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0236",
    code: "NEC-PLACEMENTHUB-0236",
    title: "Corporate Placement Hub and Eligibility Card - Item 236",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0237",
    code: "NEC-PLACEMENTHUB-0237",
    title: "Corporate Placement Hub and Eligibility Card - Item 237",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0238",
    code: "NEC-PLACEMENTHUB-0238",
    title: "Corporate Placement Hub and Eligibility Card - Item 238",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0239",
    code: "NEC-PLACEMENTHUB-0239",
    title: "Corporate Placement Hub and Eligibility Card - Item 239",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0240",
    code: "NEC-PLACEMENTHUB-0240",
    title: "Corporate Placement Hub and Eligibility Card - Item 240",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0241",
    code: "NEC-PLACEMENTHUB-0241",
    title: "Corporate Placement Hub and Eligibility Card - Item 241",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0242",
    code: "NEC-PLACEMENTHUB-0242",
    title: "Corporate Placement Hub and Eligibility Card - Item 242",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0243",
    code: "NEC-PLACEMENTHUB-0243",
    title: "Corporate Placement Hub and Eligibility Card - Item 243",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0244",
    code: "NEC-PLACEMENTHUB-0244",
    title: "Corporate Placement Hub and Eligibility Card - Item 244",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0245",
    code: "NEC-PLACEMENTHUB-0245",
    title: "Corporate Placement Hub and Eligibility Card - Item 245",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0246",
    code: "NEC-PLACEMENTHUB-0246",
    title: "Corporate Placement Hub and Eligibility Card - Item 246",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0247",
    code: "NEC-PLACEMENTHUB-0247",
    title: "Corporate Placement Hub and Eligibility Card - Item 247",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0248",
    code: "NEC-PLACEMENTHUB-0248",
    title: "Corporate Placement Hub and Eligibility Card - Item 248",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0249",
    code: "NEC-PLACEMENTHUB-0249",
    title: "Corporate Placement Hub and Eligibility Card - Item 249",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0250",
    code: "NEC-PLACEMENTHUB-0250",
    title: "Corporate Placement Hub and Eligibility Card - Item 250",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0251",
    code: "NEC-PLACEMENTHUB-0251",
    title: "Corporate Placement Hub and Eligibility Card - Item 251",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0252",
    code: "NEC-PLACEMENTHUB-0252",
    title: "Corporate Placement Hub and Eligibility Card - Item 252",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0253",
    code: "NEC-PLACEMENTHUB-0253",
    title: "Corporate Placement Hub and Eligibility Card - Item 253",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0254",
    code: "NEC-PLACEMENTHUB-0254",
    title: "Corporate Placement Hub and Eligibility Card - Item 254",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0255",
    code: "NEC-PLACEMENTHUB-0255",
    title: "Corporate Placement Hub and Eligibility Card - Item 255",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0256",
    code: "NEC-PLACEMENTHUB-0256",
    title: "Corporate Placement Hub and Eligibility Card - Item 256",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0257",
    code: "NEC-PLACEMENTHUB-0257",
    title: "Corporate Placement Hub and Eligibility Card - Item 257",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0258",
    code: "NEC-PLACEMENTHUB-0258",
    title: "Corporate Placement Hub and Eligibility Card - Item 258",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0259",
    code: "NEC-PLACEMENTHUB-0259",
    title: "Corporate Placement Hub and Eligibility Card - Item 259",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0260",
    code: "NEC-PLACEMENTHUB-0260",
    title: "Corporate Placement Hub and Eligibility Card - Item 260",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0261",
    code: "NEC-PLACEMENTHUB-0261",
    title: "Corporate Placement Hub and Eligibility Card - Item 261",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0262",
    code: "NEC-PLACEMENTHUB-0262",
    title: "Corporate Placement Hub and Eligibility Card - Item 262",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0263",
    code: "NEC-PLACEMENTHUB-0263",
    title: "Corporate Placement Hub and Eligibility Card - Item 263",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0264",
    code: "NEC-PLACEMENTHUB-0264",
    title: "Corporate Placement Hub and Eligibility Card - Item 264",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0265",
    code: "NEC-PLACEMENTHUB-0265",
    title: "Corporate Placement Hub and Eligibility Card - Item 265",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0266",
    code: "NEC-PLACEMENTHUB-0266",
    title: "Corporate Placement Hub and Eligibility Card - Item 266",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0267",
    code: "NEC-PLACEMENTHUB-0267",
    title: "Corporate Placement Hub and Eligibility Card - Item 267",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0268",
    code: "NEC-PLACEMENTHUB-0268",
    title: "Corporate Placement Hub and Eligibility Card - Item 268",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0269",
    code: "NEC-PLACEMENTHUB-0269",
    title: "Corporate Placement Hub and Eligibility Card - Item 269",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0270",
    code: "NEC-PLACEMENTHUB-0270",
    title: "Corporate Placement Hub and Eligibility Card - Item 270",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0271",
    code: "NEC-PLACEMENTHUB-0271",
    title: "Corporate Placement Hub and Eligibility Card - Item 271",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0272",
    code: "NEC-PLACEMENTHUB-0272",
    title: "Corporate Placement Hub and Eligibility Card - Item 272",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0273",
    code: "NEC-PLACEMENTHUB-0273",
    title: "Corporate Placement Hub and Eligibility Card - Item 273",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0274",
    code: "NEC-PLACEMENTHUB-0274",
    title: "Corporate Placement Hub and Eligibility Card - Item 274",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0275",
    code: "NEC-PLACEMENTHUB-0275",
    title: "Corporate Placement Hub and Eligibility Card - Item 275",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0276",
    code: "NEC-PLACEMENTHUB-0276",
    title: "Corporate Placement Hub and Eligibility Card - Item 276",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0277",
    code: "NEC-PLACEMENTHUB-0277",
    title: "Corporate Placement Hub and Eligibility Card - Item 277",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0278",
    code: "NEC-PLACEMENTHUB-0278",
    title: "Corporate Placement Hub and Eligibility Card - Item 278",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0279",
    code: "NEC-PLACEMENTHUB-0279",
    title: "Corporate Placement Hub and Eligibility Card - Item 279",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0280",
    code: "NEC-PLACEMENTHUB-0280",
    title: "Corporate Placement Hub and Eligibility Card - Item 280",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0281",
    code: "NEC-PLACEMENTHUB-0281",
    title: "Corporate Placement Hub and Eligibility Card - Item 281",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0282",
    code: "NEC-PLACEMENTHUB-0282",
    title: "Corporate Placement Hub and Eligibility Card - Item 282",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0283",
    code: "NEC-PLACEMENTHUB-0283",
    title: "Corporate Placement Hub and Eligibility Card - Item 283",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0284",
    code: "NEC-PLACEMENTHUB-0284",
    title: "Corporate Placement Hub and Eligibility Card - Item 284",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0285",
    code: "NEC-PLACEMENTHUB-0285",
    title: "Corporate Placement Hub and Eligibility Card - Item 285",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0286",
    code: "NEC-PLACEMENTHUB-0286",
    title: "Corporate Placement Hub and Eligibility Card - Item 286",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0287",
    code: "NEC-PLACEMENTHUB-0287",
    title: "Corporate Placement Hub and Eligibility Card - Item 287",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0288",
    code: "NEC-PLACEMENTHUB-0288",
    title: "Corporate Placement Hub and Eligibility Card - Item 288",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0289",
    code: "NEC-PLACEMENTHUB-0289",
    title: "Corporate Placement Hub and Eligibility Card - Item 289",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0290",
    code: "NEC-PLACEMENTHUB-0290",
    title: "Corporate Placement Hub and Eligibility Card - Item 290",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0291",
    code: "NEC-PLACEMENTHUB-0291",
    title: "Corporate Placement Hub and Eligibility Card - Item 291",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0292",
    code: "NEC-PLACEMENTHUB-0292",
    title: "Corporate Placement Hub and Eligibility Card - Item 292",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0293",
    code: "NEC-PLACEMENTHUB-0293",
    title: "Corporate Placement Hub and Eligibility Card - Item 293",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0294",
    code: "NEC-PLACEMENTHUB-0294",
    title: "Corporate Placement Hub and Eligibility Card - Item 294",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0295",
    code: "NEC-PLACEMENTHUB-0295",
    title: "Corporate Placement Hub and Eligibility Card - Item 295",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0296",
    code: "NEC-PLACEMENTHUB-0296",
    title: "Corporate Placement Hub and Eligibility Card - Item 296",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0297",
    code: "NEC-PLACEMENTHUB-0297",
    title: "Corporate Placement Hub and Eligibility Card - Item 297",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0298",
    code: "NEC-PLACEMENTHUB-0298",
    title: "Corporate Placement Hub and Eligibility Card - Item 298",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0299",
    code: "NEC-PLACEMENTHUB-0299",
    title: "Corporate Placement Hub and Eligibility Card - Item 299",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0300",
    code: "NEC-PLACEMENTHUB-0300",
    title: "Corporate Placement Hub and Eligibility Card - Item 300",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0301",
    code: "NEC-PLACEMENTHUB-0301",
    title: "Corporate Placement Hub and Eligibility Card - Item 301",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0302",
    code: "NEC-PLACEMENTHUB-0302",
    title: "Corporate Placement Hub and Eligibility Card - Item 302",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0303",
    code: "NEC-PLACEMENTHUB-0303",
    title: "Corporate Placement Hub and Eligibility Card - Item 303",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0304",
    code: "NEC-PLACEMENTHUB-0304",
    title: "Corporate Placement Hub and Eligibility Card - Item 304",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0305",
    code: "NEC-PLACEMENTHUB-0305",
    title: "Corporate Placement Hub and Eligibility Card - Item 305",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0306",
    code: "NEC-PLACEMENTHUB-0306",
    title: "Corporate Placement Hub and Eligibility Card - Item 306",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0307",
    code: "NEC-PLACEMENTHUB-0307",
    title: "Corporate Placement Hub and Eligibility Card - Item 307",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0308",
    code: "NEC-PLACEMENTHUB-0308",
    title: "Corporate Placement Hub and Eligibility Card - Item 308",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0309",
    code: "NEC-PLACEMENTHUB-0309",
    title: "Corporate Placement Hub and Eligibility Card - Item 309",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0310",
    code: "NEC-PLACEMENTHUB-0310",
    title: "Corporate Placement Hub and Eligibility Card - Item 310",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0311",
    code: "NEC-PLACEMENTHUB-0311",
    title: "Corporate Placement Hub and Eligibility Card - Item 311",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0312",
    code: "NEC-PLACEMENTHUB-0312",
    title: "Corporate Placement Hub and Eligibility Card - Item 312",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0313",
    code: "NEC-PLACEMENTHUB-0313",
    title: "Corporate Placement Hub and Eligibility Card - Item 313",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0314",
    code: "NEC-PLACEMENTHUB-0314",
    title: "Corporate Placement Hub and Eligibility Card - Item 314",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0315",
    code: "NEC-PLACEMENTHUB-0315",
    title: "Corporate Placement Hub and Eligibility Card - Item 315",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0316",
    code: "NEC-PLACEMENTHUB-0316",
    title: "Corporate Placement Hub and Eligibility Card - Item 316",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0317",
    code: "NEC-PLACEMENTHUB-0317",
    title: "Corporate Placement Hub and Eligibility Card - Item 317",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0318",
    code: "NEC-PLACEMENTHUB-0318",
    title: "Corporate Placement Hub and Eligibility Card - Item 318",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0319",
    code: "NEC-PLACEMENTHUB-0319",
    title: "Corporate Placement Hub and Eligibility Card - Item 319",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0320",
    code: "NEC-PLACEMENTHUB-0320",
    title: "Corporate Placement Hub and Eligibility Card - Item 320",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0321",
    code: "NEC-PLACEMENTHUB-0321",
    title: "Corporate Placement Hub and Eligibility Card - Item 321",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0322",
    code: "NEC-PLACEMENTHUB-0322",
    title: "Corporate Placement Hub and Eligibility Card - Item 322",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0323",
    code: "NEC-PLACEMENTHUB-0323",
    title: "Corporate Placement Hub and Eligibility Card - Item 323",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0324",
    code: "NEC-PLACEMENTHUB-0324",
    title: "Corporate Placement Hub and Eligibility Card - Item 324",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0325",
    code: "NEC-PLACEMENTHUB-0325",
    title: "Corporate Placement Hub and Eligibility Card - Item 325",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0326",
    code: "NEC-PLACEMENTHUB-0326",
    title: "Corporate Placement Hub and Eligibility Card - Item 326",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0327",
    code: "NEC-PLACEMENTHUB-0327",
    title: "Corporate Placement Hub and Eligibility Card - Item 327",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0328",
    code: "NEC-PLACEMENTHUB-0328",
    title: "Corporate Placement Hub and Eligibility Card - Item 328",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0329",
    code: "NEC-PLACEMENTHUB-0329",
    title: "Corporate Placement Hub and Eligibility Card - Item 329",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0330",
    code: "NEC-PLACEMENTHUB-0330",
    title: "Corporate Placement Hub and Eligibility Card - Item 330",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0331",
    code: "NEC-PLACEMENTHUB-0331",
    title: "Corporate Placement Hub and Eligibility Card - Item 331",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0332",
    code: "NEC-PLACEMENTHUB-0332",
    title: "Corporate Placement Hub and Eligibility Card - Item 332",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0333",
    code: "NEC-PLACEMENTHUB-0333",
    title: "Corporate Placement Hub and Eligibility Card - Item 333",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0334",
    code: "NEC-PLACEMENTHUB-0334",
    title: "Corporate Placement Hub and Eligibility Card - Item 334",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0335",
    code: "NEC-PLACEMENTHUB-0335",
    title: "Corporate Placement Hub and Eligibility Card - Item 335",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0336",
    code: "NEC-PLACEMENTHUB-0336",
    title: "Corporate Placement Hub and Eligibility Card - Item 336",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0337",
    code: "NEC-PLACEMENTHUB-0337",
    title: "Corporate Placement Hub and Eligibility Card - Item 337",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0338",
    code: "NEC-PLACEMENTHUB-0338",
    title: "Corporate Placement Hub and Eligibility Card - Item 338",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0339",
    code: "NEC-PLACEMENTHUB-0339",
    title: "Corporate Placement Hub and Eligibility Card - Item 339",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0340",
    code: "NEC-PLACEMENTHUB-0340",
    title: "Corporate Placement Hub and Eligibility Card - Item 340",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0341",
    code: "NEC-PLACEMENTHUB-0341",
    title: "Corporate Placement Hub and Eligibility Card - Item 341",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0342",
    code: "NEC-PLACEMENTHUB-0342",
    title: "Corporate Placement Hub and Eligibility Card - Item 342",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0343",
    code: "NEC-PLACEMENTHUB-0343",
    title: "Corporate Placement Hub and Eligibility Card - Item 343",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0344",
    code: "NEC-PLACEMENTHUB-0344",
    title: "Corporate Placement Hub and Eligibility Card - Item 344",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0345",
    code: "NEC-PLACEMENTHUB-0345",
    title: "Corporate Placement Hub and Eligibility Card - Item 345",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0346",
    code: "NEC-PLACEMENTHUB-0346",
    title: "Corporate Placement Hub and Eligibility Card - Item 346",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0347",
    code: "NEC-PLACEMENTHUB-0347",
    title: "Corporate Placement Hub and Eligibility Card - Item 347",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0348",
    code: "NEC-PLACEMENTHUB-0348",
    title: "Corporate Placement Hub and Eligibility Card - Item 348",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0349",
    code: "NEC-PLACEMENTHUB-0349",
    title: "Corporate Placement Hub and Eligibility Card - Item 349",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0350",
    code: "NEC-PLACEMENTHUB-0350",
    title: "Corporate Placement Hub and Eligibility Card - Item 350",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0351",
    code: "NEC-PLACEMENTHUB-0351",
    title: "Corporate Placement Hub and Eligibility Card - Item 351",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0352",
    code: "NEC-PLACEMENTHUB-0352",
    title: "Corporate Placement Hub and Eligibility Card - Item 352",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0353",
    code: "NEC-PLACEMENTHUB-0353",
    title: "Corporate Placement Hub and Eligibility Card - Item 353",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0354",
    code: "NEC-PLACEMENTHUB-0354",
    title: "Corporate Placement Hub and Eligibility Card - Item 354",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0355",
    code: "NEC-PLACEMENTHUB-0355",
    title: "Corporate Placement Hub and Eligibility Card - Item 355",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0356",
    code: "NEC-PLACEMENTHUB-0356",
    title: "Corporate Placement Hub and Eligibility Card - Item 356",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0357",
    code: "NEC-PLACEMENTHUB-0357",
    title: "Corporate Placement Hub and Eligibility Card - Item 357",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0358",
    code: "NEC-PLACEMENTHUB-0358",
    title: "Corporate Placement Hub and Eligibility Card - Item 358",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0359",
    code: "NEC-PLACEMENTHUB-0359",
    title: "Corporate Placement Hub and Eligibility Card - Item 359",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0360",
    code: "NEC-PLACEMENTHUB-0360",
    title: "Corporate Placement Hub and Eligibility Card - Item 360",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0361",
    code: "NEC-PLACEMENTHUB-0361",
    title: "Corporate Placement Hub and Eligibility Card - Item 361",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0362",
    code: "NEC-PLACEMENTHUB-0362",
    title: "Corporate Placement Hub and Eligibility Card - Item 362",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0363",
    code: "NEC-PLACEMENTHUB-0363",
    title: "Corporate Placement Hub and Eligibility Card - Item 363",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0364",
    code: "NEC-PLACEMENTHUB-0364",
    title: "Corporate Placement Hub and Eligibility Card - Item 364",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0365",
    code: "NEC-PLACEMENTHUB-0365",
    title: "Corporate Placement Hub and Eligibility Card - Item 365",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0366",
    code: "NEC-PLACEMENTHUB-0366",
    title: "Corporate Placement Hub and Eligibility Card - Item 366",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0367",
    code: "NEC-PLACEMENTHUB-0367",
    title: "Corporate Placement Hub and Eligibility Card - Item 367",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0368",
    code: "NEC-PLACEMENTHUB-0368",
    title: "Corporate Placement Hub and Eligibility Card - Item 368",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0369",
    code: "NEC-PLACEMENTHUB-0369",
    title: "Corporate Placement Hub and Eligibility Card - Item 369",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0370",
    code: "NEC-PLACEMENTHUB-0370",
    title: "Corporate Placement Hub and Eligibility Card - Item 370",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0371",
    code: "NEC-PLACEMENTHUB-0371",
    title: "Corporate Placement Hub and Eligibility Card - Item 371",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0372",
    code: "NEC-PLACEMENTHUB-0372",
    title: "Corporate Placement Hub and Eligibility Card - Item 372",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0373",
    code: "NEC-PLACEMENTHUB-0373",
    title: "Corporate Placement Hub and Eligibility Card - Item 373",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0374",
    code: "NEC-PLACEMENTHUB-0374",
    title: "Corporate Placement Hub and Eligibility Card - Item 374",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0375",
    code: "NEC-PLACEMENTHUB-0375",
    title: "Corporate Placement Hub and Eligibility Card - Item 375",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0376",
    code: "NEC-PLACEMENTHUB-0376",
    title: "Corporate Placement Hub and Eligibility Card - Item 376",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0377",
    code: "NEC-PLACEMENTHUB-0377",
    title: "Corporate Placement Hub and Eligibility Card - Item 377",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0378",
    code: "NEC-PLACEMENTHUB-0378",
    title: "Corporate Placement Hub and Eligibility Card - Item 378",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0379",
    code: "NEC-PLACEMENTHUB-0379",
    title: "Corporate Placement Hub and Eligibility Card - Item 379",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0380",
    code: "NEC-PLACEMENTHUB-0380",
    title: "Corporate Placement Hub and Eligibility Card - Item 380",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0381",
    code: "NEC-PLACEMENTHUB-0381",
    title: "Corporate Placement Hub and Eligibility Card - Item 381",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0382",
    code: "NEC-PLACEMENTHUB-0382",
    title: "Corporate Placement Hub and Eligibility Card - Item 382",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0383",
    code: "NEC-PLACEMENTHUB-0383",
    title: "Corporate Placement Hub and Eligibility Card - Item 383",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0384",
    code: "NEC-PLACEMENTHUB-0384",
    title: "Corporate Placement Hub and Eligibility Card - Item 384",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0385",
    code: "NEC-PLACEMENTHUB-0385",
    title: "Corporate Placement Hub and Eligibility Card - Item 385",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0386",
    code: "NEC-PLACEMENTHUB-0386",
    title: "Corporate Placement Hub and Eligibility Card - Item 386",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0387",
    code: "NEC-PLACEMENTHUB-0387",
    title: "Corporate Placement Hub and Eligibility Card - Item 387",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0388",
    code: "NEC-PLACEMENTHUB-0388",
    title: "Corporate Placement Hub and Eligibility Card - Item 388",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0389",
    code: "NEC-PLACEMENTHUB-0389",
    title: "Corporate Placement Hub and Eligibility Card - Item 389",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0390",
    code: "NEC-PLACEMENTHUB-0390",
    title: "Corporate Placement Hub and Eligibility Card - Item 390",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0391",
    code: "NEC-PLACEMENTHUB-0391",
    title: "Corporate Placement Hub and Eligibility Card - Item 391",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0392",
    code: "NEC-PLACEMENTHUB-0392",
    title: "Corporate Placement Hub and Eligibility Card - Item 392",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0393",
    code: "NEC-PLACEMENTHUB-0393",
    title: "Corporate Placement Hub and Eligibility Card - Item 393",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0394",
    code: "NEC-PLACEMENTHUB-0394",
    title: "Corporate Placement Hub and Eligibility Card - Item 394",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0395",
    code: "NEC-PLACEMENTHUB-0395",
    title: "Corporate Placement Hub and Eligibility Card - Item 395",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0396",
    code: "NEC-PLACEMENTHUB-0396",
    title: "Corporate Placement Hub and Eligibility Card - Item 396",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0397",
    code: "NEC-PLACEMENTHUB-0397",
    title: "Corporate Placement Hub and Eligibility Card - Item 397",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0398",
    code: "NEC-PLACEMENTHUB-0398",
    title: "Corporate Placement Hub and Eligibility Card - Item 398",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0399",
    code: "NEC-PLACEMENTHUB-0399",
    title: "Corporate Placement Hub and Eligibility Card - Item 399",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0400",
    code: "NEC-PLACEMENTHUB-0400",
    title: "Corporate Placement Hub and Eligibility Card - Item 400",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0401",
    code: "NEC-PLACEMENTHUB-0401",
    title: "Corporate Placement Hub and Eligibility Card - Item 401",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0402",
    code: "NEC-PLACEMENTHUB-0402",
    title: "Corporate Placement Hub and Eligibility Card - Item 402",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0403",
    code: "NEC-PLACEMENTHUB-0403",
    title: "Corporate Placement Hub and Eligibility Card - Item 403",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0404",
    code: "NEC-PLACEMENTHUB-0404",
    title: "Corporate Placement Hub and Eligibility Card - Item 404",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0405",
    code: "NEC-PLACEMENTHUB-0405",
    title: "Corporate Placement Hub and Eligibility Card - Item 405",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0406",
    code: "NEC-PLACEMENTHUB-0406",
    title: "Corporate Placement Hub and Eligibility Card - Item 406",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0407",
    code: "NEC-PLACEMENTHUB-0407",
    title: "Corporate Placement Hub and Eligibility Card - Item 407",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0408",
    code: "NEC-PLACEMENTHUB-0408",
    title: "Corporate Placement Hub and Eligibility Card - Item 408",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0409",
    code: "NEC-PLACEMENTHUB-0409",
    title: "Corporate Placement Hub and Eligibility Card - Item 409",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0410",
    code: "NEC-PLACEMENTHUB-0410",
    title: "Corporate Placement Hub and Eligibility Card - Item 410",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0411",
    code: "NEC-PLACEMENTHUB-0411",
    title: "Corporate Placement Hub and Eligibility Card - Item 411",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0412",
    code: "NEC-PLACEMENTHUB-0412",
    title: "Corporate Placement Hub and Eligibility Card - Item 412",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0413",
    code: "NEC-PLACEMENTHUB-0413",
    title: "Corporate Placement Hub and Eligibility Card - Item 413",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0414",
    code: "NEC-PLACEMENTHUB-0414",
    title: "Corporate Placement Hub and Eligibility Card - Item 414",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0415",
    code: "NEC-PLACEMENTHUB-0415",
    title: "Corporate Placement Hub and Eligibility Card - Item 415",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0416",
    code: "NEC-PLACEMENTHUB-0416",
    title: "Corporate Placement Hub and Eligibility Card - Item 416",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0417",
    code: "NEC-PLACEMENTHUB-0417",
    title: "Corporate Placement Hub and Eligibility Card - Item 417",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0418",
    code: "NEC-PLACEMENTHUB-0418",
    title: "Corporate Placement Hub and Eligibility Card - Item 418",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0419",
    code: "NEC-PLACEMENTHUB-0419",
    title: "Corporate Placement Hub and Eligibility Card - Item 419",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0420",
    code: "NEC-PLACEMENTHUB-0420",
    title: "Corporate Placement Hub and Eligibility Card - Item 420",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0421",
    code: "NEC-PLACEMENTHUB-0421",
    title: "Corporate Placement Hub and Eligibility Card - Item 421",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0422",
    code: "NEC-PLACEMENTHUB-0422",
    title: "Corporate Placement Hub and Eligibility Card - Item 422",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0423",
    code: "NEC-PLACEMENTHUB-0423",
    title: "Corporate Placement Hub and Eligibility Card - Item 423",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0424",
    code: "NEC-PLACEMENTHUB-0424",
    title: "Corporate Placement Hub and Eligibility Card - Item 424",
    category: "PLACEMENTHUB_CORE",
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
    id: "placementhub-0425",
    code: "NEC-PLACEMENTHUB-0425",
    title: "Corporate Placement Hub and Eligibility Card - Item 425",
    category: "PLACEMENTHUB_CORE",
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

export function filterPLACEMENTHUBBySemester(semester: number): AcademicEntityItem[] {
  return PLACEMENTHUB_REGISTRY.filter(item => item.semester === semester);
}

export function computePLACEMENTHUBAverageCredits(): number {
  const total = PLACEMENTHUB_REGISTRY.reduce((acc, curr) => acc + curr.credits, 0);
  return total / PLACEMENTHUB_REGISTRY.length;
}
