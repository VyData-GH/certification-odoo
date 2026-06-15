import { screenshotQ } from "./helpers";

export const screenshotQuestions = [
  screenshotQ({
    id: "ss-crm-001",
    module: "crm",
    image: {
      src: "/exam-screenshots/crm-pipeline.svg",
      alt: {
        en: "Odoo CRM kanban pipeline with New, Qualified, Proposition, and Won stages",
        fr: "Pipeline kanban CRM Odoo avec étapes Nouveau, Qualifié, Proposition et Gagné",
      },
    },
    text: {
      en: "Looking at this CRM pipeline screenshot, what does dragging a card to the « Won » column do?",
      fr: "D'après cette capture du pipeline CRM, que se passe-t-il en déplaçant une carte vers la colonne « Gagné » ?",
    },
    correct: {
      en: "Marks the opportunity as won and can trigger creation of a sales quotation or order depending on CRM settings",
      fr: "Marque l'opportunité comme gagnée et peut déclencher la création d'un devis ou d'une commande selon les paramètres CRM",
    },
    distractors: [
      {
        en: "Archives the lead permanently and removes it from all sales reports without creating any document",
        fr: "Archive la piste définitivement et la retire de tous les rapports commerciaux sans créer de document",
      },
      {
        en: "Converts the opportunity into a vendor bill in Accounting for the expected revenue amount",
        fr: "Convertit l'opportunité en facture fournisseur en Comptabilité pour le montant de revenu attendu",
      },
      {
        en: "Duplicates the card into every pipeline stage so managers can compare forecasts side by side",
        fr: "Duplique la carte dans chaque étape du pipeline pour comparer les prévisions côte à côte",
      },
    ],
    explanation: {
      en: "Winning an opportunity in the CRM kanban updates its stage to Won. Odoo can offer to create a quotation from the opportunity (CRM ‣ Configuration ‣ Settings).",
      fr: "Gagner une opportunité dans le kanban CRM met à jour son étape vers Gagné. Odoo peut proposer de créer un devis depuis l'opportunité (CRM ‣ Configuration ‣ Paramètres).",
    },
  }),
  screenshotQ({
    id: "ss-inv-001",
    module: "inventory",
    image: {
      src: "/exam-screenshots/inventory-delivery.svg",
      alt: {
        en: "Odoo delivery order form with Validate button highlighted",
        fr: "Bon de livraison Odoo avec le bouton Valider mis en évidence",
      },
    },
    text: {
      en: "In this Inventory delivery order screenshot, what happens when you click the highlighted « Validate » button?",
      fr: "Sur cette capture de bon de livraison, que se passe-t-il en cliquant sur le bouton « Valider » mis en évidence ?",
    },
    correct: {
      en: "Processes the transfer, deducts stock from the source location, and sets the delivery to Done",
      fr: "Traite le transfert, déduit le stock de l'emplacement source et passe la livraison à Terminé",
    },
    distractors: [
      {
        en: "Creates a purchase RFQ to replenish the products shown on the delivery lines",
        fr: "Crée une demande de prix fournisseur pour réapprovisionner les produits des lignes de livraison",
      },
      {
        en: "Sends the delivery note by email without changing on-hand quantities in stock",
        fr: "Envoie le bon de livraison par e-mail sans modifier les quantités en stock",
      },
      {
        en: "Splits the delivery into backorders automatically and cancels the original transfer",
        fr: "Scinde la livraison en reliquats automatiquement et annule le transfert d'origine",
      },
    ],
    explanation: {
      en: "Validating a delivery order (Inventory ‣ Operations ‣ Deliveries) confirms the stock move and updates quantities in the source location.",
      fr: "Valider un bon de livraison (Inventaire ‣ Opérations ‣ Livraisons) confirme le mouvement de stock et met à jour les quantités à l'emplacement source.",
    },
  }),
  screenshotQ({
    id: "ss-mrp-001",
    module: "mrp",
    image: {
      src: "/exam-screenshots/mrp-manufacturing.svg",
      alt: {
        en: "Odoo manufacturing order form with Produce All button",
        fr: "Ordre de fabrication Odoo avec le bouton Produire tout",
      },
    },
    text: {
      en: "Based on this Manufacturing Order screenshot, what does « Produce All » do?",
      fr: "D'après cette capture d'ordre de fabrication, que fait « Produire tout » ?",
    },
    correct: {
      en: "Records production for the full quantity, consumes components, and posts finished goods into stock",
      fr: "Enregistre la production pour la quantité totale, consomme les composants et entre les produits finis en stock",
    },
    distractors: [
      {
        en: "Creates a draft bill of materials without posting any stock movement",
        fr: "Crée une nomenclature brouillon sans mouvement de stock",
      },
      {
        en: "Schedules the MO on a work center calendar without consuming components",
        fr: "Planifie l'OF sur le calendrier d'un poste de travail sans consommer les composants",
      },
      {
        en: "Duplicates the manufacturing order for each work center listed on the routing",
        fr: "Duplique l'ordre de fabrication pour chaque poste de travail de la gamme",
      },
    ],
    explanation: {
      en: "Produce All on a manufacturing order completes production for the entire quantity, triggering component consumption and finished product moves (MRP ‣ Operations ‣ Manufacturing Orders).",
      fr: "Produire tout sur un ordre de fabrication finalise la production pour toute la quantité, déclenchant la consommation des composants et les entrées de produits finis (MRP ‣ Opérations ‣ Ordres de fabrication).",
    },
  }),
  screenshotQ({
    id: "ss-web-001",
    module: "website",
    image: {
      src: "/exam-screenshots/website-editor.svg",
      alt: {
        en: "Odoo website editor with blocks panel and Edit button",
        fr: "Éditeur de site Odoo avec panneau de blocs et bouton Éditer",
      },
    },
    text: {
      en: "In this Website Builder screenshot, what is the purpose of the « Edit » toggle shown in the top bar?",
      fr: "Sur cette capture du Website Builder, à quoi sert le bouton « Éditer » dans la barre supérieure ?",
    },
    correct: {
      en: "Switches the public page into edit mode so blocks and content can be changed directly on the frontend",
      fr: "Passe la page publique en mode édition pour modifier blocs et contenu directement sur le frontend",
    },
    distractors: [
      {
        en: "Opens the backend form view of website.page in a separate browser tab for HTML editing only",
        fr: "Ouvre la vue formulaire backend website.page dans un autre onglet pour édition HTML uniquement",
      },
      {
        en: "Locks the page from search engines until the next website publish action",
        fr: "Verrouille la page pour les moteurs de recherche jusqu'à la prochaine publication",
      },
      {
        en: "Creates a duplicate unpublished copy of the page for A/B testing automatically",
        fr: "Crée automatiquement une copie non publiée de la page pour des tests A/B",
      },
    ],
    explanation: {
      en: "The Edit button on the website frontend toggles inline editing with the drag-and-drop block system (Website ‣ Edit).",
      fr: "Le bouton Éditer sur le frontend du site active l'édition en ligne avec le système de blocs glisser-déposer (Site web ‣ Éditer).",
    },
  }),
  screenshotQ({
    id: "ss-eco-001",
    module: "ecommerce",
    image: {
      src: "/exam-screenshots/ecommerce-product.svg",
      alt: {
        en: "Odoo eCommerce product page with Add to Cart and variant selector",
        fr: "Page produit eCommerce Odoo avec Ajouter au panier et sélecteur de variante",
      },
    },
    text: {
      en: "Looking at this eCommerce product page screenshot, what happens when a visitor selects a variant and clicks « Add to Cart »?",
      fr: "Sur cette page produit eCommerce, que se passe-t-il quand un visiteur choisit une variante et clique sur « Ajouter au panier » ?",
    },
    correct: {
      en: "Adds the selected product variant to the website cart session, keeping attribute choices on the line",
      fr: "Ajoute la variante sélectionnée au panier du site en conservant les attributs choisis sur la ligne",
    },
    distractors: [
      {
        en: "Creates a backend sales quotation assigned to the public user without storing a cart",
        fr: "Crée un devis backend assigné à l'utilisateur public sans panier",
      },
      {
        en: "Reserves stock in Inventory immediately and sends a confirmation email to all salespeople",
        fr: "Réserve le stock en Inventaire immédiatement et envoie un e-mail à tous les commerciaux",
      },
      {
        en: "Opens the Point of Sale interface in a new window for in-store checkout",
        fr: "Ouvre l'interface Point de Vente dans une nouvelle fenêtre pour encaissement magasin",
      },
    ],
    explanation: {
      en: "Website eCommerce carts store variant-specific lines. Checkout later creates the sales order (Website ‣ eCommerce ‣ Products).",
      fr: "Les paniers eCommerce stockent des lignes par variante. Le checkout crée ensuite la commande client (Site web ‣ eCommerce ‣ Produits).",
    },
  }),
  screenshotQ({
    id: "ss-hr-001",
    module: "hr",
    image: {
      src: "/exam-screenshots/hr-employee.svg",
      alt: {
        en: "Odoo employee form with smart buttons for Attendance and Contracts",
        fr: "Fiche employé Odoo avec boutons intelligents Présences et Contrats",
      },
    },
    text: {
      en: "On this employee form screenshot, what does the « Attendances » smart button typically open?",
      fr: "Sur cette fiche employé, que ouvre généralement le bouton intelligent « Présences » ?",
    },
    correct: {
      en: "The list of attendance check-in/check-out records filtered for this employee",
      fr: "La liste des pointages entrée/sortie filtrée pour cet employé",
    },
    distractors: [
      {
        en: "The payroll batch validation screen for the current month",
        fr: "L'écran de validation des lots de paie du mois en cours",
      },
      {
        en: "The company leave allocation wizard for all departments",
        fr: "L'assistant d'allocation de congés pour tous les départements",
      },
      {
        en: "The recruitment pipeline kanban for open job positions",
        fr: "Le kanban de recrutement pour les postes ouverts",
      },
    ],
    explanation: {
      en: "Smart buttons on hr.employee open related records. Attendances shows attendance lines linked to the employee (HR ‣ Employees).",
      fr: "Les boutons intelligents sur hr.employee ouvrent les enregistrements liés. Présences affiche les pointages de l'employé (RH ‣ Employés).",
    },
  }),
  screenshotQ({
    id: "ss-ts-001",
    module: "timesheet",
    image: {
      src: "/exam-screenshots/timesheet-grid.svg",
      alt: {
        en: "Odoo timesheet grid view with daily hour cells",
        fr: "Grille de feuilles de temps Odoo avec cellules d'heures par jour",
      },
    },
    text: {
      en: "In this Timesheet grid screenshot, how are hours usually entered for a project task?",
      fr: "Sur cette grille de feuilles de temps, comment saisit-on habituellement les heures pour une tâche projet ?",
    },
    correct: {
      en: "By typing duration into the day cells on the row linked to the project/task",
      fr: "En saisissant la durée dans les cellules des jours sur la ligne liée au projet/tâche",
    },
    distractors: [
      {
        en: "Only through the manufacturing work order tablet view on the shop floor",
        fr: "Uniquement via la tablette des ordres de travail en atelier",
      },
      {
        en: "By approving vendor bills that contain hourly service lines",
        fr: "En validant des factures fournisseur contenant des lignes de service horaire",
      },
      {
        en: "By dragging cards on the CRM pipeline to the Won stage",
        fr: "En déplaçant des cartes du pipeline CRM vers l'étape Gagné",
      },
    ],
    explanation: {
      en: "The timesheet grid (Timesheets ‣ My Timesheets or project task timer) lets users log hours per day on tasks.",
      fr: "La grille des feuilles de temps (Feuilles de temps ‣ Mes feuilles de temps ou minuteur de tâche) permet de saisir des heures par jour sur les tâches.",
    },
  }),
  screenshotQ({
    id: "ss-proj-001",
    module: "project",
    image: {
      src: "/exam-screenshots/project-kanban.svg",
      alt: {
        en: "Odoo project task kanban with stages To Do, In Progress, Done",
        fr: "Kanban de tâches projet Odoo avec étapes À faire, En cours, Terminé",
      },
    },
    text: {
      en: "Based on this Project kanban screenshot, what does moving a task to « Done » usually indicate?",
      fr: "D'après ce kanban projet, que signifie généralement le déplacement d'une tâche vers « Terminé » ?",
    },
    correct: {
      en: "The task is completed; depending on settings, timesheets may be reviewed and the stage is closed for workflow tracking",
      fr: "La tâche est terminée ; selon les paramètres, les feuilles de temps peuvent être revues et l'étape est clôturée pour le suivi",
    },
    distractors: [
      {
        en: "The project is archived and all open sales orders are cancelled automatically",
        fr: "Le projet est archivé et toutes les commandes ouvertes sont annulées automatiquement",
      },
      {
        en: "A manufacturing order is created for each sub-task on the card",
        fr: "Un ordre de fabrication est créé pour chaque sous-tâche de la carte",
      },
      {
        en: "The customer invoice is posted immediately at standard price list rates",
        fr: "La facture client est comptabilisée immédiatement aux tarifs de la liste de prix",
      },
    ],
    explanation: {
      en: "Project task stages track progress. Done marks completion; billing may use timesheets or milestone settings (Project ‣ Tasks).",
      fr: "Les étapes de tâche suivent l'avancement. Terminé marque l'achèvement ; la facturation peut utiliser les feuilles de temps ou jalons (Projet ‣ Tâches).",
    },
  }),
  screenshotQ({
    id: "ss-acc-001",
    module: "accounting",
    image: {
      src: "/exam-screenshots/accounting-invoice.svg",
      alt: {
        en: "Odoo customer invoice form in draft with Confirm button",
        fr: "Facture client Odoo en brouillon avec bouton Confirmer",
      },
    },
    text: {
      en: "In this Accounting invoice screenshot, what does clicking « Confirm » on a draft customer invoice do?",
      fr: "Sur cette capture de facture, que fait le bouton « Confirmer » sur une facture client brouillon ?",
    },
    correct: {
      en: "Posts the invoice, assigns a number, and creates journal entries in the receivable and income accounts",
      fr: "Comptabilise la facture, attribue un numéro et crée les écritures sur créances et produits",
    },
    distractors: [
      {
        en: "Sends the invoice PDF by email without posting any journal entry",
        fr: "Envoie le PDF par e-mail sans comptabiliser d'écriture",
      },
      {
        en: "Converts the invoice into a purchase order for the listed products",
        fr: "Convertit la facture en bon de commande fournisseur pour les produits listés",
      },
      {
        en: "Marks the invoice as paid and reconciles the bank statement automatically",
        fr: "Marque la facture comme payée et rapproche automatiquement le relevé bancaire",
      },
    ],
    explanation: {
      en: "Confirming (Posting) a customer invoice validates accounting entries (Accounting ‣ Customers ‣ Invoices).",
      fr: "Confirmer (Comptabiliser) une facture client valide les écritures comptables (Comptabilité ‣ Clients ‣ Factures).",
    },
  }),
  screenshotQ({
    id: "ss-pur-001",
    module: "purchases",
    image: {
      src: "/exam-screenshots/purchases-rfq.svg",
      alt: {
        en: "Odoo RFQ form with Send by Email and Confirm Order buttons",
        fr: "Demande de prix Odoo avec boutons Envoyer par e-mail et Confirmer la commande",
      },
    },
    text: {
      en: "On this Purchase RFQ screenshot, what is the difference between « Send by Email » and « Confirm Order »?",
      fr: "Sur cette capture de demande de prix, quelle est la différence entre « Envoyer par e-mail » et « Confirmer la commande » ?",
    },
    correct: {
      en: "Send by Email shares the RFQ with the vendor; Confirm Order turns it into a confirmed purchase order",
      fr: "Envoyer par e-mail transmet la demande au fournisseur ; Confirmer la commande la transforme en bon de commande confirmé",
    },
    distractors: [
      {
        en: "Both buttons post vendor bills immediately without creating stock moves",
        fr: "Les deux boutons comptabilisent des factures fournisseur sans mouvement de stock",
      },
      {
        en: "Send by Email cancels the RFQ; Confirm Order creates a sales quotation",
        fr: "Envoyer par e-mail annule la demande ; Confirmer la commande crée un devis client",
      },
      {
        en: "Send by Email is only available after receipt validation in Inventory",
        fr: "Envoyer par e-mail n'est disponible qu'après validation de réception en Inventaire",
      },
    ],
    explanation: {
      en: "RFQs are draft requests. Email sends the document; confirming creates a purchase order ready for receipt (Purchase ‣ Orders ‣ Requests for Quotation).",
      fr: "Les demandes de prix sont des brouillons. L'e-mail envoie le document ; la confirmation crée un bon de commande prêt pour réception (Achats ‣ Commandes ‣ Demandes de prix).",
    },
  }),
  screenshotQ({
    id: "ss-sal-001",
    module: "sales",
    image: {
      src: "/exam-screenshots/sales-quotation.svg",
      alt: {
        en: "Odoo sales quotation with Confirm button and optional down payment",
        fr: "Devis Odoo avec bouton Confirmer et acompte optionnel",
      },
    },
    text: {
      en: "In this Sales quotation screenshot, what does « Confirm » typically do?",
      fr: "Sur cette capture de devis, que fait généralement « Confirmer » ?",
    },
    correct: {
      en: "Converts the quotation into a confirmed sales order, enabling delivery and invoicing workflows",
      fr: "Convertit le devis en commande client confirmée, activant livraison et facturation",
    },
    distractors: [
      {
        en: "Archives the quotation without creating any stock or accounting document",
        fr: "Archive le devis sans créer de document stock ou comptable",
      },
      {
        en: "Creates a manufacturing order for every service line on the quotation",
        fr: "Crée un ordre de fabrication pour chaque ligne de service du devis",
      },
      {
        en: "Sends the quotation to the website cart for anonymous checkout only",
        fr: "Envoie le devis vers le panier du site pour checkout anonyme uniquement",
      },
    ],
    explanation: {
      en: "Confirming a quotation creates a sales order (Sales ‣ Orders ‣ Quotations), triggering delivery and invoice flows depending on product configuration.",
      fr: "Confirmer un devis crée une commande client (Ventes ‣ Commandes ‣ Devis), déclenchant livraison et facturation selon la configuration produit.",
    },
  }),
  screenshotQ({
    id: "ss-studio-001",
    module: "studio",
    image: {
      src: "/exam-screenshots/studio-form.svg",
      alt: {
        en: "Odoo Studio editing a form view with field palette",
        fr: "Odoo Studio en édition d'une vue formulaire avec palette de champs",
      },
    },
    text: {
      en: "Looking at this Odoo Studio screenshot, what can functional users add from the left palette to a form view?",
      fr: "D'après cette capture Studio, que peuvent ajouter les utilisateurs fonctionnels depuis la palette gauche sur un formulaire ?",
    },
    correct: {
      en: "New fields, existing fields, buttons, tabs, and components without writing Python code",
      fr: "Nouveaux champs, champs existants, boutons, onglets et composants sans écrire de code Python",
    },
    distractors: [
      {
        en: "Only custom OWL JavaScript widgets that must be deployed through a separate Git repository",
        fr: "Uniquement des widgets OWL JavaScript déployés via un dépôt Git séparé",
      },
      {
        en: "Public website blocks that publish automatically to the eCommerce homepage",
        fr: "Des blocs website publics publiés automatiquement sur la page d'accueil eCommerce",
      },
      {
        en: "PostgreSQL stored procedures executed on every save action",
        fr: "Des procédures PostgreSQL exécutées à chaque enregistrement",
      },
    ],
    explanation: {
      en: "Studio lets consultants customize backend apps by dragging fields and UI elements onto views (Studio ‣ open any app ‣ Edit).",
      fr: "Studio permet de personnaliser les apps backend en glissant champs et éléments d'interface sur les vues (Studio ‣ ouvrir une app ‣ Éditer).",
    },
  }),
];
