import { complexQ } from "./helpers";

export const knowledgeQuestions = [
  complexQ({
    id: "kno-001",
    module: "knowledge",
    text: {
      en: "What is the primary purpose of the Odoo 19 Knowledge app?",
      fr: "Quel est l'objectif principal de l'application Knowledge dans Odoo 19 ?",
    },
    correct: {
      en: "A collaborative internal knowledge base where teams create, organize, and share company documentation",
      fr: "Une base de connaissances collaborative interne où les équipes créent, organisent et partagent la documentation entreprise",
    },
    distractors: [
      {
        en: "A customer-facing eCommerce catalog publishing product pages and online checkout flows to website visitors",
        fr: "Un catalogue eCommerce client publiant pages produits et parcours de paiement en ligne aux visiteurs du site",
      },
      {
        en: "A manufacturing work center dashboard tracking BOM consumption and shop floor operation times in real time",
        fr: "Un tableau de bord centre de travail fabrication suivant consommation nomenclatures et temps opérations atelier en temps réel",
      },
      {
        en: "An accounting ledger module posting journal entries and generating statutory financial statements automatically",
        fr: "Un module grand livre comptable comptabilisant écritures et générant automatiquement états financiers légaux",
      },
    ],
    explanation: {
      en: "Knowledge is Odoo's internal wiki for procedures, policies, and team documentation with rich editing and access control.",
      fr: "Knowledge est le wiki interne Odoo pour procédures, politiques et documentation d'équipe avec édition riche et contrôle d'accès.",
    },
  }),
  complexQ({
    id: "kno-002",
    module: "knowledge",
    text: {
      en: "How are Knowledge articles structured and organized in Odoo 19?",
      fr: "Comment les articles Knowledge sont-ils structurés et organisés dans Odoo 19 ?",
    },
    correct: {
      en: "In a hierarchical article tree with parent/child relationships, workspaces, and per-article access permissions",
      fr: "Dans une arborescence hiérarchique avec relations parent/enfant, espaces de travail et permissions d'accès par article",
    },
    distractors: [
      {
        en: "As flat records sorted alphabetically in the chart of accounts with no nesting or permission granularity",
        fr: "Comme enregistrements plats triés alphabétiquement dans le plan comptable sans imbrication ni granularité de permissions",
      },
      {
        en: "By inventory product categories where each article inherits stock valuation and warehouse routing rules",
        fr: "Par catégories produits inventaire où chaque article hérite valorisation stock et règles de routage entrepôt",
      },
      {
        en: "Through CRM pipeline stages that move articles from New to Won with expected revenue forecasting fields",
        fr: "Via étapes pipeline CRM déplaçant articles de Nouveau à Gagné avec champs de prévision de revenus attendus",
      },
    ],
    explanation: {
      en: "Knowledge uses a sidebar tree, workspaces for grouping, and granular read/write permissions on articles and sections.",
      fr: "Knowledge utilise une arborescence latérale, des workspaces pour regrouper, et des permissions lecture/écriture granulaires sur articles et sections.",
    },
  }),
  complexQ({
    id: "kno-003",
    module: "knowledge",
    text: {
      en: "How can Knowledge articles be referenced from other Odoo 19 apps?",
      fr: "Comment les articles Knowledge peuvent-ils être référencés depuis d'autres apps Odoo 19 ?",
    },
    correct: {
      en: "By linking or embedding articles from chatter, helpdesk tickets, and other records using Knowledge links and suggestions",
      fr: "En liant ou intégrant des articles depuis le chatter, tickets helpdesk et autres enregistrements via liens et suggestions Knowledge",
    },
    distractors: [
      {
        en: "By exporting each article as a PDF attachment on every sales order confirmation without inline references",
        fr: "En exportant chaque article en pièce jointe PDF sur chaque confirmation de commande vente sans références inline",
      },
      {
        en: "Only through the Website Builder by publishing articles as public blog posts visible to all internet visitors",
        fr: "Uniquement via Website Builder en publiant articles comme billets de blog publics visibles par tous visiteurs internet",
      },
      {
        en: "By duplicating article content into spreadsheet cells in Documents and sharing the sheet via portal access",
        fr: "En dupliquant contenu article dans cellules tableur Documents et partageant la feuille via accès portail",
      },
    ],
    explanation: {
      en: "Knowledge integrates with Odoo workflows: agents link articles on tickets, users reference them in chatter, and search suggests relevant content.",
      fr: "Knowledge s'intègre aux flux Odoo : les agents lient des articles sur tickets, les utilisateurs les référencent dans le chatter, et la recherche suggère du contenu pertinent.",
    },
  }),
  complexQ({
    id: "kno-004",
    module: "knowledge",
    text: {
      en: "How do you restrict read or write access to a specific Knowledge article in Odoo 19?",
      fr: "Comment restreindre l'accès lecture ou écriture à un article Knowledge spécifique dans Odoo 19 ?",
    },
    correct: {
      en: "Configure member permissions on the article or its workspace, granting read or write access to selected users and groups",
      fr: "Configurer les permissions membres sur l'article ou son workspace, accordant accès lecture ou écriture aux utilisateurs et groupes sélectionnés",
    },
    distractors: [
      {
        en: "Set the article's sales pricelist to internal-only so only employees with Sales Manager rights can open it",
        fr: "Définir la liste de prix vente de l'article en interne uniquement pour que seuls employés avec droits Responsable Ventes l'ouvrent",
      },
      {
        en: "Archive the parent menu item in Studio so the article disappears from all user dashboards permanently",
        fr: "Archiver l'élément de menu parent dans Studio pour que l'article disparaisse définitivement de tous tableaux de bord utilisateurs",
      },
      {
        en: "Move the article to a closed POS session so only cashiers with an active register session can view the content",
        fr: "Déplacer l'article vers une session POS clôturée pour que seuls caissiers avec session caisse active puissent voir le contenu",
      },
    ],
    explanation: {
      en: "Knowledge permissions are managed per article or workspace, allowing fine-grained control over who can view or edit content.",
      fr: "Les permissions Knowledge sont gérées par article ou workspace, permettant un contrôle fin sur qui peut voir ou modifier le contenu.",
    },
  }),
  complexQ({
    id: "kno-005",
    module: "knowledge",
    text: {
      en: "Which content blocks does the Odoo 19 Knowledge editor support?",
      fr: "Quels blocs de contenu l'éditeur Knowledge Odoo 19 supporte-t-il ?",
    },
    correct: {
      en: "Rich text, headings, lists, tables, images, checklists, embedded media, and other structured documentation blocks",
      fr: "Texte riche, titres, listes, tableaux, images, checklists, médias intégrés et autres blocs de documentation structurée",
    },
    distractors: [
      {
        en: "Python source code modules only, requiring developers to write server-side logic before any content can be saved",
        fr: "Uniquement modules code Python, exigeant que développeurs écrivent logique serveur avant qu'un contenu puisse être sauvegardé",
      },
      {
        en: "Accounting journal entry lines with debit/credit columns that post directly to the general ledger on publish",
        fr: "Lignes d'écritures comptables avec colonnes débit/crédit comptabilisées directement au grand livre à la publication",
      },
      {
        en: "Manufacturing BOM components with operation times that generate production orders when the article is saved",
        fr: "Composants nomenclature fabrication avec temps opérations générant ordres de production à la sauvegarde de l'article",
      },
    ],
    explanation: {
      en: "The Knowledge editor is a block-based rich editor designed for internal documentation, not code or accounting entries.",
      fr: "L'éditeur Knowledge est un éditeur riche par blocs conçu pour documentation interne, pas pour code ou écritures comptables.",
    },
  }),
  complexQ({
    id: "kno-006",
    module: "knowledge",
    text: {
      en: "What is a Knowledge workspace in Odoo 19?",
      fr: "Qu'est-ce qu'un workspace Knowledge dans Odoo 19 ?",
    },
    correct: {
      en: "A container grouping related articles under shared access rules, typically organized by team, department, or topic",
      fr: "Un conteneur regroupant articles liés sous règles d'accès partagées, typiquement organisé par équipe, département ou sujet",
    },
    distractors: [
      {
        en: "A physical warehouse location in Inventory where storable documentation products are tracked by serial numbers",
        fr: "Un emplacement entrepôt physique Inventaire où produits documentation stockables sont suivis par numéros de série",
      },
      {
        en: "A Project task board stage column where articles appear as kanban cards with planned hours and deadlines",
        fr: "Une colonne étape tableau tâches Projet où articles apparaissent comme cartes kanban avec heures planifiées et échéances",
      },
      {
        en: "A payroll contract type defining employee compensation rules linked to Knowledge article authorship bonuses",
        fr: "Un type contrat paie définissant règles rémunération employés liées aux primes d'auteur d'articles Knowledge",
      },
    ],
    explanation: {
      en: "Workspaces organize the Knowledge sidebar and apply common permission sets to groups of related articles.",
      fr: "Les workspaces organisent la barre latérale Knowledge et appliquent jeux de permissions communs à groupes d'articles liés.",
    },
  }),
  complexQ({
    id: "kno-007",
    module: "knowledge",
    text: {
      en: "How can users efficiently find Knowledge articles in Odoo 19?",
      fr: "Comment les utilisateurs peuvent-ils trouver efficacement des articles Knowledge dans Odoo 19 ?",
    },
    correct: {
      en: "Use the Knowledge search bar with keywords, browse the article tree, and apply filters to narrow results",
      fr: "Utiliser la barre de recherche Knowledge avec mots-clés, parcourir l'arborescence et appliquer filtres pour affiner les résultats",
    },
    distractors: [
      {
        en: "Scan product barcodes on the POS interface so articles matching inventory SKUs open automatically on the register",
        fr: "Scanner codes-barres produits sur interface POS pour que articles correspondant aux SKU inventaire s'ouvrent automatiquement à la caisse",
      },
      {
        en: "Run the aged receivable report filtered by partner so overdue invoices display linked Knowledge documentation",
        fr: "Exécuter rapport balance âgée clients filtré par partenaire pour afficher documentation Knowledge liée aux factures échues",
      },
      {
        en: "Navigate only through the Discuss channels list where each article is stored as a pinned message thread",
        fr: "Naviguer uniquement via liste canaux Discuss où chaque article est stocké comme fil de messages épinglé",
      },
    ],
    explanation: {
      en: "Knowledge provides full-text search, sidebar navigation, and filters to locate articles quickly across workspaces.",
      fr: "Knowledge fournit recherche full-text, navigation latérale et filtres pour localiser rapidement articles dans les workspaces.",
    },
  }),
  complexQ({
    id: "kno-008",
    module: "knowledge",
    text: {
      en: "How do article templates work in Odoo 19 Knowledge?",
      fr: "Comment fonctionnent les modèles d'articles dans Knowledge Odoo 19 ?",
    },
    correct: {
      en: "They provide reusable article structures so teams can create new pages with consistent headings, sections, and blocks",
      fr: "Ils fournissent structures d'articles réutilisables pour créer nouvelles pages avec titres, sections et blocs cohérents",
    },
    distractors: [
      {
        en: "They are QWeb report layouts exported from Accounting that print Knowledge articles as statutory PDF filings",
        fr: "Ce sont mises en page rapports QWeb exportées Comptabilité imprimant articles Knowledge comme déclarations PDF légales",
      },
      {
        en: "They are eCommerce product templates that duplicate pricing rules and tax mappings onto website shop pages",
        fr: "Ce sont modèles produits eCommerce dupliquant règles tarifaires et mappings taxes sur pages boutique site web",
      },
      {
        en: "They are Survey form blueprints that replace Knowledge articles and collect responses instead of displaying content",
        fr: "Ce sont plans formulaires Survey remplaçant articles Knowledge et collectant réponses au lieu d'afficher contenu",
      },
    ],
    explanation: {
      en: "Knowledge templates standardize documentation formats, speeding up creation of SOPs, onboarding guides, and policy pages.",
      fr: "Les modèles Knowledge standardisent formats documentation, accélérant création de POS, guides onboarding et pages politiques.",
    },
  }),
  complexQ({
    id: "kno-009",
    module: "knowledge",
    text: {
      en: "How does Knowledge integrate with the Helpdesk app in Odoo 19?",
      fr: "Comment Knowledge s'intègre-t-il à l'app Helpdesk dans Odoo 19 ?",
    },
    correct: {
      en: "Support agents can search, link, and suggest Knowledge articles directly on tickets to resolve issues faster",
      fr: "Les agents support peuvent rechercher, lier et suggérer articles Knowledge directement sur tickets pour résoudre incidents plus vite",
    },
    distractors: [
      {
        en: "Helpdesk tickets automatically convert into Knowledge articles when closed, replacing the original ticket record",
        fr: "Les tickets Helpdesk se convertissent automatiquement en articles Knowledge à la clôture, remplaçant l'enregistrement ticket original",
      },
      {
        en: "Knowledge articles sync bidirectionally with manufacturing work orders so BOM changes update ticket descriptions",
        fr: "Les articles Knowledge se synchronisent bidirectionnellement avec ordres fabrication pour que changements nomenclature mettent à jour descriptions tickets",
      },
      {
        en: "Helpdesk SLAs are calculated from Knowledge article word count rather than ticket priority or response time",
        fr: "Les SLA Helpdesk sont calculés depuis nombre mots articles Knowledge plutôt que priorité ticket ou temps de réponse",
      },
    ],
    explanation: {
      en: "The Helpdesk–Knowledge integration lets agents attach relevant documentation to tickets, reducing resolution time.",
      fr: "L'intégration Helpdesk–Knowledge permet aux agents d'attacher documentation pertinente aux tickets, réduisant temps de résolution.",
    },
  }),
  complexQ({
    id: "kno-010",
    module: "knowledge",
    text: {
      en: "What is the purpose of the Favorites feature in Odoo 19 Knowledge?",
      fr: "À quoi sert la fonctionnalité Favoris dans Knowledge Odoo 19 ?",
    },
    correct: {
      en: "It lets users bookmark frequently used articles for quick access from their personal Knowledge favorites list",
      fr: "Elle permet aux utilisateurs de mettre en favori articles fréquemment utilisés pour accès rapide depuis leur liste favoris Knowledge personnelle",
    },
    distractors: [
      {
        en: "It marks vendor bills as preferred payment terms so Accounting prioritizes those invoices in bank reconciliation",
        fr: "Elle marque factures fournisseurs avec conditions paiement préférées pour que Comptabilité priorise ces factures au rapprochement bancaire",
      },
      {
        en: "It flags CRM opportunities as hot leads and moves them to the top of the sales pipeline kanban automatically",
        fr: "Elle signale opportunités CRM comme leads chauds et les déplace automatiquement en haut kanban pipeline ventes",
      },
      {
        en: "It assigns manufacturing work center priority so production orders linked to favorited articles run first",
        fr: "Elle assigne priorité centre travail fabrication pour que ordres production liés aux articles favoris s'exécutent en premier",
      },
    ],
    explanation: {
      en: "Favorites give each user a personal shortcut list to important articles they reference regularly.",
      fr: "Les favoris donnent à chaque utilisateur une liste raccourcis personnelle vers articles importants qu'il consulte régulièrement.",
    },
  }),
  complexQ({
    id: "kno-011",
    module: "knowledge",
    text: {
      en: "How can checklists be used inside Knowledge articles in Odoo 19?",
      fr: "Comment les checklists peuvent-elles être utilisées dans les articles Knowledge Odoo 19 ?",
    },
    correct: {
      en: "Insert checklist blocks in the editor to track procedural steps, onboarding tasks, or audit items within the article",
      fr: "Insérer blocs checklist dans l'éditeur pour suivre étapes procédurales, tâches onboarding ou points audit dans l'article",
    },
    distractors: [
      {
        en: "Import checklist items from Project tasks so completing a checklist line automatically closes linked project milestones",
        fr: "Importer éléments checklist depuis tâches Projet pour que compléter ligne checklist clôture automatiquement jalons projet liés",
      },
      {
        en: "Convert each checklist item into a separate inventory transfer that validates stock moves when boxes are checked",
        fr: "Convertir chaque élément checklist en transfert inventaire séparé validant mouvements stock quand cases sont cochées",
      },
      {
        en: "Require Studio Python code on every article before checklist blocks become available in the Knowledge toolbar",
        fr: "Exiger code Python Studio sur chaque article avant que blocs checklist deviennent disponibles dans barre outils Knowledge",
      },
    ],
    explanation: {
      en: "Checklist blocks are native editor elements for interactive procedures without requiring Studio or external tools.",
      fr: "Les blocs checklist sont éléments natifs de l'éditeur pour procédures interactives sans Studio ni outils externes.",
    },
  }),
  complexQ({
    id: "kno-012",
    module: "knowledge",
    text: {
      en: "How is article change history tracked in Odoo 19 Knowledge?",
      fr: "Comment l'historique des modifications d'articles est-il suivi dans Knowledge Odoo 19 ?",
    },
    correct: {
      en: "Through the article chatter log and revision history showing who edited content and when changes were made",
      fr: "Via journal chatter de l'article et historique révisions montrant qui a modifié contenu et quand changements ont été faits",
    },
    distractors: [
      {
        en: "By linking each article to a Git repository branch that developers must push before publishing any update",
        fr: "En liant chaque article à branche dépôt Git que développeurs doivent pousser avant publication de toute mise à jour",
      },
      {
        en: "Through payroll payslip audit trails that record employee edits as overtime hours on the next payroll run",
        fr: "Via pistes audit fiches paie enregistrant modifications employés comme heures supplémentaires à la prochaine paie",
      },
      {
        en: "By exporting article versions to spreadsheet backups stored in Documents with no inline history inside Knowledge",
        fr: "En exportant versions articles vers sauvegardes tableur Documents sans historique inline dans Knowledge",
      },
    ],
    explanation: {
      en: "Odoo tracks Knowledge edits in the chatter and revision history, keeping an audit trail without external version control.",
      fr: "Odoo suit modifications Knowledge dans chatter et historique révisions, conservant piste audit sans contrôle version externe.",
    },
  }),
  complexQ({
    id: "kno-013",
    module: "knowledge",
    text: {
      en: "Can external portal users access Knowledge articles in Odoo 19?",
      fr: "Les utilisateurs portail externes peuvent-ils accéder aux articles Knowledge dans Odoo 19 ?",
    },
    correct: {
      en: "Only when an article is explicitly shared with portal access; Knowledge is primarily for internal users by default",
      fr: "Uniquement quand un article est explicitement partagé avec accès portail ; Knowledge est principalement pour utilisateurs internes par défaut",
    },
    distractors: [
      {
        en: "Yes, all published Knowledge articles are automatically visible to every portal user registered on the website",
        fr: "Oui, tous articles Knowledge publiés sont automatiquement visibles par tout utilisateur portail enregistré sur le site",
      },
      {
        en: "Portal users access Knowledge through the POS customer display screen during checkout without separate permissions",
        fr: "Utilisateurs portail accèdent Knowledge via écran client POS pendant encaissement sans permissions séparées",
      },
      {
        en: "Portal access is granted by assigning Knowledge articles to vendor bills so suppliers see them in Accounting",
        fr: "Accès portail est accordé en assignant articles Knowledge à factures fournisseurs pour que fournisseurs les voient en Comptabilité",
      },
    ],
    explanation: {
      en: "Knowledge is an internal tool; portal sharing must be configured deliberately on specific articles when needed.",
      fr: "Knowledge est un outil interne ; partage portail doit être configuré délibérément sur articles spécifiques si nécessaire.",
    },
  }),
  complexQ({
    id: "kno-014",
    module: "knowledge",
    text: {
      en: "How can AI assist with Knowledge article creation in Odoo 19?",
      fr: "Comment l'IA peut-elle assister la création d'articles Knowledge dans Odoo 19 ?",
    },
    correct: {
      en: "AI can draft, expand, or refine article content based on prompts, helping authors write documentation faster",
      fr: "L'IA peut rédiger, développer ou affiner contenu article selon prompts, aidant auteurs à écrire documentation plus vite",
    },
    distractors: [
      {
        en: "AI automatically publishes articles to the public website and removes outdated content without author review",
        fr: "L'IA publie automatiquement articles sur site web public et supprime contenu obsolète sans revue auteur",
      },
      {
        en: "AI replaces all manual editing by converting Knowledge into spreadsheet formulas linked to payroll calculations",
        fr: "L'IA remplace toute édition manuelle en convertissant Knowledge en formules tableur liées aux calculs paie",
      },
      {
        en: "AI generates manufacturing BOMs from article text and posts production orders when the Generate button is clicked",
        fr: "L'IA génère nomenclatures fabrication depuis texte article et comptabilise ordres production au clic bouton Générer",
      },
    ],
    explanation: {
      en: "Odoo 19 AI assists authors with writing suggestions; content remains under user control for review before sharing.",
      fr: "L'IA Odoo 19 assiste auteurs avec suggestions rédaction ; contenu reste sous contrôle utilisateur pour revue avant partage.",
    },
  }),
  complexQ({
    id: "kno-015",
    module: "knowledge",
    text: {
      en: "What is the role of article icons or covers in Odoo 19 Knowledge?",
      fr: "Quel est le rôle des icônes ou couvertures d'articles dans Knowledge Odoo 19 ?",
    },
    correct: {
      en: "They visually identify articles in the sidebar tree and search results, making navigation and recognition easier",
      fr: "Ils identifient visuellement articles dans arborescence latérale et résultats recherche, facilitant navigation et reconnaissance",
    },
    distractors: [
      {
        en: "They define fiscal tax codes applied to sales orders referencing the article in the product configuration",
        fr: "Ils définissent codes taxes fiscales appliqués aux commandes vente référençant l'article dans configuration produit",
      },
      {
        en: "They set employee seniority levels in HR that determine payroll grade and expense reimbursement limits",
        fr: "Ils définissent niveaux ancienneté employés RH déterminant grade paie et plafonds remboursement notes de frais",
      },
      {
        en: "They control inventory reordering rules so stock replenishment triggers when an article icon changes color",
        fr: "Ils contrôlent règles réapprovisionnement inventaire pour déclencher réassort quand couleur icône article change",
      },
    ],
    explanation: {
      en: "Icons and covers are cosmetic navigation aids in the Knowledge interface, not linked to business configuration.",
      fr: "Icônes et couvertures sont aides navigation cosmétiques dans interface Knowledge, non liées à configuration métier.",
    },
  }),
  complexQ({
    id: "kno-016",
    module: "knowledge",
    text: {
      en: "How do you reorganize the Knowledge article hierarchy in Odoo 19?",
      fr: "Comment réorganiser la hiérarchie des articles Knowledge dans Odoo 19 ?",
    },
    correct: {
      en: "Drag and drop articles in the sidebar tree or set a parent article to nest content under the desired section",
      fr: "Glisser-déposer articles dans arborescence latérale ou définir article parent pour imbriquer contenu sous section souhaitée",
    },
    distractors: [
      {
        en: "Reorder articles by changing their sequence numbers in the inventory product category configuration screen",
        fr: "Réordonner articles en changeant numéros séquence dans écran configuration catégorie produits inventaire",
      },
      {
        en: "Move articles by reassigning them to different CRM sales teams so pipeline stages control the folder structure",
        fr: "Déplacer articles en les réassignant à différentes équipes ventes CRM pour que étapes pipeline contrôlent structure dossiers",
      },
      {
        en: "Restructure the tree by posting journal entries that debit and credit Knowledge accounts in Accounting",
        fr: "Restructurer arborescence en comptabilisant écritures débitant et créditant comptes Knowledge en Comptabilité",
      },
    ],
    explanation: {
      en: "The Knowledge sidebar supports drag-and-drop and parent assignment to build a logical documentation tree.",
      fr: "La barre latérale Knowledge supporte glisser-déposer et assignation parent pour construire arborescence documentation logique.",
    },
  }),
  complexQ({
    id: "kno-017",
    module: "knowledge",
    text: {
      en: "Can videos and other media be embedded in Knowledge articles in Odoo 19?",
      fr: "Vidéos et autres médias peuvent-ils être intégrés dans articles Knowledge Odoo 19 ?",
    },
    correct: {
      en: "Yes, the rich editor supports embedded video links and media blocks for training and procedure documentation",
      fr: "Oui, l'éditeur riche supporte liens vidéo intégrés et blocs médias pour documentation formation et procédures",
    },
    distractors: [
      {
        en: "Videos must be attached as manufacturing operation worksheets and play only on the shop floor tablet interface",
        fr: "Vidéos doivent être attachées comme fiches opérations fabrication et ne jouent que sur interface tablette atelier",
      },
      {
        en: "Media files are stored exclusively in eCommerce product galleries and cannot appear inside Knowledge pages",
        fr: "Fichiers médias sont stockés exclusivement galeries produits eCommerce et ne peuvent apparaître dans pages Knowledge",
      },
      {
        en: "Only audio attachments uploaded through the Discuss app can be referenced as inline media inside Knowledge",
        fr: "Seules pièces jointes audio uploadées via app Discuss peuvent être référencées comme médias inline dans Knowledge",
      },
    ],
    explanation: {
      en: "Knowledge supports rich media embedding to create comprehensive training guides and visual SOPs.",
      fr: "Knowledge supporte intégration médias riches pour créer guides formation complets et POS visuelles.",
    },
  }),
  complexQ({
    id: "kno-018",
    module: "knowledge",
    text: {
      en: "What is the difference between private and shared Knowledge articles in Odoo 19?",
      fr: "Quelle est la différence entre articles Knowledge privés et partagés dans Odoo 19 ?",
    },
    correct: {
      en: "Private articles are visible only to the author until permissions are granted; shared articles are accessible to selected members",
      fr: "Articles privés visibles uniquement par auteur jusqu'à octroi permissions ; articles partagés accessibles aux membres sélectionnés",
    },
    distractors: [
      {
        en: "Private articles are read-only forever while shared articles allow anonymous internet editing without login",
        fr: "Articles privés sont lecture seule à vie tandis articles partagés permettent édition internet anonyme sans connexion",
      },
      {
        en: "Shared articles disable the chatter permanently whereas private articles post all edits to the general ledger",
        fr: "Articles partagés désactivent chatter définitivement tandis articles privés comptabilisent toutes modifications au grand livre",
      },
      {
        en: "Private articles sync to the website blog automatically and shared articles remain locked inside Inventory routes",
        fr: "Articles privés se synchronisent automatiquement blog site web et articles partagés restent verrouillés dans routes Inventaire",
      },
    ],
    explanation: {
      en: "Authors can draft privately and then share articles with specific users, groups, or workspaces when ready.",
      fr: "Auteurs peuvent rédiger en privé puis partager articles avec utilisateurs, groupes ou workspaces spécifiques une fois prêts.",
    },
  }),
  complexQ({
    id: "kno-019",
    module: "knowledge",
    text: {
      en: "How do you duplicate an existing Knowledge article in Odoo 19?",
      fr: "Comment dupliquer un article Knowledge existant dans Odoo 19 ?",
    },
    correct: {
      en: "Use the Duplicate action on the article to copy its content and structure as a starting point for a new page",
      fr: "Utiliser action Dupliquer sur article pour copier contenu et structure comme point de départ pour nouvelle page",
    },
    distractors: [
      {
        en: "Export the article to CSV from list view and re-import it through Settings → Technical → Import Records",
        fr: "Exporter article en CSV depuis vue liste et le réimporter via Paramètres → Technique → Importer enregistrements",
      },
      {
        en: "Copy article text into a POS product description and save it as a new storable item in Inventory",
        fr: "Copier texte article dans description produit POS et sauvegarder comme nouvel article stockable Inventaire",
      },
      {
        en: "Create a manufacturing BOM duplicate so the article structure copies routing operations instead of content blocks",
        fr: "Créer doublon nomenclature fabrication pour que structure article copie opérations routage au lieu de blocs contenu",
      },
    ],
    explanation: {
      en: "Duplicating an article preserves blocks and layout, saving time when creating similar documentation pages.",
      fr: "Dupliquer article préserve blocs et mise en page, gain de temps pour créer pages documentation similaires.",
    },
  }),
  complexQ({
    id: "kno-020",
    module: "knowledge",
    text: {
      en: "Why use Odoo Knowledge instead of an external wiki when running Odoo 19?",
      fr: "Pourquoi utiliser Knowledge Odoo plutôt qu'un wiki externe avec Odoo 19 ?",
    },
    correct: {
      en: "Native integration with Odoo apps, unified permissions, chatter, and in-context linking on business records",
      fr: "Intégration native apps Odoo, permissions unifiées, chatter et liens contextuels sur enregistrements métier",
    },
    distractors: [
      {
        en: "External wikis cannot store text content whereas Knowledge is the only Odoo app supporting formatted paragraphs",
        fr: "Wikis externes ne peuvent stocker contenu texte tandis Knowledge est seule app Odoo supportant paragraphes formatés",
      },
      {
        en: "Knowledge replaces Helpdesk entirely so support tickets are no longer needed once the wiki is populated",
        fr: "Knowledge remplace entièrement Helpdesk pour que tickets support ne soient plus nécessaires une fois wiki peuplé",
      },
      {
        en: "External wikis provide better inventory valuation but Knowledge lacks any search or organization features",
        fr: "Wikis externes fournissent meilleure valorisation inventaire mais Knowledge manque fonctionnalités recherche ou organisation",
      },
    ],
    explanation: {
      en: "Built-in Knowledge keeps documentation connected to Odoo workflows, permissions, and record-level integrations.",
      fr: "Knowledge intégré garde documentation connectée aux flux Odoo, permissions et intégrations au niveau enregistrements.",
    },
  }),
];
