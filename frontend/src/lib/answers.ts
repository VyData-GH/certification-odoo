/** @deprecated Legacy sessions — prefer matching question.dontKnowIndex */
export const DONT_KNOW_INDEX = -1;

export type AnswerValue = number | null;

export function isDontKnow(
  answer: AnswerValue,
  dontKnowIndex?: number | null
): boolean {
  if (dontKnowIndex != null && answer === dontKnowIndex) return true;
  return answer === DONT_KNOW_INDEX;
}

export function isUnanswered(answer: AnswerValue): boolean {
  return answer === null || answer === undefined;
}

export function isMcqSelection(answer: AnswerValue): answer is number {
  return answer !== null && answer !== undefined && answer >= 0;
}

/** User picked an option or « I don't know » (not left blank). */
export function isAddressed(answer: AnswerValue): boolean {
  return !isUnanswered(answer);
}
