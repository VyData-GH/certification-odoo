import { complexQ } from "./helpers";

export const salesQuestions = [
  complexQ({
    id: "sal-001",
    module: "sales",
    text: {
      en: "What is the standard sales flow in Odoo 19?",
      fr: "Quel est le flux de vente standard dans Odoo 19 ?",
    },
    correct: {
      en: "Quotation → Sales Order → Delivery (if applicable) → Customer Invoice → Payment",
      fr: "Devis → Commande client → Livraison (si applicable) → Facture client → Paiement",
    },
    distractors: [
      {
        en: "Sales Order → Quotation → Vendor Bill → Delivery, with invoicing triggered at RFQ confirmation",
        fr: "Commande client → Devis → Facture fournisseur → Livraison, avec facturation déclenchée à la confirmation de la demande de prix",
      },
      {
        en: "Opportunity → Purchase Order → Receipt → Customer Invoice, when the Buy route is enabled on products",
        fr: "Opportunité → Bon de commande achat → Réception → Facture client, lorsque la route Acheter est activée sur les produits",
      },
      {
        en: "Quotation → Delivery → Sales Order → Payment, because deliveries are validated before order confirmation in Sales",
        fr: "Devis → Livraison → Commande client → Paiement, car les livraisons sont validées avant la confirmation de commande dans Ventes",
      },
    ],
    explanation: {
      en: "Odoo 19 documentation describes the sales flow: quotation sent to customer, confirmed as sales order, products delivered or services rendered, then invoiced and paid.",
      fr: "La documentation Odoo 19 décrit le flux : devis envoyé au client, confirmé en commande, produits livrés ou services rendus, puis facturés et payés.",
    },
  }),
  complexQ({
    id: "sal-002",
    module: "sales",
    text: {
      en: "How do you confirm a quotation into a sales order in Odoo 19?",
      fr: "Comment confirmer un devis en commande client dans Odoo 19 ?",
    },
    correct: {
      en: "Click Confirm on the quotation form; the document status changes from Quotation to Sales Order",
      fr: "Cliquer sur « Confirmer » sur le devis ; le statut passe de Devis à Commande client",
    },
    distractors: [
      {
        en: "Send the quotation by email; the status changes to Sales Order automatically once the customer opens the PDF attachment",
        fr: "Envoyer le devis par e-mail ; le statut passe automatiquement à Commande client dès que le client ouvre la pièce jointe PDF",
      },
      {
        en: "Click Create Invoice on the quotation; confirming the draft invoice simultaneously validates the underlying sales order",
        fr: "Cliquer sur « Créer une facture » sur le devis ; la confirmation de la facture brouillon valide simultanément la commande sous-jacente",
      },
      {
        en: "Set the Online Payment percentage to 100 % on the quotation template; saving the form confirms the order without user action",
        fr: "Définir le pourcentage de Paiement en ligne à 100 % sur le modèle de devis ; l'enregistrement confirme la commande sans action utilisateur",
      },
    ],
    explanation: {
      en: "Odoo 19 requires explicit confirmation via the Confirm button. Online signature or online payment on the customer portal can also confirm orders when those features are enabled.",
      fr: "Odoo 19 exige une confirmation explicite via le bouton « Confirmer ». La signature en ligne ou le paiement en ligne sur le portail client peuvent aussi confirmer les commandes si ces options sont activées.",
    },
  }),
  complexQ({
    id: "sal-003",
    module: "sales",
    text: {
      en: "What is a pricelist in the Odoo 19 Sales app?",
      fr: "Qu'est-ce qu'une liste de prix dans l'application Ventes Odoo 19 ?",
    },
    correct: {
      en: "A set of rules that compute product prices based on customer, quantity, date, currency, or other conditions",
      fr: "Un ensemble de règles calculant les prix produits selon le client, la quantité, la date, la devise ou d'autres conditions",
    },
    distractors: [
      {
        en: "The vendor price table on the product Purchase tab used to auto-fill purchase order line unit prices",
        fr: "Le tableau de prix fournisseur de l'onglet Achats du produit utilisé pour préremplir les prix unitaires des lignes de bon de commande",
      },
      {
        en: "A quotation template preset stored under Sales ‣ Configuration ‣ Quotation Templates with fixed product lines",
        fr: "Un modèle de devis prédéfini stocké dans Ventes ‣ Configuration ‣ Modèles de devis avec des lignes produits fixes",
      },
      {
        en: "The default sales journal assigned on a quotation template that determines which journal posts customer invoices",
        fr: "Le journal de ventes par défaut assigné sur un modèle de devis déterminant quel journal comptabilise les factures client",
      },
    ],
    explanation: {
      en: "Odoo 19 pricelists apply dynamic pricing rules. Customers can have a default pricelist, and quotation lines recalculate when pricelist or quantity changes.",
      fr: "Les listes de prix Odoo 19 appliquent des règles tarifaires dynamiques. Les clients peuvent avoir une liste par défaut, et les lignes de devis se recalculent selon la liste ou la quantité.",
    },
  }),
  complexQ({
    id: "sal-004",
    module: "sales",
    text: {
      en: "How do you invoice a down payment on a confirmed sales order in Odoo 19?",
      fr: "Comment facturer un acompte sur une commande client confirmée dans Odoo 19 ?",
    },
    correct: {
      en: "Click Create Invoice and select Down payment (percentage) or Down payment (fixed amount) in the wizard",
      fr: "Cliquer sur « Créer une facture » et sélectionner « Acompte (pourcentage) » ou « Acompte (montant fixe) » dans l'assistant",
    },
    distractors: [
      {
        en: "Add a discount line of 100 % on the sales order and confirm a separate credit note from the Invoicing app",
        fr: "Ajouter une ligne de remise de 100 % sur la commande et confirmer un avoir séparé depuis l'application Facturation",
      },
      {
        en: "Change the product Invoicing Policy to Delivered quantities and validate a partial delivery before invoicing",
        fr: "Modifier la politique de facturation du produit en « Quantités livrées » et valider une livraison partielle avant facturation",
      },
      {
        en: "Enable Automatic Invoice in Sales settings so Odoo posts the down payment when the customer signs the quotation online",
        fr: "Activer « Facturation automatique » dans les paramètres Ventes pour qu'Odoo comptabilise l'acompte quand le client signe le devis en ligne",
      },
    ],
    explanation: {
      en: "Odoo 19 Create Invoice wizard offers Regular invoice, Down payment (percentage), and Down payment (fixed amount). Down payments appear in a Down Payments section on subsequent invoices.",
      fr: "L'assistant « Créer une facture » Odoo 19 propose Facture normale, Acompte (pourcentage) et Acompte (montant fixe). Les acomptes apparaissent dans une section Acomptes sur les factures suivantes.",
    },
  }),
  complexQ({
    id: "sal-005",
    module: "sales",
    text: {
      en: "What is an optional product on an Odoo 19 sales quotation?",
      fr: "Qu'est-ce qu'un produit optionnel sur un devis Odoo 19 ?",
    },
    correct: {
      en: "A cross-sell suggestion the customer can add to the order from the quotation portal or order form",
      fr: "Une suggestion de vente additionnelle que le client peut ajouter à la commande depuis le portail devis ou le bon de commande",
    },
    distractors: [
      {
        en: "A service line with Invoicing Policy set to Delivered quantities that is invoiced only after project milestone validation",
        fr: "Une ligne de service avec politique « Quantités livrées » facturée uniquement après validation d'un jalon projet",
      },
      {
        en: "A component defined on the product BOM that is automatically added when the main product is confirmed on the order",
        fr: "Un composant défini sur la nomenclature du produit ajouté automatiquement à la confirmation du produit principal sur la commande",
      },
      {
        en: "A line item marked as a down payment product category used exclusively for advance invoicing wizard entries",
        fr: "Une ligne marquée comme catégorie produit acompte utilisée exclusivement par l'assistant de facturation d'acompte",
      },
    ],
    explanation: {
      en: "Odoo 19 optional products are configured on the product form or quotation template Optional Products tab. They appear at the bottom of quotations and eCommerce pages as add-on suggestions.",
      fr: "Les produits optionnels Odoo 19 se configurent sur la fiche produit ou l'onglet Produits optionnels du modèle de devis. Ils apparaissent en bas des devis et pages eCommerce comme suggestions complémentaires.",
    },
  }),
  complexQ({
    id: "sal-006",
    module: "sales",
    text: {
      en: "How do you apply a discount on an Odoo 19 sales quotation line?",
      fr: "Comment appliquer une remise sur une ligne de devis Odoo 19 ?",
    },
    correct: {
      en: "Enter a percentage in the Disc.% column on the order line; the unit price is reduced accordingly",
      fr: "Saisir un pourcentage dans la colonne « Rem.% » sur la ligne de commande ; le prix unitaire est réduit en conséquence",
    },
    distractors: [
      {
        en: "Create a separate pricelist rule with a negative surcharge and assign it as the customer's default pricelist",
        fr: "Créer une règle de liste de prix avec une surcharge négative et l'assigner comme liste de prix par défaut du client",
      },
      {
        en: "Change the tax configuration on the product template so the fiscal position applies a reverse charge discount",
        fr: "Modifier la configuration fiscale du modèle de produit pour que la position fiscale applique une remise d'autoliquidation",
      },
      {
        en: "Add a note line in the quotation template Terms & Conditions tab; notes automatically deduct the stated percentage",
        fr: "Ajouter une ligne note dans l'onglet Conditions générales du modèle de devis ; les notes déduisent automatiquement le pourcentage indiqué",
      },
    ],
    explanation: {
      en: "Odoo 19 supports per-line discount percentages (Disc.%) on sales order lines. The discounted unit price flows to the confirmed order and customer invoice.",
      fr: "Odoo 19 prend en charge les remises en pourcentage par ligne (Rem.%) sur les lignes de commande. Le prix unitaire remisé se reporte sur la commande confirmée et la facture client.",
    },
  }),
  complexQ({
    id: "sal-007",
    module: "sales",
    text: {
      en: "What invoicing status does a sales order show when products are fully delivered but not yet invoiced in Odoo 19?",
      fr: "Quel statut de facturation affiche une commande dont les produits sont entièrement livrés mais pas encore facturés dans Odoo 19 ?",
    },
    correct: {
      en: "To Invoice (invoice status), indicating delivered quantities are ready to be invoiced per the product policy",
      fr: "« À facturer » (statut de facturation), indiquant que les quantités livrées sont prêtes à être facturées selon la politique produit",
    },
    distractors: [
      {
        en: "Locked status, which prevents further delivery validation until the customer invoice is posted and paid",
        fr: "Statut « Verrouillé », empêchant toute validation de livraison tant que la facture client n'est pas comptabilisée et payée",
      },
      {
        en: "Quotation Sent, because the order reverts to draft quotation status once all pickings are validated",
        fr: "« Devis envoyé », car la commande repasse en statut devis brouillon une fois tous les transferts validés",
      },
      {
        en: "Nothing to Bill, the same billing status used on purchase orders before any vendor bill is created",
        fr: "« Rien à facturer », le même statut de facturation utilisé sur les bons de commande achat avant création de facture fournisseur",
      },
    ],
    explanation: {
      en: "Odoo 19 shows To Invoice on sales orders when delivery is complete and invoicing is pending. With Delivered quantities policy, Create Invoice becomes available after validating the delivery order.",
      fr: "Odoo 19 affiche « À facturer » quand la livraison est terminée et la facturation en attente. Avec la politique « Quantités livrées », « Créer une facture » est disponible après validation du bon de livraison.",
    },
  }),
  complexQ({
    id: "sal-008",
    module: "sales",
    text: {
      en: "How do you create a reusable quotation template in Odoo 19?",
      fr: "Comment créer un modèle de devis réutilisable dans Odoo 19 ?",
    },
    correct: {
      en: "Enable Quotation Templates in Sales settings, then create templates under Sales ‣ Configuration ‣ Quotation Templates",
      fr: "Activer « Modèles de devis » dans les paramètres Ventes, puis créer les modèles dans Ventes ‣ Configuration ‣ Modèles de devis",
    },
    distractors: [
      {
        en: "Save any confirmed sales order using the Action ‣ Duplicate menu and rename the duplicated record as a template",
        fr: "Enregistrer toute commande confirmée via le menu Action ‣ Dupliquer et renommer l'enregistrement dupliqué comme modèle",
      },
      {
        en: "Configure a Default Template only in Sales settings; custom templates must be created through Studio form views",
        fr: "Configurer uniquement un « Modèle par défaut » dans les paramètres Ventes ; les modèles personnalisés doivent être créés via les vues Studio",
      },
      {
        en: "Create a product category flagged as Quotation Template; all products in that category auto-populate new quotations",
        fr: "Créer une catégorie de produits marquée Modèle de devis ; tous les produits de cette catégorie préremplissent automatiquement les nouveaux devis",
      },
    ],
    explanation: {
      en: "Odoo 19 quotation templates store preset lines, terms, optional products, and online confirmation options. Select a template in the Quotation Template field when creating a new quotation.",
      fr: "Les modèles de devis Odoo 19 stockent lignes prédéfinies, conditions, produits optionnels et options de confirmation en ligne. Sélectionner un modèle dans le champ « Modèle de devis » lors de la création d'un devis.",
    },
  }),
  complexQ({
    id: "sal-009",
    module: "sales",
    text: {
      en: "What does the margin displayed on a sales order line represent in Odoo 19?",
      fr: "Que représente la marge affichée sur une ligne de commande de vente dans Odoo 19 ?",
    },
    correct: {
      en: "The difference between the unit sales price (after discount) and the product cost configured on the product form",
      fr: "La différence entre le prix de vente unitaire (après remise) et le coût du produit configuré sur la fiche produit",
    },
    distractors: [
      {
        en: "The tax amount calculated from the fiscal position applied to the order line before invoice confirmation",
        fr: "Le montant de taxe calculé depuis la position fiscale appliquée à la ligne de commande avant confirmation de la facture",
      },
      {
        en: "The salesperson commission percentage configured on the sales team's invoicing target dashboard card",
        fr: "Le pourcentage de commission du commercial configuré sur la carte d'objectif de facturation de l'équipe commerciale",
      },
      {
        en: "The remaining stock valuation (FIFO) for the product variant at the warehouse linked to the delivery order",
        fr: "La valorisation stock restante (FIFO) de la variante produit à l'entrepôt lié au bon de livraison",
      },
    ],
    explanation: {
      en: "Odoo 19 computes line margin from sales price minus product cost (standard or from inventory valuation method). Margin reporting helps analyze profitability per order.",
      fr: "Odoo 19 calcule la marge ligne par prix de vente moins coût produit (standard ou selon la méthode de valorisation stock). Le reporting marge aide à analyser la rentabilité par commande.",
    },
  }),
  complexQ({
    id: "sal-010",
    module: "sales",
    text: {
      en: "How do you send a quotation to the customer from Odoo 19 Sales?",
      fr: "Comment envoyer un devis au client depuis Ventes Odoo 19 ?",
    },
    correct: {
      en: "Click Send by Email; Odoo opens a compose window with the quotation PDF attached using the sales mail template",
      fr: "Cliquer sur « Envoyer par e-mail » ; Odoo ouvre une fenêtre de composition avec le PDF du devis en pièce jointe via le modèle e-mail ventes",
    },
    distractors: [
      {
        en: "Click Print and manually attach the PDF from the customer's chatter; Odoo does not send sales documents by email",
        fr: "Cliquer sur Imprimer et joindre manuellement le PDF depuis le chatter du client ; Odoo n'envoie pas les documents commerciaux par e-mail",
      },
      {
        en: "Share the quotation via the customer portal link only after clicking Confirm; draft quotations cannot be emailed",
        fr: "Partager le devis via le lien portail client uniquement après Confirmer ; les devis brouillon ne peuvent pas être envoyés par e-mail",
      },
      {
        en: "Use the Confirmation Mail configured on the quotation template; it sends automatically when the quotation is saved",
        fr: "Utiliser l'« E-mail de confirmation » configuré sur le modèle de devis ; il s'envoie automatiquement à l'enregistrement du devis",
      },
    ],
    explanation: {
      en: "Odoo 19 Send by Email generates the quotation PDF and sends it to the customer. Online signature and payment options can be included when enabled in settings or on the quotation.",
      fr: "« Envoyer par e-mail » Odoo 19 génère le PDF du devis et l'envoie au client. Les options signature et paiement en ligne peuvent être incluses si activées dans les paramètres ou sur le devis.",
    },
  }),
  complexQ({
    id: "sal-011",
    module: "sales",
    text: {
      en: "What is online signature on an Odoo 19 sales quotation?",
      fr: "Qu'est-ce que la signature en ligne sur un devis Odoo 19 ?",
    },
    correct: {
      en: "The customer electronically signs the quotation via the portal (Auto, Draw, or Load), confirming the sales order",
      fr: "Le client signe électroniquement le devis via le portail (Auto, Dessiner ou Charger), confirmant la commande client",
    },
    distractors: [
      {
        en: "An internal approval signature required from the sales manager before the Confirm button becomes available on the quotation",
        fr: "Une signature d'approbation interne du responsable commercial avant que le bouton Confirmer ne soit disponible sur le devis",
      },
      {
        en: "The warehouse operator signature captured on the delivery order validation screen in the Inventory app",
        fr: "La signature de l'opérateur entrepôt capturée à la validation du bon de livraison dans l'application Inventaire",
      },
      {
        en: "A digital certificate applied to the customer invoice PDF after posting, not to the quotation document",
        fr: "Un certificat numérique appliqué au PDF de facture client après comptabilisation, pas au document de devis",
      },
    ],
    explanation: {
      en: "Odoo 19 Online Signature (Sales ‣ Configuration ‣ Settings) lets customers sign via the portal Sign & Pay button. The signed document is visible in the Customer Signature tab in developer mode.",
      fr: "La signature en ligne Odoo 19 (Ventes ‣ Configuration ‣ Paramètres) permet au client de signer via le bouton « Signer et payer » du portail. Le document signé est visible dans l'onglet Signature client en mode développeur.",
    },
  }),
  complexQ({
    id: "sal-012",
    module: "sales",
    text: {
      en: "What does the Invoicing Policy Invoice what is ordered mean on an Odoo 19 product?",
      fr: "Que signifie la politique de facturation « Facturer sur quantités commandées » sur un produit Odoo 19 ?",
    },
    correct: {
      en: "Customers can be invoiced for the full ordered quantity once the sales order is confirmed, regardless of delivery",
      fr: "Le client peut être facturé pour la quantité commandée complète dès la confirmation de la commande, indépendamment de la livraison",
    },
    distractors: [
      {
        en: "Invoicing is blocked until the delivery order is validated and the Delivered quantity matches the Ordered quantity",
        fr: "La facturation est bloquée tant que le bon de livraison n'est pas validé et que la quantité livrée correspond à la quantité commandée",
      },
      {
        en: "Only down payment invoices can be created until the manufacturing order linked to the sales line is completed",
        fr: "Seules des factures d'acompte peuvent être créées tant que l'ordre de fabrication lié à la ligne de vente n'est pas terminé",
      },
      {
        en: "Invoice lines are generated from timesheet hours logged on the linked project task rather than from order quantities",
        fr: "Les lignes de facture sont générées depuis les heures de feuille de temps du projet lié plutôt que depuis les quantités commandées",
      },
    ],
    explanation: {
      en: "Odoo 19 default invoicing policy is Invoice what is ordered. Create Invoice is available immediately after sales order confirmation without requiring delivery validation.",
      fr: "La politique par défaut Odoo 19 est « Facturer sur quantités commandées ». « Créer une facture » est disponible dès la confirmation de la commande sans validation de livraison.",
    },
  }),
  complexQ({
    id: "sal-013",
    module: "sales",
    text: {
      en: "What does the Invoicing Policy Invoice what is delivered mean on an Odoo 19 product?",
      fr: "Que signifie la politique de facturation « Facturer sur quantités livrées » sur un produit Odoo 19 ?",
    },
    correct: {
      en: "Customers are invoiced only for quantities that have been delivered and validated on the delivery order",
      fr: "Le client est facturé uniquement pour les quantités livrées et validées sur le bon de livraison",
    },
    distractors: [
      {
        en: "The full sales order quantity is invoiced at confirmation, with a credit note issued for undelivered quantities later",
        fr: "La quantité totale de la commande est facturée à la confirmation, avec un avoir émis plus tard pour les quantités non livrées",
      },
      {
        en: "Invoicing follows the vendor bill control policy On received quantities from the product's Purchase tab",
        fr: "La facturation suit la politique de contrôle « Sur quantités reçues » de l'onglet Achats du produit",
      },
      {
        en: "Automatic Invoice posts the customer invoice when online payment is confirmed, even before any picking is validated",
        fr: "La « Facturation automatique » comptabilise la facture client à la confirmation du paiement en ligne, même avant validation d'un transfert",
      },
    ],
    explanation: {
      en: "Odoo 19 Invoice what is delivered ties invoicing to validated shipments. Attempting to invoice without validating delivery returns an error. Partial deliveries support backorders and partial invoicing.",
      fr: "« Facturer sur quantités livrées » Odoo 19 lie la facturation aux expéditions validées. Tenter de facturer sans livraison validée génère une erreur. Les livraisons partielles gèrent reliquats et facturation partielle.",
    },
  }),
  complexQ({
    id: "sal-014",
    module: "sales",
    text: {
      en: "How are product variants handled on an Odoo 19 sales order line?",
      fr: "Comment les variantes de produit sont-elles gérées sur une ligne de commande Odoo 19 ?",
    },
    correct: {
      en: "The user selects the specific product variant on the line; each variant has its own price, stock, and attributes",
      fr: "L'utilisateur sélectionne la variante produit spécifique sur la ligne ; chaque variante a son prix, stock et attributs propres",
    },
    distractors: [
      {
        en: "Variants are selected only on the delivery order; the sales order line always references the product template",
        fr: "Les variantes sont sélectionnées uniquement sur le bon de livraison ; la ligne de commande référence toujours le modèle de produit",
      },
      {
        en: "All variants share the template sales price; attribute value extras are added manually as separate section lines",
        fr: "Toutes les variantes partagent le prix du modèle ; les extras d'attributs sont ajoutés manuellement comme lignes de section séparées",
      },
      {
        en: "Variant selection is available only on eCommerce orders; backend quotations always sell the first variant created",
        fr: "La sélection de variante n'est disponible que sur les commandes eCommerce ; les devis backend vendent toujours la première variante créée",
      },
    ],
    explanation: {
      en: "Odoo 19 sales order lines reference a specific product variant with its own price and stock. Product configurator on quotations lets customers choose attribute combinations.",
      fr: "Les lignes de commande Odoo 19 référencent une variante produit spécifique avec son prix et stock propres. Le configurateur produit sur les devis permet au client de choisir les combinaisons d'attributs.",
    },
  }),
  complexQ({
    id: "sal-015",
    module: "sales",
    text: {
      en: "What is the effect of assigning a salesperson on an Odoo 19 sales order?",
      fr: "Quel est l'effet d'assigner un commercial sur une commande de vente Odoo 19 ?",
    },
    correct: {
      en: "Revenue is attributed to the salesperson for reporting, commission tracking, and sales performance analysis",
      fr: "Le chiffre d'affaires est attribué au commercial pour les rapports, le suivi des commissions et l'analyse de performance",
    },
    distractors: [
      {
        en: "The salesperson's default pricelist overrides the customer's pricelist on every order line automatically",
        fr: "La liste de prix par défaut du commercial remplace automatiquement celle du client sur chaque ligne de commande",
      },
      {
        en: "Delivery orders are restricted to the warehouse linked to the salesperson's employee record in HR",
        fr: "Les bons de livraison sont limités à l'entrepôt lié à la fiche employé du commercial dans RH",
      },
      {
        en: "The order is automatically shared with the salesperson's CRM pipeline as a Won opportunity upon confirmation",
        fr: "La commande est automatiquement partagée dans le pipeline CRM du commercial comme opportunité Gagnée à la confirmation",
      },
    ],
    explanation: {
      en: "Odoo 19 salesperson field on sales orders enables filtering and analysis in Sales reporting. It links commercial activity to the responsible user without altering pricing or logistics.",
      fr: "Le champ Commercial sur les commandes Odoo 19 permet le filtrage et l'analyse dans les rapports Ventes. Il lie l'activité commerciale à l'utilisateur responsable sans modifier tarifs ni logistique.",
    },
  }),
  complexQ({
    id: "sal-016",
    module: "sales",
    text: {
      en: "What are payment terms on an Odoo 19 sales order?",
      fr: "Que sont les conditions de paiement sur une commande de vente Odoo 19 ?",
    },
    correct: {
      en: "Rules defining invoice due dates and installment schedules (e.g. 30 days, 30 % now / 70 % in 60 days)",
      fr: "Règles définissant les échéances de facture et les calendriers d'acomptes (ex. 30 jours, 30 % maintenant / 70 % à 60 jours)",
    },
    distractors: [
      {
        en: "The Online Payment percentage required on the quotation template before the customer can sign the order",
        fr: "Le pourcentage de Paiement en ligne requis sur le modèle de devis avant que le client puisse signer la commande",
      },
      {
        en: "Incoterms defining international transport responsibilities between buyer and seller on cross-border deliveries",
        fr: "Les Incoterms définissant les responsabilités de transport international entre acheteur et vendeur pour les livraisons transfrontalières",
      },
      {
        en: "The Quotation Validity period in days configured on the quotation template before the offer expires",
        fr: "La période de Validité du devis en jours configurée sur le modèle de devis avant expiration de l'offre",
      },
    ],
    explanation: {
      en: "Odoo 19 payment terms control due dates on customer invoices generated from sales orders. They are configured under Accounting/Invoicing ‣ Configuration ‣ Payment Terms.",
      fr: "Les conditions de paiement Odoo 19 contrôlent les échéances des factures client générées depuis les commandes. Elles se configurent dans Comptabilité/Facturation ‣ Configuration ‣ Conditions de paiement.",
    },
  }),
  complexQ({
    id: "sal-017",
    module: "sales",
    text: {
      en: "How do you process a customer return linked to a sales order in Odoo 19?",
      fr: "Comment traiter un retour client lié à une commande de vente dans Odoo 19 ?",
    },
    correct: {
      en: "Open the delivery order and use Return to create a reverse transfer; optionally issue a credit note for refund",
      fr: "Ouvrir le bon de livraison et utiliser « Retour » pour créer un transfert inverse ; émettre éventuellement un avoir pour remboursement",
    },
    distractors: [
      {
        en: "Cancel the sales order from the Action menu; Odoo automatically reverses all posted invoices and validated deliveries",
        fr: "Annuler la commande via le menu Action ; Odoo inverse automatiquement toutes les factures comptabilisées et livraisons validées",
      },
      {
        en: "Create a new quotation with negative quantities and confirm it to generate a return picking and credit note",
        fr: "Créer un nouveau devis avec des quantités négatives et le confirmer pour générer un transfert retour et un avoir",
      },
      {
        en: "Use the CRM Lost action on the linked opportunity; returns are tracked exclusively in the CRM pipeline",
        fr: "Utiliser l'action Perdu du CRM sur l'opportunité liée ; les retours sont suivis exclusivement dans le pipeline CRM",
      },
    ],
    explanation: {
      en: "Odoo 19 return operations reverse delivery stock moves from the delivery order. Credit notes in Accounting handle financial refunds linked to the returned quantities.",
      fr: "Les opérations de retour Odoo 19 inversent les mouvements de stock depuis le bon de livraison. Les avoirs en Comptabilité gèrent les remboursements financiers liés aux quantités retournées.",
    },
  }),
  complexQ({
    id: "sal-018",
    module: "sales",
    text: {
      en: "What are Incoterms used for on an Odoo 19 sales order?",
      fr: "À quoi servent les Incoterms sur une commande de vente Odoo 19 ?",
    },
    correct: {
      en: "To define international trade responsibilities for transport, insurance, and customs between buyer and seller",
      fr: "À définir les responsabilités commerciales internationales pour le transport, l'assurance et la douane entre acheteur et vendeur",
    },
    distractors: [
      {
        en: "To set the default warehouse route (Buy vs Manufacture) applied when the sales order is confirmed",
        fr: "À définir la route d'entrepôt par défaut (Acheter vs Fabriquer) appliquée à la confirmation de la commande",
      },
      {
        en: "To determine which fiscal position and tax mapping is applied to each order line for domestic sales",
        fr: "À déterminer quelle position fiscale et quel mappage de taxes s'appliquent à chaque ligne pour les ventes domestiques",
      },
      {
        en: "To configure the Quotation Validity deadline after which the customer portal link expires automatically",
        fr: "À configurer l'échéance de Validité du devis après laquelle le lien portail client expire automatiquement",
      },
    ],
    explanation: {
      en: "Odoo 19 Incoterms on sales orders clarify shipping cost and risk allocation in international trade (e.g. EXW, FOB, DDP). They appear on quotations and delivery documents.",
      fr: "Les Incoterms Odoo 19 sur les commandes précisent la répartition des coûts et risques d'expédition dans le commerce international (ex. EXW, FOB, DDP). Ils figurent sur les devis et documents de livraison.",
    },
  }),
  complexQ({
    id: "sal-019",
    module: "sales",
    text: {
      en: "What is the purpose of locking a sales order (Done/Locked status) in Odoo 19?",
      fr: "À quoi sert le verrouillage d'une commande de vente (statut Terminé/Verrouillé) dans Odoo 19 ?",
    },
    correct: {
      en: "To prevent further modifications to lines, prices, and quantities once the order is fully processed",
      fr: "À empêcher toute modification des lignes, prix et quantités une fois la commande entièrement traitée",
    },
    distractors: [
      {
        en: "To automatically validate all pending delivery orders and post draft invoices without user confirmation",
        fr: "À valider automatiquement tous les bons de livraison en attente et comptabiliser les factures brouillon sans confirmation",
      },
      {
        en: "To transfer the order to the Purchase app as a dropship RFQ linked to the original customer delivery address",
        fr: "À transférer la commande vers Achats comme demande de prix dropshipping liée à l'adresse de livraison client d'origine",
      },
      {
        en: "To archive the customer contact and remove the order from Sales Analysis reporting permanently",
        fr: "À archiver le contact client et retirer définitivement la commande des rapports Analyse des ventes",
      },
    ],
    explanation: {
      en: "Odoo 19 locking protects completed sales orders from accidental edits. Locked orders retain their delivery, invoicing, and payment history for audit purposes.",
      fr: "Le verrouillage Odoo 19 protège les commandes finalisées contre les modifications accidentelles. Les commandes verrouillées conservent leur historique livraison, facturation et paiement pour l'audit.",
    },
  }),
  complexQ({
    id: "sal-020",
    module: "sales",
    text: {
      en: "How can a customer pay an invoice online from a sales order in Odoo 19?",
      fr: "Comment un client peut-il payer une facture en ligne depuis une commande de vente Odoo 19 ?",
    },
    correct: {
      en: "Through the customer portal with configured payment providers (acquirers) linked to posted invoices or quotations",
      fr: "Via le portail client avec des prestataires de paiement (acquéreurs) configurés liés aux factures comptabilisées ou devis",
    },
    distractors: [
      {
        en: "By registering payment in the sales order chatter; portal users cannot access payment acquirers directly",
        fr: "En enregistrant le paiement dans le chatter de la commande ; les utilisateurs portail ne peuvent pas accéder aux acquéreurs",
      },
      {
        en: "Through the Point of Sale app session opened from the sales order Action menu for eCommerce orders only",
        fr: "Via une session Point de Vente ouverte depuis le menu Action de la commande pour les commandes eCommerce uniquement",
      },
      {
        en: "By confirming the quotation with Online Signature only; payment providers require full Accounting module bank reconciliation",
        fr: "En confirmant le devis avec Signature en ligne uniquement ; les prestataires de paiement exigent le rapprochement bancaire du module Comptabilité complet",
      },
    ],
    explanation: {
      en: "Odoo 19 customer portal lets clients view orders and pay invoices via integrated payment acquirers (Website ‣ Configuration ‣ Payment Providers). Online Payment on quotations can also confirm orders.",
      fr: "Le portail client Odoo 19 permet de consulter les commandes et payer les factures via les acquéreurs intégrés (Site web ‣ Configuration ‣ Prestataires de paiement). Le Paiement en ligne sur les devis peut aussi confirmer les commandes.",
    },
  }),
];
