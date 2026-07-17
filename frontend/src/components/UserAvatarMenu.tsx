"use client";

import { useEffect, useId, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

interface UserAvatarMenuProps {
  email: string;
  onSignOut: () => void;
}

function initialsFromEmail(email: string): string {
  const local = email.split("@")[0]?.trim() || "?";
  const parts = local.split(/[._\-+]+/).filter(Boolean);
  if (parts.length >= 2) {
    return `${parts[0][0] ?? ""}${parts[1][0] ?? ""}`.toUpperCase();
  }
  return local.slice(0, 2).toUpperCase();
}

export function UserAvatarMenu({ email, onSignOut }: UserAvatarMenuProps) {
  const { tr } = useLanguage();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const initials = initialsFromEmail(email);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className="relative" ref={rootRef}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-xs font-semibold text-white ring-1 ring-white/30 hover:bg-white/30 transition-colors"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        title={email}
        aria-label={email}
      >
        {initials}
      </button>

      {open && (
        <div
          id={menuId}
          role="menu"
          className="absolute right-0 mt-2 w-56 rounded border border-odoo-border-light bg-white shadow-lg z-[60] overflow-hidden"
        >
          <div className="px-3 py-2.5 border-b border-odoo-border-light">
            <p className="text-[11px] text-odoo-text-muted">{tr.auth.loggedInAs}</p>
            <p className="text-sm text-odoo-text truncate font-medium" title={email}>
              {email}
            </p>
          </div>
          <button
            type="button"
            role="menuitem"
            onClick={() => {
              setOpen(false);
              onSignOut();
            }}
            className="w-full text-left px-3 py-2.5 text-sm text-odoo-danger hover:bg-red-50 transition-colors"
          >
            {tr.nav.logout}
          </button>
        </div>
      )}
    </div>
  );
}
