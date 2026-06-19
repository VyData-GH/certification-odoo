import {
  clearExamHistory as clearLocalHistory,
  deleteExamResult as deleteLocalResult,
  getExamHistory as getLocalHistory,
  saveExamResult as saveLocalHistory,
} from "@/lib/storage";
import { ExamResult } from "@/types/exam";
import {
  clearHistoryOnApi,
  deleteHistorySessionOnApi,
  fetchHistoryFromApi,
  saveHistoryToApi,
} from "./historyApi";

export type HistorySource = "cloud" | "local";

export async function loadHistory(
  accessToken?: string | null
): Promise<{ items: ExamResult[]; source: HistorySource }> {
  if (accessToken) {
    try {
      const items = await fetchHistoryFromApi(accessToken);
      return { items, source: "cloud" };
    } catch {
      // fallback if API down
      return { items: getLocalHistory(), source: "local" };
    }
  }
  return { items: getLocalHistory(), source: "local" };
}

export async function saveHistory(
  result: ExamResult,
  accessToken?: string | null
): Promise<HistorySource> {
  if (accessToken) {
    try {
      await saveHistoryToApi(result, accessToken);
      return "cloud";
    } catch (err) {
      console.error("Cloud history save failed, keeping local copy:", err);
      saveLocalHistory(result);
      return "local";
    }
  }
  saveLocalHistory(result);
  return "local";
}

export async function clearHistory(
  accessToken?: string | null
): Promise<void> {
  if (accessToken) {
    await clearHistoryOnApi(accessToken);
    clearLocalHistory();
    return;
  }
  clearLocalHistory();
}

export async function deleteHistorySession(
  sessionId: string,
  accessToken?: string | null
): Promise<void> {
  if (accessToken) {
    await deleteHistorySessionOnApi(sessionId, accessToken);
    deleteLocalResult(sessionId);
    return;
  }
  deleteLocalResult(sessionId);
}

/** Push local-only sessions to cloud after login */
export async function syncLocalHistoryToCloud(
  accessToken: string
): Promise<number> {
  const local = getLocalHistory();
  if (local.length === 0) return 0;

  let synced = 0;
  for (const item of [...local].reverse()) {
    try {
      await saveHistoryToApi(item, accessToken);
      synced++;
    } catch (err) {
      const msg = err instanceof Error ? err.message : "";
      if (msg.includes("23505") || msg.includes("duplicate")) {
        synced++;
        continue;
      }
      break;
    }
  }
  if (synced > 0) clearLocalHistory();
  return synced;
}
