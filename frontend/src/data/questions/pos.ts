import { complexQ } from "./helpers";

export const posQuestions = [
  complexQ({
    id: "pos-001",
    module: "pos",
    text: {
      en: "What is the Odoo 19 Point of Sale (POS) app designed for?",
      fr: "À quoi sert l'application Point de Vente (POS) Odoo 19 ?",
    },
    correct: {
      en: "A touch-friendly cashier interface for processing in-store retail and hospitality sales with payments and receipts",
      fr: "Une interface caisse tactile pour traiter ventes retail magasin et restauration avec paiements et tickets",
    },
    distractors: [
      {
        en: "A backend accounting module for posting vendor bills and reconciling bank statements without customer interaction",
        fr: "Un module comptabilité backend pour comptabiliser factures fournisseurs et rapprocher relevés bancaires sans interaction client",
      },
      {
        en: "A website editor for designing public eCommerce pages and configuring SEO metadata on the online shop",
        fr: "Un éditeur site web pour concevoir pages eCommerce publiques et configurer métadonnées SEO boutique en ligne",
      },
      {
        en: "An HR recruitment portal for publishing job openings and scheduling candidate interview activities",
        fr: "Un portail recrutement RH pour publier offres emploi et planifier activités entretiens candidats",
      },
    ],
    explanation: {
      en: "POS is the front-office cash register app for physical stores, boutiques, and restaurants.",
      fr: "Le POS est l'app caisse front-office pour magasins physiques, boutiques et restaurants.",
    },
  }),
  complexQ({
    id: "pos-002",
    module: "pos",
    text: {
      en: "How does offline mode work in Odoo 19 POS?",
      fr: "Comment fonctionne le mode hors ligne dans POS Odoo 19 ?",
    },
    correct: {
      en: "Orders can be processed locally without connection and synchronize to the server when the network is restored",
      fr: "Commandes peuvent être traitées localement sans connexion et synchronisées serveur quand réseau est rétabli",
    },
    distractors: [
      {
        en: "Offline mode stores orders in Accounting journals only and requires manual bank reconciliation after reconnecting",
        fr: "Mode hors ligne stocke commandes uniquement journaux Comptabilité et exige rapprochement bancaire manuel après reconnexion",
      },
      {
        en: "The POS interface disables product catalog browsing offline and allows cash counting but not order creation",
        fr: "Interface POS désactive parcours catalogue produits hors ligne et permet comptage caisse mais pas création commandes",
      },
      {
        en: "Offline sales bypass inventory entirely and create draft manufacturing orders instead of POS order records",
        fr: "Ventes hors ligne contournent inventaire et créent brouillons ordres fabrication au lieu enregistrements commande POS",
      },
    ],
    explanation: {
      en: "Odoo POS caches data locally so cashiers can keep selling offline; orders sync when connectivity returns.",
      fr: "POS Odoo met en cache données localement pour que caissiers continuent ventes hors ligne ; commandes se synchronisent au retour connexion.",
    },
  }),
  complexQ({
    id: "pos-003",
    module: "pos",
    text: {
      en: "Where do you configure payment methods for a POS in Odoo 19?",
      fr: "Où configure-t-on les modes de paiement pour un POS dans Odoo 19 ?",
    },
    correct: {
      en: "In the POS configuration settings, linking payment methods to cash, bank, or customer account journals",
      fr: "Dans paramètres configuration POS, liant modes paiement aux journaux caisse, banque ou compte client",
    },
    distractors: [
      {
        en: "On each product template sales tab by assigning a default payment journal to individual storable items",
        fr: "Sur onglet ventes de chaque modèle produit en assignant journal paiement par défaut à articles stockables individuels",
      },
      {
        en: "In the Website payment provider settings since POS always routes transactions through the online checkout gateway",
        fr: "Dans paramètres fournisseur paiement Website car POS achemine toujours transactions via passerelle checkout en ligne",
      },
      {
        en: "In Payroll accounting structures where employee payslips define which tender types cashiers may accept",
        fr: "Dans structures comptables Paie où fiches paie employés définissent types paiement acceptables par caissiers",
      },
    ],
    explanation: {
      en: "Each POS configuration defines its available payment methods and linked accounting journals.",
      fr: "Chaque configuration POS définit modes paiement disponibles et journaux comptables liés.",
    },
  }),
  complexQ({
    id: "pos-004",
    module: "pos",
    text: {
      en: "What happens to inventory when a POS order is validated in Odoo 19?",
      fr: "Qu'arrive-t-il au stock quand une commande POS est validée dans Odoo 19 ?",
    },
    correct: {
      en: "Sold quantities of storable products generate stock moves deducting inventory from the POS warehouse location",
      fr: "Quantités vendues produits stockables génèrent mouvements stock déduisant inventaire emplacement entrepôt POS",
    },
    distractors: [
      {
        en: "Inventory increases because POS receipts are treated as inbound vendor deliveries to the shop location",
        fr: "Inventaire augmente car tickets POS sont traités comme livraisons fournisseur entrantes vers emplacement boutique",
      },
      {
        en: "No stock movement occurs until the POS session is closed and accounting entries are posted manually",
        fr: "Aucun mouvement stock jusqu'à clôture session POS et comptabilisation manuelle écritures comptables",
      },
      {
        en: "A manufacturing order is automatically created for each sold service product to consume raw materials",
        fr: "Un ordre fabrication est créé automatiquement pour chaque produit service vendu consommant matières premières",
      },
    ],
    explanation: {
      en: "POS sales of storable products trigger delivery moves from the configured warehouse, updating on-hand quantities.",
      fr: "Ventes POS produits stockables déclenchent mouvements livraison depuis entrepôt configuré, mettant à jour quantités disponibles.",
    },
  }),
  complexQ({
    id: "pos-005",
    module: "pos",
    text: {
      en: "How do you manage a POS cash register session in Odoo 19?",
      fr: "Comment gérer une session caisse POS dans Odoo 19 ?",
    },
    correct: {
      en: "Open a session to start selling, then close it with a cash count reconciling expected and counted amounts",
      fr: "Ouvrir session pour commencer ventes, puis clôturer avec comptage caisse rapprochant montants attendus et comptés",
    },
    distractors: [
      {
        en: "Sessions are created automatically from Project milestones and close when all related tasks reach Done stage",
        fr: "Sessions créées automatiquement depuis jalons Projet et clôturées quand toutes tâches liées atteignent étape Terminé",
      },
      {
        en: "Cashiers share one perpetual session per database that never closes and skips opening balance control",
        fr: "Caissiers partagent session perpétuelle par base ne se clôturant jamais et sans contrôle solde ouverture",
      },
      {
        en: "Session opening requires posting a manual miscellaneous journal entry before any product can be added to cart",
        fr: "Ouverture session exige comptabilisation écriture manuelle journal divers avant qu'un produit puisse être ajouté panier",
      },
    ],
    explanation: {
      en: "Each business day uses a POS session with opening cash control, sales tracking, and closing reconciliation.",
      fr: "Chaque journée métier utilise session POS avec contrôle caisse ouverture, suivi ventes et rapprochement clôture.",
    },
  }),
  complexQ({
    id: "pos-006",
    module: "pos",
    text: {
      en: "What additional features does POS Restaurant add to standard POS in Odoo 19?",
      fr: "Quelles fonctionnalités supplémentaires POS Restaurant ajoute-t-il au POS standard Odoo 19 ?",
    },
    correct: {
      en: "Table and floor plan management, course firing, kitchen or preparation displays, and split bills",
      fr: "Gestion tables et plans de salle, envoi par services, écrans cuisine ou préparation et addition partagée",
    },
    distractors: [
      {
        en: "Employee payroll computation and payslip generation triggered when waitstaff clock in through the register",
        fr: "Calcul paie employés et génération fiches paie déclenchés quand serveurs pointent via caisse",
      },
      {
        en: "Full analytic accounting budget enforcement that blocks orders exceeding department cost center limits",
        fr: "Application stricte budgets comptabilité analytique bloquant commandes dépassant limites centres coûts département",
      },
      {
        en: "Manufacturing work order scheduling on the POS screen for made-to-order production routing steps",
        fr: "Planification ordres travail fabrication sur écran POS pour étapes routage production sur commande",
      },
    ],
    explanation: {
      en: "POS Restaurant extends POS with hospitality workflows: tables, kitchen screens, courses, and bill splitting.",
      fr: "POS Restaurant étend POS avec flux restauration : tables, écrans cuisine, services et partage addition.",
    },
  }),
  complexQ({
    id: "pos-007",
    module: "pos",
    text: {
      en: "How can discounts be applied on a POS order in Odoo 19?",
      fr: "Comment appliquer des remises sur commande POS dans Odoo 19 ?",
    },
    correct: {
      en: "Use the discount button to apply a percentage or fixed amount on the whole order or on individual order lines",
      fr: "Utiliser bouton remise pour appliquer pourcentage ou montant fixe sur commande entière ou lignes individuelles",
    },
    distractors: [
      {
        en: "Edit the chart of accounts discount account on each product category before adding items to the cart",
        fr: "Modifier compte remise plan comptable sur chaque catégorie produit avant ajout articles au panier",
      },
      {
        en: "Create a vendor credit note in Accounting and link it to the POS session before validating payment",
        fr: "Créer avoir fournisseur Comptabilité et le lier à session POS avant validation paiement",
      },
      {
        en: "Apply discounts only through loyalty program points configured in HR contract salary rules",
        fr: "Appliquer remises uniquement via points programme fidélité configurés règles salaire contrats RH",
      },
    ],
    explanation: {
      en: "POS supports global and line-level discounts directly on the cashier interface during checkout.",
      fr: "POS supporte remises globales et par ligne directement sur interface caisse pendant encaissement.",
    },
  }),
  complexQ({
    id: "pos-008",
    module: "pos",
    text: {
      en: "How do you link a POS configuration to a specific warehouse in Odoo 19?",
      fr: "Comment lier une configuration POS à un entrepôt spécifique dans Odoo 19 ?",
    },
    correct: {
      en: "Set the operation type or warehouse in the POS configuration so stock moves use that location",
      fr: "Définir type opération ou entrepôt dans configuration POS pour que mouvements stock utilisent cet emplacement",
    },
    distractors: [
      {
        en: "Assign the warehouse on each customer's contact form so POS inherits stock location from the selected partner",
        fr: "Assigner entrepôt sur fiche contact client pour que POS hérite emplacement stock du partenaire sélectionné",
      },
      {
        en: "Configure warehouse routing on the sales pricelist linked to the POS instead of the POS settings form",
        fr: "Configurer routage entrepôt sur liste prix vente liée au POS au lieu formulaire paramètres POS",
      },
      {
        en: "Warehouse linkage is determined by the employee's department on their HR profile and cannot be set per POS",
        fr: "Liaison entrepôt déterminée par département employé sur profil RH et non configurable par POS",
      },
    ],
    explanation: {
      en: "Each POS configuration specifies which warehouse/operation type supplies stock for that point of sale.",
      fr: "Chaque configuration POS spécifie quel entrepôt/type opération approvisionne stock pour ce point de vente.",
    },
  }),
  complexQ({
    id: "pos-009",
    module: "pos",
    text: {
      en: "Which hardware devices can Odoo 19 POS connect to?",
      fr: "Quels périphériques matériels POS Odoo 19 peut-il connecter ?",
    },
    correct: {
      en: "Receipt printers, barcode scanners, customer displays, scales, and payment terminals via IoT Box or compatible drivers",
      fr: "Imprimantes tickets, scanners codes-barres, écrans client, balances et terminaux paiement via IoT Box ou drivers compatibles",
    },
    distractors: [
      {
        en: "Manufacturing CNC machines and quality control sensors used to trigger production orders from the register",
        fr: "Machines CNC fabrication et capteurs contrôle qualité déclenchant ordres production depuis caisse",
      },
      {
        en: "Desktop keyboards only; POS disables all USB peripherals except the built-in laptop trackpad interface",
        fr: "Claviers bureau uniquement ; POS désactive tous périphériques USB sauf interface trackpad portable intégrée",
      },
      {
        en: "Fleet vehicle GPS trackers that update delivery routes when cashiers scan products at the counter",
        fr: "Traceurs GPS véhicules flotte mettant à jour itinéraires livraison quand caissiers scannent produits au comptoir",
      },
    ],
    explanation: {
      en: "POS integrates with common retail peripherals through the IoT Box, Odoo hardware drivers, or direct connections.",
      fr: "POS s'intègre périphériques retail courants via IoT Box, drivers matériel Odoo ou connexions directes.",
    },
  }),
  complexQ({
    id: "pos-010",
    module: "pos",
    text: {
      en: "How are POS sales reflected in Odoo 19 Accounting?",
      fr: "Comment ventes POS sont-elles reflétées en Comptabilité Odoo 19 ?",
    },
    correct: {
      en: "Closing the POS session posts aggregated sales and payment entries to the configured sales and cash/bank journals",
      fr: "Clôture session POS comptabilise écritures agrégées ventes et paiements vers journaux ventes et caisse/banque configurés",
    },
    distractors: [
      {
        en: "Each individual POS order creates a separate customer invoice draft that must be confirmed manually in Accounting",
        fr: "Chaque commande POS crée brouillon facture client séparé devant être confirmé manuellement Comptabilité",
      },
      {
        en: "POS sales remain outside Accounting until exported as spreadsheet rows and imported into miscellaneous journals",
        fr: "Ventes POS restent hors Comptabilité jusqu'à export lignes tableur et import journaux divers",
      },
      {
        en: "Payment entries post to payroll expense accounts because cashier wages are deducted from each transaction total",
        fr: "Écritures paiement comptabilisées comptes charges paie car salaires caissiers déduits de chaque total transaction",
      },
    ],
    explanation: {
      en: "Session closing consolidates POS transactions into accounting entries per configured journals and payment methods.",
      fr: "Clôture session consolide transactions POS en écritures comptables selon journaux et modes paiement configurés.",
    },
  }),
  complexQ({
    id: "pos-011",
    module: "pos",
    text: {
      en: "What is the purpose of POS product categories in Odoo 19?",
      fr: "À quoi servent catégories produits POS dans Odoo 19 ?",
    },
    correct: {
      en: "They organize products on the POS product screen grid so cashiers can find items quickly during checkout",
      fr: "Elles organisent produits sur grille écran produits POS pour que caissiers trouvent articles rapidement à l'encaissement",
    },
    distractors: [
      {
        en: "They define fiscal tax return categories submitted to tax authorities when the POS session closes",
        fr: "Elles définissent catégories déclaration fiscale soumises autorités fiscales à clôture session POS",
      },
      {
        en: "They map products to employee contract types in HR for commission calculation on each sale line",
        fr: "Elles mappent produits vers types contrat employés RH pour calcul commission sur chaque ligne vente",
      },
      {
        en: "They replace inventory product categories entirely and control warehouse replenishment min/max rules",
        fr: "Elles remplacent entièrement catégories produits inventaire et contrôlent règles min/max réapprovisionnement entrepôt",
      },
    ],
    explanation: {
      en: "POS categories structure the cashier interface; they are separate from inventory or eCommerce categories.",
      fr: "Catégories POS structurent interface caisse ; distinctes catégories inventaire ou eCommerce.",
    },
  }),
  complexQ({
    id: "pos-012",
    module: "pos",
    text: {
      en: "How do you process a return or refund at the POS in Odoo 19?",
      fr: "Comment traiter retour ou remboursement au POS dans Odoo 19 ?",
    },
    correct: {
      en: "Create a refund order linked to the original sale, reversing quantities and restoring stock for returned products",
      fr: "Créer commande remboursement liée vente originale, inversant quantités et restaurant stock produits retournés",
    },
    distractors: [
      {
        en: "Delete the original POS order from the backend list view so inventory and payments reset automatically",
        fr: "Supprimer commande POS originale vue liste backend pour réinitialiser inventaire et paiements automatiquement",
      },
      {
        en: "Issue a vendor bill credit in Purchase and link it to the POS session closing journal entry",
        fr: "Émettre avoir facture fournisseur Achats et le lier écriture clôture session POS",
      },
      {
        en: "Process returns only through manufacturing unbuild orders that consume finished goods back into components",
        fr: "Traiter retours uniquement via ordres démontage fabrication consommant produits finis en composants",
      },
    ],
    explanation: {
      en: "POS refunds reference the original order, reverse the sale amount, and return stock when applicable.",
      fr: "Remboursements POS référencent commande originale, inversent montant vente et retournent stock si applicable.",
    },
  }),
  complexQ({
    id: "pos-013",
    module: "pos",
    text: {
      en: "What role does the IoT Box play in Odoo 19 POS?",
      fr: "Quel rôle joue IoT Box dans POS Odoo 19 ?",
    },
    correct: {
      en: "It bridges the POS browser interface with local hardware devices such as printers, scanners, and payment terminals",
      fr: "Elle fait le lien entre interface navigateur POS et périphériques locaux comme imprimantes, scanners et terminaux paiement",
    },
    distractors: [
      {
        en: "It hosts the Odoo database server and replaces PostgreSQL for POS-only deployments in retail stores",
        fr: "Elle héberge serveur base Odoo et remplace PostgreSQL pour déploiements POS uniquement magasins retail",
      },
      {
        en: "It synchronizes POS orders to external marketplaces and replaces the Inventory app for stock tracking",
        fr: "Elle synchronise commandes POS vers marketplaces externes et remplace app Inventaire pour suivi stock",
      },
      {
        en: "It encrypts employee payroll data and prints payslips alongside customer receipts at session closing",
        fr: "Elle chiffre données paie employés et imprime fiches paie avec tickets clients à clôture session",
      },
    ],
    explanation: {
      en: "The IoT Box connects USB/network peripherals to Odoo POS running in a browser on tablets or PCs.",
      fr: "IoT Box connecte périphériques USB/réseau au POS Odoo exécuté navigateur sur tablettes ou PC.",
    },
  }),
  complexQ({
    id: "pos-014",
    module: "pos",
    text: {
      en: "Can POS sell products with variants such as size or color in Odoo 19?",
      fr: "POS peut-il vendre produits avec variantes taille ou couleur dans Odoo 19 ?",
    },
    correct: {
      en: "Yes, when a variant product is added, the cashier selects the desired attribute combination before confirming the line",
      fr: "Oui, quand produit variante est ajouté, caissier sélectionne combinaison attributs souhaitée avant confirmer ligne",
    },
    distractors: [
      {
        en: "Variants appear only on eCommerce orders; POS always sells the template product without attribute selection",
        fr: "Variantes apparaissent uniquement commandes eCommerce ; POS vend toujours modèle produit sans sélection attributs",
      },
      {
        en: "Each variant requires a separate POS configuration and dedicated warehouse before it can appear on the register",
        fr: "Chaque variante exige configuration POS séparée et entrepôt dédié avant apparition caisse",
      },
      {
        en: "Variant selection is handled in Manufacturing by creating a custom BOM each time the product is scanned",
        fr: "Sélection variante gérée Fabrication en créant nomenclature custom à chaque scan produit",
      },
    ],
    explanation: {
      en: "POS supports product variants configured in Inventory; attribute pop-ups appear when adding variant products.",
      fr: "POS supporte variantes produit configurées Inventaire ; pop-ups attributs apparaissent à ajout produits variantes.",
    },
  }),
  complexQ({
    id: "pos-015",
    module: "pos",
    text: {
      en: "How do you apply store-specific pricing on a POS in Odoo 19?",
      fr: "Comment appliquer tarification spécifique magasin sur POS Odoo 19 ?",
    },
    correct: {
      en: "Assign a dedicated pricelist to the POS configuration so prices follow that list during checkout",
      fr: "Assigner liste prix dédiée à configuration POS pour que prix suivent cette liste pendant encaissement",
    },
    distractors: [
      {
        en: "Set individual product cost fields on the POS session form to override sales prices for that business day",
        fr: "Définir champs coût produit individuels formulaire session POS pour remplacer prix vente ce jour métier",
      },
      {
        en: "Configure price rules on the employee HR contract so each cashier applies their own salary-based discount rate",
        fr: "Configurer règles prix contrat RH employé pour que chaque caissier applique taux remise basé salaire",
      },
      {
        en: "Link the POS to a purchase vendor pricelist so customer prices mirror supplier catalog minimum quantities",
        fr: "Lier POS à liste prix achat fournisseur pour que prix clients reflètent quantités minimales catalogue fournisseur",
      },
    ],
    explanation: {
      en: "Each POS can use its own sales pricelist for location-specific or promotional pricing.",
      fr: "Chaque POS peut utiliser propre liste prix vente pour tarification spécifique lieu ou promotionnelle.",
    },
  }),
  complexQ({
    id: "pos-016",
    module: "pos",
    text: {
      en: "What is a preparation display in Odoo 19 POS Restaurant?",
      fr: "Qu'est-ce qu'un écran de préparation dans POS Restaurant Odoo 19 ?",
    },
    correct: {
      en: "A kitchen or bar screen showing orders and items to prepare in real time, updated as courses are sent",
      fr: "Écran cuisine ou bar affichant commandes et articles à préparer temps réel, mis à jour à l'envoi des services",
    },
    distractors: [
      {
        en: "A customer-facing loyalty dashboard displaying reward points earned during the current POS session",
        fr: "Tableau de bord fidélité client affichant points récompense gagnés pendant session POS courante",
      },
      {
        en: "An accounting dashboard summarizing session revenue by payment method before closing the register",
        fr: "Tableau de bord comptabilité résumant revenus session par mode paiement avant clôture caisse",
      },
      {
        en: "A website snippet embedded on the shop page showing live inventory quantities for online visitors",
        fr: "Snippet site web intégré page boutique montrant quantités inventaire live visiteurs en ligne",
      },
    ],
    explanation: {
      en: "Preparation displays help kitchen and bar staff track order status and preparation progress.",
      fr: "Écrans préparation aident personnel cuisine et bar suivre statut commandes et avancement préparation.",
    },
  }),
  complexQ({
    id: "pos-017",
    module: "pos",
    text: {
      en: "How do you assign a customer to a POS order in Odoo 19?",
      fr: "Comment assigner client à commande POS dans Odoo 19 ?",
    },
    correct: {
      en: "Select or create a customer on the order so invoicing, loyalty, and customer account payments can apply",
      fr: "Sélectionner ou créer client sur commande pour facturation, fidélité et paiements compte client",
    },
    distractors: [
      {
        en: "Customers are inferred from the cashier's employee record and cannot be changed on individual POS orders",
        fr: "Clients déduits fiche employé caissier et non modifiables sur commandes POS individuelles",
      },
      {
        en: "Link customers by scanning manufacturing lot numbers printed on product labels at checkout",
        fr: "Lier clients en scannant numéros lot fabrication imprimés étiquettes produits à l'encaissement",
      },
      {
        en: "Assign customers in Accounting after session closing by matching receipt numbers to CRM pipeline stages",
        fr: "Assigner clients Comptabilité après clôture session en rapprochant numéros tickets étapes pipeline CRM",
      },
    ],
    explanation: {
      en: "Identifying the customer on a POS order enables invoicing, loyalty programs, and pay-on-account options.",
      fr: "Identifier client sur commande POS active facturation, programmes fidélité et options paiement compte.",
    },
  }),
  complexQ({
    id: "pos-018",
    module: "pos",
    text: {
      en: "What is cash rounding in Odoo 19 POS?",
      fr: "Qu'est-ce que l'arrondi caisse dans POS Odoo 19 ?",
    },
    correct: {
      en: "Adjusting cash payment totals to the smallest coin denomination allowed by the localization or shop policy",
      fr: "Ajustement totaux paiement espèces à plus petite pièce autorisée par localisation ou politique magasin",
    },
    distractors: [
      {
        en: "Rounding card payment authorization amounts to the nearest hundred before sending to the payment terminal",
        fr: "Arrondi montants autorisation paiement carte centaine la plus proche avant envoi terminal paiement",
      },
      {
        en: "Removing all taxes from cash transactions while keeping full tax amounts on electronic payment methods",
        fr: "Suppression toutes taxes transactions espèces tout en conservant montants taxes complets paiements électroniques",
      },
      {
        en: "Converting foreign currency prices to company currency using daily payroll exchange rate tables",
        fr: "Conversion prix devise étrangère devise société via tables taux change paie quotidiennes",
      },
    ],
    explanation: {
      en: "Cash rounding handles situations where the smallest physical coin differs from calculated payment amounts.",
      fr: "Arrondi caisse gère situations où plus petite pièce physique diffère montants paiement calculés.",
    },
  }),
  complexQ({
    id: "pos-019",
    module: "pos",
    text: {
      en: "How are customer receipts printed from Odoo 19 POS?",
      fr: "Comment imprimer tickets clients depuis POS Odoo 19 ?",
    },
    correct: {
      en: "Configure a receipt printer on the POS and print automatically or on demand after payment validation",
      fr: "Configurer imprimante ticket sur POS et imprimer automatiquement ou à la demande après validation paiement",
    },
    distractors: [
      {
        en: "Receipts print only from Accounting invoice PDF reports generated when the POS session is closed",
        fr: "Tickets impriment uniquement depuis rapports PDF factures Comptabilité générés clôture session POS",
      },
      {
        en: "Email is the mandatory delivery channel; physical receipt printing is disabled in all POS configurations",
        fr: "E-mail est canal livraison obligatoire ; impression ticket physique désactivée toutes configurations POS",
      },
      {
        en: "Receipts are printed through manufacturing label templates attached to each product's BOM operation",
        fr: "Tickets imprimés via modèles étiquettes fabrication attachés opération nomenclature chaque produit",
      },
    ],
    explanation: {
      en: "POS prints receipts via connected printers or the IoT Box immediately after order payment.",
      fr: "POS imprime tickets via imprimantes connectées ou IoT Box immédiatement après paiement commande.",
    },
  }),
  complexQ({
    id: "pos-020",
    module: "pos",
    text: {
      en: "Can multiple POS configurations share the same warehouse in Odoo 19?",
      fr: "Plusieurs configurations POS peuvent-elles partager même entrepôt Odoo 19 ?",
    },
    correct: {
      en: "Yes, several POS points can be configured to draw stock from the same warehouse if business needs require it",
      fr: "Oui, plusieurs points POS peuvent être configurés pour puiser stock même entrepôt si besoins métier l'exigent",
    },
    distractors: [
      {
        en: "Each POS must have a unique warehouse; Odoo blocks saving configurations that reference shared locations",
        fr: "Chaque POS doit avoir entrepôt unique ; Odoo bloque sauvegarde configurations référençant emplacements partagés",
      },
      {
        en: "POS never uses warehouses; stock is tracked only through analytic accounts on session closing entries",
        fr: "POS n'utilise jamais entrepôts ; stock suivi uniquement comptes analytiques écritures clôture session",
      },
      {
        en: "Only one POS configuration is allowed per company regardless of the number of physical store locations",
        fr: "Une seule configuration POS autorisée par société quel que soit nombre emplacements magasins physiques",
      },
    ],
    explanation: {
      en: "Multiple registers or shops can share one warehouse when inventory is centrally managed.",
      fr: "Plusieurs caisses ou boutiques peuvent partager entrepôt quand inventaire géré centralement.",
    },
  }),
];
