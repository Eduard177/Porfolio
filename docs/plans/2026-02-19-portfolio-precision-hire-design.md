# Portfolio — Precision Hire Design

**Date:** 2026-02-19  
**Goal:** Improve the portfolio to convert North American recruiters and companies into hires/contacts.

---

## Context

Eduard Pichardo's portfolio (`/src/ui/`) is a Vite + React + TypeScript single-page app with:
- Dark/light mode via CSS custom properties + `ThemeContext`
- Scroll reveal via `useScrollReveal` hook
- Sections: Hero, Impact, Overview, Projects, Stack, Experience, CallToAction, Footer
- Font: Space Grotesk (generic — to be replaced)
- Accent: teal `#4ef0d6` (overused in dev portfolios — to be replaced)
- CVs already in `/public/`: `Eduard_Pichardo_CV_EN.pdf` (EN), `Eduard Pichardo CV.pdf` (ES)

---

## Plan A — "Precision Hire" Improvements

### 1. CV Download Buttons

**Where:** Nav (right side, next to "Hire me") and Hero (alongside existing CTAs).

**Behavior:**
- Primary download: English CV (`Eduard_Pichardo_CV_EN.pdf`) — labeled "Download CV"
- Both CVs accessible (EN default, ES secondary)
- Native `<a download>` link pointing to `/Eduard_Pichardo_CV_EN.pdf`
- On mobile, CV button in Hero only (Nav already hidden)

**Files to change:** `Nav.tsx`, `Hero.tsx`

---

### 2. "Open to Work" Availability Banner

**Where:** Small strip/pill inside the Hero section — replace or augment the current "Available for new projects" eyebrow with a richer availability card.

**Content:**
- Status: Available (green dot, animated pulse)
- Timezone: UTC-4 (AST) — overlaps well with US Eastern
- Contract type: Full-time remote / Contract
- Preferred stack: TypeScript · NestJS · React

**Files to change:** `Hero.tsx`, `style.css`

---

### 3. Full Visual Redesign

The current aesthetic is functional but generic. The redesign commits to a **dark editorial / refined brutalist** direction:

**Typography:**
- Replace Space Grotesk with a pairing of:
  - Display: `Syne` (geometric, editorial, strong personality) — for headings
  - Body: `DM Mono` or `JetBrains Mono` — for labels, tags, metadata (gives a "terminal engineer" feel)
  - Body text: `DM Sans` — clean, professional, readable

**Color palette — new tokens:**
- Background: near-black `#07080a` (cooler, deeper than current)
- Accent primary: amber/gold `#f0a500` — rare in dev portfolios, stands out immediately
- Accent secondary: electric indigo `#7c6bff`
- Cards: `#0e0f12` with subtle warm border
- Text: off-white `#eceef2`

**Motion:**
- Hero name: character-by-character stagger reveal on load
- Section reveals: keep existing scroll reveal system but increase y offset + ease
- Impact numbers: count-up animation when section enters viewport
- Hover states on project cards: subtle glow border trace animation

**Layout changes:**
- Hero: add a subtle animated grid/dot background texture behind the hero
- Impact strip: add thin accent line above numbers
- Projects: add a "case study" hover overlay on project cards (quick preview of role/outcome)
- Nav: add a subtle progress bar at top showing scroll position

**Files to change:** `style.css`, `index.html` (fonts), all section components

---

## Success Criteria

1. A North American recruiter can download the English CV in one click from any section
2. Availability/timezone is visible without scrolling
3. The visual design is immediately memorable and doesn't look like a generic dev portfolio template
4. All existing content and functionality (dark mode, scroll reveal, responsive layout) is preserved
5. Performance: no new heavy dependencies; fonts from Google Fonts CDN

---

## Implementation Notes

- PDFs are in `/public/` and served statically by Vite — no backend needed
- Font swap: update `index.html` `<link>` preconnect + stylesheet, update `body` font-family in `style.css`
- Color swap: update CSS custom properties in `:root` and `[data-theme="light"]` — all components inherit via variables, no per-component color changes needed
- Count-up: implement in `Impact.tsx` using `IntersectionObserver` (already have pattern via `useScrollReveal`)
- No new npm packages required beyond potentially a tiny count-up utility (can be hand-rolled)
