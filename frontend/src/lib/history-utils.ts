import { EXAM_RULES, ExamResult } from "@/types/exam";

export type HistoryTab = "certification" | "training";

export type CertificationTrack = "full-exam" | "sample-test";

export function isSampleTestSession(result: ExamResult): boolean {
  return (
    result.mode === "sample" ||
    result.sessionMeta?.presetId === "sample-test"
  );
}

export function isFullExamSession(result: ExamResult): boolean {
  return (
    result.sessionMeta?.presetId === "full-exam" ||
    (result.mode === "full" && result.totalQuestions >= EXAM_RULES.totalQuestions)
  );
}

export function isCertificationSession(result: ExamResult): boolean {
  return isSampleTestSession(result) || isFullExamSession(result);
}

export function getHistoryTab(result: ExamResult): HistoryTab {
  return isCertificationSession(result) ? "certification" : "training";
}

export function filterByTab(
  items: ExamResult[],
  tab: HistoryTab
): ExamResult[] {
  return items.filter((item) => getHistoryTab(item) === tab);
}

function chronological(sessions: ExamResult[]): ExamResult[] {
  return [...sessions].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
}

function filterTrack(
  sessions: ExamResult[],
  track: CertificationTrack
): ExamResult[] {
  return sessions.filter((s) =>
    track === "sample-test" ? isSampleTestSession(s) : isFullExamSession(s)
  );
}

export interface AttemptsUntilPassStats {
  totalAttempts: number;
  attemptsUntilPass: number | null;
  passed: boolean;
  bestPercentage: number;
  firstPassDate: string | null;
  firstPassSessionId: string | null;
}

export function computeAttemptsUntilPass(
  sessions: ExamResult[],
  track: CertificationTrack,
  passThreshold = EXAM_RULES.passPercentage
): AttemptsUntilPassStats {
  const trackSessions = chronological(filterTrack(sessions, track));

  if (trackSessions.length === 0) {
    return {
      totalAttempts: 0,
      attemptsUntilPass: null,
      passed: false,
      bestPercentage: 0,
      firstPassDate: null,
      firstPassSessionId: null,
    };
  }

  const bestPercentage = Math.max(...trackSessions.map((s) => s.percentage));
  const firstPassIdx = trackSessions.findIndex(
    (s) => s.percentage >= passThreshold
  );
  const passed = firstPassIdx >= 0;
  const firstPass = passed ? trackSessions[firstPassIdx] : null;

  return {
    totalAttempts: trackSessions.length,
    attemptsUntilPass: passed ? firstPassIdx + 1 : null,
    passed,
    bestPercentage,
    firstPassDate: firstPass?.date ?? null,
    firstPassSessionId: firstPass?.id ?? null,
  };
}

export function certificationNumber(
  userId: string,
  track: CertificationTrack,
  passDate: string
): string {
  let hash = 0;
  const seed = `${userId}:${track}:${passDate}`;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
  }
  return String(1000000000 + (hash % 8999999999)).padStart(10, "0");
}
