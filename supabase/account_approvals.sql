-- Account approval workflow for Certification Odoo
-- Run in Supabase SQL Editor.

create table if not exists public.account_approvals (
  user_id uuid primary key references auth.users (id) on delete cascade,
  email text not null,
  status text not null default 'pending'
    check (status in ('pending', 'approved', 'rejected')),
  requested_at timestamptz not null default now(),
  decided_at timestamptz,
  decided_by uuid references auth.users (id) on delete set null,
  note text
);

create index if not exists account_approvals_status_idx
  on public.account_approvals (status, requested_at);

alter table public.account_approvals enable row level security;

-- App uses service role for reads/writes; no direct client policies needed.
drop policy if exists "Users read own approval" on public.account_approvals;
create policy "Users read own approval"
  on public.account_approvals for select
  using (auth.uid() = user_id);

-- Backfill: every existing auth user is approved (do not lock current users out).
insert into public.account_approvals (user_id, email, status, decided_at)
select
  u.id,
  coalesce(u.email, u.id::text || '@unknown.local'),
  'approved',
  now()
from auth.users u
on conflict (user_id) do nothing;

-- New signups: pending by default; admin emails auto-approved.
-- IMPORTANT: replace the placeholders below with your real admin emails BEFORE running
-- (do not commit real addresses). Keep in sync with NEXT_PUBLIC_ADMIN_EMAILS in Vercel/.env.local.
create or replace function public.handle_new_account_approval()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  admin_emails text[] := array[
    'admin1@example.com',
    'admin2@example.com'
  ];
  new_status text := 'pending';
begin
  if new.email is not null and lower(new.email) = any (admin_emails) then
    new_status := 'approved';
  end if;

  insert into public.account_approvals (
    user_id,
    email,
    status,
    decided_at,
    decided_by
  ) values (
    new.id,
    coalesce(lower(new.email), new.id::text || '@unknown.local'),
    new_status,
    case when new_status = 'approved' then now() else null end,
    case when new_status = 'approved' then new.id else null end
  )
  on conflict (user_id) do nothing;

  return new;
end;
$$;

drop trigger if exists on_auth_user_created_approval on auth.users;
create trigger on_auth_user_created_approval
  after insert on auth.users
  for each row
  execute function public.handle_new_account_approval();

-- Remove previous hard allowlist trigger if it was applied.
drop trigger if exists trg_enforce_allowed_signup_email on auth.users;
drop function if exists public.enforce_allowed_signup_email();

notify pgrst, 'reload schema';
