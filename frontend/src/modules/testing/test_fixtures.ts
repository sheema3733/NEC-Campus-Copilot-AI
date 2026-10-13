/**
 * Narasaraopeta Engineering College (Autonomous) — Frontend Enterprise Module
 * Module: Frontend Test Fixtures and Harness (TESTFIXTURES)
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

export const TESTFIXTURES_REGISTRY: AcademicEntityItem[] = [
  {
    id: "testfixtures-0001",
    code: "NEC-TESTFIXTURES-0001",
    title: "Frontend Test Fixtures and Harness - Item 1",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0002",
    code: "NEC-TESTFIXTURES-0002",
    title: "Frontend Test Fixtures and Harness - Item 2",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0003",
    code: "NEC-TESTFIXTURES-0003",
    title: "Frontend Test Fixtures and Harness - Item 3",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0004",
    code: "NEC-TESTFIXTURES-0004",
    title: "Frontend Test Fixtures and Harness - Item 4",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0005",
    code: "NEC-TESTFIXTURES-0005",
    title: "Frontend Test Fixtures and Harness - Item 5",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0006",
    code: "NEC-TESTFIXTURES-0006",
    title: "Frontend Test Fixtures and Harness - Item 6",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0007",
    code: "NEC-TESTFIXTURES-0007",
    title: "Frontend Test Fixtures and Harness - Item 7",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0008",
    code: "NEC-TESTFIXTURES-0008",
    title: "Frontend Test Fixtures and Harness - Item 8",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0009",
    code: "NEC-TESTFIXTURES-0009",
    title: "Frontend Test Fixtures and Harness - Item 9",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0010",
    code: "NEC-TESTFIXTURES-0010",
    title: "Frontend Test Fixtures and Harness - Item 10",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0011",
    code: "NEC-TESTFIXTURES-0011",
    title: "Frontend Test Fixtures and Harness - Item 11",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0012",
    code: "NEC-TESTFIXTURES-0012",
    title: "Frontend Test Fixtures and Harness - Item 12",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0013",
    code: "NEC-TESTFIXTURES-0013",
    title: "Frontend Test Fixtures and Harness - Item 13",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0014",
    code: "NEC-TESTFIXTURES-0014",
    title: "Frontend Test Fixtures and Harness - Item 14",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0015",
    code: "NEC-TESTFIXTURES-0015",
    title: "Frontend Test Fixtures and Harness - Item 15",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0016",
    code: "NEC-TESTFIXTURES-0016",
    title: "Frontend Test Fixtures and Harness - Item 16",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0017",
    code: "NEC-TESTFIXTURES-0017",
    title: "Frontend Test Fixtures and Harness - Item 17",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0018",
    code: "NEC-TESTFIXTURES-0018",
    title: "Frontend Test Fixtures and Harness - Item 18",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0019",
    code: "NEC-TESTFIXTURES-0019",
    title: "Frontend Test Fixtures and Harness - Item 19",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0020",
    code: "NEC-TESTFIXTURES-0020",
    title: "Frontend Test Fixtures and Harness - Item 20",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0021",
    code: "NEC-TESTFIXTURES-0021",
    title: "Frontend Test Fixtures and Harness - Item 21",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0022",
    code: "NEC-TESTFIXTURES-0022",
    title: "Frontend Test Fixtures and Harness - Item 22",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0023",
    code: "NEC-TESTFIXTURES-0023",
    title: "Frontend Test Fixtures and Harness - Item 23",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0024",
    code: "NEC-TESTFIXTURES-0024",
    title: "Frontend Test Fixtures and Harness - Item 24",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0025",
    code: "NEC-TESTFIXTURES-0025",
    title: "Frontend Test Fixtures and Harness - Item 25",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0026",
    code: "NEC-TESTFIXTURES-0026",
    title: "Frontend Test Fixtures and Harness - Item 26",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0027",
    code: "NEC-TESTFIXTURES-0027",
    title: "Frontend Test Fixtures and Harness - Item 27",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0028",
    code: "NEC-TESTFIXTURES-0028",
    title: "Frontend Test Fixtures and Harness - Item 28",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0029",
    code: "NEC-TESTFIXTURES-0029",
    title: "Frontend Test Fixtures and Harness - Item 29",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0030",
    code: "NEC-TESTFIXTURES-0030",
    title: "Frontend Test Fixtures and Harness - Item 30",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0031",
    code: "NEC-TESTFIXTURES-0031",
    title: "Frontend Test Fixtures and Harness - Item 31",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0032",
    code: "NEC-TESTFIXTURES-0032",
    title: "Frontend Test Fixtures and Harness - Item 32",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0033",
    code: "NEC-TESTFIXTURES-0033",
    title: "Frontend Test Fixtures and Harness - Item 33",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0034",
    code: "NEC-TESTFIXTURES-0034",
    title: "Frontend Test Fixtures and Harness - Item 34",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0035",
    code: "NEC-TESTFIXTURES-0035",
    title: "Frontend Test Fixtures and Harness - Item 35",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0036",
    code: "NEC-TESTFIXTURES-0036",
    title: "Frontend Test Fixtures and Harness - Item 36",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0037",
    code: "NEC-TESTFIXTURES-0037",
    title: "Frontend Test Fixtures and Harness - Item 37",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0038",
    code: "NEC-TESTFIXTURES-0038",
    title: "Frontend Test Fixtures and Harness - Item 38",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0039",
    code: "NEC-TESTFIXTURES-0039",
    title: "Frontend Test Fixtures and Harness - Item 39",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0040",
    code: "NEC-TESTFIXTURES-0040",
    title: "Frontend Test Fixtures and Harness - Item 40",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0041",
    code: "NEC-TESTFIXTURES-0041",
    title: "Frontend Test Fixtures and Harness - Item 41",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0042",
    code: "NEC-TESTFIXTURES-0042",
    title: "Frontend Test Fixtures and Harness - Item 42",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0043",
    code: "NEC-TESTFIXTURES-0043",
    title: "Frontend Test Fixtures and Harness - Item 43",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0044",
    code: "NEC-TESTFIXTURES-0044",
    title: "Frontend Test Fixtures and Harness - Item 44",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0045",
    code: "NEC-TESTFIXTURES-0045",
    title: "Frontend Test Fixtures and Harness - Item 45",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0046",
    code: "NEC-TESTFIXTURES-0046",
    title: "Frontend Test Fixtures and Harness - Item 46",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0047",
    code: "NEC-TESTFIXTURES-0047",
    title: "Frontend Test Fixtures and Harness - Item 47",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0048",
    code: "NEC-TESTFIXTURES-0048",
    title: "Frontend Test Fixtures and Harness - Item 48",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0049",
    code: "NEC-TESTFIXTURES-0049",
    title: "Frontend Test Fixtures and Harness - Item 49",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0050",
    code: "NEC-TESTFIXTURES-0050",
    title: "Frontend Test Fixtures and Harness - Item 50",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0051",
    code: "NEC-TESTFIXTURES-0051",
    title: "Frontend Test Fixtures and Harness - Item 51",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0052",
    code: "NEC-TESTFIXTURES-0052",
    title: "Frontend Test Fixtures and Harness - Item 52",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0053",
    code: "NEC-TESTFIXTURES-0053",
    title: "Frontend Test Fixtures and Harness - Item 53",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0054",
    code: "NEC-TESTFIXTURES-0054",
    title: "Frontend Test Fixtures and Harness - Item 54",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0055",
    code: "NEC-TESTFIXTURES-0055",
    title: "Frontend Test Fixtures and Harness - Item 55",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0056",
    code: "NEC-TESTFIXTURES-0056",
    title: "Frontend Test Fixtures and Harness - Item 56",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0057",
    code: "NEC-TESTFIXTURES-0057",
    title: "Frontend Test Fixtures and Harness - Item 57",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0058",
    code: "NEC-TESTFIXTURES-0058",
    title: "Frontend Test Fixtures and Harness - Item 58",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0059",
    code: "NEC-TESTFIXTURES-0059",
    title: "Frontend Test Fixtures and Harness - Item 59",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0060",
    code: "NEC-TESTFIXTURES-0060",
    title: "Frontend Test Fixtures and Harness - Item 60",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0061",
    code: "NEC-TESTFIXTURES-0061",
    title: "Frontend Test Fixtures and Harness - Item 61",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0062",
    code: "NEC-TESTFIXTURES-0062",
    title: "Frontend Test Fixtures and Harness - Item 62",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0063",
    code: "NEC-TESTFIXTURES-0063",
    title: "Frontend Test Fixtures and Harness - Item 63",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0064",
    code: "NEC-TESTFIXTURES-0064",
    title: "Frontend Test Fixtures and Harness - Item 64",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0065",
    code: "NEC-TESTFIXTURES-0065",
    title: "Frontend Test Fixtures and Harness - Item 65",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0066",
    code: "NEC-TESTFIXTURES-0066",
    title: "Frontend Test Fixtures and Harness - Item 66",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0067",
    code: "NEC-TESTFIXTURES-0067",
    title: "Frontend Test Fixtures and Harness - Item 67",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0068",
    code: "NEC-TESTFIXTURES-0068",
    title: "Frontend Test Fixtures and Harness - Item 68",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0069",
    code: "NEC-TESTFIXTURES-0069",
    title: "Frontend Test Fixtures and Harness - Item 69",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0070",
    code: "NEC-TESTFIXTURES-0070",
    title: "Frontend Test Fixtures and Harness - Item 70",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0071",
    code: "NEC-TESTFIXTURES-0071",
    title: "Frontend Test Fixtures and Harness - Item 71",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0072",
    code: "NEC-TESTFIXTURES-0072",
    title: "Frontend Test Fixtures and Harness - Item 72",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0073",
    code: "NEC-TESTFIXTURES-0073",
    title: "Frontend Test Fixtures and Harness - Item 73",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0074",
    code: "NEC-TESTFIXTURES-0074",
    title: "Frontend Test Fixtures and Harness - Item 74",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0075",
    code: "NEC-TESTFIXTURES-0075",
    title: "Frontend Test Fixtures and Harness - Item 75",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0076",
    code: "NEC-TESTFIXTURES-0076",
    title: "Frontend Test Fixtures and Harness - Item 76",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0077",
    code: "NEC-TESTFIXTURES-0077",
    title: "Frontend Test Fixtures and Harness - Item 77",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0078",
    code: "NEC-TESTFIXTURES-0078",
    title: "Frontend Test Fixtures and Harness - Item 78",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0079",
    code: "NEC-TESTFIXTURES-0079",
    title: "Frontend Test Fixtures and Harness - Item 79",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0080",
    code: "NEC-TESTFIXTURES-0080",
    title: "Frontend Test Fixtures and Harness - Item 80",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0081",
    code: "NEC-TESTFIXTURES-0081",
    title: "Frontend Test Fixtures and Harness - Item 81",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0082",
    code: "NEC-TESTFIXTURES-0082",
    title: "Frontend Test Fixtures and Harness - Item 82",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0083",
    code: "NEC-TESTFIXTURES-0083",
    title: "Frontend Test Fixtures and Harness - Item 83",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0084",
    code: "NEC-TESTFIXTURES-0084",
    title: "Frontend Test Fixtures and Harness - Item 84",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0085",
    code: "NEC-TESTFIXTURES-0085",
    title: "Frontend Test Fixtures and Harness - Item 85",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0086",
    code: "NEC-TESTFIXTURES-0086",
    title: "Frontend Test Fixtures and Harness - Item 86",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0087",
    code: "NEC-TESTFIXTURES-0087",
    title: "Frontend Test Fixtures and Harness - Item 87",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0088",
    code: "NEC-TESTFIXTURES-0088",
    title: "Frontend Test Fixtures and Harness - Item 88",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0089",
    code: "NEC-TESTFIXTURES-0089",
    title: "Frontend Test Fixtures and Harness - Item 89",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0090",
    code: "NEC-TESTFIXTURES-0090",
    title: "Frontend Test Fixtures and Harness - Item 90",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0091",
    code: "NEC-TESTFIXTURES-0091",
    title: "Frontend Test Fixtures and Harness - Item 91",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0092",
    code: "NEC-TESTFIXTURES-0092",
    title: "Frontend Test Fixtures and Harness - Item 92",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0093",
    code: "NEC-TESTFIXTURES-0093",
    title: "Frontend Test Fixtures and Harness - Item 93",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0094",
    code: "NEC-TESTFIXTURES-0094",
    title: "Frontend Test Fixtures and Harness - Item 94",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0095",
    code: "NEC-TESTFIXTURES-0095",
    title: "Frontend Test Fixtures and Harness - Item 95",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0096",
    code: "NEC-TESTFIXTURES-0096",
    title: "Frontend Test Fixtures and Harness - Item 96",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0097",
    code: "NEC-TESTFIXTURES-0097",
    title: "Frontend Test Fixtures and Harness - Item 97",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0098",
    code: "NEC-TESTFIXTURES-0098",
    title: "Frontend Test Fixtures and Harness - Item 98",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0099",
    code: "NEC-TESTFIXTURES-0099",
    title: "Frontend Test Fixtures and Harness - Item 99",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0100",
    code: "NEC-TESTFIXTURES-0100",
    title: "Frontend Test Fixtures and Harness - Item 100",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0101",
    code: "NEC-TESTFIXTURES-0101",
    title: "Frontend Test Fixtures and Harness - Item 101",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0102",
    code: "NEC-TESTFIXTURES-0102",
    title: "Frontend Test Fixtures and Harness - Item 102",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0103",
    code: "NEC-TESTFIXTURES-0103",
    title: "Frontend Test Fixtures and Harness - Item 103",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0104",
    code: "NEC-TESTFIXTURES-0104",
    title: "Frontend Test Fixtures and Harness - Item 104",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0105",
    code: "NEC-TESTFIXTURES-0105",
    title: "Frontend Test Fixtures and Harness - Item 105",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0106",
    code: "NEC-TESTFIXTURES-0106",
    title: "Frontend Test Fixtures and Harness - Item 106",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0107",
    code: "NEC-TESTFIXTURES-0107",
    title: "Frontend Test Fixtures and Harness - Item 107",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0108",
    code: "NEC-TESTFIXTURES-0108",
    title: "Frontend Test Fixtures and Harness - Item 108",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0109",
    code: "NEC-TESTFIXTURES-0109",
    title: "Frontend Test Fixtures and Harness - Item 109",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0110",
    code: "NEC-TESTFIXTURES-0110",
    title: "Frontend Test Fixtures and Harness - Item 110",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0111",
    code: "NEC-TESTFIXTURES-0111",
    title: "Frontend Test Fixtures and Harness - Item 111",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0112",
    code: "NEC-TESTFIXTURES-0112",
    title: "Frontend Test Fixtures and Harness - Item 112",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0113",
    code: "NEC-TESTFIXTURES-0113",
    title: "Frontend Test Fixtures and Harness - Item 113",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0114",
    code: "NEC-TESTFIXTURES-0114",
    title: "Frontend Test Fixtures and Harness - Item 114",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0115",
    code: "NEC-TESTFIXTURES-0115",
    title: "Frontend Test Fixtures and Harness - Item 115",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0116",
    code: "NEC-TESTFIXTURES-0116",
    title: "Frontend Test Fixtures and Harness - Item 116",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0117",
    code: "NEC-TESTFIXTURES-0117",
    title: "Frontend Test Fixtures and Harness - Item 117",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0118",
    code: "NEC-TESTFIXTURES-0118",
    title: "Frontend Test Fixtures and Harness - Item 118",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0119",
    code: "NEC-TESTFIXTURES-0119",
    title: "Frontend Test Fixtures and Harness - Item 119",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0120",
    code: "NEC-TESTFIXTURES-0120",
    title: "Frontend Test Fixtures and Harness - Item 120",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0121",
    code: "NEC-TESTFIXTURES-0121",
    title: "Frontend Test Fixtures and Harness - Item 121",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0122",
    code: "NEC-TESTFIXTURES-0122",
    title: "Frontend Test Fixtures and Harness - Item 122",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0123",
    code: "NEC-TESTFIXTURES-0123",
    title: "Frontend Test Fixtures and Harness - Item 123",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0124",
    code: "NEC-TESTFIXTURES-0124",
    title: "Frontend Test Fixtures and Harness - Item 124",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0125",
    code: "NEC-TESTFIXTURES-0125",
    title: "Frontend Test Fixtures and Harness - Item 125",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0126",
    code: "NEC-TESTFIXTURES-0126",
    title: "Frontend Test Fixtures and Harness - Item 126",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0127",
    code: "NEC-TESTFIXTURES-0127",
    title: "Frontend Test Fixtures and Harness - Item 127",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0128",
    code: "NEC-TESTFIXTURES-0128",
    title: "Frontend Test Fixtures and Harness - Item 128",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0129",
    code: "NEC-TESTFIXTURES-0129",
    title: "Frontend Test Fixtures and Harness - Item 129",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0130",
    code: "NEC-TESTFIXTURES-0130",
    title: "Frontend Test Fixtures and Harness - Item 130",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0131",
    code: "NEC-TESTFIXTURES-0131",
    title: "Frontend Test Fixtures and Harness - Item 131",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0132",
    code: "NEC-TESTFIXTURES-0132",
    title: "Frontend Test Fixtures and Harness - Item 132",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0133",
    code: "NEC-TESTFIXTURES-0133",
    title: "Frontend Test Fixtures and Harness - Item 133",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0134",
    code: "NEC-TESTFIXTURES-0134",
    title: "Frontend Test Fixtures and Harness - Item 134",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0135",
    code: "NEC-TESTFIXTURES-0135",
    title: "Frontend Test Fixtures and Harness - Item 135",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0136",
    code: "NEC-TESTFIXTURES-0136",
    title: "Frontend Test Fixtures and Harness - Item 136",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0137",
    code: "NEC-TESTFIXTURES-0137",
    title: "Frontend Test Fixtures and Harness - Item 137",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0138",
    code: "NEC-TESTFIXTURES-0138",
    title: "Frontend Test Fixtures and Harness - Item 138",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0139",
    code: "NEC-TESTFIXTURES-0139",
    title: "Frontend Test Fixtures and Harness - Item 139",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0140",
    code: "NEC-TESTFIXTURES-0140",
    title: "Frontend Test Fixtures and Harness - Item 140",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0141",
    code: "NEC-TESTFIXTURES-0141",
    title: "Frontend Test Fixtures and Harness - Item 141",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0142",
    code: "NEC-TESTFIXTURES-0142",
    title: "Frontend Test Fixtures and Harness - Item 142",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0143",
    code: "NEC-TESTFIXTURES-0143",
    title: "Frontend Test Fixtures and Harness - Item 143",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0144",
    code: "NEC-TESTFIXTURES-0144",
    title: "Frontend Test Fixtures and Harness - Item 144",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0145",
    code: "NEC-TESTFIXTURES-0145",
    title: "Frontend Test Fixtures and Harness - Item 145",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0146",
    code: "NEC-TESTFIXTURES-0146",
    title: "Frontend Test Fixtures and Harness - Item 146",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0147",
    code: "NEC-TESTFIXTURES-0147",
    title: "Frontend Test Fixtures and Harness - Item 147",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0148",
    code: "NEC-TESTFIXTURES-0148",
    title: "Frontend Test Fixtures and Harness - Item 148",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0149",
    code: "NEC-TESTFIXTURES-0149",
    title: "Frontend Test Fixtures and Harness - Item 149",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0150",
    code: "NEC-TESTFIXTURES-0150",
    title: "Frontend Test Fixtures and Harness - Item 150",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0151",
    code: "NEC-TESTFIXTURES-0151",
    title: "Frontend Test Fixtures and Harness - Item 151",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0152",
    code: "NEC-TESTFIXTURES-0152",
    title: "Frontend Test Fixtures and Harness - Item 152",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0153",
    code: "NEC-TESTFIXTURES-0153",
    title: "Frontend Test Fixtures and Harness - Item 153",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0154",
    code: "NEC-TESTFIXTURES-0154",
    title: "Frontend Test Fixtures and Harness - Item 154",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0155",
    code: "NEC-TESTFIXTURES-0155",
    title: "Frontend Test Fixtures and Harness - Item 155",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0156",
    code: "NEC-TESTFIXTURES-0156",
    title: "Frontend Test Fixtures and Harness - Item 156",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0157",
    code: "NEC-TESTFIXTURES-0157",
    title: "Frontend Test Fixtures and Harness - Item 157",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0158",
    code: "NEC-TESTFIXTURES-0158",
    title: "Frontend Test Fixtures and Harness - Item 158",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0159",
    code: "NEC-TESTFIXTURES-0159",
    title: "Frontend Test Fixtures and Harness - Item 159",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0160",
    code: "NEC-TESTFIXTURES-0160",
    title: "Frontend Test Fixtures and Harness - Item 160",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0161",
    code: "NEC-TESTFIXTURES-0161",
    title: "Frontend Test Fixtures and Harness - Item 161",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0162",
    code: "NEC-TESTFIXTURES-0162",
    title: "Frontend Test Fixtures and Harness - Item 162",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0163",
    code: "NEC-TESTFIXTURES-0163",
    title: "Frontend Test Fixtures and Harness - Item 163",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0164",
    code: "NEC-TESTFIXTURES-0164",
    title: "Frontend Test Fixtures and Harness - Item 164",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0165",
    code: "NEC-TESTFIXTURES-0165",
    title: "Frontend Test Fixtures and Harness - Item 165",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0166",
    code: "NEC-TESTFIXTURES-0166",
    title: "Frontend Test Fixtures and Harness - Item 166",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0167",
    code: "NEC-TESTFIXTURES-0167",
    title: "Frontend Test Fixtures and Harness - Item 167",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0168",
    code: "NEC-TESTFIXTURES-0168",
    title: "Frontend Test Fixtures and Harness - Item 168",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0169",
    code: "NEC-TESTFIXTURES-0169",
    title: "Frontend Test Fixtures and Harness - Item 169",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0170",
    code: "NEC-TESTFIXTURES-0170",
    title: "Frontend Test Fixtures and Harness - Item 170",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0171",
    code: "NEC-TESTFIXTURES-0171",
    title: "Frontend Test Fixtures and Harness - Item 171",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0172",
    code: "NEC-TESTFIXTURES-0172",
    title: "Frontend Test Fixtures and Harness - Item 172",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0173",
    code: "NEC-TESTFIXTURES-0173",
    title: "Frontend Test Fixtures and Harness - Item 173",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0174",
    code: "NEC-TESTFIXTURES-0174",
    title: "Frontend Test Fixtures and Harness - Item 174",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0175",
    code: "NEC-TESTFIXTURES-0175",
    title: "Frontend Test Fixtures and Harness - Item 175",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0176",
    code: "NEC-TESTFIXTURES-0176",
    title: "Frontend Test Fixtures and Harness - Item 176",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0177",
    code: "NEC-TESTFIXTURES-0177",
    title: "Frontend Test Fixtures and Harness - Item 177",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0178",
    code: "NEC-TESTFIXTURES-0178",
    title: "Frontend Test Fixtures and Harness - Item 178",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0179",
    code: "NEC-TESTFIXTURES-0179",
    title: "Frontend Test Fixtures and Harness - Item 179",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0180",
    code: "NEC-TESTFIXTURES-0180",
    title: "Frontend Test Fixtures and Harness - Item 180",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0181",
    code: "NEC-TESTFIXTURES-0181",
    title: "Frontend Test Fixtures and Harness - Item 181",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0182",
    code: "NEC-TESTFIXTURES-0182",
    title: "Frontend Test Fixtures and Harness - Item 182",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0183",
    code: "NEC-TESTFIXTURES-0183",
    title: "Frontend Test Fixtures and Harness - Item 183",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0184",
    code: "NEC-TESTFIXTURES-0184",
    title: "Frontend Test Fixtures and Harness - Item 184",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0185",
    code: "NEC-TESTFIXTURES-0185",
    title: "Frontend Test Fixtures and Harness - Item 185",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0186",
    code: "NEC-TESTFIXTURES-0186",
    title: "Frontend Test Fixtures and Harness - Item 186",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0187",
    code: "NEC-TESTFIXTURES-0187",
    title: "Frontend Test Fixtures and Harness - Item 187",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0188",
    code: "NEC-TESTFIXTURES-0188",
    title: "Frontend Test Fixtures and Harness - Item 188",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0189",
    code: "NEC-TESTFIXTURES-0189",
    title: "Frontend Test Fixtures and Harness - Item 189",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0190",
    code: "NEC-TESTFIXTURES-0190",
    title: "Frontend Test Fixtures and Harness - Item 190",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0191",
    code: "NEC-TESTFIXTURES-0191",
    title: "Frontend Test Fixtures and Harness - Item 191",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0192",
    code: "NEC-TESTFIXTURES-0192",
    title: "Frontend Test Fixtures and Harness - Item 192",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0193",
    code: "NEC-TESTFIXTURES-0193",
    title: "Frontend Test Fixtures and Harness - Item 193",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0194",
    code: "NEC-TESTFIXTURES-0194",
    title: "Frontend Test Fixtures and Harness - Item 194",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0195",
    code: "NEC-TESTFIXTURES-0195",
    title: "Frontend Test Fixtures and Harness - Item 195",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0196",
    code: "NEC-TESTFIXTURES-0196",
    title: "Frontend Test Fixtures and Harness - Item 196",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0197",
    code: "NEC-TESTFIXTURES-0197",
    title: "Frontend Test Fixtures and Harness - Item 197",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0198",
    code: "NEC-TESTFIXTURES-0198",
    title: "Frontend Test Fixtures and Harness - Item 198",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0199",
    code: "NEC-TESTFIXTURES-0199",
    title: "Frontend Test Fixtures and Harness - Item 199",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0200",
    code: "NEC-TESTFIXTURES-0200",
    title: "Frontend Test Fixtures and Harness - Item 200",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0201",
    code: "NEC-TESTFIXTURES-0201",
    title: "Frontend Test Fixtures and Harness - Item 201",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0202",
    code: "NEC-TESTFIXTURES-0202",
    title: "Frontend Test Fixtures and Harness - Item 202",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0203",
    code: "NEC-TESTFIXTURES-0203",
    title: "Frontend Test Fixtures and Harness - Item 203",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0204",
    code: "NEC-TESTFIXTURES-0204",
    title: "Frontend Test Fixtures and Harness - Item 204",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0205",
    code: "NEC-TESTFIXTURES-0205",
    title: "Frontend Test Fixtures and Harness - Item 205",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0206",
    code: "NEC-TESTFIXTURES-0206",
    title: "Frontend Test Fixtures and Harness - Item 206",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0207",
    code: "NEC-TESTFIXTURES-0207",
    title: "Frontend Test Fixtures and Harness - Item 207",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0208",
    code: "NEC-TESTFIXTURES-0208",
    title: "Frontend Test Fixtures and Harness - Item 208",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0209",
    code: "NEC-TESTFIXTURES-0209",
    title: "Frontend Test Fixtures and Harness - Item 209",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0210",
    code: "NEC-TESTFIXTURES-0210",
    title: "Frontend Test Fixtures and Harness - Item 210",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0211",
    code: "NEC-TESTFIXTURES-0211",
    title: "Frontend Test Fixtures and Harness - Item 211",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0212",
    code: "NEC-TESTFIXTURES-0212",
    title: "Frontend Test Fixtures and Harness - Item 212",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0213",
    code: "NEC-TESTFIXTURES-0213",
    title: "Frontend Test Fixtures and Harness - Item 213",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0214",
    code: "NEC-TESTFIXTURES-0214",
    title: "Frontend Test Fixtures and Harness - Item 214",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0215",
    code: "NEC-TESTFIXTURES-0215",
    title: "Frontend Test Fixtures and Harness - Item 215",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0216",
    code: "NEC-TESTFIXTURES-0216",
    title: "Frontend Test Fixtures and Harness - Item 216",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0217",
    code: "NEC-TESTFIXTURES-0217",
    title: "Frontend Test Fixtures and Harness - Item 217",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0218",
    code: "NEC-TESTFIXTURES-0218",
    title: "Frontend Test Fixtures and Harness - Item 218",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0219",
    code: "NEC-TESTFIXTURES-0219",
    title: "Frontend Test Fixtures and Harness - Item 219",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0220",
    code: "NEC-TESTFIXTURES-0220",
    title: "Frontend Test Fixtures and Harness - Item 220",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0221",
    code: "NEC-TESTFIXTURES-0221",
    title: "Frontend Test Fixtures and Harness - Item 221",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0222",
    code: "NEC-TESTFIXTURES-0222",
    title: "Frontend Test Fixtures and Harness - Item 222",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0223",
    code: "NEC-TESTFIXTURES-0223",
    title: "Frontend Test Fixtures and Harness - Item 223",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0224",
    code: "NEC-TESTFIXTURES-0224",
    title: "Frontend Test Fixtures and Harness - Item 224",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0225",
    code: "NEC-TESTFIXTURES-0225",
    title: "Frontend Test Fixtures and Harness - Item 225",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0226",
    code: "NEC-TESTFIXTURES-0226",
    title: "Frontend Test Fixtures and Harness - Item 226",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0227",
    code: "NEC-TESTFIXTURES-0227",
    title: "Frontend Test Fixtures and Harness - Item 227",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0228",
    code: "NEC-TESTFIXTURES-0228",
    title: "Frontend Test Fixtures and Harness - Item 228",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0229",
    code: "NEC-TESTFIXTURES-0229",
    title: "Frontend Test Fixtures and Harness - Item 229",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0230",
    code: "NEC-TESTFIXTURES-0230",
    title: "Frontend Test Fixtures and Harness - Item 230",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0231",
    code: "NEC-TESTFIXTURES-0231",
    title: "Frontend Test Fixtures and Harness - Item 231",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0232",
    code: "NEC-TESTFIXTURES-0232",
    title: "Frontend Test Fixtures and Harness - Item 232",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0233",
    code: "NEC-TESTFIXTURES-0233",
    title: "Frontend Test Fixtures and Harness - Item 233",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0234",
    code: "NEC-TESTFIXTURES-0234",
    title: "Frontend Test Fixtures and Harness - Item 234",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0235",
    code: "NEC-TESTFIXTURES-0235",
    title: "Frontend Test Fixtures and Harness - Item 235",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0236",
    code: "NEC-TESTFIXTURES-0236",
    title: "Frontend Test Fixtures and Harness - Item 236",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0237",
    code: "NEC-TESTFIXTURES-0237",
    title: "Frontend Test Fixtures and Harness - Item 237",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0238",
    code: "NEC-TESTFIXTURES-0238",
    title: "Frontend Test Fixtures and Harness - Item 238",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0239",
    code: "NEC-TESTFIXTURES-0239",
    title: "Frontend Test Fixtures and Harness - Item 239",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0240",
    code: "NEC-TESTFIXTURES-0240",
    title: "Frontend Test Fixtures and Harness - Item 240",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0241",
    code: "NEC-TESTFIXTURES-0241",
    title: "Frontend Test Fixtures and Harness - Item 241",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0242",
    code: "NEC-TESTFIXTURES-0242",
    title: "Frontend Test Fixtures and Harness - Item 242",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0243",
    code: "NEC-TESTFIXTURES-0243",
    title: "Frontend Test Fixtures and Harness - Item 243",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0244",
    code: "NEC-TESTFIXTURES-0244",
    title: "Frontend Test Fixtures and Harness - Item 244",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0245",
    code: "NEC-TESTFIXTURES-0245",
    title: "Frontend Test Fixtures and Harness - Item 245",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0246",
    code: "NEC-TESTFIXTURES-0246",
    title: "Frontend Test Fixtures and Harness - Item 246",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0247",
    code: "NEC-TESTFIXTURES-0247",
    title: "Frontend Test Fixtures and Harness - Item 247",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0248",
    code: "NEC-TESTFIXTURES-0248",
    title: "Frontend Test Fixtures and Harness - Item 248",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0249",
    code: "NEC-TESTFIXTURES-0249",
    title: "Frontend Test Fixtures and Harness - Item 249",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0250",
    code: "NEC-TESTFIXTURES-0250",
    title: "Frontend Test Fixtures and Harness - Item 250",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0251",
    code: "NEC-TESTFIXTURES-0251",
    title: "Frontend Test Fixtures and Harness - Item 251",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0252",
    code: "NEC-TESTFIXTURES-0252",
    title: "Frontend Test Fixtures and Harness - Item 252",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0253",
    code: "NEC-TESTFIXTURES-0253",
    title: "Frontend Test Fixtures and Harness - Item 253",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0254",
    code: "NEC-TESTFIXTURES-0254",
    title: "Frontend Test Fixtures and Harness - Item 254",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0255",
    code: "NEC-TESTFIXTURES-0255",
    title: "Frontend Test Fixtures and Harness - Item 255",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0256",
    code: "NEC-TESTFIXTURES-0256",
    title: "Frontend Test Fixtures and Harness - Item 256",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0257",
    code: "NEC-TESTFIXTURES-0257",
    title: "Frontend Test Fixtures and Harness - Item 257",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0258",
    code: "NEC-TESTFIXTURES-0258",
    title: "Frontend Test Fixtures and Harness - Item 258",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0259",
    code: "NEC-TESTFIXTURES-0259",
    title: "Frontend Test Fixtures and Harness - Item 259",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0260",
    code: "NEC-TESTFIXTURES-0260",
    title: "Frontend Test Fixtures and Harness - Item 260",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0261",
    code: "NEC-TESTFIXTURES-0261",
    title: "Frontend Test Fixtures and Harness - Item 261",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0262",
    code: "NEC-TESTFIXTURES-0262",
    title: "Frontend Test Fixtures and Harness - Item 262",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0263",
    code: "NEC-TESTFIXTURES-0263",
    title: "Frontend Test Fixtures and Harness - Item 263",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0264",
    code: "NEC-TESTFIXTURES-0264",
    title: "Frontend Test Fixtures and Harness - Item 264",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0265",
    code: "NEC-TESTFIXTURES-0265",
    title: "Frontend Test Fixtures and Harness - Item 265",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0266",
    code: "NEC-TESTFIXTURES-0266",
    title: "Frontend Test Fixtures and Harness - Item 266",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0267",
    code: "NEC-TESTFIXTURES-0267",
    title: "Frontend Test Fixtures and Harness - Item 267",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0268",
    code: "NEC-TESTFIXTURES-0268",
    title: "Frontend Test Fixtures and Harness - Item 268",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0269",
    code: "NEC-TESTFIXTURES-0269",
    title: "Frontend Test Fixtures and Harness - Item 269",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0270",
    code: "NEC-TESTFIXTURES-0270",
    title: "Frontend Test Fixtures and Harness - Item 270",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0271",
    code: "NEC-TESTFIXTURES-0271",
    title: "Frontend Test Fixtures and Harness - Item 271",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0272",
    code: "NEC-TESTFIXTURES-0272",
    title: "Frontend Test Fixtures and Harness - Item 272",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0273",
    code: "NEC-TESTFIXTURES-0273",
    title: "Frontend Test Fixtures and Harness - Item 273",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0274",
    code: "NEC-TESTFIXTURES-0274",
    title: "Frontend Test Fixtures and Harness - Item 274",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0275",
    code: "NEC-TESTFIXTURES-0275",
    title: "Frontend Test Fixtures and Harness - Item 275",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0276",
    code: "NEC-TESTFIXTURES-0276",
    title: "Frontend Test Fixtures and Harness - Item 276",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0277",
    code: "NEC-TESTFIXTURES-0277",
    title: "Frontend Test Fixtures and Harness - Item 277",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0278",
    code: "NEC-TESTFIXTURES-0278",
    title: "Frontend Test Fixtures and Harness - Item 278",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0279",
    code: "NEC-TESTFIXTURES-0279",
    title: "Frontend Test Fixtures and Harness - Item 279",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0280",
    code: "NEC-TESTFIXTURES-0280",
    title: "Frontend Test Fixtures and Harness - Item 280",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0281",
    code: "NEC-TESTFIXTURES-0281",
    title: "Frontend Test Fixtures and Harness - Item 281",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0282",
    code: "NEC-TESTFIXTURES-0282",
    title: "Frontend Test Fixtures and Harness - Item 282",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0283",
    code: "NEC-TESTFIXTURES-0283",
    title: "Frontend Test Fixtures and Harness - Item 283",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0284",
    code: "NEC-TESTFIXTURES-0284",
    title: "Frontend Test Fixtures and Harness - Item 284",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0285",
    code: "NEC-TESTFIXTURES-0285",
    title: "Frontend Test Fixtures and Harness - Item 285",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0286",
    code: "NEC-TESTFIXTURES-0286",
    title: "Frontend Test Fixtures and Harness - Item 286",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0287",
    code: "NEC-TESTFIXTURES-0287",
    title: "Frontend Test Fixtures and Harness - Item 287",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0288",
    code: "NEC-TESTFIXTURES-0288",
    title: "Frontend Test Fixtures and Harness - Item 288",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0289",
    code: "NEC-TESTFIXTURES-0289",
    title: "Frontend Test Fixtures and Harness - Item 289",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0290",
    code: "NEC-TESTFIXTURES-0290",
    title: "Frontend Test Fixtures and Harness - Item 290",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0291",
    code: "NEC-TESTFIXTURES-0291",
    title: "Frontend Test Fixtures and Harness - Item 291",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0292",
    code: "NEC-TESTFIXTURES-0292",
    title: "Frontend Test Fixtures and Harness - Item 292",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0293",
    code: "NEC-TESTFIXTURES-0293",
    title: "Frontend Test Fixtures and Harness - Item 293",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0294",
    code: "NEC-TESTFIXTURES-0294",
    title: "Frontend Test Fixtures and Harness - Item 294",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0295",
    code: "NEC-TESTFIXTURES-0295",
    title: "Frontend Test Fixtures and Harness - Item 295",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0296",
    code: "NEC-TESTFIXTURES-0296",
    title: "Frontend Test Fixtures and Harness - Item 296",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0297",
    code: "NEC-TESTFIXTURES-0297",
    title: "Frontend Test Fixtures and Harness - Item 297",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0298",
    code: "NEC-TESTFIXTURES-0298",
    title: "Frontend Test Fixtures and Harness - Item 298",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0299",
    code: "NEC-TESTFIXTURES-0299",
    title: "Frontend Test Fixtures and Harness - Item 299",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0300",
    code: "NEC-TESTFIXTURES-0300",
    title: "Frontend Test Fixtures and Harness - Item 300",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0301",
    code: "NEC-TESTFIXTURES-0301",
    title: "Frontend Test Fixtures and Harness - Item 301",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0302",
    code: "NEC-TESTFIXTURES-0302",
    title: "Frontend Test Fixtures and Harness - Item 302",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0303",
    code: "NEC-TESTFIXTURES-0303",
    title: "Frontend Test Fixtures and Harness - Item 303",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0304",
    code: "NEC-TESTFIXTURES-0304",
    title: "Frontend Test Fixtures and Harness - Item 304",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0305",
    code: "NEC-TESTFIXTURES-0305",
    title: "Frontend Test Fixtures and Harness - Item 305",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0306",
    code: "NEC-TESTFIXTURES-0306",
    title: "Frontend Test Fixtures and Harness - Item 306",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0307",
    code: "NEC-TESTFIXTURES-0307",
    title: "Frontend Test Fixtures and Harness - Item 307",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0308",
    code: "NEC-TESTFIXTURES-0308",
    title: "Frontend Test Fixtures and Harness - Item 308",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0309",
    code: "NEC-TESTFIXTURES-0309",
    title: "Frontend Test Fixtures and Harness - Item 309",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0310",
    code: "NEC-TESTFIXTURES-0310",
    title: "Frontend Test Fixtures and Harness - Item 310",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0311",
    code: "NEC-TESTFIXTURES-0311",
    title: "Frontend Test Fixtures and Harness - Item 311",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0312",
    code: "NEC-TESTFIXTURES-0312",
    title: "Frontend Test Fixtures and Harness - Item 312",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0313",
    code: "NEC-TESTFIXTURES-0313",
    title: "Frontend Test Fixtures and Harness - Item 313",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0314",
    code: "NEC-TESTFIXTURES-0314",
    title: "Frontend Test Fixtures and Harness - Item 314",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0315",
    code: "NEC-TESTFIXTURES-0315",
    title: "Frontend Test Fixtures and Harness - Item 315",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0316",
    code: "NEC-TESTFIXTURES-0316",
    title: "Frontend Test Fixtures and Harness - Item 316",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0317",
    code: "NEC-TESTFIXTURES-0317",
    title: "Frontend Test Fixtures and Harness - Item 317",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0318",
    code: "NEC-TESTFIXTURES-0318",
    title: "Frontend Test Fixtures and Harness - Item 318",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0319",
    code: "NEC-TESTFIXTURES-0319",
    title: "Frontend Test Fixtures and Harness - Item 319",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0320",
    code: "NEC-TESTFIXTURES-0320",
    title: "Frontend Test Fixtures and Harness - Item 320",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0321",
    code: "NEC-TESTFIXTURES-0321",
    title: "Frontend Test Fixtures and Harness - Item 321",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0322",
    code: "NEC-TESTFIXTURES-0322",
    title: "Frontend Test Fixtures and Harness - Item 322",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0323",
    code: "NEC-TESTFIXTURES-0323",
    title: "Frontend Test Fixtures and Harness - Item 323",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0324",
    code: "NEC-TESTFIXTURES-0324",
    title: "Frontend Test Fixtures and Harness - Item 324",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0325",
    code: "NEC-TESTFIXTURES-0325",
    title: "Frontend Test Fixtures and Harness - Item 325",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0326",
    code: "NEC-TESTFIXTURES-0326",
    title: "Frontend Test Fixtures and Harness - Item 326",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0327",
    code: "NEC-TESTFIXTURES-0327",
    title: "Frontend Test Fixtures and Harness - Item 327",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0328",
    code: "NEC-TESTFIXTURES-0328",
    title: "Frontend Test Fixtures and Harness - Item 328",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0329",
    code: "NEC-TESTFIXTURES-0329",
    title: "Frontend Test Fixtures and Harness - Item 329",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0330",
    code: "NEC-TESTFIXTURES-0330",
    title: "Frontend Test Fixtures and Harness - Item 330",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0331",
    code: "NEC-TESTFIXTURES-0331",
    title: "Frontend Test Fixtures and Harness - Item 331",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0332",
    code: "NEC-TESTFIXTURES-0332",
    title: "Frontend Test Fixtures and Harness - Item 332",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0333",
    code: "NEC-TESTFIXTURES-0333",
    title: "Frontend Test Fixtures and Harness - Item 333",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0334",
    code: "NEC-TESTFIXTURES-0334",
    title: "Frontend Test Fixtures and Harness - Item 334",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0335",
    code: "NEC-TESTFIXTURES-0335",
    title: "Frontend Test Fixtures and Harness - Item 335",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0336",
    code: "NEC-TESTFIXTURES-0336",
    title: "Frontend Test Fixtures and Harness - Item 336",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0337",
    code: "NEC-TESTFIXTURES-0337",
    title: "Frontend Test Fixtures and Harness - Item 337",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0338",
    code: "NEC-TESTFIXTURES-0338",
    title: "Frontend Test Fixtures and Harness - Item 338",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0339",
    code: "NEC-TESTFIXTURES-0339",
    title: "Frontend Test Fixtures and Harness - Item 339",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0340",
    code: "NEC-TESTFIXTURES-0340",
    title: "Frontend Test Fixtures and Harness - Item 340",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0341",
    code: "NEC-TESTFIXTURES-0341",
    title: "Frontend Test Fixtures and Harness - Item 341",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0342",
    code: "NEC-TESTFIXTURES-0342",
    title: "Frontend Test Fixtures and Harness - Item 342",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0343",
    code: "NEC-TESTFIXTURES-0343",
    title: "Frontend Test Fixtures and Harness - Item 343",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0344",
    code: "NEC-TESTFIXTURES-0344",
    title: "Frontend Test Fixtures and Harness - Item 344",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0345",
    code: "NEC-TESTFIXTURES-0345",
    title: "Frontend Test Fixtures and Harness - Item 345",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0346",
    code: "NEC-TESTFIXTURES-0346",
    title: "Frontend Test Fixtures and Harness - Item 346",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0347",
    code: "NEC-TESTFIXTURES-0347",
    title: "Frontend Test Fixtures and Harness - Item 347",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0348",
    code: "NEC-TESTFIXTURES-0348",
    title: "Frontend Test Fixtures and Harness - Item 348",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0349",
    code: "NEC-TESTFIXTURES-0349",
    title: "Frontend Test Fixtures and Harness - Item 349",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0350",
    code: "NEC-TESTFIXTURES-0350",
    title: "Frontend Test Fixtures and Harness - Item 350",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0351",
    code: "NEC-TESTFIXTURES-0351",
    title: "Frontend Test Fixtures and Harness - Item 351",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0352",
    code: "NEC-TESTFIXTURES-0352",
    title: "Frontend Test Fixtures and Harness - Item 352",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0353",
    code: "NEC-TESTFIXTURES-0353",
    title: "Frontend Test Fixtures and Harness - Item 353",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0354",
    code: "NEC-TESTFIXTURES-0354",
    title: "Frontend Test Fixtures and Harness - Item 354",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0355",
    code: "NEC-TESTFIXTURES-0355",
    title: "Frontend Test Fixtures and Harness - Item 355",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0356",
    code: "NEC-TESTFIXTURES-0356",
    title: "Frontend Test Fixtures and Harness - Item 356",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0357",
    code: "NEC-TESTFIXTURES-0357",
    title: "Frontend Test Fixtures and Harness - Item 357",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0358",
    code: "NEC-TESTFIXTURES-0358",
    title: "Frontend Test Fixtures and Harness - Item 358",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0359",
    code: "NEC-TESTFIXTURES-0359",
    title: "Frontend Test Fixtures and Harness - Item 359",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0360",
    code: "NEC-TESTFIXTURES-0360",
    title: "Frontend Test Fixtures and Harness - Item 360",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0361",
    code: "NEC-TESTFIXTURES-0361",
    title: "Frontend Test Fixtures and Harness - Item 361",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0362",
    code: "NEC-TESTFIXTURES-0362",
    title: "Frontend Test Fixtures and Harness - Item 362",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0363",
    code: "NEC-TESTFIXTURES-0363",
    title: "Frontend Test Fixtures and Harness - Item 363",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0364",
    code: "NEC-TESTFIXTURES-0364",
    title: "Frontend Test Fixtures and Harness - Item 364",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0365",
    code: "NEC-TESTFIXTURES-0365",
    title: "Frontend Test Fixtures and Harness - Item 365",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0366",
    code: "NEC-TESTFIXTURES-0366",
    title: "Frontend Test Fixtures and Harness - Item 366",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0367",
    code: "NEC-TESTFIXTURES-0367",
    title: "Frontend Test Fixtures and Harness - Item 367",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0368",
    code: "NEC-TESTFIXTURES-0368",
    title: "Frontend Test Fixtures and Harness - Item 368",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0369",
    code: "NEC-TESTFIXTURES-0369",
    title: "Frontend Test Fixtures and Harness - Item 369",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0370",
    code: "NEC-TESTFIXTURES-0370",
    title: "Frontend Test Fixtures and Harness - Item 370",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0371",
    code: "NEC-TESTFIXTURES-0371",
    title: "Frontend Test Fixtures and Harness - Item 371",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0372",
    code: "NEC-TESTFIXTURES-0372",
    title: "Frontend Test Fixtures and Harness - Item 372",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0373",
    code: "NEC-TESTFIXTURES-0373",
    title: "Frontend Test Fixtures and Harness - Item 373",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0374",
    code: "NEC-TESTFIXTURES-0374",
    title: "Frontend Test Fixtures and Harness - Item 374",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0375",
    code: "NEC-TESTFIXTURES-0375",
    title: "Frontend Test Fixtures and Harness - Item 375",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0376",
    code: "NEC-TESTFIXTURES-0376",
    title: "Frontend Test Fixtures and Harness - Item 376",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0377",
    code: "NEC-TESTFIXTURES-0377",
    title: "Frontend Test Fixtures and Harness - Item 377",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0378",
    code: "NEC-TESTFIXTURES-0378",
    title: "Frontend Test Fixtures and Harness - Item 378",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0379",
    code: "NEC-TESTFIXTURES-0379",
    title: "Frontend Test Fixtures and Harness - Item 379",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0380",
    code: "NEC-TESTFIXTURES-0380",
    title: "Frontend Test Fixtures and Harness - Item 380",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0381",
    code: "NEC-TESTFIXTURES-0381",
    title: "Frontend Test Fixtures and Harness - Item 381",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0382",
    code: "NEC-TESTFIXTURES-0382",
    title: "Frontend Test Fixtures and Harness - Item 382",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0383",
    code: "NEC-TESTFIXTURES-0383",
    title: "Frontend Test Fixtures and Harness - Item 383",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0384",
    code: "NEC-TESTFIXTURES-0384",
    title: "Frontend Test Fixtures and Harness - Item 384",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0385",
    code: "NEC-TESTFIXTURES-0385",
    title: "Frontend Test Fixtures and Harness - Item 385",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0386",
    code: "NEC-TESTFIXTURES-0386",
    title: "Frontend Test Fixtures and Harness - Item 386",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0387",
    code: "NEC-TESTFIXTURES-0387",
    title: "Frontend Test Fixtures and Harness - Item 387",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0388",
    code: "NEC-TESTFIXTURES-0388",
    title: "Frontend Test Fixtures and Harness - Item 388",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0389",
    code: "NEC-TESTFIXTURES-0389",
    title: "Frontend Test Fixtures and Harness - Item 389",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0390",
    code: "NEC-TESTFIXTURES-0390",
    title: "Frontend Test Fixtures and Harness - Item 390",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0391",
    code: "NEC-TESTFIXTURES-0391",
    title: "Frontend Test Fixtures and Harness - Item 391",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0392",
    code: "NEC-TESTFIXTURES-0392",
    title: "Frontend Test Fixtures and Harness - Item 392",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0393",
    code: "NEC-TESTFIXTURES-0393",
    title: "Frontend Test Fixtures and Harness - Item 393",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0394",
    code: "NEC-TESTFIXTURES-0394",
    title: "Frontend Test Fixtures and Harness - Item 394",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0395",
    code: "NEC-TESTFIXTURES-0395",
    title: "Frontend Test Fixtures and Harness - Item 395",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0396",
    code: "NEC-TESTFIXTURES-0396",
    title: "Frontend Test Fixtures and Harness - Item 396",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0397",
    code: "NEC-TESTFIXTURES-0397",
    title: "Frontend Test Fixtures and Harness - Item 397",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0398",
    code: "NEC-TESTFIXTURES-0398",
    title: "Frontend Test Fixtures and Harness - Item 398",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0399",
    code: "NEC-TESTFIXTURES-0399",
    title: "Frontend Test Fixtures and Harness - Item 399",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0400",
    code: "NEC-TESTFIXTURES-0400",
    title: "Frontend Test Fixtures and Harness - Item 400",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0401",
    code: "NEC-TESTFIXTURES-0401",
    title: "Frontend Test Fixtures and Harness - Item 401",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0402",
    code: "NEC-TESTFIXTURES-0402",
    title: "Frontend Test Fixtures and Harness - Item 402",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0403",
    code: "NEC-TESTFIXTURES-0403",
    title: "Frontend Test Fixtures and Harness - Item 403",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0404",
    code: "NEC-TESTFIXTURES-0404",
    title: "Frontend Test Fixtures and Harness - Item 404",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0405",
    code: "NEC-TESTFIXTURES-0405",
    title: "Frontend Test Fixtures and Harness - Item 405",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0406",
    code: "NEC-TESTFIXTURES-0406",
    title: "Frontend Test Fixtures and Harness - Item 406",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0407",
    code: "NEC-TESTFIXTURES-0407",
    title: "Frontend Test Fixtures and Harness - Item 407",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0408",
    code: "NEC-TESTFIXTURES-0408",
    title: "Frontend Test Fixtures and Harness - Item 408",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0409",
    code: "NEC-TESTFIXTURES-0409",
    title: "Frontend Test Fixtures and Harness - Item 409",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0410",
    code: "NEC-TESTFIXTURES-0410",
    title: "Frontend Test Fixtures and Harness - Item 410",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0411",
    code: "NEC-TESTFIXTURES-0411",
    title: "Frontend Test Fixtures and Harness - Item 411",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0412",
    code: "NEC-TESTFIXTURES-0412",
    title: "Frontend Test Fixtures and Harness - Item 412",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0413",
    code: "NEC-TESTFIXTURES-0413",
    title: "Frontend Test Fixtures and Harness - Item 413",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0414",
    code: "NEC-TESTFIXTURES-0414",
    title: "Frontend Test Fixtures and Harness - Item 414",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0415",
    code: "NEC-TESTFIXTURES-0415",
    title: "Frontend Test Fixtures and Harness - Item 415",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0416",
    code: "NEC-TESTFIXTURES-0416",
    title: "Frontend Test Fixtures and Harness - Item 416",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0417",
    code: "NEC-TESTFIXTURES-0417",
    title: "Frontend Test Fixtures and Harness - Item 417",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0418",
    code: "NEC-TESTFIXTURES-0418",
    title: "Frontend Test Fixtures and Harness - Item 418",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0419",
    code: "NEC-TESTFIXTURES-0419",
    title: "Frontend Test Fixtures and Harness - Item 419",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0420",
    code: "NEC-TESTFIXTURES-0420",
    title: "Frontend Test Fixtures and Harness - Item 420",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0421",
    code: "NEC-TESTFIXTURES-0421",
    title: "Frontend Test Fixtures and Harness - Item 421",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0422",
    code: "NEC-TESTFIXTURES-0422",
    title: "Frontend Test Fixtures and Harness - Item 422",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0423",
    code: "NEC-TESTFIXTURES-0423",
    title: "Frontend Test Fixtures and Harness - Item 423",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0424",
    code: "NEC-TESTFIXTURES-0424",
    title: "Frontend Test Fixtures and Harness - Item 424",
    category: "TESTFIXTURES_CORE",
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
    id: "testfixtures-0425",
    code: "NEC-TESTFIXTURES-0425",
    title: "Frontend Test Fixtures and Harness - Item 425",
    category: "TESTFIXTURES_CORE",
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

export function filterTESTFIXTURESBySemester(semester: number): AcademicEntityItem[] {
  return TESTFIXTURES_REGISTRY.filter(item => item.semester === semester);
}

export function computeTESTFIXTURESAverageCredits(): number {
  const total = TESTFIXTURES_REGISTRY.reduce((acc, curr) => acc + curr.credits, 0);
  return total / TESTFIXTURES_REGISTRY.length;
}
