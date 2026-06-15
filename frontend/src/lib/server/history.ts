import { ExamResult } from "@/types/exam";

import { getSupabaseAdmin } from "./supabase-admin";

const REPLAY_COLUMNS = ["session_meta", "answers"] as const;

type ExamSessionRow = {
  id: string;
  session_date: string;
  mode: ExamResult["mode"];
  total_questions: number;
  correct: number;
  wrong: number;
  unanswered: number;
  score: number;
  percentage: number;
  passed: boolean;
  duration_used_seconds: number;
  module_breakdown?: Record<string, unknown>;
  session_meta?: Record<string, unknown>;
  answers?: Record<string, unknown>[];
};

export class ApiError extends Error {
  constructor(
    message: string,
    readonly status: number
  ) {
    super(message);
  }
}

function rowToResponse(row: ExamSessionRow): ExamResult {
  return {
    id: String(row.id),
    date: row.session_date,
    mode: row.mode,
    totalQuestions: row.total_questions,
    correct: row.correct,
    wrong: row.wrong,
    unanswered: row.unanswered,
    score: Number(row.score),
    percentage: Number(row.percentage),
    passed: row.passed,
    durationUsedSeconds: row.duration_used_seconds,
    moduleBreakdown: (row.module_breakdown ??
      {}) as unknown as ExamResult["moduleBreakdown"],
    sessionMeta: (row.session_meta ?? {}) as unknown as ExamResult["sessionMeta"],
    answers: (row.answers ?? []) as unknown as ExamResult["answers"],
  };
}

function isMissingReplayColumnsError(err: unknown): boolean {
  const text = String(err).toLowerCase();
  return (
    text.includes("session_meta") ||
    text.includes("answers") ||
    text.includes("pgrst204") ||
    (text.includes("column") && text.includes("does not exist"))
  );
}

function missingColumnsError(): ApiError {
  return new ApiError(
    "Database schema is missing replay columns (session_meta, answers). Run supabase/schema.sql.",
    503
  );
}

function validateReplayPayload(body: ExamResult): void {
  const sessionMeta = (body.sessionMeta ?? {}) as Record<string, unknown>;
  const questionIds = sessionMeta.questionIds;

  if (!Array.isArray(questionIds) || questionIds.length === 0) {
    throw new ApiError("sessionMeta.questionIds must be a non-empty list", 422);
  }
  if (questionIds.length !== body.totalQuestions) {
    throw new ApiError(
      "sessionMeta.questionIds length must match totalQuestions",
      422
    );
  }
  if (!body.answers?.length) {
    throw new ApiError("answers must be a non-empty list", 422);
  }
  if (body.answers.length !== body.totalQuestions) {
    throw new ApiError("answers length must match totalQuestions", 422);
  }
  if (sessionMeta.sessionSeed == null) {
    throw new ApiError("sessionMeta.sessionSeed is required", 422);
  }
}

function buildPayload(body: ExamResult, userId: string): Record<string, unknown> {
  const payload: Record<string, unknown> = {
    user_id: userId,
    session_date: body.date,
    mode: body.mode,
    total_questions: body.totalQuestions,
    correct: body.correct,
    wrong: body.wrong,
    unanswered: body.unanswered,
    score: body.score,
    percentage: body.percentage,
    passed: body.passed,
    duration_used_seconds: body.durationUsedSeconds,
    module_breakdown: body.moduleBreakdown,
    session_meta: body.sessionMeta ?? {},
    answers: body.answers ?? [],
  };
  if (body.id) {
    payload.id = body.id;
  }
  return payload;
}

async function fetchSession(
  sessionId: string,
  userId: string
): Promise<ExamSessionRow | null> {
  const { data, error } = await getSupabaseAdmin()
    .from("exam_sessions")
    .select("*")
    .eq("id", sessionId)
    .eq("user_id", userId)
    .maybeSingle();

  if (error) throw error;
  return data as ExamSessionRow | null;
}

async function upsertSession(body: ExamResult, userId: string): Promise<ExamSessionRow> {
  validateReplayPayload(body);
  const payload = buildPayload(body, userId);

  const { data, error } = await getSupabaseAdmin()
    .from("exam_sessions")
    .upsert(payload, { onConflict: "id" })
    .select()
    .maybeSingle();

  if (error) {
    if (isMissingReplayColumnsError(error)) {
      console.error(
        "exam_sessions table is missing %s — run supabase/schema.sql",
        REPLAY_COLUMNS.join(", ")
      );
      throw missingColumnsError();
    }
    throw error;
  }

  if (data) return data as ExamSessionRow;

  if (body.id) {
    const existing = await fetchSession(body.id, userId);
    if (existing) return existing;
  }

  throw new ApiError("Failed to save exam session", 500);
}

export async function listHistory(userId: string): Promise<ExamResult[]> {
  const { data, error } = await getSupabaseAdmin()
    .from("exam_sessions")
    .select("*")
    .eq("user_id", userId)
    .order("session_date", { ascending: false })
    .limit(50);

  if (error) {
    if (isMissingReplayColumnsError(error)) {
      throw missingColumnsError();
    }
    throw error;
  }

  return ((data ?? []) as ExamSessionRow[]).map(rowToResponse);
}

export async function saveHistory(
  body: ExamResult,
  userId: string
): Promise<ExamResult> {
  const row = await upsertSession(body, userId);
  const saved = rowToResponse(row);
  const questionIds = saved.sessionMeta?.questionIds ?? [];

  if (!questionIds.length || !saved.answers?.length) {
    console.error("Session %s saved without replay data", saved.id);
    throw new ApiError("Session was saved without replay data", 500);
  }

  return saved;
}

export async function clearHistory(userId: string): Promise<void> {
  const { error } = await getSupabaseAdmin()
    .from("exam_sessions")
    .delete()
    .eq("user_id", userId);

  if (error) throw error;
}

export function toErrorResponse(err: unknown): Response {
  if (err instanceof ApiError) {
    return Response.json({ detail: err.message }, { status: err.status });
  }
  console.error(err);
  return Response.json(
    { detail: err instanceof Error ? err.message : "Internal server error" },
    { status: 500 }
  );
}
