# CareTrail — Progress

Updated: 10 Oct 2026

## Current phase

**Phase 1 — Setup & deploy skeleton** — code finished, waiting for the human steps below.

Checkpoint: live Vercel URL shows the landing page. **Not reached yet.**

## Done

- Repo cloned and connected to `github.com/vishnu-1709/caretrail` (branch `main`)
- `docs/MASTER_PROMPT.md` and `CLAUDE.md` added
- Vite + React 18 + TypeScript + Tailwind + React Router skeleton, all versions pinned
- Design tokens from Section 9 in `tailwind.config.js` (light theme only)
- Landing page (`/`), sign-in page (`/login`) and a "page not found" page
- `npm run typecheck`, `npm run lint`, `npm test`, `npm run build` all pass
- `vercel.json` (all routes go to `index.html`, `Referrer-Policy: no-referrer`)
- GitHub Actions workflow `.github/workflows/ci.yml` (typecheck, lint, test, build)
- Human instructions written in `docs/MANUAL_STEPS.md`

## Notes

- The three demo buttons and "Sign in with Google" are visible but only show a "not switched on yet" message. They are connected in Phase 3. See `docs/QUESTIONS.md`.
- TypeScript is pinned to 5.9.3 (not 7.x) because the lint tooling does not support newer versions yet.
- Libraries from the fixed stack that are not needed yet (TanStack Query, recharts, zod, html-to-image, supabase-js) are added in the phase that first uses them.

## Next

- Human: do Steps A–E in `docs/MANUAL_STEPS.md` (Supabase project, Vercel project, env vars)
- Then confirm the Phase 1 checkpoint and start **Phase 2 — Database & security**

## Manual steps for the human

| Phase | Step | Status |
|---|---|---|
| 1 | A — Create the Supabase project | To do |
| 1 | B — Create the Vercel project from the GitHub repo | To do |
| 1 | C — Add `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` in Vercel, then deploy | To do |
| 1 | D — Create `.env.local` on your computer | To do |
| 1 | E — Send Claude the Vercel web address | To do |
