# Odoo 19 Certification Trainer

Application Next.js + Supabase pour s'entraîner à la [certification fonctionnelle Odoo 19](https://www.odoo.com/fr_FR/slides/odoo-19-functional-certification-502).  
Frontend, API et déploiement Vercel dans un seul projet — pas de serveur backend séparé.

Simulateur **indépendant** (non affilié à Odoo SA) : examens blancs, quiz par module, readiness, historique cloud.

## Structure

```
├── frontend/                    # Next.js (UI, auth, examen, API routes)
│   ├── src/app/api/             # API serverless (historique, access/approvals, health)
│   └── src/lib/server/          # Logique serveur (auth JWT, accès, Supabase admin)
├── supabase/                    # Schémas SQL (exam_sessions, account_approvals, …)
└── package.json                 # Scripts racine (dev, build, lint)
```

## Fonctionnalités (état actuel)

- **Auth** e-mail / mot de passe (Supabase) + vérification e-mail obligatoire
- **Approbation admin** des nouvelles inscriptions (`account_approvals`) — les comptes déjà existants restent utilisables
- **Mode démo** lecture seule (pas de quiz / examen / historique ; banque de questions non chargée sur les pages browse)
- Examens blancs (full, sample, module, review), readiness, plan d'étude, historique cloud
- Liens vers le parcours **officiel** Odoo Learn (sample test, certif payante, tutoriels)

### Liens officiels Odoo (aussi dans l'app, page d'accueil)

| Objectif | Lien | Notes |
|----------|------|--------|
| Sample test | [Odoo Certification Sample Test](https://www.odoo.com/fr_FR/slides/odoo-certification-sample-test-50) | Tentatives illimitées |
| Certification Odoo 19 | [Odoo 19 Functional Certification](https://www.odoo.com/fr_FR/slides/odoo-19-functional-certification-502) | US$ 150,00 · 2 tentatives (indicatif) |
| Cours eLearning | [Odoo Tutorials](https://www.odoo.com/slides/tag/odoo-tutorials-9?prevent_redirect=True) | Catalogue Odoo Learn |

## Prérequis

- Node.js 20+
- Compte [Supabase](https://supabase.com) (URL + clés API)

---

## 1. Supabase (une seule fois)

Dans le **SQL Editor**, exécuter dans l'ordre :

1. `supabase/schema.sql` — table `exam_sessions` + RLS  
2. Si base déjà créée auparavant : `supabase/migrate_production.sql` (et éventuellement `migrate_replay_columns.sql`, `migrate_sample_mode.sql`)  
3. `supabase/account_approvals.sql` — approbation des nouveaux comptes + backfill des users existants en `approved`

Optionnel : `supabase/drop_unused_tables.sql` **uniquement** si ce projet Supabase n'héberge pas d'autres apps (timesheets, partners, etc.).

Puis :

- **Authentication** → Email / mot de passe activé  
- Noter `Project URL`, clé `anon`, clé `service_role`

---

## 2. Configuration locale

```bash
cp frontend/.env.local.example frontend/.env.local
```

| Variable | Usage |
|----------|-------|
| `NEXT_PUBLIC_SUPABASE_URL` | Client Supabase (navigateur) |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Client Supabase (navigateur) |
| `SUPABASE_SERVICE_ROLE_KEY` | API routes serveur — **ne jamais exposer au navigateur** |
| `NEXT_PUBLIC_SITE_URL` | (optionnel) URL prod pour redirects e-mail auth |
| `NEXT_PUBLIC_ADMIN_EMAILS` | E-mails admins (approbation) — **obligatoire en prod**, ne jamais committer les vraies adresses |

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
| http://localhost:3000/auth | Connexion / inscription / démo |
| http://localhost:3000/admin/approvals | File d'attente d'approbation (admins) |
| http://localhost:3000/api/health | Health check → `{"status":"ok"}` |

### API principales

Header `Authorization: Bearer <token>` :

- `GET/POST/DELETE /api/history` — historique (compte **approuvé** requis)
- `GET /api/access/me` — statut d'approbation (e-mail vérifié)
- `GET/POST /api/access/admin` — liste / décision (admins uniquement)

---

## 4. Déploiement Vercel

1. Importer le repo GitHub  
2. **Root Directory** → `frontend`  
3. Ajouter les variables d'environnement (mêmes noms que `.env.local`)  
4. Deploy  

Branches Git : `main` (production), `develop` (développement).

---

## Accès & sécurité

- Pages app : compte **vérifié** + **approuvé**, **ou** mode démo (lecture seule)
- Inscription ouverte → statut `pending` jusqu'à approbation par un admin (`/admin/approvals`)
- Les utilisateurs déjà présents avant `account_approvals.sql` sont backfillés en `approved`
- L'historique cloud est lié au `user_id` Supabase (`exam_sessions`)

> La banque de questions est encore livrée dans le JS pour les sessions d'examen authentifiées. Une API `/api/exam/*` serveur-only reste une évolution anti-scraping possible.

---

## Scripts

| Commande | Action |
|----------|--------|
| `npm run dev` | Serveur de développement |
| `npm run build` | Build production |
| `npm run start` | Démarrer le build |
| `npm run lint` | ESLint |
