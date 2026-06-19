import { complexQ } from "../helpers";

/** Questions Odoo Learn — modules complémentaires (hors certification) */
export const plmSupplementaryQuestions = [
  complexQ({
    id: "plm-001",
    module: "plm",
    text: {
      en: "What is the purpose of the Revision smart button? (Odoo Learn — Engineering Change Orders)",
      fr: "What is the purpose of the Revision smart button? (Odoo Learn — Engineering Change Orders)",
    },
    correct: {
      en: "To start making changes by creating a copy of the BoM while keeping the original inactive",
      fr: "To start making changes by creating a copy of the BoM while keeping the original inactive",
    },
    distractors: [
      { en: "To delete an existing Bill of Materials (BoM)", fr: "To delete an existing Bill of Materials (BoM)" },
      { en: "To approve changes to a BoM for immediate use in production", fr: "To approve changes to a BoM for immediate use in production" },
      { en: "To automatically update all existing Manufacturing Orders (MOs) with the new BoM", fr: "To automatically update all existing Manufacturing Orders (MOs) with the new BoM" },
    ],
    explanation: {
      en: "Source Odoo Learn (Engineering Change Orders): To start making changes by creating a copy of the BoM while keeping the original inactive",
      fr: "Source Odoo Learn (Engineering Change Orders): To start making changes by creating a copy of the BoM while keeping the original inactive",
    },
  }),
  complexQ({
    id: "plm-002",
    module: "plm",
    text: {
      en: "Why do the ‘Component Changes’ and ‘Operation Changes’ tabs appear on the Engineering Change Order (ECO)? (Odoo Learn — Engineering Change Orders)",
      fr: "Why do the ‘Component Changes’ and ‘Operation Changes’ tabs appear on the Engineering Change Order (ECO)? (Odoo Learn — Engineering Change Orders)",
    },
    correct: {
      en: "To summarize the differences between the revised BoM and the BoM currently in production",
      fr: "To summarize the differences between the revised BoM and the BoM currently in production",
    },
    distractors: [
      { en: "To display all previous versions of the BoM for reference", fr: "To display all previous versions of the BoM for reference" },
      { en: "To list all manufacturing orders affected by the change", fr: "To list all manufacturing orders affected by the change" },
      { en: "To allow users to edit the original BoM without creating a revision", fr: "To allow users to edit the original BoM without creating a revision" },
    ],
    explanation: {
      en: "Source Odoo Learn (Engineering Change Orders): To summarize the differences between the revised BoM and the BoM currently in production",
      fr: "Source Odoo Learn (Engineering Change Orders): To summarize the differences between the revised BoM and the BoM currently in production",
    },
  }),
  complexQ({
    id: "plm-003",
    module: "plm",
    text: {
      en: "What happens if a Manufacturing Order (MO) is already in the ‘Confirmed’ stage when a BoM revision is made? (Odoo Learn — Engineering Change Orders)",
      fr: "What happens if a Manufacturing Order (MO) is already in the ‘Confirmed’ stage when a BoM revision is made? (Odoo Learn — Engineering Change Orders)",
    },
    correct: {
      en: "The MO continues using the old BoM to prevent disruptions to workers",
      fr: "The MO continues using the old BoM to prevent disruptions to workers",
    },
    distractors: [
      { en: "The MO automatically updates to the new BoM", fr: "The MO automatically updates to the new BoM" },
      { en: "The MO is canceled and must be restarted with the new BoM", fr: "The MO is canceled and must be restarted with the new BoM" },
      { en: "The system prevents users from making any BoM revisions", fr: "The system prevents users from making any BoM revisions" },
    ],
    explanation: {
      en: "Source Odoo Learn (Engineering Change Orders): The MO continues using the old BoM to prevent disruptions to workers",
      fr: "Source Odoo Learn (Engineering Change Orders): The MO continues using the old BoM to prevent disruptions to workers",
    },
  }),
  complexQ({
    id: "plm-004",
    module: "plm",
    text: {
      en: "Which of these is NOT an approval type? (Odoo Learn — ECO Approvals)",
      fr: "Which of these is NOT an approval type? (Odoo Learn — ECO Approvals)",
    },
    correct: {
      en: "Conditional approval",
      fr: "Conditional approval",
    },
    distractors: [
      { en: "Comments only", fr: "Comments only" },
      { en: "Approves, but the approval is optional", fr: "Approves, but the approval is optional" },
      { en: "Is required to approve", fr: "Is required to approve" },
    ],
    explanation: {
      en: "Source Odoo Learn (ECO Approvals): Conditional approval",
      fr: "Source Odoo Learn (ECO Approvals): Conditional approval",
    },
  }),
  complexQ({
    id: "plm-005",
    module: "plm",
    text: {
      en: "How many approvers can an ECO have? (Odoo Learn — ECO Approvals)",
      fr: "How many approvers can an ECO have? (Odoo Learn — ECO Approvals)",
    },
    correct: {
      en: "As many as are needed in any stage",
      fr: "As many as are needed in any stage",
    },
    distractors: [
      { en: "One per ECO", fr: "One per ECO" },
      { en: "One per stage", fr: "One per stage" },
      { en: "As many as are needed, but only one can be required to approve", fr: "As many as are needed, but only one can be required to approve" },
    ],
    explanation: {
      en: "Source Odoo Learn (ECO Approvals): As many as are needed in any stage",
      fr: "Source Odoo Learn (ECO Approvals): As many as are needed in any stage",
    },
  }),
  complexQ({
    id: "plm-006",
    module: "plm",
    text: {
      en: "Where are approvals configured? (Odoo Learn — ECO Approvals)",
      fr: "Where are approvals configured? (Odoo Learn — ECO Approvals)",
    },
    correct: {
      en: "In the ECO stages of the pipeline",
      fr: "In the ECO stages of the pipeline",
    },
    distractors: [
      { en: "On each individual ECO", fr: "On each individual ECO" },
      { en: "When the ECO type is created", fr: "When the ECO type is created" },
      { en: "In the bill of materials", fr: "In the bill of materials" },
    ],
    explanation: {
      en: "Source Odoo Learn (ECO Approvals): In the ECO stages of the pipeline",
      fr: "Source Odoo Learn (ECO Approvals): In the ECO stages of the pipeline",
    },
  }),
];
