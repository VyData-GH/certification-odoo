import { complexQ } from "../helpers";

/** Questions Odoo Learn — modules complémentaires (hors certification) */
export const planningSupplementaryQuestions = [
  complexQ({
    id: "pln-001",
    module: "planning",
    text: {
      en: "How can you enhance flexibility in your scheduling and accommodate the needs of your employees more effectively? (Odoo Learn — Planning basics and your first shift)",
      fr: "Comment pouvez-vous améliorer la flexibilité de vos horaires et répondre plus efficacement aux besoins de vos employés ? (Odoo Learn — Les bases de la planification et votre premier quart de travail)",
    },
    correct: {
      en: "Assign multiple roles to employees",
      fr: "Attribuer plusieurs rôles aux employés",
    },
    distractors: [
      { en: "Assign roles randomly", fr: "Attribuer les rôles au hasard" },
      { en: "Assign schedules randomly", fr: "Attribuer des horaires de manière aléatoire" },
      { en: "Assign no roles to employees", fr: "N'attribuer aucun rôle aux employés" },
    ],
    explanation: {
      en: "Source Odoo Learn (Planning basics and your first shift): Assign multiple roles to employees",
      fr: "Source Odoo Learn (Bases de la planification et votre premier quart de travail) : Attribuez plusieurs rôles aux employés",
    },
  }),
  complexQ({
    id: "pln-002",
    module: "planning",
    text: {
      en: "What does it mean when some shifts have diagonal lines on them? (Odoo Learn — Planning basics and your first shift)",
      fr: "Qu'est-ce que cela signifie lorsque certains changements comportent des lignes diagonales ? (Odoo Learn — Les bases de la planification et votre premier quart de travail)",
    },
    correct: {
      en: "It means they haven’t been published yet",
      fr: "Cela signifie qu'ils n'ont pas encore été publiés",
    },
    distractors: [
      { en: "These are open shifts", fr: "Ce sont des quarts de travail ouverts" },
      { en: "It means they’ve been published", fr: "Cela signifie qu'ils ont été publiés" },
      { en: "It means they’ve been published and shared with employees", fr: "Cela signifie qu’ils ont été publiés et partagés avec les employés" },
    ],
    explanation: {
      en: "Source Odoo Learn (Planning basics and your first shift): It means they haven’t been published yet",
      fr: "Source Odoo Learn (Bases de la planification et votre premier quart de travail) : Cela signifie qu'ils n'ont pas encore été publiés",
    },
  }),
  complexQ({
    id: "pln-003",
    module: "planning",
    text: {
      en: "What will happen once you request a shift switch? (Odoo Learn — Switching and unassigning shifts)",
      fr: "Que se passera-t-il une fois que vous demanderez un changement de vitesse ? (Odoo Learn — Changer et annuler l'attribution d'équipes)",
    },
    correct: {
      en: "The original shift will remain assigned to you until another colleague takes it",
      fr: "Le quart de travail d'origine vous restera attribué jusqu'à ce qu'un autre collègue le prenne",
    },
    distractors: [
      { en: "The original shift will immediately become an open shift, available for other colleagues to take", fr: "L'équipe d'origine deviendra immédiatement une équipe ouverte, disponible pour d'autres collègues." },
      { en: "The original shift will become an open shift as soon as you take another shift in the same billing period", fr: "L'équipe d'origine deviendra une équipe ouverte dès que vous prendrez une autre équipe au cours de la même période de facturation." },
      { en: "The original shift will be automatically assigned to the next colleague in line", fr: "L'équipe d'origine sera automatiquement attribuée au prochain collègue en ligne" },
    ],
    explanation: {
      en: "Source Odoo Learn (Switching and unassigning shifts): The original shift will remain assigned to you until another colleague takes it",
      fr: "Source Odoo Learn (Changement et désattribution d'équipes) : L'équipe d'origine vous restera attribuée jusqu'à ce qu'un autre collègue la prenne",
    },
  }),
  complexQ({
    id: "pln-004",
    module: "planning",
    text: {
      en: "Which of the following statements is true? (Odoo Learn — Switching and unassigning shifts)",
      fr: "Laquelle des affirmations suivantes est vraie ? (Odoo Learn — Changer et annuler l'attribution d'équipes)",
    },
    correct: {
      en: "Shift switching and unassignment are mutually exclusive",
      fr: "Le changement de poste et la désaffectation s'excluent mutuellement",
    },
    distractors: [
      { en: "It’s possible to set up a time limit on shift switching", fr: "Il est possible de fixer une limite de temps pour le changement de poste" },
      { en: "It’s not possible to set up a time limit on shift unassignment", fr: "Il n'est pas possible de fixer un délai pour la désaffectation d'équipe" },
      { en: "Shift switching and unassignment are available to employees and materials", fr: "Le changement d'équipe et la désaffectation sont disponibles pour les employés et le matériel." },
    ],
    explanation: {
      en: "Source Odoo Learn (Switching and unassigning shifts): Shift switching and unassignment are mutually exclusive",
      fr: "Source Odoo Learn (Changement et désattribution d'équipes) : Le changement d'équipe et la désaffectation s'excluent mutuellement",
    },
  }),
];
