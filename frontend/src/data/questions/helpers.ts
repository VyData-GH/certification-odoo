import { ModuleId, Question } from "@/types/exam";

type Opts = [string, string, string, string];
type Bilingual = { en: string; fr: string };
type DistractorTriple = [Bilingual, Bilingual, Bilingual];

interface QInput {
  id: string;
  module: ModuleId;
  text: Bilingual;
  options: { en: Opts; fr: Opts };
  correctIndex: number;
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
  // Dev-only check at build/SSR time — avoid noisy duplicate logs in the browser
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
 * Certification-style question: correct answer first (shuffled at exam runtime).
 * Distractors must be plausible Odoo 19 alternatives — real menus, settings, or workflows
 * that could mislead someone who has not mastered the topic.
 */
export function complexQ(
  input: Omit<QInput, "options" | "correctIndex"> & {
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
  };
}

/** @deprecated Prefer complexQ for new or revised questions */
export function q(input: QInput): Question {
  return input;
}
