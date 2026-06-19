import { ExamResult } from "@/types/exam";

const HISTORY_KEY = "odoo-cert-history";

export function saveExamResult(result: ExamResult): void {
  if (typeof window === "undefined") return;
  const history = getExamHistory();
  history.unshift(result);
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history.slice(0, 50)));
}

export function getExamHistory(): ExamResult[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function clearExamHistory(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(HISTORY_KEY);
}

export function deleteExamResult(id: string): void {
  if (typeof window === "undefined") return;
  const history = getExamHistory().filter((item) => item.id !== id);
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
}
