import { complexQ } from "../helpers";

/** Questions Odoo Learn — modules complémentaires (hors certification) */
export const signSupplementaryQuestions = [
  complexQ({
    id: "sign-001",
    module: "sign",
    text: {
      en: "Where can the user find pre-designed, reusable documents like NDAs and service agreements in Odoo Sign? (Odoo Learn — Sign Basics)",
      fr: "Where can the user find pre-designed, reusable documents like NDAs and service agreements in Odoo Sign? (Odoo Learn — Sign Basics)",
    },
    correct: {
      en: "In the main Documents’ dashboard, by clicking \"Templates”.",
      fr: "In the main Documents’ dashboard, by clicking \"Templates”.",
    },
    distractors: [
      { en: "In the main Documents’ dashboard, by clicking “Documents”.", fr: "In the main Documents’ dashboard, by clicking “Documents”." },
      { en: "In the main Documents’ dashboard, by clicking “Configuration”.", fr: "In the main Documents’ dashboard, by clicking “Configuration”." },
      { en: "By clicking the \"Upload a PDF\" button.", fr: "By clicking the \"Upload a PDF\" button." },
    ],
    explanation: {
      en: "Source Odoo Learn (Sign Basics): In the main Documents’ dashboard, by clicking \"Templates”.",
      fr: "Source Odoo Learn (Sign Basics): In the main Documents’ dashboard, by clicking \"Templates”.",
    },
  }),
  complexQ({
    id: "sign-002",
    module: "sign",
    text: {
      en: "What is the term used in Odoo for sending multiple documents for signature in one go? (Odoo Learn — Sign Basics)",
      fr: "What is the term used in Odoo for sending multiple documents for signature in one go? (Odoo Learn — Sign Basics)",
    },
    correct: {
      en: "An envelope.",
      fr: "An envelope.",
    },
    distractors: [
      { en: "A stack.", fr: "A stack." },
      { en: "A bundle.", fr: "A bundle." },
      { en: "A package.", fr: "A package." },
    ],
    explanation: {
      en: "Source Odoo Learn (Sign Basics): An envelope.",
      fr: "Source Odoo Learn (Sign Basics): An envelope.",
    },
  }),
  complexQ({
    id: "sign-003",
    module: "sign",
    text: {
      en: "Where can users configure custom fields to use in their signature requests in Odoo Sign? (Odoo Learn — Sign Basics)",
      fr: "Where can users configure custom fields to use in their signature requests in Odoo Sign? (Odoo Learn — Sign Basics)",
    },
    correct: {
      en: "By clicking \"Configuration\" > \"Edit Field Types\".",
      fr: "By clicking \"Configuration\" > \"Edit Field Types\".",
    },
    distractors: [
      { en: "In the \"Documents\" dashboard.", fr: "In the \"Documents\" dashboard." },
      { en: "In the main Documents’ dashboard, by clicking \"Templates”.", fr: "In the main Documents’ dashboard, by clicking \"Templates”." },
      { en: "By clicking on a field while preparing a document.", fr: "By clicking on a field while preparing a document." },
    ],
    explanation: {
      en: "Source Odoo Learn (Sign Basics): By clicking \"Configuration\" > \"Edit Field Types\".",
      fr: "Source Odoo Learn (Sign Basics): By clicking \"Configuration\" > \"Edit Field Types\".",
    },
  }),
  complexQ({
    id: "sign-004",
    module: "sign",
    text: {
      en: "What authentication methods for signers are mentioned in the \"Configuration\" tab (though requiring purchased credits)? (Odoo Learn — Sign Basics)",
      fr: "What authentication methods for signers are mentioned in the \"Configuration\" tab (though requiring purchased credits)? (Odoo Learn — Sign Basics)",
    },
    correct: {
      en: "SMS and the \"itsme\" app.",
      fr: "SMS and the \"itsme\" app.",
    },
    distractors: [
      { en: "Email and password.", fr: "Email and password." },
      { en: "Fingerprint and facial recognition.", fr: "Fingerprint and facial recognition." },
      { en: "Security questions.", fr: "Security questions." },
    ],
    explanation: {
      en: "Source Odoo Learn (Sign Basics): SMS and the \"itsme\" app.",
      fr: "Source Odoo Learn (Sign Basics): SMS and the \"itsme\" app.",
    },
  }),
];
