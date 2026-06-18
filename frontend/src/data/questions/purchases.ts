import { complexQ } from "./helpers";

export const purchasesQuestions = [
  complexQ({
    id: "pur-001",
    module: "purchases",
    text: {
      en: "What is the standard purchase flow in Odoo 19?",
      fr: "Quel est le flux d'achat standard dans Odoo 19 ?",
    },
    correct: {
      en: "Request for Quotation (RFQ) → Purchase Order → Receipt → Vendor Bill → Payment",
      fr: "Demande de prix → Bon de commande achat → Réception → Facture fournisseur → Paiement",
    },
    distractors: [
      {
        en: "Vendor Bill → Purchase Order → Delivery Order → Sales Order, when 3-way matching is enabled",
        fr: "Facture fournisseur → Bon de commande → Bon de livraison → Commande client, lorsque le rapprochement à 3 facteurs est activé",
      },
      {
        en: "Blanket Order → Customer Invoice → RFQ Sent, because blanket agreements skip the receipt step",
        fr: "Accord-cadre → Facture client → Demande de prix envoyée, car les accords-cadres ignorent l'étape de réception",
      },
      {
        en: "Sales Order → Dropship PO → Vendor Payment, with receipts always recorded in the company's main warehouse",
        fr: "Commande client → BC dropshipping → Paiement fournisseur, avec réceptions toujours enregistrées dans l'entrepôt principal",
      },
    ],
    explanation: {
      en: "Odoo 19 purchase cycle: RFQ sent to vendor, confirmed as PO, goods received (receipt), vendor billed, then payment registered. Confirming an RFQ creates the PO and expected receipt.",
      fr: "Cycle achat Odoo 19 : demande de prix envoyée au fournisseur, confirmée en BC, marchandises réceptionnées, facture fournisseur créée, puis paiement enregistré. Confirmer une demande de prix crée le BC et la réception attendue.",
    },
  }),
  complexQ({
    id: "pur-002",
    module: "purchases",
    text: {
      en: "How do you compare multiple vendor offers for the same requirement in Odoo 19 Purchase?",
      fr: "Comment comparer plusieurs offres fournisseurs pour un même besoin dans Achats Odoo 19 ?",
    },
    correct: {
      en: "Create alternative RFQs linked on the Alternatives tab, then click Compare Product Lines to evaluate vendor pricing",
      fr: "Créer des demandes de prix alternatives liées dans l'onglet Alternatives, puis cliquer sur « Comparer les lignes de commande » pour évaluer les tarifs",
    },
    distractors: [
      {
        en: "Export all RFQs to a spreadsheet from Purchase Analysis; Odoo has no built-in side-by-side vendor comparison view",
        fr: "Exporter toutes les demandes de prix vers une feuille de calcul depuis Analyse des achats ; Odoo n'a pas de vue de comparaison fournisseurs intégrée",
      },
      {
        en: "Duplicate the vendor contact and merge pricelist lines in Purchase ‣ Configuration ‣ Vendor Pricelists",
        fr: "Dupliquer le contact fournisseur et fusionner les lignes de liste de prix dans Achats ‣ Configuration ‣ Listes de prix fournisseur",
      },
      {
        en: "Confirm the first RFQ and use the blanket order Ordered quantity field to track competing vendor totals",
        fr: "Confirmer la première demande de prix et utiliser le champ Quantité commandée de l'accord-cadre pour suivre les totaux des fournisseurs concurrents",
      },
    ],
    explanation: {
      en: "Odoo 19 alternative RFQs (Purchase Agreements enabled) let buyers compare product lines side-by-side via Compare Product Lines before confirming the winning vendor's order.",
      fr: "Les demandes de prix alternatives Odoo 19 (Accords d'achat activés) permettent de comparer les lignes produits via « Comparer les lignes de commande » avant de confirmer la commande du fournisseur retenu.",
    },
  }),
  complexQ({
    id: "pur-003",
    module: "purchases",
    text: {
      en: "What is a blanket order (purchase agreement) in Odoo 19 Purchase?",
      fr: "Qu'est-ce qu'un accord-cadre (blanket order) dans Achats Odoo 19 ?",
    },
    correct: {
      en: "A long-term purchase agreement with a vendor defining recurring products, quantities, and negotiated unit prices over a validity period",
      fr: "Un accord d'achat à long terme avec un fournisseur définissant produits récurrents, quantités et prix unitaires négociés sur une période de validité",
    },
    distractors: [
      {
        en: "A confirmed purchase order with Billing Status Fully Billed used to track completed vendor payments for the month",
        fr: "Un bon de commande confirmé avec statut de facturation « Entièrement facturé » pour suivre les paiements fournisseurs du mois",
      },
      {
        en: "A call-for-tenders record grouping alternative RFQs that is automatically cancelled once one vendor is selected",
        fr: "Un enregistrement d'appel d'offres regroupant des demandes de prix alternatives annulé automatiquement dès qu'un fournisseur est sélectionné",
      },
      {
        en: "A reordering rule on the product form that generates RFQs when stock falls below the minimum quantity threshold",
        fr: "Une règle de réapprovisionnement sur la fiche produit générant des demandes de prix quand le stock descend sous le seuil minimum",
      },
    ],
    explanation: {
      en: "Odoo 19 blanket orders (Purchase ‣ Orders ‣ Purchase Agreements) set agreed prices and terms. New RFQs created from a blanket order are pre-populated and linked via the RFQs/Orders smart button.",
      fr: "Les accords-cadres Odoo 19 (Achats ‣ Commandes ‣ Accords d'achat) fixent prix et conditions convenus. Les nouvelles demandes de prix créées depuis un accord-cadre sont préremplies et liées via le bouton intelligent BC/Commandes.",
    },
  }),
  complexQ({
    id: "pur-004",
    module: "purchases",
    text: {
      en: "How do you set a default vendor on a product in Odoo 19 Purchase?",
      fr: "Comment définir un fournisseur par défaut sur un produit dans Achats Odoo 19 ?",
    },
    correct: {
      en: "Add the vendor on the product Purchase tab with price, minimum quantity, and delivery lead time per vendor line",
      fr: "Ajouter le fournisseur dans l'onglet Achats du produit avec prix, quantité minimale et délai de livraison par ligne fournisseur",
    },
    distractors: [
      {
        en: "Set the vendor on the sales pricelist assigned to the product template General Information tab",
        fr: "Définir le fournisseur sur la liste de prix vente assignée à l'onglet Informations générales du modèle de produit",
      },
      {
        en: "Configure the Buyer field on the blanket order; all products in that agreement inherit the vendor automatically",
        fr: "Configurer le champ Acheteur sur l'accord-cadre ; tous les produits de cet accord héritent automatiquement du fournisseur",
      },
      {
        en: "Link the vendor exclusively in Purchase ‣ Configuration ‣ Vendor Pricelists without adding a line on the product form",
        fr: "Lier le fournisseur exclusivement dans Achats ‣ Configuration ‣ Listes de prix fournisseur sans ajouter de ligne sur la fiche produit",
      },
    ],
    explanation: {
      en: "Odoo 19 product Purchase tab stores vendor-specific prices, delays, and product codes. Selecting a vendor on an RFQ auto-fills line prices from this tab or Vendor Pricelists.",
      fr: "L'onglet Achats du produit Odoo 19 stocke prix, délais et codes produit par fournisseur. Sélectionner un fournisseur sur une demande de prix préremplit les prix depuis cet onglet ou les Listes de prix fournisseur.",
    },
  }),
  complexQ({
    id: "pur-005",
    module: "purchases",
    text: {
      en: "What is three-way matching in Odoo 19 Purchase?",
      fr: "Qu'est-ce que le rapprochement à trois facteurs dans Achats Odoo 19 ?",
    },
    correct: {
      en: "A control ensuring vendor bills are only paid when billed quantities align with the purchase order and goods received",
      fr: "Un contrôle garantissant que les factures fournisseur ne sont payées que si les quantités facturées correspondent au bon de commande et aux marchandises reçues",
    },
    distractors: [
      {
        en: "Matching the RFQ, blanket order, and vendor pricelist before sending the request by email to the supplier",
        fr: "Le rapprochement de la demande de prix, de l'accord-cadre et de la liste de prix fournisseur avant l'envoi par e-mail au fournisseur",
      },
      {
        en: "Reconciling the purchase journal, stock valuation account, and vendor payment bank statement line in Accounting",
        fr: "Le rapprochement du journal d'achat, du compte de valorisation stock et de la ligne de relevé bancaire de paiement fournisseur en Comptabilité",
      },
      {
        en: "Comparing three alternative RFQs on the Alternatives tab before clicking Confirm Order on the selected vendor",
        fr: "La comparaison de trois demandes de prix alternatives dans l'onglet Alternatives avant de cliquer sur Confirmer la commande",
      },
    ],
    explanation: {
      en: "Odoo 19 3-way matching (Purchase ‣ Configuration ‣ Settings) adds a Should Be Paid field on vendor bills. Bills are payable only after products from the PO have been received.",
      fr: "Le rapprochement à 3 facteurs Odoo 19 (Achats ‣ Configuration ‣ Paramètres) ajoute le champ « Doit être payé » sur les factures fournisseur. Les factures ne sont payables qu'après réception des produits du BC.",
    },
  }),
  complexQ({
    id: "pur-006",
    module: "purchases",
    text: {
      en: "How can purchase order approval workflows be enforced in Odoo 19?",
      fr: "Comment imposer un workflow d'approbation des bons de commande dans Odoo 19 ?",
    },
    correct: {
      en: "Enable purchase order approval (double validation) in Purchase settings with a minimum amount requiring manager approval",
      fr: "Activer l'approbation des bons de commande (double validation) dans les paramètres Achats avec un montant minimum exigeant l'approbation du manager",
    },
    distractors: [
      {
        en: "Configure 3-way matching only; bills above the vendor credit limit automatically move the PO to Waiting Bills status",
        fr: "Configurer uniquement le rapprochement à 3 facteurs ; les factures au-dessus de la limite de crédit fournisseur passent automatiquement le BC en statut En attente de factures",
      },
      {
        en: "Set the Buyer field to a manager user; RFQs in the RFQ Sent stage require their e-mail approval before Confirm Order",
        fr: "Définir le champ Acheteur sur un utilisateur manager ; les demandes de prix envoyées exigent son approbation par e-mail avant Confirmer la commande",
      },
      {
        en: "Use blanket order Agreement Validity dates; POs exceeding the validity period are blocked in the To Send dashboard column",
        fr: "Utiliser les dates de Validité de l'accord-cadre ; les BC dépassant la validité sont bloqués dans la colonne À envoyer du tableau de bord",
      },
    ],
    explanation: {
      en: "Odoo 19 double validation requires a manager to approve POs exceeding a configured minimum amount. Until approved, the PO remains in a state awaiting authorization.",
      fr: "La double validation Odoo 19 exige l'approbation d'un manager pour les BC dépassant un montant minimum configuré. Jusqu'à l'approbation, le BC reste en attente d'autorisation.",
    },
  }),
  complexQ({
    id: "pur-007",
    module: "purchases",
    text: {
      en: "What happens when you confirm a Request for Quotation (RFQ) in Odoo 19 Purchase?",
      fr: "Que se passe-t-il lors de la confirmation d'une demande de prix dans Achats Odoo 19 ?",
    },
    correct: {
      en: "The RFQ becomes a confirmed Purchase Order and, with Inventory installed, an incoming receipt is automatically created",
      fr: "La demande de prix devient un bon de commande confirmé et, avec Inventaire installé, une réception entrante est créée automatiquement",
    },
    distractors: [
      {
        en: "A vendor bill draft is posted immediately based on the control policy On ordered quantities for each product line",
        fr: "Une facture fournisseur brouillon est comptabilisée immédiatement selon la politique de contrôle « Sur quantités commandées » de chaque ligne",
      },
      {
        en: "The RFQ moves to RFQ Sent status and waits for the vendor's email reply before any receipt document is generated",
        fr: "La demande de prix passe au statut Envoyée et attend la réponse e-mail du fournisseur avant toute génération de document de réception",
      },
      {
        en: "Alternative RFQs on the Alternatives tab are automatically confirmed simultaneously with the selected vendor order",
        fr: "Les demandes de prix alternatives de l'onglet Alternatives sont automatiquement confirmées simultanément avec la commande du fournisseur sélectionné",
      },
    ],
    explanation: {
      en: "Odoo 19 Confirm Order validates the purchase commitment. Order Deadline becomes Confirmation Date. With Inventory, confirming creates a receipt with expected arrival dates populated.",
      fr: "« Confirmer la commande » Odoo 19 valide l'engagement d'achat. La date limite devient Date de confirmation. Avec Inventaire, la confirmation crée une réception avec les dates d'arrivée prévues.",
    },
  }),
  complexQ({
    id: "pur-008",
    module: "purchases",
    text: {
      en: "How do vendor pricelists work in Odoo 19 Purchase?",
      fr: "Comment fonctionnent les listes de prix fournisseur dans Achats Odoo 19 ?",
    },
    correct: {
      en: "They store vendor-specific purchase prices per product, often varying by quantity, date, or vendor product code",
      fr: "Elles stockent les prix d'achat par fournisseur et produit, variant souvent selon quantité, date ou code produit fournisseur",
    },
    distractors: [
      {
        en: "They define customer sales prices on the Sales tab of the product form for inter-company purchase-to-sale transfers",
        fr: "Elles définissent les prix de vente client dans l'onglet Ventes de la fiche produit pour les transferts inter-sociétés achat-vente",
      },
      {
        en: "They replace the Control Policy field on vendor bills, forcing all services to bill on received quantities",
        fr: "Elles remplacent le champ Politique de contrôle sur les factures fournisseur, forçant tous les services à facturer sur quantités reçues",
      },
      {
        en: "They are configured only on blanket orders; standalone RFQs always use the product standard cost as unit price",
        fr: "Elles se configurent uniquement sur les accords-cadres ; les demandes de prix isolées utilisent toujours le coût standard du produit",
      },
    ],
    explanation: {
      en: "Odoo 19 vendor prices on the product Purchase tab or Purchase ‣ Configuration ‣ Vendor Pricelists auto-fill RFQ/PO line unit prices when a vendor is selected.",
      fr: "Les prix fournisseur Odoo 19 sur l'onglet Achats du produit ou Achats ‣ Configuration ‣ Listes de prix fournisseur préremplissent les prix unitaires des lignes de demande de prix/BC à la sélection du fournisseur.",
    },
  }),
  complexQ({
    id: "pur-009",
    module: "purchases",
    text: {
      en: "What is dropshipping configured from an Odoo 19 purchase flow?",
      fr: "Qu'est-ce que le dropshipping configuré depuis un flux d'achat Odoo 19 ?",
    },
    correct: {
      en: "The vendor ships directly to the end customer; the PO Deliver to field is set to Dropship with the customer's address",
      fr: "Le fournisseur expédie directement au client final ; le champ Livrer à du BC est défini sur Dropshipping avec l'adresse du client",
    },
    distractors: [
      {
        en: "Products are received into the main warehouse first, then transferred to the customer via an internal picking route",
        fr: "Les produits sont d'abord réceptionnés dans l'entrepôt principal, puis transférés au client via une route de transfert interne",
      },
      {
        en: "The Buy route on the product generates a PO that skips vendor billing because the customer invoice covers all costs",
        fr: "La route Acheter sur le produit génère un BC qui ignore la facturation fournisseur car la facture client couvre tous les coûts",
      },
      {
        en: "Only service products can use dropship; storable goods always require a receipt into company stock before delivery",
        fr: "Seuls les produits de type service peuvent être en dropshipping ; les biens stockables exigent toujours une réception en stock société avant livraison",
      },
    ],
    explanation: {
      en: "Odoo 19 dropshipping (Inventory ‣ Settings) links sales and purchase orders so the vendor delivers to the customer. Select Dropship in Deliver to on the PO with the dropship address.",
      fr: "Le dropshipping Odoo 19 (Inventaire ‣ Paramètres) lie ventes et achats pour que le fournisseur livre au client. Sélectionner Dropshipping dans Livrer à sur le BC avec l'adresse de livraison directe.",
    },
  }),
  complexQ({
    id: "pur-010",
    module: "purchases",
    text: {
      en: "Which report analyzes purchase spending by vendor and product in Odoo 19?",
      fr: "Quel rapport analyse les dépenses d'achat par fournisseur et produit dans Odoo 19 ?",
    },
    correct: {
      en: "Purchase Analysis (Purchase ‣ Reporting), providing KPIs on spend, lead times, and vendor performance",
      fr: "Analyse des achats (Achats ‣ Rapports), fournissant des KPI sur dépenses, délais et performance fournisseurs",
    },
    distractors: [
      {
        en: "Vendor Bills Analysis in Accounting ‣ Reporting, which only includes posted bills without open RFQ data",
        fr: "Analyse des factures fournisseur dans Comptabilité ‣ Rapports, incluant uniquement les factures comptabilisées sans données de demandes de prix ouvertes",
      },
      {
        en: "The RFQ dashboard To Send and Waiting columns showing order counts without product-level spend breakdown",
        fr: "Les colonnes À envoyer et En attente du tableau de bord demandes de prix affichant des compteurs sans ventilation des dépenses par produit",
      },
      {
        en: "Stock Valuation report in Inventory ‣ Reporting grouping receipts by warehouse operation type only",
        fr: "Rapport Valorisation du stock dans Inventaire ‣ Rapports regroupant les réceptions par type d'opération d'entrepôt uniquement",
      },
    ],
    explanation: {
      en: "Odoo 19 Purchase Analysis report aggregates purchase data by vendor, product, and period. The RFQ dashboard provides operational status, not detailed spend analytics.",
      fr: "Le rapport Analyse des achats Odoo 19 agrège les données par fournisseur, produit et période. Le tableau de bord demandes de prix fournit le statut opérationnel, pas l'analyse détaillée des dépenses.",
    },
  }),
  complexQ({
    id: "pur-011",
    module: "purchases",
    text: {
      en: "How do you handle partial receipts on a purchase order in Odoo 19?",
      fr: "Comment gérer les réceptions partielles sur un bon de commande dans Odoo 19 ?",
    },
    correct: {
      en: "Validate the partial receipt and create a backorder for remaining quantities, keeping the PO open for future receipts",
      fr: "Valider la réception partielle et créer un reliquat pour les quantités restantes, en gardant le BC ouvert pour les réceptions futures",
    },
    distractors: [
      {
        en: "Cancel the purchase order and create a new RFQ; partial receipts are not supported on confirmed purchase orders",
        fr: "Annuler le bon de commande et créer une nouvelle demande de prix ; les réceptions partielles ne sont pas supportées sur les BC confirmés",
      },
      {
        en: "Change the Control Policy to On ordered quantities so the unreceived quantity is removed from the PO automatically",
        fr: "Modifier la politique de contrôle en « Sur quantités commandées » pour que la quantité non reçue soit retirée automatiquement du BC",
      },
      {
        en: "Confirm a second purchase order from the blanket agreement; backorders exist only for sales deliveries, not purchases",
        fr: "Confirmer un second bon de commande depuis l'accord-cadre ; les reliquats n'existent que pour les livraisons ventes, pas les achats",
      },
    ],
    explanation: {
      en: "Odoo 19 supports partial deliveries on POs. Validating a partial receipt offers a backorder for remaining quantities. Vendor bills can reflect only received quantities.",
      fr: "Odoo 19 gère les livraisons partielles sur les BC. Valider une réception partielle propose un reliquat pour les quantités restantes. Les factures fournisseur peuvent refléter uniquement les quantités reçues.",
    },
  }),
  complexQ({
    id: "pur-012",
    module: "purchases",
    text: {
      en: "What is the Vendor Reference field on an Odoo 19 purchase order?",
      fr: "À quoi sert le champ Référence fournisseur sur un bon de commande Odoo 19 ?",
    },
    correct: {
      en: "To store the vendor's own quotation or order reference for matching deliveries and vendor bills to the PO",
      fr: "À stocker la référence de devis ou commande du fournisseur pour faire correspondre livraisons et factures au BC",
    },
    distractors: [
      {
        en: "To define the internal sequence number assigned by Odoo when the RFQ is first saved in draft status",
        fr: "À définir le numéro de séquence interne assigné par Odoo à l'enregistrement initial de la demande de prix en brouillon",
      },
      {
        en: "To link the PO to a sales order customer reference for dropship deliveries to the end client",
        fr: "À lier le BC à la référence client d'une commande de vente pour les livraisons dropshipping au client final",
      },
      {
        en: "To store the vendor product barcode scanned during receipt validation in the Inventory barcode app",
        fr: "À stocker le code-barres produit fournisseur scanné lors de la validation de réception dans l'application code-barres Inventaire",
      },
    ],
    explanation: {
      en: "Odoo 19 Vendor Reference on the PO form stores the supplier's document number. It helps match incoming shipments and vendor bills to the correct purchase order.",
      fr: "La Référence fournisseur Odoo 19 sur le BC stocke le numéro de document du fournisseur. Elle aide à faire correspondre les expéditions entrantes et factures fournisseur au bon bon de commande.",
    },
  }),
  complexQ({
    id: "pur-013",
    module: "purchases",
    text: {
      en: "How is a vendor bill created from a purchase order in Odoo 19?",
      fr: "Comment créer une facture fournisseur depuis un bon de commande dans Odoo 19 ?",
    },
    correct: {
      en: "Click Create Bill on the PO; Odoo generates a draft vendor bill based on the control policy (ordered or received quantities)",
      fr: "Cliquer sur « Créer facture » sur le BC ; Odoo génère une facture fournisseur brouillon selon la politique de contrôle (quantités commandées ou reçues)",
    },
    distractors: [
      {
        en: "Vendor bills are created automatically when Send by Email is clicked on the RFQ before order confirmation",
        fr: "Les factures fournisseur sont créées automatiquement quand « Envoyer par e-mail » est cliqué sur la demande de prix avant confirmation",
      },
      {
        en: "Register payment on the purchase order form; Odoo creates the vendor bill and payment transaction simultaneously",
        fr: "Enregistrer le paiement sur la fiche bon de commande ; Odoo crée simultanément la facture fournisseur et la transaction de paiement",
      },
      {
        en: "Upload the vendor PDF to the PO chatter; OCR in Accounting converts it to a bill without linking to PO lines",
        fr: "Téléverser le PDF fournisseur dans le chatter du BC ; l'OCR en Comptabilité le convertit en facture sans lien vers les lignes du BC",
      },
    ],
    explanation: {
      en: "Odoo 19 Create Bill on a PO generates a draft vendor bill per the product Control Policy. On received quantities, only received products are included; attempting to bill without receipt triggers an error.",
      fr: "« Créer facture » Odoo 19 sur un BC génère une facture brouillon selon la Politique de contrôle du produit. Sur quantités reçues, seuls les produits réceptionnés sont inclus ; facturer sans réception génère une erreur.",
    },
  }),
  complexQ({
    id: "pur-014",
    module: "purchases",
    text: {
      en: "What is the purpose of the Buyer (purchase representative) field on an Odoo 19 purchase order?",
      fr: "À quoi sert le champ Acheteur (représentant achats) sur un bon de commande Odoo 19 ?",
    },
    correct: {
      en: "To identify the user responsible for managing the purchase order and vendor follow-up",
      fr: "À identifier l'utilisateur responsable de la gestion du bon de commande et du suivi fournisseur",
    },
    distractors: [
      {
        en: "To assign the warehouse operator who validates receipts; it defaults to the Inventory responsible on the product",
        fr: "À assigner l'opérateur entrepôt qui valide les réceptions ; il prend par défaut le responsable Inventaire du produit",
      },
      {
        en: "To determine which approval manager receives the double validation notification based on department hierarchy",
        fr: "À déterminer quel manager d'approbation reçoit la notification de double validation selon la hiérarchie du département",
      },
      {
        en: "To set the salesperson on the linked sales order when the PO is created from a dropship procurement rule",
        fr: "À définir le commercial sur la commande client liée quand le BC est créé depuis une règle d'approvisionnement dropshipping",
      },
    ],
    explanation: {
      en: "Odoo 19 Buyer field on POs and RFQs tracks who manages vendor relations. By default it is the user creating the order; it appears on the RFQ dashboard for individual buyer tracking.",
      fr: "Le champ Acheteur Odoo 19 sur les BC et demandes de prix identifie qui gère la relation fournisseur. Par défaut c'est l'utilisateur créant la commande ; il apparaît sur le tableau de bord pour le suivi par acheteur.",
    },
  }),
  complexQ({
    id: "pur-015",
    module: "purchases",
    text: {
      en: "How do scheduled activities help on purchase orders in Odoo 19?",
      fr: "Comment les activités planifiées aident-elles sur les bons de commande dans Odoo 19 ?",
    },
    correct: {
      en: "They remind buyers to follow up with vendors on pricing, delivery delays, or other procurement tasks via the chatter",
      fr: "Elles rappellent aux acheteurs de relancer les fournisseurs sur les prix, retards de livraison ou autres tâches d'approvisionnement via le chatter",
    },
    distractors: [
      {
        en: "They automatically confirm all RFQs in the Waiting dashboard column when the activity deadline is reached",
        fr: "Elles confirment automatiquement toutes les demandes de prix de la colonne En attente du tableau de bord à l'échéance de l'activité",
      },
      {
        en: "They replace the Order Deadline field by recalculating Expected Arrival from vendor lead times in Vendor Pricelists",
        fr: "Elles remplacent le champ Date limite de commande en recalculant l'Arrivée prévue depuis les délais fournisseur des Listes de prix",
      },
      {
        en: "They trigger blanket order renewal when the Agreement Validity date approaches within the configured interval",
        fr: "Elles déclenchent le renouvellement de l'accord-cadre quand la date de Validité de l'accord approche dans l'intervalle configuré",
      },
    ],
    explanation: {
      en: "Odoo 19 activities on POs (To Do, Call, etc.) schedule follow-up tasks in the chatter, ensuring timely vendor communication for late deliveries or negotiations.",
      fr: "Les activités Odoo 19 sur les BC (À faire, Appel, etc.) planifient des tâches de suivi dans le chatter, assurant une communication fournisseur en temps voulu pour retards ou négociations.",
    },
  }),
  complexQ({
    id: "pur-016",
    module: "purchases",
    text: {
      en: "What does the Buy route on a product trigger in Odoo 19?",
      fr: "Que déclenche la route « Acheter » sur un produit dans Odoo 19 ?",
    },
    correct: {
      en: "Procurement rules that propose RFQs or purchase orders when stock falls below reordering rules or manual replenishment is run",
      fr: "Des règles d'approvisionnement proposant des demandes de prix ou bons de commande quand le stock descend sous les règles de réapprovisionnement ou lors d'un réassort manuel",
    },
    distractors: [
      {
        en: "Automatic customer invoicing when the sales order is confirmed for products with storable inventory type",
        fr: "La facturation client automatique à la confirmation de la commande pour les produits de type stockable",
      },
      {
        en: "A manufacturing order for the product BOM components instead of a purchase order from the default vendor",
        fr: "Un ordre de fabrication pour les composants de la nomenclature au lieu d'un bon de commande depuis le fournisseur par défaut",
      },
      {
        en: "Direct dropship delivery to the customer without creating any purchase document in the Purchase app",
        fr: "Une livraison dropshipping directe au client sans créer de document d'achat dans l'application Achats",
      },
    ],
    explanation: {
      en: "Odoo 19 Buy route (product Inventory tab) combined with reordering rules generates procurement proposals. Users can convert them to RFQs or POs from replenishment screens.",
      fr: "La route Acheter Odoo 19 (onglet Inventaire du produit) combinée aux règles de réapprovisionnement génère des propositions d'approvisionnement. L'utilisateur peut les convertir en demandes de prix ou BC depuis les écrans de réassort.",
    },
  }),
  complexQ({
    id: "pur-017",
    module: "purchases",
    text: {
      en: "How do you request multiple vendor quotes for one procurement need in Odoo 19?",
      fr: "Comment demander plusieurs devis fournisseurs pour un même besoin d'approvisionnement dans Odoo 19 ?",
    },
    correct: {
      en: "Use alternative RFQs (call for tenders) from the Alternatives tab, sending comparable RFQs to different vendors",
      fr: "Utiliser les demandes de prix alternatives (appel d'offres) depuis l'onglet Alternatives, en envoyant des demandes comparables à différents fournisseurs",
    },
    distractors: [
      {
        en: "Create one RFQ per vendor manually without linking them; Purchase Analysis merges them automatically for comparison",
        fr: "Créer une demande de prix par fournisseur manuellement sans les lier ; Analyse des achats les fusionne automatiquement pour comparaison",
      },
      {
        en: "Use a blanket order only; alternative vendors cannot be queried until the agreement validity period expires",
        fr: "Utiliser uniquement un accord-cadre ; les fournisseurs alternatifs ne peuvent être consultés qu'à l'expiration de la validité de l'accord",
      },
      {
        en: "Send a sales quotation to each vendor from the CRM pipeline and convert responses into purchase orders",
        fr: "Envoyer un devis de vente à chaque fournisseur depuis le pipeline CRM et convertir les réponses en bons de commande",
      },
    ],
    explanation: {
      en: "Odoo 19 call for tenders uses alternative RFQs linked on the Alternatives tab. Create Alternative copies products to new vendor RFQs; Compare Product Lines supports side-by-side evaluation.",
      fr: "L'appel d'offres Odoo 19 utilise des demandes de prix alternatives liées dans l'onglet Alternatives. « Créer une alternative » copie les produits vers de nouvelles demandes ; « Comparer les lignes » permet l'évaluation côte à côte.",
    },
  }),
  complexQ({
    id: "pur-018",
    module: "purchases",
    text: {
      en: "What is the effect of cancelling a purchase order in Odoo 19?",
      fr: "Quel est l'effet de l'annulation d'un bon de commande dans Odoo 19 ?",
    },
    correct: {
      en: "Pending receipts are cancelled; quantities already received remain in stock and require separate handling for returns or bills",
      fr: "Les réceptions en attente sont annulées ; les quantités déjà reçues restent en stock et nécessitent un traitement séparé pour retours ou factures",
    },
    distractors: [
      {
        en: "All vendor bills linked to the PO are automatically reversed and vendor payments are refunded through the bank journal",
        fr: "Toutes les factures fournisseur liées au BC sont automatiquement extournées et les paiements fournisseurs remboursés via le journal banque",
      },
      {
        en: "The blanket order agreement is terminated and all future RFQs from that vendor are blocked in the Purchase app",
        fr: "L'accord-cadre est résilié et toutes les futures demandes de prix de ce fournisseur sont bloquées dans Achats",
      },
      {
        en: "Received products are automatically returned to the vendor via a reverse receipt without user intervention",
        fr: "Les produits reçus sont automatiquement retournés au fournisseur via une réception inverse sans intervention utilisateur",
      },
    ],
    explanation: {
      en: "Odoo 19 cancelling a PO stops future incoming shipments. Goods already received stay in inventory. Posted vendor bills for received quantities are not automatically reversed.",
      fr: "L'annulation d'un BC Odoo 19 stoppe les expéditions entrantes futures. Les marchandises déjà reçues restent en stock. Les factures fournisseur comptabilisées pour les quantités reçues ne sont pas extournées automatiquement.",
    },
  }),
  complexQ({
    id: "pur-019",
    module: "purchases",
    text: {
      en: "How are taxes applied on purchase order lines in Odoo 19?",
      fr: "Comment les taxes sont-elles appliquées sur les lignes de bon de commande dans Odoo 19 ?",
    },
    correct: {
      en: "From purchase/vendor taxes configured on the product or fiscal position, flowing to PO lines and vendor bills",
      fr: "Depuis les taxes achat/fournisseur configurées sur le produit ou la position fiscale, reportées sur les lignes BC et factures fournisseur",
    },
    distractors: [
      {
        en: "Taxes are entered manually on each vendor bill only; purchase order lines never display tax amounts",
        fr: "Les taxes sont saisies manuellement uniquement sur chaque facture fournisseur ; les lignes de BC n'affichent jamais de montants de taxe",
      },
      {
        en: "From the sales order tax configuration when the PO is generated by a dropship procurement rule",
        fr: "Depuis la configuration fiscale de la commande client quand le BC est généré par une règle d'approvisionnement dropshipping",
      },
      {
        en: "From the 3-way matching Should Be Paid field, which determines the tax rate applied at payment registration",
        fr: "Depuis le champ « Doit être payé » du rapprochement à 3 facteurs, qui détermine le taux de taxe appliqué à l'enregistrement du paiement",
      },
    ],
    explanation: {
      en: "Odoo 19 purchase taxes on products (Purchase Taxes field) propagate to PO lines and vendor bills for accurate VAT/tax reporting on vendor transactions.",
      fr: "Les taxes achat Odoo 19 sur les produits (champ Taxes fournisseur) se propagent aux lignes BC et factures fournisseur pour un reporting TVA/taxes précis sur les transactions fournisseurs.",
    },
  }),
  complexQ({
    id: "pur-020",
    module: "purchases",
    text: {
      en: "What is the difference between an RFQ and a confirmed Purchase Order in Odoo 19?",
      fr: "Quelle est la différence entre une demande de prix et un bon de commande confirmé dans Odoo 19 ?",
    },
    correct: {
      en: "An RFQ is a draft negotiable request; confirming it commits quantities, prices, and triggers procurement/receipt processes",
      fr: "Une demande de prix est une demande brouillon négociable ; la confirmer engage quantités, prix et déclenche les processus d'approvisionnement/réception",
    },
    distractors: [
      {
        en: "RFQs are used for services only; purchase orders are required for all storable goods regardless of confirmation",
        fr: "Les demandes de prix sont réservées aux services ; les bons de commande sont obligatoires pour tous les biens stockables quelle que soit la confirmation",
      },
      {
        en: "RFQs automatically create vendor bills on confirmation; purchase orders only create bills after 3-way matching is validated",
        fr: "Les demandes de prix créent automatiquement des factures fournisseur à la confirmation ; les BC ne créent des factures qu'après validation du rapprochement à 3 facteurs",
      },
      {
        en: "RFQs and confirmed POs differ only in the Vendor Reference field; both trigger identical receipt and billing workflows",
        fr: "Demandes de prix et BC confirmés ne diffèrent que par le champ Référence fournisseur ; les deux déclenchent des flux identiques de réception et facturation",
      },
    ],
    explanation: {
      en: "Odoo 19 RFQs are negotiable drafts (RFQ, RFQ Sent stages). Confirm Order converts to a binding PO with Confirmation Date and creates expected receipts when Inventory is installed.",
      fr: "Les demandes de prix Odoo 19 sont des brouillons négociables (étapes Demande de prix, Envoyée). « Confirmer la commande » crée un BC engageant avec Date de confirmation et des réceptions attendues si Inventaire est installé.",
    },
  }),
  complexQ({
    id: "pur-021",
    module: "purchases",
    text: {
      en: "A reordering rule has minimum 5 and maximum 10 units. When triggered, how many units does Odoo order?",
      fr: "Une règle min 5, max 10. Une fois déclenchée, combien d'unités Odoo commande-t-il ?",
    },
    correct: {
      en: "As much as needed to reach 10 units in stock (the maximum)",
      fr: "Autant que nécessaire pour atteindre 10 unités en stock (le maximum)",
    },
    distractors: [
      {
        en: "Always exactly 10 units regardless of current stock",
        fr: "Toujours exactement 10 unités quel que soit le stock actuel",
      },
      {
        en: "Always between 5 and 10 units randomly",
        fr: "Toujours entre 5 et 10 unités de façon aléatoire",
      },
      {
        en: "Only enough to reach the minimum of 5 units",
        fr: "Uniquement assez pour atteindre le minimum de 5 unités",
      },
    ],
    explanation: {
      en: "Reordering rules replenish up to the Max threshold, not just to the Min.",
      fr: "Les règles de réapprovisionnement remontent le stock jusqu'au Max, pas seulement jusqu'au Min.",
    },
  }),
  complexQ({
    id: "pur-022",
    module: "purchases",
    text: {
      en: "Can reordering rules be created on service-type products in Odoo?",
      fr: "Peut-on créer des règles de réapprovisionnement sur des produits de type service ?",
    },
    correct: {
      en: "No",
      fr: "Non",
    },
    distractors: [
      {
        en: "Yes, for all product types including services",
        fr: "Oui, pour tous les types de produits y compris les services",
      },
      {
        en: "Yes, but only when the service is linked to a project",
        fr: "Oui, mais uniquement si le service est lié à un projet",
      },
      {
        en: "Yes, when the service product is also sold in Point of Sale",
        fr: "Oui, quand le service est aussi vendu au Point de Vente",
      },
    ],
    explanation: {
      en: "Reordering rules apply to storable and consumable products tracked in inventory, not services.",
      fr: "Les règles de réapprovisionnement s'appliquent aux produits stockables et consommables, pas aux services.",
    },
  }),
  complexQ({
    id: "pur-023",
    module: "purchases",
    text: {
      en: "Can reordering rules be created on consumable-type products in Odoo?",
      fr: "Peut-on créer des règles de réapprovisionnement sur des produits consommables ?",
    },
    correct: {
      en: "Yes",
      fr: "Oui",
    },
    distractors: [
      {
        en: "No, only storable products support reordering rules",
        fr: "Non, seuls les produits stockables supportent les règles de réapprovisionnement",
      },
      {
        en: "Only if they are sold through Point of Sale",
        fr: "Uniquement s'ils sont vendus au Point de Vente",
      },
      {
        en: "Only when consumables use FIFO valuation",
        fr: "Uniquement quand les consommables utilisent la valorisation FIFO",
      },
    ],
    explanation: {
      en: "Consumable products can use reordering rules when procurement via purchase or manufacture is needed.",
      fr: "Les produits consommables peuvent avoir des règles de réapprovisionnement pour les achats ou fabrications associés.",
    },
  }),
  complexQ({
    id: "pur-024",
    module: "purchases",
    text: {
      en: "You bought IAP credits for Document Digitization. Can you use them for Lead Generation?",
      fr: "Vous avez acheté des crédits IAP pour la numérisation de documents. Pouvez-vous les utiliser pour la génération de prospects ?",
    },
    correct: {
      en: "No — IAP credits are not interchangeable between services",
      fr: "Non — les crédits IAP ne sont pas interchangeables entre services",
    },
    distractors: [
      {
        en: "Yes — IAP credits are a fungible currency for any Odoo IAP service",
        fr: "Oui — les crédits IAP sont une monnaie fongible pour tout service IAP Odoo",
      },
      {
        en: "Yes — exchange them in Settings using the credit exchange procedure",
        fr: "Oui — échangez-les dans Paramètres via la procédure d'échange de crédits",
      },
      {
        en: "Yes — refund document credits in Settings, then buy lead generation credits",
        fr: "Oui — remboursez les crédits documents dans Paramètres, puis achetez des crédits prospects",
      },
    ],
    explanation: {
      en: "Each IAP service (OCR, lead mining, SMS, etc.) requires its own prepaid credit pack from the IAP catalog.",
      fr: "Chaque service IAP (OCR, prospection, SMS, etc.) nécessite son propre pack de crédits dans le catalogue IAP.",
    },
  }),
  complexQ({
    id: "pur-025",
    module: "purchases",
    text: {
      en: "When reordering rules trigger a purchase, which vendor is used by default?",
      fr: "Quand une règle de réapprovisionnement déclenche un achat, quel fournisseur est utilisé par défaut ?",
    },
    correct: {
      en: "The first vendor listed on the product form Purchase tab",
      fr: "Le premier fournisseur listé sur l'onglet Achats de la fiche produit",
    },
    distractors: [
      {
        en: "The vendor with the cheapest price across all RFQs this year",
        fr: "Le fournisseur au prix le plus bas sur toutes les demandes de prix de l'année",
      },
      {
        en: "The vendor with the shortest lead time in the purchase agreement",
        fr: "Le fournisseur au délai le plus court dans l'accord-cadre",
      },
      {
        en: "The most frequently used vendor in the last 90 days company-wide",
        fr: "Le fournisseur le plus utilisé sur les 90 derniers jours à l'échelle société",
      },
    ],
    explanation: {
      en: "Default vendor on the product form supplies RFQs generated by replenishment unless another vendor is specified on the rule.",
      fr: "Le fournisseur par défaut sur la fiche produit alimente les demandes de prix de réapprovisionnement sauf autre fournisseur sur la règle.",
    },
  }),
];
