import {
  CERTIFICATION_MODULES,
  ExamResult,
  ModuleId,
  OFFICIAL_SECONDS_PER_QUESTION,
  SUPPLEMENTARY_MODULES,
} from "@/types/exam";

export type ModuleFocusLevel =
  | "strong"
  | "verify"
  | "practice"
  | "study";

export interface ModuleFocusTip {
  moduleId: ModuleId;
  label: string;
  correct: number;
  total: number;
  pct: number;
  level: ModuleFocusLevel;
}

export interface SessionStats {
  avgSecondsPerQuestion: number | null;
  officialSecondsPerQuestion: number;
  paceDeltaSeconds: number | null;
  moduleTips: ModuleFocusTip[];
}

function focusLevel(pct: number): ModuleFocusLevel {
  if (pct >= 85) return "strong";
  if (pct >= 70) return "verify";
  if (pct >= 50) return "practice";
  return "study";
}

const ALL_MODULES = [...CERTIFICATION_MODULES, ...SUPPLEMENTARY_MODULES];

/**
 * Per-session pacing + module focus recommendations derived from moduleBreakdown.
 */
export function computeSessionStats(
  result: ExamResult,
  moduleLabels: Record<string, string>
): SessionStats {
  const avgSecondsPerQuestion =
    result.totalQuestions > 0 && result.durationUsedSeconds > 0
      ? Math.round(
          (result.durationUsedSeconds / result.totalQuestions) * 10
        ) / 10
      : null;

  const paceDeltaSeconds =
    avgSecondsPerQuestion != null
      ? Math.round(
          (avgSecondsPerQuestion - OFFICIAL_SECONDS_PER_QUESTION) * 10
        ) / 10
      : null;

  const tips: ModuleFocusTip[] = [];

  for (const [id, data] of Object.entries(result.moduleBreakdown ?? {}) as Array<
    [ModuleId, { correct: number; total: number }]
  >) {
    if (!data.total) continue;
    const pct = (data.correct / data.total) * 100;
    const catalog = ALL_MODULES.find((m) => m.id === id);
    tips.push({
      moduleId: id,
      label: moduleLabels[id] ?? catalog?.label ?? id,
      correct: data.correct,
      total: data.total,
      pct,
      level: focusLevel(pct),
    });
  }

  tips.sort((a, b) => a.pct - b.pct);

  return {
    avgSecondsPerQuestion,
    officialSecondsPerQuestion: OFFICIAL_SECONDS_PER_QUESTION,
    paceDeltaSeconds,
    moduleTips: tips,
  };
}
