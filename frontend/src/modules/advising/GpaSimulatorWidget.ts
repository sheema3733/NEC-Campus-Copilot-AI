/**
 * Narasaraopeta Engineering College (Autonomous) — Frontend Enterprise Module
 * Module: Academic Advising GPA Simulator Widget (GPASIMULATORUI)
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

export const GPASIMULATORUI_REGISTRY: AcademicEntityItem[] = [
  {
    id: "gpasimulatorui-0001",
    code: "NEC-GPASIMULATORUI-0001",
    title: "Academic Advising GPA Simulator Widget - Item 1",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0002",
    code: "NEC-GPASIMULATORUI-0002",
    title: "Academic Advising GPA Simulator Widget - Item 2",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0003",
    code: "NEC-GPASIMULATORUI-0003",
    title: "Academic Advising GPA Simulator Widget - Item 3",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0004",
    code: "NEC-GPASIMULATORUI-0004",
    title: "Academic Advising GPA Simulator Widget - Item 4",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0005",
    code: "NEC-GPASIMULATORUI-0005",
    title: "Academic Advising GPA Simulator Widget - Item 5",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0006",
    code: "NEC-GPASIMULATORUI-0006",
    title: "Academic Advising GPA Simulator Widget - Item 6",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0007",
    code: "NEC-GPASIMULATORUI-0007",
    title: "Academic Advising GPA Simulator Widget - Item 7",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0008",
    code: "NEC-GPASIMULATORUI-0008",
    title: "Academic Advising GPA Simulator Widget - Item 8",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0009",
    code: "NEC-GPASIMULATORUI-0009",
    title: "Academic Advising GPA Simulator Widget - Item 9",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0010",
    code: "NEC-GPASIMULATORUI-0010",
    title: "Academic Advising GPA Simulator Widget - Item 10",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0011",
    code: "NEC-GPASIMULATORUI-0011",
    title: "Academic Advising GPA Simulator Widget - Item 11",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0012",
    code: "NEC-GPASIMULATORUI-0012",
    title: "Academic Advising GPA Simulator Widget - Item 12",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0013",
    code: "NEC-GPASIMULATORUI-0013",
    title: "Academic Advising GPA Simulator Widget - Item 13",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0014",
    code: "NEC-GPASIMULATORUI-0014",
    title: "Academic Advising GPA Simulator Widget - Item 14",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0015",
    code: "NEC-GPASIMULATORUI-0015",
    title: "Academic Advising GPA Simulator Widget - Item 15",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0016",
    code: "NEC-GPASIMULATORUI-0016",
    title: "Academic Advising GPA Simulator Widget - Item 16",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0017",
    code: "NEC-GPASIMULATORUI-0017",
    title: "Academic Advising GPA Simulator Widget - Item 17",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0018",
    code: "NEC-GPASIMULATORUI-0018",
    title: "Academic Advising GPA Simulator Widget - Item 18",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0019",
    code: "NEC-GPASIMULATORUI-0019",
    title: "Academic Advising GPA Simulator Widget - Item 19",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0020",
    code: "NEC-GPASIMULATORUI-0020",
    title: "Academic Advising GPA Simulator Widget - Item 20",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0021",
    code: "NEC-GPASIMULATORUI-0021",
    title: "Academic Advising GPA Simulator Widget - Item 21",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0022",
    code: "NEC-GPASIMULATORUI-0022",
    title: "Academic Advising GPA Simulator Widget - Item 22",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0023",
    code: "NEC-GPASIMULATORUI-0023",
    title: "Academic Advising GPA Simulator Widget - Item 23",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0024",
    code: "NEC-GPASIMULATORUI-0024",
    title: "Academic Advising GPA Simulator Widget - Item 24",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0025",
    code: "NEC-GPASIMULATORUI-0025",
    title: "Academic Advising GPA Simulator Widget - Item 25",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0026",
    code: "NEC-GPASIMULATORUI-0026",
    title: "Academic Advising GPA Simulator Widget - Item 26",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0027",
    code: "NEC-GPASIMULATORUI-0027",
    title: "Academic Advising GPA Simulator Widget - Item 27",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0028",
    code: "NEC-GPASIMULATORUI-0028",
    title: "Academic Advising GPA Simulator Widget - Item 28",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0029",
    code: "NEC-GPASIMULATORUI-0029",
    title: "Academic Advising GPA Simulator Widget - Item 29",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0030",
    code: "NEC-GPASIMULATORUI-0030",
    title: "Academic Advising GPA Simulator Widget - Item 30",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0031",
    code: "NEC-GPASIMULATORUI-0031",
    title: "Academic Advising GPA Simulator Widget - Item 31",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0032",
    code: "NEC-GPASIMULATORUI-0032",
    title: "Academic Advising GPA Simulator Widget - Item 32",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0033",
    code: "NEC-GPASIMULATORUI-0033",
    title: "Academic Advising GPA Simulator Widget - Item 33",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0034",
    code: "NEC-GPASIMULATORUI-0034",
    title: "Academic Advising GPA Simulator Widget - Item 34",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0035",
    code: "NEC-GPASIMULATORUI-0035",
    title: "Academic Advising GPA Simulator Widget - Item 35",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0036",
    code: "NEC-GPASIMULATORUI-0036",
    title: "Academic Advising GPA Simulator Widget - Item 36",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0037",
    code: "NEC-GPASIMULATORUI-0037",
    title: "Academic Advising GPA Simulator Widget - Item 37",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0038",
    code: "NEC-GPASIMULATORUI-0038",
    title: "Academic Advising GPA Simulator Widget - Item 38",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0039",
    code: "NEC-GPASIMULATORUI-0039",
    title: "Academic Advising GPA Simulator Widget - Item 39",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0040",
    code: "NEC-GPASIMULATORUI-0040",
    title: "Academic Advising GPA Simulator Widget - Item 40",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0041",
    code: "NEC-GPASIMULATORUI-0041",
    title: "Academic Advising GPA Simulator Widget - Item 41",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0042",
    code: "NEC-GPASIMULATORUI-0042",
    title: "Academic Advising GPA Simulator Widget - Item 42",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0043",
    code: "NEC-GPASIMULATORUI-0043",
    title: "Academic Advising GPA Simulator Widget - Item 43",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0044",
    code: "NEC-GPASIMULATORUI-0044",
    title: "Academic Advising GPA Simulator Widget - Item 44",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0045",
    code: "NEC-GPASIMULATORUI-0045",
    title: "Academic Advising GPA Simulator Widget - Item 45",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0046",
    code: "NEC-GPASIMULATORUI-0046",
    title: "Academic Advising GPA Simulator Widget - Item 46",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0047",
    code: "NEC-GPASIMULATORUI-0047",
    title: "Academic Advising GPA Simulator Widget - Item 47",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0048",
    code: "NEC-GPASIMULATORUI-0048",
    title: "Academic Advising GPA Simulator Widget - Item 48",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0049",
    code: "NEC-GPASIMULATORUI-0049",
    title: "Academic Advising GPA Simulator Widget - Item 49",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0050",
    code: "NEC-GPASIMULATORUI-0050",
    title: "Academic Advising GPA Simulator Widget - Item 50",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0051",
    code: "NEC-GPASIMULATORUI-0051",
    title: "Academic Advising GPA Simulator Widget - Item 51",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0052",
    code: "NEC-GPASIMULATORUI-0052",
    title: "Academic Advising GPA Simulator Widget - Item 52",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0053",
    code: "NEC-GPASIMULATORUI-0053",
    title: "Academic Advising GPA Simulator Widget - Item 53",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0054",
    code: "NEC-GPASIMULATORUI-0054",
    title: "Academic Advising GPA Simulator Widget - Item 54",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0055",
    code: "NEC-GPASIMULATORUI-0055",
    title: "Academic Advising GPA Simulator Widget - Item 55",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0056",
    code: "NEC-GPASIMULATORUI-0056",
    title: "Academic Advising GPA Simulator Widget - Item 56",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0057",
    code: "NEC-GPASIMULATORUI-0057",
    title: "Academic Advising GPA Simulator Widget - Item 57",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0058",
    code: "NEC-GPASIMULATORUI-0058",
    title: "Academic Advising GPA Simulator Widget - Item 58",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0059",
    code: "NEC-GPASIMULATORUI-0059",
    title: "Academic Advising GPA Simulator Widget - Item 59",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0060",
    code: "NEC-GPASIMULATORUI-0060",
    title: "Academic Advising GPA Simulator Widget - Item 60",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0061",
    code: "NEC-GPASIMULATORUI-0061",
    title: "Academic Advising GPA Simulator Widget - Item 61",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0062",
    code: "NEC-GPASIMULATORUI-0062",
    title: "Academic Advising GPA Simulator Widget - Item 62",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0063",
    code: "NEC-GPASIMULATORUI-0063",
    title: "Academic Advising GPA Simulator Widget - Item 63",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0064",
    code: "NEC-GPASIMULATORUI-0064",
    title: "Academic Advising GPA Simulator Widget - Item 64",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0065",
    code: "NEC-GPASIMULATORUI-0065",
    title: "Academic Advising GPA Simulator Widget - Item 65",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0066",
    code: "NEC-GPASIMULATORUI-0066",
    title: "Academic Advising GPA Simulator Widget - Item 66",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0067",
    code: "NEC-GPASIMULATORUI-0067",
    title: "Academic Advising GPA Simulator Widget - Item 67",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0068",
    code: "NEC-GPASIMULATORUI-0068",
    title: "Academic Advising GPA Simulator Widget - Item 68",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0069",
    code: "NEC-GPASIMULATORUI-0069",
    title: "Academic Advising GPA Simulator Widget - Item 69",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0070",
    code: "NEC-GPASIMULATORUI-0070",
    title: "Academic Advising GPA Simulator Widget - Item 70",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0071",
    code: "NEC-GPASIMULATORUI-0071",
    title: "Academic Advising GPA Simulator Widget - Item 71",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0072",
    code: "NEC-GPASIMULATORUI-0072",
    title: "Academic Advising GPA Simulator Widget - Item 72",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0073",
    code: "NEC-GPASIMULATORUI-0073",
    title: "Academic Advising GPA Simulator Widget - Item 73",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0074",
    code: "NEC-GPASIMULATORUI-0074",
    title: "Academic Advising GPA Simulator Widget - Item 74",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0075",
    code: "NEC-GPASIMULATORUI-0075",
    title: "Academic Advising GPA Simulator Widget - Item 75",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0076",
    code: "NEC-GPASIMULATORUI-0076",
    title: "Academic Advising GPA Simulator Widget - Item 76",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0077",
    code: "NEC-GPASIMULATORUI-0077",
    title: "Academic Advising GPA Simulator Widget - Item 77",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0078",
    code: "NEC-GPASIMULATORUI-0078",
    title: "Academic Advising GPA Simulator Widget - Item 78",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0079",
    code: "NEC-GPASIMULATORUI-0079",
    title: "Academic Advising GPA Simulator Widget - Item 79",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0080",
    code: "NEC-GPASIMULATORUI-0080",
    title: "Academic Advising GPA Simulator Widget - Item 80",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0081",
    code: "NEC-GPASIMULATORUI-0081",
    title: "Academic Advising GPA Simulator Widget - Item 81",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0082",
    code: "NEC-GPASIMULATORUI-0082",
    title: "Academic Advising GPA Simulator Widget - Item 82",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0083",
    code: "NEC-GPASIMULATORUI-0083",
    title: "Academic Advising GPA Simulator Widget - Item 83",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0084",
    code: "NEC-GPASIMULATORUI-0084",
    title: "Academic Advising GPA Simulator Widget - Item 84",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0085",
    code: "NEC-GPASIMULATORUI-0085",
    title: "Academic Advising GPA Simulator Widget - Item 85",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0086",
    code: "NEC-GPASIMULATORUI-0086",
    title: "Academic Advising GPA Simulator Widget - Item 86",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0087",
    code: "NEC-GPASIMULATORUI-0087",
    title: "Academic Advising GPA Simulator Widget - Item 87",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0088",
    code: "NEC-GPASIMULATORUI-0088",
    title: "Academic Advising GPA Simulator Widget - Item 88",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0089",
    code: "NEC-GPASIMULATORUI-0089",
    title: "Academic Advising GPA Simulator Widget - Item 89",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0090",
    code: "NEC-GPASIMULATORUI-0090",
    title: "Academic Advising GPA Simulator Widget - Item 90",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0091",
    code: "NEC-GPASIMULATORUI-0091",
    title: "Academic Advising GPA Simulator Widget - Item 91",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0092",
    code: "NEC-GPASIMULATORUI-0092",
    title: "Academic Advising GPA Simulator Widget - Item 92",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0093",
    code: "NEC-GPASIMULATORUI-0093",
    title: "Academic Advising GPA Simulator Widget - Item 93",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0094",
    code: "NEC-GPASIMULATORUI-0094",
    title: "Academic Advising GPA Simulator Widget - Item 94",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0095",
    code: "NEC-GPASIMULATORUI-0095",
    title: "Academic Advising GPA Simulator Widget - Item 95",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0096",
    code: "NEC-GPASIMULATORUI-0096",
    title: "Academic Advising GPA Simulator Widget - Item 96",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0097",
    code: "NEC-GPASIMULATORUI-0097",
    title: "Academic Advising GPA Simulator Widget - Item 97",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0098",
    code: "NEC-GPASIMULATORUI-0098",
    title: "Academic Advising GPA Simulator Widget - Item 98",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0099",
    code: "NEC-GPASIMULATORUI-0099",
    title: "Academic Advising GPA Simulator Widget - Item 99",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0100",
    code: "NEC-GPASIMULATORUI-0100",
    title: "Academic Advising GPA Simulator Widget - Item 100",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0101",
    code: "NEC-GPASIMULATORUI-0101",
    title: "Academic Advising GPA Simulator Widget - Item 101",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0102",
    code: "NEC-GPASIMULATORUI-0102",
    title: "Academic Advising GPA Simulator Widget - Item 102",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0103",
    code: "NEC-GPASIMULATORUI-0103",
    title: "Academic Advising GPA Simulator Widget - Item 103",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0104",
    code: "NEC-GPASIMULATORUI-0104",
    title: "Academic Advising GPA Simulator Widget - Item 104",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0105",
    code: "NEC-GPASIMULATORUI-0105",
    title: "Academic Advising GPA Simulator Widget - Item 105",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0106",
    code: "NEC-GPASIMULATORUI-0106",
    title: "Academic Advising GPA Simulator Widget - Item 106",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0107",
    code: "NEC-GPASIMULATORUI-0107",
    title: "Academic Advising GPA Simulator Widget - Item 107",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0108",
    code: "NEC-GPASIMULATORUI-0108",
    title: "Academic Advising GPA Simulator Widget - Item 108",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0109",
    code: "NEC-GPASIMULATORUI-0109",
    title: "Academic Advising GPA Simulator Widget - Item 109",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0110",
    code: "NEC-GPASIMULATORUI-0110",
    title: "Academic Advising GPA Simulator Widget - Item 110",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0111",
    code: "NEC-GPASIMULATORUI-0111",
    title: "Academic Advising GPA Simulator Widget - Item 111",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0112",
    code: "NEC-GPASIMULATORUI-0112",
    title: "Academic Advising GPA Simulator Widget - Item 112",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0113",
    code: "NEC-GPASIMULATORUI-0113",
    title: "Academic Advising GPA Simulator Widget - Item 113",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0114",
    code: "NEC-GPASIMULATORUI-0114",
    title: "Academic Advising GPA Simulator Widget - Item 114",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0115",
    code: "NEC-GPASIMULATORUI-0115",
    title: "Academic Advising GPA Simulator Widget - Item 115",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0116",
    code: "NEC-GPASIMULATORUI-0116",
    title: "Academic Advising GPA Simulator Widget - Item 116",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0117",
    code: "NEC-GPASIMULATORUI-0117",
    title: "Academic Advising GPA Simulator Widget - Item 117",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0118",
    code: "NEC-GPASIMULATORUI-0118",
    title: "Academic Advising GPA Simulator Widget - Item 118",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0119",
    code: "NEC-GPASIMULATORUI-0119",
    title: "Academic Advising GPA Simulator Widget - Item 119",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0120",
    code: "NEC-GPASIMULATORUI-0120",
    title: "Academic Advising GPA Simulator Widget - Item 120",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0121",
    code: "NEC-GPASIMULATORUI-0121",
    title: "Academic Advising GPA Simulator Widget - Item 121",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0122",
    code: "NEC-GPASIMULATORUI-0122",
    title: "Academic Advising GPA Simulator Widget - Item 122",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0123",
    code: "NEC-GPASIMULATORUI-0123",
    title: "Academic Advising GPA Simulator Widget - Item 123",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0124",
    code: "NEC-GPASIMULATORUI-0124",
    title: "Academic Advising GPA Simulator Widget - Item 124",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0125",
    code: "NEC-GPASIMULATORUI-0125",
    title: "Academic Advising GPA Simulator Widget - Item 125",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0126",
    code: "NEC-GPASIMULATORUI-0126",
    title: "Academic Advising GPA Simulator Widget - Item 126",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0127",
    code: "NEC-GPASIMULATORUI-0127",
    title: "Academic Advising GPA Simulator Widget - Item 127",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0128",
    code: "NEC-GPASIMULATORUI-0128",
    title: "Academic Advising GPA Simulator Widget - Item 128",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0129",
    code: "NEC-GPASIMULATORUI-0129",
    title: "Academic Advising GPA Simulator Widget - Item 129",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0130",
    code: "NEC-GPASIMULATORUI-0130",
    title: "Academic Advising GPA Simulator Widget - Item 130",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0131",
    code: "NEC-GPASIMULATORUI-0131",
    title: "Academic Advising GPA Simulator Widget - Item 131",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0132",
    code: "NEC-GPASIMULATORUI-0132",
    title: "Academic Advising GPA Simulator Widget - Item 132",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0133",
    code: "NEC-GPASIMULATORUI-0133",
    title: "Academic Advising GPA Simulator Widget - Item 133",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0134",
    code: "NEC-GPASIMULATORUI-0134",
    title: "Academic Advising GPA Simulator Widget - Item 134",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0135",
    code: "NEC-GPASIMULATORUI-0135",
    title: "Academic Advising GPA Simulator Widget - Item 135",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0136",
    code: "NEC-GPASIMULATORUI-0136",
    title: "Academic Advising GPA Simulator Widget - Item 136",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0137",
    code: "NEC-GPASIMULATORUI-0137",
    title: "Academic Advising GPA Simulator Widget - Item 137",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0138",
    code: "NEC-GPASIMULATORUI-0138",
    title: "Academic Advising GPA Simulator Widget - Item 138",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0139",
    code: "NEC-GPASIMULATORUI-0139",
    title: "Academic Advising GPA Simulator Widget - Item 139",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0140",
    code: "NEC-GPASIMULATORUI-0140",
    title: "Academic Advising GPA Simulator Widget - Item 140",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0141",
    code: "NEC-GPASIMULATORUI-0141",
    title: "Academic Advising GPA Simulator Widget - Item 141",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0142",
    code: "NEC-GPASIMULATORUI-0142",
    title: "Academic Advising GPA Simulator Widget - Item 142",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0143",
    code: "NEC-GPASIMULATORUI-0143",
    title: "Academic Advising GPA Simulator Widget - Item 143",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0144",
    code: "NEC-GPASIMULATORUI-0144",
    title: "Academic Advising GPA Simulator Widget - Item 144",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0145",
    code: "NEC-GPASIMULATORUI-0145",
    title: "Academic Advising GPA Simulator Widget - Item 145",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0146",
    code: "NEC-GPASIMULATORUI-0146",
    title: "Academic Advising GPA Simulator Widget - Item 146",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0147",
    code: "NEC-GPASIMULATORUI-0147",
    title: "Academic Advising GPA Simulator Widget - Item 147",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0148",
    code: "NEC-GPASIMULATORUI-0148",
    title: "Academic Advising GPA Simulator Widget - Item 148",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0149",
    code: "NEC-GPASIMULATORUI-0149",
    title: "Academic Advising GPA Simulator Widget - Item 149",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0150",
    code: "NEC-GPASIMULATORUI-0150",
    title: "Academic Advising GPA Simulator Widget - Item 150",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0151",
    code: "NEC-GPASIMULATORUI-0151",
    title: "Academic Advising GPA Simulator Widget - Item 151",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0152",
    code: "NEC-GPASIMULATORUI-0152",
    title: "Academic Advising GPA Simulator Widget - Item 152",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0153",
    code: "NEC-GPASIMULATORUI-0153",
    title: "Academic Advising GPA Simulator Widget - Item 153",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0154",
    code: "NEC-GPASIMULATORUI-0154",
    title: "Academic Advising GPA Simulator Widget - Item 154",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0155",
    code: "NEC-GPASIMULATORUI-0155",
    title: "Academic Advising GPA Simulator Widget - Item 155",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0156",
    code: "NEC-GPASIMULATORUI-0156",
    title: "Academic Advising GPA Simulator Widget - Item 156",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0157",
    code: "NEC-GPASIMULATORUI-0157",
    title: "Academic Advising GPA Simulator Widget - Item 157",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0158",
    code: "NEC-GPASIMULATORUI-0158",
    title: "Academic Advising GPA Simulator Widget - Item 158",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0159",
    code: "NEC-GPASIMULATORUI-0159",
    title: "Academic Advising GPA Simulator Widget - Item 159",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0160",
    code: "NEC-GPASIMULATORUI-0160",
    title: "Academic Advising GPA Simulator Widget - Item 160",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0161",
    code: "NEC-GPASIMULATORUI-0161",
    title: "Academic Advising GPA Simulator Widget - Item 161",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0162",
    code: "NEC-GPASIMULATORUI-0162",
    title: "Academic Advising GPA Simulator Widget - Item 162",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0163",
    code: "NEC-GPASIMULATORUI-0163",
    title: "Academic Advising GPA Simulator Widget - Item 163",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0164",
    code: "NEC-GPASIMULATORUI-0164",
    title: "Academic Advising GPA Simulator Widget - Item 164",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0165",
    code: "NEC-GPASIMULATORUI-0165",
    title: "Academic Advising GPA Simulator Widget - Item 165",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0166",
    code: "NEC-GPASIMULATORUI-0166",
    title: "Academic Advising GPA Simulator Widget - Item 166",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0167",
    code: "NEC-GPASIMULATORUI-0167",
    title: "Academic Advising GPA Simulator Widget - Item 167",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0168",
    code: "NEC-GPASIMULATORUI-0168",
    title: "Academic Advising GPA Simulator Widget - Item 168",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0169",
    code: "NEC-GPASIMULATORUI-0169",
    title: "Academic Advising GPA Simulator Widget - Item 169",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0170",
    code: "NEC-GPASIMULATORUI-0170",
    title: "Academic Advising GPA Simulator Widget - Item 170",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0171",
    code: "NEC-GPASIMULATORUI-0171",
    title: "Academic Advising GPA Simulator Widget - Item 171",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0172",
    code: "NEC-GPASIMULATORUI-0172",
    title: "Academic Advising GPA Simulator Widget - Item 172",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0173",
    code: "NEC-GPASIMULATORUI-0173",
    title: "Academic Advising GPA Simulator Widget - Item 173",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0174",
    code: "NEC-GPASIMULATORUI-0174",
    title: "Academic Advising GPA Simulator Widget - Item 174",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0175",
    code: "NEC-GPASIMULATORUI-0175",
    title: "Academic Advising GPA Simulator Widget - Item 175",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0176",
    code: "NEC-GPASIMULATORUI-0176",
    title: "Academic Advising GPA Simulator Widget - Item 176",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0177",
    code: "NEC-GPASIMULATORUI-0177",
    title: "Academic Advising GPA Simulator Widget - Item 177",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0178",
    code: "NEC-GPASIMULATORUI-0178",
    title: "Academic Advising GPA Simulator Widget - Item 178",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0179",
    code: "NEC-GPASIMULATORUI-0179",
    title: "Academic Advising GPA Simulator Widget - Item 179",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0180",
    code: "NEC-GPASIMULATORUI-0180",
    title: "Academic Advising GPA Simulator Widget - Item 180",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0181",
    code: "NEC-GPASIMULATORUI-0181",
    title: "Academic Advising GPA Simulator Widget - Item 181",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0182",
    code: "NEC-GPASIMULATORUI-0182",
    title: "Academic Advising GPA Simulator Widget - Item 182",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0183",
    code: "NEC-GPASIMULATORUI-0183",
    title: "Academic Advising GPA Simulator Widget - Item 183",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0184",
    code: "NEC-GPASIMULATORUI-0184",
    title: "Academic Advising GPA Simulator Widget - Item 184",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0185",
    code: "NEC-GPASIMULATORUI-0185",
    title: "Academic Advising GPA Simulator Widget - Item 185",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0186",
    code: "NEC-GPASIMULATORUI-0186",
    title: "Academic Advising GPA Simulator Widget - Item 186",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0187",
    code: "NEC-GPASIMULATORUI-0187",
    title: "Academic Advising GPA Simulator Widget - Item 187",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0188",
    code: "NEC-GPASIMULATORUI-0188",
    title: "Academic Advising GPA Simulator Widget - Item 188",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0189",
    code: "NEC-GPASIMULATORUI-0189",
    title: "Academic Advising GPA Simulator Widget - Item 189",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0190",
    code: "NEC-GPASIMULATORUI-0190",
    title: "Academic Advising GPA Simulator Widget - Item 190",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0191",
    code: "NEC-GPASIMULATORUI-0191",
    title: "Academic Advising GPA Simulator Widget - Item 191",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0192",
    code: "NEC-GPASIMULATORUI-0192",
    title: "Academic Advising GPA Simulator Widget - Item 192",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0193",
    code: "NEC-GPASIMULATORUI-0193",
    title: "Academic Advising GPA Simulator Widget - Item 193",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0194",
    code: "NEC-GPASIMULATORUI-0194",
    title: "Academic Advising GPA Simulator Widget - Item 194",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0195",
    code: "NEC-GPASIMULATORUI-0195",
    title: "Academic Advising GPA Simulator Widget - Item 195",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0196",
    code: "NEC-GPASIMULATORUI-0196",
    title: "Academic Advising GPA Simulator Widget - Item 196",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0197",
    code: "NEC-GPASIMULATORUI-0197",
    title: "Academic Advising GPA Simulator Widget - Item 197",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0198",
    code: "NEC-GPASIMULATORUI-0198",
    title: "Academic Advising GPA Simulator Widget - Item 198",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0199",
    code: "NEC-GPASIMULATORUI-0199",
    title: "Academic Advising GPA Simulator Widget - Item 199",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0200",
    code: "NEC-GPASIMULATORUI-0200",
    title: "Academic Advising GPA Simulator Widget - Item 200",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0201",
    code: "NEC-GPASIMULATORUI-0201",
    title: "Academic Advising GPA Simulator Widget - Item 201",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0202",
    code: "NEC-GPASIMULATORUI-0202",
    title: "Academic Advising GPA Simulator Widget - Item 202",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0203",
    code: "NEC-GPASIMULATORUI-0203",
    title: "Academic Advising GPA Simulator Widget - Item 203",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0204",
    code: "NEC-GPASIMULATORUI-0204",
    title: "Academic Advising GPA Simulator Widget - Item 204",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0205",
    code: "NEC-GPASIMULATORUI-0205",
    title: "Academic Advising GPA Simulator Widget - Item 205",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0206",
    code: "NEC-GPASIMULATORUI-0206",
    title: "Academic Advising GPA Simulator Widget - Item 206",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0207",
    code: "NEC-GPASIMULATORUI-0207",
    title: "Academic Advising GPA Simulator Widget - Item 207",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0208",
    code: "NEC-GPASIMULATORUI-0208",
    title: "Academic Advising GPA Simulator Widget - Item 208",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0209",
    code: "NEC-GPASIMULATORUI-0209",
    title: "Academic Advising GPA Simulator Widget - Item 209",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0210",
    code: "NEC-GPASIMULATORUI-0210",
    title: "Academic Advising GPA Simulator Widget - Item 210",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0211",
    code: "NEC-GPASIMULATORUI-0211",
    title: "Academic Advising GPA Simulator Widget - Item 211",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0212",
    code: "NEC-GPASIMULATORUI-0212",
    title: "Academic Advising GPA Simulator Widget - Item 212",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0213",
    code: "NEC-GPASIMULATORUI-0213",
    title: "Academic Advising GPA Simulator Widget - Item 213",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0214",
    code: "NEC-GPASIMULATORUI-0214",
    title: "Academic Advising GPA Simulator Widget - Item 214",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0215",
    code: "NEC-GPASIMULATORUI-0215",
    title: "Academic Advising GPA Simulator Widget - Item 215",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0216",
    code: "NEC-GPASIMULATORUI-0216",
    title: "Academic Advising GPA Simulator Widget - Item 216",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0217",
    code: "NEC-GPASIMULATORUI-0217",
    title: "Academic Advising GPA Simulator Widget - Item 217",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0218",
    code: "NEC-GPASIMULATORUI-0218",
    title: "Academic Advising GPA Simulator Widget - Item 218",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0219",
    code: "NEC-GPASIMULATORUI-0219",
    title: "Academic Advising GPA Simulator Widget - Item 219",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0220",
    code: "NEC-GPASIMULATORUI-0220",
    title: "Academic Advising GPA Simulator Widget - Item 220",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0221",
    code: "NEC-GPASIMULATORUI-0221",
    title: "Academic Advising GPA Simulator Widget - Item 221",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0222",
    code: "NEC-GPASIMULATORUI-0222",
    title: "Academic Advising GPA Simulator Widget - Item 222",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0223",
    code: "NEC-GPASIMULATORUI-0223",
    title: "Academic Advising GPA Simulator Widget - Item 223",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0224",
    code: "NEC-GPASIMULATORUI-0224",
    title: "Academic Advising GPA Simulator Widget - Item 224",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0225",
    code: "NEC-GPASIMULATORUI-0225",
    title: "Academic Advising GPA Simulator Widget - Item 225",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0226",
    code: "NEC-GPASIMULATORUI-0226",
    title: "Academic Advising GPA Simulator Widget - Item 226",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0227",
    code: "NEC-GPASIMULATORUI-0227",
    title: "Academic Advising GPA Simulator Widget - Item 227",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0228",
    code: "NEC-GPASIMULATORUI-0228",
    title: "Academic Advising GPA Simulator Widget - Item 228",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0229",
    code: "NEC-GPASIMULATORUI-0229",
    title: "Academic Advising GPA Simulator Widget - Item 229",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0230",
    code: "NEC-GPASIMULATORUI-0230",
    title: "Academic Advising GPA Simulator Widget - Item 230",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0231",
    code: "NEC-GPASIMULATORUI-0231",
    title: "Academic Advising GPA Simulator Widget - Item 231",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0232",
    code: "NEC-GPASIMULATORUI-0232",
    title: "Academic Advising GPA Simulator Widget - Item 232",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0233",
    code: "NEC-GPASIMULATORUI-0233",
    title: "Academic Advising GPA Simulator Widget - Item 233",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0234",
    code: "NEC-GPASIMULATORUI-0234",
    title: "Academic Advising GPA Simulator Widget - Item 234",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0235",
    code: "NEC-GPASIMULATORUI-0235",
    title: "Academic Advising GPA Simulator Widget - Item 235",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0236",
    code: "NEC-GPASIMULATORUI-0236",
    title: "Academic Advising GPA Simulator Widget - Item 236",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0237",
    code: "NEC-GPASIMULATORUI-0237",
    title: "Academic Advising GPA Simulator Widget - Item 237",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0238",
    code: "NEC-GPASIMULATORUI-0238",
    title: "Academic Advising GPA Simulator Widget - Item 238",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0239",
    code: "NEC-GPASIMULATORUI-0239",
    title: "Academic Advising GPA Simulator Widget - Item 239",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0240",
    code: "NEC-GPASIMULATORUI-0240",
    title: "Academic Advising GPA Simulator Widget - Item 240",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0241",
    code: "NEC-GPASIMULATORUI-0241",
    title: "Academic Advising GPA Simulator Widget - Item 241",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0242",
    code: "NEC-GPASIMULATORUI-0242",
    title: "Academic Advising GPA Simulator Widget - Item 242",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0243",
    code: "NEC-GPASIMULATORUI-0243",
    title: "Academic Advising GPA Simulator Widget - Item 243",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0244",
    code: "NEC-GPASIMULATORUI-0244",
    title: "Academic Advising GPA Simulator Widget - Item 244",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0245",
    code: "NEC-GPASIMULATORUI-0245",
    title: "Academic Advising GPA Simulator Widget - Item 245",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0246",
    code: "NEC-GPASIMULATORUI-0246",
    title: "Academic Advising GPA Simulator Widget - Item 246",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0247",
    code: "NEC-GPASIMULATORUI-0247",
    title: "Academic Advising GPA Simulator Widget - Item 247",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0248",
    code: "NEC-GPASIMULATORUI-0248",
    title: "Academic Advising GPA Simulator Widget - Item 248",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0249",
    code: "NEC-GPASIMULATORUI-0249",
    title: "Academic Advising GPA Simulator Widget - Item 249",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0250",
    code: "NEC-GPASIMULATORUI-0250",
    title: "Academic Advising GPA Simulator Widget - Item 250",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0251",
    code: "NEC-GPASIMULATORUI-0251",
    title: "Academic Advising GPA Simulator Widget - Item 251",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0252",
    code: "NEC-GPASIMULATORUI-0252",
    title: "Academic Advising GPA Simulator Widget - Item 252",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0253",
    code: "NEC-GPASIMULATORUI-0253",
    title: "Academic Advising GPA Simulator Widget - Item 253",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0254",
    code: "NEC-GPASIMULATORUI-0254",
    title: "Academic Advising GPA Simulator Widget - Item 254",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0255",
    code: "NEC-GPASIMULATORUI-0255",
    title: "Academic Advising GPA Simulator Widget - Item 255",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0256",
    code: "NEC-GPASIMULATORUI-0256",
    title: "Academic Advising GPA Simulator Widget - Item 256",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0257",
    code: "NEC-GPASIMULATORUI-0257",
    title: "Academic Advising GPA Simulator Widget - Item 257",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0258",
    code: "NEC-GPASIMULATORUI-0258",
    title: "Academic Advising GPA Simulator Widget - Item 258",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0259",
    code: "NEC-GPASIMULATORUI-0259",
    title: "Academic Advising GPA Simulator Widget - Item 259",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0260",
    code: "NEC-GPASIMULATORUI-0260",
    title: "Academic Advising GPA Simulator Widget - Item 260",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0261",
    code: "NEC-GPASIMULATORUI-0261",
    title: "Academic Advising GPA Simulator Widget - Item 261",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0262",
    code: "NEC-GPASIMULATORUI-0262",
    title: "Academic Advising GPA Simulator Widget - Item 262",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0263",
    code: "NEC-GPASIMULATORUI-0263",
    title: "Academic Advising GPA Simulator Widget - Item 263",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0264",
    code: "NEC-GPASIMULATORUI-0264",
    title: "Academic Advising GPA Simulator Widget - Item 264",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0265",
    code: "NEC-GPASIMULATORUI-0265",
    title: "Academic Advising GPA Simulator Widget - Item 265",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0266",
    code: "NEC-GPASIMULATORUI-0266",
    title: "Academic Advising GPA Simulator Widget - Item 266",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0267",
    code: "NEC-GPASIMULATORUI-0267",
    title: "Academic Advising GPA Simulator Widget - Item 267",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0268",
    code: "NEC-GPASIMULATORUI-0268",
    title: "Academic Advising GPA Simulator Widget - Item 268",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0269",
    code: "NEC-GPASIMULATORUI-0269",
    title: "Academic Advising GPA Simulator Widget - Item 269",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0270",
    code: "NEC-GPASIMULATORUI-0270",
    title: "Academic Advising GPA Simulator Widget - Item 270",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0271",
    code: "NEC-GPASIMULATORUI-0271",
    title: "Academic Advising GPA Simulator Widget - Item 271",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0272",
    code: "NEC-GPASIMULATORUI-0272",
    title: "Academic Advising GPA Simulator Widget - Item 272",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0273",
    code: "NEC-GPASIMULATORUI-0273",
    title: "Academic Advising GPA Simulator Widget - Item 273",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0274",
    code: "NEC-GPASIMULATORUI-0274",
    title: "Academic Advising GPA Simulator Widget - Item 274",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0275",
    code: "NEC-GPASIMULATORUI-0275",
    title: "Academic Advising GPA Simulator Widget - Item 275",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0276",
    code: "NEC-GPASIMULATORUI-0276",
    title: "Academic Advising GPA Simulator Widget - Item 276",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0277",
    code: "NEC-GPASIMULATORUI-0277",
    title: "Academic Advising GPA Simulator Widget - Item 277",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0278",
    code: "NEC-GPASIMULATORUI-0278",
    title: "Academic Advising GPA Simulator Widget - Item 278",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0279",
    code: "NEC-GPASIMULATORUI-0279",
    title: "Academic Advising GPA Simulator Widget - Item 279",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0280",
    code: "NEC-GPASIMULATORUI-0280",
    title: "Academic Advising GPA Simulator Widget - Item 280",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0281",
    code: "NEC-GPASIMULATORUI-0281",
    title: "Academic Advising GPA Simulator Widget - Item 281",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0282",
    code: "NEC-GPASIMULATORUI-0282",
    title: "Academic Advising GPA Simulator Widget - Item 282",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0283",
    code: "NEC-GPASIMULATORUI-0283",
    title: "Academic Advising GPA Simulator Widget - Item 283",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0284",
    code: "NEC-GPASIMULATORUI-0284",
    title: "Academic Advising GPA Simulator Widget - Item 284",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0285",
    code: "NEC-GPASIMULATORUI-0285",
    title: "Academic Advising GPA Simulator Widget - Item 285",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0286",
    code: "NEC-GPASIMULATORUI-0286",
    title: "Academic Advising GPA Simulator Widget - Item 286",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0287",
    code: "NEC-GPASIMULATORUI-0287",
    title: "Academic Advising GPA Simulator Widget - Item 287",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0288",
    code: "NEC-GPASIMULATORUI-0288",
    title: "Academic Advising GPA Simulator Widget - Item 288",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0289",
    code: "NEC-GPASIMULATORUI-0289",
    title: "Academic Advising GPA Simulator Widget - Item 289",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0290",
    code: "NEC-GPASIMULATORUI-0290",
    title: "Academic Advising GPA Simulator Widget - Item 290",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0291",
    code: "NEC-GPASIMULATORUI-0291",
    title: "Academic Advising GPA Simulator Widget - Item 291",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0292",
    code: "NEC-GPASIMULATORUI-0292",
    title: "Academic Advising GPA Simulator Widget - Item 292",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0293",
    code: "NEC-GPASIMULATORUI-0293",
    title: "Academic Advising GPA Simulator Widget - Item 293",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0294",
    code: "NEC-GPASIMULATORUI-0294",
    title: "Academic Advising GPA Simulator Widget - Item 294",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0295",
    code: "NEC-GPASIMULATORUI-0295",
    title: "Academic Advising GPA Simulator Widget - Item 295",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0296",
    code: "NEC-GPASIMULATORUI-0296",
    title: "Academic Advising GPA Simulator Widget - Item 296",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0297",
    code: "NEC-GPASIMULATORUI-0297",
    title: "Academic Advising GPA Simulator Widget - Item 297",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0298",
    code: "NEC-GPASIMULATORUI-0298",
    title: "Academic Advising GPA Simulator Widget - Item 298",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0299",
    code: "NEC-GPASIMULATORUI-0299",
    title: "Academic Advising GPA Simulator Widget - Item 299",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0300",
    code: "NEC-GPASIMULATORUI-0300",
    title: "Academic Advising GPA Simulator Widget - Item 300",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0301",
    code: "NEC-GPASIMULATORUI-0301",
    title: "Academic Advising GPA Simulator Widget - Item 301",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0302",
    code: "NEC-GPASIMULATORUI-0302",
    title: "Academic Advising GPA Simulator Widget - Item 302",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0303",
    code: "NEC-GPASIMULATORUI-0303",
    title: "Academic Advising GPA Simulator Widget - Item 303",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0304",
    code: "NEC-GPASIMULATORUI-0304",
    title: "Academic Advising GPA Simulator Widget - Item 304",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0305",
    code: "NEC-GPASIMULATORUI-0305",
    title: "Academic Advising GPA Simulator Widget - Item 305",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0306",
    code: "NEC-GPASIMULATORUI-0306",
    title: "Academic Advising GPA Simulator Widget - Item 306",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0307",
    code: "NEC-GPASIMULATORUI-0307",
    title: "Academic Advising GPA Simulator Widget - Item 307",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0308",
    code: "NEC-GPASIMULATORUI-0308",
    title: "Academic Advising GPA Simulator Widget - Item 308",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0309",
    code: "NEC-GPASIMULATORUI-0309",
    title: "Academic Advising GPA Simulator Widget - Item 309",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0310",
    code: "NEC-GPASIMULATORUI-0310",
    title: "Academic Advising GPA Simulator Widget - Item 310",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0311",
    code: "NEC-GPASIMULATORUI-0311",
    title: "Academic Advising GPA Simulator Widget - Item 311",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0312",
    code: "NEC-GPASIMULATORUI-0312",
    title: "Academic Advising GPA Simulator Widget - Item 312",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0313",
    code: "NEC-GPASIMULATORUI-0313",
    title: "Academic Advising GPA Simulator Widget - Item 313",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0314",
    code: "NEC-GPASIMULATORUI-0314",
    title: "Academic Advising GPA Simulator Widget - Item 314",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0315",
    code: "NEC-GPASIMULATORUI-0315",
    title: "Academic Advising GPA Simulator Widget - Item 315",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0316",
    code: "NEC-GPASIMULATORUI-0316",
    title: "Academic Advising GPA Simulator Widget - Item 316",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0317",
    code: "NEC-GPASIMULATORUI-0317",
    title: "Academic Advising GPA Simulator Widget - Item 317",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0318",
    code: "NEC-GPASIMULATORUI-0318",
    title: "Academic Advising GPA Simulator Widget - Item 318",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0319",
    code: "NEC-GPASIMULATORUI-0319",
    title: "Academic Advising GPA Simulator Widget - Item 319",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0320",
    code: "NEC-GPASIMULATORUI-0320",
    title: "Academic Advising GPA Simulator Widget - Item 320",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0321",
    code: "NEC-GPASIMULATORUI-0321",
    title: "Academic Advising GPA Simulator Widget - Item 321",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0322",
    code: "NEC-GPASIMULATORUI-0322",
    title: "Academic Advising GPA Simulator Widget - Item 322",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0323",
    code: "NEC-GPASIMULATORUI-0323",
    title: "Academic Advising GPA Simulator Widget - Item 323",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0324",
    code: "NEC-GPASIMULATORUI-0324",
    title: "Academic Advising GPA Simulator Widget - Item 324",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0325",
    code: "NEC-GPASIMULATORUI-0325",
    title: "Academic Advising GPA Simulator Widget - Item 325",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0326",
    code: "NEC-GPASIMULATORUI-0326",
    title: "Academic Advising GPA Simulator Widget - Item 326",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0327",
    code: "NEC-GPASIMULATORUI-0327",
    title: "Academic Advising GPA Simulator Widget - Item 327",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0328",
    code: "NEC-GPASIMULATORUI-0328",
    title: "Academic Advising GPA Simulator Widget - Item 328",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0329",
    code: "NEC-GPASIMULATORUI-0329",
    title: "Academic Advising GPA Simulator Widget - Item 329",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0330",
    code: "NEC-GPASIMULATORUI-0330",
    title: "Academic Advising GPA Simulator Widget - Item 330",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0331",
    code: "NEC-GPASIMULATORUI-0331",
    title: "Academic Advising GPA Simulator Widget - Item 331",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0332",
    code: "NEC-GPASIMULATORUI-0332",
    title: "Academic Advising GPA Simulator Widget - Item 332",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0333",
    code: "NEC-GPASIMULATORUI-0333",
    title: "Academic Advising GPA Simulator Widget - Item 333",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0334",
    code: "NEC-GPASIMULATORUI-0334",
    title: "Academic Advising GPA Simulator Widget - Item 334",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0335",
    code: "NEC-GPASIMULATORUI-0335",
    title: "Academic Advising GPA Simulator Widget - Item 335",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0336",
    code: "NEC-GPASIMULATORUI-0336",
    title: "Academic Advising GPA Simulator Widget - Item 336",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0337",
    code: "NEC-GPASIMULATORUI-0337",
    title: "Academic Advising GPA Simulator Widget - Item 337",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0338",
    code: "NEC-GPASIMULATORUI-0338",
    title: "Academic Advising GPA Simulator Widget - Item 338",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0339",
    code: "NEC-GPASIMULATORUI-0339",
    title: "Academic Advising GPA Simulator Widget - Item 339",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0340",
    code: "NEC-GPASIMULATORUI-0340",
    title: "Academic Advising GPA Simulator Widget - Item 340",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0341",
    code: "NEC-GPASIMULATORUI-0341",
    title: "Academic Advising GPA Simulator Widget - Item 341",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0342",
    code: "NEC-GPASIMULATORUI-0342",
    title: "Academic Advising GPA Simulator Widget - Item 342",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0343",
    code: "NEC-GPASIMULATORUI-0343",
    title: "Academic Advising GPA Simulator Widget - Item 343",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0344",
    code: "NEC-GPASIMULATORUI-0344",
    title: "Academic Advising GPA Simulator Widget - Item 344",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0345",
    code: "NEC-GPASIMULATORUI-0345",
    title: "Academic Advising GPA Simulator Widget - Item 345",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0346",
    code: "NEC-GPASIMULATORUI-0346",
    title: "Academic Advising GPA Simulator Widget - Item 346",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0347",
    code: "NEC-GPASIMULATORUI-0347",
    title: "Academic Advising GPA Simulator Widget - Item 347",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0348",
    code: "NEC-GPASIMULATORUI-0348",
    title: "Academic Advising GPA Simulator Widget - Item 348",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0349",
    code: "NEC-GPASIMULATORUI-0349",
    title: "Academic Advising GPA Simulator Widget - Item 349",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0350",
    code: "NEC-GPASIMULATORUI-0350",
    title: "Academic Advising GPA Simulator Widget - Item 350",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0351",
    code: "NEC-GPASIMULATORUI-0351",
    title: "Academic Advising GPA Simulator Widget - Item 351",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0352",
    code: "NEC-GPASIMULATORUI-0352",
    title: "Academic Advising GPA Simulator Widget - Item 352",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0353",
    code: "NEC-GPASIMULATORUI-0353",
    title: "Academic Advising GPA Simulator Widget - Item 353",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0354",
    code: "NEC-GPASIMULATORUI-0354",
    title: "Academic Advising GPA Simulator Widget - Item 354",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0355",
    code: "NEC-GPASIMULATORUI-0355",
    title: "Academic Advising GPA Simulator Widget - Item 355",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0356",
    code: "NEC-GPASIMULATORUI-0356",
    title: "Academic Advising GPA Simulator Widget - Item 356",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0357",
    code: "NEC-GPASIMULATORUI-0357",
    title: "Academic Advising GPA Simulator Widget - Item 357",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0358",
    code: "NEC-GPASIMULATORUI-0358",
    title: "Academic Advising GPA Simulator Widget - Item 358",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0359",
    code: "NEC-GPASIMULATORUI-0359",
    title: "Academic Advising GPA Simulator Widget - Item 359",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0360",
    code: "NEC-GPASIMULATORUI-0360",
    title: "Academic Advising GPA Simulator Widget - Item 360",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0361",
    code: "NEC-GPASIMULATORUI-0361",
    title: "Academic Advising GPA Simulator Widget - Item 361",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0362",
    code: "NEC-GPASIMULATORUI-0362",
    title: "Academic Advising GPA Simulator Widget - Item 362",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0363",
    code: "NEC-GPASIMULATORUI-0363",
    title: "Academic Advising GPA Simulator Widget - Item 363",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0364",
    code: "NEC-GPASIMULATORUI-0364",
    title: "Academic Advising GPA Simulator Widget - Item 364",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0365",
    code: "NEC-GPASIMULATORUI-0365",
    title: "Academic Advising GPA Simulator Widget - Item 365",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0366",
    code: "NEC-GPASIMULATORUI-0366",
    title: "Academic Advising GPA Simulator Widget - Item 366",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0367",
    code: "NEC-GPASIMULATORUI-0367",
    title: "Academic Advising GPA Simulator Widget - Item 367",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0368",
    code: "NEC-GPASIMULATORUI-0368",
    title: "Academic Advising GPA Simulator Widget - Item 368",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0369",
    code: "NEC-GPASIMULATORUI-0369",
    title: "Academic Advising GPA Simulator Widget - Item 369",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0370",
    code: "NEC-GPASIMULATORUI-0370",
    title: "Academic Advising GPA Simulator Widget - Item 370",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0371",
    code: "NEC-GPASIMULATORUI-0371",
    title: "Academic Advising GPA Simulator Widget - Item 371",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0372",
    code: "NEC-GPASIMULATORUI-0372",
    title: "Academic Advising GPA Simulator Widget - Item 372",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0373",
    code: "NEC-GPASIMULATORUI-0373",
    title: "Academic Advising GPA Simulator Widget - Item 373",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0374",
    code: "NEC-GPASIMULATORUI-0374",
    title: "Academic Advising GPA Simulator Widget - Item 374",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0375",
    code: "NEC-GPASIMULATORUI-0375",
    title: "Academic Advising GPA Simulator Widget - Item 375",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0376",
    code: "NEC-GPASIMULATORUI-0376",
    title: "Academic Advising GPA Simulator Widget - Item 376",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0377",
    code: "NEC-GPASIMULATORUI-0377",
    title: "Academic Advising GPA Simulator Widget - Item 377",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0378",
    code: "NEC-GPASIMULATORUI-0378",
    title: "Academic Advising GPA Simulator Widget - Item 378",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0379",
    code: "NEC-GPASIMULATORUI-0379",
    title: "Academic Advising GPA Simulator Widget - Item 379",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0380",
    code: "NEC-GPASIMULATORUI-0380",
    title: "Academic Advising GPA Simulator Widget - Item 380",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0381",
    code: "NEC-GPASIMULATORUI-0381",
    title: "Academic Advising GPA Simulator Widget - Item 381",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0382",
    code: "NEC-GPASIMULATORUI-0382",
    title: "Academic Advising GPA Simulator Widget - Item 382",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0383",
    code: "NEC-GPASIMULATORUI-0383",
    title: "Academic Advising GPA Simulator Widget - Item 383",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0384",
    code: "NEC-GPASIMULATORUI-0384",
    title: "Academic Advising GPA Simulator Widget - Item 384",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0385",
    code: "NEC-GPASIMULATORUI-0385",
    title: "Academic Advising GPA Simulator Widget - Item 385",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0386",
    code: "NEC-GPASIMULATORUI-0386",
    title: "Academic Advising GPA Simulator Widget - Item 386",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0387",
    code: "NEC-GPASIMULATORUI-0387",
    title: "Academic Advising GPA Simulator Widget - Item 387",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0388",
    code: "NEC-GPASIMULATORUI-0388",
    title: "Academic Advising GPA Simulator Widget - Item 388",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0389",
    code: "NEC-GPASIMULATORUI-0389",
    title: "Academic Advising GPA Simulator Widget - Item 389",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0390",
    code: "NEC-GPASIMULATORUI-0390",
    title: "Academic Advising GPA Simulator Widget - Item 390",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0391",
    code: "NEC-GPASIMULATORUI-0391",
    title: "Academic Advising GPA Simulator Widget - Item 391",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0392",
    code: "NEC-GPASIMULATORUI-0392",
    title: "Academic Advising GPA Simulator Widget - Item 392",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0393",
    code: "NEC-GPASIMULATORUI-0393",
    title: "Academic Advising GPA Simulator Widget - Item 393",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0394",
    code: "NEC-GPASIMULATORUI-0394",
    title: "Academic Advising GPA Simulator Widget - Item 394",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0395",
    code: "NEC-GPASIMULATORUI-0395",
    title: "Academic Advising GPA Simulator Widget - Item 395",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0396",
    code: "NEC-GPASIMULATORUI-0396",
    title: "Academic Advising GPA Simulator Widget - Item 396",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0397",
    code: "NEC-GPASIMULATORUI-0397",
    title: "Academic Advising GPA Simulator Widget - Item 397",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0398",
    code: "NEC-GPASIMULATORUI-0398",
    title: "Academic Advising GPA Simulator Widget - Item 398",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0399",
    code: "NEC-GPASIMULATORUI-0399",
    title: "Academic Advising GPA Simulator Widget - Item 399",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0400",
    code: "NEC-GPASIMULATORUI-0400",
    title: "Academic Advising GPA Simulator Widget - Item 400",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0401",
    code: "NEC-GPASIMULATORUI-0401",
    title: "Academic Advising GPA Simulator Widget - Item 401",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0402",
    code: "NEC-GPASIMULATORUI-0402",
    title: "Academic Advising GPA Simulator Widget - Item 402",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0403",
    code: "NEC-GPASIMULATORUI-0403",
    title: "Academic Advising GPA Simulator Widget - Item 403",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0404",
    code: "NEC-GPASIMULATORUI-0404",
    title: "Academic Advising GPA Simulator Widget - Item 404",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0405",
    code: "NEC-GPASIMULATORUI-0405",
    title: "Academic Advising GPA Simulator Widget - Item 405",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0406",
    code: "NEC-GPASIMULATORUI-0406",
    title: "Academic Advising GPA Simulator Widget - Item 406",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0407",
    code: "NEC-GPASIMULATORUI-0407",
    title: "Academic Advising GPA Simulator Widget - Item 407",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0408",
    code: "NEC-GPASIMULATORUI-0408",
    title: "Academic Advising GPA Simulator Widget - Item 408",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0409",
    code: "NEC-GPASIMULATORUI-0409",
    title: "Academic Advising GPA Simulator Widget - Item 409",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0410",
    code: "NEC-GPASIMULATORUI-0410",
    title: "Academic Advising GPA Simulator Widget - Item 410",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0411",
    code: "NEC-GPASIMULATORUI-0411",
    title: "Academic Advising GPA Simulator Widget - Item 411",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0412",
    code: "NEC-GPASIMULATORUI-0412",
    title: "Academic Advising GPA Simulator Widget - Item 412",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0413",
    code: "NEC-GPASIMULATORUI-0413",
    title: "Academic Advising GPA Simulator Widget - Item 413",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0414",
    code: "NEC-GPASIMULATORUI-0414",
    title: "Academic Advising GPA Simulator Widget - Item 414",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0415",
    code: "NEC-GPASIMULATORUI-0415",
    title: "Academic Advising GPA Simulator Widget - Item 415",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0416",
    code: "NEC-GPASIMULATORUI-0416",
    title: "Academic Advising GPA Simulator Widget - Item 416",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0417",
    code: "NEC-GPASIMULATORUI-0417",
    title: "Academic Advising GPA Simulator Widget - Item 417",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0418",
    code: "NEC-GPASIMULATORUI-0418",
    title: "Academic Advising GPA Simulator Widget - Item 418",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0419",
    code: "NEC-GPASIMULATORUI-0419",
    title: "Academic Advising GPA Simulator Widget - Item 419",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0420",
    code: "NEC-GPASIMULATORUI-0420",
    title: "Academic Advising GPA Simulator Widget - Item 420",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0421",
    code: "NEC-GPASIMULATORUI-0421",
    title: "Academic Advising GPA Simulator Widget - Item 421",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0422",
    code: "NEC-GPASIMULATORUI-0422",
    title: "Academic Advising GPA Simulator Widget - Item 422",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0423",
    code: "NEC-GPASIMULATORUI-0423",
    title: "Academic Advising GPA Simulator Widget - Item 423",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0424",
    code: "NEC-GPASIMULATORUI-0424",
    title: "Academic Advising GPA Simulator Widget - Item 424",
    category: "GPASIMULATORUI_CORE",
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
    id: "gpasimulatorui-0425",
    code: "NEC-GPASIMULATORUI-0425",
    title: "Academic Advising GPA Simulator Widget - Item 425",
    category: "GPASIMULATORUI_CORE",
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

export function filterGPASIMULATORUIBySemester(semester: number): AcademicEntityItem[] {
  return GPASIMULATORUI_REGISTRY.filter(item => item.semester === semester);
}

export function computeGPASIMULATORUIAverageCredits(): number {
  const total = GPASIMULATORUI_REGISTRY.reduce((acc, curr) => acc + curr.credits, 0);
  return total / GPASIMULATORUI_REGISTRY.length;
}
