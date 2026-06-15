import { complexQ } from "./helpers";

export const crmQuestions = [
  complexQ({
    id: "crm-001",
    module: "crm",
    text: {
      en: "In Odoo 19 CRM, what is the functional difference between a Lead and an Opportunity when the Leads feature is enabled?",
      fr: "Dans le CRM Odoo 19, quelle est la différence fonctionnelle entre une « Piste » et une « Opportunité » lorsque la fonctionnalité Pistes est activée ?",
    },
    correct: {
      en: "A lead is an unqualified prospect record; once qualified, it becomes an opportunity tracked through pipeline stages",
      fr: "La piste est un prospect non qualifié ; une fois qualifiée, elle devient une opportunité suivie via les étapes du pipeline",
    },
    distractors: [
      {
        en: "A lead is always created from website forms, whereas an opportunity can only be created manually from My Pipeline",
        fr: "Une piste est toujours créée depuis les formulaires web, alors qu'une opportunité ne peut être créée que manuellement depuis Mon pipeline",
      },
      {
        en: "An opportunity is a draft quotation, while a lead is a confirmed sales order awaiting delivery",
        fr: "Une opportunité est un devis brouillon, tandis qu'une piste est une commande client confirmée en attente de livraison",
      },
      {
        en: "Leads and opportunities differ only by priority stars; both records follow the same pipeline stages from creation",
        fr: "Pistes et opportunités ne diffèrent que par les étoiles de priorité ; les deux suivent les mêmes étapes du pipeline dès la création",
      },
    ],
    explanation: {
      en: "Odoo 19 documentation states that leads act as a qualifying step before a formal opportunity is created. Enabling Leads (CRM ‣ Configuration ‣ Settings) adds a Leads menu; qualified leads are converted to opportunities in the pipeline.",
      fr: "La documentation Odoo 19 indique que les pistes servent d'étape de qualification avant la création d'une opportunité formelle. L'activation des Pistes (CRM ‣ Configuration ‣ Paramètres) ajoute le menu Pistes ; les pistes qualifiées sont converties en opportunités dans le pipeline.",
    },
  }),
  complexQ({
    id: "crm-002",
    module: "crm",
    text: {
      en: "How do you convert a lead into an opportunity in Odoo 19 CRM?",
      fr: "Comment convertir une piste en opportunité dans le CRM Odoo 19 ?",
    },
    correct: {
      en: "Open the lead and click Convert to Opportunity, then choose Convert to opportunity in the Conversion Action field",
      fr: "Ouvrir la piste et cliquer sur « Convertir en opportunité », puis choisir « Convertir en opportunité » dans le champ Action de conversion",
    },
    distractors: [
      {
        en: "Drag the lead card from the Leads list view directly onto the Won stage in My Pipeline",
        fr: "Glisser la carte piste depuis la vue liste Pistes directement sur l'étape Gagné dans Mon pipeline",
      },
      {
        en: "Use the Merge with existing opportunities action without opening the Convert to Opportunity wizard",
        fr: "Utiliser l'action « Fusionner avec les opportunités existantes » sans ouvrir l'assistant Convertir en opportunité",
      },
      {
        en: "Set the lead probability to 100 % on the form; Odoo then automatically promotes it to an opportunity",
        fr: "Définir la probabilité de la piste à 100 % sur la fiche ; Odoo la promeut alors automatiquement en opportunité",
      },
    ],
    explanation: {
      en: "Odoo 19 requires the Convert to Opportunity button on the lead form. The wizard lets you assign a salesperson, link or create a customer, and choose merge or convert. Attempting to convert a lead with 100 % probability triggers an error.",
      fr: "Odoo 19 exige le bouton « Convertir en opportunité » sur la fiche piste. L'assistant permet d'assigner un commercial, lier ou créer un client, et choisir fusion ou conversion. Tenter de convertir une piste à 100 % de probabilité génère une erreur.",
    },
  }),
  complexQ({
    id: "crm-003",
    module: "crm",
    text: {
      en: "What does a CRM pipeline represent in Odoo 19?",
      fr: "Que représente un pipeline CRM dans Odoo 19 ?",
    },
    correct: {
      en: "A sequence of stages (e.g. New, Qualified, Proposition) that track the progress of opportunities toward Won or Lost",
      fr: "Une séquence d'étapes (ex. Nouveau, Qualifié, Proposition) qui suit l'avancement des opportunités vers Gagné ou Perdu",
    },
    distractors: [
      {
        en: "A predefined activity plan applied automatically to every new lead created from an email alias",
        fr: "Un plan d'activités prédéfini appliqué automatiquement à chaque nouvelle piste créée depuis un alias e-mail",
      },
      {
        en: "The invoicing target progress bar displayed on each sales team's dashboard card in CRM ‣ Sales ‣ Teams",
        fr: "La barre de progression de l'objectif de facturation affichée sur chaque carte d'équipe commerciale dans CRM ‣ Ventes ‣ Équipes",
      },
      {
        en: "A filtered pivot report grouping opportunities by Expected Revenue and Salesperson in CRM ‣ Reporting",
        fr: "Un rapport pivot filtré regroupant les opportunités par Revenu attendu et Commercial dans CRM ‣ Rapports",
      },
    ],
    explanation: {
      en: "Odoo 19 organizes opportunities in a pipeline with customizable stages per sales team. The Kanban view in My Pipeline is the standard interface for moving opportunities between stages.",
      fr: "Odoo 19 organise les opportunités dans un pipeline avec des étapes personnalisables par équipe commerciale. La vue Kanban de Mon pipeline est l'interface standard pour déplacer les opportunités entre les étapes.",
    },
  }),
  complexQ({
    id: "crm-004",
    module: "crm",
    text: {
      en: "How can incoming leads be automatically assigned to salespeople in Odoo 19 CRM?",
      fr: "Comment les pistes entrantes peuvent-elles être assignées automatiquement aux commerciaux dans le CRM Odoo 19 ?",
    },
    correct: {
      en: "Enable Rule-Based Assignment in CRM settings and configure assignment domains on sales teams or individual members",
      fr: "Activer l'« Assignation basée sur des règles » dans les paramètres CRM et configurer les domaines d'assignation sur les équipes ou les membres",
    },
    distractors: [
      {
        en: "Set a Default User on each CRM activity type under Configuration ‣ Activity Types",
        fr: "Définir un « Utilisateur par défaut » sur chaque type d'activité CRM dans Configuration ‣ Types d'activités",
      },
      {
        en: "Configure the Accept Emails From field on the sales team so that only authenticated partners receive leads",
        fr: "Configurer le champ « Accepter les e-mails de » sur l'équipe commerciale pour que seuls les partenaires authentifiés reçoivent les pistes",
      },
      {
        en: "Activate Multi Teams in CRM settings so each lead is duplicated across every team the salesperson belongs to",
        fr: "Activer « Équipes multiples » dans les paramètres CRM pour que chaque piste soit dupliquée sur toutes les équipes du commercial",
      },
    ],
    explanation: {
      en: "Odoo 19 Rule-Based Assignment (CRM ‣ Configuration ‣ Settings) can run repeatedly on a schedule. Domains on sales teams filter which leads are assigned; probability-based rules are supported (e.g. Probability >= 20).",
      fr: "L'assignation basée sur des règles Odoo 19 (CRM ‣ Configuration ‣ Paramètres) peut s'exécuter périodiquement. Les domaines sur les équipes filtrent les pistes assignées ; des règles basées sur la probabilité sont possibles (ex. Probabilité >= 20).",
    },
  }),
  complexQ({
    id: "crm-005",
    module: "crm",
    text: {
      en: "Which Odoo 19 CRM report is primarily used to analyze win rate, pipeline velocity, and opportunity performance?",
      fr: "Quel rapport CRM Odoo 19 est principalement utilisé pour analyser le taux de gain, la vélocité du pipeline et la performance des opportunités ?",
    },
    correct: {
      en: "Pipeline Analysis (CRM ‣ Reporting ‣ Pipeline), with measures such as Expected Revenue and stage duration",
      fr: "Analyse du pipeline (CRM ‣ Rapports ‣ Pipeline), avec des mesures telles que Revenu attendu et durée par étape",
    },
    distractors: [
      {
        en: "Expected Revenue report filtered by Expected Closing date and Salesperson for monthly quota tracking",
        fr: "Rapport Revenu attendu filtré par Date de clôture prévue et Commercial pour le suivi des objectifs mensuels",
      },
      {
        en: "Forecast report grouping opportunities by sales team invoicing targets on the CRM Teams dashboard",
        fr: "Rapport Prévisions regroupant les opportunités par objectifs de facturation des équipes sur le tableau de bord Équipes CRM",
      },
      {
        en: "Sales Analysis report in the Sales app measuring confirmed order revenue rather than open pipeline data",
        fr: "Rapport Analyse des ventes dans l'application Ventes mesurant le CA des commandes confirmées plutôt que les données du pipeline ouvert",
      },
    ],
    explanation: {
      en: "Odoo 19 Pipeline Analysis (CRM ‣ Reporting ‣ Pipeline) provides KPIs on conversion, cycle time, and stage performance. The Expected Revenue report focuses on forecasted closing dates for quota tracking.",
      fr: "L'analyse du pipeline Odoo 19 (CRM ‣ Rapports ‣ Pipeline) fournit des KPI sur la conversion, la durée du cycle et la performance par étape. Le rapport Revenu attendu se concentre sur les dates de clôture prévues pour le suivi des objectifs.",
    },
  }),
  complexQ({
    id: "crm-006",
    module: "crm",
    text: {
      en: "How do you schedule a follow-up call or meeting on an opportunity in Odoo 19 CRM?",
      fr: "Comment planifier un appel ou une réunion de suivi sur une opportunité dans le CRM Odoo 19 ?",
    },
    correct: {
      en: "Click Activity on the opportunity form and select a Call or Meeting activity type to schedule it in the chatter",
      fr: "Cliquer sur « Activité » sur la fiche opportunité et sélectionner un type Appel ou Réunion pour la planifier dans le chatter",
    },
    distractors: [
      {
        en: "Create a Calendar event in the Calendar app and manually paste the opportunity URL into the event description",
        fr: "Créer un événement Calendrier dans l'application Calendrier et coller manuellement l'URL de l'opportunité dans la description",
      },
      {
        en: "Launch an activity plan from Configuration ‣ Activity Plans; plans can only be applied at sales team level",
        fr: "Lancer un plan d'activités depuis Configuration ‣ Plans d'activités ; les plans ne s'appliquent qu'au niveau de l'équipe commerciale",
      },
      {
        en: "Set the Expected Closing date field; Odoo automatically creates a Meeting activity on that date for the salesperson",
        fr: "Renseigner le champ Date de clôture prévue ; Odoo crée automatiquement une activité Réunion à cette date pour le commercial",
      },
    ],
    explanation: {
      en: "Odoo 19 CRM activities (Call, Meeting, To Do, Email) are scheduled via the Activity button on leads and opportunities. Call and Meeting types open a calendar link for time-slot scheduling.",
      fr: "Les activités CRM Odoo 19 (Appel, Réunion, À faire, E-mail) se planifient via le bouton « Activité » sur les pistes et opportunités. Les types Appel et Réunion ouvrent un lien calendrier pour planifier un créneau.",
    },
  }),
  complexQ({
    id: "crm-007",
    module: "crm",
    text: {
      en: "What is predictive lead scoring in Odoo 19 CRM?",
      fr: "Qu'est-ce que le scoring prédictif des pistes dans le CRM Odoo 19 ?",
    },
    correct: {
      en: "A machine-learning probability (naive Bayes) computed from historical won/lost data to prioritize leads and opportunities",
      fr: "Une probabilité calculée par apprentissage automatique (naive Bayes) à partir des données historiques gagné/perdu pour prioriser pistes et opportunités",
    },
    distractors: [
      {
        en: "The manual priority level set with star icons (low to very high) on the opportunity Kanban card",
        fr: "Le niveau de priorité manuel défini par les icônes étoiles (faible à très élevée) sur la carte Kanban de l'opportunité",
      },
      {
        en: "The Expected Revenue amount entered on the opportunity form multiplied by the sales team's monthly invoicing target",
        fr: "Le montant de Revenu attendu saisi sur la fiche opportunité multiplié par l'objectif de facturation mensuel de l'équipe",
      },
      {
        en: "A points system configured in Lead Mining settings based on the number of website page visits per contact",
        fr: "Un système de points configuré dans les paramètres Prospection de pistes basé sur le nombre de visites de pages web par contact",
      },
    ],
    explanation: {
      en: "Odoo 19 predictive lead scoring is always active. It uses historical CRM data and configurable variables (country, source, tags, etc.) via Update Probabilities in CRM settings. Probability updates as opportunities move through stages.",
      fr: "Le scoring prédictif Odoo 19 est toujours actif. Il utilise les données CRM historiques et des variables configurables (pays, source, étiquettes, etc.) via « Mettre à jour les probabilités » dans les paramètres CRM. La probabilité évolue avec les étapes du pipeline.",
    },
  }),
  complexQ({
    id: "crm-008",
    module: "crm",
    text: {
      en: "How do you mark an opportunity as Won in Odoo 19 CRM?",
      fr: "Comment marquer une opportunité comme « Gagnée » dans le CRM Odoo 19 ?",
    },
    correct: {
      en: "Drag the opportunity to the Won stage in the Kanban pipeline or use the Won action on the opportunity form",
      fr: "Glisser l'opportunité vers l'étape Gagné dans le pipeline Kanban ou utiliser l'action Gagné sur la fiche opportunité",
    },
    distractors: [
      {
        en: "Set the probability field to 100 % and click Save; the opportunity is automatically moved to the Won stage",
        fr: "Définir le champ probabilité à 100 % et cliquer sur Enregistrer ; l'opportunité est automatiquement déplacée vers l'étape Gagné",
      },
      {
        en: "Click New Quotation on the opportunity; confirming the quotation marks the linked opportunity as Won",
        fr: "Cliquer sur « Nouveau devis » sur l'opportunité ; la confirmation du devis marque l'opportunité liée comme Gagnée",
      },
      {
        en: "Archive the opportunity from the Action menu; archived opportunities are counted as Won in pipeline reports",
        fr: "Archiver l'opportunité depuis le menu Action ; les opportunités archivées sont comptées comme Gagnées dans les rapports pipeline",
      },
    ],
    explanation: {
      en: "Odoo 19 moves won opportunities to the Won pipeline stage. From a won opportunity, New Quotation can create a linked sales quotation. Setting probability to 100 % on a lead blocks conversion with an error.",
      fr: "Odoo 19 déplace les opportunités gagnées vers l'étape Gagné du pipeline. Depuis une opportunité gagnée, « Nouveau devis » peut créer un devis lié. Définir la probabilité à 100 % sur une piste bloque la conversion avec une erreur.",
    },
  }),
  complexQ({
    id: "crm-009",
    module: "crm",
    text: {
      en: "What is the purpose of sales teams in Odoo 19 CRM?",
      fr: "À quoi servent les équipes commerciales dans le CRM Odoo 19 ?",
    },
    correct: {
      en: "Group salespeople with dedicated pipelines, email aliases, assignment rules, and optional invoicing targets",
      fr: "Regrouper les commerciaux avec des pipelines dédiés, alias e-mail, règles d'assignation et objectifs de facturation optionnels",
    },
    distractors: [
      {
        en: "Define warehouse routes and delivery policies applied automatically when an opportunity reaches the Won stage",
        fr: "Définir les routes d'entrepôt et politiques de livraison appliquées automatiquement quand une opportunité atteint l'étape Gagné",
      },
      {
        en: "Restrict CRM record visibility through record rules so each team can only access contacts in its country",
        fr: "Restreindre la visibilité des enregistrements CRM via des règles d'enregistrement pour que chaque équipe n'accède qu'aux contacts de son pays",
      },
      {
        en: "Replace the Salesperson field on quotations; all confirmed orders inherit the team leader as the default salesperson",
        fr: "Remplacer le champ Commercial sur les devis ; toutes les commandes confirmées héritent du chef d'équipe comme commercial par défaut",
      },
    ],
    explanation: {
      en: "Odoo 19 sales teams (CRM ‣ Configuration ‣ Sales Teams) organize pipelines, email aliases, lead/opportunity routing, and assignment rules. With Sales installed, an Invoicing Target field tracks monthly revenue goals.",
      fr: "Les équipes commerciales Odoo 19 (CRM ‣ Configuration ‣ Équipes commerciales) organisent pipelines, alias e-mail, routage pistes/opportunités et règles d'assignation. Avec Ventes installé, le champ Objectif de facturation suit les objectifs mensuels.",
    },
  }),
  complexQ({
    id: "crm-010",
    module: "crm",
    text: {
      en: "Why should lost reasons be configured when marking an opportunity as Lost in Odoo 19?",
      fr: "Pourquoi configurer des motifs de perte lors du marquage d'une opportunité comme Perdue dans Odoo 19 ?",
    },
    correct: {
      en: "To analyze why deals fail and improve sales strategy through CRM reporting and lost-opportunity filters",
      fr: "Pour analyser les causes d'échec et améliorer la stratégie commerciale via les rapports CRM et les filtres opportunités perdues",
    },
    distractors: [
      {
        en: "To automatically cancel any confirmed sales orders linked to the opportunity and reverse related delivery orders",
        fr: "Pour annuler automatiquement les commandes client confirmées liées à l'opportunité et inverser les bons de livraison associés",
      },
      {
        en: "To trigger the Restore action so the opportunity re-enters the pipeline at the Proposition stage after 30 days",
        fr: "Pour déclencher l'action Restaurer afin que l'opportunité réintègre le pipeline à l'étape Proposition après 30 jours",
      },
      {
        en: "To satisfy a mandatory accounting control that blocks customer invoicing until a lost reason is recorded",
        fr: "Pour satisfaire un contrôle comptable obligatoire bloquant la facturation client tant qu'un motif de perte n'est pas renseigné",
      },
    ],
    explanation: {
      en: "Odoo 19 lost reasons (CRM ‣ Configuration ‣ Lost Reasons) support traceability when clicking Lost on an opportunity. The Lost filter and custom filters on Lost Reason enable performance analysis.",
      fr: "Les motifs de perte Odoo 19 (CRM ‣ Configuration ‣ Motifs de perte) assurent la traçabilité via le bouton Perdu. Le filtre Perdu et les filtres personnalisés sur Motif de perte permettent l'analyse de performance.",
    },
  }),
  complexQ({
    id: "crm-011",
    module: "crm",
    text: {
      en: "How do you consolidate duplicate leads or opportunities in Odoo 19 CRM?",
      fr: "Comment regrouper des pistes ou opportunités en doublon dans le CRM Odoo 19 ?",
    },
    correct: {
      en: "Use Convert to Opportunity with Merge with existing opportunities, or merge via the Similar Leads smart button workflow",
      fr: "Utiliser « Convertir en opportunité » avec « Fusionner avec les opportunités existantes », ou fusionner via le bouton intelligent Pistes similaires",
    },
    distractors: [
      {
        en: "Run the deduplicate wizard in Contacts ‣ Configuration ‣ Deduplicate Contacts on all CRM pipeline records",
        fr: "Exécuter l'assistant de dédoublonnage dans Contacts ‣ Configuration ‣ Dédoublonner les contacts sur tous les enregistrements du pipeline CRM",
      },
      {
        en: "Archive the newer duplicate; Odoo automatically merges chatter messages into the oldest active opportunity",
        fr: "Archiver le doublon le plus récent ; Odoo fusionne automatiquement les messages du chatter dans l'opportunité active la plus ancienne",
      },
      {
        en: "Apply the Lost filter and bulk-unarchive records from the Actions menu to combine duplicate pipeline cards",
        fr: "Appliquer le filtre Perdu et désarchiver en masse depuis le menu Action pour combiner les cartes pipeline en doublon",
      },
    ],
    explanation: {
      en: "Odoo 19 merge gives priority to the oldest record and consolidates information into one opportunity. The Similar Leads smart button appears when duplicates are detected during lead conversion.",
      fr: "La fusion Odoo 19 priorise l'enregistrement le plus ancien et consolide les informations en une opportunité. Le bouton intelligent Pistes similaires apparaît lorsque des doublons sont détectés à la conversion.",
    },
  }),
  complexQ({
    id: "crm-012",
    module: "crm",
    text: {
      en: "What are tags used for on CRM leads and opportunities in Odoo 19?",
      fr: "À quoi servent les étiquettes sur les pistes et opportunités CRM dans Odoo 19 ?",
    },
    correct: {
      en: "Categorize and filter records for segmentation, campaigns, and reporting—including predictive scoring variables",
      fr: "Catégoriser et filtrer les enregistrements pour la segmentation, les campagnes et les rapports—y compris comme variable de scoring prédictif",
    },
    distractors: [
      {
        en: "Replace lost reasons when marking an opportunity as Lost; each tag maps to a predefined Closing Note",
        fr: "Remplacer les motifs de perte lors du marquage Perdu ; chaque étiquette correspond à une Note de clôture prédéfinie",
      },
      {
        en: "Lock the opportunity stage so it cannot be dragged in the Kanban view until the tag is removed",
        fr: "Verrouiller l'étape de l'opportunité pour qu'elle ne puisse pas être glissée en Kanban tant que l'étiquette n'est pas retirée",
      },
      {
        en: "Define the invoicing policy (ordered vs delivered quantities) applied when creating a quotation from the opportunity",
        fr: "Définir la politique de facturation (quantités commandées vs livrées) appliquée lors de la création d'un devis depuis l'opportunité",
      },
    ],
    explanation: {
      en: "Odoo 19 tags classify opportunities for filtering and analysis. Tags are also an optional variable in predictive lead scoring (CRM ‣ Configuration ‣ Settings ‣ Update Probabilities).",
      fr: "Les étiquettes Odoo 19 classent les opportunités pour le filtrage et l'analyse. Elles sont aussi une variable optionnelle du scoring prédictif (CRM ‣ Configuration ‣ Paramètres ‣ Mettre à jour les probabilités).",
    },
  }),
  complexQ({
    id: "crm-013",
    module: "crm",
    text: {
      en: "How can incoming emails automatically create CRM leads in Odoo 19?",
      fr: "Comment des e-mails entrants peuvent-ils créer automatiquement des pistes CRM dans Odoo 19 ?",
    },
    correct: {
      en: "Configure an Email Alias on a sales team (CRM ‣ Configuration ‣ Sales Teams); messages create leads with subject and sender details",
      fr: "Configurer un « Alias e-mail » sur une équipe commerciale (CRM ‣ Configuration ‣ Équipes commerciales) ; les messages créent des pistes avec objet et expéditeur",
    },
    distractors: [
      {
        en: "Enable the Incoming Mail Server in Settings ‣ Technical ‣ Incoming Mail Servers and set the default model to res.partner",
        fr: "Activer le serveur de messagerie entrant dans Paramètres ‣ Technique ‣ Serveurs de messagerie entrants et définir le modèle par défaut sur res.partner",
      },
      {
        en: "Install the Lead Mining IAP service; mined leads are delivered by email and must be imported manually into CRM",
        fr: "Installer le service IAP Prospection de pistes ; les pistes extraites sont envoyées par e-mail et doivent être importées manuellement dans le CRM",
      },
      {
        en: "Set the website contact form Action to Send an Email and route messages through the sales team's chatter followers",
        fr: "Définir l'action du formulaire de contact web sur « Envoyer un e-mail » et router les messages via les abonnés du chatter de l'équipe",
      },
    ],
    explanation: {
      en: "Odoo 19 documentation: each sales team can have a unique email alias. Incoming messages create leads (or opportunities if Leads is disabled) with the email added to the chatter and contact details populated.",
      fr: "Documentation Odoo 19 : chaque équipe commerciale peut avoir un alias e-mail unique. Les messages entrants créent des pistes (ou opportunités si Pistes est désactivé) avec l'e-mail dans le chatter et les coordonnées renseignées.",
    },
  }),
  complexQ({
    id: "crm-014",
    module: "crm",
    text: {
      en: "How is Expected Revenue calculated on an Odoo 19 CRM opportunity?",
      fr: "Comment le Revenu attendu est-il calculé sur une opportunité CRM Odoo 19 ?",
    },
    correct: {
      en: "The opportunity amount (expected closing value) weighted by the AI-computed or manual win probability percentage",
      fr: "Le montant de l'opportunité (valeur de clôture prévue) pondéré par le pourcentage de probabilité de gain (IA ou manuel)",
    },
    distractors: [
      {
        en: "The sum of all confirmed customer invoices linked to the opportunity through related sales orders",
        fr: "La somme de toutes les factures client confirmées liées à l'opportunité via les commandes de vente associées",
      },
      {
        en: "The sales team's Invoicing Target divided by the number of open opportunities assigned to that team",
        fr: "L'objectif de facturation de l'équipe commerciale divisé par le nombre d'opportunités ouvertes assignées à cette équipe",
      },
      {
        en: "The total of order lines on draft quotations created from the opportunity, regardless of probability",
        fr: "Le total des lignes de commande des devis brouillon créés depuis l'opportunité, indépendamment de la probabilité",
      },
    ],
    explanation: {
      en: "Odoo 19 Expected Revenue combines the deal value with predictive lead scoring probability for forecasting. The Expected Revenue report (CRM ‣ Reporting) filters by Expected Closing date for quota analysis.",
      fr: "Le Revenu attendu Odoo 19 combine la valeur de l'affaire avec la probabilité du scoring prédictif pour les prévisions. Le rapport Revenu attendu (CRM ‣ Rapports) filtre par Date de clôture prévue pour l'analyse des objectifs.",
    },
  }),
  complexQ({
    id: "crm-015",
    module: "crm",
    text: {
      en: "Which view displays CRM opportunities as cards organized by pipeline stage in Odoo 19?",
      fr: "Quelle vue affiche les opportunités CRM sous forme de cartes organisées par étape du pipeline dans Odoo 19 ?",
    },
    correct: {
      en: "Kanban view in CRM ‣ Sales ‣ My Pipeline, where cards are dragged between stages",
      fr: "Vue Kanban dans CRM ‣ Ventes ‣ Mon pipeline, où les cartes sont glissées entre les étapes",
    },
    distractors: [
      {
        en: "Graph view in CRM ‣ Reporting ‣ Pipeline with the Measure set to Expected Revenue and Group By Stage",
        fr: "Vue Graphique dans CRM ‣ Rapports ‣ Pipeline avec la mesure Revenu attendu et Regrouper par Étape",
      },
      {
        en: "List view with the Group By ‣ Sales Stage option enabled from the search panel filters",
        fr: "Vue liste avec l'option Regrouper par ‣ Étape commerciale activée depuis les filtres du panneau de recherche",
      },
      {
        en: "Cohort view showing opportunity retention between pipeline stages over weekly intervals",
        fr: "Vue cohorte affichant la rétention des opportunités entre les étapes du pipeline par intervalles hebdomadaires",
      },
    ],
    explanation: {
      en: "Odoo 19 My Pipeline defaults to Kanban view—the standard interface for moving opportunities between stages such as New, Qualified, Proposition, Won, and Lost.",
      fr: "Mon pipeline Odoo 19 s'affiche par défaut en Kanban—l'interface standard pour déplacer les opportunités entre les étapes Nouveau, Qualifié, Proposition, Gagné et Perdu.",
    },
  }),
  complexQ({
    id: "crm-016",
    module: "crm",
    text: {
      en: "How is a customer linked to an opportunity in Odoo 19 CRM?",
      fr: "Comment un client est-il lié à une opportunité dans le CRM Odoo 19 ?",
    },
    correct: {
      en: "Through the Customer field (partner) on the opportunity, populated during conversion or manual creation",
      fr: "Via le champ Client (partenaire) sur l'opportunité, renseigné lors de la conversion ou de la création manuelle",
    },
    distractors: [
      {
        en: "Through the Contact Name text field only; a res.partner record is created only after the opportunity is Won",
        fr: "Via le champ texte Nom du contact uniquement ; un enregistrement res.partner n'est créé qu'après le passage à Gagné",
      },
      {
        en: "Automatically when the first sales quotation is confirmed; until then the opportunity remains unlinked to any partner",
        fr: "Automatiquement à la confirmation du premier devis ; jusqu'alors l'opportunité reste sans lien vers un partenaire",
      },
      {
        en: "Through the Email Alias of the assigned sales team; the sender's partner record is linked as a follower only",
        fr: "Via l'alias e-mail de l'équipe commerciale assignée ; le partenaire de l'expéditeur est lié uniquement comme abonné",
      },
    ],
    explanation: {
      en: "Odoo 19 conversion wizard lets you create a new customer or link to an existing one. The partner centralizes sales history and is carried over when generating quotations from the opportunity.",
      fr: "L'assistant de conversion Odoo 19 permet de créer un nouveau client ou d'en lier un existant. Le partenaire centralise l'historique commercial et est repris lors de la génération de devis depuis l'opportunité.",
    },
  }),
  complexQ({
    id: "crm-017",
    module: "crm",
    text: {
      en: "What happens when you click New Quotation on a won opportunity in Odoo 19 CRM?",
      fr: "Que se passe-t-il lorsque vous cliquez sur « Nouveau devis » sur une opportunité gagnée dans le CRM Odoo 19 ?",
    },
    correct: {
      en: "A sales quotation is created in the Sales app with the customer and opportunity pre-linked on the document",
      fr: "Un devis est créé dans l'application Ventes avec le client et l'opportunité pré-liés sur le document",
    },
    distractors: [
      {
        en: "The opportunity is automatically confirmed as a sales order and a delivery order is generated if Inventory is installed",
        fr: "L'opportunité est automatiquement confirmée en commande client et un bon de livraison est généré si Inventaire est installé",
      },
      {
        en: "A customer invoice draft is created using the Expected Revenue amount and the opportunity's win probability",
        fr: "Une facture client brouillon est créée avec le montant de Revenu attendu et la probabilité de gain de l'opportunité",
      },
      {
        en: "The opportunity reverts to the Proposition stage until the quotation is sent by email to the customer",
        fr: "L'opportunité repasse à l'étape Proposition tant que le devis n'est pas envoyé par e-mail au client",
      },
    ],
    explanation: {
      en: "Odoo 19 CRM integrates with Sales: New Quotation opens a quotation form with the opportunity and customer linked. The user still confirms the quotation separately to create a sales order.",
      fr: "Le CRM Odoo 19 s'intègre aux Ventes : « Nouveau devis » ouvre un devis avec l'opportunité et le client liés. L'utilisateur confirme ensuite le devis séparément pour créer une commande.",
    },
  }),
  complexQ({
    id: "crm-018",
    module: "crm",
    text: {
      en: "What happens when you schedule a Meeting or Call activity type on a CRM opportunity in Odoo 19?",
      fr: "Que se passe-t-il lorsque vous planifiez une activité de type Réunion ou Appel sur une opportunité CRM Odoo 19 ?",
    },
    correct: {
      en: "Odoo opens a calendar link so the user can reserve a time slot tied to the planned activity in the chatter",
      fr: "Odoo ouvre un lien calendrier pour que l'utilisateur réserve un créneau lié à l'activité planifiée dans le chatter",
    },
    distractors: [
      {
        en: "Odoo sends an automatic email invitation to the customer using the Confirmation Mail template from quotation settings",
        fr: "Odoo envoie une invitation e-mail automatique au client via le modèle « E-mail de confirmation » des paramètres devis",
      },
      {
        en: "The Expected Closing date is updated to match the activity deadline configured in the activity plan",
        fr: "La Date de clôture prévue est mise à jour pour correspondre à l'échéance de l'activité configurée dans le plan d'activités",
      },
      {
        en: "A To-Do activity is created instead; Meeting and Call types only exist in the Calendar app, not in CRM",
        fr: "Une activité À faire est créée à la place ; les types Réunion et Appel n'existent que dans Calendrier, pas dans le CRM",
      },
    ],
    explanation: {
      en: "Odoo 19 CRM activity types Call and Meeting open a calendar link for scheduling. Activities appear in the chatter's Planned Activities section and can chain to follow-up tasks.",
      fr: "Les types d'activités Appel et Réunion du CRM Odoo 19 ouvrent un lien calendrier pour la planification. Les activités apparaissent dans Activités planifiées du chatter et peuvent enchaîner des tâches de suivi.",
    },
  }),
  complexQ({
    id: "crm-019",
    module: "crm",
    text: {
      en: "How can website contact form submissions create CRM records in Odoo 19?",
      fr: "Comment les soumissions du formulaire de contact du site web peuvent-elles créer des enregistrements CRM dans Odoo 19 ?",
    },
    correct: {
      en: "Set the form Action to Create an Opportunity (or a lead if Leads is enabled) and assign a Sales Team in the Website editor",
      fr: "Définir l'action du formulaire sur « Créer une opportunité » (ou une piste si Pistes est activé) et assigner une Équipe commerciale dans l'éditeur du site",
    },
    distractors: [
      {
        en: "Install the Marketing Automation app and create a campaign triggered by form submission that imports contacts via CSV",
        fr: "Installer l'application Automatisation marketing et créer une campagne déclenchée par la soumission du formulaire important les contacts via CSV",
      },
      {
        en: "Configure the sales team Email Alias only; website forms cannot create CRM records without an incoming mail server",
        fr: "Configurer uniquement l'alias e-mail de l'équipe ; les formulaires web ne peuvent pas créer d'enregistrements CRM sans serveur de messagerie entrant",
      },
      {
        en: "Set the form Action to Send an Email to the sales team; a CRM user must manually click Generate Leads to import the data",
        fr: "Définir l'action du formulaire sur « Envoyer un e-mail » à l'équipe ; un utilisateur CRM doit cliquer manuellement sur « Générer des pistes » pour importer les données",
      },
    ],
    explanation: {
      en: "Odoo 19 Website forms: set Action to Create an Opportunity in the form block settings. If Leads is enabled in CRM settings, submissions create leads instead. Assign Sales Team and optional Salesperson.",
      fr: "Formulaires site Odoo 19 : définir l'action sur « Créer une opportunité » dans les paramètres du bloc formulaire. Si Pistes est activé dans le CRM, les soumissions créent des pistes. Assigner Équipe commerciale et Commercial optionnel.",
    },
  }),
  complexQ({
    id: "crm-020",
    module: "crm",
    text: {
      en: "How do you customize pipeline stages for a specific sales team in Odoo 19 CRM?",
      fr: "Comment personnaliser les étapes du pipeline pour une équipe commerciale spécifique dans le CRM Odoo 19 ?",
    },
    correct: {
      en: "Edit the stages on the sales team configuration form (CRM ‣ Configuration ‣ Sales Teams) for that team",
      fr: "Modifier les étapes sur la fiche de configuration de l'équipe commerciale (CRM ‣ Configuration ‣ Équipes commerciales)",
    },
    distractors: [
      {
        en: "Create a new Forecast report filter in CRM ‣ Reporting and rename the default stage columns in pivot view",
        fr: "Créer un nouveau filtre de rapport Prévisions dans CRM ‣ Rapports et renommer les colonnes d'étapes par défaut en vue pivot",
      },
      {
        en: "Duplicate the sales team and edit stages in Studio; stage changes on the original team affect all teams globally",
        fr: "Dupliquer l'équipe commerciale et modifier les étapes dans Studio ; les changements sur l'équipe d'origine affectent toutes les équipes globalement",
      },
      {
        en: "Configure activity plan intervals in CRM ‣ Configuration ‣ Activity Plans; each interval maps to a pipeline stage",
        fr: "Configurer les intervalles du plan d'activités dans CRM ‣ Configuration ‣ Plans d'activités ; chaque intervalle correspond à une étape du pipeline",
      },
    ],
    explanation: {
      en: "Odoo 19 allows each sales team to have its own pipeline stages tailored to its sales process. Stages are managed on the sales team configuration page accessed from CRM ‣ Configuration ‣ Sales Teams.",
      fr: "Odoo 19 permet à chaque équipe commerciale d'avoir ses propres étapes de pipeline adaptées à son processus. Les étapes se gèrent sur la fiche d'équipe accessible via CRM ‣ Configuration ‣ Équipes commerciales.",
    },
  }),
];
