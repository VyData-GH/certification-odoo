import { NextRequest } from "next/server";

import { isAdminEmail } from "@/lib/admin-emails";
import { ensureAccessRecord } from "@/lib/server/access";
import { authenticateVerified } from "@/lib/server/auth";

export async function GET(request: NextRequest) {
  const auth = await authenticateVerified(request);
  if (!auth.ok) return auth.response;

  try {
    const record = await ensureAccessRecord(auth.userId, auth.email);
    return Response.json({
      status: record.status,
      email: record.email,
      requestedAt: record.requestedAt,
      decidedAt: record.decidedAt,
      note: record.note,
      isAdmin: isAdminEmail(auth.email),
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Access check failed";
    return Response.json({ detail: message }, { status: 500 });
  }
}
