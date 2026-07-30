import { allQuestions } from "@/data/questions";
import { archivedQuestions } from "@/data/questions/question-archive";
import { localizeQuestions } from "@/lib/localize";
import {
  AnswerOutcome,
  ExamConfig,
  ExamResult,
  EXAM_PRESETS,
  isCertificationModuleId,
  LocalizedQuestion,
  ModuleId,
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

/** Active bank + archive (for historical review/replay of removed duplicates). */
function questionBankById(): Map<string, Question> {
  return new Map(
    [...allQuestions, ...archivedQuestions].map((q) => [q.id, q])
  );
}

export function loadQuestionsByIds(ids: string[]): Question[] {
  const byId = questionBankById();
  return ids.map((id) => byId.get(id)).filter(Boolean) as Question[];
}

/** Load preserving session order; keeps slots aligned with answers even if some IDs are gone. */
export function loadQuestionsByIdsStrict(ids: string[]): {
  questions: Question[];
  missingIds: string[];
} {
  const byId = questionBankById();
  const questions: Question[] = [];
  const missingIds: string[] = [];
  for (const id of ids) {
    const q = byId.get(id);
    if (q) questions.push(q);
    else missingIds.push(id);
  }
  return { questions, missingIds };
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
      forceEnglish: result.sessionMeta.locale === "en",
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

export type ReviewItemStatus = AnswerOutcome;

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

function sessionIsPerfect(result: ExamResult): boolean {
  return (
    result.totalQuestions > 0 &&
    result.correct === result.totalQuestions &&
    result.wrong === 0 &&
    (result.unanswered ?? 0) === 0 &&
    (result.dontKnow ?? 0) === 0
  );
}

/**
 * Weak-item count for THIS session only (frozen at submit).
 * Uses the scorecard first so later quizzes cannot shrink an older session's badge.
 * Outcome snapshots may raise the count when `dontKnow` was not persisted on the row.
 */
export function getSessionWeakCount(result: ExamResult): number {
  const fromScores =
    (result.wrong ?? 0) +
    (result.unanswered ?? 0) +
    (result.dontKnow ?? 0);

  const ids = result.sessionMeta?.questionIds;
  const answers = result.answers;
  if (!ids?.length || !answers?.length) return fromScores;

  const byId = new Map(answers.map((a) => [a.questionId, a]));
  let fromOutcomes = 0;
  let covered = 0;
  for (const id of ids) {
    const a = byId.get(id);
    if (!a?.outcome) continue;
    covered++;
    if (a.outcome !== "correct") fromOutcomes++;
  }

  if (covered !== ids.length) return fromScores;

  // Prefer the higher count: scorecard resists answer drift; outcomes recover lost dontKnow.
  return Math.max(fromScores, fromOutcomes);
}

function buildShuffledSessionQuestions(
  result: ExamResult,
  uiLocale: "en" | "fr"
): LocalizedQuestion[] | null {
  const { sessionMeta, answers } = result;
  if (!sessionMeta?.questionIds?.length || !answers?.length) {
    return null;
  }

  const examLocale = sessionMeta.locale ?? uiLocale;
  const { questions, missingIds } = loadQuestionsByIdsStrict(
    sessionMeta.questionIds
  );

  // Shuffle RNG only stays valid if EVERY session question is available
  if (missingIds.length > 0 || questions.length !== sessionMeta.questionIds.length) {
    return null;
  }

  const localized = localizeQuestions(questions, examLocale);
  return shuffleAllQuestionOptions(
    localized,
    sessionMeta.sessionSeed,
    t(examLocale).exam.dontKnow
  );
}

function resolveQuestionModule(
  questionId: string,
  recordModule?: ModuleId,
  fallback?: string
): ModuleId {
  if (recordModule) return recordModule;
  const fromBank = questionBankById().get(questionId);
  if (fromBank) return fromBank.module;
  if (fallback && isCertificationModuleId(fallback as ModuleId)) {
    return fallback as ModuleId;
  }
  // Last resort: still better than hardcoding a single wrong module
  return (fallback as ModuleId) || "studio";
}

function reviewItemFromSnapshot(
  record: NonNullable<ExamResult["answers"]>[number],
  moduleFallback: string
): ReviewItem | null {
  if (!record.options?.length || record.text == null) return null;

  const correctIndex =
    record.correctIndex ??
    (record.outcome === "correct" && record.selectedIndex != null
      ? record.selectedIndex
      : 0);

  const moduleId = resolveQuestionModule(
    record.questionId,
    record.module,
    moduleFallback
  );

  const question: LocalizedQuestion = {
    id: record.questionId,
    module: moduleId,
    text: record.text,
    options: [...record.options],
    correctIndex,
    dontKnowIndex: record.dontKnowIndex ?? record.options.length - 1,
    explanation: record.explanation ?? "",
  };

  const status: ReviewItemStatus =
    record.outcome ??
    statusForAnswer(question, record.selectedIndex, undefined, correctIndex);

  return {
    question,
    selectedIndex: record.selectedIndex,
    status,
  };
}

function statusForAnswer(
  question: LocalizedQuestion,
  selected: number | null | undefined,
  storedOutcome?: AnswerOutcome,
  storedCorrectIndex?: number
): ReviewItemStatus {
  if (storedOutcome) return storedOutcome;

  if (selected === null || selected === undefined) return "unanswered";
  if (isDontKnow(selected, question.dontKnowIndex)) return "dontKnow";

  const correctIdx =
    storedCorrectIndex != null ? storedCorrectIndex : question.correctIndex;
  if (selected !== correctIdx) return "wrong";
  return "correct";
}

/** Wrong, blank, and « I don't know » — the items to revise. */
export function getReviewItems(
  result: ExamResult,
  locale: "en" | "fr"
): ReviewItem[] {
  return getSessionReviewItems(result, locale, "weak");
}

/** Full submitted answer sheet, or weak items only — scoped to this session only. */
export function getSessionReviewItems(
  result: ExamResult,
  locale: "en" | "fr",
  filter: ReviewFilter = "weak"
): ReviewItem[] {
  if (filter === "weak" && sessionIsPerfect(result)) {
    return [];
  }

  const sessionIds = result.sessionMeta?.questionIds ?? [];
  if (!sessionIds.length || !result.answers?.length) return [];

  const answerById = new Map(
    result.answers
      .filter((a) => sessionIds.includes(a.questionId))
      .map((a) => [a.questionId, a])
  );

  const moduleFallback =
    result.sessionMeta?.modules?.[0] ??
    (Object.keys(result.moduleBreakdown ?? {})[0] as string) ??
    "studio";

  // Outcome alone is enough to classify weak vs correct for THIS session
  // (do not require options/text — avoids falling into shuffle drift).
  const hasOutcomesForAll = sessionIds.every(
    (id) => Boolean(answerById.get(id)?.outcome)
  );
  const hasFullSnapshots = sessionIds.every((id) => {
    const a = answerById.get(id);
    return Boolean(a?.options?.length && a.text != null && a.outcome);
  });

  let items: ReviewItem[] = [];

  if (hasFullSnapshots || hasOutcomesForAll) {
    // Prefer per-answer module; fall back to bank lookup by questionId
    for (const id of sessionIds) {
      const record = answerById.get(id);
      if (!record) continue;
      const item = reviewItemFromSnapshot(record, moduleFallback);
      if (item) {
        items.push(item);
        continue;
      }
      // Outcome without option snapshot: rebuild display from bank, keep stored outcome
      if (record.outcome) {
        const { questions } = loadQuestionsByIdsStrict([id]);
        const q = questions[0];
        if (!q) continue;
        const examLocale = result.sessionMeta?.locale ?? locale;
        const localized = localizeQuestions([q], examLocale)[0];
        items.push({
          question: {
            ...localized,
            correctIndex: record.correctIndex ?? localized.correctIndex,
            module: resolveQuestionModule(
              id,
              record.module,
              moduleFallback
            ),
          },
          selectedIndex: record.selectedIndex,
          status: record.outcome,
        });
      }
    }
  } else {
    const shuffled = buildShuffledSessionQuestions(result, locale);
    const perfect = sessionIsPerfect(result);
    const hasOutcomes = result.answers.some((a) => a.outcome);

    if (shuffled && shuffled.length === sessionIds.length) {
      const byId = new Map(shuffled.map((q) => [q.id, q]));
      for (const id of sessionIds) {
        const question = byId.get(id);
        const record = answerById.get(id);
        if (!question || !record) continue;

        let status = statusForAnswer(
          question,
          record.selectedIndex,
          record.outcome,
          record.correctIndex
        );
        if (perfect && !hasOutcomes) status = "correct";

        const displayQuestion =
          record.correctIndex != null
            ? { ...question, correctIndex: record.correctIndex }
            : question;

        items.push({
          question: displayQuestion,
          selectedIndex: record.selectedIndex,
          status,
        });
      }
    } else {
      // Partial bank (should be rare now with archive): still list what we can
      // using per-answer outcome when present, else skip unreliable shuffle.
      for (const id of sessionIds) {
        const record = answerById.get(id);
        if (!record) continue;

        const snap = reviewItemFromSnapshot(record, moduleFallback);
        if (snap) {
          items.push(snap);
          continue;
        }

        if (record.outcome) {
          const { questions } = loadQuestionsByIdsStrict([id]);
          const q = questions[0];
          if (!q) continue;
          const examLocale = result.sessionMeta?.locale ?? locale;
          const localized = localizeQuestions([q], examLocale)[0];
          items.push({
            question: {
              ...localized,
              correctIndex: record.correctIndex ?? localized.correctIndex,
              options: localized.options,
            },
            selectedIndex: record.selectedIndex,
            status:
              perfect && !hasOutcomes ? "correct" : record.outcome,
          });
        }
      }
    }
  }

  if (filter === "weak") {
    items = items.filter((i) => i.status !== "correct");
  }

  return items;
}
