import { complexQ } from "../helpers";

/** Questions Odoo Learn — modules complémentaires (hors certification) */
export const planningSupplementaryQuestions = [
  complexQ({
    id: "pln-001",
    module: "planning",
    text: {
      en: "How can you enhance flexibility in your scheduling and accommodate the needs of your employees more effectively? (Odoo Learn — Planning basics and your first shift)",
      fr: "How can you enhance flexibility in your scheduling and accommodate the needs of your employees more effectively? (Odoo Learn — Planning basics and your first shift)",
    },
    correct: {
      en: "Assign multiple roles to employees",
      fr: "Assign multiple roles to employees",
    },
    distractors: [
      { en: "Assign roles randomly", fr: "Assign roles randomly" },
      { en: "Assign schedules randomly", fr: "Assign schedules randomly" },
      { en: "Assign no roles to employees", fr: "Assign no roles to employees" },
    ],
    explanation: {
      en: "Source Odoo Learn (Planning basics and your first shift): Assign multiple roles to employees",
      fr: "Source Odoo Learn (Planning basics and your first shift): Assign multiple roles to employees",
    },
  }),
  complexQ({
    id: "pln-002",
    module: "planning",
    text: {
      en: "What does it mean when some shifts have diagonal lines on them? (Odoo Learn — Planning basics and your first shift)",
      fr: "What does it mean when some shifts have diagonal lines on them? (Odoo Learn — Planning basics and your first shift)",
    },
    correct: {
      en: "It means they haven’t been published yet",
      fr: "It means they haven’t been published yet",
    },
    distractors: [
      { en: "These are open shifts", fr: "These are open shifts" },
      { en: "It means they’ve been published", fr: "It means they’ve been published" },
      { en: "It means they’ve been published and shared with employees", fr: "It means they’ve been published and shared with employees" },
    ],
    explanation: {
      en: "Source Odoo Learn (Planning basics and your first shift): It means they haven’t been published yet",
      fr: "Source Odoo Learn (Planning basics and your first shift): It means they haven’t been published yet",
    },
  }),
  complexQ({
    id: "pln-003",
    module: "planning",
    text: {
      en: "What will happen once you request a shift switch? (Odoo Learn — Switching and unassigning shifts)",
      fr: "What will happen once you request a shift switch? (Odoo Learn — Switching and unassigning shifts)",
    },
    correct: {
      en: "The original shift will remain assigned to you until another colleague takes it",
      fr: "The original shift will remain assigned to you until another colleague takes it",
    },
    distractors: [
      { en: "The original shift will immediately become an open shift, available for other colleagues to take", fr: "The original shift will immediately become an open shift, available for other colleagues to take" },
      { en: "The original shift will become an open shift as soon as you take another shift in the same billing period", fr: "The original shift will become an open shift as soon as you take another shift in the same billing period" },
      { en: "The original shift will be automatically assigned to the next colleague in line", fr: "The original shift will be automatically assigned to the next colleague in line" },
    ],
    explanation: {
      en: "Source Odoo Learn (Switching and unassigning shifts): The original shift will remain assigned to you until another colleague takes it",
      fr: "Source Odoo Learn (Switching and unassigning shifts): The original shift will remain assigned to you until another colleague takes it",
    },
  }),
  complexQ({
    id: "pln-004",
    module: "planning",
    text: {
      en: "Which of the following statements is true? (Odoo Learn — Switching and unassigning shifts)",
      fr: "Laquelle des affirmations suivantes est vraie ? (Odoo Learn — Switching and unassigning shifts)",
    },
    correct: {
      en: "Shift switching and unassignment are mutually exclusive",
      fr: "Shift switching and unassignment are mutually exclusive",
    },
    distractors: [
      { en: "It’s possible to set up a time limit on shift switching", fr: "It’s possible to set up a time limit on shift switching" },
      { en: "It’s not possible to set up a time limit on shift unassignment", fr: "It’s not possible to set up a time limit on shift unassignment" },
      { en: "Shift switching and unassignment are available to employees and materials", fr: "Shift switching and unassignment are available to employees and materials" },
    ],
    explanation: {
      en: "Source Odoo Learn (Switching and unassigning shifts): Shift switching and unassignment are mutually exclusive",
      fr: "Source Odoo Learn (Switching and unassigning shifts): Shift switching and unassignment are mutually exclusive",
    },
  }),
];
