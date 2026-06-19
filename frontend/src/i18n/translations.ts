export type Locale = "en" | "fr";

export const translations = {
  en: {
    appName: "Odoo 19 Functional Certification",
    appSubtitle: "Training Simulator",
    nav: {
      home: "Home",
      courses: "Courses",
      modules: "Modules",
      history: "History",
      startExam: "Start Exam",
      login: "Sign in",
      logout: "Sign out",
    },
    footer: {
      author: "Author:",
      partOf: "Part of the",
      group: "group.",
    },
    auth: {
      title: "Sign in",
      subtitle: "Save your exam history across devices",
      loginRequired:
        "Sign in to access the Odoo 19 certification trainer.",
      loading: "Checking session…",
      redirecting: "Redirecting to sign in…",
      email: "Email",
      password: "Password",
      signIn: "Sign in",
      signUp: "Create account",
      noAccount: "No account yet?",
      hasAccount: "Already have an account?",
      signOut: "Sign out",
      loggedInAs: "Signed in as",
      notConfigured:
        "Supabase is not configured. History is stored locally in your browser.",
      localOnly: "Local mode — sign in to sync history to the cloud",
      cloudSynced: "History synced to your account",
      error: "Authentication error",
      errorEmailRateLimit:
        "Email sending limit reached (about 2 emails per hour with Supabase's built-in provider). Wait before trying again, or check your inbox — a confirmation email may already have been sent.",
      errorSignupRateLimit:
        "Too many sign-up or resend attempts for this address. Please wait a few minutes before trying again.",
      errorTooManyRequests:
        "Too many requests. Please wait a moment and try again.",
      errorInvalidCredentials: "Incorrect email or password.",
      errorUserAlreadyRegistered:
        "An account with this email already exists. Sign in or use password recovery.",
      emailNotVerified:
        "Your email address has not been verified yet. Check your inbox and click the confirmation link before signing in.",
      verifyEmailTitle: "Verify your email",
      verifyEmailBody:
        "We sent a confirmation link to {email}. Click the link in the email to activate your account, then sign in.",
      verifyEmailSent:
        "Account created. A confirmation email was sent to {email}. Verify your address before signing in.",
      verifyEmailResent: "Resend confirmation email",
      verifyEmailResentInfo: "A new confirmation email was sent to {email}.",
      verifyEmailBackToSignIn: "Back to sign in",
    },
    home: {
      heroTitle: "Odoo 19 Functional Certification",
      heroSubtitle: "Hello, Odooers!",
      heroDesc:
        "Train with simulated MCQs covering all 18 official exam modules — random questions, timer and scoring identical to the real test.",
      officialRules: "Official Exam Guidelines",
      questions: "Questions",
      duration: "Duration",
      passThreshold: "Pass threshold",
      scoring: "Scoring",
      scoringSub: "right / wrong / blank",
      modulesCovered: "Modules covered",
      trainingModes: "Training Modes",
      questionsAvailable: "questions available",
      start: "Start →",
      byModule: "By Module",
      byModuleDesc: "Target a specific module (CRM, Sales, Accounting, MRP…)",
      history: "History",
      historyDesc: "Review your scores and track your progress",
      tipsTitle: "Tips to Pass",
      tip1: "Train daily with the daily challenge (different selection each day)",
      tip2: "Use review mode to understand mistakes with explanations",
      tip3: "Take the full mock exam when you regularly score above 75% on half-exams",
      tip4: "Watch the scoring: a wrong answer costs ½ point — use « I don't know » when unsure (0 pts)",
      footer:
        "Independent simulator — not affiliated with Odoo SA. Based on the official Odoo 19 Functional Certification program.",
      view360: "360° Coverage",
      view360Desc: "Questions span every functional area of Odoo 19",
    },
    guidelines: {
      title: "Tips & Guidelines for Your Upcoming Test",
      nominative:
        "The certification is NOMINATIVE and it cannot be transferred to another account after its completion.",
      rightUser:
        "Make sure to be connected with the right user before starting the exam.",
      support:
        "If you wish to make changes to your account, please reach out to our Support Services.",
      subjects:
        "The exam will cover the following subjects: Website, eCommerce, Survey, Marketing, AI, CRM, Sales, Purchases, Project, Timesheet, Accounting, Inventory, MRP, HR, Spreadsheet, Knowledge, POS, and Studio.",
      duration: "You'll have 1.5 hours to complete the 120-question certification exam.",
      sampleDuration:
        "The official Odoo sample test gives you 20 minutes for 30 questions.",
      pass: "You must score (at least) 70% to PASS.",
      rightPts: "Each RIGHT answer is worth 1 point.",
      wrongPts: "Each WRONG answer will cost you ½ point.",
      unansweredPts: "Each UNANSWERED question is worth 0 points.",
      dontKnowPts:
        "Use « I don't know » to skip a question without losing points (0 points, like a blank answer).",
      odooTab:
        "You may use Odoo in another browser tab, but you will not have time to look up every answer.",
      submit:
        "Once you submit the exam on the final page, you CANNOT go back. So, be careful and make sure to double-check your answers.",
      luck: "Best of Luck!",
    },
    presets: {
      "full-exam": {
        title: "Full Mock Exam",
        description: "All modules · Official conditions",
        badge: "Official",
      },
      "half-exam": {
        title: "Half Exam",
        description: "Random mix of all modules",
      },
      "sample-test": {
        title: "Odoo Sample Test",
        description:
          "12 UI screenshots · Same scoring as Odoo official sample",
        badge: "Odoo",
      },
      "quick-quiz": {
        title: "Quick Quiz",
        description: "Ideal for a short daily session",
      },
      "daily-challenge": {
        title: "Daily Challenge",
        description: "Daily random selection",
        badge: "Daily",
      },
      "review-mode": {
        title: "Review Mode",
        description: "Immediate explanations after each answer",
      },
    },
    briefing: {
      intro:
        "This session follows the official Odoo functional certification rules.",
      sampleTitle: "Odoo Sample Test",
      certTitle: "Odoo 19 Certification — Mock Exam",
      trainingTitle: "Training Session",
      reviewTitle: "Review Mode",
      sampleTime:
        "You have {minutes} minutes for {questions} questions (~{seconds} seconds per question on average).",
      examTime:
        "You have {duration} for {questions} questions (~{seconds} seconds per question on average).",
      scoring:
        "You gain 1 point per correct answer and lose ½ point per wrong answer.",
      dontKnow:
        "Use « I don't know » — always the last choice in the list — to skip without losing points (0 points).",
      odooTab:
        "You may open Odoo in another tab, but you will not have time to verify each answer.",
      pass: "You need at least {threshold}% to pass.",
      submitFinal:
        "Once submitted, you cannot change your answers — check them carefully.",
      reviewIntro: "No timer — take your time on each question.",
      reviewExplanations:
        "The explanation appears after you pick an answer or « I don't know ».",
      back: "← Back",
      startExam: "Start exam",
      startReview: "Start review",
    },
    exam: {
      leave: "← Leave",
      reviewMode: "Review Mode",
      sampleTest: "Odoo Sample Test — 30 questions · 20 min",
      fullExam: "Mock Exam — 120 questions",
      training: "Training",
      questions: "questions",
      noTimer: "No timer",
      loading: "Loading exam…",
      reminder:
        "Reminder: like the official exam, once submitted you cannot change your answers.",
      confirmTitle: "Confirm submission?",
      unanswered:
        "question(s) left blank (0 points).",
      dontKnowSummary: "marked « I don't know » (0 points).",
      allAnswered: "Every question has been addressed.",
      scoringReminder:
        "Scoring: +1 correct, −½ wrong, 0 blank or « I don't know ». Pass threshold: 70%.",
      dontKnow: "I don't know",
      dontKnowChosen: "You chose « I don't know » — 0 points (no penalty).",
      dontKnowHint:
        "« I don't know » is always the last answer choice (A–E) — 0 points, no −½ penalty.",
      odooTabHint:
        "You may use Odoo in another tab, but there is not enough time to look up every answer.",
      continue: "Continue exam",
      submitFinal: "Submit definitively",
      question: "Question",
      screenshotCaption: "Odoo interface screenshot (training mockup)",
      explanation: "Explanation",
    },
    nav2: {
      navigation: "Navigation",
      answered: "addressed",
      legendAnswered: "Answered",
      legendDontKnow: "I don't know",
      legendBlank: "Blank",
      previous: "Previous",
      next: "Next",
      submit: "Submit exam",
      finish: "Finish",
    },
    results: {
      congrats: "Congratulations!",
      keepTraining: "Keep training",
      passed: "You reached the 70% pass threshold",
      failed: "You need 70% to pass — you're getting there!",
      score: "Score",
      examPoints: "Exam points",
      examScoreOfficial: "{score} pts · +1 correct · −½ wrong · 0 blank",
      points: "points",
      correct: "Correct",
      wrong: "Wrong",
      unanswered: "Blank",
      dontKnow: "I don't know",
      duration: "Duration",
      byModule: "Results by module",
      scoringReminder:
        "Official scoring: +1 pt correct, −½ pt wrong, 0 pt blank or « I don't know ». Pass: 70%.",
      retry: "Retry",
      retryQuiz: "Retake quiz",
      reviewWeak: "Review my weak areas",
      correctAnswersCount: "{correct} correct answers out of {total}",
      passBanner: "✓ Pass threshold reached (threshold: {threshold}%)",
      failBanner: "Below pass threshold (threshold: {threshold}%)",
      home: "Home",
      history: "History",
      reviewModalTitle: "Wrong & unanswered questions",
      reviewClose: "Close",
      reviewNoData:
        "Detailed review is not available for this session (older sessions do not store answers).",
      yourAnswer: "your answer",
      correctAnswer: "correct",
    },
    modules: {
      title: "Training by Module",
      subtitle: "Target your weak areas",
      quizDesc: "Focused quiz on this module only",
    },
    courses: {
      title: "Course Study",
      subtitle: "Review each certification module before practicing",
      intro:
        "Short summaries aligned with the Odoo 19 functional certification syllabus. Read a module, then launch a quiz, sample test, or full exam.",
      readTime: "~{min} min read",
      quickFlow: "Essential flow",
      readMore: "Study module",
      keyTopics: "Everything to cover",
      examFocus: "Exam traps & distinctions",
      readyToPractice: "Ready to practice?",
      practiceHint: "Start with a short quiz, then try the sample test or full exam from Home.",
      quiz10: "Quiz — 10 Q",
      quiz15: "Quiz — 15 Q",
      quiz20: "Quiz — 20 Q",
      allModules: "All modules →",
      notFound: "Module not found",
      backToList: "Back to courses",
    },
    historyPage: {
      title: "Session History",
      subtitle: "Track your progress over time",
      empty: "No sessions recorded yet.",
      start: "Start training",
      clear: "Clear history",
      clearConfirmTitle: "Clear history",
      clearConfirm: "This will permanently delete all your saved sessions. This action cannot be undone.",
      clearConfirmAction: "Clear all",
      cancel: "Cancel",
      correct: "correct",
      sourceCloud: "Cloud (Supabase)",
      sourceLocal: "Local (browser)",
      loginPrompt: "Sign in to save history across devices",
      selectSession: "Select a session to view the full summary",
      viewDetails: "View analysis →",
      clickHint: "Click a session to display its full analysis on the right.",
      analysisTitle: "Session analysis",
      backToList: "← Back to list",
      modes: {
        full: "Exam",
        module: "Module",
        review: "Review",
        quick: "Quiz",
        sample: "Sample Test",
      },
    },
    modules_labels: {
      website: "Website",
      ecommerce: "eCommerce",
      survey: "Survey",
      marketing: "Marketing",
      ai: "AI",
      crm: "CRM",
      sales: "Sales",
      purchases: "Purchases",
      project: "Project",
      timesheet: "Timesheet",
      accounting: "Accounting",
      inventory: "Inventory",
      mrp: "MRP",
      hr: "HR",
      spreadsheet: "Spreadsheet",
      knowledge: "Knowledge",
      pos: "POS",
      studio: "Studio",
    } as Record<string, string>,
  },
  fr: {
    appName: "Certification Fonctionnelle Odoo 19",
    appSubtitle: "Simulateur d'entraînement",
    nav: {
      home: "Accueil",
      courses: "Cours",
      modules: "Modules",
      history: "Historique",
      startExam: "Lancer l'examen",
      login: "Connexion",
      logout: "Déconnexion",
    },
    footer: {
      author: "Auteur :",
      partOf: "Fait partie du groupe",
      group: "",
    },
    auth: {
      title: "Connexion",
      subtitle: "Sauvegardez votre historique sur tous vos appareils",
      loginRequired:
        "Connectez-vous pour accéder au simulateur de certification Odoo 19.",
      loading: "Vérification de la session…",
      redirecting: "Redirection vers la connexion…",
      email: "E-mail",
      password: "Mot de passe",
      signIn: "Se connecter",
      signUp: "Créer un compte",
      noAccount: "Pas encore de compte ?",
      hasAccount: "Déjà un compte ?",
      signOut: "Se déconnecter",
      loggedInAs: "Connecté en tant que",
      notConfigured:
        "Supabase non configuré. L'historique est stocké localement dans le navigateur.",
      localOnly: "Mode local — connectez-vous pour synchroniser dans le cloud",
      cloudSynced: "Historique synchronisé avec votre compte",
      error: "Erreur d'authentification",
      errorEmailRateLimit:
        "Limite d'envoi d'e-mails atteinte (environ 2 e-mails par heure avec le fournisseur intégré Supabase). Patientez avant de réessayer, ou consultez votre boîte mail : un e-mail de confirmation a peut-être déjà été envoyé.",
      errorSignupRateLimit:
        "Trop de tentatives d'inscription ou de renvoi pour cette adresse. Patientez quelques minutes avant de réessayer.",
      errorTooManyRequests:
        "Trop de requêtes. Patientez un moment puis réessayez.",
      errorInvalidCredentials: "E-mail ou mot de passe incorrect.",
      errorUserAlreadyRegistered:
        "Un compte existe déjà avec cet e-mail. Connectez-vous ou utilisez la récupération de mot de passe.",
      emailNotVerified:
        "Votre adresse e-mail n'est pas encore vérifiée. Consultez votre boîte mail et cliquez sur le lien de confirmation avant de vous connecter.",
      verifyEmailTitle: "Vérifiez votre e-mail",
      verifyEmailBody:
        "Un lien de confirmation a été envoyé à {email}. Cliquez sur le lien dans l'e-mail pour activer votre compte, puis connectez-vous.",
      verifyEmailSent:
        "Compte créé. Un e-mail de confirmation a été envoyé à {email}. Vérifiez votre adresse avant de vous connecter.",
      verifyEmailResent: "Renvoyer l'e-mail de confirmation",
      verifyEmailResentInfo: "Un nouvel e-mail de confirmation a été envoyé à {email}.",
      verifyEmailBackToSignIn: "Retour à la connexion",
    },
    home: {
      heroTitle: "Certification Fonctionnelle Odoo 19",
      heroSubtitle: "Hello, Odooers !",
      heroDesc:
        "Entraînez-vous avec des QCM simulés couvrant les 18 modules officiels — questions aléatoires, chrono et barème identiques à l'examen réel.",
      officialRules: "Consignes officielles de l'examen",
      questions: "Questions",
      duration: "Durée",
      passThreshold: "Seuil de réussite",
      scoring: "Barème",
      scoringSub: "bonne / mauvaise / vide",
      modulesCovered: "Modules couverts",
      trainingModes: "Modes d'entraînement",
      questionsAvailable: "questions disponibles",
      start: "Démarrer →",
      byModule: "Par module",
      byModuleDesc:
        "Ciblez un module spécifique (CRM, Ventes, Compta, MRP…)",
      history: "Historique",
      historyDesc: "Consultez vos scores et suivez votre progression",
      tipsTitle: "Conseils pour réussir",
      tip1: "Entraînez-vous quotidiennement avec le défi du jour (sélection différente chaque jour)",
      tip2: "Utilisez le mode révision pour comprendre vos erreurs avec les explications",
      tip3: "Passez l'examen blanc complet quand vous dépassez régulièrement 75% sur les demi-examens",
      tip4: "Attention au barème : une mauvaise réponse coûte ½ point — utilisez « Je ne sais pas » si vous hésitez (0 pt)",
      footer:
        "Simulateur indépendant — non affilié à Odoo SA. Basé sur le programme officiel Odoo 19 Functional Certification.",
      view360: "Couverture 360°",
      view360Desc:
        "Des questions couvrant chaque domaine fonctionnel d'Odoo 19",
    },
    guidelines: {
      title: "Conseils et consignes pour votre examen",
      nominative:
        "La certification est NOMINATIVE et ne peut pas être transférée à un autre compte après sa complétion.",
      rightUser:
        "Assurez-vous d'être connecté avec le bon utilisateur avant de commencer l'examen.",
      support:
        "Pour modifier votre compte, contactez nos Services d'assistance.",
      subjects:
        "L'examen couvrira les sujets suivants : Website, eCommerce, Survey, Marketing, AI, CRM, Sales, Purchases, Project, Timesheet, Accounting, Inventory, MRP, HR, Spreadsheet, Knowledge, POS et Studio.",
      duration:
        "Vous aurez 1h30 pour compléter l'examen de certification de 120 questions.",
      sampleDuration:
        "Le sample test officiel Odoo : 30 questions en 20 minutes.",
      pass: "Vous devez obtenir au moins 70% pour RÉUSSIR.",
      rightPts: "Chaque BONNE réponse vaut 1 point.",
      wrongPts: "Chaque MAUVAISE réponse coûte ½ point.",
      unansweredPts: "Chaque question SANS RÉPONSE vaut 0 point.",
      dontKnowPts:
        "Utilisez « Je ne sais pas » pour passer une question sans perdre de points (0 point, comme une réponse vide).",
      odooTab:
        "Vous pouvez utiliser Odoo dans un autre onglet, mais vous n'aurez pas le temps de vérifier chaque réponse.",
      submit:
        "Une fois l'examen soumis sur la page finale, vous NE POUVEZ PLUS revenir en arrière. Vérifiez bien vos réponses.",
      luck: "Bonne chance !",
    },
    presets: {
      "full-exam": {
        title: "Examen blanc complet",
        description: "Tous les modules · Conditions officielles",
        badge: "Officiel",
      },
      "half-exam": {
        title: "Demi-examen",
        description: "Mix aléatoire de tous les modules",
      },
      "sample-test": {
        title: "Sample Test Odoo",
        description:
          "12 captures d'interface · Même barème que le sample officiel",
        badge: "Odoo",
      },
      "quick-quiz": {
        title: "Quiz rapide",
        description: "Idéal pour une courte session quotidienne",
      },
      "daily-challenge": {
        title: "Défi du jour",
        description: "Sélection aléatoire quotidienne",
        badge: "Quotidien",
      },
      "review-mode": {
        title: "Mode révision",
        description: "Explications immédiates après chaque réponse",
      },
    },
    briefing: {
      intro:
        "Cette session suit les règles de la certification fonctionnelle Odoo officielle.",
      sampleTitle: "Sample Test Odoo",
      certTitle: "Certification Odoo 19 — Examen blanc",
      trainingTitle: "Session d'entraînement",
      reviewTitle: "Mode révision",
      sampleTime:
        "Vous disposez de {minutes} minutes pour {questions} questions (~{seconds} secondes par question en moyenne).",
      examTime:
        "Vous disposez de {duration} pour {questions} questions (~{seconds} secondes par question en moyenne).",
      scoring:
        "Chaque bonne réponse rapporte 1 point ; chaque mauvaise réponse enlève ½ point.",
      dontKnow:
        "Utilisez « Je ne sais pas » — toujours le dernier choix de la liste — pour passer sans perdre de points (0 point).",
      odooTab:
        "Vous pouvez ouvrir Odoo dans un autre onglet, mais vous n'aurez pas le temps de tout vérifier.",
      pass: "Il faut obtenir au moins {threshold} % pour réussir.",
      submitFinal:
        "Une fois soumis, vous ne pouvez plus modifier vos réponses — vérifiez-les bien.",
      reviewIntro: "Sans chrono — prenez le temps sur chaque question.",
      reviewExplanations:
        "L'explication s'affiche après votre réponse ou « Je ne sais pas ».",
      back: "← Retour",
      startExam: "Commencer l'examen",
      startReview: "Commencer la révision",
    },
    exam: {
      leave: "← Quitter",
      reviewMode: "Mode révision",
      sampleTest: "Sample Test Odoo — 30 questions · 20 min",
      fullExam: "Examen blanc — 120 questions",
      training: "Entraînement",
      questions: "questions",
      noTimer: "Sans chrono",
      loading: "Chargement de l'examen…",
      reminder:
        "Rappel : comme l'examen officiel, une fois soumis vous ne pourrez plus modifier vos réponses.",
      confirmTitle: "Confirmer la soumission ?",
      unanswered: "question(s) laissée(s) vide(s) (0 point).",
      dontKnowSummary: "marquée(s) « Je ne sais pas » (0 point).",
      allAnswered: "Toutes les questions ont été traitées.",
      scoringReminder:
        "Barème : +1 bonne, −½ mauvaise, 0 vide ou « Je ne sais pas ». Seuil : 70%.",
      dontKnow: "Je ne sais pas",
      dontKnowChosen:
        "Vous avez choisi « Je ne sais pas » — 0 point (pas de pénalité).",
      dontKnowHint:
        "« Je ne sais pas » est toujours le dernier choix proposé (A à E) — 0 point, pas de pénalité −½.",
      odooTabHint:
        "Vous pouvez utiliser Odoo dans un autre onglet, mais le temps ne permet pas de tout vérifier.",
      continue: "Continuer l'examen",
      submitFinal: "Soumettre définitivement",
      question: "Question",
      screenshotCaption: "Capture d'interface Odoo (maquette d'entraînement)",
      explanation: "Explication",
    },
    nav2: {
      navigation: "Navigation",
      answered: "traitées",
      legendAnswered: "Répondues",
      legendDontKnow: "Je ne sais pas",
      legendBlank: "Vides",
      previous: "Précédent",
      next: "Suivant",
      submit: "Soumettre l'examen",
      finish: "Terminer",
    },
    results: {
      congrats: "Félicitations !",
      keepTraining: "Continuez à vous entraîner",
      passed: "Vous avez atteint le seuil de réussite de 70%",
      failed: "Il vous faut 70% pour réussir — vous y êtes presque !",
      score: "Score",
      examPoints: "Points examen",
      examScoreOfficial: "{score} pt · +1 bonne · −½ erreur · 0 sans réponse",
      points: "points",
      correct: "Correctes",
      wrong: "Incorrectes",
      unanswered: "Vides",
      dontKnow: "Je ne sais pas",
      duration: "Durée",
      byModule: "Résultats par module",
      scoringReminder:
        "Barème officiel : +1 pt bonne, −½ pt mauvaise, 0 pt vide ou « Je ne sais pas ». Seuil : 70%.",
      retry: "Recommencer",
      retryQuiz: "Recommencer le quiz",
      reviewWeak: "Réviser mes points faibles",
      correctAnswersCount: "{correct} bonnes réponses sur {total}",
      passBanner: "✓ Niveau de passage atteint (seuil : {threshold}%)",
      failBanner: "Seuil de passage non atteint (seuil : {threshold}%)",
      home: "Accueil",
      history: "Historique",
      reviewModalTitle: "Questions erronées ou sans réponse",
      reviewClose: "Fermer",
      reviewNoData:
        "La révision détaillée n'est pas disponible pour cette session (les anciennes sessions ne stockent pas les réponses).",
      yourAnswer: "votre réponse",
      correctAnswer: "bonne réponse",
    },
    modules: {
      title: "Entraînement par module",
      subtitle: "Ciblez vos points faibles",
      quizDesc: "Quiz ciblé sur ce module uniquement",
    },
    courses: {
      title: "Étude des cours",
      subtitle: "Révisez chaque module avant de vous entraîner",
      intro:
        "Synthèses courtes alignées sur le programme de certification fonctionnelle Odoo 19. Lisez un module, puis lancez un quiz, un examen blanc ou l'examen complet.",
      readTime: "~{min} min de lecture",
      quickFlow: "Flux essentiel",
      readMore: "Étudier le module",
      keyTopics: "Tout ce qu'il faut couvrir",
      examFocus: "Pièges & distinctions examen",
      readyToPractice: "Prêt à vous entraîner ?",
      practiceHint:
        "Commencez par un quiz court, puis essayez l'examen blanc ou l'examen complet depuis l'accueil.",
      quiz10: "Quiz — 10 Q",
      quiz15: "Quiz — 15 Q",
      quiz20: "Quiz — 20 Q",
      allModules: "Tous les modules →",
      notFound: "Module introuvable",
      backToList: "Retour aux cours",
    },
    historyPage: {
      title: "Historique des sessions",
      subtitle: "Suivez votre progression au fil des entraînements",
      empty: "Aucune session enregistrée pour le moment.",
      start: "Commencer un entraînement",
      clear: "Effacer l'historique",
      clearConfirmTitle: "Effacer l'historique",
      clearConfirm:
        "Toutes vos sessions enregistrées seront supprimées définitivement. Cette action est irréversible.",
      clearConfirmAction: "Tout effacer",
      cancel: "Annuler",
      correct: "correctes",
      sourceCloud: "Cloud (Supabase)",
      sourceLocal: "Local (navigateur)",
      loginPrompt: "Connectez-vous pour sauvegarder l'historique sur tous vos appareils",
      selectSession: "Sélectionnez une session pour voir le résumé complet",
      viewDetails: "Voir l'analyse →",
      clickHint: "Cliquez sur une session pour afficher son analyse complète.",
      analysisTitle: "Analyse de la session",
      backToList: "← Retour à la liste",
      modes: {
        full: "Examen",
        module: "Module",
        review: "Révision",
        quick: "Quiz",
        sample: "Sample Test",
      },
    },
    modules_labels: {
      website: "Site Web",
      ecommerce: "eCommerce",
      survey: "Sondages",
      marketing: "Marketing",
      ai: "IA",
      crm: "CRM",
      sales: "Ventes",
      purchases: "Achats",
      project: "Projet",
      timesheet: "Feuilles de temps",
      accounting: "Comptabilité",
      inventory: "Inventaire",
      mrp: "Fabrication",
      hr: "RH",
      spreadsheet: "Feuilles de calcul",
      knowledge: "Connaissances",
      pos: "Point de Vente",
      studio: "Studio",
    } as Record<string, string>,
  },
} as const;

export function t(locale: Locale) {
  return translations[locale];
}
