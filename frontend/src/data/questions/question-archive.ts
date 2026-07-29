/**
 * Archived questions removed as duplicates from the active bank.
 * Kept ONLY for historical session review/replay (loadQuestionsByIds).
 * Do NOT spread into allQuestions.
 */
import { complexQ, mcq3Q, yesNoQ } from "./helpers";
import type { Question } from "@/types/exam";

export const archivedQuestions: Question[] = [
complexQ({
    id: "web-065",
    module: "website",
    text: {
      en: "Why is it important to customize fonts and colors on your website? (Odoo Learn — Design your website: text and colors)",
      fr: "Pourquoi est-il important de personnaliser les polices et les couleurs de votre site Web ? (Odoo Learn — Concevoir votre site Web : texte et couleurs)",
    },
    correct: {
      en: "To make the website more interactive",
      fr: "Pour rendre le site Web plus interactif",
    },
    distractors: [
      { en: "To reduce loading times", fr: "Pour réduire les temps de chargement" },
      { en: "To enhance visual appeal and readability", fr: "Pour améliorer l’attrait visuel et la lisibilité" },
      { en: "To improve SEO performance", fr: "Pour améliorer les performances SEO" },
    ],
    explanation: {
      en: "Source Odoo Learn (Design your website: text and colors): To make the website more interactive",
      fr: "Source Odoo Learn (Concevez votre site internet : texte et couleurs) : Pour rendre le site internet plus interactif",
    },
  }),
complexQ({
    id: "web-066",
    module: "website",
    text: {
      en: "What is the purpose of Webdesign Conventions? (Odoo Learn — Design your website: text and colors)",
      fr: "Quel est l’objectif des Conventions de Webdesign ? (Odoo Learn — Concevoir votre site Web : texte et couleurs)",
    },
    correct: {
      en: "To create complex website layouts",
      fr: "Pour créer des mises en page de sites Web complexes",
    },
    distractors: [
      { en: "To follow guidelines that ensure websites are easy to use", fr: "Suivre les directives qui garantissent que les sites Web sont faciles à utiliser" },
      { en: "To increase website security", fr: "Pour augmenter la sécurité du site Web" },
      { en: "To customize website animation", fr: "Pour personnaliser l'animation du site Web" },
    ],
    explanation: {
      en: "Source Odoo Learn (Design your website: text and colors): To create complex website layouts",
      fr: "Source Odoo Learn (Concevez votre site Web : texte et couleurs) : Pour créer des mises en page de sites Web complexes",
    },
  }),
complexQ({
    id: "web-067",
    module: "website",
    text: {
      en: "Where in Odoo can you customize fonts and choose from a wide range of options? (Odoo Learn — Design your website: text and colors)",
      fr: "Où dans Odoo pouvez-vous personnaliser les polices et choisir parmi un large éventail d’options ? (Odoo Learn — Concevoir votre site Web : texte et couleurs)",
    },
    correct: {
      en: "Style",
      fr: "Style",
    },
    distractors: [
      { en: "Building Blocks", fr: "Blocs de construction" },
      { en: "Theme", fr: "Thème" },
      { en: "Widgets", fr: "Widgets" },
    ],
    explanation: {
      en: "Source Odoo Learn (Design your website: text and colors): Style",
      fr: "Source Odoo Learn (Concevez votre site internet : texte et couleurs) : Style",
    },
  }),
complexQ({
    id: "web-068",
    module: "website",
    text: {
      en: "How can you customize the navigation menu in Odoo to appear differently on desktop and mobile devices? (Odoo Learn — Design your website: text and colors)",
      fr: "Comment pouvez-vous personnaliser le menu de navigation dans Odoo pour qu'il apparaisse différemment sur les ordinateurs de bureau et les appareils mobiles ? (Odoo Learn — Concevoir votre site Web : texte et couleurs)",
    },
    correct: {
      en: "Use conditional visibility settings",
      fr: "Utiliser les paramètres de visibilité conditionnelle",
    },
    distractors: [
      { en: "Modify the CSS directly", fr: "Modifier le CSS directement" },
      { en: "Edit the HTML code", fr: "Modifier le code HTML" },
      { en: "Change the JavaScript configuration", fr: "Changer la configuration JavaScript" },
    ],
    explanation: {
      en: "Source Odoo Learn (Design your website: text and colors): Use conditional visibility settings",
      fr: "Source Odoo Learn (Concevez votre site Web : texte et couleurs) : Utiliser les paramètres de visibilité conditionnelle",
    },
  }),
complexQ({
    id: "web-069",
    module: "website",
    text: {
      en: "What is the primary function of a Call To Action (CTA) button on a website? (Odoo Learn — Design your website: text and colors)",
      fr: "Quelle est la fonction principale d’un bouton d’appel à l’action (CTA) sur un site Web ? (Odoo Learn — Concevoir votre site Web : texte et couleurs)",
    },
    correct: {
      en: "Enhance website aesthetics",
      fr: "Améliorer l'esthétique du site Web",
    },
    distractors: [
      { en: "Increase website loading speed", fr: "Augmenter la vitesse de chargement du site Web" },
      { en: "Direct users to take a specific action", fr: "Inviter les utilisateurs à effectuer une action spécifique" },
      { en: "Provide contact information", fr: "Fournir les coordonnées" },
    ],
    explanation: {
      en: "Source Odoo Learn (Design your website: text and colors): Enhance website aesthetics",
      fr: "Source Odoo Learn (Concevez votre site Web : texte et couleurs) : Améliorez l'esthétique du site Web",
    },
  }),
complexQ({
    id: "web-070",
    module: "website",
    text: {
      en: "What aspects of your website can you change after it has been built using Odoo's Website configurator? (Odoo Learn — Website configurator)",
      fr: "Quels aspects de votre site Web pouvez-vous modifier après sa création à l'aide du configurateur de site Web d'Odoo ? (Odoo Learn — Configurateur de site Web)",
    },
    correct: {
      en: "Only the color palette",
      fr: "Seule la palette de couleurs",
    },
    distractors: [
      { en: "Only the logo", fr: "Seulement le logo" },
      { en: "Everything", fr: "Tout" },
      { en: "Nothing", fr: "Rien" },
    ],
    explanation: {
      en: "Source Odoo Learn (Website configurator): Only the color palette",
      fr: "Source Odoo Learn (Configurateur de site Web) : Uniquement la palette de couleurs",
    },
  }),
complexQ({
    id: "web-071",
    module: "website",
    text: {
      en: "How does selecting the main objective impact the website created with Odoo? (Odoo Learn — Website configurator)",
      fr: "Quel est l’impact de la sélection de l’objectif principal sur le site créé avec Odoo ? (Odoo Learn — Configurateur de site Web)",
    },
    correct: {
      en: "It determines the industry-specific templates available",
      fr: "Il détermine les modèles spécifiques à l'industrie disponibles",
    },
    distractors: [
      { en: "Among others, it affects the main button on the website", fr: "Entre autres, cela affecte le bouton principal du site Web" },
      { en: "It sets the pricing structure for products and services", fr: "Il fixe la structure tarifaire des produits et services" },
      { en: "It limits the number of pages that can be added to the website", fr: "Il limite le nombre de pages pouvant être ajoutées au site Web" },
    ],
    explanation: {
      en: "Source Odoo Learn (Website configurator): It determines the industry-specific templates available",
      fr: "Source Odoo Learn (Configurateur de site Web) : Il détermine les modèles spécifiques à l'industrie disponibles",
    },
  }),
complexQ({
    id: "web-072",
    module: "website",
    text: {
      en: "What is the purpose of selecting an industry type during the setup of a website using Odoo's Website configurator? (Odoo Learn — Website configurator)",
      fr: "Quel est le but de sélectionner un type d'industrie lors de la configuration d'un site Web à l'aide du configurateur de site Web d'Odoo ? (Odoo Learn — Configurateur de site Web)",
    },
    correct: {
      en: "To determine the primary color scheme",
      fr: "Pour déterminer la palette de couleurs primaires",
    },
    distractors: [
      { en: "To customize the theme of the website", fr: "Pour personnaliser le thème du site internet" },
      { en: "To configure the main button action", fr: "Pour configurer l'action du bouton principal" },
      { en: "To tailor the website's content and features", fr: "Pour adapter le contenu et les fonctionnalités du site Web" },
    ],
    explanation: {
      en: "Source Odoo Learn (Website configurator): To determine the primary color scheme",
      fr: "Source Odoo Learn (Configurateur de site Web) : Pour déterminer la palette de couleurs primaires",
    },
  }),
complexQ({
    id: "web-073",
    module: "website",
    text: {
      en: "What advantage does Odoo's integration with Unsplash offer? (Odoo Learn — Design your website: images and motion)",
      fr: "Quel avantage offre l'intégration d'Odoo avec Unsplash ? (Odoo Learn — Concevoir votre site Web : images et mouvements)",
    },
    correct: {
      en: "Access to a wide range of free high-resolution images",
      fr: "Accès à une large gamme d'images gratuites en haute résolution",
    },
    distractors: [
      { en: "Ability to upload unlimited images without storage limitations", fr: "Possibilité de télécharger un nombre illimité d'images sans limitations de stockage" },
      { en: "Integration of advanced image editing tools within Odoo", fr: "Intégration d'outils avancés d'édition d'images dans Odoo" },
      { en: "Automatic optimization of image dimensions for mobile devices", fr: "Optimisation automatique des dimensions de l'image pour les appareils mobiles" },
    ],
    explanation: {
      en: "Source Odoo Learn (Design your website: images and motion): Access to a wide range of free high-resolution images",
      fr: "Source Odoo Learn (Concevez votre site Web : images et mouvements) : Accès à une large gamme d'images gratuites en haute résolution",
    },
  }),
complexQ({
    id: "web-074",
    module: "website",
    text: {
      en: "How can background shapes enhance the visual appeal of a website in Odoo? (Odoo Learn — Design your website: images and motion)",
      fr: "Comment les formes d’arrière-plan peuvent-elles améliorer l’attrait visuel d’un site Web dans Odoo ? (Odoo Learn — Concevoir votre site Web : images et mouvements)",
    },
    correct: {
      en: "They provide interactive animations for user engagement",
      fr: "Ils fournissent des animations interactives pour l’engagement des utilisateurs",
    },
    distractors: [
      { en: "They offer additional navigation menus for easier access", fr: "Ils offrent des menus de navigation supplémentaires pour un accès plus facile" },
      { en: "They create a modern and dynamic aesthetic backdrop that harmonizes the pages", fr: "Ils créent un décor esthétique moderne et dynamique qui harmonise les pages" },
      { en: "They improve website loading times by reducing content density", fr: "Ils améliorent les temps de chargement des sites Web en réduisant la densité du contenu" },
    ],
    explanation: {
      en: "Source Odoo Learn (Design your website: images and motion): They provide interactive animations for user engagement",
      fr: "Source Odoo Learn (Concevez votre site Web : images et mouvements) : ils fournissent des animations interactives pour l'engagement des utilisateurs",
    },
  }),
complexQ({
    id: "web-075",
    module: "website",
    text: {
      en: "How can you integrate videos into your website using Odoo? (Odoo Learn — Design your website: images and motion)",
      fr: "Comment intégrer des vidéos dans votre site Web en utilisant Odoo ? (Odoo Learn — Concevoir votre site Web : images et mouvements)",
    },
    correct: {
      en: "By embedding YouTube or Vimeo links directly into webpage content",
      fr: "En intégrant des liens YouTube ou Vimeo directement dans le contenu d'une page Web",
    },
    distractors: [
      { en: "By converting videos to GIFs for faster loading times", fr: "En convertissant les vidéos en GIF pour des temps de chargement plus rapides" },
      { en: "By uploading videos directly to Odoo's media library", fr: "En téléchargeant des vidéos directement sur la médiathèque Odoo" },
      { en: "By using external plugins to embed Vimeo videos", fr: "En utilisant des plugins externes pour intégrer des vidéos Vimeo" },
    ],
    explanation: {
      en: "Source Odoo Learn (Design your website: images and motion): By embedding YouTube or Vimeo links directly into webpage content",
      fr: "Source Odoo Learn (Concevez votre site Web : images et mouvements) : En intégrant des liens YouTube ou Vimeo directement dans le contenu d'une page Web",
    },
  }),
complexQ({
    id: "web-076",
    module: "website",
    text: {
      en: "Why is using WebP images beneficial for your Odoo website? (Odoo Learn — Design your website: images and motion)",
      fr: "Pourquoi l'utilisation d'images WebP est-elle bénéfique pour votre site Web Odoo ? (Odoo Learn — Concevoir votre site Web : images et mouvements)",
    },
    correct: {
      en: "They offer higher resolution than JPEG images",
      fr: "Ils offrent une résolution plus élevée que les images JPEG",
    },
    distractors: [
      { en: "They are supported by all web browsers", fr: "Ils sont pris en charge par tous les navigateurs Web" },
      { en: "They improve website loading speed", fr: "Ils améliorent la vitesse de chargement du site Web" },
      { en: "They require less storage space", fr: "Ils nécessitent moins d’espace de stockage" },
    ],
    explanation: {
      en: "Source Odoo Learn (Design your website: images and motion): They offer higher resolution than JPEG images",
      fr: "Source Odoo Learn (Concevez votre site Web : images et mouvements) : Elles offrent une résolution supérieure aux images JPEG",
    },
  }),
complexQ({
    id: "web-077",
    module: "website",
    text: {
      en: "What is a key benefit of using Tabs blocks with multiple forms? (Odoo Learn — Contact forms)",
      fr: "Quel est l’avantage clé de l’utilisation des blocs Tabs avec plusieurs formulaires ? (Odoo Learn — Formulaires de contact)",
    },
    correct: {
      en: "It allows for organizing forms with different actions without cluttering the page",
      fr: "Il permet d'organiser des formulaires avec différentes actions sans encombrer la page",
    },
    distractors: [
      { en: "It automatically sends emails to multiple recipients", fr: "Il envoie automatiquement des e-mails à plusieurs destinataires" },
      { en: "It creates separate databases for each form", fr: "Il crée des bases de données distinctes pour chaque formulaire" },
      { en: "It integrates with external CRM systems", fr: "Il s'intègre aux systèmes CRM externes" },
    ],
    explanation: {
      en: "Source Odoo Learn (Contact forms): It allows for organizing forms with different actions without cluttering the page",
      fr: "Source Odoo Learn (Formulaires de contact) : Il permet d'organiser des formulaires avec différentes actions sans encombrer la page",
    },
  }),
complexQ({
    id: "web-078",
    module: "website",
    text: {
      en: "Why is it important to define the form action first when setting up a contact form in Odoo? (Odoo Learn — Contact forms)",
      fr: "Pourquoi est-il important de définir d’abord l’action du formulaire lors de la configuration d’un formulaire de contact dans Odoo ? (Odoo Learn — Formulaires de contact)",
    },
    correct: {
      en: "To ensure the form layout is visually appealing",
      fr: "Pour garantir que la mise en page du formulaire est visuellement attrayante",
    },
    distractors: [
      { en: "To specify the recipient's email address", fr: "Pour spécifier l'adresse e-mail du destinataire" },
      { en: "To enable conditional visibility of fields", fr: "Pour activer la visibilité conditionnelle des champs" },
      { en: "Because most of the forms’ customizable settings depend on the action", fr: "Parce que la plupart des paramètres personnalisables des formulaires dépendent de l'action" },
    ],
    explanation: {
      en: "Source Odoo Learn (Contact forms): To ensure the form layout is visually appealing",
      fr: "Source Odoo Learn (Formulaires de contact) : Pour garantir que la mise en page du formulaire est visuellement attrayante",
    },
  }),
complexQ({
    id: "web-079",
    module: "website",
    text: {
      en: "What does conditional visibility allow you to do in Odoo contact forms? (Odoo Learn — Contact forms)",
      fr: "Que permet la visibilité conditionnelle dans les formulaires de contact Odoo ? (Odoo Learn — Formulaires de contact)",
    },
    correct: {
      en: "Customize field labels",
      fr: "Personnaliser les étiquettes des champs",
    },
    distractors: [
      { en: "Hide specific fields based on user input", fr: "Masquer des champs spécifiques en fonction de la saisie de l'utilisateur" },
      { en: "Change the form background color", fr: "Changer la couleur d'arrière-plan du formulaire" },
      { en: "Adjust the field width", fr: "Ajuster la largeur du champ" },
    ],
    explanation: {
      en: "Source Odoo Learn (Contact forms): Customize field labels",
      fr: "Source Odoo Learn (Formulaires de contact) : Personnaliser les étiquettes des champs",
    },
  }),
complexQ({
    id: "web-080",
    module: "website",
    text: {
      en: "How can you customize the behavior of the submit button on a contact form? (Odoo Learn — Contact forms)",
      fr: "Comment personnaliser le comportement du bouton Soumettre sur un formulaire de contact ? (Odoo Learn — Formulaires de contact)",
    },
    correct: {
      en: "By adjusting the font size",
      fr: "En ajustant la taille de la police",
    },
    distractors: [
      { en: "By specifying a redirect page", fr: "En spécifiant une page de redirection" },
      { en: "By changing the form layout", fr: "En modifiant la présentation du formulaire" },
      { en: "By adding additional fields", fr: "En ajoutant des champs supplémentaires" },
    ],
    explanation: {
      en: "Source Odoo Learn (Contact forms): By adjusting the font size",
      fr: "Source Odoo Learn (Formulaires de contact) : En ajustant la taille de la police",
    },
  }),
complexQ({
    id: "web-081",
    module: "website",
    text: {
      en: "What is the purpose of using anchor links on a webpage? (Odoo Learn — Navigation: links & menus)",
      fr: "Quel est le but d’utiliser des liens d’ancrage sur une page Web ? (Odoo Learn — Navigation : liens et menus)",
    },
    correct: {
      en: "To redirect users to external websites",
      fr: "Pour rediriger les utilisateurs vers des sites Web externes",
    },
    distractors: [
      { en: "To navigate to specific sections within a page", fr: "Pour accéder à des sections spécifiques dans une page" },
      { en: "To create dropdown menus", fr: "Pour créer des menus déroulants" },
      { en: "To customize button appearances", fr: "Pour personnaliser l'apparence des boutons" },
    ],
    explanation: {
      en: "Source Odoo Learn (Navigation: links & menus): To redirect users to external websites",
      fr: "Source Odoo Learn (Navigation : liens & menus) : Pour rediriger les utilisateurs vers des sites externes",
    },
  }),
complexQ({
    id: "web-082",
    module: "website",
    text: {
      en: "How can you organize menu items into submenus in Odoo? (Odoo Learn — Navigation: links & menus)",
      fr: "Comment pouvez-vous organiser les éléments de menu en sous-menus dans Odoo ? (Odoo Learn — Navigation : liens et menus)",
    },
    correct: {
      en: "Drag and drop items vertically",
      fr: "Glissez et déposez des éléments verticalement",
    },
    distractors: [
      { en: "Use the Megamenu editor", fr: "Utilisez l'éditeur Megamenu" },
      { en: "Shift an item to the right", fr: "Déplacer un élément vers la droite" },
      { en: "Use the anchor link feature", fr: "Utiliser la fonctionnalité de lien d'ancrage" },
    ],
    explanation: {
      en: "Source Odoo Learn (Navigation: links & menus): Drag and drop items vertically",
      fr: "Source Odoo Learn (Navigation : liens & menus) : Glisser-déposer des éléments verticalement",
    },
  }),
complexQ({
    id: "web-083",
    module: "website",
    text: {
      en: "Which menu type in Odoo offers a visually appealing dropdown layout? (Odoo Learn — Navigation: links & menus)",
      fr: "Quel type de menu dans Odoo offre une présentation déroulante visuellement attrayante ? (Odoo Learn — Navigation : liens et menus)",
    },
    correct: {
      en: "External Menu",
      fr: "Menu externe",
    },
    distractors: [
      { en: "Megamenu", fr: "Mégamenu" },
      { en: "Anchor Menu", fr: "Menu d'ancrage" },
      { en: "Shortcut Menu", fr: "Menu contextuel" },
    ],
    explanation: {
      en: "Source Odoo Learn (Navigation: links & menus): External Menu",
      fr: "Source Odoo Learn (Navigation : liens & menus) : Menu Externe",
    },
  }),
complexQ({
    id: "web-084",
    module: "website",
    text: {
      en: "Why should you translate your website into various languages? (Odoo Learn — Translations)",
      fr: "Pourquoi devriez-vous traduire votre site Web dans différentes langues ? (Odoo Learn — Traductions)",
    },
    correct: {
      en: "To enhance the website's visual appeal",
      fr: "Pour améliorer l'attrait visuel du site Web",
    },
    distractors: [
      { en: "To optimize SEO performance", fr: "Pour optimiser les performances SEO" },
      { en: "To reach a larger audience", fr: "Pour toucher un public plus large" },
      { en: "To reduce website loading times", fr: "Pour réduire les temps de chargement des sites Web" },
    ],
    explanation: {
      en: "Source Odoo Learn (Translations): To enhance the website's visual appeal",
      fr: "Source Odoo Learn (Traductions) : Pour améliorer l'attractivité visuelle du site",
    },
  }),
complexQ({
    id: "web-085",
    module: "website",
    text: {
      en: "How does Odoo simplify the translation process for multiple instances of the same text? (Odoo Learn — Translations)",
      fr: "Comment Odoo simplifie-t-il le processus de traduction de plusieurs instances du même texte ? (Odoo Learn — Traductions)",
    },
    correct: {
      en: "It provides a list of common translations for each language",
      fr: "Il fournit une liste de traductions courantes pour chaque langue",
    },
    distractors: [
      { en: "It automatically translates identical text across the website", fr: "Il traduit automatiquement le texte identique sur le site Web" },
      { en: "It uses AI to detect and translate recurring text patterns", fr: "Il utilise l'IA pour détecter et traduire des modèles de texte récurrents" },
      { en: "It offers a bulk translation feature for repetitive text", fr: "Il offre une fonctionnalité de traduction groupée pour les textes répétitifs" },
    ],
    explanation: {
      en: "Source Odoo Learn (Translations): It provides a list of common translations for each language",
      fr: "Source Odoo Learn (Traductions) : Il fournit une liste de traductions courantes pour chaque langue",
    },
  }),
mcq3Q({
    id: "web-086",
    module: "website",
    text: {
      en: "What is the primary difference between the main language and other languages in Odoo's translation management? (Odoo Learn — Translations)",
      fr: "Quelle est la principale différence entre la langue principale et les autres langues dans la gestion des traductions d'Odoo ? (Odoo Learn — Traductions)",
    },
    correct: {
      en: "The main language is used for backend operations, while other languages are for frontend display.",
      fr: "La langue principale est utilisée pour les opérations back-end, tandis que les autres langues sont destinées à l'affichage front-end.",
    },
    distractors: [
      { en: "The main language allows full editing capabilities, while other languages are restricted to translation only.", fr: "La langue principale permet des capacités d'édition complètes, tandis que les autres langues sont limitées à la traduction uniquement." },
      { en: "The main language is automatically translated by Odoo, while other languages require manual input.", fr: "La langue principale est automatiquement traduite par Odoo, tandis que les autres langues nécessitent une saisie manuelle." },
    ],
    explanation: {
      en: "Source Odoo Learn (Translations): The main language is used for backend operations, while other languages are for frontend display.",
      fr: "Source Odoo Learn (Traductions) : La langue principale est utilisée pour les opérations backend, tandis que les autres langues sont destinées à l'affichage frontend.",
    },
  }),
complexQ({
    id: "web-087",
    module: "website",
    text: {
      en: "Why is optimizing for mobile devices important for websites? (Odoo Learn — Mobile version)",
      fr: "Pourquoi l'optimisation pour les appareils mobiles est-elle importante pour les sites Web ? (Odoo Learn — Version mobile)",
    },
    correct: {
      en: "To hide certain elements from desktop users.",
      fr: "Pour masquer certains éléments aux utilisateurs de bureau.",
    },
    distractors: [
      { en: "Because mobile devices have smaller screens.", fr: "Parce que les appareils mobiles ont des écrans plus petits." },
      { en: "To increase video visibility.", fr: "Pour augmenter la visibilité de la vidéo." },
      { en: "To change the website's color scheme.", fr: "Pour modifier la palette de couleurs du site Web." },
    ],
    explanation: {
      en: "Source Odoo Learn (Mobile version): To hide certain elements from desktop users.",
      fr: "Source Odoo Learn (version mobile) : Pour masquer certains éléments aux utilisateurs de bureau.",
    },
  }),
complexQ({
    id: "web-088",
    module: "website",
    text: {
      en: "Which framework does Odoo use to ensure mobile optimization? (Odoo Learn — Mobile version)",
      fr: "Quel framework Odoo utilise-t-il pour assurer l’optimisation mobile ? (Odoo Learn — Version mobile)",
    },
    correct: {
      en: "Joomla",
      fr: "Joomla",
    },
    distractors: [
      { en: "Bootstrap", fr: "Amorçage" },
      { en: "WordPress", fr: "WordPress" },
      { en: "Drupal", fr: "Drupal" },
    ],
    explanation: {
      en: "Source Odoo Learn (Mobile version): Joomla",
      fr: "Source Odoo Learn (version mobile) : Joomla",
    },
  }),
complexQ({
    id: "web-089",
    module: "website",
    text: {
      en: "What feature allows you to show or hide specific elements on your website based on the device being used? (Odoo Learn — Mobile version)",
      fr: "Quelle fonctionnalité vous permet d'afficher ou de masquer des éléments spécifiques sur votre site Web en fonction de l'appareil utilisé ? (Odoo Learn — Version mobile)",
    },
    correct: {
      en: "Conditional visibility",
      fr: "Visibilité conditionnelle",
    },
    distractors: [
      { en: "Mobile blocker", fr: "Bloqueur de mobiles" },
      { en: "Device switch", fr: "Changement d'appareil" },
      { en: "Responsive design", fr: "Conception réactive" },
    ],
    explanation: {
      en: "Source Odoo Learn (Mobile version): Conditional visibility",
      fr: "Source Odoo Learn (Version mobile) : Visibilité conditionnelle",
    },
  }),
complexQ({
    id: "web-090",
    module: "website",
    text: {
      en: "How does Odoo handle the layout of elements on different screen sizes? (Odoo Learn — Mobile version)",
      fr: "Comment Odoo gère-t-il la disposition des éléments sur différentes tailles d'écran ? (Odoo Learn — Version mobile)",
    },
    correct: {
      en: "By using conditional formatting.",
      fr: "En utilisant la mise en forme conditionnelle.",
    },
    distractors: [
      { en: "By switching between mobile and desktop modes.", fr: "En basculant entre les modes mobile et bureau." },
      { en: "By automatically stacking elements using Bootstrap grids.", fr: "En empilant automatiquement les éléments à l'aide de grilles Bootstrap." },
      { en: "By reducing the number of columns on smaller screens.", fr: "En réduisant le nombre de colonnes sur des écrans plus petits." },
    ],
    explanation: {
      en: "Source Odoo Learn (Mobile version): By using conditional formatting.",
      fr: "Source Odoo Learn (version mobile) : en utilisant la mise en forme conditionnelle.",
    },
  }),
complexQ({
    id: "web-091",
    module: "website",
    text: {
      en: "Which subdomain is historically the most used? (Odoo Learn — Register a free domain name)",
      fr: "Quel sous-domaine est historiquement le plus utilisé ? (Odoo Learn — Enregistrez un nom de domaine gratuit)",
    },
    correct: {
      en: "www.",
      fr: "www.",
    },
    distractors: [
      { en: "https://", fr: "https://" },
      { en: ".com", fr: ".com" },
      { en: "org.", fr: "org." },
    ],
    explanation: {
      en: "Source Odoo Learn (Register a free domain name): www.",
      fr: "Source Odoo Learn (Enregistrer un nom de domaine gratuit) : www.",
    },
  }),
complexQ({
    id: "web-092",
    module: "website",
    text: {
      en: "What’s the best domain name for the website “Good Example”? (Odoo Learn — Register a free domain name)",
      fr: "Quel est le meilleur nom de domaine pour le site Web « Bon exemple » ? (Odoo Learn — Enregistrez un nom de domaine gratuit)",
    },
    correct: {
      en: "www.good-example.com",
      fr: "www.bon-exemple.com",
    },
    distractors: [
      { en: "website.good-example.com", fr: "site web.bon-exemple.com" },
      { en: "www.goodexample.com", fr: "www.bonexemple.com" },
      { en: "www.agoodexampleisworthathousandwords.com", fr: "www.agoodexampleisworthathousandwords.com" },
    ],
    explanation: {
      en: "Source Odoo Learn (Register a free domain name): www.good-example.com",
      fr: "Source Odoo Learn (Enregistrer un nom de domaine gratuit) : www.good-example.com",
    },
  }),
complexQ({
    id: "web-093",
    module: "website",
    text: {
      en: "What are the three main advantages of blogging? (Odoo Learn — Blogs)",
      fr: "Quels sont les trois principaux avantages du blogging ? (Odoo Learn — Blogues)",
    },
    correct: {
      en: "Video creation, mobile optimization, engagement",
      fr: "Création vidéo, optimisation mobile, engagement",
    },
    distractors: [
      { en: "Trust-building, SEO improvement, audience engagement", fr: "Renforcement de la confiance, amélioration du référencement, engagement du public" },
      { en: "Social media integration, content scheduling, branding", fr: "Intégration des médias sociaux, planification du contenu, image de marque" },
      { en: "Email marketing, website configuration, lead generation", fr: "Marketing par e-mail, configuration de site Web, génération de leads" },
    ],
    explanation: {
      en: "Source Odoo Learn (Blogs): Video creation, mobile optimization, engagement",
      fr: "Source Odoo Learn (Blogs) : Création vidéo, optimisation mobile, engagement",
    },
  }),
complexQ({
    id: "web-094",
    module: "website",
    text: {
      en: "What should you aim to do with your blog posts to enhance SEO, credibility, and audience engagement? (Odoo Learn — Blogs)",
      fr: "Que devriez-vous viser à faire avec vos articles de blog pour améliorer le référencement, la crédibilité et l’engagement du public ? (Odoo Learn — Blogues)",
    },
    correct: {
      en: "Post at least once a month",
      fr: "Postez au moins une fois par mois",
    },
    distractors: [
      { en: "Update your blog at least once a week", fr: "Mettez à jour votre blog au moins une fois par semaine" },
      { en: "Share blog posts on social media only", fr: "Partagez des articles de blog uniquement sur les réseaux sociaux" },
      { en: "Use video content exclusively", fr: "Utiliser exclusivement du contenu vidéo" },
    ],
    explanation: {
      en: "Source Odoo Learn (Blogs): Post at least once a month",
      fr: "Source Odoo Learn (Blogs) : Postez au moins une fois par mois",
    },
  }),
complexQ({
    id: "web-095",
    module: "website",
    text: {
      en: "How can you quickly add various elements such as images or quotes to your blog post in Odoo? (Odoo Learn — Blogs)",
      fr: "Comment ajouter rapidement divers éléments tels que des images ou des citations à votre article de blog dans Odoo ? (Odoo Learn — Blogues)",
    },
    correct: {
      en: "By using the \"Insert Media\" button",
      fr: "En utilisant le bouton \"Insérer un média\"",
    },
    distractors: [
      { en: "By typing directly into the HTML code", fr: "En tapant directement dans le code HTML" },
      { en: "By hitting the \"/ key\" and selecting from the menu", fr: "En appuyant sur la touche \"/\" et en sélectionnant dans le menu" },
      { en: "By copying and pasting from another document", fr: "En copiant et collant depuis un autre document" },
    ],
    explanation: {
      en: "Source Odoo Learn (Blogs): By using the \"Insert Media\" button",
      fr: "Source Odoo Learn (Blogs) : En utilisant le bouton \"Insérer un média\"",
    },
  }),
complexQ({
    id: "web-096",
    module: "website",
    text: {
      en: "Why is it important to update your blog regularly, according to the video? (Odoo Learn — Blogs)",
      fr: "Pourquoi est-il important de mettre à jour régulièrement votre blog, selon la vidéo ? (Odoo Learn — Blogues)",
    },
    correct: {
      en: "To make the content more visually appealing",
      fr: "Pour rendre le contenu plus attrayant visuellement",
    },
    distractors: [
      { en: "To increase the number of comments on each post", fr: "Pour augmenter le nombre de commentaires sur chaque publication" },
      { en: "For SEO purposes and to boost website ranking", fr: "À des fins de référencement et pour améliorer le classement du site Web" },
      { en: "To remove outdated information from the blog archive", fr: "Pour supprimer les informations obsolètes des archives du blog" },
    ],
    explanation: {
      en: "Source Odoo Learn (Blogs): To make the content more visually appealing",
      fr: "Source Odoo Learn (Blogs) : Pour rendre le contenu plus attrayant visuellement",
    },
  }),
mcq3Q({
    id: "web-097",
    module: "website",
    text: {
      en: "What is the primary purpose of meta tags in SEO? (Odoo Learn — Search Engine Optimization (SEO))",
      fr: "Quel est l’objectif principal des balises méta en SEO ? (Odoo Learn — Optimisation des moteurs de recherche (SEO))",
    },
    correct: {
      en: "To provide information about a webpage to search engines and visitors.",
      fr: "Fournir des informations sur une page Web aux moteurs de recherche et aux visiteurs.",
    },
    distractors: [
      { en: "To control the visual appearance of the website.", fr: "Pour contrôler l’apparence visuelle du site Web." },
      { en: "To manage website user accounts.", fr: "Pour gérer les comptes des utilisateurs du site Web." },
    ],
    explanation: {
      en: "Source Odoo Learn (Search Engine Optimization (SEO)): To provide information about a webpage to search engines and visitors.",
      fr: "Source Odoo Learn (Search Engine Optimization (SEO)) : Pour fournir des informations sur une page Web aux moteurs de recherche et aux visiteurs.",
    },
  }),
mcq3Q({
    id: "web-098",
    module: "website",
    text: {
      en: "Which aspect of SEO ensures search engines understand your site's structure and relationships? (Odoo Learn — Search Engine Optimization (SEO))",
      fr: "Quel aspect du référencement garantit que les moteurs de recherche comprennent la structure et les relations de votre site ? (Odoo Learn — Optimisation des moteurs de recherche (SEO))",
    },
    correct: {
      en: "Robots.txt",
      fr: "Robots.txt",
    },
    distractors: [
      { en: "Sitemaps", fr: "Plans du site" },
      { en: "Hreflang tags", fr: "Balises hreflang" },
    ],
    explanation: {
      en: "Source Odoo Learn (Search Engine Optimization (SEO)): Robots.txt",
      fr: "Source Odoo Learn (Optimisation pour les moteurs de recherche (SEO)) : Robots.txt",
    },
  }),
mcq3Q({
    id: "web-099",
    module: "website",
    text: {
      en: "Why is it important to structure your text with titles, subtitles, and paragraphs? (Odoo Learn — Search Engine Optimization (SEO))",
      fr: "Pourquoi est-il important de structurer votre texte avec des titres, des sous-titres et des paragraphes ? (Odoo Learn — Optimisation des moteurs de recherche (SEO))",
    },
    correct: {
      en: "To improve the visual design of the page.",
      fr: "Pour améliorer la conception visuelle de la page.",
    },
    distractors: [
      { en: "To give search engines an idea of the structure of your content.", fr: "Pour donner aux moteurs de recherche une idée de la structure de votre contenu." },
      { en: "To increase the loading speed of the page.", fr: "Pour augmenter la vitesse de chargement de la page." },
    ],
    explanation: {
      en: "Source Odoo Learn (Search Engine Optimization (SEO)): To improve the visual design of the page.",
      fr: "Source Odoo Learn (Search Engine Optimization (SEO)) : Pour améliorer la conception visuelle de la page.",
    },
  }),
mcq3Q({
    id: "web-100",
    module: "website",
    text: {
      en: "What is the primary purpose of website analytics in Odoo? (Odoo Learn — Website analytics)",
      fr: "Quel est l’objectif principal de l’analyse de site Web dans Odoo ? (Odoo Learn — Analyse de site Web)",
    },
    correct: {
      en: "To improve the visual design of your website.",
      fr: "Pour améliorer la conception visuelle de votre site Web.",
    },
    distractors: [
      { en: "To manage your website's backend settings.", fr: "Pour gérer les paramètres backend de votre site Web." },
      { en: "To understand visitor behavior and improve website performance.", fr: "Comprendre le comportement des visiteurs et améliorer les performances du site Web." },
    ],
    explanation: {
      en: "Source Odoo Learn (Website analytics): To improve the visual design of your website.",
      fr: "Source Odoo Learn (Analyse de site Web) : Pour améliorer la conception visuelle de votre site Web.",
    },
  }),
mcq3Q({
    id: "web-101",
    module: "website",
    text: {
      en: "What is a unique visitor in website analytics? (Odoo Learn — Website analytics)",
      fr: "Qu’est-ce qu’un visiteur unique dans l’analyse de sites Web ? (Odoo Learn — Analyse de site Web)",
    },
    correct: {
      en: "Someone who visits multiple pages on your website.",
      fr: "Quelqu'un qui visite plusieurs pages de votre site Web.",
    },
    distractors: [
      { en: "Someone who is counted only once regardless of multiple visits.", fr: "Quelqu'un qui n'est compté qu'une seule fois, quelles que soient les visites multiples." },
      { en: "Someone who interacts with your website's contact forms.", fr: "Personne qui interagit avec les formulaires de contact de votre site Web." },
    ],
    explanation: {
      en: "Source Odoo Learn (Website analytics): Someone who visits multiple pages on your website.",
      fr: "Source Odoo Learn (analyse de site Web) : personne qui visite plusieurs pages de votre site Web.",
    },
  }),
mcq3Q({
    id: "web-102",
    module: "website",
    text: {
      en: "Which metric indicates the percentage of visitors who leave after viewing only one page? (Odoo Learn — Website analytics)",
      fr: "Quelle statistique indique le pourcentage de visiteurs qui partent après avoir consulté une seule page ? (Odoo Learn — Analyse de site Web)",
    },
    correct: {
      en: "Bounce rate.",
      fr: "Taux de rebond.",
    },
    distractors: [
      { en: "Session duration.", fr: "Durée de la séance." },
      { en: "Exit rate.", fr: "Taux de sortie." },
    ],
    explanation: {
      en: "Source Odoo Learn (Website analytics): Bounce rate.",
      fr: "Source Odoo Learn (Analyse de site Web) : Taux de rebond.",
    },
  }),
mcq3Q({
    id: "web-103",
    module: "website",
    text: {
      en: "Why would a company need multiple websites in Odoo? (Odoo Learn — Multi-website)",
      fr: "Pourquoi une entreprise aurait-elle besoin de plusieurs sites Web dans Odoo ? (Odoo Learn — Multi-site web)",
    },
    correct: {
      en: "To target diverse markets with tailored content and manage different brands.",
      fr: "Cibler des marchés diversifiés avec un contenu personnalisé et gérer différentes marques.",
    },
    distractors: [
      { en: "To reduce server load.", fr: "Pour réduire la charge du serveur." },
      { en: "To improve website design.", fr: "Pour améliorer la conception du site Web." },
    ],
    explanation: {
      en: "Source Odoo Learn (Multi-website): To target diverse markets with tailored content and manage different brands.",
      fr: "Source Odoo Learn (Multi-site web) : Pour cibler divers marchés avec un contenu personnalisé et gérer différentes marques.",
    },
  }),
mcq3Q({
    id: "web-104",
    module: "website",
    text: {
      en: "What remains consistent across both websites when you create a new one in Odoo? (Odoo Learn — Multi-website)",
      fr: "Qu'est-ce qui reste cohérent sur les deux sites Web lorsque vous en créez un nouveau dans Odoo ? (Odoo Learn — Multi-site web)",
    },
    correct: {
      en: "The website themes and domain names.",
      fr: "Les thèmes du site et les noms de domaine.",
    },
    distractors: [
      { en: "The Odoo apps installed and the database used.", fr: "Les applications Odoo installées et la base de données utilisée." },
      { en: "The email addresses for contact forms.", fr: "Les adresses email des formulaires de contact." },
    ],
    explanation: {
      en: "Source Odoo Learn (Multi-website): The website themes and domain names.",
      fr: "Source Odoo Learn (Multi-site web) : Les thèmes des sites web et les noms de domaines.",
    },
  }),
mcq3Q({
    id: "web-105",
    module: "website",
    text: {
      en: "What can you do to show a product on only one of your websites in Odoo? (Odoo Learn — Multi-website)",
      fr: "Que pouvez-vous faire pour afficher un produit sur un seul de vos sites Web dans Odoo ? (Odoo Learn — Multi-site web)",
    },
    correct: {
      en: "Re-upload the product for each website separately.",
      fr: "Téléchargez à nouveau le produit pour chaque site Web séparément.",
    },
    distractors: [
      { en: "Adjust the Website field in the product record.", fr: "Ajustez le champ Site Web dans la fiche produit." },
      { en: "Create separate Odoo accounts for each website.", fr: "Créez des comptes Odoo distincts pour chaque site Web." },
    ],
    explanation: {
      en: "Source Odoo Learn (Multi-website): Re-upload the product for each website separately.",
      fr: "Source Odoo Learn (Multi-site Web) : Re-téléchargez le produit pour chaque site Web séparément.",
    },
  }),
complexQ({
    id: "eco-075",
    module: "ecommerce",
    text: {
      en: "Which of the following must be enabled in Odoo to use pricelists? (Odoo Learn — Pricing)",
      fr: "Lequel des éléments suivants doit être activé dans Odoo pour utiliser les listes de prix ? (Odoo Learn — Tarifs)",
    },
    correct: {
      en: "The Pricelists option in the eCommerce settings.",
      fr: "L'option Listes de prix dans les paramètres de commerce électronique.",
    },
    distractors: [
      { en: "The multi-company setting.", fr: "Le cadre multi-entreprises." },
      { en: "The advanced inventory module.", fr: "Le module d'inventaire avancé." },
      { en: "The Online payment option in the Sales settings.", fr: "L'option Paiement en ligne dans les paramètres Ventes." },
    ],
    explanation: {
      en: "Source Odoo Learn (Pricing): The Pricelists option in the eCommerce settings.",
      fr: "Source Odoo Learn (Tarif) : L'option Listes de prix dans les paramètres du commerce électronique.",
    },
  }),
mcq3Q({
    id: "eco-099",
    module: "ecommerce",
    text: {
      en: "What happens when you set the sign-in or sign-up option to \"mandatory\" in the checkout settings? (Odoo Learn — Customer Portal and Account)",
      fr: "Que se passe-t-il lorsque vous définissez l'option de connexion ou d'inscription sur « obligatoire » dans les paramètres de paiement ? (Odoo Learn — Customer Portal and Account)",
    },
    correct: {
      en: "Customers must create an account or log in to complete their checkout.",
      fr: "Les clients doivent créer un compte ou se connecter pour finaliser leur paiement.",
    },
    distractors: [
      { en: "Customers can only check out as guests without creating an account.", fr: "Les clients ne peuvent payer qu'en tant qu'invités sans créer de compte." },
      { en: "Customers can create an account only after their order is confirmed.", fr: "Les clients ne peuvent créer un compte qu'après confirmation de leur commande." },
    ],
    explanation: {
      en: "Source Odoo Learn (Customer Portal and Account): Customers must create an account or log in to complete their checkout.",
      fr: "Source Odoo Learn (Portail client et compte) : Les clients doivent créer un compte ou se connecter pour finaliser leur commande.",
    },
  }),
mcq3Q({
    id: "eco-100",
    module: "ecommerce",
    text: {
      en: "How can you grant a customer access to the customer portal? (Odoo Learn — Customer Portal and Account)",
      fr: "Comment accorder à un client l’accès au portail client ? (Odoo Learn — Customer Portal and Account)",
    },
    correct: {
      en: "Go to the customer’s profile and click on \"Grant access\" in the actions menu.",
      fr: "Accédez au profil du client et cliquez sur « Accorder l'accès » dans le menu des actions.",
    },
    distractors: [
      { en: "Send a request to the customer manually via email.", fr: "Envoyez une demande au client manuellement par e-mail." },
      { en: "Add the customer to the “Portal Customers” group in the settings menu.", fr: "Ajoutez le client au groupe « Clients du portail » dans le menu des paramètres." },
    ],
    explanation: {
      en: "Source Odoo Learn (Customer Portal and Account): Go to the customer’s profile and click on \"Grant access\" in the actions menu.",
      fr: "Source Odoo Learn (Portail et Compte Client) : Accédez au profil du client et cliquez sur « Accorder l'accès » dans le menu des actions.",
    },
  }),
mcq3Q({
    id: "eco-101",
    module: "ecommerce",
    text: {
      en: "What can a customer access from their customer portal? (Odoo Learn — Customer Portal and Account)",
      fr: "À quoi un client peut-il accéder depuis son portail client ? (Odoo Learn — Customer Portal and Account)",
    },
    correct: {
      en: "Sales orders, invoices, bills, projects, and other account-related information.",
      fr: "Bons de commande, factures, factures, projets et autres informations relatives au compte.",
    },
    distractors: [
      { en: "Only their sales orders and invoices.", fr: "Uniquement leurs bons de commande et leurs factures." },
      { en: "Only their account profile and personal details.", fr: "Uniquement leur profil de compte et leurs informations personnelles." },
    ],
    explanation: {
      en: "Source Odoo Learn (Customer Portal and Account): Sales orders, invoices, bills, projects, and other account-related information.",
      fr: "Source Odoo Learn (portail client et compte) : bons de commande, factures, factures, projets et autres informations liées au compte.",
    },
  }),
mcq3Q({
    id: "eco-106",
    module: "ecommerce",
    text: {
      en: "What does the \"Quotation\" stage in Odoo signify? (Odoo Learn — Order Management)",
      fr: "Que signifie l'étape « Devis » dans Odoo ? (Odoo Learn — Order Management)",
    },
    correct: {
      en: "The customer has completed the checkout process but the payment isn’t confirmed.",
      fr: "Le client a terminé le processus de paiement mais le paiement n’est pas confirmé.",
    },
    distractors: [
      { en: "The product has been added to the cart, but the customer hasn’t completed the checkout process.", fr: "Le produit a été ajouté au panier, mais le client n'a pas terminé le processus de paiement." },
      { en: "The payment has been confirmed, and the order is ready for delivery.", fr: "Le paiement a été confirmé et la commande est prête à être livrée." },
    ],
    explanation: {
      en: "Source Odoo Learn (Order Management): The customer has completed the checkout process but the payment isn’t confirmed.",
      fr: "Source Odoo Learn (Gestion des commandes) : Le client a terminé le processus de paiement mais le paiement n'est pas confirmé.",
    },
  }),
mcq3Q({
    id: "eco-107",
    module: "ecommerce",
    text: {
      en: "Where can you view all confirmed orders placed through the website? (Odoo Learn — Order Management)",
      fr: "Où pouvez-vous consulter toutes les commandes confirmées passées via le site Web ? (Odoo Learn — Order Management)",
    },
    correct: {
      en: "In the \"Orders\" section under the eCommerce tab.",
      fr: "Dans la section \"Commandes\" sous l'onglet eCommerce.",
    },
    distractors: [
      { en: "In the \"Invoices\" section under the Accounting tab.", fr: "Dans la section \"Factures\" sous l'onglet Comptabilité." },
      { en: "In the \"Inventory\" section under the Inventory app.", fr: "Dans la section « Inventaire » sous l'application Inventaire." },
    ],
    explanation: {
      en: "Source Odoo Learn (Order Management): In the \"Orders\" section under the eCommerce tab.",
      fr: "Source Odoo Learn (Gestion des commandes) : Dans la section « Commandes » sous l'onglet eCommerce.",
    },
  }),
mcq3Q({
    id: "eco-108",
    module: "ecommerce",
    text: {
      en: "What happens when you activate the \"automatic invoice\" option in Odoo? (Odoo Learn — Order Management)",
      fr: "Que se passe-t-il lorsque vous activez l'option « facture automatique » dans Odoo ? (Odoo Learn — Order Management)",
    },
    correct: {
      en: "An invoice is generated manually by the salesperson.",
      fr: "Une facture est générée manuellement par le vendeur.",
    },
    distractors: [
      { en: "The system sends a reminder email for unpaid invoices.", fr: "Le système envoie un e-mail de rappel pour les factures impayées." },
      { en: "An invoice is automatically created and sent to the customer when payment is confirmed.", fr: "Une facture est automatiquement créée et envoyée au client lorsque le paiement est confirmé." },
    ],
    explanation: {
      en: "Source Odoo Learn (Order Management): An invoice is generated manually by the salesperson.",
      fr: "Source Odoo Learn (Gestion des commandes) : Une facture est générée manuellement par le vendeur.",
    },
  }),
mcq3Q({
    id: "eco-110",
    module: "ecommerce",
    text: {
      en: "What is the main difference between optional and accessory products in Odoo? (Odoo Learn — Selling Strategies)",
      fr: "Quelle est la principale différence entre les produits optionnels et accessoires dans Odoo ? (Odoo Learn — Selling Strategies)",
    },
    correct: {
      en: "Optional products are suggested when the customer clicks “add to cart,” while accessory products are suggested when the customer reviews their cart before payment.",
      fr: "Les produits optionnels sont suggérés lorsque le client clique sur « Ajouter au panier », tandis que les produits accessoires sont suggérés lorsque le client examine son panier avant le paiement.",
    },
    distractors: [
      { en: "Optional products are suggested during checkout, while accessory products are suggested before adding an item to the cart.", fr: "Les produits optionnels sont suggérés lors du paiement, tandis que les produits accessoires sont suggérés avant d'ajouter un article au panier." },
      { en: "Optional products replace the initial product, while accessory products do not.", fr: "Les produits optionnels remplacent le produit initial, contrairement aux produits accessoires." },
    ],
    explanation: {
      en: "Source Odoo Learn (Selling Strategies): Optional products are suggested when the customer clicks “add to cart,” while accessory products are suggested when the customer reviews their cart before payment.",
      fr: "Source Odoo Learn (Stratégies de vente) : les produits optionnels sont suggérés lorsque le client clique sur « Ajouter au panier », tandis que les produits accessoires sont suggérés lorsque le client examine son panier avant le paiement.",
    },
  }),
mcq3Q({
    id: "eco-111",
    module: "ecommerce",
    text: {
      en: "How does upselling work in Odoo? (Odoo Learn — Selling Strategies)",
      fr: "Comment fonctionne la vente incitative dans Odoo ? (Odoo Learn — Selling Strategies)",
    },
    correct: {
      en: "It involves offering alternative upgraded versions of the product.",
      fr: "Il s’agit de proposer des versions alternatives améliorées du produit.",
    },
    distractors: [
      { en: "It involves suggesting additional products that complement the customer’s purchase.", fr: "Il s’agit de suggérer des produits complémentaires qui complètent l’achat du client." },
      { en: "It allows customers to select accessory products before checkout.", fr: "Il permet aux clients de sélectionner des produits accessoires avant de passer à la caisse." },
    ],
    explanation: {
      en: "Source Odoo Learn (Selling Strategies): It involves offering alternative upgraded versions of the product.",
      fr: "Source Odoo Learn (Stratégies de vente) : Il s'agit de proposer des versions alternatives améliorées du produit.",
    },
  }),
mcq3Q({
    id: "eco-112",
    module: "ecommerce",
    text: {
      en: "Where can you configure cross-selling and upselling options for a product in Odoo? (Odoo Learn — Selling Strategies)",
      fr: "Où pouvez-vous configurer les options de vente croisée et de vente incitative pour un produit dans Odoo ? (Odoo Learn — Selling Strategies)",
    },
    correct: {
      en: "In the product's \"Sales\" tab within the eCommerce application.",
      fr: "Dans l'onglet « Ventes » du produit au sein de l'application eCommerce.",
    },
    distractors: [
      { en: "In the product's \"Inventory\" tab within the Inventory application.", fr: "Dans l'onglet « Inventaire » du produit au sein de l'application Inventaire." },
      { en: "In the Website's settings under the eCommerce section.", fr: "Dans les paramètres du site Web sous la section eCommerce." },
    ],
    explanation: {
      en: "Source Odoo Learn (Selling Strategies): In the product's \"Sales\" tab within the eCommerce application.",
      fr: "Source Odoo Learn (Stratégies de vente) : Dans l'onglet « Ventes » du produit au sein de l'application eCommerce.",
    },
  }),
mcq3Q({
    id: "eco-113",
    module: "ecommerce",
    text: {
      en: "What happens when a customer selects an optional product? (Odoo Learn — Selling Strategies)",
      fr: "Que se passe-t-il lorsqu'un client sélectionne un produit optionnel ? (Odoo Learn — Selling Strategies)",
    },
    correct: {
      en: "The optional product is added to the cart alongside the initial product.",
      fr: "Le produit optionnel est ajouté au panier aux côtés du produit initial.",
    },
    distractors: [
      { en: "The optional product substitutes the initial product in the cart.", fr: "Le produit optionnel remplace le produit initial dans le panier." },
      { en: "The optional product appears only after the payment is completed.", fr: "Le produit optionnel n'apparaît qu'une fois le paiement effectué." },
    ],
    explanation: {
      en: "Source Odoo Learn (Selling Strategies): The optional product is added to the cart alongside the initial product.",
      fr: "Source Odoo Learn (Stratégies de vente) : Le produit optionnel est ajouté au panier à côté du produit initial.",
    },
  }),
complexQ({
    id: "spr-038",
    module: "spreadsheet",
    text: {
      en: "What is the benefit of converting a range of cells into a spreadsheet table? (Odoo Learn — Odoo Spreadsheet basics)",
      fr: "Quel est l’avantage de convertir une plage de cellules en tableur ? (Odoo Learn — Bases du tableur Odoo)",
    },
    correct: {
      en: "It adds styling and makes the data easier to manage/expand.",
      fr: "Il ajoute du style et rend les données plus faciles à gérer/développer.",
    },
    distractors: [
      { en: "It automatically calculates the profit margin.", fr: "Il calcule automatiquement la marge bénéficiaire." },
      { en: "It freezes the first row and first column automatically.", fr: "Il gèle automatiquement la première ligne et la première colonne." },
      { en: "It locks the cells so they cannot be edited.", fr: "Il verrouille les cellules afin qu'elles ne puissent pas être modifiées." },
    ],
    explanation: {
      en: "Source Odoo Learn (Odoo Spreadsheet basics): It adds styling and makes the data easier to manage/expand.",
      fr: "Source Odoo Learn (bases de la feuille de calcul Odoo) : il ajoute du style et rend les données plus faciles à gérer/développer.",
    },
  }),
complexQ({
    id: "spr-039",
    module: "spreadsheet",
    text: {
      en: "Which of the following is true about functions in Odoo Spreadsheet? (Odoo Learn — Odoo Spreadsheet basics)",
      fr: "Lequel des énoncés suivants est vrai à propos des fonctions dans Odoo Spreadsheet ? (Odoo Learn — Bases du tableur Odoo)",
    },
    correct: {
      en: "Odoo supports standard spreadsheet functions as well as Odoo-specific functions that link to live database data.",
      fr: "Odoo prend en charge les fonctions de feuille de calcul standard ainsi que les fonctions spécifiques à Odoo liées aux données de base de données en direct.",
    },
    distractors: [
      { en: "Odoo only supports its own proprietary functions and cannot use standard formulas like SUM or AVERAGE.", fr: "Odoo ne prend en charge que ses propres fonctions propriétaires et ne peut pas utiliser de formules standard telles que SOMME ou MOYENNE." },
      { en: "Functions can only be used on numerical data, not on text cells or dates.", fr: "Les fonctions ne peuvent être utilisées que sur des données numériques, pas sur des cellules de texte ou des dates." },
      { en: "To use a function, you must first export the spreadsheet to an external editor and then re-upload it.", fr: "Pour utiliser une fonction, vous devez d'abord exporter la feuille de calcul vers un éditeur externe, puis la télécharger à nouveau." },
    ],
    explanation: {
      en: "Source Odoo Learn (Odoo Spreadsheet basics): Odoo supports standard spreadsheet functions as well as Odoo-specific functions that link to live database data.",
      fr: "Source Odoo Learn (bases de la feuille de calcul Odoo) : Odoo prend en charge les fonctions de feuille de calcul standard ainsi que les fonctions spécifiques à Odoo qui sont liées aux données de base de données en direct.",
    },
  }),
complexQ({
    id: "spr-040",
    module: "spreadsheet",
    text: {
      en: "What does a blue globe icon above the spreadsheet indicate? (Odoo Learn — Odoo Spreadsheet basics)",
      fr: "Qu'indique une icône de globe bleu au-dessus de la feuille de calcul ? (Odoo Learn — Bases du tableur Odoo)",
    },
    correct: {
      en: "The spreadsheet's regional settings differ from your own user profile settings.",
      fr: "Les paramètres régionaux de la feuille de calcul diffèrent des paramètres de votre propre profil utilisateur.",
    },
    distractors: [
      { en: "The spreadsheet is currently being shared with external users.", fr: "La feuille de calcul est actuellement partagée avec des utilisateurs externes." },
      { en: "The Odoo database is currently syncing data with a global cloud server.", fr: "La base de données Odoo synchronise actuellement les données avec un serveur cloud mondial." },
      { en: "The file is an imported external document and has not yet been converted to a native Odoo format.", fr: "Le fichier est un document externe importé et n'a pas encore été converti au format natif Odoo." },
    ],
    explanation: {
      en: "Source Odoo Learn (Odoo Spreadsheet basics): The spreadsheet's regional settings differ from your own user profile settings.",
      fr: "Source Odoo Learn (bases de la feuille de calcul Odoo) : les paramètres régionaux de la feuille de calcul diffèrent des paramètres de votre propre profil utilisateur.",
    },
  }),
complexQ({
    id: "spr-041",
    module: "spreadsheet",
    text: {
      en: "How does \"wrapping\" help when dealing with long header text in narrow columns? (Odoo Learn — Odoo Spreadsheet basics)",
      fr: "Comment le « wrapping » est-il utile lorsqu'il s'agit d'un long texte d'en-tête dans des colonnes étroites ? (Odoo Learn — Bases du tableur Odoo)",
    },
    correct: {
      en: "It allows the text to appear over multiple lines within the same cell.",
      fr: "Il permet au texte d'apparaître sur plusieurs lignes dans la même cellule.",
    },
    distractors: [
      { en: "It automatically shrinks the font size to fit the cell width.", fr: "Il réduit automatiquement la taille de la police pour l'adapter à la largeur de la cellule." },
      { en: "It rotates the text 90 degrees to point upwards.", fr: "Il fait pivoter le texte de 90 degrés pour pointer vers le haut." },
      { en: "It creates a pop-up note showing the full text that appears when you hover over the cell.", fr: "Il crée une note contextuelle affichant le texte intégral qui apparaît lorsque vous survolez la cellule." },
    ],
    explanation: {
      en: "Source Odoo Learn (Odoo Spreadsheet basics): It allows the text to appear over multiple lines within the same cell.",
      fr: "Source Odoo Learn (bases de Odoo Spreadsheet) : Il permet au texte d'apparaître sur plusieurs lignes dans la même cellule.",
    },
  }),
complexQ({
    id: "spr-042",
    module: "spreadsheet",
    text: {
      en: "How can you change the access rights on a specific spreadsheet to only allow \"Viewer\" access? (Odoo Learn — Odoo Spreadsheet basics)",
      fr: "Comment modifier les droits d'accès sur une feuille de calcul spécifique pour autoriser uniquement l'accès « Visionneuse » ? (Odoo Learn — Bases du tableur Odoo)",
    },
    correct: {
      en: "By opening the spreadsheet, clicking \"Share\", then changing the individual or general access rights from \"Editor\" to \"Viewer.\"",
      fr: "En ouvrant la feuille de calcul, en cliquant sur « Partager », puis en modifiant les droits d'accès individuels ou généraux de « Éditeur » à « Visionneuse ».",
    },
    distractors: [
      { en: "This isn’t possible; access rights are managed at the level of the Documents folder in which the spreadsheet is saved.", fr: "Ce n’est pas possible ; les droits d'accès sont gérés au niveau du dossier Documents dans lequel la feuille de calcul est enregistrée." },
      { en: "By opening the spreadsheet, then setting it to \"Read-Only\" mode via the File > Settings menu.", fr: "En ouvrant la feuille de calcul, puis en la mettant en mode « Lecture seule » via le menu Fichier > Paramètres." },
      { en: "By locking the spreadsheet with a password that only the owner knows.", fr: "En verrouillant la feuille de calcul avec un mot de passe que seul le propriétaire connaît." },
    ],
    explanation: {
      en: "Source Odoo Learn (Odoo Spreadsheet basics): By opening the spreadsheet, clicking \"Share\", then changing the individual or general access rights from \"Editor\" to \"Viewer.\"",
      fr: "Source Odoo Learn (bases de la feuille de calcul Odoo) : En ouvrant la feuille de calcul, en cliquant sur « Partager », puis en modifiant les droits d'accès individuels ou généraux de « Éditeur » à « Visionneuse ».",
    },
  }),
complexQ({
    id: "spr-043",
    module: "spreadsheet",
    text: {
      en: "What purpose do the global filters available via the search bar serve? (Odoo Learn — Odoo Dashboards basics)",
      fr: "A quoi servent les filtres globaux disponibles via la barre de recherche ? (Odoo Learn — Bases des tableaux de bord Odoo)",
    },
    correct: {
      en: "Global filters define the conditions used to retrieve data from your database and display it in the dashboard.",
      fr: "Les filtres globaux définissent les conditions utilisées pour récupérer les données de votre base de données et les afficher dans le tableau de bord.",
    },
    distractors: [
      { en: "Global filters allow you to temporarily hide records from selected charts and tables.", fr: "Les filtres globaux vous permettent de masquer temporairement les enregistrements des graphiques et tableaux sélectionnés." },
      { en: "Global filters allow you to change the aesthetic theme and color palette of dashboard charts and tables simultaneously.", fr: "Les filtres globaux vous permettent de modifier simultanément le thème esthétique et la palette de couleurs des graphiques et des tableaux du tableau de bord." },
      { en: "Global filters re-order the left-hand navigation panel based on the most frequently consulted dashboards.", fr: "Les filtres globaux réorganisent le panneau de navigation de gauche en fonction des tableaux de bord les plus fréquemment consultés." },
    ],
    explanation: {
      en: "Source Odoo Learn (Odoo Dashboards basics): Global filters define the conditions used to retrieve data from your database and display it in the dashboard.",
      fr: "Source Odoo Learn (bases d'Odoo Dashboards) : Les filtres globaux définissent les conditions utilisées pour récupérer les données de votre base de données et les afficher dans le tableau de bord.",
    },
  }),
complexQ({
    id: "spr-044",
    module: "spreadsheet",
    text: {
      en: "If multiple global filters have been applied, how can you return the dashboard to its original state without manually removing every filter? (Odoo Learn — Odoo Dashboards basics)",
      fr: "Si plusieurs filtres globaux ont été appliqués, comment pouvez-vous remettre le tableau de bord à son état d'origine sans supprimer manuellement chaque filtre ? (Odoo Learn — Bases des tableaux de bord Odoo)",
    },
    correct: {
      en: "Refresh the browser page.",
      fr: "Actualisez la page du navigateur.",
    },
    distractors: [
      { en: "Navigate to Configuration > Dashboards and click \"Reset View.\"", fr: "Accédez à Configuration > Tableaux de bord et cliquez sur \"Réinitialiser la vue\"." },
      { en: "Click the \"Share\" button and then click \"Cancel.\"", fr: "Cliquez sur le bouton \"Partager\", puis cliquez sur \"Annuler\"." },
      { en: "Click the “Reset to Default” button located in the dashboard's footer.", fr: "Cliquez sur le bouton « Réinitialiser par défaut » situé dans le pied de page du tableau de bord." },
    ],
    explanation: {
      en: "Source Odoo Learn (Odoo Dashboards basics): Refresh the browser page.",
      fr: "Source Odoo Learn (bases d'Odoo Dashboards) : Actualisez la page du navigateur.",
    },
  }),
complexQ({
    id: "spr-045",
    module: "spreadsheet",
    text: {
      en: "In an Odoo dashboard table showing the top 10 quotations, what happens if you change the sorting of the \"Revenue\" column from descending to ascending? (Odoo Learn — Odoo Dashboards basics)",
      fr: "Dans un tableau du tableau de bord Odoo affichant les 10 principales cotations, que se passe-t-il si vous modifiez le tri de la colonne « Revenus » de décroissant à ascendant ? (Odoo Learn — Bases des tableaux de bord Odoo)",
    },
    correct: {
      en: "New data is retrieved from the database, and the list shows the 10 lowest-value quotations.",
      fr: "Les nouvelles données sont extraites de la base de données et la liste affiche les 10 cotations les plus basses.",
    },
    distractors: [
      { en: "The 10 quotations displayed on the dashboard are reordered from smallest to largest.", fr: "Les 10 cotations affichées sur le tableau de bord sont réorganisées de la plus petite à la plus grande." },
      { en: "The list becomes \"read-only\" until the sorting is returned to its default setting.", fr: "La liste devient « en lecture seule » jusqu'à ce que le tri revienne à son paramètre par défaut." },
      { en: "Any global filters that have been applied are automatically removed.", fr: "Tous les filtres globaux appliqués sont automatiquement supprimés." },
    ],
    explanation: {
      en: "Source Odoo Learn (Odoo Dashboards basics): New data is retrieved from the database, and the list shows the 10 lowest-value quotations.",
      fr: "Source Odoo Learn (bases d'Odoo Dashboards) : les nouvelles données sont récupérées de la base de données et la liste affiche les 10 cotations les moins élevées.",
    },
  }),
complexQ({
    id: "spr-046",
    module: "spreadsheet",
    text: {
      en: "What determines the specific data a user sees when they open a dashboard? (Odoo Learn — Odoo Dashboards basics)",
      fr: "Qu'est-ce qui détermine les données spécifiques qu'un utilisateur voit lorsqu'il ouvre un tableau de bord ? (Odoo Learn — Bases des tableaux de bord Odoo)",
    },
    correct: {
      en: "The access rights that are defined in the user’s Odoo profile.",
      fr: "Les droits d'accès définis dans le profil Odoo de l'utilisateur.",
    },
    distractors: [
      { en: "The access rights of the person who originally created the dashboard.", fr: "Les droits d'accès de la personne qui a initialement créé le tableau de bord." },
      { en: "The “global filter” settings that were saved when the dashboard was created.", fr: "Les paramètres du « filtre global » qui ont été enregistrés lors de la création du tableau de bord." },
      { en: "The “Public\" or \"Private\" toggle in the Configuration menu.", fr: "Le basculement « Public » ou « Privé » dans le menu Configuration." },
    ],
    explanation: {
      en: "Source Odoo Learn (Odoo Dashboards basics): The access rights that are defined in the user’s Odoo profile.",
      fr: "Source Odoo Learn (bases d'Odoo Dashboards) : Les droits d'accès définis dans le profil Odoo de l'utilisateur.",
    },
  }),
complexQ({
    id: "spr-047",
    module: "spreadsheet",
    text: {
      en: "When preparing a list view in the Sales app to be inserted into a spreadsheet, what is the most efficient way to ensure only records with the status \"Quotation Sent\" are included? (Odoo Learn — Insert an Odoo list)",
      fr: "Lors de la préparation d'une vue de liste dans l'application Ventes à insérer dans une feuille de calcul, quel est le moyen le plus efficace de garantir que seuls les enregistrements ayant le statut « Devis envoyé » sont inclus ? (Odoo Learn — Insérer une liste Odoo)",
    },
    correct: {
      en: "Via the search bar, apply a Custom Filter where the status must be Quotation Sent.",
      fr: "Via la barre de recherche, appliquez un filtre personnalisé dont le statut doit être Devis envoyé.",
    },
    distractors: [
      { en: "Insert the entire list, then manually delete the rows that include anything other than Quotation Sent after the list is inserted into the spreadsheet.", fr: "Insérez la liste entière, puis supprimez manuellement les lignes qui incluent autre chose que Devis envoyé une fois la liste insérée dans la feuille de calcul." },
      { en: "Activate developer mode and hide the \"Status\" column in the list view.", fr: "Activez le mode développeur et masquez la colonne \"Statut\" dans la vue liste." },
      { en: "Sort the list by \"Status\" so that all Quotations appear at the top before inserting the list into a spreadsheet.", fr: "Triez la liste par « Statut » afin que toutes les citations apparaissent en haut avant d'insérer la liste dans une feuille de calcul." },
    ],
    explanation: {
      en: "Source Odoo Learn (Insert an Odoo list): Via the search bar, apply a Custom Filter where the status must be Quotation Sent.",
      fr: "Source Odoo Learn (Insérer une liste Odoo) : Via la barre de recherche, appliquez un filtre personnalisé où le statut doit être Devis envoyé.",
    },
  }),
complexQ({
    id: "spr-048",
    module: "spreadsheet",
    text: {
      en: "You want to track only the \"Top 5\" unconfirmed quotations. How is the number of records determined during the insertion process? (Odoo Learn — Insert an Odoo list)",
      fr: "Vous souhaitez suivre uniquement les \"Top 5\" des cotations non confirmées. Comment le nombre d’enregistrements est-il déterminé lors du processus d’insertion ? (Odoo Learn — Insérer une liste Odoo)",
    },
    correct: {
      en: "In the \"Insert in Spreadsheet\" pop-up window, you can manually update the number of records to 5.",
      fr: "Dans la fenêtre contextuelle « Insérer dans une feuille de calcul », vous pouvez mettre à jour manuellement le nombre d'enregistrements à 5.",
    },
    distractors: [
      { en: "Odoo always inserts the first 80 records by default, and you need to hide the extra rows in the spreadsheet.", fr: "Odoo insère toujours les 80 premiers enregistrements par défaut et vous devez masquer les lignes supplémentaires dans la feuille de calcul." },
      { en: "The number of records is fixed based on the \"My Quotation\" filter and cannot be changed during insertion.", fr: "Le nombre d'enregistrements est fixe en fonction du filtre \"Mon Devis\" et ne peut être modifié lors de l'insertion." },
      { en: "Click the slider menu then, at the bottom, enter the number of records to insert.", fr: "Cliquez sur le menu coulissant puis, en bas, saisissez le nombre d'enregistrements à insérer." },
    ],
    explanation: {
      en: "Source Odoo Learn (Insert an Odoo list): In the \"Insert in Spreadsheet\" pop-up window, you can manually update the number of records to 5.",
      fr: "Source Odoo Learn (Insérer une liste Odoo) : Dans la fenêtre contextuelle \"Insérer dans une feuille de calcul\", vous pouvez mettre à jour manuellement le nombre d'enregistrements à 5.",
    },
  }),
complexQ({
    id: "spr-049",
    module: "spreadsheet",
    text: {
      en: "A spreadsheet you are working in includes several lists that have been inserted from your database. How can you easily see which model the data has been retrieved from? (Odoo Learn — Insert an Odoo list)",
      fr: "Une feuille de calcul dans laquelle vous travaillez comprend plusieurs listes qui ont été insérées à partir de votre base de données. Comment pouvez-vous facilement voir de quel modèle les données ont été récupérées ? (Odoo Learn — Insérer une liste Odoo)",
    },
    correct: {
      en: "In the List properties panel on the right side of the spreadsheet, accessible by clicking on the data source from the Data menu.",
      fr: "Dans le panneau Propriétés de la liste sur le côté droit de la feuille de calcul, accessible en cliquant sur la source de données depuis le menu Données.",
    },
    distractors: [
      { en: "By right-clicking any cell in the table and selecting \"See record.\"", fr: "En cliquant avec le bouton droit sur n'importe quelle cellule du tableau et en sélectionnant \"Voir l'enregistrement\"." },
      { en: "In the Odoo Settings menu under Technical > Models.", fr: "Dans le menu Paramètres Odoo sous Technique > Modèles." },
      { en: "Inside the sheet name itself, which always displays the model’s technical name.", fr: "À l’intérieur du nom de la feuille lui-même, qui affiche toujours le nom technique du modèle." },
    ],
    explanation: {
      en: "Source Odoo Learn (Insert an Odoo list): In the List properties panel on the right side of the spreadsheet, accessible by clicking on the data source from the Data menu.",
      fr: "Source Odoo Learn (Insérer une liste Odoo) : Dans le panneau Propriétés de la liste sur le côté droit de la feuille de calcul, accessible en cliquant sur la source de données depuis le menu Données.",
    },
  }),
complexQ({
    id: "spr-050",
    module: "spreadsheet",
    text: {
      en: "In the formula =ODOO.LIST(2, 5, \"user_id\"), what does the second argument (i.e., the number '5') represent? (Odoo Learn — Insert an Odoo list)",
      fr: "Dans la formule =ODOO.LIST(2, 5, \"user_id\"), que représente le deuxième argument (c'est-à-dire le nombre « 5 ») ? (Odoo Learn — Insérer une liste Odoo)",
    },
    correct: {
      en: "The Index, which represents the specific record's original position in the list before insertion.",
      fr: "L'index, qui représente la position d'origine de l'enregistrement spécifique dans la liste avant l'insertion.",
    },
    distractors: [
      { en: "The List ID, which identifies which data source in the spreadsheet to use.", fr: "L'ID de liste, qui identifie la source de données à utiliser dans la feuille de calcul." },
      { en: "The total number of records currently being displayed in that table.", fr: "Nombre total d'enregistrements actuellement affichés dans cette table." },
      { en: "The salesperson's database ID (user_id).", fr: "L'ID de base de données du vendeur (user_id)." },
    ],
    explanation: {
      en: "Source Odoo Learn (Insert an Odoo list): The Index, which represents the specific record's original position in the list before insertion.",
      fr: "Source Odoo Learn (Insérer une liste Odoo) : L'index, qui représente la position d'origine de l'enregistrement spécifique dans la liste avant l'insertion.",
    },
  }),
complexQ({
    id: "spr-051",
    module: "spreadsheet",
    text: {
      en: "When preparing a chart accessed via the Reporting menu of an app, which of the following actions can you perform before inserting it into a spreadsheet? (Odoo Learn — Insert an Odoo chart)",
      fr: "Lors de la préparation d'un graphique accessible via le menu Rapports d'une application, laquelle des actions suivantes pouvez-vous effectuer avant de l'insérer dans une feuille de calcul ? (Odoo Learn — Insérer un graphique Odoo)",
    },
    correct: {
      en: "Change the measure(s) displayed in the chart and apply filters.",
      fr: "Modifiez la ou les mesures affichées dans le graphique et appliquez des filtres.",
    },
    distractors: [
      { en: "Directly edit the underlying data by clicking on a segment of data.", fr: "Modifiez directement les données sous-jacentes en cliquant sur un segment de données." },
      { en: "Set up an automatic email schedule to send the chart to specific followers every time the data updates.", fr: "Configurez un calendrier de courrier électronique automatique pour envoyer le graphique à des abonnés spécifiques à chaque fois que les données sont mises à jour." },
      { en: "Define advanced design customizations like the chart's background color, axis font sizes, and legend positioning.", fr: "Définissez des personnalisations de conception avancées telles que la couleur d'arrière-plan du graphique, la taille de la police des axes et le positionnement de la légende." },
    ],
    explanation: {
      en: "Source Odoo Learn (Insert an Odoo chart): Change the measure(s) displayed in the chart and apply filters.",
      fr: "Source Odoo Learn (Insérer un graphique Odoo) : modifiez la ou les mesures affichées dans le graphique et appliquez des filtres.",
    },
  }),
complexQ({
    id: "spr-052",
    module: "spreadsheet",
    text: {
      en: "Which of the following can be modified within the \"Design\" tab of the Chart properties panel once a chart is inserted into an Odoo spreadsheet? (Odoo Learn — Insert an Odoo chart)",
      fr: "Lequel des éléments suivants peut être modifié dans l'onglet « Conception » du panneau Propriétés du graphique une fois qu'un graphique est inséré dans une feuille de calcul Odoo ? (Odoo Learn — Insérer un graphique Odoo)",
    },
    correct: {
      en: "The chart’s background color, font formatting for titles, and the position of the legend.",
      fr: "La couleur d’arrière-plan du graphique, la mise en forme de la police des titres et la position de la légende.",
    },
    distractors: [
      { en: "The Odoo model the data is being retrieved from (e.g., changing from the Sales Order model to the Contacts model).", fr: "Le modèle Odoo à partir duquel les données sont récupérées (par exemple, passage du modèle Commande client au modèle Contacts)." },
      { en: "The technical domain used to filter the records.", fr: "Le domaine technique utilisé pour filtrer les enregistrements." },
      { en: "The list of users who have permission to view the spreadsheet.", fr: "Liste des utilisateurs autorisés à afficher la feuille de calcul." },
    ],
    explanation: {
      en: "Source Odoo Learn (Insert an Odoo chart): The chart’s background color, font formatting for titles, and the position of the legend.",
      fr: "Source Odoo Learn (Insérer un graphique Odoo) : la couleur d'arrière-plan du graphique, le formatage de la police des titres et la position de la légende.",
    },
  }),
complexQ({
    id: "spr-053",
    module: "spreadsheet",
    text: {
      en: "What is the purpose of the \"Link to Odoo\" feature found in the “Configuration” tab of the Chart properties panel? (Odoo Learn — Insert an Odoo chart)",
      fr: "Quel est l'objectif de la fonctionnalité « Lien vers Odoo » présente dans l'onglet « Configuration » du panneau des propriétés du graphique ? (Odoo Learn — Insérer un graphique Odoo)",
    },
    correct: {
      en: "It adds a link to the original data source or to a specific Odoo menu item.",
      fr: "Il ajoute un lien vers la source de données d'origine ou vers un élément de menu Odoo spécifique.",
    },
    distractors: [
      { en: "It allows external clients to view the spreadsheet via a link without needing an Odoo login.", fr: "Il permet aux clients externes de visualiser la feuille de calcul via un lien sans avoir besoin d'une connexion Odoo." },
      { en: "It automatically sends an email notification to the Sales Manager whenever the data updates.", fr: "Il envoie automatiquement une notification par e-mail au responsable des ventes chaque fois que les données sont mises à jour." },
      { en: "Enabling this feature ensures that the chart data remains up-to-date when change are made in the database.", fr: "L'activation de cette fonctionnalité garantit que les données du graphique restent à jour lorsque des modifications sont apportées à la base de données." },
    ],
    explanation: {
      en: "Source Odoo Learn (Insert an Odoo chart): It adds a link to the original data source or to a specific Odoo menu item.",
      fr: "Source Odoo Learn (Insérer un graphique Odoo) : il ajoute un lien vers la source de données d'origine ou vers un élément de menu Odoo spécifique.",
    },
  }),
complexQ({
    id: "spr-054",
    module: "spreadsheet",
    text: {
      en: "What happens if you click on a specific data segment (like a colored bar) of an Odoo chart within a spreadsheet? (Odoo Learn — Insert an Odoo chart)",
      fr: "Que se passe-t-il si vous cliquez sur un segment de données spécifique (comme une barre colorée) d'un graphique Odoo dans une feuille de calcul ? (Odoo Learn — Insérer un graphique Odoo)",
    },
    correct: {
      en: "It allows you to directly access and view all the underlying Odoo database records that make up that specific total.",
      fr: "Il vous permet d'accéder et de visualiser directement tous les enregistrements de la base de données Odoo sous-jacente qui composent ce total spécifique.",
    },
    distractors: [
      { en: "It opens the \"Design\" tab of the chart properties to change the color of that segment.", fr: "Il ouvre l'onglet \"Conception\" des propriétés du graphique pour changer la couleur de ce segment." },
      { en: "It deletes that segment from the chart to help you focus on other data points.", fr: "Il supprime ce segment du graphique pour vous aider à vous concentrer sur d'autres points de données." },
      { en: "It automatically sends a message to the salesperson represented by that segment.", fr: "Il envoie automatiquement un message au vendeur représenté par ce segment." },
    ],
    explanation: {
      en: "Source Odoo Learn (Insert an Odoo chart): It allows you to directly access and view all the underlying Odoo database records that make up that specific total.",
      fr: "Source Odoo Learn (Insérer un graphique Odoo) : Il vous permet d'accéder et de visualiser directement tous les enregistrements de la base de données Odoo sous-jacente qui composent ce total spécifique.",
    },
  }),
complexQ({
    id: "stu-081",
    module: "studio",
    text: {
      en: "How can you configure your database to work with IAP services? (Odoo Learn — In-App Services (Tokens and Credits))",
      fr: "Comment pouvez-vous configurer votre base de données pour qu'elle fonctionne avec les services IAP ? (Odoo Learn — Services intégrés à l'application (jetons et crédits))",
    },
    correct: {
      en: "IAP services are automatically integrated with all Odoo databases. No additional configuration is required for them to work.",
      fr: "Les services IAP sont automatiquement intégrés à toutes les bases de données Odoo. Aucune configuration supplémentaire n'est requise pour qu'ils fonctionnent.",
    },
    distractors: [
      { en: "IAP services are automatically integrated with all Odoo databases, but require app-specific configuration to work properly. You must go to the Configuration page for each app and manually enable “IAP functionality.”", fr: "Les services IAP sont automatiquement intégrés à toutes les bases de données Odoo, mais nécessitent une configuration spécifique à l'application pour fonctionner correctement. Vous devez accéder à la page de configuration de chaque application et activer manuellement la « fonctionnalité IAP »." },
      { en: "Log into your database, go to the Settings app, search for “IAP services” and toggle the setting.", fr: "Connectez-vous à votre base de données, accédez à l'application Paramètres, recherchez « Services IAP » et modifiez le paramètre." },
      { en: "To properly configure IAP services, you must reach out to Odoo customer support directly via phone or email.", fr: "Pour configurer correctement les services IAP, vous devez contacter le support client Odoo directement par téléphone ou par e-mail." },
    ],
    explanation: {
      en: "Source Odoo Learn (In-App Services (Tokens and Credits)): IAP services are automatically integrated with all Odoo databases. No additional configuration is required for them to work.",
      fr: "Source Odoo Learn (Services In-App (Jetons et Crédits)) : Les services IAP sont automatiquement intégrés à toutes les bases de données Odoo. Aucune configuration supplémentaire n'est requise pour qu'ils fonctionnent.",
    },
  }),
complexQ({
    id: "stu-082",
    module: "studio",
    text: {
      en: "True or false: IAP services can be configured so that only certain companies in a multi-company database can use them? (Odoo Learn — In-App Services (Tokens and Credits))",
      fr: "Vrai ou faux : les services IAP peuvent-ils être configurés pour que seules certaines entreprises d'une base de données multi-entreprises puissent les utiliser ? (Odoo Learn — Services intégrés à l'application (jetons et crédits))",
    },
    correct: {
      en: "True. IAP services can be restricted by company within the Settings app.",
      fr: "Vrai. Les services IAP peuvent être restreints par entreprise dans l'application Paramètres.",
    },
    distractors: [
      { en: "True in most cases. By default, IAP services are only available to the main company in a multi-company database, but admin users can change this setting.", fr: "C'est vrai dans la plupart des cas. Par défaut, les services IAP ne sont disponibles que pour l'entreprise principale dans une base de données multi-entreprises, mais les utilisateurs administrateurs peuvent modifier ce paramètre." },
      { en: "False. Due to their deep integration with Odoo databases, IAP services cannot be restricted from being used by all companies in a multi-company database.", fr: "FAUX. En raison de leur intégration profonde avec les bases de données Odoo, les services IAP ne peuvent être empêchés d'être utilisés par toutes les entreprises dans une base de données multi-entreprises." },
      { en: "False in most cases. By default, IAP services are always available to all companies in a multi-company database, but you can contact Odoo customer support to enable some restrictions.", fr: "Faux dans la plupart des cas. Par défaut, les services IAP sont toujours disponibles pour toutes les entreprises dans une base de données multi-entreprises, mais vous pouvez contacter le support client Odoo pour activer certaines restrictions." },
    ],
    explanation: {
      en: "Source Odoo Learn (In-App Services (Tokens and Credits)): True. IAP services can be restricted by company within the Settings app.",
      fr: "Source Odoo Learn (services intégrés à l'application (jetons et crédits)) : vrai. Les services IAP peuvent être restreints par entreprise dans l'application Paramètres.",
    },
  }),
complexQ({
    id: "pur-026",
    module: "purchases",
    text: {
      en: "You’ve bought in-app purchase (IAP) credits for Document Digitization and want to use them with the Lead Generation service. How do you do this? (Odoo Learn — In-App Services (Tokens and Credits))",
      fr: "Vous avez acheté des crédits d'achat in-app (IAP) pour la numérisation de documents et souhaitez les utiliser avec le service Lead Generation. Comment faites-vous cela ? (Odoo Learn — Services intégrés à l'application (jetons et crédits))",
    },
    correct: {
      en: "This can’t be done. IAP credits are not interchangeable.",
      fr: "Cela ne peut pas être fait. Les crédits IAP ne sont pas interchangeables.",
    },
    distractors: [
      { en: "Log into your database, go to the Settings app, search for “credit refund” and follow the process.The IAP funds this refund generates can then be used to purchase Lead Generation credits.", fr: "Connectez-vous à votre base de données, accédez à l'application Paramètres, recherchez « remboursement de crédit » et suivez le processus. Les fonds IAP générés par ce remboursement peuvent ensuite être utilisés pour acheter des crédits de génération de leads." },
      { en: "Log into your database, go to the Settings app, search for “credit exchange” and follow the process. IAP credits may be exchanged for different kinds of credits at varying conversion rates.", fr: "Connectez-vous à votre base de données, accédez à l'application Paramètres, recherchez « échange de crédits » et suivez le processus. Les crédits IAP peuvent être échangés contre différents types de crédits à différents taux de conversion." },
      { en: "IAP credits are a fungible currency. You can simply purchase credits and spend them on any service you like.", fr: "Les crédits IAP sont une monnaie fongible. Vous pouvez simplement acheter des crédits et les dépenser pour le service de votre choix." },
    ],
    explanation: {
      en: "Source Odoo Learn (In-App Services (Tokens and Credits)): This can’t be done. IAP credits are not interchangeable.",
      fr: "Source Odoo Learn (services intégrés à l'application (jetons et crédits)) : cela ne peut pas être fait. Les crédits IAP ne sont pas interchangeables.",
    },
  }),
];
