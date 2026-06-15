-- Idempotent migration: replay / weak-area review data
-- Safe to re-run; kept in sync with supabase/schema.sql

alter table public.exam_sessions
  add column if not exists session_meta jsonb not null default '{}'::jsonb;

alter table public.exam_sessions
  add column if not exists answers jsonb not null default '[]'::jsonb;

drop policy if exists "Users update own exam sessions" on public.exam_sessions;
create policy "Users update own exam sessions"
  on public.exam_sessions for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

notify pgrst, 'reload schema';
