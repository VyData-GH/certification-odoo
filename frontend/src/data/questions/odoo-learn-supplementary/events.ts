import { complexQ } from "../helpers";

/** Questions Odoo Learn — modules complémentaires (hors certification) */
export const eventsSupplementaryQuestions = [
  complexQ({
    id: "evt-001",
    module: "events",
    text: {
      en: "What feature must be enabled if you want to sell event tickets through your website? (Odoo Learn — Events Basics)",
      fr: "Quelle fonctionnalité doit être activée si vous souhaitez vendre des billets d'événement via votre site Web ? (Odoo Learn — Notions de base sur les événements)",
    },
    correct: {
      en: "Online Ticketing",
      fr: "Billetterie en ligne",
    },
    distractors: [
      { en: "Tickets", fr: "Billets" },
      { en: "Sales", fr: "Ventes" },
      { en: "None of the above", fr: "Aucune des réponses ci-dessus" },
    ],
    explanation: {
      en: "Source Odoo Learn (Events Basics): Online Ticketing",
      fr: "Source Odoo Learn (Bases des événements) : Billetterie en ligne",
    },
  }),
  complexQ({
    id: "evt-002",
    module: "events",
    text: {
      en: "What configuration should I have enabled in Events Settings if I want to schedule a lecture or presentations during my event? (Odoo Learn — Events Basics)",
      fr: "Quelle configuration dois-je avoir activée dans les paramètres des événements si je souhaite planifier une conférence ou des présentations pendant mon événement ? (Odoo Learn — Notions de base sur les événements)",
    },
    correct: {
      en: "Schedule & Tracks",
      fr: "Calendrier et pistes",
    },
    distractors: [
      { en: "Lectures & Presentations", fr: "Conférences et présentations" },
      { en: "Advanced Events", fr: "Événements avancés" },
      { en: "You are not allowed to schedule lectures and presentations during Odoo Events.", fr: "Vous n'êtes pas autorisé à programmer des conférences et des présentations lors des événements Odoo." },
    ],
    explanation: {
      en: "Source Odoo Learn (Events Basics): Schedule & Tracks",
      fr: "Source Odoo Learn (bases des événements) : calendrier et pistes",
    },
  }),
  complexQ({
    id: "evt-003",
    module: "events",
    text: {
      en: "How do I set up a limited registration window for ticket sales? (Odoo Learn — Events Basics)",
      fr: "Comment puis-je configurer une fenêtre d'inscription limitée pour la vente de billets ? (Odoo Learn — Notions de base sur les événements)",
    },
    correct: {
      en: "In the ‘Tickets’ tab, create a ‘Product’ line for the ticket registration. Set the start date of the registration window under ‘Sales Start’ and the end date under ‘Sales End’.",
      fr: "Dans l'onglet « Billets », créez une ligne « Produit » pour l'enregistrement du billet. Définissez la date de début de la fenêtre d’inscription sous « Début des ventes » et la date de fin sous « Fin des ventes ».",
    },
    distractors: [
      { en: "In the ‘Notes’ tab, use the calendar to enter the start and end date for ticket registration.", fr: "Dans l'onglet « Notes », utilisez le calendrier pour saisir la date de début et de fin de l'enregistrement des billets." },
      { en: "In the ‘Notes tab, enter the start and end date for ticket registration under the ‘Ticket Instructions’ field.", fr: "Dans l'onglet « Notes », saisissez la date de début et de fin de l'enregistrement du billet dans le champ « Instructions pour le billet »." },
      { en: "In the ‘Tickets’ tab, create a ‘Product’ line for the ticket registration. Set the start and end dates by typing them in under ‘Name’.", fr: "Dans l'onglet « Billets », créez une ligne « Produit » pour l'enregistrement du billet. Définissez les dates de début et de fin en les saisissant sous « Nom »." },
    ],
    explanation: {
      en: "Source Odoo Learn (Events Basics): In the ‘Tickets’ tab, create a ‘Product’ line for the ticket registration. Set the start date of the registration window under ‘Sales Start’ and the end date under ‘Sales End’.",
      fr: "Source Odoo Learn (Bases des événements) : Dans l'onglet « Billets », créez une ligne « Produit » pour l'enregistrement du billet. Définissez la date de début de la fenêtre d’inscription sous « Début des ventes » et la date de fin sous « Fin des ventes ».",
    },
  }),
  complexQ({
    id: "evt-004",
    module: "events",
    text: {
      en: "What does the “Trigger” field in the Communication tab do? (Odoo Learn — Communication & Attendance)",
      fr: "À quoi sert le champ « Déclencheur » dans l'onglet Communication ? (Odoo Learn — Communication et présence)",
    },
    correct: {
      en: "Specifies when a communication should be sent to the attendee.",
      fr: "Spécifie quand une communication doit être envoyée au participant.",
    },
    distractors: [
      { en: "Specifies which communication mode should be sent to the attendee.", fr: "Spécifie quel mode de communication doit être envoyé au participant." },
      { en: "Sends a communication to the attendee after registration.", fr: "Envoie une communication au participant après l’inscription." },
      { en: "Sets a maximum number of communications that can be sent to attendees.", fr: "Définit un nombre maximum de communications pouvant être envoyées aux participants." },
    ],
    explanation: {
      en: "Source Odoo Learn (Communication & Attendance): Specifies when a communication should be sent to the attendee.",
      fr: "Source Odoo Learn (Communication & Attendance) : Spécifie quand une communication doit être envoyée au participant.",
    },
  }),
  complexQ({
    id: "evt-005",
    module: "events",
    text: {
      en: "What means of communication can you choose to inform an attendee of their registration confirmation directly? (Odoo Learn — Communication & Attendance)",
      fr: "Quel moyen de communication pouvez-vous choisir pour informer directement un participant de sa confirmation d’inscription ? (Odoo Learn — Communication et présence)",
    },
    correct: {
      en: "Mail and SMS.",
      fr: "Courrier et SMS.",
    },
    distractors: [
      { en: "Mail.", fr: "Mail." },
      { en: "SMS and letters.", fr: "SMS et lettres." },
      { en: "Mail and a confirmation page.", fr: "Courrier et une page de confirmation." },
    ],
    explanation: {
      en: "Source Odoo Learn (Communication & Attendance): Mail and SMS.",
      fr: "Source Odoo Learn (Communication & Présence) : Mail et SMS.",
    },
  }),
  complexQ({
    id: "evt-006",
    module: "events",
    text: {
      en: "What is needed for the “SMS” send option to work properly? (Odoo Learn — Communication & Attendance)",
      fr: "Que faut-il pour que l'option d'envoi « SMS » fonctionne correctement ? (Odoo Learn — Communication et présence)",
    },
    correct: {
      en: "An activated IAP account with the proper credentials & Odoo credits.",
      fr: "Un compte IAP activé avec les informations d'identification et les crédits Odoo appropriés.",
    },
    distractors: [
      { en: "A special admin phone number.", fr: "Un numéro de téléphone administrateur spécial." },
      { en: "A direct wireless plug-in on your browser.", fr: "Un plug-in sans fil direct sur votre navigateur." },
      { en: "It’s impossible.", fr: "C'est impossible." },
    ],
    explanation: {
      en: "Source Odoo Learn (Communication & Attendance): An activated IAP account with the proper credentials & Odoo credits.",
      fr: "Source Odoo Learn (Communication et présence) : Un compte IAP activé avec les informations d'identification et les crédits Odoo appropriés.",
    },
  }),
  complexQ({
    id: "evt-007",
    module: "events",
    text: {
      en: "Where can you find your country’s keyboard barcode for USB Scanners? (Odoo Learn — Attendance by Barcode)",
      fr: "Où pouvez-vous trouver le code-barres du clavier de votre pays pour les scanners USB ? (Odoo Learn — Participation par code-barres)",
    },
    correct: {
      en: "Odoo User Documentation",
      fr: "Documentation utilisateur Odoo",
    },
    distractors: [
      { en: "Odoo Technical Documentation", fr: "Documentation technique Odoo" },
      { en: "Odoo USB Documentation", fr: "Documentation USB Odoo" },
      { en: "Odoo Localization Documentation", fr: "Documentation de localisation Odoo" },
    ],
    explanation: {
      en: "Source Odoo Learn (Attendance by Barcode): Odoo User Documentation",
      fr: "Source Odoo Learn (Participation par code-barres) : Documentation utilisateur Odoo",
    },
  }),
  complexQ({
    id: "evt-008",
    module: "events",
    text: {
      en: "Where can you enable the Barcode feature for event check-ins? (Odoo Learn — Attendance by Barcode)",
      fr: "Où pouvez-vous activer la fonctionnalité de code-barres pour les enregistrements d'événements ? (Odoo Learn — Participation par code-barres)",
    },
    correct: {
      en: "Under Configuration → Settings, in the Events application",
      fr: "Sous Configuration → Paramètres, dans l'application Événements",
    },
    distractors: [
      { en: "Under Configuration → Settings, in the General Settings", fr: "Sous Configuration → Paramètres, dans les Paramètres généraux" },
      { en: "Under Configuration → Settings, in the Inventory application", fr: "Sous Configuration → Paramètres, dans l'application Inventaire" },
      { en: "Under Configuration → Settings, in the Barcode application", fr: "Sous Configuration → Paramètres, dans l'application Code-barres" },
    ],
    explanation: {
      en: "Source Odoo Learn (Attendance by Barcode): Under Configuration → Settings, in the Events application",
      fr: "Source Odoo Learn (Participation par code-barres) : Sous Configuration → Paramètres, dans l'application Événements",
    },
  }),
  complexQ({
    id: "evt-009",
    module: "events",
    text: {
      en: "After an attendee is checked in, their registration status moves from ‘Confirmed’ to… (Odoo Learn — Attendance by Barcode)",
      fr: "Une fois qu’un participant est enregistré, son statut d’inscription passe de « Confirmé » à… (Odoo Learn — Participation par code-barres)",
    },
    correct: {
      en: "Attended",
      fr: "Participé",
    },
    distractors: [
      { en: "Present", fr: "Présent" },
      { en: "Complete", fr: "Complet" },
      { en: "Done", fr: "Fait" },
    ],
    explanation: {
      en: "Source Odoo Learn (Attendance by Barcode): Attended",
      fr: "Source Odoo Learn (Participation par code-barres) : Participé",
    },
  }),
  complexQ({
    id: "evt-010",
    module: "events",
    text: {
      en: "What additional options appear on the Events Settings page when the ‘Schedule & Tracks` setting is enabled? (Odoo Learn — Event Tracks)",
      fr: "Quelles options supplémentaires apparaissent sur la page Paramètres des événements lorsque le paramètre « Planification et suivis » est activé ? (Odoo Learn — Pistes d'événements)",
    },
    correct: {
      en: "Live Broadcast & Event Gamification",
      fr: "Diffusion en direct et gamification d'événements",
    },
    distractors: [
      { en: "YouTube Stream & Track Quiz", fr: "Quiz de diffusion et de suivi YouTube" },
      { en: "Live Quiz & Broadcast Gamification", fr: "Quiz en direct et gamification de diffusion" },
      { en: "Quiz Gamification & Broadcast Stream", fr: "Gamification et flux de diffusion de quiz" },
    ],
    explanation: {
      en: "Source Odoo Learn (Event Tracks): Live Broadcast & Event Gamification",
      fr: "Source Odoo Learn (Pistes d'événements) : diffusion en direct et gamification d'événements",
    },
  }),
  complexQ({
    id: "evt-011",
    module: "events",
    text: {
      en: "On an event-specific tracks page (via ‘Tracks’ smart button on an event form), what do the stages of the default Kanban view represent? (Odoo Learn — Event Tracks)",
      fr: "Sur une page de pistes spécifiques à un événement (via le bouton intelligent « Pistes » sur un formulaire d'événement), que représentent les étapes de la vue Kanban par défaut ? (Odoo Learn — Pistes d'événements)",
    },
    correct: {
      en: "Different statuses",
      fr: "Différents statuts",
    },
    distractors: [
      { en: "Different locations", fr: "Différents emplacements" },
      { en: "Different speakers", fr: "Différents intervenants" },
      { en: "Different ticket prices", fr: "Différents prix des billets" },
    ],
    explanation: {
      en: "Source Odoo Learn (Event Tracks): Different statuses",
      fr: "Source Odoo Learn (Event Tracks) : Différents statuts",
    },
  }),
  complexQ({
    id: "evt-012",
    module: "events",
    text: {
      en: "What happens when the ‘Magic Button’ option is enabled? (Odoo Learn — Event Tracks)",
      fr: "Que se passe-t-il lorsque l'option « Bouton magique » est activée ? (Odoo Learn — Pistes d'événements)",
    },
    correct: {
      en: "A custom call-to-action button is displayed to attendees while they view the track",
      fr: "Un bouton d'appel à l'action personnalisé s'affiche pour les participants pendant qu'ils consultent la piste",
    },
    distractors: [
      { en: "Event attendees get the chance for a free event registration", fr: "Les participants à l'événement ont la possibilité de s'inscrire gratuitement à l'événement" },
      { en: "Attendees can propose a different talk to occur during the event", fr: "Les participants peuvent proposer une conférence différente à avoir lieu pendant l'événement" },
      { en: "Attendees can ask a question to the person hosting the track", fr: "Les participants peuvent poser une question à la personne qui organise la piste" },
    ],
    explanation: {
      en: "Source Odoo Learn (Event Tracks): A custom call-to-action button is displayed to attendees while they view the track",
      fr: "Source Odoo Learn (Pistes d'événements) : un bouton d'appel à l'action personnalisé est affiché aux participants pendant qu'ils consultent la piste",
    },
  }),
  complexQ({
    id: "evt-013",
    module: "events",
    text: {
      en: "On the event tracks dashboard, what is the first stage in the default Kanban view? (Odoo Learn — Talk Proposals)",
      fr: "Sur le tableau de bord des suivis d'événements, quelle est la première étape dans la vue Kanban par défaut ? (Odoo Learn — Propositions de discussion)",
    },
    correct: {
      en: "Proposal",
      fr: "Proposition",
    },
    distractors: [
      { en: "New", fr: "Nouveau" },
      { en: "Talk Proposals", fr: "Propositions de discussion" },
      { en: "Proposed Talks", fr: "Pourparlers proposés" },
    ],
    explanation: {
      en: "Source Odoo Learn (Talk Proposals): Proposal",
      fr: "Source Odoo Learn (Propositions de discussion) : Proposition",
    },
  }),
  complexQ({
    id: "evt-014",
    module: "events",
    text: {
      en: "How can I make modifications to the ‘Talk Proposals’ page on the event website? (Odoo Learn — Talk Proposals)",
      fr: "Comment puis-je apporter des modifications à la page « Discuter des propositions » sur le site Web de l'événement ? (Odoo Learn — Propositions de discussion)",
    },
    correct: {
      en: "Navigate to the ‘Talk Proposals’ page, and click ‘Edit’",
      fr: "Accédez à la page « Parler des propositions » et cliquez sur « Modifier »",
    },
    distractors: [
      { en: "Navigate to the event website, and click ‘Modify’", fr: "Accédez au site Web de l'événement et cliquez sur « Modifier »" },
      { en: "Navigate to the Website application, locate the ‘Talk Proposals’ page, and click ‘Change’", fr: "Accédez à l'application du site Web, localisez la page « Parler des propositions » et cliquez sur « Modifier »." },
      { en: "It is impossible to make edits/modifications to the ‘Talk Proposals’ page", fr: "Il est impossible d'apporter des modifications à la page « Parler des propositions »" },
    ],
    explanation: {
      en: "Source Odoo Learn (Talk Proposals): Navigate to the ‘Talk Proposals’ page, and click ‘Edit’",
      fr: "Source Odoo Learn (Talk Proposals) : accédez à la page « Talk Proposals » et cliquez sur « Modifier »",
    },
  }),
  complexQ({
    id: "evt-015",
    module: "events",
    text: {
      en: "Can I select multiple ‘Categories’ in the ‘Talk Proposals’ form? (Odoo Learn — Talk Proposals)",
      fr: "Puis-je sélectionner plusieurs « Catégories » dans le formulaire « Propositions de discussion » ? (Odoo Learn — Propositions de discussion)",
    },
    correct: {
      en: "Yes, no matter what",
      fr: "Oui, quoi qu'il arrive",
    },
    distractors: [
      { en: "No", fr: "Non" },
      { en: "Yes, but only if the ‘Categories’ feature is enabled in the Events application", fr: "Oui, mais uniquement si la fonctionnalité « Catégories » est activée dans l'application Événements" },
      { en: "Yes, but only if the ‘Multiple Categories’ checkbox is ticked on the event template form being used for the event", fr: "Oui, mais seulement si la case « Catégories multiples » est cochée sur le formulaire de modèle d'événement utilisé pour l'événement." },
    ],
    explanation: {
      en: "Source Odoo Learn (Talk Proposals): Yes, no matter what",
      fr: "Source Odoo Learn (Talk Proposals) : Oui, quoi qu'il arrive",
    },
  }),
  complexQ({
    id: "evt-016",
    module: "events",
    text: {
      en: "What applications **must** be installed on the database, in order to communicate with event speakers? (Odoo Learn — Communicate with Speakers)",
      fr: "Quelles applications **doivent** être installées sur la base de données, afin de communiquer avec les intervenants de l'événement ? (Odoo Learn — Communiquer avec les intervenants)",
    },
    correct: {
      en: "Email Marketing *and* SMS Marketing",
      fr: "Marketing par e-mail *et* Marketing par SMS",
    },
    distractors: [
      { en: "Documents", fr: "Documents" },
      { en: "Email Marketing", fr: "Marketing par e-mail" },
      { en: "SMS Marketing", fr: "Marketing par SMS" },
    ],
    explanation: {
      en: "Source Odoo Learn (Communicate with Speakers): Email Marketing *and* SMS Marketing",
      fr: "Source Odoo Learn (Communiquer avec des intervenants) : Marketing par e-mail *et* Marketing par SMS",
    },
  }),
  complexQ({
    id: "evt-017",
    module: "events",
    text: {
      en: "When creating an Email to send to event speakers, what happens when I click the ‘star’ icon on the ‘Subject’ line? (Odoo Learn — Communicate with Speakers)",
      fr: "Lors de la création d'un e-mail à envoyer aux intervenants d'un événement, que se passe-t-il lorsque je clique sur l'icône « étoile » sur la ligne « Objet » ? (Odoo Learn — Communiquer avec les intervenants)",
    },
    correct: {
      en: "Odoo saves the Email message as an Event Track Template to be used later",
      fr: "Odoo enregistre le message électronique en tant que modèle de suivi d'événements à utiliser ultérieurement.",
    },
    distractors: [
      { en: "Odoo prioritizes the message for delivery in the email queue", fr: "Odoo donne la priorité au message à livrer dans la file d'attente des e-mails" },
      { en: "A menu opens up to add emojis to the Email", fr: "Un menu s'ouvre pour ajouter des emojis à l'e-mail" },
      { en: "Nothing happens, there is no ‘star’ icon on the ‘Subject’ line", fr: "Rien ne se passe, il n'y a pas d'icône « étoile » sur la ligne « Objet »" },
    ],
    explanation: {
      en: "Source Odoo Learn (Communicate with Speakers): Odoo saves the Email message as an Event Track Template to be used later",
      fr: "Source Odoo Learn (Communiquer avec les haut-parleurs) : Odoo enregistre le message électronique en tant que modèle de suivi d'événement pour être utilisé ultérieurement.",
    },
  }),
  complexQ({
    id: "evt-018",
    module: "events",
    text: {
      en: "If I want the replies of my email to be sent to a specific email address, what should I set in the ‘Reply To’ field? (Odoo Learn — Communicate with Speakers)",
      fr: "Si je souhaite que les réponses à mon e-mail soient envoyées à une adresse e-mail spécifique, que dois-je définir dans le champ « Répondre à » ? (Odoo Learn — Communiquer avec les intervenants)",
    },
    correct: {
      en: "‘Specified Email Address’ and add the desired address in the field that appears",
      fr: "« Adresse e-mail spécifiée » et ajoutez l'adresse souhaitée dans le champ qui apparaît",
    },
    distractors: [
      { en: "‘Custom Email Address’ and add the desired address in the field to the right", fr: "« Adresse e-mail personnalisée » et ajoutez l'adresse souhaitée dans le champ de droite" },
      { en: "‘Unique Email Address’ and add the desired address in the field above", fr: "« Adresse e-mail unique » et ajoutez l'adresse souhaitée dans le champ ci-dessus" },
      { en: "‘Custom Email Address’ and add the desired address in the field below", fr: "« Adresse e-mail personnalisée » et ajoutez l'adresse souhaitée dans le champ ci-dessous" },
    ],
    explanation: {
      en: "Source Odoo Learn (Communicate with Speakers): ‘Specified Email Address’ and add the desired address in the field that appears",
      fr: "Source Odoo Learn (Communiquer avec les intervenants) : « Adresse email spécifiée » et ajoutez l'adresse souhaitée dans le champ qui apparaît",
    },
  }),
  complexQ({
    id: "evt-019",
    module: "events",
    text: {
      en: "What apps do I need in order to generate leads from my company events? (Odoo Learn — Events Lead Generation)",
      fr: "De quelles applications ai-je besoin pour générer des leads à partir des événements de mon entreprise ? (Odoo Learn — Génération de leads pour événements)",
    },
    correct: {
      en: "Events and CRM",
      fr: "Événements et CRM",
    },
    distractors: [
      { en: "Events", fr: "Événements" },
      { en: "CRM", fr: "GRC" },
      { en: "None of the above", fr: "Aucune des réponses ci-dessus" },
    ],
    explanation: {
      en: "Source Odoo Learn (Events Lead Generation): Events and CRM",
      fr: "Source Odoo Learn (Génération de Leads Événementiels) : Événements et CRM",
    },
  }),
  complexQ({
    id: "evt-020",
    module: "events",
    text: {
      en: "When I create a new lead generation rule in the Events app, which event does it apply to? (Odoo Learn — Events Lead Generation)",
      fr: "Lorsque je crée une nouvelle règle de génération de leads dans l'application Événements, à quel événement s'applique-t-elle ? (Odoo Learn — Génération de leads pour événements)",
    },
    correct: {
      en: "All events, as well as any indicated in the ‘Event Template’ and ‘Event’ fields.",
      fr: "Tous les événements, ainsi que ceux indiqués dans les champs « Modèle d'événement » et « Événement ».",
    },
    distractors: [
      { en: "All events, except any indicated in the ‘Event Template’ and ‘Event’ fields.", fr: "Tous les événements, à l’exception de ceux indiqués dans les champs « Modèle d’événement » et « Événement »." },
      { en: "No events, unless they are indicated in the ‘Event Template’ and ‘Event’ fields.", fr: "Aucun événement, sauf s'ils sont indiqués dans les champs « Modèle d'événement » et « Événement »." },
      { en: "It is not possible to create a lead generation rule in the Events app.", fr: "Il n'est pas possible de créer une règle de génération de leads dans l'application Événements." },
    ],
    explanation: {
      en: "Source Odoo Learn (Events Lead Generation): All events, as well as any indicated in the ‘Event Template’ and ‘Event’ fields.",
      fr: "Source Odoo Learn (Événements Lead Generation) : Tous les événements, ainsi que ceux indiqués dans les champs « Modèle d'événement » et « Événement ».",
    },
  }),
  complexQ({
    id: "evt-021",
    module: "events",
    text: {
      en: "If I wanted to register someone as a lead even if they don’t confirm ticket registration, what do I select under  the ‘When’ field when creating event leads? (Odoo Learn — Events Lead Generation)",
      fr: "Si je souhaite enregistrer quelqu'un en tant que prospect même s'il ne confirme pas l'enregistrement du billet, que dois-je sélectionner dans le champ « Quand » lors de la création de prospects d'événement ? (Odoo Learn — Génération de leads pour événements)",
    },
    correct: {
      en: "‘Attendees are created’",
      fr: "« Les participants sont créés »",
    },
    distractors: [
      { en: "‘Attendees are registered’", fr: "« Les participants sont inscrits »" },
      { en: "‘Attendees attended’", fr: "« Les participants étaient présents »" },
      { en: "B and C are correct", fr: "B et C sont corrects" },
    ],
    explanation: {
      en: "Source Odoo Learn (Events Lead Generation): ‘Attendees are created’",
      fr: "Source Odoo Learn (Génération de leads pour événements) : « Les participants sont créés »",
    },
  }),
  complexQ({
    id: "evt-022",
    module: "events",
    text: {
      en: "To create a quiz for attendees, enable: (Odoo Learn — Live Broadcast & Gamification)",
      fr: "Pour créer un quiz pour les participants, activez : (Odoo Learn — Diffusion en direct et gamification)",
    },
    correct: {
      en: "Event Gamification.",
      fr: "Gamification d'événements.",
    },
    distractors: [
      { en: "Interactivity.", fr: "Interactivité." },
      { en: "Quiz.", fr: "Questionnaire." },
      { en: "None of the above.", fr: "Aucune des réponses ci-dessus." },
    ],
    explanation: {
      en: "Source Odoo Learn (Live Broadcast & Gamification): Event Gamification.",
      fr: "Source Odoo Learn (Live Broadcast & Gamification) : Gamification d'événements.",
    },
  }),
  complexQ({
    id: "evt-023",
    module: "events",
    text: {
      en: "What does the ‘Is Youtube Replay’ feature do? (Odoo Learn — Live Broadcast & Gamification)",
      fr: "À quoi sert la fonctionnalité « Est-ce que Youtube Replay » ? (Odoo Learn — Diffusion en direct et gamification)",
    },
    correct: {
      en: "Disables the live chat feature for the video.",
      fr: "Désactive la fonctionnalité de chat en direct pour la vidéo.",
    },
    distractors: [
      { en: "Prevents the website from showing a ‘live’ tag for the track.", fr: "Empêche le site Web d'afficher une balise « en direct » pour la piste." },
      { en: "The video is already available on Youtube and you want to keep it available on your website after the live stream.", fr: "La vidéo est déjà disponible sur Youtube et vous souhaitez la conserver sur votre site Web après la diffusion en direct." },
      { en: "None of the above.", fr: "Aucune des réponses ci-dessus." },
    ],
    explanation: {
      en: "Source Odoo Learn (Live Broadcast & Gamification): Disables the live chat feature for the video.",
      fr: "Source Odoo Learn (Live Broadcast & Gamification) : Désactive la fonction de chat en direct pour la vidéo.",
    },
  }),
  complexQ({
    id: "evt-024",
    module: "events",
    text: {
      en: "When is the chat feature available during a live track? (Odoo Learn — Live Broadcast & Gamification)",
      fr: "Quand la fonction de chat est-elle disponible pendant une piste en direct ? (Odoo Learn — Diffusion en direct et gamification)",
    },
    correct: {
      en: "Only during the scheduled track time.",
      fr: "Uniquement pendant la durée de piste prévue.",
    },
    distractors: [
      { en: "At any time after the video is uploaded.", fr: "À tout moment après le téléchargement de la vidéo." },
      { en: "Only before the event starts.", fr: "Seulement avant le début de l'événement." },
      { en: "Only if the video is marked as a replay.", fr: "Uniquement si la vidéo est marquée comme rediffusion." },
    ],
    explanation: {
      en: "Source Odoo Learn (Live Broadcast & Gamification): Only during the scheduled track time.",
      fr: "Source Odoo Learn (Live Broadcast & Gamification) : Uniquement pendant la durée de piste programmée.",
    },
  }),
  complexQ({
    id: "evt-025",
    module: "events",
    text: {
      en: "If a community room is marked as, ‘Is Pinned,’ what does that mean? (Odoo Learn — Community Rooms)",
      fr: "Si une salle communautaire est marquée comme « Est épinglée », qu'est-ce que cela signifie ? (Odoo Learn — Salles communautaires)",
    },
    correct: {
      en: "Odoo will place that room at the top of the list.",
      fr: "Odoo placera cette pièce en haut de la liste.",
    },
    distractors: [
      { en: "Odoo will email badges to all attendees.", fr: "Odoo enverra des badges par e-mail à tous les participants." },
      { en: "Odoo will send SMS notifications to all attendees.", fr: "Odoo enverra des notifications par SMS à tous les participants." },
      { en: "Nothing, this doesn’t exist.", fr: "Rien, ça n'existe pas." },
    ],
    explanation: {
      en: "Source Odoo Learn (Community Rooms): Odoo will place that room at the top of the list.",
      fr: "Source Odoo Learn (salles communautaires) : Odoo placera cette salle en haut de la liste.",
    },
  }),
  complexQ({
    id: "evt-026",
    module: "events",
    text: {
      en: "What happens when a room reaches its full capacity? (Odoo Learn — Community Rooms)",
      fr: "Que se passe-t-il lorsqu’une salle atteint sa pleine capacité ? (Odoo Learn — Salles communautaires)",
    },
    correct: {
      en: "The room becomes invisible on the website page.",
      fr: "La salle devient invisible sur la page du site.",
    },
    distractors: [
      { en: "An error message is shown to the attendee.", fr: "Un message d'erreur s'affiche au participant." },
      { en: "The attendee is added to a waiting list.", fr: "Le participant est ajouté à une liste d'attente." },
      { en: "None of the above.", fr: "Aucune des réponses ci-dessus." },
    ],
    explanation: {
      en: "Source Odoo Learn (Community Rooms): The room becomes invisible on the website page.",
      fr: "Source Odoo Learn (Community Rooms) : La salle devient invisible sur la page du site.",
    },
  }),
  complexQ({
    id: "evt-027",
    module: "events",
    text: {
      en: "What does the ‘Community’ option (on an Event Template) do when enabled? (Odoo Learn — Community Rooms)",
      fr: "Que fait l'option « Communauté » (sur un modèle d'événement) lorsqu'elle est activée ? (Odoo Learn — Salles communautaires)",
    },
    correct: {
      en: "Creates a ‘Community’ link on the header of your website.",
      fr: "Crée un lien « Communauté » sur l’en-tête de votre site Web.",
    },
    distractors: [
      { en: "Ensures that the template is only accessible to users with ‘Community’ logins.", fr: "Garantit que le modèle n'est accessible qu'aux utilisateurs disposant de connexions « Communauté »." },
      { en: "It sends an email to all registered attendees.", fr: "Il envoie un e-mail à tous les participants inscrits." },
      { en: "None of the above.", fr: "Aucune des réponses ci-dessus." },
    ],
    explanation: {
      en: "Source Odoo Learn (Community Rooms): Creates a ‘Community’ link on the header of your website.",
      fr: "Source Odoo Learn (Community Rooms) : crée un lien « Communauté » sur l’en-tête de votre site Web.",
    },
  }),
  complexQ({
    id: "evt-028",
    module: "events",
    text: {
      en: "The available times of an exhibitor’s virtual booth are set on the field ‘Opening Hours.’ (Odoo Learn — Online Exhibitors)",
      fr: "Les horaires disponibles du stand virtuel d’un exposant sont définis dans le champ « Heures d’ouverture ». (Odoo Learn — Exposants en ligne)",
    },
    correct: {
      en: "True, no matter what.",
      fr: "C'est vrai, quoi qu'il arrive.",
    },
    distractors: [
      { en: "True, but only if you’re logged into the Sponsor Portal.", fr: "C'est vrai, mais seulement si vous êtes connecté au portail des sponsors." },
      { en: "True, but only one day before the event.", fr: "C'est vrai, mais seulement un jour avant l'événement." },
      { en: "False.", fr: "FAUX." },
    ],
    explanation: {
      en: "Source Odoo Learn (Online Exhibitors): True, no matter what.",
      fr: "Source Odoo Learn (Exposants en ligne) : C'est vrai, quoi qu'il arrive.",
    },
  }),
  complexQ({
    id: "evt-029",
    module: "events",
    text: {
      en: "What needs to be done on the website for attendees to see an Online Exhibitor’s virtual booth? (Odoo Learn — Online Exhibitors)",
      fr: "Que faut-il faire sur le site Web pour que les participants puissent voir le stand virtuel d’un exposant en ligne ? (Odoo Learn — Exposants en ligne)",
    },
    correct: {
      en: "The virtual booth webpage must be ‘Published.’",
      fr: "La page Web du stand virtuel doit être « Publiée ».",
    },
    distractors: [
      { en: "They need to work for the company sponsoring the booth.", fr: "Ils doivent travailler pour l'entreprise qui sponsorise le stand." },
      { en: "They need to install a special application.", fr: "Ils doivent installer une application spéciale." },
      { en: "None of the above.", fr: "Aucune des réponses ci-dessus." },
    ],
    explanation: {
      en: "Source Odoo Learn (Online Exhibitors): The virtual booth webpage must be ‘Published.’",
      fr: "Source Odoo Learn (Exposants en ligne) : La page Web du stand virtuel doit être « Publiée ».",
    },
  }),
  complexQ({
    id: "evt-030",
    module: "events",
    text: {
      en: "Which of the following does the ‘Online Exhibitors’ setting enable users to do? (Odoo Learn — Online Exhibitors)",
      fr: "Parmi les actions suivantes, laquelle le paramètre « Exposants en ligne » permet-il aux utilisateurs d'effectuer ? (Odoo Learn — Exposants en ligne)",
    },
    correct: {
      en: "Publish exhibitors on a dedicated webpage for attendees to explore.",
      fr: "Publiez les exposants sur une page Web dédiée que les participants pourront explorer.",
    },
    distractors: [
      { en: "Sell exhibitor products directly through the event ticket form.", fr: "Vendez les produits des exposants directement via le formulaire de billet d’événement." },
      { en: "Automatically assign exhibitors to event sessions.", fr: "Attribuez automatiquement des exposants à des sessions d’événement." },
      { en: "Restrict event access to exhibitors only.", fr: "Restreindre l’accès à l’événement aux exposants uniquement." },
    ],
    explanation: {
      en: "Source Odoo Learn (Online Exhibitors): Publish exhibitors on a dedicated webpage for attendees to explore.",
      fr: "Source Odoo Learn (exposants en ligne) : publiez les exposants sur une page Web dédiée que les participants peuvent explorer.",
    },
  }),
  complexQ({
    id: "evt-031",
    module: "events",
    text: {
      en: "On the ‘Booths’ page, what is the default name of the stage where you’d find all the already booked (and paid for) booths? (Odoo Learn — Exhibitor Booths)",
      fr: "Sur la page « Stands », quel est le nom par défaut de la scène où vous trouverez tous les stands déjà réservés (et payés) ? (Odoo Learn — Stands des exposants)",
    },
    correct: {
      en: "Unavailable.",
      fr: "Indisponible.",
    },
    distractors: [
      { en: "Taken.", fr: "Pris." },
      { en: "Paid.", fr: "Payé." },
      { en: "Reserved.", fr: "Réservé." },
    ],
    explanation: {
      en: "Source Odoo Learn (Exhibitor Booths): Unavailable.",
      fr: "Source Odoo Learn (Stands des exposants) : Indisponible.",
    },
  }),
  complexQ({
    id: "evt-032",
    module: "events",
    text: {
      en: "After clicking “Book my Booths,” Odoo redirects you to this form to fill out your personal sponsor information: (Odoo Learn — Exhibitor Booths)",
      fr: "Après avoir cliqué sur « Réserver mes stands », Odoo vous redirige vers ce formulaire pour remplir vos informations personnelles de sponsor : (Odoo Learn — Stands des exposants)",
    },
    correct: {
      en: "Sponsor Details.",
      fr: "Détails du sponsor.",
    },
    distractors: [
      { en: "Package Details.", fr: "Détails du forfait." },
      { en: "Visitor Details.", fr: "Détails du visiteur." },
      { en: "Booth Details.", fr: "Détails du stand." },
    ],
    explanation: {
      en: "Source Odoo Learn (Exhibitor Booths): Sponsor Details.",
      fr: "Source Odoo Learn (Stands des exposants) : Détails du sponsor.",
    },
  }),
  complexQ({
    id: "evt-033",
    module: "events",
    text: {
      en: "If you’re a visitor who wanted to book their own booth, what would you select on the front-end of the website? (Odoo Learn — Exhibitor Booths)",
      fr: "Si vous êtes un visiteur qui souhaite réserver son propre stand, que sélectionneriez-vous sur le front-end du site Web ? (Odoo Learn — Stands des exposants)",
    },
    correct: {
      en: "Become exhibitor.",
      fr: "Devenez exposant.",
    },
    distractors: [
      { en: "Book a Booth.", fr: "Réservez un stand." },
      { en: "Visitor Booking.", fr: "Réservation des visiteurs." },
      { en: "Wanna be an Exhibitor?", fr: "Envie d'être exposant ?" },
    ],
    explanation: {
      en: "Source Odoo Learn (Exhibitor Booths): Become exhibitor.",
      fr: "Source Odoo Learn (Stands Exposant) : Devenez exposant.",
    },
  }),
  complexQ({
    id: "evt-034",
    module: "events",
    text: {
      en: "On an event template form, when the ‘Community’ checkbox is ticked, what new checkbox appears? (Odoo Learn — Event Templates)",
      fr: "Sur un formulaire de modèle d'événement, lorsque la case « Communauté » est cochée, quelle nouvelle case apparaît ? (Odoo Learn — Modèles d'événements)",
    },
    correct: {
      en: "Allow Room Creation",
      fr: "Autoriser la création de salle",
    },
    distractors: [
      { en: "Allow Community Discussion", fr: "Autoriser la discussion dans la communauté" },
      { en: "Allow Forum Creation", fr: "Autoriser la création de forums" },
      { en: "Allow Attendee Discussion", fr: "Autoriser la discussion des participants" },
    ],
    explanation: {
      en: "Source Odoo Learn (Event Templates): Allow Room Creation",
      fr: "Source Odoo Learn (Modèles d'événements) : Autoriser la création de salle",
    },
  }),
  complexQ({
    id: "evt-035",
    module: "events",
    text: {
      en: "When the ‘Website Submenu’ checkbox is ticked on an event template form, what happens to the other submenu checkboxes? (Odoo Learn — Event Templates)",
      fr: "Lorsque la case « Sous-menu du site Web » est cochée sur un formulaire de modèle d'événement, qu'arrive-t-il aux autres cases du sous-menu ? (Odoo Learn — Modèles d'événements)",
    },
    correct: {
      en: "They also get ticked",
      fr: "Ils sont également cochés",
    },
    distractors: [
      { en: "They all disappear", fr: "Ils disparaissent tous" },
      { en: "They change color", fr: "Ils changent de couleur" },
      { en: "There is no ‘Website Submenu’ checkbox on an event template form", fr: "Il n'y a pas de case à cocher « Sous-menu du site Web » sur un formulaire de modèle d'événement" },
    ],
    explanation: {
      en: "Source Odoo Learn (Event Templates): They also get ticked",
      fr: "Source Odoo Learn (Modèles d'événements) : Ils sont également cochés",
    },
  }),
  complexQ({
    id: "evt-036",
    module: "events",
    text: {
      en: "Can a new ‘Booth Category’ be created directly from the ‘Create Booths’ pop-up form on an event template? (Odoo Learn — Event Templates)",
      fr: "Une nouvelle « Catégorie de stand » peut-elle être créée directement à partir du formulaire contextuel « Créer des stands » sur un modèle d'événement ? (Odoo Learn — Modèles d'événements)",
    },
    correct: {
      en: "Yes, by typing in the name of the new booth, and clicking ‘Create’ or ‘Create and edit…’ in the resulting drop-down menu",
      fr: "Oui, en tapant le nom du nouveau stand et en cliquant sur « Créer » ou « Créer et modifier… » dans le menu déroulant obtenu.",
    },
    distractors: [
      { en: "Yes, but **ONLY** if the user is in ‘Developer Mode’", fr: "Oui, mais **UNIQUEMENT** si l'utilisateur est en « Mode développeur »" },
      { en: "Yes, but **ONLY** if the user has specific ‘Booth Category’ access rights on their user profile", fr: "Oui, mais **UNIQUEMENT** si l'utilisateur dispose de droits d'accès spécifiques « Catégorie de stand » sur son profil utilisateur" },
      { en: "No, this is impossible", fr: "Non, c'est impossible" },
    ],
    explanation: {
      en: "Source Odoo Learn (Event Templates): Yes, by typing in the name of the new booth, and clicking ‘Create’ or ‘Create and edit…’ in the resulting drop-down menu",
      fr: "Source Odoo Learn (Modèles d'événements) : Oui, en tapant le nom du nouveau stand et en cliquant sur « Créer » ou « Créer et modifier… » dans le menu déroulant résultant",
    },
  }),
  complexQ({
    id: "evt-037",
    module: "events",
    text: {
      en: "How do I publish my event page? (Odoo Learn — Edit and Publish SEO-friendly Events)",
      fr: "Comment publier ma page d'événement ? (Odoo Learn — Modifier et publier des événements optimisés pour le référencement)",
    },
    correct: {
      en: "Click the toggle button next to the ‘Unpublished’ status on the website preview.",
      fr: "Cliquez sur le bouton bascule à côté du statut « Non publié » dans l'aperçu du site Web.",
    },
    distractors: [
      { en: "It is automatically published once you save the event in Odoo.", fr: "Il est automatiquement publié une fois que vous enregistrez l'événement dans Odoo." },
      { en: "It is automatically published once you click the ‘Go to Website’ smart button on the event form.", fr: "Il est automatiquement publié une fois que vous cliquez sur le bouton intelligent « Aller au site Web » du formulaire d'événement." },
      { en: "Click the ‘Publish’ button on the event form in Odoo Events app.", fr: "Cliquez sur le bouton « Publier » sur le formulaire d'événement dans l'application Odoo Events." },
    ],
    explanation: {
      en: "Source Odoo Learn (Edit and Publish SEO-friendly Events): Click the toggle button next to the ‘Unpublished’ status on the website preview.",
      fr: "Source Odoo Learn (Modifier et publier des événements optimisés pour le référencement) : cliquez sur le bouton bascule à côté du statut « Non publié » dans l'aperçu du site Web.",
    },
  }),
  complexQ({
    id: "evt-038",
    module: "events",
    text: {
      en: "In the video, how do I let my internal team know that my event has been announced to the public? (Odoo Learn — Edit and Publish SEO-friendly Events)",
      fr: "Dans la vidéo, comment faire savoir à mon équipe interne que mon événement a été annoncé au public ? (Odoo Learn — Modifier et publier des événements optimisés pour le référencement)",
    },
    correct: {
      en: "In the Events app, move the event card to the ‘Announced’ stage. Or, on the Event form, click on the ‘Announced’ banner stage.",
      fr: "Dans l'application Événements, déplacez la carte d'événement vers l'étape « Annoncé ». Ou, sur le formulaire d'événement, cliquez sur l'étape de bannière « Annoncé ».",
    },
    distractors: [
      { en: "In the Events app, click on the team announcements tab and select ‘Event Announcement’ to notify the internal team.", fr: "Dans l'application Événements, cliquez sur l'onglet Annonces de l'équipe et sélectionnez « Annonce d'événement » pour informer l'équipe interne." },
      { en: "The event will automatically move to the ‘Announced’ stage once it is created.", fr: "L’événement passera automatiquement à l’étape « Annoncé » une fois créé." },
      { en: "The event will automatically move to the ‘Announced’ stage once it is published to the website.", fr: "L’événement passera automatiquement à l’étape « Annoncé » une fois publié sur le site Web." },
    ],
    explanation: {
      en: "Source Odoo Learn (Edit and Publish SEO-friendly Events): In the Events app, move the event card to the ‘Announced’ stage. Or, on the Event form, click on the ‘Announced’ banner stage.",
      fr: "Source Odoo Learn (Modifier et publier des événements optimisés pour le référencement) : dans l'application Événements, déplacez la carte d'événement vers l'étape « Annoncé ». Ou, sur le formulaire d'événement, cliquez sur l'étape de bannière « Annoncé ».",
    },
  }),
  complexQ({
    id: "evt-039",
    module: "events",
    text: {
      en: "What do SEO keywords do for my event page? (Odoo Learn — Edit and Publish SEO-friendly Events)",
      fr: "À quoi servent les mots-clés SEO pour ma page d’événement ? (Odoo Learn — Modifier et publier des événements optimisés pour le référencement)",
    },
    correct: {
      en: "SEO keywords help more people find the event page on search engines.",
      fr: "Les mots-clés SEO aident davantage de personnes à trouver la page de l’événement sur les moteurs de recherche.",
    },
    distractors: [
      { en: "SEO keywords are secret passwords that attendees can use to get bonus merchandise.", fr: "Les mots-clés SEO sont des mots de passe secrets que les participants peuvent utiliser pour obtenir des produits bonus." },
      { en: "SEO keywords help people unregister from the website so they don’t see the event page.", fr: "Les mots-clés SEO aident les gens à se désinscrire du site Web afin qu'ils ne voient pas la page de l'événement." },
      { en: "SEO keywords help managers register their users for the event.", fr: "Les mots-clés SEO aident les gestionnaires à inscrire leurs utilisateurs à l'événement." },
    ],
    explanation: {
      en: "Source Odoo Learn (Edit and Publish SEO-friendly Events): SEO keywords help more people find the event page on search engines.",
      fr: "Source Odoo Learn (Modifier et publier des événements optimisés pour le référencement) : les mots-clés SEO aident davantage de personnes à trouver la page de l'événement sur les moteurs de recherche.",
    },
  }),
  complexQ({
    id: "evt-040",
    module: "events",
    text: {
      en: "On the Event dashboard, what are the two options under the ‘Reporting’ menu? (Odoo Learn — Measure Your Success)",
      fr: "Sur le tableau de bord des événements, quelles sont les deux options du menu « Rapports » ? (Odoo Learn — Mesurez votre réussite)",
    },
    correct: {
      en: "Attendees & Revenues.",
      fr: "Participants et revenus.",
    },
    distractors: [
      { en: "Attendees & Cash.", fr: "Participants et espèces." },
      { en: "Revenues & Profits.", fr: "Revenus et bénéfices." },
      { en: "Money Made & Attendance.", fr: "Argent gagné et fréquentation." },
    ],
    explanation: {
      en: "Source Odoo Learn (Measure Your Success): Attendees & Revenues.",
      fr: "Source Odoo Learn (Mesurez votre succès) : participants et revenus.",
    },
  }),
  complexQ({
    id: "evt-041",
    module: "events",
    text: {
      en: "By default, how does Odoo organize the data on the Attendees ‘Reporting’ page? (Odoo Learn — Measure Your Success)",
      fr: "Par défaut, comment Odoo organise-t-il les données sur la page « Rapports » des participants ? (Odoo Learn — Mesurez votre réussite)",
    },
    correct: {
      en: "Bar graph view.",
      fr: "Vue graphique à barres.",
    },
    distractors: [
      { en: "Pivot Table.", fr: "Tableau croisé dynamique." },
      { en: "List view.", fr: "Vue en liste." },
      { en: "This page doesn’t exist.", fr: "Cette page n'existe pas." },
    ],
    explanation: {
      en: "Source Odoo Learn (Measure Your Success): Bar graph view.",
      fr: "Source Odoo Learn (Mesurez votre réussite) : vue graphique à barres.",
    },
  }),
  complexQ({
    id: "evt-042",
    module: "events",
    text: {
      en: "What’s the most important thing to include while sending feedback surveys to attendees? (Odoo Learn — Measure Your Success)",
      fr: "Quelle est la chose la plus importante à inclure lors de l’envoi d’enquêtes de rétroaction aux participants ? (Odoo Learn — Mesurez votre réussite)",
    },
    correct: {
      en: "Survey URL.",
      fr: "URL de l'enquête.",
    },
    distractors: [
      { en: "A ‘Thank You’ message.", fr: "Un message de « Merci »." },
      { en: "Photos from the event.", fr: "Photos de l'événement." },
      { en: "Brief bio about your company.", fr: "Brève biographie de votre entreprise." },
    ],
    explanation: {
      en: "Source Odoo Learn (Measure Your Success): Survey URL.",
      fr: "Source Odoo Learn (Mesurez votre réussite) : URL de l'enquête.",
    },
  }),
  complexQ({
    id: "evt-043",
    module: "events",
    text: {
      en: "What is the purpose of enabling the 'Multiple Slots' option on an event? (Odoo Learn — Multi-slot events)",
      fr: "Quel est le but d'activer l'option « Slots multiples » sur un événement ? (Odoo Learn — Événements multi-slots)",
    },
    correct: {
      en: "To allow attendees to register for specific sessions within an event.",
      fr: "Pour permettre aux participants de s'inscrire à des sessions spécifiques au sein d'un événement.",
    },
    distractors: [
      { en: "To create multiple ticket types for attendees.", fr: "Pour créer plusieurs types de billets pour les participants." },
      { en: "To automatically create recurring events.", fr: "Pour créer automatiquement des événements récurrents." },
      { en: "To limit event registrations.", fr: "Pour limiter les inscriptions aux événements." },
    ],
    explanation: {
      en: "Source Odoo Learn (Multi-slot events): To allow attendees to register for specific sessions within an event.",
      fr: "Source Odoo Learn (événements multi-slots) : pour permettre aux participants de s'inscrire à des sessions spécifiques au sein d'un événement.",
    },
  }),
  complexQ({
    id: "evt-044",
    module: "events",
    text: {
      en: "Which setting must be configured to limit registrations for an event slot? (Odoo Learn — Multi-slot events)",
      fr: "Quel paramètre doit être configuré pour limiter les inscriptions à un créneau événementiel ? (Odoo Learn — Événements multi-slots)",
    },
    correct: {
      en: "Attendees per slot.",
      fr: "Participants par créneau.",
    },
    distractors: [
      { en: "Maximum Attendees.", fr: "Nombre maximum de participants." },
      { en: "Start Date.", fr: "Date de début." },
      { en: "Event Capacity.", fr: "Capacité d'événement." },
    ],
    explanation: {
      en: "Source Odoo Learn (Multi-slot events): Attendees per slot.",
      fr: "Source Odoo Learn (Événements multi-créneaux) : participants par créneau.",
    },
  }),
  complexQ({
    id: "evt-045",
    module: "events",
    text: {
      en: "How do attendees choose a specific session when registering? (Odoo Learn — Multi-slot events)",
      fr: "Comment les participants choisissent-ils une session spécifique lors de leur inscription ? (Odoo Learn — Événements multi-slots)",
    },
    correct: {
      en: "By choosing a slot in the ‘Slots’ registration window.",
      fr: "En choisissant un créneau dans la fenêtre d'inscription « Slots ».",
    },
    distractors: [
      { en: "By selecting a ticket type first.", fr: "En sélectionnant d'abord un type de billet." },
      { en: "By contacting the event organizer.", fr: "En contactant l'organisateur de l'événement." },
      { en: "By editing their registration after payment.", fr: "En modifiant leur inscription après paiement." },
    ],
    explanation: {
      en: "Source Odoo Learn (Multi-slot events): By choosing a slot in the ‘Slots’ registration window.",
      fr: "Source Odoo Learn (Événements multi-slots) : En choisissant un créneau dans la fenêtre d'inscription « Slots ».",
    },
  }),
];
