import { Locale } from "@/i18n/translations";
import { LocalizedQuestion, Question } from "@/types/exam";

export function localizeQuestion(
  question: Question,
  locale: Locale
): LocalizedQuestion {
  return {
    id: question.id,
    module: question.module,
    text: question.text[locale],
    options: question.options[locale],
    correctIndex: question.correctIndex,
    explanation: question.explanation[locale],
  };
}

export function localizeQuestions(
  questions: Question[],
  locale: Locale
): LocalizedQuestion[] {
  return questions.map((q) => localizeQuestion(q, locale));
}
