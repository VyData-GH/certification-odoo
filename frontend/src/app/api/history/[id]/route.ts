import { NextRequest } from "next/server";

import { authenticate } from "@/lib/server/auth";
import { deleteHistorySession, toErrorResponse } from "@/lib/server/history";

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const auth = await authenticate(request);
  if (!auth.ok) return auth.response;

  const { id } = await params;

  try {
    await deleteHistorySession(id, auth.userId);
    return new Response(null, { status: 204 });
  } catch (err) {
    return toErrorResponse(err);
  }
}
