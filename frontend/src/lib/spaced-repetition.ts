import { ExamResult } from "@/types/exam";
import { loadQuestionsByIds } from "@/lib/exam-replay";
import { shuffleAllQuestionOptions } from "@/lib/exam-engine";
import { isDontKnow } from "@/lib/answers";
import { t } from "@/i18n/translations";
import { allQuestions } from "@/data/questions";

const SRS_KEY = "odoo-cert-srs";

export interface SrsCard {
  questionId: string;
  box: number;
  dueAt: string;
  lastResult: "correct" | "wrong" | "unanswered";
  reviews: number;
}

const INTERVAL_DAYS = [1, 3, 7, 14, 30] as const;

function loadAll(): Record<string, SrsCard> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(SRS_KEY);
    if (!raw) return {};
    return JSON.parse(raw) as Record<string, SrsCard>;
  } catch {
    return {};
  }
}

function saveAll(cards: Record<string, SrsCard>): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(SRS_KEY, JSON.stringify(cards));
}

function addDays(iso: string, days: number): string {
  const d = new Date(iso);
  d.setDate(d.getDate() + days);
  return d.toISOString();
}

function upsertWrong(
  cards: Record<string, SrsCard>,
  questionId: string,
  at: string,
  result: "wrong" | "unanswered"
): void {
  cards[questionId] = {
    questionId,
    box: 0,
    dueAt: addDays(at, INTERVAL_DAYS[0]),
    lastResult: result,
    reviews: (cards[questionId]?.reviews ?? 0) + 1,
  };
}

function upsertCorrect(
  cards: Record<string, SrsCard>,
  questionId: string,
  at: string
): void {
  const prev = cards[questionId];
  const nextBox = Math.min(
    INTERVAL_DAYS.length - 1,
    (prev?.box ?? 0) + 1
  );
  cards[questionId] = {
    questionId,
    box: nextBox,
    dueAt: addDays(at, INTERVAL_DAYS[nextBox]),
    lastResult: "correct",
    reviews: (prev?.reviews ?? 0) + 1,
  };
}

/** Update SRS cards from a finished exam session. */
export function updateSrsFromResult(result: ExamResult): void {
  const ids = result.sessionMeta?.questionIds;
  const answers = result.answers;
  if (!ids?.length || !answers?.length) return;

  const questions = loadQuestionsByIds(ids);
  if (questions.length === 0) return;

  const shuffled = shuffleAllQuestionOptions(
    questions.map((q) => ({
      id: q.id,
      module: q.module,
      text: q.text.en,
      options: [...q.options.en],
      correctIndex: q.correctIndex,
      dontKnowIndex: null,
      explanation: q.explanation.en,
      questionType: q.questionType,
    })),
    result.sessionMeta!.sessionSeed,
    t("en").exam.dontKnow
  );

  const answerMap = new Map(
    answers.map((a) => [a.questionId, a.selectedIndex])
  );
  const cards = loadAll();
  const at = result.date;

  for (const q of shuffled) {
    const selected = answerMap.get(q.id) ?? null;
    if (selected === null || selected === undefined) {
      upsertWrong(cards, q.id, at, "unanswered");
    } else if (isDontKnow(selected, q.dontKnowIndex)) {
      continue;
    } else if (selected !== q.correctIndex) {
      upsertWrong(cards, q.id, at, "wrong");
    } else if (cards[q.id]) {
      upsertCorrect(cards, q.id, at);
    }
  }

  saveAll(cards);
}

export function getDueSrsQuestionIds(
  now = new Date(),
  limit = 20
): string[] {
  const cards = loadAll();
  const valid = new Set(allQuestions.map((q) => q.id));
  const nowMs = now.getTime();

  return Object.values(cards)
    .filter((c) => valid.has(c.questionId) && new Date(c.dueAt).getTime() <= nowMs)
    .sort(
      (a, b) =>
        new Date(a.dueAt).getTime() - new Date(b.dueAt).getTime() ||
        a.box - b.box
    )
    .slice(0, limit)
    .map((c) => c.questionId);
}

export function getDueSrsCount(now = new Date()): number {
  return getDueSrsQuestionIds(now, 10_000).length;
}

/** Seed SRS from historical mistakes (first visit / empty deck). */
export function seedSrsFromMistakeIds(
  questionIds: string[],
  at = new Date().toISOString()
): void {
  if (questionIds.length === 0) return;
  const cards = loadAll();
  let changed = false;
  for (const id of questionIds) {
    if (cards[id]) continue;
    cards[id] = {
      questionId: id,
      box: 0,
      dueAt: at,
      lastResult: "wrong",
      reviews: 0,
    };
    changed = true;
  }
  if (changed) saveAll(cards);
}
