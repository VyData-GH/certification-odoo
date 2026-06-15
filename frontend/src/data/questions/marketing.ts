import { complexQ } from "./helpers";

export const marketingQuestions = [
  complexQ({
    id: "mkt-001",
    module: "marketing",
    text: {
      en: "In Odoo 19 Email Marketing, which record type is used to design, send, and track a mass email campaign?",
      fr: "Dans Email Marketing Odoo 19, quel type d'enregistrement permet de concevoir, envoyer et suivre une campagne e-mail de masse ?",
    },
    correct: {
      en: "A Mailing record with recipient filters, HTML body, and built-in delivery statistics",
      fr: "Un enregistrement Mailing avec filtres de destinataires, corps HTML et statistiques d'envoi intégrées",
    },
    distractors: [
      {
        en: "A Discuss channel announcement pushed to all internal users without delivery tracking",
        fr: "Une annonce de canal Discuss diffusée à tous les utilisateurs internes sans suivi de livraison",
      },
      {
        en: "A CRM mass mailing action that only logs activities on opportunities without open-rate metrics",
        fr: "Une action CRM d'envoi groupé qui journalise uniquement des activités sur opportunités sans taux d'ouverture",
      },
      {
        en: "A Sales quotation email template sent individually from each salesperson's mailbox",
        fr: "Un modèle de devis vente envoyé individuellement depuis la messagerie de chaque commercial",
      },
    ],
    explanation: {
      en: "Email Marketing campaigns are Mailings: they target recipients, send bulk messages, and report sent, opened, clicked, and bounced KPIs.",
      fr: "Les campagnes Email Marketing sont des Mailings : ils ciblent des destinataires, envoient en masse et affichent les KPI (envoyés, ouverts, clics, rebonds).",
    },
  }),
  complexQ({
    id: "mkt-002",
    module: "marketing",
    text: {
      en: "How do you target a specific audience before sending a mailing in Odoo 19?",
      fr: "Comment cibler un public spécifique avant l'envoi d'un mailing dans Odoo 19 ?",
    },
    correct: {
      en: "Combine mailing lists with recipient filters (domain rules) on the Mailing form",
      fr: "Combiner des listes de diffusion avec des filtres de destinataires (règles de domaine) sur le formulaire Mailing",
    },
    distractors: [
      {
        en: "Restrict recipients exclusively through Sales pricelist rules applied to product categories",
        fr: "Restreindre les destinataires exclusivement via les règles de liste de prix Ventes sur les catégories produits",
      },
      {
        en: "Segment contacts only by assigning them to different CRM pipeline stages manually",
        fr: "Segmenter les contacts uniquement en les assignant manuellement à différentes étapes du pipeline CRM",
      },
      {
        en: "Filter recipients through Inventory location routes linked to warehouse operations",
        fr: "Filtrer les destinataires via les routes d'emplacement Inventaire liées aux opérations d'entrepôt",
      },
    ],
    explanation: {
      en: "Mailings use mailing lists and/or dynamic domain filters on contacts to define who receives the campaign.",
      fr: "Les Mailings utilisent des listes de diffusion et/ou des filtres dynamiques sur les contacts pour définir les destinataires.",
    },
  }),
  complexQ({
    id: "mkt-003",
    module: "marketing",
    text: {
      en: "What is the purpose of a Marketing Automation campaign workflow in Odoo 19?",
      fr: "Quel est le rôle d'un workflow de campagne Marketing Automation dans Odoo 19 ?",
    },
    correct: {
      en: "Run a sequence of triggered activities (emails, waits, server actions) on qualified participants",
      fr: "Exécuter une séquence d'activités déclenchées (e-mails, attentes, actions serveur) sur des participants qualifiés",
    },
    distractors: [
      {
        en: "Replace the CRM pipeline by automatically moving every lead to the Won stage after one email",
        fr: "Remplacer le pipeline CRM en déplaçant automatiquement chaque piste vers Gagné après un seul e-mail",
      },
      {
        en: "Schedule a single one-shot mailing without conditions, triggers, or follow-up activities",
        fr: "Planifier un envoi unique sans conditions, déclencheurs ni activités de suivi",
      },
      {
        en: "Generate manufacturing orders when website visitors browse the eCommerce catalog",
        fr: "Générer des ordres de fabrication lorsque des visiteurs parcourent le catalogue eCommerce",
      },
    ],
    explanation: {
      en: "Marketing Automation campaigns chain activities triggered by participant behavior (page visits, form submissions, email clicks, etc.).",
      fr: "Les campagnes Marketing Automation enchaînent des activités déclenchées par le comportement (visites, formulaires, clics e-mail, etc.).",
    },
  }),
  complexQ({
    id: "mkt-004",
    module: "marketing",
    text: {
      en: "Where can you review open, click, reply, and bounce rates for a sent mailing in Odoo 19?",
      fr: "Où consulter les taux d'ouverture, de clic, de réponse et de rebond d'un mailing envoyé dans Odoo 19 ?",
    },
    correct: {
      en: "On the mailing form and in Email Marketing reporting views (including 24H stat reports)",
      fr: "Sur le formulaire du mailing et dans les vues de reporting Email Marketing (dont les rapports 24H)",
    },
    distractors: [
      {
        en: "In the Accounting Profit and Loss report filtered by the salesperson assigned to the contact",
        fr: "Dans le compte de résultat Comptabilité filtré par le commercial assigné au contact",
      },
      {
        en: "In the Inventory stock valuation report grouped by product category and warehouse",
        fr: "Dans le rapport de valorisation stock Inventaire groupé par catégorie produit et entrepôt",
      },
      {
        en: "In the Discuss channel analytics dashboard showing internal message read receipts only",
        fr: "Dans le tableau de bord analytique Discuss affichant uniquement les accusés de lecture internes",
      },
    ],
    explanation: {
      en: "Email Marketing tracks delivery KPIs per mailing and provides dedicated reporting, including 24-hour performance snapshots.",
      fr: "Email Marketing suit les KPI de livraison par mailing et propose des rapports dédiés, dont des statistiques à 24 heures.",
    },
  }),
  complexQ({
    id: "mkt-005",
    module: "marketing",
    text: {
      en: "What do UTM Campaign, Medium, and Source fields track in Odoo 19 Marketing?",
      fr: "Que permettent de tracer les champs UTM Campaign, Medium et Source dans Marketing Odoo 19 ?",
    },
    correct: {
      en: "The marketing origin of leads and opportunities (which campaign, channel, and source generated them)",
      fr: "L'origine marketing des pistes et opportunités (quelle campagne, canal et source les ont générées)",
    },
    distractors: [
      {
        en: "The fiscal position and tax mapping applied on customer invoices for cross-border sales",
        fr: "La position fiscale et le mapping de taxes appliqués sur les factures clients pour les ventes internationales",
      },
      {
        en: "The warehouse route and procurement rules selected when confirming a sales order",
        fr: "La route d'entrepôt et les règles d'approvisionnement sélectionnées à la confirmation d'une commande",
      },
      {
        en: "The analytic distribution plan allocated on project timesheet entries for cost tracking",
        fr: "Le plan de distribution analytique alloué sur les feuilles de temps projet pour le suivi des coûts",
      },
    ],
    explanation: {
      en: "UTM tags attribute traffic and conversions to specific marketing campaigns, mediums, and sources across CRM and sales.",
      fr: "Les UTM attribuent trafic et conversions à des campagnes, mediums et sources marketing spécifiques dans le CRM et les ventes.",
    },
  }),
  complexQ({
    id: "mkt-006",
    module: "marketing",
    text: {
      en: "How do you create a landing page for a marketing campaign in Odoo 19?",
      fr: "Comment créer une page de destination (landing page) pour une campagne marketing dans Odoo 19 ?",
    },
    correct: {
      en: "Use the Website app with landing page templates and the drag-and-drop website builder",
      fr: "Utiliser l'app Website avec des modèles de landing page et l'éditeur de site par glisser-déposer",
    },
    distractors: [
      {
        en: "Configure a new product template in eCommerce and publish it as the campaign homepage",
        fr: "Configurer un nouveau modèle produit en eCommerce et le publier comme page d'accueil de campagne",
      },
      {
        en: "Create a Survey form and set its thank-you page as the only public marketing entry point",
        fr: "Créer un formulaire Survey et définir sa page de remerciement comme unique point d'entrée marketing public",
      },
      {
        en: "Build the page exclusively in Email Marketing by pasting raw HTML into the mailing body tab",
        fr: "Construire la page exclusivement dans Email Marketing en collant du HTML brut dans l'onglet corps du mailing",
      },
    ],
    explanation: {
      en: "Odoo Website provides dedicated landing page templates designed for conversion tracking and campaign integration.",
      fr: "Odoo Website propose des modèles de landing page dédiés, conçus pour le suivi des conversions et l'intégration campagne.",
    },
  }),
  complexQ({
    id: "mkt-007",
    module: "marketing",
    text: {
      en: "How do website forms and marketing campaigns feed the CRM pipeline in Odoo 19?",
      fr: "Comment les formulaires website et les campagnes marketing alimentent-ils le pipeline CRM dans Odoo 19 ?",
    },
    correct: {
      en: "Form submissions and tracked links create CRM leads/opportunities with UTM attribution preserved",
      fr: "Les soumissions de formulaire et liens trackés créent des pistes/opportunités CRM avec attribution UTM conservée",
    },
    distractors: [
      {
        en: "Marketing mailings automatically convert every contact into a confirmed sales order without CRM records",
        fr: "Les mailings marketing convertissent automatiquement chaque contact en commande confirmée sans enregistrement CRM",
      },
      {
        en: "UTM data is stored only on mailing records and never propagates to CRM or sales documents",
        fr: "Les données UTM sont stockées uniquement sur les mailings et ne se propagent jamais au CRM ni aux ventes",
      },
      {
        en: "Website visitors are imported as vendor bills when they submit a contact form on the homepage",
        fr: "Les visiteurs website sont importés comme factures fournisseurs lorsqu'ils soumettent un formulaire de contact",
      },
    ],
    explanation: {
      en: "Website forms and UTM-tracked campaigns generate CRM leads with source attribution for pipeline analysis.",
      fr: "Les formulaires website et campagnes UTM génèrent des pistes CRM avec attribution de source pour l'analyse du pipeline.",
    },
  }),
  complexQ({
    id: "mkt-008",
    module: "marketing",
    text: {
      en: "What is a mailing list in Odoo 19 Email Marketing?",
      fr: "Qu'est-ce qu'une liste de diffusion dans Email Marketing Odoo 19 ?",
    },
    correct: {
      en: "A named group of contacts who opted in to receive email campaigns on that list",
      fr: "Un groupe nommé de contacts ayant opté pour recevoir des campagnes e-mail sur cette liste",
    },
    distractors: [
      {
        en: "A Sales pricelist grouping products by customer segment for quotation line discounts",
        fr: "Une liste de prix Ventes regroupant des produits par segment client pour des remises sur devis",
      },
      {
        en: "A CRM lost reason category used to archive opportunities that did not convert",
        fr: "Une catégorie de motif de perte CRM utilisée pour archiver les opportunités non converties",
      },
      {
        en: "An Inventory reordering rule list defining minimum stock quantities per warehouse location",
        fr: "Une liste de règles de réapprovisionnement Inventaire définissant des quantités minimales par emplacement",
      },
    ],
    explanation: {
      en: "Mailing lists organize opted-in contacts and can be combined with filters when defining mailing recipients.",
      fr: "Les listes de diffusion organisent les contacts opt-in et peuvent être combinées à des filtres pour les destinataires.",
    },
  }),
  complexQ({
    id: "mkt-009",
    module: "marketing",
    text: {
      en: "How does A/B testing work on an Odoo 19 email mailing?",
      fr: "Comment fonctionne le test A/B sur un mailing e-mail dans Odoo 19 ?",
    },
    correct: {
      en: "Send variants to a sample percentage, pick a winner (open/click/leads/revenue), then send it to the rest on Send Final On",
      fr: "Envoyer des variantes à un échantillon (%), choisir un gagnant (ouverture/clic/pistes/revenus), puis l'envoyer au reste à la date Send Final On",
    },
    distractors: [
      {
        en: "Duplicate the mailing into two CRM pipelines and compare opportunity win rates after 30 days",
        fr: "Dupliquer le mailing en deux pipelines CRM et comparer les taux de gain d'opportunités après 30 jours",
      },
      {
        en: "Send both versions to the entire list simultaneously and let recipients choose their preferred layout",
        fr: "Envoyer les deux versions à toute la liste simultanément et laisser les destinataires choisir leur mise en page",
      },
      {
        en: "Test only the mailing list name while keeping subject line and body identical across all recipients",
        fr: "Tester uniquement le nom de la liste de diffusion en gardant objet et corps identiques pour tous les destinataires",
      },
    ],
    explanation: {
      en: "A/B Tests on mailings compare variants on a subset, select a winner by chosen criteria, and auto-send the winner to remaining recipients.",
      fr: "Les tests A/B comparent des variantes sur un sous-ensemble, sélectionnent un gagnant selon le critère choisi et l'envoient au reste.",
    },
  }),
  complexQ({
    id: "mkt-010",
    module: "marketing",
    text: {
      en: "Which activity types can appear in a Marketing Automation workflow in Odoo 19?",
      fr: "Quels types d'activités peuvent figurer dans un workflow Marketing Automation Odoo 19 ?",
    },
    correct: {
      en: "Send email, send SMS, wait/delay, and server actions (internal automated operations)",
      fr: "Envoyer un e-mail, envoyer un SMS, attendre/délai et actions serveur (opérations internes automatisées)",
    },
    distractors: [
      {
        en: "Manufacturing work orders, bill of materials updates, and shop floor quality checks only",
        fr: "Uniquement des ordres de travail fabrication, mises à jour de nomenclature et contrôles qualité atelier",
      },
      {
        en: "Payroll payslip generation, expense approval, and employee contract renewal steps only",
        fr: "Uniquement génération de fiches de paie, validation de notes de frais et renouvellement de contrats employés",
      },
      {
        en: "Bank reconciliation models, journal entry posting, and fiscal year closing operations only",
        fr: "Uniquement modèles de rapprochement bancaire, comptabilisation d'écritures et clôture d'exercice fiscal",
      },
    ],
    explanation: {
      en: "Marketing Automation activities include email, SMS, timed waits, and server actions to update records or trigger internal logic.",
      fr: "Les activités Marketing Automation incluent e-mail, SMS, délais et actions serveur pour mettre à jour des enregistrements.",
    },
  }),
  complexQ({
    id: "mkt-011",
    module: "marketing",
    text: {
      en: "How does Odoo 19 prevent blacklisted contacts from receiving marketing emails?",
      fr: "Comment Odoo 19 empêche-t-il l'envoi d'e-mails marketing aux contacts blacklistés ?",
    },
    correct: {
      en: "Blacklisted email addresses are excluded from mailings; contacts can unsubscribe via mailing links",
      fr: "Les adresses blacklistées sont exclues des mailings ; les contacts peuvent se désabonner via les liens des envois",
    },
    distractors: [
      {
        en: "Blacklisted contacts are moved to the CRM Lost stage and receive the mailing in a separate archive folder",
        fr: "Les contacts blacklistés passent à l'étape Perdu CRM et reçoivent le mailing dans un dossier archive séparé",
      },
      {
        en: "Opt-out is recorded only on the mailing record and does not affect future campaigns to the same address",
        fr: "Le désabonnement est enregistré uniquement sur le mailing et n'affecte pas les campagnes futures à la même adresse",
      },
      {
        en: "Unsubscribed contacts remain eligible if they belong to a VIP Sales pricelist or top CRM priority tag",
        fr: "Les contacts désabonnés restent éligibles s'ils appartiennent à une liste de prix VIP ou un tag CRM prioritaire",
      },
    ],
    explanation: {
      en: "Odoo maintains a blacklist of opted-out addresses and automatically excludes them from Email Marketing recipients.",
      fr: "Odoo maintient une blacklist des adresses désabonnées et les exclut automatiquement des destinataires Email Marketing.",
    },
  }),
  complexQ({
    id: "mkt-012",
    module: "marketing",
    text: {
      en: "What is the primary function of the Social Marketing app in Odoo 19?",
      fr: "Quelle est la fonction principale de l'app Social Marketing dans Odoo 19 ?",
    },
    correct: {
      en: "Schedule and publish posts to connected social media accounts from Odoo",
      fr: "Planifier et publier des posts sur les comptes de réseaux sociaux connectés depuis Odoo",
    },
    distractors: [
      {
        en: "Synchronize inventory levels to social platforms and auto-create purchase orders from likes",
        fr: "Synchroniser les niveaux de stock vers les réseaux sociaux et créer des achats automatiquement depuis les likes",
      },
      {
        en: "Replace the Website blog module by hosting all articles exclusively on third-party social feeds",
        fr: "Remplacer le module blog Website en hébergeant tous les articles exclusivement sur des flux sociaux tiers",
      },
      {
        en: "Generate payslip summaries and post them to employees' private social media profiles monthly",
        fr: "Générer des résumés de fiches de paie et les publier mensuellement sur les profils sociaux privés des employés",
      },
    ],
    explanation: {
      en: "Social Marketing connects social accounts so marketing teams can plan, publish, and track posts from Odoo.",
      fr: "Social Marketing connecte les comptes sociaux pour planifier, publier et suivre les posts depuis Odoo.",
    },
  }),
  complexQ({
    id: "mkt-013",
    module: "marketing",
    text: {
      en: "When a visitor submits a website form configured to create leads, what is created in Odoo 19?",
      fr: "Lorsqu'un visiteur soumet un formulaire website configuré pour créer des pistes, que crée Odoo 19 ?",
    },
    correct: {
      en: "A CRM lead (or opportunity) with UTM and form metadata attached to the submission",
      fr: "Une piste CRM (ou opportunité) avec UTM et métadonnées du formulaire liées à la soumission",
    },
    distractors: [
      {
        en: "A draft vendor bill awaiting OCR validation in the Accounting inbox",
        fr: "Une facture fournisseur brouillon en attente de validation OCR dans la boîte Comptabilité",
      },
      {
        en: "A confirmed sales order with delivery and invoice documents posted automatically",
        fr: "Une commande de vente confirmée avec livraison et facture comptabilisées automatiquement",
      },
      {
        en: "An internal Discuss task assigned to the website administrator without CRM record creation",
        fr: "Une tâche Discuss interne assignée à l'administrateur website sans création d'enregistrement CRM",
      },
    ],
    explanation: {
      en: "Website forms can be configured to create CRM leads, preserving UTM campaign attribution from the visitor session.",
      fr: "Les formulaires website peuvent créer des pistes CRM en conservant l'attribution UTM de la session visiteur.",
    },
  }),
  complexQ({
    id: "mkt-014",
    module: "marketing",
    text: {
      en: "What defines the participants of a Marketing Automation campaign in Odoo 19?",
      fr: "Qu'est-ce qui définit les participants d'une campagne Marketing Automation dans Odoo 19 ?",
    },
    correct: {
      en: "A filter domain on records (e.g., contacts) plus trigger conditions that enroll matching records",
      fr: "Un domaine de filtre sur des enregistrements (ex. contacts) et des conditions de déclenchement qui inscrivent les correspondances",
    },
    distractors: [
      {
        en: "Every contact in the database is enrolled permanently regardless of filters or trigger events",
        fr: "Tous les contacts de la base sont inscrits en permanence sans tenir compte des filtres ni des déclencheurs",
      },
      {
        en: "Only sales orders in the Quotation state can be participants of a marketing automation workflow",
        fr: "Seules les commandes de vente à l'état Devis peuvent être participantes d'un workflow marketing automation",
      },
      {
        en: "Participants are limited to employees listed on the current manufacturing work center roster",
        fr: "Les participants sont limités aux employés listés sur le registre du poste de travail fabrication actuel",
      },
    ],
    explanation: {
      en: "Automation campaigns target records matching a defined domain and enroll them when trigger conditions are met.",
      fr: "Les campagnes d'automation ciblent des enregistrements correspondant à un domaine et les inscrivent quand les déclencheurs sont remplis.",
    },
  }),
  complexQ({
    id: "mkt-015",
    module: "marketing",
    text: {
      en: "How do you personalize email content with contact data in Odoo 19 Email Marketing?",
      fr: "Comment personnaliser le contenu e-mail avec les données contact dans Email Marketing Odoo 19 ?",
    },
    correct: {
      en: "Insert dynamic placeholders (merge fields) such as contact name or company into the mailing body",
      fr: "Insérer des placeholders dynamiques (champs de fusion) comme le nom du contact ou la société dans le corps du mailing",
    },
    distractors: [
      {
        en: "Duplicate the mailing once per contact and manually edit each copy before batch sending",
        fr: "Dupliquer le mailing une fois par contact et modifier manuellement chaque copie avant envoi groupé",
      },
      {
        en: "Rely on the fiscal position mapping to replace product names with contact-specific tax labels",
        fr: "S'appuyer sur le mapping de position fiscale pour remplacer les noms produits par des libellés fiscaux contact",
      },
      {
        en: "Configure personalization exclusively through Studio Python code on the mailing list record",
        fr: "Configurer la personnalisation exclusivement via du code Python Studio sur l'enregistrement liste de diffusion",
      },
    ],
    explanation: {
      en: "Email Marketing supports merge fields that dynamically insert contact and related record values into campaign content.",
      fr: "Email Marketing supporte des champs de fusion insérant dynamiquement les valeurs contact et enregistrements liés.",
    },
  }),
  complexQ({
    id: "mkt-016",
    module: "marketing",
    text: {
      en: "What does the Link Tracker in Odoo 19 Marketing record?",
      fr: "Qu'enregistre le Link Tracker dans Marketing Odoo 19 ?",
    },
    correct: {
      en: "Short tracked URLs with click counts, used to measure campaign link performance and UTM attribution",
      fr: "Des URL courtes trackées avec compteur de clics, pour mesurer la performance des liens campagne et l'attribution UTM",
    },
    distractors: [
      {
        en: "Serial numbers of delivered products scanned during warehouse outbound operations",
        fr: "Les numéros de série des produits livrés scannés lors des opérations de sortie d'entrepôt",
      },
      {
        en: "Employee attendance check-in URLs generated by the Time Off app for remote workers",
        fr: "Les URL de pointage employés générées par l'app Congés pour les travailleurs à distance",
      },
      {
        en: "Bank statement download links stored during automatic bank synchronization imports",
        fr: "Les liens de téléchargement de relevés bancaires stockés lors des imports de synchronisation bancaire",
      },
    ],
    explanation: {
      en: "Link Tracker creates shortened URLs that log clicks and tie traffic back to marketing campaigns and mediums.",
      fr: "Le Link Tracker crée des URL raccourcies journalisant les clics et reliant le trafic aux campagnes et mediums marketing.",
    },
  }),
  complexQ({
    id: "mkt-017",
    module: "marketing",
    text: {
      en: "How do you schedule an email mailing for future delivery in Odoo 19?",
      fr: "Comment planifier un mailing e-mail pour un envoi ultérieur dans Odoo 19 ?",
    },
    correct: {
      en: "Set the Schedule Date on the mailing form before clicking Send or Schedule",
      fr: "Définir la date de planification (Schedule Date) sur le formulaire mailing avant d'envoyer ou planifier",
    },
    distractors: [
      {
        en: "Create a Calendar event and attach the mailing PDF; Odoo sends it when attendees accept the invite",
        fr: "Créer un événement Calendrier et joindre le PDF du mailing ; Odoo l'envoie quand les participants acceptent",
      },
      {
        en: "Use the Manufacturing planning Gantt to slot the mailing between work orders on the shop floor",
        fr: "Utiliser le Gantt de planification Fabrication pour placer le mailing entre les ordres de travail atelier",
      },
      {
        en: "Configure a recurring server action on the CRM team that fires at payroll validation each month",
        fr: "Configurer une action serveur récurrente sur l'équipe CRM déclenchée à chaque validation de paie mensuelle",
      },
    ],
    explanation: {
      en: "Mailings support a scheduled send date so campaigns can be prepared in advance and delivered at the chosen time.",
      fr: "Les mailings supportent une date d'envoi planifiée pour préparer les campagnes à l'avance et les livrer au moment choisi.",
    },
  }),
  complexQ({
    id: "mkt-018",
    module: "marketing",
    text: {
      en: "What does the Events app provide for marketing teams in Odoo 19?",
      fr: "Que fournit l'app Événements aux équipes marketing dans Odoo 19 ?",
    },
    correct: {
      en: "Event management with registrations, tickets, attendees, and website promotion pages",
      fr: "Gestion d'événements avec inscriptions, billets, participants et pages de promotion sur le site",
    },
    distractors: [
      {
        en: "A company holiday calendar that blocks manufacturing capacity on public celebration dates only",
        fr: "Un calendrier de jours fériés bloquant la capacité fabrication uniquement aux dates de fêtes publiques",
      },
      {
        en: "An internal project milestone tracker replacing the need for CRM opportunity stages",
        fr: "Un suivi de jalons projet interne remplaçant le besoin d'étapes d'opportunités CRM",
      },
      {
        en: "A payroll event log recording salary rule changes applied during each payslip computation run",
        fr: "Un journal d'événements paie enregistrant les changements de règles salariales à chaque calcul de fiche",
      },
    ],
    explanation: {
      en: "The Events app manages registrations and tickets, integrates with Website, and can feed CRM and marketing automation.",
      fr: "L'app Événements gère inscriptions et billets, s'intègre au Website et peut alimenter CRM et marketing automation.",
    },
  }),
  complexQ({
    id: "mkt-019",
    module: "marketing",
    text: {
      en: "How does SMS Marketing work in Odoo 19?",
      fr: "Comment fonctionne SMS Marketing dans Odoo 19 ?",
    },
    correct: {
      en: "Send bulk SMS campaigns to filtered contacts using IAP SMS credits with delivery status tracking",
      fr: "Envoyer des campagnes SMS en masse à des contacts filtrés via des crédits IAP SMS avec suivi du statut de livraison",
    },
    distractors: [
      {
        en: "Forward Discuss chat messages as SMS through the employee's personal phone without credit tracking",
        fr: "Transférer les messages Discuss en SMS via le téléphone personnel de l'employé sans suivi de crédits",
      },
      {
        en: "Convert every incoming CRM call log into an automatic SMS reply using the telephony module only",
        fr: "Convertir chaque journal d'appel CRM entrant en réponse SMS automatique via le module téléphonie uniquement",
      },
      {
        en: "Send SMS exclusively from the Point of Sale receipt printer to customers at checkout",
        fr: "Envoyer des SMS exclusivement depuis l'imprimante ticket du Point de Vente aux clients en caisse",
      },
    ],
    explanation: {
      en: "SMS Marketing sends campaigns to contact lists and consumes IAP credits; delivery status is tracked per message.",
      fr: "SMS Marketing envoie des campagnes aux listes de contacts en consommant des crédits IAP ; le statut de livraison est suivi.",
    },
  }),
  complexQ({
    id: "mkt-020",
    module: "marketing",
    text: {
      en: "How can you analyze marketing campaign ROI in Odoo 19?",
      fr: "Comment analyser le ROI des campagnes marketing dans Odoo 19 ?",
    },
    correct: {
      en: "Use UTM and marketing reports linking campaigns to CRM wins, quotations, and revenues generated",
      fr: "Utiliser les rapports UTM et marketing reliant les campagnes aux gains CRM, devis et revenus générés",
    },
    distractors: [
      {
        en: "Review the Inventory turnover report grouped by product category and warehouse valuation method",
        fr: "Consulter le rapport de rotation stock groupé par catégorie produit et méthode de valorisation entrepôt",
      },
      {
        en: "Measure ROI solely through the Manufacturing OEE dashboard comparing work center downtime hours",
        fr: "Mesurer le ROI uniquement via le tableau de bord OEE Fabrication comparant les heures d'arrêt des postes",
      },
      {
        en: "Calculate campaign return exclusively from the Payroll employer cost report by department",
        fr: "Calculer le retour campagne exclusivement depuis le rapport de coûts employeur Paie par département",
      },
    ],
    explanation: {
      en: "UTM attribution connects marketing campaigns to downstream CRM and sales outcomes for revenue-based ROI analysis.",
      fr: "L'attribution UTM relie les campagnes marketing aux résultats CRM et ventes en aval pour une analyse ROI basée sur les revenus.",
    },
  }),
];
