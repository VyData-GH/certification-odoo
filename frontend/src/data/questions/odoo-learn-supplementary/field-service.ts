import { complexQ, mcq3Q } from "../helpers";

/** Questions Odoo Learn — modules complémentaires (hors certification) */
export const fieldServiceSupplementaryQuestions = [
  mcq3Q({
    id: "fsm-001",
    module: "field-service",
    text: {
      en: "How many times can you start and stop a timer in a Field Service Task? (Odoo Learn — Your first Field Service task)",
      fr: "How many times can you start and stop a timer in a Field Service Task? (Odoo Learn — Your first Field Service task)",
    },
    correct: {
      en: "As many times as you need",
      fr: "As many times as you need",
    },
    distractors: [
      { en: "Only once", fr: "Only once" },
      { en: "Three times", fr: "Three times" },
    ],
    explanation: {
      en: "Source Odoo Learn (Your first Field Service task): As many times as you need",
      fr: "Source Odoo Learn (Your first Field Service task): As many times as you need",
    },
  }),
  complexQ({
    id: "fsm-002",
    module: "field-service",
    text: {
      en: "Which of the following is not part of the Field Service flow? (Odoo Learn — Your first Field Service task)",
      fr: "Which of the following is not part of the Field Service flow? (Odoo Learn — Your first Field Service task)",
    },
    correct: {
      en: "A manufacturing order",
      fr: "Un ordre de fabrication",
    },
    distractors: [
      { en: "A sales order", fr: "A sales order" },
      { en: "Adding a product", fr: "Adding a product" },
      { en: "Using a map itinerary", fr: "Using a map itinerary" },
    ],
    explanation: {
      en: "Source Odoo Learn (Your first Field Service task): A manufacturing order",
      fr: "Source Odoo Learn (Your first Field Service task): A manufacturing order",
    },
  }),
  complexQ({
    id: "fsm-003",
    module: "field-service",
    text: {
      en: "Which of the following is included in the customer report? (Odoo Learn — Your first Field Service task)",
      fr: "Which of the following is included in the customer report? (Odoo Learn — Your first Field Service task)",
    },
    correct: {
      en: "All of the above",
      fr: "Tout ce qui précède",
    },
    distractors: [
      { en: "Information from the worksheet", fr: "Information from the worksheet" },
      { en: "Time spent working on the task", fr: "Time spent working on the task" },
      { en: "Customer signature", fr: "Customer signature" },
    ],
    explanation: {
      en: "Source Odoo Learn (Your first Field Service task): All of the above",
      fr: "Source Odoo Learn (Your first Field Service task): All of the above",
    },
  }),
  complexQ({
    id: "fsm-004",
    module: "field-service",
    text: {
      en: "In the Field Service app Kanban view, you can reschedule a task by: (Odoo Learn — Creating & planning Field Service tasks)",
      fr: "In the Field Service app Kanban view, you can reschedule a task by: (Odoo Learn — Creating & planning Field Service tasks)",
    },
    correct: {
      en: "Opening the task, then changing the Planned dates",
      fr: "Opening the task, then changing the Planned dates",
    },
    distractors: [
      { en: "Dragging and dropping it to a column with a different date", fr: "Dragging and dropping it to a column with a different date" },
      { en: "Clicking the clock icon, then changing the Planned dates", fr: "Clicking the clock icon, then changing the Planned dates" },
      { en: "Starring the task", fr: "Starring the task" },
    ],
    explanation: {
      en: "Source Odoo Learn (Creating & planning Field Service tasks): Opening the task, then changing the Planned dates",
      fr: "Source Odoo Learn (Creating & planning Field Service tasks): Opening the task, then changing the Planned dates",
    },
  }),
  complexQ({
    id: "fsm-005",
    module: "field-service",
    text: {
      en: "Which fields are mandatory when creating a new Field Service task? (Odoo Learn — Creating & planning Field Service tasks)",
      fr: "Which fields are mandatory when creating a new Field Service task? (Odoo Learn — Creating & planning Field Service tasks)",
    },
    correct: {
      en: "Task Title and Customer",
      fr: "Task Title and Customer",
    },
    distractors: [
      { en: "Customer and Planned Dates", fr: "Customer and Planned Dates" },
      { en: "Task Title and Phone Number", fr: "Task Title and Phone Number" },
      { en: "Task Title and Planned Dates", fr: "Task Title and Planned Dates" },
    ],
    explanation: {
      en: "Source Odoo Learn (Creating & planning Field Service tasks): Task Title and Customer",
      fr: "Source Odoo Learn (Creating & planning Field Service tasks): Task Title and Customer",
    },
  }),
  complexQ({
    id: "fsm-006",
    module: "field-service",
    text: {
      en: "Is it possible to schedule multiple tasks in Field Service? (Odoo Learn — Creating & planning Field Service tasks)",
      fr: "Is it possible to schedule multiple tasks in Field Service? (Odoo Learn — Creating & planning Field Service tasks)",
    },
    correct: {
      en: "Yes, from the Gantt and List views",
      fr: "Yes, from the Gantt and List views",
    },
    distractors: [
      { en: "Yes, by selecting several tasks in the Kanban view and dragging and dropping them.", fr: "Yes, by selecting several tasks in the Kanban view and dragging and dropping them." },
      { en: "Yes, from the Map and Gantt views", fr: "Yes, from the Map and Gantt views" },
      { en: "It’s not possible to batch plan tasks in Field Service", fr: "It’s not possible to batch plan tasks in Field Service" },
    ],
    explanation: {
      en: "Source Odoo Learn (Creating & planning Field Service tasks): Yes, from the Gantt and List views",
      fr: "Source Odoo Learn (Creating & planning Field Service tasks): Yes, from the Gantt and List views",
    },
  }),
  complexQ({
    id: "fsm-007",
    module: "field-service",
    text: {
      en: "Which of the following cannot be configured to trigger the creation of a Field Service task? (Odoo Learn — Creating & planning Field Service tasks)",
      fr: "Which of the following cannot be configured to trigger the creation of a Field Service task? (Odoo Learn — Creating & planning Field Service tasks)",
    },
    correct: {
      en: "A Manufacturing Order",
      fr: "Un ordre de fabrication",
    },
    distractors: [
      { en: "A Sales Order", fr: "Une commande client" },
      { en: "A Helpdesk ticket", fr: "A Helpdesk ticket" },
      { en: "A Website form", fr: "A Website form" },
    ],
    explanation: {
      en: "Source Odoo Learn (Creating & planning Field Service tasks): A Manufacturing Order",
      fr: "Source Odoo Learn (Creating & planning Field Service tasks): A Manufacturing Order",
    },
  }),
  complexQ({
    id: "fsm-008",
    module: "field-service",
    text: {
      en: "Go to All Tasks > To Schedule and take a look at the tasks. For a task to show up on this list: (Odoo Learn — Creating & planning Field Service tasks)",
      fr: "Go to All Tasks > To Schedule and take a look at the tasks. For a task to show up on this list: (Odoo Learn — Creating & planning Field Service tasks)",
    },
    correct: {
      en: "Either the Planned Date or Assignee fields need to be empty",
      fr: "Either the Planned Date or Assignee fields need to be empty",
    },
    distractors: [
      { en: "Only the Planned Date field needs to be empty", fr: "Only the Planned Date field needs to be empty" },
      { en: "Only the Assignee field needs to be empty", fr: "Only the Assignee field needs to be empty" },
      { en: "Both the Planned Date and Assignee fields need to be empty", fr: "Both the Planned Date and Assignee fields need to be empty" },
    ],
    explanation: {
      en: "Source Odoo Learn (Creating & planning Field Service tasks): Either the Planned Date or Assignee fields need to be empty",
      fr: "Source Odoo Learn (Creating & planning Field Service tasks): Either the Planned Date or Assignee fields need to be empty",
    },
  }),
  complexQ({
    id: "fsm-009",
    module: "field-service",
    text: {
      en: "How can you configure your product to make the stock level visible? (Odoo Learn — Product management in Field Service)",
      fr: "How can you configure your product to make the stock level visible? (Odoo Learn — Product management in Field Service)",
    },
    correct: {
      en: "Set my product as storable",
      fr: "Set my product as storable",
    },
    distractors: [
      { en: "Set my product as a consumable", fr: "Set my product as a consumable" },
      { en: "Set up a barcode for each unit", fr: "Set up a barcode for each unit" },
      { en: "Turn on the product count option in the settings", fr: "Turn on the product count option in the settings" },
    ],
    explanation: {
      en: "Source Odoo Learn (Product management in Field Service): Set my product as storable",
      fr: "Source Odoo Learn (Product management in Field Service): Set my product as storable",
    },
  }),
  complexQ({
    id: "fsm-010",
    module: "field-service",
    text: {
      en: "How can you keep track of the stock levels of the products stored in your van? (Odoo Learn — Product management in Field Service)",
      fr: "How can you keep track of the stock levels of the products stored in your van? (Odoo Learn — Product management in Field Service)",
    },
    correct: {
      en: "Set up an additional warehouse in the Inventory app",
      fr: "Set up an additional warehouse in the Inventory app",
    },
    distractors: [
      { en: "Duplicate every product stored in your van and check the 'traveling' option", fr: "Duplicate every product stored in your van and check the 'traveling' option" },
      { en: "Install the Fleet app", fr: "Install the Fleet app" },
      { en: "Set up the 'traveling stock' option in the settings", fr: "Set up the 'traveling stock' option in the settings" },
    ],
    explanation: {
      en: "Source Odoo Learn (Product management in Field Service): Set up an additional warehouse in the Inventory app",
      fr: "Source Odoo Learn (Product management in Field Service): Set up an additional warehouse in the Inventory app",
    },
  }),
  complexQ({
    id: "fsm-011",
    module: "field-service",
    text: {
      en: "In Odoo, where do you go to assign a warehouse to a user? (Odoo Learn — Product management in Field Service)",
      fr: "In Odoo, where do you go to assign a warehouse to a user? (Odoo Learn — Product management in Field Service)",
    },
    correct: {
      en: "In the user's profile settings, under the 'Inventory' tab",
      fr: "In the user's profile settings, under the 'Inventory' tab",
    },
    distractors: [
      { en: "Inventory app", fr: "Inventory app" },
      { en: "Employees app", fr: "Employees app" },
      { en: "By going to configuration, then warehouses", fr: "By going to configuration, then warehouses" },
    ],
    explanation: {
      en: "Source Odoo Learn (Product management in Field Service): In the user's profile settings, under the 'Inventory' tab",
      fr: "Source Odoo Learn (Product management in Field Service): In the user's profile settings, under the 'Inventory' tab",
    },
  }),
  mcq3Q({
    id: "fsm-012",
    module: "field-service",
    text: {
      en: "How do you enable worksheet templates? (Odoo Learn — Customizing worksheets)",
      fr: "How do you enable worksheet templates? (Odoo Learn — Customizing worksheets)",
    },
    correct: {
      en: "By going to Field Service settings, and activating the 'Worksheet templates' option",
      fr: "By going to Field Service settings, and activating the 'Worksheet templates' option",
    },
    distractors: [
      { en: "By going to General Settings, then to 'Worksheet templates' tab", fr: "By going to General Settings, then to 'Worksheet templates' tab" },
      { en: "Worksheet templates are enabled up by default", fr: "Worksheet templates are enabled up by default" },
    ],
    explanation: {
      en: "Source Odoo Learn (Customizing worksheets): By going to Field Service settings, and activating the 'Worksheet templates' option",
      fr: "Source Odoo Learn (Customizing worksheets): By going to Field Service settings, and activating the 'Worksheet templates' option",
    },
  }),
  complexQ({
    id: "fsm-013",
    module: "field-service",
    text: {
      en: "What additional Odoo app will be activated to design a worksheet template? (Odoo Learn — Customizing worksheets)",
      fr: "What additional Odoo app will be activated to design a worksheet template? (Odoo Learn — Customizing worksheets)",
    },
    correct: {
      en: "Studio",
      fr: "Studio",
    },
    distractors: [
      { en: "Planning", fr: "Planning" },
      { en: "Timesheets", fr: "Feuilles de temps" },
      { en: "Appointments", fr: "Appointments" },
    ],
    explanation: {
      en: "Source Odoo Learn (Customizing worksheets): Studio",
      fr: "Source Odoo Learn (Customizing worksheets): Studio",
    },
  }),
  complexQ({
    id: "fsm-014",
    module: "field-service",
    text: {
      en: "What can you add to a worksheet template? (Odoo Learn — Customizing worksheets)",
      fr: "What can you add to a worksheet template? (Odoo Learn — Customizing worksheets)",
    },
    correct: {
      en: "All of the above",
      fr: "Tout ce qui précède",
    },
    distractors: [
      { en: "Checkbox", fr: "Checkbox" },
      { en: "Image", fr: "Image" },
      { en: "HTML", fr: "HTML" },
    ],
    explanation: {
      en: "Source Odoo Learn (Customizing worksheets): All of the above",
      fr: "Source Odoo Learn (Customizing worksheets): All of the above",
    },
  }),
  mcq3Q({
    id: "fsm-015",
    module: "field-service",
    text: {
      en: "Where can you find your itinerary in Field Service? (Odoo Learn — Using maps in Field Service)",
      fr: "Where can you find your itinerary in Field Service? (Odoo Learn — Using maps in Field Service)",
    },
    correct: {
      en: "In your task > View Itinerary",
      fr: "In your task > View Itinerary",
    },
    distractors: [
      { en: "General Settings > Integrations > Google Maps", fr: "General Settings > Integrations > Google Maps" },
      { en: "Install Google Maps on your smartphone and link your Odoo account", fr: "Install Google Maps on your smartphone and link your Odoo account" },
    ],
    explanation: {
      en: "Source Odoo Learn (Using maps in Field Service): In your task > View Itinerary",
      fr: "Source Odoo Learn (Using maps in Field Service): In your task > View Itinerary",
    },
  }),
  mcq3Q({
    id: "fsm-016",
    module: "field-service",
    text: {
      en: "What do you need to get a complete itinerary of your Field Service tasks? (Odoo Learn — Using maps in Field Service)",
      fr: "What do you need to get a complete itinerary of your Field Service tasks? (Odoo Learn — Using maps in Field Service)",
    },
    correct: {
      en: "Both of the above",
      fr: "Both of the above",
    },
    distractors: [
      { en: "Set up each customer’s address", fr: "Set up each customer’s address" },
      { en: "Go to General Settings > Integrations > MapBox token", fr: "Go to General Settings > Integrations > MapBox token" },
    ],
    explanation: {
      en: "Source Odoo Learn (Using maps in Field Service): Both of the above",
      fr: "Source Odoo Learn (Using maps in Field Service): Both of the above",
    },
  }),
];
