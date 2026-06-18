import { complexQ } from "./helpers";

export const studioQuestions = [
  complexQ({
    id: "stu-001",
    module: "studio",
    text: {
      en: "What is Odoo 19 Studio?",
      fr: "Qu'est-ce qu'Odoo Studio dans Odoo 19 ?",
    },
    correct: {
      en: "A no-code customization tool for modifying apps, views, fields, menus, reports, and automations inside Odoo",
      fr: "Un outil personnalisation no-code pour modifier apps, vues, champs, menus, rapports et automatisations dans Odoo",
    },
    distractors: [
      {
        en: "A standalone Python IDE installed locally for writing custom Odoo modules outside the web interface",
        fr: "Un IDE Python autonome installé localement pour écrire modules Odoo custom hors interface web",
      },
      {
        en: "The Website Builder module limited to editing public pages and eCommerce product galleries only",
        fr: "Le module Website Builder limité édition pages publiques et galeries produits eCommerce uniquement",
      },
      {
        en: "An accounting localization package that installs country-specific tax reports and fiscal positions automatically",
        fr: "Un package localisation comptable installant rapports fiscaux pays et positions fiscales automatiquement",
      },
    ],
    explanation: {
      en: "Studio lets functional users customize Odoo backend apps without writing Python code.",
      fr: "Studio permet aux utilisateurs fonctionnels personnaliser apps backend Odoo sans écrire code Python.",
    },
  }),
  complexQ({
    id: "stu-002",
    module: "studio",
    text: {
      en: "Which elements can you create or customize with Odoo 19 Studio?",
      fr: "Quels éléments peut-on créer ou personnaliser avec Odoo Studio 19 ?",
    },
    correct: {
      en: "Custom fields, views, models, menus, PDF reports, automated actions, approval rules, and entire apps",
      fr: "Champs custom, vues, modèles, menus, rapports PDF, actions automatisées, règles approbation et apps entières",
    },
    distractors: [
      {
        en: "Only user interface color themes and company logo placement on the login screen without data model changes",
        fr: "Uniquement thèmes couleurs interface et placement logo société écran connexion sans changements modèle données",
      },
      {
        en: "PostgreSQL database schemas and server infrastructure settings requiring direct shell access to the host",
        fr: "Schémas base PostgreSQL et paramètres infrastructure serveur exigeant accès shell direct à l'hôte",
      },
      {
        en: "Core Odoo Python source files that ship with standard modules and are overwritten on every upgrade",
        fr: "Fichiers source Python core Odoo livrés modules standard écrasés à chaque mise à jour",
      },
    ],
    explanation: {
      en: "Studio covers structural customizations: data models, UI, workflows, reports, and automations.",
      fr: "Studio couvre personnalisations structurelles : modèles données, UI, workflows, rapports et automatisations.",
    },
  }),
  complexQ({
    id: "stu-003",
    module: "studio",
    text: {
      en: "How do you add a custom field to a form view using Odoo 19 Studio?",
      fr: "Comment ajouter champ custom à vue formulaire avec Odoo Studio 19 ?",
    },
    correct: {
      en: "Open Studio on the form, drag the desired field type onto the view, and configure its properties",
      fr: "Ouvrir Studio sur formulaire, glisser type champ souhaité sur vue et configurer propriétés",
    },
    distractors: [
      {
        en: "Edit the ir.ui.view XML record directly in Settings → Technical → User Interface without entering Studio mode",
        fr: "Modifier enregistrement XML ir.ui.view directement Paramètres → Technique → Interface utilisateur sans mode Studio",
      },
      {
        en: "Create the field on the POS product screen first, then sync it to backend forms through Inventory routes",
        fr: "Créer champ écran produit POS d'abord, puis synchroniser vers formulaires backend via routes Inventaire",
      },
      {
        en: "Add a spreadsheet formula column in Documents and link it as a related field through the Discuss app",
        fr: "Ajouter colonne formule tableur Documents et lier comme champ related via app Discuss",
      },
    ],
    explanation: {
      en: "Studio activates on any form view and adds fields via drag-and-drop with a property panel.",
      fr: "Studio s'active sur toute vue formulaire et ajoute champs par glisser-déposer avec panneau propriétés.",
    },
  }),
  complexQ({
    id: "stu-004",
    module: "studio",
    text: {
      en: "What is an automated action created in Odoo 19 Studio?",
      fr: "Qu'est-ce qu'une action automatisée créée dans Odoo Studio 19 ?",
    },
    correct: {
      en: "A rule triggered on record events such as create or write that executes configured actions when conditions match",
      fr: "Règle déclenchée sur événements enregistrement comme création ou modification exécutant actions configurées si conditions remplies",
    },
    distractors: [
      {
        en: "A scheduled server cron job defined in Python that runs independently of any Odoo business model trigger",
        fr: "Tâche cron serveur planifiée Python s'exécutant indépendamment tout déclencheur modèle métier Odoo",
      },
      {
        en: "A fixed statutory accounting report template shipped with localization modules and locked from editing",
        fr: "Modèle rapport comptable légal fixe livré modules localisation verrouillé contre édition",
      },
      {
        en: "An eCommerce promotional coupon that applies percentage discounts when customers checkout on the website",
        fr: "Coupon promotionnel eCommerce appliquant remises pourcentage quand clients paient sur site web",
      },
    ],
    explanation: {
      en: "Automated actions react to model events to send emails, create activities, update fields, or run server actions.",
      fr: "Actions automatisées réagissent événements modèle pour envoyer e-mails, créer activités, mettre à jour champs ou exécuter actions serveur.",
    },
  }),
  complexQ({
    id: "stu-005",
    module: "studio",
    text: {
      en: "Can Odoo 19 Studio create a brand-new custom application?",
      fr: "Odoo Studio 19 peut-il créer une nouvelle application custom ?",
    },
    correct: {
      en: "Yes, Studio can build a new app with custom models, views, menus, and access rights from scratch",
      fr: "Oui, Studio peut construire nouvelle app avec modèles, vues, menus et droits accès custom depuis zéro",
    },
    distractors: [
      {
        en: "Studio only edits existing standard apps and blocks creation of new models or top-level menu entries",
        fr: "Studio édite uniquement apps standard existantes et bloque création nouveaux modèles ou entrées menu top-level",
      },
      {
        en: "New apps require purchasing an Enterprise license add-on per app before Studio menus become available",
        fr: "Nouvelles apps exigent achat add-on licence Enterprise par app avant menus Studio disponibles",
      },
      {
        en: "Custom apps can be created only for the Website module; backend business apps remain read-only in Studio",
        fr: "Apps custom créables uniquement module Website ; apps métier backend restent lecture seule Studio",
      },
    ],
    explanation: {
      en: "Studio supports full app creation including models, views, menus, and security groups.",
      fr: "Studio supporte création app complète incluant modèles, vues, menus et groupes sécurité.",
    },
  }),
  complexQ({
    id: "stu-006",
    module: "studio",
    text: {
      en: "How are Studio customizations stored during Odoo 19 upgrades?",
      fr: "Comment personnalisations Studio sont-elles stockées lors mises à jour Odoo 19 ?",
    },
    correct: {
      en: "They are saved in dedicated custom modules (such as studio_customization) separate from Odoo standard code",
      fr: "Elles sont sauvegardées modules custom dédiés (comme studio_customization) séparés code standard Odoo",
    },
    distractors: [
      {
        en: "Studio changes overwrite core Python files in standard addons and must be re-applied manually after each upgrade",
        fr: "Modifications Studio écrasent fichiers Python core addons standard et doivent être réappliquées manuellement après upgrade",
      },
      {
        en: "Customizations exist only in browser session memory and are lost when the user logs out or clears cache",
        fr: "Personnalisations existent uniquement mémoire session navigateur et perdues déconnexion ou vidage cache",
      },
      {
        en: "Studio saves changes as spreadsheet attachments in Documents rather than as database view inheritance records",
        fr: "Studio sauvegarde changements pièces jointes tableur Documents plutôt enregistrements héritage vues base",
      },
    ],
    explanation: {
      en: "Studio exports customizations into custom modules preserved across upgrades without modifying Odoo core.",
      fr: "Studio exporte personnalisations modules custom préservés upgrades sans modifier core Odoo.",
    },
  }),
  complexQ({
    id: "stu-007",
    module: "studio",
    text: {
      en: "How do you customize a PDF report layout with Odoo 19 Studio?",
      fr: "Comment personnaliser mise en page rapport PDF avec Odoo Studio 19 ?",
    },
    correct: {
      en: "Open the report in Studio's report editor to adjust QWeb layout elements, fields, and formatting visually",
      fr: "Ouvrir rapport éditeur rapports Studio pour ajuster éléments layout QWeb, champs et formatage visuellement",
    },
    distractors: [
      {
        en: "Duplicate the report in Accounting localization settings and edit fiscal XML export templates there",
        fr: "Dupliquer rapport paramètres localisation Comptabilité et éditer modèles export XML fiscal là",
      },
      {
        en: "Replace the PDF engine with an external Word mail merge template uploaded through the Discuss app",
        fr: "Remplacer moteur PDF modèle publipostage Word externe uploadé via app Discuss",
      },
      {
        en: "PDF reports cannot be modified; only list and form views are editable through Studio interface",
        fr: "Rapports PDF non modifiables ; seules vues liste et formulaire éditables interface Studio",
      },
    ],
    explanation: {
      en: "Studio includes a visual report editor for customizing QWeb-based PDF report templates.",
      fr: "Studio inclut éditeur rapports visuel pour personnaliser modèles rapports PDF basés QWeb.",
    },
  }),
  complexQ({
    id: "stu-008",
    module: "studio",
    text: {
      en: "Which field types can be added to a model in Odoo 19 Studio?",
      fr: "Quels types champs peuvent être ajoutés modèle dans Odoo Studio 19 ?",
    },
    correct: {
      en: "Standard Odoo types including char, text, integer, float, boolean, date, datetime, selection, many2one, and others",
      fr: "Types Odoo standards incluant char, text, integer, float, boolean, date, datetime, selection, many2one et autres",
    },
    distractors: [
      {
        en: "Only char and text fields; relational and numeric types require Python development outside Studio",
        fr: "Uniquement champs char et text ; types relationnels et numériques exigent développement Python hors Studio",
      },
      {
        en: "Binary payroll fields that compute payslip lines and post journal entries when records are saved",
        fr: "Champs binaires paie calculant lignes fiche paie et comptabilisant écritures sauvegarde enregistrements",
      },
      {
        en: "Inventory route fields that automatically create stock moves when the form view is opened in Studio",
        fr: "Champs route inventaire créant automatiquement mouvements stock ouverture vue formulaire Studio",
      },
    ],
    explanation: {
      en: "Studio supports the same field types available in standard Odoo model definitions.",
      fr: "Studio supporte mêmes types champs disponibles définitions modèles Odoo standard.",
    },
  }),
  complexQ({
    id: "stu-009",
    module: "studio",
    text: {
      en: "How do you create a new menu item with Odoo 19 Studio?",
      fr: "Comment créer nouvel élément menu avec Odoo Studio 19 ?",
    },
    correct: {
      en: "When building or editing an app in Studio, add a menu linked to a window action on the custom or standard model",
      fr: "Construisant ou éditant app Studio, ajouter menu lié action fenêtre sur modèle custom ou standard",
    },
    distractors: [
      {
        en: "Menus are generated automatically from CRM pipeline stages and cannot be created manually in Studio",
        fr: "Menus générés automatiquement étapes pipeline CRM et non créables manuellement Studio",
      },
      {
        en: "Create menu entries in Settings → Users by assigning access rights groups without linking any model action",
        fr: "Créer entrées menu Paramètres → Utilisateurs assignant groupes droits accès sans lier action modèle",
      },
      {
        en: "Add menu items on the POS configuration screen so they appear on the cashier register product grid",
        fr: "Ajouter éléments menu écran configuration POS pour apparition grille produits caisse",
      },
    ],
    explanation: {
      en: "Studio lets you define menus with actions pointing to list, form, kanban, or other views.",
      fr: "Studio permet définir menus avec actions pointant vues liste, formulaire, kanban ou autres.",
    },
  }),
  complexQ({
    id: "stu-010",
    module: "studio",
    text: {
      en: "What is a related field in Odoo 19 Studio?",
      fr: "Qu'est-ce qu'un champ related dans Odoo Studio 19 ?",
    },
    correct: {
      en: "A field displaying a value from a linked record path without storing duplicate data in the database",
      fr: "Champ affichant valeur chemin enregistrement lié sans stocker données dupliquées base",
    },
    distractors: [
      {
        en: "A computed field that deletes related records when the parent form is archived in Studio",
        fr: "Champ calculé supprimant enregistrements liés quand formulaire parent archivé Studio",
      },
      {
        en: "A many2many tag field that creates new partners automatically when users type free text labels",
        fr: "Champ tags many2many créant partenaires automatiquement quand utilisateurs saisissent étiquettes texte libre",
      },
      {
        en: "A monetary field restricted to tax lines on vendor bills and unavailable on custom Studio models",
        fr: "Champ monétaire restreint lignes taxes factures fournisseurs indisponible modèles Studio custom",
      },
    ],
    explanation: {
      en: "Related fields show data from a relational path (e.g., partner.country_id.name) on the current form.",
      fr: "Champs related affichent données chemin relationnel (ex. partner.country_id.name) sur formulaire courant.",
    },
  }),
  complexQ({
    id: "stu-011",
    module: "studio",
    text: {
      en: "Can Odoo 19 Studio configure approval workflows on records?",
      fr: "Odoo Studio 19 peut-il configurer workflows approbation sur enregistrements ?",
    },
    correct: {
      en: "Yes, Studio supports approval rules with multi-step validation on standard or custom models",
      fr: "Oui, Studio supporte règles approbation validation multi-étapes sur modèles standard ou custom",
    },
    distractors: [
      {
        en: "Approvals require installing a third-party module; Studio automations cannot gate record state transitions",
        fr: "Approbations exigent module tiers ; automatisations Studio ne peuvent bloquer transitions état enregistrements",
      },
      {
        en: "Only the Time Off app supports approvals; Studio blocks approval configuration on all other models",
        fr: "Seule app Congés supporte approbations ; Studio bloque configuration approbation tous autres modèles",
      },
      {
        en: "Approval rules apply exclusively to accounting journal entries posted from bank reconciliation screens",
        fr: "Règles approbation s'appliquent exclusivement écritures comptables comptabilisées écrans rapprochement bancaire",
      },
    ],
    explanation: {
      en: "Studio approval rules define who must approve records before they reach certain stages or states.",
      fr: "Règles approbation Studio définissent qui doit approuver enregistrements avant étapes ou états certains.",
    },
  }),
  complexQ({
    id: "stu-012",
    module: "studio",
    text: {
      en: "How do you hide a form field conditionally in Odoo 19 Studio?",
      fr: "Comment masquer champ formulaire conditionnellement dans Odoo Studio 19 ?",
    },
    correct: {
      en: "Set an invisible condition on the field properties using a domain or expression based on other field values",
      fr: "Définir condition invisible propriétés champ via domaine ou expression basée valeurs autres champs",
    },
    distractors: [
      {
        en: "Archive the field in Inventory settings so it disappears from all forms database-wide permanently",
        fr: "Archiver champ paramètres Inventaire pour disparition tous formulaires base entière définitivement",
      },
      {
        en: "Hide fields by removing user access groups from the company settings without configuring view conditions",
        fr: "Masquer champs retirant groupes accès utilisateur paramètres société sans configurer conditions vue",
      },
      {
        en: "Conditional visibility requires writing Python compute methods; Studio supports only static field placement",
        fr: "Visibilité conditionnelle exige méthodes compute Python ; Studio supporte uniquement placement champ statique",
      },
    ],
    explanation: {
      en: "Studio field properties support dynamic visibility rules without coding Python invisible attributes.",
      fr: "Propriétés champs Studio supportent règles visibilité dynamiques sans coder attributs invisible Python.",
    },
  }),
  complexQ({
    id: "stu-013",
    module: "studio",
    text: {
      en: "What can you customize on a pipeline or Kanban view in Odoo 19 Studio?",
      fr: "Que peut-on personnaliser vue pipeline ou Kanban dans Odoo Studio 19 ?",
    },
    correct: {
      en: "Stages, card fields, ribbons, colors, and quick-create options displayed on kanban cards",
      fr: "Étapes, champs cartes, rubans, couleurs et options création rapide affichées cartes kanban",
    },
    distractors: [
      {
        en: "Manufacturing BOM components and routing operations that trigger work orders when cards move stages",
        fr: "Composants nomenclature fabrication et opérations routage déclenchant ordres travail déplacement cartes étapes",
      },
      {
        en: "Server hosting parameters and PostgreSQL connection strings managed from the kanban column headers",
        fr: "Paramètres hébergement serveur et chaînes connexion PostgreSQL gérés en-têtes colonnes kanban",
      },
      {
        en: "Kanban views are read-only in Studio; only pivot and graph views accept drag-and-drop customization",
        fr: "Vues kanban lecture seule Studio ; seules vues pivot et graph acceptent personnalisation glisser-déposer",
      },
    ],
    explanation: {
      en: "Studio customizes kanban pipelines by editing stages, card content, and visual indicators.",
      fr: "Studio personnalise pipelines kanban éditant étapes, contenu cartes et indicateurs visuels.",
    },
  }),
  complexQ({
    id: "stu-014",
    module: "studio",
    text: {
      en: "Who typically has access to Odoo 19 Studio?",
      fr: "Qui a typiquement accès Odoo Studio 19 ?",
    },
    correct: {
      en: "Users granted Studio access rights, usually administrators or functional consultants responsible for customization",
      fr: "Utilisateurs ayant droits accès Studio, généralement administrateurs ou consultants fonctionnels responsables personnalisation",
    },
    distractors: [
      {
        en: "All internal employees by default since Studio is required to open any standard Odoo business application",
        fr: "Tous employés internes par défaut car Studio requis ouvrir toute app métier Odoo standard",
      },
      {
        en: "External portal customers who purchase products on the website and need to edit their order forms",
        fr: "Clients portail externes achetant produits site web devant éditer leurs formulaires commande",
      },
      {
        en: "Only Odoo SA support staff through remote access; customers cannot use Studio on their own databases",
        fr: "Uniquement staff support Odoo SA accès distant ; clients ne peuvent utiliser Studio leurs propres bases",
      },
    ],
    explanation: {
      en: "Studio access is restricted because it modifies app structure, security, and data models.",
      fr: "Accès Studio restreint car modifie structure app, sécurité et modèles données.",
    },
  }),
  complexQ({
    id: "stu-015",
    module: "studio",
    text: {
      en: "Can Odoo 19 Studio create computed fields?",
      fr: "Odoo Studio 19 peut-il créer champs calculés ?",
    },
    correct: {
      en: "Yes, define formula-based computed fields that calculate values from other fields, with optional storage",
      fr: "Oui, définir champs calculés formule calculant valeurs autres champs, avec stockage optionnel",
    },
    distractors: [
      {
        en: "Computed fields require exporting the model to Python and reinstalling it as a custom addon manually",
        fr: "Champs calculés exigent export modèle Python et réinstallation addon custom manuellement",
      },
      {
        en: "Studio supports computed fields only on accounting move lines linked to tax report expressions",
        fr: "Studio supporte champs calculés uniquement lignes écritures comptables liées expressions rapport fiscal",
      },
      {
        en: "Only Monetary and Float field types accept formulas; other types must use a Related Field mapped to a stored value on the parent record",
        fr: "Seuls les types Monétaire et Flottant acceptent des formules ; les autres doivent utiliser un Champ associé mappé à une valeur stockée de l'enregistrement parent",
      },
    ],
    explanation: {
      en: "Studio provides a formula editor for computed and stored computed fields without Python coding.",
      fr: "Studio fournit éditeur formules champs calculés et calculés stockés sans codage Python.",
    },
  }),
  complexQ({
    id: "stu-016",
    module: "studio",
    text: {
      en: "How do automated actions send emails in Odoo 19 Studio?",
      fr: "Comment actions automatisées envoient e-mails dans Odoo Studio 19 ?",
    },
    correct: {
      en: "Add a Send Email action to the automation, selecting or creating an email template triggered on matching records",
      fr: "Ajouter action Envoyer e-mail automation, sélectionnant ou créant modèle e-mail déclenché enregistrements correspondants",
    },
    distractors: [
      {
        en: "Emails send through POS receipt printers configured on the shop register payment method settings",
        fr: "E-mails envoient via imprimantes tickets POS configurées paramètres mode paiement caisse magasin",
      },
      {
        en: "Automated actions post messages to Discuss channels only; SMTP email delivery is disabled in Studio",
        fr: "Actions automatisées publient messages canaux Discuss uniquement ; envoi e-mail SMTP désactivé Studio",
      },
      {
        en: "Email automation requires linking each record to a payroll payslip template before the trigger fires",
        fr: "Automation e-mail exige lier chaque enregistrement modèle fiche paie avant déclenchement",
      },
    ],
    explanation: {
      en: "Studio automations can send templated emails when records are created, updated, or meet defined conditions.",
      fr: "Automatisations Studio peuvent envoyer e-mails modèles création, mise à jour enregistrements ou conditions définies.",
    },
  }),
  complexQ({
    id: "stu-017",
    module: "studio",
    text: {
      en: "What is the difference between Odoo 19 Studio and the Website Builder?",
      fr: "Quelle différence entre Odoo Studio 19 et Website Builder ?",
    },
    correct: {
      en: "Studio customizes internal backend business apps; Website Builder edits the public website and eCommerce pages",
      fr: "Studio personnalise apps métier backend internes ; Website Builder édite site web public et pages eCommerce",
    },
    distractors: [
      {
        en: "Studio customizations sync to Website Builder through the Theme module; backend form edits publish as new website snippets automatically",
        fr: "Les personnalisations Studio se synchronisent vers Website Builder via le module Thème ; les éditions de formulaires backend publient automatiquement de nouveaux snippets site",
      },
      {
        en: "Studio edits only POS register screens while Website Builder controls all accounting journal configurations",
        fr: "Studio édite uniquement écrans caisse POS tandis Website Builder contrôle configurations journaux comptables",
      },
      {
        en: "Website Builder creates custom database models; Studio is limited to changing company logo colors only",
        fr: "Website Builder crée modèles base custom ; Studio limité changement couleurs logo société uniquement",
      },
    ],
    explanation: {
      en: "Studio targets ERP backend customization; Website Builder is for public-facing web content.",
      fr: "Studio cible personnalisation backend ERP ; Website Builder pour contenu web public.",
    },
  }),
  complexQ({
    id: "stu-018",
    module: "studio",
    text: {
      en: "How do you add a button that triggers a server action in Odoo 19 Studio?",
      fr: "Comment ajouter bouton déclenchant action serveur dans Odoo Studio 19 ?",
    },
    correct: {
      en: "Place a button on the form or list view in Studio and link it to an existing or new server action",
      fr: "Placer bouton vue formulaire ou liste Studio et le lier action serveur existante ou nouvelle",
    },
    distractors: [
      {
        en: "Buttons can be added only through JavaScript asset bundles uploaded in Settings → Technical → Reporting",
        fr: "Boutons ajoutables uniquement bundles assets JavaScript uploadés Paramètres → Technique → Reporting",
      },
      {
        en: "Server actions run exclusively from scheduled cron jobs; Studio views cannot expose manual trigger buttons",
        fr: "Actions serveur s'exécutent exclusivement cron planifiés ; vues Studio ne peuvent exposer boutons déclenchement manuel",
      },
      {
        en: "Add buttons on Survey forms and map them to server actions through the Events app registration flow",
        fr: "Ajouter boutons formulaires Survey et mapper actions serveur flux inscription app Events",
      },
    ],
    explanation: {
      en: "Studio buttons call server actions for custom operations like validation, export, or record updates.",
      fr: "Boutons Studio appellent actions serveur opérations custom validation, export ou mises à jour enregistrements.",
    },
  }),
  complexQ({
    id: "stu-019",
    module: "studio",
    text: {
      en: "How does Studio modify existing standard Odoo views safely in Odoo 19?",
      fr: "Comment Studio modifie vues standard Odoo existantes en sécurité Odoo 19 ?",
    },
    correct: {
      en: "Changes are stored as inherited view extensions in custom modules without editing core Odoo XML files",
      fr: "Modifications stockées extensions vues héritées modules custom sans éditer fichiers XML core Odoo",
    },
    distractors: [
      {
        en: "Studio replaces the original standard view record in the database, deleting Odoo's default layout permanently",
        fr: "Studio remplace enregistrement vue standard original base, supprimant layout défaut Odoo définitivement",
      },
      {
        en: "Standard views must be duplicated and renamed in Python before Studio can apply any field repositioning",
        fr: "Vues standard doivent être dupliquées renommées Python avant Studio applique repositionnement champs",
      },
      {
        en: "Studio edits are applied directly to GitHub source repositories and require a server restart to take effect",
        fr: "Modifications Studio appliquées directement dépôts source GitHub et exigent redémarrage serveur effet",
      },
    ],
    explanation: {
      en: "View inheritance preserves standard views while layering Studio customizations in separate modules.",
      fr: "Héritage vues préserve vues standard tout en superposant personnalisations Studio modules séparés.",
    },
  }),
  complexQ({
    id: "stu-020",
    module: "studio",
    text: {
      en: "What is a recommended practice before applying Studio changes in production?",
      fr: "Quelle pratique recommandée avant appliquer modifications Studio en production ?",
    },
    correct: {
      en: "Test customizations on a staging database copy, document changes, and validate with key users before go-live",
      fr: "Tester personnalisations copie base staging, documenter changements et valider utilisateurs clés avant mise en prod",
    },
    distractors: [
      {
        en: "Apply Studio edits directly on the live database during peak hours to gather immediate user feedback",
        fr: "Appliquer modifications Studio directement base live heures pointe pour recueillir retours utilisateurs immédiats",
      },
      {
        en: "Disable all user accounts permanently before opening Studio so no concurrent edits occur during testing",
        fr: "Désactiver tous comptes utilisateurs définitivement avant ouvrir Studio pour éviter modifications concurrentes tests",
      },
      {
        en: "Export all records to a spreadsheet backup and skip functional testing since Studio changes are reversible",
        fr: "Exporter tous enregistrements sauvegarde tableur et ignorer tests fonctionnels car modifications Studio réversibles",
      },
    ],
    explanation: {
      en: "Staging validation reduces risk of breaking workflows when deploying Studio customizations to production.",
      fr: "Validation staging réduit risque casser workflows déploiement personnalisations Studio production.",
    },
  }),
  complexQ({
    id: "stu-021",
    module: "studio",
    text: {
      en: "What does a model represent in Odoo Studio?",
      fr: "Que représente un modèle dans Odoo Studio ?",
    },
    correct: {
      en: "A business concept such as a sales order or contact",
      fr: "Un concept métier comme une commande client ou un contact",
    },
    distractors: [
      {
        en: "A single record row inside a spreadsheet view",
        fr: "Une seule ligne d'enregistrement dans une vue tableur",
      },
      {
        en: "A single field column on a form view",
        fr: "Une seule colonne de champ sur une vue formulaire",
      },
      {
        en: "A PostgreSQL database instance managed outside Odoo",
        fr: "Une instance de base PostgreSQL gérée hors Odoo",
      },
    ],
    explanation: {
      en: "Models (e.g. sale.order, res.partner) structure business data; views display model records.",
      fr: "Les modèles (ex. sale.order, res.partner) structurent les données métier ; les vues affichent les enregistrements.",
    },
  }),
  complexQ({
    id: "stu-022",
    module: "studio",
    text: {
      en: "How can you switch between views to edit them in Studio?",
      fr: "Comment basculer entre les vues pour les modifier dans Studio ?",
    },
    correct: {
      en: "Using view icons, the Views menu in Studio, or by switching views outside Studio — all of these",
      fr: "Via les icônes de vue, le menu Vues dans Studio, ou en changeant de vue hors Studio — toutes ces options",
    },
    distractors: [
      {
        en: "Only by closing Studio and reopening the app from Settings",
        fr: "Uniquement en fermant Studio et rouvrant l'application depuis Paramètres",
      },
      {
        en: "Only through the Views menu; view icons do not open Studio edit mode",
        fr: "Uniquement via le menu Vues ; les icônes de vue n'ouvrent pas le mode édition Studio",
      },
      {
        en: "By exporting the view XML and editing it in a code editor only",
        fr: "En exportant le XML de vue et en l'éditant uniquement dans un éditeur de code",
      },
    ],
    explanation: {
      en: "Studio lets you pick the target view from icons, the Views list, or navigate normally then re-enter Studio.",
      fr: "Studio permet de choisir la vue cible via les icônes, la liste Vues, ou en naviguant puis en réouvrant Studio.",
    },
  }),
  complexQ({
    id: "stu-023",
    module: "studio",
    text: {
      en: "What should you do before implementing customizations with Studio?",
      fr: "Que faire avant d'implémenter des personnalisations avec Studio ?",
    },
    correct: {
      en: "Test changes on a duplicate/staging database before applying them to production",
      fr: "Tester les changements sur une base dupliquée/staging avant la production",
    },
    distractors: [
      {
        en: "Open an Odoo support ticket before every field addition",
        fr: "Ouvrir un ticket support Odoo avant chaque ajout de champ",
      },
      {
        en: "Apply changes on a unrelated model first as a mandatory warm-up",
        fr: "Appliquer d'abord les changements sur un modèle sans lien comme échauffement obligatoire",
      },
      {
        en: "Disable automatic backups because Studio changes cannot be reverted",
        fr: "Désactiver les sauvegardes automatiques car les changements Studio sont irréversibles",
      },
    ],
    explanation: {
      en: "Studio modifies the database schema and views; staging tests prevent breaking live workflows.",
      fr: "Studio modifie le schéma et les vues ; les tests sur copie évitent de casser les flux en production.",
    },
  }),
  complexQ({
    id: "stu-024",
    module: "studio",
    text: {
      en: "What should you check before adding a new field to a view in Studio?",
      fr: "Que vérifier avant d'ajouter un nouveau champ à une vue dans Studio ?",
    },
    correct: {
      en: "Whether the field already exists on the model in the database",
      fr: "Si le champ existe déjà sur le modèle dans la base de données",
    },
    distractors: [
      {
        en: "Whether the field color matches the company theme palette",
        fr: "Si la couleur du champ correspond à la palette du thème société",
      },
      {
        en: "Whether all users have export rights on the model",
        fr: "Si tous les utilisateurs ont les droits d'export sur le modèle",
      },
      {
        en: "Whether the PostgreSQL table has fewer than 50 columns",
        fr: "Si la table PostgreSQL a moins de 50 colonnes",
      },
    ],
    explanation: {
      en: "Reuse existing fields from the Existing fields list when possible instead of duplicating columns.",
      fr: "Réutilisez les champs existants de la liste Champs existants quand c'est possible plutôt que de dupliquer des colonnes.",
    },
  }),
  complexQ({
    id: "stu-025",
    module: "studio",
    text: {
      en: "Where can you find Studio-created fields that are not yet on the current view?",
      fr: "Où trouver les champs créés avec Studio qui ne sont pas encore sur la vue actuelle ?",
    },
    correct: {
      en: "In the Add tab → Existing fields section in Studio",
      fr: "Dans l'onglet Ajouter → section Champs existants de Studio",
    },
    distractors: [
      {
        en: "In the View tab by selecting Show Invisible Elements only",
        fr: "Dans l'onglet Vue en sélectionnant uniquement Afficher les éléments invisibles",
      },
      {
        en: "In the New fields section even if they were created on another model",
        fr: "Dans la section Nouveaux champs même s'ils ont été créés sur un autre modèle",
      },
      {
        en: "They are not listed; you must recreate the field on each view",
        fr: "Ils ne sont pas listés ; il faut recréer le champ sur chaque vue",
      },
    ],
    explanation: {
      en: "Fields created with Studio exist on the model and appear under Existing fields for drag-and-drop onto views.",
      fr: "Les champs Studio existent sur le modèle et apparaissent sous Champs existants pour glisser-déposer sur les vues.",
    },
  }),
];
