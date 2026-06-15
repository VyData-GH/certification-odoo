import { NextRequest } from "next/server";

import { authenticate } from "@/lib/server/auth";
import {
  clearHistory,
  listHistory,
  saveHistory,
  toErrorResponse,
} from "@/lib/server/history";
import { ExamResult } from "@/types/exam";

export async function GET(request: NextRequest) {
  const auth = await authenticate(request);
  if (!auth.ok) return auth.response;

  try {
    const items = await listHistory(auth.userId);
    return Response.json(items);
  } catch (err) {
    return toErrorResponse(err);
  }
}

export async function POST(request: NextRequest) {
  const auth = await authenticate(request);
  if (!auth.ok) return auth.response;

  let body: ExamResult;
  try {
    body = (await request.json()) as ExamResult;
  } catch {
    return Response.json({ detail: "Invalid JSON body" }, { status: 400 });
  }

  try {
    const saved = await saveHistory(body, auth.userId);
    return Response.json(saved, { status: 201 });
  } catch (err) {
    return toErrorResponse(err);
  }
}

export async function DELETE(request: NextRequest) {
  const auth = await authenticate(request);
  if (!auth.ok) return auth.response;

  try {
    await clearHistory(auth.userId);
    return new Response(null, { status: 204 });
  } catch (err) {
    return toErrorResponse(err);
  }
}
