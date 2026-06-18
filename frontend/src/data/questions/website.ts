import { complexQ } from "./helpers";

export const websiteQuestions = [
  complexQ({
    id: "web-001",
    module: "website",
    text: {
      en: "In Odoo 19 Website, which workflow lets you build pages with drag-and-drop without coding?",
      fr: "Dans Odoo 19 Website, quel workflow permet de créer des pages par glisser-déposer sans coder ?",
    },
    correct: {
      en: "Open the page, click Edit, then drag building blocks from the Blocks tab onto the layout",
      fr: "Ouvrir la page, cliquer sur Éditer, puis glisser des blocs de construction depuis l'onglet Blocs",
    },
    distractors: [
      {
        en: "Create pages exclusively from Website → Site → Pages backend list view by editing raw HTML fields",
        fr: "Créer les pages uniquement depuis Website → Site → Pages en modifiant des champs HTML bruts en backend",
      },
      {
        en: "Use Odoo Studio to add custom form views on the website.page model and compose layouts from there",
        fr: "Utiliser Odoo Studio pour ajouter des vues formulaire sur website.page et composer les mises en page",
      },
      {
        en: "Upload static HTML files under Website → Configuration → Settings → Attachments for each new page",
        fr: "Téléverser des fichiers HTML statiques dans Website → Configuration → Paramètres → Pièces jointes",
      },
    ],
    explanation: {
      en: "The Website Builder is the frontend editor: click Edit, then drag categories and inner content blocks onto the page.",
      fr: "Le Website Builder est l'éditeur frontend : cliquer sur Éditer, puis glisser des blocs catégories et de contenu interne.",
    },
  }),
  complexQ({
    id: "web-002",
    module: "website",
    text: {
      en: "How do you make a draft website page visible to visitors in Odoo 19?",
      fr: "Comment rendre une page brouillon visible aux visiteurs dans Odoo 19 ?",
    },
    correct: {
      en: "Toggle the Published switch in the upper-right corner from Unpublished to Published",
      fr: "Basculer l'interrupteur Publié en haut à droite de Non publié à Publié",
    },
    distractors: [
      {
        en: "Set Indexed to Yes in Website → Site → Properties without changing the Published status",
        fr: "Activer Indexé dans Website → Site → Propriétés sans modifier le statut Publié",
      },
      {
        en: "Save the page from the backend list view at Website → Site → Pages without toggling visibility",
        fr: "Enregistrer la page depuis la vue liste Website → Site → Pages sans basculer la visibilité",
      },
      {
        en: "Change Visibility to Public in page properties while leaving the page in Unpublished state",
        fr: "Passer la Visibilité à Public dans les propriétés tout en laissant la page Non publiée",
      },
    ],
    explanation: {
      en: "Pages remain hidden until Published is enabled; visibility rules control who can access an already published page.",
      fr: "Les pages restent masquées tant que Publié n'est pas activé ; la visibilité contrôle qui accède à une page déjà publiée.",
    },
  }),
  complexQ({
    id: "web-003",
    module: "website",
    text: {
      en: "Which content is managed directly through the Odoo 19 Website application?",
      fr: "Quel contenu est géré directement via l'application Website Odoo 19 ?",
    },
    correct: {
      en: "Static pages, navigation menus, contact forms, and building blocks (snippets)",
      fr: "Pages statiques, menus de navigation, formulaires de contact et blocs de construction (snippets)",
    },
    distractors: [
      {
        en: "Blog articles exclusively via the Blog app backend menu, independent of Website pages",
        fr: "Articles de blog exclusivement via le menu backend Blog, indépendamment des pages Website",
      },
      {
        en: "Product master data and stock moves exclusively via Inventory → Products and Operations",
        fr: "Données produits et mouvements de stock exclusivement via Inventaire → Produits et Opérations",
      },
      {
        en: "Customer invoices and bank reconciliation entries via Accounting → Dashboard shortcuts",
        fr: "Factures clients et rapprochements bancaires via les raccourcis Comptabilité → Tableau de bord",
      },
    ],
    explanation: {
      en: "Website manages pages, menus, forms, and building blocks; other apps extend the site with dynamic content.",
      fr: "Website gère pages, menus, formulaires et blocs ; d'autres apps enrichissent le site avec du contenu dynamique.",
    },
  }),
  complexQ({
    id: "web-004",
    module: "website",
    text: {
      en: "What is the purpose of the Page URL field on a Website page?",
      fr: "À quoi sert le champ URL de page sur une page Website ?",
    },
    correct: {
      en: "Define the path visitors use to reach the page (e.g. /about-us or /contact)",
      fr: "Définir le chemin d'accès de la page pour les visiteurs (ex. /about-us ou /contact)",
    },
    distractors: [
      {
        en: "Register the canonical domain name configured under Website → Configuration → Settings",
        fr: "Enregistrer le nom de domaine canonique configuré dans Website → Configuration → Paramètres",
      },
      {
        en: "Link the page to a CRM opportunity stage for automatic lead routing on every visit",
        fr: "Lier la page à une étape CRM pour le routage automatique des pistes à chaque visite",
      },
      {
        en: "Configure the SMTP outgoing mail server address used by website contact form submissions",
        fr: "Configurer l'adresse du serveur SMTP sortant utilisée par les formulaires de contact",
      },
    ],
    explanation: {
      en: "The Page URL sets the public path of a static page; changing it can trigger an automatic redirect rule.",
      fr: "L'URL de page définit le chemin public ; la modifier peut déclencher une règle de redirection automatique.",
    },
  }),
  complexQ({
    id: "web-005",
    module: "website",
    text: {
      en: "How do you create an additional website in the same Odoo 19 database?",
      fr: "Comment créer un site web supplémentaire dans la même base Odoo 19 ?",
    },
    correct: {
      en: "Go to Website → Configuration → Settings, click + New Website, then set name and domain",
      fr: "Aller dans Website → Configuration → Paramètres, cliquer + Nouveau site, puis définir nom et domaine",
    },
    distractors: [
      {
        en: "Install the Website module a second time from Apps to provision an isolated storefront instance",
        fr: "Installer une seconde fois le module Website depuis Apps pour une boutique isolée",
      },
      {
        en: "Duplicate the entire Odoo database and run a separate server instance per additional domain",
        fr: "Dupliquer toute la base Odoo et exécuter une instance serveur distincte par domaine",
      },
      {
        en: "Enable multi-company in Accounting so each company receives an automatic subdomain website",
        fr: "Activer multi-sociétés en Comptabilité pour qu'une sous-domaine soit créé par société",
      },
    ],
    explanation: {
      en: "Multi-website is configured from Website settings: + New Website creates a site with its own domain and settings.",
      fr: "Le multi-site se configure dans les paramètres Website : + Nouveau site crée un site avec domaine et réglages propres.",
    },
  }),
  complexQ({
    id: "web-006",
    module: "website",
    text: {
      en: "Which building block category embeds a configurable contact form on a website page?",
      fr: "Quelle catégorie de bloc intègre un formulaire de contact configurable sur une page ?",
    },
    correct: {
      en: "The Contact & Forms category block, then pick a form template in the Insert a block popup",
      fr: "Le bloc de catégorie Contact & Formulaires, puis choisir un modèle dans la fenêtre Insérer un bloc",
    },
    distractors: [
      {
        en: "The Newsletter inner content block with Subscribe to Newsletter as the form Action",
        fr: "Le bloc interne Newsletter avec l'action S'abonner à la newsletter comme Action du formulaire",
      },
      {
        en: "The Search inner content block mapped to CRM tags when visitors submit keywords",
        fr: "Le bloc interne Recherche mappé aux étiquettes CRM lorsque les visiteurs soumettent des mots-clés",
      },
      {
        en: "The Social Media inner content block collecting messages as Discuss channel threads",
        fr: "Le bloc interne Réseaux sociaux collectant les messages comme fils de discussion Discuss",
      },
    ],
    explanation: {
      en: "Contact & Forms provides form templates; the Action in the Style tab defines what record is created on submit.",
      fr: "Contact & Formulaires fournit des modèles ; l'Action dans l'onglet Style définit l'enregistrement créé à la soumission.",
    },
  }),
  complexQ({
    id: "web-007",
    module: "website",
    text: {
      en: "How do you customize global theme colors and fonts on an Odoo 19 website?",
      fr: "Comment personnaliser les couleurs et polices globales du thème sur un site Odoo 19 ?",
    },
    correct: {
      en: "Click Edit on the site, open the Theme tab, then adjust Colors, Fonts, and color presets",
      fr: "Cliquer sur Éditer, ouvrir l'onglet Thème, puis ajuster Couleurs, Polices et préréglages de couleurs",
    },
    distractors: [
      {
        en: "Edit bootstrap SCSS variables only from Settings → Technical → User Interface → Views",
        fr: "Modifier les variables SCSS bootstrap uniquement via Paramètres → Technique → Interface → Vues",
      },
      {
        en: "Change colors per building block from the Blocks tab without accessing the global Theme tab",
        fr: "Changer les couleurs bloc par bloc depuis l'onglet Blocs sans accéder à l'onglet Thème global",
      },
      {
        en: "Set font family names in Website → Configuration → Settings → Company Data text fields",
        fr: "Saisir les noms de polices dans Website → Configuration → Paramètres → Données société",
      },
    ],
    explanation: {
      en: "The Theme tab in the website editor controls global palettes, fonts, headers, footers, and page layouts.",
      fr: "L'onglet Thème de l'éditeur contrôle palettes globales, polices, en-têtes, pieds de page et mises en page.",
    },
  }),
  complexQ({
    id: "web-008",
    module: "website",
    text: {
      en: "Which Odoo application integrates with Website to publish blog articles on /blog?",
      fr: "Quelle application Odoo s'intègre à Website pour publier des articles de blog sur /blog ?",
    },
    correct: {
      en: "The Blog app (website_blog), which adds dynamic blog pages and post management on the site",
      fr: "L'application Blog (website_blog), qui ajoute des pages blog dynamiques et la gestion des articles",
    },
    distractors: [
      {
        en: "The Knowledge app, which displays internal wiki articles on the public homepage by default",
        fr: "L'application Knowledge, qui affiche par défaut des articles wiki internes sur la page d'accueil",
      },
      {
        en: "The Documents app, which hosts downloadable blog PDFs linked from eCommerce product pages",
        fr: "L'application Documents, qui héberge des PDF de blog liés depuis les fiches produits eCommerce",
      },
      {
        en: "The Events app, which publishes event agendas as blog-style listings on the shop catalog",
        fr: "L'application Événements, qui publie les agendas d'événements comme listes type blog sur la boutique",
      },
    ],
    explanation: {
      en: "The Blog module creates dynamic /blog pages and lets editors publish posts from Website or the Blog app.",
      fr: "Le module Blog crée des pages dynamiques /blog et permet de publier depuis Website ou l'app Blog.",
    },
  }),
  complexQ({
    id: "web-009",
    module: "website",
    text: {
      en: "How do you restrict a Website page to signed-in users only in Odoo 19?",
      fr: "Comment restreindre une page Website aux utilisateurs connectés dans Odoo 19 ?",
    },
    correct: {
      en: "Set Visibility to Signed In (or Restricted Group / With Password) in Website → Site → Properties",
      fr: "Définir Visibilité sur Connecté (ou Groupe restreint / Avec mot de passe) dans Website → Site → Propriétés",
    },
    distractors: [
      {
        en: "Set the page to Unpublished so only backend administrators preview it from the Pages list",
        fr: "Mettre la page en Non publiée pour que seuls les administrateurs backend la prévisualisent",
      },
      {
        en: "Remove the page from the website menu while keeping the direct URL publicly accessible",
        fr: "Retirer la page du menu du site tout en laissant l'URL directe accessible au public",
      },
      {
        en: "Assign the page to a Sales pricelist so only B2B portal customers see it during checkout",
        fr: "Assigner la page à une liste de prix Ventes pour que seuls les clients B2B portail la voient",
      },
    ],
    explanation: {
      en: "Page properties offer Visibility: Public, Signed In, Restricted Group, or With Password for access control.",
      fr: "Les propriétés de page offrent Visibilité : Public, Connecté, Groupe restreint ou Avec mot de passe.",
    },
  }),
  complexQ({
    id: "web-010",
    module: "website",
    text: {
      en: "What is the role of website menus in Odoo 19?",
      fr: "Quel est le rôle des menus du site web dans Odoo 19 ?",
    },
    correct: {
      en: "Structure visitor navigation links displayed in the header, footer, or mega menu areas",
      fr: "Structurer les liens de navigation affichés dans l'en-tête, le pied de page ou les méga-menus",
    },
    distractors: [
      {
        en: "Define backend application shortcuts visible in the Odoo Discuss systray for internal users",
        fr: "Définir des raccourcis d'applications backend visibles dans la systray Discuss pour les internes",
      },
      {
        en: "Configure Point of Sale self-order kiosk category buttons for restaurant table ordering",
        fr: "Configurer les boutons de catégories du kiosque PoS self-order pour la commande en restaurant",
      },
      {
        en: "Organize manufacturing operation types and warehouse pick-pack-ship routes for shop floor staff",
        fr: "Organiser les types d'opérations de fabrication et routes entrepôt pick-pack-ship pour l'atelier",
      },
    ],
    explanation: {
      en: "Website menus organize frontend navigation; use the menu editor from Site → Edit Menu or page properties.",
      fr: "Les menus Website organisent la navigation frontend ; utilisez l'éditeur via Site → Éditer le menu.",
    },
  }),
  complexQ({
    id: "web-011",
    module: "website",
    text: {
      en: "How do you translate website page content into multiple languages in Odoo 19?",
      fr: "Comment traduire le contenu des pages web en plusieurs langues dans Odoo 19 ?",
    },
    correct: {
      en: "Install languages, then switch language in the website editor and translate text and blocks inline",
      fr: "Installer les langues, puis changer de langue dans l'éditeur et traduire textes et blocs en ligne",
    },
    distractors: [
      {
        en: "Duplicate each page under Website → Site → Pages and append /fr or /en to the URL path only",
        fr: "Dupliquer chaque page sous Website → Site → Pages et ajouter /fr ou /en au chemin URL uniquement",
      },
      {
        en: "Configure translations exclusively on product Sales tab fields for eCommerce catalog strings",
        fr: "Configurer les traductions exclusivement sur les champs de l'onglet Ventes des fiches produits",
      },
      {
        en: "Rely on the website domain setting to auto-detect language without editing translated page content",
        fr: "S'appuyer sur le paramètre de domaine pour détecter la langue sans éditer le contenu traduit",
      },
    ],
    explanation: {
      en: "After installing languages, use the language selector in Edit mode to translate each page and building block.",
      fr: "Après installation des langues, utilisez le sélecteur de langue en mode Éditer pour traduire chaque page.",
    },
  }),
  complexQ({
    id: "web-012",
    module: "website",
    text: {
      en: "Which page properties optimize a static website page for search engines (SEO)?",
      fr: "Quelles propriétés de page optimisent une page statique pour les moteurs de recherche (SEO) ?",
    },
    correct: {
      en: "Page Title, meta description, custom URL, and the Indexed toggle in Website → Site → Properties",
      fr: "Titre de page, meta description, URL personnalisée et interrupteur Indexé dans Website → Site → Propriétés",
    },
    distractors: [
      {
        en: "Product internal reference and barcode fields on the Inventory product form General Information tab",
        fr: "Référence interne et code-barres sur l'onglet Informations générales de la fiche produit Inventaire",
      },
      {
        en: "Default fiscal position and tax mapping configured on the customer contact Sales & Purchase tab",
        fr: "Position fiscale par défaut et mapping taxes sur l'onglet Ventes & Achats du contact client",
      },
      {
        en: "Delivery carrier tracking URL template in Inventory → Configuration → Delivery Methods",
        fr: "Modèle d'URL de suivi transporteur dans Inventaire → Configuration → Méthodes de livraison",
      },
    ],
    explanation: {
      en: "Each static page has SEO fields in Properties: title, description, URL, and whether search engines may index it.",
      fr: "Chaque page statique a des champs SEO dans Propriétés : titre, description, URL et indexation.",
    },
  }),
  complexQ({
    id: "web-013",
    module: "website",
    text: {
      en: "How can a Website form automatically create a CRM opportunity when submitted?",
      fr: "Comment un formulaire Website peut-il créer automatiquement une opportunité CRM à la soumission ?",
    },
    correct: {
      en: "Select Create an Opportunity in the form block Style tab → Action field on the page editor",
      fr: "Sélectionner Créer une opportunité dans Style → Action du bloc formulaire dans l'éditeur de page",
    },
    distractors: [
      {
        en: "Set Action to Subscribe to Newsletter and rely on Email Marketing auto-lead rules on the mailing list",
        fr: "Définir l'Action sur S'abonner à la newsletter et s'appuyer sur les règles auto-piste Email Marketing",
      },
      {
        en: "Choose Apply for a Job so Recruitment creates an applicant record instead of a CRM opportunity",
        fr: "Choisir Postuler à un emploi pour que Recrutement crée un candidat au lieu d'une opportunité CRM",
      },
      {
        en: "Configure Create a Ticket in Helpdesk and enable automatic lead conversion on the ticket stage",
        fr: "Configurer Créer un ticket dans Helpdesk et activer la conversion automatique en piste à l'étape",
      },
    ],
    explanation: {
      en: "Website form blocks offer Actions such as Create an Opportunity, Create a Customer, or Create a Ticket.",
      fr: "Les blocs formulaire proposent des Actions comme Créer une opportunité, Créer un client ou Créer un ticket.",
    },
  }),
  complexQ({
    id: "web-014",
    module: "website",
    text: {
      en: "What happens when you save content changes on an unpublished website page?",
      fr: "Que se passe-t-il lorsque vous enregistrez des modifications sur une page non publiée ?",
    },
    correct: {
      en: "Changes are saved but remain invisible to public visitors until the page is Published",
      fr: "Les modifications sont enregistrées mais restent invisibles au public tant que la page n'est pas Publiée",
    },
    distractors: [
      {
        en: "Changes go live immediately for all anonymous visitors without toggling the Published switch",
        fr: "Les modifications sont immédiatement visibles pour tous les visiteurs anonymes sans basculer Publié",
      },
      {
        en: "Saving an unpublished page automatically publishes it and emails all CRM leads a notification",
        fr: "Enregistrer une page non publiée la publie automatiquement et notifie toutes les pistes CRM par e-mail",
      },
      {
        en: "Unpublished pages are deleted after 24 hours if Save is clicked without enabling Published",
        fr: "Les pages non publiées sont supprimées après 24 h si Enregistrer est cliqué sans activer Publié",
      },
    ],
    explanation: {
      en: "Unpublished pages store edits safely; only switching to Published makes the content visible on the live site.",
      fr: "Les pages non publiées stockent les modifications ; seul le passage à Publié rend le contenu visible en ligne.",
    },
  }),
  complexQ({
    id: "web-015",
    module: "website",
    text: {
      en: "Which access rights are typically required to edit website content from the frontend?",
      fr: "Quels droits d'accès sont généralement requis pour éditer le contenu du site depuis le frontend ?",
    },
    correct: {
      en: "Website Editor / Restricted Editor rights, or Administrator with Website publishing access",
      fr: "Droits Éditeur Website / Éditeur restreint, ou Administrateur avec accès de publication Website",
    },
    distractors: [
      {
        en: "Any internal user with generic Employee access can click Edit and modify all building blocks",
        fr: "Tout utilisateur interne avec accès Employé peut cliquer Éditer et modifier tous les blocs",
      },
      {
        en: "Portal users created under Settings → Users must be granted before frontend Edit mode appears",
        fr: "Des utilisateurs portail créés dans Paramètres → Utilisateurs doivent être ajoutés pour voir Éditer",
      },
      {
        en: "Inventory User group rights are required to drag snippets onto eCommerce product detail pages",
        fr: "Les droits du groupe Utilisateur Inventaire sont requis pour glisser des snippets sur les fiches produits",
      },
    ],
    explanation: {
      en: "Frontend editing requires Website editor/designer rights; plain internal users cannot modify published pages.",
      fr: "L'édition frontend nécessite des droits éditeur/designer Website ; les utilisateurs internes simples ne peuvent pas modifier.",
    },
  }),
  complexQ({
    id: "web-016",
    module: "website",
    text: {
      en: "What are dynamic content building blocks in Odoo 19 Website?",
      fr: "Que sont les blocs de contenu dynamique dans Odoo 19 Website ?",
    },
    correct: {
      en: "Blocks that automatically display filtered database records such as products, blog posts, or events",
      fr: "Blocs affichant automatiquement des enregistrements filtrés : produits, articles de blog ou événements",
    },
    distractors: [
      {
        en: "Static Text or Image inner content blocks that must be updated manually after each database change",
        fr: "Blocs internes Texte ou Image statiques à mettre à jour manuellement après chaque changement",
      },
      {
        en: "Spreadsheet dashboard pivot views embedded via iframe blocks on standard marketing pages",
        fr: "Vues pivot de tableaux de bord Spreadsheet intégrées via blocs iframe sur les pages marketing",
      },
      {
        en: "Appointments scheduling widgets listing open time slots from the Appointments app calendar",
        fr: "Widgets de planification Appointments listant les créneaux ouverts du calendrier Rendez-vous",
      },
    ],
    explanation: {
      en: "Dynamic Content snippets pull live Odoo data (products, events, blog posts) without manual content updates.",
      fr: "Les snippets Contenu dynamique affichent des données Odoo en direct sans mise à jour manuelle du contenu.",
    },
  }),
  complexQ({
    id: "web-017",
    module: "website",
    text: {
      en: "Where do you configure URL redirects (301/302/308) for an Odoo 19 website?",
      fr: "Où configure-t-on les redirections d'URL (301/302/308) pour un site Odoo 19 ?",
    },
    correct: {
      en: "Website → Configuration → Redirects (developer mode), then create a rewrite in the Rewrite view",
      fr: "Website → Configuration → Redirections (mode développeur), puis créer une réécriture dans la vue Rewrite",
    },
    distractors: [
      {
        en: "Website → Site → Properties → Page URL only, without creating a record in the Redirects menu",
        fr: "Website → Site → Propriétés → URL de page uniquement, sans enregistrement dans le menu Redirections",
      },
      {
        en: "Marketing → Link Tracker by creating short links that permanently replace deleted static pages",
        fr: "Marketing → Link Tracker en créant des liens courts remplaçant définitivement les pages supprimées",
      },
      {
        en: "Discuss → Configuration → Channels by setting channel URLs as aliases for retired website paths",
        fr: "Discuss → Configuration → Canaux en définissant les URL de canaux comme alias de chemins retirés",
      },
    ],
    explanation: {
      en: "Redirects are managed in Website → Configuration → Redirects; changing a page URL can auto-create a 301 rule.",
      fr: "Les redirections se gèrent dans Website → Configuration → Redirections ; changer l'URL peut créer une règle 301.",
    },
  }),
  complexQ({
    id: "web-018",
    module: "website",
    text: {
      en: "Where do you add Google Analytics or other tracking scripts for the entire website?",
      fr: "Où ajoute-t-on Google Analytics ou d'autres scripts de suivi pour l'ensemble du site ?",
    },
    correct: {
      en: "Website → Configuration → Settings, in the tracking / analytics section (e.g. Google Analytics key)",
      fr: "Website → Configuration → Paramètres, section suivi / analytics (ex. clé Google Analytics)",
    },
    distractors: [
      {
        en: "Discuss → Configuration → Channels, by pasting JavaScript into each public channel description field",
        fr: "Discuss → Configuration → Canaux, en collant du JavaScript dans la description de chaque canal public",
      },
      {
        en: "Sales → Configuration → Settings → Quotation Templates header HTML for site-wide script injection",
        fr: "Ventes → Configuration → Paramètres → Modèles de devis, en-tête HTML pour injection globale de scripts",
      },
      {
        en: "Inventory → Configuration → Operations Types → Push notification tracking pixel configuration field",
        fr: "Inventaire → Configuration → Types d'opérations → champ pixel de suivi des notifications push",
      },
    ],
    explanation: {
      en: "Website settings include fields for analytics and tracking codes injected across all frontend pages.",
      fr: "Les paramètres Website incluent des champs pour les codes analytics et de suivi injectés sur toutes les pages.",
    },
  }),
  complexQ({
    id: "web-019",
    module: "website",
    text: {
      en: "How do you customize the website header and footer globally across all pages?",
      fr: "Comment personnaliser l'en-tête et le pied de page globalement sur toutes les pages ?",
    },
    correct: {
      en: "Click Edit, select the header or footer area, then customize templates from the Theme or Style tab",
      fr: "Cliquer Éditer, sélectionner l'en-tête ou le pied de page, puis personnaliser via l'onglet Thème ou Style",
    },
    distractors: [
      {
        en: "Create separate static pages named Header and Footer and embed them as iframe blocks on every page",
        fr: "Créer des pages statiques En-tête et Pied de page et les intégrer en iframe sur chaque page",
      },
      {
        en: "Copy the homepage top building block manually onto each page without editing shared templates",
        fr: "Copier manuellement le bloc supérieur de l'accueil sur chaque page sans modifier les modèles partagés",
      },
      {
        en: "Configure header text exclusively from Website → Configuration → Settings → Company Data fields",
        fr: "Configurer le texte d'en-tête exclusivement dans Website → Configuration → Données société",
      },
    ],
    explanation: {
      en: "Header and footer are shared templates edited once in the website editor and applied site-wide.",
      fr: "En-tête et pied de page sont des modèles partagés édités une fois dans l'éditeur et appliqués à tout le site.",
    },
  }),
  complexQ({
    id: "web-020",
    module: "website",
    text: {
      en: "What is the difference between Edit mode and normal browsing on the website frontend?",
      fr: "Quelle est la différence entre le mode Éditer et la navigation normale sur le frontend ?",
    },
    correct: {
      en: "Edit mode lets authorized users modify building blocks, text, and theme directly on the live page",
      fr: "Le mode Éditer permet aux utilisateurs autorisés de modifier blocs, texte et thème directement sur la page",
    },
    distractors: [
      {
        en: "Edit mode opens the backend website.page form view in a separate tab instead of the frontend layout",
        fr: "Le mode Éditer ouvre la vue formulaire backend website.page dans un onglet séparé du frontend",
      },
      {
        en: "All website changes must be made from Website → Site → Pages list view without frontend access",
        fr: "Toutes les modifications doivent se faire depuis Website → Site → Pages sans accès frontend",
      },
      {
        en: "Edit mode replaces the public homepage with a blank template until Published is toggled again",
        fr: "Le mode Éditer remplace la page d'accueil publique par un modèle vide jusqu'à un nouveau Publié",
      },
    ],
    explanation: {
      en: "Authorized users switch to Edit on the frontend to drag blocks, edit inline text, and adjust theme options.",
      fr: "Les utilisateurs autorisés passent en Éditer sur le frontend pour glisser des blocs et ajuster le thème.",
    },
  }),
  complexQ({
    id: "web-021",
    module: "website",
    text: {
      en: "After building a site with the Website configurator, what can you still change?",
      fr: "Après avoir créé un site avec le configurateur Website, que peut-on encore modifier ?",
    },
    correct: {
      en: "Everything — logo, colors, content, and structure remain editable",
      fr: "Tout — logo, couleurs, contenu et structure restent modifiables",
    },
    distractors: [
      {
        en: "Only the color palette can be changed after configurator completion",
        fr: "Seule la palette de couleurs peut être modifiée après le configurateur",
      },
      {
        en: "Only the logo can be changed; pages are locked",
        fr: "Seul le logo peut être changé ; les pages sont verrouillées",
      },
      {
        en: "Nothing — the configurator output is frozen unless you restart from scratch",
        fr: "Rien — le résultat du configurateur est figé sauf à recommencer à zéro",
      },
    ],
    explanation: {
      en: "Configurator generates a starting site; Edit mode and settings allow full customization afterward.",
      fr: "Le configurateur génère un site de départ ; le mode Éditer et les paramètres permettent toute personnalisation ensuite.",
    },
  }),
  complexQ({
    id: "web-022",
    module: "website",
    text: {
      en: "How does selecting the main objective affect a website created with the Website configurator?",
      fr: "Comment le choix de l'objectif principal affecte-t-il un site créé avec le configurateur Website ?",
    },
    correct: {
      en: "Among other effects, it influences the main call-to-action button on the homepage",
      fr: "Entre autres effets, il influence le bouton d'appel à l'action principal de la page d'accueil",
    },
    distractors: [
      {
        en: "It locks the number of pages you can add to the website",
        fr: "Il verrouille le nombre de pages que vous pouvez ajouter au site",
      },
      {
        en: "It sets the pricing structure for all eCommerce products automatically",
        fr: "Il définit automatiquement la structure tarifaire de tous les produits eCommerce",
      },
      {
        en: "It determines which industry-specific templates are available exclusively",
        fr: "Il détermine exclusivement quels modèles sectoriels sont disponibles",
      },
    ],
    explanation: {
      en: "Business objective presets adapt homepage content and primary CTA to the selected goal.",
      fr: "Les préréglages d'objectif métier adaptent le contenu d'accueil et le CTA principal au but choisi.",
    },
  }),
  complexQ({
    id: "web-023",
    module: "website",
    text: {
      en: "What is the purpose of selecting an industry type during Website configurator setup?",
      fr: "À quoi sert de choisir un type d'industrie lors de la configuration du configurateur Website ?",
    },
    correct: {
      en: "To tailor the website theme, content blocks, and features to that industry",
      fr: "Pour adapter le thème, les blocs de contenu et les fonctionnalités à ce secteur",
    },
    distractors: [
      {
        en: "To set the primary color scheme only, without affecting page content",
        fr: "Pour définir uniquement la palette de couleurs, sans affecter le contenu",
      },
      {
        en: "To configure the main button action exclusively",
        fr: "Pour configurer exclusivement l'action du bouton principal",
      },
      {
        en: "To enable fiscal localization for the company's accounting country",
        fr: "Pour activer la localisation fiscale du pays comptable de la société",
      },
    ],
    explanation: {
      en: "Industry selection preloads relevant snippets, imagery, and page structure for faster setup.",
      fr: "Le choix d'industrie précharge snippets, visuels et structure de pages pertinents pour un démarrage rapide.",
    },
  }),
];
