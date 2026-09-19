<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# mst-ghi portfolio

Personal portfolio for Mostafa Gholami, deployed as a static site to GitHub Pages: https://mst-ghi.github.io

## Stack

- Next.js 16 App Router with `output: 'export'`
- React 19, TypeScript, Biome
- Custom CSS in `src/styles/globals.css` (Mantine is a wrapper only)
- Static assets in `public/`

There is no server runtime. Do not add middleware, SSR-only APIs, or next-intl request locale detection.

## i18n (cookie, en / fa)

Locale is stored in a `lang` cookie (`en` | `fa`), default `en`.

- Boot script in `src/i18n/boot-script.ts` runs before paint and sets `lang`, `dir`, and `data-lang` on `<html>`
- `LanguageProvider` + `useI18n()` read/write the same cookie
- Dictionaries: `src/i18n/locales/en.ts` and `src/i18n/locales/fa.ts` (FA must match the `Dictionary` type)
- Persian UI uses Vazirmatn (`--font-fa`) and RTL (`dir="rtl"`)
- Language switcher lives in the navbar; keep it visible on mobile
- In Farsi, write Golang as **گولنگ** (not گلنگ)

Copy lives in the dictionaries. Structural data (URLs, stacks, company keys) stays in `src/data/*`. Look up translated experience / projects / posts by the English company or project name, or post `id`.

## Content facts

Keep these in sync across `src/data`, both locale files, `src/utils/jsonld.ts`, and the PDFs in `public/`:

- Based in **Isfahan, Iran**
- Latest role: **AllinGo**, Aug 2025 — Aug 2026 (not Present)
- CVs: `/Mostafa-Gholami-CV-EN.pdf` and `/Mostafa-Gholami-CV-FA.pdf`
- Resume download buttons belong in hero and contact only — not the header

## Layout map

- `src/app/page.tsx` — home sections
- `src/app/posts/page.tsx` — posts list (same data as Writing)
- `src/components/sections/` — Hero, About, Skills, Experience, Projects, OpenSource, Writing, Contact
- `src/components/shell/Navbar.tsx` — nav, theme toggle, language switch
- `src/components/common/ResumeLinks.tsx` — EN/FA CV downloads

## Commands

```bash
pnpm dev
pnpm build
pnpm format
```

Deploy is GitHub Actions on push to `main` (`.github/workflows/nextjs.yml`).
