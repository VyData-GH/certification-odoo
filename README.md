# Odoo 19 Certification Trainer

Application Next.js + Supabase pour s'entraîner à la certification Odoo 19.  
Frontend, API et déploiement Vercel dans un seul projet — pas de serveur backend séparé.

## Structure

```
├── frontend/                    # Next.js (UI, auth, examen, API routes)
│   ├── src/app/api/             # API serverless (historique, health)
│   └── src/lib/server/          # Logique serveur (auth JWT, Supabase admin)
├── supabase/                    # Schéma SQL (exam_sessions)
└── package.json                 # Scripts racine (dev, build, lint)
```

## Prérequis

- Node.js 20+
- Compte [Supabase](https://supabase.com) (URL + clés API)

---

## 1. Supabase (une seule fois)

1. Créer un projet Supabase
2. **SQL Editor** → coller et exécuter `supabase/schema.sql`
3. **Authentication** → activer Email / mot de passe
4. Noter :
   - `Project URL`
   - `anon` key → variables publiques frontend
   - `service_role` key → variable serveur uniquement (API routes)

---

## 2. Configuration locale

```bash
cp frontend/.env.local.example frontend/.env.local
```

Remplir `frontend/.env.local` :

| Variable | Usage |
|----------|-------|
| `NEXT_PUBLIC_SUPABASE_URL` | Client Supabase (navigateur) |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Client Supabase (navigateur) |
| `SUPABASE_SERVICE_ROLE_KEY` | API routes serveur — **ne jamais exposer au navigateur** |

```bash
npm install --prefix frontend
```

---

## 3. Lancer en local

Depuis la **racine du projet** :

```bash
npm run dev
```

| URL | Description |
|-----|-------------|
| http://localhost:3000 | Application |
| http://localhost:3000/api/health | Health check → `{"status":"ok"}` |
| http://localhost:3000/api/history | API historique (JWT Supabase requis) |

### API historique

Endpoints (header `Authorization: Bearer <token>`) :

- `GET /api/history` — liste les sessions
- `POST /api/history` — enregistre une session
- `DELETE /api/history` — efface l'historique

---

## 4. Déploiement Vercel

1. Importer le repo GitHub
2. **Root Directory** → `frontend`
3. Ajouter les variables d'environnement (mêmes noms que `.env.local`)
4. Deploy

Branches Git : `main` (production), `develop` (développement).

---

## Protection par login (sans SSO)

L'application est **protégée** : toute page (`/`, `/exam`, `/modules`, `/history`) exige une connexion.

- **Authentification** : e-mail + mot de passe via [Supabase Auth](https://supabase.com/docs/guides/auth) — pas de Google/Microsoft/SAML
- **Page publique** : `/auth` uniquement
- **Déconnexion** → retour automatique vers `/auth`
- Chaque utilisateur est identifié par un `user_id` (UUID) ; l'historique est lié à son compte dans Supabase

### Restreindre qui peut s'inscrire (recommandé en production)

Dans Supabase → **Authentication** → **Providers** → Email :

1. Désactiver **Confirm email** si vous invitez vous-même les utilisateurs
2. Ou désactiver les inscriptions publiques : **Authentication** → **Settings** → désactiver « Enable sign ups » et créer les comptes manuellement dans **Users**

### Variables requises

`frontend/.env.local` doit contenir les trois variables listées ci-dessus — sans `NEXT_PUBLIC_SUPABASE_URL` et `NEXT_PUBLIC_SUPABASE_ANON_KEY`, la connexion est impossible ; sans `SUPABASE_SERVICE_ROLE_KEY`, l'historique cloud ne fonctionne pas.

---

## Scripts

| Commande | Action |
|----------|--------|
| `npm run dev` | Serveur de développement |
| `npm run build` | Build production |
| `npm run start` | Démarrer le build |
| `npm run lint` | ESLint |
