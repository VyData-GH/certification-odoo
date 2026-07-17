import { complexQ } from "../helpers";

/** Questions Odoo Learn — modules complémentaires (hors certification) */
export const plmSupplementaryQuestions = [
  complexQ({
    id: "plm-001",
    module: "plm",
    text: {
      en: "What is the purpose of the Revision smart button? (Odoo Learn — Engineering Change Orders)",
      fr: "Quel est le but du bouton intelligent Révision ? (Odoo Learn — Ordres de modification technique)",
    },
    correct: {
      en: "To start making changes by creating a copy of the BoM while keeping the original inactive",
      fr: "Pour commencer à apporter des modifications en créant une copie de la nomenclature tout en gardant l'original inactif",
    },
    distractors: [
      { en: "To delete an existing Bill of Materials (BoM)", fr: "Pour supprimer une nomenclature existante (BoM)" },
      { en: "To approve changes to a BoM for immediate use in production", fr: "Pour approuver les modifications apportées à une nomenclature pour une utilisation immédiate en production" },
      { en: "To automatically update all existing Manufacturing Orders (MOs) with the new BoM", fr: "Pour mettre automatiquement à jour tous les ordres de fabrication (MO) existants avec la nouvelle nomenclature" },
    ],
    explanation: {
      en: "Source Odoo Learn (Engineering Change Orders): To start making changes by creating a copy of the BoM while keeping the original inactive",
      fr: "Source Odoo Learn (Engineering Change Orders) : Pour commencer à apporter des modifications en créant une copie de la nomenclature tout en gardant l'original inactif",
    },
  }),
  complexQ({
    id: "plm-002",
    module: "plm",
    text: {
      en: "Why do the ‘Component Changes’ and ‘Operation Changes’ tabs appear on the Engineering Change Order (ECO)? (Odoo Learn — Engineering Change Orders)",
      fr: "Pourquoi les onglets « Modifications de composants » et « Modifications de fonctionnement » apparaissent-ils sur l'ordre de modification technique (ECO) ? (Odoo Learn — Ordres de modification technique)",
    },
    correct: {
      en: "To summarize the differences between the revised BoM and the BoM currently in production",
      fr: "Pour résumer les différences entre la nomenclature révisée et la nomenclature actuellement en production",
    },
    distractors: [
      { en: "To display all previous versions of the BoM for reference", fr: "Pour afficher toutes les versions précédentes de la nomenclature pour référence" },
      { en: "To list all manufacturing orders affected by the change", fr: "Pour répertorier tous les ordres de fabrication concernés par le changement" },
      { en: "To allow users to edit the original BoM without creating a revision", fr: "Pour permettre aux utilisateurs de modifier la nomenclature d'origine sans créer de révision" },
    ],
    explanation: {
      en: "Source Odoo Learn (Engineering Change Orders): To summarize the differences between the revised BoM and the BoM currently in production",
      fr: "Source Odoo Learn (Engineering Change Orders) : Pour résumer les différences entre la BoM révisée et la BoM actuellement en production",
    },
  }),
  complexQ({
    id: "plm-003",
    module: "plm",
    text: {
      en: "What happens if a Manufacturing Order (MO) is already in the ‘Confirmed’ stage when a BoM revision is made? (Odoo Learn — Engineering Change Orders)",
      fr: "Que se passe-t-il si un ordre de fabrication (OM) est déjà à l'étape « Confirmé » lorsqu'une révision de la nomenclature est effectuée ? (Odoo Learn — Ordres de modification technique)",
    },
    correct: {
      en: "The MO continues using the old BoM to prevent disruptions to workers",
      fr: "Le MO continue d'utiliser l'ancienne BoM pour éviter les perturbations pour les travailleurs",
    },
    distractors: [
      { en: "The MO automatically updates to the new BoM", fr: "Le MO se met automatiquement à jour vers la nouvelle BoM" },
      { en: "The MO is canceled and must be restarted with the new BoM", fr: "Le MO est annulé et doit être redémarré avec la nouvelle BoM" },
      { en: "The system prevents users from making any BoM revisions", fr: "Le système empêche les utilisateurs de procéder à des révisions de la nomenclature" },
    ],
    explanation: {
      en: "Source Odoo Learn (Engineering Change Orders): The MO continues using the old BoM to prevent disruptions to workers",
      fr: "Source Odoo Learn (Engineering Change Orders) : Le MO continue d'utiliser l'ancienne BoM pour éviter les perturbations pour les travailleurs",
    },
  }),
  complexQ({
    id: "plm-004",
    module: "plm",
    text: {
      en: "Which of these is NOT an approval type? (Odoo Learn — ECO Approvals)",
      fr: "Lequel de ces éléments n’est PAS un type d’approbation ? (Odoo Learn — Approbations ECO)",
    },
    correct: {
      en: "Conditional approval",
      fr: "Approbation conditionnelle",
    },
    distractors: [
      { en: "Comments only", fr: "Commentaires uniquement" },
      { en: "Approves, but the approval is optional", fr: "Approuve, mais l'approbation est facultative" },
      { en: "Is required to approve", fr: "Doit être approuvé" },
    ],
    explanation: {
      en: "Source Odoo Learn (ECO Approvals): Conditional approval",
      fr: "Source Odoo Learn (Approbations ECO) : Approbation conditionnelle",
    },
  }),
  complexQ({
    id: "plm-005",
    module: "plm",
    text: {
      en: "How many approvers can an ECO have? (Odoo Learn — ECO Approvals)",
      fr: "Combien d’approbateurs un ECO peut-il avoir ? (Odoo Learn — Approbations ECO)",
    },
    correct: {
      en: "As many as are needed in any stage",
      fr: "Autant que nécessaire à n’importe quelle étape",
    },
    distractors: [
      { en: "One per ECO", fr: "Un par ECO" },
      { en: "One per stage", fr: "Un par étape" },
      { en: "As many as are needed, but only one can be required to approve", fr: "Autant que nécessaire, mais un seul peut être requis pour approuver" },
    ],
    explanation: {
      en: "Source Odoo Learn (ECO Approvals): As many as are needed in any stage",
      fr: "Source Odoo Learn (Approbations ECO) : Autant que nécessaire à n'importe quelle étape",
    },
  }),
  complexQ({
    id: "plm-006",
    module: "plm",
    text: {
      en: "Where are approvals configured? (Odoo Learn — ECO Approvals)",
      fr: "Où sont configurées les approbations ? (Odoo Learn — Approbations ECO)",
    },
    correct: {
      en: "In the ECO stages of the pipeline",
      fr: "Dans les étapes ECO du pipeline",
    },
    distractors: [
      { en: "On each individual ECO", fr: "Sur chaque ECO individuel" },
      { en: "When the ECO type is created", fr: "Lors de la création du type ECO" },
      { en: "In the bill of materials", fr: "Dans la nomenclature" },
    ],
    explanation: {
      en: "Source Odoo Learn (ECO Approvals): In the ECO stages of the pipeline",
      fr: "Source Odoo Learn (Approbations ECO) : Dans les étapes ECO du pipeline",
    },
  }),
];
