import { complexQ } from "./helpers";

export const surveyQuestions = [
  complexQ({
    id: "srv-001",
    module: "survey",
    text: {
      en: "Which question types can you create in Odoo 19 Surveys?",
      fr: "Quels types de questions peut-on créer dans Sondages Odoo 19 ?",
    },
    correct: {
      en: "Multiple choice, text box, numerical, date, matrix, ranking, and other structured question formats",
      fr: "Choix multiples, zone de texte, numérique, date, matrice, classement et autres formats structurés",
    },
    distractors: [
      {
        en: "Free-text comments only, with no multiple choice, matrix, or scoring-capable question formats available",
        fr: "Commentaires texte libre uniquement, sans choix multiples, matrice ni formats compatibles scoring",
      },
      {
        en: "Bank reconciliation matching widgets identical to Accounting statement line pairing interfaces",
        fr: "Widgets de rapprochement bancaire identiques aux interfaces d'appariement de lignes de relevé Comptabilité",
      },
      {
        en: "Question types defined exclusively through Studio XML views without a visual survey builder interface",
        fr: "Types de questions définis exclusivement via vues XML Studio sans interface visuelle de création",
      },
    ],
    explanation: {
      en: "Surveys supports many question types for feedback, assessments, certifications, and live sessions.",
      fr: "Sondages prend en charge de nombreux types pour feedback, évaluations, certifications et sessions live.",
    },
  }),
  complexQ({
    id: "srv-002",
    module: "survey",
    text: {
      en: "How do you share an Odoo 19 survey with external respondents?",
      fr: "Comment partager un sondage Odoo 19 avec des répondants externes ?",
    },
    correct: {
      en: "Use the Share button to copy the survey link, send email invites, or embed the survey on a website page",
      fr: "Utiliser Partager pour copier le lien, envoyer des invitations e-mail ou intégrer le sondage sur une page web",
    },
    distractors: [
      {
        en: "Restrict distribution to internal Discuss channel polls that require Odoo login without any public URL",
        fr: "Restreindre la distribution aux sondages de canal Discuss internes exigeant une connexion Odoo sans URL publique",
      },
      {
        en: "Export the survey as a locked PDF from Print and distribute physical copies without online access",
        fr: "Exporter le sondage en PDF verrouillé via Imprimer et distribuer des copies papier sans accès en ligne",
      },
      {
        en: "Publish the survey exclusively as a Website static page template under Site → Pages without a survey link",
        fr: "Publier le sondage exclusivement comme modèle de page statique Website sans lien de sondage dédié",
      },
    ],
    explanation: {
      en: "Each survey has a shareable URL; Share opens options for link, email invites, and website embedding.",
      fr: "Chaque sondage a une URL partageable ; Partager ouvre lien, invitations e-mail et intégration website.",
    },
  }),
  complexQ({
    id: "srv-003",
    module: "survey",
    text: {
      en: "What is scoring in an Odoo 19 survey?",
      fr: "Qu'est-ce que le scoring dans un sondage Odoo 19 ?",
    },
    correct: {
      en: "Assigning points to answers with modes such as scoring after each page, at the end, or without showing answers",
      fr: "Attribuer des points aux réponses avec modes après chaque page, à la fin, ou sans afficher les réponses",
    },
    distractors: [
      {
        en: "Calculating employee payroll bonuses based on survey completion timestamps in the HR Payslips app",
        fr: "Calculer des primes de paie selon les horodatages de complétion dans l'application Fiches de paie RH",
      },
      {
        en: "Applying inventory valuation methods to service products linked to survey participation records",
        fr: "Appliquer des méthodes de valorisation inventaire aux produits service liés aux participations",
      },
      {
        en: "Recording Net Promoter Score averages only, without per-question point values or pass thresholds",
        fr: "Enregistrer uniquement des moyennes NPS sans points par question ni seuils de réussite configurables",
      },
    ],
    explanation: {
      en: "Scoring options in the Options tab assign points and can require a minimum Required Score (%) to pass.",
      fr: "Les options de scoring dans l'onglet Options attribuent des points et peuvent exiger un Score requis (%) minimum.",
    },
  }),
  complexQ({
    id: "srv-004",
    module: "survey",
    text: {
      en: "How do you limit a survey to one response per participant in Odoo 19?",
      fr: "Comment limiter un sondage à une réponse par participant dans Odoo 19 ?",
    },
    correct: {
      en: "Enable Limit Attempts and set the maximum, combine with Require Login or Invited people only access",
      fr: "Activer Limiter les tentatives et définir le maximum, combiner avec Connexion requise ou Invités uniquement",
    },
    distractors: [
      {
        en: "Set Survey Time Limit to one minute so repeat attempts always fail regardless of participant identity",
        fr: "Définir Délai du sondage à une minute pour que les nouvelles tentatives échouent sans tenir compte de l'identité",
      },
      {
        en: "Disable Allow Roaming so participants cannot resubmit after navigating back to previous survey pages",
        fr: "Désactiver Autoriser la navigation pour empêcher une nouvelle soumission après retour aux pages précédentes",
      },
      {
        en: "Configure one response per email exclusively via CRM lead deduplication rules on the sales pipeline",
        fr: "Configurer une réponse par e-mail exclusivement via les règles de dédoublonnage CRM sur le pipeline ventes",
      },
    ],
    explanation: {
      en: "Limit Attempts controls repetitions; Require Login and token-based Invited access further restrict participation.",
      fr: "Limiter les tentatives contrôle les répétitions ; Connexion requise et accès Invités par token restreignent davantage.",
    },
  }),
  complexQ({
    id: "srv-005",
    module: "survey",
    text: {
      en: "How do you analyze survey results in Odoo 19?",
      fr: "Comment analyser les résultats d'un sondage dans Odoo 19 ?",
    },
    correct: {
      en: "Click See results on the survey form to open analysis views with charts and export participant answers",
      fr: "Cliquer Voir les résultats sur le formulaire pour ouvrir les vues d'analyse avec graphiques et export",
    },
    distractors: [
      {
        en: "Review each participant answer individually in the Contacts app chatter without aggregated reporting views",
        fr: "Relire chaque réponse individuellement dans le chatter Contacts sans vues de reporting agrégées",
      },
      {
        en: "Install Spreadsheet dashboards and manually import survey PDF printouts to build pivot tables externally",
        fr: "Installer des tableaux de bord Spreadsheet et importer manuellement des PDF imprimés pour des pivots externes",
      },
      {
        en: "View responses as accounting analytic lines posted automatically to the general ledger journal entries",
        fr: "Consulter les réponses comme lignes analytiques comptables postées automatiquement au grand livre",
      },
    ],
    explanation: {
      en: "See results provides aggregated charts and per-question breakdowns; responses can be exported for external analysis.",
      fr: "Voir les résultats fournit graphiques agrégés et détail par question ; les réponses sont exportables.",
    },
  }),
  complexQ({
    id: "srv-006",
    module: "survey",
    text: {
      en: "What is certification mode in an Odoo 19 survey?",
      fr: "Qu'est-ce que le mode certification dans un sondage Odoo 19 ?",
    },
    correct: {
      en: "Enable Is a Certification with Required Score (%), certification template, email, and optional participant badge",
      fr: "Activer Est une certification avec Score requis (%), modèle, e-mail et badge optionnel pour le participant",
    },
    distractors: [
      {
        en: "Generate manufacturing quality alerts when production staff fail shop floor training quizzes below 50%",
        fr: "Générer des alertes qualité fabrication quand le personnel échoue aux quiz atelier sous 50%",
      },
      {
        en: "Assign payroll salary grade levels automatically upon any survey completion regardless of score achieved",
        fr: "Assigner automatiquement des niveaux salariaux paie à toute complétion quel que soit le score obtenu",
      },
      {
        en: "Run simultaneously as a Live Session survey with Session Code, time limit, and trophy badge on every attempt",
        fr: "Fonctionner simultanément en session Live avec code session, délai et badge trophée à chaque tentative",
      },
    ],
    explanation: {
      en: "Certification surveys require a passing score, send certified email templates, and can award badges on contacts.",
      fr: "Les sondages certification exigent un score de réussite, envoient un e-mail certifié et peuvent attribuer un badge.",
    },
  }),
  complexQ({
    id: "srv-007",
    module: "survey",
    text: {
      en: "How do conditional (triggered) questions work in Odoo 19 Surveys?",
      fr: "Comment fonctionnent les questions conditionnelles (déclenchées) dans Sondages Odoo 19 ?",
    },
    correct: {
      en: "Configure triggering answers so follow-up questions appear only when specific prior answers are selected",
      fr: "Configurer des réponses déclencheuses pour afficher des questions suivantes selon les réponses antérieures",
    },
    distractors: [
      {
        en: "Display all questions on one page when Pagination is One page with all the questions, ignoring prior answers",
        fr: "Afficher toutes les questions sur une page quand Pagination = Une page avec toutes les questions, sans tenir compte des réponses",
      },
      {
        en: "Require Marketing Automation workflows external to Surveys to branch questions based on CRM lead stages",
        fr: "Exiger des workflows Marketing Automation externes à Sondages pour bifurquer selon les étapes CRM",
      },
      {
        en: "Replace answer-based branching with Randomized per Section, which shuffles entire sections without triggers",
        fr: "Remplacer la logique par Réponses par Randomisé par section, qui mélange des sections sans déclencheurs",
      },
    ],
    explanation: {
      en: "Conditional display creates dynamic flows: questions appear based on answers to preceding questions.",
      fr: "L'affichage conditionnel crée des parcours dynamiques selon les réponses aux questions précédentes.",
    },
  }),
  complexQ({
    id: "srv-008",
    module: "survey",
    text: {
      en: "How does the Events app use Odoo Surveys?",
      fr: "Comment l'application Événements utilise-t-elle Sondages Odoo ?",
    },
    correct: {
      en: "Event registrations can include custom survey questions on the event page registration form",
      fr: "Les inscriptions aux événements peuvent inclure des questions de sondage sur le formulaire d'inscription",
    },
    distractors: [
      {
        en: "Capture attendee names exclusively via Point of Sale ticket barcode scanning at the event entry gate",
        fr: "Capturer les noms des participants exclusivement via scan de codes-barres billets PoS à l'entrée",
      },
      {
        en: "Embed manufacturing work order quality checks on shop floor tablets instead of survey question forms",
        fr: "Intégrer des contrôles qualité d'ordres de fabrication sur tablettes atelier au lieu de formulaires sondage",
      },
      {
        en: "Replace survey forms with Helpdesk ticket templates submitted through the public website contact block",
        fr: "Remplacer les formulaires sondage par des modèles de tickets Helpdesk via le bloc contact du site",
      },
    ],
    explanation: {
      en: "Events integrates surveys to collect custom registration data and attendee information on event pages.",
      fr: "Événements intègre les sondages pour collecter des données d'inscription personnalisées sur les pages événement.",
    },
  }),
  complexQ({
    id: "srv-009",
    module: "survey",
    text: {
      en: "What is Live Session mode in Odoo 19 Surveys?",
      fr: "Qu'est-ce que le mode Session live dans Sondages Odoo 19 ?",
    },
    correct: {
      en: "A host-led real-time quiz where participants join via session link/code and answer as the presenter advances",
      fr: "Un quiz en direct animé par un hôte ; les participants rejoignent via lien/code et répondent en temps réel",
    },
    distractors: [
      {
        en: "Stream the survey PDF through Documents preview while attendees submit answers by reply email only",
        fr: "Diffuser le PDF sondage via l'aperçu Documents pendant que les participants répondent uniquement par e-mail",
      },
      {
        en: "A Discuss video call recording archived automatically without collecting interactive participant responses",
        fr: "Un enregistrement d'appel vidéo Discuss archivé automatiquement sans collecte de réponses interactives",
      },
      {
        en: "A certification survey that requires Is a Certification, Survey Time Limit, and Session Code on every page",
        fr: "Un sondage certification exigeant Est une certification, Délai du sondage et Code session sur chaque page",
      },
    ],
    explanation: {
      en: "Live Session surveys use the Session Manager; the host starts questions and participants respond in real time.",
      fr: "Les sondages Session live utilisent le Gestionnaire de session ; l'hôte lance les questions en temps réel.",
    },
  }),
  complexQ({
    id: "srv-010",
    module: "survey",
    text: {
      en: "How do you randomize which questions participants see in an Odoo 19 survey?",
      fr: "Comment randomiser les questions vues par les participants dans un sondage Odoo 19 ?",
    },
    correct: {
      en: "Enable Randomized per Section in Options and set # Questions Randomly Picked for each section",
      fr: "Activer Randomisé par section dans Options et définir # Questions tirées aléatoirement par section",
    },
    distractors: [
      {
        en: "Drag questions into a new manual order on each browser session using Allow Roaming back-navigation only",
        fr: "Réordonner manuellement les questions à chaque session navigateur via Autoriser la navigation uniquement",
      },
      {
        en: "Import a nightly CSV of shuffled question IDs through a scheduled server action on survey.survey records",
        fr: "Importer un CSV nocturne d'IDs mélangés via une action planifiée sur les enregistrements survey.survey",
      },
      {
        en: "Enable Survey Time Limit, which automatically reorders questions differently for each login session",
        fr: "Activer Délai du sondage, qui réordonne automatiquement les questions à chaque session de connexion",
      },
    ],
    explanation: {
      en: "Randomized per Section picks a subset of questions from each section to reduce bias in assessments.",
      fr: "Randomisé par section tire un sous-ensemble de questions par section pour réduire les biais d'évaluation.",
    },
  }),
  complexQ({
    id: "srv-011",
    module: "survey",
    text: {
      en: "What is the purpose of sections in the Surveys Questions tab?",
      fr: "À quoi servent les sections dans l'onglet Questions des sondages ?",
    },
    correct: {
      en: "Group related questions into organized parts and support pagination such as One page per section",
      fr: "Regrouper des questions liées en parties organisées et supporter la pagination Une page par section",
    },
    distractors: [
      {
        en: "Replace Website → Site → Pages menu entries used for public marketing landing page navigation",
        fr: "Remplacer les entrées Website → Site → Pages utilisées pour la navigation des pages marketing publiques",
      },
      {
        en: "Define accounting fiscal period locks that must pass before participants can submit survey answers",
        fr: "Définir des verrous de périodes fiscales comptables avant soumission des réponses par les participants",
      },
      {
        en: "Attach unrelated PDF instruction files that appear instead of interactive questions on each survey page",
        fr: "Joindre des PDF d'instructions sans lien remplaçant les questions interactives sur chaque page",
      },
    ],
    explanation: {
      en: "Sections structure long surveys; pagination options control whether participants see one section or question per page.",
      fr: "Les sections structurent les longs sondages ; la pagination contrôle l'affichage par section ou par question.",
    },
  }),
  complexQ({
    id: "srv-012",
    module: "survey",
    text: {
      en: "How do invited-only surveys control who can respond in Odoo 19?",
      fr: "Comment les sondages réservés aux invités contrôlent-ils qui peut répondre dans Odoo 19 ?",
    },
    correct: {
      en: "Set Access Mode to Invited people only and distribute unique token links or email invitations to participants",
      fr: "Définir Mode d'accès sur Invités uniquement et distribuer des liens token uniques ou invitations e-mail",
    },
    distractors: [
      {
        en: "Allow anyone with the generic public survey URL to respond unlimited times regardless of access mode setting",
        fr: "Permettre à quiconque avec l'URL publique générique de répondre sans limite quel que soit le mode d'accès",
      },
      {
        en: "Display invited surveys only on the backend Surveys kanban dashboard with no external participation link",
        fr: "Afficher les sondages invités uniquement sur le kanban backend Sondages sans lien de participation externe",
      },
      {
        en: "Require participants to purchase an eCommerce product before the survey URL unlocks in their portal orders",
        fr: "Exiger l'achat d'un produit eCommerce avant déverrouillage de l'URL sondage dans les commandes portail",
      },
    ],
    explanation: {
      en: "Invited people only restricts access; tokens provide unique private links for identified or one-time participation.",
      fr: "Invités uniquement restreint l'accès ; les tokens fournissent des liens privés uniques pour participation identifiée.",
    },
  }),
  complexQ({
    id: "srv-013",
    module: "survey",
    text: {
      en: "What is answer validation on an individual survey question?",
      fr: "Qu'est-ce que la validation de réponse sur une question de sondage individuelle ?",
    },
    correct: {
      en: "Rules such as Mandatory Answer, min/max length, numerical range, or date constraints on that question",
      fr: "Règles comme Réponse obligatoire, longueur min/max, plage numérique ou contraintes de date sur la question",
    },
    distractors: [
      {
        en: "Manual manager review in Discuss after survey close before numeric answers are accepted into reporting",
        fr: "Revue manuelle par un manager dans Discuss après clôture avant acceptation des réponses numériques",
      },
      {
        en: "Stock reservation rules preventing numeric answers that exceed available warehouse quantity on hand",
        fr: "Règles de réservation stock empêchant des réponses numériques dépassant la quantité entrepôt disponible",
      },
      {
        en: "Replacing per-question rules with Is a Certification, which applies one global pass threshold to all answers",
        fr: "Remplacer les règles par question par Est une certification, appliquant un seuil global à toutes les réponses",
      },
    ],
    explanation: {
      en: "Per-question validation ensures acceptable input before participants proceed or submit the survey.",
      fr: "La validation par question garantit des saisies acceptables avant de continuer ou soumettre le sondage.",
    },
  }),
  complexQ({
    id: "srv-014",
    module: "survey",
    text: {
      en: "How do you close a survey to new responses in Odoo 19?",
      fr: "Comment fermer un sondage aux nouvelles réponses dans Odoo 19 ?",
    },
    correct: {
      en: "Click Close on the survey form to archive it, shown by the red Archived banner; click Reopen to restore",
      fr: "Cliquer Fermer sur le formulaire pour archiver, indiqué par la bannière Archivé ; cliquer Rouvrir pour restaurer",
    },
    distractors: [
      {
        en: "Set Access Mode to Invited people only and remove the share link from the Options tab without archiving the survey",
        fr: "Configurer le mode d'accès sur « Personnes invitées uniquement » et retirer le lien de partage dans Options sans archiver le sondage",
      },
      {
        en: "Uninstall the Surveys module from Apps to stop responses while preserving active Live Session manager tabs",
        fr: "Désinstaller le module Sondages depuis Apps pour stopper les réponses en conservant les onglets Session live",
      },
      {
        en: "Remove each participant token individually from the Live Session section before the close button works",
        fr: "Retirer individuellement chaque token participant de la section Session live avant que Fermer fonctionne",
      },
    ],
    explanation: {
      en: "Closing archives the survey, blocking new participants while preserving existing results for analysis.",
      fr: "Fermer archive le sondage, bloquant les nouveaux participants tout en conservant les résultats existants.",
    },
  }),
  complexQ({
    id: "srv-015",
    module: "survey",
    text: {
      en: "What is a survey participation token used for?",
      fr: "À quoi sert un token de participation à un sondage ?",
    },
    correct: {
      en: "Provide a unique private link for one-time or identified participation when access is restricted",
      fr: "Fournir un lien privé unique pour une participation unique ou identifiée quand l'accès est restreint",
    },
    distractors: [
      {
        en: "Authenticate external payment terminals during certification checkout on the eCommerce shop Payment step",
        fr: "Authentifier des terminaux de paiement externes lors du checkout certification sur l'étape Paiement eCommerce",
      },
      {
        en: "Track warehouse lot serial numbers scanned on inventory barcode menus to unlock manufacturing surveys",
        fr: "Suivre des numéros de lot entrepôt scannés sur les menus code-barres pour déverrouiller des sondages fabrication",
      },
      {
        en: "Display the public Session Code on the Live Session host screen shared identically by all attendees",
        fr: "Afficher le Code session public sur l'écran hôte Session live partagé identiquement par tous les participants",
      },
    ],
    explanation: {
      en: "Tokens control individual access for private surveys, especially with Invited people only access mode.",
      fr: "Les tokens contrôlent l'accès individuel pour les sondages privés, surtout en mode Invités uniquement.",
    },
  }),
  complexQ({
    id: "srv-016",
    module: "survey",
    text: {
      en: "Can Odoo 19 Surveys be integrated into eLearning courses?",
      fr: "Les sondages Odoo 19 peuvent-ils être intégrés aux cours eLearning ?",
    },
    correct: {
      en: "Yes, eLearning uses surveys as course content, quizzes, and assessments within training slides",
      fr: "Oui, eLearning utilise les sondages comme contenu de cours, quiz et évaluations dans les diapositives",
    },
    distractors: [
      {
        en: "No, eLearning tracks video watch time only and ignores survey question scores on course completion rules",
        fr: "Non, eLearning suit uniquement le temps de visionnage vidéo et ignore les scores sondage pour la complétion",
      },
      {
        en: "Surveys must be duplicated as Website contact form blocks manually on each eLearning lesson page",
        fr: "Les sondages doivent être dupliqués comme blocs formulaire Website manuellement sur chaque leçon eLearning",
      },
      {
        en: "Integration requires exporting SCORM packages to Documents without using the native Odoo Surveys application",
        fr: "L'intégration exige d'exporter des packages SCORM vers Documents sans utiliser l'application Sondages native",
      },
    ],
    explanation: {
      en: "eLearning embeds surveys for quizzes and course certifications as part of the training content flow.",
      fr: "eLearning intègre les sondages pour quiz et certifications de cours dans le flux de contenu de formation.",
    },
  }),
  complexQ({
    id: "srv-017",
    module: "survey",
    text: {
      en: "How do you show a custom message after survey completion?",
      fr: "Comment afficher un message personnalisé après la complétion d'un sondage ?",
    },
    correct: {
      en: "Enter custom text in the End Message tab on the survey form displayed to participants upon completion",
      fr: "Saisir un texte personnalisé dans l'onglet Message de fin du formulaire affiché à la complétion",
    },
    distractors: [
      {
        en: "Edit the default certification PDF template only; per-survey end messages cannot be customized in Surveys",
        fr: "Modifier uniquement le modèle PDF certification par défaut ; les messages de fin ne sont pas personnalisables",
      },
      {
        en: "Publish a Website thank-you static page and redirect all surveys to that page via nginx rewrite rules",
        fr: "Publier une page statique de remerciement Website et rediriger tous les sondages via des règles nginx",
      },
      {
        en: "Configure end messages from Discuss → Configuration → Channels using the default inbox welcome template",
        fr: "Configurer les messages de fin depuis Discuss → Canaux via le modèle d'accueil boîte de réception par défaut",
      },
    ],
    explanation: {
      en: "The End Message tab lets you thank participants, show scores, or provide next-step instructions after submission.",
      fr: "L'onglet Message de fin permet de remercier, afficher les scores ou donner des instructions après soumission.",
    },
  }),
  complexQ({
    id: "srv-018",
    module: "survey",
    text: {
      en: "What is the purpose of marking a survey question as mandatory?",
      fr: "À quoi sert de marquer une question de sondage comme obligatoire ?",
    },
    correct: {
      en: "Block participants from proceeding or submitting until that critical question has been answered",
      fr: "Empêcher les participants de continuer ou soumettre tant que cette question critique n'est pas répondue",
    },
    distractors: [
      {
        en: "Lock the Odoo database for editing by other internal users until the participant submits the survey form",
        fr: "Verrouiller la base Odoo pour les autres utilisateurs internes jusqu'à soumission du formulaire par le participant",
      },
      {
        en: "Automatically create HR time-off requests when health screening mandatory answers indicate employee absence",
        fr: "Créer automatiquement des demandes de congés RH quand des réponses obligatoires de santé indiquent une absence",
      },
      {
        en: "Apply mandatory rules only in Live Session mode while standard Survey type forms ignore the setting entirely",
        fr: "Appliquer l'obligatoire uniquement en Session live tandis que les sondages standard ignorent totalement le réglage",
      },
    ],
    explanation: {
      en: "Mandatory Answer prevents skipping critical questions; enable it from the optional columns in the Questions tab.",
      fr: "Réponse obligatoire empêche de sauter des questions critiques ; activer via les colonnes optionnelles de Questions.",
    },
  }),
  complexQ({
    id: "srv-019",
    module: "survey",
    text: {
      en: "How do you duplicate an existing survey to reuse as a template in Odoo 19?",
      fr: "Comment dupliquer un sondage existant pour le réutiliser comme modèle dans Odoo 19 ?",
    },
    correct: {
      en: "Use Action → Duplicate on the survey form to copy questions, sections, and configuration settings",
      fr: "Utiliser Action → Dupliquer sur le formulaire pour copier questions, sections et paramètres de configuration",
    },
    distractors: [
      {
        en: "Export survey JSON from developer mode and re-import through Settings → Technical → Database Structure",
        fr: "Exporter le JSON sondage en mode développeur et réimporter via Paramètres → Technique → Structure base",
      },
      {
        en: "Copy question text manually into a spreadsheet and import answers through Accounting bank reconciliation",
        fr: "Copier manuellement le texte des questions dans un tableur et importer via rapprochement bancaire Comptabilité",
      },
      {
        en: "Clone the entire Odoo database to a staging environment for each new survey version you want to create",
        fr: "Cloner toute la base Odoo vers un environnement de staging pour chaque nouvelle version de sondage",
      },
    ],
    explanation: {
      en: "Duplicating copies the full survey structure so you can adapt questions and options for a new campaign.",
      fr: "La duplication copie toute la structure pour adapter questions et options à une nouvelle campagne.",
    },
  }),
  complexQ({
    id: "srv-020",
    module: "survey",
    text: {
      en: "What participant data can be exported from Odoo 19 survey responses?",
      fr: "Quelles données participantes peuvent être exportées depuis les réponses de sondage Odoo 19 ?",
    },
    correct: {
      en: "Individual answers and participant metadata via See results or the standard Odoo list export action",
      fr: "Réponses individuelles et métadonnées participantes via Voir les résultats ou l'export standard Odoo",
    },
    distractors: [
      {
        en: "Only aggregated pass/fail percentages on the survey kanban card with no row-level response export capability",
        fr: "Uniquement des pourcentages réussite/échec agrégés sur le kanban sans export ligne par ligne des réponses",
      },
      {
        en: "Response data packaged exclusively as certification PDF attachments requiring Accounting Reports installation",
        fr: "Données de réponse exclusivement en pièces jointes PDF certification nécessitant Comptabilité Rapports",
      },
      {
        en: "Live Session session codes only, without exporting individual question answers from participant records",
        fr: "Uniquement les codes Session live, sans export des réponses individuelles par question des participants",
      },
    ],
    explanation: {
      en: "Survey responses and metadata can be exported from analysis views for external reporting or further processing.",
      fr: "Les réponses et métadonnées peuvent être exportées depuis les vues d'analyse pour reporting externe.",
    },
  }),
];
