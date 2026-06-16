import { allQuestions } from "@/data/questions";
import { localizeQuestions } from "@/lib/localize";
import {
  ExamConfig,
  ExamResult,
  EXAM_PRESETS,
  LocalizedQuestion,
  Question,
} from "@/types/exam";
import { isDontKnow } from "@/lib/answers";
import { shuffleAllQuestionOptions } from "@/lib/exam-engine";
import { t } from "@/i18n/translations";

const REPLAY_STORAGE_KEY = "odoo-exam-replay";

export interface ExamReplayPayload {
  config: ExamConfig;
  sessionSeed: number;
  questionIds: string[];
}

export function loadQuestionsByIds(ids: string[]): Question[] {
  const byId = new Map(allQuestions.map((q) => [q.id, q]));
  return ids.map((id) => byId.get(id)).filter(Boolean) as Question[];
}

export function prepareExamReplay(result: ExamResult): void {
  if (!result.sessionMeta?.questionIds?.length) return;
  const payload: ExamReplayPayload = {
    config: {
      mode: result.mode,
      questionCount: result.sessionMeta.questionCount,
      durationMinutes: result.sessionMeta.durationMinutes,
      modules: result.sessionMeta.modules,
      presetId: result.sessionMeta.presetId,
      showExplanations: result.mode === "review",
    },
    sessionSeed: result.sessionMeta.sessionSeed,
    questionIds: result.sessionMeta.questionIds,
  };
  sessionStorage.setItem(REPLAY_STORAGE_KEY, JSON.stringify(payload));
}

export function peekExamReplay(): ExamReplayPayload | null {
  if (typeof window === "undefined") return null;
  const raw = sessionStorage.getItem(REPLAY_STORAGE_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as ExamReplayPayload;
  } catch {
    return null;
  }
}

export function clearExamReplay(): void {
  if (typeof window === "undefined") return;
  sessionStorage.removeItem(REPLAY_STORAGE_KEY);
}

export function consumeExamReplay(): ExamReplayPayload | null {
  const payload = peekExamReplay();
  if (payload) clearExamReplay();
  return payload;
}

export function inferRetryUrl(result: ExamResult): string {
  if (result.sessionMeta?.presetId) {
    return `/exam?preset=${result.sessionMeta.presetId}`;
  }

  const preset = EXAM_PRESETS.find(
    (p) =>
      p.config.mode === result.mode &&
      p.config.questionCount === result.totalQuestions &&
      (result.sessionMeta?.durationMinutes === undefined ||
        p.config.durationMinutes === result.sessionMeta.durationMinutes)
  );
  if (preset) return `/exam?preset=${preset.id}`;

  if (result.mode === "module" && result.sessionMeta?.modules?.[0]) {
    return `/exam?module=${result.sessionMeta.modules[0]}&count=${result.totalQuestions}`;
  }

  if (result.totalQuestions === 120) return "/exam?preset=full-exam";
  if (result.totalQuestions === 60) return "/exam?preset=half-exam";
  if (result.totalQuestions === 30) return "/exam?preset=daily-challenge";
  if (result.totalQuestions === 20) return "/exam?preset=quick-quiz";

  return "/";
}

export function startExamRetry(
  result: ExamResult,
  navigate: (url: string) => void
): void {
  if (result.sessionMeta?.questionIds?.length) {
    prepareExamReplay(result);
    navigate("/exam?replay=1");
    return;
  }
  navigate(inferRetryUrl(result));
}

export type ReviewItemStatus = "wrong" | "unanswered";

export interface ReviewItem {
  question: LocalizedQuestion;
  selectedIndex: number | null;
  status: ReviewItemStatus;
}

export function getReviewItems(
  result: ExamResult,
  locale: "en" | "fr"
): ReviewItem[] {
  const { sessionMeta, answers } = result;
  if (!sessionMeta?.questionIds?.length || !answers?.length) {
    return [];
  }

  const ordered = loadQuestionsByIds(sessionMeta.questionIds);
  if (ordered.length === 0) return [];

  const localized = localizeQuestions(ordered, locale);
  const shuffled = shuffleAllQuestionOptions(
    localized,
    sessionMeta.sessionSeed,
    t(locale).exam.dontKnow
  );
  const answerMap = new Map(
    answers.map((a) => [a.questionId, a.selectedIndex])
  );

  const items: ReviewItem[] = [];
  for (const question of shuffled) {
    const selected = answerMap.get(question.id) ?? null;
    if (selected === null || selected === undefined) {
      items.push({ question, selectedIndex: null, status: "unanswered" });
    } else if (isDontKnow(selected, question.dontKnowIndex)) {
      continue;
    } else if (selected !== question.correctIndex) {
      items.push({ question, selectedIndex: selected, status: "wrong" });
    }
  }
  return items;
}
