import { complexQ } from "./helpers";

export const accountingQuestions = [
  complexQ({
    id: "acc-001",
    module: "accounting",
    text: {
      en: "What is the main difference between the Invoicing app and the full Accounting app in Odoo 19?",
      fr: "Quelle est la principale différence entre l'app Facturation et l'app Comptabilité complète dans Odoo 19 ?",
    },
    correct: {
      en: "Invoicing handles customer/vendor bills and payments; Accounting adds full bookkeeping, reconciliation, and financial reports",
      fr: "Facturation gère factures clients/fournisseurs et paiements ; Comptabilité ajoute tenue complète, rapprochement et rapports financiers",
    },
    distractors: [
      {
        en: "Invoicing includes payroll and fixed assets; Accounting is limited to draft quotations only",
        fr: "Facturation inclut paie et immobilisations ; Comptabilité se limite aux devis brouillon uniquement",
      },
      {
        en: "Both apps share identical menus, but Invoicing hides the partner field on customer invoices",
        fr: "Les deux apps partagent des menus identiques, mais Facturation masque le champ partenaire sur factures clients",
      },
      {
        en: "Accounting replaces Sales and cannot create customer invoices from confirmed sales orders",
        fr: "Comptabilité remplace Ventes et ne peut pas créer de factures clients depuis des commandes confirmées",
      },
    ],
    explanation: {
      en: "Invoicing is a streamlined billing app; Accounting provides the complete chart of accounts, journals, reconciliation, and reporting.",
      fr: "Facturation est une app de facturation simplifiée ; Comptabilité fournit plan comptable, journaux, rapprochement et reporting complets.",
    },
  }),
  complexQ({
    id: "acc-002",
    module: "accounting",
    text: {
      en: "How do you register a customer payment against a posted invoice in Odoo 19?",
      fr: "Comment enregistrer un paiement client sur une facture comptabilisée dans Odoo 19 ?",
    },
    correct: {
      en: "Click Register Payment on the invoice and reconcile it with the bank or cash journal",
      fr: "Cliquer sur Enregistrer le paiement sur la facture et le rapprocher avec le journal banque ou caisse",
    },
    distractors: [
      {
        en: "Create a separate sales quotation and confirm it to offset the open invoice balance automatically",
        fr: "Créer un devis vente séparé et le confirmer pour compenser automatiquement le solde ouvert de la facture",
      },
      {
        en: "Post a manual inventory adjustment crediting the receivable account without a payment journal entry",
        fr: "Comptabiliser un ajustement inventaire manuel créditant le compte client sans écriture de journal de paiement",
      },
      {
        en: "Change the invoice partner on the posted document and reset it to draft to clear the amount due",
        fr: "Changer le partenaire sur la facture comptabilisée et la repasser en brouillon pour effacer le montant dû",
      },
    ],
    explanation: {
      en: "Register Payment creates a payment linked to the invoice and reconciles it against the receivable line.",
      fr: "Enregistrer le paiement crée un paiement lié à la facture et le rapproche avec la ligne client.",
    },
  }),
  complexQ({
    id: "acc-003",
    module: "accounting",
    text: {
      en: "What is an accounting journal in Odoo 19?",
      fr: "Qu'est-ce qu'un journal comptable dans Odoo 19 ?",
    },
    correct: {
      en: "A ledger bucket grouping entries of the same nature (Sales, Purchase, Bank, Cash, Miscellaneous)",
      fr: "Un regroupement comptable d'écritures de même nature (Ventes, Achats, Banque, Caisse, Divers)",
    },
    distractors: [
      {
        en: "A Knowledge article category used to store internal accounting policy documentation for employees",
        fr: "Une catégorie d'articles Knowledge stockant la documentation interne des politiques comptables employés",
      },
      {
        en: "A CRM pipeline stage sequence tracking opportunity progression from New to Won",
        fr: "Une séquence d'étapes pipeline CRM suivant la progression des opportunités de Nouveau à Gagné",
      },
      {
        en: "A warehouse operation type defining whether stock moves are receipts, deliveries, or internal transfers",
        fr: "Un type d'opération entrepôt définissant si les mouvements sont réceptions, livraisons ou transferts internes",
      },
    ],
    explanation: {
      en: "Journals classify accounting entries (sales, purchases, bank, cash, miscellaneous) and drive sequence numbering.",
      fr: "Les journaux classent les écritures (ventes, achats, banque, caisse, divers) et gèrent la numérotation.",
    },
  }),
  complexQ({
    id: "acc-004",
    module: "accounting",
    text: {
      en: "How does bank reconciliation work in Odoo 19?",
      fr: "Comment fonctionne le rapprochement bancaire dans Odoo 19 ?",
    },
    correct: {
      en: "Match bank statement lines to payments, invoices, or counterpart accounts using suggested or manual reconciliation",
      fr: "Rapprocher les lignes de relevé bancaire aux paiements, factures ou comptes contrepartie via suggestions ou rapprochement manuel",
    },
    distractors: [
      {
        en: "Delete unmatched bank transactions from the journal and recreate them as sales quotations",
        fr: "Supprimer les transactions bancaires non rapprochées du journal et les recréer comme devis vente",
      },
      {
        en: "Export the bank journal to a spreadsheet and re-import it to replace all existing journal items",
        fr: "Exporter le journal banque vers une feuille de calcul et le réimporter pour remplacer toutes les lignes existantes",
      },
      {
        en: "Post customer invoices directly from the bank feed without creating bank statement lines first",
        fr: "Comptabiliser des factures clients directement depuis le flux bancaire sans créer de lignes de relevé",
      },
    ],
    explanation: {
      en: "Bank reconciliation matches imported statement lines to existing entries or creates counterpart items via reconciliation models.",
      fr: "Le rapprochement bancaire associe les lignes importées aux écritures existantes ou crée des contreparties via modèles.",
    },
  }),
  complexQ({
    id: "acc-005",
    module: "accounting",
    text: {
      en: "What is a customer credit note in Odoo 19 Accounting?",
      fr: "Qu'est-ce qu'un avoir client dans Comptabilité Odoo 19 ?",
    },
    correct: {
      en: "A reversal document that cancels or reduces all or part of a posted customer invoice",
      fr: "Un document d'annulation qui annule ou réduit tout ou partie d'une facture client comptabilisée",
    },
    distractors: [
      {
        en: "A vendor bill duplicate created when the supplier sends a second PDF with identical line amounts",
        fr: "Un doublon de facture fournisseur créé quand le fournisseur envoie un second PDF avec montants identiques",
      },
      {
        en: "A down payment sales order line invoiced before delivery to collect an advance from the customer",
        fr: "Une ligne de commande d'acompte facturée avant livraison pour collecter une avance du client",
      },
      {
        en: "An internal memo journal entry on the Miscellaneous journal with no partner or tax impact",
        fr: "Une écriture mémo interne sur le journal Divers sans partenaire ni impact fiscal",
      },
    ],
    explanation: {
      en: "Credit notes correct or refund customer invoices, generating reversing entries in the sales journal.",
      fr: "Les avoirs corrigent ou remboursent des factures clients en générant des écritures d'annulation au journal des ventes.",
    },
  }),
  complexQ({
    id: "acc-006",
    module: "accounting",
    text: {
      en: "Where are customer and vendor taxes typically configured for products in Odoo 19?",
      fr: "Où configure-t-on généralement les taxes client et fournisseur des produits dans Odoo 19 ?",
    },
    correct: {
      en: "On the product form (Customer Taxes / Vendor Taxes) and optionally overridden on invoice lines",
      fr: "Sur la fiche produit (Taxes client / Taxes fournisseur) avec possibilité de surcharge sur les lignes de facture",
    },
    distractors: [
      {
        en: "Exclusively on employee contracts in Payroll where salary rules define VAT percentages per product",
        fr: "Exclusivement sur les contrats employés en Paie où les règles salariales définissent les pourcentages TVA par produit",
      },
      {
        en: "Only on warehouse routes so taxes change automatically when a delivery order is validated",
        fr: "Uniquement sur les routes d'entrepôt pour que les taxes changent à la validation du bon de livraison",
      },
      {
        en: "In the Website theme settings where each page template carries a default tax group for all items",
        fr: "Dans les paramètres de thème Website où chaque modèle de page porte un groupe de taxes par défaut",
      },
    ],
    explanation: {
      en: "Taxes are set on products and fiscal positions; they flow to invoice lines and can be adjusted per line.",
      fr: "Les taxes se définissent sur les produits et positions fiscales ; elles se propagent aux lignes et peuvent être ajustées.",
    },
  }),
  complexQ({
    id: "acc-007",
    module: "accounting",
    text: {
      en: "What is analytic accounting used for in Odoo 19?",
      fr: "À quoi sert la comptabilité analytique dans Odoo 19 ?",
    },
    correct: {
      en: "Allocate revenues and costs to analytic accounts (projects, departments) via analytic distribution on lines",
      fr: "Allouer produits et charges à des comptes analytiques (projets, départements) via distribution analytique sur les lignes",
    },
    distractors: [
      {
        en: "Generate the statutory balance sheet and profit-and-loss statements required by tax authorities only",
        fr: "Générer uniquement le bilan légal et le compte de résultat exigés par les autorités fiscales",
      },
      {
        en: "Track employee leave balances and accrue vacation days on the miscellaneous accounting journal",
        fr: "Suivre les soldes de congés employés et constater les jours de vacances sur le journal comptable divers",
      },
      {
        en: "Replace inventory valuation by posting stock quantities directly to the general ledger without accounts",
        fr: "Remplacer la valorisation stock en comptabilisant les quantités directement au grand livre sans comptes",
      },
    ],
    explanation: {
      en: "Analytic distribution on invoice and journal lines tracks amounts by project, department, or other analytic axes.",
      fr: "La distribution analytique sur factures et écritures suit les montants par projet, département ou autre axe analytique.",
    },
  }),
  complexQ({
    id: "acc-008",
    module: "accounting",
    text: {
      en: "How do you lock a fiscal period to prevent changes to posted entries in Odoo 19?",
      fr: "Comment verrouiller une période fiscale pour empêcher la modification d'écritures comptabilisées dans Odoo 19 ?",
    },
    correct: {
      en: "Set lock dates under Accounting ‣ Accounting ‣ Lock Dates (adviser and/or hard lock)",
      fr: "Définir des dates de verrouillage dans Comptabilité ‣ Comptabilité ‣ Dates de verrouillage (conseiller et/ou verrou total)",
    },
    distractors: [
      {
        en: "Archive all users except administrators so only the superuser can edit historical journal entries",
        fr: "Archiver tous les utilisateurs sauf administrateurs pour que seul le superutilisateur modifie les écritures historiques",
      },
      {
        en: "Disable the Sales app module which automatically freezes all customer invoices dated before today",
        fr: "Désactiver le module Ventes ce qui fige automatiquement toutes les factures clients antérieures à aujourd'hui",
      },
      {
        en: "Set the company currency to a new code which invalidates all prior multi-currency transactions",
        fr: "Changer le code devise société ce qui invalide automatiquement toutes les transactions multi-devises antérieures",
      },
    ],
    explanation: {
      en: "Lock dates restrict editing and cancellation of entries on or before the configured date for advisers or all users.",
      fr: "Les dates de verrouillage restreignent la modification et l'annulation des écritures à la date configurée pour conseillers ou tous.",
    },
  }),
  complexQ({
    id: "acc-009",
    module: "accounting",
    text: {
      en: "Which standard financial report presents assets, liabilities, and equity at a given date?",
      fr: "Quel rapport financier standard présente l'actif, le passif et les capitaux propres à une date donnée ?",
    },
    correct: {
      en: "The Balance Sheet report in the Accounting reporting menu",
      fr: "Le rapport Bilan (Balance Sheet) dans le menu de reporting Comptabilité",
    },
    distractors: [
      {
        en: "The Aged Receivable report listing open customer invoice balances sorted by due date buckets",
        fr: "Le rapport Balance âgée clients listant les soldes de factures ouvertes triés par tranches d'échéance",
      },
      {
        en: "The General Ledger report showing every journal item debit and credit in chronological order",
        fr: "Le rapport Grand livre affichant chaque ligne d'écriture débit et crédit par ordre chronologique",
      },
      {
        en: "The Partner Ledger report detailing all vendor bill payments matched during bank reconciliation",
        fr: "Le rapport Grand livre partenaire détaillant tous les paiements de factures fournisseurs rapprochés en banque",
      },
    ],
    explanation: {
      en: "The Balance Sheet summarizes the company's financial position (assets, liabilities, equity) at a specific date.",
      fr: "Le bilan résume la situation patrimoniale (actif, passif, capitaux propres) de l'entreprise à une date donnée.",
    },
  }),
  complexQ({
    id: "acc-010",
    module: "accounting",
    text: {
      en: "How can vendor bills be digitized in Odoo 19 Accounting?",
      fr: "Comment numériser des factures fournisseurs dans Comptabilité Odoo 19 ?",
    },
    correct: {
      en: "Upload scans or email bills to the accounting inbox for AI/OCR extraction of header and line data",
      fr: "Téléverser des scans ou envoyer des factures par e-mail vers la boîte comptable pour extraction IA/OCR des données",
    },
    distractors: [
      {
        en: "Scan barcodes on delivery slips in Inventory which auto-generates vendor bills from stock moves only",
        fr: "Scanner des codes-barres sur les bons de livraison Inventaire qui génère uniquement des factures depuis les mouvements stock",
      },
      {
        en: "Import vendor bills exclusively through the Point of Sale closing session cash control wizard",
        fr: "Importer des factures fournisseurs exclusivement via l'assistant de contrôle de caisse de clôture POS",
      },
      {
        en: "Create vendor bills by duplicating customer invoices and swapping the partner field manually each time",
        fr: "Créer des factures fournisseurs en dupliquant des factures clients et en inversant le partenaire manuellement",
      },
    ],
    explanation: {
      en: "Document digitization extracts vendor bill fields from uploaded or emailed documents for user validation before posting.",
      fr: "La numérisation extrait les champs de factures fournisseurs depuis documents téléversés ou e-mail pour validation avant comptabilisation.",
    },
  }),
  complexQ({
    id: "acc-011",
    module: "accounting",
    text: {
      en: "What is partner reconciliation (matching) on receivable/payable accounts in Odoo 19?",
      fr: "Qu'est-ce que le lettrage (rapprochement) des comptes clients/fournisseurs dans Odoo 19 ?",
    },
    correct: {
      en: "Linking invoice and payment journal items for the same partner to clear open balances on their account",
      fr: "Lier les lignes de factures et paiements d'un même partenaire pour solder les soldes ouverts de son compte",
    },
    distractors: [
      {
        en: "Merging duplicate partner records in Contacts so only one customer card remains in the database",
        fr: "Fusionner les fiches partenaires en doublon dans Contacts pour ne garder qu'une fiche client en base",
      },
      {
        en: "Printing PDF invoices and storing them in the Documents app without affecting accounting balances",
        fr: "Imprimer des factures PDF et les stocker dans l'app Documents sans impact sur les soldes comptables",
      },
      {
        en: "Assigning a salesperson to each partner so CRM opportunities auto-reconcile with bank statement lines",
        fr: "Assigner un commercial à chaque partenaire pour que les opportunités CRM rapprochent automatiquement les relevés bancaires",
      },
    ],
    explanation: {
      en: "Reconciliation matches debit and credit items on a partner's receivable or payable account to track what remains open.",
      fr: "Le lettrage rapproche lignes débit et crédit sur le compte client ou fournisseur du partenaire pour suivre le solde ouvert.",
    },
  }),
  complexQ({
    id: "acc-012",
    module: "accounting",
    text: {
      en: "How do you enable transactions in foreign currencies in Odoo 19?",
      fr: "Comment activer les transactions en devises étrangères dans Odoo 19 ?",
    },
    correct: {
      en: "Activate multi-currency, add currencies, and maintain exchange rates (manual or automatic providers)",
      fr: "Activer le multi-devises, ajouter des devises et maintenir les taux de change (manuels ou fournisseurs automatiques)",
    },
    distractors: [
      {
        en: "Create a separate Odoo database for each currency and synchronize partners through CSV imports nightly",
        fr: "Créer une base Odoo séparée par devise et synchroniser les partenaires via imports CSV chaque nuit",
      },
      {
        en: "Set every product sale price in the secondary currency and disable the company currency entirely",
        fr: "Définir chaque prix de vente produit en devise secondaire et désactiver entièrement la devise société",
      },
      {
        en: "Configure multi-currency only on the Inventory app so stock valuations ignore exchange rate differences",
        fr: "Configurer le multi-devises uniquement sur Inventaire pour que les valorisations stock ignorent les écarts de change",
      },
    ],
    explanation: {
      en: "Odoo stores amounts in company currency and foreign currency, generating exchange difference entries on reconciliation.",
      fr: "Odoo stocke les montants en devise société et devise transaction, générant des écarts de change au rapprochement.",
    },
  }),
  complexQ({
    id: "acc-013",
    module: "accounting",
    text: {
      en: "What is a journal entry (account move) in Odoo 19 Accounting?",
      fr: "Qu'est-ce qu'une écriture comptable (account move) dans Comptabilité Odoo 19 ?",
    },
    correct: {
      en: "A balanced set of debit and credit lines posted in a specific journal on a given accounting date",
      fr: "Un ensemble équilibré de lignes débit et crédit comptabilisé dans un journal donné à une date comptable",
    },
    distractors: [
      {
        en: "An unconfirmed sales quotation stored in the Sales app before any stock move is generated",
        fr: "Un devis vente non confirmé stocké dans l'app Ventes avant toute génération de mouvement de stock",
      },
      {
        en: "A project task timesheet entry awaiting manager approval in the Project application",
        fr: "Une saisie de feuille de temps projet en attente d'approbation manager dans l'app Projet",
      },
      {
        en: "A purchase RFQ sent to vendors that automatically posts to the expense account upon email delivery",
        fr: "Une demande de prix achat envoyée aux fournisseurs qui se comptabilise automatiquement au compte de charge à l'envoi",
      },
    ],
    explanation: {
      en: "Each journal entry contains balanced journal items (total debits equal total credits) recorded in one journal.",
      fr: "Chaque écriture contient des lignes équilibrées (total débits = total crédits) enregistrées dans un journal.",
    },
  }),
  complexQ({
    id: "acc-014",
    module: "accounting",
    text: {
      en: "How do you prepare a VAT/tax return in Odoo 19?",
      fr: "Comment préparer une déclaration de TVA dans Odoo 19 ?",
    },
    correct: {
      en: "Use localization tax reports (e.g., Tax Report, VAT return) based on posted invoice and bill tax lines",
      fr: "Utiliser les rapports fiscaux de localisation (ex. rapport de taxes, déclaration TVA) basés sur les lignes de taxes comptabilisées",
    },
    distractors: [
      {
        en: "Sum all sales order line subtotals in the Quotation state and export them to a spreadsheet template",
        fr: "Additionner tous les sous-totaux de lignes de commande à l'état Devis et les exporter vers un modèle tableur",
      },
      {
        en: "Run the Manufacturing cost analysis report and multiply scrap quantities by the default tax rate",
        fr: "Exécuter le rapport d'analyse des coûts Fabrication et multiplier les quantités rebut par le taux de taxe par défaut",
      },
      {
        en: "Filter the partner ledger by country and post a miscellaneous entry equal to total receivable balances",
        fr: "Filtrer le grand livre partenaire par pays et comptabiliser une écriture diverse égale aux soldes clients totaux",
      },
    ],
    explanation: {
      en: "Tax reports aggregate posted tax amounts from invoices and bills according to the company's fiscal localization.",
      fr: "Les rapports fiscaux agrègent les montants de taxes comptabilisés sur factures selon la localisation fiscale de la société.",
    },
  }),
  complexQ({
    id: "acc-015",
    module: "accounting",
    text: {
      en: "What happens when you post (confirm) a customer invoice in Odoo 19 Accounting?",
      fr: "Que se passe-t-il lors de la comptabilisation (confirmation) d'une facture client dans Comptabilité Odoo 19 ?",
    },
    correct: {
      en: "Accounting entries are created in the sales journal (revenue, receivable, and tax lines)",
      fr: "Des écritures comptables sont créées au journal des ventes (produits, client et lignes de taxes)",
    },
    distractors: [
      {
        en: "A manufacturing order is automatically launched for each invoiced product regardless of product type",
        fr: "Un ordre de fabrication est automatiquement lancé pour chaque produit facturé quel que soit le type de produit",
      },
      {
        en: "The invoice remains a draft sales quotation until a bank statement line is imported and matched",
        fr: "La facture reste un devis vente brouillon jusqu'à l'import et le rapprochement d'une ligne de relevé bancaire",
      },
      {
        en: "Only a PDF is generated; no journal items are created until the customer pays through the payment link",
        fr: "Seul un PDF est généré ; aucune ligne comptable n'est créée tant que le client ne paie pas via le lien de paiement",
      },
    ],
    explanation: {
      en: "Posting an invoice generates the corresponding account move with receivable, income, and tax journal items.",
      fr: "La comptabilisation d'une facture génère l'écriture correspondante avec lignes client, produits et taxes.",
    },
  }),
  complexQ({
    id: "acc-016",
    module: "accounting",
    text: {
      en: "What does the Profit and Loss report show in Odoo 19?",
      fr: "Que montre le compte de résultat (Profit and Loss) dans Odoo 19 ?",
    },
    correct: {
      en: "Revenues and expenses over a selected period to determine net profit or loss",
      fr: "Les produits et charges sur une période sélectionnée pour déterminer le résultat net (bénéfice ou perte)",
    },
    distractors: [
      {
        en: "Current stock quantities and inventory valuation by warehouse location as of the report date",
        fr: "Les quantités en stock actuelles et la valorisation inventaire par emplacement d'entrepôt à la date du rapport",
      },
      {
        en: "Open CRM opportunities grouped by sales stage with expected revenue probability weighting",
        fr: "Les opportunités CRM ouvertes groupées par étape commerciale avec pondération de revenu attendu",
      },
      {
        en: "Employee seniority and remaining leave balances calculated from approved time-off requests",
        fr: "L'ancienneté des employés et les soldes de congés restants calculés depuis les demandes de congés approuvées",
      },
    ],
    explanation: {
      en: "The P&L summarizes income and expense accounts for a period, unlike the balance sheet which is point-in-time.",
      fr: "Le compte de résultat résume les comptes de produits et charges sur une période, contrairement au bilan à une date.",
    },
  }),
  complexQ({
    id: "acc-017",
    module: "accounting",
    text: {
      en: "How are payment terms applied on customer invoices in Odoo 19?",
      fr: "Comment les conditions de paiement s'appliquent-elles sur les factures clients dans Odoo 19 ?",
    },
    correct: {
      en: "Select a payment term template defining due dates and installment percentages on the invoice",
      fr: "Sélectionner un modèle de conditions de paiement définissant échéances et pourcentages d'acompte sur la facture",
    },
    distractors: [
      {
        en: "Payment terms are inherited only from the warehouse route and cannot be changed on customer invoices",
        fr: "Les conditions de paiement sont héritées uniquement de la route d'entrepôt et ne peuvent être modifiées sur factures clients",
      },
      {
        en: "Due dates are set exclusively by the bank reconciliation model when statement lines are imported",
        fr: "Les échéances sont définies exclusivement par le modèle de rapprochement bancaire à l'import des relevés",
      },
      {
        en: "Installment schedules apply only to vendor bills; customer invoices always require immediate full payment",
        fr: "Les échéanciers s'appliquent uniquement aux factures fournisseurs ; les factures clients exigent toujours paiement immédiat intégral",
      },
    ],
    explanation: {
      en: "Payment terms configure multiple due dates or early payment discounts on sales invoices and partner records.",
      fr: "Les conditions de paiement configurent échéances multiples ou escomptes sur factures vente et fiches partenaires.",
    },
  }),
  complexQ({
    id: "acc-018",
    module: "accounting",
    text: {
      en: "What is a fiscal position in Odoo 19 Accounting?",
      fr: "Qu'est-ce qu'une position fiscale dans Comptabilité Odoo 19 ?",
    },
    correct: {
      en: "A ruleset mapping taxes and accounts based on partner or transaction context (domestic, intra-EU, export)",
      fr: "Un jeu de règles mappant taxes et comptes selon le contexte partenaire ou transaction (national, intra-UE, export)",
    },
    distractors: [
      {
        en: "A physical warehouse slot determining which tax report appears on the inventory adjustment screen",
        fr: "Un emplacement physique d'entrepôt déterminant quel rapport fiscal apparaît sur l'écran d'ajustement inventaire",
      },
      {
        en: "A project stage in the Project app that unlocks billing milestones for timesheet-based services",
        fr: "Une étape projet dans l'app Projet débloquant des jalons de facturation pour prestations au temps passé",
      },
      {
        en: "A POS payment method configuration selecting cash, card, or customer account for retail checkouts",
        fr: "Une configuration de mode de paiement POS sélectionnant espèces, carte ou compte client en caisse",
      },
    ],
    explanation: {
      en: "Fiscal positions adapt tax and account mappings for cross-border sales, B2B exemptions, or specific regimes.",
      fr: "Les positions fiscales adaptent le mapping taxes et comptes pour ventes transfrontalières, exonérations B2B ou régimes spécifiques.",
    },
  }),
  complexQ({
    id: "acc-019",
    module: "accounting",
    text: {
      en: "How does Odoo 19 handle deferred revenue or deferred expenses?",
      fr: "Comment Odoo 19 gère-t-il les produits ou charges constatés d'avance ?",
    },
    correct: {
      en: "Generate deferral entries spread over periods using start/end dates on invoice or miscellaneous lines",
      fr: "Générer des écritures de régularisation étalées sur des périodes via dates de début/fin sur lignes de facture ou divers",
    },
    distractors: [
      {
        en: "Post the full amount to revenue immediately on sales order confirmation without any future allocation",
        fr: "Comptabiliser le montant intégral en produit dès la confirmation de commande sans aucune répartition future",
      },
      {
        en: "Store deferred amounts only on CRM opportunity expected revenue fields without journal entries",
        fr: "Stocker les montants différés uniquement sur les champs de revenu attendu CRM sans écritures comptables",
      },
      {
        en: "Require a separate spreadsheet export each month because deferrals cannot be managed inside Odoo",
        fr: "Exiger un export tableur mensuel car les régularisations ne peuvent pas être gérées dans Odoo",
      },
    ],
    explanation: {
      en: "Deferred entries allocate revenue or expenses across accounting periods based on configured start and end dates.",
      fr: "Les écritures de régularisation répartissent produits ou charges sur plusieurs périodes selon les dates de début et fin configurées.",
    },
  }),
  complexQ({
    id: "acc-020",
    module: "accounting",
    text: {
      en: "What is the Chart of Accounts in Odoo 19?",
      fr: "Qu'est-ce que le plan comptable dans Odoo 19 ?",
    },
    correct: {
      en: "The hierarchical list of general ledger accounts used to record all company financial transactions",
      fr: "La liste hiérarchique des comptes du grand livre utilisés pour enregistrer toutes les opérations financières",
    },
    distractors: [
      {
        en: "The eCommerce product catalog organized by public categories displayed on the website shop page",
        fr: "Le catalogue produit eCommerce organisé par catégories publiques affiché sur la boutique website",
      },
      {
        en: "The CRM pipeline stage configuration defining probability percentages for each sales step",
        fr: "La configuration des étapes pipeline CRM définissant les pourcentages de probabilité pour chaque étape commerciale",
      },
      {
        en: "The bill of materials tree listing components and operations for each manufactured product variant",
        fr: "L'arborescence de nomenclature listant composants et opérations pour chaque variante de produit fabriqué",
      },
    ],
    explanation: {
      en: "The chart of accounts structures all GL accounts (assets, liabilities, equity, income, expenses) for the company.",
      fr: "Le plan comptable structure tous les comptes du grand livre (actif, passif, capitaux propres, produits, charges) de la société.",
    },
  }),
  complexQ({
    id: "acc-021",
    module: "accounting",
    text: {
      en: "How can Odoo automatically apply the correct fiscal position on transactions?",
      fr: "Comment Odoo peut-il appliquer automatiquement la bonne position fiscale sur les transactions ?",
    },
    correct: {
      en: "Enable and configure Detect Automatically on the fiscal position",
      fr: "Activer et configurer Détecter automatiquement sur la position fiscale",
    },
    distractors: [
      {
        en: "Add fiscal positions to each product on the Accounting tab only",
        fr: "Ajouter les positions fiscales sur chaque produit via l'onglet Comptabilité uniquement",
      },
      {
        en: "Populate the Account field manually on every invoice line",
        fr: "Renseigner manuellement le champ Compte sur chaque ligne de facture",
      },
      {
        en: "Enable fiscal positions globally in Payroll settings",
        fr: "Activer les positions fiscales globalement dans les paramètres Paie",
      },
    ],
    explanation: {
      en: "Automatic detection maps partners and countries to fiscal positions without manual selection on each invoice.",
      fr: "La détection automatique associe partenaires et pays aux positions fiscales sans sélection manuelle sur chaque facture.",
    },
  }),
  complexQ({
    id: "acc-022",
    module: "accounting",
    text: {
      en: "You added products to a draft invoice before selecting the customer, and taxes are wrong. Why?",
      fr: "Vous avez ajouté des produits avant de choisir le client sur une facture brouillon, et les taxes sont incorrectes. Pourquoi ?",
    },
    correct: {
      en: "The Customer field must be set before adding product lines so the fiscal position applies",
      fr: "Le champ Client doit être renseigné avant les lignes produit pour que la position fiscale s'applique",
    },
    distractors: [
      {
        en: "Fiscal positions apply only to service products, not goods",
        fr: "Les positions fiscales s'appliquent uniquement aux services, pas aux biens",
      },
      {
        en: "Taxes update only after posting the invoice, not on draft",
        fr: "Les taxes se mettent à jour uniquement après comptabilisation, pas en brouillon",
      },
      {
        en: "The product category tax overrides fiscal positions permanently",
        fr: "La taxe de catégorie produit remplace définitivement les positions fiscales",
      },
    ],
    explanation: {
      en: "Partner-driven fiscal positions remap taxes when the customer is known; line order matters on draft invoices.",
      fr: "Les positions fiscales liées au partenaire remappent les taxes une fois le client connu ; l'ordre des lignes compte en brouillon.",
    },
  }),
  complexQ({
    id: "acc-023",
    module: "accounting",
    text: {
      en: "What does the Account Mapping tab on a fiscal position do?",
      fr: "Que fait l'onglet Mapping des comptes sur une position fiscale ?",
    },
    correct: {
      en: "Defines which income or expense accounts replace the product default accounts when the fiscal position applies",
      fr: "Définit quels comptes de produits/charges remplacent les comptes par défaut du produit quand la position fiscale s'applique",
    },
    distractors: [
      {
        en: "Lists accounts that are forbidden under this fiscal position",
        fr: "Liste les comptes interdits sous cette position fiscale",
      },
      {
        en: "Shows all taxes applied in the context of the fiscal position only",
        fr: "Affiche uniquement toutes les taxes appliquées dans le contexte de la position fiscale",
      },
      {
        en: "Maps warehouse locations to tax jurisdictions automatically",
        fr: "Associe automatiquement les emplacements entrepôt aux juridictions fiscales",
      },
    ],
    explanation: {
      en: "Account mapping redirects revenue/expense accounts for foreign or special tax regimes alongside tax mapping.",
      fr: "Le mapping des comptes redirige les comptes de produits/charges pour les régimes fiscaux spéciaux, en complément du mapping des taxes.",
    },
  }),
  complexQ({
    id: "acc-024",
    module: "accounting",
    text: {
      en: "What is the purpose of the suspense account in bank reconciliation?",
      fr: "Quel est le rôle du compte d'attente dans le rapprochement bancaire ?",
    },
    correct: {
      en: "It temporarily holds bank transactions until they are reconciled to the correct accounts",
      fr: "Il retient temporairement les transactions bancaires jusqu'à leur rapprochement sur les bons comptes",
    },
    distractors: [
      {
        en: "It tracks how much customers owe the company on open invoices",
        fr: "Il suit le montant dû par les clients sur les factures ouvertes",
      },
      {
        en: "It tracks how much the company owes vendors on unpaid bills",
        fr: "Il suit le montant dû aux fournisseurs sur les factures impayées",
      },
      {
        en: "It bridges registered payments until they appear as imported bank statement lines only",
        fr: "Il fait le lien entre paiements enregistrés et lignes de relevé importées uniquement",
      },
    ],
    explanation: {
      en: "Unreconciled bank statement lines post to suspense until matched with invoices, payments, or models.",
      fr: "Les lignes de relevé non rapprochées passent par le compte d'attente jusqu'au matching avec factures, paiements ou modèles.",
    },
  }),
  complexQ({
    id: "acc-025",
    module: "accounting",
    text: {
      en: "What does clicking the trash icon on a reconciled bank transaction do?",
      fr: "Que fait le clic sur l'icône corbeille sur une transaction bancaire rapprochée ?",
    },
    correct: {
      en: "It unreconciles the transaction without deleting the underlying bank line",
      fr: "Il annule le rapprochement sans supprimer la ligne bancaire sous-jacente",
    },
    distractors: [
      {
        en: "It permanently deletes the bank statement line from the database",
        fr: "Il supprime définitivement la ligne de relevé bancaire de la base",
      },
      {
        en: "It deletes the vendor bill linked to the reconciliation",
        fr: "Il supprime la facture fournisseur liée au rapprochement",
      },
      {
        en: "It removes the partner set on the transaction only",
        fr: "Il retire uniquement le partenaire défini sur la transaction",
      },
    ],
    explanation: {
      en: "Unreconcile breaks the match so you can reassign the bank line to different open items.",
      fr: "Annuler le rapprochement rompt l'association pour réaffecter la ligne bancaire à d'autres pièces ouvertes.",
    },
  }),
];
