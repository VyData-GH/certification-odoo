import { complexQ, mcq3Q } from "../helpers";

/** Questions Odoo Learn — modules complémentaires (hors certification) */
export const subscriptionSupplementaryQuestions = [
  complexQ({
    id: "sub-001",
    module: "subscription",
    text: {
      en: "What’s the difference between a Subscription product form and a typical product form? (Odoo Learn — Subscription Products)",
      fr: "What’s the difference between a Subscription product form and a typical product form? (Odoo Learn — Subscription Products)",
    },
    correct: {
      en: "The ‘Subscriptions’ checkbox is ticked, by default",
      fr: "The ‘Subscriptions’ checkbox is ticked, by default",
    },
    distractors: [
      { en: "The ‘Recurring Prices’ tab is filled out, by default", fr: "The ‘Recurring Prices’ tab is filled out, by default" },
      { en: "The ‘Subscribe’ field is auto-populated, by default", fr: "The ‘Subscribe’ field is auto-populated, by default" },
      { en: "The ‘Recurring Plans’ checkbox is ticked, by default", fr: "The ‘Recurring Plans’ checkbox is ticked, by default" },
    ],
    explanation: {
      en: "Source Odoo Learn (Subscription Products): The ‘Subscriptions’ checkbox is ticked, by default",
      fr: "Source Odoo Learn (Subscription Products): The ‘Subscriptions’ checkbox is ticked, by default",
    },
  }),
  complexQ({
    id: "sub-002",
    module: "subscription",
    text: {
      en: "How many price rules can be added to the ‘Recurring Prices’ tab of a subscription product form? (Odoo Learn — Subscription Products)",
      fr: "How many price rules can be added to the ‘Recurring Prices’ tab of a subscription product form? (Odoo Learn — Subscription Products)",
    },
    correct: {
      en: "There is no limit",
      fr: "Il n'y a pas de limite",
    },
    distractors: [
      { en: "1", fr: "1" },
      { en: "2", fr: "2" },
      { en: "3", fr: "3" },
    ],
    explanation: {
      en: "Source Odoo Learn (Subscription Products): There is no limit",
      fr: "Source Odoo Learn (Subscription Products): There is no limit",
    },
  }),
  complexQ({
    id: "sub-003",
    module: "subscription",
    text: {
      en: "What happens when the ‘Plan Services’ checkbox is ticked on a subscription product form? (Odoo Learn — Subscription Products)",
      fr: "What happens when the ‘Plan Services’ checkbox is ticked on a subscription product form? (Odoo Learn — Subscription Products)",
    },
    correct: {
      en: "Odoo automatically generates a shift for a selected role when confirming the sales order",
      fr: "Odoo automatically generates a shift for a selected role when confirming the sales order",
    },
    distractors: [
      { en: "Odoo automatically blocks out a scheduled date/time on the user’s personal calendar", fr: "Odoo automatically blocks out a scheduled date/time on the user’s personal calendar" },
      { en: "Odoo automatically creates a Project and Task for the user creating the product", fr: "Odoo automatically creates a Project and Task for the user creating the product" },
      { en: "Odoo automatically opens the ‘Planning’ application", fr: "Odoo automatically opens the ‘Planning’ application" },
    ],
    explanation: {
      en: "Source Odoo Learn (Subscription Products): Odoo automatically generates a shift for a selected role when confirming the sales order",
      fr: "Source Odoo Learn (Subscription Products): Odoo automatically generates a shift for a selected role when confirming the sales order",
    },
  }),
  complexQ({
    id: "sub-004",
    module: "subscription",
    text: {
      en: "How do I reopen a canceled subscription? (Odoo Learn — Renewing and Closing Subscriptions)",
      fr: "How do I reopen a canceled subscription? (Odoo Learn — Renewing and Closing Subscriptions)",
    },
    correct: {
      en: "On the canceled subscription, click the ‘Reopen’ button on the top",
      fr: "On the canceled subscription, click the ‘Reopen’ button on the top",
    },
    distractors: [
      { en: "Head to ‘Configuration’ -> ‘Settings’ -> ‘Subscriptions’, and reopen from there", fr: "Head to ‘Configuration’ -> ‘Settings’ -> ‘Subscriptions’, and reopen from there" },
      { en: "There is no way to reopen a canceled subscription", fr: "There is no way to reopen a canceled subscription" },
      { en: "Contact the customer directly, and have them submit a ticket to Helpdesk", fr: "Contact the customer directly, and have them submit a ticket to Helpdesk" },
    ],
    explanation: {
      en: "Source Odoo Learn (Renewing and Closing Subscriptions): On the canceled subscription, click the ‘Reopen’ button on the top",
      fr: "Source Odoo Learn (Renewing and Closing Subscriptions): On the canceled subscription, click the ‘Reopen’ button on the top",
    },
  }),
  complexQ({
    id: "sub-005",
    module: "subscription",
    text: {
      en: "What does Odoo generate when I click ‘Renew’ on a subscription sales order? (Odoo Learn — Renewing and Closing Subscriptions)",
      fr: "What does Odoo generate when I click ‘Renew’ on a subscription sales order? (Odoo Learn — Renewing and Closing Subscriptions)",
    },
    correct: {
      en: "A new subscription quotation",
      fr: "A new subscription quotation",
    },
    distractors: [
      { en: "A new subscription product", fr: "A new subscription product" },
      { en: "An order form for inputting customer payment information", fr: "An order form for inputting customer payment information" },
      { en: "A new chatter activity for scheduling a customer meeting", fr: "A new chatter activity for scheduling a customer meeting" },
    ],
    explanation: {
      en: "Source Odoo Learn (Renewing and Closing Subscriptions): A new subscription quotation",
      fr: "Source Odoo Learn (Renewing and Closing Subscriptions): A new subscription quotation",
    },
  }),
  complexQ({
    id: "sub-006",
    module: "subscription",
    text: {
      en: "What’s the difference between closing and canceling a subscription? (Odoo Learn — Renewing and Closing Subscriptions)",
      fr: "What’s the difference between closing and canceling a subscription? (Odoo Learn — Renewing and Closing Subscriptions)",
    },
    correct: {
      en: "I can only close a subscription after it’s been invoiced, and I can only cancel a subscription before it’s been invoiced",
      fr: "I can only close a subscription after it’s been invoiced, and I can only cancel a subscription before it’s been invoiced",
    },
    distractors: [
      { en: "There is no difference between closing and canceling a subscription", fr: "There is no difference between closing and canceling a subscription" },
      { en: "Customers do not see if I cancel a subscription", fr: "Customers do not see if I cancel a subscription" },
      { en: "The churn rate does not get affected by canceled subscriptions", fr: "The churn rate does not get affected by canceled subscriptions" },
    ],
    explanation: {
      en: "Source Odoo Learn (Renewing and Closing Subscriptions): I can only close a subscription after it’s been invoiced, and I can only cancel a subscription before it’s been invoiced",
      fr: "Source Odoo Learn (Renewing and Closing Subscriptions): I can only close a subscription after it’s been invoiced, and I can only cancel a subscription before it’s been invoiced",
    },
  }),
  complexQ({
    id: "sub-007",
    module: "subscription",
    text: {
      en: "Which of the following is NOT true of upselling? (Odoo Learn — Upsell Subscriptions)",
      fr: "Which of the following is NOT true of upselling? (Odoo Learn — Upsell Subscriptions)",
    },
    correct: {
      en: "Subscriptions can be upsold at the time of initial enrollment.",
      fr: "Subscriptions can be upsold at the time of initial enrollment.",
    },
    distractors: [
      { en: "Alternative quotes can be provided to customers during the upsell process.", fr: "Alternative quotes can be provided to customers during the upsell process." },
      { en: "Discounts can be applied to subscriptions during the upsell process.", fr: "Discounts can be applied to subscriptions during the upsell process." },
      { en: "Upsold subscriptions are both reflected in the original sales order and tracked in their own sales orders.", fr: "Upsold subscriptions are both reflected in the original sales order and tracked in their own sales orders." },
    ],
    explanation: {
      en: "Source Odoo Learn (Upsell Subscriptions): Subscriptions can be upsold at the time of initial enrollment.",
      fr: "Source Odoo Learn (Upsell Subscriptions): Subscriptions can be upsold at the time of initial enrollment.",
    },
  }),
  complexQ({
    id: "sub-008",
    module: "subscription",
    text: {
      en: "Before upselling a subscription, a plan must… (Odoo Learn — Upsell Subscriptions)",
      fr: "Before upselling a subscription, a plan must… (Odoo Learn — Upsell Subscriptions)",
    },
    correct: {
      en: "Have been successfully invoiced.",
      fr: "Have been successfully invoiced.",
    },
    distractors: [
      { en: "Use the default “Upsell Subscription\" quotation template.", fr: "Use the default “Upsell Subscription\" quotation template." },
      { en: "Be marked “Upsell Ready” by a customer in their Portal.", fr: "Be marked “Upsell Ready” by a customer in their Portal." },
      { en: "Reach its natural expiration date and be renewed by the customer.", fr: "Reach its natural expiration date and be renewed by the customer." },
    ],
    explanation: {
      en: "Source Odoo Learn (Upsell Subscriptions): Have been successfully invoiced.",
      fr: "Source Odoo Learn (Upsell Subscriptions): Have been successfully invoiced.",
    },
  }),
  complexQ({
    id: "sub-009",
    module: "subscription",
    text: {
      en: "Pick the true statement. (Odoo Learn — Upsell Subscriptions)",
      fr: "Pick the true statement. (Odoo Learn — Upsell Subscriptions)",
    },
    correct: {
      en: "A discount applied to a subscription product in an upsell order only applies to the initial upsell invoice, not to the life of the subscription.",
      fr: "A discount applied to a subscription product in an upsell order only applies to the initial upsell invoice, not to the life of the subscription.",
    },
    distractors: [
      { en: "A discount applied to a subscription product in an upsell order affects all subscriptions on the invoice.", fr: "A discount applied to a subscription product in an upsell order affects all subscriptions on the invoice." },
      { en: "A discount applied to a subscription product in an upsell order lasts for the life of the subscription.", fr: "A discount applied to a subscription product in an upsell order lasts for the life of the subscription." },
      { en: "Discounts cannot be applied to upsell orders, but once an upsell order has been invoiced, discounts can be applied to the updated original sales order.", fr: "Discounts cannot be applied to upsell orders, but once an upsell order has been invoiced, discounts can be applied to the updated original sales order." },
    ],
    explanation: {
      en: "Source Odoo Learn (Upsell Subscriptions): A discount applied to a subscription product in an upsell order only applies to the initial upsell invoice, not to the life of the subscription.",
      fr: "Source Odoo Learn (Upsell Subscriptions): A discount applied to a subscription product in an upsell order only applies to the initial upsell invoice, not to the life of the subscription.",
    },
  }),
  complexQ({
    id: "sub-010",
    module: "subscription",
    text: {
      en: "What does MRR measure? (Odoo Learn — Subscription Reports)",
      fr: "What does MRR measure? (Odoo Learn — Subscription Reports)",
    },
    correct: {
      en: "The monthly revenue from subscription products only.",
      fr: "The monthly revenue from subscription products only.",
    },
    distractors: [
      { en: "The monthly revenue from all products sold.", fr: "The monthly revenue from all products sold." },
      { en: "The monthly revenue from storable products only.", fr: "The monthly revenue from storable products only." },
      { en: "The monthly revenue from services only.", fr: "The monthly revenue from services only." },
    ],
    explanation: {
      en: "Source Odoo Learn (Subscription Reports): The monthly revenue from subscription products only.",
      fr: "Source Odoo Learn (Subscription Reports): The monthly revenue from subscription products only.",
    },
  }),
  complexQ({
    id: "sub-011",
    module: "subscription",
    text: {
      en: "What does it mean if this month’s retention rate is 90%? (Odoo Learn — Subscription Reports)",
      fr: "What does it mean if this month’s retention rate is 90%? (Odoo Learn — Subscription Reports)",
    },
    correct: {
      en: "The company has kept 90% of its subscribers from the previous month.",
      fr: "The company has kept 90% of its subscribers from the previous month.",
    },
    distractors: [
      { en: "The company has kept 90% of its profits from the previous month.", fr: "The company has kept 90% of its profits from the previous month." },
      { en: "The company has kept 10% of its total customers from the previous month.", fr: "The company has kept 10% of its total customers from the previous month." },
      { en: "90% of customers from the previous month have canceled their subscriptions.", fr: "90% of customers from the previous month have canceled their subscriptions." },
    ],
    explanation: {
      en: "Source Odoo Learn (Subscription Reports): The company has kept 90% of its subscribers from the previous month.",
      fr: "Source Odoo Learn (Subscription Reports): The company has kept 90% of its subscribers from the previous month.",
    },
  }),
  complexQ({
    id: "sub-012",
    module: "subscription",
    text: {
      en: "Which of the following information is NOT accessible directly from the subscription order? (Odoo Learn — Subscription Reports)",
      fr: "Which of the following information is NOT accessible directly from the subscription order? (Odoo Learn — Subscription Reports)",
    },
    correct: {
      en: "ARR",
      fr: "ARR",
    },
    distractors: [
      { en: "MRR", fr: "MRR" },
      { en: "Campaign", fr: "Campagne" },
      { en: "Source", fr: "Source" },
    ],
    explanation: {
      en: "Source Odoo Learn (Subscription Reports): ARR",
      fr: "Source Odoo Learn (Subscription Reports): ARR",
    },
  }),
  complexQ({
    id: "sub-013",
    module: "subscription",
    text: {
      en: "What activity type do I set to create a to-do task? (Odoo Learn — Automation Rules)",
      fr: "What activity type do I set to create a to-do task? (Odoo Learn — Automation Rules)",
    },
    correct: {
      en: "To-do",
      fr: "To-do",
    },
    distractors: [
      { en: "Reminder", fr: "Reminder" },
      { en: "Follow-up", fr: "Follow-up" },
      { en: "Task", fr: "Task" },
    ],
    explanation: {
      en: "Source Odoo Learn (Automation Rules): To-do",
      fr: "Source Odoo Learn (Automation Rules): To-do",
    },
  }),
  complexQ({
    id: "sub-014",
    module: "subscription",
    text: {
      en: "What section can I find the number of subscriptions an automation rule applies to? (Odoo Learn — Automation Rules)",
      fr: "What section can I find the number of subscriptions an automation rule applies to? (Odoo Learn — Automation Rules)",
    },
    correct: {
      en: "Under the `Apply On` section",
      fr: "Under the `Apply On` section",
    },
    distractors: [
      { en: "Under the `Action` Section", fr: "Under the `Action` Section" },
      { en: "Under the `Activity` section", fr: "Under the `Activity` section" },
      { en: "Under the `Rules` section", fr: "Under the `Rules` section" },
    ],
    explanation: {
      en: "Source Odoo Learn (Automation Rules): Under the `Apply On` section",
      fr: "Source Odoo Learn (Automation Rules): Under the `Apply On` section",
    },
  }),
  complexQ({
    id: "sub-015",
    module: "subscription",
    text: {
      en: "What is the `Over` field used for? (Odoo Learn — Automation Rules)",
      fr: "What is the `Over` field used for? (Odoo Learn — Automation Rules)",
    },
    correct: {
      en: "To set the period of time over which the chosen KPIs are calculated",
      fr: "To set the period of time over which the chosen KPIs are calculated",
    },
    distractors: [
      { en: "To set which users are included in the automation", fr: "To set which users are included in the automation" },
      { en: "To set which activities are included in the automation", fr: "To set which activities are included in the automation" },
      { en: "To set the activity that is included in the automation", fr: "To set the activity that is included in the automation" },
    ],
    explanation: {
      en: "Source Odoo Learn (Automation Rules): To set the period of time over which the chosen KPIs are calculated",
      fr: "Source Odoo Learn (Automation Rules): To set the period of time over which the chosen KPIs are calculated",
    },
  }),
  complexQ({
    id: "sub-016",
    module: "subscription",
    text: {
      en: "Where do I go to enable self-service options? (Odoo Learn — Self-Service Subscriptions)",
      fr: "Where do I go to enable self-service options? (Odoo Learn — Self-Service Subscriptions)",
    },
    correct: {
      en: "Subscriptions > Configuration > Recurring Plans",
      fr: "Subscriptions > Configuration > Recurring Plans",
    },
    distractors: [
      { en: "Subscriptions > Products > Self-Service", fr: "Subscriptions > Products > Self-Service" },
      { en: "Subscriptions > Sales Order > Self-Service Tab", fr: "Subscriptions > Sales Order > Self-Service Tab" },
      { en: "Subscriptions > Configuration > Subscriptions Self-Service", fr: "Subscriptions > Configuration > Subscriptions Self-Service" },
    ],
    explanation: {
      en: "Source Odoo Learn (Self-Service Subscriptions): Subscriptions > Configuration > Recurring Plans",
      fr: "Source Odoo Learn (Self-Service Subscriptions): Subscriptions > Configuration > Recurring Plans",
    },
  }),
  complexQ({
    id: "sub-017",
    module: "subscription",
    text: {
      en: "Which self-service option should I enable, so the customer can renew their subscription on their own? (Odoo Learn — Self-Service Subscriptions)",
      fr: "Which self-service option should I enable, so the customer can renew their subscription on their own? (Odoo Learn — Self-Service Subscriptions)",
    },
    correct: {
      en: "Renew",
      fr: "Renew",
    },
    distractors: [
      { en: "Closable", fr: "Closable" },
      { en: "Refresh", fr: "Refresh" },
      { en: "There is no self-service option to allow customers to renew their own subscriptions", fr: "There is no self-service option to allow customers to renew their own subscriptions" },
    ],
    explanation: {
      en: "Source Odoo Learn (Self-Service Subscriptions): Renew",
      fr: "Source Odoo Learn (Self-Service Subscriptions): Renew",
    },
  }),
  complexQ({
    id: "sub-018",
    module: "subscription",
    text: {
      en: "Where do I check what the self-service options look like for customers? (Odoo Learn — Self-Service Subscriptions)",
      fr: "Where do I check what the self-service options look like for customers? (Odoo Learn — Self-Service Subscriptions)",
    },
    correct: {
      en: "Subscriptions > Subscriptions > Select active subscription > Customer preview",
      fr: "Subscriptions > Subscriptions > Select active subscription > Customer preview",
    },
    distractors: [
      { en: "Subscriptions > Customer Preview", fr: "Subscriptions > Customer Preview" },
      { en: "Subscriptions > Configuration > Recurring Plans > Customer Preview", fr: "Subscriptions > Configuration > Recurring Plans > Customer Preview" },
      { en: "There is no way to check what the self-service options look like for customers", fr: "There is no way to check what the self-service options look like for customers" },
    ],
    explanation: {
      en: "Source Odoo Learn (Self-Service Subscriptions): Subscriptions > Subscriptions > Select active subscription > Customer preview",
      fr: "Source Odoo Learn (Self-Service Subscriptions): Subscriptions > Subscriptions > Select active subscription > Customer preview",
    },
  }),
  complexQ({
    id: "sub-019",
    module: "subscription",
    text: {
      en: "Where do I find the list of scheduled actions? (Odoo Learn — Scheduled actions in Subscriptions)",
      fr: "Where do I find the list of scheduled actions? (Odoo Learn — Scheduled actions in Subscriptions)",
    },
    correct: {
      en: "Settings app > Technical > Scheduled Actions",
      fr: "Settings app > Technical > Scheduled Actions",
    },
    distractors: [
      { en: "Subscriptions app > Automations > Scheduled Actions", fr: "Subscriptions app > Automations > Scheduled Actions" },
      { en: "Settings app > Automations > Scheduled Actions", fr: "Settings app > Automations > Scheduled Actions" },
      { en: "Sales app > Technical > Scheduled Actions", fr: "Sales app > Technical > Scheduled Actions" },
    ],
    explanation: {
      en: "Source Odoo Learn (Scheduled actions in Subscriptions): Settings app > Technical > Scheduled Actions",
      fr: "Source Odoo Learn (Scheduled actions in Subscriptions): Settings app > Technical > Scheduled Actions",
    },
  }),
  complexQ({
    id: "sub-020",
    module: "subscription",
    text: {
      en: "What does setting a negative number for the ‘Number of Calls’ field do? (Odoo Learn — Scheduled actions in Subscriptions)",
      fr: "What does setting a negative number for the ‘Number of Calls’ field do? (Odoo Learn — Scheduled actions in Subscriptions)",
    },
    correct: {
      en: "Causes the action to run indefinitely",
      fr: "Causes the action to run indefinitely",
    },
    distractors: [
      { en: "Causes the action to not run at all", fr: "Causes the action to not run at all" },
      { en: "Causes the action to undo its last scheduled action", fr: "Causes the action to undo its last scheduled action" },
      { en: "None of the above", fr: "Aucune des réponses ci-dessus" },
    ],
    explanation: {
      en: "Source Odoo Learn (Scheduled actions in Subscriptions): Causes the action to run indefinitely",
      fr: "Source Odoo Learn (Scheduled actions in Subscriptions): Causes the action to run indefinitely",
    },
  }),
  complexQ({
    id: "sub-021",
    module: "subscription",
    text: {
      en: "What does a priority of “0” mean? (Odoo Learn — Scheduled actions in Subscriptions)",
      fr: "What does a priority of “0” mean? (Odoo Learn — Scheduled actions in Subscriptions)",
    },
    correct: {
      en: "The action will have the highest priority",
      fr: "The action will have the highest priority",
    },
    distractors: [
      { en: "The action will have the lowest priority", fr: "The action will have the lowest priority" },
      { en: "The action will wait for all actions on the same model to run first", fr: "The action will wait for all actions on the same model to run first" },
      { en: "The action has no priority", fr: "The action has no priority" },
    ],
    explanation: {
      en: "Source Odoo Learn (Scheduled actions in Subscriptions): The action will have the highest priority",
      fr: "Source Odoo Learn (Scheduled actions in Subscriptions): The action will have the highest priority",
    },
  }),
  complexQ({
    id: "sub-022",
    module: "subscription",
    text: {
      en: "What view option should I choose if I want to see numerical data? (Odoo Learn — Subscriptions MRR Reports)",
      fr: "What view option should I choose if I want to see numerical data? (Odoo Learn — Subscriptions MRR Reports)",
    },
    correct: {
      en: "Pivot table",
      fr: "Pivot table",
    },
    distractors: [
      { en: "Bar graph", fr: "Bar graph" },
      { en: "Pie graph", fr: "Pie graph" },
      { en: "Line graph", fr: "Line graph" },
    ],
    explanation: {
      en: "Source Odoo Learn (Subscriptions MRR Reports): Pivot table",
      fr: "Source Odoo Learn (Subscriptions MRR Reports): Pivot table",
    },
  }),
  complexQ({
    id: "sub-023",
    module: "subscription",
    text: {
      en: "What’s the default unit value for the vertical axis in the MRR Breakdown report? (Odoo Learn — Subscriptions MRR Reports)",
      fr: "What’s the default unit value for the vertical axis in the MRR Breakdown report? (Odoo Learn — Subscriptions MRR Reports)",
    },
    correct: {
      en: "Currency",
      fr: "Currency",
    },
    distractors: [
      { en: "Time", fr: "Time" },
      { en: "Sales people", fr: "Sales people" },
      { en: "Product", fr: "Produit" },
    ],
    explanation: {
      en: "Source Odoo Learn (Subscriptions MRR Reports): Currency",
      fr: "Source Odoo Learn (Subscriptions MRR Reports): Currency",
    },
  }),
  complexQ({
    id: "sub-024",
    module: "subscription",
    text: {
      en: "By what default grouping does Odoo break down the Subscription Analysis report, on the pivot view’s vertical axis? (Odoo Learn — Subscriptions MRR Reports)",
      fr: "By what default grouping does Odoo break down the Subscription Analysis report, on the pivot view’s vertical axis? (Odoo Learn — Subscriptions MRR Reports)",
    },
    correct: {
      en: "Quotation template",
      fr: "Quotation template",
    },
    distractors: [
      { en: "Sales person", fr: "Sales person" },
      { en: "Subscription product", fr: "Subscription product" },
      { en: "Customer", fr: "Customer" },
    ],
    explanation: {
      en: "Source Odoo Learn (Subscriptions MRR Reports): Quotation template",
      fr: "Source Odoo Learn (Subscriptions MRR Reports): Quotation template",
    },
  }),
  complexQ({
    id: "sub-025",
    module: "subscription",
    text: {
      en: "To only view non-renewing plans in a report, which filter should be applied? (Odoo Learn — Subscriptions Behavioral Reports)",
      fr: "To only view non-renewing plans in a report, which filter should be applied? (Odoo Learn — Subscriptions Behavioral Reports)",
    },
    correct: {
      en: "Churned",
      fr: "Churned",
    },
    distractors: [
      { en: "In Progress", fr: "In Progress" },
      { en: "Lost", fr: "Lost" },
      { en: "Cancelled", fr: "Cancelled" },
    ],
    explanation: {
      en: "Source Odoo Learn (Subscriptions Behavioral Reports): Churned",
      fr: "Source Odoo Learn (Subscriptions Behavioral Reports): Churned",
    },
  }),
  complexQ({
    id: "sub-026",
    module: "subscription",
    text: {
      en: "What does grouping by 'Product' help identify? (Odoo Learn — Subscriptions Behavioral Reports)",
      fr: "What does grouping by 'Product' help identify? (Odoo Learn — Subscriptions Behavioral Reports)",
    },
    correct: {
      en: "Best-performing subscription offerings",
      fr: "Best-performing subscription offerings",
    },
    distractors: [
      { en: "Supplier issues", fr: "Supplier issues" },
      { en: "Most profitable employees", fr: "Most profitable employees" },
      { en: "Customer loyalty trends", fr: "Customer loyalty trends" },
    ],
    explanation: {
      en: "Source Odoo Learn (Subscriptions Behavioral Reports): Best-performing subscription offerings",
      fr: "Source Odoo Learn (Subscriptions Behavioral Reports): Best-performing subscription offerings",
    },
  }),
  complexQ({
    id: "sub-027",
    module: "subscription",
    text: {
      en: "Where in Odoo can you find an overview of all active subscriptions? (Odoo Learn — Subscriptions Behavioral Reports)",
      fr: "Where in Odoo can you find an overview of all active subscriptions? (Odoo Learn — Subscriptions Behavioral Reports)",
    },
    correct: {
      en: "Subscriptions dashboard",
      fr: "Subscriptions dashboard",
    },
    distractors: [
      { en: "Sales Orders dashboard", fr: "Sales Orders dashboard" },
      { en: "MRR Timeline", fr: "MRR Timeline" },
      { en: "Product Catalog", fr: "Product Catalog" },
    ],
    explanation: {
      en: "Source Odoo Learn (Subscriptions Behavioral Reports): Subscriptions dashboard",
      fr: "Source Odoo Learn (Subscriptions Behavioral Reports): Subscriptions dashboard",
    },
  }),
  complexQ({
    id: "sub-028",
    module: "subscription",
    text: {
      en: "Why do you need the Inventory app for subscriptions with deliveries? (Odoo Learn — Subscriptions with Deliveries)",
      fr: "Why do you need the Inventory app for subscriptions with deliveries? (Odoo Learn — Subscriptions with Deliveries)",
    },
    correct: {
      en: "The Inventory app allows me to add shipping information to quotations and automatically create delivery orders.",
      fr: "The Inventory app allows me to add shipping information to quotations and automatically create delivery orders.",
    },
    distractors: [
      { en: "I can’t ship any products unless I have a minimum number of them in my inventory.", fr: "I can’t ship any products unless I have a minimum number of them in my inventory." },
      { en: "All subscriptions require a physical product whose warehouse location is tracked in Inventory.", fr: "All subscriptions require a physical product whose warehouse location is tracked in Inventory." },
      { en: "The Inventory app is not needed for handling deliveries. I need the Delivery app.", fr: "The Inventory app is not needed for handling deliveries. I need the Delivery app." },
    ],
    explanation: {
      en: "Source Odoo Learn (Subscriptions with Deliveries): The Inventory app allows me to add shipping information to quotations and automatically create delivery orders.",
      fr: "Source Odoo Learn (Subscriptions with Deliveries): The Inventory app allows me to add shipping information to quotations and automatically create delivery orders.",
    },
  }),
  complexQ({
    id: "sub-029",
    module: "subscription",
    text: {
      en: "What information on a product form is NOT needed for it to be used in a subscription with deliveries? (Odoo Learn — Subscriptions with Deliveries)",
      fr: "What information on a product form is NOT needed for it to be used in a subscription with deliveries? (Odoo Learn — Subscriptions with Deliveries)",
    },
    correct: {
      en: "You must have set a barcode for the product so you can track it.",
      fr: "You must have set a barcode for the product so you can track it.",
    },
    distractors: [
      { en: "The Subscriptions checkbox beneath the product’s name must be ticked.", fr: "The Subscriptions checkbox beneath the product’s name must be ticked." },
      { en: "A recurring plan must be set in the “Recurring prices” tab.", fr: "A recurring plan must be set in the “Recurring prices” tab." },
      { en: "Its Product Type must not be set to Service, since you can’t physically ship a service.", fr: "Its Product Type must not be set to Service, since you can’t physically ship a service." },
    ],
    explanation: {
      en: "Source Odoo Learn (Subscriptions with Deliveries): You must have set a barcode for the product so you can track it.",
      fr: "Source Odoo Learn (Subscriptions with Deliveries): You must have set a barcode for the product so you can track it.",
    },
  }),
  complexQ({
    id: "sub-030",
    module: "subscription",
    text: {
      en: "When creating or editing a delivery method for a subscription product, which app do you use? (Odoo Learn — Subscriptions with Deliveries)",
      fr: "When creating or editing a delivery method for a subscription product, which app do you use? (Odoo Learn — Subscriptions with Deliveries)",
    },
    correct: {
      en: "The Inventory app.",
      fr: "The Inventory app.",
    },
    distractors: [
      { en: "The Subscriptions app.", fr: "The Subscriptions app." },
      { en: "The Delivery app.", fr: "The Delivery app." },
      { en: "The Settings app.", fr: "The Settings app." },
    ],
    explanation: {
      en: "Source Odoo Learn (Subscriptions with Deliveries): The Inventory app.",
      fr: "Source Odoo Learn (Subscriptions with Deliveries): The Inventory app.",
    },
  }),
  mcq3Q({
    id: "sub-031",
    module: "subscription",
    text: {
      en: "What are recurrence periods? (Odoo Learn — Subscription Basics)",
      fr: "What are recurrence periods? (Odoo Learn — Subscription Basics)",
    },
    correct: {
      en: "The time periods in which subscriptions renew.",
      fr: "The time periods in which subscriptions renew.",
    },
    distractors: [
      { en: "The number of times a customer purchases a subscription.", fr: "The number of times a customer purchases a subscription." },
      { en: "The time periods in which subscription products are created.", fr: "The time periods in which subscription products are created." },
    ],
    explanation: {
      en: "Source Odoo Learn (Subscription Basics): The time periods in which subscriptions renew.",
      fr: "Source Odoo Learn (Subscription Basics): The time periods in which subscriptions renew.",
    },
  }),
  mcq3Q({
    id: "sub-032",
    module: "subscription",
    text: {
      en: "Where do you configure subscription pricing? (Odoo Learn — Subscription Basics)",
      fr: "Where do you configure subscription pricing? (Odoo Learn — Subscription Basics)",
    },
    correct: {
      en: "In the “Time-based pricing” tab of the product form.",
      fr: "In the “Time-based pricing” tab of the product form.",
    },
    distractors: [
      { en: "In the “General Information” tab of the product form.", fr: "In the “General Information” tab of the product form." },
      { en: "On the “Subscriptions Pricing” page in the Configuration menu.", fr: "On the “Subscriptions Pricing” page in the Configuration menu." },
    ],
    explanation: {
      en: "Source Odoo Learn (Subscription Basics): In the “Time-based pricing” tab of the product form.",
      fr: "Source Odoo Learn (Subscription Basics): In the “Time-based pricing” tab of the product form.",
    },
  }),
  mcq3Q({
    id: "sub-033",
    module: "subscription",
    text: {
      en: "How do you specify that a product is a subscription product? (Odoo Learn — Subscription Basics)",
      fr: "How do you specify that a product is a subscription product? (Odoo Learn — Subscription Basics)",
    },
    correct: {
      en: "Check the “Recurring” box on the product page.",
      fr: "Check the “Recurring” box on the product page.",
    },
    distractors: [
      { en: "Check the “Can be Sold” box on the product page.", fr: "Check the “Can be Sold” box on the product page." },
      { en: "Check the “Can be Purchased” box on the product page.", fr: "Check the “Can be Purchased” box on the product page." },
    ],
    explanation: {
      en: "Source Odoo Learn (Subscription Basics): Check the “Recurring” box on the product page.",
      fr: "Source Odoo Learn (Subscription Basics): Check the “Recurring” box on the product page.",
    },
  }),
  mcq3Q({
    id: "sub-034",
    module: "subscription",
    text: {
      en: "How do you turn a sales order into a subscription order? (Odoo Learn — Subscription Basics)",
      fr: "How do you turn a sales order into a subscription order? (Odoo Learn — Subscription Basics)",
    },
    correct: {
      en: "Add a “Recurrence” to the sales order.",
      fr: "Add a “Recurrence” to the sales order.",
    },
    distractors: [
      { en: "Add multiple products to the sales order.", fr: "Add multiple products to the sales order." },
      { en: "Add “Payment Terms” to the sales order.", fr: "Add “Payment Terms” to the sales order." },
    ],
    explanation: {
      en: "Source Odoo Learn (Subscription Basics): Add a “Recurrence” to the sales order.",
      fr: "Source Odoo Learn (Subscription Basics): Add a “Recurrence” to the sales order.",
    },
  }),
];
