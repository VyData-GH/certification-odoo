-- Allow sample-test exam mode in exam_sessions (run once on existing databases)
alter table public.exam_sessions drop constraint if exists exam_sessions_mode_check;

alter table public.exam_sessions
  add constraint exam_sessions_mode_check
  check (mode in ('full', 'quick', 'module', 'review', 'sample'));
