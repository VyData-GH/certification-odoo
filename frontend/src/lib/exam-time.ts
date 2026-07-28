/** Lightweight exam time helpers — safe to import without the question bank. */

export function formatTime(seconds: number): string {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  if (h > 0) {
    return `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  }
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

export function secondsPerQuestion(
  durationMinutes: number,
  questionCount: number
): number {
  if (questionCount <= 0 || durationMinutes <= 0) return 0;
  return Math.round((durationMinutes * 60) / questionCount);
}
