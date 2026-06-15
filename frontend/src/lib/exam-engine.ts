import { allQuestions } from "@/data/questions";
import {
  AnswerRecord,
  ExamConfig,
  ExamResult,
  EXAM_RULES,
  LocalizedQuestion,
  ModuleId,
  Question,
} from "@/types/exam";

function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function shuffle<T>(array: T[], random: () => number): T[] {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function getDailySeed(): number {
  const today = new Date();
  return (
    today.getFullYear() * 10000 +
    (today.getMonth() + 1) * 100 +
    today.getDate()
  );
}

export function selectQuestions(config: ExamConfig): Question[] {
  const pool = config.modules?.length
    ? allQuestions.filter((q) => config.modules!.includes(q.module))
    : allQuestions;

  if (pool.length === 0) return [];

  const count = Math.min(config.questionCount, pool.length);
  const useDailySeed = config.mode === "quick" && config.questionCount === 30;
  const random = seededRandom(useDailySeed ? getDailySeed() : Date.now());

  if (config.mode === "full" && !config.modules?.length) {
    return selectBalancedQuestions(pool, count, random);
  }

  return shuffle(pool, random).slice(0, count);
}

function selectBalancedQuestions(
  pool: Question[],
  count: number,
  random: () => number
): Question[] {
  const byModule = new Map<ModuleId, Question[]>();
  for (const q of pool) {
    const list = byModule.get(q.module) ?? [];
    list.push(q);
    byModule.set(q.module, list);
  }

  const modules = shuffle([...byModule.keys()], random);
  const perModule = Math.floor(count / modules.length);
  const remainder = count % modules.length;
  const selected: Question[] = [];

  modules.forEach((mod, i) => {
    const modQuestions = shuffle(byModule.get(mod) ?? [], random);
    const take = perModule + (i < remainder ? 1 : 0);
    selected.push(...modQuestions.slice(0, take));
  });

  if (selected.length < count) {
    const usedIds = new Set(selected.map((q) => q.id));
    const remaining = shuffle(
      pool.filter((q) => !usedIds.has(q.id)),
      random
    );
    selected.push(...remaining.slice(0, count - selected.length));
  }

  return shuffle(selected, random);
}

/** Shuffle answer options so the correct choice is not always first. */
export function shuffleQuestionOptions(
  question: LocalizedQuestion,
  random: () => number
): LocalizedQuestion {
  const order = [0, 1, 2, 3];
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }

  return {
    ...question,
    options: order.map((i) => question.options[i]) as LocalizedQuestion["options"],
    correctIndex: order.indexOf(question.correctIndex),
  };
}

export function shuffleAllQuestionOptions(
  questions: LocalizedQuestion[],
  seed: number
): LocalizedQuestion[] {
  const random = seededRandom(seed);
  return questions.map((q) => shuffleQuestionOptions(q, random));
}

export function calculateScore(
  questions: Pick<LocalizedQuestion, "id" | "module" | "correctIndex">[],
  answers: AnswerRecord[]
): Pick<
  ExamResult,
  | "correct"
  | "wrong"
  | "unanswered"
  | "score"
  | "percentage"
  | "passed"
  | "moduleBreakdown"
> {
  const answerMap = new Map(answers.map((a) => [a.questionId, a.selectedIndex]));
  let correct = 0;
  let wrong = 0;
  let unanswered = 0;
  const moduleBreakdown = {} as Record<
    ModuleId,
    { correct: number; total: number }
  >;

  for (const q of questions) {
    if (!moduleBreakdown[q.module]) {
      moduleBreakdown[q.module] = { correct: 0, total: 0 };
    }
    moduleBreakdown[q.module].total++;

    const selected = answerMap.get(q.id);
    if (selected === null || selected === undefined) {
      unanswered++;
    } else if (selected === q.correctIndex) {
      correct++;
      moduleBreakdown[q.module].correct++;
    } else {
      wrong++;
    }
  }

  const score =
    correct * EXAM_RULES.pointsCorrect +
    wrong * EXAM_RULES.pointsWrong +
    unanswered * EXAM_RULES.pointsUnanswered;

  const total = questions.length;
  const maxScore = total * EXAM_RULES.pointsCorrect;
  // Official Odoo cert: net points ÷ number of questions (e.g. 3 − 3.5 = −0.5 → −5 % on 10 Q)
  const percentage = total > 0 ? (score / maxScore) * 100 : 0;

  return {
    correct,
    wrong,
    unanswered,
    score,
    percentage,
    passed: percentage >= EXAM_RULES.passPercentage,
    moduleBreakdown,
  };
}

export function formatTime(seconds: number): string {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  if (h > 0) {
    return `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  }
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

export function getQuestionStats() {
  const byModule = {} as Record<ModuleId, number>;
  for (const q of allQuestions) {
    byModule[q.module] = (byModule[q.module] ?? 0) + 1;
  }
  return { total: allQuestions.length, byModule };
}
