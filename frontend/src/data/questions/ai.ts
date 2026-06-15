import { complexQ } from "./helpers";

export const aiQuestions = [
  complexQ({
    id: "ai-001",
    module: "ai",
    text: {
      en: "What is the primary role of integrated AI in Odoo 19?",
      fr: "Quel est le rôle principal de l'IA intégrée dans Odoo 19 ?",
    },
    correct: {
      en: "Assist users with drafting, suggestions, data queries, and workflow automation across apps",
      fr: "Assister les utilisateurs pour la rédaction, les suggestions, les requêtes données et l'automatisation transversale",
    },
    distractors: [
      {
        en: "Replace accountants by posting journal entries without any human validation or review step",
        fr: "Remplacer les comptables en comptabilisant des écritures sans aucune validation ou revue humaine",
      },
      {
        en: "Operate exclusively as an external ChatGPT plugin disconnected from Odoo record security rules",
        fr: "Fonctionner exclusivement comme plugin ChatGPT externe déconnecté des règles de sécurité Odoo",
      },
      {
        en: "Manage warehouse stock movements and delivery routes without user interaction in Inventory",
        fr: "Gérer les mouvements de stock et routes de livraison sans interaction utilisateur dans Inventaire",
      },
    ],
    explanation: {
      en: "Odoo 19 AI augments user productivity with drafting, analysis, and automation while users retain control over outputs.",
      fr: "L'IA Odoo 19 augmente la productivité par la rédaction, l'analyse et l'automatisation, l'utilisateur gardant le contrôle.",
    },
  }),
  complexQ({
    id: "ai-002",
    module: "ai",
    text: {
      en: "Where can Odoo 19 AI features typically be accessed when enabled?",
      fr: "Où les fonctionnalités IA Odoo 19 sont-elles généralement accessibles une fois activées ?",
    },
    correct: {
      en: "Across multiple apps (AI top-bar button, Ask AI search, chatter, email templates, server actions, etc.)",
      fr: "Dans plusieurs apps (bouton IA barre supérieure, recherche Ask AI, chatter, modèles e-mail, actions serveur, etc.)",
    },
    distractors: [
      {
        en: "Only inside the Point of Sale interface when processing cash payments at the shop counter",
        fr: "Uniquement dans l'interface Point de Vente lors du traitement des paiements espèces en magasin",
      },
      {
        en: "Exclusively through Odoo Studio XML views with developer mode and custom Python modules installed",
        fr: "Exclusivement via les vues XML Odoo Studio en mode développeur avec modules Python personnalisés",
      },
      {
        en: "Only on the public website frontend for anonymous visitors without any backend integration",
        fr: "Uniquement sur le frontend website public pour visiteurs anonymes sans intégration backend",
      },
    ],
    explanation: {
      en: "Odoo 19 embeds AI in many productivity touchpoints: top bar, natural-language search, chatter, templates, and automations.",
      fr: "Odoo 19 intègre l'IA à de nombreux points : barre supérieure, recherche en langage naturel, chatter, modèles et automatisations.",
    },
  }),
  complexQ({
    id: "ai-003",
    module: "ai",
    text: {
      en: "Which tasks can Odoo 19 AI commonly help users perform?",
      fr: "Quelles tâches l'IA Odoo 19 peut-elle couramment aider à réaliser ?",
    },
    correct: {
      en: "Draft and improve emails, product descriptions, knowledge articles, and customer-facing text",
      fr: "Rédiger et améliorer des e-mails, descriptions produits, articles Knowledge et textes clients",
    },
    distractors: [
      {
        en: "Automatically confirm and post all vendor bills without reviewing extracted amounts or tax lines",
        fr: "Confirmer et comptabiliser automatiquement toutes les factures fournisseurs sans revue des montants ou taxes",
      },
      {
        en: "Delete archived CRM opportunities and purge partner records based on AI recommendations alone",
        fr: "Supprimer des opportunités CRM archivées et purger des partenaires selon les seules recommandations IA",
      },
      {
        en: "Reconfigure the PostgreSQL server cluster and network firewall rules from the AI settings page",
        fr: "Reconfigurer le cluster PostgreSQL et les règles pare-feu réseau depuis la page paramètres IA",
      },
    ],
    explanation: {
      en: "AI in Odoo focuses on content drafting, text improvement, and assisted analysis rather than unsupervised record deletion.",
      fr: "L'IA Odoo se concentre sur la rédaction, l'amélioration de texte et l'analyse assistée plutôt que la suppression non supervisée.",
    },
  }),
  complexQ({
    id: "ai-004",
    module: "ai",
    text: {
      en: "What is generally required to use AI features on an Odoo.sh or on-premise Odoo 19 database?",
      fr: "Que faut-il généralement pour utiliser l'IA sur une base Odoo 19 Odoo.sh ou on-premise ?",
    },
    correct: {
      en: "Configure an AI provider API key (OpenAI or Google Gemini) in AI app Settings",
      fr: "Configurer une clé API fournisseur IA (OpenAI ou Google Gemini) dans les paramètres de l'app AI",
    },
    distractors: [
      {
        en: "Install only the Manufacturing app and enable work center AI scheduling in MRP configuration",
        fr: "Installer uniquement l'app Fabrication et activer la planification IA des postes de travail en config MRP",
      },
      {
        en: "Purchase a separate Odoo SMS IAP credit pack and link it to the Email Marketing module",
        fr: "Acheter un pack de crédits IAP SMS Odoo séparé et le lier au module Email Marketing",
      },
      {
        en: "Disable multi-company mode and restrict the database to a single currency before enabling AI",
        fr: "Désactiver le mode multi-société et restreindre la base à une seule devise avant d'activer l'IA",
      },
    ],
    explanation: {
      en: "Odoo.sh and on-premise databases require API keys for ChatGPT or Gemini configured under AI ‣ Configuration ‣ Settings.",
      fr: "Les bases Odoo.sh et on-premise exigent des clés API ChatGPT ou Gemini configurées dans AI ‣ Configuration ‣ Paramètres.",
    },
  }),
  complexQ({
    id: "ai-005",
    module: "ai",
    text: {
      en: "How does Odoo 19 handle data sent to AI providers?",
      fr: "Comment Odoo 19 traite-t-il les données envoyées aux fournisseurs IA ?",
    },
    correct: {
      en: "Requests are routed to the configured provider under Odoo's documented privacy and hosting policies",
      fr: "Les requêtes sont routées vers le fournisseur configuré selon les politiques de confidentialité et hébergement Odoo",
    },
    distractors: [
      {
        en: "All company records are automatically published to a public AI training dataset without opt-out",
        fr: "Tous les enregistrements société sont publiés automatiquement dans un jeu de données IA public sans opt-out",
      },
      {
        en: "AI features run fully offline on the user's browser and never access database record content",
        fr: "Les fonctionnalités IA s'exécutent entièrement hors ligne dans le navigateur sans accès au contenu de la base",
      },
      {
        en: "Only Discuss messages are encrypted and sent to AI; CRM and accounting data remain strictly excluded",
        fr: "Seuls les messages Discuss sont chiffrés et envoyés à l'IA ; les données CRM et comptabilité restent exclues",
      },
    ],
    explanation: {
      en: "Odoo documents how AI requests use configured providers and applies confidentiality policies for enterprise data handling.",
      fr: "Odoo documente l'usage des fournisseurs IA configurés et applique des politiques de confidentialité pour les données.",
    },
  }),
  complexQ({
    id: "ai-006",
    module: "ai",
    text: {
      en: "How can AI assist CRM users in Odoo 19?",
      fr: "Comment l'IA peut-elle assister les utilisateurs CRM dans Odoo 19 ?",
    },
    correct: {
      en: "Draft emails, improve chatter messages, and summarize communications on leads and opportunities",
      fr: "Rédiger des e-mails, améliorer les messages chatter et résumer les communications sur pistes et opportunités",
    },
    distractors: [
      {
        en: "Automatically move every opportunity to Won when the AI drafts a follow-up email to the prospect",
        fr: "Déplacer automatiquement chaque opportunité vers Gagné quand l'IA rédige un e-mail de relance au prospect",
      },
      {
        en: "Replace CRM assignment rules by randomly distributing leads without respecting sales team domains",
        fr: "Remplacer les règles d'assignation CRM en distribuant les pistes aléatoirement sans respecter les domaines d'équipe",
      },
      {
        en: "Generate vendor bills from opportunity notes and post them to the purchase journal immediately",
        fr: "Générer des factures fournisseurs depuis les notes d'opportunité et les comptabiliser immédiatement",
      },
    ],
    explanation: {
      en: "CRM AI assists communication drafting and summarization; pipeline stages and assignments remain under user control.",
      fr: "L'IA CRM assiste la rédaction et le résumé des communications ; le pipeline et les assignations restent sous contrôle utilisateur.",
    },
  }),
  complexQ({
    id: "ai-007",
    module: "ai",
    text: {
      en: "What is AI-powered document digitization in Odoo 19 Accounting?",
      fr: "Qu'est-ce que la numérisation de documents par IA en Comptabilité Odoo 19 ?",
    },
    correct: {
      en: "Extract vendor bill fields (partner, dates, lines, taxes) from uploaded scans or emailed documents",
      fr: "Extraire les champs de factures fournisseurs (partenaire, dates, lignes, taxes) depuis scans ou documents e-mail",
    },
    distractors: [
      {
        en: "Generate manufacturing BOM components automatically from photos of finished goods on the shop floor",
        fr: "Générer automatiquement les composants de nomenclature depuis des photos de produits finis en atelier",
      },
      {
        en: "Create employee contracts and payslip lines from scanned ID cards using the Payroll module alone",
        fr: "Créer contrats employés et lignes de fiche de paie depuis des scans de cartes d'identité via Paie seule",
      },
      {
        en: "Parse website visitor cookies into CRM leads without any document upload or OCR processing step",
        fr: "Analyser les cookies visiteurs website en pistes CRM sans étape de téléversement document ou OCR",
      },
    ],
    explanation: {
      en: "Document digitization uses OCR/AI to pre-fill vendor bill data; users validate before posting (separate IAP service).",
      fr: "La numérisation utilise OCR/IA pour préremplir les factures fournisseurs ; l'utilisateur valide avant comptabilisation (IAP).",
    },
  }),
  complexQ({
    id: "ai-008",
    module: "ai",
    text: {
      en: "How can AI help with Website content in Odoo 19?",
      fr: "Comment l'IA peut-elle aider le contenu Website dans Odoo 19 ?",
    },
    correct: {
      en: "Generate and rewrite page text, snippets, and web blocks using AI-assisted editing in the builder",
      fr: "Générer et réécrire textes de page, snippets et blocs web via l'édition assistée IA dans le builder",
    },
    distractors: [
      {
        en: "Replace the Website theme system by exporting all pages to a static HTML host outside Odoo",
        fr: "Remplacer le système de thème Website en exportant toutes les pages vers un hébergeur HTML statique externe",
      },
      {
        en: "Automatically publish blog posts without editor review whenever a CRM opportunity is marked Won",
        fr: "Publier automatiquement des articles blog sans revue éditeur dès qu'une opportunité CRM est marquée Gagnée",
      },
      {
        en: "Configure DNS records and SSL certificates for custom domains through the AI chat assistant only",
        fr: "Configurer les enregistrements DNS et certificats SSL des domaines personnalisés uniquement via le chat IA",
      },
    ],
    explanation: {
      en: "Odoo 19 Website builder includes AI web page generation and text improvement tools within the editor.",
      fr: "Le builder Website Odoo 19 inclut la génération de pages web et l'amélioration de texte par IA dans l'éditeur.",
    },
  }),
  complexQ({
    id: "ai-009",
    module: "ai",
    text: {
      en: "When using your own AI provider API key in Odoo 19, who typically bears the usage cost?",
      fr: "En utilisant sa propre clé API fournisseur IA dans Odoo 19, qui supporte généralement le coût d'usage ?",
    },
    correct: {
      en: "The organization pays the provider (OpenAI or Gemini) according to that provider's pricing model",
      fr: "L'organisation paie le fournisseur (OpenAI ou Gemini) selon le modèle tarifaire de ce fournisseur",
    },
    distractors: [
      {
        en: "Odoo invoices a fixed per-user AI credit bundle each month independent of provider API consumption",
        fr: "Odoo facture un forfait mensuel de crédits IA par utilisateur indépendamment de la consommation API fournisseur",
      },
      {
        en: "Usage is free on Odoo Online but billed per chatter message on Odoo.sh regardless of provider keys",
        fr: "L'usage est gratuit sur Odoo Online mais facturé par message chatter sur Odoo.sh quelle que soit la clé",
      },
      {
        en: "Costs are deducted automatically from the company's Accounts Receivable balance in Accounting",
        fr: "Les coûts sont déduits automatiquement du solde Clients en Comptabilité de la société",
      },
    ],
    explanation: {
      en: "Odoo routes requests to your configured provider; additional fees depend on the provider's model and account pricing.",
      fr: "Odoo route les requêtes vers le fournisseur configuré ; les frais supplémentaires dépendent du modèle et du compte fournisseur.",
    },
  }),
  complexQ({
    id: "ai-010",
    module: "ai",
    text: {
      en: "How does AI assist Knowledge article authoring in Odoo 19?",
      fr: "Comment l'IA assiste-t-elle la rédaction d'articles Knowledge dans Odoo 19 ?",
    },
    correct: {
      en: "Help draft, restructure, and improve article content directly in the Knowledge editor",
      fr: "Aider à rédiger, restructurer et améliorer le contenu des articles directement dans l'éditeur Knowledge",
    },
    distractors: [
      {
        en: "Automatically archive articles older than 90 days and revoke all user read permissions on them",
        fr: "Archiver automatiquement les articles de plus de 90 jours et révoquer toutes les permissions de lecture",
      },
      {
        en: "Replace Knowledge folders with Discuss channels and migrate articles to chat threads overnight",
        fr: "Remplacer les dossiers Knowledge par des canaux Discuss et migrer les articles vers des fils de discussion",
      },
      {
        en: "Generate payroll salary rules from Knowledge articles when employees view internal documentation",
        fr: "Générer des règles salariales Paie depuis les articles Knowledge quand les employés consultent la documentation",
      },
    ],
    explanation: {
      en: "AI supports writing and improving Knowledge base content; permissions and article lifecycle remain user-managed.",
      fr: "L'IA supporte la rédaction et l'amélioration du contenu Knowledge ; permissions et cycle de vie restent gérés par l'utilisateur.",
    },
  }),
  complexQ({
    id: "ai-011",
    module: "ai",
    text: {
      en: "What is the expected workflow when Odoo 19 AI generates a suggestion?",
      fr: "Quel est le workflow attendu lorsqu'une suggestion est générée par l'IA Odoo 19 ?",
    },
    correct: {
      en: "The user reviews, edits if needed, and explicitly accepts the suggestion before it is applied",
      fr: "L'utilisateur relit, modifie si besoin et accepte explicitement la suggestion avant son application",
    },
    distractors: [
      {
        en: "AI output is committed to the database immediately and cannot be edited after generation completes",
        fr: "La sortie IA est enregistrée immédiatement en base et ne peut plus être modifiée après la génération",
      },
      {
        en: "Only the system administrator may view AI suggestions; standard users receive the final text by email",
        fr: "Seul l'administrateur système peut voir les suggestions IA ; les utilisateurs standard reçoivent le texte final par e-mail",
      },
      {
        en: "Suggestions bypass record rules and are applied to all companies in a multi-company database at once",
        fr: "Les suggestions contournent les règles d'enregistrement et s'appliquent à toutes les sociétés multi-société d'un coup",
      },
    ],
    explanation: {
      en: "Odoo AI is designed as an assistant: users validate and can edit generated content before saving or sending.",
      fr: "L'IA Odoo est conçue comme assistant : l'utilisateur valide et peut modifier le contenu généré avant enregistrement ou envoi.",
    },
  }),
  complexQ({
    id: "ai-012",
    module: "ai",
    text: {
      en: "What is an AI Agent in Odoo 19?",
      fr: "Qu'est-ce qu'un Agent IA dans Odoo 19 ?",
    },
    correct: {
      en: "A configurable conversational agent with topics, tools, and optional document sources for guided assistance",
      fr: "Un agent conversationnel configurable avec sujets, outils et sources documentaires optionnelles pour une assistance guidée",
    },
    distractors: [
      {
        en: "A background cron job that posts all pending invoices every night without user confirmation",
        fr: "Une tâche planifiée en arrière-plan qui comptabilise toutes les factures en attente chaque nuit sans confirmation",
      },
      {
        en: "A POS hardware driver that connects receipt printers to the Odoo server over Bluetooth",
        fr: "Un pilote matériel POS connectant les imprimantes tickets au serveur Odoo via Bluetooth",
      },
      {
        en: "An external browser extension that replaces Odoo menus with a standalone ChatGPT web interface",
        fr: "Une extension navigateur externe remplaçant les menus Odoo par une interface web ChatGPT autonome",
      },
    ],
    explanation: {
      en: "AI Agents are configured in the AI app with topics, tools, and knowledge sources to answer questions and perform allowed actions.",
      fr: "Les Agents IA se configurent dans l'app AI avec sujets, outils et sources pour répondre et effectuer des actions autorisées.",
    },
  }),
  complexQ({
    id: "ai-013",
    module: "ai",
    text: {
      en: "How can AI help improve eCommerce product content in Odoo 19?",
      fr: "Comment l'IA peut-elle améliorer le contenu produit eCommerce dans Odoo 19 ?",
    },
    correct: {
      en: "Generate SEO-oriented descriptions and sales text from product attributes and existing data",
      fr: "Générer des descriptions orientées SEO et textes commerciaux à partir des attributs et données produit existantes",
    },
    distractors: [
      {
        en: "Automatically set pricelist rules and confirm sales orders when a product description is generated",
        fr: "Définir automatiquement les règles de liste de prix et confirmer les commandes quand une description est générée",
      },
      {
        en: "Replace product images with AI renders and delete original attachments from the product form",
        fr: "Remplacer les images produit par des rendus IA et supprimer les pièces jointes originales de la fiche produit",
      },
      {
        en: "Publish products to all sales channels and disable inventory tracking without warehouse validation",
        fr: "Publier les produits sur tous les canaux de vente et désactiver le suivi stock sans validation entrepôt",
      },
    ],
    explanation: {
      en: "AI drafts product descriptions from product data to save time; pricing, images, and stock settings remain manual.",
      fr: "L'IA rédige des descriptions à partir des données produit pour gagner du temps ; prix, images et stock restent manuels.",
    },
  }),
  complexQ({
    id: "ai-014",
    module: "ai",
    text: {
      en: "Who can typically use Odoo 19 AI features in a company database?",
      fr: "Qui peut généralement utiliser les fonctionnalités IA Odoo 19 dans une base société ?",
    },
    correct: {
      en: "Internal users with standard Odoo access rights once AI is enabled and configured for the database",
      fr: "Les utilisateurs internes avec droits d'accès Odoo standards une fois l'IA activée et configurée pour la base",
    },
    distractors: [
      {
        en: "Only Odoo SA support engineers connected remotely through an undocumented superuser backdoor account",
        fr: "Uniquement les ingénieurs support Odoo SA connectés à distance via un compte superutilisateur non documenté",
      },
      {
        en: "Portal customers and public website visitors with full access to all AI agents and server actions",
        fr: "Les clients portail et visiteurs website public avec accès complet à tous les agents IA et actions serveur",
      },
      {
        en: "Employees without any Odoo login who interact through anonymous SMS replies to marketing campaigns",
        fr: "Les employés sans connexion Odoo interagissant via réponses SMS anonymes aux campagnes marketing",
      },
    ],
    explanation: {
      en: "AI follows normal Odoo user permissions; access depends on enabled features and the user's application rights.",
      fr: "L'IA suit les permissions Odoo normales ; l'accès dépend des fonctionnalités activées et des droits applicatifs de l'utilisateur.",
    },
  }),
  complexQ({
    id: "ai-015",
    module: "ai",
    text: {
      en: "Can Odoo 19 AI assist with multilingual content?",
      fr: "L'IA Odoo 19 peut-elle assister le contenu multilingue ?",
    },
    correct: {
      en: "Yes, AI can help translate and adapt text across languages configured on the database",
      fr: "Oui, l'IA peut aider à traduire et adapter du texte dans les langues configurées sur la base",
    },
    distractors: [
      {
        en: "No, translations must be entered manually in each language tab without any AI assistance available",
        fr: "Non, les traductions doivent être saisies manuellement dans chaque onglet langue sans assistance IA disponible",
      },
      {
        en: "AI translates only accounting PDF reports and cannot assist website or product field translations",
        fr: "L'IA traduit uniquement les rapports PDF comptables et ne peut pas assister les traductions website ou produit",
      },
      {
        en: "Translations are handled exclusively by exporting PO files to an external desktop CAT tool",
        fr: "Les traductions sont gérées exclusivement en exportant des fichiers PO vers un outil CAT desktop externe",
      },
    ],
    explanation: {
      en: "AI supports translation and text adaptation within Odoo's multilingual content workflow across apps.",
      fr: "L'IA supporte la traduction et l'adaptation de texte dans le workflow multilingue Odoo à travers les apps.",
    },
  }),
  complexQ({
    id: "ai-016",
    module: "ai",
    text: {
      en: "What must users verify before posting AI-extracted vendor bill data in Odoo 19?",
      fr: "Que doivent vérifier les utilisateurs avant de comptabiliser des données de facture fournisseur extraites par IA ?",
    },
    correct: {
      en: "Partner, invoice date, line amounts, tax mapping, and account assignments match the source document",
      fr: "Partenaire, date de facture, montants des lignes, mapping taxes et comptes correspondent au document source",
    },
    distractors: [
      {
        en: "Only the company logo displayed on the scanned PDF matches the branding on the website homepage",
        fr: "Uniquement que le logo société sur le PDF scanné correspond au branding de la page d'accueil website",
      },
      {
        en: "The OCR confidence score is above 99% so no field-level review of amounts or taxes is necessary",
        fr: "Le score de confiance OCR est supérieur à 99 % donc aucune revue ligne par ligne des montants ou taxes n'est nécessaire",
      },
      {
        en: "The vendor bill was emailed from a domain ending in .com rather than a free webmail provider",
        fr: "La facture fournisseur a été envoyée depuis un domaine en .com plutôt qu'un fournisseur webmail gratuit",
      },
    ],
    explanation: {
      en: "Document digitization pre-fills bills but human review of financial fields is required before validation and posting.",
      fr: "La numérisation préremplit les factures mais une revue humaine des champs financiers est requise avant validation.",
    },
  }),
  complexQ({
    id: "ai-017",
    module: "ai",
    text: {
      en: "How can AI support Helpdesk ticket handling in Odoo 19?",
      fr: "Comment l'IA peut-elle supporter le traitement des tickets Helpdesk dans Odoo 19 ?",
    },
    correct: {
      en: "Suggest replies using ticket context and linked Knowledge articles for agent review",
      fr: "Suggérer des réponses en utilisant le contexte du ticket et les articles Knowledge liés pour revue par l'agent",
    },
    distractors: [
      {
        en: "Close all open tickets automatically when the AI generates a first-draft response to the customer",
        fr: "Fermer automatiquement tous les tickets ouverts quand l'IA génère un premier brouillon de réponse client",
      },
      {
        en: "Reassign tickets to the manufacturing manager whenever the AI detects a product serial number",
        fr: "Réassigner les tickets au responsable fabrication dès que l'IA détecte un numéro de série produit",
      },
      {
        en: "Delete customer partner records linked to tickets rated below three stars by the AI sentiment engine",
        fr: "Supprimer les fiches partenaires clients liées aux tickets notés sous trois étoiles par le moteur de sentiment IA",
      },
    ],
    explanation: {
      en: "Helpdesk AI drafts suggested responses from ticket content and knowledge base; agents review before sending.",
      fr: "L'IA Helpdesk rédige des réponses suggérées depuis le ticket et la base de connaissances ; l'agent relit avant envoi.",
    },
  }),
  complexQ({
    id: "ai-018",
    module: "ai",
    text: {
      en: "How does AI assist Email Marketing in Odoo 19?",
      fr: "Comment l'IA assiste-t-elle Email Marketing dans Odoo 19 ?",
    },
    correct: {
      en: "Help draft mailing subject lines and body copy faster while marketers control sending and consent rules",
      fr: "Aider à rédiger plus vite objets et corps des mailings tandis que les marketeurs contrôlent envoi et règles de consentement",
    },
    distractors: [
      {
        en: "Bypass mailing list opt-in rules and send campaigns to blacklisted contacts when AI drafts content",
        fr: "Contourner les règles opt-in des listes et envoyer aux contacts blacklistés quand l'IA rédige le contenu",
      },
      {
        en: "Automatically enroll every website visitor in all mailing lists upon first AI-generated paragraph",
        fr: "Inscrire automatiquement chaque visiteur website à toutes les listes de diffusion dès le premier paragraphe IA",
      },
      {
        en: "Replace A/B testing by sending a single AI-chosen variant to the full list without performance metrics",
        fr: "Remplacer les tests A/B en envoyant une variante choisie par l'IA à toute la liste sans métriques de performance",
      },
    ],
    explanation: {
      en: "AI speeds up email copy creation in Email Marketing; compliance, lists, and A/B testing workflows remain unchanged.",
      fr: "L'IA accélère la rédaction en Email Marketing ; conformité, listes et workflows A/B restent inchangés.",
    },
  }),
  complexQ({
    id: "ai-019",
    module: "ai",
    text: {
      en: "What does Ask AI search do in Odoo 19?",
      fr: "Que fait la recherche Ask AI dans Odoo 19 ?",
    },
    correct: {
      en: "Translates a natural-language query into an Odoo domain to find matching database records",
      fr: "Traduit une requête en langage naturel en domaine Odoo pour trouver les enregistrements correspondants",
    },
    distractors: [
      {
        en: "Executes raw SQL statements directly on the PostgreSQL database bypassing Odoo access rights",
        fr: "Exécute des requêtes SQL brutes directement sur PostgreSQL en contournant les droits d'accès Odoo",
      },
      {
        en: "Opens an external Google search tab and imports results as CRM leads without user confirmation",
        fr: "Ouvre un onglet recherche Google externe et importe les résultats comme pistes CRM sans confirmation",
      },
      {
        en: "Reindexes the entire filestore and returns only attachment filenames matching the typed keywords",
        fr: "Réindexe tout le filestore et retourne uniquement les noms de pièces jointes correspondant aux mots-clés",
      },
    ],
    explanation: {
      en: "Ask AI search converts plain-language questions into Odoo filter domains while respecting user permissions.",
      fr: "Ask AI convertit des questions en langage courant en domaines de filtre Odoo en respectant les permissions utilisateur.",
    },
  }),
  complexQ({
    id: "ai-020",
    module: "ai",
    text: {
      en: "What is a recommended practice when rolling out Odoo 19 AI in a company?",
      fr: "Quelle bonne pratique est recommandée pour déployer l'IA Odoo 19 en entreprise ?",
    },
    correct: {
      en: "Define who may use AI, review generated outputs, and monitor provider API usage and costs",
      fr: "Définir qui peut utiliser l'IA, relire les sorties générées et surveiller l'usage et les coûts API fournisseur",
    },
    distractors: [
      {
        en: "Grant all portal users administrator rights on the AI app to maximize adoption without training",
        fr: "Accorder à tous les utilisateurs portail des droits administrateur sur l'app AI pour maximiser l'adoption sans formation",
      },
      {
        en: "Disable audit logs so AI server actions can update sensitive fields without traceability requirements",
        fr: "Désactiver les journaux d'audit pour que les actions serveur IA mettent à jour des champs sensibles sans traçabilité",
      },
      {
        en: "Share confidential attachments publicly on the website to improve AI training accuracy for all agents",
        fr: "Partager publiquement sur le website des pièces jointes confidentielles pour améliorer la précision IA de tous les agents",
      },
    ],
    explanation: {
      en: "Governance covers access control, human review of AI output, and monitoring of external provider consumption.",
      fr: "La gouvernance couvre le contrôle d'accès, la revue humaine des sorties IA et le suivi de la consommation fournisseur.",
    },
  }),
];
