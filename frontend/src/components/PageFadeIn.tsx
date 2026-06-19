"use client";

interface PageFadeInProps {
  children: React.ReactNode;
  routeKey: string;
}

export function PageFadeIn({ children, routeKey }: PageFadeInProps) {
  return (
    <div key={routeKey} className="odoo-page-enter">
      {children}
    </div>
  );
}
