import { complexQ, mcq3Q } from "../helpers";

/** Questions Odoo Learn — modules complémentaires (hors certification) */
export const rentalSupplementaryQuestions = [
  complexQ({
    id: "rtl-001",
    module: "rental",
    text: {
      en: "Where can I find all the rental statuses and invoices? (Odoo Learn — Configuring a Rental Product)",
      fr: "Where can I find all the rental statuses and invoices? (Odoo Learn — Configuring a Rental Product)",
    },
    correct: {
      en: "In the Rental app on the Rental Orders dashboard, in the sidebar.",
      fr: "In the Rental app on the Rental Orders dashboard, in the sidebar.",
    },
    distractors: [
      { en: "In the Rental app, by clicking Orders > Rental invoices.", fr: "In the Rental app, by clicking Orders > Rental invoices." },
      { en: "On the individual rental order cards on the Rental Orders dashboard.", fr: "On the individual rental order cards on the Rental Orders dashboard." },
      { en: "In the Sales app, by clicking Orders > Rental invoices.", fr: "In the Sales app, by clicking Orders > Rental invoices." },
    ],
    explanation: {
      en: "Source Odoo Learn (Configuring a Rental Product): In the Rental app on the Rental Orders dashboard, in the sidebar.",
      fr: "Source Odoo Learn (Configuring a Rental Product): In the Rental app on the Rental Orders dashboard, in the sidebar.",
    },
  }),
  complexQ({
    id: "rtl-002",
    module: "rental",
    text: {
      en: "Can I create a new rental period? (Odoo Learn — Configuring a Rental Product)",
      fr: "Can I create a new rental period? (Odoo Learn — Configuring a Rental Product)",
    },
    correct: {
      en: "Yes, by going to Rental app > Configuration > Rental periods.",
      fr: "Yes, by going to Rental app > Configuration > Rental periods.",
    },
    distractors: [
      { en: "No, you can’t create any new rental periods.", fr: "No, you can’t create any new rental periods." },
      { en: "You can only modify current rental periods, not create new ones.", fr: "You can only modify current rental periods, not create new ones." },
      { en: "Yes, by going to Rental app > Configuration > Settings.", fr: "Yes, by going to Rental app > Configuration > Settings." },
    ],
    explanation: {
      en: "Source Odoo Learn (Configuring a Rental Product): Yes, by going to Rental app > Configuration > Rental periods.",
      fr: "Source Odoo Learn (Configuring a Rental Product): Yes, by going to Rental app > Configuration > Rental periods.",
    },
  }),
  complexQ({
    id: "rtl-003",
    module: "rental",
    text: {
      en: "What happens if I try to rent a product that is already reserved? (Odoo Learn — Configuring a Rental Product)",
      fr: "What happens if I try to rent a product that is already reserved? (Odoo Learn — Configuring a Rental Product)",
    },
    correct: {
      en: "Due to the reserve hold, I can’t rent the product.",
      fr: "Due to the reserve hold, I can’t rent the product.",
    },
    distractors: [
      { en: "I can still rent out the product.", fr: "I can still rent out the product." },
      { en: "The product is automatically reserved for the customer with the highest rental price.", fr: "The product is automatically reserved for the customer with the highest rental price." },
      { en: "I can still rent the product if the customer returns the product early.", fr: "I can still rent the product if the customer returns the product early." },
    ],
    explanation: {
      en: "Source Odoo Learn (Configuring a Rental Product): Due to the reserve hold, I can’t rent the product.",
      fr: "Source Odoo Learn (Configuring a Rental Product): Due to the reserve hold, I can’t rent the product.",
    },
  }),
  mcq3Q({
    id: "rtl-004",
    module: "rental",
    text: {
      en: "What does the clock icon mean when returning a product? (Odoo Learn — Planning and Reporting)",
      fr: "What does the clock icon mean when returning a product? (Odoo Learn — Planning and Reporting)",
    },
    correct: {
      en: "It indicates a late return.",
      fr: "It indicates a late return.",
    },
    distractors: [
      { en: "There is only one day left to return the product.", fr: "There is only one day left to return the product." },
      { en: "You can check the rental duration by clicking on it.", fr: "You can check the rental duration by clicking on it." },
    ],
    explanation: {
      en: "Source Odoo Learn (Planning and Reporting): It indicates a late return.",
      fr: "Source Odoo Learn (Planning and Reporting): It indicates a late return.",
    },
  }),
  mcq3Q({
    id: "rtl-005",
    module: "rental",
    text: {
      en: "From the \"Schedule\" menu, how to know products have been returned? (Odoo Learn — Planning and Reporting)",
      fr: "From the \"Schedule\" menu, how to know products have been returned? (Odoo Learn — Planning and Reporting)",
    },
    correct: {
      en: "The bar related to the order is in another color, and a tooltip says \"Returned\"",
      fr: "The bar related to the order is in another color, and a tooltip says \"Returned\"",
    },
    distractors: [
      { en: "Returned products no longer appear in the schedule.", fr: "Returned products no longer appear in the schedule." },
      { en: "It is not possible.", fr: "It is not possible." },
    ],
    explanation: {
      en: "Source Odoo Learn (Planning and Reporting): The bar related to the order is in another color, and a tooltip says \"Returned\"",
      fr: "Source Odoo Learn (Planning and Reporting): The bar related to the order is in another color, and a tooltip says \"Returned\"",
    },
  }),
  complexQ({
    id: "rtl-006",
    module: "rental",
    text: {
      en: "What should I do to view the rental orders with pickups or returns due today? (Odoo Learn — Create a Rental Order)",
      fr: "What should I do to view the rental orders with pickups or returns due today? (Odoo Learn — Create a Rental Order)",
    },
    correct: {
      en: "On the Rental Dashboard, click in the search bar and select To Do Today filter.",
      fr: "On the Rental Dashboard, click in the search bar and select To Do Today filter.",
    },
    distractors: [
      { en: "Open the Rental app, click in the search bar, and enable My Orders.", fr: "Open the Rental app, click in the search bar, and enable My Orders." },
      { en: "In the rental order, click the Action icon, then select Task Tracking.", fr: "In the rental order, click the Action icon, then select Task Tracking." },
      { en: "On the Rental Dashboard, in the left-hand sidebar, enable Reserved, PickedUp, and Returned in the Rental Status section.", fr: "On the Rental Dashboard, in the left-hand sidebar, enable Reserved, PickedUp, and Returned in the Rental Status section." },
    ],
    explanation: {
      en: "Source Odoo Learn (Create a Rental Order): On the Rental Dashboard, click in the search bar and select To Do Today filter.",
      fr: "Source Odoo Learn (Create a Rental Order): On the Rental Dashboard, click in the search bar and select To Do Today filter.",
    },
  }),
  complexQ({
    id: "rtl-007",
    module: "rental",
    text: {
      en: "What happens if I change the rental period on a rental order after adding a product to it? (Odoo Learn — Create a Rental Order)",
      fr: "What happens if I change the rental period on a rental order after adding a product to it? (Odoo Learn — Create a Rental Order)",
    },
    correct: {
      en: "I need to click the Update Rental Prices button to recalculate the total.",
      fr: "I need to click the Update Rental Prices button to recalculate the total.",
    },
    distractors: [
      { en: "The order will be reset, and I need to add the product back to it.", fr: "The order will be reset, and I need to add the product back to it." },
      { en: "The order will automatically update the total amount.", fr: "The order will automatically update the total amount." },
      { en: "I will receive a warning pop-up telling me to re-add the products to adjust the total.", fr: "I will receive a warning pop-up telling me to re-add the products to adjust the total." },
    ],
    explanation: {
      en: "Source Odoo Learn (Create a Rental Order): I need to click the Update Rental Prices button to recalculate the total.",
      fr: "Source Odoo Learn (Create a Rental Order): I need to click the Update Rental Prices button to recalculate the total.",
    },
  }),
  complexQ({
    id: "rtl-008",
    module: "rental",
    text: {
      en: "What are the Rental app’s pricing computation rules? (Odoo Learn — Create a Rental Order)",
      fr: "What are the Rental app’s pricing computation rules? (Odoo Learn — Create a Rental Order)",
    },
    correct: {
      en: "It uses only one pricing rule per rental duration and always picks the cheapest one.",
      fr: "It uses only one pricing rule per rental duration and always picks the cheapest one.",
    },
    distractors: [
      { en: "It will always pick the cheapest option by rounding up the rental duration period.", fr: "It will always pick the cheapest option by rounding up the rental duration period." },
      { en: "It will pick the cheapest option and will use more than one pricing rule.", fr: "It will pick the cheapest option and will use more than one pricing rule." },
      { en: "It will select the option that best covers the rental duration and gives the business the option to choose between the two cheapest options.", fr: "It will select the option that best covers the rental duration and gives the business the option to choose between the two cheapest options." },
    ],
    explanation: {
      en: "Source Odoo Learn (Create a Rental Order): It uses only one pricing rule per rental duration and always picks the cheapest one.",
      fr: "Source Odoo Learn (Create a Rental Order): It uses only one pricing rule per rental duration and always picks the cheapest one.",
    },
  }),
  complexQ({
    id: "rtl-009",
    module: "rental",
    text: {
      en: "How do I select the check-in/check-out time when booking a hotel room on the website? (Odoo Learn — Hotel Booking)",
      fr: "How do I select the check-in/check-out time when booking a hotel room on the website? (Odoo Learn — Hotel Booking)",
    },
    correct: {
      en: "I can’t.  I can only select dates from the website.",
      fr: "I can’t.  I can only select dates from the website.",
    },
    distractors: [
      { en: "In the calendar pop-up, I can select the times.", fr: "In the calendar pop-up, I can select the times." },
      { en: "I can select a later check-in time option from the room page.", fr: "I can select a later check-in time option from the room page." },
      { en: "At the checkout page.", fr: "At the checkout page." },
    ],
    explanation: {
      en: "Source Odoo Learn (Hotel Booking): I can’t.  I can only select dates from the website.",
      fr: "Source Odoo Learn (Hotel Booking): I can’t.  I can only select dates from the website.",
    },
  }),
  complexQ({
    id: "rtl-010",
    module: "rental",
    text: {
      en: "How can I add extra service charges to an online rental booking’s invoice? (Odoo Learn — Hotel Booking)",
      fr: "How can I add extra service charges to an online rental booking’s invoice? (Odoo Learn — Hotel Booking)",
    },
    correct: {
      en: "On the draft invoice, add the extra service charges before confirming.",
      fr: "On the draft invoice, add the extra service charges before confirming.",
    },
    distractors: [
      { en: "Add the extra charges to the rental order.", fr: "Add the extra charges to the rental order." },
      { en: "The additional charges are automatically added to the rental order.", fr: "The additional charges are automatically added to the rental order." },
      { en: "Create a separate rental order for the additional service charges.", fr: "Create a separate rental order for the additional service charges." },
    ],
    explanation: {
      en: "Source Odoo Learn (Hotel Booking): On the draft invoice, add the extra service charges before confirming.",
      fr: "Source Odoo Learn (Hotel Booking): On the draft invoice, add the extra service charges before confirming.",
    },
  }),
  complexQ({
    id: "rtl-011",
    module: "rental",
    text: {
      en: "Can I add another room to my reservation using the Planning smart button? (Odoo Learn — Hotel Booking)",
      fr: "Can I add another room to my reservation using the Planning smart button? (Odoo Learn — Hotel Booking)",
    },
    correct: {
      en: "Yes, I can click the Planning smart button and click New on the Schedule by Resource view.",
      fr: "Yes, I can click the Planning smart button and click New on the Schedule by Resource view.",
    },
    distractors: [
      { en: "No, the Planning smart button takes me to a static calendar view of all confirmed rental bookings.", fr: "No, the Planning smart button takes me to a static calendar view of all confirmed rental bookings." },
      { en: "Yes, I can click the Planning smart button, and it’ll take me to the Rental app’s Scheduled Rentals calendar.", fr: "Yes, I can click the Planning smart button, and it’ll take me to the Rental app’s Scheduled Rentals calendar." },
      { en: "No, the Planning app is a separate app from Rental.", fr: "No, the Planning app is a separate app from Rental." },
    ],
    explanation: {
      en: "Source Odoo Learn (Hotel Booking): Yes, I can click the Planning smart button and click New on the Schedule by Resource view.",
      fr: "Source Odoo Learn (Hotel Booking): Yes, I can click the Planning smart button and click New on the Schedule by Resource view.",
    },
  }),
];
