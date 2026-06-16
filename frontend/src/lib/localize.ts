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
    options: [...question.options[locale]],
    correctIndex: question.correctIndex,
    dontKnowIndex: null,
    explanation: question.explanation[locale],
    questionType: question.questionType,
    image: question.image
      ? { src: question.image.src, alt: question.image.alt[locale] }
      : undefined,
  };
}

export function localizeQuestions(
  questions: Question[],
  locale: Locale
): LocalizedQuestion[] {
  return questions.map((q) => localizeQuestion(q, locale));
}
