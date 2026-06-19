-- Run once on an EXISTING Supabase project to match the latest app (idempotent).
-- New projects: schema.sql alone is enough.

-- Replay columns (weak-area review + retry)
alter table public.exam_sessions
  add column if not exists session_meta jsonb not null default '{}'::jsonb;

alter table public.exam_sessions
  add column if not exists answers jsonb not null default '[]'::jsonb;

-- Sample test mode
alter table public.exam_sessions drop constraint if exists exam_sessions_mode_check;

alter table public.exam_sessions
  add constraint exam_sessions_mode_check
  check (mode in ('full', 'quick', 'module', 'review', 'sample'));

-- RLS policies (select / insert / update / delete own rows)
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

-- Quick sanity check (should return one row with required columns)
select column_name, data_type
from information_schema.columns
where table_schema = 'public'
  and table_name = 'exam_sessions'
  and column_name in ('session_meta', 'answers', 'mode')
order by column_name;
