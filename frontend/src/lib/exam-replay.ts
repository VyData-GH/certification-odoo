import { allQuestions } from "@/data/questions";
import { localizeQuestions } from "@/lib/localize";
import {
  ExamConfig,
  ExamResult,
  EXAM_PRESETS,
  LocalizedQuestion,
  Question,
} from "@/types/exam";
import { isDontKnow } from "@/lib/answers";
import { shuffleAllQuestionOptions } from "@/lib/exam-engine";
import { t } from "@/i18n/translations";

const REPLAY_STORAGE_KEY = "odoo-exam-replay";

/** Survives React Strict Mode remounts after sessionStorage was cleared. */
let memoryReplay: ExamReplayPayload | null = null;

export interface ExamReplayPayload {
  config: ExamConfig;
  sessionSeed: number;
  questionIds: string[];
}

export function loadQuestionsByIds(ids: string[]): Question[] {
  const byId = new Map(allQuestions.map((q) => [q.id, q]));
  return ids.map((id) => byId.get(id)).filter(Boolean) as Question[];
}

export function prepareExamReplay(result: ExamResult): void {
  if (!result.sessionMeta?.questionIds?.length) return;
  const payload: ExamReplayPayload = {
    config: {
      mode: result.mode,
      questionCount: result.sessionMeta.questionCount,
      durationMinutes: result.sessionMeta.durationMinutes,
      modules: result.sessionMeta.modules,
      presetId: result.sessionMeta.presetId,
      showExplanations: result.mode === "review",
    },
    sessionSeed: result.sessionMeta.sessionSeed,
    questionIds: result.sessionMeta.questionIds,
  };
  memoryReplay = payload;
  sessionStorage.setItem(REPLAY_STORAGE_KEY, JSON.stringify(payload));
}

export function peekExamReplay(): ExamReplayPayload | null {
  if (typeof window !== "undefined") {
    const raw = sessionStorage.getItem(REPLAY_STORAGE_KEY);
    if (raw) {
      try {
        const parsed = JSON.parse(raw) as ExamReplayPayload;
        memoryReplay = parsed;
        return parsed;
      } catch {
        /* fall through to memory */
      }
    }
  }
  return memoryReplay;
}

export function clearExamReplay(): void {
  memoryReplay = null;
  if (typeof window === "undefined") return;
  sessionStorage.removeItem(REPLAY_STORAGE_KEY);
}

/** Clears sessionStorage only — keeps in-memory copy for Strict Mode remount. */
export function dismissExamReplayStorage(): void {
  if (typeof window === "undefined") return;
  sessionStorage.removeItem(REPLAY_STORAGE_KEY);
}

export function consumeExamReplay(): ExamReplayPayload | null {
  const payload = peekExamReplay();
  if (payload) clearExamReplay();
  return payload;
}

export function inferRetryUrl(result: ExamResult): string {
  if (result.sessionMeta?.presetId) {
    return `/exam?preset=${result.sessionMeta.presetId}`;
  }

  const preset = EXAM_PRESETS.find(
    (p) =>
      p.config.mode === result.mode &&
      p.config.questionCount === result.totalQuestions &&
      (result.sessionMeta?.durationMinutes === undefined ||
        p.config.durationMinutes === result.sessionMeta.durationMinutes)
  );
  if (preset) return `/exam?preset=${preset.id}`;

  if (result.mode === "module" && result.sessionMeta?.modules?.[0]) {
    return `/exam?module=${result.sessionMeta.modules[0]}&count=${result.totalQuestions}`;
  }

  if (result.totalQuestions === 120) return "/exam?preset=full-exam";
  if (result.totalQuestions === 60) return "/exam?preset=half-exam";
  if (result.totalQuestions === 30) return "/exam?preset=daily-challenge";
  if (result.totalQuestions === 20) return "/exam?preset=quick-quiz";

  return "/";
}

/**
 * Retake the exact same question set (same IDs + same option shuffle seed).
 * Uses a unique `t` query param so Next.js remounts even when already on /exam?replay=….
 */
export function startExamRetry(
  result: ExamResult,
  navigate: (url: string) => void
): void {
  if (result.sessionMeta?.questionIds?.length) {
    prepareExamReplay(result);
    navigate(`/exam?replay=1&t=${Date.now()}`);
    return;
  }
  navigate(inferRetryUrl(result));
}

export type ReviewItemStatus = "wrong" | "unanswered" | "dontKnow" | "correct";

export interface ReviewItem {
  question: LocalizedQuestion;
  selectedIndex: number | null;
  status: ReviewItemStatus;
}

export function hasStoredAnswers(result: ExamResult): boolean {
  return Boolean(
    result.sessionMeta?.questionIds?.length && result.answers?.length
  );
}

export type ReviewFilter = "weak" | "all";

function buildShuffledSessionQuestions(
  result: ExamResult,
  locale: "en" | "fr"
): LocalizedQuestion[] | null {
  const { sessionMeta, answers } = result;
  if (!sessionMeta?.questionIds?.length || !answers?.length) {
    return null;
  }

  const ordered = loadQuestionsByIds(sessionMeta.questionIds);
  if (ordered.length === 0) return null;

  const localized = localizeQuestions(ordered, locale);
  return shuffleAllQuestionOptions(
    localized,
    sessionMeta.sessionSeed,
    t(locale).exam.dontKnow
  );
}

function statusForAnswer(
  question: LocalizedQuestion,
  selected: number | null | undefined
): ReviewItemStatus {
  if (selected === null || selected === undefined) return "unanswered";
  if (isDontKnow(selected, question.dontKnowIndex)) return "dontKnow";
  if (selected !== question.correctIndex) return "wrong";
  return "correct";
}

/** Wrong, blank, and « I don't know » — the items to revise. */
export function getReviewItems(
  result: ExamResult,
  locale: "en" | "fr"
): ReviewItem[] {
  return getSessionReviewItems(result, locale, "weak");
}

/** Full submitted answer sheet, or weak items only. */
export function getSessionReviewItems(
  result: ExamResult,
  locale: "en" | "fr",
  filter: ReviewFilter = "weak"
): ReviewItem[] {
  const shuffled = buildShuffledSessionQuestions(result, locale);
  if (!shuffled) return [];

  const answerMap = new Map(
    (result.answers ?? []).map((a) => [a.questionId, a.selectedIndex])
  );

  const items: ReviewItem[] = [];
  for (const question of shuffled) {
    const selected = answerMap.get(question.id) ?? null;
    const status = statusForAnswer(question, selected);
    if (filter === "weak" && status === "correct") continue;
    items.push({ question, selectedIndex: selected, status });
  }
  return items;
}
