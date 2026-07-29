"use client";

import { useMemo, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ExamResult } from "@/types/exam";

interface Props {
  history: ExamResult[];
}

type ColorMode = "questions" | "accuracy";

function getWeekday(date: Date): number {
  return (date.getDay() + 6) % 7;
}

function dateKey(d: Date): string {
  return d.toISOString().slice(0, 10);
}

function getColor(value: number, mode: ColorMode): string {
  if (value === 0) return "#ebedf0";
  if (mode === "questions") {
    if (value >= 20) return "#006d32";
    if (value >= 10) return "#26a641";
    if (value >= 5) return "#39d353";
    return "#9be9a8";
  }
  if (value >= 90) return "#006d32";
  if (value >= 70) return "#26a641";
  if (value >= 50) return "#39d353";
  return "#9be9a8";
}

export function ActivityHeatmap({ history }: Props) {
  const { tr } = useLanguage();
  const [colorMode, setColorMode] = useState<ColorMode>("questions");

  const { grid, months, totalQ, correctRate, activeDays } = useMemo(() => {
    const byDay = new Map<string, { questions: number; correct: number }>();
    for (const r of history) {
      const key = dateKey(new Date(r.date));
      const prev = byDay.get(key) ?? { questions: 0, correct: 0 };
      prev.questions += r.totalQuestions;
      prev.correct += r.correct;
      byDay.set(key, prev);
    }

    const now = new Date();
    const year = now.getFullYear();
    const jan1 = new Date(year, 0, 1);
    const startOffset = getWeekday(jan1);
    const start = new Date(jan1);
    start.setDate(start.getDate() - startOffset);

    const dec31 = new Date(year, 11, 31);
    const endOffset = 6 - getWeekday(dec31);
    const end = new Date(dec31);
    end.setDate(end.getDate() + endOffset);

    const weeks: { date: Date; value: number }[][] = [];
    let week: { date: Date; value: number }[] = [];
    const monthSet = new Map<number, number>();
    let d = new Date(start);
    let weekIdx = 0;

    while (d <= end) {
      const key = dateKey(d);
      const entry = byDay.get(key);
      const val =
        colorMode === "questions"
          ? entry?.questions ?? 0
          : entry && entry.questions > 0
            ? Math.round((entry.correct / entry.questions) * 100)
            : 0;

      week.push({ date: new Date(d), value: val });

      if (week.length === 7) {
        weeks.push(week);
        const mid = week[3].date;
        if (mid.getFullYear() === year && !monthSet.has(mid.getMonth())) {
          monthSet.set(mid.getMonth(), weekIdx);
        }
        week = [];
        weekIdx++;
      }
      d.setDate(d.getDate() + 1);
    }
    if (week.length > 0) weeks.push(week);

    let totalQ = 0;
    let totalC = 0;
    let activeDays = 0;
    for (const [, v] of byDay) {
      totalQ += v.questions;
      totalC += v.correct;
      if (v.questions > 0) activeDays++;
    }
    const correctRate = totalQ > 0 ? Math.round((totalC / totalQ) * 100) : 0;

    const monthNames = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    ];
    const months = [...monthSet.entries()]
      .sort((a, b) => a[0] - b[0])
      .map(([m, w]) => ({ label: monthNames[m], weekIdx: w }));

    return { grid: weeks, months, totalQ, correctRate, activeDays };
  }, [history, colorMode]);

  const cellSize = 11;
  const gap = 2;
  const step = cellSize + gap;
  const headerH = 16;
  const rowLabelW = 28;
  const svgW = rowLabelW + grid.length * step;
  const svgH = headerH + 7 * step;

  const dayLabels = ["Mon", "", "Wed", "", "Fri", "", ""];

  return (
    <section className="odoo-card">
      <div className="odoo-card-header flex items-center gap-2">
        <span className="text-lg">📈</span>
        <span>{tr.home.activityTitle ?? "Your Activity"}</span>
      </div>
      <div className="odoo-card-body">
        <div className="flex flex-wrap gap-4 text-sm text-odoo-text mb-3">
          <span>
            <span className="font-semibold">{totalQ}</span>{" "}
            {tr.home.activityTotalQ ?? "Total Questions"}
          </span>
          <span>
            <span className="font-semibold">
              {totalQ > 0 ? `${correctRate}%` : "--"}
            </span>{" "}
            {tr.home.activityCorrectRate ?? "Correct Rate"}
          </span>
          <span>
            <span className="font-semibold">{activeDays}</span>{" "}
            {tr.home.activityActiveDays ?? "Active Days"}
          </span>
        </div>

        <div className="flex gap-2 mb-3">
          {(["questions", "accuracy"] as const).map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => setColorMode(m)}
              className={`px-3 py-1 text-xs rounded-sm font-medium transition-colors ${
                colorMode === m
                  ? "bg-odoo-text text-white"
                  : "bg-gray-100 text-odoo-text-muted hover:bg-gray-200"
              }`}
            >
              {m === "questions"
                ? (tr.home.activityColorQ ?? "Questions")
                : (tr.home.activityColorAcc ?? "Accuracy")}
            </button>
          ))}
        </div>

        <div className="overflow-x-auto">
          <svg width={svgW} height={svgH + 20} className="block">
            {months.map((m) => (
              <text
                key={m.label}
                x={rowLabelW + m.weekIdx * step}
                y={12}
                className="fill-odoo-text-muted"
                fontSize={10}
              >
                {m.label}
              </text>
            ))}
            {dayLabels.map((label, row) =>
              label ? (
                <text
                  key={row}
                  x={0}
                  y={headerH + row * step + cellSize - 2}
                  className="fill-odoo-text-muted"
                  fontSize={9}
                >
                  {label}
                </text>
              ) : null
            )}
            {grid.map((week, wi) =>
              week.map((cell, di) => (
                <rect
                  key={`${wi}-${di}`}
                  x={rowLabelW + wi * step}
                  y={headerH + di * step}
                  width={cellSize}
                  height={cellSize}
                  rx={2}
                  fill={getColor(cell.value, colorMode)}
                >
                  <title>
                    {dateKey(cell.date)}: {cell.value}{" "}
                    {colorMode === "questions" ? "Q" : "%"}
                  </title>
                </rect>
              ))
            )}
            <g transform={`translate(${svgW / 2 - 60}, ${svgH + 6})`}>
              <text fontSize={10} className="fill-odoo-text-muted" y={10}>
                0
              </text>
              {[0, 1, 2, 3, 4].map((i) => (
                <rect
                  key={i}
                  x={16 + i * 15}
                  y={0}
                  width={cellSize}
                  height={cellSize}
                  rx={2}
                  fill={
                    i === 0
                      ? "#ebedf0"
                      : getColor(
                          colorMode === "questions"
                            ? [0, 1, 5, 10, 20][i]
                            : [0, 30, 50, 70, 90][i],
                          colorMode
                        )
                  }
                />
              ))}
              <text fontSize={10} className="fill-odoo-text-muted" x={92} y={10}>
                20+
              </text>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
