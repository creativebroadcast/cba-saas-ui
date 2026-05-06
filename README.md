# cba-saas-ui

Shared SaaS UI substrate for the CBA portfolio (Stream Certified, StreamStudio, ClipLive). Extracted from `creativebroadcast.io`.

## Stack

- Next.js 16.2.3 (app router, src/)
- React 19.2.4
- Tailwind v4 (CSS-first `@theme`, no `tailwind.config.js`)
- TypeScript ^5
- Radix UI primitives (`@radix-ui/react-{dialog,popover,tooltip}`)
- `class-variance-authority`, `clsx`, `tailwind-merge`, `lucide-react`

Deliberately NOT using shadcn (CLI for app pattern, not shared library) or Base UI (deferred).

## Local development

```bash
npm install
npm run dev
```

Then open `http://localhost:3000/` (landing) or `http://localhost:3000/playground` (component showcase).

## v0.1.0 components (Day 1)

- `StatusBadge` (variants: `live` / `ready` / `setup` / `ended` / `info` / `neutral`) + `LiveDot`
- `StatisticsCallout` (value + label, hover lift)
- `StateTable` (generic columns API, grid-based, hover + click)

## Design tokens

`src/app/globals.css` defines the monochrome neutral palette (light + dark) using OKLCH, plus a radius scale. Consumers layer their own product accent (Stream Certified = orange, StreamStudio = blue, etc.) via raw Tailwind utilities.

## Roadmap

- Day 2: layout primitives (sidebar, top-nav, dashboard chrome, footer), card/button/input via Radix, publish v0.1.0 release.
- Day 3: Stream Certified consumes cba-saas-ui after stack bump to Next 16.2 / React 19.2 / Tailwind v4.
