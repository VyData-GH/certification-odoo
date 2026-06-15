"use client";

import { formatTime } from "@/lib/exam-engine";

interface ExamTimerProps {
  remainingSeconds: number;
  totalSeconds: number;
}

export function ExamTimer({ remainingSeconds, totalSeconds }: ExamTimerProps) {
  const pct =
    totalSeconds > 0 ? (remainingSeconds / totalSeconds) * 100 : 100;
  const urgent = remainingSeconds < 300;

  return (
    <div className="flex items-center gap-2">
      <div className="hidden sm:block w-20 h-1.5 bg-white/20 overflow-hidden" style={{ borderRadius: 2 }}>
        <div
          className={`h-full transition-all ${urgent ? "bg-red-400" : "bg-odoo-action"}`}
          style={{ width: `${pct}%` }}
        />
      </div>
      <span
        className={`font-mono text-sm font-bold tabular-nums ${
          urgent ? "text-red-300" : "text-white"
        }`}
      >
        {formatTime(remainingSeconds)}
      </span>
    </div>
  );
}
