import { ModuleId, Question } from "@/types/exam";

type Bilingual = { en: string; fr: string };
type DistractorTriple = [Bilingual, Bilingual, Bilingual];

interface QBase {
  id: string;
  module: ModuleId;
  text: Bilingual;
  explanation: Bilingual;
}

/** Patterns typical of « too easy » distractors — avoided in certification-style MCQs */
const WEAK_DISTRACTOR_PATTERNS = [
  /^(they are|ce sont|it is|c'est) (identical|the same|identiques?|synonym)/i,
  /export (to|vers) excel/i,
  /(not available|n'existe pas|does not exist|unavailable in odoo)/i,
  /(delete all|supprimer toutes?)/i,
  /(only|uniquement) (through|via) (payroll|paie|inventory|stock|MRP)/i,
  /belongs to (accounting|comptabilité|inventory|stock)/i,
  /(automatically|automatiquement) (without|sans) (user|action|intervention)/i,
];

function assertPlausibleDistractors(distractors: Bilingual[], questionId: string) {
  if (typeof window !== "undefined") return;
  if (typeof process !== "undefined" && process.env.NODE_ENV === "production") return;
  for (const d of distractors) {
    for (const text of [d.en, d.fr]) {
      for (const pattern of WEAK_DISTRACTOR_PATTERNS) {
        if (pattern.test(text)) {
          console.warn(
            `[questions] Weak distractor in ${questionId}: "${text.slice(0, 60)}…"`
          );
        }
      }
      if (text.length < 25) {
        console.warn(
          `[questions] Short distractor in ${questionId} (aim for exam-style complexity): "${text}"`
        );
      }
    }
  }
}

/**
 * Certification-style question: 4 real choices (shuffled at exam runtime).
 * « I don't know » is appended automatically when the exam starts.
 */
export function complexQ(
  input: QBase & {
    correct: Bilingual;
    distractors: DistractorTriple;
  }
): Question {
  assertPlausibleDistractors(input.distractors, input.id);
  return {
    id: input.id,
    module: input.module,
    text: input.text,
    options: {
      en: [
        input.correct.en,
        input.distractors[0].en,
        input.distractors[1].en,
        input.distractors[2].en,
      ],
      fr: [
        input.correct.fr,
        input.distractors[0].fr,
        input.distractors[1].fr,
        input.distractors[2].fr,
      ],
    },
    correctIndex: 0,
    explanation: input.explanation,
    questionType: "mcq",
  };
}

/** Three real choices (1 correct + 2 distractors) — common on the official exam. */
export function mcq3Q(
  input: QBase & {
    correct: Bilingual;
    distractors: [Bilingual, Bilingual];
  }
): Question {
  assertPlausibleDistractors(input.distractors, input.id);
  return {
    id: input.id,
    module: input.module,
    text: input.text,
    options: {
      en: [input.correct.en, input.distractors[0].en, input.distractors[1].en],
      fr: [input.correct.fr, input.distractors[0].fr, input.distractors[1].fr],
    },
    correctIndex: 0,
    explanation: input.explanation,
    questionType: "mcq",
  };
}

/** Yes / No question (2 real choices + « I don't know » at exam time = 3 visible choices). */
export function yesNoQ(
  input: QBase & {
    correctIsYes: boolean;
    yes?: Bilingual;
    no?: Bilingual;
  }
): Question {
  const yes = input.yes ?? { en: "Yes", fr: "Oui" };
  const no = input.no ?? { en: "No", fr: "Non" };
  return {
    id: input.id,
    module: input.module,
    text: input.text,
    options: {
      en: [yes.en, no.en],
      fr: [yes.fr, no.fr],
    },
    correctIndex: input.correctIsYes ? 0 : 1,
    explanation: input.explanation,
    questionType: "yesno",
  };
}

/** Certification-style question with an optional UI screenshot. */
export function screenshotQ(
  input: QBase & {
    correct: Bilingual;
    distractors: DistractorTriple;
    image: { src: string; alt: Bilingual };
  }
): Question {
  return { ...complexQ(input), image: input.image };
}
