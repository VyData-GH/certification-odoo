import { NextRequest } from "next/server";

import {
  decideAccess,
  listPendingApprovals,
  listRecentApprovals,
} from "@/lib/server/access";
import { authenticateAdmin } from "@/lib/server/auth";

export async function GET(request: NextRequest) {
  const auth = await authenticateAdmin(request);
  if (!auth.ok) return auth.response;

  try {
    const [pending, recent] = await Promise.all([
      listPendingApprovals(),
      listRecentApprovals(30),
    ]);
    return Response.json({
      pending,
      recent,
      adminEmail: auth.email,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to list";
    return Response.json({ detail: message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const auth = await authenticateAdmin(request);
  if (!auth.ok) return auth.response;

  let body: { userId?: string; status?: string; note?: string };
  try {
    body = (await request.json()) as typeof body;
  } catch {
    return Response.json({ detail: "Invalid JSON body" }, { status: 400 });
  }

  if (
    !body.userId ||
    (body.status !== "approved" && body.status !== "rejected")
  ) {
    return Response.json(
      { detail: "userId and status (approved|rejected) required" },
      { status: 400 }
    );
  }

  try {
    const updated = await decideAccess({
      targetUserId: body.userId,
      status: body.status,
      decidedBy: auth.userId,
      note: body.note,
    });
    return Response.json(updated);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Decision failed";
    return Response.json({ detail: message }, { status: 500 });
  }
}
