/**
 * Narasaraopeta Engineering College (Autonomous) — Frontend Enterprise Module
 * Module: Faculty Coordinator Workspace (FACULTYPORTAL)
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

export const FACULTYPORTAL_REGISTRY: AcademicEntityItem[] = [
  {
    id: "facultyportal-0001",
    code: "NEC-FACULTYPORTAL-0001",
    title: "Faculty Coordinator Workspace - Item 1",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0002",
    code: "NEC-FACULTYPORTAL-0002",
    title: "Faculty Coordinator Workspace - Item 2",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0003",
    code: "NEC-FACULTYPORTAL-0003",
    title: "Faculty Coordinator Workspace - Item 3",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0004",
    code: "NEC-FACULTYPORTAL-0004",
    title: "Faculty Coordinator Workspace - Item 4",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0005",
    code: "NEC-FACULTYPORTAL-0005",
    title: "Faculty Coordinator Workspace - Item 5",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0006",
    code: "NEC-FACULTYPORTAL-0006",
    title: "Faculty Coordinator Workspace - Item 6",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0007",
    code: "NEC-FACULTYPORTAL-0007",
    title: "Faculty Coordinator Workspace - Item 7",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0008",
    code: "NEC-FACULTYPORTAL-0008",
    title: "Faculty Coordinator Workspace - Item 8",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0009",
    code: "NEC-FACULTYPORTAL-0009",
    title: "Faculty Coordinator Workspace - Item 9",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0010",
    code: "NEC-FACULTYPORTAL-0010",
    title: "Faculty Coordinator Workspace - Item 10",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0011",
    code: "NEC-FACULTYPORTAL-0011",
    title: "Faculty Coordinator Workspace - Item 11",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0012",
    code: "NEC-FACULTYPORTAL-0012",
    title: "Faculty Coordinator Workspace - Item 12",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0013",
    code: "NEC-FACULTYPORTAL-0013",
    title: "Faculty Coordinator Workspace - Item 13",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0014",
    code: "NEC-FACULTYPORTAL-0014",
    title: "Faculty Coordinator Workspace - Item 14",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0015",
    code: "NEC-FACULTYPORTAL-0015",
    title: "Faculty Coordinator Workspace - Item 15",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0016",
    code: "NEC-FACULTYPORTAL-0016",
    title: "Faculty Coordinator Workspace - Item 16",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0017",
    code: "NEC-FACULTYPORTAL-0017",
    title: "Faculty Coordinator Workspace - Item 17",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0018",
    code: "NEC-FACULTYPORTAL-0018",
    title: "Faculty Coordinator Workspace - Item 18",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0019",
    code: "NEC-FACULTYPORTAL-0019",
    title: "Faculty Coordinator Workspace - Item 19",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0020",
    code: "NEC-FACULTYPORTAL-0020",
    title: "Faculty Coordinator Workspace - Item 20",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0021",
    code: "NEC-FACULTYPORTAL-0021",
    title: "Faculty Coordinator Workspace - Item 21",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0022",
    code: "NEC-FACULTYPORTAL-0022",
    title: "Faculty Coordinator Workspace - Item 22",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0023",
    code: "NEC-FACULTYPORTAL-0023",
    title: "Faculty Coordinator Workspace - Item 23",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0024",
    code: "NEC-FACULTYPORTAL-0024",
    title: "Faculty Coordinator Workspace - Item 24",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0025",
    code: "NEC-FACULTYPORTAL-0025",
    title: "Faculty Coordinator Workspace - Item 25",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0026",
    code: "NEC-FACULTYPORTAL-0026",
    title: "Faculty Coordinator Workspace - Item 26",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0027",
    code: "NEC-FACULTYPORTAL-0027",
    title: "Faculty Coordinator Workspace - Item 27",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0028",
    code: "NEC-FACULTYPORTAL-0028",
    title: "Faculty Coordinator Workspace - Item 28",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0029",
    code: "NEC-FACULTYPORTAL-0029",
    title: "Faculty Coordinator Workspace - Item 29",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0030",
    code: "NEC-FACULTYPORTAL-0030",
    title: "Faculty Coordinator Workspace - Item 30",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0031",
    code: "NEC-FACULTYPORTAL-0031",
    title: "Faculty Coordinator Workspace - Item 31",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0032",
    code: "NEC-FACULTYPORTAL-0032",
    title: "Faculty Coordinator Workspace - Item 32",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0033",
    code: "NEC-FACULTYPORTAL-0033",
    title: "Faculty Coordinator Workspace - Item 33",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0034",
    code: "NEC-FACULTYPORTAL-0034",
    title: "Faculty Coordinator Workspace - Item 34",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0035",
    code: "NEC-FACULTYPORTAL-0035",
    title: "Faculty Coordinator Workspace - Item 35",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0036",
    code: "NEC-FACULTYPORTAL-0036",
    title: "Faculty Coordinator Workspace - Item 36",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0037",
    code: "NEC-FACULTYPORTAL-0037",
    title: "Faculty Coordinator Workspace - Item 37",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0038",
    code: "NEC-FACULTYPORTAL-0038",
    title: "Faculty Coordinator Workspace - Item 38",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0039",
    code: "NEC-FACULTYPORTAL-0039",
    title: "Faculty Coordinator Workspace - Item 39",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0040",
    code: "NEC-FACULTYPORTAL-0040",
    title: "Faculty Coordinator Workspace - Item 40",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0041",
    code: "NEC-FACULTYPORTAL-0041",
    title: "Faculty Coordinator Workspace - Item 41",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0042",
    code: "NEC-FACULTYPORTAL-0042",
    title: "Faculty Coordinator Workspace - Item 42",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0043",
    code: "NEC-FACULTYPORTAL-0043",
    title: "Faculty Coordinator Workspace - Item 43",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0044",
    code: "NEC-FACULTYPORTAL-0044",
    title: "Faculty Coordinator Workspace - Item 44",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0045",
    code: "NEC-FACULTYPORTAL-0045",
    title: "Faculty Coordinator Workspace - Item 45",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0046",
    code: "NEC-FACULTYPORTAL-0046",
    title: "Faculty Coordinator Workspace - Item 46",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0047",
    code: "NEC-FACULTYPORTAL-0047",
    title: "Faculty Coordinator Workspace - Item 47",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0048",
    code: "NEC-FACULTYPORTAL-0048",
    title: "Faculty Coordinator Workspace - Item 48",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0049",
    code: "NEC-FACULTYPORTAL-0049",
    title: "Faculty Coordinator Workspace - Item 49",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0050",
    code: "NEC-FACULTYPORTAL-0050",
    title: "Faculty Coordinator Workspace - Item 50",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0051",
    code: "NEC-FACULTYPORTAL-0051",
    title: "Faculty Coordinator Workspace - Item 51",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0052",
    code: "NEC-FACULTYPORTAL-0052",
    title: "Faculty Coordinator Workspace - Item 52",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0053",
    code: "NEC-FACULTYPORTAL-0053",
    title: "Faculty Coordinator Workspace - Item 53",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0054",
    code: "NEC-FACULTYPORTAL-0054",
    title: "Faculty Coordinator Workspace - Item 54",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0055",
    code: "NEC-FACULTYPORTAL-0055",
    title: "Faculty Coordinator Workspace - Item 55",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0056",
    code: "NEC-FACULTYPORTAL-0056",
    title: "Faculty Coordinator Workspace - Item 56",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0057",
    code: "NEC-FACULTYPORTAL-0057",
    title: "Faculty Coordinator Workspace - Item 57",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0058",
    code: "NEC-FACULTYPORTAL-0058",
    title: "Faculty Coordinator Workspace - Item 58",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0059",
    code: "NEC-FACULTYPORTAL-0059",
    title: "Faculty Coordinator Workspace - Item 59",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0060",
    code: "NEC-FACULTYPORTAL-0060",
    title: "Faculty Coordinator Workspace - Item 60",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0061",
    code: "NEC-FACULTYPORTAL-0061",
    title: "Faculty Coordinator Workspace - Item 61",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0062",
    code: "NEC-FACULTYPORTAL-0062",
    title: "Faculty Coordinator Workspace - Item 62",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0063",
    code: "NEC-FACULTYPORTAL-0063",
    title: "Faculty Coordinator Workspace - Item 63",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0064",
    code: "NEC-FACULTYPORTAL-0064",
    title: "Faculty Coordinator Workspace - Item 64",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0065",
    code: "NEC-FACULTYPORTAL-0065",
    title: "Faculty Coordinator Workspace - Item 65",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0066",
    code: "NEC-FACULTYPORTAL-0066",
    title: "Faculty Coordinator Workspace - Item 66",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0067",
    code: "NEC-FACULTYPORTAL-0067",
    title: "Faculty Coordinator Workspace - Item 67",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0068",
    code: "NEC-FACULTYPORTAL-0068",
    title: "Faculty Coordinator Workspace - Item 68",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0069",
    code: "NEC-FACULTYPORTAL-0069",
    title: "Faculty Coordinator Workspace - Item 69",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0070",
    code: "NEC-FACULTYPORTAL-0070",
    title: "Faculty Coordinator Workspace - Item 70",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0071",
    code: "NEC-FACULTYPORTAL-0071",
    title: "Faculty Coordinator Workspace - Item 71",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0072",
    code: "NEC-FACULTYPORTAL-0072",
    title: "Faculty Coordinator Workspace - Item 72",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0073",
    code: "NEC-FACULTYPORTAL-0073",
    title: "Faculty Coordinator Workspace - Item 73",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0074",
    code: "NEC-FACULTYPORTAL-0074",
    title: "Faculty Coordinator Workspace - Item 74",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0075",
    code: "NEC-FACULTYPORTAL-0075",
    title: "Faculty Coordinator Workspace - Item 75",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0076",
    code: "NEC-FACULTYPORTAL-0076",
    title: "Faculty Coordinator Workspace - Item 76",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0077",
    code: "NEC-FACULTYPORTAL-0077",
    title: "Faculty Coordinator Workspace - Item 77",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0078",
    code: "NEC-FACULTYPORTAL-0078",
    title: "Faculty Coordinator Workspace - Item 78",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0079",
    code: "NEC-FACULTYPORTAL-0079",
    title: "Faculty Coordinator Workspace - Item 79",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0080",
    code: "NEC-FACULTYPORTAL-0080",
    title: "Faculty Coordinator Workspace - Item 80",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0081",
    code: "NEC-FACULTYPORTAL-0081",
    title: "Faculty Coordinator Workspace - Item 81",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0082",
    code: "NEC-FACULTYPORTAL-0082",
    title: "Faculty Coordinator Workspace - Item 82",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0083",
    code: "NEC-FACULTYPORTAL-0083",
    title: "Faculty Coordinator Workspace - Item 83",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0084",
    code: "NEC-FACULTYPORTAL-0084",
    title: "Faculty Coordinator Workspace - Item 84",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0085",
    code: "NEC-FACULTYPORTAL-0085",
    title: "Faculty Coordinator Workspace - Item 85",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0086",
    code: "NEC-FACULTYPORTAL-0086",
    title: "Faculty Coordinator Workspace - Item 86",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0087",
    code: "NEC-FACULTYPORTAL-0087",
    title: "Faculty Coordinator Workspace - Item 87",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0088",
    code: "NEC-FACULTYPORTAL-0088",
    title: "Faculty Coordinator Workspace - Item 88",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0089",
    code: "NEC-FACULTYPORTAL-0089",
    title: "Faculty Coordinator Workspace - Item 89",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0090",
    code: "NEC-FACULTYPORTAL-0090",
    title: "Faculty Coordinator Workspace - Item 90",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0091",
    code: "NEC-FACULTYPORTAL-0091",
    title: "Faculty Coordinator Workspace - Item 91",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0092",
    code: "NEC-FACULTYPORTAL-0092",
    title: "Faculty Coordinator Workspace - Item 92",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0093",
    code: "NEC-FACULTYPORTAL-0093",
    title: "Faculty Coordinator Workspace - Item 93",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0094",
    code: "NEC-FACULTYPORTAL-0094",
    title: "Faculty Coordinator Workspace - Item 94",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0095",
    code: "NEC-FACULTYPORTAL-0095",
    title: "Faculty Coordinator Workspace - Item 95",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0096",
    code: "NEC-FACULTYPORTAL-0096",
    title: "Faculty Coordinator Workspace - Item 96",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0097",
    code: "NEC-FACULTYPORTAL-0097",
    title: "Faculty Coordinator Workspace - Item 97",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0098",
    code: "NEC-FACULTYPORTAL-0098",
    title: "Faculty Coordinator Workspace - Item 98",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0099",
    code: "NEC-FACULTYPORTAL-0099",
    title: "Faculty Coordinator Workspace - Item 99",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0100",
    code: "NEC-FACULTYPORTAL-0100",
    title: "Faculty Coordinator Workspace - Item 100",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0101",
    code: "NEC-FACULTYPORTAL-0101",
    title: "Faculty Coordinator Workspace - Item 101",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0102",
    code: "NEC-FACULTYPORTAL-0102",
    title: "Faculty Coordinator Workspace - Item 102",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0103",
    code: "NEC-FACULTYPORTAL-0103",
    title: "Faculty Coordinator Workspace - Item 103",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0104",
    code: "NEC-FACULTYPORTAL-0104",
    title: "Faculty Coordinator Workspace - Item 104",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0105",
    code: "NEC-FACULTYPORTAL-0105",
    title: "Faculty Coordinator Workspace - Item 105",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0106",
    code: "NEC-FACULTYPORTAL-0106",
    title: "Faculty Coordinator Workspace - Item 106",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0107",
    code: "NEC-FACULTYPORTAL-0107",
    title: "Faculty Coordinator Workspace - Item 107",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0108",
    code: "NEC-FACULTYPORTAL-0108",
    title: "Faculty Coordinator Workspace - Item 108",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0109",
    code: "NEC-FACULTYPORTAL-0109",
    title: "Faculty Coordinator Workspace - Item 109",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0110",
    code: "NEC-FACULTYPORTAL-0110",
    title: "Faculty Coordinator Workspace - Item 110",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0111",
    code: "NEC-FACULTYPORTAL-0111",
    title: "Faculty Coordinator Workspace - Item 111",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0112",
    code: "NEC-FACULTYPORTAL-0112",
    title: "Faculty Coordinator Workspace - Item 112",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0113",
    code: "NEC-FACULTYPORTAL-0113",
    title: "Faculty Coordinator Workspace - Item 113",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0114",
    code: "NEC-FACULTYPORTAL-0114",
    title: "Faculty Coordinator Workspace - Item 114",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0115",
    code: "NEC-FACULTYPORTAL-0115",
    title: "Faculty Coordinator Workspace - Item 115",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0116",
    code: "NEC-FACULTYPORTAL-0116",
    title: "Faculty Coordinator Workspace - Item 116",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0117",
    code: "NEC-FACULTYPORTAL-0117",
    title: "Faculty Coordinator Workspace - Item 117",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0118",
    code: "NEC-FACULTYPORTAL-0118",
    title: "Faculty Coordinator Workspace - Item 118",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0119",
    code: "NEC-FACULTYPORTAL-0119",
    title: "Faculty Coordinator Workspace - Item 119",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0120",
    code: "NEC-FACULTYPORTAL-0120",
    title: "Faculty Coordinator Workspace - Item 120",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0121",
    code: "NEC-FACULTYPORTAL-0121",
    title: "Faculty Coordinator Workspace - Item 121",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0122",
    code: "NEC-FACULTYPORTAL-0122",
    title: "Faculty Coordinator Workspace - Item 122",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0123",
    code: "NEC-FACULTYPORTAL-0123",
    title: "Faculty Coordinator Workspace - Item 123",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0124",
    code: "NEC-FACULTYPORTAL-0124",
    title: "Faculty Coordinator Workspace - Item 124",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0125",
    code: "NEC-FACULTYPORTAL-0125",
    title: "Faculty Coordinator Workspace - Item 125",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0126",
    code: "NEC-FACULTYPORTAL-0126",
    title: "Faculty Coordinator Workspace - Item 126",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0127",
    code: "NEC-FACULTYPORTAL-0127",
    title: "Faculty Coordinator Workspace - Item 127",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0128",
    code: "NEC-FACULTYPORTAL-0128",
    title: "Faculty Coordinator Workspace - Item 128",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0129",
    code: "NEC-FACULTYPORTAL-0129",
    title: "Faculty Coordinator Workspace - Item 129",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0130",
    code: "NEC-FACULTYPORTAL-0130",
    title: "Faculty Coordinator Workspace - Item 130",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0131",
    code: "NEC-FACULTYPORTAL-0131",
    title: "Faculty Coordinator Workspace - Item 131",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0132",
    code: "NEC-FACULTYPORTAL-0132",
    title: "Faculty Coordinator Workspace - Item 132",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0133",
    code: "NEC-FACULTYPORTAL-0133",
    title: "Faculty Coordinator Workspace - Item 133",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0134",
    code: "NEC-FACULTYPORTAL-0134",
    title: "Faculty Coordinator Workspace - Item 134",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0135",
    code: "NEC-FACULTYPORTAL-0135",
    title: "Faculty Coordinator Workspace - Item 135",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0136",
    code: "NEC-FACULTYPORTAL-0136",
    title: "Faculty Coordinator Workspace - Item 136",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0137",
    code: "NEC-FACULTYPORTAL-0137",
    title: "Faculty Coordinator Workspace - Item 137",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0138",
    code: "NEC-FACULTYPORTAL-0138",
    title: "Faculty Coordinator Workspace - Item 138",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0139",
    code: "NEC-FACULTYPORTAL-0139",
    title: "Faculty Coordinator Workspace - Item 139",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0140",
    code: "NEC-FACULTYPORTAL-0140",
    title: "Faculty Coordinator Workspace - Item 140",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0141",
    code: "NEC-FACULTYPORTAL-0141",
    title: "Faculty Coordinator Workspace - Item 141",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0142",
    code: "NEC-FACULTYPORTAL-0142",
    title: "Faculty Coordinator Workspace - Item 142",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0143",
    code: "NEC-FACULTYPORTAL-0143",
    title: "Faculty Coordinator Workspace - Item 143",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0144",
    code: "NEC-FACULTYPORTAL-0144",
    title: "Faculty Coordinator Workspace - Item 144",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0145",
    code: "NEC-FACULTYPORTAL-0145",
    title: "Faculty Coordinator Workspace - Item 145",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0146",
    code: "NEC-FACULTYPORTAL-0146",
    title: "Faculty Coordinator Workspace - Item 146",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0147",
    code: "NEC-FACULTYPORTAL-0147",
    title: "Faculty Coordinator Workspace - Item 147",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0148",
    code: "NEC-FACULTYPORTAL-0148",
    title: "Faculty Coordinator Workspace - Item 148",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0149",
    code: "NEC-FACULTYPORTAL-0149",
    title: "Faculty Coordinator Workspace - Item 149",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0150",
    code: "NEC-FACULTYPORTAL-0150",
    title: "Faculty Coordinator Workspace - Item 150",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0151",
    code: "NEC-FACULTYPORTAL-0151",
    title: "Faculty Coordinator Workspace - Item 151",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0152",
    code: "NEC-FACULTYPORTAL-0152",
    title: "Faculty Coordinator Workspace - Item 152",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0153",
    code: "NEC-FACULTYPORTAL-0153",
    title: "Faculty Coordinator Workspace - Item 153",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0154",
    code: "NEC-FACULTYPORTAL-0154",
    title: "Faculty Coordinator Workspace - Item 154",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0155",
    code: "NEC-FACULTYPORTAL-0155",
    title: "Faculty Coordinator Workspace - Item 155",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0156",
    code: "NEC-FACULTYPORTAL-0156",
    title: "Faculty Coordinator Workspace - Item 156",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0157",
    code: "NEC-FACULTYPORTAL-0157",
    title: "Faculty Coordinator Workspace - Item 157",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0158",
    code: "NEC-FACULTYPORTAL-0158",
    title: "Faculty Coordinator Workspace - Item 158",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0159",
    code: "NEC-FACULTYPORTAL-0159",
    title: "Faculty Coordinator Workspace - Item 159",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0160",
    code: "NEC-FACULTYPORTAL-0160",
    title: "Faculty Coordinator Workspace - Item 160",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0161",
    code: "NEC-FACULTYPORTAL-0161",
    title: "Faculty Coordinator Workspace - Item 161",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0162",
    code: "NEC-FACULTYPORTAL-0162",
    title: "Faculty Coordinator Workspace - Item 162",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0163",
    code: "NEC-FACULTYPORTAL-0163",
    title: "Faculty Coordinator Workspace - Item 163",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0164",
    code: "NEC-FACULTYPORTAL-0164",
    title: "Faculty Coordinator Workspace - Item 164",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0165",
    code: "NEC-FACULTYPORTAL-0165",
    title: "Faculty Coordinator Workspace - Item 165",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0166",
    code: "NEC-FACULTYPORTAL-0166",
    title: "Faculty Coordinator Workspace - Item 166",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0167",
    code: "NEC-FACULTYPORTAL-0167",
    title: "Faculty Coordinator Workspace - Item 167",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0168",
    code: "NEC-FACULTYPORTAL-0168",
    title: "Faculty Coordinator Workspace - Item 168",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0169",
    code: "NEC-FACULTYPORTAL-0169",
    title: "Faculty Coordinator Workspace - Item 169",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0170",
    code: "NEC-FACULTYPORTAL-0170",
    title: "Faculty Coordinator Workspace - Item 170",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0171",
    code: "NEC-FACULTYPORTAL-0171",
    title: "Faculty Coordinator Workspace - Item 171",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0172",
    code: "NEC-FACULTYPORTAL-0172",
    title: "Faculty Coordinator Workspace - Item 172",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0173",
    code: "NEC-FACULTYPORTAL-0173",
    title: "Faculty Coordinator Workspace - Item 173",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0174",
    code: "NEC-FACULTYPORTAL-0174",
    title: "Faculty Coordinator Workspace - Item 174",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0175",
    code: "NEC-FACULTYPORTAL-0175",
    title: "Faculty Coordinator Workspace - Item 175",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0176",
    code: "NEC-FACULTYPORTAL-0176",
    title: "Faculty Coordinator Workspace - Item 176",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0177",
    code: "NEC-FACULTYPORTAL-0177",
    title: "Faculty Coordinator Workspace - Item 177",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0178",
    code: "NEC-FACULTYPORTAL-0178",
    title: "Faculty Coordinator Workspace - Item 178",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0179",
    code: "NEC-FACULTYPORTAL-0179",
    title: "Faculty Coordinator Workspace - Item 179",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0180",
    code: "NEC-FACULTYPORTAL-0180",
    title: "Faculty Coordinator Workspace - Item 180",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0181",
    code: "NEC-FACULTYPORTAL-0181",
    title: "Faculty Coordinator Workspace - Item 181",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0182",
    code: "NEC-FACULTYPORTAL-0182",
    title: "Faculty Coordinator Workspace - Item 182",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0183",
    code: "NEC-FACULTYPORTAL-0183",
    title: "Faculty Coordinator Workspace - Item 183",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0184",
    code: "NEC-FACULTYPORTAL-0184",
    title: "Faculty Coordinator Workspace - Item 184",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0185",
    code: "NEC-FACULTYPORTAL-0185",
    title: "Faculty Coordinator Workspace - Item 185",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0186",
    code: "NEC-FACULTYPORTAL-0186",
    title: "Faculty Coordinator Workspace - Item 186",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0187",
    code: "NEC-FACULTYPORTAL-0187",
    title: "Faculty Coordinator Workspace - Item 187",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0188",
    code: "NEC-FACULTYPORTAL-0188",
    title: "Faculty Coordinator Workspace - Item 188",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0189",
    code: "NEC-FACULTYPORTAL-0189",
    title: "Faculty Coordinator Workspace - Item 189",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0190",
    code: "NEC-FACULTYPORTAL-0190",
    title: "Faculty Coordinator Workspace - Item 190",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0191",
    code: "NEC-FACULTYPORTAL-0191",
    title: "Faculty Coordinator Workspace - Item 191",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0192",
    code: "NEC-FACULTYPORTAL-0192",
    title: "Faculty Coordinator Workspace - Item 192",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0193",
    code: "NEC-FACULTYPORTAL-0193",
    title: "Faculty Coordinator Workspace - Item 193",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0194",
    code: "NEC-FACULTYPORTAL-0194",
    title: "Faculty Coordinator Workspace - Item 194",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0195",
    code: "NEC-FACULTYPORTAL-0195",
    title: "Faculty Coordinator Workspace - Item 195",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0196",
    code: "NEC-FACULTYPORTAL-0196",
    title: "Faculty Coordinator Workspace - Item 196",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0197",
    code: "NEC-FACULTYPORTAL-0197",
    title: "Faculty Coordinator Workspace - Item 197",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0198",
    code: "NEC-FACULTYPORTAL-0198",
    title: "Faculty Coordinator Workspace - Item 198",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0199",
    code: "NEC-FACULTYPORTAL-0199",
    title: "Faculty Coordinator Workspace - Item 199",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0200",
    code: "NEC-FACULTYPORTAL-0200",
    title: "Faculty Coordinator Workspace - Item 200",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0201",
    code: "NEC-FACULTYPORTAL-0201",
    title: "Faculty Coordinator Workspace - Item 201",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0202",
    code: "NEC-FACULTYPORTAL-0202",
    title: "Faculty Coordinator Workspace - Item 202",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0203",
    code: "NEC-FACULTYPORTAL-0203",
    title: "Faculty Coordinator Workspace - Item 203",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0204",
    code: "NEC-FACULTYPORTAL-0204",
    title: "Faculty Coordinator Workspace - Item 204",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0205",
    code: "NEC-FACULTYPORTAL-0205",
    title: "Faculty Coordinator Workspace - Item 205",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0206",
    code: "NEC-FACULTYPORTAL-0206",
    title: "Faculty Coordinator Workspace - Item 206",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0207",
    code: "NEC-FACULTYPORTAL-0207",
    title: "Faculty Coordinator Workspace - Item 207",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0208",
    code: "NEC-FACULTYPORTAL-0208",
    title: "Faculty Coordinator Workspace - Item 208",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0209",
    code: "NEC-FACULTYPORTAL-0209",
    title: "Faculty Coordinator Workspace - Item 209",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0210",
    code: "NEC-FACULTYPORTAL-0210",
    title: "Faculty Coordinator Workspace - Item 210",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0211",
    code: "NEC-FACULTYPORTAL-0211",
    title: "Faculty Coordinator Workspace - Item 211",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0212",
    code: "NEC-FACULTYPORTAL-0212",
    title: "Faculty Coordinator Workspace - Item 212",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0213",
    code: "NEC-FACULTYPORTAL-0213",
    title: "Faculty Coordinator Workspace - Item 213",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0214",
    code: "NEC-FACULTYPORTAL-0214",
    title: "Faculty Coordinator Workspace - Item 214",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0215",
    code: "NEC-FACULTYPORTAL-0215",
    title: "Faculty Coordinator Workspace - Item 215",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0216",
    code: "NEC-FACULTYPORTAL-0216",
    title: "Faculty Coordinator Workspace - Item 216",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0217",
    code: "NEC-FACULTYPORTAL-0217",
    title: "Faculty Coordinator Workspace - Item 217",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0218",
    code: "NEC-FACULTYPORTAL-0218",
    title: "Faculty Coordinator Workspace - Item 218",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0219",
    code: "NEC-FACULTYPORTAL-0219",
    title: "Faculty Coordinator Workspace - Item 219",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0220",
    code: "NEC-FACULTYPORTAL-0220",
    title: "Faculty Coordinator Workspace - Item 220",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0221",
    code: "NEC-FACULTYPORTAL-0221",
    title: "Faculty Coordinator Workspace - Item 221",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0222",
    code: "NEC-FACULTYPORTAL-0222",
    title: "Faculty Coordinator Workspace - Item 222",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0223",
    code: "NEC-FACULTYPORTAL-0223",
    title: "Faculty Coordinator Workspace - Item 223",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0224",
    code: "NEC-FACULTYPORTAL-0224",
    title: "Faculty Coordinator Workspace - Item 224",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0225",
    code: "NEC-FACULTYPORTAL-0225",
    title: "Faculty Coordinator Workspace - Item 225",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0226",
    code: "NEC-FACULTYPORTAL-0226",
    title: "Faculty Coordinator Workspace - Item 226",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0227",
    code: "NEC-FACULTYPORTAL-0227",
    title: "Faculty Coordinator Workspace - Item 227",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0228",
    code: "NEC-FACULTYPORTAL-0228",
    title: "Faculty Coordinator Workspace - Item 228",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0229",
    code: "NEC-FACULTYPORTAL-0229",
    title: "Faculty Coordinator Workspace - Item 229",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0230",
    code: "NEC-FACULTYPORTAL-0230",
    title: "Faculty Coordinator Workspace - Item 230",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0231",
    code: "NEC-FACULTYPORTAL-0231",
    title: "Faculty Coordinator Workspace - Item 231",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0232",
    code: "NEC-FACULTYPORTAL-0232",
    title: "Faculty Coordinator Workspace - Item 232",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0233",
    code: "NEC-FACULTYPORTAL-0233",
    title: "Faculty Coordinator Workspace - Item 233",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0234",
    code: "NEC-FACULTYPORTAL-0234",
    title: "Faculty Coordinator Workspace - Item 234",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0235",
    code: "NEC-FACULTYPORTAL-0235",
    title: "Faculty Coordinator Workspace - Item 235",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0236",
    code: "NEC-FACULTYPORTAL-0236",
    title: "Faculty Coordinator Workspace - Item 236",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0237",
    code: "NEC-FACULTYPORTAL-0237",
    title: "Faculty Coordinator Workspace - Item 237",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0238",
    code: "NEC-FACULTYPORTAL-0238",
    title: "Faculty Coordinator Workspace - Item 238",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0239",
    code: "NEC-FACULTYPORTAL-0239",
    title: "Faculty Coordinator Workspace - Item 239",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0240",
    code: "NEC-FACULTYPORTAL-0240",
    title: "Faculty Coordinator Workspace - Item 240",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0241",
    code: "NEC-FACULTYPORTAL-0241",
    title: "Faculty Coordinator Workspace - Item 241",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0242",
    code: "NEC-FACULTYPORTAL-0242",
    title: "Faculty Coordinator Workspace - Item 242",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0243",
    code: "NEC-FACULTYPORTAL-0243",
    title: "Faculty Coordinator Workspace - Item 243",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0244",
    code: "NEC-FACULTYPORTAL-0244",
    title: "Faculty Coordinator Workspace - Item 244",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0245",
    code: "NEC-FACULTYPORTAL-0245",
    title: "Faculty Coordinator Workspace - Item 245",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0246",
    code: "NEC-FACULTYPORTAL-0246",
    title: "Faculty Coordinator Workspace - Item 246",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0247",
    code: "NEC-FACULTYPORTAL-0247",
    title: "Faculty Coordinator Workspace - Item 247",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0248",
    code: "NEC-FACULTYPORTAL-0248",
    title: "Faculty Coordinator Workspace - Item 248",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0249",
    code: "NEC-FACULTYPORTAL-0249",
    title: "Faculty Coordinator Workspace - Item 249",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0250",
    code: "NEC-FACULTYPORTAL-0250",
    title: "Faculty Coordinator Workspace - Item 250",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0251",
    code: "NEC-FACULTYPORTAL-0251",
    title: "Faculty Coordinator Workspace - Item 251",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0252",
    code: "NEC-FACULTYPORTAL-0252",
    title: "Faculty Coordinator Workspace - Item 252",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0253",
    code: "NEC-FACULTYPORTAL-0253",
    title: "Faculty Coordinator Workspace - Item 253",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0254",
    code: "NEC-FACULTYPORTAL-0254",
    title: "Faculty Coordinator Workspace - Item 254",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0255",
    code: "NEC-FACULTYPORTAL-0255",
    title: "Faculty Coordinator Workspace - Item 255",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0256",
    code: "NEC-FACULTYPORTAL-0256",
    title: "Faculty Coordinator Workspace - Item 256",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0257",
    code: "NEC-FACULTYPORTAL-0257",
    title: "Faculty Coordinator Workspace - Item 257",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0258",
    code: "NEC-FACULTYPORTAL-0258",
    title: "Faculty Coordinator Workspace - Item 258",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0259",
    code: "NEC-FACULTYPORTAL-0259",
    title: "Faculty Coordinator Workspace - Item 259",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0260",
    code: "NEC-FACULTYPORTAL-0260",
    title: "Faculty Coordinator Workspace - Item 260",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0261",
    code: "NEC-FACULTYPORTAL-0261",
    title: "Faculty Coordinator Workspace - Item 261",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0262",
    code: "NEC-FACULTYPORTAL-0262",
    title: "Faculty Coordinator Workspace - Item 262",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0263",
    code: "NEC-FACULTYPORTAL-0263",
    title: "Faculty Coordinator Workspace - Item 263",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0264",
    code: "NEC-FACULTYPORTAL-0264",
    title: "Faculty Coordinator Workspace - Item 264",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0265",
    code: "NEC-FACULTYPORTAL-0265",
    title: "Faculty Coordinator Workspace - Item 265",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0266",
    code: "NEC-FACULTYPORTAL-0266",
    title: "Faculty Coordinator Workspace - Item 266",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0267",
    code: "NEC-FACULTYPORTAL-0267",
    title: "Faculty Coordinator Workspace - Item 267",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0268",
    code: "NEC-FACULTYPORTAL-0268",
    title: "Faculty Coordinator Workspace - Item 268",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0269",
    code: "NEC-FACULTYPORTAL-0269",
    title: "Faculty Coordinator Workspace - Item 269",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0270",
    code: "NEC-FACULTYPORTAL-0270",
    title: "Faculty Coordinator Workspace - Item 270",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0271",
    code: "NEC-FACULTYPORTAL-0271",
    title: "Faculty Coordinator Workspace - Item 271",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0272",
    code: "NEC-FACULTYPORTAL-0272",
    title: "Faculty Coordinator Workspace - Item 272",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0273",
    code: "NEC-FACULTYPORTAL-0273",
    title: "Faculty Coordinator Workspace - Item 273",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0274",
    code: "NEC-FACULTYPORTAL-0274",
    title: "Faculty Coordinator Workspace - Item 274",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0275",
    code: "NEC-FACULTYPORTAL-0275",
    title: "Faculty Coordinator Workspace - Item 275",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0276",
    code: "NEC-FACULTYPORTAL-0276",
    title: "Faculty Coordinator Workspace - Item 276",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0277",
    code: "NEC-FACULTYPORTAL-0277",
    title: "Faculty Coordinator Workspace - Item 277",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0278",
    code: "NEC-FACULTYPORTAL-0278",
    title: "Faculty Coordinator Workspace - Item 278",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0279",
    code: "NEC-FACULTYPORTAL-0279",
    title: "Faculty Coordinator Workspace - Item 279",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0280",
    code: "NEC-FACULTYPORTAL-0280",
    title: "Faculty Coordinator Workspace - Item 280",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0281",
    code: "NEC-FACULTYPORTAL-0281",
    title: "Faculty Coordinator Workspace - Item 281",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0282",
    code: "NEC-FACULTYPORTAL-0282",
    title: "Faculty Coordinator Workspace - Item 282",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0283",
    code: "NEC-FACULTYPORTAL-0283",
    title: "Faculty Coordinator Workspace - Item 283",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0284",
    code: "NEC-FACULTYPORTAL-0284",
    title: "Faculty Coordinator Workspace - Item 284",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0285",
    code: "NEC-FACULTYPORTAL-0285",
    title: "Faculty Coordinator Workspace - Item 285",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0286",
    code: "NEC-FACULTYPORTAL-0286",
    title: "Faculty Coordinator Workspace - Item 286",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0287",
    code: "NEC-FACULTYPORTAL-0287",
    title: "Faculty Coordinator Workspace - Item 287",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0288",
    code: "NEC-FACULTYPORTAL-0288",
    title: "Faculty Coordinator Workspace - Item 288",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0289",
    code: "NEC-FACULTYPORTAL-0289",
    title: "Faculty Coordinator Workspace - Item 289",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0290",
    code: "NEC-FACULTYPORTAL-0290",
    title: "Faculty Coordinator Workspace - Item 290",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0291",
    code: "NEC-FACULTYPORTAL-0291",
    title: "Faculty Coordinator Workspace - Item 291",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0292",
    code: "NEC-FACULTYPORTAL-0292",
    title: "Faculty Coordinator Workspace - Item 292",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0293",
    code: "NEC-FACULTYPORTAL-0293",
    title: "Faculty Coordinator Workspace - Item 293",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0294",
    code: "NEC-FACULTYPORTAL-0294",
    title: "Faculty Coordinator Workspace - Item 294",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0295",
    code: "NEC-FACULTYPORTAL-0295",
    title: "Faculty Coordinator Workspace - Item 295",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0296",
    code: "NEC-FACULTYPORTAL-0296",
    title: "Faculty Coordinator Workspace - Item 296",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0297",
    code: "NEC-FACULTYPORTAL-0297",
    title: "Faculty Coordinator Workspace - Item 297",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0298",
    code: "NEC-FACULTYPORTAL-0298",
    title: "Faculty Coordinator Workspace - Item 298",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0299",
    code: "NEC-FACULTYPORTAL-0299",
    title: "Faculty Coordinator Workspace - Item 299",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0300",
    code: "NEC-FACULTYPORTAL-0300",
    title: "Faculty Coordinator Workspace - Item 300",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0301",
    code: "NEC-FACULTYPORTAL-0301",
    title: "Faculty Coordinator Workspace - Item 301",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0302",
    code: "NEC-FACULTYPORTAL-0302",
    title: "Faculty Coordinator Workspace - Item 302",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0303",
    code: "NEC-FACULTYPORTAL-0303",
    title: "Faculty Coordinator Workspace - Item 303",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0304",
    code: "NEC-FACULTYPORTAL-0304",
    title: "Faculty Coordinator Workspace - Item 304",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0305",
    code: "NEC-FACULTYPORTAL-0305",
    title: "Faculty Coordinator Workspace - Item 305",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0306",
    code: "NEC-FACULTYPORTAL-0306",
    title: "Faculty Coordinator Workspace - Item 306",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0307",
    code: "NEC-FACULTYPORTAL-0307",
    title: "Faculty Coordinator Workspace - Item 307",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0308",
    code: "NEC-FACULTYPORTAL-0308",
    title: "Faculty Coordinator Workspace - Item 308",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0309",
    code: "NEC-FACULTYPORTAL-0309",
    title: "Faculty Coordinator Workspace - Item 309",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0310",
    code: "NEC-FACULTYPORTAL-0310",
    title: "Faculty Coordinator Workspace - Item 310",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0311",
    code: "NEC-FACULTYPORTAL-0311",
    title: "Faculty Coordinator Workspace - Item 311",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0312",
    code: "NEC-FACULTYPORTAL-0312",
    title: "Faculty Coordinator Workspace - Item 312",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0313",
    code: "NEC-FACULTYPORTAL-0313",
    title: "Faculty Coordinator Workspace - Item 313",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0314",
    code: "NEC-FACULTYPORTAL-0314",
    title: "Faculty Coordinator Workspace - Item 314",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0315",
    code: "NEC-FACULTYPORTAL-0315",
    title: "Faculty Coordinator Workspace - Item 315",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0316",
    code: "NEC-FACULTYPORTAL-0316",
    title: "Faculty Coordinator Workspace - Item 316",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0317",
    code: "NEC-FACULTYPORTAL-0317",
    title: "Faculty Coordinator Workspace - Item 317",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0318",
    code: "NEC-FACULTYPORTAL-0318",
    title: "Faculty Coordinator Workspace - Item 318",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0319",
    code: "NEC-FACULTYPORTAL-0319",
    title: "Faculty Coordinator Workspace - Item 319",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0320",
    code: "NEC-FACULTYPORTAL-0320",
    title: "Faculty Coordinator Workspace - Item 320",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0321",
    code: "NEC-FACULTYPORTAL-0321",
    title: "Faculty Coordinator Workspace - Item 321",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0322",
    code: "NEC-FACULTYPORTAL-0322",
    title: "Faculty Coordinator Workspace - Item 322",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0323",
    code: "NEC-FACULTYPORTAL-0323",
    title: "Faculty Coordinator Workspace - Item 323",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0324",
    code: "NEC-FACULTYPORTAL-0324",
    title: "Faculty Coordinator Workspace - Item 324",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0325",
    code: "NEC-FACULTYPORTAL-0325",
    title: "Faculty Coordinator Workspace - Item 325",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0326",
    code: "NEC-FACULTYPORTAL-0326",
    title: "Faculty Coordinator Workspace - Item 326",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0327",
    code: "NEC-FACULTYPORTAL-0327",
    title: "Faculty Coordinator Workspace - Item 327",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0328",
    code: "NEC-FACULTYPORTAL-0328",
    title: "Faculty Coordinator Workspace - Item 328",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0329",
    code: "NEC-FACULTYPORTAL-0329",
    title: "Faculty Coordinator Workspace - Item 329",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0330",
    code: "NEC-FACULTYPORTAL-0330",
    title: "Faculty Coordinator Workspace - Item 330",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0331",
    code: "NEC-FACULTYPORTAL-0331",
    title: "Faculty Coordinator Workspace - Item 331",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0332",
    code: "NEC-FACULTYPORTAL-0332",
    title: "Faculty Coordinator Workspace - Item 332",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0333",
    code: "NEC-FACULTYPORTAL-0333",
    title: "Faculty Coordinator Workspace - Item 333",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0334",
    code: "NEC-FACULTYPORTAL-0334",
    title: "Faculty Coordinator Workspace - Item 334",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0335",
    code: "NEC-FACULTYPORTAL-0335",
    title: "Faculty Coordinator Workspace - Item 335",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0336",
    code: "NEC-FACULTYPORTAL-0336",
    title: "Faculty Coordinator Workspace - Item 336",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0337",
    code: "NEC-FACULTYPORTAL-0337",
    title: "Faculty Coordinator Workspace - Item 337",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0338",
    code: "NEC-FACULTYPORTAL-0338",
    title: "Faculty Coordinator Workspace - Item 338",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0339",
    code: "NEC-FACULTYPORTAL-0339",
    title: "Faculty Coordinator Workspace - Item 339",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0340",
    code: "NEC-FACULTYPORTAL-0340",
    title: "Faculty Coordinator Workspace - Item 340",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0341",
    code: "NEC-FACULTYPORTAL-0341",
    title: "Faculty Coordinator Workspace - Item 341",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0342",
    code: "NEC-FACULTYPORTAL-0342",
    title: "Faculty Coordinator Workspace - Item 342",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0343",
    code: "NEC-FACULTYPORTAL-0343",
    title: "Faculty Coordinator Workspace - Item 343",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0344",
    code: "NEC-FACULTYPORTAL-0344",
    title: "Faculty Coordinator Workspace - Item 344",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0345",
    code: "NEC-FACULTYPORTAL-0345",
    title: "Faculty Coordinator Workspace - Item 345",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0346",
    code: "NEC-FACULTYPORTAL-0346",
    title: "Faculty Coordinator Workspace - Item 346",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0347",
    code: "NEC-FACULTYPORTAL-0347",
    title: "Faculty Coordinator Workspace - Item 347",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0348",
    code: "NEC-FACULTYPORTAL-0348",
    title: "Faculty Coordinator Workspace - Item 348",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0349",
    code: "NEC-FACULTYPORTAL-0349",
    title: "Faculty Coordinator Workspace - Item 349",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0350",
    code: "NEC-FACULTYPORTAL-0350",
    title: "Faculty Coordinator Workspace - Item 350",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0351",
    code: "NEC-FACULTYPORTAL-0351",
    title: "Faculty Coordinator Workspace - Item 351",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0352",
    code: "NEC-FACULTYPORTAL-0352",
    title: "Faculty Coordinator Workspace - Item 352",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0353",
    code: "NEC-FACULTYPORTAL-0353",
    title: "Faculty Coordinator Workspace - Item 353",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0354",
    code: "NEC-FACULTYPORTAL-0354",
    title: "Faculty Coordinator Workspace - Item 354",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0355",
    code: "NEC-FACULTYPORTAL-0355",
    title: "Faculty Coordinator Workspace - Item 355",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0356",
    code: "NEC-FACULTYPORTAL-0356",
    title: "Faculty Coordinator Workspace - Item 356",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0357",
    code: "NEC-FACULTYPORTAL-0357",
    title: "Faculty Coordinator Workspace - Item 357",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0358",
    code: "NEC-FACULTYPORTAL-0358",
    title: "Faculty Coordinator Workspace - Item 358",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0359",
    code: "NEC-FACULTYPORTAL-0359",
    title: "Faculty Coordinator Workspace - Item 359",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0360",
    code: "NEC-FACULTYPORTAL-0360",
    title: "Faculty Coordinator Workspace - Item 360",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0361",
    code: "NEC-FACULTYPORTAL-0361",
    title: "Faculty Coordinator Workspace - Item 361",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0362",
    code: "NEC-FACULTYPORTAL-0362",
    title: "Faculty Coordinator Workspace - Item 362",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0363",
    code: "NEC-FACULTYPORTAL-0363",
    title: "Faculty Coordinator Workspace - Item 363",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0364",
    code: "NEC-FACULTYPORTAL-0364",
    title: "Faculty Coordinator Workspace - Item 364",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0365",
    code: "NEC-FACULTYPORTAL-0365",
    title: "Faculty Coordinator Workspace - Item 365",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0366",
    code: "NEC-FACULTYPORTAL-0366",
    title: "Faculty Coordinator Workspace - Item 366",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0367",
    code: "NEC-FACULTYPORTAL-0367",
    title: "Faculty Coordinator Workspace - Item 367",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0368",
    code: "NEC-FACULTYPORTAL-0368",
    title: "Faculty Coordinator Workspace - Item 368",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0369",
    code: "NEC-FACULTYPORTAL-0369",
    title: "Faculty Coordinator Workspace - Item 369",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0370",
    code: "NEC-FACULTYPORTAL-0370",
    title: "Faculty Coordinator Workspace - Item 370",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0371",
    code: "NEC-FACULTYPORTAL-0371",
    title: "Faculty Coordinator Workspace - Item 371",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0372",
    code: "NEC-FACULTYPORTAL-0372",
    title: "Faculty Coordinator Workspace - Item 372",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0373",
    code: "NEC-FACULTYPORTAL-0373",
    title: "Faculty Coordinator Workspace - Item 373",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0374",
    code: "NEC-FACULTYPORTAL-0374",
    title: "Faculty Coordinator Workspace - Item 374",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0375",
    code: "NEC-FACULTYPORTAL-0375",
    title: "Faculty Coordinator Workspace - Item 375",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0376",
    code: "NEC-FACULTYPORTAL-0376",
    title: "Faculty Coordinator Workspace - Item 376",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0377",
    code: "NEC-FACULTYPORTAL-0377",
    title: "Faculty Coordinator Workspace - Item 377",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0378",
    code: "NEC-FACULTYPORTAL-0378",
    title: "Faculty Coordinator Workspace - Item 378",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0379",
    code: "NEC-FACULTYPORTAL-0379",
    title: "Faculty Coordinator Workspace - Item 379",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0380",
    code: "NEC-FACULTYPORTAL-0380",
    title: "Faculty Coordinator Workspace - Item 380",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0381",
    code: "NEC-FACULTYPORTAL-0381",
    title: "Faculty Coordinator Workspace - Item 381",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0382",
    code: "NEC-FACULTYPORTAL-0382",
    title: "Faculty Coordinator Workspace - Item 382",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0383",
    code: "NEC-FACULTYPORTAL-0383",
    title: "Faculty Coordinator Workspace - Item 383",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0384",
    code: "NEC-FACULTYPORTAL-0384",
    title: "Faculty Coordinator Workspace - Item 384",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0385",
    code: "NEC-FACULTYPORTAL-0385",
    title: "Faculty Coordinator Workspace - Item 385",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0386",
    code: "NEC-FACULTYPORTAL-0386",
    title: "Faculty Coordinator Workspace - Item 386",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0387",
    code: "NEC-FACULTYPORTAL-0387",
    title: "Faculty Coordinator Workspace - Item 387",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0388",
    code: "NEC-FACULTYPORTAL-0388",
    title: "Faculty Coordinator Workspace - Item 388",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0389",
    code: "NEC-FACULTYPORTAL-0389",
    title: "Faculty Coordinator Workspace - Item 389",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0390",
    code: "NEC-FACULTYPORTAL-0390",
    title: "Faculty Coordinator Workspace - Item 390",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0391",
    code: "NEC-FACULTYPORTAL-0391",
    title: "Faculty Coordinator Workspace - Item 391",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0392",
    code: "NEC-FACULTYPORTAL-0392",
    title: "Faculty Coordinator Workspace - Item 392",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0393",
    code: "NEC-FACULTYPORTAL-0393",
    title: "Faculty Coordinator Workspace - Item 393",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0394",
    code: "NEC-FACULTYPORTAL-0394",
    title: "Faculty Coordinator Workspace - Item 394",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0395",
    code: "NEC-FACULTYPORTAL-0395",
    title: "Faculty Coordinator Workspace - Item 395",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0396",
    code: "NEC-FACULTYPORTAL-0396",
    title: "Faculty Coordinator Workspace - Item 396",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0397",
    code: "NEC-FACULTYPORTAL-0397",
    title: "Faculty Coordinator Workspace - Item 397",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0398",
    code: "NEC-FACULTYPORTAL-0398",
    title: "Faculty Coordinator Workspace - Item 398",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0399",
    code: "NEC-FACULTYPORTAL-0399",
    title: "Faculty Coordinator Workspace - Item 399",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0400",
    code: "NEC-FACULTYPORTAL-0400",
    title: "Faculty Coordinator Workspace - Item 400",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0401",
    code: "NEC-FACULTYPORTAL-0401",
    title: "Faculty Coordinator Workspace - Item 401",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0402",
    code: "NEC-FACULTYPORTAL-0402",
    title: "Faculty Coordinator Workspace - Item 402",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0403",
    code: "NEC-FACULTYPORTAL-0403",
    title: "Faculty Coordinator Workspace - Item 403",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0404",
    code: "NEC-FACULTYPORTAL-0404",
    title: "Faculty Coordinator Workspace - Item 404",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0405",
    code: "NEC-FACULTYPORTAL-0405",
    title: "Faculty Coordinator Workspace - Item 405",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0406",
    code: "NEC-FACULTYPORTAL-0406",
    title: "Faculty Coordinator Workspace - Item 406",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0407",
    code: "NEC-FACULTYPORTAL-0407",
    title: "Faculty Coordinator Workspace - Item 407",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0408",
    code: "NEC-FACULTYPORTAL-0408",
    title: "Faculty Coordinator Workspace - Item 408",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0409",
    code: "NEC-FACULTYPORTAL-0409",
    title: "Faculty Coordinator Workspace - Item 409",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0410",
    code: "NEC-FACULTYPORTAL-0410",
    title: "Faculty Coordinator Workspace - Item 410",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0411",
    code: "NEC-FACULTYPORTAL-0411",
    title: "Faculty Coordinator Workspace - Item 411",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0412",
    code: "NEC-FACULTYPORTAL-0412",
    title: "Faculty Coordinator Workspace - Item 412",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0413",
    code: "NEC-FACULTYPORTAL-0413",
    title: "Faculty Coordinator Workspace - Item 413",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0414",
    code: "NEC-FACULTYPORTAL-0414",
    title: "Faculty Coordinator Workspace - Item 414",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0415",
    code: "NEC-FACULTYPORTAL-0415",
    title: "Faculty Coordinator Workspace - Item 415",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0416",
    code: "NEC-FACULTYPORTAL-0416",
    title: "Faculty Coordinator Workspace - Item 416",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0417",
    code: "NEC-FACULTYPORTAL-0417",
    title: "Faculty Coordinator Workspace - Item 417",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0418",
    code: "NEC-FACULTYPORTAL-0418",
    title: "Faculty Coordinator Workspace - Item 418",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0419",
    code: "NEC-FACULTYPORTAL-0419",
    title: "Faculty Coordinator Workspace - Item 419",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0420",
    code: "NEC-FACULTYPORTAL-0420",
    title: "Faculty Coordinator Workspace - Item 420",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0421",
    code: "NEC-FACULTYPORTAL-0421",
    title: "Faculty Coordinator Workspace - Item 421",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0422",
    code: "NEC-FACULTYPORTAL-0422",
    title: "Faculty Coordinator Workspace - Item 422",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0423",
    code: "NEC-FACULTYPORTAL-0423",
    title: "Faculty Coordinator Workspace - Item 423",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0424",
    code: "NEC-FACULTYPORTAL-0424",
    title: "Faculty Coordinator Workspace - Item 424",
    category: "FACULTYPORTAL_CORE",
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
    id: "facultyportal-0425",
    code: "NEC-FACULTYPORTAL-0425",
    title: "Faculty Coordinator Workspace - Item 425",
    category: "FACULTYPORTAL_CORE",
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

export function filterFACULTYPORTALBySemester(semester: number): AcademicEntityItem[] {
  return FACULTYPORTAL_REGISTRY.filter(item => item.semester === semester);
}

export function computeFACULTYPORTALAverageCredits(): number {
  const total = FACULTYPORTAL_REGISTRY.reduce((acc, curr) => acc + curr.credits, 0);
  return total / FACULTYPORTAL_REGISTRY.length;
}
