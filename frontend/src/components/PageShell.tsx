import { OdooNavbar, OdooPageHeader } from "@/components/OdooShell";
import { SiteFooter } from "@/components/SiteFooter";

interface PageShellProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  backHref?: string;
  backLabel?: string;
  showHeader?: boolean;
}

export function PageShell({
  children,
  title,
  subtitle,
  backHref,
  backLabel,
  showHeader = true,
}: PageShellProps) {
  return (
    <div className="min-h-screen flex flex-col bg-odoo-bg">
      <OdooNavbar />
      {showHeader && title && (
        <OdooPageHeader
          title={title}
          subtitle={subtitle}
          backHref={backHref}
          backLabel={backLabel}
        />
      )}
      <main className="flex-1 w-full">{children}</main>
      <SiteFooter />
    </div>
  );
}
