"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { formatExamDuration } from "@/types/exam";

interface SmartTrainingLinksProps {
  mistakeCount: number;
  dueCount: number;
  hasWeakModules: boolean;
}

export function SmartTrainingLinks({
  mistakeCount,
  dueCount,
  hasWeakModules,
}: SmartTrainingLinksProps) {
  const { tr } = useLanguage();
  const s = tr.smartTraining;

  const cards = [
    {
      id: "redo-mistakes",
      href: "/exam?preset=redo-mistakes",
      title: tr.presets["redo-mistakes"].title,
      desc: tr.presets["redo-mistakes"].description,
      badge: tr.presets["redo-mistakes"].badge,
      meta: s.mistakesMeta.replace("{n}", String(mistakeCount)),
      disabled: mistakeCount === 0,
    },
    {
      id: "weak-modules",
      href: "/exam?preset=weak-modules",
      title: tr.presets["weak-modules"].title,
      desc: tr.presets["weak-modules"].description,
      badge: tr.presets["weak-modules"].badge,
      meta: hasWeakModules ? s.weakMeta : s.weakFallback,
      disabled: false,
    },
    {
      id: "spaced-review",
      href: "/exam?preset=spaced-review",
      title: tr.presets["spaced-review"].title,
      desc: tr.presets["spaced-review"].description,
      badge: tr.presets["spaced-review"].badge,
      meta: s.spacedMeta.replace("{n}", String(dueCount)),
      disabled: mistakeCount === 0 && dueCount === 0,
    },
    {
      id: "full-en",
      href: "/exam?preset=full-exam&lang=en",
      title: s.fullEnTitle,
      desc: s.fullEnDesc,
      badge: s.fullEnBadge,
      meta: `120 Q · ${formatExamDuration(90)}`,
      disabled: false,
    },
  ];

  return (
    <section>
      <div className="flex items-center justify-between gap-2 mb-3">
        <h2 className="text-base font-bold text-odoo-text">{s.title}</h2>
        <span className="text-xs text-odoo-text-muted">{s.certOnlyHint}</span>
      </div>
      <p className="text-sm text-odoo-text-muted mb-3">{s.intro}</p>
      <div className="grid sm:grid-cols-2 gap-3">
        {cards.map((card) =>
          card.disabled ? (
            <div
              key={card.id}
              className="odoo-card p-4 opacity-55"
              title={s.needHistory}
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-semibold text-odoo-text">{card.title}</h3>
                {card.badge && (
                  <span className="odoo-badge odoo-badge-brand shrink-0">
                    {card.badge}
                  </span>
                )}
              </div>
              <p className="text-sm text-odoo-text-muted mt-2">{card.desc}</p>
              <p className="text-xs text-odoo-text-muted mt-2">{card.meta}</p>
              <span className="inline-block mt-3 text-sm text-odoo-text-muted">
                {s.needHistory}
              </span>
            </div>
          ) : (
            <Link
              key={card.id}
              href={card.href}
              className="odoo-card p-4 hover:shadow-md transition-shadow group block no-underline"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-semibold text-odoo-text group-hover:text-odoo-brand">
                  {card.title}
                </h3>
                {card.badge && (
                  <span className="odoo-badge odoo-badge-brand shrink-0">
                    {card.badge}
                  </span>
                )}
              </div>
              <p className="text-sm text-odoo-text-muted mt-2">{card.desc}</p>
              <p className="text-xs text-odoo-text-muted mt-2">{card.meta}</p>
              <span className="inline-block mt-3 text-sm font-medium text-odoo-brand">
                {tr.home.start}
              </span>
            </Link>
          )
        )}
      </div>
    </section>
  );
}
