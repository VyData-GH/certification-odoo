"use client";

import { useState } from "react";
import { getModuleIconUrl } from "@/lib/module-icons";
import { CERTIFICATION_MODULES, ModuleId, SUPPLEMENTARY_MODULES } from "@/types/exam";

interface ModuleIconProps {
  moduleId: ModuleId;
  size?: number;
  className?: string;
}

export function ModuleIcon({
  moduleId,
  size = 24,
  className = "",
}: ModuleIconProps) {
  const [failed, setFailed] = useState(false);
  const mod =
    CERTIFICATION_MODULES.find((m) => m.id === moduleId) ??
    SUPPLEMENTARY_MODULES.find((m) => m.id === moduleId);
  const fallback = mod?.icon ?? "📦";

  if (failed) {
    return (
      <span
        className={`inline-flex items-center justify-center shrink-0 ${className}`}
        style={{ width: size, height: size, fontSize: size * 0.75 }}
        aria-hidden
      >
        {fallback}
      </span>
    );
  }

  return (
    <img
      src={getModuleIconUrl(moduleId)}
      alt=""
      width={size}
      height={size}
      className={`shrink-0 object-contain ${className}`}
      onError={() => setFailed(true)}
    />
  );
}
