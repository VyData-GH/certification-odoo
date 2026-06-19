import { complexQ } from "../helpers";

/** Questions Odoo Learn — modules complémentaires (hors certification) */
export const appointmentsSupplementaryQuestions = [
  complexQ({
    id: "apt-001",
    module: "appointments",
    text: {
      en: "What is the function of setting a resource’s Capacity field in Odoo Appointments? (Odoo Learn — Appointments Basics)",
      fr: "What is the function of setting a resource’s Capacity field in Odoo Appointments? (Odoo Learn — Appointments Basics)",
    },
    correct: {
      en: "Restricts the maximum number of attendees per booking",
      fr: "Restricts the maximum number of attendees per booking",
    },
    distractors: [
      { en: "Defines the number of concurrent appointments a user can handle", fr: "Defines the number of concurrent appointments a user can handle" },
      { en: "Specifies available time slots for a resource", fr: "Specifies available time slots for a resource" },
      { en: "Links the resource to a specific user", fr: "Links the resource to a specific user" },
    ],
    explanation: {
      en: "Source Odoo Learn (Appointments Basics): Restricts the maximum number of attendees per booking",
      fr: "Source Odoo Learn (Appointments Basics): Restricts the maximum number of attendees per booking",
    },
  }),
  complexQ({
    id: "apt-002",
    module: "appointments",
    text: {
      en: "In the Questions tab, what does enabling the Mandatory checkbox do? (Odoo Learn — Appointments Basics)",
      fr: "In the Questions tab, what does enabling the Mandatory checkbox do? (Odoo Learn — Appointments Basics)",
    },
    correct: {
      en: "Requires the visitor to answer before booking",
      fr: "Requires the visitor to answer before booking",
    },
    distractors: [
      { en: "Displays the question only on the backend", fr: "Displays the question only on the backend" },
      { en: "Adds the response to internal notes", fr: "Adds the response to internal notes" },
      { en: "Enables it as a reusable default question", fr: "Enables it as a reusable default question" },
    ],
    explanation: {
      en: "Source Odoo Learn (Appointments Basics): Requires the visitor to answer before booking",
      fr: "Source Odoo Learn (Appointments Basics): Requires the visitor to answer before booking",
    },
  }),
  complexQ({
    id: "apt-003",
    module: "appointments",
    text: {
      en: "What is the significance of the “Allow booking within the next 15 days” setting? (Odoo Learn — Appointments Basics)",
      fr: "What is the significance of the “Allow booking within the next 15 days” setting? (Odoo Learn — Appointments Basics)",
    },
    correct: {
      en: "Limits how far ahead customers can book",
      fr: "Limits how far ahead customers can book",
    },
    distractors: [
      { en: "Defines the maximum number of appointments per resource", fr: "Defines the maximum number of appointments per resource" },
      { en: "Controls cancellation time limits", fr: "Controls cancellation time limits" },
      { en: "Restricts appointments to weekdays only", fr: "Restricts appointments to weekdays only" },
    ],
    explanation: {
      en: "Source Odoo Learn (Appointments Basics): Limits how far ahead customers can book",
      fr: "Source Odoo Learn (Appointments Basics): Limits how far ahead customers can book",
    },
  }),
  complexQ({
    id: "apt-004",
    module: "appointments",
    text: {
      en: "Where can you enable the “Create Opportunity” feature for an appointment type? (Odoo Learn — Creating Opportunities)",
      fr: "Where can you enable the “Create Opportunity” feature for an appointment type? (Odoo Learn — Creating Opportunities)",
    },
    correct: {
      en: "In the Options tab.",
      fr: "In the Options tab.",
    },
    distractors: [
      { en: "On the CRM dashboard.", fr: "Sur le tableau de bord CRM." },
      { en: "In the Questions tab.", fr: "In the Questions tab." },
      { en: "In the Scheduling window.", fr: "In the Scheduling window." },
    ],
    explanation: {
      en: "Source Odoo Learn (Creating Opportunities): In the Options tab.",
      fr: "Source Odoo Learn (Creating Opportunities): In the Options tab.",
    },
  }),
  complexQ({
    id: "apt-005",
    module: "appointments",
    text: {
      en: "Which app- other than Appointments- must be installed in order to use the “Create Opportunity” option? (Odoo Learn — Creating Opportunities)",
      fr: "Which app- other than Appointments- must be installed in order to use the “Create Opportunity” option? (Odoo Learn — Creating Opportunities)",
    },
    correct: {
      en: "CRM.",
      fr: "GRC.",
    },
    distractors: [
      { en: "Invoicing.", fr: "Invoicing." },
      { en: "Project.", fr: "Project." },
      { en: "Sales.", fr: "Sales." },
    ],
    explanation: {
      en: "Source Odoo Learn (Creating Opportunities): CRM.",
      fr: "Source Odoo Learn (Creating Opportunities): CRM.",
    },
  }),
  complexQ({
    id: "apt-006",
    module: "appointments",
    text: {
      en: "What happens to the answers provided in the Questions tab when a customer books an appointment? (Odoo Learn — Creating Opportunities)",
      fr: "What happens to the answers provided in the Questions tab when a customer books an appointment? (Odoo Learn — Creating Opportunities)",
    },
    correct: {
      en: "They are included on the CRM opportunity.",
      fr: "They are included on the CRM opportunity.",
    },
    distractors: [
      { en: "They are sent as an email to the sales team", fr: "They are sent as an email to the sales team" },
      { en: "They are stored only on the website.", fr: "They are stored only on the website." },
      { en: "They are visible only to the appointment’s assigned user.", fr: "They are visible only to the appointment’s assigned user." },
    ],
    explanation: {
      en: "Source Odoo Learn (Creating Opportunities): They are included on the CRM opportunity.",
      fr: "Source Odoo Learn (Creating Opportunities): They are included on the CRM opportunity.",
    },
  }),
  complexQ({
    id: "apt-007",
    module: "appointments",
    text: {
      en: "In Flexible mode, why does the Duration field switch to “depending on the slots”? (Odoo Learn — Flexible Scheduling)",
      fr: "In Flexible mode, why does the Duration field switch to “depending on the slots”? (Odoo Learn — Flexible Scheduling)",
    },
    correct: {
      en: "Duration is tied to the manually created time slots",
      fr: "Duration is tied to the manually created time slots",
    },
    distractors: [
      { en: "Duration becomes inherited from the company working hours", fr: "Duration becomes inherited from the company working hours" },
      { en: "Duration is automatically calculated from recurring rules", fr: "Duration is automatically calculated from recurring rules" },
      { en: "Duration is always fixed at one hour", fr: "Duration is always fixed at one hour" },
    ],
    explanation: {
      en: "Source Odoo Learn (Flexible Scheduling): Duration is tied to the manually created time slots",
      fr: "Source Odoo Learn (Flexible Scheduling): Duration is tied to the manually created time slots",
    },
  }),
  complexQ({
    id: "apt-008",
    module: "appointments",
    text: {
      en: "Why are no time slots displayed in the Availabilities tab after switching to Flexible mode? (Odoo Learn — Flexible Scheduling)",
      fr: "Why are no time slots displayed in the Availabilities tab after switching to Flexible mode? (Odoo Learn — Flexible Scheduling)",
    },
    correct: {
      en: "Time slots are not auto-generated and must be entered manually",
      fr: "Time slots are not auto-generated and must be entered manually",
    },
    distractors: [
      { en: "The appointment becomes unpublished", fr: "The appointment becomes unpublished" },
      { en: "Flexible mode hides all existing settings permanently", fr: "Flexible mode hides all existing settings permanently" },
      { en: "Weekly slots are incompatible and must be manually reactivated", fr: "Weekly slots are incompatible and must be manually reactivated" },
    ],
    explanation: {
      en: "Source Odoo Learn (Flexible Scheduling): Time slots are not auto-generated and must be entered manually",
      fr: "Source Odoo Learn (Flexible Scheduling): Time slots are not auto-generated and must be entered manually",
    },
  }),
  complexQ({
    id: "apt-009",
    module: "appointments",
    text: {
      en: "When creating a new flexible time slot, which elements must be specified? (Odoo Learn — Flexible Scheduling)",
      fr: "When creating a new flexible time slot, which elements must be specified? (Odoo Learn — Flexible Scheduling)",
    },
    correct: {
      en: "Date, start time, and end time",
      fr: "Date, start time, and end time",
    },
    distractors: [
      { en: "Employee skill level and capacity", fr: "Employee skill level and capacity" },
      { en: "Color theme and customer message", fr: "Color theme and customer message" },
      { en: "Channel and user groups", fr: "Channel and user groups" },
    ],
    explanation: {
      en: "Source Odoo Learn (Flexible Scheduling): Date, start time, and end time",
      fr: "Source Odoo Learn (Flexible Scheduling): Date, start time, and end time",
    },
  }),
];
