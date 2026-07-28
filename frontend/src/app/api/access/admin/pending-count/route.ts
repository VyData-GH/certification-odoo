import { NextRequest } from "next/server";

import { countPendingApprovals } from "@/lib/server/access";
import { authenticateAdmin } from "@/lib/server/auth";

/** Lightweight pending count for admin notification badge. */
export async function GET(request: NextRequest) {
  const auth = await authenticateAdmin(request);
  if (!auth.ok) return auth.response;

  try {
    const count = await countPendingApprovals();
    return Response.json({ count });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to count";
    return Response.json({ detail: message }, { status: 500 });
  }
}
