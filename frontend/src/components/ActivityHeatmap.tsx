"use client";

import { useMemo, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ExamResult } from "@/types/exam";

interface Props {
  history: ExamResult[];
}

type ColorMode = "questions" | "accuracy";

interface DayCell {
  date: Date;
  value: number;
  questions: number;
  correct: number;
}

function getWeekday(date: Date): number {
  return (date.getDay() + 6) % 7;
}

function dateKey(d: Date): string {
  return d.toISOString().slice(0, 10);
}

function formatDisplayDate(d: Date, locale: "en" | "fr"): string {
  return d.toLocaleDateString(locale === "fr" ? "fr-FR" : "en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
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
  const { tr, locale } = useLanguage();
  const [colorMode, setColorMode] = useState<ColorMode>("questions");
  const [tooltip, setTooltip] = useState<{
    x: number;
    y: number;
    cell: DayCell;
  } | null>(null);

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

    const weeks: DayCell[][] = [];
    let week: DayCell[] = [];
    const monthSet = new Map<number, number>();
    let d = new Date(start);
    let weekIdx = 0;

    while (d <= end) {
      const key = dateKey(d);
      const entry = byDay.get(key);
      const questions = entry?.questions ?? 0;
      const correct = entry?.correct ?? 0;
      const val =
        colorMode === "questions"
          ? questions
          : questions > 0
            ? Math.round((correct / questions) * 100)
            : 0;

      week.push({
        date: new Date(d),
        value: val,
        questions,
        correct,
      });

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

    let tQ = 0;
    let tC = 0;
    let aDays = 0;
    for (const [, v] of byDay) {
      tQ += v.questions;
      tC += v.correct;
      if (v.questions > 0) aDays++;
    }
    const rate = tQ > 0 ? Math.round((tC / tQ) * 100) : 0;

    const monthNames =
      locale === "fr"
        ? ["Jan", "Fév", "Mar", "Avr", "Mai", "Jun", "Jul", "Aoû", "Sep", "Oct", "Nov", "Déc"]
        : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const monthsList = [...monthSet.entries()]
      .sort((a, b) => a[0] - b[0])
      .map(([m, w]) => ({ label: monthNames[m], weekIdx: w }));

    return {
      grid: weeks,
      months: monthsList,
      totalQ: tQ,
      correctRate: rate,
      activeDays: aDays,
    };
  }, [history, colorMode, locale]);

  const cellSize = 11;
  const gap = 2;
  const step = cellSize + gap;
  const headerH = 16;
  const rowLabelW = 28;
  const svgW = rowLabelW + grid.length * step;
  const svgH = headerH + 7 * step;

  const dayLabels =
    locale === "fr"
      ? ["Lun", "", "Mer", "", "Ven", "", ""]
      : ["Mon", "", "Wed", "", "Fri", "", ""];

  return (
    <section className="odoo-card">
      <div className="odoo-card-header">{tr.home.activityTitle}</div>
      <div className="odoo-card-body">
        <div className="flex flex-wrap gap-4 text-sm text-odoo-text mb-3">
          <span>
            <span className="font-semibold">{totalQ}</span>{" "}
            {tr.home.activityTotalQ}
          </span>
          <span>
            <span className="font-semibold">
              {totalQ > 0 ? `${correctRate}%` : "--"}
            </span>{" "}
            {tr.home.activityCorrectRate}
          </span>
          <span>
            <span className="font-semibold">{activeDays}</span>{" "}
            {tr.home.activityActiveDays}
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
                ? tr.home.activityColorQ
                : tr.home.activityColorAcc}
            </button>
          ))}
        </div>

        <div
          className="overflow-x-auto relative"
          onMouseLeave={() => setTooltip(null)}
        >
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
                  className="cursor-pointer"
                  onMouseEnter={(e) => {
                    const parent = (e.target as SVGRectElement).ownerSVGElement
                      ?.parentElement;
                    const rect = parent?.getBoundingClientRect();
                    if (!rect) return;
                    setTooltip({
                      x: e.clientX - rect.left,
                      y: e.clientY - rect.top,
                      cell,
                    });
                  }}
                  onMouseMove={(e) => {
                    const parent = (e.target as SVGRectElement).ownerSVGElement
                      ?.parentElement;
                    const rect = parent?.getBoundingClientRect();
                    if (!rect) return;
                    setTooltip({
                      x: e.clientX - rect.left,
                      y: e.clientY - rect.top,
                      cell,
                    });
                  }}
                />
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

          {tooltip && (
            <div
              className="pointer-events-none absolute z-20 rounded-sm bg-odoo-text text-white text-xs px-2.5 py-1.5 shadow-md whitespace-nowrap"
              style={{
                left: Math.min(tooltip.x + 12, svgW - 160),
                top: Math.max(tooltip.y - 44, 0),
              }}
            >
              <div className="font-medium">
                {formatDisplayDate(tooltip.cell.date, locale)}
              </div>
              <div className="opacity-90 mt-0.5">
                {tooltip.cell.questions === 0
                  ? tr.home.activityTooltipEmpty
                  : colorMode === "questions"
                    ? tr.home.activityTooltipQuestions
                        .replace("{n}", String(tooltip.cell.questions))
                    : tr.home.activityTooltipAccuracy
                        .replace("{n}", String(tooltip.cell.questions))
                        .replace(
                          "{pct}",
                          String(
                            Math.round(
                              (tooltip.cell.correct / tooltip.cell.questions) *
                                100
                            )
                          )
                        )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
