import { LocalizedQuestion } from "@/types/exam";
import { AnswerValue } from "./answers";

/** Real answer choices only (2–4), before « I don't know » is appended. */
export const MIN_REAL_OPTIONS = 2;
export const MAX_REAL_OPTIONS = 4;

export function isDontKnowAnswer(
  selected: AnswerValue,
  dontKnowIndex: number | null | undefined
): boolean {
  return dontKnowIndex != null && selected === dontKnowIndex;
}

/** Shuffle real options and append localized « I don't know » as the last choice. */
export function prepareQuestionForExam(
  question: LocalizedQuestion,
  dontKnowLabel: string,
  random: () => number,
  includeDontKnow = true
): LocalizedQuestion {
  const realOptions = [...question.options];
  const order = realOptions.map((_, i) => i);

  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }

  const shuffled = order.map((i) => realOptions[i]);
  const correctIndex = order.indexOf(question.correctIndex);

  if (!includeDontKnow) {
    return {
      ...question,
      options: shuffled,
      correctIndex,
      dontKnowIndex: null,
    };
  }

  return {
    ...question,
    options: [...shuffled, dontKnowLabel],
    correctIndex,
    dontKnowIndex: shuffled.length,
  };
}

export function optionLabel(index: number): string {
  return String.fromCharCode(65 + index);
}
