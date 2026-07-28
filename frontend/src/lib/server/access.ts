import { isAdminEmail, normalizeEmail } from "@/lib/admin-emails";
import type { AccessRecord, AccessStatus } from "@/lib/access-types";
import { getSupabaseAdmin } from "@/lib/server/supabase-admin";

export type { AccessRecord, AccessStatus } from "@/lib/access-types";

type DbRow = {
  user_id: string;
  email: string;
  status: AccessStatus;
  requested_at: string;
  decided_at: string | null;
  decided_by: string | null;
  note: string | null;
};

function mapRow(row: DbRow): AccessRecord {
  return {
    userId: row.user_id,
    email: row.email,
    status: row.status,
    requestedAt: row.requested_at,
    decidedAt: row.decided_at,
    decidedBy: row.decided_by,
    note: row.note,
  };
}

/** Ensure a row exists. Admins are always approved. New users start pending. */
export async function ensureAccessRecord(
  userId: string,
  email: string | null | undefined
): Promise<AccessRecord> {
  const admin = getSupabaseAdmin();
  const normalized = email ? normalizeEmail(email) : "";
  const asAdmin = isAdminEmail(normalized);

  const { data: existing, error: readErr } = await admin
    .from("account_approvals")
    .select("*")
    .eq("user_id", userId)
    .maybeSingle();

  if (readErr) throw readErr;

  if (existing) {
    if (asAdmin && existing.status !== "approved") {
      const { data: updated, error } = await admin
        .from("account_approvals")
        .update({
          status: "approved",
          decided_at: new Date().toISOString(),
          decided_by: userId,
          email: normalized || existing.email,
        })
        .eq("user_id", userId)
        .select("*")
        .single();
      if (error) throw error;
      return mapRow(updated as DbRow);
    }
    return mapRow(existing as DbRow);
  }

  const status: AccessStatus = asAdmin ? "approved" : "pending";
  const { data: inserted, error: insertErr } = await admin
    .from("account_approvals")
    .insert({
      user_id: userId,
      email: normalized || `unknown-${userId}@pending.local`,
      status,
      decided_at: asAdmin ? new Date().toISOString() : null,
      decided_by: asAdmin ? userId : null,
    })
    .select("*")
    .single();

  if (insertErr) throw insertErr;
  return mapRow(inserted as DbRow);
}

export async function getAccessRecord(
  userId: string
): Promise<AccessRecord | null> {
  const { data, error } = await getSupabaseAdmin()
    .from("account_approvals")
    .select("*")
    .eq("user_id", userId)
    .maybeSingle();
  if (error) throw error;
  return data ? mapRow(data as DbRow) : null;
}

export async function isUserApproved(
  userId: string,
  email: string | null | undefined
): Promise<boolean> {
  if (isAdminEmail(email)) return true;
  const record = await ensureAccessRecord(userId, email);
  return record.status === "approved";
}

export async function listPendingApprovals(): Promise<AccessRecord[]> {
  const { data, error } = await getSupabaseAdmin()
    .from("account_approvals")
    .select("*")
    .eq("status", "pending")
    .order("requested_at", { ascending: true });
  if (error) throw error;
  return (data as DbRow[]).map(mapRow);
}

export async function listRecentApprovals(
  limit = 50
): Promise<AccessRecord[]> {
  const { data, error } = await getSupabaseAdmin()
    .from("account_approvals")
    .select("*")
    .in("status", ["approved", "rejected"])
    .order("decided_at", { ascending: false })
    .limit(limit);
  if (error) throw error;
  return (data as DbRow[]).map(mapRow);
}

export async function decideAccess(params: {
  targetUserId: string;
  status: "approved" | "rejected";
  decidedBy: string;
  note?: string;
}): Promise<AccessRecord> {
  const { data, error } = await getSupabaseAdmin()
    .from("account_approvals")
    .update({
      status: params.status,
      decided_at: new Date().toISOString(),
      decided_by: params.decidedBy,
      note: params.note?.trim() || null,
    })
    .eq("user_id", params.targetUserId)
    .select("*")
    .single();
  if (error) throw error;
  return mapRow(data as DbRow);
}
