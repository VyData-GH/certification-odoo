import { Suspense } from "react";
import { AuthGuard } from "@/components/AuthGuard";
import { ClientShell } from "@/components/ClientShell";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthGuard>
      <Suspense fallback={null}>
        <ClientShell>{children}</ClientShell>
      </Suspense>
    </AuthGuard>
  );
}
