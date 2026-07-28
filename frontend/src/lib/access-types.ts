export type AccessStatus = "pending" | "approved" | "rejected";

export interface AccessRecord {
  userId: string;
  email: string;
  status: AccessStatus;
  requestedAt: string;
  decidedAt: string | null;
  decidedBy: string | null;
  note: string | null;
}
