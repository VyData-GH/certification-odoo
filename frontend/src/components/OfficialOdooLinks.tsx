"use client";

import { useLanguage } from "@/context/LanguageContext";
import { ODOO_OFFICIAL_LINKS } from "@/lib/odoo-official-links";

export function OfficialOdooLinks({ className = "" }: { className?: string }) {
  const { tr } = useLanguage();
  const o = tr.officialOdoo;

  const items = [
    {
      key: "sample",
      href: ODOO_OFFICIAL_LINKS.sampleTest.href,
      title: o.sampleTitle,
      meta: o.sampleMeta,
      desc: o.sampleDesc,
    },
    {
      key: "cert",
      href: ODOO_OFFICIAL_LINKS.functionalCertV19.href,
      title: o.certTitle,
      meta: o.certMeta,
      desc: o.certDesc,
    },
    {
      key: "courses",
      href: ODOO_OFFICIAL_LINKS.tutorials.href,
      title: o.coursesTitle,
      meta: o.coursesMeta,
      desc: o.coursesDesc,
    },
  ] as const;

  return (
    <section className={`odoo-card ${className}`}>
      <div className="odoo-card-header">{o.title}</div>
      <div className="odoo-card-body space-y-4">
        <p className="text-sm text-odoo-text-muted">{o.intro}</p>
        <ul className="space-y-3">
          {items.map((item) => (
            <li
              key={item.key}
              className="border border-odoo-border-light rounded-sm p-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div className="min-w-0">
                  <p className="font-medium text-odoo-text">{item.title}</p>
                  <p className="text-xs text-odoo-brand mt-0.5">{item.meta}</p>
                  <p className="text-sm text-odoo-text-muted mt-1">{item.desc}</p>
                </div>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="odoo-btn-secondary text-sm shrink-0 self-start"
                >
                  {o.open}
                </a>
              </div>
            </li>
          ))}
        </ul>
        <p className="text-xs text-odoo-text-muted">{o.disclaimer}</p>
      </div>
    </section>
  );
}
