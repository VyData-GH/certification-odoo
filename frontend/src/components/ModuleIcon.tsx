"use client";

import { useState } from "react";
import { getModuleIconUrl } from "@/lib/module-icons";
import { CERTIFICATION_MODULES, ModuleId, SUPPLEMENTARY_MODULES } from "@/types/exam";

interface ModuleIconProps {
  moduleId: ModuleId;
  size?: number;
  className?: string;
  title?: string;
}

export function ModuleIcon({
  moduleId,
  size = 24,
  className = "",
  title,
}: ModuleIconProps) {
  const [failed, setFailed] = useState(false);
  const mod =
    CERTIFICATION_MODULES.find((m) => m.id === moduleId) ??
    SUPPLEMENTARY_MODULES.find((m) => m.id === moduleId);
  const fallback = mod?.icon ?? "📦";
  const label = title ?? mod?.label;

  if (failed) {
    return (
      <span
        className={`inline-flex items-center justify-center shrink-0 ${className}`}
        style={{ width: size, height: size, fontSize: size * 0.75 }}
        title={label}
        aria-label={label}
        aria-hidden={label ? undefined : true}
      >
        {fallback}
      </span>
    );
  }

  return (
    // Icons are tiny remote SVGs from Odoo; next/image adds little value here.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={getModuleIconUrl(moduleId)}
      alt={label ?? ""}
      title={label}
      width={size}
      height={size}
      className={`shrink-0 object-contain ${className}`}
      onError={() => setFailed(true)}
    />
  );
}
