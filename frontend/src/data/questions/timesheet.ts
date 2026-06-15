import { complexQ } from "./helpers";

export const timesheetQuestions = [
  complexQ({
    id: "ts-001",
    module: "timesheet",
    text: {
      en: "How do you log time spent on a task in Odoo 19?",
      fr: "Comment enregistrer du temps passé sur une tâche dans Odoo 19 ?",
    },
    correct: {
      en: "Create a timesheet line linked to the project and task from the grid, timer, or task form",
      fr: "Créer une ligne de feuille de temps liée au projet et à la tâche depuis la grille, le minuteur ou la fiche tâche",
    },
    distractors: [
      {
        en: "Check in and out with the Attendances app; hours sync to tasks without a separate timesheet entry",
        fr: "Pointer entrée/sortie avec l'application Présences ; les heures se synchronisent aux tâches sans ligne de feuille de temps",
      },
      {
        en: "Log duration on calendar events only; meetings create analytic lines but not billable timesheet records",
        fr: "Saisir la durée uniquement sur les événements agenda ; les réunions créent des lignes analytiques mais pas de feuilles de temps facturables",
      },
      {
        en: "Submit an expense report with a quantity field; reimbursable hours are tracked as vendor bill lines",
        fr: "Soumettre une note de frais avec un champ quantité ; les heures remboursables sont suivies comme lignes de facture fournisseur",
      },
    ],
    explanation: {
      en: "Timesheet entries record hours per employee, project, and task. They can be entered manually, via the timer, or from the weekly grid.",
      fr: "Les feuilles de temps enregistrent les heures par employé, projet et tâche. Elles se saisissent manuellement, via le minuteur ou depuis la grille hebdomadaire.",
    },
  }),
  complexQ({
    id: "ts-002",
    module: "timesheet",
    text: {
      en: "What is the link between Timesheets and invoicing in Odoo 19?",
      fr: "Quel est le lien entre Feuilles de temps et Facturation dans Odoo 19 ?",
    },
    correct: {
      en: "Billable validated timesheet hours can be invoiced to the customer according to the project or product billing policy",
      fr: "Les heures facturables validées peuvent être facturées au client selon la politique de facturation du projet ou du produit",
    },
    distractors: [
      {
        en: "Timesheet lines post directly to the customer invoice journal without linking to a sales order or project",
        fr: "Les lignes de feuilles de temps comptabilisent directement au journal factures client sans lien commande ou projet",
      },
      {
        en: "All logged hours auto-create sales order lines on confirmation regardless of the billable flag",
        fr: "Toutes les heures saisies créent automatiquement des lignes de commande à la confirmation quel que soit l'indicateur facturable",
      },
      {
        en: "Non-billable hours generate credit notes; only billable hours appear on the project profitability dashboard",
        fr: "Les heures non facturables génèrent des avoirs ; seules les heures facturables apparaissent sur le tableau de bord rentabilité",
      },
    ],
    explanation: {
      en: "When billing is based on timesheets, delivered billable hours become invoice lines on the linked sales order or project.",
      fr: "Quand la facturation est basée sur les feuilles de temps, les heures facturables livrées deviennent des lignes de facture sur la commande ou le projet lié.",
    },
  }),
  complexQ({
    id: "ts-003",
    module: "timesheet",
    text: {
      en: "How are employee timesheets validated in Odoo 19?",
      fr: "Comment valider les feuilles de temps des employés dans Odoo 19 ?",
    },
    correct: {
      en: "A manager reviews submitted entries in Timesheets and approves them through the configured validation workflow",
      fr: "Un responsable examine les saisies soumises dans Feuilles de temps et les approuve via le workflow de validation configuré",
    },
    distractors: [
      {
        en: "Timesheets validate automatically on save when the employee has billing rights on the project",
        fr: "Les feuilles de temps se valident automatiquement à l'enregistrement quand l'employé a les droits de facturation sur le projet",
      },
      {
        en: "The accounting lock date validates all timesheets for the closed period without manager review",
        fr: "La date de verrouillage comptable valide toutes les feuilles de temps de la période clôturée sans revue manager",
      },
      {
        en: "Payroll officers validate timesheets when processing payslips; hours cannot be approved in the Timesheets app",
        fr: "Les gestionnaires de paie valident les feuilles de temps lors du traitement des bulletins ; l'approbation n'est pas possible dans Feuilles de temps",
      },
    ],
    explanation: {
      en: "Timesheet validation is a manager approval step that locks entries before billing or payroll export, depending on configuration.",
      fr: "La validation des feuilles de temps est une étape d'approbation manager qui verrouille les entrées avant facturation ou export paie, selon la configuration.",
    },
  }),
  complexQ({
    id: "ts-004",
    module: "timesheet",
    text: {
      en: "What is the timer in Timesheets used for in Odoo 19?",
      fr: "À quoi sert le minuteur (timer) dans Feuilles de temps en Odoo 19 ?",
    },
    correct: {
      en: "Start and stop a running clock on a task to automatically record elapsed time as a timesheet entry",
      fr: "Démarrer et arrêter un chronomètre sur une tâche pour enregistrer automatiquement le temps écoulé comme feuille de temps",
    },
    distractors: [
      {
        en: "Measure manufacturing work order cycle time on the shop floor without creating project timesheet lines",
        fr: "Mesurer le temps de cycle des ordres de fabrication en atelier sans créer de lignes de feuilles de temps projet",
      },
      {
        en: "Track employee kiosk check-in duration at office entry; attendance hours replace task-level logging",
        fr: "Suivre la durée de pointage au kiosque à l'entrée du bureau ; les heures de présence remplacent la saisie par tâche",
      },
      {
        en: "Count down to the task deadline and send overdue alerts without logging billable hours",
        fr: "Compter à rebours jusqu'à la date limite de la tâche et envoyer des alertes de retard sans enregistrer d'heures facturables",
      },
    ],
    explanation: {
      en: "The timesheet timer captures live work duration and creates or updates a timesheet line when stopped.",
      fr: "Le minuteur des feuilles de temps capture la durée de travail en direct et crée ou met à jour une ligne à l'arrêt.",
    },
  }),
  complexQ({
    id: "ts-005",
    module: "timesheet",
    text: {
      en: "How do you restrict timesheet entry to a specific project in Odoo 19?",
      fr: "Comment restreindre la saisie des feuilles de temps à un projet spécifique dans Odoo 19 ?",
    },
    correct: {
      en: "Configure the project, link authorized employees, and set access rights so only eligible users can log time on it",
      fr: "Configurer le projet, lier les employés autorisés et définir les droits d'accès pour que seuls les utilisateurs éligibles puissent saisir du temps",
    },
    distractors: [
      {
        en: "Disable the timesheet grid view globally in Settings; employees must use the timer on assigned tasks only",
        fr: "Désactiver la vue grille des feuilles de temps globalement dans Paramètres ; les employés doivent utiliser uniquement le minuteur sur les tâches assignées",
      },
      {
        en: "Set working calendar hours on the employee contract; off-calendar projects reject all timesheet submissions",
        fr: "Définir les heures du calendrier de travail sur le contrat employé ; les projets hors calendrier rejettent toutes les saisies",
      },
      {
        en: "Mark the analytic account as closed; closed accounts still accept entries but hide the project from the grid",
        fr: "Marquer le compte analytique comme clôturé ; les comptes clôturés acceptent encore les saisies mais masquent le projet de la grille",
      },
    ],
    explanation: {
      en: "Project membership, favorites, and security groups control which employees see and can log time on specific projects.",
      fr: "L'appartenance au projet, les favoris et les groupes de sécurité contrôlent quels employés voient et peuvent saisir du temps sur quels projets.",
    },
  }),
  complexQ({
    id: "ts-006",
    module: "timesheet",
    text: {
      en: "What is the difference between a billable and a non-billable timesheet entry in Odoo 19?",
      fr: "Quelle est la différence entre une saisie de temps facturable et non facturable dans Odoo 19 ?",
    },
    correct: {
      en: "Billable hours can be included on customer invoices; non-billable hours are tracked for cost but excluded from billing",
      fr: "Les heures facturables peuvent figurer sur les factures client ; les heures non facturables sont suivies pour le coût mais exclues de la facturation",
    },
    distractors: [
      {
        en: "All hours default to billable; the flag only affects payroll overtime calculation on the employee contract",
        fr: "Toutes les heures sont facturables par défaut ; l'indicateur n'affecte que le calcul des heures supplémentaires paie sur le contrat",
      },
      {
        en: "Non-billable hours create internal transfer stock moves; billable hours generate delivery orders",
        fr: "Les heures non facturables créent des transferts internes de stock ; les heures facturables génèrent des bons de livraison",
      },
      {
        en: "The distinction applies only after validation; unvalidated entries are always treated as non-billable for invoicing",
        fr: "La distinction s'applique uniquement après validation ; les entrées non validées sont toujours traitées comme non facturables à la facturation",
      },
    ],
    explanation: {
      en: "The billable flag on timesheet lines determines whether hours appear in invoicing wizards and delivered quantity on service products.",
      fr: "L'indicateur facturable sur les lignes détermine si les heures apparaissent dans les assistants de facturation et la quantité livrée des produits service.",
    },
  }),
  complexQ({
    id: "ts-007",
    module: "timesheet",
    text: {
      en: "How do you view and enter timesheets in a grid by day and project in Odoo 19?",
      fr: "Comment visualiser et saisir les feuilles de temps en grille par jour et projet dans Odoo 19 ?",
    },
    correct: {
      en: "Use the Timesheets grid view to enter hours per day across projects and tasks in a weekly matrix",
      fr: "Utiliser la vue grille Feuilles de temps pour saisir les heures par jour sur les projets et tâches dans une matrice hebdomadaire",
    },
    distractors: [
      {
        en: "Use the Project Gantt view in resource mode; planned hours auto-post as validated timesheets at week end",
        fr: "Utiliser la vue Gantt Projet en mode ressources ; les heures planifiées se comptabilisent comme feuilles de temps validées en fin de semaine",
      },
      {
        en: "Open the analytic accounting pivot on project accounts; pivot cells accept direct hour entry per day",
        fr: "Ouvrir le pivot comptabilité analytique sur les comptes projet ; les cellules du pivot acceptent la saisie directe d'heures par jour",
      },
      {
        en: "Import weekly hours through a spreadsheet template; the grid view is read-only for display purposes",
        fr: "Importer les heures hebdomadaires via un modèle tableur ; la vue grille est en lecture seule à des fins d'affichage",
      },
    ],
    explanation: {
      en: "The timesheet grid is the primary weekly entry interface, showing rows by project/task and columns by day.",
      fr: "La grille des feuilles de temps est l'interface principale de saisie hebdomadaire, avec lignes par projet/tâche et colonnes par jour.",
    },
  }),
  complexQ({
    id: "ts-008",
    module: "timesheet",
    text: {
      en: "Can timesheets be linked to Helpdesk tickets in Odoo 19?",
      fr: "Les feuilles de temps peuvent-elles être liées aux tickets Helpdesk dans Odoo 19 ?",
    },
    correct: {
      en: "Yes, when Helpdesk and Timesheets are installed, hours can be logged directly on helpdesk tickets",
      fr: "Oui, lorsque Helpdesk et Feuilles de temps sont installés, des heures peuvent être saisies directement sur les tickets",
    },
    distractors: [
      {
        en: "No, timesheets attach only to Project tasks; helpdesk uses CRM call duration for support metrics",
        fr: "Non, les feuilles de temps se rattachent uniquement aux tâches Projet ; Helpdesk utilise la durée des appels CRM pour les métriques support",
      },
      {
        en: "Tickets convert logged hours to billable sales order lines automatically without a timesheet record",
        fr: "Les tickets convertissent les heures saisies en lignes de commande facturables automatiquement sans fiche de feuille de temps",
      },
      {
        en: "Helpdesk timesheets require Field Service; standard Helpdesk stores duration as chatter messages only",
        fr: "Les feuilles de temps Helpdesk nécessitent Field Service ; Helpdesk standard stocke la durée uniquement comme messages chatter",
      },
    ],
    explanation: {
      en: "Helpdesk integrates with Timesheets so support agents track billable and non-billable time on tickets linked to projects.",
      fr: "Helpdesk s'intègre aux Feuilles de temps pour que les agents support suivent le temps facturable et non facturable sur les tickets liés aux projets.",
    },
  }),
  complexQ({
    id: "ts-009",
    module: "timesheet",
    text: {
      en: "What is the minimum duration increment for timesheets in Odoo 19?",
      fr: "Quel est l'incrément minimum de durée pour les feuilles de temps dans Odoo 19 ?",
    },
    correct: {
      en: "A configurable encoding unit and rounding rule in Timesheets settings (e.g. 15-minute increments)",
      fr: "Une unité d'encodage et une règle d'arrondi configurables dans les paramètres Feuilles de temps (ex. incréments de 15 minutes)",
    },
    distractors: [
      {
        en: "Always one full hour per entry; fractional hours require converting to product units of days",
        fr: "Toujours une heure complète par saisie ; les fractions d'heure nécessitent une conversion en unités de jours produit",
      },
      {
        en: "Determined by the product unit of measure on the sales order line; inventory UoM rounding applies to timesheets",
        fr: "Déterminé par l'unité de mesure produit sur la ligne de commande ; l'arrondi UdM inventaire s'applique aux feuilles de temps",
      },
      {
        en: "Fixed at one minute per entry; rounding rules apply only when exporting hours to payroll batches",
        fr: "Fixé à une minute par saisie ; les règles d'arrondi s'appliquent uniquement à l'export des heures vers les lots de paie",
      },
    ],
    explanation: {
      en: "Timesheet encoding settings define the minimum increment and rounding applied when employees log or stop the timer.",
      fr: "Les paramètres d'encodage définissent l'incrément minimum et l'arrondi appliqués quand les employés saisissent ou arrêtent le minuteur.",
    },
  }),
  complexQ({
    id: "ts-010",
    module: "timesheet",
    text: {
      en: "How do you prevent employees from logging time on weekends in Odoo 19?",
      fr: "Comment empêcher les employés de saisir du temps le week-end dans Odoo 19 ?",
    },
    correct: {
      en: "Configure employee working calendars and timesheet validation rules that restrict entries outside working days",
      fr: "Configurer les calendriers de travail employés et les règles de validation des feuilles de temps qui restreignent les saisies hors jours ouvrés",
    },
    distractors: [
      {
        en: "The timesheet grid disables weekend columns automatically for all companies without additional configuration",
        fr: "La grille des feuilles de temps désactive automatiquement les colonnes week-end pour toutes les sociétés sans configuration supplémentaire",
      },
      {
        en: "Block weekend entry through Attendances kiosk rules; timesheets inherit check-in/out restrictions only",
        fr: "Bloquer la saisie week-end via les règles du kiosque Présences ; les feuilles de temps héritent uniquement des restrictions de pointage",
      },
      {
        en: "Set inventory operation types to weekday-only; internal transfers gate timesheet creation on stock moves",
        fr: "Définir les types d'opérations inventaire en jours ouvrés uniquement ; les transferts internes conditionnent la création de feuilles de temps",
      },
    ],
    explanation: {
      en: "Working hours on employee resources and validation settings can warn or block timesheet entries on non-working days.",
      fr: "Les heures de travail sur les ressources employés et les paramètres de validation peuvent avertir ou bloquer les saisies les jours non ouvrés.",
    },
  }),
  complexQ({
    id: "ts-011",
    module: "timesheet",
    text: {
      en: "What report shows employee timesheet utilization in Odoo 19?",
      fr: "Quel rapport affiche l'utilisation des feuilles de temps par employé dans Odoo 19 ?",
    },
    correct: {
      en: "The Timesheets analysis report with pivot and graph views grouping hours by employee, project, and task",
      fr: "Le rapport d'analyse Feuilles de temps avec vues pivot et graphique regroupant les heures par employé, projet et tâche",
    },
    distractors: [
      {
        en: "The project profitability dashboard only; it shows margin but not hours breakdown per employee",
        fr: "Uniquement le tableau de bord rentabilité projet ; il affiche la marge mais pas la répartition des heures par employé",
      },
      {
        en: "The HR Attendances overtime report comparing check-in duration to contracted weekly hours",
        fr: "Le rapport heures supplémentaires Présences comparant la durée de pointage aux heures hebdomadaires contractuelles",
      },
      {
        en: "The payroll payslip batch summary listing validated hours exported from accounting analytic lines",
        fr: "Le résumé du lot de bulletins de paie listant les heures validées exportées depuis les lignes analytiques comptables",
      },
    ],
    explanation: {
      en: "Timesheet analysis aggregates logged and validated hours for management reporting across employees and projects.",
      fr: "L'analyse des feuilles de temps agrège les heures saisies et validées pour le reporting de gestion par employé et projet.",
    },
  }),
  complexQ({
    id: "ts-012",
    module: "timesheet",
    text: {
      en: "How are timesheet costs calculated for project profitability in Odoo 19?",
      fr: "Comment les coûts des feuilles de temps sont-ils calculés pour la rentabilité projet dans Odoo 19 ?",
    },
    correct: {
      en: "Logged hours are multiplied by the employee hourly cost defined on the employee form or contract",
      fr: "Les heures saisies sont multipliées par le coût horaire employé défini sur la fiche employé ou le contrat",
    },
    distractors: [
      {
        en: "Using the product sales price on the linked service line regardless of the employee who logged time",
        fr: "En utilisant le prix de vente produit sur la ligne de service liée quel que soit l'employé ayant saisi le temps",
      },
      {
        en: "From the standard cost on the storable product variant linked to the project template",
        fr: "À partir du coût standard sur la variante produit stockable liée au modèle de projet",
      },
      {
        en: "From warehouse valuation layers averaged across all employees in the department analytic group",
        fr: "À partir des couches de valorisation entrepôt moyennées sur tous les employés du groupe analytique département",
      },
    ],
    explanation: {
      en: "Employee hourly cost drives project cost on timesheet lines, contrasting with the sales price used for revenue.",
      fr: "Le coût horaire employé alimente le coût projet sur les lignes de feuilles de temps, en contraste avec le prix de vente pour le revenu.",
    },
  }),
  complexQ({
    id: "ts-013",
    module: "timesheet",
    text: {
      en: "Can an employee log time from the Odoo mobile app in Odoo 19?",
      fr: "Un employé peut-il saisir du temps depuis l'application mobile Odoo en Odoo 19 ?",
    },
    correct: {
      en: "Yes, the Odoo mobile app supports timesheet entry, grid access, and the timer for assigned projects and tasks",
      fr: "Oui, l'application mobile Odoo supporte la saisie de feuilles de temps, l'accès à la grille et le minuteur pour les projets et tâches assignés",
    },
    distractors: [
      {
        en: "Mobile access is limited to managers approving timesheets; employees must use the desktop grid only",
        fr: "L'accès mobile est limité aux managers approuvant les feuilles de temps ; les employés doivent utiliser uniquement la grille bureau",
      },
      {
        en: "Timesheets on mobile require the Barcode app to scan project QR codes before each entry",
        fr: "Les feuilles de temps sur mobile nécessitent l'application Code-barres pour scanner les QR codes projet avant chaque saisie",
      },
      {
        en: "Portal users log time on mobile; internal employees use Attendances geolocation instead of timesheets",
        fr: "Les utilisateurs portail saisissent sur mobile ; les employés internes utilisent la géolocalisation Présences au lieu des feuilles de temps",
      },
    ],
    explanation: {
      en: "The Odoo mobile app includes Timesheets functionality for field employees to log hours and use the timer remotely.",
      fr: "L'application mobile Odoo inclut Feuilles de temps pour que les employés terrain saisissent des heures et utilisent le minuteur à distance.",
    },
  }),
  complexQ({
    id: "ts-014",
    module: "timesheet",
    text: {
      en: "What happens when timesheets are invoiced to a customer in Odoo 19?",
      fr: "Que se passe-t-il quand les feuilles de temps sont facturées au client dans Odoo 19 ?",
    },
    correct: {
      en: "Invoiced timesheet lines are marked as invoiced and excluded from subsequent invoice wizards on the same order",
      fr: "Les lignes facturées sont marquées comme facturées et exclues des assistants de facturation suivants sur la même commande",
    },
    distractors: [
      {
        en: "Timesheet records are archived and removed from the project; only the invoice line retains the hour history",
        fr: "Les fiches de feuilles de temps sont archivées et retirées du projet ; seule la ligne de facture conserve l'historique des heures",
      },
      {
        en: "Validated hours revert to draft status so employees can edit quantities before the next billing cycle",
        fr: "Les heures validées repassent en brouillon pour que les employés modifient les quantités avant le prochain cycle de facturation",
      },
      {
        en: "Invoicing creates a stock delivery for service products; on-hand service quantity decreases on validation",
        fr: "La facturation crée une livraison stock pour les produits service ; la quantité disponible service diminue à la validation",
      },
    ],
    explanation: {
      en: "The invoiced flag prevents double billing by excluding already billed timesheet lines from new invoice runs.",
      fr: "L'indicateur facturé évite la double facturation en excluant les lignes déjà facturées des nouvelles facturations.",
    },
  }),
  complexQ({
    id: "ts-015",
    module: "timesheet",
    text: {
      en: "How do you enable timesheet tracking on a sales order in Odoo 19?",
      fr: "Comment activer le suivi des feuilles de temps sur une commande de vente dans Odoo 19 ?",
    },
    correct: {
      en: "Use a service product with timesheet tracking enabled on the product form (e.g. based on timesheets policy)",
      fr: "Utiliser un produit service avec suivi des feuilles de temps activé sur la fiche produit (ex. politique basée sur les feuilles de temps)",
    },
    distractors: [
      {
        en: "Enable the Timesheets checkbox on the sales order header; it applies to all lines regardless of product type",
        fr: "Activer la case Feuilles de temps sur l'en-tête de commande ; elle s'applique à toutes les lignes quel que soit le type produit",
      },
      {
        en: "Set the project billing type on the customer contact; all orders for that partner inherit timesheet tracking",
        fr: "Définir le type de facturation projet sur le contact client ; toutes les commandes de ce partenaire héritent du suivi des feuilles de temps",
      },
      {
        en: "Install Manufacturing and add a BOM on the service line; work orders capture hours for billing",
        fr: "Installer Fabrication et ajouter une nomenclature sur la ligne service ; les ordres de travail capturent les heures pour la facturation",
      },
    ],
    explanation: {
      en: "Service product configuration defines whether delivered quantity comes from timesheets, milestones, or manual delivery.",
      fr: "La configuration du produit service définit si la quantité livrée provient des feuilles de temps, des jalons ou d'une livraison manuelle.",
    },
  }),
  complexQ({
    id: "ts-016",
    module: "timesheet",
    text: {
      en: "What is the difference between duration and unit amount on a timesheet line in Odoo 19?",
      fr: "Quelle est la différence entre durée et quantité unitaire sur une ligne de feuille de temps dans Odoo 19 ?",
    },
    correct: {
      en: "Duration is the time spent; unit amount may differ when the product UoM is not hours (e.g. days) per billing settings",
      fr: "La durée est le temps passé ; la quantité unitaire peut différer quand l'UdM produit n'est pas en heures (ex. jours) selon la facturation",
    },
    distractors: [
      {
        en: "Duration tracks internal cost; unit amount tracks customer-facing billable quantity and they are never related",
        fr: "La durée suit le coût interne ; la quantité unitaire suit la quantité facturable client et elles ne sont jamais liées",
      },
      {
        en: "They are duplicate fields kept for legacy imports; only duration is used in Odoo 19 invoicing workflows",
        fr: "Ce sont des champs dupliqués conservés pour les imports legacy ; seule la durée est utilisée dans les workflows de facturation Odoo 19",
      },
      {
        en: "Unit amount stores tax-inclusive values; duration stores pre-tax hours for analytic accounting only",
        fr: "La quantité unitaire stocke les valeurs TTC ; la durée stocke les heures HT pour la comptabilité analytique uniquement",
      },
    ],
    explanation: {
      en: "When services are sold in days or other units, Odoo can convert logged hours into billing units on the timesheet line.",
      fr: "Quand les services sont vendus en jours ou autres unités, Odoo peut convertir les heures saisies en unités de facturation sur la ligne.",
    },
  }),
  complexQ({
    id: "ts-017",
    module: "timesheet",
    text: {
      en: "How can a manager see overdue timesheet submissions in Odoo 19?",
      fr: "Comment un manager peut-il voir les feuilles de temps en retard dans Odoo 19 ?",
    },
    correct: {
      en: "Use timesheet reminder emails and the validation dashboard to identify employees with missing or late entries",
      fr: "Utiliser les e-mails de rappel des feuilles de temps et le tableau de bord de validation pour identifier les employés avec saisies manquantes ou tardives",
    },
    distractors: [
      {
        en: "Review payroll payslip warnings only; overdue timesheets appear when running the monthly salary batch",
        fr: "Consulter uniquement les avertissements des bulletins de paie ; les retards apparaissent lors du lot salarial mensuel",
      },
      {
        en: "Check manufacturing work center efficiency reports for unlogged hours on production orders",
        fr: "Consulter les rapports d'efficacité des centres de travail pour les heures non saisies sur les ordres de production",
      },
      {
        en: "Use accounting lock date alerts; the general ledger flags employees who post entries after period close",
        fr: "Utiliser les alertes de date de verrouillage comptable ; le grand livre signale les employés postant après clôture de période",
      },
    ],
    explanation: {
      en: "Timesheet reminders and manager validation views highlight missing weekly submissions for follow-up.",
      fr: "Les rappels et les vues de validation manager mettent en évidence les saisies hebdomadaires manquantes à relancer.",
    },
  }),
  complexQ({
    id: "ts-018",
    module: "timesheet",
    text: {
      en: "Can timesheet entries be edited after validation in Odoo 19?",
      fr: "Les saisies de feuilles de temps peuvent-elles être modifiées après validation dans Odoo 19 ?",
    },
    correct: {
      en: "It depends on access rights; validated entries typically require a manager to reset or unlock them before editing",
      fr: "Cela dépend des droits d'accès ; les entrées validées nécessitent généralement qu'un manager les réinitialise ou déverrouille avant modification",
    },
    distractors: [
      {
        en: "Validated entries are permanently locked for all users including administrators; only data import can change them",
        fr: "Les entrées validées sont verrouillées définitivement pour tous les utilisateurs y compris administrateurs ; seul l'import peut les modifier",
      },
      {
        en: "Any employee can edit validated timesheets until the linked invoice is posted in accounting",
        fr: "Tout employé peut modifier les feuilles de temps validées tant que la facture liée n'est pas comptabilisée",
      },
      {
        en: "Editing after validation creates a duplicate line; the original validated entry remains unchanged in the audit trail",
        fr: "Modifier après validation crée une ligne dupliquée ; l'entrée validée originale reste inchangée dans la piste d'audit",
      },
    ],
    explanation: {
      en: "Validation locks timesheet lines to preserve billing integrity; managers with appropriate rights can revert validation to allow edits.",
      fr: "La validation verrouille les lignes pour préserver l'intégrité de facturation ; les managers avec les droits appropriés peuvent annuler la validation pour permettre les modifications.",
    },
  }),
  complexQ({
    id: "ts-019",
    module: "timesheet",
    text: {
      en: "How do you log time on an internal project in Odoo 19?",
      fr: "Comment saisir du temps sur un projet interne dans Odoo 19 ?",
    },
    correct: {
      en: "Create or select a project without a customer sales order, typically marked non-billable for overhead activities",
      fr: "Créer ou sélectionner un projet sans commande client, généralement marqué non facturable pour les activités overhead",
    },
    distractors: [
      {
        en: "Log hours on employee leave requests; internal time is tracked exclusively through the Time Off app",
        fr: "Saisir les heures sur les demandes de congé ; le temps interne est suivi exclusivement via l'application Congés",
      },
      {
        en: "Use vendor bills with analytic distribution; internal projects accept costs but reject employee timesheet lines",
        fr: "Utiliser des factures fournisseurs avec distribution analytique ; les projets internes acceptent les coûts mais rejettent les lignes employés",
      },
      {
        en: "Internal time requires a dummy sales order with zero-price service lines to activate the timesheet grid",
        fr: "Le temps interne nécessite une commande fictive avec lignes service à prix zéro pour activer la grille des feuilles de temps",
      },
    ],
    explanation: {
      en: "Internal projects track non-billable time such as training, R&D, or administrative work without customer invoicing.",
      fr: "Les projets internes suivent le temps non facturable comme formation, R&D ou travail administratif sans facturation client.",
    },
  }),
  complexQ({
    id: "ts-020",
    module: "timesheet",
    text: {
      en: "What integration allows automatic timesheet suggestions from the calendar in Odoo 19?",
      fr: "Quelle intégration permet des suggestions automatiques de feuilles de temps depuis l'agenda dans Odoo 19 ?",
    },
    correct: {
      en: "Calendar meetings can suggest timesheet entries for attendees based on the event duration and linked project",
      fr: "Les réunions de l'agenda peuvent suggérer des entrées de feuilles de temps aux participants selon la durée et le projet lié",
    },
    distractors: [
      {
        en: "Google Calendar one-way sync creates validated timesheets without employee confirmation in Odoo",
        fr: "La synchronisation unidirectionnelle Google Calendar crée des feuilles de temps validées sans confirmation employé dans Odoo",
      },
      {
        en: "Project Gantt auto-fills timesheets when tasks move to Done; calendar events are not used for suggestions",
        fr: "Le Gantt Projet préremplit les feuilles de temps quand les tâches passent à Terminé ; les événements agenda ne servent pas aux suggestions",
      },
      {
        en: "Attendances geofencing at client sites proposes timesheet lines when employees enter the partner address radius",
        fr: "Le géorepérage Présences sur site client propose des lignes quand les employés entrent dans le rayon de l'adresse partenaire",
      },
    ],
    explanation: {
      en: "Odoo can propose timesheet lines from calendar events, letting employees confirm hours spent in meetings linked to projects.",
      fr: "Odoo peut proposer des lignes de feuilles de temps depuis les événements agenda, laissant les employés confirmer les heures de réunions liées aux projets.",
    },
  }),
];
