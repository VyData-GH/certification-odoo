-- Run in Supabase SQL Editor (Dashboard → SQL)
-- Exam history per authenticated user

create table if not exists public.exam_sessions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  session_date timestamptz not null default now(),
  mode text not null check (mode in ('full', 'quick', 'module', 'review')),
  total_questions int not null,
  correct int not null,
  wrong int not null,
  unanswered int not null,
  score numeric(8, 2) not null,
  percentage numeric(5, 2) not null,
  passed boolean not null,
  duration_used_seconds int not null,
  module_breakdown jsonb not null default '{}'::jsonb,
  session_meta jsonb not null default '{}'::jsonb,
  answers jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now()
);

-- Idempotent upgrade for databases created before replay columns existed
alter table public.exam_sessions
  add column if not exists session_meta jsonb not null default '{}'::jsonb;

alter table public.exam_sessions
  add column if not exists answers jsonb not null default '[]'::jsonb;

create index if not exists exam_sessions_user_id_idx on public.exam_sessions (user_id);
create index if not exists exam_sessions_session_date_idx on public.exam_sessions (session_date desc);

alter table public.exam_sessions enable row level security;

drop policy if exists "Users read own exam sessions" on public.exam_sessions;
create policy "Users read own exam sessions"
  on public.exam_sessions for select
  using (auth.uid() = user_id);

drop policy if exists "Users insert own exam sessions" on public.exam_sessions;
create policy "Users insert own exam sessions"
  on public.exam_sessions for insert
  with check (auth.uid() = user_id);

drop policy if exists "Users update own exam sessions" on public.exam_sessions;
create policy "Users update own exam sessions"
  on public.exam_sessions for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

drop policy if exists "Users delete own exam sessions" on public.exam_sessions;
create policy "Users delete own exam sessions"
  on public.exam_sessions for delete
  using (auth.uid() = user_id);

notify pgrst, 'reload schema';
