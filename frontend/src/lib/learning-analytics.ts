import { allQuestions } from "@/data/questions";
import { isDontKnow } from "@/lib/answers";
import { loadQuestionsByIds } from "@/lib/exam-replay";
import { shuffleAllQuestionOptions } from "@/lib/exam-engine";
import { t } from "@/i18n/translations";
import {
  CERTIFICATION_MODULES,
  CertificationModuleId,
  ExamResult,
  isCertificationModuleId,
  ModuleId,
} from "@/types/exam";

const FULL_EXAM_MIN_QUESTIONS = 100;

export interface ModuleStrength {
  moduleId: CertificationModuleId;
  correct: number;
  total: number;
  percentage: number;
  sessions: number;
}

export interface MistakeStat {
  questionId: string;
  wrongCount: number;
  unansweredCount: number;
  lastSeenAt: string;
}

export type ReadinessLevel = "not-started" | "building" | "almost" | "ready";

export interface ReadinessReport {
  score: number;
  level: ReadinessLevel;
  recentFullMocks: number;
  recentAvgPercentage: number | null;
  bestFullPercentage: number | null;
  weakModules: ModuleStrength[];
  mistakeCount: number;
  dueReviewCount: number;
  recommendation: "train" | "focus-weak" | "redo-mistakes" | "full-mock" | "go";
}

function chronological(sessions: ExamResult[]): ExamResult[] {
  return [...sessions].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
}

export function getCertificationSessions(sessions: ExamResult[]): ExamResult[] {
  return sessions.filter((s) => {
    const modules = s.sessionMeta?.modules;
    if (modules?.length && modules.every((m) => isCertificationModuleId(m))) {
      return true;
    }
    if (!modules?.length) {
      return Object.keys(s.moduleBreakdown ?? {}).some((id) =>
        isCertificationModuleId(id)
      );
    }
    return false;
  });
}

export function getFullMockSessions(sessions: ExamResult[]): ExamResult[] {
  return sessions.filter(
    (s) =>
      s.sessionMeta?.presetId === "full-exam" ||
      (s.mode === "full" && s.totalQuestions >= FULL_EXAM_MIN_QUESTIONS)
  );
}

/** Aggregate correct/total per certification module across history. */
export function computeModuleStrengths(
  sessions: ExamResult[]
): ModuleStrength[] {
  const map = new Map<
    CertificationModuleId,
    { correct: number; total: number; sessions: number }
  >();

  for (const mod of CERTIFICATION_MODULES) {
    map.set(mod.id, { correct: 0, total: 0, sessions: 0 });
  }

  for (const session of sessions) {
    for (const [id, data] of Object.entries(session.moduleBreakdown ?? {}) as Array<
      [ModuleId, { correct: number; total: number }]
    >) {
      if (!isCertificationModuleId(id) || !data.total) continue;
      const row = map.get(id)!;
      row.correct += data.correct;
      row.total += data.total;
      row.sessions += 1;
    }
  }

  return CERTIFICATION_MODULES.map((mod) => {
    const row = map.get(mod.id)!;
    return {
      moduleId: mod.id,
      correct: row.correct,
      total: row.total,
      percentage: row.total > 0 ? (row.correct / row.total) * 100 : 0,
      sessions: row.sessions,
    };
  });
}

export function getWeakModules(
  sessions: ExamResult[],
  limit = 4,
  minAttempts = 3
): ModuleStrength[] {
  return computeModuleStrengths(sessions)
    .filter((m) => m.total >= minAttempts)
    .sort((a, b) => a.percentage - b.percentage)
    .slice(0, limit);
}

/**
 * Collect wrong / unanswered / « I don't know » question IDs across sessions.
 * Prefers outcome snapshot saved at submit (avoids shuffle/locale drift).
 */
export function collectMistakeStats(sessions: ExamResult[]): MistakeStat[] {
  const byId = new Map<string, MistakeStat>();

  for (const session of chronological(sessions)) {
    const ids = session.sessionMeta?.questionIds;
    const answers = session.answers;
    if (!ids?.length || !answers?.length) continue;

    // Skip perfect sessions entirely (guards old sessions with drifted reconstruction)
    if (
      session.correct === session.totalQuestions &&
      session.wrong === 0 &&
      (session.unanswered ?? 0) === 0 &&
      (session.dontKnow ?? 0) === 0
    ) {
      continue;
    }

    const answerById = new Map(answers.map((a) => [a.questionId, a]));
    const hasOutcomes = answers.some((a) => a.outcome);

    let resolved: Array<{
      questionId: string;
      wrong: number;
      unanswered: number;
    }> = [];

    if (hasOutcomes) {
      for (const id of ids) {
        const a = answerById.get(id);
        const outcome = a?.outcome;
        if (!outcome || outcome === "correct") continue;
        resolved.push({
          questionId: id,
          wrong: outcome === "wrong" ? 1 : 0,
          unanswered:
            outcome === "unanswered" || outcome === "dontKnow" ? 1 : 0,
        });
      }
    } else {
      const questions = loadQuestionsByIds(ids);
      if (questions.length === 0) continue;

      const examLocale = session.sessionMeta!.locale ?? "en";
      const byQ = new Map(questions.map((q) => [q.id, q]));
      const inOrder = ids
        .map((id) => byQ.get(id))
        .filter(Boolean) as typeof questions;

      const shuffled = shuffleAllQuestionOptions(
        inOrder.map((q) => ({
          id: q.id,
          module: q.module,
          text: q.text[examLocale],
          options: [...q.options[examLocale]],
          correctIndex: q.correctIndex,
          dontKnowIndex: null,
          explanation: q.explanation[examLocale],
          questionType: q.questionType,
        })),
        session.sessionMeta!.sessionSeed,
        t(examLocale).exam.dontKnow
      );

      for (const q of shuffled) {
        const a = answerById.get(q.id);
        const selected = a?.selectedIndex ?? null;
        let wrong = 0;
        let unanswered = 0;

        if (selected === null || selected === undefined) {
          unanswered = 1;
        } else if (isDontKnow(selected, q.dontKnowIndex)) {
          unanswered = 1;
        } else if (selected !== q.correctIndex) {
          wrong = 1;
        } else {
          continue;
        }
        resolved.push({ questionId: q.id, wrong, unanswered });
      }
    }

    for (const row of resolved) {
      const prev = byId.get(row.questionId);
      if (prev) {
        prev.wrongCount += row.wrong;
        prev.unansweredCount += row.unanswered;
        prev.lastSeenAt = session.date;
      } else {
        byId.set(row.questionId, {
          questionId: row.questionId,
          wrongCount: row.wrong,
          unansweredCount: row.unanswered,
          lastSeenAt: session.date,
        });
      }
    }
  }

  return [...byId.values()].sort(
    (a, b) =>
      b.wrongCount +
      b.unansweredCount -
      (a.wrongCount + a.unansweredCount)
  );
}

export function getMistakeQuestionIds(
  sessions: ExamResult[],
  limit = 30
): string[] {
  const valid = new Set(allQuestions.map((q) => q.id));
  return collectMistakeStats(sessions)
    .map((m) => m.questionId)
    .filter((id) => valid.has(id))
    .slice(0, limit);
}

export function computeReadiness(
  sessions: ExamResult[],
  dueReviewCount = 0
): ReadinessReport {
  const fullMocks = chronological(getFullMockSessions(sessions));
  const recent = fullMocks.slice(-3);
  const recentAvg =
    recent.length > 0
      ? recent.reduce((s, r) => s + r.percentage, 0) / recent.length
      : null;
  const bestFull =
    fullMocks.length > 0
      ? Math.max(...fullMocks.map((s) => s.percentage))
      : null;

  const weakModules = getWeakModules(sessions, 4, 3);
  const mistakeCount = collectMistakeStats(sessions).length;

  let score = 0;

  if (recentAvg != null) {
    score += Math.min(50, Math.max(0, (recentAvg / 100) * 50));
  } else if (bestFull != null) {
    score += Math.min(25, Math.max(0, (bestFull / 100) * 25));
  }

  const strengths = computeModuleStrengths(sessions).filter((m) => m.total >= 3);
  if (strengths.length > 0) {
    const avgMod =
      strengths.reduce((s, m) => s + m.percentage, 0) / strengths.length;
    score += Math.min(30, (avgMod / 100) * 30);
  }

  const covered = strengths.filter((m) => m.percentage >= 65).length;
  score += Math.min(15, (covered / CERTIFICATION_MODULES.length) * 15);

  if (mistakeCount > 40) score -= 8;
  else if (mistakeCount > 20) score -= 4;
  if (dueReviewCount > 15) score -= 5;

  score = Math.round(Math.max(0, Math.min(100, score)));

  let level: ReadinessLevel = "not-started";
  if (sessions.length === 0) level = "not-started";
  else if (score >= 78 && (recentAvg ?? 0) >= 75) level = "ready";
  else if (score >= 60) level = "almost";
  else level = "building";

  let recommendation: ReadinessReport["recommendation"] = "train";
  if (level === "ready") recommendation = "go";
  else if (mistakeCount >= 8) recommendation = "redo-mistakes";
  else if (weakModules.length >= 2 && weakModules[0].percentage < 60) {
    recommendation = "focus-weak";
  } else if (recent.length === 0 || (recentAvg ?? 0) < 70) {
    recommendation = "full-mock";
  } else {
    recommendation = "train";
  }

  return {
    score,
    level,
    recentFullMocks: recent.length,
    recentAvgPercentage: recentAvg,
    bestFullPercentage: bestFull,
    weakModules,
    mistakeCount,
    dueReviewCount,
    recommendation,
  };
}

export type StudyWeekFocus =
  | "foundations"
  | "weak-focus"
  | "exam-simulation";

export interface StudyPlanStep {
  week: 1 | 2 | 3;
  focus: StudyWeekFocus;
  titleKey: "week1Title" | "week2Title" | "week3Title";
  actions: Array<{
    labelKey:
      | "actionDaily"
      | "actionCourse"
      | "actionWeak"
      | "actionMistakes"
      | "actionHalf"
      | "actionFull"
      | "actionSample"
      | "actionSpaced";
    href: string;
  }>;
}

export function buildStudyPlan(
  weakModules: ModuleStrength[]
): StudyPlanStep[] {
  const weakHref =
    weakModules.length > 0
      ? `/exam?preset=weak-modules`
      : `/modules`;

  return [
    {
      week: 1,
      focus: "foundations",
      titleKey: "week1Title",
      actions: [
        { labelKey: "actionCourse", href: "/courses" },
        { labelKey: "actionDaily", href: "/exam?preset=daily-challenge" },
        { labelKey: "actionSpaced", href: "/exam?preset=spaced-review" },
      ],
    },
    {
      week: 2,
      focus: "weak-focus",
      titleKey: "week2Title",
      actions: [
        { labelKey: "actionWeak", href: weakHref },
        { labelKey: "actionMistakes", href: "/exam?preset=redo-mistakes" },
        { labelKey: "actionHalf", href: "/exam?preset=half-exam" },
      ],
    },
    {
      week: 3,
      focus: "exam-simulation",
      titleKey: "week3Title",
      actions: [
        { labelKey: "actionSample", href: "/exam?preset=sample-test" },
        {
          labelKey: "actionFull",
          href: "/exam?preset=full-exam&lang=en",
        },
        { labelKey: "actionMistakes", href: "/exam?preset=redo-mistakes" },
      ],
    },
  ];
}
