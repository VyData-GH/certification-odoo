import { complexQ } from "./helpers";

export const hrQuestions = [
  complexQ({
    id: "hr-001",
    module: "hr",
    text: {
      en: "What is the difference between an employee record and an Odoo user in Odoo 19?",
      fr: "Quelle est la différence entre une fiche employé et un utilisateur Odoo dans Odoo 19 ?",
    },
    correct: {
      en: "An employee is an HR resource with job data; a user is a login account with access rights (they may be linked)",
      fr: "L'employé est une ressource RH avec données de poste ; l'utilisateur est un compte de connexion avec droits d'accès (ils peuvent être liés)",
    },
    distractors: [
      {
        en: "Every Odoo user must have a mandatory employee record created automatically at first login with identical fields",
        fr: "Chaque utilisateur Odoo doit avoir une fiche employé obligatoire créée automatiquement à la première connexion avec champs identiques",
      },
      {
        en: "An employee record grants database admin rights; a user record is only used for website portal contact forms",
        fr: "Une fiche employé accorde les droits admin base ; une fiche utilisateur sert uniquement aux formulaires contact portail website",
      },
      {
        en: "Employees exist only in Payroll; the Employees app stores vendor contacts shared with the Purchase module",
        fr: "Les employés n'existent qu'en Paie ; l'app Employés stocke des contacts fournisseurs partagés avec le module Achats",
      },
    ],
    explanation: {
      en: "Employees hold HR information (department, manager, contract); users authenticate into Odoo. Linking them enables self-service.",
      fr: "Les employés portent les infos RH (département, manager, contrat) ; les utilisateurs s'authentifient dans Odoo. Les lier active le self-service.",
    },
  }),
  complexQ({
    id: "hr-002",
    module: "hr",
    text: {
      en: "How does the standard time off request and approval workflow work in Odoo 19?",
      fr: "Comment fonctionne le workflow standard de demande et validation de congés dans Odoo 19 ?",
    },
    correct: {
      en: "The employee submits a time off request in the Time Off app; approvers validate according to the time off type rules",
      fr: "L'employé soumet une demande dans l'app Congés ; les approbateurs valident selon les règles du type de congé",
    },
    distractors: [
      {
        en: "Managers create allocations directly on the employee contract; employees cannot submit their own leave requests",
        fr: "Les managers créent les allocations directement sur le contrat employé ; les employés ne peuvent pas soumettre leurs propres demandes",
      },
      {
        en: "Leave is booked by editing work entries in Payroll; the Time Off app displays balances but cannot receive requests",
        fr: "Les congés se réservent en modifiant les entrées de travail en Paie ; l'app Congés affiche les soldes mais ne reçoit pas de demandes",
      },
      {
        en: "Approval happens exclusively via Discuss channel messages; validated requests are never stored as time off records",
        fr: "La validation se fait exclusivement via messages canal Discuss ; les demandes validées ne sont jamais stockées comme enregistrements congés",
      },
    ],
    explanation: {
      en: "Time Off manages requests, multi-level approval, and balance deduction once validated.",
      fr: "Congés gère les demandes, la validation multi-niveaux et la déduction du solde une fois validées.",
    },
  }),
  complexQ({
    id: "hr-003",
    module: "hr",
    text: {
      en: "What is a time off type in Odoo 19?",
      fr: "Qu'est-ce qu'un type de congé dans Odoo 19 ?",
    },
    correct: {
      en: "A leave category (paid, sick, unpaid, etc.) with its own approval rules, allocation method, and balance tracking",
      fr: "Une catégorie de congé (payés, maladie, sans solde, etc.) avec règles d'approbation, mode d'allocation et suivi de solde propres",
    },
    distractors: [
      {
        en: "A payroll salary rule code mapping leave days to a specific accounting journal for monthly closing entries",
        fr: "Un code règle salariale paie mappant les jours de congé à un journal comptable spécifique pour les écritures de clôture mensuelle",
      },
      {
        en: "A project task tag used to mark timesheet lines as non-billable when consultants take planned absences",
        fr: "Une étiquette tâche projet marquant les lignes feuille de temps non facturables quand les consultants prennent des absences planifiées",
      },
      {
        en: "A warehouse operation type blocking manufacturing MO confirmation when the responsible employee is absent",
        fr: "Un type d'opération entrepôt bloquant la confirmation d'OF fabrication quand l'employé responsable est absent",
      },
    ],
    explanation: {
      en: "Time off types configure how leave is requested, approved, allocated, and displayed on employee dashboards.",
      fr: "Les types de congés configurent comment les absences sont demandées, approuvées, allouées et affichées sur les tableaux de bord employés.",
    },
  }),
  complexQ({
    id: "hr-004",
    module: "hr",
    text: {
      en: "How is the company organization chart built in Odoo 19 Employees?",
      fr: "Comment l'organigramme de l'entreprise est-il construit dans Employés Odoo 19 ?",
    },
    correct: {
      en: "By setting the Manager field on each employee record, forming a hierarchy displayed in the org chart view",
      fr: "En renseignant le champ Manager sur chaque fiche employé, formant une hiérarchie affichée dans la vue organigramme",
    },
    distractors: [
      {
        en: "By nesting department records under each other in Settings; the org chart ignores individual employee manager links",
        fr: "En imbriquant les fiches département dans Paramètres ; l'organigramme ignore les liens manager individuels des employés",
      },
      {
        en: "By importing a static image on the company form; employee hierarchy cannot be generated dynamically from records",
        fr: "En important une image statique sur la fiche société ; la hiérarchie employés ne peut pas être générée dynamiquement depuis les enregistrements",
      },
      {
        en: "By assigning CRM team leaders to sales employees; the org chart mirrors the sales pipeline stage owners only",
        fr: "En assignant des chefs d'équipe CRM aux employés commerciaux ; l'organigramme reflète uniquement les responsables d'étapes pipeline vente",
      },
    ],
    explanation: {
      en: "The manager-employee relationship chain automatically renders the interactive org chart in the Employees app.",
      fr: "La chaîne relation manager-employé génère automatiquement l'organigramme interactif dans l'app Employés.",
    },
  }),
  complexQ({
    id: "hr-005",
    module: "hr",
    text: {
      en: "What does the Recruitment app manage in Odoo 19?",
      fr: "Que gère l'application Recrutement dans Odoo 19 ?",
    },
    correct: {
      en: "Job positions, applicant pipeline stages, interviews, and the hiring process through to employee creation",
      fr: "Postes à pourvoir, étapes pipeline candidats, entretiens et processus d'embauche jusqu'à la création d'employé",
    },
    distractors: [
      {
        en: "Vendor onboarding workflows and purchase tender evaluations linked to the Purchase agreements module",
        fr: "Workflows d'intégration fournisseurs et évaluations d'appels d'offres achat liés au module Accords d'achat",
      },
      {
        en: "Employee performance appraisal cycles and 360° feedback forms scheduled from the Appraisals app",
        fr: "Cycles d'évaluation performance employés et formulaires feedback 360° planifiés depuis l'app Évaluations",
      },
      {
        en: "Manufacturing operator skill matrices and work center certification renewals on the Shop Floor module",
        fr: "Matrices de compétences opérateurs fabrication et renouvellements certifications centres de travail sur le module Shop Floor",
      },
    ],
    explanation: {
      en: "Recruitment tracks open jobs, applicants in kanban stages, and hiring activities until a new employee is created.",
      fr: "Recrutement suit les postes ouverts, candidats en étapes kanban et activités d'embauche jusqu'à la création d'un nouvel employé.",
    },
  }),
  complexQ({
    id: "hr-006",
    module: "hr",
    text: {
      en: "How do you grant employees their annual leave balance in Odoo 19?",
      fr: "Comment accorder le solde de congés annuel aux employés dans Odoo 19 ?",
    },
    correct: {
      en: "Create a time off allocation for the relevant type and employees, manually or via an accrual plan",
      fr: "Créer une allocation de congés pour le type concerné et les employés, manuellement ou via un plan d'acquisition",
    },
    distractors: [
      {
        en: "Set the days on the employee user preferences; allocations are not used and balances are never tracked per type",
        fr: "Définir les jours dans les préférences utilisateur employé ; les allocations ne sont pas utilisées et les soldes ne sont jamais suivis par type",
      },
      {
        en: "Credit leave days by posting a payroll payslip batch; the Time Off app reads balances from accounting journals",
        fr: "Créditer les jours de congé en comptabilisant un lot de fiches de paie ; l'app Congés lit les soldes depuis les journaux comptables",
      },
      {
        en: "Configure reordering rules on a service product named Leave; stock moves increment the employee leave counter",
        fr: "Configurer des règles de réapprovisionnement sur un produit service Congé ; les mouvements stock incrémentent le compteur congés employé",
      },
    ],
    explanation: {
      en: "Allocations credit time off balances (e.g., 25 days/year) per type; accrual plans automate periodic grants.",
      fr: "Les allocations créditent les soldes de congés (ex. 25 jours/an) par type ; les plans d'acquisition automatisent les crédits périodiques.",
    },
  }),
  complexQ({
    id: "hr-007",
    module: "hr",
    text: {
      en: "What is the Appraisals app used for in Odoo 19 HR?",
      fr: "À quoi sert l'application Évaluations (Appraisals) en RH Odoo 19 ?",
    },
    correct: {
      en: "Planning and conducting periodic employee performance reviews with goals, feedback, and appraisal templates",
      fr: "Planifier et conduire des entretiens d'évaluation périodiques avec objectifs, feedback et modèles d'évaluation",
    },
    distractors: [
      {
        en: "Calculating vendor performance scores from on-time delivery statistics in the Purchase app",
        fr: "Calculer des scores performance fournisseurs depuis les statistiques de livraison à temps dans l'app Achats",
      },
      {
        en: "Auditing inventory valuation differences between standard cost and FIFO layers in Accounting reports",
        fr: "Auditer les écarts de valorisation inventaire entre coût standard et couches FIFO dans les rapports Comptabilité",
      },
      {
        en: "Scoring website product pages for SEO quality before publishing them on the eCommerce catalog",
        fr: "Noter les pages produit website pour la qualité SEO avant publication sur le catalogue eCommerce",
      },
    ],
    explanation: {
      en: "Appraisals structures performance cycles: schedule reviews, collect manager/employee input, and track goals over time.",
      fr: "Évaluations structure les cycles performance : planifier entretiens, collecter retours manager/employé et suivre les objectifs dans le temps.",
    },
  }),
  complexQ({
    id: "hr-008",
    module: "hr",
    text: {
      en: "What information does an employee contract store in Odoo 19 HR?",
      fr: "Quelles informations un contrat employé stocke-t-il en RH Odoo 19 ?",
    },
    correct: {
      en: "Employment terms including contract type, wage structure, working schedule, and contract start/end dates",
      fr: "Conditions d'emploi incluant type de contrat, structure salariale, horaire de travail et dates début/fin de contrat",
    },
    distractors: [
      {
        en: "Customer payment terms and credit limits inherited when the employee is set as a sales order salesperson",
        fr: "Conditions de paiement client et limites de crédit héritées quand l'employé est défini comme commercial sur commande vente",
      },
      {
        en: "Manufacturing BOM operations and work center capacity assigned to shop floor operator roles",
        fr: "Opérations nomenclature fabrication et capacité centre de travail assignées aux rôles opérateur atelier",
      },
      {
        en: "Portal website access tokens and eCommerce wishlist preferences for internal staff shopping benefits",
        fr: "Jetons d'accès portail website et préférences liste de souhaits eCommerce pour avantages shopping internes",
      },
    ],
    explanation: {
      en: "Contracts define the legal and payroll framework: schedule, compensation, contract type, and dates used by work entries.",
      fr: "Les contrats définissent le cadre légal et paie : horaire, rémunération, type de contrat et dates utilisées par les entrées de travail.",
    },
  }),
  complexQ({
    id: "hr-009",
    module: "hr",
    text: {
      en: "How do accrual plans work for time off allocations in Odoo 19?",
      fr: "Comment fonctionnent les plans d'acquisition (accrual) pour les allocations de congés dans Odoo 19 ?",
    },
    correct: {
      en: "Leave days are granted automatically over time (monthly, yearly, etc.) according to configured accrual plan levels",
      fr: "Les jours de congé sont accordés automatiquement dans le temps (mensuel, annuel, etc.) selon les niveaux du plan d'acquisition configuré",
    },
    distractors: [
      {
        en: "All leave days must be allocated manually on January 1st; accrual plans only send reminder emails to HR officers",
        fr: "Tous les jours de congé doivent être alloués manuellement le 1er janvier ; les plans d'acquisition envoient seulement des rappels e-mail aux responsables RH",
      },
      {
        en: "Accrual converts unused sales commission credits into leave balances via the Payroll salary rules engine",
        fr: "L'acquisition convertit les crédits commission vente non utilisés en soldes congés via le moteur règles salariales Paie",
      },
      {
        en: "Accrual plans apply only to public holidays; paid leave types always require one-time manual allocation batches",
        fr: "Les plans d'acquisition s'appliquent uniquement aux jours fériés ; les types congés payés exigent toujours des lots d'allocation manuels uniques",
      },
    ],
    explanation: {
      en: "Accrual plans automate progressive leave grants based on seniority levels and frequency defined in Time Off configuration.",
      fr: "Les plans d'acquisition automatisent l'octroi progressif de congés selon niveaux d'ancienneté et fréquence définis dans la configuration Congés.",
    },
  }),
  complexQ({
    id: "hr-010",
    module: "hr",
    text: {
      en: "What is a work entry in Odoo 19 Payroll integration?",
      fr: "Qu'est-ce qu'une entrée de travail (work entry) dans l'intégration Paie Odoo 19 ?",
    },
    correct: {
      en: "A time slice (attendance, leave, contract hours) aggregated to compute payslip lines for an employee",
      fr: "Un créneau horaire (présence, congé, heures contrat) agrégé pour calculer les lignes de fiche de paie d'un employé",
    },
    distractors: [
      {
        en: "A manual journal item posted on the salary expense account when validating the employee contract form",
        fr: "Une ligne d'écriture manuelle comptabilisée sur le compte charges salariales à la validation de la fiche contrat employé",
      },
      {
        en: "A manufacturing work order duration logged on the shop floor and exported to payroll as piece-rate units",
        fr: "Une durée d'ordre de travail fabrication enregistrée en atelier et exportée en paie comme unités à la pièce",
      },
      {
        en: "A project task assignment linking consultants to analytic accounts for customer invoicing only",
        fr: "Une assignation tâche projet liant consultants et comptes analytiques pour facturation client uniquement",
      },
    ],
    explanation: {
      en: "Work entries consolidate attendance, time off, and contract calendar data into payroll-ready periods.",
      fr: "Les entrées de travail consolident présence, congés et calendrier contrat en périodes prêtes pour la paie.",
    },
  }),
  complexQ({
    id: "hr-011",
    module: "hr",
    text: {
      en: "How are employee skills and certifications tracked in Odoo 19?",
      fr: "Comment les compétences et certifications des employés sont-elles suivies dans Odoo 19 ?",
    },
    correct: {
      en: "On the employee form Resume tab using skill types, skill levels, and resume lines for certifications and experience",
      fr: "Sur l'onglet CV de la fiche employé avec types de compétences, niveaux et lignes CV pour certifications et expérience",
    },
    distractors: [
      {
        en: "In Inventory lot serial numbers assigned to each employee badge for physical asset traceability",
        fr: "Dans les numéros de série lot inventaire assignés à chaque badge employé pour traçabilité actifs physiques",
      },
      {
        en: "On the recruitment applicant form only; skills transfer automatically when the candidate becomes a vendor contact",
        fr: "Uniquement sur la fiche candidat recrutement ; les compétences se transfèrent automatiquement quand le candidat devient contact fournisseur",
      },
      {
        en: "Via eLearning course completion on the website; HR employee records cannot store skill levels natively",
        fr: "Via complétion de cours eLearning sur le website ; les fiches employé RH ne peuvent pas stocker nativement les niveaux de compétence",
      },
    ],
    explanation: {
      en: "The Resume tab records skills with proficiency levels and supports certifications, education, and work experience lines.",
      fr: "L'onglet CV enregistre les compétences avec niveaux de maîtrise et supporte certifications, formation et expérience professionnelle.",
    },
  }),
  complexQ({
    id: "hr-012",
    module: "hr",
    text: {
      en: "What is the purpose of department records in Odoo 19 HR?",
      fr: "À quoi servent les fiches département en RH Odoo 19 ?",
    },
    correct: {
      en: "Organizing employees into organizational units for reporting, manager assignment, and HR data filtering",
      fr: "Organiser les employés en unités organisationnelles pour reporting, assignation manager et filtrage des données RH",
    },
    distractors: [
      {
        en: "Defining fiscal positions and tax mappings applied automatically to employee expense reimbursements",
        fr: "Définir positions fiscales et mappings taxes appliqués automatiquement aux remboursements de notes de frais employés",
      },
      {
        en: "Configuring warehouse routes and reordering rules per production line managed by department supervisors",
        fr: "Configurer routes entrepôt et règles de réapprovisionnement par ligne de production gérée par superviseurs département",
      },
      {
        en: "Storing website blog categories; departments are cosmetic tags with no impact on employee records or access",
        fr: "Stocker des catégories blog website ; les départements sont des étiquettes cosmétiques sans impact sur fiches employés ou accès",
      },
    ],
    explanation: {
      en: "Departments structure the workforce and appear on employee records, org charts, and HR reports.",
      fr: "Les départements structurent les effectifs et apparaissent sur fiches employés, organigrammes et rapports RH.",
    },
  }),
  complexQ({
    id: "hr-013",
    module: "hr",
    text: {
      en: "How can employees view their remaining leave balance in Odoo 19?",
      fr: "Comment les employés peuvent-ils consulter leur solde de congés restant dans Odoo 19 ?",
    },
    correct: {
      en: "In the Time Off app dashboard showing remaining days per time off type based on allocations and taken leave",
      fr: "Dans le tableau de bord de l'app Congés affichant les jours restants par type selon allocations et congés pris",
    },
    distractors: [
      {
        en: "Only HR officers see balances in Payroll payslip PDFs; employees have no self-service leave visibility",
        fr: "Seuls les responsables RH voient les soldes dans les PDF fiches de paie ; les employés n'ont aucune visibilité self-service congés",
      },
      {
        en: "On the Accounting trial balance filtered by employee analytic account and fiscal year period",
        fr: "Sur la balance générale Comptabilité filtrée par compte analytique employé et période fiscale",
      },
      {
        en: "Via the Attendances kiosk total hours widget; leave balances are calculated from check-in/out duration only",
        fr: "Via le widget heures totales du kiosque Présences ; les soldes congés se calculent uniquement depuis la durée pointage entrée/sortie",
      },
    ],
    explanation: {
      en: "Employees see allocated, taken, and remaining days per type directly in Time Off when linked to their user account.",
      fr: "Les employés voient jours alloués, pris et restants par type directement dans Congés lorsqu'ils sont liés à leur compte utilisateur.",
    },
  }),
  complexQ({
    id: "hr-014",
    module: "hr",
    text: {
      en: "What is a public holiday in Odoo 19 Time Off?",
      fr: "Qu'est-ce qu'un jour férié dans Congés Odoo 19 ?",
    },
    correct: {
      en: "A company-wide non-working day defined in the calendar that is excluded from leave duration calculations",
      fr: "Un jour non travaillé pour toute l'entreprise défini dans le calendrier, exclu du calcul de durée des congés",
    },
    distractors: [
      {
        en: "A paid time off type automatically granting one extra allocation day to all employees each calendar year",
        fr: "Un type de congé payé accordant automatiquement un jour d'allocation supplémentaire à tous les employés chaque année civile",
      },
      {
        en: "A manufacturing plant shutdown MO flagged in MRP planning to block work orders on specific dates",
        fr: "Un OF arrêt d'usine fabrication marqué en planification MRP bloquant les ordres de travail à des dates spécifiques",
      },
      {
        en: "A CRM activity deadline reminding sales teams to follow up prospects before fiscal quarter closing",
        fr: "Une échéance activité CRM rappelant aux équipes commerciales de relancer les prospects avant clôture trimestre fiscal",
      },
    ],
    explanation: {
      en: "Public holidays are configured in Time Off settings and working calendars so leave requests skip those dates.",
      fr: "Les jours fériés se configurent dans les paramètres Congés et calendriers de travail pour que les demandes excluent ces dates.",
    },
  }),
  complexQ({
    id: "hr-015",
    module: "hr",
    text: {
      en: "How does Odoo 19 support multiple approval levels for time off requests?",
      fr: "Comment Odoo 19 prend-il en charge plusieurs niveaux d'approbation pour les demandes de congés ?",
    },
    correct: {
      en: "Time off types define approval as none, by time off officer, by employee's manager, or both in sequence",
      fr: "Les types de congés définissent l'approbation : aucune, par responsable congés, par manager employé, ou les deux en séquence",
    },
    distractors: [
      {
        en: "Enable Requires Allocation on every time off type so HR must validate accrual before the manager approval step appears",
        fr: "Activer « Exiger une allocation » sur chaque type de congé pour que les RH valident l'acquisition avant l'étape d'approbation du manager",
      },
      {
        en: "Second-level approval is handled by posting the payslip; payroll confirmation replaces HR officer validation",
        fr: "La validation second niveau se fait en comptabilisant la fiche de paie ; la confirmation paie remplace la validation responsable RH",
      },
      {
        en: "Multi-level approval uses Discuss poll votes; the request status changes when a majority of channel members agree",
        fr: "L'approbation multi-niveaux utilise des sondages Discuss ; le statut change quand la majorité des membres du canal acceptent",
      },
    ],
    explanation: {
      en: "Each time off type sets who must approve: manager, HR officer, or both, before the leave is confirmed.",
      fr: "Chaque type de congé définit qui doit approuver : manager, responsable RH, ou les deux, avant confirmation de l'absence.",
    },
  }),
  complexQ({
    id: "hr-016",
    module: "hr",
    text: {
      en: "What is the Attendances app used for in Odoo 19?",
      fr: "À quoi sert l'application Présences (Attendances) dans Odoo 19 ?",
    },
    correct: {
      en: "Recording employee check-in and check-out times to track worked hours for payroll and compliance",
      fr: "Enregistrer les heures d'arrivée et de départ des employés pour suivre les heures travaillées pour paie et conformité",
    },
    distractors: [
      {
        en: "Scheduling manufacturing work orders on work centers based on operator availability from HR contracts",
        fr: "Planifier les ordres de travail fabrication sur centres de travail selon disponibilité opérateurs depuis contrats RH",
      },
      {
        en: "Tracking customer event registrations on the website and converting attendees into CRM opportunities",
        fr: "Suivre les inscriptions événements clients sur le website et convertir participants en opportunités CRM",
      },
      {
        en: "Monitoring vendor delivery punctuality from purchase order receipt timestamps in the Inventory app",
        fr: "Suivre la ponctualité livraisons fournisseurs depuis horodatages réceptions bon de commande dans l'app Inventaire",
      },
    ],
    explanation: {
      en: "Attendances captures presence data via kiosk or backend, feeding work entries and payroll calculations.",
      fr: "Présences capture les données de présence via kiosque ou backend, alimentant entrées de travail et calculs paie.",
    },
  }),
  complexQ({
    id: "hr-017",
    module: "hr",
    text: {
      en: "How do you publish an open job position on the company website in Odoo 19?",
      fr: "Comment publier un poste ouvert sur le site web de l'entreprise dans Odoo 19 ?",
    },
    correct: {
      en: "Create the job in Recruitment, set it as published, and display it on the website Jobs page",
      fr: "Créer le poste dans Recrutement, le marquer publié et l'afficher sur la page Emplois du website",
    },
    distractors: [
      {
        en: "Add a blog post in Website manually; Recruitment job records cannot be linked to public career listings",
        fr: "Ajouter un article blog dans Website manuellement ; les fiches poste Recrutement ne peuvent pas être liées aux offres publiques",
      },
      {
        en: "Export applicants to a spreadsheet and embed it; website job pages do not read Recruitment data live",
        fr: "Exporter candidats vers une feuille de calcul et l'intégrer ; les pages emplois website ne lisent pas les données Recrutement en direct",
      },
      {
        en: "Configure a POS product named Job Opening; eCommerce checkout creates an applicant record automatically",
        fr: "Configurer un produit POS Poste ouvert ; le checkout eCommerce crée automatiquement un enregistrement candidat",
      },
    ],
    explanation: {
      en: "Recruitment integrates with Website: published jobs appear on the careers page and accept online applications.",
      fr: "Recrutement s'intègre au Website : les postes publiés apparaissent sur la page carrières et acceptent candidatures en ligne.",
    },
  }),
  complexQ({
    id: "hr-018",
    module: "hr",
    text: {
      en: "What is an applicant stage in Odoo 19 Recruitment?",
      fr: "Qu'est-ce qu'une étape candidat en Recrutement Odoo 19 ?",
    },
    correct: {
      en: "A kanban pipeline step (New, Initial Qualification, Interview, Contract Proposal, etc.) tracking hiring progress",
      fr: "Une étape pipeline kanban (Nouveau, Qualification initiale, Entretien, Proposition contrat, etc.) suivant l'avancement recrutement",
    },
    distractors: [
      {
        en: "A payroll structure type assigned when the applicant is converted to an employee with a running contract",
        fr: "Un type de structure salariale paie assigné quand le candidat est converti en employé avec contrat actif",
      },
      {
        en: "An inventory transit location stage for components awaiting quality inspection before manufacturing",
        fr: "Une étape emplacement transit inventaire pour composants en attente contrôle qualité avant fabrication",
      },
      {
        en: "A project task state synced from Timesheets when consultants log recruitment-related billable hours",
        fr: "Un état tâche projet synchronisé depuis Feuilles de temps quand consultants saisissent heures facturables recrutement",
      },
    ],
    explanation: {
      en: "Applicant stages organize candidates in the recruitment kanban and drive hiring workflow actions.",
      fr: "Les étapes candidat organisent les candidats dans le kanban recrutement et pilotent les actions du processus d'embauche.",
    },
  }),
  complexQ({
    id: "hr-019",
    module: "hr",
    text: {
      en: "How do you link an employee record to their Odoo user account in Odoo 19?",
      fr: "Comment lier une fiche employé au compte utilisateur Odoo dans Odoo 19 ?",
    },
    correct: {
      en: "Set the Related User field on the employee form to connect HR data with login and self-service access",
      fr: "Renseigner le champ Utilisateur associé sur la fiche employé pour connecter données RH et accès connexion/self-service",
    },
    distractors: [
      {
        en: "Matching is automatic by email domain; the Related User field is read-only and populated at database install",
        fr: "La correspondance est automatique par domaine e-mail ; le champ Utilisateur associé est en lecture seule et rempli à l'installation",
      },
      {
        en: "Create a portal contact in Contacts and set it as default salesperson on the employee's department form",
        fr: "Créer un contact portail dans Contacts et le définir comme commercial par défaut sur la fiche département de l'employé",
      },
      {
        en: "Link via the manufacturing work center responsible user; HR employee records inherit MRP operator assignments",
        fr: "Lier via l'utilisateur responsable du centre de travail fabrication ; les fiches employé RH héritent des assignations opérateur MRP",
      },
    ],
    explanation: {
      en: "Linking user and employee enables personalized Time Off, Attendances, and Appraisals from the employee's login.",
      fr: "Lier utilisateur et employé active Congés, Présences et Évaluations personnalisés depuis la connexion de l'employé.",
    },
  }),
  complexQ({
    id: "hr-020",
    module: "hr",
    text: {
      en: "How does the Fleet module integrate with HR in Odoo 19?",
      fr: "Comment le module Flotte (Fleet) s'intègre-t-il aux RH dans Odoo 19 ?",
    },
    correct: {
      en: "Company vehicles can be assigned to employees with contract, cost, and odometer tracking per driver",
      fr: "Les véhicules de société peuvent être assignés aux employés avec suivi contrat, coûts et odomètre par conducteur",
    },
    distractors: [
      {
        en: "Fleet replaces employee contracts; wage and schedule data migrate to vehicle lease records automatically",
        fr: "Flotte remplace les contrats employés ; salaire et horaire migrent automatiquement vers fiches location véhicule",
      },
      {
        en: "Fleet manages only manufacturing equipment; employee car assignments require the Maintenance module instead",
        fr: "Flotte gère uniquement l'équipement fabrication ; les assignations voiture employé nécessitent le module Maintenance",
      },
      {
        en: "Vehicle costs post directly to employee payslips; Fleet has no link to employee records or departments",
        fr: "Les coûts véhicule se comptabilisent directement sur fiches de paie employés ; Flotte n'a aucun lien avec fiches employés ou départements",
      },
    ],
    explanation: {
      en: "Fleet tracks vehicle assignments, service contracts, and costs linked to the employee using the car.",
      fr: "Flotte suit assignations véhicules, contrats de service et coûts liés à l'employé utilisant la voiture.",
    },
  }),
];
