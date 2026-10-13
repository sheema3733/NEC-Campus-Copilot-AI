/**
 * Narasaraopeta Engineering College (Autonomous) — Frontend Enterprise Module
 * Module: Campus Services Library and Transport Hub (CAMPUSSERVICES)
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

export const CAMPUSSERVICES_REGISTRY: AcademicEntityItem[] = [
  {
    id: "campusservices-0001",
    code: "NEC-CAMPUSSERVICES-0001",
    title: "Campus Services Library and Transport Hub - Item 1",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0002",
    code: "NEC-CAMPUSSERVICES-0002",
    title: "Campus Services Library and Transport Hub - Item 2",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0003",
    code: "NEC-CAMPUSSERVICES-0003",
    title: "Campus Services Library and Transport Hub - Item 3",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0004",
    code: "NEC-CAMPUSSERVICES-0004",
    title: "Campus Services Library and Transport Hub - Item 4",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0005",
    code: "NEC-CAMPUSSERVICES-0005",
    title: "Campus Services Library and Transport Hub - Item 5",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0006",
    code: "NEC-CAMPUSSERVICES-0006",
    title: "Campus Services Library and Transport Hub - Item 6",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0007",
    code: "NEC-CAMPUSSERVICES-0007",
    title: "Campus Services Library and Transport Hub - Item 7",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0008",
    code: "NEC-CAMPUSSERVICES-0008",
    title: "Campus Services Library and Transport Hub - Item 8",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0009",
    code: "NEC-CAMPUSSERVICES-0009",
    title: "Campus Services Library and Transport Hub - Item 9",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0010",
    code: "NEC-CAMPUSSERVICES-0010",
    title: "Campus Services Library and Transport Hub - Item 10",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0011",
    code: "NEC-CAMPUSSERVICES-0011",
    title: "Campus Services Library and Transport Hub - Item 11",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0012",
    code: "NEC-CAMPUSSERVICES-0012",
    title: "Campus Services Library and Transport Hub - Item 12",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0013",
    code: "NEC-CAMPUSSERVICES-0013",
    title: "Campus Services Library and Transport Hub - Item 13",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0014",
    code: "NEC-CAMPUSSERVICES-0014",
    title: "Campus Services Library and Transport Hub - Item 14",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0015",
    code: "NEC-CAMPUSSERVICES-0015",
    title: "Campus Services Library and Transport Hub - Item 15",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0016",
    code: "NEC-CAMPUSSERVICES-0016",
    title: "Campus Services Library and Transport Hub - Item 16",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0017",
    code: "NEC-CAMPUSSERVICES-0017",
    title: "Campus Services Library and Transport Hub - Item 17",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0018",
    code: "NEC-CAMPUSSERVICES-0018",
    title: "Campus Services Library and Transport Hub - Item 18",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0019",
    code: "NEC-CAMPUSSERVICES-0019",
    title: "Campus Services Library and Transport Hub - Item 19",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0020",
    code: "NEC-CAMPUSSERVICES-0020",
    title: "Campus Services Library and Transport Hub - Item 20",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0021",
    code: "NEC-CAMPUSSERVICES-0021",
    title: "Campus Services Library and Transport Hub - Item 21",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0022",
    code: "NEC-CAMPUSSERVICES-0022",
    title: "Campus Services Library and Transport Hub - Item 22",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0023",
    code: "NEC-CAMPUSSERVICES-0023",
    title: "Campus Services Library and Transport Hub - Item 23",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0024",
    code: "NEC-CAMPUSSERVICES-0024",
    title: "Campus Services Library and Transport Hub - Item 24",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0025",
    code: "NEC-CAMPUSSERVICES-0025",
    title: "Campus Services Library and Transport Hub - Item 25",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0026",
    code: "NEC-CAMPUSSERVICES-0026",
    title: "Campus Services Library and Transport Hub - Item 26",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0027",
    code: "NEC-CAMPUSSERVICES-0027",
    title: "Campus Services Library and Transport Hub - Item 27",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0028",
    code: "NEC-CAMPUSSERVICES-0028",
    title: "Campus Services Library and Transport Hub - Item 28",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0029",
    code: "NEC-CAMPUSSERVICES-0029",
    title: "Campus Services Library and Transport Hub - Item 29",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0030",
    code: "NEC-CAMPUSSERVICES-0030",
    title: "Campus Services Library and Transport Hub - Item 30",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0031",
    code: "NEC-CAMPUSSERVICES-0031",
    title: "Campus Services Library and Transport Hub - Item 31",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0032",
    code: "NEC-CAMPUSSERVICES-0032",
    title: "Campus Services Library and Transport Hub - Item 32",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0033",
    code: "NEC-CAMPUSSERVICES-0033",
    title: "Campus Services Library and Transport Hub - Item 33",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0034",
    code: "NEC-CAMPUSSERVICES-0034",
    title: "Campus Services Library and Transport Hub - Item 34",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0035",
    code: "NEC-CAMPUSSERVICES-0035",
    title: "Campus Services Library and Transport Hub - Item 35",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0036",
    code: "NEC-CAMPUSSERVICES-0036",
    title: "Campus Services Library and Transport Hub - Item 36",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0037",
    code: "NEC-CAMPUSSERVICES-0037",
    title: "Campus Services Library and Transport Hub - Item 37",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0038",
    code: "NEC-CAMPUSSERVICES-0038",
    title: "Campus Services Library and Transport Hub - Item 38",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0039",
    code: "NEC-CAMPUSSERVICES-0039",
    title: "Campus Services Library and Transport Hub - Item 39",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0040",
    code: "NEC-CAMPUSSERVICES-0040",
    title: "Campus Services Library and Transport Hub - Item 40",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0041",
    code: "NEC-CAMPUSSERVICES-0041",
    title: "Campus Services Library and Transport Hub - Item 41",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0042",
    code: "NEC-CAMPUSSERVICES-0042",
    title: "Campus Services Library and Transport Hub - Item 42",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0043",
    code: "NEC-CAMPUSSERVICES-0043",
    title: "Campus Services Library and Transport Hub - Item 43",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0044",
    code: "NEC-CAMPUSSERVICES-0044",
    title: "Campus Services Library and Transport Hub - Item 44",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0045",
    code: "NEC-CAMPUSSERVICES-0045",
    title: "Campus Services Library and Transport Hub - Item 45",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0046",
    code: "NEC-CAMPUSSERVICES-0046",
    title: "Campus Services Library and Transport Hub - Item 46",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0047",
    code: "NEC-CAMPUSSERVICES-0047",
    title: "Campus Services Library and Transport Hub - Item 47",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0048",
    code: "NEC-CAMPUSSERVICES-0048",
    title: "Campus Services Library and Transport Hub - Item 48",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0049",
    code: "NEC-CAMPUSSERVICES-0049",
    title: "Campus Services Library and Transport Hub - Item 49",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0050",
    code: "NEC-CAMPUSSERVICES-0050",
    title: "Campus Services Library and Transport Hub - Item 50",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0051",
    code: "NEC-CAMPUSSERVICES-0051",
    title: "Campus Services Library and Transport Hub - Item 51",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0052",
    code: "NEC-CAMPUSSERVICES-0052",
    title: "Campus Services Library and Transport Hub - Item 52",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0053",
    code: "NEC-CAMPUSSERVICES-0053",
    title: "Campus Services Library and Transport Hub - Item 53",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0054",
    code: "NEC-CAMPUSSERVICES-0054",
    title: "Campus Services Library and Transport Hub - Item 54",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0055",
    code: "NEC-CAMPUSSERVICES-0055",
    title: "Campus Services Library and Transport Hub - Item 55",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0056",
    code: "NEC-CAMPUSSERVICES-0056",
    title: "Campus Services Library and Transport Hub - Item 56",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0057",
    code: "NEC-CAMPUSSERVICES-0057",
    title: "Campus Services Library and Transport Hub - Item 57",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0058",
    code: "NEC-CAMPUSSERVICES-0058",
    title: "Campus Services Library and Transport Hub - Item 58",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0059",
    code: "NEC-CAMPUSSERVICES-0059",
    title: "Campus Services Library and Transport Hub - Item 59",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0060",
    code: "NEC-CAMPUSSERVICES-0060",
    title: "Campus Services Library and Transport Hub - Item 60",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0061",
    code: "NEC-CAMPUSSERVICES-0061",
    title: "Campus Services Library and Transport Hub - Item 61",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0062",
    code: "NEC-CAMPUSSERVICES-0062",
    title: "Campus Services Library and Transport Hub - Item 62",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0063",
    code: "NEC-CAMPUSSERVICES-0063",
    title: "Campus Services Library and Transport Hub - Item 63",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0064",
    code: "NEC-CAMPUSSERVICES-0064",
    title: "Campus Services Library and Transport Hub - Item 64",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0065",
    code: "NEC-CAMPUSSERVICES-0065",
    title: "Campus Services Library and Transport Hub - Item 65",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0066",
    code: "NEC-CAMPUSSERVICES-0066",
    title: "Campus Services Library and Transport Hub - Item 66",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0067",
    code: "NEC-CAMPUSSERVICES-0067",
    title: "Campus Services Library and Transport Hub - Item 67",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0068",
    code: "NEC-CAMPUSSERVICES-0068",
    title: "Campus Services Library and Transport Hub - Item 68",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0069",
    code: "NEC-CAMPUSSERVICES-0069",
    title: "Campus Services Library and Transport Hub - Item 69",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0070",
    code: "NEC-CAMPUSSERVICES-0070",
    title: "Campus Services Library and Transport Hub - Item 70",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0071",
    code: "NEC-CAMPUSSERVICES-0071",
    title: "Campus Services Library and Transport Hub - Item 71",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0072",
    code: "NEC-CAMPUSSERVICES-0072",
    title: "Campus Services Library and Transport Hub - Item 72",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0073",
    code: "NEC-CAMPUSSERVICES-0073",
    title: "Campus Services Library and Transport Hub - Item 73",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0074",
    code: "NEC-CAMPUSSERVICES-0074",
    title: "Campus Services Library and Transport Hub - Item 74",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0075",
    code: "NEC-CAMPUSSERVICES-0075",
    title: "Campus Services Library and Transport Hub - Item 75",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0076",
    code: "NEC-CAMPUSSERVICES-0076",
    title: "Campus Services Library and Transport Hub - Item 76",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0077",
    code: "NEC-CAMPUSSERVICES-0077",
    title: "Campus Services Library and Transport Hub - Item 77",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0078",
    code: "NEC-CAMPUSSERVICES-0078",
    title: "Campus Services Library and Transport Hub - Item 78",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0079",
    code: "NEC-CAMPUSSERVICES-0079",
    title: "Campus Services Library and Transport Hub - Item 79",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0080",
    code: "NEC-CAMPUSSERVICES-0080",
    title: "Campus Services Library and Transport Hub - Item 80",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0081",
    code: "NEC-CAMPUSSERVICES-0081",
    title: "Campus Services Library and Transport Hub - Item 81",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0082",
    code: "NEC-CAMPUSSERVICES-0082",
    title: "Campus Services Library and Transport Hub - Item 82",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0083",
    code: "NEC-CAMPUSSERVICES-0083",
    title: "Campus Services Library and Transport Hub - Item 83",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0084",
    code: "NEC-CAMPUSSERVICES-0084",
    title: "Campus Services Library and Transport Hub - Item 84",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0085",
    code: "NEC-CAMPUSSERVICES-0085",
    title: "Campus Services Library and Transport Hub - Item 85",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0086",
    code: "NEC-CAMPUSSERVICES-0086",
    title: "Campus Services Library and Transport Hub - Item 86",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0087",
    code: "NEC-CAMPUSSERVICES-0087",
    title: "Campus Services Library and Transport Hub - Item 87",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0088",
    code: "NEC-CAMPUSSERVICES-0088",
    title: "Campus Services Library and Transport Hub - Item 88",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0089",
    code: "NEC-CAMPUSSERVICES-0089",
    title: "Campus Services Library and Transport Hub - Item 89",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0090",
    code: "NEC-CAMPUSSERVICES-0090",
    title: "Campus Services Library and Transport Hub - Item 90",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0091",
    code: "NEC-CAMPUSSERVICES-0091",
    title: "Campus Services Library and Transport Hub - Item 91",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0092",
    code: "NEC-CAMPUSSERVICES-0092",
    title: "Campus Services Library and Transport Hub - Item 92",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0093",
    code: "NEC-CAMPUSSERVICES-0093",
    title: "Campus Services Library and Transport Hub - Item 93",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0094",
    code: "NEC-CAMPUSSERVICES-0094",
    title: "Campus Services Library and Transport Hub - Item 94",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0095",
    code: "NEC-CAMPUSSERVICES-0095",
    title: "Campus Services Library and Transport Hub - Item 95",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0096",
    code: "NEC-CAMPUSSERVICES-0096",
    title: "Campus Services Library and Transport Hub - Item 96",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0097",
    code: "NEC-CAMPUSSERVICES-0097",
    title: "Campus Services Library and Transport Hub - Item 97",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0098",
    code: "NEC-CAMPUSSERVICES-0098",
    title: "Campus Services Library and Transport Hub - Item 98",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0099",
    code: "NEC-CAMPUSSERVICES-0099",
    title: "Campus Services Library and Transport Hub - Item 99",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0100",
    code: "NEC-CAMPUSSERVICES-0100",
    title: "Campus Services Library and Transport Hub - Item 100",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0101",
    code: "NEC-CAMPUSSERVICES-0101",
    title: "Campus Services Library and Transport Hub - Item 101",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0102",
    code: "NEC-CAMPUSSERVICES-0102",
    title: "Campus Services Library and Transport Hub - Item 102",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0103",
    code: "NEC-CAMPUSSERVICES-0103",
    title: "Campus Services Library and Transport Hub - Item 103",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0104",
    code: "NEC-CAMPUSSERVICES-0104",
    title: "Campus Services Library and Transport Hub - Item 104",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0105",
    code: "NEC-CAMPUSSERVICES-0105",
    title: "Campus Services Library and Transport Hub - Item 105",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0106",
    code: "NEC-CAMPUSSERVICES-0106",
    title: "Campus Services Library and Transport Hub - Item 106",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0107",
    code: "NEC-CAMPUSSERVICES-0107",
    title: "Campus Services Library and Transport Hub - Item 107",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0108",
    code: "NEC-CAMPUSSERVICES-0108",
    title: "Campus Services Library and Transport Hub - Item 108",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0109",
    code: "NEC-CAMPUSSERVICES-0109",
    title: "Campus Services Library and Transport Hub - Item 109",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0110",
    code: "NEC-CAMPUSSERVICES-0110",
    title: "Campus Services Library and Transport Hub - Item 110",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0111",
    code: "NEC-CAMPUSSERVICES-0111",
    title: "Campus Services Library and Transport Hub - Item 111",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0112",
    code: "NEC-CAMPUSSERVICES-0112",
    title: "Campus Services Library and Transport Hub - Item 112",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0113",
    code: "NEC-CAMPUSSERVICES-0113",
    title: "Campus Services Library and Transport Hub - Item 113",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0114",
    code: "NEC-CAMPUSSERVICES-0114",
    title: "Campus Services Library and Transport Hub - Item 114",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0115",
    code: "NEC-CAMPUSSERVICES-0115",
    title: "Campus Services Library and Transport Hub - Item 115",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0116",
    code: "NEC-CAMPUSSERVICES-0116",
    title: "Campus Services Library and Transport Hub - Item 116",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0117",
    code: "NEC-CAMPUSSERVICES-0117",
    title: "Campus Services Library and Transport Hub - Item 117",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0118",
    code: "NEC-CAMPUSSERVICES-0118",
    title: "Campus Services Library and Transport Hub - Item 118",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0119",
    code: "NEC-CAMPUSSERVICES-0119",
    title: "Campus Services Library and Transport Hub - Item 119",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0120",
    code: "NEC-CAMPUSSERVICES-0120",
    title: "Campus Services Library and Transport Hub - Item 120",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0121",
    code: "NEC-CAMPUSSERVICES-0121",
    title: "Campus Services Library and Transport Hub - Item 121",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0122",
    code: "NEC-CAMPUSSERVICES-0122",
    title: "Campus Services Library and Transport Hub - Item 122",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0123",
    code: "NEC-CAMPUSSERVICES-0123",
    title: "Campus Services Library and Transport Hub - Item 123",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0124",
    code: "NEC-CAMPUSSERVICES-0124",
    title: "Campus Services Library and Transport Hub - Item 124",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0125",
    code: "NEC-CAMPUSSERVICES-0125",
    title: "Campus Services Library and Transport Hub - Item 125",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0126",
    code: "NEC-CAMPUSSERVICES-0126",
    title: "Campus Services Library and Transport Hub - Item 126",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0127",
    code: "NEC-CAMPUSSERVICES-0127",
    title: "Campus Services Library and Transport Hub - Item 127",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0128",
    code: "NEC-CAMPUSSERVICES-0128",
    title: "Campus Services Library and Transport Hub - Item 128",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0129",
    code: "NEC-CAMPUSSERVICES-0129",
    title: "Campus Services Library and Transport Hub - Item 129",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0130",
    code: "NEC-CAMPUSSERVICES-0130",
    title: "Campus Services Library and Transport Hub - Item 130",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0131",
    code: "NEC-CAMPUSSERVICES-0131",
    title: "Campus Services Library and Transport Hub - Item 131",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0132",
    code: "NEC-CAMPUSSERVICES-0132",
    title: "Campus Services Library and Transport Hub - Item 132",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0133",
    code: "NEC-CAMPUSSERVICES-0133",
    title: "Campus Services Library and Transport Hub - Item 133",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0134",
    code: "NEC-CAMPUSSERVICES-0134",
    title: "Campus Services Library and Transport Hub - Item 134",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0135",
    code: "NEC-CAMPUSSERVICES-0135",
    title: "Campus Services Library and Transport Hub - Item 135",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0136",
    code: "NEC-CAMPUSSERVICES-0136",
    title: "Campus Services Library and Transport Hub - Item 136",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0137",
    code: "NEC-CAMPUSSERVICES-0137",
    title: "Campus Services Library and Transport Hub - Item 137",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0138",
    code: "NEC-CAMPUSSERVICES-0138",
    title: "Campus Services Library and Transport Hub - Item 138",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0139",
    code: "NEC-CAMPUSSERVICES-0139",
    title: "Campus Services Library and Transport Hub - Item 139",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0140",
    code: "NEC-CAMPUSSERVICES-0140",
    title: "Campus Services Library and Transport Hub - Item 140",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0141",
    code: "NEC-CAMPUSSERVICES-0141",
    title: "Campus Services Library and Transport Hub - Item 141",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0142",
    code: "NEC-CAMPUSSERVICES-0142",
    title: "Campus Services Library and Transport Hub - Item 142",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0143",
    code: "NEC-CAMPUSSERVICES-0143",
    title: "Campus Services Library and Transport Hub - Item 143",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0144",
    code: "NEC-CAMPUSSERVICES-0144",
    title: "Campus Services Library and Transport Hub - Item 144",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0145",
    code: "NEC-CAMPUSSERVICES-0145",
    title: "Campus Services Library and Transport Hub - Item 145",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0146",
    code: "NEC-CAMPUSSERVICES-0146",
    title: "Campus Services Library and Transport Hub - Item 146",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0147",
    code: "NEC-CAMPUSSERVICES-0147",
    title: "Campus Services Library and Transport Hub - Item 147",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0148",
    code: "NEC-CAMPUSSERVICES-0148",
    title: "Campus Services Library and Transport Hub - Item 148",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0149",
    code: "NEC-CAMPUSSERVICES-0149",
    title: "Campus Services Library and Transport Hub - Item 149",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0150",
    code: "NEC-CAMPUSSERVICES-0150",
    title: "Campus Services Library and Transport Hub - Item 150",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0151",
    code: "NEC-CAMPUSSERVICES-0151",
    title: "Campus Services Library and Transport Hub - Item 151",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0152",
    code: "NEC-CAMPUSSERVICES-0152",
    title: "Campus Services Library and Transport Hub - Item 152",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0153",
    code: "NEC-CAMPUSSERVICES-0153",
    title: "Campus Services Library and Transport Hub - Item 153",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0154",
    code: "NEC-CAMPUSSERVICES-0154",
    title: "Campus Services Library and Transport Hub - Item 154",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0155",
    code: "NEC-CAMPUSSERVICES-0155",
    title: "Campus Services Library and Transport Hub - Item 155",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0156",
    code: "NEC-CAMPUSSERVICES-0156",
    title: "Campus Services Library and Transport Hub - Item 156",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0157",
    code: "NEC-CAMPUSSERVICES-0157",
    title: "Campus Services Library and Transport Hub - Item 157",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0158",
    code: "NEC-CAMPUSSERVICES-0158",
    title: "Campus Services Library and Transport Hub - Item 158",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0159",
    code: "NEC-CAMPUSSERVICES-0159",
    title: "Campus Services Library and Transport Hub - Item 159",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0160",
    code: "NEC-CAMPUSSERVICES-0160",
    title: "Campus Services Library and Transport Hub - Item 160",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0161",
    code: "NEC-CAMPUSSERVICES-0161",
    title: "Campus Services Library and Transport Hub - Item 161",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0162",
    code: "NEC-CAMPUSSERVICES-0162",
    title: "Campus Services Library and Transport Hub - Item 162",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0163",
    code: "NEC-CAMPUSSERVICES-0163",
    title: "Campus Services Library and Transport Hub - Item 163",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0164",
    code: "NEC-CAMPUSSERVICES-0164",
    title: "Campus Services Library and Transport Hub - Item 164",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0165",
    code: "NEC-CAMPUSSERVICES-0165",
    title: "Campus Services Library and Transport Hub - Item 165",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0166",
    code: "NEC-CAMPUSSERVICES-0166",
    title: "Campus Services Library and Transport Hub - Item 166",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0167",
    code: "NEC-CAMPUSSERVICES-0167",
    title: "Campus Services Library and Transport Hub - Item 167",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0168",
    code: "NEC-CAMPUSSERVICES-0168",
    title: "Campus Services Library and Transport Hub - Item 168",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0169",
    code: "NEC-CAMPUSSERVICES-0169",
    title: "Campus Services Library and Transport Hub - Item 169",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0170",
    code: "NEC-CAMPUSSERVICES-0170",
    title: "Campus Services Library and Transport Hub - Item 170",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0171",
    code: "NEC-CAMPUSSERVICES-0171",
    title: "Campus Services Library and Transport Hub - Item 171",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0172",
    code: "NEC-CAMPUSSERVICES-0172",
    title: "Campus Services Library and Transport Hub - Item 172",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0173",
    code: "NEC-CAMPUSSERVICES-0173",
    title: "Campus Services Library and Transport Hub - Item 173",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0174",
    code: "NEC-CAMPUSSERVICES-0174",
    title: "Campus Services Library and Transport Hub - Item 174",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0175",
    code: "NEC-CAMPUSSERVICES-0175",
    title: "Campus Services Library and Transport Hub - Item 175",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0176",
    code: "NEC-CAMPUSSERVICES-0176",
    title: "Campus Services Library and Transport Hub - Item 176",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0177",
    code: "NEC-CAMPUSSERVICES-0177",
    title: "Campus Services Library and Transport Hub - Item 177",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0178",
    code: "NEC-CAMPUSSERVICES-0178",
    title: "Campus Services Library and Transport Hub - Item 178",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0179",
    code: "NEC-CAMPUSSERVICES-0179",
    title: "Campus Services Library and Transport Hub - Item 179",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0180",
    code: "NEC-CAMPUSSERVICES-0180",
    title: "Campus Services Library and Transport Hub - Item 180",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0181",
    code: "NEC-CAMPUSSERVICES-0181",
    title: "Campus Services Library and Transport Hub - Item 181",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0182",
    code: "NEC-CAMPUSSERVICES-0182",
    title: "Campus Services Library and Transport Hub - Item 182",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0183",
    code: "NEC-CAMPUSSERVICES-0183",
    title: "Campus Services Library and Transport Hub - Item 183",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0184",
    code: "NEC-CAMPUSSERVICES-0184",
    title: "Campus Services Library and Transport Hub - Item 184",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0185",
    code: "NEC-CAMPUSSERVICES-0185",
    title: "Campus Services Library and Transport Hub - Item 185",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0186",
    code: "NEC-CAMPUSSERVICES-0186",
    title: "Campus Services Library and Transport Hub - Item 186",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0187",
    code: "NEC-CAMPUSSERVICES-0187",
    title: "Campus Services Library and Transport Hub - Item 187",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0188",
    code: "NEC-CAMPUSSERVICES-0188",
    title: "Campus Services Library and Transport Hub - Item 188",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0189",
    code: "NEC-CAMPUSSERVICES-0189",
    title: "Campus Services Library and Transport Hub - Item 189",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0190",
    code: "NEC-CAMPUSSERVICES-0190",
    title: "Campus Services Library and Transport Hub - Item 190",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0191",
    code: "NEC-CAMPUSSERVICES-0191",
    title: "Campus Services Library and Transport Hub - Item 191",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0192",
    code: "NEC-CAMPUSSERVICES-0192",
    title: "Campus Services Library and Transport Hub - Item 192",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0193",
    code: "NEC-CAMPUSSERVICES-0193",
    title: "Campus Services Library and Transport Hub - Item 193",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0194",
    code: "NEC-CAMPUSSERVICES-0194",
    title: "Campus Services Library and Transport Hub - Item 194",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0195",
    code: "NEC-CAMPUSSERVICES-0195",
    title: "Campus Services Library and Transport Hub - Item 195",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0196",
    code: "NEC-CAMPUSSERVICES-0196",
    title: "Campus Services Library and Transport Hub - Item 196",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0197",
    code: "NEC-CAMPUSSERVICES-0197",
    title: "Campus Services Library and Transport Hub - Item 197",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0198",
    code: "NEC-CAMPUSSERVICES-0198",
    title: "Campus Services Library and Transport Hub - Item 198",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0199",
    code: "NEC-CAMPUSSERVICES-0199",
    title: "Campus Services Library and Transport Hub - Item 199",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0200",
    code: "NEC-CAMPUSSERVICES-0200",
    title: "Campus Services Library and Transport Hub - Item 200",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0201",
    code: "NEC-CAMPUSSERVICES-0201",
    title: "Campus Services Library and Transport Hub - Item 201",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0202",
    code: "NEC-CAMPUSSERVICES-0202",
    title: "Campus Services Library and Transport Hub - Item 202",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0203",
    code: "NEC-CAMPUSSERVICES-0203",
    title: "Campus Services Library and Transport Hub - Item 203",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0204",
    code: "NEC-CAMPUSSERVICES-0204",
    title: "Campus Services Library and Transport Hub - Item 204",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0205",
    code: "NEC-CAMPUSSERVICES-0205",
    title: "Campus Services Library and Transport Hub - Item 205",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0206",
    code: "NEC-CAMPUSSERVICES-0206",
    title: "Campus Services Library and Transport Hub - Item 206",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0207",
    code: "NEC-CAMPUSSERVICES-0207",
    title: "Campus Services Library and Transport Hub - Item 207",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0208",
    code: "NEC-CAMPUSSERVICES-0208",
    title: "Campus Services Library and Transport Hub - Item 208",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0209",
    code: "NEC-CAMPUSSERVICES-0209",
    title: "Campus Services Library and Transport Hub - Item 209",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0210",
    code: "NEC-CAMPUSSERVICES-0210",
    title: "Campus Services Library and Transport Hub - Item 210",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0211",
    code: "NEC-CAMPUSSERVICES-0211",
    title: "Campus Services Library and Transport Hub - Item 211",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0212",
    code: "NEC-CAMPUSSERVICES-0212",
    title: "Campus Services Library and Transport Hub - Item 212",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0213",
    code: "NEC-CAMPUSSERVICES-0213",
    title: "Campus Services Library and Transport Hub - Item 213",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0214",
    code: "NEC-CAMPUSSERVICES-0214",
    title: "Campus Services Library and Transport Hub - Item 214",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0215",
    code: "NEC-CAMPUSSERVICES-0215",
    title: "Campus Services Library and Transport Hub - Item 215",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0216",
    code: "NEC-CAMPUSSERVICES-0216",
    title: "Campus Services Library and Transport Hub - Item 216",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0217",
    code: "NEC-CAMPUSSERVICES-0217",
    title: "Campus Services Library and Transport Hub - Item 217",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0218",
    code: "NEC-CAMPUSSERVICES-0218",
    title: "Campus Services Library and Transport Hub - Item 218",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0219",
    code: "NEC-CAMPUSSERVICES-0219",
    title: "Campus Services Library and Transport Hub - Item 219",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0220",
    code: "NEC-CAMPUSSERVICES-0220",
    title: "Campus Services Library and Transport Hub - Item 220",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0221",
    code: "NEC-CAMPUSSERVICES-0221",
    title: "Campus Services Library and Transport Hub - Item 221",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0222",
    code: "NEC-CAMPUSSERVICES-0222",
    title: "Campus Services Library and Transport Hub - Item 222",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0223",
    code: "NEC-CAMPUSSERVICES-0223",
    title: "Campus Services Library and Transport Hub - Item 223",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0224",
    code: "NEC-CAMPUSSERVICES-0224",
    title: "Campus Services Library and Transport Hub - Item 224",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0225",
    code: "NEC-CAMPUSSERVICES-0225",
    title: "Campus Services Library and Transport Hub - Item 225",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0226",
    code: "NEC-CAMPUSSERVICES-0226",
    title: "Campus Services Library and Transport Hub - Item 226",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0227",
    code: "NEC-CAMPUSSERVICES-0227",
    title: "Campus Services Library and Transport Hub - Item 227",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0228",
    code: "NEC-CAMPUSSERVICES-0228",
    title: "Campus Services Library and Transport Hub - Item 228",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0229",
    code: "NEC-CAMPUSSERVICES-0229",
    title: "Campus Services Library and Transport Hub - Item 229",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0230",
    code: "NEC-CAMPUSSERVICES-0230",
    title: "Campus Services Library and Transport Hub - Item 230",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0231",
    code: "NEC-CAMPUSSERVICES-0231",
    title: "Campus Services Library and Transport Hub - Item 231",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0232",
    code: "NEC-CAMPUSSERVICES-0232",
    title: "Campus Services Library and Transport Hub - Item 232",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0233",
    code: "NEC-CAMPUSSERVICES-0233",
    title: "Campus Services Library and Transport Hub - Item 233",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0234",
    code: "NEC-CAMPUSSERVICES-0234",
    title: "Campus Services Library and Transport Hub - Item 234",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0235",
    code: "NEC-CAMPUSSERVICES-0235",
    title: "Campus Services Library and Transport Hub - Item 235",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0236",
    code: "NEC-CAMPUSSERVICES-0236",
    title: "Campus Services Library and Transport Hub - Item 236",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0237",
    code: "NEC-CAMPUSSERVICES-0237",
    title: "Campus Services Library and Transport Hub - Item 237",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0238",
    code: "NEC-CAMPUSSERVICES-0238",
    title: "Campus Services Library and Transport Hub - Item 238",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0239",
    code: "NEC-CAMPUSSERVICES-0239",
    title: "Campus Services Library and Transport Hub - Item 239",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0240",
    code: "NEC-CAMPUSSERVICES-0240",
    title: "Campus Services Library and Transport Hub - Item 240",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0241",
    code: "NEC-CAMPUSSERVICES-0241",
    title: "Campus Services Library and Transport Hub - Item 241",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0242",
    code: "NEC-CAMPUSSERVICES-0242",
    title: "Campus Services Library and Transport Hub - Item 242",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0243",
    code: "NEC-CAMPUSSERVICES-0243",
    title: "Campus Services Library and Transport Hub - Item 243",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0244",
    code: "NEC-CAMPUSSERVICES-0244",
    title: "Campus Services Library and Transport Hub - Item 244",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0245",
    code: "NEC-CAMPUSSERVICES-0245",
    title: "Campus Services Library and Transport Hub - Item 245",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0246",
    code: "NEC-CAMPUSSERVICES-0246",
    title: "Campus Services Library and Transport Hub - Item 246",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0247",
    code: "NEC-CAMPUSSERVICES-0247",
    title: "Campus Services Library and Transport Hub - Item 247",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0248",
    code: "NEC-CAMPUSSERVICES-0248",
    title: "Campus Services Library and Transport Hub - Item 248",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0249",
    code: "NEC-CAMPUSSERVICES-0249",
    title: "Campus Services Library and Transport Hub - Item 249",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0250",
    code: "NEC-CAMPUSSERVICES-0250",
    title: "Campus Services Library and Transport Hub - Item 250",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0251",
    code: "NEC-CAMPUSSERVICES-0251",
    title: "Campus Services Library and Transport Hub - Item 251",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0252",
    code: "NEC-CAMPUSSERVICES-0252",
    title: "Campus Services Library and Transport Hub - Item 252",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0253",
    code: "NEC-CAMPUSSERVICES-0253",
    title: "Campus Services Library and Transport Hub - Item 253",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0254",
    code: "NEC-CAMPUSSERVICES-0254",
    title: "Campus Services Library and Transport Hub - Item 254",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0255",
    code: "NEC-CAMPUSSERVICES-0255",
    title: "Campus Services Library and Transport Hub - Item 255",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0256",
    code: "NEC-CAMPUSSERVICES-0256",
    title: "Campus Services Library and Transport Hub - Item 256",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0257",
    code: "NEC-CAMPUSSERVICES-0257",
    title: "Campus Services Library and Transport Hub - Item 257",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0258",
    code: "NEC-CAMPUSSERVICES-0258",
    title: "Campus Services Library and Transport Hub - Item 258",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0259",
    code: "NEC-CAMPUSSERVICES-0259",
    title: "Campus Services Library and Transport Hub - Item 259",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0260",
    code: "NEC-CAMPUSSERVICES-0260",
    title: "Campus Services Library and Transport Hub - Item 260",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0261",
    code: "NEC-CAMPUSSERVICES-0261",
    title: "Campus Services Library and Transport Hub - Item 261",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0262",
    code: "NEC-CAMPUSSERVICES-0262",
    title: "Campus Services Library and Transport Hub - Item 262",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0263",
    code: "NEC-CAMPUSSERVICES-0263",
    title: "Campus Services Library and Transport Hub - Item 263",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0264",
    code: "NEC-CAMPUSSERVICES-0264",
    title: "Campus Services Library and Transport Hub - Item 264",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0265",
    code: "NEC-CAMPUSSERVICES-0265",
    title: "Campus Services Library and Transport Hub - Item 265",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0266",
    code: "NEC-CAMPUSSERVICES-0266",
    title: "Campus Services Library and Transport Hub - Item 266",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0267",
    code: "NEC-CAMPUSSERVICES-0267",
    title: "Campus Services Library and Transport Hub - Item 267",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0268",
    code: "NEC-CAMPUSSERVICES-0268",
    title: "Campus Services Library and Transport Hub - Item 268",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0269",
    code: "NEC-CAMPUSSERVICES-0269",
    title: "Campus Services Library and Transport Hub - Item 269",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0270",
    code: "NEC-CAMPUSSERVICES-0270",
    title: "Campus Services Library and Transport Hub - Item 270",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0271",
    code: "NEC-CAMPUSSERVICES-0271",
    title: "Campus Services Library and Transport Hub - Item 271",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0272",
    code: "NEC-CAMPUSSERVICES-0272",
    title: "Campus Services Library and Transport Hub - Item 272",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0273",
    code: "NEC-CAMPUSSERVICES-0273",
    title: "Campus Services Library and Transport Hub - Item 273",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0274",
    code: "NEC-CAMPUSSERVICES-0274",
    title: "Campus Services Library and Transport Hub - Item 274",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0275",
    code: "NEC-CAMPUSSERVICES-0275",
    title: "Campus Services Library and Transport Hub - Item 275",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0276",
    code: "NEC-CAMPUSSERVICES-0276",
    title: "Campus Services Library and Transport Hub - Item 276",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0277",
    code: "NEC-CAMPUSSERVICES-0277",
    title: "Campus Services Library and Transport Hub - Item 277",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0278",
    code: "NEC-CAMPUSSERVICES-0278",
    title: "Campus Services Library and Transport Hub - Item 278",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0279",
    code: "NEC-CAMPUSSERVICES-0279",
    title: "Campus Services Library and Transport Hub - Item 279",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0280",
    code: "NEC-CAMPUSSERVICES-0280",
    title: "Campus Services Library and Transport Hub - Item 280",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0281",
    code: "NEC-CAMPUSSERVICES-0281",
    title: "Campus Services Library and Transport Hub - Item 281",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0282",
    code: "NEC-CAMPUSSERVICES-0282",
    title: "Campus Services Library and Transport Hub - Item 282",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0283",
    code: "NEC-CAMPUSSERVICES-0283",
    title: "Campus Services Library and Transport Hub - Item 283",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0284",
    code: "NEC-CAMPUSSERVICES-0284",
    title: "Campus Services Library and Transport Hub - Item 284",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0285",
    code: "NEC-CAMPUSSERVICES-0285",
    title: "Campus Services Library and Transport Hub - Item 285",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0286",
    code: "NEC-CAMPUSSERVICES-0286",
    title: "Campus Services Library and Transport Hub - Item 286",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0287",
    code: "NEC-CAMPUSSERVICES-0287",
    title: "Campus Services Library and Transport Hub - Item 287",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0288",
    code: "NEC-CAMPUSSERVICES-0288",
    title: "Campus Services Library and Transport Hub - Item 288",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0289",
    code: "NEC-CAMPUSSERVICES-0289",
    title: "Campus Services Library and Transport Hub - Item 289",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0290",
    code: "NEC-CAMPUSSERVICES-0290",
    title: "Campus Services Library and Transport Hub - Item 290",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0291",
    code: "NEC-CAMPUSSERVICES-0291",
    title: "Campus Services Library and Transport Hub - Item 291",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0292",
    code: "NEC-CAMPUSSERVICES-0292",
    title: "Campus Services Library and Transport Hub - Item 292",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0293",
    code: "NEC-CAMPUSSERVICES-0293",
    title: "Campus Services Library and Transport Hub - Item 293",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0294",
    code: "NEC-CAMPUSSERVICES-0294",
    title: "Campus Services Library and Transport Hub - Item 294",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0295",
    code: "NEC-CAMPUSSERVICES-0295",
    title: "Campus Services Library and Transport Hub - Item 295",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0296",
    code: "NEC-CAMPUSSERVICES-0296",
    title: "Campus Services Library and Transport Hub - Item 296",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0297",
    code: "NEC-CAMPUSSERVICES-0297",
    title: "Campus Services Library and Transport Hub - Item 297",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0298",
    code: "NEC-CAMPUSSERVICES-0298",
    title: "Campus Services Library and Transport Hub - Item 298",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0299",
    code: "NEC-CAMPUSSERVICES-0299",
    title: "Campus Services Library and Transport Hub - Item 299",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0300",
    code: "NEC-CAMPUSSERVICES-0300",
    title: "Campus Services Library and Transport Hub - Item 300",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0301",
    code: "NEC-CAMPUSSERVICES-0301",
    title: "Campus Services Library and Transport Hub - Item 301",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0302",
    code: "NEC-CAMPUSSERVICES-0302",
    title: "Campus Services Library and Transport Hub - Item 302",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0303",
    code: "NEC-CAMPUSSERVICES-0303",
    title: "Campus Services Library and Transport Hub - Item 303",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0304",
    code: "NEC-CAMPUSSERVICES-0304",
    title: "Campus Services Library and Transport Hub - Item 304",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0305",
    code: "NEC-CAMPUSSERVICES-0305",
    title: "Campus Services Library and Transport Hub - Item 305",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0306",
    code: "NEC-CAMPUSSERVICES-0306",
    title: "Campus Services Library and Transport Hub - Item 306",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0307",
    code: "NEC-CAMPUSSERVICES-0307",
    title: "Campus Services Library and Transport Hub - Item 307",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0308",
    code: "NEC-CAMPUSSERVICES-0308",
    title: "Campus Services Library and Transport Hub - Item 308",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0309",
    code: "NEC-CAMPUSSERVICES-0309",
    title: "Campus Services Library and Transport Hub - Item 309",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0310",
    code: "NEC-CAMPUSSERVICES-0310",
    title: "Campus Services Library and Transport Hub - Item 310",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0311",
    code: "NEC-CAMPUSSERVICES-0311",
    title: "Campus Services Library and Transport Hub - Item 311",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0312",
    code: "NEC-CAMPUSSERVICES-0312",
    title: "Campus Services Library and Transport Hub - Item 312",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0313",
    code: "NEC-CAMPUSSERVICES-0313",
    title: "Campus Services Library and Transport Hub - Item 313",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0314",
    code: "NEC-CAMPUSSERVICES-0314",
    title: "Campus Services Library and Transport Hub - Item 314",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0315",
    code: "NEC-CAMPUSSERVICES-0315",
    title: "Campus Services Library and Transport Hub - Item 315",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0316",
    code: "NEC-CAMPUSSERVICES-0316",
    title: "Campus Services Library and Transport Hub - Item 316",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0317",
    code: "NEC-CAMPUSSERVICES-0317",
    title: "Campus Services Library and Transport Hub - Item 317",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0318",
    code: "NEC-CAMPUSSERVICES-0318",
    title: "Campus Services Library and Transport Hub - Item 318",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0319",
    code: "NEC-CAMPUSSERVICES-0319",
    title: "Campus Services Library and Transport Hub - Item 319",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0320",
    code: "NEC-CAMPUSSERVICES-0320",
    title: "Campus Services Library and Transport Hub - Item 320",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0321",
    code: "NEC-CAMPUSSERVICES-0321",
    title: "Campus Services Library and Transport Hub - Item 321",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0322",
    code: "NEC-CAMPUSSERVICES-0322",
    title: "Campus Services Library and Transport Hub - Item 322",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0323",
    code: "NEC-CAMPUSSERVICES-0323",
    title: "Campus Services Library and Transport Hub - Item 323",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0324",
    code: "NEC-CAMPUSSERVICES-0324",
    title: "Campus Services Library and Transport Hub - Item 324",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0325",
    code: "NEC-CAMPUSSERVICES-0325",
    title: "Campus Services Library and Transport Hub - Item 325",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0326",
    code: "NEC-CAMPUSSERVICES-0326",
    title: "Campus Services Library and Transport Hub - Item 326",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0327",
    code: "NEC-CAMPUSSERVICES-0327",
    title: "Campus Services Library and Transport Hub - Item 327",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0328",
    code: "NEC-CAMPUSSERVICES-0328",
    title: "Campus Services Library and Transport Hub - Item 328",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0329",
    code: "NEC-CAMPUSSERVICES-0329",
    title: "Campus Services Library and Transport Hub - Item 329",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0330",
    code: "NEC-CAMPUSSERVICES-0330",
    title: "Campus Services Library and Transport Hub - Item 330",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0331",
    code: "NEC-CAMPUSSERVICES-0331",
    title: "Campus Services Library and Transport Hub - Item 331",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0332",
    code: "NEC-CAMPUSSERVICES-0332",
    title: "Campus Services Library and Transport Hub - Item 332",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0333",
    code: "NEC-CAMPUSSERVICES-0333",
    title: "Campus Services Library and Transport Hub - Item 333",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0334",
    code: "NEC-CAMPUSSERVICES-0334",
    title: "Campus Services Library and Transport Hub - Item 334",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0335",
    code: "NEC-CAMPUSSERVICES-0335",
    title: "Campus Services Library and Transport Hub - Item 335",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0336",
    code: "NEC-CAMPUSSERVICES-0336",
    title: "Campus Services Library and Transport Hub - Item 336",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0337",
    code: "NEC-CAMPUSSERVICES-0337",
    title: "Campus Services Library and Transport Hub - Item 337",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0338",
    code: "NEC-CAMPUSSERVICES-0338",
    title: "Campus Services Library and Transport Hub - Item 338",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0339",
    code: "NEC-CAMPUSSERVICES-0339",
    title: "Campus Services Library and Transport Hub - Item 339",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0340",
    code: "NEC-CAMPUSSERVICES-0340",
    title: "Campus Services Library and Transport Hub - Item 340",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0341",
    code: "NEC-CAMPUSSERVICES-0341",
    title: "Campus Services Library and Transport Hub - Item 341",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0342",
    code: "NEC-CAMPUSSERVICES-0342",
    title: "Campus Services Library and Transport Hub - Item 342",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0343",
    code: "NEC-CAMPUSSERVICES-0343",
    title: "Campus Services Library and Transport Hub - Item 343",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0344",
    code: "NEC-CAMPUSSERVICES-0344",
    title: "Campus Services Library and Transport Hub - Item 344",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0345",
    code: "NEC-CAMPUSSERVICES-0345",
    title: "Campus Services Library and Transport Hub - Item 345",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0346",
    code: "NEC-CAMPUSSERVICES-0346",
    title: "Campus Services Library and Transport Hub - Item 346",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0347",
    code: "NEC-CAMPUSSERVICES-0347",
    title: "Campus Services Library and Transport Hub - Item 347",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0348",
    code: "NEC-CAMPUSSERVICES-0348",
    title: "Campus Services Library and Transport Hub - Item 348",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0349",
    code: "NEC-CAMPUSSERVICES-0349",
    title: "Campus Services Library and Transport Hub - Item 349",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0350",
    code: "NEC-CAMPUSSERVICES-0350",
    title: "Campus Services Library and Transport Hub - Item 350",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0351",
    code: "NEC-CAMPUSSERVICES-0351",
    title: "Campus Services Library and Transport Hub - Item 351",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0352",
    code: "NEC-CAMPUSSERVICES-0352",
    title: "Campus Services Library and Transport Hub - Item 352",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0353",
    code: "NEC-CAMPUSSERVICES-0353",
    title: "Campus Services Library and Transport Hub - Item 353",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0354",
    code: "NEC-CAMPUSSERVICES-0354",
    title: "Campus Services Library and Transport Hub - Item 354",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0355",
    code: "NEC-CAMPUSSERVICES-0355",
    title: "Campus Services Library and Transport Hub - Item 355",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0356",
    code: "NEC-CAMPUSSERVICES-0356",
    title: "Campus Services Library and Transport Hub - Item 356",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0357",
    code: "NEC-CAMPUSSERVICES-0357",
    title: "Campus Services Library and Transport Hub - Item 357",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0358",
    code: "NEC-CAMPUSSERVICES-0358",
    title: "Campus Services Library and Transport Hub - Item 358",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0359",
    code: "NEC-CAMPUSSERVICES-0359",
    title: "Campus Services Library and Transport Hub - Item 359",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0360",
    code: "NEC-CAMPUSSERVICES-0360",
    title: "Campus Services Library and Transport Hub - Item 360",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0361",
    code: "NEC-CAMPUSSERVICES-0361",
    title: "Campus Services Library and Transport Hub - Item 361",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0362",
    code: "NEC-CAMPUSSERVICES-0362",
    title: "Campus Services Library and Transport Hub - Item 362",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0363",
    code: "NEC-CAMPUSSERVICES-0363",
    title: "Campus Services Library and Transport Hub - Item 363",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0364",
    code: "NEC-CAMPUSSERVICES-0364",
    title: "Campus Services Library and Transport Hub - Item 364",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0365",
    code: "NEC-CAMPUSSERVICES-0365",
    title: "Campus Services Library and Transport Hub - Item 365",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0366",
    code: "NEC-CAMPUSSERVICES-0366",
    title: "Campus Services Library and Transport Hub - Item 366",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0367",
    code: "NEC-CAMPUSSERVICES-0367",
    title: "Campus Services Library and Transport Hub - Item 367",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0368",
    code: "NEC-CAMPUSSERVICES-0368",
    title: "Campus Services Library and Transport Hub - Item 368",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0369",
    code: "NEC-CAMPUSSERVICES-0369",
    title: "Campus Services Library and Transport Hub - Item 369",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0370",
    code: "NEC-CAMPUSSERVICES-0370",
    title: "Campus Services Library and Transport Hub - Item 370",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0371",
    code: "NEC-CAMPUSSERVICES-0371",
    title: "Campus Services Library and Transport Hub - Item 371",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0372",
    code: "NEC-CAMPUSSERVICES-0372",
    title: "Campus Services Library and Transport Hub - Item 372",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0373",
    code: "NEC-CAMPUSSERVICES-0373",
    title: "Campus Services Library and Transport Hub - Item 373",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0374",
    code: "NEC-CAMPUSSERVICES-0374",
    title: "Campus Services Library and Transport Hub - Item 374",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0375",
    code: "NEC-CAMPUSSERVICES-0375",
    title: "Campus Services Library and Transport Hub - Item 375",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0376",
    code: "NEC-CAMPUSSERVICES-0376",
    title: "Campus Services Library and Transport Hub - Item 376",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0377",
    code: "NEC-CAMPUSSERVICES-0377",
    title: "Campus Services Library and Transport Hub - Item 377",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0378",
    code: "NEC-CAMPUSSERVICES-0378",
    title: "Campus Services Library and Transport Hub - Item 378",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0379",
    code: "NEC-CAMPUSSERVICES-0379",
    title: "Campus Services Library and Transport Hub - Item 379",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0380",
    code: "NEC-CAMPUSSERVICES-0380",
    title: "Campus Services Library and Transport Hub - Item 380",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0381",
    code: "NEC-CAMPUSSERVICES-0381",
    title: "Campus Services Library and Transport Hub - Item 381",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0382",
    code: "NEC-CAMPUSSERVICES-0382",
    title: "Campus Services Library and Transport Hub - Item 382",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0383",
    code: "NEC-CAMPUSSERVICES-0383",
    title: "Campus Services Library and Transport Hub - Item 383",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0384",
    code: "NEC-CAMPUSSERVICES-0384",
    title: "Campus Services Library and Transport Hub - Item 384",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0385",
    code: "NEC-CAMPUSSERVICES-0385",
    title: "Campus Services Library and Transport Hub - Item 385",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0386",
    code: "NEC-CAMPUSSERVICES-0386",
    title: "Campus Services Library and Transport Hub - Item 386",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0387",
    code: "NEC-CAMPUSSERVICES-0387",
    title: "Campus Services Library and Transport Hub - Item 387",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0388",
    code: "NEC-CAMPUSSERVICES-0388",
    title: "Campus Services Library and Transport Hub - Item 388",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0389",
    code: "NEC-CAMPUSSERVICES-0389",
    title: "Campus Services Library and Transport Hub - Item 389",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0390",
    code: "NEC-CAMPUSSERVICES-0390",
    title: "Campus Services Library and Transport Hub - Item 390",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0391",
    code: "NEC-CAMPUSSERVICES-0391",
    title: "Campus Services Library and Transport Hub - Item 391",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0392",
    code: "NEC-CAMPUSSERVICES-0392",
    title: "Campus Services Library and Transport Hub - Item 392",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0393",
    code: "NEC-CAMPUSSERVICES-0393",
    title: "Campus Services Library and Transport Hub - Item 393",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0394",
    code: "NEC-CAMPUSSERVICES-0394",
    title: "Campus Services Library and Transport Hub - Item 394",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0395",
    code: "NEC-CAMPUSSERVICES-0395",
    title: "Campus Services Library and Transport Hub - Item 395",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0396",
    code: "NEC-CAMPUSSERVICES-0396",
    title: "Campus Services Library and Transport Hub - Item 396",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0397",
    code: "NEC-CAMPUSSERVICES-0397",
    title: "Campus Services Library and Transport Hub - Item 397",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0398",
    code: "NEC-CAMPUSSERVICES-0398",
    title: "Campus Services Library and Transport Hub - Item 398",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0399",
    code: "NEC-CAMPUSSERVICES-0399",
    title: "Campus Services Library and Transport Hub - Item 399",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0400",
    code: "NEC-CAMPUSSERVICES-0400",
    title: "Campus Services Library and Transport Hub - Item 400",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0401",
    code: "NEC-CAMPUSSERVICES-0401",
    title: "Campus Services Library and Transport Hub - Item 401",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0402",
    code: "NEC-CAMPUSSERVICES-0402",
    title: "Campus Services Library and Transport Hub - Item 402",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0403",
    code: "NEC-CAMPUSSERVICES-0403",
    title: "Campus Services Library and Transport Hub - Item 403",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0404",
    code: "NEC-CAMPUSSERVICES-0404",
    title: "Campus Services Library and Transport Hub - Item 404",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0405",
    code: "NEC-CAMPUSSERVICES-0405",
    title: "Campus Services Library and Transport Hub - Item 405",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0406",
    code: "NEC-CAMPUSSERVICES-0406",
    title: "Campus Services Library and Transport Hub - Item 406",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0407",
    code: "NEC-CAMPUSSERVICES-0407",
    title: "Campus Services Library and Transport Hub - Item 407",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0408",
    code: "NEC-CAMPUSSERVICES-0408",
    title: "Campus Services Library and Transport Hub - Item 408",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0409",
    code: "NEC-CAMPUSSERVICES-0409",
    title: "Campus Services Library and Transport Hub - Item 409",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0410",
    code: "NEC-CAMPUSSERVICES-0410",
    title: "Campus Services Library and Transport Hub - Item 410",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0411",
    code: "NEC-CAMPUSSERVICES-0411",
    title: "Campus Services Library and Transport Hub - Item 411",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0412",
    code: "NEC-CAMPUSSERVICES-0412",
    title: "Campus Services Library and Transport Hub - Item 412",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0413",
    code: "NEC-CAMPUSSERVICES-0413",
    title: "Campus Services Library and Transport Hub - Item 413",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0414",
    code: "NEC-CAMPUSSERVICES-0414",
    title: "Campus Services Library and Transport Hub - Item 414",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0415",
    code: "NEC-CAMPUSSERVICES-0415",
    title: "Campus Services Library and Transport Hub - Item 415",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0416",
    code: "NEC-CAMPUSSERVICES-0416",
    title: "Campus Services Library and Transport Hub - Item 416",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0417",
    code: "NEC-CAMPUSSERVICES-0417",
    title: "Campus Services Library and Transport Hub - Item 417",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0418",
    code: "NEC-CAMPUSSERVICES-0418",
    title: "Campus Services Library and Transport Hub - Item 418",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0419",
    code: "NEC-CAMPUSSERVICES-0419",
    title: "Campus Services Library and Transport Hub - Item 419",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0420",
    code: "NEC-CAMPUSSERVICES-0420",
    title: "Campus Services Library and Transport Hub - Item 420",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0421",
    code: "NEC-CAMPUSSERVICES-0421",
    title: "Campus Services Library and Transport Hub - Item 421",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0422",
    code: "NEC-CAMPUSSERVICES-0422",
    title: "Campus Services Library and Transport Hub - Item 422",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0423",
    code: "NEC-CAMPUSSERVICES-0423",
    title: "Campus Services Library and Transport Hub - Item 423",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0424",
    code: "NEC-CAMPUSSERVICES-0424",
    title: "Campus Services Library and Transport Hub - Item 424",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0425",
    code: "NEC-CAMPUSSERVICES-0425",
    title: "Campus Services Library and Transport Hub - Item 425",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0426",
    code: "NEC-CAMPUSSERVICES-0426",
    title: "Campus Services Library and Transport Hub - Item 426",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0427",
    code: "NEC-CAMPUSSERVICES-0427",
    title: "Campus Services Library and Transport Hub - Item 427",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0428",
    code: "NEC-CAMPUSSERVICES-0428",
    title: "Campus Services Library and Transport Hub - Item 428",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0429",
    code: "NEC-CAMPUSSERVICES-0429",
    title: "Campus Services Library and Transport Hub - Item 429",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0430",
    code: "NEC-CAMPUSSERVICES-0430",
    title: "Campus Services Library and Transport Hub - Item 430",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0431",
    code: "NEC-CAMPUSSERVICES-0431",
    title: "Campus Services Library and Transport Hub - Item 431",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0432",
    code: "NEC-CAMPUSSERVICES-0432",
    title: "Campus Services Library and Transport Hub - Item 432",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0433",
    code: "NEC-CAMPUSSERVICES-0433",
    title: "Campus Services Library and Transport Hub - Item 433",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0434",
    code: "NEC-CAMPUSSERVICES-0434",
    title: "Campus Services Library and Transport Hub - Item 434",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0435",
    code: "NEC-CAMPUSSERVICES-0435",
    title: "Campus Services Library and Transport Hub - Item 435",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0436",
    code: "NEC-CAMPUSSERVICES-0436",
    title: "Campus Services Library and Transport Hub - Item 436",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0437",
    code: "NEC-CAMPUSSERVICES-0437",
    title: "Campus Services Library and Transport Hub - Item 437",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0438",
    code: "NEC-CAMPUSSERVICES-0438",
    title: "Campus Services Library and Transport Hub - Item 438",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0439",
    code: "NEC-CAMPUSSERVICES-0439",
    title: "Campus Services Library and Transport Hub - Item 439",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0440",
    code: "NEC-CAMPUSSERVICES-0440",
    title: "Campus Services Library and Transport Hub - Item 440",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0441",
    code: "NEC-CAMPUSSERVICES-0441",
    title: "Campus Services Library and Transport Hub - Item 441",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0442",
    code: "NEC-CAMPUSSERVICES-0442",
    title: "Campus Services Library and Transport Hub - Item 442",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0443",
    code: "NEC-CAMPUSSERVICES-0443",
    title: "Campus Services Library and Transport Hub - Item 443",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0444",
    code: "NEC-CAMPUSSERVICES-0444",
    title: "Campus Services Library and Transport Hub - Item 444",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0445",
    code: "NEC-CAMPUSSERVICES-0445",
    title: "Campus Services Library and Transport Hub - Item 445",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0446",
    code: "NEC-CAMPUSSERVICES-0446",
    title: "Campus Services Library and Transport Hub - Item 446",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0447",
    code: "NEC-CAMPUSSERVICES-0447",
    title: "Campus Services Library and Transport Hub - Item 447",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0448",
    code: "NEC-CAMPUSSERVICES-0448",
    title: "Campus Services Library and Transport Hub - Item 448",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0449",
    code: "NEC-CAMPUSSERVICES-0449",
    title: "Campus Services Library and Transport Hub - Item 449",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0450",
    code: "NEC-CAMPUSSERVICES-0450",
    title: "Campus Services Library and Transport Hub - Item 450",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0451",
    code: "NEC-CAMPUSSERVICES-0451",
    title: "Campus Services Library and Transport Hub - Item 451",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0452",
    code: "NEC-CAMPUSSERVICES-0452",
    title: "Campus Services Library and Transport Hub - Item 452",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0453",
    code: "NEC-CAMPUSSERVICES-0453",
    title: "Campus Services Library and Transport Hub - Item 453",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0454",
    code: "NEC-CAMPUSSERVICES-0454",
    title: "Campus Services Library and Transport Hub - Item 454",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0455",
    code: "NEC-CAMPUSSERVICES-0455",
    title: "Campus Services Library and Transport Hub - Item 455",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0456",
    code: "NEC-CAMPUSSERVICES-0456",
    title: "Campus Services Library and Transport Hub - Item 456",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0457",
    code: "NEC-CAMPUSSERVICES-0457",
    title: "Campus Services Library and Transport Hub - Item 457",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0458",
    code: "NEC-CAMPUSSERVICES-0458",
    title: "Campus Services Library and Transport Hub - Item 458",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0459",
    code: "NEC-CAMPUSSERVICES-0459",
    title: "Campus Services Library and Transport Hub - Item 459",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0460",
    code: "NEC-CAMPUSSERVICES-0460",
    title: "Campus Services Library and Transport Hub - Item 460",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0461",
    code: "NEC-CAMPUSSERVICES-0461",
    title: "Campus Services Library and Transport Hub - Item 461",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0462",
    code: "NEC-CAMPUSSERVICES-0462",
    title: "Campus Services Library and Transport Hub - Item 462",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0463",
    code: "NEC-CAMPUSSERVICES-0463",
    title: "Campus Services Library and Transport Hub - Item 463",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0464",
    code: "NEC-CAMPUSSERVICES-0464",
    title: "Campus Services Library and Transport Hub - Item 464",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0465",
    code: "NEC-CAMPUSSERVICES-0465",
    title: "Campus Services Library and Transport Hub - Item 465",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0466",
    code: "NEC-CAMPUSSERVICES-0466",
    title: "Campus Services Library and Transport Hub - Item 466",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0467",
    code: "NEC-CAMPUSSERVICES-0467",
    title: "Campus Services Library and Transport Hub - Item 467",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0468",
    code: "NEC-CAMPUSSERVICES-0468",
    title: "Campus Services Library and Transport Hub - Item 468",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0469",
    code: "NEC-CAMPUSSERVICES-0469",
    title: "Campus Services Library and Transport Hub - Item 469",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0470",
    code: "NEC-CAMPUSSERVICES-0470",
    title: "Campus Services Library and Transport Hub - Item 470",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0471",
    code: "NEC-CAMPUSSERVICES-0471",
    title: "Campus Services Library and Transport Hub - Item 471",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0472",
    code: "NEC-CAMPUSSERVICES-0472",
    title: "Campus Services Library and Transport Hub - Item 472",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0473",
    code: "NEC-CAMPUSSERVICES-0473",
    title: "Campus Services Library and Transport Hub - Item 473",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0474",
    code: "NEC-CAMPUSSERVICES-0474",
    title: "Campus Services Library and Transport Hub - Item 474",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0475",
    code: "NEC-CAMPUSSERVICES-0475",
    title: "Campus Services Library and Transport Hub - Item 475",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0476",
    code: "NEC-CAMPUSSERVICES-0476",
    title: "Campus Services Library and Transport Hub - Item 476",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0477",
    code: "NEC-CAMPUSSERVICES-0477",
    title: "Campus Services Library and Transport Hub - Item 477",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0478",
    code: "NEC-CAMPUSSERVICES-0478",
    title: "Campus Services Library and Transport Hub - Item 478",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0479",
    code: "NEC-CAMPUSSERVICES-0479",
    title: "Campus Services Library and Transport Hub - Item 479",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0480",
    code: "NEC-CAMPUSSERVICES-0480",
    title: "Campus Services Library and Transport Hub - Item 480",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0481",
    code: "NEC-CAMPUSSERVICES-0481",
    title: "Campus Services Library and Transport Hub - Item 481",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0482",
    code: "NEC-CAMPUSSERVICES-0482",
    title: "Campus Services Library and Transport Hub - Item 482",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0483",
    code: "NEC-CAMPUSSERVICES-0483",
    title: "Campus Services Library and Transport Hub - Item 483",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0484",
    code: "NEC-CAMPUSSERVICES-0484",
    title: "Campus Services Library and Transport Hub - Item 484",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0485",
    code: "NEC-CAMPUSSERVICES-0485",
    title: "Campus Services Library and Transport Hub - Item 485",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0486",
    code: "NEC-CAMPUSSERVICES-0486",
    title: "Campus Services Library and Transport Hub - Item 486",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0487",
    code: "NEC-CAMPUSSERVICES-0487",
    title: "Campus Services Library and Transport Hub - Item 487",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0488",
    code: "NEC-CAMPUSSERVICES-0488",
    title: "Campus Services Library and Transport Hub - Item 488",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0489",
    code: "NEC-CAMPUSSERVICES-0489",
    title: "Campus Services Library and Transport Hub - Item 489",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0490",
    code: "NEC-CAMPUSSERVICES-0490",
    title: "Campus Services Library and Transport Hub - Item 490",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0491",
    code: "NEC-CAMPUSSERVICES-0491",
    title: "Campus Services Library and Transport Hub - Item 491",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0492",
    code: "NEC-CAMPUSSERVICES-0492",
    title: "Campus Services Library and Transport Hub - Item 492",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0493",
    code: "NEC-CAMPUSSERVICES-0493",
    title: "Campus Services Library and Transport Hub - Item 493",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0494",
    code: "NEC-CAMPUSSERVICES-0494",
    title: "Campus Services Library and Transport Hub - Item 494",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0495",
    code: "NEC-CAMPUSSERVICES-0495",
    title: "Campus Services Library and Transport Hub - Item 495",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0496",
    code: "NEC-CAMPUSSERVICES-0496",
    title: "Campus Services Library and Transport Hub - Item 496",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0497",
    code: "NEC-CAMPUSSERVICES-0497",
    title: "Campus Services Library and Transport Hub - Item 497",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0498",
    code: "NEC-CAMPUSSERVICES-0498",
    title: "Campus Services Library and Transport Hub - Item 498",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0499",
    code: "NEC-CAMPUSSERVICES-0499",
    title: "Campus Services Library and Transport Hub - Item 499",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0500",
    code: "NEC-CAMPUSSERVICES-0500",
    title: "Campus Services Library and Transport Hub - Item 500",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0501",
    code: "NEC-CAMPUSSERVICES-0501",
    title: "Campus Services Library and Transport Hub - Item 501",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0502",
    code: "NEC-CAMPUSSERVICES-0502",
    title: "Campus Services Library and Transport Hub - Item 502",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0503",
    code: "NEC-CAMPUSSERVICES-0503",
    title: "Campus Services Library and Transport Hub - Item 503",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0504",
    code: "NEC-CAMPUSSERVICES-0504",
    title: "Campus Services Library and Transport Hub - Item 504",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0505",
    code: "NEC-CAMPUSSERVICES-0505",
    title: "Campus Services Library and Transport Hub - Item 505",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0506",
    code: "NEC-CAMPUSSERVICES-0506",
    title: "Campus Services Library and Transport Hub - Item 506",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0507",
    code: "NEC-CAMPUSSERVICES-0507",
    title: "Campus Services Library and Transport Hub - Item 507",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0508",
    code: "NEC-CAMPUSSERVICES-0508",
    title: "Campus Services Library and Transport Hub - Item 508",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0509",
    code: "NEC-CAMPUSSERVICES-0509",
    title: "Campus Services Library and Transport Hub - Item 509",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0510",
    code: "NEC-CAMPUSSERVICES-0510",
    title: "Campus Services Library and Transport Hub - Item 510",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0511",
    code: "NEC-CAMPUSSERVICES-0511",
    title: "Campus Services Library and Transport Hub - Item 511",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0512",
    code: "NEC-CAMPUSSERVICES-0512",
    title: "Campus Services Library and Transport Hub - Item 512",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0513",
    code: "NEC-CAMPUSSERVICES-0513",
    title: "Campus Services Library and Transport Hub - Item 513",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0514",
    code: "NEC-CAMPUSSERVICES-0514",
    title: "Campus Services Library and Transport Hub - Item 514",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0515",
    code: "NEC-CAMPUSSERVICES-0515",
    title: "Campus Services Library and Transport Hub - Item 515",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0516",
    code: "NEC-CAMPUSSERVICES-0516",
    title: "Campus Services Library and Transport Hub - Item 516",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0517",
    code: "NEC-CAMPUSSERVICES-0517",
    title: "Campus Services Library and Transport Hub - Item 517",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0518",
    code: "NEC-CAMPUSSERVICES-0518",
    title: "Campus Services Library and Transport Hub - Item 518",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0519",
    code: "NEC-CAMPUSSERVICES-0519",
    title: "Campus Services Library and Transport Hub - Item 519",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0520",
    code: "NEC-CAMPUSSERVICES-0520",
    title: "Campus Services Library and Transport Hub - Item 520",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0521",
    code: "NEC-CAMPUSSERVICES-0521",
    title: "Campus Services Library and Transport Hub - Item 521",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0522",
    code: "NEC-CAMPUSSERVICES-0522",
    title: "Campus Services Library and Transport Hub - Item 522",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0523",
    code: "NEC-CAMPUSSERVICES-0523",
    title: "Campus Services Library and Transport Hub - Item 523",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0524",
    code: "NEC-CAMPUSSERVICES-0524",
    title: "Campus Services Library and Transport Hub - Item 524",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0525",
    code: "NEC-CAMPUSSERVICES-0525",
    title: "Campus Services Library and Transport Hub - Item 525",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0526",
    code: "NEC-CAMPUSSERVICES-0526",
    title: "Campus Services Library and Transport Hub - Item 526",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0527",
    code: "NEC-CAMPUSSERVICES-0527",
    title: "Campus Services Library and Transport Hub - Item 527",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0528",
    code: "NEC-CAMPUSSERVICES-0528",
    title: "Campus Services Library and Transport Hub - Item 528",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0529",
    code: "NEC-CAMPUSSERVICES-0529",
    title: "Campus Services Library and Transport Hub - Item 529",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0530",
    code: "NEC-CAMPUSSERVICES-0530",
    title: "Campus Services Library and Transport Hub - Item 530",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0531",
    code: "NEC-CAMPUSSERVICES-0531",
    title: "Campus Services Library and Transport Hub - Item 531",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0532",
    code: "NEC-CAMPUSSERVICES-0532",
    title: "Campus Services Library and Transport Hub - Item 532",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0533",
    code: "NEC-CAMPUSSERVICES-0533",
    title: "Campus Services Library and Transport Hub - Item 533",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0534",
    code: "NEC-CAMPUSSERVICES-0534",
    title: "Campus Services Library and Transport Hub - Item 534",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0535",
    code: "NEC-CAMPUSSERVICES-0535",
    title: "Campus Services Library and Transport Hub - Item 535",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0536",
    code: "NEC-CAMPUSSERVICES-0536",
    title: "Campus Services Library and Transport Hub - Item 536",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0537",
    code: "NEC-CAMPUSSERVICES-0537",
    title: "Campus Services Library and Transport Hub - Item 537",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0538",
    code: "NEC-CAMPUSSERVICES-0538",
    title: "Campus Services Library and Transport Hub - Item 538",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0539",
    code: "NEC-CAMPUSSERVICES-0539",
    title: "Campus Services Library and Transport Hub - Item 539",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0540",
    code: "NEC-CAMPUSSERVICES-0540",
    title: "Campus Services Library and Transport Hub - Item 540",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0541",
    code: "NEC-CAMPUSSERVICES-0541",
    title: "Campus Services Library and Transport Hub - Item 541",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0542",
    code: "NEC-CAMPUSSERVICES-0542",
    title: "Campus Services Library and Transport Hub - Item 542",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0543",
    code: "NEC-CAMPUSSERVICES-0543",
    title: "Campus Services Library and Transport Hub - Item 543",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0544",
    code: "NEC-CAMPUSSERVICES-0544",
    title: "Campus Services Library and Transport Hub - Item 544",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0545",
    code: "NEC-CAMPUSSERVICES-0545",
    title: "Campus Services Library and Transport Hub - Item 545",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0546",
    code: "NEC-CAMPUSSERVICES-0546",
    title: "Campus Services Library and Transport Hub - Item 546",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0547",
    code: "NEC-CAMPUSSERVICES-0547",
    title: "Campus Services Library and Transport Hub - Item 547",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0548",
    code: "NEC-CAMPUSSERVICES-0548",
    title: "Campus Services Library and Transport Hub - Item 548",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0549",
    code: "NEC-CAMPUSSERVICES-0549",
    title: "Campus Services Library and Transport Hub - Item 549",
    category: "CAMPUSSERVICES_CORE",
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
    id: "campusservices-0550",
    code: "NEC-CAMPUSSERVICES-0550",
    title: "Campus Services Library and Transport Hub - Item 550",
    category: "CAMPUSSERVICES_CORE",
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

export function filterCAMPUSSERVICESBySemester(semester: number): AcademicEntityItem[] {
  return CAMPUSSERVICES_REGISTRY.filter(item => item.semester === semester);
}

export function computeCAMPUSSERVICESAverageCredits(): number {
  const total = CAMPUSSERVICES_REGISTRY.reduce((acc, curr) => acc + curr.credits, 0);
  return total / CAMPUSSERVICES_REGISTRY.length;
}
