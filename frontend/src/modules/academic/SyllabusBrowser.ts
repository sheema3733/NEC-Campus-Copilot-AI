/**
 * Narasaraopeta Engineering College (Autonomous) — Frontend Enterprise Module
 * Module: Interactive Academic Curriculum Browser (SYLLABUSBROWSER)
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

export const SYLLABUSBROWSER_REGISTRY: AcademicEntityItem[] = [
  {
    id: "syllabusbrowser-0001",
    code: "NEC-SYLLABUSBROWSER-0001",
    title: "Interactive Academic Curriculum Browser - Item 1",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0002",
    code: "NEC-SYLLABUSBROWSER-0002",
    title: "Interactive Academic Curriculum Browser - Item 2",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0003",
    code: "NEC-SYLLABUSBROWSER-0003",
    title: "Interactive Academic Curriculum Browser - Item 3",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0004",
    code: "NEC-SYLLABUSBROWSER-0004",
    title: "Interactive Academic Curriculum Browser - Item 4",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0005",
    code: "NEC-SYLLABUSBROWSER-0005",
    title: "Interactive Academic Curriculum Browser - Item 5",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0006",
    code: "NEC-SYLLABUSBROWSER-0006",
    title: "Interactive Academic Curriculum Browser - Item 6",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0007",
    code: "NEC-SYLLABUSBROWSER-0007",
    title: "Interactive Academic Curriculum Browser - Item 7",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0008",
    code: "NEC-SYLLABUSBROWSER-0008",
    title: "Interactive Academic Curriculum Browser - Item 8",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0009",
    code: "NEC-SYLLABUSBROWSER-0009",
    title: "Interactive Academic Curriculum Browser - Item 9",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0010",
    code: "NEC-SYLLABUSBROWSER-0010",
    title: "Interactive Academic Curriculum Browser - Item 10",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0011",
    code: "NEC-SYLLABUSBROWSER-0011",
    title: "Interactive Academic Curriculum Browser - Item 11",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0012",
    code: "NEC-SYLLABUSBROWSER-0012",
    title: "Interactive Academic Curriculum Browser - Item 12",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0013",
    code: "NEC-SYLLABUSBROWSER-0013",
    title: "Interactive Academic Curriculum Browser - Item 13",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0014",
    code: "NEC-SYLLABUSBROWSER-0014",
    title: "Interactive Academic Curriculum Browser - Item 14",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0015",
    code: "NEC-SYLLABUSBROWSER-0015",
    title: "Interactive Academic Curriculum Browser - Item 15",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0016",
    code: "NEC-SYLLABUSBROWSER-0016",
    title: "Interactive Academic Curriculum Browser - Item 16",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0017",
    code: "NEC-SYLLABUSBROWSER-0017",
    title: "Interactive Academic Curriculum Browser - Item 17",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0018",
    code: "NEC-SYLLABUSBROWSER-0018",
    title: "Interactive Academic Curriculum Browser - Item 18",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0019",
    code: "NEC-SYLLABUSBROWSER-0019",
    title: "Interactive Academic Curriculum Browser - Item 19",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0020",
    code: "NEC-SYLLABUSBROWSER-0020",
    title: "Interactive Academic Curriculum Browser - Item 20",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0021",
    code: "NEC-SYLLABUSBROWSER-0021",
    title: "Interactive Academic Curriculum Browser - Item 21",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0022",
    code: "NEC-SYLLABUSBROWSER-0022",
    title: "Interactive Academic Curriculum Browser - Item 22",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0023",
    code: "NEC-SYLLABUSBROWSER-0023",
    title: "Interactive Academic Curriculum Browser - Item 23",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0024",
    code: "NEC-SYLLABUSBROWSER-0024",
    title: "Interactive Academic Curriculum Browser - Item 24",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0025",
    code: "NEC-SYLLABUSBROWSER-0025",
    title: "Interactive Academic Curriculum Browser - Item 25",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0026",
    code: "NEC-SYLLABUSBROWSER-0026",
    title: "Interactive Academic Curriculum Browser - Item 26",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0027",
    code: "NEC-SYLLABUSBROWSER-0027",
    title: "Interactive Academic Curriculum Browser - Item 27",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0028",
    code: "NEC-SYLLABUSBROWSER-0028",
    title: "Interactive Academic Curriculum Browser - Item 28",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0029",
    code: "NEC-SYLLABUSBROWSER-0029",
    title: "Interactive Academic Curriculum Browser - Item 29",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0030",
    code: "NEC-SYLLABUSBROWSER-0030",
    title: "Interactive Academic Curriculum Browser - Item 30",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0031",
    code: "NEC-SYLLABUSBROWSER-0031",
    title: "Interactive Academic Curriculum Browser - Item 31",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0032",
    code: "NEC-SYLLABUSBROWSER-0032",
    title: "Interactive Academic Curriculum Browser - Item 32",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0033",
    code: "NEC-SYLLABUSBROWSER-0033",
    title: "Interactive Academic Curriculum Browser - Item 33",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0034",
    code: "NEC-SYLLABUSBROWSER-0034",
    title: "Interactive Academic Curriculum Browser - Item 34",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0035",
    code: "NEC-SYLLABUSBROWSER-0035",
    title: "Interactive Academic Curriculum Browser - Item 35",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0036",
    code: "NEC-SYLLABUSBROWSER-0036",
    title: "Interactive Academic Curriculum Browser - Item 36",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0037",
    code: "NEC-SYLLABUSBROWSER-0037",
    title: "Interactive Academic Curriculum Browser - Item 37",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0038",
    code: "NEC-SYLLABUSBROWSER-0038",
    title: "Interactive Academic Curriculum Browser - Item 38",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0039",
    code: "NEC-SYLLABUSBROWSER-0039",
    title: "Interactive Academic Curriculum Browser - Item 39",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0040",
    code: "NEC-SYLLABUSBROWSER-0040",
    title: "Interactive Academic Curriculum Browser - Item 40",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0041",
    code: "NEC-SYLLABUSBROWSER-0041",
    title: "Interactive Academic Curriculum Browser - Item 41",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0042",
    code: "NEC-SYLLABUSBROWSER-0042",
    title: "Interactive Academic Curriculum Browser - Item 42",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0043",
    code: "NEC-SYLLABUSBROWSER-0043",
    title: "Interactive Academic Curriculum Browser - Item 43",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0044",
    code: "NEC-SYLLABUSBROWSER-0044",
    title: "Interactive Academic Curriculum Browser - Item 44",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0045",
    code: "NEC-SYLLABUSBROWSER-0045",
    title: "Interactive Academic Curriculum Browser - Item 45",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0046",
    code: "NEC-SYLLABUSBROWSER-0046",
    title: "Interactive Academic Curriculum Browser - Item 46",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0047",
    code: "NEC-SYLLABUSBROWSER-0047",
    title: "Interactive Academic Curriculum Browser - Item 47",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0048",
    code: "NEC-SYLLABUSBROWSER-0048",
    title: "Interactive Academic Curriculum Browser - Item 48",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0049",
    code: "NEC-SYLLABUSBROWSER-0049",
    title: "Interactive Academic Curriculum Browser - Item 49",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0050",
    code: "NEC-SYLLABUSBROWSER-0050",
    title: "Interactive Academic Curriculum Browser - Item 50",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0051",
    code: "NEC-SYLLABUSBROWSER-0051",
    title: "Interactive Academic Curriculum Browser - Item 51",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0052",
    code: "NEC-SYLLABUSBROWSER-0052",
    title: "Interactive Academic Curriculum Browser - Item 52",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0053",
    code: "NEC-SYLLABUSBROWSER-0053",
    title: "Interactive Academic Curriculum Browser - Item 53",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0054",
    code: "NEC-SYLLABUSBROWSER-0054",
    title: "Interactive Academic Curriculum Browser - Item 54",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0055",
    code: "NEC-SYLLABUSBROWSER-0055",
    title: "Interactive Academic Curriculum Browser - Item 55",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0056",
    code: "NEC-SYLLABUSBROWSER-0056",
    title: "Interactive Academic Curriculum Browser - Item 56",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0057",
    code: "NEC-SYLLABUSBROWSER-0057",
    title: "Interactive Academic Curriculum Browser - Item 57",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0058",
    code: "NEC-SYLLABUSBROWSER-0058",
    title: "Interactive Academic Curriculum Browser - Item 58",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0059",
    code: "NEC-SYLLABUSBROWSER-0059",
    title: "Interactive Academic Curriculum Browser - Item 59",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0060",
    code: "NEC-SYLLABUSBROWSER-0060",
    title: "Interactive Academic Curriculum Browser - Item 60",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0061",
    code: "NEC-SYLLABUSBROWSER-0061",
    title: "Interactive Academic Curriculum Browser - Item 61",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0062",
    code: "NEC-SYLLABUSBROWSER-0062",
    title: "Interactive Academic Curriculum Browser - Item 62",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0063",
    code: "NEC-SYLLABUSBROWSER-0063",
    title: "Interactive Academic Curriculum Browser - Item 63",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0064",
    code: "NEC-SYLLABUSBROWSER-0064",
    title: "Interactive Academic Curriculum Browser - Item 64",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0065",
    code: "NEC-SYLLABUSBROWSER-0065",
    title: "Interactive Academic Curriculum Browser - Item 65",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0066",
    code: "NEC-SYLLABUSBROWSER-0066",
    title: "Interactive Academic Curriculum Browser - Item 66",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0067",
    code: "NEC-SYLLABUSBROWSER-0067",
    title: "Interactive Academic Curriculum Browser - Item 67",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0068",
    code: "NEC-SYLLABUSBROWSER-0068",
    title: "Interactive Academic Curriculum Browser - Item 68",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0069",
    code: "NEC-SYLLABUSBROWSER-0069",
    title: "Interactive Academic Curriculum Browser - Item 69",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0070",
    code: "NEC-SYLLABUSBROWSER-0070",
    title: "Interactive Academic Curriculum Browser - Item 70",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0071",
    code: "NEC-SYLLABUSBROWSER-0071",
    title: "Interactive Academic Curriculum Browser - Item 71",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0072",
    code: "NEC-SYLLABUSBROWSER-0072",
    title: "Interactive Academic Curriculum Browser - Item 72",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0073",
    code: "NEC-SYLLABUSBROWSER-0073",
    title: "Interactive Academic Curriculum Browser - Item 73",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0074",
    code: "NEC-SYLLABUSBROWSER-0074",
    title: "Interactive Academic Curriculum Browser - Item 74",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0075",
    code: "NEC-SYLLABUSBROWSER-0075",
    title: "Interactive Academic Curriculum Browser - Item 75",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0076",
    code: "NEC-SYLLABUSBROWSER-0076",
    title: "Interactive Academic Curriculum Browser - Item 76",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0077",
    code: "NEC-SYLLABUSBROWSER-0077",
    title: "Interactive Academic Curriculum Browser - Item 77",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0078",
    code: "NEC-SYLLABUSBROWSER-0078",
    title: "Interactive Academic Curriculum Browser - Item 78",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0079",
    code: "NEC-SYLLABUSBROWSER-0079",
    title: "Interactive Academic Curriculum Browser - Item 79",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0080",
    code: "NEC-SYLLABUSBROWSER-0080",
    title: "Interactive Academic Curriculum Browser - Item 80",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0081",
    code: "NEC-SYLLABUSBROWSER-0081",
    title: "Interactive Academic Curriculum Browser - Item 81",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0082",
    code: "NEC-SYLLABUSBROWSER-0082",
    title: "Interactive Academic Curriculum Browser - Item 82",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0083",
    code: "NEC-SYLLABUSBROWSER-0083",
    title: "Interactive Academic Curriculum Browser - Item 83",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0084",
    code: "NEC-SYLLABUSBROWSER-0084",
    title: "Interactive Academic Curriculum Browser - Item 84",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0085",
    code: "NEC-SYLLABUSBROWSER-0085",
    title: "Interactive Academic Curriculum Browser - Item 85",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0086",
    code: "NEC-SYLLABUSBROWSER-0086",
    title: "Interactive Academic Curriculum Browser - Item 86",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0087",
    code: "NEC-SYLLABUSBROWSER-0087",
    title: "Interactive Academic Curriculum Browser - Item 87",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0088",
    code: "NEC-SYLLABUSBROWSER-0088",
    title: "Interactive Academic Curriculum Browser - Item 88",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0089",
    code: "NEC-SYLLABUSBROWSER-0089",
    title: "Interactive Academic Curriculum Browser - Item 89",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0090",
    code: "NEC-SYLLABUSBROWSER-0090",
    title: "Interactive Academic Curriculum Browser - Item 90",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0091",
    code: "NEC-SYLLABUSBROWSER-0091",
    title: "Interactive Academic Curriculum Browser - Item 91",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0092",
    code: "NEC-SYLLABUSBROWSER-0092",
    title: "Interactive Academic Curriculum Browser - Item 92",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0093",
    code: "NEC-SYLLABUSBROWSER-0093",
    title: "Interactive Academic Curriculum Browser - Item 93",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0094",
    code: "NEC-SYLLABUSBROWSER-0094",
    title: "Interactive Academic Curriculum Browser - Item 94",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0095",
    code: "NEC-SYLLABUSBROWSER-0095",
    title: "Interactive Academic Curriculum Browser - Item 95",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0096",
    code: "NEC-SYLLABUSBROWSER-0096",
    title: "Interactive Academic Curriculum Browser - Item 96",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0097",
    code: "NEC-SYLLABUSBROWSER-0097",
    title: "Interactive Academic Curriculum Browser - Item 97",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0098",
    code: "NEC-SYLLABUSBROWSER-0098",
    title: "Interactive Academic Curriculum Browser - Item 98",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0099",
    code: "NEC-SYLLABUSBROWSER-0099",
    title: "Interactive Academic Curriculum Browser - Item 99",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0100",
    code: "NEC-SYLLABUSBROWSER-0100",
    title: "Interactive Academic Curriculum Browser - Item 100",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0101",
    code: "NEC-SYLLABUSBROWSER-0101",
    title: "Interactive Academic Curriculum Browser - Item 101",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0102",
    code: "NEC-SYLLABUSBROWSER-0102",
    title: "Interactive Academic Curriculum Browser - Item 102",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0103",
    code: "NEC-SYLLABUSBROWSER-0103",
    title: "Interactive Academic Curriculum Browser - Item 103",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0104",
    code: "NEC-SYLLABUSBROWSER-0104",
    title: "Interactive Academic Curriculum Browser - Item 104",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0105",
    code: "NEC-SYLLABUSBROWSER-0105",
    title: "Interactive Academic Curriculum Browser - Item 105",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0106",
    code: "NEC-SYLLABUSBROWSER-0106",
    title: "Interactive Academic Curriculum Browser - Item 106",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0107",
    code: "NEC-SYLLABUSBROWSER-0107",
    title: "Interactive Academic Curriculum Browser - Item 107",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0108",
    code: "NEC-SYLLABUSBROWSER-0108",
    title: "Interactive Academic Curriculum Browser - Item 108",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0109",
    code: "NEC-SYLLABUSBROWSER-0109",
    title: "Interactive Academic Curriculum Browser - Item 109",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0110",
    code: "NEC-SYLLABUSBROWSER-0110",
    title: "Interactive Academic Curriculum Browser - Item 110",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0111",
    code: "NEC-SYLLABUSBROWSER-0111",
    title: "Interactive Academic Curriculum Browser - Item 111",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0112",
    code: "NEC-SYLLABUSBROWSER-0112",
    title: "Interactive Academic Curriculum Browser - Item 112",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0113",
    code: "NEC-SYLLABUSBROWSER-0113",
    title: "Interactive Academic Curriculum Browser - Item 113",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0114",
    code: "NEC-SYLLABUSBROWSER-0114",
    title: "Interactive Academic Curriculum Browser - Item 114",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0115",
    code: "NEC-SYLLABUSBROWSER-0115",
    title: "Interactive Academic Curriculum Browser - Item 115",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0116",
    code: "NEC-SYLLABUSBROWSER-0116",
    title: "Interactive Academic Curriculum Browser - Item 116",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0117",
    code: "NEC-SYLLABUSBROWSER-0117",
    title: "Interactive Academic Curriculum Browser - Item 117",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0118",
    code: "NEC-SYLLABUSBROWSER-0118",
    title: "Interactive Academic Curriculum Browser - Item 118",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0119",
    code: "NEC-SYLLABUSBROWSER-0119",
    title: "Interactive Academic Curriculum Browser - Item 119",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0120",
    code: "NEC-SYLLABUSBROWSER-0120",
    title: "Interactive Academic Curriculum Browser - Item 120",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0121",
    code: "NEC-SYLLABUSBROWSER-0121",
    title: "Interactive Academic Curriculum Browser - Item 121",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0122",
    code: "NEC-SYLLABUSBROWSER-0122",
    title: "Interactive Academic Curriculum Browser - Item 122",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0123",
    code: "NEC-SYLLABUSBROWSER-0123",
    title: "Interactive Academic Curriculum Browser - Item 123",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0124",
    code: "NEC-SYLLABUSBROWSER-0124",
    title: "Interactive Academic Curriculum Browser - Item 124",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0125",
    code: "NEC-SYLLABUSBROWSER-0125",
    title: "Interactive Academic Curriculum Browser - Item 125",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0126",
    code: "NEC-SYLLABUSBROWSER-0126",
    title: "Interactive Academic Curriculum Browser - Item 126",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0127",
    code: "NEC-SYLLABUSBROWSER-0127",
    title: "Interactive Academic Curriculum Browser - Item 127",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0128",
    code: "NEC-SYLLABUSBROWSER-0128",
    title: "Interactive Academic Curriculum Browser - Item 128",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0129",
    code: "NEC-SYLLABUSBROWSER-0129",
    title: "Interactive Academic Curriculum Browser - Item 129",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0130",
    code: "NEC-SYLLABUSBROWSER-0130",
    title: "Interactive Academic Curriculum Browser - Item 130",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0131",
    code: "NEC-SYLLABUSBROWSER-0131",
    title: "Interactive Academic Curriculum Browser - Item 131",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0132",
    code: "NEC-SYLLABUSBROWSER-0132",
    title: "Interactive Academic Curriculum Browser - Item 132",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0133",
    code: "NEC-SYLLABUSBROWSER-0133",
    title: "Interactive Academic Curriculum Browser - Item 133",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0134",
    code: "NEC-SYLLABUSBROWSER-0134",
    title: "Interactive Academic Curriculum Browser - Item 134",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0135",
    code: "NEC-SYLLABUSBROWSER-0135",
    title: "Interactive Academic Curriculum Browser - Item 135",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0136",
    code: "NEC-SYLLABUSBROWSER-0136",
    title: "Interactive Academic Curriculum Browser - Item 136",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0137",
    code: "NEC-SYLLABUSBROWSER-0137",
    title: "Interactive Academic Curriculum Browser - Item 137",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0138",
    code: "NEC-SYLLABUSBROWSER-0138",
    title: "Interactive Academic Curriculum Browser - Item 138",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0139",
    code: "NEC-SYLLABUSBROWSER-0139",
    title: "Interactive Academic Curriculum Browser - Item 139",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0140",
    code: "NEC-SYLLABUSBROWSER-0140",
    title: "Interactive Academic Curriculum Browser - Item 140",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0141",
    code: "NEC-SYLLABUSBROWSER-0141",
    title: "Interactive Academic Curriculum Browser - Item 141",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0142",
    code: "NEC-SYLLABUSBROWSER-0142",
    title: "Interactive Academic Curriculum Browser - Item 142",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0143",
    code: "NEC-SYLLABUSBROWSER-0143",
    title: "Interactive Academic Curriculum Browser - Item 143",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0144",
    code: "NEC-SYLLABUSBROWSER-0144",
    title: "Interactive Academic Curriculum Browser - Item 144",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0145",
    code: "NEC-SYLLABUSBROWSER-0145",
    title: "Interactive Academic Curriculum Browser - Item 145",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0146",
    code: "NEC-SYLLABUSBROWSER-0146",
    title: "Interactive Academic Curriculum Browser - Item 146",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0147",
    code: "NEC-SYLLABUSBROWSER-0147",
    title: "Interactive Academic Curriculum Browser - Item 147",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0148",
    code: "NEC-SYLLABUSBROWSER-0148",
    title: "Interactive Academic Curriculum Browser - Item 148",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0149",
    code: "NEC-SYLLABUSBROWSER-0149",
    title: "Interactive Academic Curriculum Browser - Item 149",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0150",
    code: "NEC-SYLLABUSBROWSER-0150",
    title: "Interactive Academic Curriculum Browser - Item 150",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0151",
    code: "NEC-SYLLABUSBROWSER-0151",
    title: "Interactive Academic Curriculum Browser - Item 151",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0152",
    code: "NEC-SYLLABUSBROWSER-0152",
    title: "Interactive Academic Curriculum Browser - Item 152",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0153",
    code: "NEC-SYLLABUSBROWSER-0153",
    title: "Interactive Academic Curriculum Browser - Item 153",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0154",
    code: "NEC-SYLLABUSBROWSER-0154",
    title: "Interactive Academic Curriculum Browser - Item 154",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0155",
    code: "NEC-SYLLABUSBROWSER-0155",
    title: "Interactive Academic Curriculum Browser - Item 155",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0156",
    code: "NEC-SYLLABUSBROWSER-0156",
    title: "Interactive Academic Curriculum Browser - Item 156",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0157",
    code: "NEC-SYLLABUSBROWSER-0157",
    title: "Interactive Academic Curriculum Browser - Item 157",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0158",
    code: "NEC-SYLLABUSBROWSER-0158",
    title: "Interactive Academic Curriculum Browser - Item 158",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0159",
    code: "NEC-SYLLABUSBROWSER-0159",
    title: "Interactive Academic Curriculum Browser - Item 159",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0160",
    code: "NEC-SYLLABUSBROWSER-0160",
    title: "Interactive Academic Curriculum Browser - Item 160",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0161",
    code: "NEC-SYLLABUSBROWSER-0161",
    title: "Interactive Academic Curriculum Browser - Item 161",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0162",
    code: "NEC-SYLLABUSBROWSER-0162",
    title: "Interactive Academic Curriculum Browser - Item 162",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0163",
    code: "NEC-SYLLABUSBROWSER-0163",
    title: "Interactive Academic Curriculum Browser - Item 163",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0164",
    code: "NEC-SYLLABUSBROWSER-0164",
    title: "Interactive Academic Curriculum Browser - Item 164",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0165",
    code: "NEC-SYLLABUSBROWSER-0165",
    title: "Interactive Academic Curriculum Browser - Item 165",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0166",
    code: "NEC-SYLLABUSBROWSER-0166",
    title: "Interactive Academic Curriculum Browser - Item 166",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0167",
    code: "NEC-SYLLABUSBROWSER-0167",
    title: "Interactive Academic Curriculum Browser - Item 167",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0168",
    code: "NEC-SYLLABUSBROWSER-0168",
    title: "Interactive Academic Curriculum Browser - Item 168",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0169",
    code: "NEC-SYLLABUSBROWSER-0169",
    title: "Interactive Academic Curriculum Browser - Item 169",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0170",
    code: "NEC-SYLLABUSBROWSER-0170",
    title: "Interactive Academic Curriculum Browser - Item 170",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0171",
    code: "NEC-SYLLABUSBROWSER-0171",
    title: "Interactive Academic Curriculum Browser - Item 171",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0172",
    code: "NEC-SYLLABUSBROWSER-0172",
    title: "Interactive Academic Curriculum Browser - Item 172",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0173",
    code: "NEC-SYLLABUSBROWSER-0173",
    title: "Interactive Academic Curriculum Browser - Item 173",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0174",
    code: "NEC-SYLLABUSBROWSER-0174",
    title: "Interactive Academic Curriculum Browser - Item 174",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0175",
    code: "NEC-SYLLABUSBROWSER-0175",
    title: "Interactive Academic Curriculum Browser - Item 175",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0176",
    code: "NEC-SYLLABUSBROWSER-0176",
    title: "Interactive Academic Curriculum Browser - Item 176",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0177",
    code: "NEC-SYLLABUSBROWSER-0177",
    title: "Interactive Academic Curriculum Browser - Item 177",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0178",
    code: "NEC-SYLLABUSBROWSER-0178",
    title: "Interactive Academic Curriculum Browser - Item 178",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0179",
    code: "NEC-SYLLABUSBROWSER-0179",
    title: "Interactive Academic Curriculum Browser - Item 179",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0180",
    code: "NEC-SYLLABUSBROWSER-0180",
    title: "Interactive Academic Curriculum Browser - Item 180",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0181",
    code: "NEC-SYLLABUSBROWSER-0181",
    title: "Interactive Academic Curriculum Browser - Item 181",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0182",
    code: "NEC-SYLLABUSBROWSER-0182",
    title: "Interactive Academic Curriculum Browser - Item 182",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0183",
    code: "NEC-SYLLABUSBROWSER-0183",
    title: "Interactive Academic Curriculum Browser - Item 183",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0184",
    code: "NEC-SYLLABUSBROWSER-0184",
    title: "Interactive Academic Curriculum Browser - Item 184",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0185",
    code: "NEC-SYLLABUSBROWSER-0185",
    title: "Interactive Academic Curriculum Browser - Item 185",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0186",
    code: "NEC-SYLLABUSBROWSER-0186",
    title: "Interactive Academic Curriculum Browser - Item 186",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0187",
    code: "NEC-SYLLABUSBROWSER-0187",
    title: "Interactive Academic Curriculum Browser - Item 187",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0188",
    code: "NEC-SYLLABUSBROWSER-0188",
    title: "Interactive Academic Curriculum Browser - Item 188",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0189",
    code: "NEC-SYLLABUSBROWSER-0189",
    title: "Interactive Academic Curriculum Browser - Item 189",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0190",
    code: "NEC-SYLLABUSBROWSER-0190",
    title: "Interactive Academic Curriculum Browser - Item 190",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0191",
    code: "NEC-SYLLABUSBROWSER-0191",
    title: "Interactive Academic Curriculum Browser - Item 191",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0192",
    code: "NEC-SYLLABUSBROWSER-0192",
    title: "Interactive Academic Curriculum Browser - Item 192",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0193",
    code: "NEC-SYLLABUSBROWSER-0193",
    title: "Interactive Academic Curriculum Browser - Item 193",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0194",
    code: "NEC-SYLLABUSBROWSER-0194",
    title: "Interactive Academic Curriculum Browser - Item 194",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0195",
    code: "NEC-SYLLABUSBROWSER-0195",
    title: "Interactive Academic Curriculum Browser - Item 195",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0196",
    code: "NEC-SYLLABUSBROWSER-0196",
    title: "Interactive Academic Curriculum Browser - Item 196",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0197",
    code: "NEC-SYLLABUSBROWSER-0197",
    title: "Interactive Academic Curriculum Browser - Item 197",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0198",
    code: "NEC-SYLLABUSBROWSER-0198",
    title: "Interactive Academic Curriculum Browser - Item 198",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0199",
    code: "NEC-SYLLABUSBROWSER-0199",
    title: "Interactive Academic Curriculum Browser - Item 199",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0200",
    code: "NEC-SYLLABUSBROWSER-0200",
    title: "Interactive Academic Curriculum Browser - Item 200",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0201",
    code: "NEC-SYLLABUSBROWSER-0201",
    title: "Interactive Academic Curriculum Browser - Item 201",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0202",
    code: "NEC-SYLLABUSBROWSER-0202",
    title: "Interactive Academic Curriculum Browser - Item 202",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0203",
    code: "NEC-SYLLABUSBROWSER-0203",
    title: "Interactive Academic Curriculum Browser - Item 203",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0204",
    code: "NEC-SYLLABUSBROWSER-0204",
    title: "Interactive Academic Curriculum Browser - Item 204",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0205",
    code: "NEC-SYLLABUSBROWSER-0205",
    title: "Interactive Academic Curriculum Browser - Item 205",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0206",
    code: "NEC-SYLLABUSBROWSER-0206",
    title: "Interactive Academic Curriculum Browser - Item 206",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0207",
    code: "NEC-SYLLABUSBROWSER-0207",
    title: "Interactive Academic Curriculum Browser - Item 207",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0208",
    code: "NEC-SYLLABUSBROWSER-0208",
    title: "Interactive Academic Curriculum Browser - Item 208",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0209",
    code: "NEC-SYLLABUSBROWSER-0209",
    title: "Interactive Academic Curriculum Browser - Item 209",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0210",
    code: "NEC-SYLLABUSBROWSER-0210",
    title: "Interactive Academic Curriculum Browser - Item 210",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0211",
    code: "NEC-SYLLABUSBROWSER-0211",
    title: "Interactive Academic Curriculum Browser - Item 211",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0212",
    code: "NEC-SYLLABUSBROWSER-0212",
    title: "Interactive Academic Curriculum Browser - Item 212",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0213",
    code: "NEC-SYLLABUSBROWSER-0213",
    title: "Interactive Academic Curriculum Browser - Item 213",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0214",
    code: "NEC-SYLLABUSBROWSER-0214",
    title: "Interactive Academic Curriculum Browser - Item 214",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0215",
    code: "NEC-SYLLABUSBROWSER-0215",
    title: "Interactive Academic Curriculum Browser - Item 215",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0216",
    code: "NEC-SYLLABUSBROWSER-0216",
    title: "Interactive Academic Curriculum Browser - Item 216",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0217",
    code: "NEC-SYLLABUSBROWSER-0217",
    title: "Interactive Academic Curriculum Browser - Item 217",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0218",
    code: "NEC-SYLLABUSBROWSER-0218",
    title: "Interactive Academic Curriculum Browser - Item 218",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0219",
    code: "NEC-SYLLABUSBROWSER-0219",
    title: "Interactive Academic Curriculum Browser - Item 219",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0220",
    code: "NEC-SYLLABUSBROWSER-0220",
    title: "Interactive Academic Curriculum Browser - Item 220",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0221",
    code: "NEC-SYLLABUSBROWSER-0221",
    title: "Interactive Academic Curriculum Browser - Item 221",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0222",
    code: "NEC-SYLLABUSBROWSER-0222",
    title: "Interactive Academic Curriculum Browser - Item 222",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0223",
    code: "NEC-SYLLABUSBROWSER-0223",
    title: "Interactive Academic Curriculum Browser - Item 223",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0224",
    code: "NEC-SYLLABUSBROWSER-0224",
    title: "Interactive Academic Curriculum Browser - Item 224",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0225",
    code: "NEC-SYLLABUSBROWSER-0225",
    title: "Interactive Academic Curriculum Browser - Item 225",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0226",
    code: "NEC-SYLLABUSBROWSER-0226",
    title: "Interactive Academic Curriculum Browser - Item 226",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0227",
    code: "NEC-SYLLABUSBROWSER-0227",
    title: "Interactive Academic Curriculum Browser - Item 227",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0228",
    code: "NEC-SYLLABUSBROWSER-0228",
    title: "Interactive Academic Curriculum Browser - Item 228",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0229",
    code: "NEC-SYLLABUSBROWSER-0229",
    title: "Interactive Academic Curriculum Browser - Item 229",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0230",
    code: "NEC-SYLLABUSBROWSER-0230",
    title: "Interactive Academic Curriculum Browser - Item 230",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0231",
    code: "NEC-SYLLABUSBROWSER-0231",
    title: "Interactive Academic Curriculum Browser - Item 231",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0232",
    code: "NEC-SYLLABUSBROWSER-0232",
    title: "Interactive Academic Curriculum Browser - Item 232",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0233",
    code: "NEC-SYLLABUSBROWSER-0233",
    title: "Interactive Academic Curriculum Browser - Item 233",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0234",
    code: "NEC-SYLLABUSBROWSER-0234",
    title: "Interactive Academic Curriculum Browser - Item 234",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0235",
    code: "NEC-SYLLABUSBROWSER-0235",
    title: "Interactive Academic Curriculum Browser - Item 235",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0236",
    code: "NEC-SYLLABUSBROWSER-0236",
    title: "Interactive Academic Curriculum Browser - Item 236",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0237",
    code: "NEC-SYLLABUSBROWSER-0237",
    title: "Interactive Academic Curriculum Browser - Item 237",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0238",
    code: "NEC-SYLLABUSBROWSER-0238",
    title: "Interactive Academic Curriculum Browser - Item 238",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0239",
    code: "NEC-SYLLABUSBROWSER-0239",
    title: "Interactive Academic Curriculum Browser - Item 239",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0240",
    code: "NEC-SYLLABUSBROWSER-0240",
    title: "Interactive Academic Curriculum Browser - Item 240",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0241",
    code: "NEC-SYLLABUSBROWSER-0241",
    title: "Interactive Academic Curriculum Browser - Item 241",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0242",
    code: "NEC-SYLLABUSBROWSER-0242",
    title: "Interactive Academic Curriculum Browser - Item 242",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0243",
    code: "NEC-SYLLABUSBROWSER-0243",
    title: "Interactive Academic Curriculum Browser - Item 243",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0244",
    code: "NEC-SYLLABUSBROWSER-0244",
    title: "Interactive Academic Curriculum Browser - Item 244",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0245",
    code: "NEC-SYLLABUSBROWSER-0245",
    title: "Interactive Academic Curriculum Browser - Item 245",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0246",
    code: "NEC-SYLLABUSBROWSER-0246",
    title: "Interactive Academic Curriculum Browser - Item 246",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0247",
    code: "NEC-SYLLABUSBROWSER-0247",
    title: "Interactive Academic Curriculum Browser - Item 247",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0248",
    code: "NEC-SYLLABUSBROWSER-0248",
    title: "Interactive Academic Curriculum Browser - Item 248",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0249",
    code: "NEC-SYLLABUSBROWSER-0249",
    title: "Interactive Academic Curriculum Browser - Item 249",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0250",
    code: "NEC-SYLLABUSBROWSER-0250",
    title: "Interactive Academic Curriculum Browser - Item 250",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0251",
    code: "NEC-SYLLABUSBROWSER-0251",
    title: "Interactive Academic Curriculum Browser - Item 251",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0252",
    code: "NEC-SYLLABUSBROWSER-0252",
    title: "Interactive Academic Curriculum Browser - Item 252",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0253",
    code: "NEC-SYLLABUSBROWSER-0253",
    title: "Interactive Academic Curriculum Browser - Item 253",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0254",
    code: "NEC-SYLLABUSBROWSER-0254",
    title: "Interactive Academic Curriculum Browser - Item 254",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0255",
    code: "NEC-SYLLABUSBROWSER-0255",
    title: "Interactive Academic Curriculum Browser - Item 255",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0256",
    code: "NEC-SYLLABUSBROWSER-0256",
    title: "Interactive Academic Curriculum Browser - Item 256",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0257",
    code: "NEC-SYLLABUSBROWSER-0257",
    title: "Interactive Academic Curriculum Browser - Item 257",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0258",
    code: "NEC-SYLLABUSBROWSER-0258",
    title: "Interactive Academic Curriculum Browser - Item 258",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0259",
    code: "NEC-SYLLABUSBROWSER-0259",
    title: "Interactive Academic Curriculum Browser - Item 259",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0260",
    code: "NEC-SYLLABUSBROWSER-0260",
    title: "Interactive Academic Curriculum Browser - Item 260",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0261",
    code: "NEC-SYLLABUSBROWSER-0261",
    title: "Interactive Academic Curriculum Browser - Item 261",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0262",
    code: "NEC-SYLLABUSBROWSER-0262",
    title: "Interactive Academic Curriculum Browser - Item 262",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0263",
    code: "NEC-SYLLABUSBROWSER-0263",
    title: "Interactive Academic Curriculum Browser - Item 263",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0264",
    code: "NEC-SYLLABUSBROWSER-0264",
    title: "Interactive Academic Curriculum Browser - Item 264",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0265",
    code: "NEC-SYLLABUSBROWSER-0265",
    title: "Interactive Academic Curriculum Browser - Item 265",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0266",
    code: "NEC-SYLLABUSBROWSER-0266",
    title: "Interactive Academic Curriculum Browser - Item 266",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0267",
    code: "NEC-SYLLABUSBROWSER-0267",
    title: "Interactive Academic Curriculum Browser - Item 267",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0268",
    code: "NEC-SYLLABUSBROWSER-0268",
    title: "Interactive Academic Curriculum Browser - Item 268",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0269",
    code: "NEC-SYLLABUSBROWSER-0269",
    title: "Interactive Academic Curriculum Browser - Item 269",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0270",
    code: "NEC-SYLLABUSBROWSER-0270",
    title: "Interactive Academic Curriculum Browser - Item 270",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0271",
    code: "NEC-SYLLABUSBROWSER-0271",
    title: "Interactive Academic Curriculum Browser - Item 271",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0272",
    code: "NEC-SYLLABUSBROWSER-0272",
    title: "Interactive Academic Curriculum Browser - Item 272",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0273",
    code: "NEC-SYLLABUSBROWSER-0273",
    title: "Interactive Academic Curriculum Browser - Item 273",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0274",
    code: "NEC-SYLLABUSBROWSER-0274",
    title: "Interactive Academic Curriculum Browser - Item 274",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0275",
    code: "NEC-SYLLABUSBROWSER-0275",
    title: "Interactive Academic Curriculum Browser - Item 275",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0276",
    code: "NEC-SYLLABUSBROWSER-0276",
    title: "Interactive Academic Curriculum Browser - Item 276",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0277",
    code: "NEC-SYLLABUSBROWSER-0277",
    title: "Interactive Academic Curriculum Browser - Item 277",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0278",
    code: "NEC-SYLLABUSBROWSER-0278",
    title: "Interactive Academic Curriculum Browser - Item 278",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0279",
    code: "NEC-SYLLABUSBROWSER-0279",
    title: "Interactive Academic Curriculum Browser - Item 279",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0280",
    code: "NEC-SYLLABUSBROWSER-0280",
    title: "Interactive Academic Curriculum Browser - Item 280",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0281",
    code: "NEC-SYLLABUSBROWSER-0281",
    title: "Interactive Academic Curriculum Browser - Item 281",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0282",
    code: "NEC-SYLLABUSBROWSER-0282",
    title: "Interactive Academic Curriculum Browser - Item 282",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0283",
    code: "NEC-SYLLABUSBROWSER-0283",
    title: "Interactive Academic Curriculum Browser - Item 283",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0284",
    code: "NEC-SYLLABUSBROWSER-0284",
    title: "Interactive Academic Curriculum Browser - Item 284",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0285",
    code: "NEC-SYLLABUSBROWSER-0285",
    title: "Interactive Academic Curriculum Browser - Item 285",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0286",
    code: "NEC-SYLLABUSBROWSER-0286",
    title: "Interactive Academic Curriculum Browser - Item 286",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0287",
    code: "NEC-SYLLABUSBROWSER-0287",
    title: "Interactive Academic Curriculum Browser - Item 287",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0288",
    code: "NEC-SYLLABUSBROWSER-0288",
    title: "Interactive Academic Curriculum Browser - Item 288",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0289",
    code: "NEC-SYLLABUSBROWSER-0289",
    title: "Interactive Academic Curriculum Browser - Item 289",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0290",
    code: "NEC-SYLLABUSBROWSER-0290",
    title: "Interactive Academic Curriculum Browser - Item 290",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0291",
    code: "NEC-SYLLABUSBROWSER-0291",
    title: "Interactive Academic Curriculum Browser - Item 291",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0292",
    code: "NEC-SYLLABUSBROWSER-0292",
    title: "Interactive Academic Curriculum Browser - Item 292",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0293",
    code: "NEC-SYLLABUSBROWSER-0293",
    title: "Interactive Academic Curriculum Browser - Item 293",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0294",
    code: "NEC-SYLLABUSBROWSER-0294",
    title: "Interactive Academic Curriculum Browser - Item 294",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0295",
    code: "NEC-SYLLABUSBROWSER-0295",
    title: "Interactive Academic Curriculum Browser - Item 295",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0296",
    code: "NEC-SYLLABUSBROWSER-0296",
    title: "Interactive Academic Curriculum Browser - Item 296",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0297",
    code: "NEC-SYLLABUSBROWSER-0297",
    title: "Interactive Academic Curriculum Browser - Item 297",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0298",
    code: "NEC-SYLLABUSBROWSER-0298",
    title: "Interactive Academic Curriculum Browser - Item 298",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0299",
    code: "NEC-SYLLABUSBROWSER-0299",
    title: "Interactive Academic Curriculum Browser - Item 299",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0300",
    code: "NEC-SYLLABUSBROWSER-0300",
    title: "Interactive Academic Curriculum Browser - Item 300",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0301",
    code: "NEC-SYLLABUSBROWSER-0301",
    title: "Interactive Academic Curriculum Browser - Item 301",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0302",
    code: "NEC-SYLLABUSBROWSER-0302",
    title: "Interactive Academic Curriculum Browser - Item 302",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0303",
    code: "NEC-SYLLABUSBROWSER-0303",
    title: "Interactive Academic Curriculum Browser - Item 303",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0304",
    code: "NEC-SYLLABUSBROWSER-0304",
    title: "Interactive Academic Curriculum Browser - Item 304",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0305",
    code: "NEC-SYLLABUSBROWSER-0305",
    title: "Interactive Academic Curriculum Browser - Item 305",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0306",
    code: "NEC-SYLLABUSBROWSER-0306",
    title: "Interactive Academic Curriculum Browser - Item 306",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0307",
    code: "NEC-SYLLABUSBROWSER-0307",
    title: "Interactive Academic Curriculum Browser - Item 307",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0308",
    code: "NEC-SYLLABUSBROWSER-0308",
    title: "Interactive Academic Curriculum Browser - Item 308",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0309",
    code: "NEC-SYLLABUSBROWSER-0309",
    title: "Interactive Academic Curriculum Browser - Item 309",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0310",
    code: "NEC-SYLLABUSBROWSER-0310",
    title: "Interactive Academic Curriculum Browser - Item 310",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0311",
    code: "NEC-SYLLABUSBROWSER-0311",
    title: "Interactive Academic Curriculum Browser - Item 311",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0312",
    code: "NEC-SYLLABUSBROWSER-0312",
    title: "Interactive Academic Curriculum Browser - Item 312",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0313",
    code: "NEC-SYLLABUSBROWSER-0313",
    title: "Interactive Academic Curriculum Browser - Item 313",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0314",
    code: "NEC-SYLLABUSBROWSER-0314",
    title: "Interactive Academic Curriculum Browser - Item 314",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0315",
    code: "NEC-SYLLABUSBROWSER-0315",
    title: "Interactive Academic Curriculum Browser - Item 315",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0316",
    code: "NEC-SYLLABUSBROWSER-0316",
    title: "Interactive Academic Curriculum Browser - Item 316",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0317",
    code: "NEC-SYLLABUSBROWSER-0317",
    title: "Interactive Academic Curriculum Browser - Item 317",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0318",
    code: "NEC-SYLLABUSBROWSER-0318",
    title: "Interactive Academic Curriculum Browser - Item 318",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0319",
    code: "NEC-SYLLABUSBROWSER-0319",
    title: "Interactive Academic Curriculum Browser - Item 319",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0320",
    code: "NEC-SYLLABUSBROWSER-0320",
    title: "Interactive Academic Curriculum Browser - Item 320",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0321",
    code: "NEC-SYLLABUSBROWSER-0321",
    title: "Interactive Academic Curriculum Browser - Item 321",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0322",
    code: "NEC-SYLLABUSBROWSER-0322",
    title: "Interactive Academic Curriculum Browser - Item 322",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0323",
    code: "NEC-SYLLABUSBROWSER-0323",
    title: "Interactive Academic Curriculum Browser - Item 323",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0324",
    code: "NEC-SYLLABUSBROWSER-0324",
    title: "Interactive Academic Curriculum Browser - Item 324",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0325",
    code: "NEC-SYLLABUSBROWSER-0325",
    title: "Interactive Academic Curriculum Browser - Item 325",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0326",
    code: "NEC-SYLLABUSBROWSER-0326",
    title: "Interactive Academic Curriculum Browser - Item 326",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0327",
    code: "NEC-SYLLABUSBROWSER-0327",
    title: "Interactive Academic Curriculum Browser - Item 327",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0328",
    code: "NEC-SYLLABUSBROWSER-0328",
    title: "Interactive Academic Curriculum Browser - Item 328",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0329",
    code: "NEC-SYLLABUSBROWSER-0329",
    title: "Interactive Academic Curriculum Browser - Item 329",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0330",
    code: "NEC-SYLLABUSBROWSER-0330",
    title: "Interactive Academic Curriculum Browser - Item 330",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0331",
    code: "NEC-SYLLABUSBROWSER-0331",
    title: "Interactive Academic Curriculum Browser - Item 331",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0332",
    code: "NEC-SYLLABUSBROWSER-0332",
    title: "Interactive Academic Curriculum Browser - Item 332",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0333",
    code: "NEC-SYLLABUSBROWSER-0333",
    title: "Interactive Academic Curriculum Browser - Item 333",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0334",
    code: "NEC-SYLLABUSBROWSER-0334",
    title: "Interactive Academic Curriculum Browser - Item 334",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0335",
    code: "NEC-SYLLABUSBROWSER-0335",
    title: "Interactive Academic Curriculum Browser - Item 335",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0336",
    code: "NEC-SYLLABUSBROWSER-0336",
    title: "Interactive Academic Curriculum Browser - Item 336",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0337",
    code: "NEC-SYLLABUSBROWSER-0337",
    title: "Interactive Academic Curriculum Browser - Item 337",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0338",
    code: "NEC-SYLLABUSBROWSER-0338",
    title: "Interactive Academic Curriculum Browser - Item 338",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0339",
    code: "NEC-SYLLABUSBROWSER-0339",
    title: "Interactive Academic Curriculum Browser - Item 339",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0340",
    code: "NEC-SYLLABUSBROWSER-0340",
    title: "Interactive Academic Curriculum Browser - Item 340",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0341",
    code: "NEC-SYLLABUSBROWSER-0341",
    title: "Interactive Academic Curriculum Browser - Item 341",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0342",
    code: "NEC-SYLLABUSBROWSER-0342",
    title: "Interactive Academic Curriculum Browser - Item 342",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0343",
    code: "NEC-SYLLABUSBROWSER-0343",
    title: "Interactive Academic Curriculum Browser - Item 343",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0344",
    code: "NEC-SYLLABUSBROWSER-0344",
    title: "Interactive Academic Curriculum Browser - Item 344",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0345",
    code: "NEC-SYLLABUSBROWSER-0345",
    title: "Interactive Academic Curriculum Browser - Item 345",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0346",
    code: "NEC-SYLLABUSBROWSER-0346",
    title: "Interactive Academic Curriculum Browser - Item 346",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0347",
    code: "NEC-SYLLABUSBROWSER-0347",
    title: "Interactive Academic Curriculum Browser - Item 347",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0348",
    code: "NEC-SYLLABUSBROWSER-0348",
    title: "Interactive Academic Curriculum Browser - Item 348",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0349",
    code: "NEC-SYLLABUSBROWSER-0349",
    title: "Interactive Academic Curriculum Browser - Item 349",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0350",
    code: "NEC-SYLLABUSBROWSER-0350",
    title: "Interactive Academic Curriculum Browser - Item 350",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0351",
    code: "NEC-SYLLABUSBROWSER-0351",
    title: "Interactive Academic Curriculum Browser - Item 351",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0352",
    code: "NEC-SYLLABUSBROWSER-0352",
    title: "Interactive Academic Curriculum Browser - Item 352",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0353",
    code: "NEC-SYLLABUSBROWSER-0353",
    title: "Interactive Academic Curriculum Browser - Item 353",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0354",
    code: "NEC-SYLLABUSBROWSER-0354",
    title: "Interactive Academic Curriculum Browser - Item 354",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0355",
    code: "NEC-SYLLABUSBROWSER-0355",
    title: "Interactive Academic Curriculum Browser - Item 355",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0356",
    code: "NEC-SYLLABUSBROWSER-0356",
    title: "Interactive Academic Curriculum Browser - Item 356",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0357",
    code: "NEC-SYLLABUSBROWSER-0357",
    title: "Interactive Academic Curriculum Browser - Item 357",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0358",
    code: "NEC-SYLLABUSBROWSER-0358",
    title: "Interactive Academic Curriculum Browser - Item 358",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0359",
    code: "NEC-SYLLABUSBROWSER-0359",
    title: "Interactive Academic Curriculum Browser - Item 359",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0360",
    code: "NEC-SYLLABUSBROWSER-0360",
    title: "Interactive Academic Curriculum Browser - Item 360",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0361",
    code: "NEC-SYLLABUSBROWSER-0361",
    title: "Interactive Academic Curriculum Browser - Item 361",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0362",
    code: "NEC-SYLLABUSBROWSER-0362",
    title: "Interactive Academic Curriculum Browser - Item 362",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0363",
    code: "NEC-SYLLABUSBROWSER-0363",
    title: "Interactive Academic Curriculum Browser - Item 363",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0364",
    code: "NEC-SYLLABUSBROWSER-0364",
    title: "Interactive Academic Curriculum Browser - Item 364",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0365",
    code: "NEC-SYLLABUSBROWSER-0365",
    title: "Interactive Academic Curriculum Browser - Item 365",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0366",
    code: "NEC-SYLLABUSBROWSER-0366",
    title: "Interactive Academic Curriculum Browser - Item 366",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0367",
    code: "NEC-SYLLABUSBROWSER-0367",
    title: "Interactive Academic Curriculum Browser - Item 367",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0368",
    code: "NEC-SYLLABUSBROWSER-0368",
    title: "Interactive Academic Curriculum Browser - Item 368",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0369",
    code: "NEC-SYLLABUSBROWSER-0369",
    title: "Interactive Academic Curriculum Browser - Item 369",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0370",
    code: "NEC-SYLLABUSBROWSER-0370",
    title: "Interactive Academic Curriculum Browser - Item 370",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0371",
    code: "NEC-SYLLABUSBROWSER-0371",
    title: "Interactive Academic Curriculum Browser - Item 371",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0372",
    code: "NEC-SYLLABUSBROWSER-0372",
    title: "Interactive Academic Curriculum Browser - Item 372",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0373",
    code: "NEC-SYLLABUSBROWSER-0373",
    title: "Interactive Academic Curriculum Browser - Item 373",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0374",
    code: "NEC-SYLLABUSBROWSER-0374",
    title: "Interactive Academic Curriculum Browser - Item 374",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0375",
    code: "NEC-SYLLABUSBROWSER-0375",
    title: "Interactive Academic Curriculum Browser - Item 375",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0376",
    code: "NEC-SYLLABUSBROWSER-0376",
    title: "Interactive Academic Curriculum Browser - Item 376",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0377",
    code: "NEC-SYLLABUSBROWSER-0377",
    title: "Interactive Academic Curriculum Browser - Item 377",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0378",
    code: "NEC-SYLLABUSBROWSER-0378",
    title: "Interactive Academic Curriculum Browser - Item 378",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0379",
    code: "NEC-SYLLABUSBROWSER-0379",
    title: "Interactive Academic Curriculum Browser - Item 379",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0380",
    code: "NEC-SYLLABUSBROWSER-0380",
    title: "Interactive Academic Curriculum Browser - Item 380",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0381",
    code: "NEC-SYLLABUSBROWSER-0381",
    title: "Interactive Academic Curriculum Browser - Item 381",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0382",
    code: "NEC-SYLLABUSBROWSER-0382",
    title: "Interactive Academic Curriculum Browser - Item 382",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0383",
    code: "NEC-SYLLABUSBROWSER-0383",
    title: "Interactive Academic Curriculum Browser - Item 383",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0384",
    code: "NEC-SYLLABUSBROWSER-0384",
    title: "Interactive Academic Curriculum Browser - Item 384",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0385",
    code: "NEC-SYLLABUSBROWSER-0385",
    title: "Interactive Academic Curriculum Browser - Item 385",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0386",
    code: "NEC-SYLLABUSBROWSER-0386",
    title: "Interactive Academic Curriculum Browser - Item 386",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0387",
    code: "NEC-SYLLABUSBROWSER-0387",
    title: "Interactive Academic Curriculum Browser - Item 387",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0388",
    code: "NEC-SYLLABUSBROWSER-0388",
    title: "Interactive Academic Curriculum Browser - Item 388",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0389",
    code: "NEC-SYLLABUSBROWSER-0389",
    title: "Interactive Academic Curriculum Browser - Item 389",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0390",
    code: "NEC-SYLLABUSBROWSER-0390",
    title: "Interactive Academic Curriculum Browser - Item 390",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0391",
    code: "NEC-SYLLABUSBROWSER-0391",
    title: "Interactive Academic Curriculum Browser - Item 391",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0392",
    code: "NEC-SYLLABUSBROWSER-0392",
    title: "Interactive Academic Curriculum Browser - Item 392",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0393",
    code: "NEC-SYLLABUSBROWSER-0393",
    title: "Interactive Academic Curriculum Browser - Item 393",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0394",
    code: "NEC-SYLLABUSBROWSER-0394",
    title: "Interactive Academic Curriculum Browser - Item 394",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0395",
    code: "NEC-SYLLABUSBROWSER-0395",
    title: "Interactive Academic Curriculum Browser - Item 395",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0396",
    code: "NEC-SYLLABUSBROWSER-0396",
    title: "Interactive Academic Curriculum Browser - Item 396",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0397",
    code: "NEC-SYLLABUSBROWSER-0397",
    title: "Interactive Academic Curriculum Browser - Item 397",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0398",
    code: "NEC-SYLLABUSBROWSER-0398",
    title: "Interactive Academic Curriculum Browser - Item 398",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0399",
    code: "NEC-SYLLABUSBROWSER-0399",
    title: "Interactive Academic Curriculum Browser - Item 399",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0400",
    code: "NEC-SYLLABUSBROWSER-0400",
    title: "Interactive Academic Curriculum Browser - Item 400",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0401",
    code: "NEC-SYLLABUSBROWSER-0401",
    title: "Interactive Academic Curriculum Browser - Item 401",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0402",
    code: "NEC-SYLLABUSBROWSER-0402",
    title: "Interactive Academic Curriculum Browser - Item 402",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0403",
    code: "NEC-SYLLABUSBROWSER-0403",
    title: "Interactive Academic Curriculum Browser - Item 403",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0404",
    code: "NEC-SYLLABUSBROWSER-0404",
    title: "Interactive Academic Curriculum Browser - Item 404",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0405",
    code: "NEC-SYLLABUSBROWSER-0405",
    title: "Interactive Academic Curriculum Browser - Item 405",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0406",
    code: "NEC-SYLLABUSBROWSER-0406",
    title: "Interactive Academic Curriculum Browser - Item 406",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0407",
    code: "NEC-SYLLABUSBROWSER-0407",
    title: "Interactive Academic Curriculum Browser - Item 407",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0408",
    code: "NEC-SYLLABUSBROWSER-0408",
    title: "Interactive Academic Curriculum Browser - Item 408",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0409",
    code: "NEC-SYLLABUSBROWSER-0409",
    title: "Interactive Academic Curriculum Browser - Item 409",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0410",
    code: "NEC-SYLLABUSBROWSER-0410",
    title: "Interactive Academic Curriculum Browser - Item 410",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0411",
    code: "NEC-SYLLABUSBROWSER-0411",
    title: "Interactive Academic Curriculum Browser - Item 411",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0412",
    code: "NEC-SYLLABUSBROWSER-0412",
    title: "Interactive Academic Curriculum Browser - Item 412",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0413",
    code: "NEC-SYLLABUSBROWSER-0413",
    title: "Interactive Academic Curriculum Browser - Item 413",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0414",
    code: "NEC-SYLLABUSBROWSER-0414",
    title: "Interactive Academic Curriculum Browser - Item 414",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0415",
    code: "NEC-SYLLABUSBROWSER-0415",
    title: "Interactive Academic Curriculum Browser - Item 415",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0416",
    code: "NEC-SYLLABUSBROWSER-0416",
    title: "Interactive Academic Curriculum Browser - Item 416",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0417",
    code: "NEC-SYLLABUSBROWSER-0417",
    title: "Interactive Academic Curriculum Browser - Item 417",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0418",
    code: "NEC-SYLLABUSBROWSER-0418",
    title: "Interactive Academic Curriculum Browser - Item 418",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0419",
    code: "NEC-SYLLABUSBROWSER-0419",
    title: "Interactive Academic Curriculum Browser - Item 419",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0420",
    code: "NEC-SYLLABUSBROWSER-0420",
    title: "Interactive Academic Curriculum Browser - Item 420",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0421",
    code: "NEC-SYLLABUSBROWSER-0421",
    title: "Interactive Academic Curriculum Browser - Item 421",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0422",
    code: "NEC-SYLLABUSBROWSER-0422",
    title: "Interactive Academic Curriculum Browser - Item 422",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0423",
    code: "NEC-SYLLABUSBROWSER-0423",
    title: "Interactive Academic Curriculum Browser - Item 423",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0424",
    code: "NEC-SYLLABUSBROWSER-0424",
    title: "Interactive Academic Curriculum Browser - Item 424",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0425",
    code: "NEC-SYLLABUSBROWSER-0425",
    title: "Interactive Academic Curriculum Browser - Item 425",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0426",
    code: "NEC-SYLLABUSBROWSER-0426",
    title: "Interactive Academic Curriculum Browser - Item 426",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0427",
    code: "NEC-SYLLABUSBROWSER-0427",
    title: "Interactive Academic Curriculum Browser - Item 427",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0428",
    code: "NEC-SYLLABUSBROWSER-0428",
    title: "Interactive Academic Curriculum Browser - Item 428",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0429",
    code: "NEC-SYLLABUSBROWSER-0429",
    title: "Interactive Academic Curriculum Browser - Item 429",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0430",
    code: "NEC-SYLLABUSBROWSER-0430",
    title: "Interactive Academic Curriculum Browser - Item 430",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0431",
    code: "NEC-SYLLABUSBROWSER-0431",
    title: "Interactive Academic Curriculum Browser - Item 431",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0432",
    code: "NEC-SYLLABUSBROWSER-0432",
    title: "Interactive Academic Curriculum Browser - Item 432",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0433",
    code: "NEC-SYLLABUSBROWSER-0433",
    title: "Interactive Academic Curriculum Browser - Item 433",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0434",
    code: "NEC-SYLLABUSBROWSER-0434",
    title: "Interactive Academic Curriculum Browser - Item 434",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0435",
    code: "NEC-SYLLABUSBROWSER-0435",
    title: "Interactive Academic Curriculum Browser - Item 435",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0436",
    code: "NEC-SYLLABUSBROWSER-0436",
    title: "Interactive Academic Curriculum Browser - Item 436",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0437",
    code: "NEC-SYLLABUSBROWSER-0437",
    title: "Interactive Academic Curriculum Browser - Item 437",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0438",
    code: "NEC-SYLLABUSBROWSER-0438",
    title: "Interactive Academic Curriculum Browser - Item 438",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0439",
    code: "NEC-SYLLABUSBROWSER-0439",
    title: "Interactive Academic Curriculum Browser - Item 439",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0440",
    code: "NEC-SYLLABUSBROWSER-0440",
    title: "Interactive Academic Curriculum Browser - Item 440",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0441",
    code: "NEC-SYLLABUSBROWSER-0441",
    title: "Interactive Academic Curriculum Browser - Item 441",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0442",
    code: "NEC-SYLLABUSBROWSER-0442",
    title: "Interactive Academic Curriculum Browser - Item 442",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0443",
    code: "NEC-SYLLABUSBROWSER-0443",
    title: "Interactive Academic Curriculum Browser - Item 443",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0444",
    code: "NEC-SYLLABUSBROWSER-0444",
    title: "Interactive Academic Curriculum Browser - Item 444",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0445",
    code: "NEC-SYLLABUSBROWSER-0445",
    title: "Interactive Academic Curriculum Browser - Item 445",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0446",
    code: "NEC-SYLLABUSBROWSER-0446",
    title: "Interactive Academic Curriculum Browser - Item 446",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0447",
    code: "NEC-SYLLABUSBROWSER-0447",
    title: "Interactive Academic Curriculum Browser - Item 447",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0448",
    code: "NEC-SYLLABUSBROWSER-0448",
    title: "Interactive Academic Curriculum Browser - Item 448",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0449",
    code: "NEC-SYLLABUSBROWSER-0449",
    title: "Interactive Academic Curriculum Browser - Item 449",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0450",
    code: "NEC-SYLLABUSBROWSER-0450",
    title: "Interactive Academic Curriculum Browser - Item 450",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0451",
    code: "NEC-SYLLABUSBROWSER-0451",
    title: "Interactive Academic Curriculum Browser - Item 451",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0452",
    code: "NEC-SYLLABUSBROWSER-0452",
    title: "Interactive Academic Curriculum Browser - Item 452",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0453",
    code: "NEC-SYLLABUSBROWSER-0453",
    title: "Interactive Academic Curriculum Browser - Item 453",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0454",
    code: "NEC-SYLLABUSBROWSER-0454",
    title: "Interactive Academic Curriculum Browser - Item 454",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0455",
    code: "NEC-SYLLABUSBROWSER-0455",
    title: "Interactive Academic Curriculum Browser - Item 455",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0456",
    code: "NEC-SYLLABUSBROWSER-0456",
    title: "Interactive Academic Curriculum Browser - Item 456",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0457",
    code: "NEC-SYLLABUSBROWSER-0457",
    title: "Interactive Academic Curriculum Browser - Item 457",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0458",
    code: "NEC-SYLLABUSBROWSER-0458",
    title: "Interactive Academic Curriculum Browser - Item 458",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0459",
    code: "NEC-SYLLABUSBROWSER-0459",
    title: "Interactive Academic Curriculum Browser - Item 459",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0460",
    code: "NEC-SYLLABUSBROWSER-0460",
    title: "Interactive Academic Curriculum Browser - Item 460",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0461",
    code: "NEC-SYLLABUSBROWSER-0461",
    title: "Interactive Academic Curriculum Browser - Item 461",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0462",
    code: "NEC-SYLLABUSBROWSER-0462",
    title: "Interactive Academic Curriculum Browser - Item 462",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0463",
    code: "NEC-SYLLABUSBROWSER-0463",
    title: "Interactive Academic Curriculum Browser - Item 463",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0464",
    code: "NEC-SYLLABUSBROWSER-0464",
    title: "Interactive Academic Curriculum Browser - Item 464",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0465",
    code: "NEC-SYLLABUSBROWSER-0465",
    title: "Interactive Academic Curriculum Browser - Item 465",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0466",
    code: "NEC-SYLLABUSBROWSER-0466",
    title: "Interactive Academic Curriculum Browser - Item 466",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0467",
    code: "NEC-SYLLABUSBROWSER-0467",
    title: "Interactive Academic Curriculum Browser - Item 467",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0468",
    code: "NEC-SYLLABUSBROWSER-0468",
    title: "Interactive Academic Curriculum Browser - Item 468",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0469",
    code: "NEC-SYLLABUSBROWSER-0469",
    title: "Interactive Academic Curriculum Browser - Item 469",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0470",
    code: "NEC-SYLLABUSBROWSER-0470",
    title: "Interactive Academic Curriculum Browser - Item 470",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0471",
    code: "NEC-SYLLABUSBROWSER-0471",
    title: "Interactive Academic Curriculum Browser - Item 471",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0472",
    code: "NEC-SYLLABUSBROWSER-0472",
    title: "Interactive Academic Curriculum Browser - Item 472",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0473",
    code: "NEC-SYLLABUSBROWSER-0473",
    title: "Interactive Academic Curriculum Browser - Item 473",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0474",
    code: "NEC-SYLLABUSBROWSER-0474",
    title: "Interactive Academic Curriculum Browser - Item 474",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0475",
    code: "NEC-SYLLABUSBROWSER-0475",
    title: "Interactive Academic Curriculum Browser - Item 475",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0476",
    code: "NEC-SYLLABUSBROWSER-0476",
    title: "Interactive Academic Curriculum Browser - Item 476",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0477",
    code: "NEC-SYLLABUSBROWSER-0477",
    title: "Interactive Academic Curriculum Browser - Item 477",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0478",
    code: "NEC-SYLLABUSBROWSER-0478",
    title: "Interactive Academic Curriculum Browser - Item 478",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0479",
    code: "NEC-SYLLABUSBROWSER-0479",
    title: "Interactive Academic Curriculum Browser - Item 479",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0480",
    code: "NEC-SYLLABUSBROWSER-0480",
    title: "Interactive Academic Curriculum Browser - Item 480",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0481",
    code: "NEC-SYLLABUSBROWSER-0481",
    title: "Interactive Academic Curriculum Browser - Item 481",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0482",
    code: "NEC-SYLLABUSBROWSER-0482",
    title: "Interactive Academic Curriculum Browser - Item 482",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0483",
    code: "NEC-SYLLABUSBROWSER-0483",
    title: "Interactive Academic Curriculum Browser - Item 483",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0484",
    code: "NEC-SYLLABUSBROWSER-0484",
    title: "Interactive Academic Curriculum Browser - Item 484",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0485",
    code: "NEC-SYLLABUSBROWSER-0485",
    title: "Interactive Academic Curriculum Browser - Item 485",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0486",
    code: "NEC-SYLLABUSBROWSER-0486",
    title: "Interactive Academic Curriculum Browser - Item 486",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0487",
    code: "NEC-SYLLABUSBROWSER-0487",
    title: "Interactive Academic Curriculum Browser - Item 487",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0488",
    code: "NEC-SYLLABUSBROWSER-0488",
    title: "Interactive Academic Curriculum Browser - Item 488",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0489",
    code: "NEC-SYLLABUSBROWSER-0489",
    title: "Interactive Academic Curriculum Browser - Item 489",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0490",
    code: "NEC-SYLLABUSBROWSER-0490",
    title: "Interactive Academic Curriculum Browser - Item 490",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0491",
    code: "NEC-SYLLABUSBROWSER-0491",
    title: "Interactive Academic Curriculum Browser - Item 491",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0492",
    code: "NEC-SYLLABUSBROWSER-0492",
    title: "Interactive Academic Curriculum Browser - Item 492",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0493",
    code: "NEC-SYLLABUSBROWSER-0493",
    title: "Interactive Academic Curriculum Browser - Item 493",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0494",
    code: "NEC-SYLLABUSBROWSER-0494",
    title: "Interactive Academic Curriculum Browser - Item 494",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0495",
    code: "NEC-SYLLABUSBROWSER-0495",
    title: "Interactive Academic Curriculum Browser - Item 495",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0496",
    code: "NEC-SYLLABUSBROWSER-0496",
    title: "Interactive Academic Curriculum Browser - Item 496",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0497",
    code: "NEC-SYLLABUSBROWSER-0497",
    title: "Interactive Academic Curriculum Browser - Item 497",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0498",
    code: "NEC-SYLLABUSBROWSER-0498",
    title: "Interactive Academic Curriculum Browser - Item 498",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0499",
    code: "NEC-SYLLABUSBROWSER-0499",
    title: "Interactive Academic Curriculum Browser - Item 499",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0500",
    code: "NEC-SYLLABUSBROWSER-0500",
    title: "Interactive Academic Curriculum Browser - Item 500",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0501",
    code: "NEC-SYLLABUSBROWSER-0501",
    title: "Interactive Academic Curriculum Browser - Item 501",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0502",
    code: "NEC-SYLLABUSBROWSER-0502",
    title: "Interactive Academic Curriculum Browser - Item 502",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0503",
    code: "NEC-SYLLABUSBROWSER-0503",
    title: "Interactive Academic Curriculum Browser - Item 503",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0504",
    code: "NEC-SYLLABUSBROWSER-0504",
    title: "Interactive Academic Curriculum Browser - Item 504",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0505",
    code: "NEC-SYLLABUSBROWSER-0505",
    title: "Interactive Academic Curriculum Browser - Item 505",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0506",
    code: "NEC-SYLLABUSBROWSER-0506",
    title: "Interactive Academic Curriculum Browser - Item 506",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0507",
    code: "NEC-SYLLABUSBROWSER-0507",
    title: "Interactive Academic Curriculum Browser - Item 507",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0508",
    code: "NEC-SYLLABUSBROWSER-0508",
    title: "Interactive Academic Curriculum Browser - Item 508",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0509",
    code: "NEC-SYLLABUSBROWSER-0509",
    title: "Interactive Academic Curriculum Browser - Item 509",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0510",
    code: "NEC-SYLLABUSBROWSER-0510",
    title: "Interactive Academic Curriculum Browser - Item 510",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0511",
    code: "NEC-SYLLABUSBROWSER-0511",
    title: "Interactive Academic Curriculum Browser - Item 511",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0512",
    code: "NEC-SYLLABUSBROWSER-0512",
    title: "Interactive Academic Curriculum Browser - Item 512",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0513",
    code: "NEC-SYLLABUSBROWSER-0513",
    title: "Interactive Academic Curriculum Browser - Item 513",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0514",
    code: "NEC-SYLLABUSBROWSER-0514",
    title: "Interactive Academic Curriculum Browser - Item 514",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0515",
    code: "NEC-SYLLABUSBROWSER-0515",
    title: "Interactive Academic Curriculum Browser - Item 515",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0516",
    code: "NEC-SYLLABUSBROWSER-0516",
    title: "Interactive Academic Curriculum Browser - Item 516",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0517",
    code: "NEC-SYLLABUSBROWSER-0517",
    title: "Interactive Academic Curriculum Browser - Item 517",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0518",
    code: "NEC-SYLLABUSBROWSER-0518",
    title: "Interactive Academic Curriculum Browser - Item 518",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0519",
    code: "NEC-SYLLABUSBROWSER-0519",
    title: "Interactive Academic Curriculum Browser - Item 519",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0520",
    code: "NEC-SYLLABUSBROWSER-0520",
    title: "Interactive Academic Curriculum Browser - Item 520",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0521",
    code: "NEC-SYLLABUSBROWSER-0521",
    title: "Interactive Academic Curriculum Browser - Item 521",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0522",
    code: "NEC-SYLLABUSBROWSER-0522",
    title: "Interactive Academic Curriculum Browser - Item 522",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0523",
    code: "NEC-SYLLABUSBROWSER-0523",
    title: "Interactive Academic Curriculum Browser - Item 523",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0524",
    code: "NEC-SYLLABUSBROWSER-0524",
    title: "Interactive Academic Curriculum Browser - Item 524",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0525",
    code: "NEC-SYLLABUSBROWSER-0525",
    title: "Interactive Academic Curriculum Browser - Item 525",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0526",
    code: "NEC-SYLLABUSBROWSER-0526",
    title: "Interactive Academic Curriculum Browser - Item 526",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0527",
    code: "NEC-SYLLABUSBROWSER-0527",
    title: "Interactive Academic Curriculum Browser - Item 527",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0528",
    code: "NEC-SYLLABUSBROWSER-0528",
    title: "Interactive Academic Curriculum Browser - Item 528",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0529",
    code: "NEC-SYLLABUSBROWSER-0529",
    title: "Interactive Academic Curriculum Browser - Item 529",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0530",
    code: "NEC-SYLLABUSBROWSER-0530",
    title: "Interactive Academic Curriculum Browser - Item 530",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0531",
    code: "NEC-SYLLABUSBROWSER-0531",
    title: "Interactive Academic Curriculum Browser - Item 531",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0532",
    code: "NEC-SYLLABUSBROWSER-0532",
    title: "Interactive Academic Curriculum Browser - Item 532",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0533",
    code: "NEC-SYLLABUSBROWSER-0533",
    title: "Interactive Academic Curriculum Browser - Item 533",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0534",
    code: "NEC-SYLLABUSBROWSER-0534",
    title: "Interactive Academic Curriculum Browser - Item 534",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0535",
    code: "NEC-SYLLABUSBROWSER-0535",
    title: "Interactive Academic Curriculum Browser - Item 535",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0536",
    code: "NEC-SYLLABUSBROWSER-0536",
    title: "Interactive Academic Curriculum Browser - Item 536",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0537",
    code: "NEC-SYLLABUSBROWSER-0537",
    title: "Interactive Academic Curriculum Browser - Item 537",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0538",
    code: "NEC-SYLLABUSBROWSER-0538",
    title: "Interactive Academic Curriculum Browser - Item 538",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0539",
    code: "NEC-SYLLABUSBROWSER-0539",
    title: "Interactive Academic Curriculum Browser - Item 539",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0540",
    code: "NEC-SYLLABUSBROWSER-0540",
    title: "Interactive Academic Curriculum Browser - Item 540",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0541",
    code: "NEC-SYLLABUSBROWSER-0541",
    title: "Interactive Academic Curriculum Browser - Item 541",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0542",
    code: "NEC-SYLLABUSBROWSER-0542",
    title: "Interactive Academic Curriculum Browser - Item 542",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0543",
    code: "NEC-SYLLABUSBROWSER-0543",
    title: "Interactive Academic Curriculum Browser - Item 543",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0544",
    code: "NEC-SYLLABUSBROWSER-0544",
    title: "Interactive Academic Curriculum Browser - Item 544",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0545",
    code: "NEC-SYLLABUSBROWSER-0545",
    title: "Interactive Academic Curriculum Browser - Item 545",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0546",
    code: "NEC-SYLLABUSBROWSER-0546",
    title: "Interactive Academic Curriculum Browser - Item 546",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0547",
    code: "NEC-SYLLABUSBROWSER-0547",
    title: "Interactive Academic Curriculum Browser - Item 547",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0548",
    code: "NEC-SYLLABUSBROWSER-0548",
    title: "Interactive Academic Curriculum Browser - Item 548",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0549",
    code: "NEC-SYLLABUSBROWSER-0549",
    title: "Interactive Academic Curriculum Browser - Item 549",
    category: "SYLLABUSBROWSER_CORE",
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
    id: "syllabusbrowser-0550",
    code: "NEC-SYLLABUSBROWSER-0550",
    title: "Interactive Academic Curriculum Browser - Item 550",
    category: "SYLLABUSBROWSER_CORE",
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

export function filterSYLLABUSBROWSERBySemester(semester: number): AcademicEntityItem[] {
  return SYLLABUSBROWSER_REGISTRY.filter(item => item.semester === semester);
}

export function computeSYLLABUSBROWSERAverageCredits(): number {
  const total = SYLLABUSBROWSER_REGISTRY.reduce((acc, curr) => acc + curr.credits, 0);
  return total / SYLLABUSBROWSER_REGISTRY.length;
}
