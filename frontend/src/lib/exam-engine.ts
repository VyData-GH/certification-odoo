import { isDontKnow, isUnanswered } from "@/lib/answers";
import { prepareQuestionForExam } from "@/lib/exam-present";
import { allocateByWeight } from "@/lib/exam-weights";
import { allQuestions } from "@/data/questions";
import {
  getModuleQuestionCount as getPublicModuleQuestionCount,
  getQuestionStats as getPublicQuestionStats,
} from "@/data/question-stats";
import { screenshotQuestions } from "@/data/questions/screenshot-questions";
import {
  AnswerRecord,
  ExamConfig,
  ExamResult,
  EXAM_RULES,
  isCertificationModuleId,
  LocalizedQuestion,
  ModuleId,
  Question,
  SAMPLE_TEST_RULES,
} from "@/types/exam";

export { formatTime, secondsPerQuestion } from "@/lib/exam-time";

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
  if (config.questionIds?.length) {
    const byId = new Map(allQuestions.map((q) => [q.id, q]));
    const ordered = config.questionIds
      .map((id) => byId.get(id))
      .filter(Boolean) as Question[];
    return ordered.slice(0, config.questionCount || ordered.length);
  }

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
    const certPool = pool.filter((q) => isCertificationModuleId(q.module));
    return selectFullExamQuestions(certPool, count, random);
  }

  return shuffle(pool, random).slice(0, count);
}

/** Full mock: official module weights + screenshots + yes/no. */
function selectFullExamQuestions(
  pool: Question[],
  count: number,
  random: () => number
): Question[] {
  const screenshotTarget = Math.min(
    12,
    Math.max(6, Math.round(count * 0.08)),
    screenshotQuestions.length
  );
  const yesNoTarget = Math.min(8, Math.max(4, Math.round(count * 0.05)));

  const usedIds = new Set<string>();
  const selected: Question[] = [];

  for (const q of shuffle(screenshotQuestions, random).slice(
    0,
    screenshotTarget
  )) {
    selected.push(q);
    usedIds.add(q.id);
  }

  const yesNoPool = shuffle(
    pool.filter((q) => q.questionType === "yesno" && !usedIds.has(q.id)),
    random
  );
  for (const q of yesNoPool.slice(0, yesNoTarget)) {
    selected.push(q);
    usedIds.add(q.id);
  }

  const remainingSlots = Math.max(0, count - selected.length);
  const textPool = pool.filter(
    (q) => !usedIds.has(q.id) && !q.image && q.questionType !== "yesno"
  );
  selected.push(
    ...selectWeightedQuestions(textPool, remainingSlots, random)
  );

  return shuffle(selected, random).slice(0, count);
}

/** Pick questions following official exam module weights. */
function selectWeightedQuestions(
  pool: Question[],
  count: number,
  random: () => number
): Question[] {
  if (count <= 0 || pool.length === 0) return [];

  const allocations = allocateByWeight(count);
  const usedIds = new Set<string>();
  const selected: Question[] = [];

  for (const { modules, count: target } of allocations) {
    if (target <= 0) continue;
    const sectionPool = shuffle(
      pool.filter((q) => modules.includes(q.module) && !usedIds.has(q.id)),
      random
    );
    for (const q of sectionPool.slice(0, target)) {
      selected.push(q);
      usedIds.add(q.id);
    }
  }

  if (selected.length < count) {
    const remaining = shuffle(
      pool.filter((q) => !usedIds.has(q.id)),
      random
    );
    for (const q of remaining.slice(0, count - selected.length)) {
      selected.push(q);
      usedIds.add(q.id);
    }
  }

  return shuffle(selected, random);
}

function selectSampleTestQuestions(seed: number): Question[] {
  const random = seededRandom(seed);
  const usedIds = new Set<string>();
  const selected: Question[] = [];
  const target = SAMPLE_TEST_RULES.questionCount;

  for (const q of shuffle(screenshotQuestions, random).slice(
    0,
    SAMPLE_TEST_RULES.screenshotCount
  )) {
    selected.push(q);
    usedIds.add(q.id);
  }

  const textSlots = Math.max(0, target - selected.length);
  const textPool = allQuestions.filter(
    (q) =>
      !q.image &&
      !usedIds.has(q.id) &&
      isCertificationModuleId(q.module) &&
      q.questionType !== "yesno"
  );
  selected.push(...selectWeightedQuestions(textPool, textSlots, random));
  for (const q of selected) usedIds.add(q.id);

  // Mix in yes/no questions (official exam includes them)
  const yesNoPool = shuffle(
    allQuestions.filter(
      (q) =>
        q.questionType === "yesno" &&
        !usedIds.has(q.id) &&
        isCertificationModuleId(q.module)
    ),
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

/** Average seconds per question for a timed exam — see @/lib/exam-time. */

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

export function getQuestionStats() {
  return getPublicQuestionStats();
}

export function getModuleQuestionCount(moduleId: ModuleId): number {
  return getPublicModuleQuestionCount(moduleId);
}

/** Parse ?count= from module quiz URLs; supports numeric values and "all". */
export function parseModuleQuizCount(
  moduleId: ModuleId,
  countParam: string | null
): number {
  const max = getModuleQuestionCount(moduleId);
  if (max === 0) return 0;
  if (!countParam || countParam === "all") return max;
  const parsed = parseInt(countParam, 10);
  if (Number.isNaN(parsed) || parsed < 1) return Math.min(15, max);
  return Math.min(parsed, max);
}
