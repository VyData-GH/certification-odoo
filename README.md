# Odoo 19 Certification Trainer

Monorepo : frontend Next.js + backend FastAPI + Supabase.

## Structure

```
├── frontend/          # Next.js (UI, auth, exam)
├── backend/           # FastAPI (API historique)
└── supabase/          # schema.sql
```

## Prérequis

- Node.js 20+
- Python 3.11+
- Compte [Supabase](https://supabase.com) (URL + clés API)

---

## 1. Supabase (une seule fois)

1. Créer un projet Supabase
2. **SQL Editor** → coller et exécuter `supabase/schema.sql`
3. **Authentication** → activer Email / mot de passe
4. Noter :
   - `Project URL`
   - `anon` key → frontend
   - `service_role` key → backend uniquement

---

## 2. Backend (FastAPI)

Depuis la **racine du projet** :

```bash
# Environnement Python (recommandé)
cd backend
python3 -m venv .venv
source .venv/bin/activate          # Windows: .venv\Scripts\activate

# Dépendances
pip install -r requirements.txt

# Configuration
cp .env.example .env
# Éditer backend/.env avec SUPABASE_URL et SUPABASE_SERVICE_ROLE_KEY
```

### Lancer le backend

**Option A — depuis la racine du projet** (recommandé) :

```bash
# À la racine du repo (dossier Certification Odoo)
source backend/.venv/bin/activate   # si venv créé
npm run dev:backend
```

**Option B — depuis le dossier backend** :

```bash
cd backend
source .venv/bin/activate
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

Vérification : [http://localhost:8000/health](http://localhost:8000/health) → `{"status":"ok"}`

API historique (avec token JWT Supabase) :
- `GET /api/history`
- `POST /api/history`
- `DELETE /api/history`

---

## 3. Frontend (Next.js)

Dans un **second terminal**, depuis la racine :

```bash
cp frontend/.env.local.example frontend/.env.local
# Remplir NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_API_URL=http://localhost:8000

npm install --prefix frontend
npm run dev
```

Application : [http://localhost:3000](http://localhost:3000)

---

## Récap — deux terminaux

| Terminal | Commande | URL |
|----------|----------|-----|
| 1 — Backend | `npm run dev:backend` | http://localhost:8000 |
| 2 — Frontend | `npm run dev` | http://localhost:3000 |

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

`frontend/.env.local` doit contenir `NEXT_PUBLIC_SUPABASE_URL` et `NEXT_PUBLIC_SUPABASE_ANON_KEY` — sans cela, la connexion est impossible.
