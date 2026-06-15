import { complexQ } from "./helpers";

export const spreadsheetQuestions = [
  complexQ({
    id: "spr-001",
    module: "spreadsheet",
    text: {
      en: "What is the Odoo Spreadsheet app in Odoo 19?",
      fr: "Qu'est-ce que l'application Spreadsheet (Feuilles de calcul) Odoo 19 ?",
    },
    correct: {
      en: "An integrated spreadsheet tool connected to live Odoo business data for analysis, dashboards, and custom reports",
      fr: "Un outil tableur intégré connecté aux données métier Odoo en direct pour analyse, tableaux de bord et rapports personnalisés",
    },
    distractors: [
      {
        en: "A standalone Excel file editor with no connection to Odoo models, stored only as attachments in Discuss",
        fr: "Un éditeur de fichiers Excel autonome sans connexion aux modèles Odoo, stocké uniquement comme pièces jointes Discuss",
      },
      {
        en: "A payroll calculation engine replacing salary rules with cell formulas on employee payslip templates",
        fr: "Un moteur de calcul paie remplaçant les règles salariales par formules cellules sur modèles fiches de paie employés",
      },
      {
        en: "A website builder block for embedding static HTML tables on eCommerce product description pages",
        fr: "Un bloc constructeur website pour intégrer des tableaux HTML statiques sur pages description produit eCommerce",
      },
    ],
    explanation: {
      en: "Spreadsheet combines familiar spreadsheet UX with Odoo data sources for dynamic, in-database analytics.",
      fr: "Spreadsheet combine l'UX tableur familière avec des sources de données Odoo pour une analytique dynamique en base.",
    },
  }),
  complexQ({
    id: "spr-002",
    module: "spreadsheet",
    text: {
      en: "How do you pull live Odoo records into a spreadsheet in Odoo 19?",
      fr: "Comment insérer des enregistrements Odoo en direct dans une feuille de calcul Odoo 19 ?",
    },
    correct: {
      en: "Insert an Odoo list or pivot data source linked to a model domain, then use ODOO.LIST or ODOO.PIVOT functions",
      fr: "Insérer une source de données liste ou pivot Odoo liée à un domaine modèle, puis utiliser les fonctions ODOO.LIST ou ODOO.PIVOT",
    },
    distractors: [
      {
        en: "Export the model to CSV from list view daily and upload the file as a static attachment on the spreadsheet",
        fr: "Exporter le modèle en CSV depuis la vue liste quotidiennement et charger le fichier comme pièce jointe statique sur le spreadsheet",
      },
      {
        en: "Write a Studio server action that emails Excel exports; the spreadsheet reads data from incoming mail aliases",
        fr: "Écrire une action serveur Studio envoyant exports Excel par e-mail ; le spreadsheet lit les données depuis alias mail entrants",
      },
      {
        en: "Use the Point of Sale reporting menu; spreadsheets only accept retail session data imported at closing",
        fr: "Utiliser le menu rapports Point de Vente ; les spreadsheets n'acceptent que données session retail importées à la clôture",
      },
    ],
    explanation: {
      en: "Odoo data sources bind spreadsheet cells to model records and refresh when underlying data changes.",
      fr: "Les sources de données Odoo lient les cellules du spreadsheet aux enregistrements modèle et se rafraîchissent quand les données changent.",
    },
  }),
  complexQ({
    id: "spr-003",
    module: "spreadsheet",
    text: {
      en: "What are typical business uses of Odoo Spreadsheet in Odoo 19?",
      fr: "Quels sont les usages métier typiques d'Odoo Spreadsheet dans Odoo 19 ?",
    },
    correct: {
      en: "Custom KPI dashboards, sales or inventory analysis, commission models, and management reports beyond standard views",
      fr: "Tableaux de bord KPI personnalisés, analyses ventes ou inventaire, modèles de commission et rapports de gestion au-delà des vues standard",
    },
    distractors: [
      {
        en: "Replacing the legal general ledger and statutory tax declarations required by local accounting authorities",
        fr: "Remplacer le grand livre légal et les déclarations fiscales officielles exigées par les autorités comptables locales",
      },
      {
        en: "Managing employee leave approvals and accrual plans as the primary workflow engine for the Time Off app",
        fr: "Gérer validations congés employés et plans d'acquisition comme moteur workflow principal de l'app Congés",
      },
      {
        en: "Configuring manufacturing BOM operations and work center routings instead of the Manufacturing app forms",
        fr: "Configurer opérations nomenclature fabrication et routages centres de travail à la place des fiches app Fabrication",
      },
    ],
    explanation: {
      en: "Spreadsheet complements native reports with flexible, user-built analytics on live Odoo data.",
      fr: "Spreadsheet complète les rapports natifs avec une analytique flexible construite par l'utilisateur sur données Odoo live.",
    },
  }),
  complexQ({
    id: "spr-004",
    module: "spreadsheet",
    text: {
      en: "How do you share a spreadsheet with colleagues in Odoo 19?",
      fr: "Comment partager une feuille de calcul avec des collègues dans Odoo 19 ?",
    },
    correct: {
      en: "Share the spreadsheet document and set user or group access to read-only or edit via standard document permissions",
      fr: "Partager le document spreadsheet et définir l'accès utilisateur ou groupe en lecture seule ou édition via permissions document standard",
    },
    distractors: [
      {
        en: "Publish the spreadsheet as a public website page; all visitors receive edit rights without Odoo authentication",
        fr: "Publier le spreadsheet comme page website publique ; tous visiteurs reçoivent droits édition sans authentification Odoo",
      },
      {
        en: "Send the xlsx export by external email only; in-app sharing is disabled for spreadsheet records in Odoo 19",
        fr: "Envoyer l'export xlsx uniquement par e-mail externe ; le partage in-app est désactivé pour enregistrements spreadsheet Odoo 19",
      },
      {
        en: "Duplicate the spreadsheet into each user's private Discuss channel; shared editing requires Microsoft Teams",
        fr: "Dupliquer le spreadsheet dans le canal Discuss privé de chaque utilisateur ; l'édition partagée nécessite Microsoft Teams",
      },
    ],
    explanation: {
      en: "Spreadsheets use Odoo document sharing: assign followers, internal users, or groups with read or edit rights.",
      fr: "Les spreadsheets utilisent le partage document Odoo : assigner abonnés, utilisateurs internes ou groupes avec droits lecture ou édition.",
    },
  }),
  complexQ({
    id: "spr-005",
    module: "spreadsheet",
    text: {
      en: "What is a key advantage of Odoo Spreadsheet over external Excel for Odoo data analysis?",
      fr: "Quel avantage clé Odoo Spreadsheet offre-t-il par rapport à Excel externe pour l'analyse de données Odoo ?",
    },
    correct: {
      en: "Direct live connection to Odoo models eliminates manual export/import and keeps figures current on refresh",
      fr: "La connexion live directe aux modèles Odoo élimine export/import manuel et maintient les chiffres à jour au rafraîchissement",
    },
    distractors: [
      {
        en: "Spreadsheet includes more built-in functions than Excel including proprietary financial Monte Carlo simulators",
        fr: "Spreadsheet inclut plus de fonctions intégrées qu'Excel dont simulateurs Monte Carlo financiers propriétaires",
      },
      {
        en: "External Excel cannot open xlsx files; Odoo Spreadsheet is the only tool supporting standard spreadsheet formulas",
        fr: "Excel externe ne peut pas ouvrir fichiers xlsx ; Odoo Spreadsheet est le seul outil supportant formules tableur standard",
      },
      {
        en: "Odoo Spreadsheet stores data offline on each user's laptop; Excel requires permanent cloud connectivity to Odoo",
        fr: "Odoo Spreadsheet stocke données offline sur laptop de chaque utilisateur ; Excel exige connectivité cloud permanente à Odoo",
      },
    ],
    explanation: {
      en: "Native data sources keep spreadsheets synchronized with operational Odoo records without repetitive exports.",
      fr: "Les sources de données natives maintiennent les spreadsheets synchronisés avec enregistrements opérationnels Odoo sans exports répétitifs.",
    },
  }),
  complexQ({
    id: "spr-006",
    module: "spreadsheet",
    text: {
      en: "What is a pivot table in Odoo Spreadsheet?",
      fr: "Qu'est-ce qu'un tableau croisé dynamique dans Odoo Spreadsheet ?",
    },
    correct: {
      en: "An interactive aggregation of Odoo records by dimensions (rows/columns) and numeric measures from a data source",
      fr: "Une agrégation interactive d'enregistrements Odoo par dimensions (lignes/colonnes) et mesures numériques depuis une source de données",
    },
    distractors: [
      {
        en: "A manufacturing BOM component matrix listing raw materials per finished product variant in the MRP app",
        fr: "Une matrice composants nomenclature fabrication listant matières premières par variante produit fini dans l'app MRP",
      },
      {
        en: "A payroll salary structure table mapping work entry types to payslip rule categories in the Payroll module",
        fr: "Un tableau structure salariale paie mappant types entrées de travail vers catégories règles fiche de paie module Paie",
      },
      {
        en: "A project Gantt dependency chart showing task links and milestone deadlines in the Project app",
        fr: "Un diagramme dépendances Gantt projet montrant liens tâches et échéances jalons dans l'app Projet",
      },
    ],
    explanation: {
      en: "Spreadsheet pivots mirror Odoo pivot views, grouping and summing live data for multidimensional analysis.",
      fr: "Les pivots Spreadsheet reflètent les vues pivot Odoo, regroupant et sommant données live pour analyse multidimensionnelle.",
    },
  }),
  complexQ({
    id: "spr-007",
    module: "spreadsheet",
    text: {
      en: "How do charts in an Odoo Spreadsheet stay synchronized with business data?",
      fr: "Comment les graphiques d'un Odoo Spreadsheet restent-ils synchronisés avec les données métier ?",
    },
    correct: {
      en: "Charts reference cells fed by Odoo data sources; refreshing the source updates linked values and the chart",
      fr: "Les graphiques référencent cellules alimentées par sources Odoo ; rafraîchir la source met à jour valeurs liées et graphique",
    },
    distractors: [
      {
        en: "Charts are static PNG snapshots generated once at creation and never update when Odoo records change",
        fr: "Les graphiques sont captures PNG statiques générées une fois à la création et ne se mettent jamais à jour quand enregistrements Odoo changent",
      },
      {
        en: "Users must re-import CSV exports manually each morning for chart ranges to reflect new transactions",
        fr: "Les utilisateurs doivent réimporter exports CSV manuellement chaque matin pour que plages graphique reflètent nouvelles transactions",
      },
      {
        en: "Charts pull data from Google Sheets sync; Odoo Spreadsheet charts cannot bind to in-database list sources",
        fr: "Les graphiques tirent données depuis sync Google Sheets ; graphiques Odoo Spreadsheet ne peuvent pas lier sources liste en base",
      },
    ],
    explanation: {
      en: "Because charts depend on cells linked to Odoo sources, data refresh propagates automatically to visualizations.",
      fr: "Comme les graphiques dépendent de cellules liées aux sources Odoo, le rafraîchissement données se propage automatiquement aux visualisations.",
    },
  }),
  complexQ({
    id: "spr-008",
    module: "spreadsheet",
    text: {
      en: "Can standard spreadsheet formulas be used alongside Odoo-specific functions in Odoo 19 Spreadsheet?",
      fr: "Peut-on utiliser formules tableur standard aux côtés de fonctions Odoo dans Spreadsheet Odoo 19 ?",
    },
    correct: {
      en: "Yes — familiar formulas (SUM, IF, VLOOKUP-style) work together with Odoo functions like ODOO.LIST and ODOO.PIVOT",
      fr: "Oui — formules familières (SOMME, SI, RECHERCHEV) fonctionnent avec fonctions Odoo comme ODOO.LIST et ODOO.PIVOT",
    },
    distractors: [
      {
        en: "Only Odoo proprietary functions are allowed; standard arithmetic and aggregation formulas are blocked in cells",
        fr: "Seules fonctions propriétaires Odoo sont autorisées ; formules arithmétiques et agrégation standard sont bloquées en cellules",
      },
      {
        en: "Formulas must be written in Python server actions; the spreadsheet grid accepts values and labels exclusively",
        fr: "Les formules doivent être écrites en actions serveur Python ; la grille spreadsheet n'accepte que valeurs et libellés",
      },
      {
        en: "Standard formulas work only after xlsx export; the in-app editor supports Odoo functions exclusively",
        fr: "Formules standard fonctionnent uniquement après export xlsx ; l'éditeur in-app supporte exclusivement fonctions Odoo",
      },
    ],
    explanation: {
      en: "Spreadsheet blends Excel-like formula syntax with Odoo data functions for hybrid calculations on live records.",
      fr: "Spreadsheet mélange syntaxe formules type Excel avec fonctions données Odoo pour calculs hybrides sur enregistrements live.",
    },
  }),
  complexQ({
    id: "spr-009",
    module: "spreadsheet",
    text: {
      en: "How can a spreadsheet be featured on an Odoo 19 dashboard?",
      fr: "Comment une feuille de calcul peut-elle figurer sur un tableau de bord Odoo 19 ?",
    },
    correct: {
      en: "Pin or add the spreadsheet to a dashboard view so its charts and figures appear alongside native dashboard items",
      fr: "Épingler ou ajouter le spreadsheet à une vue tableau de bord pour que graphiques et chiffres apparaissent aux côtés éléments dashboard natifs",
    },
    distractors: [
      {
        en: "Convert the spreadsheet to a QWeb website template; dashboards display only website snippets not spreadsheet records",
        fr: "Convertir le spreadsheet en modèle QWeb website ; tableaux de bord n'affichent que snippets website pas enregistrements spreadsheet",
      },
      {
        en: "Install a third-party BI connector; Odoo dashboards cannot embed spreadsheet documents natively",
        fr: "Installer connecteur BI tiers ; tableaux de bord Odoo ne peuvent pas intégrer nativement documents spreadsheet",
      },
      {
        en: "Print the spreadsheet to PDF and upload it as a static image widget on the manufacturing overview dashboard",
        fr: "Imprimer le spreadsheet en PDF et le charger comme widget image statique sur tableau de bord aperçu fabrication",
      },
    ],
    explanation: {
      en: "Dashboards can include spreadsheet panels, bringing custom KPI layouts into module overview screens.",
      fr: "Les tableaux de bord peuvent inclure panneaux spreadsheet, intégrant mises en page KPI personnalisées aux écrans aperçu modules.",
    },
  }),
  complexQ({
    id: "spr-010",
    module: "spreadsheet",
    text: {
      en: "What is an Odoo list data source in Spreadsheet?",
      fr: "Qu'est-ce qu'une source de données liste Odoo dans Spreadsheet ?",
    },
    correct: {
      en: "A live query returning rows from an Odoo model list view with optional domain filters and selected fields",
      fr: "Une requête live retournant lignes depuis vue liste modèle Odoo avec filtres domaine optionnels et champs sélectionnés",
    },
    distractors: [
      {
        en: "A static CSV attachment uploaded to Documents and referenced by filename in a SUM formula range",
        fr: "Une pièce jointe CSV statique chargée dans Documents et référencée par nom de fichier dans plage formule SOMME",
      },
      {
        en: "A payroll payslip batch export stored in Accounting attachments and refreshed at month-end closing only",
        fr: "Un export lot fiches de paie stocké en pièces jointes Comptabilité et rafraîchi uniquement à clôture fin de mois",
      },
      {
        en: "A Discuss channel message thread parsed into rows by a Studio automated action on spreadsheet save",
        fr: "Un fil messages canal Discuss parsé en lignes par action automatisée Studio à la sauvegarde spreadsheet",
      },
    ],
    explanation: {
      en: "List sources inject model records as table rows, powering ODOO.LIST and detail-level spreadsheet analysis.",
      fr: "Les sources liste injectent enregistrements modèle comme lignes tableau, alimentant ODOO.LIST et analyse détaillée spreadsheet.",
    },
  }),
  complexQ({
    id: "spr-011",
    module: "spreadsheet",
    text: {
      en: "How do you restrict which Odoo records feed a spreadsheet pivot in Odoo 19?",
      fr: "Comment restreindre quels enregistrements Odoo alimentent un pivot spreadsheet Odoo 19 ?",
    },
    correct: {
      en: "Apply domain filters on the linked Odoo data source to limit records by date, status, company, or other criteria",
      fr: "Appliquer filtres domaine sur la source Odoo liée pour limiter enregistrements par date, statut, société ou autres critères",
    },
    distractors: [
      {
        en: "Hide pivot rows manually in the grid; domain filters exist only in Accounting report builder not Spreadsheet",
        fr: "Masquer lignes pivot manuellement dans grille ; filtres domaine existent uniquement constructeur rapports Comptabilité pas Spreadsheet",
      },
      {
        en: "Archive unwanted records in the model; pivots ignore active flag and always include archived entries",
        fr: "Archiver enregistrements indésirables dans modèle ; pivots ignorent indicateur actif et incluent toujours entrées archivées",
      },
      {
        en: "Filter by barcode scan in Inventory; spreadsheet pivots accept warehouse operation filters exclusively",
        fr: "Filtrer par scan code-barres Inventaire ; pivots spreadsheet acceptent exclusivement filtres opérations entrepôt",
      },
    ],
    explanation: {
      en: "Data source domains work like list view filters, controlling which records populate pivot aggregations.",
      fr: "Les domaines source de données fonctionnent comme filtres vue liste, contrôlant quels enregistrements alimentent agrégations pivot.",
    },
  }),
  complexQ({
    id: "spr-012",
    module: "spreadsheet",
    text: {
      en: "Can multiple users collaborate on the same Odoo Spreadsheet in Odoo 19?",
      fr: "Plusieurs utilisateurs peuvent-ils collaborer sur le même Odoo Spreadsheet dans Odoo 19 ?",
    },
    correct: {
      en: "Yes — shared spreadsheets support concurrent editing for users with edit access, similar to other Odoo documents",
      fr: "Oui — spreadsheets partagés supportent édition concurrente pour utilisateurs avec accès édition, comme autres documents Odoo",
    },
    distractors: [
      {
        en: "Only one user may open a spreadsheet at a time; others receive a locked read-only copy until it is closed",
        fr: "Un seul utilisateur peut ouvrir spreadsheet à la fois ; autres reçoivent copie lecture seule verrouillée jusqu'à fermeture",
      },
      {
        en: "Share the spreadsheet only as a read-only dashboard tile; concurrent cell editing requires pinning the file to a private Discuss channel first",
        fr: "Partager le spreadsheet uniquement comme tuile de tableau de bord en lecture seule ; l'édition concurrente des cellules exige d'épingler le fichier dans un canal Discuss privé",
      },
      {
        en: "Multiple editors are allowed only for spreadsheets stored in the Knowledge app, not standalone Spreadsheet records",
        fr: "Éditeurs multiples autorisés uniquement spreadsheets stockés app Knowledge, pas enregistrements Spreadsheet autonomes",
      },
    ],
    explanation: {
      en: "With proper sharing rights, team members can edit the same spreadsheet simultaneously within Odoo.",
      fr: "Avec droits partage appropriés, membres équipe peuvent éditer même spreadsheet simultanément dans Odoo.",
    },
  }),
  complexQ({
    id: "spr-013",
    module: "spreadsheet",
    text: {
      en: "What happens when you duplicate an Odoo Spreadsheet in Odoo 19?",
      fr: "Que se passe-t-il quand on duplique un Odoo Spreadsheet dans Odoo 19 ?",
    },
    correct: {
      en: "A copy is created retaining layout, formulas, charts, and links to the same Odoo data source configurations",
      fr: "Une copie est créée conservant mise en page, formules, graphiques et liens vers mêmes configurations sources Odoo",
    },
    distractors: [
      {
        en: "Duplication severs all data source links; the copy contains hard-coded values with no live Odoo connection",
        fr: "Duplication rompt tous liens sources ; copie contient valeurs figées sans connexion Odoo live",
      },
      {
        en: "Duplicating triggers a manufacturing order for each pivot measure defined on the original spreadsheet",
        fr: "Dupliquer déclenche ordre fabrication pour chaque mesure pivot définie sur spreadsheet original",
      },
      {
        en: "Only the spreadsheet owner can duplicate; copies are stored as encrypted attachments invisible to other users",
        fr: "Seul propriétaire spreadsheet peut dupliquer ; copies stockées pièces jointes chiffrées invisibles autres utilisateurs",
      },
    ],
    explanation: {
      en: "Duplication is a fast way to template reports: structure and data bindings copy over for customization.",
      fr: "Duplication est moyen rapide de modéliser rapports : structure et liaisons données se copient pour personnalisation.",
    },
  }),
  complexQ({
    id: "spr-014",
    module: "spreadsheet",
    text: {
      en: "How do global filters work on dashboard spreadsheets in Odoo 19?",
      fr: "Comment fonctionnent les filtres globaux sur spreadsheets de tableau de bord Odoo 19 ?",
    },
    correct: {
      en: "A single filter (e.g., date range or analytic account) applies consistently across all linked spreadsheet panels",
      fr: "Un filtre unique (ex. plage dates ou compte analytique) s'applique uniformément sur tous panneaux spreadsheet liés",
    },
    distractors: [
      {
        en: "Global filters affect CRM pipeline stages only; spreadsheet dashboards require separate filters per chart widget",
        fr: "Filtres globaux affectent étapes pipeline CRM uniquement ; dashboards spreadsheet exigent filtres séparés par widget graphique",
      },
      {
        en: "Each user must set personal filters in Preferences; global filters cannot synchronize multiple spreadsheet tiles",
        fr: "Chaque utilisateur doit définir filtres personnels Préférences ; filtres globaux ne peuvent pas synchroniser plusieurs tuiles spreadsheet",
      },
      {
        en: "Global filters rewrite database records temporarily; reverting requires reloading the spreadsheet from backup",
        fr: "Filtres globaux réécrivent temporairement enregistrements base ; restauration exige rechargement spreadsheet depuis sauvegarde",
      },
    ],
    explanation: {
      en: "Global filters let dashboard viewers change period or dimension once and update all embedded spreadsheet widgets.",
      fr: "Filtres globaux permettent aux viewers dashboard de changer période ou dimension une fois et mettre à jour tous widgets spreadsheet intégrés.",
    },
  }),
  complexQ({
    id: "spr-015",
    module: "spreadsheet",
    text: {
      en: "Which Odoo models can typically feed Spreadsheet data sources in Odoo 19?",
      fr: "Quels modèles Odoo peuvent typiquement alimenter sources de données Spreadsheet Odoo 19 ?",
    },
    correct: {
      en: "Core business models such as sales orders, invoices, stock moves, CRM leads, and other app records with list views",
      fr: "Modèles métier principaux comme commandes vente, factures, mouvements stock, pistes CRM et autres enregistrements apps avec vues liste",
    },
    distractors: [
      {
        en: "Only website page HTML nodes and blog post tags; operational ERP models are excluded from data sources",
        fr: "Uniquement nœuds HTML pages website et étiquettes articles blog ; modèles ERP opérationnels exclus des sources",
      },
      {
        en: "Only employee profile photos and attachment metadata; transactional models cannot connect to spreadsheets",
        fr: "Uniquement photos profil employé et métadonnées pièces jointes ; modèles transactionnels ne peuvent pas connecter spreadsheets",
      },
      {
        en: "Custom Studio models only; standard Odoo apps block spreadsheet integration for built-in models",
        fr: "Modèles Studio personnalisés uniquement ; apps Odoo standard bloquent intégration spreadsheet pour modèles natifs",
      },
    ],
    explanation: {
      en: "Spreadsheet data sources connect to most Odoo models exposed in list/pivot views across installed apps.",
      fr: "Sources Spreadsheet se connectent à la plupart modèles Odoo exposés en vues liste/pivot des apps installées.",
    },
  }),
  complexQ({
    id: "spr-016",
    module: "spreadsheet",
    text: {
      en: "How can an Odoo Spreadsheet be exported from Odoo 19?",
      fr: "Comment exporter une feuille de calcul Odoo depuis Odoo 19 ?",
    },
    correct: {
      en: "Download as an Excel (xlsx) file preserving sheet structure, formulas, and layout for offline sharing",
      fr: "Télécharger en fichier Excel (xlsx) conservant structure feuilles, formules et mise en page pour partage hors ligne",
    },
    distractors: [
      {
        en: "Export is limited to PDF print preview; xlsx download removes all formulas and Odoo data source bindings",
        fr: "Export limité à aperçu impression PDF ; téléchargement xlsx supprime toutes formules et liaisons sources Odoo",
      },
      {
        en: "Only administrators can export via database backup; standard users must request CSV from technical support",
        fr: "Seuls administrateurs exportent via sauvegarde base ; utilisateurs standard doivent demander CSV au support technique",
      },
      {
        en: "Spreadsheets sync automatically to Google Drive; manual export from Odoo is disabled in version 19",
        fr: "Spreadsheets synchronisent automatiquement Google Drive ; export manuel depuis Odoo est désactivé version 19",
      },
    ],
    explanation: {
      en: "xlsx export lets users share spreadsheet layouts externally while live data refresh remains an in-Odoo feature.",
      fr: "Export xlsx permet partager mises en page spreadsheet externement tandis rafraîchissement live reste fonctionnalité in-Odoo.",
    },
  }),
  complexQ({
    id: "spr-017",
    module: "spreadsheet",
    text: {
      en: "What is a measure in an Odoo Spreadsheet pivot table?",
      fr: "Qu'est-ce qu'une mesure dans un tableau croisé Spreadsheet Odoo ?",
    },
    correct: {
      en: "A numeric field aggregated (sum, average, count, etc.) across grouped records in the pivot",
      fr: "Un champ numérique agrégé (somme, moyenne, compte, etc.) sur enregistrements regroupés dans le pivot",
    },
    distractors: [
      {
        en: "A text label column displayed as row headers without any numeric aggregation in the pivot engine",
        fr: "Une colonne libellé texte affichée en en-têtes lignes sans agrégation numérique dans moteur pivot",
      },
      {
        en: "A warehouse route priority value determining which stock location supplies pivot data rows",
        fr: "Une valeur priorité route entrepôt déterminant quel emplacement stock alimente lignes données pivot",
      },
      {
        en: "A payroll salary rule category code mapped to employee contract types for payslip computation",
        fr: "Un code catégorie règle salariale paie mappé aux types contrat employé pour calcul fiche de paie",
      },
    ],
    explanation: {
      en: "Measures define what numbers to compute (e.g., sum of amount_total) for each pivot intersection.",
      fr: "Mesures définissent quels nombres calculer (ex. somme amount_total) pour chaque intersection pivot.",
    },
  }),
  complexQ({
    id: "spr-018",
    module: "spreadsheet",
    text: {
      en: "Can Odoo Spreadsheet replace official statutory accounting reports in Odoo 19?",
      fr: "Odoo Spreadsheet peut-il remplacer les rapports comptables légaux officiels Odoo 19 ?",
    },
    correct: {
      en: "No — spreadsheets complement Accounting reports for custom analysis; legal statements remain in the Accounting app",
      fr: "Non — spreadsheets complètent rapports Comptabilité pour analyse personnalisée ; états légaux restent dans app Comptabilité",
    },
    distractors: [
      {
        en: "Yes — once a spreadsheet is pinned to the Accounting dashboard it becomes the legal general ledger source",
        fr: "Oui — une fois spreadsheet épinglé tableau de bord Comptabilité il devient source grand livre légal",
      },
      {
        en: "Yes — statutory tax reports are generated exclusively from ODOO.PIVOT formulas on vendor bill list sources",
        fr: "Oui — rapports fiscaux légaux générés exclusivement depuis formules ODOO.PIVOT sur sources liste factures fournisseur",
      },
      {
        en: "Spreadsheets replace Accounting only in POS companies; other businesses must use both tools equally for compliance",
        fr: "Spreadsheets remplacent Comptabilité uniquement sociétés POS ; autres entreprises doivent utiliser deux outils également pour conformité",
      },
    ],
    explanation: {
      en: "Spreadsheet is an analytical layer; balance sheet, P&L, and tax filings use dedicated Accounting reports.",
      fr: "Spreadsheet est couche analytique ; bilan, compte de résultat et déclarations fiscales utilisent rapports Comptabilité dédiés.",
    },
  }),
  complexQ({
    id: "spr-019",
    module: "spreadsheet",
    text: {
      en: "How can sales commission calculations be built in Odoo Spreadsheet?",
      fr: "Comment construire des calculs de commission commerciale dans Odoo Spreadsheet ?",
    },
    correct: {
      en: "Link a sales order or invoice list data source and apply formulas reflecting commission tiers and conditions",
      fr: "Lier source liste commandes vente ou factures et appliquer formules reflétant paliers et conditions de commission",
    },
    distractors: [
      {
        en: "Commissions require a separate ERP; Odoo Spreadsheet cannot read sales model fields or numeric measures",
        fr: "Commissions exigent ERP séparé ; Odoo Spreadsheet ne peut pas lire champs modèle vente ou mesures numériques",
      },
      {
        en: "Configure commission only in Payroll salary rules; Spreadsheet is read-only for sales data and blocks formulas",
        fr: "Configurer commission uniquement règles salariales Paie ; Spreadsheet est lecture seule données vente et bloque formules",
      },
      {
        en: "Create a manufacturing BOM per salesperson; MO component costs determine commission accrual automatically",
        fr: "Créer nomenclature fabrication par commercial ; coûts composants OF déterminent acquisition commission automatiquement",
      },
    ],
    explanation: {
      en: "Live sales data plus spreadsheet formulas enable flexible commission models without custom development.",
      fr: "Données vente live plus formules spreadsheet permettent modèles commission flexibles sans développement sur mesure.",
    },
  }),
  complexQ({
    id: "spr-020",
    module: "spreadsheet",
    text: {
      en: "What controls who can edit a shared Odoo Spreadsheet in Odoo 19?",
      fr: "Qu'est-ce qui contrôle qui peut modifier un Odoo Spreadsheet partagé Odoo 19 ?",
    },
    correct: {
      en: "Document access rights on the spreadsheet record granting read or edit permission to users and groups",
      fr: "Droits d'accès document sur enregistrement spreadsheet accordant permission lecture ou édition à utilisateurs et groupes",
    },
    distractors: [
      {
        en: "Only the database superuser can edit any spreadsheet; other users always have view-only access regardless of sharing",
        fr: "Seul superutilisateur base peut éditer tout spreadsheet ; autres utilisateurs ont toujours accès vue seule indépendamment partage",
      },
      {
        en: "Portal users receive edit rights by default on all spreadsheets published to the website careers section",
        fr: "Utilisateurs portail reçoivent droits édition par défaut sur spreadsheets publiés section carrières website",
      },
      {
        en: "Edit access is controlled by Inventory manager group membership exclusively for spreadsheet records",
        fr: "Accès édition contrôlé par appartenance groupe responsable Inventaire exclusivement pour enregistrements spreadsheet",
      },
    ],
    explanation: {
      en: "Standard Odoo document permissions (user/group read or edit) govern spreadsheet modification rights.",
      fr: "Permissions document Odoo standard (lecture ou édition utilisateur/groupe) régissent droits modification spreadsheet.",
    },
  }),
];
