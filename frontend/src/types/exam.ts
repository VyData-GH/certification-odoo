export const MODULES = [
  { id: "website", label: "Website", icon: "🌐" },
  { id: "ecommerce", label: "eCommerce", icon: "🛒" },
  { id: "survey", label: "Survey", icon: "📋" },
  { id: "marketing", label: "Marketing", icon: "📣" },
  { id: "ai", label: "AI", icon: "🤖" },
  { id: "crm", label: "CRM", icon: "🤝" },
  { id: "sales", label: "Sales", icon: "💰" },
  { id: "purchases", label: "Purchases", icon: "📦" },
  { id: "project", label: "Project", icon: "📁" },
  { id: "timesheet", label: "Timesheet", icon: "⏱️" },
  { id: "accounting", label: "Accounting", icon: "📊" },
  { id: "inventory", label: "Inventory", icon: "🏭" },
  { id: "mrp", label: "MRP", icon: "⚙️" },
  { id: "hr", label: "HR", icon: "👥" },
  { id: "spreadsheet", label: "Spreadsheet", icon: "📈" },
  { id: "knowledge", label: "Knowledge", icon: "📚" },
  { id: "pos", label: "POS", icon: "🏪" },
  { id: "studio", label: "Studio", icon: "🎨" },
] as const;

export type ModuleId = (typeof MODULES)[number]["id"];

type OptionsTuple = [string, string, string, string];

export interface BilingualField {
  en: string;
  fr: string;
}

export interface Question {
  id: string;
  module: ModuleId;
  text: BilingualField;
  options: { en: OptionsTuple; fr: OptionsTuple };
  correctIndex: number;
  explanation: BilingualField;
}

export interface LocalizedQuestion {
  id: string;
  module: ModuleId;
  text: string;
  options: OptionsTuple;
  correctIndex: number;
  explanation: string;
}

export type ExamMode = "full" | "quick" | "module" | "review";

export interface ExamConfig {
  mode: ExamMode;
  questionCount: number;
  durationMinutes: number;
  modules?: ModuleId[];
  showExplanations?: boolean;
  presetId?: string;
}

export interface ExamSessionMeta {
  presetId?: string;
  modules?: ModuleId[];
  questionCount: number;
  durationMinutes: number;
  sessionSeed: number;
  questionIds: string[];
}

export interface ExamPreset {
  id: string;
  title: string;
  description: string;
  config: ExamConfig;
  badge?: string;
}

export interface AnswerRecord {
  questionId: string;
  selectedIndex: number | null;
}

export interface ExamResult {
  id: string;
  date: string;
  mode: ExamMode;
  totalQuestions: number;
  correct: number;
  wrong: number;
  unanswered: number;
  score: number;
  /** Official exam %: (score / totalQuestions) × 100 — can be negative with wrong answers */
  percentage: number;
  passed: boolean;
  durationUsedSeconds: number;
  moduleBreakdown: Record<ModuleId, { correct: number; total: number }>;
  sessionMeta?: ExamSessionMeta;
  answers?: AnswerRecord[];
}

export const EXAM_RULES = {
  totalQuestions: 120,
  durationMinutes: 90,
  passPercentage: 70,
  pointsCorrect: 1,
  pointsWrong: -0.5,
  pointsUnanswered: 0,
} as const;

export const EXAM_PRESET_IDS = [
  "full-exam",
  "half-exam",
  "quick-quiz",
  "daily-challenge",
  "review-mode",
] as const;

export type ExamPresetId = (typeof EXAM_PRESET_IDS)[number];

export const EXAM_PRESETS: ExamPreset[] = [
  {
    id: "full-exam",
    title: "full-exam",
    description: "full-exam",
    badge: "Official",
    config: { mode: "full", questionCount: 120, durationMinutes: 90 },
  },
  {
    id: "half-exam",
    title: "half-exam",
    description: "half-exam",
    config: { mode: "full", questionCount: 60, durationMinutes: 45 },
  },
  {
    id: "quick-quiz",
    title: "quick-quiz",
    description: "quick-quiz",
    config: { mode: "quick", questionCount: 20, durationMinutes: 15 },
  },
  {
    id: "daily-challenge",
    title: "daily-challenge",
    description: "daily-challenge",
    badge: "Daily",
    config: { mode: "quick", questionCount: 30, durationMinutes: 25 },
  },
  {
    id: "review-mode",
    title: "review-mode",
    description: "review-mode",
    config: {
      mode: "review",
      questionCount: 15,
      durationMinutes: 0,
      showExplanations: true,
    },
  },
];
