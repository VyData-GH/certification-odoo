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

export interface BilingualField {
  en: string;
  fr: string;
}

export type QuestionOptions = {
  en: readonly string[];
  fr: readonly string[];
};

export interface QuestionImage {
  src: string;
  alt: BilingualField;
}

export interface Question {
  id: string;
  module: ModuleId;
  text: BilingualField;
  options: QuestionOptions;
  correctIndex: number;
  explanation: BilingualField;
  image?: QuestionImage;
  /** yesno = 2 choices (Oui/Non · Yes/No); default = multiple choice */
  questionType?: "mcq" | "yesno";
}

export interface LocalizedQuestion {
  id: string;
  module: ModuleId;
  text: string;
  /** Display choices (includes « I don't know » as last item when dontKnowIndex is set). */
  options: string[];
  correctIndex: number;
  /** Index of « I don't know » / « Je ne sais pas » when present. */
  dontKnowIndex: number | null;
  explanation: string;
  image?: { src: string; alt: string };
  questionType?: "mcq" | "yesno";
}

export type ExamMode = "full" | "quick" | "module" | "review" | "sample";

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
  /** Explicit « I don't know » answers (0 points, same as blank for scoring). */
  dontKnow?: number;
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

/** Official Odoo cert pacing: 120 questions in 1.5 hours. */
export const OFFICIAL_EXAM_QUESTIONS = EXAM_RULES.totalQuestions;
export const OFFICIAL_EXAM_MINUTES = EXAM_RULES.durationMinutes;

/** Odoo official sample test (fixed duration, not proportional). */
export const SAMPLE_TEST_MINUTES = 20;

/**
 * Exam time limit from official Odoo ratio (120 Q → 90 min),
 * except sample test (30 Q → 20 min) and review mode (no timer).
 */
export function examDurationMinutes(
  questionCount: number,
  mode?: ExamMode
): number {
  if (questionCount <= 0 || mode === "review") return 0;
  if (mode === "sample") return SAMPLE_TEST_MINUTES;
  return Math.round(
    (questionCount / OFFICIAL_EXAM_QUESTIONS) * OFFICIAL_EXAM_MINUTES
  );
}

/** e.g. 90 → "1h30", 45 → "45 min" */
export function formatExamDuration(minutes: number): string {
  if (minutes <= 0) return "—";
  if (minutes % 60 === 0) return `${minutes / 60}h`;
  if (minutes > 60) {
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return `${h}h${String(m).padStart(2, "0")}`;
  }
  return `${minutes} min`;
}

export const EXAM_PRESET_IDS = [
  "full-exam",
  "sample-test",
  "half-exam",
  "quick-quiz",
  "daily-challenge",
  "review-mode",
] as const;

export type ExamPresetId = (typeof EXAM_PRESET_IDS)[number];

export const SAMPLE_TEST_RULES = {
  questionCount: 30,
  durationMinutes: SAMPLE_TEST_MINUTES,
  screenshotCount: 12,
  passPercentage: 70,
} as const;

export const EXAM_PRESETS: ExamPreset[] = [
  {
    id: "full-exam",
    title: "full-exam",
    description: "full-exam",
    badge: "Official",
    config: {
      mode: "full",
      questionCount: OFFICIAL_EXAM_QUESTIONS,
      durationMinutes: examDurationMinutes(OFFICIAL_EXAM_QUESTIONS),
    },
  },
  {
    id: "sample-test",
    title: "sample-test",
    description: "sample-test",
    badge: "Odoo",
    config: {
      mode: "sample",
      questionCount: SAMPLE_TEST_RULES.questionCount,
      durationMinutes: examDurationMinutes(
        SAMPLE_TEST_RULES.questionCount,
        "sample"
      ),
    },
  },
  {
    id: "half-exam",
    title: "half-exam",
    description: "half-exam",
    config: {
      mode: "full",
      questionCount: 60,
      durationMinutes: examDurationMinutes(60),
    },
  },
  {
    id: "quick-quiz",
    title: "quick-quiz",
    description: "quick-quiz",
    config: {
      mode: "quick",
      questionCount: 20,
      durationMinutes: examDurationMinutes(20),
    },
  },
  {
    id: "daily-challenge",
    title: "daily-challenge",
    description: "daily-challenge",
    badge: "Daily",
    config: {
      mode: "quick",
      questionCount: 30,
      durationMinutes: examDurationMinutes(30),
    },
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
