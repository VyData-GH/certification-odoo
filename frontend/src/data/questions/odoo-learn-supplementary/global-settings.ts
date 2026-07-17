import { complexQ } from "../helpers";

/** Questions Odoo Learn — modules complémentaires (hors certification) */
export const globalSettingsSupplementaryQuestions = [
  complexQ({
    id: "gls-001",
    module: "global-settings",
    text: {
      en: "What will the common contact book feature do if you enable it? (Odoo Learn — Multi company)",
      fr: "Que fera la fonctionnalité de carnet de contacts commun si vous l’activez ? (Odoo Learn — Multi-entreprise)",
    },
    correct: {
      en: "It will share your partners to all companies defined in your database.",
      fr: "Il partagera vos partenaires avec toutes les entreprises définies dans votre base de données.",
    },
    distractors: [
      { en: "It will disable the partners sharing between your companies.", fr: "Cela désactivera le partage de partenaires entre vos entreprises." },
      { en: "It will share your future partners to all companies defined in your database.", fr: "Il partagera vos futurs partenaires avec toutes les entreprises définies dans votre base de données." },
      { en: "It will disable the partners sharing between your companies, but only for new contacts.", fr: "Cela désactivera le partage de partenaires entre vos entreprises, mais uniquement pour les nouveaux contacts." },
    ],
    explanation: {
      en: "Source Odoo Learn (Multi company): It will share your partners to all companies defined in your database.",
      fr: "Source Odoo Learn (Multi entreprise) : Il partagera vos partenaires avec toutes les entreprises définies dans votre base de données.",
    },
  }),
  complexQ({
    id: "gls-002",
    module: "global-settings",
    text: {
      en: "How can I restrict access to a company for one of my employee? (Odoo Learn — Multi company)",
      fr: "Comment puis-je restreindre l’accès à une entreprise à un de mes salariés ? (Odoo Learn — Multi-entreprise)",
    },
    correct: {
      en: "By removing the company from the allowed companies on the user form.",
      fr: "En supprimant l'entreprise des entreprises autorisées sur le formulaire utilisateur.",
    },
    distractors: [
      { en: "By choosing a current company on the employee form.", fr: "En choisissant une entreprise actuelle sur la fiche salarié." },
      { en: "By removing the company from the allowed companies on the employee form.", fr: "En supprimant l'entreprise des entreprises autorisées sur le formulaire d'employé." },
      { en: "By removing the employee's access rights for the company.", fr: "En supprimant les droits d'accès du salarié à l'entreprise." },
    ],
    explanation: {
      en: "Source Odoo Learn (Multi company): By removing the company from the allowed companies on the user form.",
      fr: "Source Odoo Learn (Multi entreprise) : En supprimant l'entreprise des entreprises autorisées sur le formulaire utilisateur.",
    },
  }),
  complexQ({
    id: "gls-003",
    module: "global-settings",
    text: {
      en: "Two groups (A and B) can create and validate quotations. If I remove this right from the group A, does it means that all people from this group will lose the right? (Odoo Learn — Access Rights)",
      fr: "Deux groupes (A et B) peuvent créer et valider des devis. Si je retire ce droit au groupe A, cela signifie-t-il que toutes les personnes de ce groupe perdront ce droit ? (Odoo Learn — Droits d'accès)",
    },
    correct: {
      en: "Yes, except if they are in group B too.",
      fr: "Oui, sauf s’ils sont également dans le groupe B.",
    },
    distractors: [
      { en: "No, rights previously obtained won't be removed.", fr: "Non, les droits précédemment obtenus ne seront pas supprimés." },
      { en: "Yes, all the rights removed from a group will have an impact on the other groups.", fr: "Oui, tous les droits retirés à un groupe auront un impact sur les autres groupes." },
      { en: "No, you can't edit rights once the group has been created.", fr: "Non, vous ne pouvez pas modifier les droits une fois le groupe créé." },
    ],
    explanation: {
      en: "Source Odoo Learn (Access Rights): Yes, except if they are in group B too.",
      fr: "Source Odoo Learn (Droits d'accès) : Oui, sauf s'ils sont également dans le groupe B.",
    },
  }),
];
