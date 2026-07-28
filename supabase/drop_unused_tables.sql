-- OPTIONAL — only if this Supabase project is used SOLELY by Certification Odoo.
-- These tables are NOT referenced by this app (only exam_sessions + account_approvals are).
-- If you also use Virtuology timesheets / partners / projects on the SAME project, DO NOT RUN THIS.

begin;

drop table if exists public.timesheet_entries_archive cascade;
drop table if exists public.timesheet_entries cascade;
drop table if exists public.timesheet_interventions cascade;
drop table if exists public.subtasks cascade;
drop table if exists public.tasks cascade;
drop table if exists public.projects cascade;
drop table if exists public.partners cascade;
drop table if exists public.marketplaces cascade;
drop table if exists public.entities cascade;
drop table if exists public.user_logs cascade;
drop table if exists public.users cascade;

-- KEEP:
--   public.exam_sessions
--   public.account_approvals

commit;
