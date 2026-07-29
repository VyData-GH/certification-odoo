import { CertificationModuleId } from "@/types/exam";

/** Longer study paragraphs — exam-oriented, readable without opening Odoo. */
export interface StudyBlock {
  title: { en: string; fr: string };
  body: { en: string; fr: string };
}

export const COURSE_STUDY_BLOCKS: Record<
  CertificationModuleId,
  StudyBlock[]
> = {
  accounting: [
    {
      title: {
        en: "Documents & technical models",
        fr: "Documents & modèles techniques",
      },
      body: {
        en: "Customer invoices, vendor bills, credit notes, payments and miscellaneous entries are all account.move records; lines live in account.move.line. The chart of accounts is account.account. Journals (account.journal) define sequences, default debit/credit accounts and which document types they accept. Memorize move_type: out_invoice, in_invoice, out_refund, in_refund, entry. Draft → Posted → (optional) Reset to draft if the period is unlocked. Analytic accounts / plans split P&L by project, department or product.",
        fr: "Factures client, factures fournisseur, avoirs, paiements et OD sont des account.move ; les lignes sont dans account.move.line. Le plan comptable = account.account. Les journaux (account.journal) définissent séquences, comptes par défaut et types de documents. Retenez move_type : out_invoice, in_invoice, out_refund, in_refund, entry. Brouillon → Comptabilisé → (optionnel) Remettre en brouillon si la période est ouverte. Comptes / plans analytiques découpent le P&L par projet, département ou produit.",
      },
    },
    {
      title: {
        en: "Taxes, fiscal positions & multi-currency",
        fr: "Taxes, positions fiscales & multi-devise",
      },
      body: {
        en: "Taxes can be included or excluded in prices; tax groups and grids feed VAT returns. Fiscal positions remap taxes and accounts when the partner’s country, VAT status or e-commerce fiscal position differs from the company default (e.g. EU B2B reverse charge). Cash basis vs accrual changes when tax is recognized. Multi-currency: company currency is the reporting base; exchange differences post on payment/revaluation. Cash rounding and payment terms affect the residual amount on invoices.",
        fr: "Taxes incluses ou exclues ; groupes et grilles alimentent les déclarations TVA. Les positions fiscales remappent taxes et comptes selon pays, statut TVA ou position e-commerce (ex. autoliquidation B2B UE). TVA sur encaissements vs engagements. Multi-devise : la devise société est la base ; les écarts de change se postent au paiement / à la réévaluation. Arrondi monétaire et conditions de paiement influencent le résiduel.",
      },
    },
    {
      title: {
        en: "Payments, bank & reconciliation",
        fr: "Paiements, banque & rapprochement",
      },
      body: {
        en: "Register Payment usually posts through Outstanding Receipts/Payments intermediate accounts; bank reconciliation then moves cash to the real bank account when the statement line matches. Reconciliation models suggest rules (label contains FEE → book to bank fees). Follow-up levels chase overdue invoices. Partial payments leave a residual. Batch payments group several vendor payments. SEPA / payment providers export files or sync transactions.",
        fr: "Enregistrer un paiement passe souvent par les comptes d'attente (Outstanding) ; le rapprochement bascule ensuite vers la banque réelle. Les modèles de rapprochement suggèrent des règles (libellé FEE → frais bancaires). Les niveaux de relance poursuivent les échéances. Un paiement partiel laisse un résiduel. Les paiements groupés agrègent plusieurs règlements fournisseurs. SEPA / PSP exportent ou synchronisent les mouvements.",
      },
    },
    {
      title: {
        en: "Assets, deferred revenue & locks",
        fr: "Immobilisations, produits constatés d'avance & verrous",
      },
      body: {
        en: "Asset models generate depreciation entries over useful life (straight-line, declining…). Deferred revenue / expense spreads income or costs across periods instead of posting everything on invoice date. Tax lock date and global lock date freeze posted moves in closed periods — unlocking needs Accounting rights. Inventory valuation (Standard / AVCO / FIFO) posts COGS and stock accounts when goods move; keep Accounting and Inventory settings aligned.",
        fr: "Les modèles d'immobilisation génèrent les amortissements (linéaire, dégressif…). Les produits / charges constatés d'avance étalent le résultat sur plusieurs périodes. Date de verrouillage fiscale et globale figent les écritures des périodes closes. La valorisation stock (Standard / AVCO / FIFO) poste COGS et comptes de stock aux mouvements ; alignez Comptabilité et Inventaire.",
      },
    },
  ],
  crm: [
    {
      title: { en: "Lead vs opportunity", fr: "Piste vs opportunité" },
      body: {
        en: "Lead = unqualified contact; Opportunity = qualified deal sitting in a pipeline stage with expected revenue and probability. Enable Leads under CRM ‣ Settings if you need a separate pre-qualification menu; otherwise users work only on opportunities. Convert to Opportunity is an explicit action (not merely dragging a card). Merge duplicates carefully — the master keeps history. Lost reasons feed reporting; Won often opens a quotation.",
        fr: "Piste = contact non qualifié ; Opportunité = affaire dans une étape de pipeline avec revenu attendu et probabilité. Activez Pistes (CRM ‣ Paramètres) pour un menu de pré-qualification ; sinon on travaille directement sur les opportunités. « Convertir en opportunité » est explicite (pas un simple drag). Fusionnez les doublons avec prudence. Motifs Perdu → reporting ; Gagné ouvre souvent un devis.",
      },
    },
    {
      title: {
        en: "Pipeline, teams & assignment",
        fr: "Pipeline, équipes & assignation",
      },
      body: {
        en: "Stages carry probabilities and optional rotten days (stale alerts). Sales teams own pipelines; domain-based assignment rules route new leads/opportunities. Team leaders see team KPIs. Forecast uses weighted expected revenue. Recurring revenues / subscriptions can link from CRM when those apps are installed.",
        fr: "Les étapes portent probabilités et jours « pourris » (alerte d'inactivité). Les équipes commerciales possèdent les pipelines ; les règles d'assignation (domaine) routent les nouveaux enregistrements. Les chefs d'équipe voient les KPI. La prévision pondère le revenu attendu. Abonnements / revenus récurrents se lient au CRM si les apps sont installées.",
      },
    },
    {
      title: {
        en: "Activities, scoring & acquisition",
        fr: "Activités, scoring & acquisition",
      },
      body: {
        en: "Activities and activity plans schedule calls, emails and meetings with due dates. Predictive lead scoring needs enough won/lost history to be meaningful. Acquisition channels: website forms, email aliases, import, IAP lead mining/enrichment (credits ≠ document digitization). UTM fields attribute opportunities to campaigns. Calendar sync (Google Workspace / Outlook) and VoIP appear in exam distinctions.",
        fr: "Activités et plans planifient appels, e-mails et réunions avec échéances. Le scoring prédictif exige un historique gagné/perdu suffisant. Canaux : formulaires web, alias e-mail, import, mining/enrichissement IAP (crédits ≠ numérisation docs). UTM = attribution campagnes. Sync calendrier (Google Workspace / Outlook) et VoIP sont des distinctions d'examen.",
      },
    },
  ],
  sales: [
    {
      title: {
        en: "Quote → order → invoice",
        fr: "Devis → commande → facture",
      },
      body: {
        en: "Create a quotation (from CRM, manually or online), apply template/pricelist/fiscal position, send by email or Sign. Customer acceptance → Confirm Order creates a Sales Order. Deliver goods or record services, then invoice according to policy. Register payment and reconcile in Accounting. Cancellation / credit notes reverse posted invoices.",
        fr: "Créer un devis (CRM, manuel ou en ligne), appliquer modèle / liste de prix / position fiscale, envoyer par e-mail ou Sign. Acceptation → Confirmer crée la commande. Livrer ou enregistrer les prestations, puis facturer selon la politique. Paiement + lettrage en Comptabilité. Annulation / avoirs pour inverser.",
      },
    },
    {
      title: {
        en: "Invoicing policies & down payments",
        fr: "Politiques de facturation & acomptes",
      },
      body: {
        en: "Ordered quantities: invoice as soon as the SO is confirmed (services often use this). Delivered quantities: wait until delivery/timesheets validate quantities. Down payments create advance invoices that later deduct from the final invoice. Milestone / percentage invoicing appears with Project. Warning: changing policy mid-flow changes what appears on Create Invoice.",
        fr: "Quantités commandées : facturer dès confirmation SO (souvent les services). Quantités livrées : attendre livraison / feuilles de temps. Les acomptes créent des factures d'avance déduites ensuite. Jalons / % avec Projet. Attention : changer la politique en cours modifie « Créer une facture ».",
      },
    },
    {
      title: {
        en: "Products, prices & upsell",
        fr: "Produits, prix & upsell",
      },
      body: {
        en: "Variants = attributes × values. Pricelists can be formula, percentage or fixed; assigned by customer, country or eCommerce. Optional products are suggested on the quotation; accessory products are cross-sell on the product form / website. Discounts, loyalty and coupons stack with rules. Units of measure conversions must match Inventory. Quotation templates prefill sections and terms.",
        fr: "Variantes = attributs × valeurs. Listes de prix : formule, % ou fixe ; par client, pays ou eCommerce. Optionnels = suggérés au devis ; accessoires = cross-sell fiche / site. Remises, fidélité et coupons se combinent. Les UdM doivent coller à l'Inventaire. Les modèles de devis préremplissent sections et conditions.",
      },
    },
  ],
  purchases: [
    {
      title: {
        en: "RFQ → PO → receipt → bill",
        fr: "DdP → BC → réception → facture",
      },
      body: {
        en: "Request for Quotation becomes Purchase Order on confirmation. Vendor sends goods → Receipt (Inventory). Vendor bill is controlled by Bill Control: Ordered quantities vs Received quantities. Three-way matching compares PO, receipt and bill quantities/prices before posting. Returns use credit notes / return pickings.",
        fr: "La demande de prix devient bon de commande à la confirmation. Réception stock, puis facture fournisseur selon le contrôle : quantités commandées vs reçues. Le matching à 3 voies compare BC, réception et facture. Retours = avoirs / transferts retour.",
      },
    },
    {
      title: {
        en: "Vendors, agreements & replenishment",
        fr: "Fournisseurs, accords & réappro",
      },
      body: {
        en: "Vendor pricelists and lead times drive replenishment RFQs from reordering rules. Purchase agreements / blanket orders frame recurring prices and quantities. Call for Tenders compares multiple vendors. Dropship route: vendor ships to customer without stocking. Approvals can require a manager above a company amount threshold. Incoterms and warnings on vendor forms matter for ops questions.",
        fr: "Listes de prix fournisseur et délais alimentent les DdP de réappro. Accords / contrats-cadres cadrent prix et quantités récurrents. Appel d'offres = comparaison multi-fournisseurs. Route Dropship : livraison directe client. Approbations au-delà d'un seuil. Incoterms et alertes fournisseur tombent souvent à l'examen.",
      },
    },
  ],
  inventory: [
    {
      title: {
        en: "Products, locations & operations",
        fr: "Produits, emplacements & opérations",
      },
      body: {
        en: "Product types: Goods (storable), Service, Combo. Warehouses contain locations (View / Internal / Customer / Vendor / Transit). Operation types define receipts, deliveries, internal transfers and manufacturing picks. Multi-step receipts (Input → Quality → Stock) and deliveries (Pick → Pack → Ship) are configured on the warehouse. Barcodes / GS1 speed scanning when the Barcode app is used.",
        fr: "Types : Biens (stockables), Service, Combo. Entrepôts → emplacements (Vue / Interne / Client / Fournisseur / Transit). Types d'opération : réceptions, livraisons, transferts internes, picks OF. Réceptions multi-étapes (Input → Qualité → Stock) et livraisons (Pick → Pack → Ship). Codes-barres / GS1 si l'app Barcode est là.",
      },
    },
    {
      title: {
        en: "Routes, rules & replenishment",
        fr: "Routes, règles & réapprovisionnement",
      },
      body: {
        en: "Routes (Buy, Manufacture, MTO, Dropship, Resupply) decide how demand is fulfilled; pull/push rules move stock between locations. Reordering rules (min/max or replenish to max) create RFQs or MOs. Putaway strategies choose the storage location on receipt. Removal strategies (FIFO, LIFO, FEFO, Closest location) choose which quants leave first. Packages and storage categories organize capacity.",
        fr: "Routes (Acheter, Fabriquer, MTO, Dropship, Réapprovisionner) décident du mode d'approvisionnement ; règles pull/push déplacent le stock. Règles de réappro (min/max). Stratégies de rangement à la réception. Stratégies de sortie (FIFO, LIFO, FEFO, emplacement le plus proche). Colis et catégories de stockage gèrent la capacité.",
      },
    },
    {
      title: {
        en: "Tracking & valuation",
        fr: "Traçabilité & valorisation",
      },
      body: {
        en: "Lots / serial numbers track identity and expiry (FEFO). Inventory adjustments correct on-hand with an inventory loss/gain account. Consignment and owner on quants appear in advanced setups. Valuation methods: Standard price, AVCO (average cost), FIFO — they post accounting entries when valuation is automated / perpetual. Landed costs allocate freight/customs onto product value.",
        fr: "Lots / numéros de série + dates de péremption (FEFO). Les ajustements d'inventaire corrigent le disponible. Consignation / propriétaire sur les quants en setups avancés. Valorisation : Standard, AVCO, FIFO — écritures auto en valorisation permanente. Les coûts logistiques (landed costs) ventilent fret/douane sur la valeur produit.",
      },
    },
  ],
  mrp: [
    {
      title: { en: "BoM types", fr: "Types de nomenclatures" },
      body: {
        en: "Manufacture BoM: manufacturing order consumes components and produces finished goods. Kit: components explode on the delivery / SO without creating an MO. Subcontracting: send components to a subcontractor who returns finished goods (specific routes). Phantom / kit confusion is a classic exam trap — kit ≠ MO.",
        fr: "NdM Fabrication : l'OF consomme des composants et produit l'article fini. Kit : éclate les composants à la livraison / SO sans OF. Sous-traitance : envoi des composants, retour du fini (routes dédiées). Piège classique : kit ≠ OF.",
      },
    },
    {
      title: {
        en: "MO execution & work centers",
        fr: "Exécution OF & postes de charge",
      },
      body: {
        en: "Confirm MO → check availability → produce (and create backorders if partial). Work centers + routings split the MO into work orders with time tracking. By-products and scrap are recorded on the MO. Unbuild reverses a finished MO into components. MPS plans supply from demand forecasts and open orders.",
        fr: "Confirmer OF → vérifier dispo → produire (reliquats si partiel). Postes de charge + gammes découpent en ordres de travail chronométrés. Sous-produits et rebus sur l'OF. Démontage inverse un OF terminé. Le MPS planifie depuis prévisions et commandes ouvertes.",
      },
    },
    {
      title: {
        en: "Costing & MTO",
        fr: "Coûts & MTO",
      },
      body: {
        en: "BoM cost rolls up component standard/AVCO costs plus operation costs (work center hourly rates). MO real cost can differ from BoM estimate. Make-to-Order links an SO demand line to a specific MO. Replenishment on order (MTO) vs make-to-stock is a frequent distinction. PLM / ECO change BoMs with versioning when those apps are installed.",
        fr: "Le coût NdM cumule composants + opérations (taux horaires postes). Le coût réel OF peut différer. Le MTO lie une ligne SO à un OF. Distinction fréquente : fabriquer à la commande vs sur stock. PLM / ECO versionnent les NdM si installés.",
      },
    },
  ],
  project: [
    {
      title: {
        en: "Projects, tasks & stages",
        fr: "Projets, tâches & étapes",
      },
      body: {
        en: "Projects contain tasks organized in Kanban stages (or list/gantt). Sub-tasks and dependencies structure work. Milestones mark contractual checkpoints. Project templates clone structure for recurring engagements. Customer rating and project updates set health (On Track / At Risk / Off Track).",
        fr: "Un projet contient des tâches en Kanban (ou liste/gantt). Sous-tâches et dépendances. Les jalons marquent les échéances contractuelles. Les modèles de projet clonent la structure. Notes client et mises à jour définissent la santé (Dans les clous / À risque / Hors piste).",
      },
    },
    {
      title: {
        en: "Services, billing & profitability",
        fr: "Services, facturation & rentabilité",
      },
      body: {
        en: "Service products can create a project and/or tasks when the SO is confirmed (service tracking). Timesheets on tasks feed billable hours. Planned hours vs timesheeted hours measure progress. Analytic accounts per project feed the profitability report (revenues from SO/invoices minus costs/timesheets/expenses). Billable vs non-billable tasks matter for reinvoicing.",
        fr: "Un produit service peut créer projet et/ou tâches à la confirmation SO. Les feuilles de temps alimentent les heures facturables. Heures planifiées vs saisies = avancement. Compte analytique → rapport de rentabilité (CA − coûts/temps/frais). Tâches facturables vs non pour la refacturation.",
      },
    },
  ],
  timesheet: [
    {
      title: {
        en: "Encode time",
        fr: "Saisir le temps",
      },
      body: {
        en: "Timesheet lines link to a project and usually a task; optionally to a sales order line for reinvoicing. Encode via timer, manual line, or weekly grid. Employee cost / billing rate can differ (cost for profitability, rate for invoicing). Leaderboards and billing rates appear in Timesheets reporting.",
        fr: "Une ligne se lie à un projet et souvent une tâche ; optionnellement à une ligne SO pour refacturation. Saisie : chronomètre, ligne manuelle ou grille hebdo. Coût employé ≠ taux de facturation. Classements et taux apparaissent dans les rapports.",
      },
    },
    {
      title: {
        en: "Billable time & validation",
        fr: "Temps facturable & validation",
      },
      body: {
        en: "Billable timesheets reinvoice when the SO service line and invoicing policy allow it. Managers can validate timesheets before payroll or invoicing. Time Off and Planning interact with expected hours. Tip for the exam: blank timesheets or wrong SO link → hours never appear on the invoice wizard.",
        fr: "Les feuilles facturables se refacturent si la ligne service SO et la politique le permettent. Validation manager avant paie / facture. Congés et Planning influencent les heures attendues. Piège : mauvaise liaison SO → heures absentes de l'assistant de facture.",
      },
    },
  ],
  hr: [
    {
      title: {
        en: "Employee & contract",
        fr: "Employé & contrat",
      },
      body: {
        en: "Employee records hold personal data, work location, coach/manager and related user. Contracts define wage, working schedule and start/end dates — needed for Time Off accruals and payroll localizations. Departments and job positions structure the org chart. Skills and résumés support recruitment/appraisals.",
        fr: "Fiche employé : données perso, lieu, coach/manager, utilisateur lié. Contrats : salaire, horaire, dates — nécessaires aux accruals Congés et localisations Paie. Départements et postes structurent l'organigramme. Compétences / CV pour recrutement et évaluations.",
      },
    },
    {
      title: {
        en: "Recruitment & appraisals",
        fr: "Recrutement & évaluations",
      },
      body: {
        en: "Job applications move through a recruitment pipeline (stages). Interviewers score applicants; offer letters can use Sign. Hired applicants become employees. Appraisals schedule review cycles with skills feedback. Referrals may grant rewards when configured.",
        fr: "Candidatures dans un pipeline (étapes). Notes d'entretien ; offres via Sign. Embauche → employé. Les évaluations planifient les cycles de revue. Les cooptations peuvent déclencher des récompenses.",
      },
    },
    {
      title: {
        en: "Time Off & Expenses",
        fr: "Congés & Notes de frais",
      },
      body: {
        en: "Time Off types (paid leave, sick…) use allocation accruals and approval workflows; working schedules define expected days. Expenses: create from category or card → submit → manager approve → post to accounting → reimburse employee or reinvoice customer. Expense categories map to product/accounts. Mixing Time Off approval with Expenses approval is a common mix-up in questions.",
        fr: "Types de congés + allocations/accruals + approbations ; horaires = jours attendus. Notes de frais : créer → soumettre → approuver → comptabiliser → rembourser ou refacturer. Catégories → produit/compte. Piège fréquent : confondre circuit Congés et circuit Frais.",
      },
    },
  ],
  website: [
    {
      title: {
        en: "Builder, themes & pages",
        fr: "Builder, thèmes & pages",
      },
      body: {
        en: "Website builder uses drag-and-drop snippets (structure, features, dynamic content). Themes control colors, fonts and layout presets. Pages are draft or published; menus link pages. Multi-website can share or separate domains/companies. Restrict pages to logged-in portal users when needed.",
        fr: "Le builder empile des snippets (structure, fonctionnalités, contenu dynamique). Thèmes = couleurs, polices, presets. Pages brouillon ou publiées ; menus. Multi-sites : domaines/sociétés partagés ou séparés. Restreindre aux utilisateurs portail si besoin.",
      },
    },
    {
      title: {
        en: "Forms, SEO & tracking",
        fr: "Formulaires, SEO & tracking",
      },
      body: {
        en: "Form snippets create CRM leads, tickets or mailing-list contacts. SEO fields (title, meta, sitemap) live on each page. Redirects manage URL changes. Website analytics / visitor tracking are optional integrations. Translate pages with the language switcher when multi-language is enabled.",
        fr: "Les formulaires créent pistes CRM, tickets ou contacts mailing. SEO (titre, meta, sitemap) par page. Redirections pour les changements d'URL. Analytics / visiteurs optionnels. Traduction via le sélecteur de langue.",
      },
    },
  ],
  ecommerce: [
    {
      title: {
        en: "Catalog & pricing",
        fr: "Catalogue & tarification",
      },
      body: {
        en: "Publish products to the shop with categories, optional eCommerce categories, attributes → variants, and media. Pricelists drive B2B/B2C prices; geoip or customer assignment selects the list. Additional products / optional / accessories upsell at checkout or product page. Combo products bundle items.",
        fr: "Publier produits avec catégories, attributs → variantes et médias. Listes de prix B2B/B2C (geoip ou client). Produits additionnels / optionnels / accessoires pour l'upsell. Les combos regroupent des articles.",
      },
    },
    {
      title: {
        en: "Checkout, payments & shipping",
        fr: "Checkout, paiements & livraison",
      },
      body: {
        en: "Payment providers and shipping methods appear at checkout; delivery carriers can be based on weight, price or custom. Fiscal positions apply correct taxes online. Abandoned cart recovery emails revive incomplete checkouts. Customer accounts / guest checkout are configurable. Orders sync to Sales and Inventory like any SO.",
        fr: "Paiements et modes de livraison au checkout (poids, prix, custom). Positions fiscales pour la TVA en ligne. Relance paniers abandonnés. Compte client ou invité. Les commandes rejoignent Ventes / Inventaire comme un SO.",
      },
    },
    {
      title: {
        en: "Stock & portal",
        fr: "Stock & portail",
      },
      body: {
        en: "Shared inventory with the Inventory app keeps online availability accurate; prevent sales of out-of-stock items if configured. Cross-selling and recently viewed blocks are website snippets. Portal users see orders, invoices and delivery tracking. Promo codes / loyalty programs reuse Sales discount engines.",
        fr: "Stock partagé avec Inventaire ; bloquer les ruptures si configuré. Cross-sell / vus récemment = snippets. Portail : commandes, factures, suivi. Codes promo / fidélité = moteur de remises Ventes.",
      },
    },
  ],
  marketing: [
    {
      title: {
        en: "Email Marketing",
        fr: "Email Marketing",
      },
      body: {
        en: "Mailing lists and contacts receive mass mailings built with templates/snippets. A/B tests compare subject or content. Bounce, opt-out and blacklist handling protect deliverability. KPIs: delivered, opened, clicked, replied. Prefer mass mailing for one-shot campaigns; keep lists clean.",
        fr: "Listes et contacts reçoivent des mailings (templates/snippets). A/B test sur objet ou contenu. Rebonds, désinscriptions et listes noires protègent la délivrabilité. KPI : délivré, ouvert, cliqué, répondu. Mailing de masse = campagne one-shot ; listes propres.",
      },
    },
    {
      title: {
        en: "Marketing Automation & SMS",
        fr: "Marketing Automation & SMS",
      },
      body: {
        en: "Automation workflows chain activities on triggers (time delay, email opened, link clicked, stage changed). Use automation for nurture sequences. SMS Marketing needs IAP credits and opt-in compliance. Social Marketing schedules posts. Link trackers measure campaign URLs. Marketing cards generate shareable creatives.",
        fr: "Les workflows d'automation enchaînent des activités sur déclencheurs (délai, ouverture, clic, changement d'étape) — idéal pour le nurturing. SMS = crédits IAP + opt-in. Social Marketing planifie les posts. Trackers = URLs de campagne. Marketing Cards = créatifs partageables.",
      },
    },
  ],
  survey: [
    {
      title: {
        en: "Question types & design",
        fr: "Types de questions & conception",
      },
      body: {
        en: "Surveys support multiple choice, text, numerical, date, matrix and more. Sections organize long forms. Conditional display shows/hides questions from prior answers. Randomization and time limits appear in certification-style surveys. Live session mode projects questions for events.",
        fr: "Choix multiple, texte, numérique, date, matrice… Sections pour les longs formulaires. Affichage conditionnel selon les réponses. Randomisation et limite de temps pour les certifications. Mode session live pour les événements.",
      },
    },
    {
      title: {
        en: "Scoring, certification & results",
        fr: "Scoring, certification & résultats",
      },
      body: {
        en: "Assign scores per answer and define a success ratio / certification badge. Attempts can be limited. Results feed analysis charts and can create leads or help recruitment assessments. Sharing: public link, authenticated users, or invited-only tokens.",
        fr: "Score par réponse + taux de réussite / badge de certification. Tentatives limitées possibles. Résultats → graphiques, pistes CRM ou assessments recrutement. Partage : lien public, utilisateurs authentifiés ou invitations.",
      },
    },
  ],
  pos: [
    {
      title: {
        en: "Sessions & payments",
        fr: "Sessions & paiements",
      },
      body: {
        en: "Open a POS session on a configured point of sale → sell products → close with cash control (opening/closing counted cash). Split bills and multiple payment methods are supported. Refunds create reverse orders. Customer display and IoT devices (printers, payment terminals, scales) attach to the POS config.",
        fr: "Ouvrir une session sur un PdV configuré → vendre → clôturer avec contrôle caisse. Split et multi-paiements. Remboursements = commandes inverses. Afficheur client et IoT (imprimantes, TPE, balances) se lient à la config PdV.",
      },
    },
    {
      title: {
        en: "Restaurant, loyalty & closing",
        fr: "Restaurant, fidélité & clôture",
      },
      body: {
        en: "Restaurant mode adds floors, tables, course/notes and preparation displays (kitchen). Tips and bar tabs are common options. Loyalty programs and promotions apply discounts at the POS. Closing posts sales to Inventory (stock moves) and Accounting (journal entries). Offline cache continues selling and syncs when the network returns — a frequent exam point.",
        fr: "Mode restaurant : plans, tables, notes et écrans de préparation. Pourboires / additions ouvertes. Fidélité et promos au PdV. La clôture poste vers Inventaire et Comptabilité. Cache hors-ligne = vente continue puis sync — point d'examen fréquent.",
      },
    },
  ],
  studio: [
    {
      title: {
        en: "What Studio can change",
        fr: "Ce que Studio peut modifier",
      },
      body: {
        en: "Studio adds fields (and shows them on forms/lists), rearranges views, creates new menus/models for light apps, and builds automated actions / approval rules without code. Report layouts and button visibility can be adjusted. Prefer Studio for lightweight functional tweaks; complex business logic still needs development.",
        fr: "Studio ajoute des champs (formulaires/listes), réorganise les vues, crée menus/modèles légers et des actions automatisées / approbations sans code. Mise en page des rapports et visibilité des boutons. Studio = ajustements légers ; logique métier complexe = développement.",
      },
    },
    {
      title: {
        en: "Access rights vs record rules",
        fr: "Droits d'accès vs règles d'enregistrement",
      },
      body: {
        en: "Access rights (ACL): which create/read/write/unlink a security group may perform on a model. Record rules: which records of that model the group can see (domain filter, e.g. only own sales team). Confusing the two is a classic exam trap. Developer mode reveals technical field names and view XML for debugging.",
        fr: "Droits d'accès (ACL) : create/read/write/unlink d'un groupe sur un modèle. Règles d'enregistrement : quels enregistrements sont visibles (domaine, ex. son équipe). Piège classique : les confondre. Mode développeur = noms techniques et XML des vues.",
      },
    },
    {
      title: {
        en: "Import / export & automation",
        fr: "Import / export & automatisation",
      },
      body: {
        en: "CSV/XLSX import needs matching column headers and preferably external IDs for updates. Export with « I want to update data » to get external IDs back. Automated actions trigger on save, timed conditions or form button — write server actions carefully to avoid loops. Website form → Studio fields work if the field is exposed on the model.",
        fr: "Import CSV/XLSX : en-têtes alignés + IDs externes pour mettre à jour. Exporter avec « je veux mettre à jour » pour récupérer les IDs. Actions automatisées : à la sauvegarde, planifiées ou bouton — attention aux boucles. Formulaires web → champs Studio si exposés sur le modèle.",
      },
    },
  ],
  spreadsheet: [
    {
      title: {
        en: "Live data & pivots",
        fr: "Données live & pivots",
      },
      body: {
        en: "Odoo Spreadsheet inserts pivot tables and lists linked to ORM data; a blue globe / sync indicator means the range stays live. Global filters (date, customer, company…) apply across sheets. Functions mix classic spreadsheet formulas with Odoo-specific helpers. Charts visualize pivot results.",
        fr: "Le tableur Odoo insère pivots et listes liés à l'ORM ; le globe bleu = plage live. Filtres globaux (date, client, société…) sur les feuilles. Formules classiques + helpers Odoo. Graphiques sur les pivots.",
      },
    },
    {
      title: {
        en: "Dashboards, tables & rights",
        fr: "Tableaux de bord, tables & droits",
      },
      body: {
        en: "Convert ranges to spreadsheet tables for structured references. Dashboards embed a spreadsheet inside an app menu for operational KPIs. Sharing can be view-only per file. Snapshot / freeze values when you need a static audit copy instead of live figures. File versions help recover previous designs.",
        fr: "Convertir en tableau pour des références structurées. Les dashboards embarquent un tableur dans un menu d'app. Partage en lecture seule possible. Instantané / valeurs figées pour un audit statique. Les versions permettent de revenir en arrière.",
      },
    },
  ],
  knowledge: [
    {
      title: {
        en: "Articles & structure",
        fr: "Articles & structure",
      },
      body: {
        en: "Knowledge is a collaborative wiki: nested articles, cover images, item properties/fields, and embedded views or files. Templates accelerate SOPs and meeting notes. Prefer Knowledge for living documentation shared across teams; use Attachments for a one-off file stuck on a single record.",
        fr: "Knowledge = wiki collaboratif : articles imbriqués, couvertures, propriétés, vues/fichiers embarqués. Modèles pour SOP et notes de réunion. Knowledge = doc vivante partagée ; pièces jointes = fichier ponctuel sur un enregistrement.",
      },
    },
    {
      title: {
        en: "Sharing & workspace",
        fr: "Partage & espace de travail",
      },
      body: {
        en: "Share internally to users/groups or via portal/link for external readers. Private vs workspace articles control visibility. History/versions recover prior content. Articles can be referenced from chatter or websites depending on setup. Search finds articles by title and body.",
        fr: "Partage interne (users/groupes) ou portail/lien externe. Articles privés vs espace de travail. Historique/versions. Références depuis le chatter ou le site selon config. Recherche sur titre et corps.",
      },
    },
  ],
  ai: [
    {
      title: {
        en: "Where AI appears in Odoo 19",
        fr: "Où l'IA apparaît dans Odoo 19",
      },
      body: {
        en: "Odoo 19 AI helps draft and improve text (emails, website, chatter), powers AI fields, agents, default prompts, document sorting, live chat helpers, voice transcription, email-template suggestions and support-workflow assists. API keys configure the provider connection. Exam angle: know the feature list and which apps expose AI.",
        fr: "L'IA Odoo 19 aide à rédiger/améliorer du texte (e-mails, site, chatter), via champs IA, agents, prompts, tri de documents, live chat, transcription vocale, suggestions de modèles d'e-mail et assistances support. Clés API = connexion fournisseur. À l'examen : connaître la liste des features et les apps concernées.",
      },
    },
    {
      title: {
        en: "What AI does not replace",
        fr: "Ce que l'IA ne remplace pas",
      },
      body: {
        en: "AI does not replace functional configuration: fiscal positions, inventory routes, access rights, tax mapping and accounting locks remain manual setups. It assists content and sorting; it does not magically post correct journal entries or invent warehouse rules. Distinguishing automation (Studio/server actions) from generative AI is a frequent trap.",
        fr: "L'IA ne remplace pas la config fonctionnelle : positions fiscales, routes stock, droits, taxes et verrous comptables restent manuels. Elle assiste le contenu et le tri ; elle ne poste pas magiquement la bonne écriture ni n'invente les règles d'entrepôt. Distinguer automation (Studio/actions) et IA générative est un piège fréquent.",
      },
    },
  ],
};
