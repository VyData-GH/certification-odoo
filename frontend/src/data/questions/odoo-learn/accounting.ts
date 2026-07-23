import { complexQ, mcq3Q, yesNoQ } from "../helpers";

/** Questions extraites d'Odoo Learn — généré automatiquement */
export const accountingLearnQuestions = [
complexQ({
    id: "acc-026",
    module: "accounting",
    text: {
      en: "When is creating an additional company the best choice? (Odoo Learn — Multi-Company Basics)",
      fr: "Quand créer une société supplémentaire est-il le meilleur choix ? (Odoo Learn — Bases multi-entreprises)",
    },
    correct: {
      en: "When the new unit has its own tax ID / independent tax filings.",
      fr: "Lorsque la nouvelle unité a son propre numéro d’identification fiscale/déclarations fiscales indépendantes.",
    },
    distractors: [
      { en: "When the new entity uses different price lists.", fr: "Lorsque la nouvelle entité utilise des listes de prix différentes." },
      { en: "When I only need to limit document visibility.", fr: "Quand j’ai seulement besoin de limiter la visibilité des documents." },
      { en: "When the currency stays the same.", fr: "Quand la monnaie reste la même." },
    ],
    explanation: {
      en: "Source Odoo Learn (Multi-Company Basics): When the new unit has its own tax ID / independent tax filings.",
      fr: "Source Odoo Learn (bases multi-entreprises) : Lorsque la nouvelle unité a son propre numéro d'identification fiscale/déclarations fiscales indépendantes.",
    },
  }),
complexQ({
    id: "acc-027",
    module: "accounting",
    text: {
      en: "Which two fields must I set correctly before a new company posts its first transaction—because changing them later can corrupt the ledger? (Odoo Learn — Multi-Company Basics)",
      fr: "Quels sont les deux champs que je dois définir correctement avant qu'une nouvelle entreprise ne publie sa première transaction, car les modifier ultérieurement peut corrompre le grand livre ? (Odoo Learn — Bases multi-entreprises)",
    },
    correct: {
      en: "Country and Currency.",
      fr: "Pays et devise.",
    },
    distractors: [
      { en: "Taxes and Company.", fr: "Impôts et société." },
      { en: "Country and Fiscal Localization.", fr: "Localisation nationale et fiscale." },
      { en: "Chart of Accounts and Currency.", fr: "Plan comptable et monnaie." },
    ],
    explanation: {
      en: "Source Odoo Learn (Multi-Company Basics): Country and Currency.",
      fr: "Source Odoo Learn (Bases multi-entreprises) : Pays et devise.",
    },
  }),
complexQ({
    id: "acc-028",
    module: "accounting",
    text: {
      en: "What can I do with the Multi Company feature that I could not do with access rights, branches, or a separate database? (Odoo Learn — Multi-Company Basics)",
      fr: "Que puis-je faire avec la fonctionnalité Multi Société que je ne pourrais pas faire avec des droits d'accès, des succursales ou une base de données distincte ? (Odoo Learn — Bases multi-entreprises)",
    },
    correct: {
      en: "Manage several entities that do not share the same ledger but still consolidate reporting.",
      fr: "Gérez plusieurs entités qui ne partagent pas le même grand livre mais consolident quand même le reporting.",
    },
    distractors: [
      { en: "Limit employee access to documents.", fr: "Limitez l’accès des employés aux documents." },
      { en: "Share resources, such as products, vendors, and customers.", fr: "Partagez des ressources, telles que des produits, des fournisseurs et des clients." },
      { en: "Avoid taxes since Odoo will do them for me.", fr: "Évitez les taxes puisque Odoo les fera pour moi." },
    ],
    explanation: {
      en: "Source Odoo Learn (Multi-Company Basics): Manage several entities that do not share the same ledger but still consolidate reporting.",
      fr: "Source Odoo Learn (Bases multi-entreprises) : Gérez plusieurs entités qui ne partagent pas le même grand livre mais consolident quand même les reportings.",
    },
  }),
complexQ({
    id: "acc-029",
    module: "accounting",
    text: {
      en: "I start by manually creating and posting an invoice in the seller company (Stealthy Pine) instead of confirming a sales order. What commercial documents, if any, will Odoo create automatically in the buyer company (Stealthy Wood)? (Odoo Learn — Multi-Company Transactions)",
      fr: "Je commence par créer et publier manuellement une facture dans la société vendeuse (Stealthy Pine) au lieu de confirmer une commande client. Quels documents commerciaux, le cas échéant, Odoo créera-t-il automatiquement dans la société acheteuse (Stealthy Wood) ? (Odoo Learn — Transactions multi-sociétés)",
    },
    correct: {
      en: "No commercial documents.",
      fr: "Aucun document commercial.",
    },
    distractors: [
      { en: "A linked vendor bill.", fr: "Une facture fournisseur liée." },
      { en: "A linked vendor bill and purchase order.", fr: "Une facture fournisseur et un bon de commande liés." },
      { en: "A linked quotation", fr: "Une citation liée" },
    ],
    explanation: {
      en: "Source Odoo Learn (Multi-Company Transactions): No commercial documents.",
      fr: "Source Odoo Learn (Transactions Multi-Entreprises) : Aucun document commercial.",
    },
  }),
complexQ({
    id: "acc-030",
    module: "accounting",
    text: {
      en: "Which statement correctly describes how bills and invoices interact in Odoo’s inter-company flow? (Odoo Learn — Multi-Company Transactions)",
      fr: "Quelle déclaration décrit correctement la manière dont les factures interagissent dans le flux inter-entreprises d’Odoo ? (Odoo Learn — Transactions multi-sociétés)",
    },
    correct: {
      en: "Confirming a vendor bill in the buyer creates no documents in the seller; the seller must issue the invoice first.",
      fr: "La confirmation d'une facture fournisseur chez l'acheteur ne crée aucun document chez le vendeur ; le vendeur doit d'abord émettre la facture.",
    },
    distractors: [
      { en: "Confirming a vendor bill in the buyer automatically generates the matching invoice in the seller.", fr: "La confirmation d'une facture fournisseur chez l'acheteur génère automatiquement la facture correspondante chez le vendeur." },
      { en: "Bills and invoices are created simultaneously, regardless of which side starts the transaction.", fr: "Les factures sont créées simultanément, quelle que soit la partie qui démarre la transaction." },
      { en: "A buyer’s bill will only back-generate a seller’s invoice if “Create Purchase Orders” is disabled.", fr: "La facture d’un acheteur ne générera la facture d’un vendeur que si « Créer des bons de commande » est désactivé." },
    ],
    explanation: {
      en: "Source Odoo Learn (Multi-Company Transactions): Confirming a vendor bill in the buyer creates no documents in the seller; the seller must issue the invoice first.",
      fr: "Source Odoo Learn (Transactions multi-entreprises) : La confirmation d'une facture fournisseur chez l'acheteur ne crée aucun document chez le vendeur ; le vendeur doit d'abord émettre la facture.",
    },
  }),
complexQ({
    id: "acc-031",
    module: "accounting",
    text: {
      en: "How can I make sure Stealthy Pine’s quotations are issued in CAD when selling to Stealthy Wood? (Odoo Learn — Multi-Company Transactions)",
      fr: "Comment puis-je m'assurer que les devis de Stealthy Pine sont émis en CAD lors de la vente à Stealthy Wood ? (Odoo Learn — Transactions multi-sociétés)",
    },
    correct: {
      en: "Assign Stealthy Pine’s CAD pricelist to Stealthy Wood’s partner record.",
      fr: "Attribuez la liste de prix CAD de Stealthy Pine au dossier partenaire de Stealthy Wood.",
    },
    distractors: [
      { en: "Set the Purchase Journal’s currency to CAD.", fr: "Définissez la devise du journal des achats sur CAD." },
      { en: "Change the company’s default currency to CAD.", fr: "Changez la devise par défaut de l’entreprise en CAD." },
      { en: "Map “CAD to USD” in a fiscal position so Odoo converts on the invoice", fr: "Mapper « CAD en USD » dans une position fiscale pour qu'Odoo convertisse sur la facture" },
    ],
    explanation: {
      en: "Source Odoo Learn (Multi-Company Transactions): Assign Stealthy Pine’s CAD pricelist to Stealthy Wood’s partner record.",
      fr: "Source Odoo Learn (Transactions multi-entreprises) : attribuez la liste de prix CAD de Stealthy Pine à l'enregistrement du partenaire de Stealthy Wood.",
    },
  }),
complexQ({
    id: "acc-032",
    module: "accounting",
    text: {
      en: "What do fiscal localizations do? (Odoo Learn — Getting started)",
      fr: "À quoi servent les localisations fiscales ? (Odoo Learn — Commencer)",
    },
    correct: {
      en: "They ensure that your database meets all of your country’s accounting requirements and norms.",
      fr: "Ils garantissent que votre base de données répond à toutes les exigences et normes comptables de votre pays.",
    },
    distractors: [
      { en: "They allow you to map taxes and accounts based on the customer or vendor.", fr: "Ils vous permettent de cartographier les taxes et les comptes en fonction du client ou du fournisseur." },
      { en: "They create journal entries to incorporate the price of customs duties and fees into the cost of products.", fr: "Ils créent des écritures de journal pour intégrer le prix des droits de douane et des frais dans le coût des produits." },
      { en: "They automatically reconcile your bank transactions with the appropriate invoice or bill.", fr: "Ils rapprochent automatiquement vos transactions bancaires avec la facture ou la facture appropriée." },
    ],
    explanation: {
      en: "Source Odoo Learn (Getting started): They ensure that your database meets all of your country’s accounting requirements and norms.",
      fr: "Source Odoo Learn (Mise en route) : Ils garantissent que votre base de données répond à toutes les exigences et normes comptables de votre pays.",
    },
  }),
complexQ({
    id: "acc-033",
    module: "accounting",
    text: {
      en: "What does it mean for a journal entry to be balanced? (Odoo Learn — Getting started)",
      fr: "Qu'est-ce que cela signifie qu'une écriture de journal soit équilibrée ? (Odoo Learn — Commencer)",
    },
    correct: {
      en: "It has the same amount of debits and credits.",
      fr: "Il a le même montant de débits et de crédits.",
    },
    distractors: [
      { en: "It has the same number of debit lines and credit lines.", fr: "Il dispose du même nombre de lignes de débit et de lignes de crédit." },
      { en: "It appears in both a customer invoice journal and a vendor bills journal.", fr: "Il apparaît à la fois dans un journal des factures client et dans un journal des factures fournisseur." },
      { en: "Journal entries cannot be balanced.", fr: "Les écritures de journal ne peuvent pas être équilibrées." },
    ],
    explanation: {
      en: "Source Odoo Learn (Getting started): It has the same amount of debits and credits.",
      fr: "Source Odoo Learn (Mise en route) : Il a le même montant de débits et de crédits.",
    },
  }),
complexQ({
    id: "acc-034",
    module: "accounting",
    text: {
      en: "The general ledger is (Odoo Learn — Getting started)",
      fr: "Le grand livre général est (Odoo Learn — Commencer)",
    },
    correct: {
      en: "A list of all of the accounts and their debits and credits.",
      fr: "Une liste de tous les comptes et de leurs débits et crédits.",
    },
    distractors: [
      { en: "A list of all the customer invoices and vendor bills that haven’t been paid.", fr: "Une liste de toutes les factures clients et fournisseurs qui n’ont pas été payées." },
      { en: "A list of the income and expense accounts.", fr: "Une liste des comptes de revenus et de dépenses." },
      { en: "A list of all the journal items grouped by their journal entries.", fr: "Une liste de tous les éléments de journal regroupés par leurs écritures de journal." },
    ],
    explanation: {
      en: "Source Odoo Learn (Getting started): A list of all of the accounts and their debits and credits.",
      fr: "Source Odoo Learn (Mise en route) : Une liste de tous les comptes et leurs débits et crédits.",
    },
  }),
mcq3Q({
    id: "acc-035",
    module: "accounting",
    text: {
      en: "How many Chart of Accounts can you have per company? (Odoo Learn — Chart of accounts)",
      fr: "Combien de plans comptables pouvez-vous avoir par entreprise ? (Odoo Learn — Plan comptable)",
    },
    correct: {
      en: "One per company, but multiple per database.",
      fr: "Un par entreprise, mais plusieurs par base de données.",
    },
    distractors: [
      { en: "One per company, and one per database.", fr: "Un par entreprise et un par base de données." },
      { en: "As many as there are on the database.", fr: "Autant qu'il y en a dans la base de données." },
    ],
    explanation: {
      en: "Source Odoo Learn (Chart of accounts): One per company, but multiple per database.",
      fr: "Source Odoo Learn (Plan comptable) : Un par entreprise, mais plusieurs par base de données.",
    },
  }),
mcq3Q({
    id: "acc-036",
    module: "accounting",
    text: {
      en: "What happens if no currency is set on an account? (Odoo Learn — Chart of accounts)",
      fr: "Que se passe-t-il si aucune devise n'est définie sur un compte ? (Odoo Learn — Plan comptable)",
    },
    correct: {
      en: "If no currency is set, the account can be used with any currency.",
      fr: "Si aucune devise n'est définie, le compte peut être utilisé avec n'importe quelle devise.",
    },
    distractors: [
      { en: "A currency must be set on an account.", fr: "Une devise doit être définie sur un compte." },
      { en: "The account automatically defaults to the company’s currency if no currency is set.", fr: "Le compte utilise automatiquement par défaut la devise de l’entreprise si aucune devise n’est définie." },
    ],
    explanation: {
      en: "Source Odoo Learn (Chart of accounts): If no currency is set, the account can be used with any currency.",
      fr: "Source Odoo Learn (Plan comptable) : Si aucune devise n'est définie, le compte peut être utilisé avec n'importe quelle devise.",
    },
  }),
mcq3Q({
    id: "acc-037",
    module: "accounting",
    text: {
      en: "What is the default account type shown first in the account field when creating an invoice? (Odoo Learn — Chart of accounts)",
      fr: "Quel est le type de compte par défaut affiché en premier dans le champ du compte lors de la création d'une facture ? (Odoo Learn — Plan comptable)",
    },
    correct: {
      en: "Income accounts",
      fr: "Comptes de revenus",
    },
    distractors: [
      { en: "Expense and Fixed Assets accounts", fr: "Comptes de dépenses et d'immobilisations" },
      { en: "Income and Fixed Assets accounts", fr: "Comptes de revenus et d'immobilisations" },
    ],
    explanation: {
      en: "Source Odoo Learn (Chart of accounts): Income accounts",
      fr: "Source Odoo Learn (Plan comptable) : Comptes de revenus",
    },
  }),
mcq3Q({
    id: "acc-038",
    module: "accounting",
    text: {
      en: "What is recommended for accounts I do not need? (Odoo Learn — Update your chart of accounts)",
      fr: "Qu'est-ce qui est recommandé pour les comptes dont je n'ai pas besoin ? (Odoo Learn — Mettez à jour votre plan comptable)",
    },
    correct: {
      en: "Deprecate the unneeded accounts.",
      fr: "Dépréciez les comptes inutiles.",
    },
    distractors: [
      { en: "Delete the unneeded accounts.", fr: "Supprimez les comptes inutiles." },
      { en: "Archive the unneeded accounts.", fr: "Archivez les comptes inutiles." },
    ],
    explanation: {
      en: "Source Odoo Learn (Update your chart of accounts): Deprecate the unneeded accounts.",
      fr: "Source Odoo Learn (Mettez à jour votre plan comptable) : Dépréciez les comptes inutiles.",
    },
  }),
mcq3Q({
    id: "acc-039",
    module: "accounting",
    text: {
      en: "I do not need the \"Current Year Earnings\" account. What can I do with it? (Odoo Learn — Update your chart of accounts)",
      fr: "Je n'ai pas besoin du compte « Gains de l'année en cours ». Que puis-je faire avec ? (Odoo Learn — Mettez à jour votre plan comptable)",
    },
    correct: {
      en: "The account is Odoo-specific and should NOT be modified in any way.",
      fr: "Le compte est spécifique à Odoo et ne doit en aucun cas être modifié.",
    },
    distractors: [
      { en: "I can delete or deprecate it, it is only for specific use-cases.", fr: "Je peux le supprimer ou le rendre obsolète, ce n'est que pour des cas d'utilisation spécifiques." },
      { en: "I can modify and tailor it to my specific business needs.", fr: "Je peux le modifier et l’adapter aux besoins spécifiques de mon entreprise." },
    ],
    explanation: {
      en: "Source Odoo Learn (Update your chart of accounts): The account is Odoo-specific and should NOT be modified in any way.",
      fr: "Source Odoo Learn (Mettez à jour votre plan comptable) : Le compte est spécifique à Odoo et ne doit en aucun cas être modifié.",
    },
  }),
complexQ({
    id: "acc-040",
    module: "accounting",
    text: {
      en: "What account should replace the bank account when importing a positive (debit) amount? (Odoo Learn — Import an opening balance)",
      fr: "Quel compte doit remplacer le compte bancaire lors de l'importation d'un montant positif (débit) ? (Odoo Learn — Importer un solde d'ouverture)",
    },
    correct: {
      en: "The outstanding receipts account",
      fr: "Le compte des impayés",
    },
    distractors: [
      { en: "The suspense account", fr: "Le compte d'attente" },
      { en: "The outstanding payments account", fr: "Le compte des impayés" },
      { en: "The cash account", fr: "Le compte caisse" },
    ],
    explanation: {
      en: "Source Odoo Learn (Import an opening balance): The outstanding receipts account",
      fr: "Source Odoo Learn (Importer un solde d'ouverture) : Le compte des encours",
    },
  }),
complexQ({
    id: "acc-041",
    module: "accounting",
    text: {
      en: "Which of the following processes is the best way to import open invoices and bills? (Odoo Learn — Import an opening balance)",
      fr: "Lequel des processus suivants constitue le meilleur moyen d'importer des factures et factures ouvertes ? (Odoo Learn — Importer un solde d'ouverture)",
    },
    correct: {
      en: "Add each invoice or bill as one line in the import template with the remaining amount to be paid as the total and import to the corresponding model.",
      fr: "Ajoutez chaque facture ou facture sur une seule ligne dans le modèle d'importation avec le montant restant à payer comme total et importez dans le modèle correspondant.",
    },
    distractors: [
      { en: "Add each line of each invoice or bill as its own line in the import template so that the invoice or bill has all of the details in Odoo and import to the corresponding model.", fr: "Ajoutez chaque ligne de chaque facture ou facture comme sa propre ligne dans le modèle d'importation afin que la facture ou la facture contienne tous les détails dans Odoo et importez-la dans le modèle correspondant." },
      { en: "Import invoices and bills directly from the general ledger view by opening the action menu and clicking “Import Invoice/Bill”.", fr: "Importez des factures et des factures directement à partir de la vue du grand livre en ouvrant le menu d'action et en cliquant sur « Importer une facture/facture »." },
      { en: "Combine them into one sheet, then import them through the Import Wizard in the Accounting Settings.", fr: "Combinez-les en une seule feuille, puis importez-les via l'assistant d'importation dans les paramètres comptables." },
    ],
    explanation: {
      en: "Source Odoo Learn (Import an opening balance): Add each invoice or bill as one line in the import template with the remaining amount to be paid as the total and import to the corresponding model.",
      fr: "Source Odoo Learn (Importer un solde d'ouverture) : Ajoutez chaque facture ou facture sur une seule ligne dans le modèle d'importation avec le montant restant à payer comme total et importez dans le modèle correspondant.",
    },
  }),
complexQ({
    id: "acc-042",
    module: "accounting",
    text: {
      en: "What’s the purpose of replacing the receivable and payable accounts on the general ledger with the clearing account? (Odoo Learn — Import an opening balance)",
      fr: "Quel est l’intérêt de remplacer les comptes clients et fournisseurs du grand livre par le compte de compensation ? (Odoo Learn — Importer un solde d'ouverture)",
    },
    correct: {
      en: "It avoids duplicating the balance in the receivable and payable accounts when importing both the general ledger and the open invoices and bills.",
      fr: "Il évite la duplication du solde des comptes clients et fournisseurs lors de l'importation à la fois du grand livre général et des factures et factures en cours.",
    },
    distractors: [
      { en: "It’s impossible to import to receivable or payable accounts.", fr: "Il est impossible d’importer vers des comptes clients ou fournisseurs." },
      { en: "By importing to the clearing account, you don’t have to import your open invoices or bills.", fr: "En important sur le compte de compensation, vous n’avez pas besoin d’importer vos factures ou factures ouvertes." },
      { en: "It gives you an entry to reconcile the opening bank transaction against.", fr: "Il vous donne une entrée pour rapprocher la transaction bancaire d'ouverture." },
    ],
    explanation: {
      en: "Source Odoo Learn (Import an opening balance): It avoids duplicating the balance in the receivable and payable accounts when importing both the general ledger and the open invoices and bills.",
      fr: "Source Odoo Learn (Importer un solde d'ouverture) : Il évite de dupliquer le solde des comptes clients et fournisseurs lors de l'importation à la fois du grand livre général et des factures et factures ouvertes.",
    },
  }),
complexQ({
    id: "acc-043",
    module: "accounting",
    text: {
      en: "If you create an invoice for Azure Interior with 1 product \"Large Desk\", and a 15% tax. What are the journal items created? (Odoo Learn — Issue a customer invoice)",
      fr: "Si vous créez une facture pour Azure Interior avec 1 produit « Large Desk » et une taxe de 15 %. Quels sont les éléments de journal créés ? (Odoo Learn — Émettre une facture client)",
    },
    correct: {
      en: "3 Lines: Product Sales, Tax Received, Account Receivable",
      fr: "3 lignes : ventes de produits, taxes reçues, comptes clients",
    },
    distractors: [
      { en: "2 Lines: Product Sales, Account Receivable", fr: "2 lignes : ventes de produits, comptes clients" },
      { en: "2 Lines: Product Sales, Account Payable", fr: "2 lignes : ventes de produits, compte à payer" },
      { en: "2 Lines: Product Sales, Tax Received", fr: "2 lignes : ventes de produits, taxe reçue" },
    ],
    explanation: {
      en: "Source Odoo Learn (Issue a customer invoice): 3 Lines: Product Sales, Tax Received, Account Receivable",
      fr: "Source Odoo Learn (Émettre une facture client) : 3 lignes : Ventes de produits, Taxe reçue, Compte client",
    },
  }),
complexQ({
    id: "acc-044",
    module: "accounting",
    text: {
      en: "In the journal items, what defines the amounts your customer owes you? (Odoo Learn — Issue a customer invoice)",
      fr: "Dans les éléments du journal, qu'est-ce qui définit les montants que votre client vous doit ? (Odoo Learn — Émettre une facture client)",
    },
    correct: {
      en: "A debit in Account Receivable",
      fr: "Un débit en compte clients",
    },
    distractors: [
      { en: "A debit in Account Payable", fr: "Un débit dans le compte à payer" },
      { en: "A credit in Account Payable", fr: "Un crédit dans le compte à payer" },
      { en: "A credit in Account Receivable", fr: "Un crédit en compte client" },
    ],
    explanation: {
      en: "Source Odoo Learn (Issue a customer invoice): A debit in Account Receivable",
      fr: "Source Odoo Learn (Emettre une facture client) : Un débit en Compte Client",
    },
  }),
mcq3Q({
    id: "acc-045",
    module: "accounting",
    text: {
      en: "Where can you define the default income account that is used on an invoice? (Odoo Learn — Issue a customer invoice)",
      fr: "Où pouvez-vous définir le compte de revenus par défaut utilisé sur une facture ? (Odoo Learn — Émettre une facture client)",
    },
    correct: {
      en: "On the product, or the product category, or the journal",
      fr: "Sur le produit, ou la catégorie de produit, ou le journal",
    },
    distractors: [
      { en: "On the product form, but not on the product category or sales journal.", fr: "Sur le formulaire produit, mais pas sur la catégorie de produits ni sur le journal des ventes." },
      { en: "On the journal only.", fr: "Sur le journal uniquement." },
    ],
    explanation: {
      en: "Source Odoo Learn (Issue a customer invoice): On the product, or the product category, or the journal",
      fr: "Source Odoo Learn (Emettre une facture client) : Sur le produit, ou la catégorie de produit, ou le journal",
    },
  }),
mcq3Q({
    id: "acc-046",
    module: "accounting",
    text: {
      en: "What options could you add to an invoice to improve its structure? (Odoo Learn — Issue a customer invoice)",
      fr: "Quelles options pourriez-vous ajouter à une facture pour améliorer sa structure ? (Odoo Learn — Émettre une facture client)",
    },
    correct: {
      en: "Sections and notes",
      fr: "Sections et notes",
    },
    distractors: [
      { en: "Colors and notes", fr: "Couleurs et notes" },
      { en: "Colors and sections", fr: "Couleurs et sections" },
    ],
    explanation: {
      en: "Source Odoo Learn (Issue a customer invoice): Sections and notes",
      fr: "Source Odoo Learn (Émettre une facture client) : Sections et notes",
    },
  }),
yesNoQ({
    id: "acc-047",
    module: "accounting",
    text: {
      en: "Is it possible to select all \"Draft\" invoices and post them in one action? (Odoo Learn — Issue a customer invoice)",
      fr: "Est-il possible de sélectionner toutes les factures « Brouillon » et de les comptabiliser en une seule action ? (Odoo Learn — Émettre une facture client)",
    },
    correctIsYes: true,
    explanation: {
      en: "Source Odoo Learn (Issue a customer invoice): Yes",
      fr: "Source Odoo Learn (Émettre une facture client) : Oui",
    },
  }),
complexQ({
    id: "acc-048",
    module: "accounting",
    text: {
      en: "In the Sales app, open S00007 from Gemini Furniture. You can see that the Quantity, Delivered, and Invoiced values of some sales order lines are blue and others are black. Why is that? (Odoo Learn — Customer invoice from sales order)",
      fr: "Dans l'application Sales, ouvrez S00007 depuis Gemini Furniture. Vous pouvez voir que les valeurs Quantité, Livrée et Facturée de certaines lignes de commande client sont bleues et d'autres noires. Pourquoi donc? (Odoo Learn — Facture client issue de la commande client)",
    },
    correct: {
      en: "A blue line means that this sales order line is invoiceable.",
      fr: "Une ligne bleue signifie que cette ligne de commande client est facturable.",
    },
    distractors: [
      { en: "A black line means that this product is invoiceable.", fr: "Une ligne noire signifie que ce produit est facturable." },
      { en: "A blue line means that the product has been delivered.", fr: "Une ligne bleue signifie que le produit a été livré." },
      { en: "A blue line means that the products have already been invoiced.", fr: "Une ligne bleue signifie que les produits ont déjà été facturés." },
    ],
    explanation: {
      en: "Source Odoo Learn (Customer invoice from sales order): A blue line means that this sales order line is invoiceable.",
      fr: "Source Odoo Learn (Facture client issue de la commande client) : Une ligne bleue signifie que cette ligne de commande client est facturable.",
    },
  }),
complexQ({
    id: "acc-049",
    module: "accounting",
    text: {
      en: "In Odoo, how can you create one invoice for multiple sales orders belonging to the same customer and invoicing address? (Odoo Learn — Customer invoice from sales order)",
      fr: "Dans Odoo, comment créer une facture pour plusieurs commandes client appartenant au même client et à la même adresse de facturation ? (Odoo Learn — Facture client issue de la commande client)",
    },
    correct: {
      en: "From the sales order list view, select multiple sales orders, click Actions > Create invoice(s), check Consolidated Billing, and click Create Draft.",
      fr: "Dans la vue de la liste des commandes client, sélectionnez plusieurs commandes client, cliquez sur Actions > Créer une ou plusieurs factures, cochez Facturation consolidée, puis cliquez sur Créer une ébauche.",
    },
    distractors: [
      { en: "From the sales order form view, click Create Invoice, then click Include additional invoices and select the appropriate sales orders to invoice.", fr: "Dans la vue du formulaire de commande client, cliquez sur Créer une facture, puis cliquez sur Inclure des factures supplémentaires et sélectionnez les commandes client appropriées à facturer." },
      { en: "From the invoice list view, click New, then set the Type field to Batch, and select the appropriate sales orders to invoice.", fr: "Dans la vue Liste des factures, cliquez sur Nouveau, puis définissez le champ Type sur Lot et sélectionnez les commandes client appropriées à facturer." },
      { en: "Multiple sales orders cannot have one invoice in Odoo.", fr: "Plusieurs commandes client ne peuvent pas avoir une seule facture dans Odoo." },
    ],
    explanation: {
      en: "Source Odoo Learn (Customer invoice from sales order): From the sales order list view, select multiple sales orders, click Actions > Create invoice(s), check Consolidated Billing, and click Create Draft.",
      fr: "Source Odoo Learn (facture client à partir d'une commande client) : dans la vue liste des commandes client, sélectionnez plusieurs commandes client, cliquez sur Actions > Créer une ou plusieurs factures, cochez Facturation consolidée, puis cliquez sur Créer un brouillon.",
    },
  }),
complexQ({
    id: "acc-050",
    module: "accounting",
    text: {
      en: "Which of the following workflows will cause an Invalid Operation error when creating an invoice from a sales order? (Odoo Learn — Customer invoice from sales order)",
      fr: "Lequel des flux de travail suivants provoquera une erreur d'opération invalide lors de la création d'une facture à partir d'une commande client ? (Odoo Learn — Facture client issue de la commande client)",
    },
    correct: {
      en: "Creating a regular invoice when no order lines are invoiceable.",
      fr: "Création d'une facture régulière lorsqu'aucune ligne de commande n'est facturable.",
    },
    distractors: [
      { en: "Creating a regular invoice when not all order lines are invoiceable.", fr: "Créer une facture régulière lorsque toutes les lignes de commande ne sont pas facturables." },
      { en: "Creating a down payment (percentage) invoice with a percentage over 100%.", fr: "Création d'une facture d'acompte (pourcentage) avec un pourcentage supérieur à 100 %." },
      { en: "Creating a down payment (fixed amount) invoice with an amount greater than the amount remaining to be invoiced.", fr: "Création d'une facture d'acompte (montant fixe) d'un montant supérieur au montant restant à facturer." },
    ],
    explanation: {
      en: "Source Odoo Learn (Customer invoice from sales order): Creating a regular invoice when no order lines are invoiceable.",
      fr: "Source Odoo Learn (Facture client issue d'une commande client) : Création d'une facture régulière lorsqu'aucune ligne de commande n'est facturable.",
    },
  }),
mcq3Q({
    id: "acc-051",
    module: "accounting",
    text: {
      en: "How can you create a dedicated credit note sequence? (Odoo Learn — Issue a credit note)",
      fr: "Comment créer une séquence d’avoir dédiée ? (Odoo Learn — Émettre une note de crédit)",
    },
    correct: {
      en: "By enabling the setting on the ‘Customer Invoices’ journal.",
      fr: "En activant le paramètre sur le journal « Factures clients ».",
    },
    distractors: [
      { en: "By posting the credit note in draft and re-writing the sequence.", fr: "En publiant l’avoir en brouillon et en réécrivant la séquence." },
      { en: "By creating a specific ‘Credit Notes’ journal.", fr: "En créant un journal spécifique « Notes de crédit »." },
    ],
    explanation: {
      en: "Source Odoo Learn (Issue a credit note): By enabling the setting on the ‘Customer Invoices’ journal.",
      fr: "Source Odoo Learn (Émettre un avoir) : En activant le paramètre sur le journal « Factures clients ».",
    },
  }),
complexQ({
    id: "acc-052",
    module: "accounting",
    text: {
      en: "If you create a $100 credit note from a $100 invoice, what will the journal entries look like? (Odoo Learn — Issue a credit note)",
      fr: "Si vous créez une note de crédit de 100 $ à partir d’une facture de 100 $, à quoi ressembleront les écritures de journal ? (Odoo Learn — Émettre une note de crédit)",
    },
    correct: {
      en: "$100 from the Income Account in the DEBIT column and $100 from the Receivable Account in the CREDIT column.",
      fr: "100 $ du compte de revenus dans la colonne DÉBIT et 100 $ du compte clients dans la colonne CRÉDIT.",
    },
    distractors: [
      { en: "$100 from the Income Account in the CREDIT column and $100 from the Receivable Account in the DEBIT column.", fr: "100 $ du compte de revenus dans la colonne CRÉDIT et 100 $ du compte clients dans la colonne DÉBIT." },
      { en: "The journal entries remain unchanged when creating a credit note.", fr: "Les écritures de journal restent inchangées lors de la création d'un avoir." },
      { en: "The entries are the same as the initial customer invoice journal entries.", fr: "Les écritures sont les mêmes que les écritures initiales du journal des factures clients." },
    ],
    explanation: {
      en: "Source Odoo Learn (Issue a credit note): $100 from the Income Account in the DEBIT column and $100 from the Receivable Account in the CREDIT column.",
      fr: "Source Odoo Learn (Émettre une note de crédit) : 100 $ du compte de revenus dans la colonne DÉBIT et 100 $ du compte recevable dans la colonne CRÉDIT.",
    },
  }),
mcq3Q({
    id: "acc-053",
    module: "accounting",
    text: {
      en: "You invoiced a set of wine glasses and cutlery to a customer, but the glasses arrived broken. You want to refund only the glasses. How do you do it? (Odoo Learn — Issue a credit note)",
      fr: "Vous avez facturé un ensemble de verres à vin et de couverts à un client, mais les verres sont arrivés cassés. Vous souhaitez rembourser uniquement les lunettes. Comment faites-vous? (Odoo Learn — Émettre une note de crédit)",
    },
    correct: {
      en: "Create a note from the invoice and remove the cutlery from the credit note’s products, then confirm it.",
      fr: "Créez une note à partir de la facture et retirez les couverts des produits de l'avoir, puis confirmez-la.",
    },
    distractors: [
      { en: "Create an invoice with a negative amount and wire transfer the amount to the customer.", fr: "Créez une facture avec un montant négatif et transférez le montant au client." },
      { en: "Bill yourself the glasses and wire transfer the bill amount to the customer.", fr: "Facturez-vous les lunettes et transférez le montant de la facture au client." },
    ],
    explanation: {
      en: "Source Odoo Learn (Issue a credit note): Create a note from the invoice and remove the cutlery from the credit note’s products, then confirm it.",
      fr: "Source Odoo Learn (Émettre un avoir) : Créez une note à partir de la facture et retirez les couverts des produits de l'avoir, puis confirmez-la.",
    },
  }),
mcq3Q({
    id: "acc-054",
    module: "accounting",
    text: {
      en: "You refunded only the set of wine glasses, the cutlery remains invoiced. You have not received any payment from the customer yet for that invoice. The credit note was created through the invoice, confirmed, and sent. What is the status of the invoice related to that credit note? (Odoo Learn — Issue a credit note)",
      fr: "Vous avez remboursé uniquement le set de verres à vin, les couverts restent facturés. Vous n'avez encore reçu aucun paiement du client pour cette facture. La note de crédit a été créée via la facture, confirmée et envoyée. Quel est le statut de la facture liée à cette note de crédit ? (Odoo Learn — Émettre une note de crédit)",
    },
    correct: {
      en: "Partially paid.",
      fr: "Partiellement payé.",
    },
    distractors: [
      { en: "In payment.", fr: "En paiement." },
      { en: "Fully paid.", fr: "Entièrement payé." },
    ],
    explanation: {
      en: "Source Odoo Learn (Issue a credit note): Partially paid.",
      fr: "Source Odoo Learn (Émettre un avoir) : Partiellement payé.",
    },
  }),
mcq3Q({
    id: "acc-055",
    module: "accounting",
    text: {
      en: "When posting a credit note created from an invoice, what is the note automatically reconciled with? (Odoo Learn — Issue a credit note)",
      fr: "Lors de la validation d'un avoir créé à partir d'une facture, avec quoi la note est-elle automatiquement rapprochée ? (Odoo Learn — Émettre une note de crédit)",
    },
    correct: {
      en: "With the invoice.",
      fr: "Avec la facture.",
    },
    distractors: [
      { en: "The payment of the credit note.", fr: "Le paiement de l'avoir." },
      { en: "With itself.", fr: "Avec lui-même." },
    ],
    explanation: {
      en: "Source Odoo Learn (Issue a credit note): With the invoice.",
      fr: "Source Odoo Learn (Émettre un avoir) : Avec la facture.",
    },
  }),
complexQ({
    id: "acc-056",
    module: "accounting",
    text: {
      en: "In the journal items tab on a vendor bill, what defines the amount you owe to the vendor? (Odoo Learn — Register a vendor bill)",
      fr: "Dans l'onglet des éléments de journal d'une facture fournisseur, qu'est-ce qui définit le montant que vous devez au fournisseur ? (Odoo Learn — Enregistrer une facture fournisseur)",
    },
    correct: {
      en: "A credit in the Account Payable",
      fr: "Un crédit dans le compte à payer",
    },
    distractors: [
      { en: "A debit in the Account Payable", fr: "Un débit dans le compte à payer" },
      { en: "A credit in the Account Receivable", fr: "Un crédit dans le compte à recevoir" },
      { en: "A debit in the Account Receivable", fr: "Un débit dans le Compte Client" },
    ],
    explanation: {
      en: "Source Odoo Learn (Register a vendor bill): A credit in the Account Payable",
      fr: "Source Odoo Learn (Enregistrer une facture fournisseur) : Un crédit dans le Compte Fournisseur",
    },
  }),
mcq3Q({
    id: "acc-057",
    module: "accounting",
    text: {
      en: "If a bill has two different products with the same tax. What are the journal items created? (Odoo Learn — Register a vendor bill)",
      fr: "Si une facture comporte deux produits différents avec la même taxe. Quels sont les éléments de journal créés ? (Odoo Learn — Enregistrer une facture fournisseur)",
    },
    correct: {
      en: "1 Payable, 2 Expenses, 1 Tax",
      fr: "1 à payer, 2 dépenses, 1 taxe",
    },
    distractors: [
      { en: "2 Payables, 1 Expense, 2 Taxes", fr: "2 dettes, 1 dépense, 2 taxes" },
      { en: "2 Payables, 2 Expenses, 2 Taxes", fr: "2 dettes, 2 dépenses, 2 taxes" },
    ],
    explanation: {
      en: "Source Odoo Learn (Register a vendor bill): 1 Payable, 2 Expenses, 1 Tax",
      fr: "Source Odoo Learn (Enregistrer une facture fournisseur) : 1 à payer, 2 dépenses, 1 taxe",
    },
  }),
mcq3Q({
    id: "acc-058",
    module: "accounting",
    text: {
      en: "When you add products to a bill, the account is automatically filled in as \"60000 Expenses\". Why is that account selected by default? (Odoo Learn — Register a vendor bill)",
      fr: "Lorsque vous ajoutez des produits à une facture, le compte est automatiquement renseigné sous la forme « 60000 Dépenses ». Pourquoi ce compte est-il sélectionné par défaut ? (Odoo Learn — Enregistrer une facture fournisseur)",
    },
    correct: {
      en: "The Expenses account is the Vendor Bill journal's default account. To verify this answer, open the journal's form view from the Configuration menu.",
      fr: "Le compte Dépenses est le compte par défaut du journal Facture fournisseur. Pour vérifier cette réponse, ouvrez la vue formulaire du journal à partir du menu Configuration.",
    },
    distractors: [
      { en: "This account comes from the vendor's payable account field in the accounting tab of the vendor's contact record.", fr: "Ce compte provient du champ Compte payable du fournisseur dans l'onglet comptabilité de la fiche contact du fournisseur." },
      { en: "This Expenses account comes from the customer's payment account. Open the vendor’s form and check the accounting tab to verify this answer.", fr: "Ce compte Dépenses est issu du compte de paiement du client. Ouvrez le formulaire du fournisseur et vérifiez l'onglet comptabilité pour vérifier cette réponse." },
    ],
    explanation: {
      en: "Source Odoo Learn (Register a vendor bill): The Expenses account is the Vendor Bill journal's default account. To verify this answer, open the journal's form view from the Configuration menu.",
      fr: "Source Odoo Learn (Enregistrer une facture fournisseur) : Le compte Dépenses est le compte par défaut du journal Facture fournisseur. Pour vérifier cette réponse, ouvrez la vue formulaire du journal à partir du menu Configuration.",
    },
  }),
mcq3Q({
    id: "acc-059",
    module: "accounting",
    text: {
      en: "How can a vendor bill be created? (Odoo Learn — Register a vendor bill)",
      fr: "Comment créer une facture fournisseur ? (Odoo Learn — Enregistrer une facture fournisseur)",
    },
    correct: {
      en: "Manually, by uploading a document, and by sending an email to an email alias.",
      fr: "Manuellement, en téléchargeant un document et en envoyant un e-mail à un alias de messagerie.",
    },
    distractors: [
      { en: "Manually, by adding a document to the calendar meetings.", fr: "Manuellement, en ajoutant un document au calendrier des réunions." },
      { en: "Automatically by sending an email to the administrator of the database.", fr: "Automatiquement en envoyant un email à l'administrateur de la base de données." },
    ],
    explanation: {
      en: "Source Odoo Learn (Register a vendor bill): Manually, by uploading a document, and by sending an email to an email alias.",
      fr: "Source Odoo Learn (Enregistrer une facture fournisseur) : manuellement, en téléchargeant un document et en envoyant un e-mail à un alias de messagerie.",
    },
  }),
complexQ({
    id: "acc-060",
    module: "accounting",
    text: {
      en: "What happens when you upload a PDF with multiple bills in Odoo? (Odoo Learn — Vendor bill digitization)",
      fr: "Que se passe-t-il lorsque vous téléchargez un PDF avec plusieurs factures dans Odoo ? (Odoo Learn — Numérisation des factures fournisseurs)",
    },
    correct: {
      en: "Clicking on the scissors button allows you to choose where to split the PDF.",
      fr: "Cliquer sur le bouton des ciseaux vous permet de choisir où diviser le PDF.",
    },
    distractors: [
      { en: "Odoo automatically separates the PDF into the individual bills based on the OCR.", fr: "Odoo sépare automatiquement le PDF en factures individuelles en fonction de l'OCR." },
      { en: "Odoo suggests where each bill should be separated but asks you to confirm the separation.", fr: "Odoo suggère où chaque facture doit être séparée mais vous demande de confirmer la séparation." },
      { en: "Bills must be uploaded in separate PDF files.", fr: "Les factures doivent être téléchargées dans des fichiers PDF séparés." },
    ],
    explanation: {
      en: "Source Odoo Learn (Vendor bill digitization): Clicking on the scissors button allows you to choose where to split the PDF.",
      fr: "Source Odoo Learn (Numérisation des factures fournisseurs) : Cliquer sur le bouton ciseaux permet de choisir où diviser le PDF.",
    },
  }),
complexQ({
    id: "acc-061",
    module: "accounting",
    text: {
      en: "What does the OCR do? (Odoo Learn — Vendor bill digitization)",
      fr: "A quoi sert l'OCR ? (Odoo Learn — Numérisation des factures fournisseurs)",
    },
    correct: {
      en: "Recognize which texts on the bill belong in which fields in Odoo",
      fr: "Reconnaître quels textes sur la facture appartiennent à quels champs dans Odoo",
    },
    distractors: [
      { en: "Predict information based on past bills from this vendor", fr: "Prédire les informations basées sur les factures antérieures de ce fournisseur" },
      { en: "Automatically add any new fields present on the bill that aren’t in Odoo", fr: "Ajoutez automatiquement tous les nouveaux champs présents sur la facture qui ne sont pas dans Odoo" },
      { en: "Automatically separate a PDF with multiple bills into individual bills", fr: "Séparez automatiquement un PDF contenant plusieurs factures en factures individuelles" },
    ],
    explanation: {
      en: "Source Odoo Learn (Vendor bill digitization): Recognize which texts on the bill belong in which fields in Odoo",
      fr: "Source Odoo Learn (numérisation des factures fournisseurs) : Reconnaître quels textes sur la facture appartiennent à quels champs dans Odoo",
    },
  }),
complexQ({
    id: "acc-062",
    module: "accounting",
    text: {
      en: "What aspects are affected by the Payment Terms? (Odoo Learn — Payment terms & terms and conditions)",
      fr: "Quels aspects sont concernés par les conditions de paiement ? (Odoo Learn — Modalités de paiement et conditions générales)",
    },
    correct: {
      en: "The due date, the payment conditions, and any payment incentives.",
      fr: "La date d'échéance, les conditions de paiement et les éventuelles incitations au paiement.",
    },
    distractors: [
      { en: "The due date.", fr: "La date d'échéance." },
      { en: "All the rules and guidelines the customer must agree to.", fr: "Toutes les règles et directives que le client doit accepter." },
      { en: "The due date and the taxes are applied to the invoice.", fr: "La date d'échéance et les taxes sont appliquées à la facture." },
    ],
    explanation: {
      en: "Source Odoo Learn (Payment terms & terms and conditions): The due date, the payment conditions, and any payment incentives.",
      fr: "Source Odoo Learn (Conditions de paiement et conditions générales) : La date d'échéance, les conditions de paiement et les éventuelles incitations de paiement.",
    },
  }),
complexQ({
    id: "acc-063",
    module: "accounting",
    text: {
      en: "Is it possible to customize your T&Cs related to a specific invoice/order/quotation? (Odoo Learn — Payment terms & terms and conditions)",
      fr: "Est-il possible de personnaliser vos CGV liées à une facture/commande/devis spécifique ? (Odoo Learn — Modalités de paiement et conditions générales)",
    },
    correct: {
      en: "Yes, you can update the default T&Cs in the document when you create it.",
      fr: "Oui, vous pouvez mettre à jour les conditions générales par défaut dans le document lorsque vous le créez.",
    },
    distractors: [
      { en: "Yes, but only if the modifications are related to minor changes.", fr: "Oui, mais seulement si les modifications sont liées à des changements mineurs." },
      { en: "No, you have to modify the default T&Cs.", fr: "Non, vous devez modifier les CGU par défaut." },
      { en: "No, T&Cs cannot be updated.", fr: "Non, les conditions générales ne peuvent pas être mises à jour." },
    ],
    explanation: {
      en: "Source Odoo Learn (Payment terms & terms and conditions): Yes, you can update the default T&Cs in the document when you create it.",
      fr: "Source Odoo Learn (Conditions de paiement et conditions générales) : Oui, vous pouvez mettre à jour les CGU par défaut dans le document lorsque vous le créez.",
    },
  }),
mcq3Q({
    id: "acc-064",
    module: "accounting",
    text: {
      en: "What are the different formats available for T&C on the invoice? (Odoo Learn — Payment terms & terms and conditions)",
      fr: "Quels sont les différents formats disponibles pour les CGV sur la facture ? (Odoo Learn — Modalités de paiement et conditions générales)",
    },
    correct: {
      en: "Text on the invoice and link to the webpage on the invoice.",
      fr: "Texte sur la facture et lien vers la page Web sur la facture.",
    },
    distractors: [
      { en: "Text on the invoice and QR code on the invoice.", fr: "Texte sur la facture et QR code sur la facture." },
      { en: "Link to the webpage on the invoice and QR code on the invoice.", fr: "Lien vers la page Web sur la facture et le code QR sur la facture." },
    ],
    explanation: {
      en: "Source Odoo Learn (Payment terms & terms and conditions): Text on the invoice and link to the webpage on the invoice.",
      fr: "Source Odoo Learn (Conditions de paiement et conditions générales) : Texte sur la facture et lien vers la page Web sur la facture.",
    },
  }),
complexQ({
    id: "acc-065",
    module: "accounting",
    text: {
      en: "What are outstanding accounts used for? (Odoo Learn — Payments and outstanding accounts)",
      fr: "A quoi servent les comptes impayés ? (Odoo Learn — Paiements et comptes impayés)",
    },
    correct: {
      en: "They are temporary holding accounts used to record the registered payment of an invoice or bill until the payment can be reconciled with the bank transaction.",
      fr: "Il s'agit de comptes de dépôt temporaires utilisés pour enregistrer le paiement enregistré d'une facture ou d'un effet jusqu'à ce que le paiement puisse être rapproché de la transaction bancaire.",
    },
    distractors: [
      { en: "They are temporary holding accounts used to mark unpaid invoices and bills for the aged receivables and aged payables reports.", fr: "Il s'agit de comptes de dépôt temporaires utilisés pour marquer les factures impayées et les factures pour les rapports sur les créances et les dettes âgées." },
      { en: "They are temporary holding accounts used to balance the registered partial payment of an invoice or bill until the full payment is made.", fr: "Il s'agit de comptes de dépôt temporaires utilisés pour équilibrer le paiement partiel enregistré d'une facture ou d'un effet de commerce jusqu'au paiement intégral." },
      { en: "They are temporary holding accounts used for batch payments.", fr: "Il s'agit de comptes de dépôt temporaires utilisés pour les paiements groupés." },
    ],
    explanation: {
      en: "Source Odoo Learn (Payments and outstanding accounts): They are temporary holding accounts used to record the registered payment of an invoice or bill until the payment can be reconciled with the bank transaction.",
      fr: "Source Odoo Learn (Paiements et comptes impayés) : Ce sont des comptes de dépôt temporaires utilisés pour enregistrer le paiement enregistré d'une facture ou d'un effet jusqu'à ce que le paiement puisse être rapproché de la transaction bancaire.",
    },
  }),
complexQ({
    id: "acc-066",
    module: "accounting",
    text: {
      en: "When is an invoice or bill marked as “Paid” in Odoo? (Odoo Learn — Payments and outstanding accounts)",
      fr: "Quand une facture est-elle marquée comme « Payée » dans Odoo ? (Odoo Learn — Paiements et comptes impayés)",
    },
    correct: {
      en: "When the full payment or the invoice/bill itself is reconciled with the bank transaction.",
      fr: "Lorsque le paiement intégral ou la facture elle-même est rapproché de la transaction bancaire.",
    },
    distractors: [
      { en: "When any payment is made on the invoice or bill, regardless of the amount.", fr: "Lorsqu'un paiement est effectué sur la facture ou l'addition, quel que soit le montant." },
      { en: "When the full payment is registered and linked to that invoice or bill.", fr: "Lorsque le paiement intégral est enregistré et lié à cette facture ou facture." },
      { en: "When the full payment is registered.", fr: "Lorsque le paiement intégral est enregistré." },
    ],
    explanation: {
      en: "Source Odoo Learn (Payments and outstanding accounts): When the full payment or the invoice/bill itself is reconciled with the bank transaction.",
      fr: "Source Odoo Learn (Paiements et comptes impayés) : Lorsque le paiement intégral ou la facture elle-même est rapprochée de la transaction bancaire.",
    },
  }),
complexQ({
    id: "acc-067",
    module: "accounting",
    text: {
      en: "What is the purpose of the “Group Payments” option? (Odoo Learn — Payments and outstanding accounts)",
      fr: "A quoi sert l’option « Paiements de Groupe » ? (Odoo Learn — Paiements et comptes impayés)",
    },
    correct: {
      en: "To have only one payment per partner instead of per bill.",
      fr: "N'avoir qu'un seul paiement par partenaire au lieu de par facture.",
    },
    distractors: [
      { en: "To have all invoices or bills under one single payment.", fr: "Pour avoir toutes les factures ou factures sous un seul paiement." },
      { en: "To group up bills by payment type.", fr: "Pour regrouper les factures par type de paiement." },
      { en: "To group all reconciled payments into one group and all unreconciled payments into another group.", fr: "Pour regrouper tous les paiements rapprochés dans un groupe et tous les paiements non rapprochés dans un autre groupe." },
    ],
    explanation: {
      en: "Source Odoo Learn (Payments and outstanding accounts): To have only one payment per partner instead of per bill.",
      fr: "Source Odoo Learn (Paiements et impayés) : Pour n'avoir qu'un seul paiement par partenaire au lieu de par facture.",
    },
  }),
complexQ({
    id: "acc-068",
    module: "accounting",
    text: {
      en: "How does using the “Pay” button on an invoice or bill differ from manually creating a payment for the same amount? (Odoo Learn — Payments and outstanding accounts)",
      fr: "En quoi l'utilisation du bouton « Payer » sur une facture ou une facture diffère-t-elle de la création manuelle d'un paiement du même montant ? (Odoo Learn — Paiements et comptes impayés)",
    },
    correct: {
      en: "The “Pay” button automatically reconciles the payment with the invoice or bill.",
      fr: "Le bouton « Payer » rapproche automatiquement le paiement avec la facture ou l'addition.",
    },
    distractors: [
      { en: "The “Pay” button automatically reconciles the payment with the bank transaction.", fr: "Le bouton « Payer » rapproche automatiquement le paiement avec la transaction bancaire." },
      { en: "The “Pay” button automatically reconciles the payment with the invoice or bill and also automatically reconciles it with the bank transaction.", fr: "Le bouton « Payer » rapproche automatiquement le paiement avec la facture ou l'addition et le rapproche également automatiquement avec la transaction bancaire." },
      { en: "The “Pay” button automatically pays the full invoice or bill amount, whereas manually creating a payment is the only way to register a partial payment.", fr: "Le bouton « Payer » paie automatiquement la totalité de la facture ou le montant de la facture, alors que la création manuelle d'un paiement est le seul moyen d'enregistrer un paiement partiel." },
    ],
    explanation: {
      en: "Source Odoo Learn (Payments and outstanding accounts): The “Pay” button automatically reconciles the payment with the invoice or bill.",
      fr: "Source Odoo Learn (Paiements et comptes impayés) : Le bouton « Payer » rapproche automatiquement le paiement avec la facture ou l'addition.",
    },
  }),
complexQ({
    id: "acc-069",
    module: "accounting",
    text: {
      en: "How can I bypass the need for transaction reconciliation in the case of cash payments? (Odoo Learn — Payments and outstanding accounts)",
      fr: "Comment puis-je éviter le besoin de rapprochement des transactions en cas de paiements en espèces ? (Odoo Learn — Paiements et comptes impayés)",
    },
    correct: {
      en: "On the Cash journal, set the payment method’s “Outstanding Payments” account to the journal’s main ‘Cash’ account. Then use this payment method when registering the payment.",
      fr: "Dans le journal de trésorerie, définissez le compte « Paiements impayés » du mode de paiement sur le compte « Cash » principal du journal. Utilisez ensuite ce mode de paiement lors de l'enregistrement du paiement.",
    },
    distractors: [
      { en: "On the Cash journal, set the payment method’s “Outstanding Payments” account to an ‘outstanding’ account. Then use this payment method when registering the payment.", fr: "Dans le journal de trésorerie, définissez le compte « Paiements impayés » du mode de paiement sur un compte « impayé ». Utilisez ensuite ce mode de paiement lors de l'enregistrement du paiement." },
      { en: "Create a manual payment, set the journal to “Cash” and then link that payment to the invoice or bill.", fr: "Créez un paiement manuel, définissez le journal sur « Espèces », puis associez ce paiement à la facture ou à la facture." },
      { en: "On the Cash journal, leave the “Outstanding Payments” account of the blank.", fr: "Sur le journal de trésorerie, laissez le compte « Encours impayés » vide." },
    ],
    explanation: {
      en: "Source Odoo Learn (Payments and outstanding accounts): On the Cash journal, set the payment method’s “Outstanding Payments” account to the journal’s main ‘Cash’ account. Then use this payment method when registering the payment.",
      fr: "Source Odoo Learn (Paiements et comptes impayés) : Dans le journal Cash, définissez le compte « Paiements impayés » du mode de paiement sur le compte principal « Cash » du journal. Utilisez ensuite ce mode de paiement lors de l'enregistrement du paiement.",
    },
  }),
complexQ({
    id: "acc-070",
    module: "accounting",
    text: {
      en: "When the Country field in the Configuration tab of a payment provider is empty, this means that (Odoo Learn — Online payments)",
      fr: "Lorsque le champ Pays de l'onglet Configuration d'un prestataire de paiement est vide, cela signifie que (Odoo Learn — Paiements en ligne)",
    },
    correct: {
      en: "This payment provider is available for customers in all countries.",
      fr: "Ce fournisseur de paiement est disponible pour les clients de tous les pays.",
    },
    distractors: [
      { en: "This payment provider is not available for customers in any country.", fr: "Ce fournisseur de paiement n’est disponible pour les clients d’aucun pays." },
      { en: "This payment provider is available only for customers in the same country as the company.", fr: "Ce fournisseur de paiement est disponible uniquement pour les clients du même pays que l'entreprise." },
      { en: "The payment provider cannot be activated until the country field is populated.", fr: "Le prestataire de paiement ne peut pas être activé tant que le champ du pays n'est pas renseigné." },
    ],
    explanation: {
      en: "Source Odoo Learn (Online payments): This payment provider is available for customers in all countries.",
      fr: "Source Odoo Learn (Paiements en ligne) : Ce fournisseur de paiement est disponible pour les clients de tous les pays.",
    },
  }),
complexQ({
    id: "acc-071",
    module: "accounting",
    text: {
      en: "How can the message that is displayed in the customer portal when an invoice is paid online be modified? (Odoo Learn — Online payments)",
      fr: "Comment modifier le message qui s'affiche sur le portail client lors du paiement d'une facture en ligne ? (Odoo Learn — Paiements en ligne)",
    },
    correct: {
      en: "From the payment provider record, open the Messages tab and edit the message text.",
      fr: "À partir de l'enregistrement du fournisseur de paiement, ouvrez l'onglet Messages et modifiez le texte du message.",
    },
    distractors: [
      { en: "From the payment provider record, enter Studio and edit the message text.", fr: "À partir de l'enregistrement du fournisseur de paiement, entrez dans Studio et modifiez le texte du message." },
      { en: "From the customer portal, enter Studio and edit the message text.", fr: "Depuis le portail client, entrez dans Studio et modifiez le texte du message." },
      { en: "This message is not modifiable.", fr: "Ce message n'est pas modifiable." },
    ],
    explanation: {
      en: "Source Odoo Learn (Online payments): From the payment provider record, open the Messages tab and edit the message text.",
      fr: "Source Odoo Learn (Paiements en ligne) : Depuis l'enregistrement du fournisseur de paiement, ouvrez l'onglet Messages et modifiez le texte du message.",
    },
  }),
complexQ({
    id: "acc-072",
    module: "accounting",
    text: {
      en: "What is the payment status of an invoice after being paid online? (Odoo Learn — Online payments)",
      fr: "Quel est l’état de paiement d’une facture après avoir été payée en ligne ? (Odoo Learn — Paiements en ligne)",
    },
    correct: {
      en: "In payment",
      fr: "En paiement",
    },
    distractors: [
      { en: "Received", fr: "Reçu" },
      { en: "Paid", fr: "Payé" },
      { en: "Paid online", fr: "Payé en ligne" },
    ],
    explanation: {
      en: "Source Odoo Learn (Online payments): In payment",
      fr: "Source Odoo Learn (Paiements en ligne) : En paiement",
    },
  }),
complexQ({
    id: "acc-073",
    module: "accounting",
    text: {
      en: "What actions are available when defining a follow-up? (Odoo Learn — Customer payment follow-up)",
      fr: "Quelles actions sont disponibles lors de la définition d'un suivi ? (Odoo Learn — Suivi des paiements clients)",
    },
    correct: {
      en: "Email, SMS, letter, WhatsApp.",
      fr: "Email, SMS, lettre, WhatsApp.",
    },
    distractors: [
      { en: "Email, SMS, voicemail, letter.", fr: "Email, SMS, messagerie vocale, lettre." },
      { en: "Email, letter, fax.", fr: "E-mail, lettre, fax." },
      { en: "Letter, SMS, voicemail.", fr: "Lettre, SMS, messagerie vocale." },
    ],
    explanation: {
      en: "Source Odoo Learn (Customer payment follow-up): Email, SMS, letter, WhatsApp.",
      fr: "Source Odoo Learn (Suivi des paiements clients) : Email, SMS, lettre, WhatsApp.",
    },
  }),
complexQ({
    id: "acc-074",
    module: "accounting",
    text: {
      en: "How can you make sure reminders are sent to all customers with overdue invoices? (Odoo Learn — Customer payment follow-up)",
      fr: "Comment pouvez-vous vous assurer que des rappels sont envoyés à tous les clients dont les factures sont en retard ? (Odoo Learn — Suivi des paiements clients)",
    },
    correct: {
      en: "Filter the Customers list view by \"Requires Follow-up\", select the customers, and click \"Process Follow-ups\" in the Actions menu.",
      fr: "Filtrez la vue de la liste Clients par « Nécessite un suivi », sélectionnez les clients et cliquez sur « Traiter les suivis » dans le menu Actions.",
    },
    distractors: [
      { en: "Filter the Invoices list by \"Overdue”, group by Partner, select the invoices, and click \"Follow-ups\" in the Actions menu.", fr: "Filtrez la liste des factures par « En retard », regroupez par Partenaire, sélectionnez les factures et cliquez sur « Suivis » dans le menu Actions." },
      { en: "Filter the Invoices list by \"Requires Follow-up\", group by Partner, select the invoices, and click \"Follow-ups\" in the Actions menu.", fr: "Filtrez la liste des factures par « Suivi requis », regroupez par partenaire, sélectionnez les factures et cliquez sur « Suivis » dans le menu Actions." },
      { en: "On the Accounting dashboard, click the \"Process Follow-ups\" option on the sales journal.", fr: "Sur le tableau de bord Comptabilité, cliquez sur l'option « Suivi des processus » sur le journal des ventes." },
    ],
    explanation: {
      en: "Source Odoo Learn (Customer payment follow-up): Filter the Customers list view by \"Requires Follow-up\", select the customers, and click \"Process Follow-ups\" in the Actions menu.",
      fr: "Source Odoo Learn (Suivi des paiements clients) : Filtrez la vue Liste des clients par « Suivi requis », sélectionnez les clients, puis cliquez sur « Traiter les suivis » dans le menu Actions.",
    },
  }),
complexQ({
    id: "acc-075",
    module: "accounting",
    text: {
      en: "Where can you configure the follow-up actions? (Odoo Learn — Customer payment follow-up)",
      fr: "Où pouvez-vous configurer les actions de suivi ? (Odoo Learn — Suivi des paiements clients)",
    },
    correct: {
      en: "In the Configuration menu, select Follow-up Levels.  Actions can be chosen for each level and set as automatic or not.",
      fr: "Dans le menu Configuration, sélectionnez Niveaux de suivi.  Les actions peuvent être choisies pour chaque niveau et définies comme automatiques ou non.",
    },
    distractors: [
      { en: "In the Accounting tab of the customer’s form, actions can be configured in the Invoice Follow-ups section and set as automatic or not.", fr: "Dans l’onglet Comptabilité du formulaire client, les actions peuvent être paramétrées dans la section Suivi des factures et définies comme automatiques ou non." },
      { en: "In the Configuration menu, select Follow-up Levels. The action options are enabled/disabled from the Follow-up Levels list view.", fr: "Dans le menu Configuration, sélectionnez Niveaux de suivi. Les options d'action sont activées/désactivées à partir de la vue de liste Niveaux de suivi." },
      { en: "Follow-up actions are pre-configured by default and cannot be customized. However, they can be set automatically or manually in the Accounting tab of the customer form.", fr: "Les actions de suivi sont préconfigurées par défaut et ne peuvent pas être personnalisées. Cependant, ils peuvent être paramétrés automatiquement ou manuellement dans l'onglet Comptabilité du formulaire client." },
    ],
    explanation: {
      en: "Source Odoo Learn (Customer payment follow-up): In the Configuration menu, select Follow-up Levels.  Actions can be chosen for each level and set as automatic or not.",
      fr: "Source Odoo Learn (Suivi des paiements clients) : Dans le menu Configuration, sélectionnez Niveaux de suivi.  Les actions peuvent être choisies pour chaque niveau et définies comme automatiques ou non.",
    },
  }),
complexQ({
    id: "acc-076",
    module: "accounting",
    text: {
      en: "How can I check if follow-up actions have been taken for a customer? (Odoo Learn — Customer payment follow-up)",
      fr: "Comment puis-je vérifier si des actions de suivi ont été prises pour un client ? (Odoo Learn — Suivi des paiements clients)",
    },
    correct: {
      en: "In the Customer form, the chatter keeps a full record of all Follow-up actions.",
      fr: "Dans le formulaire Client, le chat conserve un enregistrement complet de toutes les actions de suivi.",
    },
    distractors: [
      { en: "Only the person listed in the Responsible field of the Invoice Follow-ups section can view the follow-up actions taken.", fr: "Seule la personne répertoriée dans le champ Responsable de la section Suivi des factures peut visualiser les actions de suivi effectuées." },
      { en: "In the customer form, the chatter keeps a full record of all follow-up actions only if the Responsible is filled in the Invoice Follow-ups section.", fr: "Dans le formulaire client, le chater conserve un enregistrement complet de toutes les actions de suivi uniquement si le responsable est renseigné dans la section Suivi des factures." },
      { en: "By grouping by Customers in the Customer Follow-up report in the Customer menu.", fr: "En regroupant par Clients dans le rapport Suivi Client du menu Client." },
    ],
    explanation: {
      en: "Source Odoo Learn (Customer payment follow-up): In the Customer form, the chatter keeps a full record of all Follow-up actions.",
      fr: "Source Odoo Learn (Suivi des paiements client) : Dans le formulaire Client, le chateur conserve un enregistrement complet de toutes les actions de suivi.",
    },
  }),
complexQ({
    id: "acc-077",
    module: "accounting",
    text: {
      en: "How can a customer's total overdue amount be checked? (Odoo Learn — Customer payment follow-up)",
      fr: "Comment vérifier le montant total en souffrance d'un client ? (Odoo Learn — Suivi des paiements clients)",
    },
    correct: {
      en: "On the Due smart button, available in the customer’s form, and when clicking it, in the Follow-up Report.",
      fr: "Sur le bouton intelligent Due, disponible dans le formulaire client, et en cliquant dessus, dans le rapport de suivi.",
    },
    distractors: [
      { en: "The total overdue amount is displayed in the Overdue field in the Invoice Follow-Ups section of a customer’s form.", fr: "Le montant total en retard est affiché dans le champ En retard de la section Suivi des factures du formulaire d'un client." },
      { en: "Click the Customer Statement smart button available in the customer’s form.", fr: "Cliquez sur le bouton intelligent Relevé client disponible dans le formulaire client." },
      { en: "The total overdue amount cannot be known; it can only be checked on individual invoices.", fr: "Le montant total du retard ne peut être connu ; cela ne peut être vérifié que sur des factures individuelles." },
    ],
    explanation: {
      en: "Source Odoo Learn (Customer payment follow-up): On the Due smart button, available in the customer’s form, and when clicking it, in the Follow-up Report.",
      fr: "Source Odoo Learn (Suivi des paiements client) : Sur le bouton intelligent Due, disponible dans le formulaire client, et en cliquant dessus, dans le Rapport de Suivi.",
    },
  }),
mcq3Q({
    id: "acc-078",
    module: "accounting",
    text: {
      en: "If you have a 2% cash discount on a 1000.00€ invoice and the “Reduced Tax” is set to “Always”, what will be the base for the tax? (Odoo Learn — Cash discounts)",
      fr: "Si vous bénéficiez d'un escompte de 2% sur une facture de 1000,00€ et que la « Taxe réduite » est réglée sur « Toujours », quelle sera la base de la taxe ? (Odoo Learn — Remises en espèces)",
    },
    correct: {
      en: "980.00€",
      fr: "980,00€",
    },
    distractors: [
      { en: "1000.00€", fr: "1000.00€" },
      { en: "1000.00€ or 980.00€ depending on if the customer paid early", fr: "1000,00€ ou 980,00€ selon si le client a payé tôt" },
    ],
    explanation: {
      en: "Source Odoo Learn (Cash discounts): 980.00€",
      fr: "Source Odoo Learn (Remises en espèces) : 980,00€",
    },
  }),
mcq3Q({
    id: "acc-079",
    module: "accounting",
    text: {
      en: "How can the customer know about the payment terms and the cash discount? (Odoo Learn — Cash discounts)",
      fr: "Comment le client peut-il connaître les conditions de paiement et l’escompte ? (Odoo Learn — Remises en espèces)",
    },
    correct: {
      en: "The payment terms are written on the invoice.",
      fr: "Les modalités de paiement sont inscrites sur la facture.",
    },
    distractors: [
      { en: "Both parties agreed upon payment terms before the quotation.", fr: "Les deux parties ont convenu des conditions de paiement avant l'offre." },
      { en: "The payment terms are written on the quotation.", fr: "Les modalités de paiement sont inscrites sur le devis." },
    ],
    explanation: {
      en: "Source Odoo Learn (Cash discounts): The payment terms are written on the invoice.",
      fr: "Source Odoo Learn (Remises en espèces) : Les modalités de paiement sont inscrites sur la facture.",
    },
  }),
complexQ({
    id: "acc-080",
    module: "accounting",
    text: {
      en: "What does the Bank Suspense account do? (Odoo Learn — Bank configuration)",
      fr: "À quoi sert le compte d’attente bancaire ? (Odoo Learn — Configuration bancaire)",
    },
    correct: {
      en: "It temporarily holds a balance between creating a bank transaction and reconciling it.",
      fr: "Il maintient temporairement un équilibre entre la création d'une transaction bancaire et son rapprochement.",
    },
    distractors: [
      { en: "It temporarily holds a balance between making/receiving a payment and reconciling it with a bank transaction.", fr: "Il détient temporairement un équilibre entre effectuer/recevoir un paiement et le rapprocher d’une transaction bancaire." },
      { en: "It balances the journal entries of any transfers made from one bank or cash account to another.", fr: "Il équilibre les écritures de journal de tout virement effectué d’un compte bancaire ou de caisse à un autre." },
      { en: "It suspends all journal entries in the bank journal until after the all-user lock date.", fr: "Il suspend toutes les écritures du journal bancaire jusqu'à la date de verrouillage pour tous les utilisateurs." },
    ],
    explanation: {
      en: "Source Odoo Learn (Bank configuration): It temporarily holds a balance between creating a bank transaction and reconciling it.",
      fr: "Source Odoo Learn (Configuration bancaire) : Il maintient temporairement un équilibre entre la création d'une transaction bancaire et son rapprochement.",
    },
  }),
complexQ({
    id: "acc-081",
    module: "accounting",
    text: {
      en: "Is the Account number (IBAN) field required on a bank journal? (Odoo Learn — Bank configuration)",
      fr: "Le champ Numéro de compte (IBAN) est-il obligatoire sur un journal bancaire ? (Odoo Learn — Configuration bancaire)",
    },
    correct: {
      en: "No, but the field is required to generate payment files such as SEPA and NACHA.",
      fr: "Non, mais ce champ est obligatoire pour générer des fichiers de paiement tels que SEPA et NACHA.",
    },
    distractors: [
      { en: "Yes.", fr: "Oui." },
      { en: "Yes, but only for the Belgian localization.", fr: "Oui, mais uniquement pour la localisation belge." },
      { en: "No, and the field must be left blank to allow multiple bank accounts to be used with one bank journal.", fr: "Non, et le champ doit rester vide pour permettre l'utilisation de plusieurs comptes bancaires avec un seul journal bancaire." },
    ],
    explanation: {
      en: "Source Odoo Learn (Bank configuration): No, but the field is required to generate payment files such as SEPA and NACHA.",
      fr: "Source Odoo Learn (Configuration bancaire) : Non, mais le champ est obligatoire pour générer des fichiers de paiement tels que SEPA et NACHA.",
    },
  }),
complexQ({
    id: "acc-082",
    module: "accounting",
    text: {
      en: "What is the purpose of creating multiple Outstanding Receipts and Outstanding Payments accounts? (Odoo Learn — Bank configuration)",
      fr: "Quel est l’objectif de créer plusieurs comptes d’encaissements et de paiements impayés ? (Odoo Learn — Configuration bancaire)",
    },
    correct: {
      en: "It allows you to configure each bank/cash journal with its own Outstanding Receipts and Outstanding Payments account to eliminate confusion.",
      fr: "Il vous permet de configurer chaque journal de banque/caisse avec son propre compte d'encaissements et de paiements impayés pour éliminer toute confusion.",
    },
    distractors: [
      { en: "It allows you to have multiple bank/cash journals.", fr: "Il vous permet d'avoir plusieurs journaux de banque/caisse." },
      { en: "It allows you to skip bank reconciliation.", fr: "Il vous permet d’ignorer le rapprochement bancaire." },
      { en: "It is not possible to create multiple Outstanding Receipts and Outstanding Payments accounts.", fr: "Il n'est pas possible de créer plusieurs comptes d'encaissements et de paiements impayés." },
    ],
    explanation: {
      en: "Source Odoo Learn (Bank configuration): It allows you to configure each bank/cash journal with its own Outstanding Receipts and Outstanding Payments account to eliminate confusion.",
      fr: "Source Odoo Learn (configuration bancaire) : Il vous permet de configurer chaque journal bancaire/caisse avec son propre compte d'encours et de paiements impayés pour éliminer toute confusion.",
    },
  }),
complexQ({
    id: "acc-083",
    module: "accounting",
    text: {
      en: "Hovering over a transaction and clicking the Statement button that appears creates a statement that contains which transactions? (Odoo Learn — Bank transactions & bank synchronization)",
      fr: "Passer la souris sur une transaction et cliquer sur le bouton Relevé qui apparaît crée un relevé contenant quelles transactions ? (Odoo Learn — Opérations bancaires et synchronisation bancaire)",
    },
    correct: {
      en: "This transaction and every transaction between this one and the previous statement.",
      fr: "Cette transaction et chaque transaction entre celle-ci et l'instruction précédente.",
    },
    distractors: [
      { en: "Every transaction that doesn’t already belong to a statement.", fr: "Chaque transaction qui n'appartient pas déjà à un relevé." },
      { en: "Every transaction that is currently selected.", fr: "Chaque transaction actuellement sélectionnée." },
      { en: "Every transaction that doesn’t already belong to a statement and is not yet reconciled.", fr: "Chaque transaction qui n'appartient pas déjà à un relevé et n'est pas encore rapprochée." },
    ],
    explanation: {
      en: "Source Odoo Learn (Bank transactions & bank synchronization): This transaction and every transaction between this one and the previous statement.",
      fr: "Source Odoo Learn (Transactions bancaires & synchronisation bancaire) : Cette transaction et chaque transaction entre celle-ci et le relevé précédent.",
    },
  }),
complexQ({
    id: "acc-084",
    module: "accounting",
    text: {
      en: "Which types of journals can be synchronized to automatically create transactions in Odoo? (Odoo Learn — Bank transactions & bank synchronization)",
      fr: "Quels types de journaux peuvent être synchronisés pour créer automatiquement des transactions dans Odoo ? (Odoo Learn — Opérations bancaires et synchronisation bancaire)",
    },
    correct: {
      en: "Bank and Card",
      fr: "Banque et carte",
    },
    distractors: [
      { en: "Bank", fr: "Banque" },
      { en: "Bank, Card, and Cash", fr: "Banque, carte et espèces" },
      { en: "Bank, Card, Cash, and Miscellaneous", fr: "Banque, carte, espèces et divers" },
    ],
    explanation: {
      en: "Source Odoo Learn (Bank transactions & bank synchronization): Bank and Card",
      fr: "Source Odoo Learn (Transactions bancaires & synchronisation bancaire) : Banque et Carte",
    },
  }),
complexQ({
    id: "acc-085",
    module: "accounting",
    text: {
      en: "How can an incorrect bank transaction be edited? (Odoo Learn — Bank transactions & bank synchronization)",
      fr: "Comment modifier une transaction bancaire erronée ? (Odoo Learn — Opérations bancaires et synchronisation bancaire)",
    },
    correct: {
      en: "From the transaction list view, click on the field of any unreconciled transaction and edit it directly.",
      fr: "Dans la vue liste des transactions, cliquez sur le champ de toute transaction non rapprochée et modifiez-la directement.",
    },
    distractors: [
      { en: "From the default transaction Kanban view, click on the field of any unreconciled transaction and edit it directly.", fr: "Depuis la vue Kanban des transactions par défaut, cliquez sur le champ de toute transaction non rapprochée et modifiez-la directement." },
      { en: "From the default transaction Kanban view, click on the field of any transaction and edit it directly.", fr: "Depuis la vue Kanban des transactions par défaut, cliquez sur le champ de n'importe quelle transaction et modifiez-la directement." },
      { en: "From the transaction list view, click on the field of any transaction and edit it directly.", fr: "Dans la vue liste des transactions, cliquez sur le champ de n'importe quelle transaction et modifiez-la directement." },
    ],
    explanation: {
      en: "Source Odoo Learn (Bank transactions & bank synchronization): From the transaction list view, click on the field of any unreconciled transaction and edit it directly.",
      fr: "Source Odoo Learn (Transactions bancaires & synchronisation bancaire) : Depuis la vue liste des transactions, cliquez sur le champ de toute transaction non rapprochée et modifiez-la directement.",
    },
  }),
complexQ({
    id: "acc-086",
    module: "accounting",
    text: {
      en: "When does Odoo suggest the Payable action button? (Odoo Learn — Bank reconciliation)",
      fr: "Quand Odoo suggère-t-il le bouton d’action Payable ? (Odoo Learn — Rapprochement bancaire)",
    },
    correct: {
      en: "When an outgoing transaction’s partner does not have any bills or payments",
      fr: "Lorsque le partenaire d’une transaction sortante n’a aucune facture ou paiement",
    },
    distractors: [
      { en: "When the Payable reconciliation model is set to “Automated”", fr: "Lorsque le modèle de rapprochement des payables est défini sur « Automatisé »" },
      { en: "When an incoming transaction’s partner does not have any invoices or payments", fr: "Lorsque le partenaire d’une transaction entrante n’a aucune facture ou paiement" },
      { en: "When a vendor bill is attached to the transaction", fr: "Lorsqu'une facture fournisseur est jointe à la transaction" },
    ],
    explanation: {
      en: "Source Odoo Learn (Bank reconciliation): When an outgoing transaction’s partner does not have any bills or payments",
      fr: "Source Odoo Learn (Rapprochement bancaire) : Lorsque le partenaire d'une transaction sortante n'a aucune facture ni aucun paiement",
    },
  }),
complexQ({
    id: "acc-087",
    module: "accounting",
    text: {
      en: "What does clicking the trash icon on a reconciled transaction do? (Odoo Learn — Bank reconciliation)",
      fr: "À quoi sert le fait de cliquer sur l'icône de la corbeille lors d'une transaction rapprochée ? (Odoo Learn — Rapprochement bancaire)",
    },
    correct: {
      en: "It unreconciles the transaction.",
      fr: "Cela annule le rapprochement de la transaction.",
    },
    distractors: [
      { en: "It deletes the transaction.", fr: "Il supprime la transaction." },
      { en: "It deletes the vendor bill attached to the transaction.", fr: "Il supprime la facture fournisseur jointe à la transaction." },
      { en: "It removes the partner set on the transaction.", fr: "Il supprime le partenaire défini sur la transaction." },
    ],
    explanation: {
      en: "Source Odoo Learn (Bank reconciliation): It unreconciles the transaction.",
      fr: "Source Odoo Learn (Rapprochement bancaire) : Il annule le rapprochement de la transaction.",
    },
  }),
complexQ({
    id: "acc-088",
    module: "accounting",
    text: {
      en: "What is the purpose of the suspense account? (Odoo Learn — Bank reconciliation)",
      fr: "A quoi sert le compte d’attente ? (Odoo Learn — Rapprochement bancaire)",
    },
    correct: {
      en: "The suspense account acts as a temporary holding account until the transaction is reconciled.",
      fr: "Le compte d'attente fait office de compte de dépôt temporaire jusqu'à ce que la transaction soit rapprochée.",
    },
    distractors: [
      { en: "The suspense account tracks how much your customers owe you.", fr: "Le compte d'attente suit combien vos clients vous doivent." },
      { en: "The suspense account tracks how much you owe your vendors.", fr: "Le compte d'attente suit combien vous devez à vos fournisseurs." },
      { en: "The suspense account acts as a temporary holding account between when a payment is registered in Odoo and when it appears as a bank transaction.", fr: "Le compte d'attente fait office de compte de dépôt temporaire entre le moment où un paiement est enregistré dans Odoo et le moment où il apparaît comme une transaction bancaire." },
    ],
    explanation: {
      en: "Source Odoo Learn (Bank reconciliation): The suspense account acts as a temporary holding account until the transaction is reconciled.",
      fr: "Source Odoo Learn (Rapprochement bancaire) : Le compte d'attente fait office de compte de dépôt temporaire jusqu'à ce que la transaction soit rapprochée.",
    },
  }),
complexQ({
    id: "acc-089",
    module: "accounting",
    text: {
      en: "If a transaction meets the matching requirements of multiple manual reconciliation models, how can you determine which reconciliation model is applied? (Odoo Learn — Reconciliation models)",
      fr: "Si une transaction répond aux exigences de correspondance de plusieurs modèles de rapprochement manuel, comment pouvez-vous déterminer quel modèle de rapprochement est appliqué ? (Odoo Learn — Modèles de réconciliation)",
    },
    correct: {
      en: "When reconciling, click the button of the desired reconciliation model.",
      fr: "Lors du rapprochement, cliquez sur le bouton du modèle de rapprochement souhaité.",
    },
    distractors: [
      { en: "Resequence the reconciliation models by dragging and dropping them in the list view to arrange them from the highest priority reconciliation model at the top to the lowest at the bottom.", fr: "Reordonnez les modèles de rapprochement en les faisant glisser et en les déposant dans la vue de liste pour les organiser du modèle de rapprochement ayant la priorité la plus élevée en haut jusqu'au modèle de rapprochement le plus bas en bas." },
      { en: "When reconciling, resequence the reconciliation models by dragging and dropping the desired reconciliation model to the top; then click Reconcile.", fr: "Lors du rapprochement, reséquencez les modèles de rapprochement en faisant glisser et en déposant le modèle de rapprochement souhaité vers le haut ; puis cliquez sur Réconcilier." },
      { en: "On the form view, assign each reconciliation model a priority of 0 stars to 3 stars.", fr: "Dans la vue formulaire, attribuez à chaque modèle de rapprochement une priorité de 0 étoile à 3 étoiles." },
    ],
    explanation: {
      en: "Source Odoo Learn (Reconciliation models): When reconciling, click the button of the desired reconciliation model.",
      fr: "Source Odoo Learn (Modèles de réconciliation) : Lors de la réconciliation, cliquez sur le bouton du modèle de réconciliation souhaité.",
    },
  }),
complexQ({
    id: "acc-090",
    module: "accounting",
    text: {
      en: "If a transaction meets the matching requirements of multiple automatic reconciliation models, how can you determine which reconciliation model is applied? (Odoo Learn — Reconciliation models)",
      fr: "Si une transaction répond aux exigences de correspondance de plusieurs modèles de rapprochement automatique, comment pouvez-vous déterminer quel modèle de rapprochement est appliqué ? (Odoo Learn — Modèles de réconciliation)",
    },
    correct: {
      en: "Resequence the reconciliation models by dragging and dropping them in the list view to arrange them from the highest priority reconciliation model at the top to the lowest at the bottom.",
      fr: "Reordonnez les modèles de rapprochement en les faisant glisser et en les déposant dans la vue de liste pour les organiser du modèle de rapprochement ayant la priorité la plus élevée en haut jusqu'au modèle de rapprochement le plus bas en bas.",
    },
    distractors: [
      { en: "When reconciling, click the button of the desired reconciliation model.", fr: "Lors du rapprochement, cliquez sur le bouton du modèle de rapprochement souhaité." },
      { en: "When reconciling, resequence the reconciliation models by dragging and dropping the desired reconciliation model to the top; then click Reconcile.", fr: "Lors du rapprochement, reséquencez les modèles de rapprochement en faisant glisser et en déposant le modèle de rapprochement souhaité vers le haut ; puis cliquez sur Réconcilier." },
      { en: "On the form view, assign each reconciliation model a priority of 0 stars to 3 stars.", fr: "Dans la vue formulaire, attribuez à chaque modèle de rapprochement une priorité de 0 étoile à 3 étoiles." },
    ],
    explanation: {
      en: "Source Odoo Learn (Reconciliation models): Resequence the reconciliation models by dragging and dropping them in the list view to arrange them from the highest priority reconciliation model at the top to the lowest at the bottom.",
      fr: "Source Odoo Learn (Modèles de réconciliation) : Reséquencez les modèles de réconciliation en les faisant glisser et en les déposant dans la vue liste pour les organiser du modèle de réconciliation la plus prioritaire en haut au plus bas en bas.",
    },
  }),
complexQ({
    id: "acc-091",
    module: "accounting",
    text: {
      en: "Which of the following accurately describes the “Percentage of balance” Amount Type in the Counterpart Items tab of a reconciliation model? (Odoo Learn — Reconciliation models)",
      fr: "Lequel des énoncés suivants décrit avec précision le type de montant « Pourcentage du solde » dans l'onglet Éléments de contrepartie d'un modèle de rapprochement ? (Odoo Learn — Modèles de réconciliation)",
    },
    correct: {
      en: "A percentage of the transaction’s remaining balance after other lines have distributed amounts to other accounts",
      fr: "Un pourcentage du solde restant de la transaction après que d’autres lignes ont distribué les montants sur d’autres comptes",
    },
    distractors: [
      { en: "A fixed amount", fr: "Un montant fixe" },
      { en: "A percentage of the transaction’s total original balance", fr: "Un pourcentage du solde initial total de la transaction" },
      { en: "An amount parsed from the transaction’s label using regular expressions (regex)", fr: "Un montant analysé à partir de l'étiquette de la transaction à l'aide d'expressions régulières (regex)" },
    ],
    explanation: {
      en: "Source Odoo Learn (Reconciliation models): A percentage of the transaction’s remaining balance after other lines have distributed amounts to other accounts",
      fr: "Source Odoo Learn (modèles de rapprochement) : un pourcentage du solde restant de la transaction après que d'autres lignes ont distribué des montants sur d'autres comptes",
    },
  }),
complexQ({
    id: "acc-092",
    module: "accounting",
    text: {
      en: "What kind of transactions are credit transfers? (Odoo Learn — SEPA Credit Transfer)",
      fr: "Quels types de transactions sont des virements ? (Odoo Learn — Virement SEPA)",
    },
    correct: {
      en: "Outgoing",
      fr: "Sortant",
    },
    distractors: [
      { en: "Ingoing", fr: "Entrant" },
      { en: "Single", fr: "Célibataire" },
      { en: "Multiple", fr: "Multiple" },
    ],
    explanation: {
      en: "Source Odoo Learn (SEPA Credit Transfer): Outgoing",
      fr: "Source Odoo Learn (virement SEPA) : sortant",
    },
  }),
complexQ({
    id: "acc-093",
    module: "accounting",
    text: {
      en: "In Odoo, how can you handle multiple payments at once? (Odoo Learn — SEPA Credit Transfer)",
      fr: "Dans Odoo, comment gérer plusieurs paiements à la fois ? (Odoo Learn — Virement SEPA)",
    },
    correct: {
      en: "Through the “batch payment” function.",
      fr: "Grâce à la fonction « paiement groupé ».",
    },
    distractors: [
      { en: "Through the “configure all” setting.", fr: "Via le paramètre « tout configurer »." },
      { en: "Through the “bill periodicity” function.", fr: "Grâce à la fonction « périodicité des factures »." },
      { en: "You can’t handle more than one payment at a time.", fr: "Vous ne pouvez pas gérer plus d’un paiement à la fois." },
    ],
    explanation: {
      en: "Source Odoo Learn (SEPA Credit Transfer): Through the “batch payment” function.",
      fr: "Source Odoo Learn (Transfert SEPA) : Via la fonction « paiement groupé ».",
    },
  }),
complexQ({
    id: "acc-094",
    module: "accounting",
    text: {
      en: "What must be set on the journal for the mandates to be used? (Odoo Learn — SEPA Direct Debit)",
      fr: "Que doit-on indiquer sur le journal pour que les mandats soient utilisés ? (Odoo Learn — Prélèvement SEPA)",
    },
    correct: {
      en: "A bank account number",
      fr: "Un numéro de compte bancaire",
    },
    distractors: [
      { en: "A mandate identifier", fr: "Un identifiant de mandat" },
      { en: "The currency", fr: "La monnaie" },
      { en: "An outstanding payments account", fr: "Un compte de paiements impayés" },
    ],
    explanation: {
      en: "Source Odoo Learn (SEPA Direct Debit): A bank account number",
      fr: "Source Odoo Learn (Prélèvement SEPA) : Un numéro de compte bancaire",
    },
  }),
complexQ({
    id: "acc-095",
    module: "accounting",
    text: {
      en: "To create an SDD mandate for a B2C customer, which SDD scheme must you use? (Odoo Learn — SEPA Direct Debit)",
      fr: "Pour créer un mandat SDD pour un client B2C, quel schéma SDD devez-vous utiliser ? (Odoo Learn — Prélèvement SEPA)",
    },
    correct: {
      en: "CORE",
      fr: "CŒUR",
    },
    distractors: [
      { en: "B2B", fr: "B2B" },
      { en: "B2C", fr: "B2C" },
      { en: "EU", fr: "UE" },
    ],
    explanation: {
      en: "Source Odoo Learn (SEPA Direct Debit): CORE",
      fr: "Source Odoo Learn (Prélèvement SEPA) : CORE",
    },
  }),
mcq3Q({
    id: "acc-096",
    module: "accounting",
    text: {
      en: "What happens if a customer does not have enough funds in their account? (Odoo Learn — SEPA Direct Debit)",
      fr: "Que se passe-t-il si un client n'a pas suffisamment de fonds sur son compte ? (Odoo Learn — Prélèvement SEPA)",
    },
    correct: {
      en: "The bank will decline the transaction.",
      fr: "La banque refusera la transaction.",
    },
    distractors: [
      { en: "You get a notification from Odoo on the dashboard.", fr: "Vous recevez une notification d'Odoo sur le tableau de bord." },
      { en: "You receive a transaction with a negative amount.", fr: "Vous recevez une transaction avec un montant négatif." },
    ],
    explanation: {
      en: "Source Odoo Learn (SEPA Direct Debit): The bank will decline the transaction.",
      fr: "Source Odoo Learn (SEPA Direct Debit) : La banque refusera la transaction.",
    },
  }),
complexQ({
    id: "acc-097",
    module: "accounting",
    text: {
      en: "Which of the following is not a supported way to create amortization schedules for loans? (Odoo Learn — Loan management)",
      fr: "Lequel des éléments suivants ne constitue pas un moyen pris en charge pour créer des plans d'amortissement pour les prêts ? (Odoo Learn — Gestion des prêts)",
    },
    correct: {
      en: "Syncing with your bank’s amortization schedule feature.",
      fr: "Synchronisation avec la fonction de calendrier d'amortissement de votre banque.",
    },
    distractors: [
      { en: "Importing from a supported file.", fr: "Importation à partir d'un fichier pris en charge." },
      { en: "Calculating it from multiple input values using the Compute button.", fr: "Calculez-le à partir de plusieurs valeurs d’entrée à l’aide du bouton Calculer." },
      { en: "Manually filling in the lines of the schedule.", fr: "Remplir manuellement les lignes du planning." },
    ],
    explanation: {
      en: "Source Odoo Learn (Loan management): Syncing with your bank’s amortization schedule feature.",
      fr: "Source Odoo Learn (Gestion des prêts) : Synchronisation avec la fonction de calendrier d'amortissement de votre banque.",
    },
  }),
complexQ({
    id: "acc-098",
    module: "accounting",
    text: {
      en: "If you have the loan amount, loan term, start date, and interest rate but not the interest amount in currency, can Odoo calculate the interest amount in currency? (Odoo Learn — Loan management)",
      fr: "Si vous avez le montant du prêt, la durée du prêt, la date de début et le taux d’intérêt mais pas le montant des intérêts en devise, Odoo peut-il calculer le montant des intérêts en devise ? (Odoo Learn — Gestion des prêts)",
    },
    correct: {
      en: "Yes, by clicking the Compute button, you can set the relevant fields and Odoo will calculate the interest amount in currency to use on the loan.",
      fr: "Oui, en cliquant sur le bouton Calculer, vous pouvez définir les champs pertinents et Odoo calculera le montant des intérêts en devise à utiliser sur le prêt.",
    },
    distractors: [
      { en: "No, Odoo requires the interest amount in currency and cannot calculate it.", fr: "Non, Odoo exige le montant des intérêts en devise et ne peut pas le calculer." },
      { en: "No, Odoo requires the interest amount in currency to be entered and then calculates the interest rate.", fr: "Non, Odoo exige que le montant des intérêts soit saisi en devise, puis calcule le taux d'intérêt." },
      { en: "Yes, you can make Odoo calculate the interest amount by entering a python formula in the Interest field.", fr: "Oui, vous pouvez demander à Odoo de calculer le montant des intérêts en entrant une formule Python dans le champ Intérêts." },
    ],
    explanation: {
      en: "Source Odoo Learn (Loan management): Yes, by clicking the Compute button, you can set the relevant fields and Odoo will calculate the interest amount in currency to use on the loan.",
      fr: "Source Odoo Learn (Gestion du prêt) : Oui, en cliquant sur le bouton Calculer, vous pouvez définir les champs pertinents et Odoo calculera le montant des intérêts en devise à utiliser sur le prêt.",
    },
  }),
complexQ({
    id: "acc-099",
    module: "accounting",
    text: {
      en: "What is the benefit of using the “Skip until” field on a loan? (Odoo Learn — Loan management)",
      fr: "Quel est l'avantage d'utiliser le champ « Passer jusqu'à » sur un prêt ? (Odoo Learn — Gestion des prêts)",
    },
    correct: {
      en: "This is useful if you have already manually created entries prior to the creation of this loan.",
      fr: "Ceci est utile si vous avez déjà créé manuellement des écritures avant la création de ce prêt.",
    },
    distractors: [
      { en: "This is useful if you want to delay the loan’s start date and have Odoo automatically post the skipped entries after the final entry in the amortization schedule.", fr: "Ceci est utile si vous souhaitez retarder la date de début du prêt et qu'Odoo publie automatiquement les entrées ignorées après la dernière entrée dans le plan d'amortissement." },
      { en: "This is useful if the lender wants to set a second amortization schedule.", fr: "Ceci est utile si le prêteur souhaite établir un deuxième calendrier d’amortissement." },
      { en: "There is no “Skip until” field on a loan.", fr: "Il n’y a pas de champ « Passer jusqu’à » sur un prêt." },
    ],
    explanation: {
      en: "Source Odoo Learn (Loan management): This is useful if you have already manually created entries prior to the creation of this loan.",
      fr: "Source Odoo Learn (Gestion du prêt) : Ceci est utile si vous avez déjà créé manuellement des entrées avant la création de ce prêt.",
    },
  }),
complexQ({
    id: "acc-100",
    module: "accounting",
    text: {
      en: "What is the difference between cancelling and closing a loan? (Odoo Learn — Loan management)",
      fr: "Quelle est la différence entre annuler et clôturer un prêt ? (Odoo Learn — Gestion des prêts)",
    },
    correct: {
      en: "Cancelling a loan deletes all entries, even posted ones, while closing a loan deletes only the draft entries.",
      fr: "L'annulation d'un prêt supprime toutes les écritures, même celles publiées, tandis que la clôture d'un prêt supprime uniquement les brouillons.",
    },
    distractors: [
      { en: "Cancelling a loan deletes all entries, even posted ones, while closing a loan resets posted entries to draft and doesn’t delete any entries.", fr: "L'annulation d'un prêt supprime toutes les entrées, même celles publiées, tandis que la fermeture d'un prêt réinitialise les entrées publiées au brouillon et ne supprime aucune entrée." },
      { en: "Cancelling a loan deletes only draft entries, while closing a loan doesn’t delete any entries and only prevents draft entries from being posted automatically in the future. No post entries are deleted to maintain transparency.", fr: "L'annulation d'un prêt supprime uniquement les brouillons d'écritures, tandis que la clôture d'un prêt ne supprime aucune entrée et empêche uniquement la publication automatique des brouillons d'écritures à l'avenir. Aucune entrée de message n'est supprimée pour maintenir la transparence." },
      { en: "Cancelling and closing a loan are synonymous.", fr: "Annuler et clôturer un prêt sont synonymes." },
    ],
    explanation: {
      en: "Source Odoo Learn (Loan management): Cancelling a loan deletes all entries, even posted ones, while closing a loan deletes only the draft entries.",
      fr: "Source Odoo Learn (Gestion des prêts) : L'annulation d'un prêt supprime toutes les écritures, même celles publiées, tandis que la clôture d'un prêt supprime uniquement les brouillons d'écritures.",
    },
  }),
complexQ({
    id: "acc-101",
    module: "accounting",
    text: {
      en: "How can you view an analysis of closed loans? (Odoo Learn — Loan management)",
      fr: "Comment consulter une analyse des prêts clôturés ? (Odoo Learn — Gestion des prêts)",
    },
    correct: {
      en: "Go to Accounting > Reporting > Loans Analysis, then switch the filter from Current to Closed.",
      fr: "Accédez à Comptabilité > Reporting > Analyse des prêts, puis faites passer le filtre de Actuel à Fermé.",
    },
    distractors: [
      { en: "It’s not possible to view an analysis of closed loans, only open loans.", fr: "Il n’est pas possible de visualiser une analyse des prêts clôturés, uniquement des prêts ouverts." },
      { en: "Go to Accounting > Reporting > Loans Analysis. The closed loans are displayed by default.", fr: "Accédez à Comptabilité > Reporting > Analyse des prêts. Les prêts clôturés sont affichés par défaut." },
      { en: "Go to Accounting > Reporting > Loans Analysis, then remove the filter to show only closed loans.", fr: "Accédez à Comptabilité > Reporting > Analyse des prêts, puis supprimez le filtre pour afficher uniquement les prêts clôturés." },
    ],
    explanation: {
      en: "Source Odoo Learn (Loan management): Go to Accounting > Reporting > Loans Analysis, then switch the filter from Current to Closed.",
      fr: "Source Odoo Learn (Gestion des prêts) : Allez dans Comptabilité > Reporting > Analyse des prêts, puis passez le filtre de Actuel à Fermé.",
    },
  }),
mcq3Q({
    id: "acc-102",
    module: "accounting",
    text: {
      en: "How can you set a rounding method for invoices or bills? (Odoo Learn — Taxes and VAT)",
      fr: "Comment définir une méthode d'arrondi pour les factures ou les factures ? (Odoo Learn — Taxes et TVA)",
    },
    correct: {
      en: "By selecting the rounding method in the general settings.",
      fr: "En sélectionnant la méthode d'arrondi dans les paramètres généraux.",
    },
    distractors: [
      { en: "By selecting the rounding method on the invoice or bill in the “Total” field.", fr: "En sélectionnant la méthode d'arrondi sur la facture ou la facture dans le champ « Total »." },
      { en: "By selecting the rounding method in the chart of accounts.", fr: "En sélectionnant la méthode d'arrondi dans le plan comptable." },
    ],
    explanation: {
      en: "Source Odoo Learn (Taxes and VAT): By selecting the rounding method in the general settings.",
      fr: "Source Odoo Learn (Taxes et TVA) : En sélectionnant la méthode d'arrondi dans les paramètres généraux.",
    },
  }),
mcq3Q({
    id: "acc-103",
    module: "accounting",
    text: {
      en: "How can you restrict a tax to goods or services only? (Odoo Learn — Taxes and VAT)",
      fr: "Comment limiter une taxe aux biens ou aux services uniquement ? (Odoo Learn — Taxes et TVA)",
    },
    correct: {
      en: "By determining a tax scope.",
      fr: "En déterminant un périmètre fiscal.",
    },
    distractors: [
      { en: "By determining a tax type.", fr: "En déterminant un type de taxe." },
      { en: "By creating a specific tax for goods or services and setting it on the product template.", fr: "En créant une taxe spécifique pour les biens ou services et en la définissant sur le modèle de produit." },
    ],
    explanation: {
      en: "Source Odoo Learn (Taxes and VAT): By determining a tax scope.",
      fr: "Source Odoo Learn (Taxes et TVA) : En déterminant un périmètre fiscal.",
    },
  }),
mcq3Q({
    id: "acc-104",
    module: "accounting",
    text: {
      en: "You have two taxes on your invoice. The second tax must be calculated after the first tax. How can you enable that in Odoo? (Odoo Learn — Taxes and VAT)",
      fr: "Vous avez deux taxes sur votre facture. La deuxième taxe doit être calculée après la première taxe. Comment pouvez-vous activer cela dans Odoo ? (Odoo Learn — Taxes et TVA)",
    },
    correct: {
      en: "Enable “Affect Base of Subsequent Taxes” on the first tax and set the tax sequence so the second tax comes after the first in the tax settings.",
      fr: "Activez « Affecter la base des taxes suivantes » sur la première taxe et définissez la séquence de taxe de sorte que la deuxième taxe vienne après la première dans les paramètres fiscaux.",
    },
    distractors: [
      { en: "Configure the tax sequence so the second tax comes after the first in the tax settings.", fr: "Configurez la séquence de taxe pour que la deuxième taxe vienne après la première dans les paramètres de taxe." },
      { en: "Add the tax manually in the “Tax” field on the invoice.", fr: "Ajoutez la taxe manuellement dans le champ « Taxe » de la facture." },
    ],
    explanation: {
      en: "Source Odoo Learn (Taxes and VAT): Enable “Affect Base of Subsequent Taxes” on the first tax and set the tax sequence so the second tax comes after the first in the tax settings.",
      fr: "Source Odoo Learn (Taxes et TVA) : Activez « Affecter la base des taxes ultérieures » sur la première taxe et définissez la séquence fiscale afin que la deuxième taxe vienne après la première dans les paramètres fiscaux.",
    },
  }),
mcq3Q({
    id: "acc-105",
    module: "accounting",
    text: {
      en: "What is the purpose of the cash basis transition account? (Odoo Learn — Cash basis)",
      fr: "Quel est l’objectif du compte de transition en comptabilité de caisse ? (Odoo Learn — Base de caisse)",
    },
    correct: {
      en: "To temporarily hold the tax balance between the invoice confirmation and payment",
      fr: "Pour bloquer temporairement le solde de taxe entre la confirmation de la facture et le paiement",
    },
    distractors: [
      { en: "To transition balances from one company’s tax accounts to another in a multi-company environment.", fr: "Transférer les soldes des comptes fiscaux d’une entreprise à un autre dans un environnement multi-entreprises." },
      { en: "To balance unbalanced journal entries without tax accounts.", fr: "Pour équilibrer les écritures de journal déséquilibrées sans comptes de taxes." },
    ],
    explanation: {
      en: "Source Odoo Learn (Cash basis): To temporarily hold the tax balance between the invoice confirmation and payment",
      fr: "Source Odoo Learn (Base caisse) : Pour maintenir temporairement le solde fiscal entre la confirmation de la facture et le paiement",
    },
  }),
complexQ({
    id: "acc-106",
    module: "accounting",
    text: {
      en: "Unlike standard taxes, cash basis taxes appear on the tax report (Odoo Learn — Cash basis)",
      fr: "Contrairement aux taxes standards, les taxes de caisse apparaissent sur la déclaration fiscale. (Odoo Learn — Base de caisse)",
    },
    correct: {
      en: "When invoices are paid.",
      fr: "Lorsque les factures sont payées.",
    },
    distractors: [
      { en: "When sales are confirmed.", fr: "Lorsque les ventes seront confirmées." },
      { en: "When invoices are confirmed.", fr: "Lorsque les factures sont confirmées." },
      { en: "Only if payments are made in cash.", fr: "Uniquement si les paiements sont effectués en espèces." },
    ],
    explanation: {
      en: "Source Odoo Learn (Cash basis): When invoices are paid.",
      fr: "Source Odoo Learn (Base caisse) : Lorsque les factures sont payées.",
    },
  }),
mcq3Q({
    id: "acc-107",
    module: "accounting",
    text: {
      en: "How can I configure Odoo to automatically apply a fiscal position? (Odoo Learn — Fiscal positions)",
      fr: "Comment puis-je configurer Odoo pour appliquer automatiquement une position fiscale ? (Odoo Learn — Positions fiscales)",
    },
    correct: {
      en: "By enabling and configuring the \"detect automatically\" feature on the fiscal position.",
      fr: "En activant et en configurant la fonctionnalité « détecter automatiquement » sur la situation fiscale.",
    },
    distractors: [
      { en: "By adding fiscal positions to my products in the Accounting tab.", fr: "En ajoutant des positions fiscales à mes produits dans l'onglet Comptabilité." },
      { en: "By populating the “Account” field within the invoice.", fr: "En remplissant le champ « Compte » dans la facture." },
    ],
    explanation: {
      en: "Source Odoo Learn (Fiscal positions): By enabling and configuring the \"detect automatically\" feature on the fiscal position.",
      fr: "Source Odoo Learn (Positions fiscales) : En activant et configurant la fonctionnalité « détecter automatiquement » sur la situation fiscale.",
    },
  }),
mcq3Q({
    id: "acc-108",
    module: "accounting",
    text: {
      en: "First, I added goods to my new invoice, then I populated the “Customer” field, yet the tax is incorrect. Why? (Odoo Learn — Fiscal positions)",
      fr: "J'ai d'abord ajouté des marchandises à ma nouvelle facture, puis j'ai renseigné le champ « Client », mais la taxe est incorrecte. Pourquoi? (Odoo Learn — Positions fiscales)",
    },
    correct: {
      en: "The “Customer/Vendor” field must be populated before you add a product.",
      fr: "Le champ « Client/Fournisseur » doit être renseigné avant d'ajouter un produit.",
    },
    distractors: [
      { en: "Fiscal positions only apply to services.", fr: "Les positions fiscales ne s'appliquent qu'aux services." },
      { en: "The fiscal position will be applied after confirming the invoice.", fr: "La situation fiscale sera appliquée après confirmation de la facture." },
    ],
    explanation: {
      en: "Source Odoo Learn (Fiscal positions): The “Customer/Vendor” field must be populated before you add a product.",
      fr: "Source Odoo Learn (Positions fiscales) : Le champ « Client/Vendeur » doit être renseigné avant d'ajouter un produit.",
    },
  }),
mcq3Q({
    id: "acc-109",
    module: "accounting",
    text: {
      en: "What does the Account Mapping tab within a Fiscal Position allow you to do? (Odoo Learn — Fiscal positions)",
      fr: "Que vous permet de faire l'onglet Cartographie des comptes dans une Position Fiscale ? (Odoo Learn — Positions fiscales)",
    },
    correct: {
      en: "Define which income or expense accounts should replace the default accounts used on a product when the fiscal position is applied.",
      fr: "Définissez quels comptes de revenus ou de dépenses doivent remplacer les comptes par défaut utilisés sur un produit lorsque la situation fiscale est appliquée.",
    },
    distractors: [
      { en: "View a list of all of the accounts that cannot be used under this particular fiscal position.", fr: "Consultez une liste de tous les comptes qui ne peuvent pas être utilisés dans cette situation fiscale particulière." },
      { en: "View a list of all of the taxes that are applied within the context of the specific fiscal position.", fr: "Consultez une liste de toutes les taxes appliquées dans le contexte de la situation fiscale spécifique." },
    ],
    explanation: {
      en: "Source Odoo Learn (Fiscal positions): Define which income or expense accounts should replace the default accounts used on a product when the fiscal position is applied.",
      fr: "Source Odoo Learn (Positions fiscales) : Définissez quels comptes de revenus ou de dépenses doivent remplacer les comptes par défaut utilisés sur un produit lorsque la position fiscale est appliquée.",
    },
  }),
complexQ({
    id: "acc-110",
    module: "accounting",
    text: {
      en: "What makes it possible to automate the tax closing process? (Odoo Learn — Tax return)",
      fr: "Qu'est-ce qui permet d'automatiser le processus de clôture fiscale ? (Odoo Learn — Déclaration d'impôt)",
    },
    correct: {
      en: "The configured “payable” and “receivable” tax current accounts.",
      fr: "Les comptes courants fiscaux configurés « à payer » et « à recevoir ».",
    },
    distractors: [
      { en: "The “Tax return” lock date set for that company.", fr: "La date de verrouillage de la « Déclaration fiscale » fixée pour cette entreprise." },
      { en: "The fiscal localization installed on the database.", fr: "La localisation fiscale installée sur la base de données." },
      { en: "The “Tax return” lock date and the fiscal localization set for that company.", fr: "La date de verrouillage de la « Déclaration fiscale » et la localisation fiscale définie pour cette entreprise." },
    ],
    explanation: {
      en: "Source Odoo Learn (Tax return): The configured “payable” and “receivable” tax current accounts.",
      fr: "Source Odoo Learn (Déclaration fiscale) : Les comptes courants fiscaux configurés « à payer » et « à recevoir ».",
    },
  }),
complexQ({
    id: "acc-111",
    module: "accounting",
    text: {
      en: "What happens if I upload a vendor bill dated before the lock date is uploaded after the tax report has been submitted? (Odoo Learn — Tax return)",
      fr: "Que se passe-t-il si je télécharge une facture fournisseur datée avant la date de verrouillage et télécharge après la soumission de la déclaration fiscale ? (Odoo Learn — Déclaration d'impôt)",
    },
    correct: {
      en: "Once submitted, the tax report can no longer be changed, and the bill will be postponed to the next fiscal period's tax report.",
      fr: "Une fois soumise, la déclaration fiscale ne pourra plus être modifiée et la facture sera reportée à la déclaration fiscale de l'exercice suivant.",
    },
    distractors: [
      { en: "Hit the “Refresh” button on the tax report.", fr: "Appuyez sur le bouton « Actualiser » sur la déclaration fiscale." },
      { en: "The closing entry is posted, and the lock date is set once the tax return reaches Submit status. The bill will be postponed to the next fiscal period.", fr: "L'écriture de clôture est validée et la date de verrouillage est définie une fois que la déclaration de revenus atteint le statut Soumettre. Le projet de loi sera reporté au prochain exercice financier." },
      { en: "The tax report is automatically updated in Odoo's background and resubmitted to the authorities.", fr: "La déclaration fiscale est automatiquement mise à jour dans l'arrière-plan d'Odoo et soumise à nouveau aux autorités." },
    ],
    explanation: {
      en: "Source Odoo Learn (Tax return): Once submitted, the tax report can no longer be changed, and the bill will be postponed to the next fiscal period's tax report.",
      fr: "Source Odoo Learn (Déclaration fiscale) : Une fois soumise, la déclaration fiscale ne peut plus être modifiée, et la facture sera reportée à la déclaration fiscale de l'exercice suivant.",
    },
  }),
complexQ({
    id: "acc-112",
    module: "accounting",
    text: {
      en: "What is the optimal lock date order to avoid errors and unintended entry changes? (Odoo Learn — Tax return)",
      fr: "Quel est l’ordre optimal des dates de verrouillage pour éviter les erreurs et les modifications involontaires des entrées ? (Odoo Learn — Déclaration d'impôt)",
    },
    correct: {
      en: "“Sales”, “Purchase”, “Tax Return”,“Everything”, and “Hard” lock dates if needed.",
      fr: "Les dates de verrouillage « Ventes », « Achat », « Déclaration de taxes », « Tout » et « Dure » ​​si nécessaire.",
    },
    distractors: [
      { en: "“Tax Return”, “Sales”, “Purchase”, “Everything”, and “Hard” lock dates if needed.", fr: "Les dates de verrouillage « Déclaration d'impôt », « Ventes », « Achat », « Tout » et « Dure » ​​si nécessaire." },
      { en: "“Everything”, and “Tax Return”, and “Hard” lock dates if needed.", fr: "« Tout », « Déclaration de taxes » et « Dures » verrouillent les dates si nécessaire." },
      { en: "There is no required sequence for setting the lock dates.", fr: "Il n’y a aucune séquence requise pour définir les dates de verrouillage." },
    ],
    explanation: {
      en: "Source Odoo Learn (Tax return): “Sales”, “Purchase”, “Tax Return”,“Everything”, and “Hard” lock dates if needed.",
      fr: "Source Odoo Learn (Déclaration d'impôts) : \"Ventes\", \"Achat\", \"Déclaration d'impôts\", \"Tout\" et dates de verrouillage \"Dures\" si nécessaire.",
    },
  }),
complexQ({
    id: "acc-113",
    module: "accounting",
    text: {
      en: "What does the \"Affect Base of Subsequent Taxes\" option do when activated on a tax? (Odoo Learn — Extra taxes (ecotax, alcohol, luxury,...))",
      fr: "Que fait l'option « Affecter la base des taxes ultérieures » lorsqu'elle est activée sur une taxe ? (Odoo Learn — Taxes supplémentaires (écotaxe, alcool, luxe,...))",
    },
    correct: {
      en: "The current tax will be added to the base on which the next tax (listed after the current one in the taxes' list) will be applied.",
      fr: "La taxe actuelle sera ajoutée à la base sur laquelle sera appliquée la taxe suivante (listée après celle en cours dans la liste des taxes).",
    },
    distractors: [
      { en: "The next tax (listed after the current one in the taxes' list) will be added to the base on which the current tax will be applied.", fr: "La taxe suivante (listée après celle en cours dans la liste des taxes) sera ajoutée à la base sur laquelle la taxe en cours sera appliquée." },
      { en: "The amount of the tax will be included in the price.", fr: "Le montant de la taxe sera inclus dans le prix." },
      { en: "It will summon an army of minions.", fr: "Il invoquera une armée de serviteurs." },
    ],
    explanation: {
      en: "Source Odoo Learn (Extra taxes (ecotax, alcohol, luxury,...)): The current tax will be added to the base on which the next tax (listed after the current one in the taxes' list) will be applied.",
      fr: "Source Odoo Learn (Taxes supplémentaires (écotaxe, alcool, luxe,...)) : La taxe actuelle sera ajoutée à la base sur laquelle sera appliquée la prochaine taxe (listée après celle en cours dans la liste des taxes).",
    },
  }),
complexQ({
    id: "acc-114",
    module: "accounting",
    text: {
      en: "Why is the order of the taxes' list crucial? (Odoo Learn — Extra taxes (ecotax, alcohol, luxury,...))",
      fr: "Pourquoi l'ordre de la liste des impôts est-il crucial ? (Odoo Learn — Taxes supplémentaires (écotaxe, alcool, luxe,...))",
    },
    correct: {
      en: "It defines in which order the taxes are computed.",
      fr: "Il définit dans quel ordre les taxes sont calculées.",
    },
    distractors: [
      { en: "It defines the order in which the different taxes are displayed on the invoices, between the subtotal and the total.", fr: "Il définit l'ordre dans lequel les différentes taxes sont affichées sur les factures, entre le sous-total et le total." },
      { en: "It is not crucial; it only allows us to keep our list well organized.", fr: "Ce n’est pas crucial ; cela nous permet seulement de garder notre liste bien organisée." },
      { en: "Because taxes that affect the base of subsequent taxes and that are mapped in Fiscal Positions need to be next to each other for them to be correctly applied when you create a new invoice for a customer based abroad or taxed differently.", fr: "Parce que les taxes qui affectent la base des taxes ultérieures et qui sont mappées dans Positions Fiscales doivent être côte à côte pour qu'elles soient correctement appliquées lorsque vous créez une nouvelle facture pour un client basé à l'étranger ou taxé différemment." },
    ],
    explanation: {
      en: "Source Odoo Learn (Extra taxes (ecotax, alcohol, luxury,...)): It defines in which order the taxes are computed.",
      fr: "Source Odoo Learn (Taxes supplémentaires (écotaxe, alcool, luxe,...)) : Elle définit dans quel ordre les taxes sont calculées.",
    },
  }),
complexQ({
    id: "acc-115",
    module: "accounting",
    text: {
      en: "Which of the following is not a depreciation method in Odoo? (Odoo Learn — Asset creation and management)",
      fr: "Lequel des éléments suivants n’est pas une méthode d’amortissement dans Odoo ? (Odoo Learn — Création et gestion d'actifs)",
    },
    correct: {
      en: "Straight line then declining",
      fr: "Ligne droite puis décroissante",
    },
    distractors: [
      { en: "Straight line", fr: "Ligne droite" },
      { en: "Declining", fr: "En déclin" },
      { en: "Declining then straight line", fr: "En déclin puis en ligne droite" },
    ],
    explanation: {
      en: "Source Odoo Learn (Asset creation and management): Straight line then declining",
      fr: "Source Odoo Learn (Création et gestion d'actifs) : Ligne droite puis décroissante",
    },
  }),
mcq3Q({
    id: "acc-116",
    module: "accounting",
    text: {
      en: "Which computation method allows the most precise tracking of asset depreciation? (Odoo Learn — Asset creation and management)",
      fr: "Quelle méthode de calcul permet le suivi le plus précis de la dépréciation des actifs ? (Odoo Learn — Création et gestion d'actifs)",
    },
    correct: {
      en: "Based on days per period",
      fr: "Basé sur jours par période",
    },
    distractors: [
      { en: "No Prorata", fr: "Pas de prorata" },
      { en: "Constant Periods", fr: "Périodes constantes" },
    ],
    explanation: {
      en: "Source Odoo Learn (Asset creation and management): Based on days per period",
      fr: "Source Odoo Learn (Création et gestion d'actifs) : Basé sur des jours par période",
    },
  }),
complexQ({
    id: "acc-117",
    module: "accounting",
    text: {
      en: "How are assets grouped on the Depreciation Schedule? (Odoo Learn — Asset creation and management)",
      fr: "Comment les actifs sont-ils regroupés sur le plan d’amortissement ? (Odoo Learn — Création et gestion d'actifs)",
    },
    correct: {
      en: "By the assets’ Fixed Asset Account",
      fr: "Par le compte d’immobilisations des actifs",
    },
    distractors: [
      { en: "By the assets’ Depreciation Account", fr: "Par le compte d’amortissement des actifs" },
      { en: "By the assets’ Journal", fr: "Par le Journal des Actifs" },
      { en: "By the assets’ Acquisition Date", fr: "À la date d’acquisition des actifs" },
    ],
    explanation: {
      en: "Source Odoo Learn (Asset creation and management): By the assets’ Fixed Asset Account",
      fr: "Source Odoo Learn (Création et gestion d'actifs) : Par le compte d'immobilisations des actifs",
    },
  }),
complexQ({
    id: "acc-118",
    module: "accounting",
    text: {
      en: "What types of accounts can automate asset creation? (Odoo Learn — Asset models and automation)",
      fr: "Quels types de comptes peuvent automatiser la création d’actifs ? (Odoo Learn — Modèles d'actifs et automatisation)",
    },
    correct: {
      en: "Only non-current assets and fixed assets",
      fr: "Uniquement les actifs non courants et les immobilisations",
    },
    distractors: [
      { en: "Only current assets, non-current assets, prepayments, and fixed assets", fr: "Uniquement les actifs courants, les actifs non courants, les acomptes et les immobilisations" },
      { en: "Only non-current assets, prepayments, and fixed assets", fr: "Uniquement les actifs non courants, les acomptes et les immobilisations" },
      { en: "Only fixed assets", fr: "Uniquement les immobilisations" },
    ],
    explanation: {
      en: "Source Odoo Learn (Asset models and automation): Only non-current assets and fixed assets",
      fr: "Source Odoo Learn (Modèles d'actifs et automatisation) : Uniquement les actifs non courants et les immobilisations",
    },
  }),
complexQ({
    id: "acc-119",
    module: "accounting",
    text: {
      en: "Which field of an asset can be set by selecting an asset model? (Odoo Learn — Asset models and automation)",
      fr: "Quel champ d'un actif peut être défini en sélectionnant un modèle d'actif ? (Odoo Learn — Modèles d'actifs et automatisation)",
    },
    correct: {
      en: "Duration",
      fr: "Durée",
    },
    distractors: [
      { en: "Original value", fr: "Valeur originale" },
      { en: "Acquisition date", fr: "Date d'acquisition" },
      { en: "Not depreciable value", fr: "Valeur non amortissable" },
    ],
    explanation: {
      en: "Source Odoo Learn (Asset models and automation): Duration",
      fr: "Source Odoo Learn (Modèles d'actifs et automatisation) : Durée",
    },
  }),
complexQ({
    id: "acc-120",
    module: "accounting",
    text: {
      en: "What does selecting the Manage Items checkbox on a fixed or non-current asset account do? (Odoo Learn — Asset models and automation)",
      fr: "À quoi sert la case à cocher Gérer les éléments sur un compte d'immobilisations ou d'immobilisations ? (Odoo Learn — Modèles d'actifs et automatisation)",
    },
    correct: {
      en: "Generates multiple asset items depending on the bill line’s quantity instead of one global asset",
      fr: "Génère plusieurs éléments d'actif en fonction de la quantité de la ligne de facture au lieu d'un seul actif global",
    },
    distractors: [
      { en: "Creates consignment products out of the assets to easily manage reselling consignment inventory", fr: "Crée des produits de consignation à partir des actifs pour gérer facilement la revente des stocks de consignation" },
      { en: "Opens a wizard that allows you to manage the item receipt with lots/serial numbers, quantity, and valuation", fr: "Ouvre un assistant qui vous permet de gérer la réception de l'article avec les numéros de lots/série, la quantité et la valorisation." },
      { en: "Allows you to send the assets through a quality control flow to ensure assets are valued appropriately", fr: "Vous permet d'envoyer les actifs via un flux de contrôle qualité pour garantir que les actifs sont évalués de manière appropriée" },
    ],
    explanation: {
      en: "Source Odoo Learn (Asset models and automation): Generates multiple asset items depending on the bill line’s quantity instead of one global asset",
      fr: "Source Odoo Learn (Modèles d'actifs et automatisation) : génère plusieurs éléments d'actif en fonction de la quantité de la ligne de facture au lieu d'un seul actif global",
    },
  }),
mcq3Q({
    id: "acc-121",
    module: "accounting",
    text: {
      en: "How can I register deferred revenue? (Odoo Learn — Expense and revenue recognition and one-shot entries)",
      fr: "Comment puis-je enregistrer des revenus différés ? (Odoo Learn — Constatation des dépenses et des revenus et écritures ponctuelles)",
    },
    correct: {
      en: "Enter a “Start Date” and “End Date” through the ‘toggle’ menu on an invoice or bill.",
      fr: "Entrez une « Date de début » et une « Date de fin » via le menu « bascule » sur une facture ou une facture.",
    },
    distractors: [
      { en: "By using the “Deferred Revenue” model under “Configuration” and selecting the related account(s) when creating an invoice or bill.", fr: "En utilisant le modèle « Revenus différés » sous « Configuration » et en sélectionnant le(s) compte(s) associé(s) lors de la création d'une facture ou d'un décompte." },
      { en: "By creating and using a “Deferred Revenue” account.", fr: "En créant et en utilisant un compte « Revenus différés »." },
    ],
    explanation: {
      en: "Source Odoo Learn (Expense and revenue recognition and one-shot entries): Enter a “Start Date” and “End Date” through the ‘toggle’ menu on an invoice or bill.",
      fr: "Source Odoo Learn (reconnaissance des dépenses et des revenus et entrées uniques) : saisissez une « Date de début » et une « Date de fin » via le menu « bascule » sur une facture ou une facture.",
    },
  }),
mcq3Q({
    id: "acc-122",
    module: "accounting",
    text: {
      en: "What is the requirement to access the “Cut-off” button? (Odoo Learn — Expense and revenue recognition and one-shot entries)",
      fr: "Quelle est la condition requise pour accéder au bouton « Cut-off » ? (Odoo Learn — Constatation des dépenses et des revenus et écritures ponctuelles)",
    },
    correct: {
      en: "The account used must either be of the “Expense” or “Income” type.",
      fr: "Le compte utilisé doit être soit du type « Dépenses », soit « Revenus ».",
    },
    distractors: [
      { en: "Have it enabled in the “Settings”.", fr: "Faites-le activer dans les « Paramètres »." },
      { en: "Have a different “Bill date” and “Accounting date”.", fr: "Avoir une « Date de facturation » et une « Date comptable » différentes." },
    ],
    explanation: {
      en: "Source Odoo Learn (Expense and revenue recognition and one-shot entries): The account used must either be of the “Expense” or “Income” type.",
      fr: "Source Odoo Learn (Constatation des dépenses et revenus et écritures ponctuelles) : Le compte utilisé doit être soit de type « Dépenses » soit « Revenus ».",
    },
  }),
mcq3Q({
    id: "acc-123",
    module: "accounting",
    text: {
      en: "What is the condition for creating accrued entries for multiple bills at once? (Odoo Learn — Expense and revenue recognition and one-shot entries)",
      fr: "Quelle est la condition pour créer des écritures à payer pour plusieurs factures à la fois ? (Odoo Learn — Constatation des dépenses et des revenus et écritures ponctuelles)",
    },
    correct: {
      en: "They must use the same account.",
      fr: "Ils doivent utiliser le même compte.",
    },
    distractors: [
      { en: "They must be from the same partner.", fr: "Ils doivent provenir du même partenaire." },
      { en: "They must be of the same type (e.g., bills or debit notes).", fr: "Ils doivent être du même type (par exemple, factures ou notes de débit)." },
    ],
    explanation: {
      en: "Source Odoo Learn (Expense and revenue recognition and one-shot entries): They must use the same account.",
      fr: "Source Odoo Learn (Constatation des dépenses et des revenus et entrées ponctuelles) : Ils doivent utiliser le même compte.",
    },
  }),
complexQ({
    id: "acc-124",
    module: "accounting",
    text: {
      en: "What do analytic distribution models do? (Odoo Learn — Analytic accounting)",
      fr: "À quoi servent les modèles de distribution analytique ? (Odoo Learn — Comptabilité analytique)",
    },
    correct: {
      en: "They automatically apply a specific analytic distribution based on defined criteria.",
      fr: "Ils appliquent automatiquement une distribution analytique spécifique basée sur des critères définis.",
    },
    distractors: [
      { en: "They help to define the report layout for analytic items and save it as a template.", fr: "Ils aident à définir la présentation du rapport pour les éléments analytiques et à l'enregistrer en tant que modèle." },
      { en: "They define the default applicability of an analytic plan.", fr: "Ils définissent l’applicabilité par défaut d’un plan analytique." },
      { en: "They create a parent/child hierarchy in analytic plans when a more complex structure is required.", fr: "Ils créent une hiérarchie parent/enfant dans les plans analytiques lorsqu'une structure plus complexe est requise." },
    ],
    explanation: {
      en: "Source Odoo Learn (Analytic accounting): They automatically apply a specific analytic distribution based on defined criteria.",
      fr: "Source Odoo Learn (Comptabilité analytique) : Ils appliquent automatiquement une distribution analytique spécifique basée sur des critères définis.",
    },
  }),
complexQ({
    id: "acc-125",
    module: "accounting",
    text: {
      en: "2. Where can you find analytic entries? (Odoo Learn — Analytic accounting)",
      fr: "2. Où pouvez-vous trouver des entrées analytiques ? (Odoo Learn — Comptabilité analytique)",
    },
    correct: {
      en: "By going to the Accounting menu > Analytic items.",
      fr: "En allant dans le menu Comptabilité > Éléments analytiques.",
    },
    distractors: [
      { en: "By going to Reporting > Balance sheet.", fr: "En allant dans Reporting > Bilan." },
      { en: "By going to the general settings.", fr: "En allant dans les paramètres généraux." },
      { en: "By going to the Accounting dashboard.", fr: "En allant sur le tableau de bord Comptabilité." },
    ],
    explanation: {
      en: "Source Odoo Learn (Analytic accounting): By going to the Accounting menu > Analytic items.",
      fr: "Source Odoo Learn (Comptabilité analytique) : En allant dans le menu Comptabilité > Éléments analytiques.",
    },
  }),
mcq3Q({
    id: "acc-126",
    module: "accounting",
    text: {
      en: "In order to manage your budget, you need to (Odoo Learn — Analytic budgets)",
      fr: "Afin de gérer votre budget, vous devez (Odoo Learn — Budgets analytiques)",
    },
    correct: {
      en: "Set up analytic accounts first to structure and filter your budget",
      fr: "Configurez d'abord des comptes analytiques pour structurer et filtrer votre budget",
    },
    distractors: [
      { en: "Wait until the end of the period so all the information is accurate and complete", fr: "Attendez la fin de la période pour que toutes les informations soient exactes et complètes" },
      { en: "Use a financial advisor to help you.", fr: "Faites appel à un conseiller financier pour vous aider." },
    ],
    explanation: {
      en: "Source Odoo Learn (Analytic budgets): Set up analytic accounts first to structure and filter your budget",
      fr: "Source Odoo Learn (Budgets analytiques) : Configurez d'abord des comptes analytiques pour structurer et filtrer votre budget",
    },
  }),
mcq3Q({
    id: "acc-127",
    module: "accounting",
    text: {
      en: "The committed amount is the sum of the lines on any confirmed sales or purchase order that have not yet been invoiced or billed, and (Odoo Learn — Analytic budgets)",
      fr: "Le montant engagé est la somme des lignes de toute vente ou bon de commande confirmé qui n'ont pas encore été facturés ou facturés, et (Odoo Learn — Budgets analytiques)",
    },
    correct: {
      en: "The achieved amount.",
      fr: "Le montant obtenu.",
    },
    distractors: [
      { en: "The theoretical amount.", fr: "Le montant théorique." },
      { en: "The budget amount.", fr: "Le montant du budget." },
    ],
    explanation: {
      en: "Source Odoo Learn (Analytic budgets): The achieved amount.",
      fr: "Source Odoo Learn (Budgets analytiques) : Le montant atteint.",
    },
  }),
mcq3Q({
    id: "acc-128",
    module: "accounting",
    text: {
      en: "Why would a line in a purchase order appear in red? (Odoo Learn — Analytic budgets)",
      fr: "Pourquoi une ligne d’un bon de commande apparaît-elle en rouge ? (Odoo Learn — Budgets analytiques)",
    },
    correct: {
      en: "If confirmed, this PO line will exceed the budget.",
      fr: "Si elle est confirmée, cette ligne de commande dépassera le budget.",
    },
    distractors: [
      { en: "The line on the PO still needs to be paid to your vendor.", fr: "La ligne sur le bon de commande doit toujours être payée à votre fournisseur." },
      { en: "The vendor does not have enough stock and will not be able to deliver the product.", fr: "Le vendeur ne dispose pas de suffisamment de stock et ne pourra pas livrer le produit." },
    ],
    explanation: {
      en: "Source Odoo Learn (Analytic budgets): If confirmed, this PO line will exceed the budget.",
      fr: "Source Odoo Learn (Budgets analytiques) : Si confirmée, cette ligne de commande dépassera le budget.",
    },
  }),
complexQ({
    id: "acc-129",
    module: "accounting",
    text: {
      en: "What information do you need to enter into the Odoo database settings to connect the AvaTax account to Odoo? (Odoo Learn — US tax compliance  - Avatax)",
      fr: "Quelles informations devez-vous saisir dans les paramètres de la base de données Odoo pour connecter le compte AvaTax à Odoo ? (Odoo Learn — Conformité fiscale aux États-Unis - Avatax)",
    },
    correct: {
      en: "The AvaTax account number and License Key.",
      fr: "Le numéro de compte AvaTax et la clé de licence.",
    },
    distractors: [
      { en: "The AvaTax exemption certificate and tax return code.", fr: "Le certificat d’exonération AvaTax et le code de déclaration de revenus." },
      { en: "The AvaTax tax codes.", fr: "Les codes fiscaux AvaTax." },
      { en: "The AvaTax username and password.", fr: "Le nom d'utilisateur et le mot de passe AvaTax." },
    ],
    explanation: {
      en: "Source Odoo Learn (US tax compliance  - Avatax): The AvaTax account number and License Key.",
      fr: "Source Odoo Learn (Conformité fiscale américaine - Avatax) : Le numéro de compte AvaTax et la clé de licence.",
    },
  }),
complexQ({
    id: "acc-130",
    module: "accounting",
    text: {
      en: "When does AvaTax NOT automatically calculate the tax? (Odoo Learn — US tax compliance  - Avatax)",
      fr: "Quand AvaTax ne calcule-t-il PAS automatiquement la taxe ? (Odoo Learn — Conformité fiscale aux États-Unis - Avatax)",
    },
    correct: {
      en: "When you validate a delivery order.",
      fr: "Lorsque vous validez un bon de livraison.",
    },
    distractors: [
      { en: "When a quotation is confirmed into a sales order.", fr: "Lorsqu'un devis est confirmé dans une commande client." },
      { en: "When you validate a draft invoice.", fr: "Lorsque vous validez un projet de facture." },
      { en: "When a customer views their subscription in the customer portal.", fr: "Lorsqu'un client consulte son abonnement sur le portail client." },
    ],
    explanation: {
      en: "Source Odoo Learn (US tax compliance  - Avatax): When you validate a delivery order.",
      fr: "Source Odoo Learn (Conformité fiscale américaine – Avatax) : Lorsque vous validez un bon de livraison.",
    },
  }),
complexQ({
    id: "acc-131",
    module: "accounting",
    text: {
      en: "Which addresses does AvaTax use to calculate tax? (Odoo Learn — US tax compliance  - Avatax)",
      fr: "Quelles adresses AvaTax utilise-t-elle pour calculer la taxe ? (Odoo Learn — Conformité fiscale aux États-Unis - Avatax)",
    },
    correct: {
      en: "The Company address and the customer’s address.",
      fr: "L’adresse de la Société et l’adresse du client.",
    },
    distractors: [
      { en: "The warehouse address and the customer’s address.", fr: "L’adresse de l’entrepôt et l’adresse du client." },
      { en: "The Company address and the warehouse address.", fr: "L'adresse de la société et l'adresse de l'entrepôt." },
      { en: "Only the customer’s address.", fr: "Uniquement l'adresse du client." },
    ],
    explanation: {
      en: "Source Odoo Learn (US tax compliance  - Avatax): The Company address and the customer’s address.",
      fr: "Source Odoo Learn (Conformité fiscale américaine - Avatax) : L'adresse de l'entreprise et l'adresse du client.",
    },
  }),
complexQ({
    id: "acc-132",
    module: "accounting",
    text: {
      en: "If I have a main company with branches linked to it, when is the closing date of the fiscal period? (Odoo Learn — Multi-company and branch management)",
      fr: "Si j'ai une entreprise principale avec des succursales qui lui sont liées, quelle est la date de clôture de l'exercice ? (Odoo Learn — Gestion multi-entreprises et succursales)",
    },
    correct: {
      en: "There is a fiscal period handled by the main company, and it applies to all its branches.",
      fr: "Il existe un exercice fiscal géré par la société principale et il s'applique à toutes ses succursales.",
    },
    distractors: [
      { en: "The main company and each branch all have their own fiscal period closing date.", fr: "La société principale et chaque succursale ont chacune leur propre date de clôture d’exercice." },
      { en: "The main company handles its own fiscal period, and all its branches have a separate common fiscal period.", fr: "La société principale gère son propre exercice fiscal et toutes ses succursales ont un exercice fiscal commun distinct." },
      { en: "In the branch settings, the fiscal period closing date can be set to the same date as the main company's or the branch’s own fiscal period closing date.", fr: "Dans les paramètres de l'agence, la date de clôture de l'exercice peut être fixée à la même date que la date de clôture de l'exercice de la société principale ou de la succursale." },
    ],
    explanation: {
      en: "Source Odoo Learn (Multi-company and branch management): There is a fiscal period handled by the main company, and it applies to all its branches.",
      fr: "Source Odoo Learn (Gestion multi-entreprises et succursales) : Il existe un exercice fiscal géré par l'entreprise principale, et il s'applique à toutes ses succursales.",
    },
  }),
complexQ({
    id: "acc-133",
    module: "accounting",
    text: {
      en: "Can users have different access rights for each company/branch? (Odoo Learn — Multi-company and branch management)",
      fr: "Les utilisateurs peuvent-ils avoir des droits d’accès différents pour chaque entreprise/succursale ? (Odoo Learn — Gestion multi-entreprises et succursales)",
    },
    correct: {
      en: "User access can be granted or limited to specific main companies and/or branches.",
      fr: "L'accès des utilisateurs peut être accordé ou limité à des sociétés et/ou succursales principales spécifiques.",
    },
    distractors: [
      { en: "User access can be granted or limited to specific main companies, but branch access is the same as the main company's.", fr: "L'accès des utilisateurs peut être accordé ou limité à des sociétés principales spécifiques, mais l'accès aux succursales est le même que celui de la société principale." },
      { en: "User access is the same for all companies and branches managed in the same database.", fr: "L'accès des utilisateurs est le même pour toutes les sociétés et succursales gérées dans la même base de données." },
      { en: "Access rights cannot be set for individual companies or branches, as permissions apply only at the database level.", fr: "Les droits d'accès ne peuvent pas être définis pour des sociétés ou des succursales individuelles, car les autorisations s'appliquent uniquement au niveau de la base de données." },
    ],
    explanation: {
      en: "Source Odoo Learn (Multi-company and branch management): User access can be granted or limited to specific main companies and/or branches.",
      fr: "Source Odoo Learn (Gestion multi-entreprises et succursales) : L'accès des utilisateurs peut être accordé ou limité à des entreprises et/ou succursales principales spécifiques.",
    },
  }),
complexQ({
    id: "acc-134",
    module: "accounting",
    text: {
      en: "Can accounts be shared between companies? (Odoo Learn — Multi-company and branch management)",
      fr: "Les comptes peuvent-ils être partagés entre entreprises ? (Odoo Learn — Gestion multi-entreprises et succursales)",
    },
    correct: {
      en: "Yes, accounts can be either mapped or merged between companies, and reports are impacted with all journal items displayed from the active company’s perspective.",
      fr: "Oui, les comptes peuvent être mappés ou fusionnés entre sociétés, et les rapports sont impactés par tous les éléments de journal affichés du point de vue de la société active.",
    },
    distractors: [
      { en: "Yes, accounts can either be mapped or merged between companies, and the journal items displayed on consolidated reports are shown separately.", fr: "Oui, les comptes peuvent être mappés ou fusionnés entre sociétés, et les éléments de journal affichés dans les rapports consolidés sont présentés séparément." },
      { en: "Yes, accounts can either be mapped or merged between companies, and multi-ledgers need to be configured to view the impact on reports.", fr: "Oui, les comptes peuvent être mappés ou fusionnés entre entreprises, et les multi-ledgers doivent être configurés pour visualiser l'impact sur les rapports." },
      { en: "No, each account is associated with the chart of accounts of its respective company or branch.", fr: "Non, chaque compte est associé au plan comptable de sa société ou succursale respective." },
    ],
    explanation: {
      en: "Source Odoo Learn (Multi-company and branch management): Yes, accounts can be either mapped or merged between companies, and reports are impacted with all journal items displayed from the active company’s perspective.",
      fr: "Source Odoo Learn (gestion multi-entreprises et succursales) : Oui, les comptes peuvent être mappés ou fusionnés entre les entreprises, et les rapports sont impactés avec tous les éléments de journal affichés du point de vue de l'entreprise active.",
    },
  }),
complexQ({
    id: "acc-135",
    module: "accounting",
    text: {
      en: "You noticed the wrong account was used for multiple invoices while checking the journal audit report. What is the best way to change the account to the correct one? (Odoo Learn — Financial reports)",
      fr: "Vous avez remarqué que le mauvais compte a été utilisé pour plusieurs factures lors de la vérification du rapport d'audit du journal. Quelle est la meilleure façon de remplacer le compte par le bon ? (Odoo Learn — Rapports financiers)",
    },
    correct: {
      en: "In the journal item list view, select the entries to change, click on the account, and update it to the correct one.",
      fr: "Dans la vue de la liste des éléments du journal, sélectionnez les entrées à modifier, cliquez sur le compte et mettez-le à jour avec le bon.",
    },
    distractors: [
      { en: "Individually reset the impacted invoices to draft, change the account, and confirm.", fr: "Réinitialisez individuellement les factures concernées pour les rédiger, modifiez le compte et confirmez." },
      { en: "Re-create the invoices, selecting the correct account.", fr: "Recréez les factures en sélectionnant le bon compte." },
      { en: "On the journal audit report, click and drag the items into the correct account’s section.", fr: "Sur le rapport d'audit du journal, cliquez et faites glisser les éléments dans la section du compte approprié." },
    ],
    explanation: {
      en: "Source Odoo Learn (Financial reports): In the journal item list view, select the entries to change, click on the account, and update it to the correct one.",
      fr: "Source Odoo Learn (Rapports financiers) : Dans la vue de la liste des éléments du journal, sélectionnez les entrées à modifier, cliquez sur le compte et mettez-le à jour avec le bon.",
    },
  }),
complexQ({
    id: "acc-136",
    module: "accounting",
    text: {
      en: "What can you find in the Annual Statements report? (Odoo Learn — Financial reports)",
      fr: "Que trouve-t-on dans le rapport sur les comptes annuels ? (Odoo Learn — Rapports financiers)",
    },
    correct: {
      en: "The Balance Sheet, Profit and Loss, and Trial Balance reports.",
      fr: "Les rapports Bilan, Profits et Pertes et Balance de vérification.",
    },
    distractors: [
      { en: "The Balance Sheet, Profit and Loss, and General Ledger.", fr: "Le bilan, les profits et pertes et le grand livre général." },
      { en: "The Audit Report, with the Balance Sheet and the Profit and Loss included.", fr: "Le rapport d'audit, avec le bilan et les profits et pertes inclus." },
      { en: "The Audit Report, with the Balance Sheet, the Profit and Loss, and Trial Balance included.", fr: "Le rapport d'audit, avec le bilan, les profits et pertes et la balance de vérification inclus." },
    ],
    explanation: {
      en: "Source Odoo Learn (Financial reports): The Balance Sheet, Profit and Loss, and Trial Balance reports.",
      fr: "Source Odoo Learn (Rapports financiers) : Les rapports de bilan, de profits et pertes et de balance de vérification.",
    },
  }),
complexQ({
    id: "acc-137",
    module: "accounting",
    text: {
      en: "How can you compare two periods of the balance sheet? (Odoo Learn — Financial reports)",
      fr: "Comment comparer deux périodes du bilan ? (Odoo Learn — Rapports financiers)",
    },
    correct: {
      en: "Select a period using the “Comparison” button of the balance sheet.",
      fr: "Sélectionnez une période à l'aide du bouton « Comparaison » du bilan.",
    },
    distractors: [
      { en: "Select “Split Horizontally” from the additional options button.", fr: "Sélectionnez « Diviser horizontalement » dans le bouton d'options supplémentaires." },
      { en: "Select a period in the “History” button; Odoo automatically displays the amounts of the two periods side-by-side.", fr: "Sélectionnez une période dans le bouton « Historique » ; Odoo affiche automatiquement les montants des deux périodes côte à côte." },
      { en: "It’s not possible to compare two periods of the balance sheet.", fr: "Il n’est pas possible de comparer deux périodes du bilan." },
    ],
    explanation: {
      en: "Source Odoo Learn (Financial reports): Select a period using the “Comparison” button of the balance sheet.",
      fr: "Source Odoo Learn (Rapports financiers) : Sélectionnez une période à l'aide du bouton « Comparaison » du bilan.",
    },
  }),
complexQ({
    id: "acc-138",
    module: "accounting",
    text: {
      en: "How do you create financial budgets? (Odoo Learn — Financial reports)",
      fr: "Comment créer des budgets financiers ? (Odoo Learn — Rapports financiers)",
    },
    correct: {
      en: "Click the budget button on the “Profit & Loss” report, name it, and assign amounts to each account requiring analysis.",
      fr: "Cliquez sur le bouton budget du rapport « Profits et pertes », nommez-le et attribuez des montants à chaque compte nécessitant une analyse.",
    },
    distractors: [
      { en: "First, set up analytical plans and accounts to structure the budget, then create the budget in the balance sheet.", fr: "Tout d’abord, mettez en place des plans et des comptes analytiques pour structurer le budget, puis créez le budget au bilan." },
      { en: "Click the budget button on the balance sheet, name it, and assign amounts to each account requiring analysis.", fr: "Cliquez sur le bouton budget du bilan, nommez-le et attribuez des montants à chaque compte nécessitant une analyse." },
      { en: "First, set up analytical plans and accounts to structure the budget, then create the budget “Profit & Loss” report and assign an amount to each analytic account.", fr: "Tout d’abord, configurez des plans et des comptes analytiques pour structurer le budget, puis créez le rapport budgétaire « Profits & Pertes » et attribuez un montant à chaque compte analytique." },
    ],
    explanation: {
      en: "Source Odoo Learn (Financial reports): Click the budget button on the “Profit & Loss” report, name it, and assign amounts to each account requiring analysis.",
      fr: "Source Odoo Learn (Rapports financiers) : Cliquez sur le bouton budget du rapport « Profits & Pertes », nommez-le et attribuez des montants à chaque compte nécessitant une analyse.",
    },
  }),
complexQ({
    id: "acc-139",
    module: "accounting",
    text: {
      en: "What are the three costing methods in Odoo? (Odoo Learn — Inventory valuation)",
      fr: "Quelles sont les trois méthodes de calcul des coûts dans Odoo ? (Odoo Learn — Valorisation des stocks)",
    },
    correct: {
      en: "FIFO, AVCO, Standard",
      fr: "FIFO, AVCO, Standard",
    },
    distractors: [
      { en: "FIFO, LIFO, AVCO", fr: "FIFO, LIFO, AVCO" },
      { en: "FIFO, FEFO, AVCO", fr: "FIFO, FEFO, AVCO" },
      { en: "FEFO, AVCO, Standard", fr: "FEFO, AVCO, Standard" },
    ],
    explanation: {
      en: "Source Odoo Learn (Inventory valuation): FIFO, AVCO, Standard",
      fr: "Source Odoo Learn (Valorisation des stocks) : FIFO, AVCO, Standard",
    },
  }),
complexQ({
    id: "acc-140",
    module: "accounting",
    text: {
      en: "What is the difference between manual and automated inventory valuation? (Odoo Learn — Inventory valuation)",
      fr: "Quelle est la différence entre la valorisation manuelle et automatisée des stocks ? (Odoo Learn — Valorisation des stocks)",
    },
    correct: {
      en: "In manual, accountants must make periodic journal entries to update the value of the inventory account, but in automated, they do not.",
      fr: "En manuel, les comptables doivent effectuer des écritures de journal périodiques pour mettre à jour la valeur du compte de stock, mais en mode automatisé, ils ne le font pas.",
    },
    distractors: [
      { en: "In manual, users have to manually validate deliveries and receipts of products each time products enter and leave the warehouse, but in automated, they do not.", fr: "En manuel, les utilisateurs doivent valider manuellement les livraisons et les réceptions de produits à chaque fois que les produits entrent et sortent de l'entrepôt, mais en mode automatisé, ce n'est pas le cas." },
      { en: "In manual, users have to manually validate customer invoices and vendor bills, but in automated, they do not.", fr: "En mode manuel, les utilisateurs doivent valider manuellement les factures clients et les factures fournisseurs, mais ce n'est pas le cas en mode automatisé." },
      { en: "In manual, accountants have to make periodic inventory updates to match the value of the inventory account, but in automated, they do not.", fr: "En manuel, les comptables doivent effectuer des mises à jour périodiques des stocks pour correspondre à la valeur du compte d'inventaire, mais en mode automatisé, ils ne le font pas." },
    ],
    explanation: {
      en: "Source Odoo Learn (Inventory valuation): In manual, accountants must make periodic journal entries to update the value of the inventory account, but in automated, they do not.",
      fr: "Source Odoo Learn (Valorisation des stocks) : En manuel, les comptables doivent effectuer des écritures de journal périodiques pour mettre à jour la valeur du compte de stock, mais en automatisé, ils ne le font pas.",
    },
  }),
complexQ({
    id: "acc-141",
    module: "accounting",
    text: {
      en: "Product A uses the standard cost costing method and has a cost of €12 on its product record. If one unit is purchased at €10 and two units are purchased at €16, what is the total value of Product A? (Odoo Learn — Inventory valuation)",
      fr: "Le produit A utilise la méthode d'évaluation des coûts standard et a un coût de 12 € sur sa fiche produit. Si une unité est achetée à 10 € et deux unités sont achetées à 16 €, quelle est la valeur totale du produit A ? (Odoo Learn — Valorisation des stocks)",
    },
    correct: {
      en: "€36",
      fr: "36 €",
    },
    distractors: [
      { en: "€13", fr: "13 €" },
      { en: "€39", fr: "39 €" },
      { en: "€42", fr: "42 €" },
    ],
    explanation: {
      en: "Source Odoo Learn (Inventory valuation): €36",
      fr: "Source Odoo Learn (Valorisation des stocks) : 36€",
    },
  }),
mcq3Q({
    id: "acc-142",
    module: "accounting",
    text: {
      en: "When are the costs of goods sold registered in the P&L for continental inventory valuation? (Odoo Learn — Inventory valuation (Continental))",
      fr: "Quand les coûts des marchandises vendues sont-ils enregistrés dans le P&L pour la valorisation des stocks continentaux ? (Odoo Learn — Valorisation des stocks (Continental))",
    },
    correct: {
      en: "At receipt of goods.",
      fr: "A la réception des marchandises.",
    },
    distractors: [
      { en: "At the end of each period.", fr: "A la fin de chaque période." },
      { en: "At the end of the fiscal year.", fr: "À la fin de l'exercice." },
    ],
    explanation: {
      en: "Source Odoo Learn (Inventory valuation (Continental)): At receipt of goods.",
      fr: "Source Odoo Learn (Valorisation des stocks (Continental)) : A réception des marchandises.",
    },
  }),
mcq3Q({
    id: "acc-143",
    module: "accounting",
    text: {
      en: "2.	In continental, what should an accountant periodically do? (Odoo Learn — Inventory valuation (Continental))",
      fr: "2. En Europe continentale, que doit faire périodiquement un comptable ? (Odoo Learn — Valorisation des stocks (Continental))",
    },
    correct: {
      en: "c. 	If the goods are not sold immediately, the accountant must add them to the balance sheet.",
      fr: "c. 	Si les marchandises ne sont pas vendues immédiatement, le comptable doit les ajouter au bilan.",
    },
    distractors: [
      { en: "If the goods are not sold immediately, no action is required since they will appear on the Profit & Loss statement.", fr: "Si les marchandises ne sont pas vendues immédiatement, aucune action n'est requise puisqu'elles apparaîtront sur le compte de résultat." },
      { en: "b.	If the goods are not sold immediately, the accountant must make sure that they are recorded in the inventory.", fr: "b.	Si les marchandises ne sont pas vendues immédiatement, le comptable doit s'assurer qu'elles sont inscrites à l'inventaire." },
    ],
    explanation: {
      en: "Source Odoo Learn (Inventory valuation (Continental)): c. 	If the goods are not sold immediately, the accountant must add them to the balance sheet.",
      fr: "Source Odoo Learn (Valorisation des stocks (Continental)) : c. 	Si les marchandises ne sont pas vendues immédiatement, le comptable doit les ajouter au bilan.",
    },
  }),
complexQ({
    id: "acc-144",
    module: "accounting",
    text: {
      en: "Where can the COGS account be set? (Odoo Learn — Inventory valuation (Anglo-Saxon))",
      fr: "Où peut-on créer le compte COGS ? (Odoo Learn — Valorisation des stocks (anglo-saxon))",
    },
    correct: {
      en: "All of the above",
      fr: "Tout ce qui précède",
    },
    distractors: [
      { en: "The Expense Account field on the product record", fr: "Le champ Compte de dépenses sur la fiche produit" },
      { en: "The Expense Account field on the product category record", fr: "Le champ Compte de dépenses sur l'enregistrement de catégorie de produit" },
      { en: "The Expense Account field on the Vendor Bills journal record", fr: "Le champ Compte de dépenses dans l'enregistrement du journal Factures fournisseurs" },
    ],
    explanation: {
      en: "Source Odoo Learn (Inventory valuation (Anglo-Saxon)): All of the above",
      fr: "Source Odoo Learn (Valorisation des stocks (anglo-saxon)) : Tout ce qui précède",
    },
  }),
complexQ({
    id: "acc-145",
    module: "accounting",
    text: {
      en: "When is the cost of goods sold (COGS) recognized when using Anglo-Saxon inventory valuation? (Odoo Learn — Inventory valuation (Anglo-Saxon))",
      fr: "Quand est-ce que le coût des marchandises vendues (COGS) est reconnu lors de l’utilisation de la valorisation des stocks anglo-saxonne ? (Odoo Learn — Valorisation des stocks (anglo-saxon))",
    },
    correct: {
      en: "When the invoice to the customer is confirmed",
      fr: "Lorsque la facture au client est confirmée",
    },
    distractors: [
      { en: "When the sales order to the customer is confirmed", fr: "Lorsque la commande client est confirmée" },
      { en: "When the purchase order to the vendor is confirmed", fr: "Lorsque le bon de commande au fournisseur est confirmé" },
      { en: "When the vendor bill to is confirmed", fr: "Lorsque la facture fournisseur est confirmée" },
    ],
    explanation: {
      en: "Source Odoo Learn (Inventory valuation (Anglo-Saxon)): When the invoice to the customer is confirmed",
      fr: "Source Odoo Learn (Valorisation des stocks (anglo-saxon)) : Lorsque la facture au client est confirmée",
    },
  }),
mcq3Q({
    id: "acc-146",
    module: "accounting",
    text: {
      en: "When are Realized Gains/Losses exchange difference entries generated in Odoo? (Odoo Learn — Multi-currency - Realized Gains/Losses)",
      fr: "Quand les entrées de différence d'échange des gains/pertes réalisés sont-elles générées dans Odoo ? (Odoo Learn — Multi-devises - Gains/Pertes réalisés)",
    },
    correct: {
      en: "After the payment is registered.",
      fr: "Une fois le paiement enregistré.",
    },
    distractors: [
      { en: "When a currency rate is updated.", fr: "Lorsqu'un taux de change est mis à jour." },
      { en: "When an invoice or bill with a foreign currency is created.", fr: "Lorsqu'une facture ou une facture avec une devise étrangère est créée." },
    ],
    explanation: {
      en: "Source Odoo Learn (Multi-currency - Realized Gains/Losses): After the payment is registered.",
      fr: "Source Odoo Learn (Multi-devises - Gains/Pertes réalisés) : Après enregistrement du paiement.",
    },
  }),
mcq3Q({
    id: "acc-147",
    module: "accounting",
    text: {
      en: "How can I automate the currency type of a bill based on the vendor? (Odoo Learn — Multi-currency - Realized Gains/Losses)",
      fr: "Comment puis-je automatiser le type de devise d'une facture en fonction du fournisseur ? (Odoo Learn — Multi-devises - Gains/Pertes réalisés)",
    },
    correct: {
      en: "By defining a currency in the “Supplier Currency” of the vendor’s form.",
      fr: "En définissant une devise dans la « Devise du fournisseur » du formulaire du fournisseur.",
    },
    distractors: [
      { en: "By defining a fiscal position in the vendor’s form.", fr: "En définissant une situation fiscale dans le formulaire du fournisseur." },
      { en: "By defining an address in the vendor’s form.", fr: "En définissant une adresse dans le formulaire du vendeur." },
    ],
    explanation: {
      en: "Source Odoo Learn (Multi-currency - Realized Gains/Losses): By defining a currency in the “Supplier Currency” of the vendor’s form.",
      fr: "Source Odoo Learn (Multi-devises - Gains/Pertes réalisés) : En définissant une devise dans la « Devise du fournisseur » du formulaire du fournisseur.",
    },
  }),
mcq3Q({
    id: "acc-148",
    module: "accounting",
    text: {
      en: "When creating or importing a bank statement, where can I find the “Amount Currency” and “Foreign Currency” fields? (Odoo Learn — Multi-currency - Realized Gains/Losses)",
      fr: "Lors de la création ou de l’import d’un relevé bancaire, où puis-je trouver les champs « Montant Devise » et « Devise étrangère » ? (Odoo Learn — Multi-devises - Gains/Pertes réalisés)",
    },
    correct: {
      en: "By clicking on the ⋮ button and checking both fields.",
      fr: "En cliquant sur le bouton ⋮ et en cochant les deux champs.",
    },
    distractors: [
      { en: "They must be enabled in the accounting app settings.", fr: "Ils doivent être activés dans les paramètres de l'application de comptabilité." },
      { en: "They are automatically added based on bills containing the same “Partner” in the “Partner field”.", fr: "Ils sont automatiquement ajoutés en fonction des factures contenant le même « Partenaire » dans le « Champ Partenaire »." },
    ],
    explanation: {
      en: "Source Odoo Learn (Multi-currency - Realized Gains/Losses): By clicking on the ⋮ button and checking both fields.",
      fr: "Source Odoo Learn (Multi-devises - Gains/Pertes réalisés) : En cliquant sur le bouton ⋮ et en cochant les deux champs.",
    },
  }),
mcq3Q({
    id: "acc-149",
    module: "accounting",
    text: {
      en: "What must I do upon setting a closing date for the fiscal period in my Unrealized Gains/Losses report? (Odoo Learn — Multi-currency - Unrealized Gains/Losses)",
      fr: "Que dois-je faire après avoir fixé une date de clôture pour l'exercice financier dans mon rapport Gains/Pertes non réalisés ? (Odoo Learn — Multi-devises - Gains/Pertes non réalisés)",
    },
    correct: {
      en: "Set a reversal date on the first day after the closing.",
      fr: "Fixez une date de contrepassation le premier jour après la clôture.",
    },
    distractors: [
      { en: "Nothing, everything is automatic.", fr: "Rien, tout est automatique." },
      { en: "Set the Unrealized Gains/Losses as “Realized”.", fr: "Définissez les gains/pertes non réalisés sur « Réalisé »." },
    ],
    explanation: {
      en: "Source Odoo Learn (Multi-currency - Unrealized Gains/Losses): Set a reversal date on the first day after the closing.",
      fr: "Source Odoo Learn (Multi-devises – Gains/Pertes non réalisés) : Fixez une date de retournement le premier jour après la clôture.",
    },
  }),
complexQ({
    id: "acc-150",
    module: "accounting",
    text: {
      en: "What can you do if you started your business in the middle of a fiscal year? (Odoo Learn — Closing the fiscal year)",
      fr: "Que pouvez-vous faire si vous démarrez votre entreprise au milieu d’un exercice financier ? (Odoo Learn — Clôture de l'exercice)",
    },
    correct: {
      en: "In the Settings app, enable the Fiscal Years option, then create a new Fiscal Year with specific Start and End Dates.",
      fr: "Dans l'application Paramètres, activez l'option Années fiscales, puis créez une nouvelle année fiscale avec des dates de début et de fin spécifiques.",
    },
    distractors: [
      { en: "Match the fiscal year in Odoo to your local accounting regulation and have the invoices and bills start on the date of your business opening.", fr: "Faites correspondre l'année fiscale dans Odoo à votre réglementation comptable locale et faites en sorte que les factures et les factures commencent à la date d'ouverture de votre entreprise." },
      { en: "In the Settings app, change the fiscal year’s Last Day to the date of your business opening.", fr: "Dans l’application Paramètres, remplacez le dernier jour de l’exercice par la date d’ouverture de votre entreprise." },
      { en: "Odoo automatically creates a fiscal period starting on the day your database is created and in accordance with your localization package installed.", fr: "Odoo crée automatiquement une période fiscale commençant le jour de la création de votre base de données et conformément à votre package de localisation installé." },
    ],
    explanation: {
      en: "Source Odoo Learn (Closing the fiscal year): In the Settings app, enable the Fiscal Years option, then create a new Fiscal Year with specific Start and End Dates.",
      fr: "Source Odoo Learn (Clôture de l'année fiscale) : Dans l'application Paramètres, activez l'option Années fiscales, puis créez une nouvelle année fiscale avec des dates de début et de fin spécifiques.",
    },
  }),
complexQ({
    id: "acc-151",
    module: "accounting",
    text: {
      en: "Where can you verify the amount of unallocated earnings for the previous fiscal year once you’ve closed it? (Odoo Learn — Closing the fiscal year)",
      fr: "Où vérifier le montant des gains non affectés de l’exercice précédent une fois celui-ci clôturé ? (Odoo Learn — Clôture de l'exercice)",
    },
    correct: {
      en: "On the balance sheet, with the period set to “End of Year” for the current year, on the Previous Years Unallocated Earnings line",
      fr: "Au bilan, avec la période fixée à « Fin d'année » pour l'année en cours, sur la ligne Bénéfices non affectés des années précédentes",
    },
    distractors: [
      { en: "On the balance sheet, with the period set to “End of Year” for the previous year, on the Previous Years Unallocated Earnings line", fr: "Au bilan, avec la période fixée à « Fin d'année » pour l'année précédente, sur la ligne Bénéfices non affectés des années précédentes" },
      { en: "On the profit and loss statement, with the period set to “End of Year” for the previous year, on the Net Profit line", fr: "Sur le compte de résultat, avec la période fixée à « Fin d'année » pour l'année précédente, sur la ligne Bénéfice Net" },
      { en: "On the profit and loss statement, with the period set to “End of Year” for the current year, on the Net Profit line", fr: "Sur le compte de résultat, avec la période fixée à « Fin d'année » pour l'année en cours, sur la ligne Bénéfice Net" },
    ],
    explanation: {
      en: "Source Odoo Learn (Closing the fiscal year): On the balance sheet, with the period set to “End of Year” for the current year, on the Previous Years Unallocated Earnings line",
      fr: "Source Odoo Learn (Clôture de l'exercice) : Au bilan, avec la période fixée à « Fin d'année » pour l'année en cours, sur la ligne Bénéfices non alloués des années précédentes",
    },
  }),
complexQ({
    id: "acc-152",
    module: "accounting",
    text: {
      en: "Which journal handles Annual Closings in Odoo? (Odoo Learn — Closing the fiscal year)",
      fr: "Quel journal gère les clôtures annuelles dans Odoo ? (Odoo Learn — Clôture de l'exercice)",
    },
    correct: {
      en: "Tax Returns journal.",
      fr: "Journal des déclarations de revenus.",
    },
    distractors: [
      { en: "Miscellaneous journal.", fr: "Journal divers." },
      { en: "Annual Closing journal.", fr: "Journal de clôture annuelle." },
      { en: "Taxes journal.", fr: "Journal des impôts." },
    ],
    explanation: {
      en: "Source Odoo Learn (Closing the fiscal year): Tax Returns journal.",
      fr: "Source Odoo Learn (Clôture de l'année fiscale) : Journal des déclarations d'impôts.",
    },
  }),
complexQ({
    id: "acc-153",
    module: "accounting",
    text: {
      en: "What state should the checks have to set an Annual Closing to Review status? (Odoo Learn — Closing the fiscal year)",
      fr: "Quel état les chèques doivent-ils avoir pour définir un statut de clôture annuelle pour révision ? (Odoo Learn — Clôture de l'exercice)",
    },
    correct: {
      en: "Reviewed or Supervised.",
      fr: "Révisé ou supervisé.",
    },
    distractors: [
      { en: "Reviewed only.", fr: "Révisé uniquement." },
      { en: "Supervised only.", fr: "Surveillé uniquement." },
      { en: "To review, Reviewed or Supervised.", fr: "À réviser, révisé ou supervisé." },
    ],
    explanation: {
      en: "Source Odoo Learn (Closing the fiscal year): Reviewed or Supervised.",
      fr: "Source Odoo Learn (Clôture de l'exercice) : Révisé ou Supervisé.",
    },
  }),

];
