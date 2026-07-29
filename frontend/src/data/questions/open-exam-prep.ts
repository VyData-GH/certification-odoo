import { complexQ } from "./helpers";
import type { Question } from "@/types/exam";

export const openExamPrepQuestions: Question[] = [
  complexQ({
    id: "oep-001",
    module: "accounting",
    text: {
      en: "A consultant is configuring the chart of accounts for a new company. In Odoo 19, where are the accounts stored as a technical model?",
      fr: "A consultant is configuring the plan comptable for a new company. In Odoo 19, where are the accounts stored as a technical model?",
    },
    correct: {
      en: "account.account",
      fr: "account.account",
    },
    distractors: [
      {
        en: "account.chart",
        fr: "account.chart",
      },
      {
        en: "account.coa (not applicable here)",
        fr: "account.coa (not applicable here)",
      },
      {
        en: "res.account (not applicable here)",
        fr: "res.account (not applicable here)",
      },
    ],
    explanation: {
      en: "All accounts in Odoo's chart of accounts are records of the technical model account.account. Each account has a code, a name, an account type (e.g., Receivable, Payable, Income, Expense), and is scoped to a company in multi-company setups. The chart of accounts itself is just the collection of account.account records assigned to a company.\n\nThere is no account.chart model; the chart is the set of account.account records, not a separate object. account.coa is not an Odoo model name; the correct technical name is account.account. res.* models are reserved for resources like users, partners, and companies — not accounts.",
      fr: "All accounts in Odoo's plan comptable are records of the technical model account.account. Each account has a code, a name, an account type (e.g., Receivable, Payable, Income, note de frais), and is scoped to a company in multi-company setups. The plan comptable itself is just the collection of account.account records assigned to a company.\n\nThere is no account.chart model; the chart is the set of account.account records, not a separate object. account.coa is not an Odoo model name; the correct technical name is account.account. res.* models are reserved for resources like users, partners, and companies — not accounts.",
    },
  }),
  complexQ({
    id: "oep-002",
    module: "accounting",
    text: {
      en: "In Odoo 19 Accounting, what is the correct sequence to record a customer payment that clears an outstanding invoice?",
      fr: "In Odoo 19 Accounting, what is the correct sequence to record a customer payment that clears an outstanding facture?",
    },
    correct: {
      en: "Register Payment from the invoice",
      fr: "Register Payment from the facture",
    },
    distractors: [
      {
        en: "Create a journal entry manually crediting the receivable account",
        fr: "Create a écriture comptable manually crediting the receivable account",
      },
      {
        en: "Record the bank statement first, then create the invoice from the statement",
        fr: "Record the bank statement first, then create the facture from the statement",
      },
      {
        en: "Validate the invoice, then mark it as Paid from the action menu",
        fr: "Validate the facture, then mark it as Paid from the action menu",
      },
    ],
    explanation: {
      en: "The standard flow is: post the invoice, click Register Payment (which creates a payment in an outstanding receipts account), then reconcile that payment with the bank statement line when the bank import arrives. This two-step approach correctly separates the moment cash is recorded from the moment it clears the bank, which matters for cash-basis reporting and bank reconciliation accuracy.\n\nManual journal entries bypass the payment matching machinery and break the partner ledger and aged receivable reports. Creating an invoice from a statement line is possible but is the exception, not the rule, and does not reflect the standard order-to-cash flow. There is no 'Mark as Paid' action that bypasses the payment record; payments must be registered to update the GL.",
      fr: "The standard flow is: post the facture, click Register Payment (which creates a payment in an outstanding receipts account), then reconcile that payment with the bank statement line when the bank import arrives. This two-step approach correctly separates the moment cash is recorded from the moment it clears the bank, which matters for cash-basis reporting and rapprochement bancaire accuracy.\n\nManual écritures comptables bypass the payment matching machinery and break the partner ledger and aged receivable reports. Creating an facture from a statement line is possible but is the exception, not the rule, and does not reflect the standard order-to-cash flow. There is no 'Mark as Paid' action that bypasses the payment record; payments must be registered to update the GL.",
    },
  }),
  complexQ({
    id: "oep-003",
    module: "accounting",
    text: {
      en: "Which Odoo 19 feature allows a company to apply different tax rates and accounts automatically based on the customer's country or state?",
      fr: "Which Odoo 19 feature allows a company to apply different taxe rates and accounts automatically based on the customer's country or state?",
    },
    correct: {
      en: "Fiscal positions",
      fr: "position fiscale",
    },
    distractors: [
      {
        en: "Analytic accounting",
        fr: "Analytic accounting",
      },
      {
        en: "Tax groups",
        fr: "taxe groups",
      },
      {
        en: "Multi-currency",
        fr: "Multi-currency",
      },
    ],
    explanation: {
      en: "Fiscal positions map default taxes and accounts to alternates based on rules such as the customer's country, state, or VAT status. For example, a fiscal position for EU B2B customers can replace domestic VAT with the reverse-charge tax and swap the income account to an intra-community sales account, automatically applied at quotation and invoice creation.\n\nAnalytic accounting tracks cost centers and projects, not jurisdiction-based tax substitution. Tax groups aggregate taxes for reporting; they do not substitute taxes per customer. Multi-currency handles currency conversion, not tax/account remapping by location.",
      fr: "position fiscale map default taxes and accounts to alternates based on rules such as the customer's country, state, or VAT status. For example, a position fiscale for EU B2B customers can replace domestic VAT with the reverse-charge taxe and swap the income account to an intra-community sales account, automatically applied at devis and facture creation.\n\nAnalytic accounting tracks cost centers and projects, not jurisdiction-based taxe substitution. taxe groups aggregate taxes for reporting; they do not substitute taxes per customer. Multi-currency handles currency conversion, not taxe/account remapping by location.",
    },
  }),
  complexQ({
    id: "oep-004",
    module: "accounting",
    text: {
      en: "A consultant must record monthly depreciation automatically for a fleet of vehicles. Which Odoo Enterprise application configures the depreciation schedule?",
      fr: "A consultant must record monthly depreciation automatically for a fleet of vehicles. Which Odoo Enterprise application configures the depreciation schedule?",
    },
    correct: {
      en: "Accounting > Assets",
      fr: "Accounting > Assets",
    },
    distractors: [
      {
        en: "Inventory > Valuation Adjustments",
        fr: "Inventory > Valuation Adjustments",
      },
      {
        en: "Fleet > Depreciation",
        fr: "Fleet > Depreciation",
      },
      {
        en: "Manufacturing > Equipment",
        fr: "Manufacturing > Equipment",
      },
    ],
    explanation: {
      en: "Odoo Enterprise Accounting provides an Asset Management feature under Accounting > Accounting > Management > Assets. You define an asset model with method (linear/degressive), duration, prorata, and journal, and Odoo posts the monthly depreciation entries automatically. Asset records can be created from vendor bills by linking the expense account to an asset model.\n\nInventory valuation adjustments handle stock value changes, not fixed asset depreciation. Fleet tracks vehicles operationally (driver assignment, costs) but does not post depreciation entries. Manufacturing > Equipment relates to maintenance and OEE, not financial depreciation.",
      fr: "Odoo Enterprise Accounting provides an Asset Management feature under Accounting > Accounting > Management > Assets. You define an asset model with method (linear/degressive), duration, prorata, and journal, and Odoo posts the monthly depreciation entries automatically. Asset records can be created from facture fournisseur by linking the note de frais account to an asset model.\n\nInventory valuation adjustments handle stock value changes, not fixed asset depreciation. Fleet tracks vehicles operationally (driver assignment, costs) but does not post depreciation entries. Manufacturing > Equipment relates to maintenance and OEE, not financial depreciation.",
    },
  }),
  complexQ({
    id: "oep-005",
    module: "accounting",
    text: {
      en: "A consultant needs the Odoo 19 system to track expenses per project for profitability reporting. Which feature should be configured?",
      fr: "A consultant needs the Odoo 19 system to track note de frais per project for profitability reporting. Which feature should be configured?",
    },
    correct: {
      en: "Analytic accounts and analytic distributions on journal items",
      fr: "compte analytique and analytic distributions on journal items",
    },
    distractors: [
      {
        en: "Cost centers via product categories in Odoo 19, but not for this workflow",
        fr: "Cost centers via product categories in Odoo 19, but not for this workflow",
      },
      {
        en: "Multi-company consolidation which confuses a related but distinct setting",
        fr: "Multi-company consolidation which confuses a related but distinct setting",
      },
      {
        en: "Tags on partners and is not the controlling configuration here",
        fr: "Tags on partners and is not the controlling configuration here",
      },
    ],
    explanation: {
      en: "Analytic accounting in Odoo lets you tag any journal item with one or more analytic accounts via an analytic distribution (percentages summing to 100%). The same expense can be split across departments, projects, or customers without affecting the GL. The Project app can auto-create an analytic account per project and post project costs and revenue to it for the profitability report.\n\nProduct categories drive stock valuation accounts, not flexible cost-center reporting. Multi-company consolidation aggregates several companies; it does not provide per-project tagging. Partner tags help with marketing segmentation, not financial cost analysis.",
      fr: "Analytic accounting in Odoo lets you tag any journal item with one or more compte analytique via an analytic distribution (percentages summing to 100%). The same note de frais can be split across departments, projects, or customers without affecting the GL. The Project app can auto-create an compte analytique per project and post project costs and revenue to it for the profitability report.\n\nProduct categories drive stock valuation accounts, not flexible cost-center reporting. Multi-company consolidation aggregates several companies; it does not provide per-project tagging. Partner tags help with marketing segmentation, not financial cost analysis.",
    },
  }),
  complexQ({
    id: "oep-006",
    module: "accounting",
    text: {
      en: "In Odoo 19, what is the technical model name for journal entries (the document that contains debit and credit lines)?",
      fr: "In Odoo 19, what is the technical model name for écritures comptables (the document that contains debit and credit lines)?",
    },
    correct: {
      en: "account.move",
      fr: "account.move",
    },
    distractors: [
      {
        en: "account.journal",
        fr: "account.journal",
      },
      {
        en: "account.entry",
        fr: "account.entry",
      },
      {
        en: "account.transaction",
        fr: "account.transaction",
      },
    ],
    explanation: {
      en: "account.move is the journal entry header in Odoo. Its lines are stored in account.move.line. Customer invoices, vendor bills, payments, and miscellaneous entries are all account.move records distinguished by the move_type field (out_invoice, in_invoice, out_refund, in_refund, entry).\n\naccount.journal is the journal definition (e.g., Sales, Purchase, Bank), not the entries. account.entry is not a real Odoo model; the correct name is account.move. account.transaction is not the model used for journal entries.",
      fr: "account.move is the écriture comptable header in Odoo. Its lines are stored in account.move.line. Customer facture, facture fournisseur, payments, and miscellaneous entries are all account.move records distinguished by the move_type field (out_invoice, in_invoice, out_refund, in_refund, entry).\n\naccount.journal is the journal definition (e.g., Sales, Purchase, Bank), not the entries. account.entry is not a real Odoo model; the correct name is account.move. account.transaction is not the model used for écritures comptables.",
    },
  }),
  complexQ({
    id: "oep-007",
    module: "accounting",
    text: {
      en: "A multi-currency company in Odoo 19 sells in EUR but its main currency is USD. When an EUR invoice is posted, how does Odoo determine the USD amount on the GL?",
      fr: "A multi-currency company in Odoo 19 sells in EUR but its main currency is USD. When an EUR facture is posted, how does Odoo determine the USD amount on the GL?",
    },
    correct: {
      en: "Uses the exchange rate active on the invoice date from res.currency.rate",
      fr: "Uses the exchange rate active on the facture date from res.currency.rate",
    },
    distractors: [
      {
        en: "Uses the rate from the company preference page only (not applicable here)",
        fr: "Uses the rate from the company preference page only (not applicable here)",
      },
      {
        en: "Always uses the rate at the moment of payment (not applicable here)",
        fr: "Always uses the rate at the moment of payment (not applicable here)",
      },
      {
        en: "Forces the user to enter the rate manually (not applicable here)",
        fr: "Forces the user to enter the rate manually (not applicable here)",
      },
    ],
    explanation: {
      en: "Odoo stores exchange rates as res.currency.rate records with effective dates. When a journal entry is posted, it looks up the most recent rate on or before the document date and converts foreign-currency amounts to the company currency for the GL columns (debit/credit). Rates can be updated manually or pulled from providers like ECB or Banxico via a scheduled action.\n\nThere is no single rate on a 'company preference page'; rates are dated records on the currency. Payment-date rates trigger an exchange-rate gain/loss entry separately; the invoice itself uses the invoice-date rate. The user is not forced to enter a rate manually if the rate table is populated.",
      fr: "Odoo stores exchange rates as res.currency.rate records with effective dates. When a écriture comptable is posted, it looks up the most recent rate on or before the document date and converts foreign-currency amounts to the company currency for the GL columns (debit/credit). Rates can be updated manually or pulled from providers like ECB or Banxico via a scheduled action.\n\nThere is no single rate on a 'company preference page'; rates are dated records on the currency. Payment-date rates trigger an exchange-rate gain/loss entry separately; the facture itself uses the facture-date rate. The user is not forced to enter a rate manually if the rate table is populated.",
    },
  }),
  complexQ({
    id: "oep-008",
    module: "accounting",
    text: {
      en: "A consultant configures a Bank Journal in Odoo 19. What does the 'Outstanding Receipts Account' do?",
      fr: "A consultant configures a Bank Journal in Odoo 19. What does the 'Outstanding Receipts Account' do?",
    },
    correct: {
      en: "Holds customer payments before they are reconciled with a bank statement line",
      fr: "Holds customer payments before they are reconciled with a bank statement line",
    },
    distractors: [
      {
        en: "Records bank fees automatically and belongs to a different Odoo application",
        fr: "Records bank fees automatically and belongs to a different Odoo application",
      },
      {
        en: "Stores foreign exchange differences which confuses a related but distinct setting",
        fr: "Stores foreign exchange differences which confuses a related but distinct setting",
      },
      {
        en: "Acts as the petty cash account and is not the controlling configuration here",
        fr: "Acts as the petty cash account and is not the controlling configuration here",
      },
    ],
    explanation: {
      en: "The Outstanding Receipts Account is an interim account used between Register Payment and bank reconciliation. When a customer payment is registered, it credits the receivable and debits Outstanding Receipts. When the bank statement line is reconciled with that payment, the entry transfers from Outstanding Receipts to the bank account. This separation is what enables the two-step payment flow.\n\nBank fees are posted via a reconciliation model or manual line, not through Outstanding Receipts. FX differences are posted to dedicated unrealized/realized FX gain/loss accounts. Petty cash uses a separate Cash journal, not Outstanding Receipts.",
      fr: "The Outstanding Receipts Account is an interim account used between Register Payment and rapprochement bancaire. When a customer payment is registered, it credits the receivable and debits Outstanding Receipts. When the bank statement line is reconciled with that payment, the entry transfers from Outstanding Receipts to the bank account. This separation is what enables the two-step payment flow.\n\nBank fees are posted via a modèle de rapprochement or manual line, not through Outstanding Receipts. FX differences are posted to dedicated unrealized/realized FX gain/loss accounts. Petty cash uses a separate Cash journal, not Outstanding Receipts.",
    },
  }),
  complexQ({
    id: "oep-009",
    module: "accounting",
    text: {
      en: "Which Odoo 19 feature enables automatic reconciliation suggestions based on past matching patterns?",
      fr: "Which Odoo 19 feature enables automatic reconciliation suggestions based on past matching patterns?",
    },
    correct: {
      en: "Reconciliation models",
      fr: "modèle de rapprochement",
    },
    distractors: [
      {
        en: "Automated payment terms",
        fr: "Automated condition de paiement",
      },
      {
        en: "Asset models",
        fr: "Asset models",
      },
      {
        en: "Tax adjustments",
        fr: "taxe adjustments",
      },
    ],
    explanation: {
      en: "Reconciliation models in Accounting > Configuration > Banks > Reconciliation Models let you define rules that auto-match or auto-create entries on bank statement lines. Examples: 'If memo contains BANK FEE, post to account 6210', or 'If counterpart matches an open invoice, propose it as the match'. Odoo 19 leverages prior reconciliations to refine suggestions.\n\nPayment terms define due dates and installments, not bank matching rules. Asset models drive depreciation, unrelated to bank reconciliation. Tax adjustments are manual corrections for tax reports, not reconciliation rules.",
      fr: "modèle de rapprochement in Accounting > Configuration > Banks > modèle de rapprochement let you define rules that auto-match or auto-create entries on bank statement lines. Examples: 'If memo contains BANK FEE, post to account 6210', or 'If counterpart matches an open facture, propose it as the match'. Odoo 19 leverages prior reconciliations to refine suggestions.\n\ncondition de paiement define due dates and installments, not bank matching rules. Asset models drive depreciation, unrelated to rapprochement bancaire. taxe adjustments are manual corrections for taxe reports, not reconciliation rules.",
    },
  }),
  complexQ({
    id: "oep-010",
    module: "accounting",
    text: {
      en: "An accountant wants to lock all accounting entries before a specific date so they can no longer be modified. Where is this configured in Odoo 19?",
      fr: "An accountant wants to lock all accounting entries before a specific date so they can no longer be modified. Where is this configured in Odoo 19?",
    },
    correct: {
      en: "On the company under Accounting > Settings > Lock Date (Tax Lock + All Users Lock)",
      fr: "On the company under Accounting > Settings > Lock Date (taxe Lock + All Users Lock)",
    },
    distractors: [
      {
        en: "On each journal individually under Sequence Lock",
        fr: "On each journal individually under Sequence Lock",
      },
      {
        en: "By archiving the fiscal year on res.company",
        fr: "By archiving the fiscal year on res.company",
      },
      {
        en: "Only by removing user posting rights and is not the controlling configuration here",
        fr: "Only by removing user posting rights and is not the controlling configuration here",
      },
    ],
    explanation: {
      en: "Lock Dates are set on the company in Accounting > Settings. The 'Tax Return Lock Date' prevents changes to entries up to that date that would affect submitted tax returns; the 'Global Lock Date' (or 'All Users Lock') prevents any user — including advisors — from posting or modifying entries before that date. Both are essential for period closing integrity.\n\nLock dates are company-wide, not per journal. Archiving a fiscal year is not how Odoo locks entries; the lock is a date on the company. Removing posting rights is too broad and does not protect already-posted entries.",
      fr: "Lock Dates are set on the company in Accounting > Settings. The 'taxe Return Lock Date' prevents changes to entries up to that date that would affect submitted taxe returns; the 'Global Lock Date' (or 'All Users Lock') prevents any user — including advisors — from posting or modifying entries before that date. Both are essential for period closing integrity.\n\nLock dates are company-wide, not per journal. Archiving a fiscal year is not how Odoo locks entries; the lock is a date on the company. Removing posting rights is too broad and does not protect already-posted entries.",
    },
  }),
  complexQ({
    id: "oep-011",
    module: "accounting",
    text: {
      en: "What is the difference between a Customer Invoice (out_invoice) and a Vendor Bill (in_invoice) in Odoo 19?",
      fr: "What is the difference between a Customer facture (out_invoice) and a facture fournisseur (in_invoice) in Odoo 19?",
    },
    correct: {
      en: "They are the same model with different move_type values",
      fr: "They are the same model with different move_type values",
    },
    distractors: [
      {
        en: "Invoices use account.move; bills use a different model called account.bill",
        fr: "facture use account.move; bills use a different model called account.bill",
      },
      {
        en: "Bills cannot have multiple lines",
        fr: "Bills cannot have multiple lines",
      },
      {
        en: "Customer invoices cannot reference taxes",
        fr: "Customer facture cannot reference taxes",
      },
    ],
    explanation: {
      en: "Both customer invoices and vendor bills are stored in account.move with different move_type values: out_invoice for customer invoices, in_invoice for vendor bills, out_refund/in_refund for credit notes. This unified model is why all invoice flows share the same posting, payment, and reconciliation logic.\n\nThere is no separate account.bill model; both are account.move records. Bills can have many lines, just like invoices. Customer invoices fully support taxes; that is one of their core uses.",
      fr: "Both customer facture and facture fournisseur are stored in account.move with different move_type values: out_invoice for customer facture, in_invoice for facture fournisseur, out_refund/in_refund for credit notes. This unified model is why all facture flows share the same posting, payment, and reconciliation logic.\n\nThere is no separate account.bill model; both are account.move records. Bills can have many lines, just like facture. Customer facture fully support taxes; that is one of their core uses.",
    },
  }),
  complexQ({
    id: "oep-012",
    module: "accounting",
    text: {
      en: "A consultant needs to issue a credit note for a posted customer invoice in Odoo 19. Which option is the standard approach?",
      fr: "A consultant needs to issue a credit note for a posted customer facture in Odoo 19. Which option is the standard approach?",
    },
    correct: {
      en: "Delete the posted invoice and recreate it with corrected line amounts",
      fr: "Delete the posted facture and recreate it with corrected line amounts",
    },
    distractors: [
      {
        en: "Credit Note action: partial, full refund, or full refund with new draft",
        fr: "Credit Note action: partial, full refund, or full refund with new draft",
      },
      {
        en: "Post manual reversing journal entries without linking a credit note",
        fr: "Post manual reversing écritures comptables without linking a credit note",
      },
      {
        en: "Reset posted invoice to draft and edit lines in place without reversal",
        fr: "Reset posted facture to draft and edit lines in place without reversal",
      },
    ],
    explanation: {
      en: "Posted invoices cannot be deleted. The Credit Note action presents three options: 1) Partial Refund creates an empty credit note for editing, 2) Full Refund posts a complete reversal automatically, 3) Full Refund and New Draft Invoice reverses the original and creates a new draft so you can correct and re-issue. Choice depends on whether you need a partial or full reversal.\n\nPosted invoices cannot be deleted; this would also break the audit trail. Manual reversal entries bypass the credit note linkage and break payment matching with the original. Once posted with a sequence number, an invoice cannot be reset to draft without a Reset to Draft action that itself requires reversing it.",
      fr: "Posted facture cannot be deleted. The Credit Note action presents three options: 1) Partial Refund creates an empty credit note for editing, 2) Full Refund posts a complete reversal automatically, 3) Full Refund and New Draft facture reverses the original and creates a new draft so you can correct and re-issue. Choice depends on whether you need a partial or full reversal.\n\nPosted facture cannot be deleted; this would also break the audit trail. Manual reversal entries bypass the credit note linkage and break payment matching with the original. Once posted with a sequence number, an facture cannot be reset to draft without a Reset to Draft action that itself requires reversing it.",
    },
  }),
  complexQ({
    id: "oep-013",
    module: "accounting",
    text: {
      en: "Odoo 19 lets you import bank statements via OFX, QIF, CSV, or direct bank synchronization. Which feature enables real-time direct synchronization with banks?",
      fr: "Odoo 19 lets you import bank statements via OFX, QIF, CSV, or direct bank synchronization. Which feature enables real-time direct synchronization with banks?",
    },
    correct: {
      en: "Odoo Bank Sync (Plaid, Ponto, Yodlee, Salt Edge connectors)",
      fr: "Odoo Bank Sync (Plaid, Ponto, Yodlee, Salt Edge connectors)",
    },
    distractors: [
      {
        en: "FTP file watcher and belongs to a different Odoo application",
        fr: "FTP file watcher and belongs to a different Odoo application",
      },
      {
        en: "Odoo IAP webhook which confuses a related but distinct setting",
        fr: "Odoo IAP webhook which confuses a related but distinct setting",
      },
      {
        en: "ICS feed and is not the controlling configuration here",
        fr: "ICS feed and is not the controlling configuration here",
      },
    ],
    explanation: {
      en: "Odoo provides bank synchronization through partners like Plaid (US/CA), Ponto (EU), Yodlee, and Salt Edge. Once enabled in Accounting > Configuration > Online Synchronization, statements are pulled automatically on a schedule. Manual import via OFX/QIF/CSV remains available for banks not supported by these connectors.\n\nThere is no built-in FTP watcher feature for bank statements in core Odoo. IAP webhooks are not the bank sync mechanism; Bank Sync uses dedicated partner APIs. ICS is a calendar feed format, unrelated to banking.",
      fr: "Odoo provides bank synchronization through partners like Plaid (US/CA), Ponto (EU), Yodlee, and Salt Edge. Once enabled in Accounting > Configuration > Online Synchronization, statements are pulled automatically on a schedule. Manual import via OFX/QIF/CSV remains available for banks not supported by these connectors.\n\nThere is no built-in FTP watcher feature for bank statements in core Odoo. IAP webhooks are not the bank sync mechanism; Bank Sync uses dedicated partner APIs. ICS is a calendar feed format, unrelated to banking.",
    },
  }),
  complexQ({
    id: "oep-014",
    module: "accounting",
    text: {
      en: "Which Odoo 19 report aggregates open customer balances by aging bucket (e.g., 0-30, 31-60, 61-90, 90+)?",
      fr: "Which Odoo 19 report aggregates open customer balances by aging bucket (e.g., 0-30, 31-60, 61-90, 90+)?",
    },
    correct: {
      en: "Aged Receivable",
      fr: "Aged Receivable",
    },
    distractors: [
      {
        en: "Partner Ledger",
        fr: "Partner Ledger",
      },
      {
        en: "Trial Balance",
        fr: "Trial Balance",
      },
      {
        en: "General Ledger",
        fr: "General Ledger",
      },
    ],
    explanation: {
      en: "The Aged Receivable report under Accounting > Reporting groups outstanding customer balances into aging buckets so the AR team can prioritize collections. Aged Payable does the same for vendor balances. Both are standard Odoo Accounting reports with drill-down to source documents.\n\nPartner Ledger lists every entry per partner without bucketing by age. Trial Balance lists account balances, not partner aging. General Ledger lists all journal items, not aged customer summaries.",
      fr: "The Aged Receivable report under Accounting > Reporting groups outstanding customer balances into aging buckets so the AR team can prioritize collections. Aged Payable does the same for vendor balances. Both are standard Odoo Accounting reports with drill-down to source documents.\n\nPartner Ledger lists every entry per partner without bucketing by age. Trial Balance lists account balances, not partner aging. General Ledger lists all journal items, not aged customer summaries.",
    },
  }),
  complexQ({
    id: "oep-015",
    module: "accounting",
    text: {
      en: "A consultant configures a payment term '30% advance, 70% net 60'. How does Odoo 19 split this on a posted invoice?",
      fr: "A consultant configures a condition de paiement '30% advance, 70% net 60'. How does Odoo 19 split this on a posted facture?",
    },
    correct: {
      en: "Two account.move.line records on the receivable account, each with its own due date",
      fr: "Two account.move.line records on the receivable account, each with its own due date",
    },
    distractors: [
      {
        en: "Two separate invoices linked together and belongs to a different Odoo application",
        fr: "Two separate facture linked together and belongs to a different Odoo application",
      },
      {
        en: "A single line with a custom due date formula (not applicable here)",
        fr: "A single line with a custom due date formula (not applicable here)",
      },
      {
        en: "It is not possible without an addon and is not the controlling configuration here",
        fr: "It is not possible without an addon and is not the controlling configuration here",
      },
    ],
    explanation: {
      en: "Payment terms with multiple lines generate multiple receivable lines on the same account.move. Each line has its own date_maturity, so the Aged Receivable report shows each portion in the correct bucket. The total still equals the invoice total. This is native functionality, not requiring any addon.\n\nIt is one invoice with multiple receivable lines, not two invoices. A formula on a single line cannot capture two different due dates. Multi-line payment terms are core Accounting functionality.",
      fr: "condition de paiement with multiple lines generate multiple receivable lines on the same account.move. Each line has its own date_maturity, so the Aged Receivable report shows each portion in the correct bucket. The total still equals the facture total. This is native functionality, not requiring any addon.\n\nIt is one facture with multiple receivable lines, not two facture. A formula on a single line cannot capture two different due dates. Multi-line condition de paiement are core Accounting functionality.",
    },
  }),
  complexQ({
    id: "oep-016",
    module: "accounting",
    text: {
      en: "Odoo 19 supports e-invoicing standards such as Peppol BIS Billing 3.0, Factur-X, and country-specific EDI. Where is the e-invoicing format selected for a partner?",
      fr: "Odoo 19 supports e-invoicing standards such as Peppol BIS Billing 3.0, Factur-X, and country-specific EDI. Where is the e-invoicing format selected for a partner?",
    },
    correct: {
      en: "On the partner's Accounting tab as Electronic Invoicing format",
      fr: "On the partner's Accounting tab as Electronic Invoicing format",
    },
    distractors: [
      {
        en: "On every invoice manually before posting (not applicable here)",
        fr: "On every facture manually before posting (not applicable here)",
      },
      {
        en: "Globally for the entire database in General Settings only (not applicable here)",
        fr: "Globally for the entire database in General Settings only (not applicable here)",
      },
      {
        en: "Only on the company record (not applicable here)",
        fr: "Only on the company record (not applicable here)",
      },
    ],
    explanation: {
      en: "Each partner has an Accounting tab where the appropriate Electronic Invoicing formats are selected (e.g., Peppol BIS Billing 3.0, Factur-X, French Chorus Pro, Italian FatturaPA). When an invoice is posted to that partner, Odoo attaches the correct XML and routes it via Peppol or the country EDI gateway. Country-specific localizations install the right formats automatically.\n\nSetting per invoice would defeat automation; the format is configured per partner. There are global toggles, but the per-partner format selection is what determines which XML is produced. The company record holds sender configuration, not the recipient's format preference.",
      fr: "Each partner has an Accounting tab where the appropriate Electronic Invoicing formats are selected (e.g., Peppol BIS Billing 3.0, Factur-X, French Chorus Pro, Italian FatturaPA). When an facture is posted to that partner, Odoo attaches the correct XML and routes it via Peppol or the country EDI gateway. Country-specific localizations install the right formats automatically.\n\nSetting per facture would defeat automation; the format is configured per partner. There are global toggles, but the per-partner format selection is what determines which XML is produced. The company record holds sender configuration, not the recipient's format preference.",
    },
  }),
  complexQ({
    id: "oep-017",
    module: "accounting",
    text: {
      en: "In Odoo 19, what does the 'Tax Grids' configuration control on a tax record?",
      fr: "In Odoo 19, what does the 'taxe Grids' configuration control on a taxe record?",
    },
    correct: {
      en: "Visual grid layout designer for customizing form view column widths",
      fr: "Visual grid layout designer for customizing form view column widths",
    },
    distractors: [
      {
        en: "Tax grid boxes receiving base/tax amounts on statutory return forms",
        fr: "taxe grid boxes receiving base/taxe amounts on statutory return forms",
      },
      {
        en: "Country list controlling where a tax rate may appear on invoices",
        fr: "Country list controlling where a taxe rate may appear on facture",
      },
      {
        en: "Customer PDF grouping of tax lines on printed sales documents",
        fr: "Customer PDF grouping of taxe lines on printed sales documents",
      },
    ],
    explanation: {
      en: "Tax Grids map a tax's base and tax amounts to specific boxes on the official tax return. For each tax, you assign grids for invoices and refunds (positive and negative side). When you run the Tax Report, Odoo aggregates entries by grid to populate the official return form. Localizations ship with country-specific grids matching the legal tax form.\n\nTax Grids are an accounting concept, not a UI grid. Country applicability is set via fiscal positions, not tax grids. Document grouping uses Tax Groups, not Tax Grids.",
      fr: "taxe Grids map a taxe's base and taxe amounts to specific boxes on the official taxe return. For each taxe, you assign grids for facture and refunds (positive and negative side). When you run the taxe Report, Odoo aggregates entries by grid to populate the official return form. Localizations ship with country-specific grids matching the legal taxe form.\n\ntaxe Grids are an accounting concept, not a UI grid. Country applicability is set via position fiscale, not taxe grids. Document grouping uses taxe Groups, not taxe Grids.",
    },
  }),
  complexQ({
    id: "oep-018",
    module: "crm",
    text: {
      en: "A consultant must configure recurring monthly billing for a SaaS subscription. Which Odoo 19 application is purpose-built for this?",
      fr: "A consultant must configure recurring monthly billing for a SaaS subscription. Which Odoo 19 application is purpose-built for this?",
    },
    correct: {
      en: "Subscriptions",
      fr: "Subscriptions",
    },
    distractors: [
      {
        en: "Sales",
        fr: "Sales",
      },
      {
        en: "Invoicing recurring template",
        fr: "Invoicing recurring template",
      },
      {
        en: "Helpdesk",
        fr: "Helpdesk",
      },
    ],
    explanation: {
      en: "The Subscriptions app (Enterprise) manages the full subscription lifecycle: recurring plans, MRR/ARR tracking, churn analysis, prorations, upsells, and automated invoicing/payment retries. A subscription is a sale.order with a plan, and Odoo creates invoices on schedule. Sales orders in the base Sales app do not have recurring logic on their own.\n\nSales handles one-off orders; recurring billing requires Subscriptions. There is no generic 'Invoicing recurring template' — the proper module is Subscriptions. Helpdesk is for support tickets, not billing.",
      fr: "The Subscriptions app (Enterprise) manages the full subscription lifecycle: recurring plans, MRR/ARR tracking, churn analysis, prorations, upsells, and automated invoicing/payment retries. A subscription is a sale.order with a plan, and Odoo creates facture on schedule. Sales orders in the base Sales app do not have recurring logic on their own.\n\nSales handles one-off orders; recurring billing requires Subscriptions. There is no generic 'Invoicing recurring template' — the proper module is Subscriptions. Helpdesk is for support tickets, not billing.",
    },
  }),
  complexQ({
    id: "oep-019",
    module: "crm",
    text: {
      en: "In Odoo 19 CRM, what is the difference between a Lead and an Opportunity?",
      fr: "In Odoo 19 CRM, what is the difference between a piste and an opportunité?",
    },
    correct: {
      en: "A Lead is an unqualified contact request",
      fr: "A piste is an unqualified contact request",
    },
    distractors: [
      {
        en: "A Lead has no monetary value; an Opportunity always has a closed deal",
        fr: "A piste has no monetary value; an opportunité always has a closed deal",
      },
      {
        en: "Leads are stored on res.partner; Opportunities are stored on crm.opportunity",
        fr: "piste are stored on res.partner; opportunité are stored on crm.opportunité",
      },
      {
        en: "Leads are restricted to website forms only",
        fr: "piste are restricted to website forms only",
      },
    ],
    explanation: {
      en: "Both are stored on the same crm.lead model with type='lead' or type='opportunity'. The Lead stage represents an early, unqualified inquiry that may or may not convert. Once qualified (interest confirmed, budget identified), it is converted to an Opportunity that progresses through pipeline stages toward a Won/Lost outcome. The Lead step can be disabled in CRM settings if the team starts directly at Opportunity.\n\nOpportunities are not always closed deals — they can be Won or Lost; both have monetary values. There is no separate crm.opportunity model; both share crm.lead. Leads can come from any source: import, web form, email alias, or manual entry.",
      fr: "Both are stored on the same crm.piste model with type='piste' or type='opportunité'. The piste stage represents an early, unqualified inquiry that may or may not convert. Once qualified (interest confirmed, budget identified), it is converted to an opportunité that progresses through pipeline stages toward a Won/Lost outcome. The piste step can be disabled in CRM settings if the team starts directly at opportunité.\n\nopportunité are not always closed deals — they can be Won or Lost; both have monetary values. There is no separate crm.opportunité model; both share crm.piste. piste can come from any source: import, web form, email alias, or manual entry.",
    },
  }),
  complexQ({
    id: "oep-020",
    module: "crm",
    text: {
      en: "In Odoo 19 Sales, which feature allows different prices to apply automatically based on customer segment, quantity, or date?",
      fr: "In Odoo 19 Sales, which feature allows different prices to apply automatically based on customer segment, quantity, or date?",
    },
    correct: {
      en: "Pricelists",
      fr: "liste de prix",
    },
    distractors: [
      {
        en: "Discount rules on partners",
        fr: "Discount rules on partners",
      },
      {
        en: "Promotions only",
        fr: "Promotions only",
      },
      {
        en: "Tax adjustments",
        fr: "taxe adjustments",
      },
    ],
    explanation: {
      en: "Pricelists are the configurable engine for dynamic pricing. A pricelist contains rules that apply discounts or set fixed prices based on product category, specific products, quantity tiers, validity dates, and chained pricelists. Each customer can have a default pricelist; the order's pricelist drives quotation and SO unit prices.\n\nThere is no 'discount rule' feature on partners separate from pricelists. Promotions (eCommerce coupons) are different from B2B pricing logic and apply at checkout. Tax adjustments do not change prices; they change tax computation.",
      fr: "liste de prix are the configurable engine for dynamic pricing. A liste de prix contains rules that apply discounts or set fixed prices based on product category, specific products, quantity tiers, validity dates, and chained liste de prix. Each customer can have a default liste de prix; the order's liste de prix drives devis and SO unit prices.\n\nThere is no 'discount rule' feature on partners separate from liste de prix. Promotions (eCommerce coupons) are different from B2B pricing logic and apply at checkout. taxe adjustments do not change prices; they change taxe computation.",
    },
  }),
  complexQ({
    id: "oep-021",
    module: "crm",
    text: {
      en: "What happens in Odoo 19 when a salesperson sends a quotation by email to the customer using the 'Send by Email' button?",
      fr: "What happens in Odoo 19 when a salesperson sends a devis by email to the customer using the 'Send by Email' button?",
    },
    correct: {
      en: "Quotation locks permanently and blocks all further line edits",
      fr: "devis locks permanently and blocks all further line edits",
    },
    distractors: [
      {
        en: "Email queued; quote moves to Quotation Sent with portal link included",
        fr: "Email queued; quote moves to devis Sent with portal link included",
      },
      {
        en: "Customer auto-provisioned as internal website user with full ACL rights",
        fr: "Customer auto-provisioned as internal website user with full ACL rights",
      },
      {
        en: "Quotation auto-confirms to sales order without customer interaction",
        fr: "devis auto-confirms to commande client without customer interaction",
      },
    ],
    explanation: {
      en: "Send by Email queues an email containing a portal link where the customer can review the quote, sign it (if e-signature is enabled), pay a deposit (if online payment is configured), and confirm. The quotation state transitions to 'Quotation Sent'. It can still be edited, and the customer's actions update the same record.\n\nQuotations remain editable in Sent state; they only lock on confirmation if 'Lock Confirmed Sales' is enabled. The customer does not auto-become a website user; they receive a token-based portal link. Conversion to a sales order happens only when the customer clicks Sign/Confirm or the salesperson clicks Confirm.",
      fr: "Send by Email queues an email containing a portal link where the customer can review the quote, sign it (if e-signature is enabled), pay a deposit (if online payment is configured), and confirm. The devis state transitions to 'devis Sent'. It can still be edited, and the customer's actions update the same record.\n\nQuotations remain editable in Sent state; they only lock on confirmation if 'Lock Confirmed Sales' is enabled. The customer does not auto-become a website user; they receive a token-based portal link. Conversion to a commande client happens only when the customer clicks Sign/Confirm or the salesperson clicks Confirm.",
    },
  }),
  complexQ({
    id: "oep-022",
    module: "crm",
    text: {
      en: "A salesperson wants the customer to e-sign the quotation online before it is confirmed. What must be enabled in Odoo 19 Sales settings?",
      fr: "A salesperson wants the customer to e-sign the devis online before it is confirmed. What must be enabled in Odoo 19 Sales settings?",
    },
    correct: {
      en: "Online Signature in Sales > Configuration > Settings > Quotations & Orders",
      fr: "Online Signature in Sales > Configuration > Settings > Quotations & Orders",
    },
    distractors: [
      {
        en: "Online Payment only in Odoo 19, but not for this workflow (not applicable here)",
        fr: "Online Payment only in Odoo 19, but not for this workflow (not applicable here)",
      },
      {
        en: "Sign module replacement which confuses a related but distinct setting (not applicable here)",
        fr: "Sign module replacement which confuses a related but distinct setting (not applicable here)",
      },
      {
        en: "Fleet integration and is not the controlling configuration here (not applicable here)",
        fr: "Fleet integration and is not the controlling configuration here (not applicable here)",
      },
    ],
    explanation: {
      en: "In Sales > Configuration > Settings, enabling 'Online Signature' adds a Sign button on the customer portal page for quotations. The customer types or draws their signature and the quote auto-converts to a confirmed sales order with the signature stored for audit. Online Payment is a separate adjacent option for collecting a deposit at signing.\n\nOnline Payment lets them pay; signing is its own toggle. The Sign app is for general document signing flows, not the quotation portal toggle. Fleet is unrelated to quotations.",
      fr: "In Sales > Configuration > Settings, enabling 'Online Signature' adds a Sign button on the customer portal page for quotations. The customer types or draws their signature and the quote auto-converts to a confirmed commande client with the signature stored for audit. Online Payment is a separate adjacent option for collecting a deposit at signing.\n\nOnline Payment lets them pay; signing is its own toggle. The Sign app is for general document signing flows, not the devis portal toggle. Fleet is unrelated to quotations.",
    },
  }),
  complexQ({
    id: "oep-023",
    module: "crm",
    text: {
      en: "How does Odoo 19 model the difference between a product template and a product variant?",
      fr: "How does Odoo 19 model the difference between a product template and a product variant?",
    },
    correct: {
      en: "product.template holds shared attributes",
      fr: "product.template holds shared attributes",
    },
    distractors: [
      {
        en: "Both are the same model; variants are just tags",
        fr: "Both are the same model; variants are just tags",
      },
      {
        en: "Variants are stored as separate templates",
        fr: "Variants are stored as separate templates",
      },
      {
        en: "Variants only exist in eCommerce and is not the controlling configuration here",
        fr: "Variants only exist in eCommerce and is not the controlling configuration here",
      },
    ],
    explanation: {
      en: "product.template is the shared definition (name, category, taxes, type). When attributes such as Color and Size are added to the template with values, Odoo generates one product.product per combination. Internal references, barcodes, prices, and stock levels can differ per variant. This template/variant split is core to all Odoo apps that use products.\n\nTemplates and variants are different models with a clear parent/child relationship. Variants are not separate templates; one template owns its variants. Variants are used everywhere products are: Sales, Purchase, Inventory, MRP, POS, eCommerce.",
      fr: "product.template is the shared definition (name, category, taxes, type). When attributes such as Color and Size are added to the template with values, Odoo generates one product.product per combination. Internal references, barcodes, prices, and stock levels can differ per variant. This template/variant split is core to all Odoo apps that use products.\n\nTemplates and variants are different models with a clear parent/child relationship. Variants are not separate templates; one template owns its variants. Variants are used everywhere products are: Sales, Purchase, Inventory, MRP, POS, eCommerce.",
    },
  }),
  complexQ({
    id: "oep-024",
    module: "crm",
    text: {
      en: "A sales manager wants automatic round-robin assignment of new leads to a team. Where is this configured in Odoo 19?",
      fr: "A sales manager wants automatic round-robin assignment of new piste to a team. Where is this configured in Odoo 19?",
    },
    correct: {
      en: "On the Sales Team (crm.team) with assignment rules and members",
      fr: "On the Sales Team (crm.team) with assignment rules and members",
    },
    distractors: [
      {
        en: "On res.users in Odoo 19, but not for this workflow",
        fr: "On res.users in Odoo 19, but not for this workflow",
      },
      {
        en: "Only via Studio automated actions which confuses a related but distinct setting",
        fr: "Only via Studio action automatisée which confuses a related but distinct setting",
      },
      {
        en: "It must be done in code and is not the controlling configuration here",
        fr: "It must be done in code and is not the controlling configuration here",
      },
    ],
    explanation: {
      en: "Sales Teams (crm.team) define members, assignment rules (domain filter), and assignment frequency. Lead Assignment can be configured as Manual or Automated; with automated rules, leads matching the filter are distributed across team members based on their max-leads capacity. This is a standard CRM Enterprise feature, no code or Studio required.\n\nUser records do not control team assignment rules. Studio automations can assign records but are not the standard or required tool here. No code is needed; Sales Team configuration handles it.",
      fr: "Sales Teams (crm.team) define members, assignment rules (domain filter), and assignment frequency. piste Assignment can be configured as Manual or Automated; with automated rules, piste matching the filter are distributed across team members based on their max-piste capacity. This is a standard CRM Enterprise feature, no code or Studio required.\n\nUser records do not control team assignment rules. Studio automations can assign records but are not the standard or required tool here. No code is needed; Sales Team configuration handles it.",
    },
  }),
  complexQ({
    id: "oep-025",
    module: "crm",
    text: {
      en: "What is an Optional Product on a quotation in Odoo 19?",
      fr: "What is an Optional Product on a devis in Odoo 19?",
    },
    correct: {
      en: "A suggested add-on shown on the customer portal that they can add with one click",
      fr: "A suggested add-on shown on the customer portal that they can add with one click",
    },
    distractors: [
      {
        en: "A product that is automatically added to every quote (not applicable here)",
        fr: "A product that is automatically added to every quote (not applicable here)",
      },
      {
        en: "A free sample required by law which confuses a related but distinct setting (not applicable here)",
        fr: "A free sample required by law which confuses a related but distinct setting (not applicable here)",
      },
      {
        en: "A product that cannot be invoiced and is not the controlling configuration here",
        fr: "A product that cannot be invoiced and is not the controlling configuration here",
      },
    ],
    explanation: {
      en: "Optional Products are upsell suggestions attached to a quotation line. On the customer portal, the customer sees them with an Add button. This is a low-friction upsell tool — a customer reviewing a laptop quote can self-add a warranty or carrying case without contacting sales. The salesperson can also configure default optional products on the product itself.\n\nThey are not auto-added; the customer must opt in. There is no legal-sample concept in Odoo Sales. Optional products, once added, are normal lines that can be invoiced.",
      fr: "Optional Products are upsell suggestions attached to a devis line. On the customer portal, the customer sees them with an Add button. This is a low-friction upsell tool — a customer reviewing a laptop quote can self-add a warranty or carrying case without contacting sales. The salesperson can also configure default optional products on the product itself.\n\nThey are not auto-added; the customer must opt in. There is no legal-sample concept in Odoo Sales. Optional products, once added, are normal lines that can be invoiced.",
    },
  }),
  complexQ({
    id: "oep-026",
    module: "crm",
    text: {
      en: "Odoo 19 introduced enhanced AI-assisted features in CRM. Which AI capability helps salespeople write follow-up emails or summarize opportunities?",
      fr: "Odoo 19 introduced enhanced AI-assisted features in CRM. Which AI capability helps salespeople write follow-up emails or summarize opportunité?",
    },
    correct: {
      en: "AI assistant integration in CRM (notes/email composition)",
      fr: "AI assistant integration in CRM (notes/email composition)",
    },
    distractors: [
      {
        en: "The Knowledge wiki in Odoo 19, but not for this workflow",
        fr: "The Knowledge wiki in Odoo 19, but not for this workflow",
      },
      {
        en: "The Discuss app channel and belongs to a different Odoo application",
        fr: "The Discuss app channel and belongs to a different Odoo application",
      },
      {
        en: "The Sign module and is not the controlling configuration here",
        fr: "The Sign module and is not the controlling configuration here",
      },
    ],
    explanation: {
      en: "Odoo 19 integrates AI-assisted writing in the chatter and email composer in CRM and other apps, helping users draft replies, summarize long opportunity histories, and rewrite messages. This is part of Odoo's expansion of AI-assisted productivity features in the 19 release. Configuration of AI access is done in General Settings.\n\nKnowledge stores wiki articles but is not a writing assistant in CRM. Discuss is a chat tool, not an AI generator (though AI features can be added). Sign handles signatures, not AI text generation.",
      fr: "Odoo 19 integrates AI-assisted writing in the chatter and email composer in CRM and other apps, helping users draft replies, summarize long opportunité histories, and rewrite messages. This is part of Odoo's expansion of AI-assisted productivity features in the 19 release. Configuration of AI access is done in General Settings.\n\nKnowledge stores wiki articles but is not a writing assistant in CRM. Discuss is a chat tool, not an AI generator (though AI features can be added). Sign handles signatures, not AI text generation.",
    },
  }),
  complexQ({
    id: "oep-027",
    module: "crm",
    text: {
      en: "In Odoo 19 Sales, what does it mean when a quotation is set to 'Lock Confirmed Sales' (Lock Sales Orders) in the company settings?",
      fr: "In Odoo 19 Sales, what does it mean when a devis is set to 'Lock Confirmed Sales' (Lock Sales Orders) in the company settings?",
    },
    correct: {
      en: "Confirmed orders can no longer be edited and need a new revision to change",
      fr: "Confirmed orders can no longer be edited and need a new revision to change",
    },
    distractors: [
      {
        en: "Customers cannot view confirmed orders and belongs to a different Odoo application",
        fr: "Customers cannot view confirmed orders and belongs to a different Odoo application",
      },
      {
        en: "Orders cannot be cancelled which confuses a related but distinct setting",
        fr: "Orders cannot be cancelled which confuses a related but distinct setting",
      },
      {
        en: "Orders cannot be invoiced and is not the controlling configuration here",
        fr: "Orders cannot be invoiced and is not the controlling configuration here",
      },
    ],
    explanation: {
      en: "Lock Confirmed Sales prevents accidental edits to confirmed sales orders. To change quantities or pricing, the salesperson must explicitly unlock or create a new sales order. This is a control aimed at preserving the customer-confirmed state of an order, especially important when integrated with manufacturing or shipping.\n\nCustomers can still see their confirmed orders in the portal. Cancellation is a separate workflow not affected by the lock. Locked orders are still invoiceable.",
      fr: "Lock Confirmed Sales prevents accidental edits to confirmed sales orders. To change quantities or pricing, the salesperson must explicitly unlock or create a new commande client. This is a control aimed at preserving the customer-confirmed state of an order, especially important when integrated with manufacturing or shipping.\n\nCustomers can still see their confirmed orders in the portal. Cancellation is a separate workflow not affected by the lock. Locked orders are still invoiceable.",
    },
  }),
  complexQ({
    id: "oep-028",
    module: "crm",
    text: {
      en: "A sales rep notices the same customer keeps creating duplicate leads via the website form. Which Odoo 19 CRM feature handles automatic duplicate detection?",
      fr: "A sales rep notices the same customer keeps creating duplicate piste via the website form. Which Odoo 19 CRM feature handles automatic duplicate detection?",
    },
    correct: {
      en: "Lead duplicate detection (merge suggestions in CRM)",
      fr: "piste duplicate detection (merge suggestions in CRM)",
    },
    distractors: [
      {
        en: "Mass mailing and belongs to a different Odoo application",
        fr: "Mass mailing and belongs to a different Odoo application",
      },
      {
        en: "The Knowledge module which confuses a related but distinct setting",
        fr: "The Knowledge module which confuses a related but distinct setting",
      },
      {
        en: "Sign module and is not the controlling configuration here",
        fr: "Sign module and is not the controlling configuration here",
      },
    ],
    explanation: {
      en: "Odoo CRM detects probable duplicates by matching email or phone and shows a 'Similar Leads' button on the lead form, allowing the salesperson to merge them. The merged lead consolidates messages, activities, and partner links. This is critical because duplicate leads inflate pipeline numbers and confuse outreach.\n\nMass mailing sends emails; it does not detect duplicates. Knowledge stores wiki articles, unrelated to leads. Sign manages e-signatures on documents; it does not detect duplicate CRM leads by email or phone.",
      fr: "Odoo CRM detects probable duplicates by matching email or phone and shows a 'Similar piste' button on the piste form, allowing the salesperson to merge them. The merged piste consolidates messages, activities, and partner links. This is critical because duplicate piste inflate pipeline numbers and confuse outreach.\n\nMass mailing sends emails; it does not detect duplicates. Knowledge stores wiki articles, unrelated to piste. Sign manages e-signatures on documents; it does not detect duplicate CRM piste by email or phone.",
    },
  }),
  complexQ({
    id: "oep-029",
    module: "inventory",
    text: {
      en: "In Odoo 19 Inventory, what is the technical model for a transfer document like a delivery order, receipt, or internal transfer?",
      fr: "In Odoo 19 Inventory, what is the technical model for a transfer document like a bon de livraison, receipt, or internal transfer?",
    },
    correct: {
      en: "stock.picking",
      fr: "stock.picking",
    },
    distractors: [
      {
        en: "stock.transfer",
        fr: "stock.transfer",
      },
      {
        en: "stock.move.delivery",
        fr: "stock.move.delivery",
      },
      {
        en: "stock.warehouse.move",
        fr: "stock.entrepôt.move",
      },
    ],
    explanation: {
      en: "stock.picking is the parent document for any stock transfer. Each picking has a picking_type_id (Receipts, Delivery Orders, Internal, MO transfers, etc.) and lines stored in stock.move and stock.move.line. The state field tracks the picking through Draft → Waiting → Ready → Done.\n\nstock.transfer is not the canonical model name. stock.move.delivery is invented. stock.warehouse.move is not a real Odoo model.",
      fr: "stock.picking is the parent document for any stock transfer. Each picking has a picking_type_id (Receipts, Delivery Orders, Internal, MO transfers, etc.) and lines stored in stock.move and stock.move.line. The state field tracks the picking through Draft → Waiting → Ready → Done.\n\nstock.transfer is not the canonical model name. stock.move.delivery is invented. stock.entrepôt.move is not a real Odoo model.",
    },
  }),
  complexQ({
    id: "oep-030",
    module: "inventory",
    text: {
      en: "A consultant configures inventory valuation in Odoo 19. Which method recalculates unit cost as a weighted average after each incoming shipment?",
      fr: "A consultant configures inventory valuation in Odoo 19. Which method recalculates unit cost as a weighted average after each incoming shipment?",
    },
    correct: {
      en: "AVCO (Average Cost)",
      fr: "AVCO (Average Cost)",
    },
    distractors: [
      {
        en: "Standard Price",
        fr: "Standard Price",
      },
      {
        en: "FIFO (First In, First Out)",
        fr: "FIFO (First In, First Out)",
      },
      {
        en: "LIFO (Last In, First Out)",
        fr: "LIFO (Last In, First Out)",
      },
    ],
    explanation: {
      en: "AVCO (Average Cost) recalculates the average unit cost after each receipt: (current_qty × current_cost + new_qty × new_cost) ÷ (current_qty + new_qty). FIFO consumes oldest cost layers first. Standard Price keeps a manually maintained fixed cost. Odoo does not natively support LIFO because most accounting standards (IFRS) prohibit it.\n\nStandard Price uses a manually defined fixed cost, not a recalculated average. FIFO consumes oldest layers first; the cost reflects whichever layer was purchased first. LIFO is not natively supported in standard Odoo.",
      fr: "AVCO (Average Cost) recalculates the average unit cost after each receipt: (current_qty × current_cost + new_qty × new_cost) ÷ (current_qty + new_qty). FIFO consumes oldest cost layers first. Standard Price keeps a manually maintained fixed cost. Odoo does not natively support LIFO because most accounting standards (IFRS) prohibit it.\n\nStandard Price uses a manually defined fixed cost, not a recalculated average. FIFO consumes oldest layers first; the cost reflects whichever layer was purchased first. LIFO is not natively supported in standard Odoo.",
    },
  }),
  complexQ({
    id: "oep-031",
    module: "inventory",
    text: {
      en: "A warehouse uses lots to track expiration dates on pharmaceutical inventory. Which Inventory setting must be enabled?",
      fr: "A entrepôt uses lots to track expiration dates on pharmaceutical inventory. Which Inventory setting must be enabled?",
    },
    correct: {
      en: "Enable multi-step routes only without any lot or serial traceability",
      fr: "Enable multi-step routes only without any lot or serial traceability",
    },
    distractors: [
      {
        en: "Enable Lots & Serial Numbers, then expiration dates on tracked products",
        fr: "Enable Lots & Serial Numbers, then expiration dates on tracked products",
      },
      {
        en: "Configure putaway rules directing pallets to cold-storage sub-locations",
        fr: "Configure putaway rules directing pallets to cold-storage sub-locations",
      },
      {
        en: "Define storage categories restricting hazardous goods to specific bins",
        fr: "Define storage categories restricting hazardous goods to specific bins",
      },
    ],
    explanation: {
      en: "Enable 'Lots & Serial Numbers' in Inventory > Settings > Traceability. Then on each tracked product, set Tracking to 'By Lots' and enable 'Expiration Date'. Each lot then carries best-before, expiration, removal, and alert dates. Odoo 19 will warn or block movements of expired lots based on settings, and FEFO removal can be configured to consume the closest-to-expire lot first.\n\nMulti-step routes determine flow steps, not lot tracking. Putaway rules direct stock to specific locations on receipt; they do not enable lot tracking. Storage categories restrict what products can go in which sub-locations; not lot tracking.",
      fr: "Enable 'Lots & Serial Numbers' in Inventory > Settings > Traceability. Then on each tracked product, set Tracking to 'By Lots' and enable 'Expiration Date'. Each lot then carries best-before, expiration, removal, and alert dates. Odoo 19 will warn or block movements of expired lots based on settings, and FEFO removal can be configured to consume the closest-to-expire lot first.\n\nMulti-step routes determine flow steps, not lot tracking. Putaway rules direct stock to specific locations on receipt; they do not enable lot tracking. Storage categories restrict what products can go in which sub-locations; not lot tracking.",
    },
  }),
  complexQ({
    id: "oep-032",
    module: "inventory",
    text: {
      en: "What is the difference between Make-to-Stock (MTS) and Make-to-Order (MTO) routes in Odoo 19?",
      fr: "What is the difference between Make-to-Stock (MTS) and Make-to-Order (MTO) routes in Odoo 19?",
    },
    correct: {
      en: "MTS holds stock and reserves from on-hand inventory",
      fr: "MTS holds stock and reserves from on-hand inventory",
    },
    distractors: [
      {
        en: "MTS produces or buys goods on demand for each sale; MTO holds inventory and reserves from stock",
        fr: "MTS produces or buys goods on demand for each sale; MTO holds inventory and reserves from stock",
      },
      {
        en: "They are synonyms which confuses a related but distinct setting",
        fr: "They are synonyms which confuses a related but distinct setting",
      },
      {
        en: "MTO only applies to services and is not the controlling configuration here",
        fr: "MTO only applies to services and is not the controlling configuration here",
      },
    ],
    explanation: {
      en: "MTS (default) reserves goods from existing stock and replenishes via reordering rules. MTO chains a procurement directly to the sales order: for each SO line, Odoo creates an RFQ or MO linked to that line. MTO is suited for high-cost or customizable items where you want zero generic inventory; MTS is for fast-moving goods where availability matters more than per-order linkage.\n\nThe definitions are swapped in this option. They are opposite strategies, not synonyms. Services are not stocked; MTS/MTO apply to stockable products.",
      fr: "MTS (default) reserves goods from existing stock and replenishes via règle de réapprovisionnement. MTO chains a procurement directly to the commande client: for each SO line, Odoo creates an RFQ or MO linked to that line. MTO is suited for high-cost or customizable items where you want zero generic inventory; MTS is for fast-moving goods where availability matters more than per-order linkage.\n\nThe definitions are swapped in this option. They are opposite strategies, not synonyms. Services are not stocked; MTS/MTO apply to stockable products.",
    },
  }),
  complexQ({
    id: "oep-033",
    module: "inventory",
    text: {
      en: "Reordering rules in Odoo 19 trigger procurement when stock falls below a minimum. What are the two key fields on a reordering rule?",
      fr: "règle de réapprovisionnement in Odoo 19 trigger procurement when stock falls below a minimum. What are the two key fields on a règle de réapprovisionnement?",
    },
    correct: {
      en: "Min Quantity and Max Quantity",
      fr: "Min Quantity and Max Quantity",
    },
    distractors: [
      {
        en: "Cost and Price and belongs to a different Odoo application",
        fr: "Cost and Price and belongs to a different Odoo application",
      },
      {
        en: "Lead Time and Customer which confuses a related but distinct setting",
        fr: "piste Time and Customer which confuses a related but distinct setting",
      },
      {
        en: "Lot Size and Tolerance and is not the controlling configuration here",
        fr: "Lot Size and Tolerance and is not the controlling configuration here",
      },
    ],
    explanation: {
      en: "A reordering rule has Min Quantity (the trigger threshold) and Max Quantity (the target stock level). When forecasted stock at the rule's location drops below Min, Odoo creates a procurement to bring stock back to Max. Multiple of (lot multiple) and lead time defaults from the supplier or BoM round up the procurement quantity.\n\nCost and Price live on the product, not the rule. Lead time can be displayed but is not the rule's defining pair; customer is unrelated. Lot Size and Tolerance are not the rule fields.",
      fr: "A règle de réapprovisionnement has Min Quantity (the trigger threshold) and Max Quantity (the target stock level). When forecasted stock at the rule's location drops below Min, Odoo creates a procurement to bring stock back to Max. Multiple of (lot multiple) and piste time defaults from the supplier or NdM round up the procurement quantity.\n\nCost and Price live on the product, not the rule. piste time can be displayed but is not the rule's defining pair; customer is unrelated. Lot Size and Tolerance are not the rule fields.",
    },
  }),
  complexQ({
    id: "oep-034",
    module: "inventory",
    text: {
      en: "An Odoo 19 warehouse is configured with 3-step receipts (Input → Quality → Stock). What is the primary purpose of this configuration?",
      fr: "An Odoo 19 entrepôt is configured with 3-step receipts (Input → Quality → Stock). What is the primary purpose of this configuration?",
    },
    correct: {
      en: "Insert a quality control step between vendor receipt and putaway to stock",
      fr: "Insert a quality control step between vendor receipt and putaway to stock",
    },
    distractors: [
      {
        en: "Faster receipts in Odoo 19, but not for this workflow (not applicable here)",
        fr: "Faster receipts in Odoo 19, but not for this workflow (not applicable here)",
      },
      {
        en: "Multi-currency receipts which confuses a related but distinct setting (not applicable here)",
        fr: "Multi-currency receipts which confuses a related but distinct setting (not applicable here)",
      },
      {
        en: "Consolidate multiple POs and is not the controlling configuration here (not applicable here)",
        fr: "Consolidate multiple POs and is not the controlling configuration here (not applicable here)",
      },
    ],
    explanation: {
      en: "3-step receipts separate physical reception (vendor delivers to Input), quality inspection (move from Input to QC location), and putaway (move from QC to Stock once approved). Each step is a stock.picking with its own quality checks if the Quality module is installed. This pattern is common in regulated industries (pharma, food, electronics).\n\nMulti-step processes are slower per item but more controlled, not faster. Multi-currency is a finance feature, not a warehouse step model. PO consolidation is a procurement choice unrelated to step count.",
      fr: "3-step receipts separate physical reception (vendor delivers to Input), quality inspection (move from Input to QC location), and putaway (move from QC to Stock once approved). Each step is a stock.picking with its own quality checks if the Quality module is installed. This pattern is common in regulated industries (pharma, food, electronics).\n\nMulti-step processes are slower per item but more controlled, not faster. Multi-currency is a finance feature, not a entrepôt step model. PO consolidation is a procurement choice unrelated to step count.",
    },
  }),
  complexQ({
    id: "oep-035",
    module: "inventory",
    text: {
      en: "A consultant needs to handle drop-shipping where the vendor ships directly to the customer. Which Odoo 19 route is used?",
      fr: "A consultant needs to handle drop-shipping where the vendor ships directly to the customer. Which Odoo 19 route is used?",
    },
    correct: {
      en: "Dropship route on the product",
      fr: "Dropship route on the product",
    },
    distractors: [
      {
        en: "Buy + Manufacture in Odoo 19, but not for this workflow",
        fr: "Buy + Manufacture in Odoo 19, but not for this workflow",
      },
      {
        en: "Cross-Dock only which confuses a related but distinct setting",
        fr: "Cross-Dock only which confuses a related but distinct setting",
      },
      {
        en: "Internal Transfers and is not the controlling configuration here",
        fr: "Internal Transfers and is not the controlling configuration here",
      },
    ],
    explanation: {
      en: "Activate Dropshipping in Purchase > Settings, which adds a 'Dropship' route selectable on the product. When an SO line uses a Dropship product, Odoo creates a PO with the customer's shipping address as delivery, bypassing the warehouse entirely. No stock movement is recorded internally beyond the dropship transit.\n\nBuy + Manufacture combines production with purchasing but still involves your warehouse. Cross-Dock receives goods and immediately ships them out from the warehouse — different from direct vendor-to-customer. Internal Transfers move stock between own locations, not vendor-to-customer.",
      fr: "Activate Dropshipping in Purchase > Settings, which adds a 'Dropship' route selectable on the product. When an SO line uses a Dropship product, Odoo creates a PO with the customer's shipping address as delivery, bypassing the entrepôt entirely. No stock movement is recorded internally beyond the dropship transit.\n\nBuy + Manufacture combines production with purchasing but still involves your entrepôt. Cross-Dock receives goods and immediately ships them out from the entrepôt — different from direct vendor-to-customer. Internal Transfers move stock between own locations, not vendor-to-customer.",
    },
  }),
  complexQ({
    id: "oep-036",
    module: "inventory",
    text: {
      en: "What does enabling 'Storage Locations' in Inventory > Settings allow a warehouse to do in Odoo 19?",
      fr: "What does enabling 'Storage Locations' in Inventory > Settings allow a entrepôt to do in Odoo 19?",
    },
    correct: {
      en: "Use sub-locations within a warehouse (aisles, shelves, bins)",
      fr: "Use sub-locations within a entrepôt (aisles, shelves, bins)",
    },
    distractors: [
      {
        en: "Create multiple warehouses and belongs to a different Odoo application",
        fr: "Create multiple warehouses and belongs to a different Odoo application",
      },
      {
        en: "Track lots which confuses a related but distinct setting",
        fr: "Track lots which confuses a related but distinct setting",
      },
      {
        en: "Track ownership of stock and is not the controlling configuration here",
        fr: "Track ownership of stock and is not the controlling configuration here",
      },
    ],
    explanation: {
      en: "Storage Locations enables hierarchical sub-locations like WH/Stock/Aisle-A/Bin-12. Without it, a warehouse has only its top-level Stock location. Combined with putaway rules and storage categories, you can direct different products to different bins, support pick paths, and track stock at granular locations.\n\nMultiple warehouses are always supported; this toggle is for sub-locations within a warehouse. Lot tracking is a separate setting under Traceability. Stock ownership (consignment) is its own setting.",
      fr: "Storage Locations enables hierarchical sub-locations like WH/Stock/Aisle-A/Bin-12. Without it, a entrepôt has only its top-level Stock location. Combined with putaway rules and storage categories, you can direct different products to different bins, support pick paths, and track stock at granular locations.\n\nMultiple warehouses are always supported; this toggle is for sub-locations within a entrepôt. Lot tracking is a separate setting under Traceability. Stock ownership (consignment) is its own setting.",
    },
  }),
  complexQ({
    id: "oep-037",
    module: "inventory",
    text: {
      en: "An Odoo 19 user runs a physical inventory count. Which document records the discovered differences and posts them to inventory adjustments?",
      fr: "An Odoo 19 user runs a physical inventory count. Which document records the discovered differences and posts them to inventory adjustments?",
    },
    correct: {
      en: "Inventory Adjustment (under Operations > Physical Inventory)",
      fr: "Inventory Adjustment (under Operations > Physical Inventory)",
    },
    distractors: [
      {
        en: "Stock Move in Odoo 19, but not for this workflow",
        fr: "Stock Move in Odoo 19, but not for this workflow",
      },
      {
        en: "Vendor Bill which confuses a related but distinct setting",
        fr: "facture fournisseur which confuses a related but distinct setting",
      },
      {
        en: "Manufacturing Order and is not the controlling configuration here",
        fr: "ordre de fabrication and is not the controlling configuration here",
      },
    ],
    explanation: {
      en: "Operations > Physical Inventory lets users enter Counted Quantities by location/product/lot. Validating creates inventory adjustment moves between the location and the Inventory Adjustment virtual location, accounting for shrinkage, miscounts, or breakage. Each adjustment generates standard stock.move records and, with continuous valuation, journal entries.\n\nStock Move is the underlying record; Inventory Adjustment is the user-facing document. Vendor Bills are for AP, not for inventory counts. MOs produce goods from BoMs, unrelated to count corrections.",
      fr: "Operations > Physical Inventory lets users enter Counted Quantities by location/product/lot. Validating creates inventory adjustment moves between the location and the Inventory Adjustment virtual location, accounting for shrinkage, miscounts, or breakage. Each adjustment generates standard stock.move records and, with continuous valuation, écritures comptables.\n\nStock Move is the underlying record; Inventory Adjustment is the user-facing document. facture fournisseur are for AP, not for inventory counts. MOs produce goods from BoMs, unrelated to count corrections.",
    },
  }),
  complexQ({
    id: "oep-038",
    module: "inventory",
    text: {
      en: "A consultant must configure a product so that one unit equals 12 pieces (a dozen) for purchase but is sold and stocked as a single piece. Which Odoo 19 feature handles this?",
      fr: "A consultant must configure a product so that one unit equals 12 pieces (a dozen) for purchase but is sold and stocked as a single piece. Which Odoo 19 feature handles this?",
    },
    correct: {
      en: "Units of Measure (UoM)",
      fr: "Units of Measure (UoM)",
    },
    distractors: [
      {
        en: "Variants in Odoo 19, but not for this workflow",
        fr: "Variants in Odoo 19, but not for this workflow",
      },
      {
        en: "Pricelists with quantity tiers which confuses a related but distinct setting",
        fr: "liste de prix with quantity tiers which confuses a related but distinct setting",
      },
      {
        en: "Putaway rules and is not the controlling configuration here",
        fr: "Putaway rules and is not the controlling configuration here",
      },
    ],
    explanation: {
      en: "Activate Units of Measure in Inventory > Settings. Define the Piece UoM and Dozen UoM in the same UoM category with conversion factor 12. On the product, set Unit of Measure = Piece (base for stock and sales) and Purchase UoM = Dozen. When a PO of 1 Dozen is received, stock is updated by 12 Pieces.\n\nVariants are size/color combinations, not different units of the same product. Pricelists tier prices but do not convert quantities into different units. Putaway rules direct stock to locations; not conversion.",
      fr: "Activate Units of Measure in Inventory > Settings. Define the Piece UoM and Dozen UoM in the same UoM category with conversion factor 12. On the product, set Unit of Measure = Piece (base for stock and sales) and Purchase UoM = Dozen. When a PO of 1 Dozen is received, stock is updated by 12 Pieces.\n\nVariants are size/color combinations, not different units of the same product. liste de prix tier prices but do not convert quantities into different units. Putaway rules direct stock to locations; not conversion.",
    },
  }),
  complexQ({
    id: "oep-039",
    module: "inventory",
    text: {
      en: "What is consignment stock in Odoo 19 Inventory and how is it modeled?",
      fr: "What is consignment stock in Odoo 19 Inventory and how is it modeled?",
    },
    correct: {
      en: "Stock at the company location but owned by a third party (vendor)",
      fr: "Stock at the company location but owned by a third party (vendor)",
    },
    distractors: [
      {
        en: "Stock owned by the company at a customer site, with a special transfer type",
        fr: "Stock owned by the company at a customer site, with a special transfer type",
      },
      {
        en: "Stock that is awaiting destruction which confuses a related but distinct setting",
        fr: "Stock that is awaiting destruction which confuses a related but distinct setting",
      },
      {
        en: "Stock blocked from sale and is not the controlling configuration here",
        fr: "Stock blocked from sale and is not the controlling configuration here",
      },
    ],
    explanation: {
      en: "Consignment lets a vendor own physical stock that resides at your warehouse. Enable Consignment in Inventory > Settings, which exposes an Owner field on stock moves and on-hand records. You only purchase the consigned items when you actually consume or sell them, decoupling physical possession from inventory ownership for accounting.\n\nThat direction is reverse consignment / VMI variants; the standard consignment in Odoo is vendor-owned at your site. Destruction stock uses scrap moves, not consignment. Blocked stock is achieved via location/lot blocking, not consignment.",
      fr: "Consignment lets a vendor own physical stock that resides at your entrepôt. Enable Consignment in Inventory > Settings, which exposes an Owner field on stock moves and on-hand records. You only purchase the consigned items when you actually consume or sell them, decoupling physical possession from inventory ownership for accounting.\n\nThat direction is reverse consignment / VMI variants; the standard consignment in Odoo is vendor-owned at your site. Destruction stock uses scrap moves, not consignment. Blocked stock is achieved via location/lot blocking, not consignment.",
    },
  }),
  complexQ({
    id: "oep-040",
    module: "inventory",
    text: {
      en: "A consultant enables Multi-Step Routes and configures pull rules. Pull rules in Odoo 19 are triggered when:",
      fr: "A consultant enables Multi-Step Routes and configures pull rules. Pull rules in Odoo 19 are triggered when:",
    },
    correct: {
      en: "A demand at the destination location pulls stock from a source location",
      fr: "A demand at the destination location pulls stock from a source location",
    },
    distractors: [
      {
        en: "A purchase is created in Odoo 19, but not for this workflow",
        fr: "A purchase is created in Odoo 19, but not for this workflow",
      },
      {
        en: "Stock is received in a warehouse which confuses a related but distinct setting",
        fr: "Stock is received in a entrepôt which confuses a related but distinct setting",
      },
      {
        en: "An MO is validated and is not the controlling configuration here",
        fr: "An MO is validated and is not the controlling configuration here",
      },
    ],
    explanation: {
      en: "Pull rules (procurement rules) are triggered when there is unmet demand at a destination location. Odoo searches for a rule whose destination matches and creates moves from the configured source. They are how routes such as MTO, multi-step delivery, and dropship are wired. Push rules instead react when stock arrives at a source location and proactively move it forward.\n\nPOs are an effect of pull rules in some routes, not the trigger of the rule itself. Receipt arrival is what triggers push rules, not pull rules. MO validation produces stock; it is not what triggers pull rules.",
      fr: "Pull rules (procurement rules) are triggered when there is unmet demand at a destination location. Odoo searches for a rule whose destination matches and creates moves from the configured source. They are how routes such as MTO, multi-step delivery, and dropship are wired. Push rules instead react when stock arrives at a source location and proactively move it forward.\n\nPOs are an effect of pull rules in some routes, not the trigger of the rule itself. Receipt arrival is what triggers push rules, not pull rules. MO validation produces stock; it is not what triggers pull rules.",
    },
  }),
  complexQ({
    id: "oep-041",
    module: "inventory",
    text: {
      en: "Which Odoo 19 module lets you scan barcodes on receipts, deliveries, and manufacturing operations using a phone or scanner?",
      fr: "Which Odoo 19 module lets you scan barcodes on receipts, deliveries, and manufacturing operations using a phone or scanner?",
    },
    correct: {
      en: "Barcode (stock_barcode)",
      fr: "Barcode (stock_barcode)",
    },
    distractors: [
      {
        en: "Studio in Odoo 19, but not for this workflow",
        fr: "Studio in Odoo 19, but not for this workflow",
      },
      {
        en: "POS which confuses a related but distinct setting",
        fr: "POS which confuses a related but distinct setting",
      },
      {
        en: "Sign and is not the controlling configuration here",
        fr: "Sign and is not the controlling configuration here",
      },
    ],
    explanation: {
      en: "The Barcode app provides a tablet/phone-friendly UI for warehouse operators to scan items, locations, and lots during receipts, deliveries, internal transfers, and manufacturing operations. It supports common 1D and 2D barcodes and uses the device's camera or any USB/Bluetooth scanner.\n\nStudio customizes apps; it is not a barcode UI. POS uses barcodes for sales at retail, not warehouse operations. Sign handles signatures, not barcodes.",
      fr: "The Barcode app provides a tablet/phone-friendly UI for entrepôt operators to scan items, locations, and lots during receipts, deliveries, internal transfers, and manufacturing operations. It supports common 1D and 2D barcodes and uses the device's camera or any USB/Bluetooth scanner.\n\nStudio customizes apps; it is not a barcode UI. POS uses barcodes for sales at retail, not entrepôt operations. Sign handles signatures, not barcodes.",
    },
  }),
  complexQ({
    id: "oep-042",
    module: "purchases",
    text: {
      en: "A consultant wants to receive a shipment that includes products not on the original PO. What is the standard Odoo 19 way to handle this?",
      fr: "A consultant wants to receive a shipment that includes products not on the original PO. What is the standard Odoo 19 way to handle this?",
    },
    correct: {
      en: "Edit the receipt to add the missing line, then validate",
      fr: "Edit the receipt to add the missing line, then validate",
    },
    distractors: [
      {
        en: "Discard the entire receipt and create a new PO",
        fr: "Discard the entire receipt and create a new PO",
      },
      {
        en: "Use a backorder for the missing line which confuses a related but distinct setting",
        fr: "Use a backorder for the missing line which confuses a related but distinct setting",
      },
      {
        en: "It is not possible and is not the controlling configuration here",
        fr: "It is not possible and is not the controlling configuration here",
      },
    ],
    explanation: {
      en: "On a draft receipt, a user with appropriate rights can add a stock.move.line for the unexpected product, validate the receipt, and the corresponding PO can be amended afterward (or a vendor bill match drives the linkage). For governance, many configurations require strict 1:1 PO/receipt; in that case, you would refuse the items or create a new PO. Default behavior allows over-receipt with a confirmation dialog.\n\nDiscarding is wasteful; Odoo supports adjustments on the receipt. Backorders handle missing quantities, not missing line items. It is supported with appropriate rights.",
      fr: "On a draft receipt, a user with appropriate rights can add a stock.move.line for the unexpected product, validate the receipt, and the corresponding PO can be amended afterward (or a facture fournisseur match drives the linkage). For governance, many configurations require strict 1:1 PO/receipt; in that case, you would refuse the items or create a new PO. Default behavior allows over-receipt with a confirmation dialog.\n\nDiscarding is wasteful; Odoo supports adjustments on the receipt. Backorders handle missing quantities, not missing line items. It is supported with appropriate rights.",
    },
  }),
  complexQ({
    id: "oep-043",
    module: "purchases",
    text: {
      en: "A buyer needs to negotiate competitive quotes from three vendors before placing a PO. Which Odoo 19 Purchase feature streamlines this?",
      fr: "A buyer needs to negotiate competitive quotes from three vendors before placing a PO. Which Odoo 19 Purchase feature streamlines this?",
    },
    correct: {
      en: "Purchase Agreements (Calls for Tender)",
      fr: "Purchase Agreements (Calls for Tender)",
    },
    distractors: [
      {
        en: "Vendor Bill Matching and belongs to a different Odoo application",
        fr: "facture fournisseur Matching and belongs to a different Odoo application",
      },
      {
        en: "Subscription Templates which confuses a related but distinct setting",
        fr: "Subscription Templates which confuses a related but distinct setting",
      },
      {
        en: "Reordering Rules and is not the controlling configuration here",
        fr: "règle de réapprovisionnement and is not the controlling configuration here",
      },
    ],
    explanation: {
      en: "Purchase Agreements in Purchase > Orders include 'Call for Tenders' (also called Purchase Tenders or Blanket Order). For tenders, you select multiple vendors, send each an RFQ, compare the responses side-by-side, and confirm one winning RFQ into a PO. Blanket Orders set a recurring purchase contract with one vendor instead.\n\nBill Matching is for accounting reconciliation of vendor invoices. Subscriptions are sales-side recurring sales. Reordering rules trigger replenishment but do not handle competitive bidding.",
      fr: "Purchase Agreements in Purchase > Orders include 'Call for Tenders' (also called Purchase Tenders or Blanket Order). For tenders, you select multiple vendors, send each an RFQ, compare the responses side-by-side, and confirm one winning RFQ into a PO. Blanket Orders set a recurring purchase contract with one vendor instead.\n\nBill Matching is for accounting reconciliation of vendor facture. Subscriptions are sales-side recurring sales. règle de réapprovisionnement trigger replenishment but do not handle competitive bidding.",
    },
  }),
  complexQ({
    id: "oep-044",
    module: "purchases",
    text: {
      en: "What is 3-way matching in Odoo 19 Purchase/Accounting?",
      fr: "What is 3-way matching in Odoo 19 Purchase/Accounting?",
    },
    correct: {
      en: "Match vendor bill to PO and receipt before payment",
      fr: "Match facture fournisseur to PO and receipt before payment",
    },
    distractors: [
      {
        en: "Match three different journals and belongs to a different Odoo application",
        fr: "Match three different journals and belongs to a different Odoo application",
      },
      {
        en: "Match purchase, sale, and inventory which confuses a related but distinct setting",
        fr: "Match purchase, sale, and inventory which confuses a related but distinct setting",
      },
      {
        en: "Match vendor, PO, and customer and is not the controlling configuration here",
        fr: "Match vendor, PO, and customer and is not the controlling configuration here",
      },
    ],
    explanation: {
      en: "3-way matching ensures the vendor bill agrees with the PO (what was ordered) and the receipt (what was actually received) before the bill is paid. Enabled in Accounting > Settings, Odoo flags bills that do not pass the check, preventing payment of items not received or quantities exceeding the PO. This is a core internal control in AP.\n\nIt is not about journals. It is not about cross-app entity matching. Vendors and customers are unrelated entities; the three documents are PO, receipt, and bill.",
      fr: "3-way matching ensures the facture fournisseur agrees with the PO (what was ordered) and the receipt (what was actually received) before the bill is paid. Enabled in Accounting > Settings, Odoo flags bills that do not pass the check, preventing payment of items not received or quantities exceeding the PO. This is a core internal control in AP.\n\nIt is not about journals. It is not about cross-app entity matching. Vendors and customers are unrelated entities; the three documents are PO, receipt, and bill.",
    },
  }),
  complexQ({
    id: "oep-045",
    module: "purchases",
    text: {
      en: "A buyer wants to create a vendor bill from an incoming PDF emailed to bills@company.odoo.com. Which Odoo 19 feature processes this?",
      fr: "A buyer wants to create a facture fournisseur from an incoming PDF emailed to bills@company.odoo.com. Which Odoo 19 feature processes this?",
    },
    correct: {
      en: "Email alias on the Purchase journal",
      fr: "Email alias on the Purchase journal",
    },
    distractors: [
      {
        en: "Studio automated action only and belongs to a different Odoo application",
        fr: "Studio action automatisée only and belongs to a different Odoo application",
      },
      {
        en: "Discuss channel webhook which confuses a related but distinct setting",
        fr: "Discuss channel webhook which confuses a related but distinct setting",
      },
      {
        en: "Manual data entry only and is not the controlling configuration here",
        fr: "Manual data entry only and is not the controlling configuration here",
      },
    ],
    explanation: {
      en: "Each Vendor Bill journal supports an email alias and OCR-based digitization via Odoo IAP credits. Forward or have the vendor send a PDF to the alias; Odoo extracts vendor, total, due date, lines, and creates a draft vendor bill ready for review. Accuracy improves with prior bills from the same vendor.\n\nStudio automations cannot OCR PDFs without the digitization service. Discuss is for chat, not document processing. Manual entry works but is not the streamlined feature being asked about.",
      fr: "Each facture fournisseur journal supports an email alias and OCR-based digitization via Odoo IAP credits. Forward or have the vendor send a PDF to the alias; Odoo extracts vendor, total, due date, lines, and creates a draft facture fournisseur ready for review. Accuracy improves with prior bills from the same vendor.\n\nStudio automations cannot OCR PDFs without the digitization service. Discuss is for chat, not document processing. Manual entry works but is not the streamlined feature being asked about.",
    },
  }),
  complexQ({
    id: "oep-046",
    module: "purchases",
    text: {
      en: "On a purchase.order in Odoo 19, what is the difference between an RFQ and a PO?",
      fr: "On a purchase.order in Odoo 19, what is the difference between an RFQ and a PO?",
    },
    correct: {
      en: "RFQ is a draft state where the document is a Request for Quotation",
      fr: "RFQ is a draft state where the document is a Request for devis",
    },
    distractors: [
      {
        en: "RFQ is for services only and belongs to a different Odoo application",
        fr: "RFQ is for services only and belongs to a different Odoo application",
      },
      {
        en: "PO is for blanket orders only which confuses a related but distinct setting",
        fr: "PO is for blanket orders only which confuses a related but distinct setting",
      },
      {
        en: "There is no difference and is not the controlling configuration here",
        fr: "There is no difference and is not the controlling configuration here",
      },
    ],
    explanation: {
      en: "Both share the purchase.order model. While in 'RFQ' state, the document is a request you send to the vendor for pricing. After confirmation, it becomes a Purchase Order with state='purchase' and Odoo creates the linked receipt(s). The label visible to users (RFQ vs PO) depends on the state, not on a different model.\n\nBoth products and services can be on RFQs and POs. Blanket orders are a separate Purchase Agreement type. There is a clear lifecycle difference between the two states.",
      fr: "Both share the purchase.order model. While in 'RFQ' state, the document is a request you send to the vendor for pricing. After confirmation, it becomes a bon de commande with state='purchase' and Odoo creates the linked receipt(s). The label visible to users (RFQ vs PO) depends on the state, not on a different model.\n\nBoth products and services can be on RFQs and POs. Blanket orders are a separate Purchase Agreement type. There is a clear lifecycle difference between the two states.",
    },
  }),
  complexQ({
    id: "oep-047",
    module: "purchases",
    text: {
      en: "A consultant configures a vendor pricelist (vendor info) on a product. Which fields drive automatic procurement decisions in Odoo 19?",
      fr: "A consultant configures a vendor liste de prix (vendor info) on a product. Which fields drive automatic procurement decisions in Odoo 19?",
    },
    correct: {
      en: "Vendor, Min Qty, Price, Delivery Lead Time, Validity",
      fr: "Vendor, Min Qty, Price, Delivery piste Time, Validity",
    },
    distractors: [
      {
        en: "Only the vendor name and belongs to a different Odoo application",
        fr: "Only the vendor name and belongs to a different Odoo application",
      },
      {
        en: "Only the price which confuses a related but distinct setting",
        fr: "Only the price which confuses a related but distinct setting",
      },
      {
        en: "Only the lead time and is not the controlling configuration here",
        fr: "Only the piste time and is not the controlling configuration here",
      },
    ],
    explanation: {
      en: "The Vendor Pricelist line under product > Purchase tab includes Vendor, Min Quantity (price applies above this qty), Price, Delivery Lead Time (for procurement scheduling), and Validity dates. The first valid line drives RFQs created by reordering rules and MTO. Multiple vendors can be ranked by sequence so Odoo picks the preferred one.\n\nJust the vendor is insufficient; price/lead time are required to drive procurement. Price alone is not enough; lead time and qty matter. Lead time alone does not drive pricing or vendor choice.",
      fr: "The Vendor liste de prix line under product > Purchase tab includes Vendor, Min Quantity (price applies above this qty), Price, Delivery piste Time (for procurement scheduling), and Validity dates. The first valid line drives RFQs created by règle de réapprovisionnement and MTO. Multiple vendors can be ranked by sequence so Odoo picks the preferred one.\n\nJust the vendor is insufficient; price/piste time are required to drive procurement. Price alone is not enough; piste time and qty matter. piste time alone does not drive pricing or vendor choice.",
    },
  }),
  complexQ({
    id: "oep-048",
    module: "purchases",
    text: {
      en: "A buyer wants automated approval thresholds where POs over $10,000 require manager approval. How is this configured in Odoo 19?",
      fr: "A buyer wants automated approval thresholds where POs over $10,000 require manager approval. How is this configured in Odoo 19?",
    },
    correct: {
      en: "Activate Purchase Order Approval in Purchase > Settings, set the threshold",
      fr: "Activate bon de commande Approval in Purchase > Settings, set the threshold",
    },
    distractors: [
      {
        en: "Use a Studio automation only and belongs to a different Odoo application",
        fr: "Use a Studio automation only and belongs to a different Odoo application",
      },
      {
        en: "Modify res.users which confuses a related but distinct setting",
        fr: "Modify res.users which confuses a related but distinct setting",
      },
      {
        en: "Use an analytic distribution rule and is not the controlling configuration here",
        fr: "Use an analytic distribution rule and is not the controlling configuration here",
      },
    ],
    explanation: {
      en: "Purchase > Configuration > Settings has 'Purchase Order Approval' with a Minimum Amount field. POs above this amount require explicit manager approval before they can be confirmed. The required approver is a user with the Purchase Manager role (purchase.group_purchase_manager).\n\nA Studio automation could replicate this, but the standard built-in feature is the toggle in Purchase Settings. User records define identity and access, not threshold rules. Analytic distributions tag costs, not approval thresholds.",
      fr: "Purchase > Configuration > Settings has 'bon de commande Approval' with a Minimum Amount field. POs above this amount require explicit manager approval before they can be confirmed. The required approver is a user with the Purchase Manager role (purchase.group_purchase_manager).\n\nA Studio automation could replicate this, but the standard built-in feature is the toggle in Purchase Settings. User records define identity and access, not threshold rules. Analytic distributions tag costs, not approval thresholds.",
    },
  }),
  complexQ({
    id: "oep-049",
    module: "mrp",
    text: {
      en: "In Odoo 19 Manufacturing, what is the technical model for a Bill of Materials?",
      fr: "In Odoo 19 Manufacturing, what is the technical model for a nomenclature?",
    },
    correct: {
      en: "mrp.bom",
      fr: "mrp.bom",
    },
    distractors: [
      {
        en: "mrp.recipe",
        fr: "mrp.recipe",
      },
      {
        en: "mrp.formula",
        fr: "mrp.formula",
      },
      {
        en: "manufacturing.bom",
        fr: "manufacturing.bom",
      },
    ],
    explanation: {
      en: "The Bill of Materials is the mrp.bom model, with components in mrp.bom.line and operations (if any) in mrp.routing.workcenter. A BoM links a product (or template), an output quantity, and the required components and operations needed to produce it.\n\nmrp.recipe is not the model name. mrp.formula is not the model name. manufacturing.bom is not the namespace; Odoo uses mrp.*.",
      fr: "The nomenclature is the mrp.bom model, with components in mrp.bom.line and operations (if any) in mrp.routing.workcenter. A NdM links a product (or template), an output quantity, and the required components and operations needed to produce it.\n\nmrp.recipe is not the model name. mrp.formula is not the model name. manufacturing.bom is not the namespace; Odoo uses mrp.*.",
    },
  }),
  complexQ({
    id: "oep-050",
    module: "mrp",
    text: {
      en: "What is the difference between a Kit BoM and a Manufacturing BoM in Odoo 19?",
      fr: "What is the difference between a Kit NdM and a Manufacturing NdM in Odoo 19?",
    },
    correct: {
      en: "Kit BoM explodes components on delivery; no stocked finished product",
      fr: "Kit NdM explodes components on delivery; no stocked finished product",
    },
    distractors: [
      {
        en: "Kit and Manufacture BoMs behave identically on every sales workflow",
        fr: "Kit and Manufacture BoMs behave identically on every sales workflow",
      },
      {
        en: "Kit BoM requires a work center and shop-floor work order sequence (not applicable here)",
        fr: "Kit NdM requires a poste de charge and shop-floor ordre de travail sequence (not applicable here)",
      },
      {
        en: "Kit BoM products cannot be sold on quotations or sales orders (not applicable here)",
        fr: "Kit NdM products cannot be sold on quotations or sales orders (not applicable here)",
      },
    ],
    explanation: {
      en: "BoM Type 'Kit' means the parent product itself is not stocked or manufactured; instead, when sold or delivered, Odoo replaces the kit line with its component lines on the picking. BoM Type 'Manufacture this product' creates an MO that consumes components and produces the stocked finished product. Phantom (kit) BoMs are common for bundled SKUs sold as one but shipped as parts.\n\nThey are different BoM types with very different behavior. Kits do not use work centers; manufacturing BoMs may. Kits are sold all the time — that is their main use.",
      fr: "NdM Type 'Kit' means the parent product itself is not stocked or manufactured; instead, when sold or delivered, Odoo replaces the kit line with its component lines on the picking. NdM Type 'Manufacture this product' creates an MO that consumes components and produces the stocked finished product. Phantom (kit) BoMs are common for bundled SKUs sold as one but shipped as parts.\n\nThey are different NdM types with very different behavior. Kits do not use work centers; manufacturing BoMs may. Kits are sold all the time — that is their main use.",
    },
  }),
  complexQ({
    id: "oep-051",
    module: "mrp",
    text: {
      en: "An MO in Odoo 19 has 4 work orders across 3 work centers. What is the effect of confirming the MO?",
      fr: "An MO in Odoo 19 has 4 work orders across 3 work centers. What is the effect of confirming the MO?",
    },
    correct: {
      en: "The work orders are scheduled on the work center calendars based on capacity and lead time",
      fr: "The work orders are scheduled on the poste de charge calendars based on capacity and piste time",
    },
    distractors: [
      {
        en: "All work orders start immediately regardless of capacity (not applicable here)",
        fr: "All work orders start immediately regardless of capacity (not applicable here)",
      },
      {
        en: "Components are shipped to the customer which confuses a related but distinct setting (not applicable here)",
        fr: "Components are shipped to the customer which confuses a related but distinct setting (not applicable here)",
      },
      {
        en: "An invoice is created and is not the controlling configuration here (not applicable here)",
        fr: "An facture is created and is not the controlling configuration here (not applicable here)",
      },
    ],
    explanation: {
      en: "On MO confirmation, Odoo creates the work orders and uses each work center's working hours and capacity to schedule start/finish times. Operators see the queue in the Manufacturing Shop Floor view, and they record start, pause, and finish to update real time and OEE statistics on the work center.\n\nCapacity and dependency constraints respect the schedule; not everything starts at once. Customer shipping is unrelated to MO confirmation. Invoices are created from sales/purchase, not MOs directly.",
      fr: "On MO confirmation, Odoo creates the work orders and uses each poste de charge's working hours and capacity to schedule start/finish times. Operators see the queue in the Manufacturing Shop Floor view, and they record start, pause, and finish to update real time and OEE statistics on the poste de charge.\n\nCapacity and dependency constraints respect the schedule; not everything starts at once. Customer shipping is unrelated to MO confirmation. facture are created from sales/purchase, not MOs directly.",
    },
  }),
  complexQ({
    id: "oep-052",
    module: "mrp",
    text: {
      en: "A consultant wants to outsource an operation (e.g., heat treatment) to a partner. Which Odoo 19 feature handles this?",
      fr: "A consultant wants to outsource an operation (e.g., heat treatment) to a partner. Which Odoo 19 feature handles this?",
    },
    correct: {
      en: "Subcontracting on the BoM with a vendor and components",
      fr: "Subcontracting on the NdM with a vendor and components",
    },
    distractors: [
      {
        en: "Drop-shipping and belongs to a different Odoo application",
        fr: "Drop-shipping and belongs to a different Odoo application",
      },
      {
        en: "Cross-docking which confuses a related but distinct setting",
        fr: "Cross-docking which confuses a related but distinct setting",
      },
      {
        en: "Internal Transfer route and is not the controlling configuration here",
        fr: "Internal Transfer route and is not the controlling configuration here",
      },
    ],
    explanation: {
      en: "Subcontracting in Manufacturing lets you specify on a BoM that the product is produced by a Subcontractor (vendor). Odoo creates a PO for the subcontract product when needed, ships components to the vendor, receives the finished product, and tracks costs. Two flows are supported: Subcontracting and Subcontracting with Resupplied components.\n\nDropshipping ships from vendor to customer without manufacturing. Cross-docking moves received goods straight to outbound, no manufacturing. Internal Transfer is location-to-location, not vendor manufacturing.",
      fr: "Subcontracting in Manufacturing lets you specify on a NdM that the product is produced by a Subcontractor (vendor). Odoo creates a PO for the subcontract product when needed, ships components to the vendor, receives the finished product, and tracks costs. Two flows are supported: Subcontracting and Subcontracting with Resupplied components.\n\nDropshipping ships from vendor to customer without manufacturing. Cross-docking moves received goods straight to outbound, no manufacturing. Internal Transfer is location-to-location, not vendor manufacturing.",
    },
  }),
  complexQ({
    id: "oep-053",
    module: "mrp",
    text: {
      en: "What is the role of the Manufacturing Shop Floor module in Odoo 19?",
      fr: "What is the role of the Manufacturing Shop Floor module in Odoo 19?",
    },
    correct: {
      en: "Tablet UI for operators to start/stop work orders and log quantities",
      fr: "Tablet UI for operators to start/stop work orders and log quantities",
    },
    distractors: [
      {
        en: "Payroll module computing employee wages from attendance clock events",
        fr: "Payroll module computing employé wages from attendance clock events",
      },
      {
        en: "Purchase RFQ comparison grid for competitive vendor quote evaluation",
        fr: "Purchase RFQ comparison grid for competitive vendor quote evaluation",
      },
      {
        en: "Inventory module replacement with no manufacturing shop-floor interface",
        fr: "Inventory module replacement with no manufacturing shop-floor interface",
      },
    ],
    explanation: {
      en: "Shop Floor is a dedicated tablet/touch interface where operators see their queued work orders per work center, log start/pause/finish times, register produced and scrap quantities, and perform inline quality checks. Time logged updates the work center's OEE and the MO's actual cost.\n\nPayroll is the HR Payroll module's job. Purchase handles RFQs and vendor orders; Shop Floor is the manufacturing operator interface. Inventory is a separate app and is not replaced.",
      fr: "Shop Floor is a dedicated tablet/touch interface where operators see their queued work orders per poste de charge, log start/pause/finish times, register produced and scrap quantities, and perform inline quality checks. Time logged updates the poste de charge's OEE and the MO's actual cost.\n\nPayroll is the HR Payroll module's job. Purchase handles RFQs and vendor orders; Shop Floor is the manufacturing operator interface. Inventory is a separate app and is not replaced.",
    },
  }),
  complexQ({
    id: "oep-054",
    module: "mrp",
    text: {
      en: "A consultant configures a quality check that triggers automatically on every receipt of a specific product. Which Odoo 19 module is required?",
      fr: "A consultant configures a quality check that triggers automatically on every receipt of a specific product. Which Odoo 19 module is required?",
    },
    correct: {
      en: "Quality (quality_control)",
      fr: "Quality (quality_control)",
    },
    distractors: [
      {
        en: "Studio only in Odoo 19, but not for this workflow",
        fr: "Studio only in Odoo 19, but not for this workflow",
      },
      {
        en: "Field Service which confuses a related but distinct setting",
        fr: "Field Service which confuses a related but distinct setting",
      },
      {
        en: "Knowledge and is not the controlling configuration here",
        fr: "Knowledge and is not the controlling configuration here",
      },
    ],
    explanation: {
      en: "The Quality module provides Quality Control Points (QCPs) bound to operations (receipts, transfers, MOs, work orders) and products. Each QCP defines test type (Pass/Fail, Measure, Take a Picture, Print Label) and trigger (every transfer, % of transfers, periodic). Failed checks generate Quality Alerts for follow-up.\n\nStudio cannot replicate the QCP and Quality Alert workflow on its own. Field Service is for on-site service tasks, not warehouse QC. Knowledge stores documentation.",
      fr: "The Quality module provides Quality Control Points (QCPs) bound to operations (receipts, transfers, MOs, work orders) and products. Each QCP defines test type (Pass/Fail, Measure, Take a Picture, Print Label) and trigger (every transfer, % of transfers, periodic). Failed checks generate Quality Alerts for follow-up.\n\nStudio cannot replicate the QCP and Quality Alert workflow on its own. Field Service is for on-site service tasks, not entrepôt QC. Knowledge stores documentation.",
    },
  }),
  complexQ({
    id: "oep-055",
    module: "mrp",
    text: {
      en: "In Odoo 19 Manufacturing, what is the purpose of a 'work center' (mrp.workcenter)?",
      fr: "In Odoo 19 Manufacturing, what is the purpose of a 'poste de charge' (mrp.workcenter)?",
    },
    correct: {
      en: "Production resource with calendar",
      fr: "Production resource with calendar",
    },
    distractors: [
      {
        en: "Employee HR profile storing payroll contract and leave allocations",
        fr: "employé HR profile storing payroll contract and leave allocations",
      },
      {
        en: "BoM header storing component lines and manufacturing operations",
        fr: "NdM header storing component lines and manufacturing operations",
      },
      {
        en: "Stock location bin replacing warehouse rack and aisle hierarchy",
        fr: "Stock location bin replacing entrepôt rack and aisle hierarchy",
      },
    ],
    explanation: {
      en: "A work center represents a production resource: a machine, an assembly station, or a manual workstation. It has a working calendar, an hourly cost (used in MO costing), a capacity (parallel productions allowed), efficiency, and OEE statistics. Operations on a BoM are dispatched to work centers, which in turn create work orders.\n\nEmployees are tracked in HR; work centers are resources, though they can have an employee link. BoMs are stored in mrp.bom, not work centers. Stock locations are stock.location, not work centers.",
      fr: "A poste de charge represents a production resource: a machine, an assembly station, or a manual workstation. It has a working calendar, an hourly cost (used in MO costing), a capacity (parallel productions allowed), efficiency, and OEE statistics. Operations on a NdM are dispatched to work centers, which in turn create work orders.\n\nemployé are tracked in HR; work centers are resources, though they can have an employé link. BoMs are stored in mrp.bom, not work centers. Stock locations are stock.location, not work centers.",
    },
  }),
  complexQ({
    id: "oep-056",
    module: "mrp",
    text: {
      en: "In Odoo 19 Manufacturing, the 'Manufacturing Readiness' setting on a BoM controls when an MO is marked Ready. Which two options does it offer?",
      fr: "In Odoo 19 Manufacturing, the 'Manufacturing Readiness' setting on a NdM controls when an MO is marked Ready. Which two options does it offer?",
    },
    correct: {
      en: "'When all components are available' versus 'When components for the 1st operation are available'",
      fr: "'When all components are available' versus 'When components for the 1st operation are available'",
    },
    distractors: [
      {
        en: "'Flexible' versus 'Strict' and belongs to a different Odoo application (not applicable here)",
        fr: "'Flexible' versus 'Strict' and belongs to a different Odoo application (not applicable here)",
      },
      {
        en: "'Make to Stock' versus 'Make to Order' which confuses a related but distinct setting (not applicable here)",
        fr: "'Make to Stock' versus 'Make to Order' which confuses a related but distinct setting (not applicable here)",
      },
      {
        en: "'Push' versus 'Pull' and is not the controlling configuration here (not applicable here)",
        fr: "'Push' versus 'Pull' and is not the controlling configuration here (not applicable here)",
      },
    ],
    explanation: {
      en: "Manufacturing Readiness on the BoM determines when an MO becomes Ready: 'When all components are available' requires every component to be in stock first, while 'When components for the 1st operation are available' lets the MO start as soon as the parts needed for the first operation are on hand. This is distinct from 'Flexible Consumption' (Blocked / Allowed / Allowed with Warning), which governs whether consumed quantities may deviate from the BoM.\n\n'Flexible'/'Strict' is not the Manufacturing Readiness wording in Odoo 19; the related Flexible Consumption setting uses Blocked / Allowed / Allowed with Warning. MTS vs MTO are replenishment routes, not the MO readiness rule. Push vs Pull describes route rule directions, not BoM readiness.",
      fr: "Manufacturing Readiness on the NdM determines when an MO becomes Ready: 'When all components are available' requires every component to be in stock first, while 'When components for the 1st operation are available' lets the MO start as soon as the parts needed for the first operation are on hand. This is distinct from 'Flexible Consumption' (Blocked / Allowed / Allowed with Warning), which governs whether consumed quantities may deviate from the NdM.\n\n'Flexible'/'Strict' is not the Manufacturing Readiness wording in Odoo 19; the related Flexible Consumption setting uses Blocked / Allowed / Allowed with Warning. MTS vs MTO are replenishment routes, not the MO readiness rule. Push vs Pull describes route rule directions, not NdM readiness.",
    },
  }),
  complexQ({
    id: "oep-057",
    module: "mrp",
    text: {
      en: "Odoo 19 introduced enhancements to the MRP scheduler. What is the role of the MRP Scheduler (Run Scheduler)?",
      fr: "Odoo 19 introduced enhancements to the MRP scheduler. What is the role of the MRP Scheduler (Run Scheduler)?",
    },
    correct: {
      en: "Periodically processes reordering rules and MTO procurements to create needed RFQs and MOs",
      fr: "Periodically processes règle de réapprovisionnement and MTO procurements to create needed RFQs and MOs",
    },
    distractors: [
      {
        en: "Sends emails to vendors and belongs to a different Odoo application (not applicable here)",
        fr: "Sends emails to vendors and belongs to a different Odoo application (not applicable here)",
      },
      {
        en: "Posts journal entries which confuses a related but distinct setting (not applicable here)",
        fr: "Posts écritures comptables which confuses a related but distinct setting (not applicable here)",
      },
      {
        en: "Generates customer invoices and is not the controlling configuration here (not applicable here)",
        fr: "Generates customer facture and is not the controlling configuration here (not applicable here)",
      },
    ],
    explanation: {
      en: "The Run Scheduler action (or scheduled cron) walks through reordering rules and unmet procurement demands and creates the corresponding RFQs, MOs, or transfers needed to keep stock at the configured level. It is essential to keep the supply chain in sync without manual intervention. In Odoo 19, scheduling logic continues to be refined for performance with larger catalogs.\n\nEmail is handled by mail/queue, not the MRP scheduler. Accounting entries are posted by accounting flows, not the scheduler. Invoices are generated from sales/manufacturing/inventory linkages, not directly by the scheduler.",
      fr: "The Run Scheduler action (or scheduled cron) walks through règle de réapprovisionnement and unmet procurement demands and creates the corresponding RFQs, MOs, or transfers needed to keep stock at the configured level. It is essential to keep the supply chain in sync without manual intervention. In Odoo 19, scheduling logic continues to be refined for performance with larger catalogs.\n\nEmail is handled by mail/queue, not the MRP scheduler. Accounting entries are posted by accounting flows, not the scheduler. facture are generated from sales/manufacturing/inventory linkages, not directly by the scheduler.",
    },
  }),
  complexQ({
    id: "oep-058",
    module: "mrp",
    text: {
      en: "A consultant configures by-products on a BoM (e.g., scrap metal generated when producing a chair). How does Odoo 19 record by-products?",
      fr: "A consultant configures by-products on a NdM (e.g., scrap metal generated when producing a chair). How does Odoo 19 record by-products?",
    },
    correct: {
      en: "BoM By-products tab posts extra output quantities to stock on MO close",
      fr: "NdM By-products tab posts extra output quantities to stock on MO close",
    },
    distractors: [
      {
        en: "By-products are scrapped automatically and removed from inventory",
        fr: "By-products are scrapped automatically and removed from inventory",
      },
      {
        en: "Odoo cannot record secondary outputs from a manufacturing process",
        fr: "Odoo cannot record secondary outputs from a manufacturing process",
      },
      {
        en: "By-products post only to analytic accounts without stock quant changes",
        fr: "By-products post only to compte analytique without stock quant changes",
      },
    ],
    explanation: {
      en: "BoMs have a By-products tab. When the MO is completed, by-product quantities are received into the stock location, valued at their cost (configurable), and available for sale or further use. This is distinct from scrap, which is a destruction. Common examples: sawdust from cutting, scrap metal, secondary outputs in chemical processes.\n\nScrap is its own concept (consumed and removed); by-products are produced outputs. By-products are fully supported. Analytic accounting is for cost tracking, not for stocking by-products.",
      fr: "BoMs have a By-products tab. When the MO is completed, by-product quantities are received into the stock location, valued at their cost (configurable), and available for sale or further use. This is distinct from scrap, which is a destruction. Common examples: sawdust from cutting, scrap metal, secondary outputs in chemical processes.\n\nScrap is its own concept (consumed and removed); by-products are produced outputs. By-products are fully supported. Analytic accounting is for cost tracking, not for stocking by-products.",
    },
  }),
  complexQ({
    id: "oep-059",
    module: "mrp",
    text: {
      en: "A consultant must track maintenance for shop equipment in Odoo 19. Which module integrates with Manufacturing for preventive and corrective maintenance?",
      fr: "A consultant must track maintenance for shop equipment in Odoo 19. Which module integrates with Manufacturing for preventive and corrective maintenance?",
    },
    correct: {
      en: "Maintenance (maintenance app)",
      fr: "Maintenance (maintenance app)",
    },
    distractors: [
      {
        en: "Helpdesk and belongs to a different Odoo application",
        fr: "Helpdesk and belongs to a different Odoo application",
      },
      {
        en: "Subscriptions which confuses a related but distinct setting",
        fr: "Subscriptions which confuses a related but distinct setting",
      },
      {
        en: "Field Service and is not the controlling configuration here",
        fr: "Field Service and is not the controlling configuration here",
      },
    ],
    explanation: {
      en: "The Maintenance app links to mrp.workcenter via the equipment record. Preventive maintenance is scheduled by frequency or meter reading; corrective maintenance is triggered when equipment breaks down or a quality alert is created. The MTBF/MTTR statistics inform reliability dashboards, and downtime can be reflected in OEE.\n\nHelpdesk is for customer support tickets. Subscriptions handle recurring sales billing. Field Service is for on-site customer service tasks, not internal equipment maintenance.",
      fr: "The Maintenance app links to mrp.workcenter via the equipment record. Preventive maintenance is scheduled by frequency or meter reading; corrective maintenance is triggered when equipment breaks down or a quality alert is created. The MTBF/MTTR statistics inform reliability dashboards, and downtime can be reflected in OEE.\n\nHelpdesk is for customer support tickets. Subscriptions handle recurring sales billing. Field Service is for on-site customer service tasks, not internal equipment maintenance.",
    },
  }),
  complexQ({
    id: "oep-060",
    module: "mrp",
    text: {
      en: "What is the relationship between a Manufacturing Order and the underlying stock movements in Odoo 19?",
      fr: "What is the relationship between a ordre de fabrication and the underlying stock movements in Odoo 19?",
    },
    correct: {
      en: "MO pickings consume components and receive finished goods via stock moves",
      fr: "MO pickings consume components and receive finished goods via stock moves",
    },
    distractors: [
      {
        en: "The MO is accounting-only and never creates inventory transactions (not applicable here)",
        fr: "The MO is accounting-only and never creates inventory transactions (not applicable here)",
      },
      {
        en: "The MO ships finished goods directly to the customer delivery address (not applicable here)",
        fr: "The MO ships finished goods directly to the customer delivery address (not applicable here)",
      },
      {
        en: "The MO reuses the same picking document as the linked sales order (not applicable here)",
        fr: "The MO reuses the same picking document as the linked commande client (not applicable here)",
      },
    ],
    explanation: {
      en: "An MO drives two virtual transfers: one consuming components from a source location to the production location, and one producing the finished product from the production location to a stock location. These are stock.picking records distinguished by picking type. The valuation impact follows the company's costing method.\n\nMOs absolutely move stock — they consume components and produce finished goods. MOs do not ship to customers; that is the delivery order's job. Sales-order pickings are separate from MO pickings.",
      fr: "An MO drives two virtual transfers: one consuming components from a source location to the production location, and one producing the finished product from the production location to a stock location. These are stock.picking records distinguished by picking type. The valuation impact follows the company's costing method.\n\nMOs absolutely move stock — they consume components and produce finished goods. MOs do not ship to customers; that is the bon de livraison's job. Sales-order pickings are separate from MO pickings.",
    },
  }),
  complexQ({
    id: "oep-061",
    module: "hr",
    text: {
      en: "In Odoo 19 HR, what is an Employee Contract used for?",
      fr: "In Odoo 19 HR, what is an employé Contract used for?",
    },
    correct: {
      en: "hr.contract stores wage, schedule, dates, and payroll structure terms",
      fr: "hr.contract stores wage, schedule, dates, and payroll structure terms",
    },
    distractors: [
      {
        en: "Purchase Agreement storing negotiated vendor pricing and lead times",
        fr: "Purchase Agreement storing negotiated vendor pricing and piste times",
      },
      {
        en: "mrp.workcenter defining machine capacity and hourly production cost",
        fr: "mrp.workcenter defining machine capacity and hourly production cost",
      },
      {
        en: "sale.order template with default quotation sections and legal terms",
        fr: "sale.order template with default devis sections and legal terms",
      },
    ],
    explanation: {
      en: "An hr.contract record holds the employment terms: wage, working schedule (resource.calendar), structure (for payroll), start/end dates, trial period, and notes. Multiple contracts can exist over an employee's tenure. Payroll uses the active contract to compute payslips. Alerts notify HR before expiry to renew contracts.\n\nVendor contracts are in Purchase Agreements, not HR. Work centers belong to Manufacturing. Sales orders are in Sales.",
      fr: "An hr.contract record holds the employment terms: wage, working schedule (resource.calendar), structure (for payroll), start/end dates, trial period, and notes. Multiple contracts can exist over an employé's tenure. Payroll uses the active contract to compute payslips. Alerts notify HR before expiry to renew contracts.\n\nVendor contracts are in Purchase Agreements, not HR. Work centers belong to Manufacturing. Sales orders are in Sales.",
    },
  }),
  complexQ({
    id: "oep-062",
    module: "hr",
    text: {
      en: "A consultant configures Time Off in Odoo 19. What is the difference between an Allocation and a Leave (Time Off Request)?",
      fr: "A consultant configures congé in Odoo 19. What is the difference between an Allocation and a Leave (congé Request)?",
    },
    correct: {
      en: "Allocation grants a balance (e.g., 20 vacation days/year)",
      fr: "Allocation grants a balance (e.g., 20 vacation days/year)",
    },
    distractors: [
      {
        en: "They are the same record and belongs to a different Odoo application",
        fr: "They are the same record and belongs to a different Odoo application",
      },
      {
        en: "Allocation is for managers only which confuses a related but distinct setting",
        fr: "Allocation is for managers only which confuses a related but distinct setting",
      },
      {
        en: "Leave requests run payroll automatically",
        fr: "Leave requests run payroll automatically",
      },
    ],
    explanation: {
      en: "Allocations (hr.leave.allocation) grant employees a balance of a specific time-off type (Paid Time Off, Sick Leave, Comp Time). Leaves (hr.leave) are the requests employees submit, which consume from the allocation. Some leave types can be set to auto-allocate (e.g., per pay period accrual) or unlimited (e.g., unpaid leave).\n\nThey are clearly different records with different lifecycles. Both are visible to employees according to access rights. Leave approvals do not directly trigger payroll runs; they affect attendance and worked-day computation.",
      fr: "Allocations (hr.leave.allocation) grant employé a balance of a specific time-off type (Paid congé, Sick Leave, Comp Time). Leaves (hr.leave) are the requests employé submit, which consume from the allocation. Some leave types can be set to auto-allocate (e.g., per pay period accrual) or unlimited (e.g., unpaid leave).\n\nThey are clearly different records with different lifecycles. Both are visible to employé according to droit d'accès. Leave approvals do not directly trigger payroll runs; they affect attendance and worked-day computation.",
    },
  }),
  complexQ({
    id: "oep-063",
    module: "hr",
    text: {
      en: "Where do employees in Odoo 19 submit their expense reports?",
      fr: "Where do employé in Odoo 19 submit their note de frais reports?",
    },
    correct: {
      en: "Expenses module (hr_expense)",
      fr: "note de frais module (hr_expense)",
    },
    distractors: [
      {
        en: "Sales > New Quotation in Odoo 19, but not for this workflow",
        fr: "Sales > New devis in Odoo 19, but not for this workflow",
      },
      {
        en: "Accounting > Bank Statement which confuses a related but distinct setting",
        fr: "Accounting > Bank Statement which confuses a related but distinct setting",
      },
      {
        en: "Inventory > Receipt and is not the controlling configuration here",
        fr: "Inventory > Receipt and is not the controlling configuration here",
      },
    ],
    explanation: {
      en: "The Expenses app lets employees record expenses (with receipt photos), submit a report grouping them, route to manager approval, then to accounting where the report is posted as a vendor bill payable to the employee. Reimbursement is paid out of an Outstanding Payments / payable account. Per-diem and mileage are supported.\n\nSales is for customer quotations. Bank statements record transactions, not employee expense submissions. Inventory receipts are for goods, not expense reports.",
      fr: "The note de frais app lets employé record note de frais (with receipt photos), submit a report grouping them, route to manager approval, then to accounting where the report is posted as a facture fournisseur payable to the employé. Reimbursement is paid out of an Outstanding Payments / payable account. Per-diem and mileage are supported.\n\nSales is for customer quotations. Bank statements record transactions, not employé note de frais submissions. Inventory receipts are for goods, not note de frais reports.",
    },
  }),
  complexQ({
    id: "oep-064",
    module: "hr",
    text: {
      en: "A consultant sets up Recruitment in Odoo 19. What is the purpose of the Kanban stages on the Recruitment pipeline?",
      fr: "A consultant sets up Recruitment in Odoo 19. What is the purpose of the Kanban stages on the Recruitment pipeline?",
    },
    correct: {
      en: "Kanban stages moving applicants from screening through offer and hire",
      fr: "Kanban stages moving applicants from screening through offer and hire",
    },
    distractors: [
      {
        en: "Payroll structure types defining employee salary rules and deductions",
        fr: "Payroll structure types defining employé salary rules and deductions",
      },
      {
        en: "Vendor payment batch processing outgoing AP transfers to suppliers",
        fr: "Vendor payment batch processing outgoing AP transfers to suppliers",
      },
      {
        en: "Time-off allocation granting annual PTO balances to existing staff",
        fr: "Time-off allocation granting annual PTO balances to existing staff",
      },
    ],
    explanation: {
      en: "Recruitment uses a Kanban pipeline per Job Position. Default stages move applicants from Initial Qualification through Interview rounds to Offer and Contract Proposal, ending at Hired. Each stage can require certain actions, send templated emails, and trigger handover to HR onboarding flows.\n\nPayroll is its own module, not recruitment stages. Vendor payment is in Accounting. Time off is in the Time Off module.",
      fr: "Recruitment uses a Kanban pipeline per Job Position. Default stages move applicants from Initial Qualification through Interview rounds to Offer and Contract Proposal, ending at Hired. Each stage can require certain actions, send templated emails, and trigger handover to HR onboarding flows.\n\nPayroll is its own module, not recruitment stages. Vendor payment is in Accounting. congé is in the congé module.",
    },
  }),
  complexQ({
    id: "oep-065",
    module: "hr",
    text: {
      en: "An employee uses the Odoo 19 Attendances app with kiosk mode. How does kiosk mode work?",
      fr: "An employé uses the Odoo 19 Attendances app with kiosk mode. How does kiosk mode work?",
    },
    correct: {
      en: "Shared tablet clock-in via PIN, badge, or RFID without personal login",
      fr: "Shared tablet clock-in via PIN, badge, or RFID without personal login",
    },
    distractors: [
      {
        en: "Locks the tablet for IT administrators during server maintenance windows",
        fr: "Locks the tablet for IT administrators during server maintenance windows",
      },
      {
        en: "Registers visitor badges at the front desk reception module only",
        fr: "Registers visitor badges at the front desk reception module only",
      },
      {
        en: "Records continuous workplace surveillance video on the kiosk device",
        fr: "Records continuous workplace surveillance video on the kiosk device",
      },
    ],
    explanation: {
      en: "Kiosk mode in Attendances is designed for shared devices in factories or offices. The tablet shows a clock-in screen where employees swipe a badge, scan a barcode, type a PIN, or use facial recognition (where configured) to clock in or out. Each scan creates an hr.attendance record without requiring a personal Odoo login.\n\nKiosk mode is an end-user feature, not IT lock. Visitors have their own Frontdesk module. Kiosk mode records check-in/out times, not video.",
      fr: "Kiosk mode in Attendances is designed for shared devices in factories or offices. The tablet shows a clock-in screen where employé swipe a badge, scan a barcode, type a PIN, or use facial recognition (where configured) to clock in or out. Each scan creates an hr.attendance record without requiring a personal Odoo login.\n\nKiosk mode is an end-user feature, not IT lock. Visitors have their own Frontdesk module. Kiosk mode records check-in/out times, not video.",
    },
  }),
  complexQ({
    id: "oep-066",
    module: "hr",
    text: {
      en: "What is the difference between an Employee record (hr.employee) and a User record (res.users) in Odoo 19?",
      fr: "What is the difference between an employé record (hr.employé) and a User record (res.users) in Odoo 19?",
    },
    correct: {
      en: "An Employee is an HR record (can exist without login)",
      fr: "An employé is an HR record (can exist without login)",
    },
    distractors: [
      {
        en: "They are the same and belongs to a different Odoo application",
        fr: "They are the same and belongs to a different Odoo application",
      },
      {
        en: "Only users can submit time off which confuses a related but distinct setting",
        fr: "Only users can submit congé which confuses a related but distinct setting",
      },
      {
        en: "Employees are for vendors only and is not the controlling configuration here",
        fr: "employé are for vendors only and is not the controlling configuration here",
      },
    ],
    explanation: {
      en: "hr.employee is an HR profile and can exist for staff who never log in to Odoo (e.g., shop floor workers using only Attendances kiosk). res.users is a login account, typically linked one-to-one with an Employee for self-service (timesheets, expenses, time off). User access defines what data they can see and edit.\n\nThey are clearly different concepts. Time off can be submitted on behalf of any employee by a manager; the employee themselves needs a user only for self-service. Employees are HR concepts, not vendor records.",
      fr: "hr.employé is an HR profile and can exist for staff who never log in to Odoo (e.g., shop floor workers using only Attendances kiosk). res.users is a login account, typically linked one-to-one with an employé for self-service (feuille de temps, note de frais, congé). User access defines what data they can see and edit.\n\nThey are clearly different concepts. congé can be submitted on behalf of any employé by a manager; the employé themselves needs a user only for self-service. employé are HR concepts, not vendor records.",
    },
  }),
  complexQ({
    id: "oep-067",
    module: "project",
    text: {
      en: "In Odoo 19 Project, what is the difference between a Task and a Milestone?",
      fr: "In Odoo 19 Project, what is the difference between a Task and a Milestone?",
    },
    correct: {
      en: "Tasks are individual work items with assignees and deadlines",
      fr: "Tasks are individual work items with assignees and deadlines",
    },
    distractors: [
      {
        en: "They are the same and belongs to a different Odoo application",
        fr: "They are the same and belongs to a different Odoo application",
      },
      {
        en: "Milestones cannot have a date which confuses a related but distinct setting",
        fr: "Milestones cannot have a date which confuses a related but distinct setting",
      },
      {
        en: "Tasks cannot be billed and is not the controlling configuration here",
        fr: "Tasks cannot be billed and is not the controlling configuration here",
      },
    ],
    explanation: {
      en: "Tasks (project.task) are the executable work items with stages, assignees, and timesheets. Milestones (project.milestone) are project-level checkpoints (e.g., 'Design Approved', 'UAT Complete') that can be linked to multiple tasks. Milestones can be billed separately if the project's billing type is Milestone-based.\n\nThey are different objects with different roles. Milestones can have target and actual dates. Tasks can be billed (via timesheets or task-based billing) when the project is configured for it.",
      fr: "Tasks (project.task) are the executable work items with stages, assignees, and feuille de temps. Milestones (project.milestone) are project-level checkpoints (e.g., 'Design Approved', 'UAT Complete') that can be linked to multiple tasks. Milestones can be billed separately if the project's billing type is Milestone-based.\n\nThey are different objects with different roles. Milestones can have target and actual dates. Tasks can be billed (via feuille de temps or task-based billing) when the project is configured for it.",
    },
  }),
  complexQ({
    id: "oep-068",
    module: "project",
    text: {
      en: "A consultant configures a project with billing type 'Based on Timesheets'. What does this mean in Odoo 19?",
      fr: "A consultant configures a project with billing type 'Based on feuille de temps'. What does this mean in Odoo 19?",
    },
    correct: {
      en: "Timesheet hours on project tasks become billable SO lines at the set rate",
      fr: "feuille de temps hours on project tasks become billable SO lines at the set rate",
    },
    distractors: [
      {
        en: "The project is non-billable and excludes all timesheet-based invoicing (not applicable here)",
        fr: "The project is non-billable and excludes all feuille de temps-based invoicing (not applicable here)",
      },
      {
        en: "Only fixed-price contracts apply; timesheets are hidden from billing (not applicable here)",
        fr: "Only fixed-price contracts apply; feuille de temps are hidden from billing (not applicable here)",
      },
      {
        en: "Timesheets are disabled entirely for service projects in Enterprise (not applicable here)",
        fr: "feuille de temps are disabled entirely for service projects in Enterprise (not applicable here)",
      },
    ],
    explanation: {
      en: "With Timesheets billing, the linked sales order's product is service with 'invoice based on timesheets'. Hours logged on tasks of that project flow to the SO as deliverable quantities. When invoiced, those hours become invoice lines at the SO's unit price. Billable vs non-billable timesheet entries can be filtered to control what is invoiced.\n\nIt is billable — that is the definition. Fixed price is a different billing type (Fixed Price / Milestones). Timesheets are visible and central to this model.",
      fr: "With feuille de temps billing, the linked commande client's product is service with 'facture based on feuille de temps'. Hours logged on tasks of that project flow to the SO as deliverable quantities. When invoiced, those hours become facture lines at the SO's unit price. Billable vs non-billable feuille de temps entries can be filtered to control what is invoiced.\n\nIt is billable — that is the definition. Fixed price is a different billing type (Fixed Price / Milestones). feuille de temps are visible and central to this model.",
    },
  }),
  complexQ({
    id: "oep-069",
    module: "project",
    text: {
      en: "How does Odoo 19 measure project profitability?",
      fr: "How does Odoo 19 measure project profitability?",
    },
    correct: {
      en: "Analytic revenue minus timesheet cost, expenses, and consumed materials",
      fr: "Analytic revenue minus feuille de temps cost, note de frais, and consumed materials",
    },
    distractors: [
      {
        en: "Only the static budget field on the project form with no actual postings",
        fr: "Only the static budget field on the project form with no actual postings",
      },
      {
        en: "Only external SQL reports; Odoo has no built-in profitability analysis",
        fr: "Only external SQL reports; Odoo has no built-in profitability analysis",
      },
      {
        en: "Profitability is not measured; projects track tasks without financial KPIs",
        fr: "Profitability is not measured; projects track tasks without financial KPIs",
      },
    ],
    explanation: {
      en: "Each project gets an analytic account. Revenue lines (invoices, planned SO amounts) and cost lines (timesheets at employee hourly cost, employee expenses, vendor bills, sold/consumed materials) post analytic items to that account. The Project Profitability report aggregates them into Margin = Revenue - Cost. This is standard in Odoo Enterprise.\n\nProfitability vs budget is a different metric. Standard reports cover this; custom reports are not required. It is a core feature of Project.",
      fr: "Each project gets an compte analytique. Revenue lines (facture, planned SO amounts) and cost lines (feuille de temps at employé hourly cost, employé note de frais, facture fournisseur, sold/consumed materials) post analytic items to that account. The Project Profitability report aggregates them into Margin = Revenue - Cost. This is standard in Odoo Enterprise.\n\nProfitability vs budget is a different metric. Standard reports cover this; custom reports are not required. It is a core feature of Project.",
    },
  }),
  complexQ({
    id: "oep-070",
    module: "project",
    text: {
      en: "An Odoo 19 consultant sets up Sub-tasks under a parent task. What is the main benefit of using sub-tasks?",
      fr: "An Odoo 19 consultant sets up Sub-tasks under a parent task. What is the main benefit of using sub-tasks?",
    },
    correct: {
      en: "Decompose work under a parent while preserving grouped reporting",
      fr: "Decompose work under a parent while preserving grouped reporting",
    },
    distractors: [
      {
        en: "Sub-tasks always bill at half the parent task hourly rate automatically",
        fr: "Sub-tasks always bill at half the parent task hourly rate automatically",
      },
      {
        en: "Sub-tasks ignore deadlines and never appear on Gantt or Kanban views",
        fr: "Sub-tasks ignore deadlines and never appear on Gantt or Kanban views",
      },
      {
        en: "Every project must define at least one sub-task before going live",
        fr: "Every project must define at least one sub-task before going live",
      },
    ],
    explanation: {
      en: "Sub-tasks let you decompose work without losing the relationship to the parent. They appear under the parent task, contribute to its overall hour roll-up, and can be assigned to different team members. This pattern fits Agile-style story-to-subtask breakdowns or large deliverables divided into checkpoints.\n\nRates depend on the SO/employee, not parent/sub-task hierarchy. Sub-tasks have their own deadlines, just like tasks. Sub-tasks are optional; the benefit is structured decomposition under a parent task for reporting.",
      fr: "Sub-tasks let you decompose work without losing the relationship to the parent. They appear under the parent task, contribute to its overall hour roll-up, and can be assigned to different team members. This pattern fits Agile-style story-to-subtask breakdowns or large deliverables divided into checkpoints.\n\nRates depend on the SO/employé, not parent/sub-task hierarchy. Sub-tasks have their own deadlines, just like tasks. Sub-tasks are optional; the benefit is structured decomposition under a parent task for reporting.",
    },
  }),
  complexQ({
    id: "oep-071",
    module: "project",
    text: {
      en: "What is the purpose of the Planning module in Odoo 19, and how does it relate to Project?",
      fr: "What is the purpose of the Planning module in Odoo 19, and how does it relate to Project?",
    },
    correct: {
      en: "Planning lets managers schedule resources (employees",
      fr: "Planning lets managers schedule resources (employé",
    },
    distractors: [
      {
        en: "Planning replaces the Calendar app and belongs to a different Odoo application",
        fr: "Planning replaces the Calendar app and belongs to a different Odoo application",
      },
      {
        en: "Planning is for HR payroll only which confuses a related but distinct setting",
        fr: "Planning is for HR payroll only which confuses a related but distinct setting",
      },
      {
        en: "Planning is identical to Project and is not the controlling configuration here",
        fr: "Planning is identical to Project and is not the controlling configuration here",
      },
    ],
    explanation: {
      en: "Planning manages shift-based resource scheduling (who works when, on what role/role template). Shifts can be linked to projects/tasks to show planned hours alongside availability. Conflicts (overlaps with time off, double-booking) are flagged. Used heavily in agencies and services to plan billable utilization in advance.\n\nCalendar is a personal calendar; Planning is resource scheduling. Planning schedules shifts and roles; payroll computation belongs to the Payroll application. It complements Project; it does not replace it.",
      fr: "Planning manages shift-based resource scheduling (who works when, on what role/role template). Shifts can be linked to projects/tasks to show planned hours alongside availability. Conflicts (overlaps with congé, double-booking) are flagged. Used heavily in agencies and services to plan billable utilization in advance.\n\nCalendar is a personal calendar; Planning is resource scheduling. Planning schedules shifts and roles; payroll computation belongs to the Payroll application. It complements Project; it does not replace it.",
    },
  }),
  complexQ({
    id: "oep-072",
    module: "website",
    text: {
      en: "A consultant publishes a website built with Odoo 19. Which technology powers the page builder?",
      fr: "A consultant publishes a website built with Odoo 19. Which technology powers the page builder?",
    },
    correct: {
      en: "A drag-and-drop block editor with snippets stored in QWeb templates",
      fr: "A drag-and-drop block editor with snippets stored in QWeb templates",
    },
    distractors: [
      {
        en: "Pure plain HTML edited in code and belongs to a different Odoo application",
        fr: "Pure plain HTML edited in code and belongs to a different Odoo application",
      },
      {
        en: "WordPress under the hood which confuses a related but distinct setting",
        fr: "WordPress under the hood which confuses a related but distinct setting",
      },
      {
        en: "Static site generator only and is not the controlling configuration here",
        fr: "Static site generator only and is not the controlling configuration here",
      },
    ],
    explanation: {
      en: "Odoo Website uses QWeb templates and a Snippet-based block editor. Editors drag/drop snippets (hero, features, gallery, testimonials), customize text, images, animations, and visibility per device. Templates are versioned and can be reverted. The same QWeb engine serves products, blog posts, and custom pages.\n\nPlain HTML editing is possible but is not how the standard page builder works. Odoo's Website is its own framework, not WordPress. Pages are dynamic, not statically generated.",
      fr: "Odoo Website uses QWeb templates and a Snippet-based block editor. Editors drag/drop snippets (hero, features, gallery, testimonials), customize text, images, animations, and visibility per device. Templates are versioned and can be reverted. The same QWeb engine serves products, blog posts, and custom pages.\n\nPlain HTML editing is possible but is not how the standard page builder works. Odoo's Website is its own framework, not WordPress. Pages are dynamic, not statically generated.",
    },
  }),
  complexQ({
    id: "oep-073",
    module: "website",
    text: {
      en: "What is the difference between a Product (in Sales) and an eCommerce Product in Odoo 19?",
      fr: "What is the difference between a Product (in Sales) and an eCommerce Product in Odoo 19?",
    },
    correct: {
      en: "Same product.template published to eCommerce with website fields and SEO",
      fr: "Same product.template published to eCommerce with website fields and SEO",
    },
    distractors: [
      {
        en: "Separate website.product model unrelated to Sales catalog records (not applicable here)",
        fr: "Separate website.product model unrelated to Sales catalog records (not applicable here)",
      },
      {
        en: "Sales catalog products cannot appear on the public website storefront (not applicable here)",
        fr: "Sales catalog products cannot appear on the public website storefront (not applicable here)",
      },
      {
        en: "eCommerce supports downloadable services only, not physical goods (not applicable here)",
        fr: "eCommerce supports downloadable services only, not physical goods (not applicable here)",
      },
    ],
    explanation: {
      en: "Odoo uses one product.template across Sales, Purchase, Inventory, and Website. Toggling 'Is Published' / 'Available on eCommerce' on a product exposes it to the website with its eCommerce-specific fields (description for the page, image, SEO meta, ribbon, alternative products). One source of truth avoids data duplication.\n\nThere is no website.product model. Sales products absolutely can be sold online. eCommerce supports goods and services.",
      fr: "Odoo uses one product.template across Sales, Purchase, Inventory, and Website. Toggling 'Is Published' / 'Available on eCommerce' on a product exposes it to the website with its eCommerce-specific fields (description for the page, image, SEO meta, ribbon, alternative products). One source of truth avoids data duplication.\n\nThere is no website.product model. Sales products absolutely can be sold online. eCommerce supports goods and services.",
    },
  }),
  complexQ({
    id: "oep-074",
    module: "website",
    text: {
      en: "A consultant configures Stripe as a payment provider in Odoo 19 eCommerce. Where is this set up?",
      fr: "A consultant configures Stripe as a payment provider in Odoo 19 eCommerce. Where is this set up?",
    },
    correct: {
      en: "Accounting or Website > Payment Providers",
      fr: "Accounting or Website > Payment Providers",
    },
    distractors: [
      {
        en: "Inventory settings for stock accounts without any payment gateway setup",
        fr: "Inventory settings for stock accounts without any payment gateway setup",
      },
      {
        en: "HR payroll configuration for employee reimbursement workflows",
        fr: "HR payroll configuration for employé reimbursement workflows",
      },
      {
        en: "Studio custom fields only, with no payment.provider records",
        fr: "Studio champ personnalisé only, with no payment.provider records",
      },
    ],
    explanation: {
      en: "Payment Providers (payment.provider) include Stripe, PayPal, Adyen, Authorize.Net, Mercado Pago, Razorpay, and many more. You enter API keys, choose Test or Production mode, configure the linked journal where successful payments post, and select which payment methods (cards, wallets) to enable. Once set to Enabled, the provider appears on website checkout.\n\nInventory does not handle payment providers. HR does not handle payment providers. Studio cannot configure provider credentials by itself.",
      fr: "Payment Providers (payment.provider) include Stripe, PayPal, Adyen, Authorize.Net, Mercado Pago, Razorpay, and many more. You enter API keys, choose Test or Production mode, configure the linked journal where successful payments post, and select which payment methods (cards, wallets) to enable. Once set to Enabled, the provider appears on website checkout.\n\nInventory does not handle payment providers. HR does not handle payment providers. Studio cannot configure provider credentials by itself.",
    },
  }),
  complexQ({
    id: "oep-075",
    module: "website",
    text: {
      en: "A consultant must enable B2B mode on the Odoo 19 website so prices display tax-excluded and login is required to see prices. Which combination of settings achieves this?",
      fr: "A consultant must enable B2B mode on the Odoo 19 website so prices display taxe-excluded and login is required to see prices. Which combination of settings achieves this?",
    },
    correct: {
      en: "Tax-excluded pricelists, mandatory login, and B2B customer account rules",
      fr: "taxe-excluded liste de prix, mandatory login, and B2B customer account rules",
    },
    distractors: [
      {
        en: "Disable Sales entirely and record revenue only via manual journal entries",
        fr: "Disable Sales entirely and record revenue only via manual écritures comptables",
      },
      {
        en: "Configure POS exclusively with no website or eCommerce storefront",
        fr: "Configure POS exclusively with no website or eCommerce storefront",
      },
      {
        en: "Enable multi-currency without changing tax display or login requirements",
        fr: "Enable multi-currency without changing taxe display or login requirements",
      },
    ],
    explanation: {
      en: "B2B mode is a combination of: pricelists with 'Tax Excluded' display, customer account settings requiring login before checkout (or before pricing), private categories or login-protected products, and possibly assigning a default pricelist by partner. Each customer can have a specific pricelist negotiated by sales. This is configurable via Website Settings without code.\n\nSales is required, not disabled. POS is unrelated to website B2B configuration. Multi-currency does not control tax display or login gating.",
      fr: "B2B mode is a combination of: liste de prix with 'taxe Excluded' display, customer account settings requiring login before checkout (or before pricing), private categories or login-protected products, and possibly assigning a default liste de prix by partner. Each customer can have a specific liste de prix negotiated by sales. This is configurable via Website Settings without code.\n\nSales is required, not disabled. POS is unrelated to website B2B configuration. Multi-currency does not control taxe display or login gating.",
    },
  }),
  complexQ({
    id: "oep-076",
    module: "website",
    text: {
      en: "How are shipping methods integrated with carriers in Odoo 19?",
      fr: "How are shipping methods integrated with carriers in Odoo 19?",
    },
    correct: {
      en: "Delivery > Shipping Methods with carrier API",
      fr: "Delivery > Shipping Methods with carrier API",
    },
    distractors: [
      {
        en: "Hardcoded shipping rates embedded only in custom Python modules",
        fr: "Hardcoded shipping rates embedded only in custom Python modules",
      },
      {
        en: "Studio form designer without any delivery.carrier integration",
        fr: "Studio form designer without any delivery.carrier integration",
      },
      {
        en: "Inventory module alone with no shipping method configuration menu",
        fr: "Inventory module alone with no shipping method configuration menu",
      },
    ],
    explanation: {
      en: "Shipping methods (delivery.carrier) wrap a provider integration. Manual provider lets you set fixed or rule-based rates. Real-time carrier integrations (FedEx, UPS, DHL, USPS, EasyPost, Sendcloud, Bpost) call the carrier's API at quotation/delivery time to fetch rates and generate shipping labels. Packaging dimensions and weight on products feed the rate calculation.\n\nCarrier integrations are configurable, not hardcoded. Studio cannot configure carrier credentials by itself. Inventory hosts the picking; carrier setup is in Inventory > Configuration > Shipping Methods or directly under Delivery.",
      fr: "Shipping methods (delivery.carrier) wrap a provider integration. Manual provider lets you set fixed or rule-based rates. Real-time carrier integrations (FedEx, UPS, DHL, USPS, EasyPost, Sendcloud, Bpost) call the carrier's API at devis/delivery time to fetch rates and generate shipping labels. Packaging dimensions and weight on products feed the rate calculation.\n\nCarrier integrations are configurable, not hardcoded. Studio cannot configure carrier credentials by itself. Inventory hosts the picking; carrier setup is in Inventory > Configuration > Shipping Methods or directly under Delivery.",
    },
  }),
  complexQ({
    id: "oep-077",
    module: "website",
    text: {
      en: "A customer abandons their cart on the Odoo 19 eCommerce site. What feature can automatically follow up?",
      fr: "A customer abandons their cart on the Odoo 19 eCommerce site. What feature can automatically follow up?",
    },
    correct: {
      en: "Automated abandoned-cart email after delay with cart recovery deep link",
      fr: "Automated abandoned-cart email after delay with cart recovery deep link",
    },
    distractors: [
      {
        en: "Manual phone follow-up only; Odoo provides no cart recovery tooling",
        fr: "Manual phone follow-up only; Odoo provides no cart recovery tooling",
      },
      {
        en: "Abandoned carts deleted nightly with no retention or email option",
        fr: "Abandoned carts deleted nightly with no retention or email option",
      },
      {
        en: "Requires Marketing Automation exclusively; eCommerce has no built-in mail",
        fr: "Requires Marketing Automation exclusively; eCommerce has no built-in mail",
      },
    ],
    explanation: {
      en: "eCommerce settings include automated emails for abandoned carts: after X hours of inactivity, the customer receives a templated email with a deep link back to their cart. Combined with discounts or coupons, this is a high-leverage recovery channel. Marketing Automation can extend the sequence with multi-touch campaigns.\n\nA manual call is one option but not the standard automation answer. Carts are not deleted automatically; they persist for the configured time. Marketing Automation can extend it but the basic email is built into eCommerce.",
      fr: "eCommerce settings include automated emails for abandoned carts: after X hours of inactivity, the customer receives a templated email with a deep link back to their cart. Combined with discounts or coupons, this is a high-leverage recovery channel. Marketing Automation can extend the sequence with multi-touch campaigns.\n\nA manual call is one option but not the standard automation answer. Carts are not deleted automatically; they persist for the configured time. Marketing Automation can extend it but the basic email is built into eCommerce.",
    },
  }),
  complexQ({
    id: "oep-078",
    module: "website",
    text: {
      en: "A consultant configures eCommerce Tax Display in Odoo 19. Which company-level setting controls whether prices on the website show tax-included or tax-excluded?",
      fr: "A consultant configures eCommerce taxe Display in Odoo 19. Which company-level setting controls whether prices on the website show taxe-included or taxe-excluded?",
    },
    correct: {
      en: "The pricelist's 'Display Type' field combined",
      fr: "The liste de prix's 'Display Type' field combined",
    },
    distractors: [
      {
        en: "The journal default and belongs to a different Odoo application",
        fr: "The journal default and belongs to a different Odoo application",
      },
      {
        en: "The currency which confuses a related but distinct setting",
        fr: "The currency which confuses a related but distinct setting",
      },
      {
        en: "The fiscal position alone and is not the controlling configuration here",
        fr: "The position fiscale alone and is not the controlling configuration here",
      },
    ],
    explanation: {
      en: "Tax display is determined by the Pricelist's display type (tax-included vs tax-excluded) and the website's default pricelist. Often B2C sites show tax-included prices and B2B sites show tax-excluded with VAT applied at checkout based on the customer's fiscal position. Country localizations may set different defaults.\n\nJournals control accounting, not display. Currency controls money formatting, not tax display. Fiscal positions remap taxes/accounts but do not control include/exclude display directly.",
      fr: "taxe display is determined by the liste de prix's display type (taxe-included vs taxe-excluded) and the website's default liste de prix. Often B2C sites show taxe-included prices and B2B sites show taxe-excluded with VAT applied at checkout based on the customer's position fiscale. Country localizations may set different defaults.\n\nJournals control accounting, not display. Currency controls money formatting, not taxe display. position fiscale remap taxes/accounts but do not control include/exclude display directly.",
    },
  }),
  complexQ({
    id: "oep-079",
    module: "website",
    text: {
      en: "What is the role of Odoo Forum/Live Chat/Knowledge in supporting an eCommerce site?",
      fr: "What is the role of Odoo Forum/Live Chat/Knowledge in supporting an eCommerce site?",
    },
    correct: {
      en: "Forum Q&A, Live Chat widgets, and Knowledge self-service articles",
      fr: "Forum Q&A, Live Chat widgets, and Knowledge self-service articles",
    },
    distractors: [
      {
        en: "They replace the Website Builder and remove all product catalog pages",
        fr: "They replace the Website Builder and remove all product catalog pages",
      },
      {
        en: "They operate only on POS terminals during active cashier sessions",
        fr: "They operate only on POS terminals during active cashier sessions",
      },
      {
        en: "They are HR modules for payroll, contracts, and employee onboarding",
        fr: "They are HR modules for payroll, contracts, and employé onboarding",
      },
    ],
    explanation: {
      en: "Live Chat (im_livechat) enables real-time support widgets on the website with channels and operator routing. Forum lets a community discuss topics with reputation/karma. Knowledge (Enterprise) is a wiki for internal docs and customer-facing articles. Together they support pre-sale and post-sale interactions on the eCommerce site.\n\nThey complement, not replace, the website. They are website/CRM/Helpdesk-related, not POS. Forum, Live Chat, and Knowledge support website engagement, not HR employee records.",
      fr: "Live Chat (im_livechat) enables real-time support widgets on the website with channels and operator routing. Forum lets a community discuss topics with reputation/karma. Knowledge (Enterprise) is a wiki for internal docs and customer-facing articles. Together they support pre-sale and post-sale interactions on the eCommerce site.\n\nThey complement, not replace, the website. They are website/CRM/Helpdesk-related, not POS. Forum, Live Chat, and Knowledge support website engagement, not HR employé records.",
    },
  }),
  complexQ({
    id: "oep-080",
    module: "pos",
    text: {
      en: "A consultant configures Odoo 19 POS for a retail store. Which configuration object groups payment methods, the linked journal, and an outstanding account?",
      fr: "A consultant configures Odoo 19 POS for a retail store. Which configuration object groups payment methods, the linked journal, and an outstanding account?",
    },
    correct: {
      en: "pos.payment.method",
      fr: "pos.payment.method",
    },
    distractors: [
      {
        en: "pos.config (not applicable here)",
        fr: "pos.config (not applicable here)",
      },
      {
        en: "pos.session (not applicable here)",
        fr: "pos.session (not applicable here)",
      },
      {
        en: "account.payment (not applicable here)",
        fr: "account.payment (not applicable here)",
      },
    ],
    explanation: {
      en: "pos.payment.method defines a payment method (Cash, Bank, Custom) used at the POS. Each method links to a journal, an outstanding receipts account, and a label. Multiple methods can be enabled in a POS Config (pos.config). The session (pos.session) is opened/closed per shift and reconciles cash drawer to expected balance.\n\npos.config is the overall POS configuration; payment methods are linked to it but live in pos.payment.method. pos.session is per-shift, not a method definition. account.payment is in Accounting, not POS.",
      fr: "pos.payment.method defines a payment method (Cash, Bank, Custom) used at the POS. Each method links to a journal, an outstanding receipts account, and a label. Multiple methods can be enabled in a POS Config (pos.config). The session (pos.session) is opened/closed per shift and reconciles cash drawer to expected balance.\n\npos.config is the overall POS configuration; payment methods are linked to it but live in pos.payment.method. pos.session is per-shift, not a method definition. account.payment is in Accounting, not POS.",
    },
  }),
  complexQ({
    id: "oep-081",
    module: "pos",
    text: {
      en: "Odoo 19 POS has a Restaurant feature. What does this enable?",
      fr: "Odoo 19 POS has a Restaurant feature. What does this enable?",
    },
    correct: {
      en: "Table maps, bill splitting, course sequencing, and kitchen print/KDS",
      fr: "Table maps, bill splitting, course sequencing, and kitchen print/KDS",
    },
    distractors: [
      {
        en: "Wholesale B2B catalog ordering without table or course management",
        fr: "Wholesale B2B catalog ordering without table or course management",
      },
      {
        en: "Simple street-market cash sales with no restaurant floor plan features",
        fr: "Simple street-market cash sales with no restaurant floor plan features",
      },
      {
        en: "Online eLearning course pages published through the Website app",
        fr: "Online eLearning course pages published through the Website app",
      },
    ],
    explanation: {
      en: "Restaurant mode in POS adds floor plans (tables on a canvas), table service (assign waiter, hold/transfer tables), bill splitting (by item, by share, by customer), course management (entrée → main → dessert sequencing), and integrated kitchen printing or KDS (Kitchen Display System). It is widely used for cafes, bars, and full-service restaurants.\n\nWholesale is a different B2B pattern. Street market POS is just standard POS. Online courses live in eLearning.",
      fr: "Restaurant mode in POS adds floor plans (tables on a canvas), table service (assign waiter, hold/transfer tables), bill splitting (by item, by share, by customer), course management (entrée → main → dessert sequencing), and integrated kitchen printing or KDS (Kitchen Display System). It is widely used for cafes, bars, and full-service restaurants.\n\nWholesale is a different B2B pattern. Street market POS is just standard POS. Online courses live in eLearning.",
    },
  }),
  complexQ({
    id: "oep-082",
    module: "pos",
    text: {
      en: "What is the purpose of the Kitchen Display System (KDS) connected to Odoo 19 POS?",
      fr: "What is the purpose of the Kitchen Display System (KDS) connected to Odoo 19 POS?",
    },
    correct: {
      en: "Screen shows kitchen orders; cooks mark items done for waiter updates",
      fr: "Screen shows kitchen orders; cooks mark items done for waiter updates",
    },
    distractors: [
      {
        en: "Tracks employee attendance hours from a kitchen tablet interface (not applicable here)",
        fr: "Tracks employé attendance hours from a kitchen tablet interface (not applicable here)",
      },
      {
        en: "Replaces Accounting for posting restaurant revenue journal entries (not applicable here)",
        fr: "Replaces Accounting for posting restaurant revenue écritures comptables (not applicable here)",
      },
      {
        en: "Disables tipping and removes all payment methods from the POS config",
        fr: "Disables tipping and removes all payment methods from the POS config",
      },
    ],
    explanation: {
      en: "The Kitchen Display System (KDS) is a screen in the kitchen showing live orders broken into preparation lanes. Cooks acknowledge items as they begin and finish, which signals the front-of-house. This reduces lost paper tickets, helps track preparation times, and integrates seamlessly with course management for proper meal pacing.\n\nEmployee tracking is in HR/Attendances. Accounting records revenue and payments; KDS only displays kitchen preparation queues. Tipping is configured separately at POS, unaffected by KDS.",
      fr: "The Kitchen Display System (KDS) is a screen in the kitchen showing live orders broken into preparation lanes. Cooks acknowledge items as they begin and finish, which signals the front-of-house. This reduces lost paper tickets, helps track preparation times, and integrates seamlessly with course management for proper meal pacing.\n\nemployé tracking is in HR/Attendances. Accounting records revenue and payments; KDS only displays kitchen preparation queues. Tipping is configured separately at POS, unaffected by KDS.",
    },
  }),
  complexQ({
    id: "oep-083",
    module: "pos",
    text: {
      en: "A POS session is closed at the end of the day in Odoo 19. What happens with the cash count?",
      fr: "A POS session is closed at the end of the day in Odoo 19. What happens with the cash count?",
    },
    correct: {
      en: "The cashier enters counted cash",
      fr: "The cashier enters counted cash",
    },
    distractors: [
      {
        en: "Cash is automatically deposited and belongs to a different Odoo application",
        fr: "Cash is automatically deposited and belongs to a different Odoo application",
      },
      {
        en: "The session cannot be closed without a sale",
        fr: "The session cannot be closed without a sale",
      },
      {
        en: "Cash is ignored and is not the controlling configuration here",
        fr: "Cash is ignored and is not the controlling configuration here",
      },
    ],
    explanation: {
      en: "Closing a POS session shows expected balance per payment method (cash, card, etc.) vs counted balance. The cashier records the count; any difference posts to a configured Difference account (e.g., Cash Over/Short). Odoo creates the corresponding accounting entries to move cash from the POS journal to the bank, ensuring cashier cash is reconciled with the GL daily.\n\nThere is no automatic deposit; it is a manual count and post. Sessions can be closed even with zero sales, e.g., a closed day. Cash differences are tracked, not ignored.",
      fr: "Closing a POS session shows expected balance per payment method (cash, card, etc.) vs counted balance. The cashier records the count; any difference posts to a configured Difference account (e.g., Cash Over/Short). Odoo creates the corresponding accounting entries to move cash from the POS journal to the bank, ensuring cashier cash is reconciled with the GL daily.\n\nThere is no automatic deposit; it is a manual count and post. Sessions can be closed even with zero sales, e.g., a closed day. Cash differences are tracked, not ignored.",
    },
  }),
  complexQ({
    id: "oep-084",
    module: "pos",
    text: {
      en: "A consultant wants the POS to integrate with Inventory so each sale reduces stock in real time in Odoo 19. What ensures this?",
      fr: "A consultant wants the POS to integrate with Inventory so each sale reduces stock in real time in Odoo 19. What ensures this?",
    },
    correct: {
      en: "POS source location on stock; moves post on session close or per order",
      fr: "POS source location on stock; moves post on session close or per order",
    },
    distractors: [
      {
        en: "POS sales never touch inventory; stock is adjusted manually each week",
        fr: "POS sales never touch inventory; stock is adjusted manually each week",
      },
      {
        en: "Only Studio automations can decrement inventory after POS checkout (not applicable here)",
        fr: "Only Studio automations can decrement inventory after POS checkout (not applicable here)",
      },
      {
        en: "Cashiers must validate a delivery order after every POS transaction (not applicable here)",
        fr: "Cashiers must validate a bon de livraison after every POS transaction (not applicable here)",
      },
    ],
    explanation: {
      en: "POS sales generate stock moves that reduce inventory at the configured POS source location. Depending on the configuration, moves are posted per order or aggregated when the session closes. The Anglo-Saxon vs Continental valuation method affects whether COGS lines are posted to the GL. Cross-checks against Inventory keep on-hand data accurate.\n\nPOS does affect stock by default. Studio is not required for stock integration. It happens automatically, not manually.",
      fr: "POS sales generate stock moves that reduce inventory at the configured POS source location. Depending on the configuration, moves are posted per order or aggregated when the session closes. The Anglo-Saxon vs Continental valuation method affects whether COGS lines are posted to the GL. Cross-checks against Inventory keep on-hand data accurate.\n\nPOS does affect stock by default. Studio is not required for stock integration. It happens automatically, not manually.",
    },
  }),
  complexQ({
    id: "oep-085",
    module: "studio",
    text: {
      en: "A consultant wants to add a custom field 'Customer Loyalty Tier' on the partner form without writing code. Which Odoo 19 Enterprise tool is used?",
      fr: "A consultant wants to add a champ personnalisé 'Customer Loyalty Tier' on the partner form without writing code. Which Odoo 19 Enterprise tool is used?",
    },
    correct: {
      en: "Studio",
      fr: "Studio",
    },
    distractors: [
      {
        en: "Discuss",
        fr: "Discuss",
      },
      {
        en: "Sign",
        fr: "Sign",
      },
      {
        en: "Knowledge",
        fr: "Knowledge",
      },
    ],
    explanation: {
      en: "Studio (Enterprise) is the no-code customization tool. With Studio, you can add fields to any form, change layouts, build new menus and reports, customize automated actions, and modify access. Studio writes the changes as XML data into the database without altering source code, making them upgrade-friendly.\n\nDiscuss provides team messaging channels, not no-code form customization through Studio. Sign handles document signatures, not adding custom fields on partner forms. Knowledge is for wiki articles.",
      fr: "Studio (Enterprise) is the no-code customization tool. With Studio, you can add fields to any form, change layouts, build new menus and reports, customize action automatisée, and modify access. Studio writes the changes as XML data into the database without altering source code, making them upgrade-friendly.\n\nDiscuss provides team messaging channels, not no-code form customization through Studio. Sign handles document signatures, not adding champ personnalisé on partner forms. Knowledge is for wiki articles.",
    },
  }),
  complexQ({
    id: "oep-086",
    module: "studio",
    text: {
      en: "Studio in Odoo 19 lets you create Automated Actions. What is the difference between a Server Action and an Automated Action?",
      fr: "Studio in Odoo 19 lets you create action automatisée. What is the difference between a Server Action and an action automatisée?",
    },
    correct: {
      en: "Server Actions run on demand; Automated Actions add creation/time triggers",
      fr: "Server Actions run on demand; action automatisée add creation/time triggers",
    },
    distractors: [
      {
        en: "They are the same object with no difference in trigger or execution model",
        fr: "They are the same object with no difference in trigger or execution model",
      },
      {
        en: "Automated Actions cannot run Python code under any security configuration",
        fr: "action automatisée cannot run Python code under any security configuration",
      },
      {
        en: "Server Actions were removed in Odoo 19 and replaced entirely by Studio (not applicable here)",
        fr: "Server Actions were removed in Odoo 19 and replaced entirely by Studio (not applicable here)",
      },
    ],
    explanation: {
      en: "ir.actions.server is the Server Action — it can be called explicitly from a button, menu, or automated action. base.automation (Automated Actions) wraps a server action with a trigger (record created/written/deleted, time-based, on tag added/removed, on state change). Both can run Python code if user has the right permissions.\n\nThey serve different roles in the architecture. Both can run Python code (with appropriate access). Server Actions are core and not deprecated.",
      fr: "ir.actions.server is the Server Action — it can be called explicitly from a button, menu, or action automatisée. base.automation (action automatisée) wraps a server action with a trigger (record created/written/deleted, time-based, on tag added/removed, on state change). Both can run Python code if user has the right permissions.\n\nThey serve different roles in the architecture. Both can run Python code (with appropriate access). Server Actions are core and not deprecated.",
    },
  }),
  complexQ({
    id: "oep-087",
    module: "studio",
    text: {
      en: "A consultant uses Studio to add a new menu under Sales with a custom kanban view of opportunities. What does Studio create technically?",
      fr: "A consultant uses Studio to add a new menu under Sales with a custom kanban view of opportunité. What does Studio create technically?",
    },
    correct: {
      en: "XML records (ir.ui.menu",
      fr: "XML records (ir.ui.menu",
    },
    distractors: [
      {
        en: "A new Python module installed dynamically",
        fr: "A new Python module installed dynamically",
      },
      {
        en: "A separate server which confuses a related but distinct setting",
        fr: "A separate server which confuses a related but distinct setting",
      },
      {
        en: "Nothing — only display tweaks and is not the controlling configuration here",
        fr: "Nothing — only display tweaks and is not the controlling configuration here",
      },
    ],
    explanation: {
      en: "Studio writes its customizations as XML records in the database: menus, actions, and views. These are versioned and can be exported to a custom module for migration to other databases. Studio does not require server restart or module installation; everything happens in the running database.\n\nNo new Python module is installed; XML records are written. Studio works on the same server. Studio creates real records that drive functionality, not just visual tweaks.",
      fr: "Studio writes its customizations as XML records in the database: menus, actions, and views. These are versioned and can be exported to a custom module for migration to other databases. Studio does not require server restart or module installation; everything happens in the running database.\n\nNo new Python module is installed; XML records are written. Studio works on the same server. Studio creates real records that drive functionality, not just visual tweaks.",
    },
  }),
  complexQ({
    id: "oep-088",
    module: "studio",
    text: {
      en: "Studio Reports in Odoo 19 let users design a printable PDF. What underlying engine renders the PDF?",
      fr: "Studio Reports in Odoo 19 let users design a printable PDF. What underlying engine renders the PDF?",
    },
    correct: {
      en: "QWeb templates rendered to HTML",
      fr: "QWeb templates rendered to HTML",
    },
    distractors: [
      {
        en: "LaTeX and belongs to a different Odoo application",
        fr: "LaTeX and belongs to a different Odoo application",
      },
      {
        en: "Microsoft Word integration only which confuses a related but distinct setting",
        fr: "Microsoft Word integration only which confuses a related but distinct setting",
      },
      {
        en: "JasperReports and is not the controlling configuration here",
        fr: "JasperReports and is not the controlling configuration here",
      },
    ],
    explanation: {
      en: "Odoo's reporting engine uses QWeb templates to produce HTML, which is then converted to PDF by wkhtmltopdf (or an alternative renderer). Studio Report Designer offers a drag-and-drop UI on top of QWeb so users can place fields, headers, footers, and conditional sections without writing XML.\n\nOdoo renders PDFs from QWeb HTML; LaTeX is not part of the reporting engine. Word is not the rendering engine. JasperReports is not Odoo's engine.",
      fr: "Odoo's reporting engine uses QWeb templates to produce HTML, which is then converted to PDF by wkhtmltopdf (or an alternative renderer). Studio Report Designer offers a drag-and-drop UI on top of QWeb so users can place fields, headers, footers, and conditional sections without writing XML.\n\nOdoo renders PDFs from QWeb HTML; LaTeX is not part of the reporting engine. Word is not the rendering engine. JasperReports is not Odoo's engine.",
    },
  }),
  complexQ({
    id: "oep-089",
    module: "studio",
    text: {
      en: "A consultant wants to extend a model in Studio to add a Many2one field linking customers to a custom 'Industry Vertical' lookup. Which Odoo 19 step is correct?",
      fr: "A consultant wants to extend a model in Studio to add a Many2one field linking customers to a custom 'Industry Vertical' lookup. Which Odoo 19 step is correct?",
    },
    correct: {
      en: "Studio on res.partner: add Many2one to x_industry_vertical model and save",
      fr: "Studio on res.partner: add Many2one to x_industry_vertical model and save",
    },
    distractors: [
      {
        en: "Edit PostgreSQL tables directly with ALTER TABLE in production SQL (not applicable here)",
        fr: "Edit PostgreSQL tables directly with ALTER TABLE in production SQL (not applicable here)",
      },
      {
        en: "Translate labels only in base.po without creating any new field (not applicable here)",
        fr: "Translate labels only in base.po without creating any new field (not applicable here)",
      },
      {
        en: "Override the Python res.partner class in Odoo core source code (not applicable here)",
        fr: "Override the Python res.partner class in Odoo core source code (not applicable here)",
      },
    ],
    explanation: {
      en: "In Studio, you add a Many2one field by selecting the field type, choosing/creating the target model (Studio prefixes custom models with x_), labeling it, and saving. Studio creates the column and metadata automatically. Direct SQL is unsafe and bypasses ORM rules; modifying core code is unnecessary for this simple extension.\n\nSQL bypasses ORM, breaking constraints, audit, and migration. base.po is for translations. Studio handles this without core overrides.",
      fr: "In Studio, you add a Many2one field by selecting the field type, choosing/creating the target model (Studio prefixes custom models with x_), labeling it, and saving. Studio creates the column and metadata automatically. Direct SQL is unsafe and bypasses ORM rules; modifying core code is unnecessary for this simple extension.\n\nSQL bypasses ORM, breaking constraints, audit, and migration. base.po is for translations. Studio handles this without core overrides.",
    },
  }),
  complexQ({
    id: "oep-090",
    module: "studio",
    text: {
      en: "A consultant wants to require a manager's approval before a Purchase Order can be confirmed in Odoo 19. Which no-code feature handles this?",
      fr: "A consultant wants to require a manager's approval before a bon de commande can be confirmed in Odoo 19. Which no-code feature handles this?",
    },
    correct: {
      en: "Studio Approval rules with amount conditions and approver user groups",
      fr: "Studio Approval rules with amount conditions and approver user groups",
    },
    distractors: [
      {
        en: "A custom Python module overriding purchase.order confirm in core",
        fr: "A custom Python module overriding purchase.order confirm in core",
      },
      {
        en: "An external webhook with no in-Odoo approval dialog or notification",
        fr: "An external webhook with no in-Odoo approval dialog or notification",
      },
      {
        en: "Studio cannot gate confirmations; only Purchase Settings thresholds apply",
        fr: "Studio cannot gate confirmations; only Purchase Settings thresholds apply",
      },
    ],
    explanation: {
      en: "Studio Approvals (Enterprise) lets you define approval rules tied to a model and operation. For example, on purchase.order confirm, require approval from the Purchase Manager group when the amount exceeds $10K. The user clicking confirm sees an approval dialog; the approver receives a notification. All without writing code.\n\nCustom Python is not required for standard approvals. Webhooks are unrelated to approval gates. Studio supports approvals natively.",
      fr: "Studio Approvals (Enterprise) lets you define approval rules tied to a model and operation. For example, on purchase.order confirm, require approval from the Purchase Manager group when the amount exceeds $10K. The user clicking confirm sees an approval dialog; the approver receives a notification. All without writing code.\n\nCustom Python is not required for standard approvals. Webhooks are unrelated to approval gates. Studio supports approvals natively.",
    },
  }),
  complexQ({
    id: "oep-091",
    module: "studio",
    text: {
      en: "What is the function of access groups in Odoo 19 (e.g., Sales / User: All Documents vs Sales / User: Own Documents only)?",
      fr: "What is the function of access groups in Odoo 19 (e.g., Sales / User: All Documents vs Sales / User: Own Documents only)?",
    },
    correct: {
      en: "Groups bind sets of permissions and record rules to users",
      fr: "Groups bind sets of permissions and règle d'enregistrement to users",
    },
    distractors: [
      {
        en: "Groups are only labels and belongs to a different Odoo application",
        fr: "Groups are only labels and belongs to a different Odoo application",
      },
      {
        en: "Groups cannot restrict records which confuses a related but distinct setting",
        fr: "Groups cannot restrict records which confuses a related but distinct setting",
      },
      {
        en: "Groups apply only to inventory and is not the controlling configuration here",
        fr: "Groups apply only to inventory and is not the controlling configuration here",
      },
    ],
    explanation: {
      en: "res.groups is the security group model. Groups are linked to model access rights (CRUD per model) and to record rules (filters that constrain which records a user can read/write). The 'Own Documents Only' vs 'All Documents' pattern in Sales is a record rule that restricts a user to their own opportunities/quotations unless they are in the all-documents group.\n\nGroups are functional, not just labels. Record rules attached to groups absolutely restrict records. Groups apply to every model, not just inventory.",
      fr: "res.groups is the security group model. Groups are linked to model droit d'accès (CRUD per model) and to règle d'enregistrement (filters that constrain which records a user can read/write). The 'Own Documents Only' vs 'All Documents' pattern in Sales is a règle d'enregistrement that restricts a user to their own opportunité/quotations unless they are in the all-documents group.\n\nGroups are functional, not just labels. règle d'enregistrement attached to groups absolutely restrict records. Groups apply to every model, not just inventory.",
    },
  }),
  complexQ({
    id: "oep-092",
    module: "studio",
    text: {
      en: "Multi-company in Odoo 19 lets one database serve multiple legal entities. How is data isolated between companies?",
      fr: "Multi-company in Odoo 19 lets one database serve multiple legal entities. How is data isolated between companies?",
    },
    correct: {
      en: "Many models include a company_id field",
      fr: "Many models include a company_id field",
    },
    distractors: [
      {
        en: "By creating multiple databases and belongs to a different Odoo application",
        fr: "By creating multiple databases and belongs to a different Odoo application",
      },
      {
        en: "Only via separate servers which confuses a related but distinct setting",
        fr: "Only via separate servers which confuses a related but distinct setting",
      },
      {
        en: "It is not supported and is not the controlling configuration here",
        fr: "It is not supported and is not the controlling configuration here",
      },
    ],
    explanation: {
      en: "Multi-company uses a company_id field on records (most models include it) and security rules that limit each user to their assigned companies. Users select an active company via the company switcher in the navbar. Shared resources (catalog, partners) can be company-scoped or global. Inter-company rules can automate transactions like inter-company sales/purchases.\n\nMultiple databases is multi-database, not multi-company. One Odoo server can host many companies. It is fully supported and widely used.",
      fr: "Multi-company uses a company_id field on records (most models include it) and security rules that limit each user to their assigned companies. Users select an active company via the company switcher in the navbar. Shared resources (catalog, partners) can be company-scoped or global. Inter-company rules can automate transactions like inter-company sales/purchases.\n\nMultiple databases is multi-database, not multi-company. One Odoo server can host many companies. It is fully supported and widely used.",
    },
  }),
  complexQ({
    id: "oep-093",
    module: "studio",
    text: {
      en: "A consultant must make Odoo 19 available in French and Spanish for users in the same company. Which step is required?",
      fr: "A consultant must make Odoo 19 available in French and Spanish for users in the same company. Which step is required?",
    },
    correct: {
      en: "Settings > Translations > Load a Translation; set user preferred language",
      fr: "Settings > Translations > Load a Translation; set user preferred language",
    },
    distractors: [
      {
        en: "Modify core Python translation files and redeploy the Odoo server code (not applicable here)",
        fr: "Modify core Python translation files and redeploy the Odoo server code (not applicable here)",
      },
      {
        en: "Provision a separate Odoo database for each language your company uses (not applicable here)",
        fr: "Provision a separate Odoo database for each language your company uses (not applicable here)",
      },
      {
        en: "Odoo user interface supports English only with no translation packs (not applicable here)",
        fr: "Odoo user interface supports English only with no translation packs (not applicable here)",
      },
    ],
    explanation: {
      en: "Languages are installed via Settings > Translations > Load a Translation (or General Settings > Languages section). Once installed, each user can pick their preferred language in their preferences; the UI and many emails switch instantly. Translatable fields (product names, descriptions) can carry per-language values. Country localizations may install their primary language automatically.\n\nNo source-code change is needed. One database supports many languages. Odoo supports dozens of languages.",
      fr: "Languages are installed via Settings > Translations > Load a Translation (or General Settings > Languages section). Once installed, each user can pick their preferred language in their preferences; the UI and many emails switch instantly. Translatable fields (product names, descriptions) can carry per-language values. Country localizations may install their primary language automatically.\n\nNo source-code change is needed. One database supports many languages. Odoo supports dozens of languages.",
    },
  }),
  complexQ({
    id: "oep-094",
    module: "studio",
    text: {
      en: "A consultant wants to send templated emails (e.g., quotation sent, invoice due reminder) in Odoo 19. Which mechanism is used?",
      fr: "A consultant wants to send templated emails (e.g., devis sent, facture due reminder) in Odoo 19. Which mechanism is used?",
    },
    correct: {
      en: "mail.template records with QWeb body and dynamic field placeholders",
      fr: "mail.template records with QWeb body and dynamic field placeholders",
    },
    distractors: [
      {
        en: "Studio PDF report layouts without any mail.template email definitions",
        fr: "Studio PDF report layouts without any mail.template email definitions",
      },
      {
        en: "Sign documents for legally binding signatures on outbound messages",
        fr: "Sign documents for legally binding signatures on outbound messages",
      },
      {
        en: "Discuss channels for ad-hoc chat without reusable email templates",
        fr: "Discuss channels for ad-hoc chat without reusable email templates",
      },
    ],
    explanation: {
      en: "Email templates (mail.template) define a subject line, body (QWeb / HTML), recipients, and attachments. Placeholders use Jinja-like / QWeb syntax to inject record data. Templates are bound to a model (e.g., sale.order) and can be triggered manually (Send by Email button) or by automated actions (e.g., reminder X days before due date).\n\nStudio reports produce PDFs, not email content directly. Sign is for e-signature workflows, not defining reusable outbound email templates. Discuss handles internal chat, not templated emails.",
      fr: "Email templates (mail.template) define a subject line, body (QWeb / HTML), recipients, and attachments. Placeholders use Jinja-like / QWeb syntax to inject record data. Templates are bound to a model (e.g., sale.order) and can be triggered manually (Send by Email button) or by action automatisée (e.g., reminder X days before due date).\n\nStudio reports produce PDFs, not email content directly. Sign is for e-signature workflows, not defining reusable outbound email templates. Discuss handles internal chat, not templated emails.",
    },
  }),
  complexQ({
    id: "oep-095",
    module: "studio",
    text: {
      en: "What is a Scheduled Action (ir.cron) in Odoo 19?",
      fr: "What is a Scheduled Action (ir.cron) in Odoo 19?",
    },
    correct: {
      en: "ir.cron scheduled job executing a server action on a recurring interval",
      fr: "ir.cron scheduled job executing a server action on a recurring interval",
    },
    distractors: [
      {
        en: "A one-time manual action with no database scheduler backing it (not applicable here)",
        fr: "A one-time manual action with no database scheduler backing it (not applicable here)",
      },
      {
        en: "A personal calendar reminder visible only in the user agenda view (not applicable here)",
        fr: "A personal calendar reminder visible only in the user agenda view (not applicable here)",
      },
      {
        en: "A Discuss meeting invite sent to channel participants (not applicable here)",
        fr: "A Discuss meeting invite sent to channel participants (not applicable here)",
      },
    ],
    explanation: {
      en: "Scheduled Actions (ir.cron) execute Python code or method calls on a configured frequency. Many built-in features rely on them: MRP/procurement scheduler, expired pricelist refresh, queue retries, recurring invoices, automated follow-ups. Admins can pause, force-run, or change frequency. Developers can add new cron jobs via XML data files.\n\nThey are recurring by definition. Calendar reminders are calendar.event-related. Meeting invites are different objects.",
      fr: "Scheduled Actions (ir.cron) execute Python code or method calls on a configured frequency. Many built-in features rely on them: MRP/procurement scheduler, expired liste de prix refresh, queue retries, recurring facture, automated follow-ups. Admins can pause, force-run, or change frequency. Developers can add new cron jobs via XML data files.\n\nThey are recurring by definition. Calendar reminders are calendar.event-related. Meeting invites are different objects.",
    },
  }),
  complexQ({
    id: "oep-096",
    module: "studio",
    text: {
      en: "Odoo 19 was released by Odoo S.A. as a new major version. Approximately when was Odoo 19 released?",
      fr: "Odoo 19 was released by Odoo S.A. as a new major version. Approximately when was Odoo 19 released?",
    },
    correct: {
      en: "September 2025 at Odoo Experience",
      fr: "September 2025 at Odoo Experience",
    },
    distractors: [
      {
        en: "January 2024 and belongs to a different Odoo application",
        fr: "January 2024 and belongs to a different Odoo application",
      },
      {
        en: "Late 2023 which confuses a related but distinct setting",
        fr: "Late 2023 which confuses a related but distinct setting",
      },
      {
        en: "It is not released yet and is not the controlling configuration here",
        fr: "It is not released yet and is not the controlling configuration here",
      },
    ],
    explanation: {
      en: "Odoo 19 was announced and released around Odoo Experience in September 2025, the company's annual conference where new versions are traditionally launched. Each major release brings updated apps, performance improvements, and new features such as enhanced AI integrations and refreshed UI elements compared to Odoo 18.\n\nJanuary 2024 was the era of v17. Late 2023 corresponds to the Odoo 17 release window, not the Odoo 19 major version. Odoo 19 is the current LTS as of 2026.",
      fr: "Odoo 19 was announced and released around Odoo Experience in September 2025, the company's annual conference where new versions are traditionally launched. Each major release brings updated apps, performance improvements, and new features such as enhanced AI integrations and refreshed UI elements compared to Odoo 18.\n\nJanuary 2024 was the era of v17. Late 2023 corresponds to the Odoo 17 release window, not the Odoo 19 major version. Odoo 19 is the current LTS as of 2026.",
    },
  }),
  complexQ({
    id: "oep-097",
    module: "studio",
    text: {
      en: "A new consultant must understand the difference between Odoo Community and Enterprise. Which capability is Enterprise-only?",
      fr: "A new consultant must understand the difference between Odoo Community and Enterprise. Which capability is Enterprise-only?",
    },
    correct: {
      en: "Studio, Documents, Helpdesk, and advanced Accounting (Enterprise add-ons)",
      fr: "Studio, Documents, Helpdesk, and advanced Accounting (Enterprise add-ons)",
    },
    distractors: [
      {
        en: "Sales quotations and orders (available in Community and Enterprise)",
        fr: "Sales quotations and orders (available in Community and Enterprise)",
      },
      {
        en: "CRM pipelines and lead tracking (available in Community and Enterprise)",
        fr: "CRM pipelines and piste tracking (available in Community and Enterprise)",
      },
      {
        en: "Inventory routes and stock valuation (available in Community and Enterprise)",
        fr: "Inventory routes and stock valuation (available in Community and Enterprise)",
      },
    ],
    explanation: {
      en: "Community (open source) covers Sales, CRM, Inventory, Purchase, Manufacturing (basic), Project, Website, eCommerce. Enterprise adds Studio, Documents, Helpdesk, advanced Accounting (with full reporting and bank sync), Marketing Automation, Field Service, Subscriptions, Planning, Quality, native iOS/Android apps, IoT integrations, and more. Many implementations need Enterprise for accounting localizations and customization.\n\nSales is in both editions. CRM is included in both Community and Enterprise; it is not Enterprise-only. Inventory is in both editions.",
      fr: "Community (open source) covers Sales, CRM, Inventory, Purchase, Manufacturing (basic), Project, Website, eCommerce. Enterprise adds Studio, Documents, Helpdesk, advanced Accounting (with full reporting and bank sync), Marketing Automation, Field Service, Subscriptions, Planning, Quality, native iOS/Android apps, IoT integrations, and more. Many implementations need Enterprise for accounting localizations and customization.\n\nSales is in both editions. CRM is included in both Community and Enterprise; it is not Enterprise-only. Inventory is in both editions.",
    },
  }),
  complexQ({
    id: "oep-098",
    module: "studio",
    text: {
      en: "A consultant configures a sequence on a custom model in Odoo 19 so each new record auto-numbers as INV/2026/00001. Which model holds sequence definitions?",
      fr: "A consultant configures a sequence on a custom model in Odoo 19 so each new record auto-numbers as INV/2026/00001. Which model holds sequence definitions?",
    },
    correct: {
      en: "ir.sequence",
      fr: "ir.sequence",
    },
    distractors: [
      {
        en: "res.sequence",
        fr: "res.sequence",
      },
      {
        en: "model.sequence",
        fr: "model.sequence",
      },
      {
        en: "auto.number",
        fr: "auto.number",
      },
    ],
    explanation: {
      en: "ir.sequence stores sequence definitions: code (used to fetch the next value), prefix (with date variables like %(year)s), padding, and increment. Models like sale.order, account.move, and stock.picking call ir.sequence.next_by_code() to get the next value. Sequences can reset yearly/monthly with date_range entries.\n\nres.sequence is not the model. model.sequence is not real. auto.number is not a real Odoo model; sequence definitions live in ir.sequence.",
      fr: "ir.sequence stores sequence definitions: code (used to fetch the next value), prefix (with date variables like %(year)s), padding, and increment. Models like sale.order, account.move, and stock.picking call ir.sequence.next_by_code() to get the next value. Sequences can reset yearly/monthly with date_range entries.\n\nres.sequence is not the model. model.sequence is not real. auto.number is not a real Odoo model; sequence definitions live in ir.sequence.",
    },
  }),
  complexQ({
    id: "oep-099",
    module: "studio",
    text: {
      en: "A consultant wants to take advantage of Odoo 19's improved UI. Compared to Odoo 18, Odoo 19 generally:",
      fr: "A consultant wants to take advantage of Odoo 19's improved UI. Compared to Odoo 18, Odoo 19 generally:",
    },
    correct: {
      en: "Refined UI tokens, faster list/kanban views, broader AI-assisted features",
      fr: "Refined UI tokens, faster list/kanban views, broader AI-assisted features",
    },
    distractors: [
      {
        en: "Kanban view removed entirely from all Odoo 19 applications (not applicable here)",
        fr: "Kanban view removed entirely from all Odoo 19 applications (not applicable here)",
      },
      {
        en: "Studio module discontinued and replaced by external customization SaaS (not applicable here)",
        fr: "Studio module discontinued and replaced by external customization SaaS (not applicable here)",
      },
      {
        en: "Multi-company support removed from the Odoo 19 platform architecture (not applicable here)",
        fr: "Multi-company support removed from the Odoo 19 platform architecture (not applicable here)",
      },
    ],
    explanation: {
      en: "Odoo 19's release notes emphasize a refined visual language, performance improvements (especially on large list/kanban renders), enhanced AI-assisted writing and suggestions across apps, deeper Spreadsheet capabilities, and continued localization improvements. Major architectural pillars (multi-company, Studio, kanban, Enterprise apps) remain — they are typically extended, not removed.\n\nKanban views remain a core layout. Studio is a flagship Enterprise module and is retained. Multi-company is foundational and supported.",
      fr: "Odoo 19's release notes emphasize a refined visual language, performance improvements (especially on large list/kanban renders), enhanced AI-assisted writing and suggestions across apps, deeper Spreadsheet capabilities, and continued localization improvements. Major architectural pillars (multi-company, Studio, kanban, Enterprise apps) remain — they are typically extended, not removed.\n\nKanban views remain a core layout. Studio is a flagship Enterprise module and is retained. Multi-company is foundational and supported.",
    },
  }),
  complexQ({
    id: "oep-100",
    module: "studio",
    text: {
      en: "An Odoo 19 functional consultant prepares a go-live. Which sequence is the recommended approach when migrating data into a fresh Odoo database?",
      fr: "An Odoo 19 functional consultant prepares a go-live. Which sequence is the recommended approach when migrating data into a fresh Odoo database?",
    },
    correct: {
      en: "Configure COA/taxes, import masters, open balances, opening entry, go-live",
      fr: "Configure COA/taxes, import masters, open balances, opening entry, go-live",
    },
    distractors: [
      {
        en: "Import partners, products, and transactions in one unordered CSV batch",
        fr: "Import partners, products, and transactions in one unordered CSV batch",
      },
      {
        en: "Build Studio customizations before defining chart of accounts or taxes",
        fr: "Build Studio customizations before defining plan comptable or taxes",
      },
      {
        en: "Skip master configuration and begin daily transactions on a blank database",
        fr: "Skip master configuration and begin daily transactions on a blank database",
      },
    ],
    explanation: {
      en: "A standard Odoo go-live follows: configuration first (so taxes/accounts exist for transaction imports), then master data, then open transactional balances at cutover, then opening trial balance, then user training. Imports use Odoo's Import tool (CSV/XLSX) with external IDs to maintain relationships. Skipping order leads to broken references and re-imports.\n\nOrder matters — imports without configuration fail or import partial data. Customizations should layer on top of standard processes, not before configuration. Skipping configuration leads to non-functional accounting and broken workflows.",
      fr: "A standard Odoo go-live follows: configuration first (so taxes/accounts exist for transaction imports), then master data, then open transactional balances at cutover, then opening trial balance, then user training. Imports use Odoo's Import tool (CSV/XLSX) with external IDs to maintain relationships. Skipping order piste to broken references and re-imports.\n\nOrder matters — imports without configuration fail or import partial data. Customizations should layer on top of standard processes, not before configuration. Skipping configuration piste to non-functional accounting and broken workflows.",
    },
  }),
  complexQ({
    id: "oep-101",
    module: "marketing",
    text: {
      en: "A marketing manager wants to test two email subject lines on a campaign in Odoo 19. Which Email Marketing feature supports this?",
      fr: "A marketing manager wants to test two email subject lines on a campaign in Odoo 19. Which Email Marketing feature supports this?",
    },
    correct: {
      en: "A/B testing with a sample percentage and winner selection metric",
      fr: "A/B testing with a sample percentage and winner selection metric",
    },
    distractors: [
      {
        en: "Survey scoring with pass/fail thresholds on responses (not applicable here)",
        fr: "Survey scoring with pass/fail thresholds on responses (not applicable here)",
      },
      {
        en: "POS loyalty point accrual rules on checkout (not applicable here)",
        fr: "POS loyalty point accrual rules on checkout (not applicable here)",
      },
      {
        en: "Studio approval gates before an email is sent (not applicable here)",
        fr: "Studio approval gates before an email is sent (not applicable here)",
      },
    ],
    explanation: {
      en: "Email Marketing supports A/B tests on subject lines (and sometimes content). You send variants to a sample, wait for opens/clicks, then mail the winning version to the remainder. This is native to the Marketing app, not Studio or POS.\n\nSurvey scoring evaluates quiz answers, not email subject-line performance. POS loyalty rules apply at retail checkout, not to mass email campaigns. Studio approvals gate business documents; they are not the Email Marketing A/B test tool.",
      fr: "Email Marketing supports A/B tests on subject lines (and sometimes content). You send variants to a sample, wait for opens/clicks, then mail the winning version to the remainder. This is native to the Marketing app, not Studio or POS.\n\nSurvey scoring evaluates quiz answers, not email subject-line performance. POS loyalty rules apply at retail checkout, not to mass email campaigns. Studio approvals gate business documents; they are not the Email Marketing A/B test tool.",
    },
  }),
  complexQ({
    id: "oep-102",
    module: "marketing",
    text: {
      en: "In Odoo 19 Marketing Automation, what starts a workflow when a contact downloads a specific whitepaper from the website?",
      fr: "In Odoo 19 Marketing Automation, what starts a workflow when a contact downloads a specific whitepaper from the website?",
    },
    correct: {
      en: "A trigger such as \"Page visited\" or a tracked link/UTM tied to the campaign",
      fr: "A trigger such as \"Page visited\" or a tracked link/UTM tied to the campaign",
    },
    distractors: [
      {
        en: "A manufacturing reordering rule on the product template (not applicable here)",
        fr: "A manufacturing règle de réapprovisionnement on the product template (not applicable here)",
      },
      {
        en: "A bank reconciliation model matching statement lines (not applicable here)",
        fr: "A rapprochement bancaire model matching statement lines (not applicable here)",
      },
      {
        en: "A POS session opening cash count (not applicable here)",
        fr: "A POS session opening cash count (not applicable here)",
      },
    ],
    explanation: {
      en: "Marketing Automation workflows begin on triggers like page visits, link clicks, form submissions, or time delays. A whitepaper download is typically tracked via a campaign link or website page rule that enrolls the contact in the workflow.\n\nReordering rules replenish stock; they do not enroll marketing contacts. Reconciliation models match bank transactions, not website downloads. POS session opening records cashier cash, unrelated to marketing enrollment.",
      fr: "Marketing Automation workflows begin on triggers like page visits, link clicks, form submissions, or time delays. A whitepaper download is typically tracked via a campaign link or website page rule that enrolls the contact in the workflow.\n\nrègle de réapprovisionnement replenish stock; they do not enroll marketing contacts. modèle de rapprochement match bank transactions, not website downloads. POS session opening records cashier cash, unrelated to marketing enrollment.",
    },
  }),
  complexQ({
    id: "oep-103",
    module: "marketing",
    text: {
      en: "Which Odoo 19 app sends bulk promotional text messages to opted-in contacts?",
      fr: "Which Odoo 19 app sends bulk promotional text messages to opted-in contacts?",
    },
    correct: {
      en: "SMS Marketing with recipient lists and compliance opt-out handling",
      fr: "SMS Marketing with recipient lists and compliance opt-out handling",
    },
    distractors: [
      {
        en: "Knowledge articles shared as SMS from the wiki editor (not applicable here)",
        fr: "Knowledge articles shared as SMS from the wiki editor (not applicable here)",
      },
      {
        en: "Inventory barcode transfers pushed as text alerts (not applicable here)",
        fr: "Inventory barcode transfers pushed as text alerts (not applicable here)",
      },
      {
        en: "Discuss channels broadcasting internal chat only (not applicable here)",
        fr: "Discuss channels broadcasting internal chat only (not applicable here)",
      },
    ],
    explanation: {
      en: "SMS Marketing sends campaigns to mailing lists with provider credits (IAP). Opt-out links and blacklist rules keep compliance. It is separate from Discuss internal chat and from Knowledge documentation.\n\nKnowledge publishes articles; it is not a bulk SMS campaign tool. Barcode operations update stock moves, not customer SMS campaigns. Discuss handles team chat, not promotional SMS to external contacts.",
      fr: "SMS Marketing sends campaigns to mailing lists with provider credits (IAP). Opt-out links and blacklist rules keep compliance. It is separate from Discuss internal chat and from Knowledge documentation.\n\nKnowledge publishes articles; it is not a bulk SMS campaign tool. Barcode operations update stock moves, not customer SMS campaigns. Discuss handles team chat, not promotional SMS to external contacts.",
    },
  }),
  complexQ({
    id: "oep-104",
    module: "marketing",
    text: {
      en: "A trainer builds a certification quiz in Odoo 19 Surveys. How can a passing score be enforced?",
      fr: "A trainer builds a certification quiz in Odoo 19 Surveys. How can a passing score be enforced?",
    },
    correct: {
      en: "Set scoring on questions and define a minimum % to pass on the survey",
      fr: "Set scoring on questions and define a minimum % to pass on the survey",
    },
    distractors: [
      {
        en: "Require a POS payment before the survey opens (not applicable here)",
        fr: "Require a POS payment before the survey opens (not applicable here)",
      },
      {
        en: "Use a fiscal position to map taxes on answers (not applicable here)",
        fr: "Use a position fiscale to map taxes on answers (not applicable here)",
      },
      {
        en: "Lock the survey until a manufacturing order completes (not applicable here)",
        fr: "Lock the survey until a ordre de fabrication completes (not applicable here)",
      },
    ],
    explanation: {
      en: "Surveys support scored questions (single/multiple choice with points). You configure a passing score percentage; respondents see pass/fail and can be limited on retries depending on settings.\n\nPOS payments are unrelated to survey scoring logic. Fiscal positions remap taxes on transactions, not survey grades. Manufacturing orders produce goods; they do not gate survey access.",
      fr: "Surveys support scored questions (single/multiple choice with points). You configure a passing score percentage; respondents see pass/fail and can be limited on retries depending on settings.\n\nPOS payments are unrelated to survey scoring logic. position fiscale remap taxes on transactions, not survey grades. Manufacturing orders produce goods; they do not gate survey access.",
    },
  }),
  complexQ({
    id: "oep-105",
    module: "marketing",
    text: {
      en: "Which Surveys question type collects a matrix of ratings (rows vs columns) in Odoo 19?",
      fr: "Which Surveys question type collects a matrix of ratings (rows vs columns) in Odoo 19?",
    },
    correct: {
      en: "Matrix question type with row labels and column scale values",
      fr: "Matrix question type with row labels and column scale values",
    },
    distractors: [
      {
        en: "Simple Textbox for one-line free text only (not applicable here)",
        fr: "Simple Textbox for one-line free text only (not applicable here)",
      },
      {
        en: "Numerical Value with a single integer input (not applicable here)",
        fr: "Numerical Value with a single integer input (not applicable here)",
      },
      {
        en: "File Upload for attaching a PDF response (not applicable here)",
        fr: "File Upload for attaching a PDF response (not applicable here)",
      },
    ],
    explanation: {
      en: "The Matrix question type lets you define rows (statements) and columns (rating scale). Respondents pick one column per row, ideal for satisfaction grids or skills assessments.\n\nTextbox captures a single text answer, not a row/column grid. Numerical Value is one number, not a multi-row rating matrix. File Upload stores attachments; it does not render rating grids.",
      fr: "The Matrix question type lets you define rows (statements) and columns (rating scale). Respondents pick one column per row, ideal for satisfaction grids or skills assessments.\n\nTextbox captures a single text answer, not a row/column grid. Numerical Value is one number, not a multi-row rating matrix. File Upload stores attachments; it does not render rating grids.",
    },
  }),
  complexQ({
    id: "oep-106",
    module: "spreadsheet",
    text: {
      en: "A CFO wants a live inventory valuation pivot inside Odoo 19 without exporting to Excel. Which tool is designed for this?",
      fr: "A CFO wants a live inventory valuation pivot inside Odoo 19 without exporting to Excel. Which tool is designed for this?",
    },
    correct: {
      en: "Odoo Spreadsheet inserting a pivot/list from Inventory reporting data",
      fr: "Odoo Spreadsheet inserting a pivot/list from Inventory reporting data",
    },
    distractors: [
      {
        en: "Sign module for PDF signature capture on stock counts (not applicable here)",
        fr: "Sign module for PDF signature capture on stock counts (not applicable here)",
      },
      {
        en: "POS closing journal for end-of-day cash differences (not applicable here)",
        fr: "POS closing journal for end-of-day cash differences (not applicable here)",
      },
      {
        en: "Discuss channel pinned messages for warehouse notes (not applicable here)",
        fr: "Discuss channel pinned messages for entrepôt notes (not applicable here)",
      },
    ],
    explanation: {
      en: "Odoo Spreadsheet connects to live Odoo data. You insert pivots or lists from reports (e.g., stock valuation) and refresh values in place, optionally on dashboards.\n\nSign handles signatures, not live analytical pivots. POS session closing reconciles cash, not inventory valuation pivots. Discuss stores chat messages, not spreadsheet analytics.",
      fr: "Odoo Spreadsheet connects to live Odoo data. You insert pivots or lists from reports (e.g., stock valuation) and refresh values in place, optionally on dashboards.\n\nSign handles signatures, not live analytical pivots. POS session closing reconciles cash, not inventory valuation pivots. Discuss stores chat messages, not spreadsheet analytics.",
    },
  }),
  complexQ({
    id: "oep-107",
    module: "spreadsheet",
    text: {
      en: "In Odoo 19 Spreadsheet, what happens when you click \"Insert\" > \"List\" from a filtered sales report?",
      fr: "In Odoo 19 Spreadsheet, what happens when you click \"Insert\" > \"List\" from a filtered sales report?",
    },
    correct: {
      en: "A linked list of records appears in the sheet and can refresh from live data",
      fr: "A linked list of records appears in the sheet and can refresh from live data",
    },
    distractors: [
      {
        en: "A static PNG screenshot is pasted with no data connection (not applicable here)",
        fr: "A static PNG screenshot is pasted with no data connection (not applicable here)",
      },
      {
        en: "A new sales order is created for each visible row (not applicable here)",
        fr: "A new commande client is created for each visible row (not applicable here)",
      },
      {
        en: "The underlying report filter is deleted permanently (not applicable here)",
        fr: "The underlying report filter is deleted permanently (not applicable here)",
      },
    ],
    explanation: {
      en: "Insert List pulls the current report dataset into the spreadsheet as a linked data region. Refresh updates figures when underlying transactions change, preserving filters defined at insert time.\n\nSpreadsheet lists are data-linked, not static image captures. Insert List does not create sales orders; it imports data for analysis. Inserting a list does not delete the source report or its filters.",
      fr: "Insert List pulls the current report dataset into the spreadsheet as a linked data region. Refresh updates figures when underlying transactions change, preserving filters defined at insert time.\n\nSpreadsheet lists are data-linked, not static image captures. Insert List does not create sales orders; it imports data for analysis. Inserting a list does not delete the source report or its filters.",
    },
  }),
  complexQ({
    id: "oep-108",
    module: "spreadsheet",
    text: {
      en: "A manager pins a Spreadsheet dashboard to the Accounting app home screen in Odoo 19. What does this provide?",
      fr: "A manager pins a Spreadsheet dashboard to the Accounting app home screen in Odoo 19. What does this provide?",
    },
    correct: {
      en: "A shared live dashboard tile users open without rebuilding the sheet",
      fr: "A shared live dashboard tile users open without rebuilding the sheet",
    },
    distractors: [
      {
        en: "A one-time PDF export that never updates after publishing (not applicable here)",
        fr: "A one-time PDF export that never updates after publishing (not applicable here)",
      },
      {
        en: "A Studio custom model replacing account.move entirely (not applicable here)",
        fr: "A Studio custom model replacing account.move entirely (not applicable here)",
      },
      {
        en: "A POS config for retail cash control only (not applicable here)",
        fr: "A POS config for retail cash control only (not applicable here)",
      },
    ],
    explanation: {
      en: "Spreadsheet dashboards can be shared and pinned to app menus. Authorized users open the live dashboard with refreshed figures from connected Odoo data sources.\n\nDashboards remain linked to live data, unlike a static PDF snapshot. Studio extends models; it does not replace account.move with a dashboard tile. POS config manages registers and payment methods, not spreadsheet dashboards.",
      fr: "Spreadsheet dashboards can be shared and pinned to app menus. Authorized users open the live dashboard with refreshed figures from connected Odoo data sources.\n\nDashboards remain linked to live data, unlike a static PDF snapshot. Studio extends models; it does not replace account.move with a dashboard tile. POS config manages registers and payment methods, not spreadsheet dashboards.",
    },
  }),
  complexQ({
    id: "oep-109",
    module: "spreadsheet",
    text: {
      en: "Which Odoo 19 app hosts collaborative internal playbooks with nested articles and @mentions?",
      fr: "Which Odoo 19 app hosts collaborative internal playbooks with nested articles and @mentions?",
    },
    correct: {
      en: "Knowledge with workspaces, articles, and permission levels",
      fr: "Knowledge with workspaces, articles, and permission levels",
    },
    distractors: [
      {
        en: "Inventory > Operations > Transfers for stock pickings (not applicable here)",
        fr: "Inventory > Operations > Transfers for stock pickings (not applicable here)",
      },
      {
        en: "Purchase > RFQ list for vendor quotations (not applicable here)",
        fr: "Purchase > RFQ list for vendor quotations (not applicable here)",
      },
      {
        en: "Maintenance equipment records for work centers (not applicable here)",
        fr: "Maintenance equipment records for work centers (not applicable here)",
      },
    ],
    explanation: {
      en: "Knowledge (Enterprise) provides workspaces, hierarchical articles, templates, and collaboration features like mentions and favorites. It is the wiki/playbook app referenced on the certification syllabus.\n\nTransfers move stock; they do not store collaborative documentation articles. RFQs negotiate vendor pricing, not internal knowledge bases. Maintenance tracks equipment reliability, not wiki-style playbooks.",
      fr: "Knowledge (Enterprise) provides workspaces, hierarchical articles, templates, and collaboration features like mentions and favorites. It is the wiki/playbook app referenced on the certification syllabus.\n\nTransfers move stock; they do not store collaborative documentation articles. RFQs negotiate vendor pricing, not internal knowledge bases. Maintenance tracks equipment reliability, not wiki-style playbooks.",
    },
  }),
  complexQ({
    id: "oep-110",
    module: "spreadsheet",
    text: {
      en: "A support lead links a Knowledge article to a Helpdesk ticket in Odoo 19. What is the typical purpose?",
      fr: "A support piste links a Knowledge article to a Helpdesk ticket in Odoo 19. What is the typical purpose?",
    },
    correct: {
      en: "Give agents a vetted troubleshooting procedure without leaving the ticket",
      fr: "Give agents a vetted troubleshooting procedure without leaving the ticket",
    },
    distractors: [
      {
        en: "Post the ticket total to the general ledger as revenue (not applicable here)",
        fr: "Post the ticket total to the general ledger as revenue (not applicable here)",
      },
      {
        en: "Create a manufacturing order from the article BOM (not applicable here)",
        fr: "Create a ordre de fabrication from the article BOM (not applicable here)",
      },
      {
        en: "Replace the customer portal quotation signature flow (not applicable here)",
        fr: "Replace the customer portal devis signature flow (not applicable here)",
      },
    ],
    explanation: {
      en: "Linking Knowledge articles to Helpdesk tickets surfaces standard operating procedures, policies, or FAQs inside the ticket form so agents follow consistent resolution steps.\n\nHelpdesk tickets are not posted as revenue journal entries by linking articles. Manufacturing orders come from BoMs, not Knowledge article links. Portal quotation signing is a Sales workflow unrelated to Helpdesk article links.",
      fr: "Linking Knowledge articles to Helpdesk tickets surfaces standard operating procedures, policies, or FAQs inside the ticket form so agents follow consistent resolution steps.\n\nHelpdesk tickets are not posted as revenue écritures comptables by linking articles. Manufacturing orders come from BoMs, not Knowledge article links. Portal devis signing is a Sales workflow unrelated to Helpdesk article links.",
    },
  }),
  complexQ({
    id: "oep-111",
    module: "crm",
    text: {
      en: "A sales order requires a 30% down payment before production starts in Odoo 19. Which invoicing policy supports this?",
      fr: "A commande client requires a 30% down payment before production starts in Odoo 19. Which invoicing policy supports this?",
    },
    correct: {
      en: "Down payment invoice from the sales order (percentage or fixed amount)",
      fr: "Down payment facture from the commande client (percentage or fixed amount)",
    },
    distractors: [
      {
        en: "Invoice on delivery only with no deposit capability (not applicable here)",
        fr: "facture on delivery only with no deposit capability (not applicable here)",
      },
      {
        en: "Vendor bill three-way matching on the sales quotation (not applicable here)",
        fr: "facture fournisseur three-way matching on the sales devis (not applicable here)",
      },
      {
        en: "POS session cash difference posting at day end (not applicable here)",
        fr: "POS session cash difference posting at day end (not applicable here)",
      },
    ],
    explanation: {
      en: "Sales orders support down payment invoices (percentage or fixed). Odoo creates a deposit invoice, tracks the down payment on the SO, and deducts it from the final invoice.\n\nDelivered-quantity invoicing bills after shipment, not an upfront deposit. Three-way matching applies to vendor bills, not customer down payments. POS cash differences reconcile registers; they are not sales deposits.",
      fr: "Sales orders support down payment facture (percentage or fixed). Odoo creates a deposit facture, tracks the down payment on the SO, and deducts it from the final facture.\n\nDelivered-quantity invoicing bills after shipment, not an upfront deposit. Three-way matching applies to facture fournisseur, not customer down payments. POS cash differences reconcile registers; they are not sales deposits.",
    },
  }),
  complexQ({
    id: "oep-112",
    module: "crm",
    text: {
      en: "A storable product should invoice when quantities are delivered, not when the order is confirmed. Where is this set in Odoo 19?",
      fr: "A storable product should facture when quantities are delivered, not when the order is confirmed. Where is this set in Odoo 19?",
    },
    correct: {
      en: "Product invoicing policy: Ordered quantities vs Delivered quantities",
      fr: "Product invoicing policy: Ordered quantities vs Delivered quantities",
    },
    distractors: [
      {
        en: "Warehouse route Make-to-Order on the vendor pricelist (not applicable here)",
        fr: "entrepôt route Make-to-Order on the vendor liste de prix (not applicable here)",
      },
      {
        en: "Fiscal position mapping on the payment provider (not applicable here)",
        fr: "position fiscale mapping on the payment provider (not applicable here)",
      },
      {
        en: "POS config outstanding receipts account (not applicable here)",
        fr: "POS config outstanding receipts account (not applicable here)",
      },
    ],
    explanation: {
      en: "On the product (or service), Invoicing Policy controls whether invoice lines follow ordered or delivered quantities. Delivered is standard for storable goods where revenue aligns with shipment.\n\nMTO routes drive procurement linkage, not customer invoice timing. Fiscal positions remap taxes/accounts, not invoice-on-delivery policy. POS outstanding accounts handle register payments, not SO invoice policy.",
      fr: "On the product (or service), Invoicing Policy controls whether facture lines follow ordered or delivered quantities. Delivered is standard for storable goods where revenue aligns with shipment.\n\nMTO routes drive procurement linkage, not customer facture timing. position fiscale remap taxes/accounts, not facture-on-delivery policy. POS outstanding accounts handle register payments, not SO facture policy.",
    },
  }),
  complexQ({
    id: "oep-113",
    module: "crm",
    text: {
      en: "A sales team reuses a standard quotation layout with default sections and terms in Odoo 19. Which object stores this?",
      fr: "A sales team reuses a standard devis layout with default sections and terms in Odoo 19. Which object stores this?",
    },
    correct: {
      en: "Quotation Template (sale.order.template) applied on new quotations",
      fr: "devis Template (sale.order.template) applied on new quotations",
    },
    distractors: [
      {
        en: "Purchase Agreement blanket order for vendor tenders (not applicable here)",
        fr: "Purchase Agreement blanket order for vendor tenders (not applicable here)",
      },
      {
        en: "mrp.bom kit explosion on delivery orders (not applicable here)",
        fr: "mrp.bom kit explosion on delivery orders (not applicable here)",
      },
      {
        en: "ir.cron scheduled action for mail queue (not applicable here)",
        fr: "ir.cron scheduled action for mail queue (not applicable here)",
      },
    ],
    explanation: {
      en: "Quotation Templates define default lines, sections, terms, and optional products. Salespeople start from a template to speed quoting while keeping consistent structure and legal text.\n\nBlanket orders are purchase-side contracts with vendors, not sales quote layouts. Kit BoMs explode components on pickings, not quotation document structure. Scheduled actions run background jobs; they do not store quote layouts.",
      fr: "devis Templates define default lines, sections, terms, and optional products. Salespeople start from a template to speed quoting while keeping consistent structure and legal text.\n\nBlanket orders are purchase-side contracts with vendors, not sales quote layouts. Kit BoMs explode components on pickings, not devis document structure. Scheduled actions run background jobs; they do not store quote layouts.",
    },
  }),
  complexQ({
    id: "oep-114",
    module: "crm",
    text: {
      en: "A consultant sells consulting hours in Days but stocks materials in Units. Which Odoo 19 feature manages both on one product catalog?",
      fr: "A consultant sells consulting hours in Days but stocks materials in Units. Which Odoo 19 feature manages both on one product catalog?",
    },
    correct: {
      en: "Units of Measure categories with conversion between related UoMs",
      fr: "Units of Measure categories with conversion between related UoMs",
    },
    distractors: [
      {
        en: "Separate databases per unit type with no shared products (not applicable here)",
        fr: "Separate databases per unit type with no shared products (not applicable here)",
      },
      {
        en: "POS-only UoM definitions unavailable to Sales orders (not applicable here)",
        fr: "POS-only UoM definitions unavailable to Sales orders (not applicable here)",
      },
      {
        en: "Analytic tags replacing all UoM configuration (not applicable here)",
        fr: "Analytic tags replacing all UoM configuration (not applicable here)",
      },
    ],
    explanation: {
      en: "UoM categories group compatible units (Unit, Dozen, kg, Day, Hour). Products reference a base UoM; alternate UoMs convert within the category for sales, purchase, and inventory.\n\nOne Odoo database supports multiple UoM categories on a shared product catalog. POS uses the same product UoM definitions as Sales and Inventory. Analytic tags track dimensions; they do not replace unit-of-measure setup.",
      fr: "UoM categories group compatible units (Unit, Dozen, kg, Day, Hour). Products reference a base UoM; alternate UoMs convert within the category for sales, purchase, and inventory.\n\nOne Odoo database supports multiple UoM categories on a shared product catalog. POS uses the same product UoM definitions as Sales and Inventory. Analytic tags track dimensions; they do not replace unit-of-measure setup.",
    },
  }),
  complexQ({
    id: "oep-115",
    module: "project",
    text: {
      en: "A billable support ticket should auto-create a project task when confirmed in Odoo 19. Which linkage enables this?",
      fr: "A billable support ticket should auto-create a project task when confirmed in Odoo 19. Which linkage enables this?",
    },
    correct: {
      en: "Helpdesk team/track settings",
      fr: "Helpdesk team/track settings",
    },
    distractors: [
      {
        en: "Inventory reordering rule on the ticket priority field",
        fr: "Inventory règle de réapprovisionnement on the ticket priority field",
      },
      {
        en: "Vendor three-way matching on helpdesk SLA timers",
        fr: "Vendor three-way matching on helpdesk SLA timers",
      },
      {
        en: "POS restaurant course management on table orders",
        fr: "POS restaurant course management on table orders",
      },
    ],
    explanation: {
      en: "Helpdesk can be configured to create project tasks (and timesheets) from tickets, tying support work to project profitability and billing. This is a standard Enterprise integration tested on the functional exam.\n\nReordering rules replenish stock; they do not spawn helpdesk project tasks. Three-way matching validates vendor bills against PO/receipts, not ticket SLAs. Restaurant course management sequences kitchen meals, not helpdesk projects.",
      fr: "Helpdesk can be configured to create project tasks (and feuille de temps) from tickets, tying support work to project profitability and billing. This is a standard Enterprise integration tested on the functional exam.\n\nrègle de réapprovisionnement replenish stock; they do not spawn helpdesk project tasks. Three-way matching validates facture fournisseur against PO/receipts, not ticket SLAs. Restaurant course management sequences kitchen meals, not helpdesk projects.",
    },
  }),
  complexQ({
    id: "oep-116",
    module: "project",
    text: {
      en: "Project managers compare planned hours on tasks against timesheet hours logged in Odoo 19. Which view highlights the gap?",
      fr: "Project managers compare planned hours on tasks against feuille de temps hours logged in Odoo 19. Which view highlights the gap?",
    },
    correct: {
      en: "Project profitability / planned vs actual reporting on tasks and timesheets",
      fr: "Project profitability / planned vs actual reporting on tasks and feuille de temps",
    },
    distractors: [
      {
        en: "Aged receivable buckets by customer overdue days (not applicable here)",
        fr: "Aged receivable buckets by customer overdue days (not applicable here)",
      },
      {
        en: "POS session cash difference report by payment method (not applicable here)",
        fr: "POS session cash difference report by payment method (not applicable here)",
      },
      {
        en: "Tax grid report mapping to statutory return boxes (not applicable here)",
        fr: "taxe grid report mapping to statutory return boxes (not applicable here)",
      },
    ],
    explanation: {
      en: "Project reporting compares allocated/planned hours on tasks to timesheet entries actually logged. Variance feeds utilization and profitability analysis alongside billed amounts.\n\nAged receivable tracks customer balances, not project hour variance. POS cash difference reconciles registers, not project planning hours. Tax grids populate VAT returns, unrelated to project hour tracking.",
      fr: "Project reporting compares allocated/planned hours on tasks to feuille de temps entries actually logged. Variance feeds utilization and profitability analysis alongside billed amounts.\n\nAged receivable tracks customer balances, not project hour variance. POS cash difference reconciles registers, not project planning hours. taxe grids populate VAT returns, unrelated to project hour tracking.",
    },
  }),
  complexQ({
    id: "oep-117",
    module: "project",
    text: {
      en: "A service product is configured to create a project and task on sales order confirmation in Odoo 19. Which product setting drives this?",
      fr: "A service product is configured to create a project and task on commande client confirmation in Odoo 19. Which product setting drives this?",
    },
    correct: {
      en: "Service tracking: Create a task in an existing project or new project",
      fr: "Service tracking: Create a task in an existing project or new project",
    },
    distractors: [
      {
        en: "Inventory route Dropship on the product category (not applicable here)",
        fr: "Inventory route Dropship on the product category (not applicable here)",
      },
      {
        en: "BoM type Kit on the product template (not applicable here)",
        fr: "NdM type Kit on the product template (not applicable here)",
      },
      {
        en: "POS config payment method outstanding account (not applicable here)",
        fr: "POS config payment method outstanding account (not applicable here)",
      },
    ],
    explanation: {
      en: "On service products, Service Tracking defines whether confirming an SO creates a project, a task, or only timesheet entries. This links Sales to Project delivery automatically.\n\nDropship routes vendor-to-customer fulfillment, not project task creation. Kit BoMs explode components on deliveries, not service project tasks. POS payment methods handle register tenders, not SO service tracking.",
      fr: "On service products, Service Tracking defines whether confirming an SO creates a project, a task, or only feuille de temps entries. This links Sales to Project delivery automatically.\n\nDropship routes vendor-to-customer fulfillment, not project task creation. Kit BoMs explode components on deliveries, not service project tasks. POS payment methods handle register tenders, not SO service tracking.",
    },
  }),
  complexQ({
    id: "oep-118",
    module: "pos",
    text: {
      en: "A retailer enables loyalty points redeemable on future POS orders in Odoo 19. Where is this configured?",
      fr: "A retailer enables loyalty points redeemable on future POS orders in Odoo 19. Where is this configured?",
    },
    correct: {
      en: "POS > Configuration > Loyalty Programs with rules and rewards",
      fr: "POS > Configuration > Loyalty Programs with rules and rewards",
    },
    distractors: [
      {
        en: "Purchase > Vendor pricelist minimum quantity tiers (not applicable here)",
        fr: "Purchase > Vendor liste de prix minimum quantity tiers (not applicable here)",
      },
      {
        en: "Accounting > Asset models for depreciation schedules (not applicable here)",
        fr: "Accounting > Asset models for depreciation schedules (not applicable here)",
      },
      {
        en: "MRP > Work center capacity calendars only (not applicable here)",
        fr: "MRP > poste de charge capacity calendars only (not applicable here)",
      },
    ],
    explanation: {
      en: "POS Loyalty Programs define accrual rules (per order, per product) and rewards (discount, free product, points). Programs attach to POS configs and can integrate with eCommerce loyalty in omnichannel setups.\n\nVendor pricelists negotiate purchase pricing, not customer loyalty points. Asset models post depreciation entries, unrelated to POS loyalty. Work center calendars schedule manufacturing capacity, not retail loyalty.",
      fr: "POS Loyalty Programs define accrual rules (per order, per product) and rewards (discount, free product, points). Programs attach to POS configs and can integrate with eCommerce loyalty in omnichannel setups.\n\nVendor liste de prix negotiate purchase pricing, not customer loyalty points. Asset models post depreciation entries, unrelated to POS loyalty. poste de charge calendars schedule manufacturing capacity, not retail loyalty.",
    },
  }),
  complexQ({
    id: "oep-119",
    module: "pos",
    text: {
      en: "A customer pays a café bill with cash and card on one Odoo 19 POS order. Which feature supports this?",
      fr: "A customer pays a café bill with cash and card on one Odoo 19 POS order. Which feature supports this?",
    },
    correct: {
      en: "Split payment / multiple payment methods on the same order",
      fr: "Split payment / multiple payment methods on the same order",
    },
    distractors: [
      {
        en: "Single payment method locked per POS config session (not applicable here)",
        fr: "Single payment method locked per POS config session (not applicable here)",
      },
      {
        en: "Vendor bill three-way matching on the receipt (not applicable here)",
        fr: "facture fournisseur three-way matching on the receipt (not applicable here)",
      },
      {
        en: "Manufacturing order component consumption only (not applicable here)",
        fr: "ordre de fabrication component consumption only (not applicable here)",
      },
    ],
    explanation: {
      en: "POS allows multiple payments on one order (split tender). Each line posts to its payment method/journal while the order total is fully paid before validation.\n\nPOS configs can enable several payment methods; split tender is supported. Three-way matching is an accounts payable control, not POS checkout. MO component consumption is manufacturing inventory, not split POS payment.",
      fr: "POS allows multiple payments on one order (split tender). Each line posts to its payment method/journal while the order total is fully paid before validation.\n\nPOS configs can enable several payment methods; split tender is supported. Three-way matching is an accounts payable control, not POS checkout. MO component consumption is manufacturing inventory, not split POS payment.",
    },
  }),
  complexQ({
    id: "oep-120",
    module: "purchases",
    text: {
      en: "A buyer should be billed for received quantities only, not the full PO amount ordered. Which Purchase setting controls this in Odoo 19?",
      fr: "A buyer should be billed for received quantities only, not the full PO amount ordered. Which Purchase setting controls this in Odoo 19?",
    },
    correct: {
      en: "Bill Control: Received quantities vs Ordered quantities on the product/category",
      fr: "Bill Control: Received quantities vs Ordered quantities on the product/category",
    },
    distractors: [
      {
        en: "Inventory valuation FIFO vs AVCO on the warehouse (not applicable here)",
        fr: "Inventory valuation FIFO vs AVCO on the entrepôt (not applicable here)",
      },
      {
        en: "CRM pipeline stage probability percentages (not applicable here)",
        fr: "CRM pipeline stage probability percentages (not applicable here)",
      },
      {
        en: "Website snippet animation on the homepage hero block (not applicable here)",
        fr: "Website snippet animation on the homepage hero block (not applicable here)",
      },
    ],
    explanation: {
      en: "Bill Control on products/categories determines whether vendor bills default to ordered or received quantities. Received is common when payment follows physical receipt and three-way matching.\n\nValuation methods affect inventory cost, not vendor bill quantity basis. Pipeline probability forecasts deals, not purchase billing policy. Website snippets control page design, not purchase bill control.",
      fr: "Bill Control on products/categories determines whether facture fournisseur default to ordered or received quantities. Received is common when payment follows physical receipt and three-way matching.\n\nValuation methods affect inventory cost, not facture fournisseur quantity basis. Pipeline probability forecasts deals, not purchase billing policy. Website snippets control page design, not purchase bill control.",
    },
  }),
  complexQ({
    id: "oep-121",
    module: "purchases",
    text: {
      en: "A company negotiates a year-long unit price with one vendor for recurring purchases in Odoo 19. Which Purchase object fits this?",
      fr: "A company negotiates a year-long unit price with one vendor for recurring purchases in Odoo 19. Which Purchase object fits this?",
    },
    correct: {
      en: "Blanket Purchase Agreement with agreed terms and call-off POs",
      fr: "Blanket Purchase Agreement with agreed terms and call-off POs",
    },
    distractors: [
      {
        en: "Kit BoM exploding components on customer deliveries (not applicable here)",
        fr: "Kit NdM exploding components on customer deliveries (not applicable here)",
      },
      {
        en: "POS loyalty reward granting discount points (not applicable here)",
        fr: "POS loyalty reward granting discount points (not applicable here)",
      },
      {
        en: "Survey matrix question with row and column labels (not applicable here)",
        fr: "Survey matrix question with row and column labels (not applicable here)",
      },
    ],
    explanation: {
      en: "Blanket Orders (Purchase Agreements type Blanket) set negotiated terms, validity, and pricing with a vendor. Users create call-off POs against the blanket until quantity or date limits are reached.\n\nKit BoMs bundle sellable products; they are not vendor blanket contracts. POS loyalty manages customer rewards, not vendor pricing agreements. Survey matrix questions collect responses, not purchase contract terms.",
      fr: "Blanket Orders (Purchase Agreements type Blanket) set negotiated terms, validity, and pricing with a vendor. Users create call-off POs against the blanket until quantity or date limits are reached.\n\nKit BoMs bundle sellable products; they are not vendor blanket contracts. POS loyalty manages customer rewards, not vendor pricing agreements. Survey matrix questions collect responses, not purchase contract terms.",
    },
  }),
  complexQ({
    id: "oep-122",
    module: "inventory",
    text: {
      en: "Fast-moving SKUs should land in aisle bins automatically on receipt in Odoo 19. Which feature directs putaway?",
      fr: "Fast-moving SKUs should land in aisle bins automatically on receipt in Odoo 19. Which feature directs putaway?",
    },
    correct: {
      en: "Putaway rules mapping product/category to destination sub-locations",
      fr: "Putaway rules mapping product/category to destination sub-locations",
    },
    distractors: [
      {
        en: "Fiscal positions remapping tax accounts by customer country (not applicable here)",
        fr: "position fiscale remapping taxe accounts by customer country (not applicable here)",
      },
      {
        en: "Email Marketing A/B tests on campaign subject lines (not applicable here)",
        fr: "Email Marketing A/B tests on campaign subject lines (not applicable here)",
      },
      {
        en: "HR appraisal templates for annual performance reviews (not applicable here)",
        fr: "HR appraisal templates for annual performance reviews (not applicable here)",
      },
    ],
    explanation: {
      en: "Putaway rules (stock.putaway.rule) assign incoming products to specific sub-locations based on product, category, or storage category. They require Storage Locations enabled on the warehouse.\n\nFiscal positions change taxes/accounts, not physical bin putaway. Email A/B tests optimize campaigns, not warehouse slotting. Appraisal templates evaluate employees, not inventory locations.",
      fr: "Putaway rules (stock.putaway.rule) assign incoming products to specific sub-locations based on product, category, or storage category. They require Storage Locations enabled on the entrepôt.\n\nposition fiscale change taxes/accounts, not physical bin putaway. Email A/B tests optimize campaigns, not entrepôt slotting. Appraisal templates evaluate employé, not inventory locations.",
    },
  }),
  complexQ({
    id: "oep-123",
    module: "inventory",
    text: {
      en: "Warehouse A runs low on stock and should pull replenishment from Warehouse B in Odoo 19. What enables this?",
      fr: "entrepôt A runs low on stock and should pull replenishment from entrepôt B in Odoo 19. What enables this?",
    },
    correct: {
      en: "Resupply from another warehouse configured on the warehouse record",
      fr: "Resupply from another entrepôt configured on the entrepôt record",
    },
    distractors: [
      {
        en: "POS split payment across cash and card on one receipt (not applicable here)",
        fr: "POS split payment across cash and card on one receipt (not applicable here)",
      },
      {
        en: "Deferred revenue schedule on a SaaS subscription invoice (not applicable here)",
        fr: "Deferred revenue schedule on a SaaS subscription facture (not applicable here)",
      },
      {
        en: "Knowledge article @mentions in internal playbooks (not applicable here)",
        fr: "Knowledge article @mentions in internal playbooks (not applicable here)",
      },
    ],
    explanation: {
      en: "Multi-warehouse setups can define resupply routes between warehouses. Reordering rules on the destination warehouse can trigger inter-warehouse transfers or procurements from the supplying warehouse.\n\nSplit POS payments settle customer tenders, not inter-warehouse replenishment. Deferred revenue spreads recognition over time, unrelated to stock resupply. Knowledge mentions collaborate on docs; they do not move inventory.",
      fr: "Multi-entrepôt setups can define resupply routes between warehouses. règle de réapprovisionnement on the destination entrepôt can trigger inter-entrepôt transfers or procurements from the supplying entrepôt.\n\nSplit POS payments settle customer tenders, not inter-entrepôt replenishment. Deferred revenue spreads recognition over time, unrelated to stock resupply. Knowledge mentions collaborate on docs; they do not move inventory.",
    },
  }),
  complexQ({
    id: "oep-124",
    module: "mrp",
    text: {
      en: "A planner uses Odoo 19 to forecast finished goods demand and propose manufacturing/purchase orders. Which app supports this?",
      fr: "A planner uses Odoo 19 to forecast finished goods demand and propose manufacturing/purchase orders. Which app supports this?",
    },
    correct: {
      en: "Master Production Schedule (MPS) in Manufacturing planning views",
      fr: "Master Production Schedule (MPS) in Manufacturing planning views",
    },
    distractors: [
      {
        en: "Email Marketing mass mailing A/B winner selection (not applicable here)",
        fr: "Email Marketing mass mailing A/B winner selection (not applicable here)",
      },
      {
        en: "Website abandoned cart recovery automation emails (not applicable here)",
        fr: "Website abandoned cart recovery automation emails (not applicable here)",
      },
      {
        en: "Sign document signature request on vendor contracts (not applicable here)",
        fr: "Sign document signature request on vendor contracts (not applicable here)",
      },
    ],
    explanation: {
      en: "MPS lets planners enter demand forecasts by product/period and generates proposed MOs/RFQs after comparing forecast, on-hand, and incoming supply. It is part of the Manufacturing planning toolkit on the exam.\n\nEmail A/B tests optimize campaigns, not production/material planning. Abandoned cart emails recover eCommerce sales, not MRP forecasts. Sign collects signatures; it does not schedule manufacturing proposals.",
      fr: "MPS lets planners enter demand forecasts by product/period and generates proposed MOs/RFQs after comparing forecast, on-hand, and incoming supply. It is part of the Manufacturing planning toolkit on the exam.\n\nEmail A/B tests optimize campaigns, not production/material planning. Abandoned cart emails recover eCommerce sales, not MRP forecasts. Sign collects signatures; it does not schedule manufacturing proposals.",
    },
  }),
  complexQ({
    id: "oep-125",
    module: "accounting",
    text: {
      en: "A SaaS vendor must spread annual subscription revenue across 12 months in Odoo 19. Which Accounting feature handles this?",
      fr: "A SaaS vendor must spread annual subscription revenue across 12 months in Odoo 19. Which Accounting feature handles this?",
    },
    correct: {
      en: "Deferred revenue models generating periodic recognition entries",
      fr: "Deferred revenue models generating periodic recognition entries",
    },
    distractors: [
      {
        en: "POS cash over/short difference account on session close (not applicable here)",
        fr: "POS cash over/short difference account on session close (not applicable here)",
      },
      {
        en: "Inventory consignment owner field on stock moves (not applicable here)",
        fr: "Inventory consignment owner field on stock moves (not applicable here)",
      },
      {
        en: "CRM lead assignment round-robin on sales teams (not applicable here)",
        fr: "CRM piste assignment round-robin on sales teams (not applicable here)",
      },
    ],
    explanation: {
      en: "Deferred Revenue (and Deferred Expense) models create an initial balance sheet entry on invoice and auto-post periodic recognition entries to income over the defined duration.\n\nPOS cash differences reconcile registers, not subscription revenue timing. Consignment tracks vendor-owned stock, not revenue deferral schedules. Lead assignment distributes CRM records, unrelated to deferred revenue.",
      fr: "Deferred Revenue (and Deferred note de frais) models create an initial balance sheet entry on facture and auto-post periodic recognition entries to income over the defined duration.\n\nPOS cash differences reconcile registers, not subscription revenue timing. Consignment tracks vendor-owned stock, not revenue deferral schedules. piste assignment distributes CRM records, unrelated to deferred revenue.",
    },
  }),
  complexQ({
    id: "oep-126",
    module: "hr",
    text: {
      en: "HR wants structured annual reviews with goals and manager feedback in Odoo 19. Which module provides this?",
      fr: "HR wants structured annual reviews with goals and manager feedback in Odoo 19. Which module provides this?",
    },
    correct: {
      en: "Appraisals with templates, schedules, and employee/manager surveys",
      fr: "Appraisals with templates, schedules, and employé/manager surveys",
    },
    distractors: [
      {
        en: "Barcode app scanning pickings on the warehouse floor (not applicable here)",
        fr: "Barcode app scanning pickings on the entrepôt floor (not applicable here)",
      },
      {
        en: "Purchase Calls for Tender comparing vendor RFQ responses (not applicable here)",
        fr: "Purchase Calls for Tender comparing vendor RFQ responses (not applicable here)",
      },
      {
        en: "Website SEO metadata fields on product pages (not applicable here)",
        fr: "Website SEO metadata fields on product pages (not applicable here)",
      },
    ],
    explanation: {
      en: "Appraisals lets HR define review cycles, templates, goals, and 360° feedback. Completed appraisals attach to employee records and can trigger follow-up activities.\n\nBarcode operations execute warehouse transfers, not performance reviews. Purchase tenders compare vendor quotes, not employee appraisals. Website SEO fields optimize search snippets, unrelated to HR reviews.",
      fr: "Appraisals lets HR define review cycles, templates, goals, and 360° feedback. Completed appraisals attach to employé records and can trigger follow-up activities.\n\nBarcode operations execute entrepôt transfers, not performance reviews. Purchase tenders compare vendor quotes, not employé appraisals. Website SEO fields optimize search snippets, unrelated to HR reviews.",
    },
  }),
  complexQ({
    id: "oep-127",
    module: "hr",
    text: {
      en: "An employee contract references standard 40-hour weeks with two days off in Odoo 19. Which object defines working hours?",
      fr: "An employé contract references standard 40-hour weeks with two days off in Odoo 19. Which object defines working hours?",
    },
    correct: {
      en: "Working Schedule (resource.calendar) linked on hr.contract",
      fr: "Working Schedule (resource.calendar) linked on hr.contract",
    },
    distractors: [
      {
        en: "POS payment method outstanding receipts account (not applicable here)",
        fr: "POS payment method outstanding receipts account (not applicable here)",
      },
      {
        en: "Stock putaway rule destination sub-location (not applicable here)",
        fr: "Stock putaway rule destination sub-location (not applicable here)",
      },
      {
        en: "Survey passing score percentage threshold (not applicable here)",
        fr: "Survey passing score percentage threshold (not applicable here)",
      },
    ],
    explanation: {
      en: "resource.calendar defines working hours, breaks, and time zones. Contracts link a working schedule used by Attendances, Planning, and Payroll to compute expected vs actual time.\n\nPOS outstanding accounts handle register payments, not employee work hours. Putaway rules direct products to bins, not employee weekly schedules. Survey passing scores grade respondents, unrelated to working time calendars.",
      fr: "resource.calendar defines working hours, breaks, and time zones. Contracts link a working schedule used by Attendances, Planning, and Payroll to compute expected vs actual time.\n\nPOS outstanding accounts handle register payments, not employé work hours. Putaway rules direct products to bins, not employé weekly schedules. Survey passing scores grade respondents, unrelated to working time calendars.",
    },
  }),
  complexQ({
    id: "oep-128",
    module: "studio",
    text: {
      en: "A functional consultant restricts sales users to opportunities in their own country using Odoo 19 security. Which mechanism applies the filter?",
      fr: "A functional consultant restricts sales users to opportunité in their own country using Odoo 19 security. Which mechanism applies the filter?",
    },
    correct: {
      en: "Record rule (ir.rule) domain on crm.lead scoped to the user group",
      fr: "règle d'enregistrement (ir.rule) domain on crm.piste scoped to the user group",
    },
    distractors: [
      {
        en: "Email template QWeb placeholder replacing merge fields (not applicable here)",
        fr: "Email template QWeb placeholder replacing merge fields (not applicable here)",
      },
      {
        en: "Inventory AVCO average cost recalculation on receipts (not applicable here)",
        fr: "Inventory AVCO average cost recalculation on receipts (not applicable here)",
      },
      {
        en: "Website snippet drag-and-drop block layout editor (not applicable here)",
        fr: "Website snippet drag-and-drop block layout editor (not applicable here)",
      },
    ],
    explanation: {
      en: "Record rules add domain filters per model and security group (e.g., country_id = user country). Combined with access rights, they constrain which records users can read or write.\n\nEmail templates format outbound messages; they do not enforce record-level security. AVCO valuation recalculates inventory cost, unrelated to CRM record access. Website snippets design pages; they do not filter CRM opportunity records.",
      fr: "règle d'enregistrement add domain filters per model and security group (e.g., country_id = user country). Combined with droit d'accès, they constrain which records users can read or write.\n\nEmail templates format outbound messages; they do not enforce record-level security. AVCO valuation recalculates inventory cost, unrelated to CRM record access. Website snippets design pages; they do not filter CRM opportunité records.",
    },
  }),
  complexQ({
    id: "oep-129",
    module: "studio",
    text: {
      en: "A consultant must inspect model fields and XML views while troubleshooting in Odoo 19. What must be enabled first?",
      fr: "A consultant must inspect model fields and XML views while troubleshooting in Odoo 19. What must be enabled first?",
    },
    correct: {
      en: "Developer mode (debug assets) from Settings or the user menu",
      fr: "Developer mode (debug assets) from Settings or the user menu",
    },
    distractors: [
      {
        en: "POS restaurant floor plan and table management (not applicable here)",
        fr: "POS restaurant floor plan and table management (not applicable here)",
      },
      {
        en: "Manufacturing subcontracting resupply route on the BoM (not applicable here)",
        fr: "Manufacturing subcontracting resupply route on the NdM (not applicable here)",
      },
      {
        en: "Survey matrix question with weighted scoring columns (not applicable here)",
        fr: "Survey matrix question with weighted scoring columns (not applicable here)",
      },
    ],
    explanation: {
      en: "Developer mode exposes technical menus, view metadata, field names, and automated action definitions. It is required for advanced configuration and is part of the Studio/customization domain on the exam.\n\nRestaurant floor plans configure table service POS, not technical debugging tools. Subcontracting routes vendor manufacturing; they do not enable developer menus. Survey matrix questions collect responses, unrelated to debug mode.",
      fr: "Developer mode exposes technical menus, view metadata, field names, and action automatisée definitions. It is required for advanced configuration and is part of the Studio/customization domain on the exam.\n\nRestaurant floor plans configure table service POS, not technical debugging tools. Subcontracting routes vendor manufacturing; they do not enable developer menus. Survey matrix questions collect responses, unrelated to debug mode.",
    },
  }),
  complexQ({
    id: "oep-130",
    module: "studio",
    text: {
      en: "When importing partners from a legacy system into Odoo 19, which column preserves relationships for later updates?",
      fr: "When importing partners from a legacy system into Odoo 19, which column preserves relationships for later updates?",
    },
    correct: {
      en: "External ID (id column) using module.name syntax in the import file",
      fr: "External ID (id column) using module.name syntax in the import file",
    },
    distractors: [
      {
        en: "POS session name generated at register opening (not applicable here)",
        fr: "POS session name generated at register opening (not applicable here)",
      },
      {
        en: "Tax grid code on the statutory VAT return form (not applicable here)",
        fr: "taxe grid code on the statutory VAT return form (not applicable here)",
      },
      {
        en: "Work center OEE efficiency percentage field (not applicable here)",
        fr: "poste de charge OEE efficiency percentage field (not applicable here)",
      },
    ],
    explanation: {
      en: "Odoo imports use External IDs (XML IDs) in the id column (e.g., __import__.legacy_partner_001) so re-imports update the same res.partner instead of creating duplicates. This is standard go-live/data migration practice.\n\nPOS session names identify register shifts, not import record keys. Tax grid codes map VAT boxes, not CSV import identity for partners. Work center OEE tracks equipment performance, unrelated to data import IDs.",
      fr: "Odoo imports use External IDs (XML IDs) in the id column (e.g., __import__.legacy_partner_001) so re-imports update the same res.partner instead of creating duplicates. This is standard go-live/data migration practice.\n\nPOS session names identify register shifts, not import record keys. taxe grid codes map VAT boxes, not CSV import identity for partners. poste de charge OEE tracks equipment performance, unrelated to data import IDs.",
    },
  }),
  complexQ({
    id: "oep-131",
    module: "crm",
    text: {
      en: "A CRM manager wants lost reasons captured when an opportunity is marked Lost in Odoo 19. Where is this configured?",
      fr: "A CRM manager wants lost reasons captured when an opportunité is marked Lost in Odoo 19. Where is this configured?",
    },
    correct: {
      en: "CRM > Configuration > Lost Reasons, then select one when marking Lost",
      fr: "CRM > Configuration > Lost Reasons, then select one when marking Lost",
    },
    distractors: [
      {
        en: "Inventory > Routes > Make-to-Order on the opportunity product",
        fr: "Inventory > Routes > Make-to-Order on the opportunité product",
      },
      {
        en: "Accounting > Lock Dates on the company fiscal period settings",
        fr: "Accounting > Lock Dates on the company fiscal period settings",
      },
      {
        en: "POS > Payment Methods outstanding receipts account mapping",
        fr: "POS > Payment Methods outstanding receipts account mapping",
      },
    ],
    explanation: {
      en: "Lost Reasons are maintained under CRM configuration. When a salesperson marks an opportunity Lost, they pick a reason, enabling pipeline analytics on why deals fail.\n\nMTO routes drive procurement; they do not record why a CRM deal was lost. Lock dates prevent editing past accounting entries, unrelated to CRM loss reasons. POS payment methods handle register tenders, not opportunity loss tracking.",
      fr: "Lost Reasons are maintained under CRM configuration. When a salesperson marks an opportunité Lost, they pick a reason, enabling pipeline analytics on why deals fail.\n\nMTO routes drive procurement; they do not record why a CRM deal was lost. Lock dates prevent editing past accounting entries, unrelated to CRM loss reasons. POS payment methods handle register tenders, not opportunité loss tracking.",
    },
  }),
  complexQ({
    id: "oep-132",
    module: "crm",
    text: {
      en: "An opportunity reaches the Won stage in Odoo 19 CRM. What is the typical next step to bill the customer?",
      fr: "An opportunité reaches the Won stage in Odoo 19 CRM. What is the typical next step to bill the customer?",
    },
    correct: {
      en: "Create a quotation or sales order from the opportunity and confirm invoicing flow",
      fr: "Create a devis or commande client from the opportunité and confirm invoicing flow",
    },
    distractors: [
      {
        en: "Post a vendor bill directly from the opportunity kanban card",
        fr: "Post a facture fournisseur directly from the opportunité kanban card",
      },
      {
        en: "Run the MRP scheduler to replenish components from the pipeline stage",
        fr: "Run the MRP scheduler to replenish components from the pipeline stage",
      },
      {
        en: "Open a POS session and scan the opportunity barcode at checkout",
        fr: "Open a POS session and scan the opportunité barcode at checkout",
      },
    ],
    explanation: {
      en: "Winning an opportunity usually converts to a quotation or sales order (New Quotation button). From the confirmed SO, delivery and customer invoicing follow the product invoicing policy.\n\nVendor bills are accounts payable documents, not created from won CRM deals. The MRP scheduler processes stock rules, not customer billing from CRM wins. POS sessions sell at retail registers; CRM opportunities are not POS transactions.",
      fr: "Winning an opportunité usually converts to a devis or commande client (New devis button). From the confirmed SO, delivery and customer invoicing follow the product invoicing policy.\n\nfacture fournisseur are accounts payable documents, not created from won CRM deals. The MRP scheduler processes stock rules, not customer billing from CRM wins. POS sessions sell at retail registers; CRM opportunité are not POS transactions.",
    },
  }),
  complexQ({
    id: "oep-133",
    module: "crm",
    text: {
      en: "A sales team uses predictive lead scoring in Odoo 19 CRM. What data primarily feeds the score?",
      fr: "A sales team uses predictive piste scoring in Odoo 19 CRM. What data primarily feeds the score?",
    },
    correct: {
      en: "Historical won/lost patterns and lead field values used by the scoring model",
      fr: "Historical won/lost patterns and piste field values used by the scoring model",
    },
    distractors: [
      {
        en: "Warehouse on-hand quantity from stock quants per product variant",
        fr: "entrepôt on-hand quantity from stock quants per product variant",
      },
      {
        en: "Bank statement reconciliation model regex rules on memo text",
        fr: "Bank statement modèle de rapprochement regex rules on memo text",
      },
      {
        en: "Manufacturing work center OEE downtime percentages per shift",
        fr: "Manufacturing poste de charge OEE downtime percentages per shift",
      },
    ],
    explanation: {
      en: "Predictive lead scoring (where enabled) learns from past opportunities—fields like country, industry, source, and stage outcomes—to rank new leads by likelihood to convert.\n\nStock on-hand drives inventory replenishment, not CRM predictive lead scores. Reconciliation models match bank lines, unrelated to lead scoring algorithms. Work center OEE tracks equipment efficiency, not CRM lead probability.",
      fr: "Predictive piste scoring (where enabled) learns from past opportunité—fields like country, industry, source, and stage outcomes—to rank new piste by likelihood to convert.\n\nStock on-hand drives inventory replenishment, not CRM predictive piste scores. modèle de rapprochement match bank lines, unrelated to piste scoring algorithms. poste de charge OEE tracks equipment efficiency, not CRM piste probability.",
    },
  }),
];
