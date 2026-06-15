import { ExamResult } from "@/types/exam";

async function apiFetch<T>(
  path: string,
  token: string,
  options: RequestInit = {}
): Promise<T> {
  const res = await fetch(path, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      ...options.headers,
    },
  });

  if (!res.ok) {
    const detail = await res.text();
    throw new Error(detail || `API error ${res.status}`);
  }

  if (res.status === 204) return undefined as T;
  return res.json() as Promise<T>;
}

export async function fetchHistoryFromApi(token: string): Promise<ExamResult[]> {
  return apiFetch<ExamResult[]>("/api/history", token);
}

export async function saveHistoryToApi(
  result: ExamResult,
  token: string
): Promise<ExamResult> {
  return apiFetch<ExamResult>("/api/history", token, {
    method: "POST",
    body: JSON.stringify(result),
  });
}

export async function clearHistoryOnApi(token: string): Promise<void> {
  await apiFetch<void>("/api/history", token, { method: "DELETE" });
}
