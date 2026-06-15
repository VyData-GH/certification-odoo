"use client";

import type { ReactNode } from "react";

interface ConfirmDialogProps {
  open: boolean;
  title: string;
  message: ReactNode;
  confirmLabel: string;
  cancelLabel: string;
  onConfirm: () => void;
  onCancel: () => void;
  loading?: boolean;
  variant?: "default" | "danger";
  confirmClassName?: string;
}

export function ConfirmDialog({
  open,
  title,
  message,
  confirmLabel,
  cancelLabel,
  onConfirm,
  onCancel,
  loading = false,
  variant = "default",
  confirmClassName,
}: ConfirmDialogProps) {
  if (!open) return null;

  const confirmClass =
    confirmClassName ??
    (variant === "danger"
      ? "odoo-btn-primary flex-1 !bg-odoo-danger !border-odoo-danger hover:!opacity-90"
      : "odoo-btn-primary flex-1");

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={onCancel}
      role="presentation"
    >
      <div
        className="odoo-card max-w-md w-full shadow-xl"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="confirm-dialog-title"
      >
        <div className="odoo-card-header" id="confirm-dialog-title">
          {title}
        </div>
        <div className="odoo-card-body">
          <div className="text-odoo-text text-sm mb-5">{message}</div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={onCancel}
              disabled={loading}
              className="odoo-btn-secondary flex-1 disabled:opacity-50"
            >
              {cancelLabel}
            </button>
            <button
              type="button"
              onClick={onConfirm}
              disabled={loading}
              className={`${confirmClass} disabled:opacity-50`}
            >
              {confirmLabel}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
