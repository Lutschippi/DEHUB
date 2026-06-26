# DEHUB — Data Engineering Hub

The ultimate data engineering resource hub — command center for data engineers worldwide, from beginners breaking in to senior architects designing petabyte-scale systems. Inspired by the DataExpert.io Data Engineer Handbook (42K+ GitHub stars).

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm --filter @workspace/dehub-web run dev` — run the website (port 19337, previewed at `/`)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string, `GITHUB_TOKEN` — GitHub PAT (classic)

## GitHub Repository

- **Repo**: https://github.com/Lutschippi/DEHUB
- **Website**: http://dehub.engineer/
- Push to GitHub: `git push origin main`

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite, Framer Motion, Tailwind CSS, shadcn/ui
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/dehub-web/src/` — website source (React/Vite)
  - `components/Terminal.tsx` — live terminal animation (phase state machine)
  - `components/Ecosystem.tsx` — data engineering tools grid
  - `components/Roadmap.tsx` — learning paths
  - `components/Resources.tsx` — books/courses/communities tabs
  - `components/StatsBar.tsx` — animated counters
  - `components/Projects.tsx` — open-source project showcase
- `docs/` — comprehensive markdown docs (roadmap, tools, projects, communities, newsletters, interviews)
- `.github/` — GitHub Actions, issue templates, PR template, FUNDING.yml
- `lib/api-spec/openapi.yaml` — OpenAPI spec (source of truth)
- `lib/db/src/schema/` — Drizzle ORM schema

## Architecture decisions

- Terminal animation uses a phase-based state machine (`typing → pausing → showing → advancing`) with a single `timerRef` to prevent React effect cleanup from racing the output timeout.
- Dark-mode-first design with CSS custom properties (HSL values) for full theme consistency.
- All colors derived from product domain (electric green `#00ff88`, cyan `#00d4ff`, space black `#0a0a0a`).

## Product

DEHUB is the central hub for the global data engineering community:
- Live animated terminal in hero section
- Animated stats bar (42K+ GitHub Stars, 10K+ Data Engineers, 500+ Resources, 50+ Tools)
- Data Engineering Ecosystem grid (orchestration, lakehouse, processing, transformation, quality)
- Learning Roadmap (Beginner → Intermediate → Advanced → Expert)
- Resource library (books, courses, communities, podcasts)
- Open-source project showcase
- Community CTA and professional footer

## User preferences

- GitHub username: Lutschippi
- Website domain: http://dehub.engineer/

## Gotchas

- Terminal component: the phase state machine must use `timerRef` (not inline return cleanup) to avoid React cleaning up the next transition's timeout on re-render.
- Do not read generated files after codegen (large, fills context).
- Verify artifacts with `pnpm --filter @workspace/<slug> run typecheck`, not `build`.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
