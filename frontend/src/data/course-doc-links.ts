import { CertificationModuleId } from "@/types/exam";

export interface CourseDocLink {
  label: { en: string; fr: string };
  href: string;
}

/**
 * Official Odoo 19 documentation entry points per certification module.
 * Source: https://www.odoo.com/documentation/19.0
 */
export const COURSE_DOC_LINKS: Record<
  CertificationModuleId,
  CourseDocLink[]
> = {
  accounting: [
    {
      label: { en: "Accounting & Invoicing", fr: "Comptabilité & Facturation" },
      href: "https://www.odoo.com/documentation/19.0/applications/finance/accounting.html",
    },
    {
      label: { en: "Get started / cheat sheet", fr: "Prise en main / aide-mémoire" },
      href: "https://www.odoo.com/documentation/19.0/applications/finance/accounting/get_started.html",
    },
    {
      label: { en: "Bank reconciliation", fr: "Rapprochement bancaire" },
      href: "https://www.odoo.com/documentation/19.0/applications/finance/accounting/bank/reconciliation.html",
    },
    {
      label: { en: "Taxes", fr: "Taxes" },
      href: "https://www.odoo.com/documentation/19.0/applications/finance/accounting/taxes.html",
    },
    {
      label: { en: "Fiscal positions", fr: "Positions fiscales" },
      href: "https://www.odoo.com/documentation/19.0/applications/finance/accounting/taxes/fiscal_positions.html",
    },
    {
      label: { en: "Assets", fr: "Immobilisations" },
      href: "https://www.odoo.com/documentation/19.0/applications/finance/accounting/vendor_bills/assets.html",
    },
    {
      label: { en: "Deferred revenues", fr: "Produits constatés d'avance" },
      href: "https://www.odoo.com/documentation/19.0/applications/finance/accounting/customer_invoices/deferred_revenues.html",
    },
    {
      label: { en: "Inventory valuation (Accounting)", fr: "Valorisation stock (Compta)" },
      href: "https://www.odoo.com/documentation/19.0/applications/finance/accounting/get_started/inventory_valuation.html",
    },
  ],
  crm: [
    {
      label: { en: "CRM", fr: "CRM" },
      href: "https://www.odoo.com/documentation/19.0/applications/sales/crm.html",
    },
    {
      label: { en: "Acquire leads", fr: "Acquérir des pistes" },
      href: "https://www.odoo.com/documentation/19.0/applications/sales/crm/acquire_leads.html",
    },
    {
      label: { en: "Pipeline & opportunities", fr: "Pipeline & opportunités" },
      href: "https://www.odoo.com/documentation/19.0/applications/sales/crm/pipeline.html",
    },
    {
      label: { en: "Activities & activity plans", fr: "Activités & plans d'activités" },
      href: "https://www.odoo.com/documentation/19.0/applications/sales/crm/optimize/utilize_activities.html",
    },
    {
      label: { en: "Lead scoring", fr: "Scoring des pistes" },
      href: "https://www.odoo.com/documentation/19.0/applications/sales/crm/track_leads/lead_scoring.html",
    },
    {
      label: { en: "Marketing attribution", fr: "Attribution marketing" },
      href: "https://www.odoo.com/documentation/19.0/applications/sales/crm/track_leads.html",
    },
  ],
  sales: [
    {
      label: { en: "Sales", fr: "Ventes" },
      href: "https://www.odoo.com/documentation/19.0/applications/sales/sales.html",
    },
    {
      label: { en: "Quotations", fr: "Devis" },
      href: "https://www.odoo.com/documentation/19.0/applications/sales/sales/sales_quotations.html",
    },
    {
      label: { en: "Invoicing", fr: "Facturation" },
      href: "https://www.odoo.com/documentation/19.0/applications/sales/sales/invoicing.html",
    },
    {
      label: { en: "Products & prices", fr: "Produits & prix" },
      href: "https://www.odoo.com/documentation/19.0/applications/sales/sales/products_prices.html",
    },
    {
      label: { en: "Pricelists", fr: "Listes de prix" },
      href: "https://www.odoo.com/documentation/19.0/applications/sales/sales/products_prices/prices/pricing.html",
    },
    {
      label: { en: "Down payments", fr: "Acomptes" },
      href: "https://www.odoo.com/documentation/19.0/applications/sales/sales/invoicing/down_payment.html",
    },
  ],
  purchases: [
    {
      label: { en: "Purchase", fr: "Achats" },
      href: "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/purchase.html",
    },
    {
      label: { en: "Manage deals", fr: "Gérer les affaires" },
      href: "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/purchase/manage_deals.html",
    },
    {
      label: { en: "Products", fr: "Produits" },
      href: "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/purchase/products.html",
    },
    {
      label: { en: "Advanced", fr: "Fonctions avancées" },
      href: "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/purchase/advanced.html",
    },
  ],
  inventory: [
    {
      label: { en: "Inventory", fr: "Inventaire" },
      href: "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory.html",
    },
    {
      label: { en: "Product management", fr: "Gestion des produits" },
      href: "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/product_management.html",
    },
    {
      label: { en: "Warehouses & locations", fr: "Entrepôts & emplacements" },
      href: "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/warehouses_storage.html",
    },
    {
      label: {
        en: "Shipping & receiving / routes",
        fr: "Expéditions & réceptions / routes",
      },
      href: "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/shipping_receiving.html",
    },
    {
      label: { en: "Inventory valuation", fr: "Valorisation des stocks" },
      href: "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/inventory_valuation.html",
    },
  ],
  mrp: [
    {
      label: { en: "Manufacturing", fr: "Fabrication" },
      href: "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing.html",
    },
    {
      label: { en: "Basic setup / BoMs", fr: "Config de base / NdM" },
      href: "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing/basic_setup.html",
    },
    {
      label: { en: "Advanced configuration", fr: "Configuration avancée" },
      href: "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing/advanced_configuration.html",
    },
    {
      label: { en: "Workflows", fr: "Flux de travail" },
      href: "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing/workflows.html",
    },
    {
      label: { en: "Subcontracting", fr: "Sous-traitance" },
      href: "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing/subcontracting.html",
    },
  ],
  project: [
    {
      label: { en: "Project", fr: "Projet" },
      href: "https://www.odoo.com/documentation/19.0/applications/services/project.html",
    },
    {
      label: { en: "Project management", fr: "Gestion de projet" },
      href: "https://www.odoo.com/documentation/19.0/applications/services/project/project_management.html",
    },
    {
      label: { en: "Tasks", fr: "Tâches" },
      href: "https://www.odoo.com/documentation/19.0/applications/services/project/tasks.html",
    },
    {
      label: { en: "Profitability", fr: "Rentabilité" },
      href: "https://www.odoo.com/documentation/19.0/applications/services/project/project_management/project_profitability.html",
    },
  ],
  timesheet: [
    {
      label: { en: "Timesheets", fr: "Feuilles de temps" },
      href: "https://www.odoo.com/documentation/19.0/applications/services/timesheets.html",
    },
    {
      label: { en: "Timesheet billing rates", fr: "Taux de facturation" },
      href: "https://www.odoo.com/documentation/19.0/applications/services/timesheets/billing_rates.html",
    },
    {
      label: { en: "Time off entries", fr: "Entrées de congés" },
      href: "https://www.odoo.com/documentation/19.0/applications/services/timesheets/time_off.html",
    },
  ],
  hr: [
    {
      label: { en: "Employees", fr: "Employés" },
      href: "https://www.odoo.com/documentation/19.0/applications/hr/employees.html",
    },
    {
      label: { en: "Recruitment", fr: "Recrutement" },
      href: "https://www.odoo.com/documentation/19.0/applications/hr/recruitment.html",
    },
    {
      label: { en: "Time Off", fr: "Congés" },
      href: "https://www.odoo.com/documentation/19.0/applications/hr/time_off.html",
    },
    {
      label: { en: "Appraisals", fr: "Évaluations" },
      href: "https://www.odoo.com/documentation/19.0/applications/hr/appraisals.html",
    },
    {
      label: { en: "Expenses", fr: "Notes de frais" },
      href: "https://www.odoo.com/documentation/19.0/applications/finance/expenses.html",
    },
  ],
  website: [
    {
      label: { en: "Website", fr: "Site Web" },
      href: "https://www.odoo.com/documentation/19.0/applications/websites/website.html",
    },
    {
      label: { en: "Web design", fr: "Design web" },
      href: "https://www.odoo.com/documentation/19.0/applications/websites/website/web_design.html",
    },
    {
      label: { en: "Pages & configuration", fr: "Pages & configuration" },
      href: "https://www.odoo.com/documentation/19.0/applications/websites/website/pages.html",
    },
    {
      label: { en: "Configuration / SEO", fr: "Configuration / SEO" },
      href: "https://www.odoo.com/documentation/19.0/applications/websites/website/configuration.html",
    },
  ],
  ecommerce: [
    {
      label: { en: "eCommerce", fr: "eCommerce" },
      href: "https://www.odoo.com/documentation/19.0/applications/websites/ecommerce.html",
    },
    {
      label: { en: "Products", fr: "Produits" },
      href: "https://www.odoo.com/documentation/19.0/applications/websites/ecommerce/products.html",
    },
    {
      label: { en: "Checkout & payment", fr: "Checkout & paiement" },
      href: "https://www.odoo.com/documentation/19.0/applications/websites/ecommerce/checkout.html",
    },
    {
      label: { en: "Shipping", fr: "Livraison" },
      href: "https://www.odoo.com/documentation/19.0/applications/websites/ecommerce/shipping.html",
    },
  ],
  marketing: [
    {
      label: { en: "Email Marketing", fr: "Email Marketing" },
      href: "https://www.odoo.com/documentation/19.0/applications/marketing/email_marketing.html",
    },
    {
      label: { en: "Marketing Automation", fr: "Marketing Automation" },
      href: "https://www.odoo.com/documentation/19.0/applications/marketing/marketing_automation.html",
    },
    {
      label: { en: "SMS Marketing", fr: "SMS Marketing" },
      href: "https://www.odoo.com/documentation/19.0/applications/marketing/sms_marketing.html",
    },
    {
      label: { en: "Social Marketing", fr: "Social Marketing" },
      href: "https://www.odoo.com/documentation/19.0/applications/marketing/social_marketing.html",
    },
  ],
  survey: [
    {
      label: { en: "Surveys", fr: "Sondages" },
      href: "https://www.odoo.com/documentation/19.0/applications/marketing/surveys.html",
    },
    {
      label: { en: "Create surveys", fr: "Créer des sondages" },
      href: "https://www.odoo.com/documentation/19.0/applications/marketing/surveys/create.html",
    },
    {
      label: { en: "Scoring & certification", fr: "Scoring & certification" },
      href: "https://www.odoo.com/documentation/19.0/applications/marketing/surveys/scoring.html",
    },
  ],
  pos: [
    {
      label: { en: "Point of Sale", fr: "Point de Vente" },
      href: "https://www.odoo.com/documentation/19.0/applications/sales/point_of_sale.html",
    },
    {
      label: { en: "Configuration", fr: "Configuration" },
      href: "https://www.odoo.com/documentation/19.0/applications/sales/point_of_sale/configuration.html",
    },
    {
      label: { en: "Restaurant", fr: "Restaurant" },
      href: "https://www.odoo.com/documentation/19.0/applications/sales/point_of_sale/restaurant.html",
    },
    {
      label: { en: "Shop / session flow", fr: "Boutique / flux de session" },
      href: "https://www.odoo.com/documentation/19.0/applications/sales/point_of_sale/shop.html",
    },
  ],
  studio: [
    {
      label: { en: "Studio", fr: "Studio" },
      href: "https://www.odoo.com/documentation/19.0/applications/studio.html",
    },
    {
      label: { en: "Fields & models", fr: "Champs & modèles" },
      href: "https://www.odoo.com/documentation/19.0/applications/studio/fields.html",
    },
    {
      label: { en: "Views", fr: "Vues" },
      href: "https://www.odoo.com/documentation/19.0/applications/studio/views.html",
    },
    {
      label: { en: "Automated actions", fr: "Actions automatisées" },
      href: "https://www.odoo.com/documentation/19.0/applications/studio/automated_actions.html",
    },
    {
      label: { en: "Users & access rights", fr: "Utilisateurs & droits d'accès" },
      href: "https://www.odoo.com/documentation/19.0/applications/general/users.html",
    },
  ],
  spreadsheet: [
    {
      label: { en: "Spreadsheets", fr: "Tableurs" },
      href: "https://www.odoo.com/documentation/19.0/applications/productivity/spreadsheet.html",
    },
    {
      label: { en: "Get started", fr: "Prise en main" },
      href: "https://www.odoo.com/documentation/19.0/applications/productivity/spreadsheet/get_started.html",
    },
    {
      label: { en: "Insert pivots / lists", fr: "Insérer pivots / listes" },
      href: "https://www.odoo.com/documentation/19.0/applications/productivity/spreadsheet/insert.html",
    },
  ],
  knowledge: [
    {
      label: { en: "Knowledge", fr: "Knowledge" },
      href: "https://www.odoo.com/documentation/19.0/applications/productivity/knowledge.html",
    },
    {
      label: { en: "Article management", fr: "Gestion des articles" },
      href: "https://www.odoo.com/documentation/19.0/applications/productivity/knowledge/management.html",
    },
  ],
  ai: [
    {
      label: { en: "AI", fr: "IA" },
      href: "https://www.odoo.com/documentation/19.0/applications/productivity/ai.html",
    },
    {
      label: { en: "AI agents", fr: "Agents IA" },
      href: "https://www.odoo.com/documentation/19.0/applications/productivity/ai/agents.html",
    },
    {
      label: { en: "Write & improve text", fr: "Rédiger & améliorer le texte" },
      href: "https://www.odoo.com/documentation/19.0/applications/productivity/ai/improve_text.html",
    },
  ],
};
