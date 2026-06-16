import { isDontKnow, isUnanswered } from "@/lib/answers";
import { prepareQuestionForExam } from "@/lib/exam-present";
import { allQuestions } from "@/data/questions";
import { screenshotQuestions } from "@/data/questions/screenshot-questions";
import {
  AnswerRecord,
  ExamConfig,
  ExamResult,
  EXAM_RULES,
  LocalizedQuestion,
  ModuleId,
  Question,
  SAMPLE_TEST_RULES,
} from "@/types/exam";

/** Mirrors Odoo official sample test section mix (text questions only). */
const SAMPLE_TEXT_SECTIONS: { modules: ModuleId[]; count: number }[] = [
  { modules: ["studio", "knowledge", "survey", "ai"], count: 2 },
  { modules: ["crm"], count: 2 },
  { modules: ["inventory"], count: 2 },
  { modules: ["mrp"], count: 2 },
  { modules: ["website", "ecommerce"], count: 2 },
  { modules: ["hr"], count: 2 },
  { modules: ["timesheet"], count: 1 },
  { modules: ["project"], count: 2 },
  { modules: ["accounting"], count: 2 },
  { modules: ["purchases"], count: 2 },
  { modules: ["sales"], count: 1 },
];

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
  if (config.mode === "sample") {
    return selectSampleTestQuestions(Date.now());
  }

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

function selectSampleTestQuestions(seed: number): Question[] {
  const random = seededRandom(seed);
  const usedIds = new Set<string>();
  const selected: Question[] = [];

  for (const q of shuffle(screenshotQuestions, random).slice(
    0,
    SAMPLE_TEST_RULES.screenshotCount
  )) {
    selected.push(q);
    usedIds.add(q.id);
  }

  const textPool = allQuestions.filter((q) => !q.image);

  for (const section of SAMPLE_TEXT_SECTIONS) {
    const sectionPool = shuffle(
      textPool.filter(
        (q) =>
          section.modules.includes(q.module) &&
          !usedIds.has(q.id) &&
          q.questionType !== "yesno"
      ),
      random
    );
    for (const q of sectionPool.slice(0, section.count)) {
      selected.push(q);
      usedIds.add(q.id);
    }
  }

  const target = SAMPLE_TEST_RULES.questionCount;
  if (selected.length < target) {
    const remaining = shuffle(
      textPool.filter((q) => !usedIds.has(q.id)),
      random
    );
    selected.push(...remaining.slice(0, target - selected.length));
  }

  // Mix in yes/no questions (official exam includes them)
  const yesNoPool = shuffle(
    textPool.filter((q) => q.questionType === "yesno" && !usedIds.has(q.id)),
    random
  );
  for (const yn of yesNoPool.slice(0, 4)) {
    if (selected.length === 0) break;
    const replaceAt = Math.floor(random() * selected.length);
    const old = selected[replaceAt];
    if (old) usedIds.delete(old.id);
    selected[replaceAt] = yn;
    usedIds.add(yn.id);
  }

  return shuffle(selected, random).slice(0, target);
}

/** Shuffle real options and append « I don't know » like the official Odoo exam. */
export function shuffleQuestionOptions(
  question: LocalizedQuestion,
  random: () => number,
  dontKnowLabel: string,
  includeDontKnow = true
): LocalizedQuestion {
  return prepareQuestionForExam(question, dontKnowLabel, random, includeDontKnow);
}

export function shuffleAllQuestionOptions(
  questions: LocalizedQuestion[],
  seed: number,
  dontKnowLabel: string,
  includeDontKnow = true
): LocalizedQuestion[] {
  const random = seededRandom(seed);
  return questions.map((q) =>
    shuffleQuestionOptions(q, random, dontKnowLabel, includeDontKnow)
  );
}

/** Average seconds per question for a timed exam. */
export function secondsPerQuestion(
  durationMinutes: number,
  questionCount: number
): number {
  if (questionCount <= 0 || durationMinutes <= 0) return 0;
  return Math.round((durationMinutes * 60) / questionCount);
}

export function calculateScore(
  questions: Pick<
    LocalizedQuestion,
    "id" | "module" | "correctIndex" | "dontKnowIndex"
  >[],
  answers: AnswerRecord[]
): Pick<
  ExamResult,
  | "correct"
  | "wrong"
  | "unanswered"
  | "dontKnow"
  | "score"
  | "percentage"
  | "passed"
  | "moduleBreakdown"
> {
  const answerMap = new Map(answers.map((a) => [a.questionId, a.selectedIndex]));
  let correct = 0;
  let wrong = 0;
  let unanswered = 0;
  let dontKnow = 0;
  const moduleBreakdown = {} as Record<
    ModuleId,
    { correct: number; total: number }
  >;

  for (const q of questions) {
    if (!moduleBreakdown[q.module]) {
      moduleBreakdown[q.module] = { correct: 0, total: 0 };
    }
    moduleBreakdown[q.module].total++;

    const selected = answerMap.get(q.id) ?? null;
    if (isUnanswered(selected)) {
      unanswered++;
    } else if (isDontKnow(selected, q.dontKnowIndex)) {
      dontKnow++;
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
    (unanswered + dontKnow) * EXAM_RULES.pointsUnanswered;

  const total = questions.length;
  const maxScore = total * EXAM_RULES.pointsCorrect;
  // Official Odoo cert: net points ÷ number of questions (e.g. 3 − 3.5 = −0.5 → −5 % on 10 Q)
  const percentage = total > 0 ? (score / maxScore) * 100 : 0;

  return {
    correct,
    wrong,
    unanswered,
    dontKnow,
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
