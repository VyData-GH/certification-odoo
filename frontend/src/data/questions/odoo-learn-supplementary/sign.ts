import { complexQ } from "../helpers";

/** Questions Odoo Learn — modules complémentaires (hors certification) */
export const signSupplementaryQuestions = [
  complexQ({
    id: "sign-001",
    module: "sign",
    text: {
      en: "Where can the user find pre-designed, reusable documents like NDAs and service agreements in Odoo Sign? (Odoo Learn — Sign Basics)",
      fr: "Où l'utilisateur peut-il trouver des documents prédéfinis et réutilisables tels que des NDA et des contrats de service dans Odoo Sign ? (Odoo Learn — Notions de base sur les panneaux)",
    },
    correct: {
      en: "In the main Documents’ dashboard, by clicking \"Templates”.",
      fr: "Dans le tableau de bord principal des Documents, en cliquant sur « Modèles ».",
    },
    distractors: [
      { en: "In the main Documents’ dashboard, by clicking “Documents”.", fr: "Dans le tableau de bord principal des Documents, en cliquant sur « Documents »." },
      { en: "In the main Documents’ dashboard, by clicking “Configuration”.", fr: "Dans le tableau de bord principal des Documents, en cliquant sur « Configuration »." },
      { en: "By clicking the \"Upload a PDF\" button.", fr: "En cliquant sur le bouton \"Télécharger un PDF\"." },
    ],
    explanation: {
      en: "Source Odoo Learn (Sign Basics): In the main Documents’ dashboard, by clicking \"Templates”.",
      fr: "Source Odoo Learn (Sign Basics) : Dans le tableau de bord principal des documents, en cliquant sur « Modèles ».",
    },
  }),
  complexQ({
    id: "sign-002",
    module: "sign",
    text: {
      en: "What is the term used in Odoo for sending multiple documents for signature in one go? (Odoo Learn — Sign Basics)",
      fr: "Quel est le terme utilisé dans Odoo pour envoyer plusieurs documents pour signature en une seule fois ? (Odoo Learn — Notions de base sur les panneaux)",
    },
    correct: {
      en: "An envelope.",
      fr: "Une enveloppe.",
    },
    distractors: [
      { en: "A stack.", fr: "Une pile." },
      { en: "A bundle.", fr: "Un paquet." },
      { en: "A package.", fr: "Un paquet." },
    ],
    explanation: {
      en: "Source Odoo Learn (Sign Basics): An envelope.",
      fr: "Source Odoo Learn (Sign Basics) : Une enveloppe.",
    },
  }),
  complexQ({
    id: "sign-003",
    module: "sign",
    text: {
      en: "Where can users configure custom fields to use in their signature requests in Odoo Sign? (Odoo Learn — Sign Basics)",
      fr: "Où les utilisateurs peuvent-ils configurer les champs personnalisés à utiliser dans leurs demandes de signature dans Odoo Sign ? (Odoo Learn — Notions de base sur les panneaux)",
    },
    correct: {
      en: "By clicking \"Configuration\" > \"Edit Field Types\".",
      fr: "En cliquant sur « Configuration » > « Modifier les types de champs ».",
    },
    distractors: [
      { en: "In the \"Documents\" dashboard.", fr: "Dans le tableau de bord \"Documents\"." },
      { en: "In the main Documents’ dashboard, by clicking \"Templates”.", fr: "Dans le tableau de bord principal des Documents, en cliquant sur « Modèles »." },
      { en: "By clicking on a field while preparing a document.", fr: "En cliquant sur un champ lors de la préparation d'un document." },
    ],
    explanation: {
      en: "Source Odoo Learn (Sign Basics): By clicking \"Configuration\" > \"Edit Field Types\".",
      fr: "Source Odoo Learn (Sign Basics) : En cliquant sur « Configuration » > « Modifier les types de champs ».",
    },
  }),
  complexQ({
    id: "sign-004",
    module: "sign",
    text: {
      en: "What authentication methods for signers are mentioned in the \"Configuration\" tab (though requiring purchased credits)? (Odoo Learn — Sign Basics)",
      fr: "Quelles méthodes d'authentification des signataires sont mentionnées dans l'onglet « Configuration » (bien qu'elles nécessitent l'achat de crédits) ? (Odoo Learn — Notions de base sur les panneaux)",
    },
    correct: {
      en: "SMS and the \"itsme\" app.",
      fr: "SMS et application \"itsme\".",
    },
    distractors: [
      { en: "Email and password.", fr: "E-mail et mot de passe." },
      { en: "Fingerprint and facial recognition.", fr: "Reconnaissance d'empreintes digitales et faciale." },
      { en: "Security questions.", fr: "Questions de sécurité." },
    ],
    explanation: {
      en: "Source Odoo Learn (Sign Basics): SMS and the \"itsme\" app.",
      fr: "Source Odoo Learn (Sign Basics) : SMS et l'application \"itsme\".",
    },
  }),
];
