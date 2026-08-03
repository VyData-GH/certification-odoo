import type { ExamConfig } from "@/types/exam";

const DRAFT_STORAGE_KEY = "odoo-exam-draft";

export interface ExamDraftPayload {
  /** Stable key from URL params so we only restore the matching attempt */
  attemptKey: string;
  config: ExamConfig;
  sessionSeed: number;
  questionIds: string[];
  answers: (number | null)[];
  currentIndex: number;
  remainingSeconds: number;
  totalSeconds: number;
  startedAt: number;
  examLocale: "en" | "fr";
  savedAt: number;
}

export function buildExamAttemptKey(searchParams: URLSearchParams): string {
  const parts = [
    searchParams.get("replay") ?? "",
    searchParams.get("preset") ?? "",
    searchParams.get("module") ?? "",
    searchParams.get("count") ?? "",
    searchParams.get("lang") ?? "",
    searchParams.get("forceEnglish") ?? "",
  ];
  return parts.join("|");
}

export function saveExamDraft(draft: ExamDraftPayload): void {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(draft));
  } catch {
    /* quota / private mode */
  }
}

export function loadExamDraft(attemptKey: string): ExamDraftPayload | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(DRAFT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ExamDraftPayload;
    if (parsed.attemptKey !== attemptKey) return null;
    if (
      !parsed.questionIds?.length ||
      !Array.isArray(parsed.answers) ||
      parsed.answers.length !== parsed.questionIds.length ||
      typeof parsed.sessionSeed !== "number" ||
      typeof parsed.startedAt !== "number"
    ) {
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

export function clearExamDraft(): void {
  if (typeof window === "undefined") return;
  sessionStorage.removeItem(DRAFT_STORAGE_KEY);
}
