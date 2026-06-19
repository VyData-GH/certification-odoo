import { complexQ } from "../helpers";

/** Questions Odoo Learn — modules complémentaires (hors certification) */
export const globalSettingsSupplementaryQuestions = [
  complexQ({
    id: "gls-001",
    module: "global-settings",
    text: {
      en: "What will the common contact book feature do if you enable it? (Odoo Learn — Multi company)",
      fr: "What will the common contact book feature do if you enable it? (Odoo Learn — Multi company)",
    },
    correct: {
      en: "It will share your partners to all companies defined in your database.",
      fr: "It will share your partners to all companies defined in your database.",
    },
    distractors: [
      { en: "It will disable the partners sharing between your companies.", fr: "It will disable the partners sharing between your companies." },
      { en: "It will share your future partners to all companies defined in your database.", fr: "It will share your future partners to all companies defined in your database." },
      { en: "It will disable the partners sharing between your companies, but only for new contacts.", fr: "It will disable the partners sharing between your companies, but only for new contacts." },
    ],
    explanation: {
      en: "Source Odoo Learn (Multi company): It will share your partners to all companies defined in your database.",
      fr: "Source Odoo Learn (Multi company): It will share your partners to all companies defined in your database.",
    },
  }),
  complexQ({
    id: "gls-002",
    module: "global-settings",
    text: {
      en: "How can I restrict access to a company for one of my employee? (Odoo Learn — Multi company)",
      fr: "How can I restrict access to a company for one of my employee? (Odoo Learn — Multi company)",
    },
    correct: {
      en: "By removing the company from the allowed companies on the user form.",
      fr: "By removing the company from the allowed companies on the user form.",
    },
    distractors: [
      { en: "By choosing a current company on the employee form.", fr: "By choosing a current company on the employee form." },
      { en: "By removing the company from the allowed companies on the employee form.", fr: "By removing the company from the allowed companies on the employee form." },
      { en: "By removing the employee's access rights for the company.", fr: "By removing the employee's access rights for the company." },
    ],
    explanation: {
      en: "Source Odoo Learn (Multi company): By removing the company from the allowed companies on the user form.",
      fr: "Source Odoo Learn (Multi company): By removing the company from the allowed companies on the user form.",
    },
  }),
  complexQ({
    id: "gls-003",
    module: "global-settings",
    text: {
      en: "Two groups (A and B) can create and validate quotations. If I remove this right from the group A, does it means that all people from this group will lose the right? (Odoo Learn — Access Rights)",
      fr: "Two groups (A and B) can create and validate quotations. If I remove this right from the group A, does it means that all people from this group will lose the right? (Odoo Learn — Access Rights)",
    },
    correct: {
      en: "Yes, except if they are in group B too.",
      fr: "Yes, except if they are in group B too.",
    },
    distractors: [
      { en: "No, rights previously obtained won't be removed.", fr: "No, rights previously obtained won't be removed." },
      { en: "Yes, all the rights removed from a group will have an impact on the other groups.", fr: "Yes, all the rights removed from a group will have an impact on the other groups." },
      { en: "No, you can't edit rights once the group has been created.", fr: "No, you can't edit rights once the group has been created." },
    ],
    explanation: {
      en: "Source Odoo Learn (Access Rights): Yes, except if they are in group B too.",
      fr: "Source Odoo Learn (Access Rights): Yes, except if they are in group B too.",
    },
  }),
];
