# V11 Frontier Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship V11 Frontier — a production-ready DBiz homepage at `/v11` that combines V5 Blueprint aesthetic with V4 Swiss content, a new horizontal AI Transformation Framework, cycling capabilities with pill filters, a scroll-snap case-study strip, and two warm-beige palette breaks.

**Architecture:** Rewrite the existing `src/app/v11/` scaffolding (ported from a Lovable/Vite "dbiz-glow" app) to use the Blueprint vocabulary (`bp-*` classes, dotted navy paper, orange hairlines, angle-bracket corners, mono coordinate markers). Keep the component skeleton and the `GeometricIcon` Lovable-exported SVG library; replace everything else. Two new major components: `AiFrameworkDiagram` (horizontal 4-layer exploded SVG with hover-to-focus state) and `CapabilitiesSection` (tab + pill-filter + auto-advancing spotlight). Two new beige-surface sections. One new `BlueprintGrid` overlay with per-card hover cell lighting.

**Tech Stack:** Next.js 16 App Router, React 19, Tailwind 4 (via `@import 'tailwindcss'`), TypeScript, CSS custom properties, native SVG. No new npm deps.

**Spec:** `docs/superpowers/specs/2026-04-15-v11-blueprint-design.md` — authoritative reference for decisions, content, and section details. Where this plan is terse, the spec is the source of truth.

**Dev server:** Already running on `http://localhost:5555/v11` (project policy: port 5555). Verify in browser after each task.

**Deadline:** Thursday evening (internal review), Friday (leadership UAT).

---

## Pre-flight

Before starting any task, confirm:

- Current branch is `main` (or agreed feature branch). The V11 scaffolding is currently untracked on `main`.
- Dev server running at `http://localhost:5555/v11`.
- `pnpm lint` and `pnpm tsc --noEmit` both pass on current state.

Run:

```bash
cd /Users/rahul/DBiz/landing
git status
pnpm lint
pnpm tsc --noEmit
open http://localhost:5555/v11
```

Expected: `git status` shows `public/v11/` and `src/app/v11/` as untracked (plus the committed spec and the new plan). Lint and typecheck both pass. Browser opens to the current glow-style v11.

---

## File inventory

**Create (new):**
- `src/app/v11/_components/BlueprintGrid.tsx`
- `src/app/v11/_components/AiFrameworkSection.tsx`
- `src/app/v11/_components/AiFrameworkDiagram.tsx`
- `src/app/v11/_components/CapabilitiesSection.tsx`
- `src/app/v11/_components/ProvenSection.tsx`
- `src/app/v11/_components/DuotoneIllustration.tsx`
- `src/app/v11/_content/stats.ts`
- `src/app/v11/_content/capabilities.ts`
- `src/app/v11/_content/cases.ts`
- `src/app/v11/_content/testimonials.ts`
- `src/app/v11/_content/frameworkLayers.ts`

**Rewrite (existing):**
- `src/app/v11/theme.css`
- `src/app/v11/page.tsx`
- `src/app/v11/_components/Navbar.tsx`
- `src/app/v11/_components/HeroSection.tsx`
- `src/app/v11/_components/TrustBar.tsx`
- `src/app/v11/_components/StatsSection.tsx`
- `src/app/v11/_components/TestimonialSection.tsx`
- `src/app/v11/_components/HowWeWork.tsx`
- `src/app/v11/_components/WhyDbiz.tsx`
- `src/app/v11/_components/CtaSection.tsx`
- `src/app/v11/_components/Footer.tsx`

**Delete:**
- `src/app/v11/_components/FrontierSection.tsx` (replaced by `AiFrameworkSection`)
- `src/app/v11/_components/ExpertiseSection.tsx` (folded into `CapabilitiesSection`)

**Edit outside v11:**
- `src/lib/versions.ts`

**Keep as-is:**
- `src/app/v11/layout.tsx`
- `src/app/v11/_components/GeometricIcon.tsx` (the Lovable SVG library — internals unchanged, only classes may be renamed where they reference `v11-*` tokens)

---

## Task sequence

**Phase 1 — Foundation (tokens, scope, grid, versions, content)**
- Task 1: Rewrite `theme.css` to Blueprint vocabulary
- Task 2: Register V11 in `versions.ts`
- Task 3: Create content data files (`_content/*.ts`)
- Task 4: Create `BlueprintGrid` overlay and wire into page

**Phase 2 — Navigation & hero**
- Task 5: Rewrite `Navbar` to blueprint
- Task 6: Rewrite `HeroSection` with inline blueprint SVG diagram

**Phase 3 — Quick wins (Trust, Stats, Footer)**
- Task 7: Rewrite `TrustBar`
- Task 8: Rewrite `StatsSection` with corrected 4 stats
- Task 9: Rewrite `Footer`

**Phase 4 — AI Transformation Framework**
- Task 10: Build `AiFrameworkDiagram` (horizontal 4-layer SVG with hover-to-focus)
- Task 11: Build `AiFrameworkSection` wrapper and delete old `FrontierSection`

**Phase 5 — Capabilities**
- Task 12: Build `CapabilitiesSection` (tabs + pills + spotlight cycle), delete old `ExpertiseSection`

**Phase 6 — Proven carousel**
- Task 13: Build `ProvenSection` (scroll-snap strip with pill filter)

**Phase 7 — Cadence & testimonial**
- Task 14: Rewrite `HowWeWork` (horizontal 5/15/50d timeline)
- Task 15: Rewrite `TestimonialSection` (beige surface, carousel)

**Phase 8 — Beige "Why" section**
- Task 16: Build `DuotoneIllustration` library (4 illos)
- Task 17: Rewrite `WhyDbiz` (beige surface, 4-card grid)

**Phase 9 — Close**
- Task 18: Rewrite `CtaSection`
- Task 19: Update `page.tsx` composition (final section order) and remove dead imports

**Phase 10 — Polish**
- Task 20: Responsive + reduced-motion + lint/typecheck/manual verification pass

Each task is a single commit. Commits roll forward — the page may look unfinished mid-plan (e.g., hero styled but CTA still glow) but should never be broken.

---

## Phase 1 — Foundation

### Task 1: Rewrite `theme.css` to Blueprint vocabulary

**Why:** The current v11 theme.css uses `v11-*` HSL tokens and glow styling that violates BRAND.md. Replacing with Blueprint vocabulary gives every subsequent component the utility classes it needs.

**Files:**
- Modify: `src/app/v11/theme.css` (full replacement of current 211 lines)

**Reference:** `src/app/styleguide/blueprint/theme.css` is the source to port. The full file is 1026 lines — copy only what v11 actually uses. V11 does **not** need styleguide-specific classes like `.bp-swatch-grid`, `.bp-type-row`, `.bp-lab`, `.bp-motif-grid`, `.bp-illo`, `.bp-icon-grid`, `.bp-code`, `.bp-surface-stack`, `.bp-back`.

- [ ] **Step 1: Replace `theme.css` with Blueprint tokens and scope**

Overwrite `src/app/v11/theme.css` with:

```css
/* ==========================================================================
   V11 — Frontier
   V5 Blueprint aesthetic · V4 Swiss content · dotted navy paper,
   orange hairlines, angle-bracket corners, mono coordinate markers.
   ========================================================================== */

@import 'tailwindcss';

.v11-scope {
  /* Variant tokens — every one chains to a brand token. */
  --bp-paper: var(--brand-navy-deep);
  --bp-paper-2: #0a1530;
  --bp-ink: #ffffff;
  --bp-ink-2: rgba(255, 255, 255, 0.62);
  --bp-ink-3: rgba(255, 255, 255, 0.38);
  --bp-ink-4: rgba(255, 255, 255, 0.2);
  --bp-accent: var(--brand-orange);
  --bp-accent-soft: rgba(232, 106, 42, 0.6);
  --bp-accent-faint: rgba(232, 106, 42, 0.22);
  --bp-accent-bg: rgba(232, 106, 42, 0.06);
  --bp-hair: rgba(255, 255, 255, 0.1);
  --bp-hair-strong: rgba(255, 255, 255, 0.2);
  --bp-orange-hair: rgba(232, 106, 42, 0.55);
  --bp-orange-hair-soft: rgba(232, 106, 42, 0.28);

  /* SVG ink tokens (pre-blended against navy-deep paper) */
  --bp-ink-frame: #454b59;
  --bp-ink-measure: #393f4e;
  --bp-ink-hair: #834126;
  --bp-ink-corner: #8e4627;
  --bp-ink-crosshair: #4b2a24;

  /* Motion + geometry */
  --v11-ease: cubic-bezier(0.4, 0, 0.2, 1);
  --v11-dur-fast: 300ms;
  --v11-dur-slow: 800ms;
  --v11-grid-pitch: 24px;

  /* Light-section duotone accents (local derivations, per spec) */
  --v11-duotone-orange: #f97316;
  --v11-duotone-blue: #3b82f6;

  background: var(--bp-paper);
  color: var(--bp-ink);
  font-family: var(--font-sans);
  min-height: 100dvh;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
  position: relative;
  z-index: 0;

  background-image:
    radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.06) 1px, transparent 0);
  background-size: 24px 24px;
  background-position: 24px 24px;
}

.v11-scope *,
.v11-scope *::before,
.v11-scope *::after {
  box-sizing: border-box;
}

/* BEIGE variant — wrap section with data-surface='beige' to flip ink. */
.v11-scope [data-surface='beige'] {
  --bp-paper: var(--brand-bg-warm);
  --bp-ink: #1d1b17;
  --bp-ink-2: rgba(29, 27, 23, 0.72);
  --bp-ink-3: rgba(29, 27, 23, 0.48);
  --bp-ink-4: rgba(29, 27, 23, 0.22);
  --bp-hair: rgba(29, 27, 23, 0.08);
  --bp-hair-strong: rgba(29, 27, 23, 0.16);
  background: var(--bp-paper);
  color: var(--bp-ink);
}

/* container — vertical grid rails */
.v11-scope .bp-container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 48px;
  position: relative;
  border-left: 1px solid var(--bp-hair);
  border-right: 1px solid var(--bp-hair);
}
.v11-scope .bp-container::before,
.v11-scope .bp-container::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 1px;
  background: var(--bp-hair);
  pointer-events: none;
}
.v11-scope .bp-container::before { left: 33.333%; }
.v11-scope .bp-container::after { left: 66.666%; }

@media (max-width: 900px) {
  .v11-scope .bp-container::before,
  .v11-scope .bp-container::after { display: none; }
}
@media (max-width: 768px) {
  .v11-scope .bp-container { padding: 0 24px; }
}

/* mono utilities */
.v11-scope .bp-mono {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--bp-ink-3);
}
.v11-scope .bp-mono-accent {
  font-family: var(--font-mono);
  font-size: 0.66rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--bp-accent);
}
.v11-scope .bp-coord {
  font-family: var(--font-mono);
  font-size: 0.58rem;
  letter-spacing: 0.14em;
  color: var(--bp-accent);
  text-transform: uppercase;
}

/* angle-bracket corner frame */
.v11-scope .bp-frame {
  position: relative;
  border: 1px solid var(--bp-hair-strong);
  background: rgba(255, 255, 255, 0.015);
  transition: border-color var(--v11-dur-fast) var(--v11-ease),
              transform var(--v11-dur-fast) var(--v11-ease);
}
.v11-scope .bp-frame::before,
.v11-scope .bp-frame::after {
  content: '';
  position: absolute;
  width: 14px;
  height: 14px;
  border: 1px solid var(--bp-accent);
  pointer-events: none;
  transition: border-color var(--v11-dur-fast) var(--v11-ease);
}
.v11-scope .bp-frame::before { top: -1px; left: -1px; border-right: none; border-bottom: none; }
.v11-scope .bp-frame::after { bottom: -1px; right: -1px; border-left: none; border-top: none; }

/* per-card hover cell-light backdrop.
   We attach a dot-grid backdrop via an extra `.bp-frame-cell` modifier
   that provides two layered pseudo-elements. Use on interactive cards.
*/
.v11-scope .bp-frame-cell {
  isolation: isolate;
}
.v11-scope .bp-frame-cell > .cell-bg {
  position: absolute;
  inset: -16px;
  opacity: 0;
  pointer-events: none;
  z-index: -1;
  background-image:
    radial-gradient(circle at 1px 1px, var(--bp-ink-3) 1px, transparent 0);
  background-size: 24px 24px;
  transition: opacity var(--v11-dur-fast) var(--v11-ease);
}
.v11-scope .bp-frame-cell > .cell-outline {
  position: absolute;
  inset: -16px;
  opacity: 0;
  pointer-events: none;
  z-index: -1;
  border: 1px dashed var(--bp-orange-hair);
  transition: opacity var(--v11-dur-fast) var(--v11-ease);
}
.v11-scope .bp-frame-cell:hover > .cell-bg,
.v11-scope .bp-frame-cell:focus-within > .cell-bg,
.v11-scope .bp-frame-cell.is-spotlight > .cell-bg { opacity: 1; }
.v11-scope .bp-frame-cell:hover > .cell-outline,
.v11-scope .bp-frame-cell:focus-within > .cell-outline,
.v11-scope .bp-frame-cell.is-spotlight > .cell-outline { opacity: 1; }
.v11-scope .bp-frame-cell:hover,
.v11-scope .bp-frame-cell:focus-within,
.v11-scope .bp-frame-cell.is-spotlight {
  border-color: var(--bp-orange-hair);
  transform: translateY(-1px);
}

/* header / title */
.v11-scope .bp-header {
  padding: 64px 0 48px;
  border-bottom: 1px solid var(--bp-hair);
  position: relative;
}
.v11-scope .bp-header::after {
  content: '';
  position: absolute;
  left: 48px;
  right: 48px;
  bottom: -1px;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--bp-orange-hair) 20%, var(--bp-orange-hair) 80%, transparent);
}
.v11-scope .bp-title {
  font-size: clamp(2.4rem, 5vw, 4.4rem);
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.04em;
  margin: 28px 0 24px;
}
.v11-scope .bp-title em {
  font-family: var(--font-sans);
  font-style: normal;
  font-weight: 300;
  letter-spacing: -0.04em;
  color: var(--bp-accent);
}
.v11-scope .bp-lede {
  font-size: 1.02rem;
  line-height: 1.7;
  color: var(--bp-ink-2);
  max-width: 640px;
}

/* eyebrow */
.v11-scope .bp-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-mono);
  font-size: 0.64rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--bp-accent);
  padding: 6px 14px;
  border: 1px solid var(--bp-orange-hair);
  background: var(--bp-accent-bg);
}
.v11-scope .bp-eyebrow .bar { width: 14px; height: 1px; background: var(--bp-accent); }

/* section */
.v11-scope .bp-section {
  padding: clamp(72px, 9vw, 120px) 0;
  border-bottom: 1px solid var(--bp-hair);
  position: relative;
}
.v11-scope .bp-section h2 {
  font-size: clamp(1.8rem, 3.4vw, 2.8rem);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.035em;
  margin-bottom: 20px;
}
.v11-scope .bp-section h2 em {
  font-family: var(--font-sans);
  font-style: normal;
  font-weight: 300;
  letter-spacing: -0.04em;
  color: var(--bp-accent);
}
.v11-scope .bp-section p.lead {
  font-size: 1rem;
  line-height: 1.65;
  color: var(--bp-ink-2);
  max-width: 620px;
}
.v11-scope .bp-kicker {
  display: flex;
  align-items: center;
  gap: 14px;
  font-family: var(--font-mono);
  font-size: 0.66rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--bp-accent);
  margin-bottom: 22px;
}
.v11-scope .bp-kicker::before {
  content: '';
  width: 28px;
  height: 1px;
  background: var(--bp-accent);
}
.v11-scope .bp-section-head {
  margin-bottom: 56px;
  max-width: 720px;
}

/* marker */
.v11-scope .bp-marker {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-mono);
  font-size: 0.58rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--bp-accent);
  padding: 3px 8px;
  border: 1px solid var(--bp-orange-hair);
  background: var(--bp-accent-bg);
}

/* meta bar */
.v11-scope .bp-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: var(--font-mono);
  font-size: 0.58rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--bp-ink-3);
  padding: 10px 16px;
  border-bottom: 1px dashed var(--bp-hair);
}
.v11-scope .bp-meta span.k { color: var(--bp-accent); }

/* hatch divider */
.v11-scope .bp-hatch {
  height: 14px;
  background-image: repeating-linear-gradient(
    -45deg,
    var(--bp-hair) 0 1px,
    transparent 1px 8px
  );
  border-top: 1px solid var(--bp-hair);
  border-bottom: 1px solid var(--bp-hair);
}

/* buttons */
.v11-scope .bp-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: var(--bp-accent);
  color: var(--brand-navy-deep);
  padding: 13px 22px;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  border: 1px solid var(--bp-accent);
  cursor: pointer;
  position: relative;
  transition: background 0.25s ease;
}
.v11-scope .bp-btn::before,
.v11-scope .bp-btn::after {
  content: '';
  position: absolute;
  width: 8px;
  height: 8px;
  border: 1px solid var(--brand-navy-deep);
}
.v11-scope .bp-btn::before { top: -1px; left: -1px; border-right: none; border-bottom: none; }
.v11-scope .bp-btn::after { bottom: -1px; right: -1px; border-left: none; border-top: none; }
.v11-scope .bp-btn:hover { background: var(--brand-orange-hover); }

.v11-scope .bp-btn-ghost {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: transparent;
  color: var(--bp-ink);
  padding: 13px 22px;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  border: 1px solid var(--bp-orange-hair);
  cursor: pointer;
  position: relative;
  transition: all 0.25s ease;
}
.v11-scope .bp-btn-ghost::before,
.v11-scope .bp-btn-ghost::after {
  content: '';
  position: absolute;
  width: 6px;
  height: 6px;
  border: 1px solid var(--bp-accent);
}
.v11-scope .bp-btn-ghost::before { top: -1px; left: -1px; border-right: none; border-bottom: none; }
.v11-scope .bp-btn-ghost::after { bottom: -1px; right: -1px; border-left: none; border-top: none; }
.v11-scope .bp-btn-ghost:hover { background: var(--bp-accent); border-color: var(--bp-accent); color: var(--brand-navy-deep); }

.v11-scope .bp-btn-text {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--bp-ink-2);
  text-decoration: none;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border-bottom: 1px solid var(--bp-hair-strong);
  padding-bottom: 4px;
  background: transparent;
  border-left: none;
  border-right: none;
  border-top: none;
  cursor: pointer;
  transition: color 0.2s ease;
}
.v11-scope .bp-btn-text:hover { color: var(--bp-accent); border-color: var(--bp-accent); }

/* badge / tag */
.v11-scope .bp-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 7px 14px;
  border: 1px solid var(--bp-orange-hair);
  background: var(--bp-accent-bg);
  font-family: var(--font-mono);
  font-size: 0.64rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--bp-accent);
}
.v11-scope .bp-tag {
  font-family: var(--font-mono);
  font-size: 0.62rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 7px 14px;
  border: 1px solid var(--bp-hair);
  color: var(--bp-ink-2);
  background: transparent;
  cursor: pointer;
  transition: all 0.2s ease;
}
.v11-scope .bp-tag:hover,
.v11-scope .bp-tag[data-active='true'] {
  border-color: var(--bp-orange-hair);
  color: var(--bp-accent);
  background: var(--bp-accent-bg);
}

/* card */
.v11-scope .bp-card {
  position: relative;
  border: 1px solid var(--bp-hair-strong);
  padding: 28px;
  background: rgba(255, 255, 255, 0.015);
}
.v11-scope [data-surface='beige'] .bp-card { background: rgba(29, 27, 23, 0.02); }
.v11-scope .bp-card::before,
.v11-scope .bp-card::after {
  content: '';
  position: absolute;
  width: 12px;
  height: 12px;
  border: 1px solid var(--bp-accent);
}
.v11-scope .bp-card::before { top: -1px; left: -1px; border-right: none; border-bottom: none; }
.v11-scope .bp-card::after { bottom: -1px; right: -1px; border-left: none; border-top: none; }
.v11-scope .bp-card .hd {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: var(--font-mono);
  font-size: 0.58rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--bp-ink-3);
  padding-bottom: 14px;
  margin-bottom: 20px;
  border-bottom: 1px dashed var(--bp-hair);
}
.v11-scope .bp-card .hd .k { color: var(--bp-accent); }
.v11-scope .bp-card .val {
  font-size: clamp(2rem, 3vw, 2.6rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1;
  margin-bottom: 14px;
  padding-left: 14px;
  position: relative;
}
.v11-scope .bp-card .val::before {
  content: '';
  position: absolute;
  left: 0;
  top: 10%;
  bottom: 10%;
  width: 1px;
  background: var(--bp-accent);
}
.v11-scope .bp-card .lbl {
  font-family: var(--font-mono);
  font-size: 0.64rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--bp-ink-2);
  line-height: 1.5;
}
.v11-scope .bp-card h3 {
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: -0.015em;
  margin-bottom: 10px;
  line-height: 1.25;
}
.v11-scope .bp-card p {
  font-size: 0.88rem;
  line-height: 1.65;
  color: var(--bp-ink-2);
}

/* field + input */
.v11-scope .bp-field {
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 380px;
}
.v11-scope .bp-field-label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: var(--font-mono);
  font-size: 0.6rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--bp-ink-3);
}
.v11-scope .bp-field-label .k { color: var(--bp-accent); }
.v11-scope .bp-input {
  display: block;
  width: 100%;
  max-width: 380px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--bp-hair-strong);
  color: var(--bp-ink);
  padding: 13px 16px;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  letter-spacing: 0.06em;
  outline: none;
}
.v11-scope .bp-input:focus { border-color: var(--bp-accent); }
.v11-scope .bp-input::placeholder { color: var(--bp-ink-4); text-transform: uppercase; letter-spacing: 0.12em; font-size: 0.7rem; }

/* animations */
@keyframes v11-fade-up {
  from { opacity: 0; transform: translateY(18px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes v11-fade-in { from { opacity: 0; } to { opacity: 1; } }
@keyframes v11-stroke-draw {
  from { stroke-dashoffset: var(--dash-length, 400); }
  to { stroke-dashoffset: 0; }
}
@keyframes v11-marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

.v11-scope .geo-icon svg {
  transition: filter var(--v11-dur-fast) var(--v11-ease),
              transform var(--v11-dur-fast) var(--v11-ease);
}
.v11-scope .geo-icon:hover svg {
  filter: drop-shadow(0 0 6px rgba(232, 106, 42, 0.3));
  transform: scale(1.03);
}

/* reduced-motion: disable any auto animations */
@media (prefers-reduced-motion: reduce) {
  .v11-scope *,
  .v11-scope *::before,
  .v11-scope *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
  }
}
```

- [ ] **Step 2: Verify in browser**

Navigate to `http://localhost:5555/v11`. The page will look broken (components still reference `v11-*` classes that no longer exist), but the root wrapper should render with navy-deep paper + dotted grid. Focus on confirming the background and font look right, not the components.

Expected: navy-deep background, faint white dotted grid, DM Sans body font. Everything above is acceptable.

- [ ] **Step 3: Run lint and typecheck**

```bash
pnpm lint
pnpm tsc --noEmit
```

Expected: both pass. (Lint runs against `.ts/.tsx` and won't flag CSS. Typecheck will not catch broken components either — they are style-broken but type-valid.)

- [ ] **Step 4: Commit**

```bash
git add src/app/v11/theme.css
git commit -m "$(cat <<'EOF'
V11: rewrite theme.css to Blueprint vocabulary

Replaces the Vite-port glow tokens with the bp-* token system ported
from src/app/styleguide/blueprint/theme.css. All tokens alias to
brand tokens per BRAND.md; adds [data-surface='beige'] light-surface
variant for palette-break sections; adds per-card hover cell-light
pattern (bp-frame-cell with .cell-bg and .cell-outline children).

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

### Task 2: Register V11 in `versions.ts`

**Files:**
- Modify: `src/lib/versions.ts`

- [ ] **Step 1: Add v11 entry**

Append to the `versions` array (after the v10 entry, before the closing bracket):

```ts
  {
    slug: 'v11',
    name: 'V11 — Frontier',
    tagline: 'V5 Blueprint ethos, V4 content, cycling capabilities, horizontal framework',
    status: 'draft',
  },
```

- [ ] **Step 2: Verify index page lists V11**

Navigate to `http://localhost:5555/`. Confirm a new card "V11 — Frontier" appears alongside v1–v10.

- [ ] **Step 3: Commit**

```bash
git add src/lib/versions.ts
git commit -m "$(cat <<'EOF'
Register V11 — Frontier in versions index

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

### Task 3: Create content data files

**Why:** Centralizing V4-sourced copy and the corrected stats into `_content/*.ts` lets every section component stay small and makes copy edits (which Kavya will likely request) trivial.

**Files:**
- Create: `src/app/v11/_content/stats.ts`
- Create: `src/app/v11/_content/capabilities.ts`
- Create: `src/app/v11/_content/cases.ts`
- Create: `src/app/v11/_content/testimonials.ts`
- Create: `src/app/v11/_content/frameworkLayers.ts`

- [ ] **Step 1: Create `_content/stats.ts`**

```ts
export type Stat = {
  coord: string
  value: number
  suffix: string
  label: string
}

export const stats: readonly Stat[] = [
  { coord: 'S·01', value: 50, suffix: '+', label: 'Enterprise clients' },
  { coord: 'S·02', value: 150, suffix: '+', label: 'Solutions in production' },
  { coord: 'S·03', value: 6, suffix: '', label: 'Countries' },
  { coord: 'S·04', value: 500, suffix: '+', label: 'Engineers' },
] as const
```

- [ ] **Step 2: Create `_content/capabilities.ts`**

```ts
import type { GeometricIconName } from '../_components/GeometricIcon'

export type CapabilityTab = 'industry' | 'solution' | 'technology'

export type CapabilityCard = {
  coord: string
  tab: CapabilityTab
  pill: string
  title: string
  icon: GeometricIconName
  body: string
  meta: string
}

export const pillsByTab: Record<CapabilityTab, readonly string[]> = {
  industry: ['All', 'Financial Services', 'Logistics', 'Real Estate', 'Aged Care', 'Retail', 'Public Sector', 'Banking', 'Insurance'],
  solution: ['All', 'Data Platform', 'Agentic AI', 'Delivery', 'Navigation', 'Orchestration', 'Managed'],
  technology: ['All', 'Cloud', 'Data Platforms', 'Integration', 'Business Apps', 'AI Models', 'Security'],
} as const

export const capabilities: readonly CapabilityCard[] = [
  // Industry
  { coord: 'K·01', tab: 'industry', pill: 'Financial Services', title: 'Financial Services', icon: 'strategy', body: '11 domains modernized across a global insurer, cycle times down 38%.', meta: '38% faster cycle time' },
  { coord: 'K·02', tab: 'industry', pill: 'Logistics', title: 'Logistics & Fleet', icon: 'transformation', body: '$14M saved in year one through agent-operated routing.', meta: '$14M saved · Southern Cross' },
  { coord: 'K·03', tab: 'industry', pill: 'Real Estate', title: 'Real Estate', icon: 'align', body: '40+ agents deployed across portfolio operations.', meta: '40+ agents in production' },
  { coord: 'K·04', tab: 'industry', pill: 'Aged Care', title: 'Aged Care', icon: 'managed', body: '6× throughput in clinical operations.', meta: '6× throughput' },
  { coord: 'K·05', tab: 'industry', pill: 'Retail', title: 'Retail', icon: 'validate', body: '5-day validated MVP, production in 50 days.', meta: '5 days to MVP' },
  { coord: 'K·06', tab: 'industry', pill: 'Public Sector', title: 'Public Sector', icon: 'scale', body: '42% cycle-time reduction in FY26 H1.', meta: '42% faster · FY26 H1' },
  { coord: 'K·07', tab: 'industry', pill: 'Banking', title: 'High-street Banking', icon: 'domain', body: 'Core modernization plus agent rollout on legacy platforms.', meta: 'Core + agents' },
  { coord: 'K·08', tab: 'industry', pill: 'Insurance', title: 'Insurance', icon: 'partnerships', body: 'Claims-triage automation, CSAT up 24 points.', meta: '+24 CSAT' },

  // Solution
  { coord: 'K·09', tab: 'solution', pill: 'Data Platform', title: 'Data Platform', icon: 'data', body: 'Fact-graph data fabric across every domain.', meta: 'FactWeavers™' },
  { coord: 'K·10', tab: 'solution', pill: 'Agentic AI', title: 'Agentic AI', icon: 'product', body: 'Production-grade agents, not demos.', meta: 'Agent Studio' },
  { coord: 'K·11', tab: 'solution', pill: 'Delivery', title: 'Delivery Accelerator', icon: 'expertise', body: 'Spec-driven dev on a shared design surface.', meta: 'DBiz Canvas' },
  { coord: 'K·12', tab: 'solution', pill: 'Navigation', title: 'Navigation', icon: 'timeboxed', body: 'Maturity assessment + roadmap in 5 days.', meta: 'DBiz Compass' },
  { coord: 'K·13', tab: 'solution', pill: 'Orchestration', title: 'Orchestration', icon: 'apps', body: 'Platform substrate that holds the system together.', meta: 'Nexus Platform' },
  { coord: 'K·14', tab: 'solution', pill: 'Managed', title: 'Managed Operations', icon: 'production', body: 'Ongoing evolution, not maintenance.', meta: 'Perpetual Engineering' },

  // Technology
  { coord: 'K·15', tab: 'technology', pill: 'Cloud', title: 'Cloud', icon: 'cloud', body: 'Hyperscaler-neutral. Deploys on the right cloud per workload.', meta: 'Neutral · multi-cloud' },
  { coord: 'K·16', tab: 'technology', pill: 'Data Platforms', title: 'Data Platforms', icon: 'data', body: 'Snowflake, Databricks, Microsoft Fabric, BigQuery.', meta: '4 platforms · depth' },
  { coord: 'K·17', tab: 'technology', pill: 'Integration', title: 'Integration', icon: 'partnerships', body: 'Boomi, MuleSoft, Workato, n8n.', meta: '4 stacks · production' },
  { coord: 'K·18', tab: 'technology', pill: 'Business Apps', title: 'Business Apps', icon: 'apps', body: 'Salesforce, Dynamics 365, Power Platform.', meta: '3 suites · deep' },
  { coord: 'K·19', tab: 'technology', pill: 'AI Models', title: 'AI Models', icon: 'product', body: 'Claude, GPT, Gemini, Bedrock, Azure OpenAI, Vertex.', meta: '6 families · proven' },
  { coord: 'K·20', tab: 'technology', pill: 'Security', title: 'Security & Governance', icon: 'governance', body: 'Posture + supply-chain + AI risk frameworks for agent-built software.', meta: 'DevSecOps · sovereign' },
] as const
```

**Note on icons:** The spec assumes `GeometricIcon.tsx` has enough pattern names (`strategy`, `cloud`, `data`, `apps`, `product`, `managed`, `governance`, `expertise`, `transformation`, `timeboxed`, `production`, `partnerships`, `domain`, `align`, `validate`, `scale`) to cover every card. The current `GeometricIcon.tsx` already defines these pattern names — confirm by skimming the `GeometricIconName` union at the top of that file during Task 4 wiring. If any name doesn't exist, fall back to `'strategy'`.

- [ ] **Step 3: Create `_content/cases.ts`**

```ts
import type { GeometricIconName } from '../_components/GeometricIcon'

export type Case = {
  coord: string
  industry: string
  title: string
  body: string
  metric: string
  icon: GeometricIconName
}

export const cases: readonly Case[] = [
  { coord: 'C·01', industry: 'Financial Services', title: 'Global insurer modernization', body: '11 domains rebuilt on a shared data fabric; agents live in claims and underwriting.', metric: '38% faster cycle', icon: 'strategy' },
  { coord: 'C·02', industry: 'Logistics', title: 'Southern Cross Logistics', body: 'Agent-operated routing cut annual fuel and freight cost by $14M.', metric: '$14M saved', icon: 'transformation' },
  { coord: 'C·03', industry: 'Aged Care', title: 'National aged-care operator', body: 'Clinical ops throughput multiplied six-fold; staffing stable.', metric: '6× throughput', icon: 'managed' },
  { coord: 'C·04', industry: 'Banking', title: 'FactWeavers™ rollout', body: '11 banking domains on a single data-graph platform, zero lift-and-shift.', metric: '11 domains live', icon: 'data' },
  { coord: 'C·05', industry: 'Real Estate', title: 'Portfolio operations', body: '40+ production agents orchestrated through Nexus Platform.', metric: '40+ agents · prod', icon: 'apps' },
  { coord: 'C·06', industry: 'Retail', title: 'MVP in a working week', body: 'From zero to validated MVP in 5 days; live in 50. DBiz Canvas end-to-end.', metric: '5 days · MVP', icon: 'validate' },
  { coord: 'C·07', industry: 'Public Sector', title: 'Citizen-services modernization', body: 'FY26 H1 rollout; cycle time down 42% across 3 agencies.', metric: '42% faster · FY26 H1', icon: 'scale' },
] as const
```

- [ ] **Step 4: Create `_content/testimonials.ts`**

```ts
export type Testimonial = {
  coord: string
  quote: string
  name: string
  role: string
  company: string
  placeholder?: boolean
}

export const testimonials: readonly Testimonial[] = [
  {
    coord: 'V·01',
    quote: 'DBiz didn\u2019t sell us a roadmap. They delivered one — with the system live in production while the rest of the market was still running POCs.',
    name: 'Priya Nair',
    role: 'Chief Data & AI Officer',
    company: 'Southern Cross Logistics',
  },
  {
    coord: 'V·02',
    quote: 'They didn\u2019t deliver a deck. They delivered a running agent and the org to run it.',
    name: 'CIO',
    role: 'Chief Information Officer',
    company: 'Fortune 200 Insurer',
    placeholder: true,
  },
  {
    coord: 'V·03',
    quote: 'The first consulting output we could actually run in production.',
    name: 'CTO',
    role: 'Chief Technology Officer',
    company: 'Global Reinsurer',
    placeholder: true,
  },
  {
    coord: 'V·04',
    quote: 'Five days to a plan our board could actually sign. Fifty days to the platform it pointed to.',
    name: 'CEO',
    role: 'Chief Executive',
    company: 'Regional retailer',
    placeholder: true,
  },
] as const
```

- [ ] **Step 5: Create `_content/frameworkLayers.ts`**

```ts
export type FrameworkLayer = {
  coord: string
  title: string
  theme: 'Human-led' | 'Neutral' | 'Agent-operated' | 'Data-powered'
  caption: string
  description: string
  tiles: readonly { label: string; icon: string }[]
}

export const frameworkLayers: readonly FrameworkLayer[] = [
  {
    coord: 'L·01',
    title: 'Strategy & Architecture',
    theme: 'Human-led',
    caption: 'Business strategy + enterprise architecture — the brief for everything downstream.',
    description:
      'Futures Studio frames ambition into costed bets; TechOffice Foundry translates them into enterprise architecture. Exit criteria are a board-aligned roadmap and a target reference architecture.',
    tiles: [
      { label: 'Futures Studio', icon: 'strategy' },
      { label: 'TechOffice Foundry', icon: 'align' },
      { label: 'Enterprise Architecture', icon: 'apps' },
      { label: 'Architecture-as-a-Service', icon: 'domain' },
    ],
  },
  {
    coord: 'L·02',
    title: 'Cloud Foundation',
    theme: 'Neutral',
    caption: 'Deploys on the right cloud for each workload · hyperscaler-neutral.',
    description:
      'Cloud is the floor — compute, data, identity, network, governance. We deploy to the right cloud for each workload and refuse to pick favorites on the homepage.',
    tiles: [
      { label: 'Compute', icon: 'cloud' },
      { label: 'Data', icon: 'data' },
      { label: 'Identity', icon: 'governance' },
      { label: 'Network', icon: 'partnerships' },
      { label: 'Governance', icon: 'expertise' },
    ],
  },
  {
    coord: 'L·03',
    title: 'Development',
    theme: 'Agent-operated',
    caption: 'Spec-driven dev + agent tooling — software gets built, not scoped.',
    description:
      'DBiz Canvas and Agent Studio turn specs into running software. Spec-driven development and agent tooling make the engineering cycle short enough to stay in flow.',
    tiles: [
      { label: 'DBiz Canvas', icon: 'validate' },
      { label: 'Agent Studio', icon: 'product' },
      { label: 'Spec-driven Dev', icon: 'timeboxed' },
      { label: 'Dev Tooling', icon: 'transformation' },
    ],
  },
  {
    coord: 'L·04',
    title: 'Productivity / Platforms',
    theme: 'Data-powered',
    caption: 'Automation, orchestration, decision intelligence — where the system earns its keep.',
    description:
      'The top of the stack is where work gets done. Automation and orchestration carry business flow; data insights turn it into decisions.',
    tiles: [
      { label: 'Automation', icon: 'scale' },
      { label: 'Orchestration', icon: 'managed' },
      { label: 'Data Insights', icon: 'data' },
      { label: 'Decision Intelligence', icon: 'production' },
    ],
  },
] as const
```

- [ ] **Step 6: Run typecheck**

```bash
pnpm tsc --noEmit
```

Expected: pass. `GeometricIconName` is imported from `./_components/GeometricIcon` (where it's exported as a union type). If the import fails, open `_components/GeometricIcon.tsx`, find the top-level `type GeometricIconName = …` declaration, and ensure it's exported (`export type GeometricIconName`). If not, add `export` in a follow-up minimal edit in the same commit.

- [ ] **Step 7: Commit**

```bash
git add src/app/v11/_content/
git commit -m "$(cat <<'EOF'
V11: add typed content files (stats, capabilities, cases, testimonials, framework)

V4 content normalized with corrected stats (50+/150+/6/500+),
expanded capability pool (8 industry · 6 solution · 6 tech), 7 case
studies, 4 testimonials (1 verbatim + 3 placeholder), and the 4-layer
AI transformation framework spec.

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

### Task 4: Create `BlueprintGrid` overlay

**Why:** The dotted grid backdrop is part of the Blueprint DNA. The `.v11-scope` root already paints the base grid via `background-image`; this component adds nothing for the navy section but is the seam where a **beige section's** grid gets drawn (its `data-surface='beige'` flips tokens, but the base grid image is on `.v11-scope` — beige sections inherit navy-tinted dots unless we explicitly re-paint).

Instead of a separate overlay, the **cleaner implementation** is: the `.v11-scope` base already carries the dotted pattern. For beige sections, apply a local `background-image` to `[data-surface='beige']` that uses the beige ink-3 for dots. This Task adds that CSS and verifies correctness — no new component, no fixed-position overlay.

**Files:**
- Modify: `src/app/v11/theme.css` (add two rules)
- Modify: `src/app/v11/page.tsx` (no code changes this task — just ensure file is structurally valid; full composition happens in Task 19)

- [ ] **Step 1: Add beige-surface dot-grid rule**

In `src/app/v11/theme.css`, add inside the `.v11-scope [data-surface='beige']` block (just before the closing brace):

```css
  background-image:
    radial-gradient(circle at 1px 1px, rgba(29, 27, 23, 0.1) 1px, transparent 0);
  background-size: 24px 24px;
  background-position: 24px 24px;
```

After your edit, the block should read:

```css
.v11-scope [data-surface='beige'] {
  --bp-paper: var(--brand-bg-warm);
  --bp-ink: #1d1b17;
  --bp-ink-2: rgba(29, 27, 23, 0.72);
  --bp-ink-3: rgba(29, 27, 23, 0.48);
  --bp-ink-4: rgba(29, 27, 23, 0.22);
  --bp-hair: rgba(29, 27, 23, 0.08);
  --bp-hair-strong: rgba(29, 27, 23, 0.16);
  background: var(--bp-paper);
  color: var(--bp-ink);
  background-image:
    radial-gradient(circle at 1px 1px, rgba(29, 27, 23, 0.1) 1px, transparent 0);
  background-size: 24px 24px;
  background-position: 24px 24px;
}
```

- [ ] **Step 2: Verify (post-Task 19 test — skip for now)**

The beige grid can only be visually confirmed once a section is actually marked `data-surface='beige'` (Tasks 15 and 17). For now, just confirm the file is valid CSS (no syntax error). Run:

```bash
pnpm tsc --noEmit
```

Expected: pass (CSS errors don't fail tsc, but any TS errors from other files will).

Open `http://localhost:5555/v11`. Expected: no visual change yet — we haven't wrapped any section in beige. The navy grid remains intact.

- [ ] **Step 3: Commit**

```bash
git add src/app/v11/theme.css
git commit -m "$(cat <<'EOF'
V11: paint beige-surface dot grid for palette-break sections

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Phase 2 — Navigation & hero

### Task 5: Rewrite `Navbar`

**Files:**
- Modify: `src/app/v11/_components/Navbar.tsx` (full replacement)

- [ ] **Step 1: Replace `Navbar.tsx`**

```tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Icon } from '@/components/icon'

const navLinks = [
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Framework', href: '#framework' },
  { label: 'Proven', href: '#proven' },
  { label: 'Cadence', href: '#cadence' },
] as const

export const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav
      className='sticky top-0 z-40 border-b border-[var(--bp-hair)] backdrop-blur-md'
      style={{ background: 'rgba(7, 15, 34, 0.8)' }}
    >
      <div className='bp-container'>
        <div className='flex items-center justify-between py-4'>
          <Link href='/v11' className='flex items-center gap-2'>
            <span
              className='font-bold tracking-tight text-[1.15rem]'
              style={{ color: 'var(--bp-ink)' }}
            >
              dBiz
            </span>
            <span className='bp-mono-accent text-[0.58rem]'>.ai</span>
          </Link>

          <ul className='hidden md:flex items-center gap-8'>
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className='bp-mono hover:text-[var(--bp-accent)] transition-colors'
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className='hidden md:flex items-center gap-3'>
            <a href='#cta' className='bp-btn-text'>
              Read the brief{' '}
              <Icon icon='ph:arrow-up-right-bold' width={12} />
            </a>
            <a href='#cta' className='bp-btn'>
              Talk to a lead <Icon icon='ph:arrow-right-bold' width={14} />
            </a>
          </div>

          <button
            aria-label='Toggle menu'
            aria-expanded={open}
            className='md:hidden text-[var(--bp-ink)]'
            onClick={() => setOpen((v) => !v)}
          >
            <Icon icon={open ? 'ph:x-bold' : 'ph:list-bold'} width={22} />
          </button>
        </div>

        {open && (
          <ul className='md:hidden flex flex-col gap-4 pb-6'>
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className='bp-mono block py-2'
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className='pt-2'>
              <a href='#cta' className='bp-btn'>
                Talk to a lead <Icon icon='ph:arrow-right-bold' width={14} />
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  )
}
```

- [ ] **Step 2: Verify**

Open `http://localhost:5555/v11`. Expected:
- Sticky nav at top with dBiz wordmark (left), 4 nav links (center on desktop), "Read the brief" text link + orange "Talk to a lead" button (right).
- Mobile: hamburger icon toggles a stacked menu.
- Nav link hover: text color flips to orange.

- [ ] **Step 3: Lint + commit**

```bash
pnpm lint
git add src/app/v11/_components/Navbar.tsx
git commit -m "$(cat <<'EOF'
V11: rewrite Navbar to Blueprint vocabulary (dBiz wordmark, bp-btn CTA)

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

### Task 6: Rewrite `HeroSection` with inline blueprint SVG

**Files:**
- Modify: `src/app/v11/_components/HeroSection.tsx` (full replacement; removes `hero-glow.jpg` reference)

**Spec reference:** spec §1 Hero.

- [ ] **Step 1: Replace `HeroSection.tsx`**

```tsx
import { Icon } from '@/components/icon'

export const HeroSection = () => (
  <section className='bp-section' style={{ paddingTop: 'clamp(64px, 10vw, 120px)' }}>
    <div className='bp-container'>
      <div className='bp-meta' style={{ marginBottom: 40 }}>
        <span>dBiz · HOMEPAGE · REV <span className='k'>2026-04-15</span></span>
        <span>Sheet <span className='k'>01/01</span></span>
        <span>Scale <span className='k'>1:1</span></span>
      </div>

      <div className='grid gap-14 lg:grid-cols-[1.25fr_1fr] items-center'>
        <div>
          <span className='bp-eyebrow'>
            <span className='bar' />
            N·01 · The Frontier Organisation
          </span>
          <h1 className='bp-title' style={{ marginTop: 24 }}>
            Your enterprise.{' '}
            <em className='font-serif italic'>Agent-operated.</em>
            <br />
            Starting now.
          </h1>
          <p className='bp-mono-accent' style={{ marginBottom: 28 }}>
            Human-Led · Agent-Operated · Data-Powered
          </p>
          <p className='bp-lede' style={{ marginBottom: 36 }}>
            Most enterprises have tried AI. Most of it didn\u2019t scale — not because
            the technology failed, but because no one connected the ambition to
            what actually got built. We close that gap. We call the result a
            Frontier Organisation: human-led, agent-operated, data-powered.
          </p>
          <div className='flex flex-wrap items-center gap-4'>
            <a href='#cta' className='bp-btn'>
              Talk to a lead <Icon icon='ph:arrow-right-bold' width={14} />
            </a>
            <a href='#framework' className='bp-btn-ghost'>
              Read the brief <Icon icon='ph:arrow-up-right-bold' width={12} />
            </a>
          </div>
        </div>

        <HeroDiagram />
      </div>
    </div>
  </section>
)

const HeroDiagram = () => (
  <div className='relative w-full aspect-square max-w-[480px] ml-auto'>
    <svg
      viewBox='0 0 400 400'
      width='100%'
      height='100%'
      style={{ display: 'block' }}
      aria-hidden
    >
      {/* frame */}
      <rect x='8' y='8' width='384' height='384' fill='none' stroke='var(--bp-ink-frame)' strokeWidth='1' />
      {/* corner ticks */}
      {[
        [8, 8, 20, 8, 8, 20],
        [392, 8, 380, 8, 392, 20],
        [8, 392, 20, 392, 8, 380],
        [392, 392, 380, 392, 392, 380],
      ].map(([x1, y1, x2, y2, x3, y3], i) => (
        <g key={i} stroke='var(--bp-ink-corner)' strokeWidth='1' fill='none'>
          <line x1={x1} y1={y1} x2={x2} y2={y2} />
          <line x1={x1} y1={y1} x2={x3} y2={y3} />
        </g>
      ))}

      {/* crosshair */}
      <line x1='200' y1='8' x2='200' y2='392' stroke='var(--bp-ink-crosshair)' strokeWidth='1' strokeDasharray='3 4' />
      <line x1='8' y1='200' x2='392' y2='200' stroke='var(--bp-ink-crosshair)' strokeWidth='1' strokeDasharray='3 4' />

      {/* 4 horizontal layer slabs, stacked top→bottom */}
      {[
        { y: 70, label: 'A·01  Strategy' },
        { y: 140, label: 'A·02  Cloud' },
        { y: 210, label: 'A·03  Data' },
        { y: 280, label: 'A·04  AI / Agents' },
      ].map((layer, i) => (
        <g key={i}>
          <rect
            x='60'
            y={layer.y}
            width='280'
            height='50'
            fill='none'
            stroke={i === 2 ? 'var(--bp-ink-corner)' : 'var(--bp-ink-frame)'}
            strokeWidth='1'
          />
          <text
            x='70'
            y={layer.y + 20}
            fontFamily='var(--font-mono)'
            fontSize='10'
            letterSpacing='2'
            fill='var(--bp-ink-3)'
          >
            {layer.label}
          </text>
          <rect
            x='70'
            y={layer.y + 28}
            width='260'
            height='1'
            fill='var(--bp-ink-measure)'
          />
        </g>
      ))}

      {/* central orbital */}
      <circle cx='200' cy='200' r='28' fill='none' stroke='var(--bp-ink-corner)' strokeWidth='1' />
      <circle cx='200' cy='200' r='4' fill='var(--bp-accent)' />

      {/* coord label */}
      <text x='16' y='22' fontFamily='var(--font-mono)' fontSize='9' letterSpacing='1.5' fill='var(--bp-ink-3)'>FIG·01 · STACK</text>
      <text x='336' y='386' fontFamily='var(--font-mono)' fontSize='9' letterSpacing='1.5' fill='var(--bp-ink-3)' textAnchor='end'>Ø 4 LAYERS</text>
    </svg>
  </div>
)
```

- [ ] **Step 2: Verify**

Open `http://localhost:5555/v11`. Expected:
- Hero with left-column copy (eyebrow, title with italic orange "Agent-operated.", mono tagline, lede, two CTAs).
- Right-column SVG showing a framed 4-slab diagram with orange accents and an orange center dot.
- No more `hero-glow.jpg` image, no gradient blobs, no photo.
- On mobile (< 1024px), SVG stacks below the copy.

- [ ] **Step 3: Lint + commit**

```bash
pnpm lint
git add src/app/v11/_components/HeroSection.tsx
git commit -m "$(cat <<'EOF'
V11: rewrite Hero with inline blueprint SVG (removes hero-glow.jpg)

Introduces the FIG·01 STACK mini-diagram per spec §1: 4 horizontal
slabs with orange accent on the data layer and an orange orbital node
at the crosshair center. Copy is V4 verbatim.

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Phase 3 — Quick wins (Trust, Stats, Footer)

### Task 7: Rewrite `TrustBar`

**Files:**
- Modify: `src/app/v11/_components/TrustBar.tsx`

- [ ] **Step 1: Replace `TrustBar.tsx`**

```tsx
const logos = [
  'Vanguard',
  'Atlas',
  'Meridian',
  'Cascade',
  'Bluefield',
  'Northwind',
  'Halogen',
  'Stratum',
  'Borealis',
  'Ember',
] as const

export const TrustBar = () => (
  <section className='bp-section' style={{ paddingTop: 48, paddingBottom: 48 }}>
    <div className='bp-container'>
      <div className='flex items-center justify-between mb-6 flex-wrap gap-4'>
        <span className='bp-mono-accent'>N·02 · TRUSTED BY</span>
        <span className='bp-mono'>50+ Enterprises · 6 Countries</span>
      </div>

      <div
        className='relative overflow-hidden'
        style={{
          maskImage: 'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)',
        }}
      >
        <div
          className='flex gap-16 whitespace-nowrap'
          style={{
            animation: 'v11-marquee 40s linear infinite',
            width: 'max-content',
          }}
        >
          {[...logos, ...logos].map((name, i) => (
            <span
              key={i}
              className='bp-mono'
              style={{ color: 'var(--bp-ink-3)', fontSize: '0.9rem', letterSpacing: '0.2em' }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
)
```

- [ ] **Step 2: Verify**

Open `http://localhost:5555/v11`. Expected: horizontal marquee of 10 grayscale mono-styled placeholder client names, scrolling left, fading at edges. Kicker `N·02 · TRUSTED BY` on the left, caption `50+ Enterprises · 6 Countries` on the right.

- [ ] **Step 3: Lint + commit**

```bash
pnpm lint
git add src/app/v11/_components/TrustBar.tsx
git commit -m "$(cat <<'EOF'
V11: rewrite TrustBar as blueprint marquee (mono placeholder logos)

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

### Task 8: Rewrite `StatsSection`

**Files:**
- Modify: `src/app/v11/_components/StatsSection.tsx`

- [ ] **Step 1: Replace `StatsSection.tsx`**

```tsx
'use client'

import { useEffect, useRef, useState } from 'react'
import { stats } from '../_content/stats'

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setCount(target)
      return
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0
          const dur = 1400
          const step = (ts: number) => {
            if (!start) start = ts
            const p = Math.min((ts - start) / dur, 1)
            setCount(Math.floor(p * target))
            if (p < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
          obs.disconnect()
        }
      },
      { threshold: 0.35 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [target])

  return (
    <div
      ref={ref}
      className='val'
      style={{ color: 'var(--bp-ink)' }}
    >
      {count}
      {suffix}
    </div>
  )
}

export const StatsSection = () => (
  <section className='bp-section'>
    <div className='bp-container'>
      <span className='bp-mono-accent' style={{ marginBottom: 40, display: 'inline-block' }}>
        N·03 · BY THE NUMBERS
      </span>
      <div className='grid gap-0 sm:grid-cols-2 lg:grid-cols-4' style={{ border: '1px solid var(--bp-hair)' }}>
        {stats.map((s) => (
          <div
            key={s.coord}
            className='bp-card bp-frame-cell'
            style={{ border: 0, borderRight: '1px solid var(--bp-hair)' }}
          >
            <span className='cell-bg' />
            <span className='cell-outline' />
            <div className='hd'>
              <span>Stat</span>
              <span className='k'>{s.coord}</span>
            </div>
            <Counter target={s.value} suffix={s.suffix} />
            <div className='lbl'>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
)
```

- [ ] **Step 2: Verify**

Open `http://localhost:5555/v11`. Expected:
- Row of 4 stat cards: 50+, 150+, 6, 500+ with labels "Enterprise clients / Solutions in production / Countries / Engineers".
- Numbers animate 0→target on scroll-into-view.
- Each card has angle-bracket corners, coord marker in the top-right (S·01…S·04), a dashed header rule, and orange-hairline cell lighting on hover.
- Cards share borders (no visible card gap — one outlined grid).
- 10+ years delivery is gone.

- [ ] **Step 3: Lint + commit**

```bash
pnpm lint
git add src/app/v11/_components/StatsSection.tsx
git commit -m "$(cat <<'EOF'
V11: rewrite Stats with corrected 4 values and bp-card treatment

Removes '10+ years delivery' and '11 industries' from the prior 5-stat
scaffold. Respects prefers-reduced-motion. Adds per-card hover
cell-light via .bp-frame-cell.

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

### Task 9: Rewrite `Footer`

**Files:**
- Modify: `src/app/v11/_components/Footer.tsx`

- [ ] **Step 1: Replace `Footer.tsx`**

```tsx
import Link from 'next/link'

const columns = [
  {
    title: 'Product',
    links: [
      { label: 'Capabilities', href: '#capabilities' },
      { label: 'Framework', href: '#framework' },
      { label: 'Proven', href: '#proven' },
      { label: 'Cadence', href: '#cadence' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Leadership', href: '/leadership' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '#cta' },
    ],
  },
  {
    title: 'Practices',
    links: [
      { label: 'Futures Studio', href: '/futures-studio' },
      { label: 'TechOffice Foundry', href: '/techoffice-foundry' },
      { label: 'FactWeavers™', href: '/factweavers' },
      { label: 'Perpetual Engineering', href: '/perpetual-engineering' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
      { label: 'Security', href: '/security' },
    ],
  },
] as const

export const Footer = () => (
  <footer
    className='bp-section'
    style={{
      padding: '72px 0 48px',
      borderTop: '1px solid var(--bp-hair)',
      borderBottom: 'none',
    }}
  >
    <div className='bp-container'>
      <div className='grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]'>
        <div>
          <Link href='/v11' className='block mb-4'>
            <span className='text-xl font-bold' style={{ color: 'var(--bp-ink)' }}>
              dBiz
            </span>
            <span className='bp-mono-accent ml-1' style={{ fontSize: '0.62rem' }}>
              .ai
            </span>
          </Link>
          <p className='bp-lede' style={{ fontSize: '0.88rem', maxWidth: 280 }}>
            Human-Led · Agent-Operated · Data-Powered. The Frontier Organisation.
          </p>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <div className='bp-mono-accent' style={{ marginBottom: 18 }}>
              {col.title}
            </div>
            <ul className='flex flex-col gap-2'>
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className='bp-mono block'
                    style={{ fontSize: '0.78rem' }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className='bp-hatch' style={{ marginTop: 56, marginBottom: 20 }} />

      <div className='bp-meta' style={{ borderBottom: 'none' }}>
        <span>© dBiz.ai · All rights reserved</span>
        <span>REV <span className='k'>2026-04-15</span> · Sheet <span className='k'>01/01</span></span>
        <span>Human-Led · Agent-Operated · Data-Powered</span>
      </div>
    </div>
  </footer>
)
```

- [ ] **Step 2: Verify**

Open `http://localhost:5555/v11`. Expected: 5-column footer (brand + 4 link columns), hatch divider, mono legal strip at bottom with REV marker.

- [ ] **Step 3: Lint + commit**

```bash
pnpm lint
git add src/app/v11/_components/Footer.tsx
git commit -m "$(cat <<'EOF'
V11: rewrite Footer to blueprint (4-col links + hatch divider + meta)

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Phase 4 — AI Transformation Framework

### Task 10: Build `AiFrameworkDiagram`

**Why:** The core novel visual — a horizontal 4-layer exploded SVG with hover-to-focus state. It renders all four `frameworkLayers`, wires hover/keyboard focus through React state, and updates a side-panel child. This is the largest single component in the build.

**Files:**
- Create: `src/app/v11/_components/AiFrameworkDiagram.tsx`

**Spec reference:** spec §5, lines approximating "AI Transformation Framework (horizontal exploded 4-layer diagram)".

- [ ] **Step 1: Create `AiFrameworkDiagram.tsx`**

```tsx
'use client'

import { useState, useEffect, useCallback } from 'react'
import { frameworkLayers } from '../_content/frameworkLayers'

type FocusIndex = 0 | 1 | 2 | 3 | null

const SLAB_W = 240
const SLAB_H = 340
const SLAB_GAP = 48
const SLAB_Y = 140
const DIAGRAM_W = 4 * SLAB_W + 3 * SLAB_GAP + 80 // 40 px margin each side
const DIAGRAM_H = 560

export const AiFrameworkDiagram = () => {
  const [focus, setFocus] = useState<FocusIndex>(null)

  const onKey = useCallback(
    (e: KeyboardEvent) => {
      if (focus === null) return
      if (e.key === 'Escape') {
        setFocus(null)
        return
      }
      if (e.key === 'ArrowRight')
        setFocus((f) => (f === null ? 0 : Math.min(3, f + 1)) as FocusIndex)
      if (e.key === 'ArrowLeft')
        setFocus((f) => (f === null ? 0 : Math.max(0, f - 1)) as FocusIndex)
    },
    [focus],
  )

  useEffect(() => {
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onKey])

  return (
    <div className='relative'>
      <div className='grid gap-10 lg:grid-cols-[1fr_320px] items-start'>
        <div className='overflow-x-auto' style={{ minHeight: DIAGRAM_H }}>
          <svg
            viewBox={`0 0 ${DIAGRAM_W} ${DIAGRAM_H}`}
            width='100%'
            height={DIAGRAM_H}
            style={{ minWidth: DIAGRAM_W, display: 'block' }}
            role='group'
            aria-label='AI Transformation Framework — four layers left to right'
          >
            {/* top annotations */}
            <text
              x='40'
              y='32'
              fontFamily='var(--font-mono)'
              fontSize='10'
              letterSpacing='2'
              fill='var(--bp-ink-3)'
            >
              FIG·05 · FRAMEWORK
            </text>
            <text
              x={DIAGRAM_W - 40}
              y='32'
              fontFamily='var(--font-mono)'
              fontSize='10'
              letterSpacing='2'
              fill='var(--bp-ink-3)'
              textAnchor='end'
            >
              4 LAYERS · REV 2026-04-15
            </text>

            {/* floating annotations (top) */}
            <g>
              {/* Nexus Platform spanning layers 2-3 */}
              <line
                x1={40 + SLAB_W + SLAB_W / 2}
                y1={80}
                x2={40 + 2 * SLAB_W + SLAB_GAP + SLAB_W / 2}
                y2={80}
                stroke='var(--bp-ink-hair)'
                strokeDasharray='3 4'
              />
              <text
                x={40 + SLAB_W + SLAB_GAP + SLAB_W / 2}
                y='72'
                fontFamily='var(--font-mono)'
                fontSize='10'
                letterSpacing='1.5'
                fill='var(--bp-accent)'
                textAnchor='middle'
              >
                NEXUS PLATFORM
              </text>

              {/* Perpetual Engineering on layer 3 */}
              <text
                x={40 + 2 * (SLAB_W + SLAB_GAP) + SLAB_W / 2}
                y='108'
                fontFamily='var(--font-mono)'
                fontSize='10'
                letterSpacing='1.5'
                fill='var(--bp-accent)'
                textAnchor='middle'
              >
                PERPETUAL ENGINEERING
              </text>
              <line
                x1={40 + 2 * (SLAB_W + SLAB_GAP) + SLAB_W / 2}
                y1={112}
                x2={40 + 2 * (SLAB_W + SLAB_GAP) + SLAB_W / 2}
                y2={SLAB_Y - 4}
                stroke='var(--bp-ink-hair)'
                strokeDasharray='3 4'
              />
            </g>

            {/* 4 layer slabs */}
            {frameworkLayers.map((layer, i) => {
              const x = 40 + i * (SLAB_W + SLAB_GAP)
              const isFocused = focus === i
              const isDimmed = focus !== null && !isFocused
              const groupOpacity = isDimmed ? 0.35 : 1
              const strokeColor = isFocused ? 'var(--bp-accent)' : 'var(--bp-ink-frame)'
              return (
                <g
                  key={layer.coord}
                  role='button'
                  tabIndex={0}
                  aria-label={`${layer.coord} — ${layer.title}`}
                  aria-pressed={isFocused}
                  style={{
                    cursor: 'pointer',
                    opacity: groupOpacity,
                    transition: 'opacity 300ms var(--v11-ease)',
                    filter: isFocused ? 'drop-shadow(0 0 8px rgba(232,106,42,0.4))' : undefined,
                  }}
                  onMouseEnter={() => setFocus(i as FocusIndex)}
                  onMouseLeave={() => setFocus(null)}
                  onFocus={() => setFocus(i as FocusIndex)}
                  onBlur={() => setFocus(null)}
                  onClick={() => setFocus(i as FocusIndex)}
                >
                  {/* depth lines */}
                  {[6, 12, 18].map((d) => (
                    <rect
                      key={d}
                      x={x + d}
                      y={SLAB_Y - d}
                      width={SLAB_W}
                      height={SLAB_H}
                      fill='none'
                      stroke='var(--bp-ink-measure)'
                      strokeWidth='1'
                      opacity={isDimmed ? 0.2 : 0.6}
                    />
                  ))}
                  {/* slab front */}
                  <rect
                    x={x}
                    y={SLAB_Y}
                    width={SLAB_W}
                    height={SLAB_H}
                    fill='rgba(255,255,255,0.02)'
                    stroke={strokeColor}
                    strokeWidth='1'
                  />
                  {/* header */}
                  <text
                    x={x + 14}
                    y={SLAB_Y + 22}
                    fontFamily='var(--font-mono)'
                    fontSize='10'
                    letterSpacing='2'
                    fill='var(--bp-accent)'
                  >
                    {layer.coord}
                  </text>
                  <text
                    x={x + 14}
                    y={SLAB_Y + 46}
                    fontFamily='var(--font-sans)'
                    fontSize='15'
                    fontWeight='700'
                    fill='var(--bp-ink)'
                  >
                    {layer.title}
                  </text>
                  <line
                    x1={x + 14}
                    y1={SLAB_Y + 60}
                    x2={x + SLAB_W - 14}
                    y2={SLAB_Y + 60}
                    stroke='var(--bp-ink-frame)'
                    strokeDasharray='3 4'
                  />

                  {/* tiles */}
                  {layer.tiles.map((tile, t) => (
                    <g key={tile.label}>
                      <rect
                        x={x + 14}
                        y={SLAB_Y + 78 + t * 42}
                        width={SLAB_W - 28}
                        height='34'
                        fill='none'
                        stroke={isFocused ? 'var(--bp-orange-hair)' : 'var(--bp-ink-measure)'}
                        strokeWidth='1'
                      />
                      <text
                        x={x + 26}
                        y={SLAB_Y + 100 + t * 42}
                        fontFamily='var(--font-mono)'
                        fontSize='10'
                        letterSpacing='1.5'
                        fill='var(--bp-ink-2)'
                      >
                        {tile.label.toUpperCase()}
                      </text>
                    </g>
                  ))}

                  {/* theme caption */}
                  <text
                    x={x + 14}
                    y={SLAB_Y + SLAB_H - 14}
                    fontFamily='var(--font-mono)'
                    fontSize='9'
                    letterSpacing='1.5'
                    fill='var(--bp-ink-3)'
                  >
                    {layer.theme.toUpperCase()}
                  </text>
                </g>
              )
            })}

            {/* arrows between slabs */}
            {[0, 1, 2].map((i) => {
              const x = 40 + i * (SLAB_W + SLAB_GAP) + SLAB_W
              const y = SLAB_Y + SLAB_H / 2
              return (
                <g key={i}>
                  <line
                    x1={x + 6}
                    y1={y}
                    x2={x + SLAB_GAP - 6}
                    y2={y}
                    stroke='var(--bp-accent)'
                    strokeWidth='1'
                  />
                  <polyline
                    points={`${x + SLAB_GAP - 12},${y - 4} ${x + SLAB_GAP - 6},${y} ${x + SLAB_GAP - 12},${y + 4}`}
                    fill='none'
                    stroke='var(--bp-accent)'
                    strokeWidth='1'
                  />
                  <text
                    x={x + SLAB_GAP / 2}
                    y={y - 10}
                    fontFamily='var(--font-mono)'
                    fontSize='9'
                    letterSpacing='1.5'
                    fill='var(--bp-accent)'
                    textAnchor='middle'
                  >
                    {['HAND·OFF', 'DEPLOY', 'OPERATE'][i]}
                  </text>
                </g>
              )
            })}

            {/* bottom axis */}
            <line
              x1='40'
              y1={SLAB_Y + SLAB_H + 42}
              x2={DIAGRAM_W - 40}
              y2={SLAB_Y + SLAB_H + 42}
              stroke='var(--bp-ink-frame)'
            />
            {['HUMAN-LED', 'AGENT-OPERATED', 'DATA-POWERED'].map((label, i) => {
              const x = 40 + (i + 0.5) * ((DIAGRAM_W - 80) / 3)
              return (
                <g key={label}>
                  <line
                    x1={x}
                    y1={SLAB_Y + SLAB_H + 38}
                    x2={x}
                    y2={SLAB_Y + SLAB_H + 46}
                    stroke='var(--bp-accent)'
                  />
                  <text
                    x={x}
                    y={SLAB_Y + SLAB_H + 62}
                    fontFamily='var(--font-mono)'
                    fontSize='10'
                    letterSpacing='2'
                    fill='var(--bp-ink-2)'
                    textAnchor='middle'
                  >
                    {label}
                  </text>
                </g>
              )
            })}
          </svg>
        </div>

        {/* Side panel */}
        <FocusPanel focus={focus} />
      </div>
    </div>
  )
}

const FocusPanel = ({ focus }: { focus: FocusIndex }) => {
  const layer =
    focus !== null && focus >= 0 && focus < frameworkLayers.length
      ? frameworkLayers[focus]
      : null

  return (
    <div className='bp-card' style={{ maxWidth: 'none', minHeight: 320 }}>
      <div className='hd'>
        <span>Layer detail</span>
        <span className='k'>{layer ? layer.coord : 'L·00'}</span>
      </div>
      {layer ? (
        <>
          <h3>{layer.title}</h3>
          <p className='bp-mono-accent' style={{ marginBottom: 14 }}>
            {layer.theme.toUpperCase()}
          </p>
          <p style={{ marginBottom: 16 }}>{layer.description}</p>
          <p className='bp-mono' style={{ marginBottom: 12 }}>
            TILES
          </p>
          <ul className='flex flex-col gap-2'>
            {layer.tiles.map((tile) => (
              <li key={tile.label} className='bp-mono' style={{ color: 'var(--bp-ink-2)' }}>
                · {tile.label}
              </li>
            ))}
          </ul>
          <p className='bp-mono' style={{ marginTop: 18, color: 'var(--bp-ink-3)' }}>
            {layer.caption}
          </p>
        </>
      ) : (
        <>
          <h3 style={{ color: 'var(--bp-ink-3)' }}>Hover a layer to inspect</h3>
          <p>
            Four layers, one continuous system. Point at Strategy to see entry
            practices; at Development to see build tooling; at Productivity to
            see decision intelligence. Keyboard: arrow keys move focus,
            Escape clears.
          </p>
        </>
      )}
    </div>
  )
}
```

- [ ] **Step 2: Lint + typecheck**

```bash
pnpm lint
pnpm tsc --noEmit
```

Expected: both pass. Component has no rendered parent yet — we cannot visually verify until Task 11 adds the wrapper.

- [ ] **Step 3: Commit**

```bash
git add src/app/v11/_components/AiFrameworkDiagram.tsx
git commit -m "$(cat <<'EOF'
V11: add AI Framework diagram (horizontal 4-layer exploded SVG)

Static-at-rest exploded view per spec §5. Hover/focus/arrow-key selects
a layer; other layers dim; side panel populates with tiles, caption,
theme. Keyboard escape clears. Nexus Platform and Perpetual Engineering
annotations float above relevant layer ranges. Hyperscaler-neutral:
Cloud tiles name primitives, not providers.

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

### Task 11: Build `AiFrameworkSection` and delete old `FrontierSection`

**Files:**
- Create: `src/app/v11/_components/AiFrameworkSection.tsx`
- Delete: `src/app/v11/_components/FrontierSection.tsx`

- [ ] **Step 1: Create `AiFrameworkSection.tsx`**

```tsx
import { AiFrameworkDiagram } from './AiFrameworkDiagram'

export const AiFrameworkSection = () => (
  <section id='framework' className='bp-section'>
    <div className='bp-container'>
      <div className='bp-section-head'>
        <div className='bp-kicker'>N·05 · The Framework</div>
        <h2>
          The stack we build on.{' '}
          <em>Human-led, agent-operated, data-powered.</em>
        </h2>
        <p className='lead'>
          Four layers. One continuous system. Strategy sets direction. Cloud
          gives it a floor. Development turns it into software. Productivity
          puts it to work.
        </p>
      </div>
      <AiFrameworkDiagram />
    </div>
  </section>
)
```

- [ ] **Step 2: Delete the old scaffolding file**

```bash
rm src/app/v11/_components/FrontierSection.tsx
```

- [ ] **Step 3: Point `page.tsx` at the new section**

Open `src/app/v11/page.tsx` and replace the line importing `FrontierSection` with:

```tsx
import { AiFrameworkSection } from './_components/AiFrameworkSection'
```

Replace `<FrontierSection />` in the returned JSX with `<AiFrameworkSection />`.

- [ ] **Step 4: Verify**

Open `http://localhost:5555/v11`. Scroll to the Framework section. Expected:
- Mono kicker "N·05 · The Framework", headline with italic orange accent, lede.
- Horizontal row of 4 stroked slabs with depth lines, tiles, mono labels.
- Orange arrows between slabs labeled HAND·OFF, DEPLOY, OPERATE.
- Bottom axis with HUMAN-LED / AGENT-OPERATED / DATA-POWERED tick marks.
- Side panel: "Hover a layer to inspect" on rest; updates to tiles + description when hovering.
- Hover a layer → other 3 dim, that one gets an orange glow halo.
- Keyboard: Tab focuses the first layer (confirm focus ring is visible), Arrow keys move focus.

- [ ] **Step 5: Lint + commit**

```bash
pnpm lint
git add src/app/v11/_components/AiFrameworkSection.tsx src/app/v11/page.tsx
git rm src/app/v11/_components/FrontierSection.tsx
git commit -m "$(cat <<'EOF'
V11: wire AI Framework section and drop old FrontierSection

AiFrameworkSection composes the new diagram + section header; the
Vite-port FrontierSection is deleted. page.tsx references updated.

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Phase 5 — Capabilities

### Task 12: Build `CapabilitiesSection` and delete old `ExpertiseSection`

**Why:** Kavya's "most important content section." Tabs × pill filters × auto-advancing spotlight. This is the second-largest single component after the Framework diagram.

**Files:**
- Create: `src/app/v11/_components/CapabilitiesSection.tsx`
- Delete: `src/app/v11/_components/ExpertiseSection.tsx`

- [ ] **Step 1: Create `CapabilitiesSection.tsx`**

```tsx
'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import {
  capabilities,
  pillsByTab,
  type CapabilityTab,
} from '../_content/capabilities'
import { GeometricIcon } from './GeometricIcon'

const TABS: readonly { id: CapabilityTab; label: string }[] = [
  { id: 'industry', label: 'By Industry' },
  { id: 'solution', label: 'By Solution' },
  { id: 'technology', label: 'By Technology' },
] as const

const SPOTLIGHT_INTERVAL_MS = 4500
const RESUME_DELAY_MS = 2000

export const CapabilitiesSection = () => {
  const [tab, setTab] = useState<CapabilityTab>('industry')
  const [pill, setPill] = useState<string>('All')
  const [spotlight, setSpotlight] = useState<number>(0)
  const [paused, setPaused] = useState(false)
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const filtered = useMemo(
    () =>
      capabilities.filter((c) => {
        if (c.tab !== tab) return false
        if (pill === 'All') return true
        return c.pill === pill
      }),
    [tab, pill],
  )

  // Reset spotlight when pool changes
  useEffect(() => {
    setSpotlight(0)
  }, [tab, pill])

  // Auto-advance
  useEffect(() => {
    if (paused || filtered.length <= 1) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    const id = setInterval(() => {
      setSpotlight((s) => (s + 1) % filtered.length)
    }, SPOTLIGHT_INTERVAL_MS)
    return () => clearInterval(id)
  }, [paused, filtered.length])

  const triggerPause = () => {
    setPaused(true)
    if (resumeTimer.current) clearTimeout(resumeTimer.current)
    resumeTimer.current = setTimeout(() => setPaused(false), RESUME_DELAY_MS)
  }

  // Cleanup resume timer on unmount
  useEffect(() => {
    return () => {
      if (resumeTimer.current) clearTimeout(resumeTimer.current)
    }
  }, [])

  const currentTitle = filtered[spotlight]?.title ?? ''

  return (
    <section
      id='capabilities'
      className='bp-section'
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className='bp-container'>
        <div className='bp-section-head'>
          <div className='bp-kicker'>N·04 · Capabilities</div>
          <h2>
            The AI gap every enterprise hits.{' '}
            <em>And how we close it.</em>
          </h2>
          <p className='lead'>
            Scan by industry, solution, or technology. What we\u2019ve shipped,
            what we build on, and what\u2019s already live.
          </p>
        </div>

        {/* Tabs */}
        <div role='tablist' className='flex gap-0 border border-[var(--bp-hair)] mb-6 w-fit'>
          {TABS.map((t) => (
            <button
              key={t.id}
              role='tab'
              aria-selected={tab === t.id}
              aria-controls='capability-grid'
              onClick={() => {
                setTab(t.id)
                setPill('All')
                triggerPause()
              }}
              className='bp-mono'
              style={{
                padding: '12px 20px',
                background: tab === t.id ? 'var(--bp-accent)' : 'transparent',
                color:
                  tab === t.id ? 'var(--brand-navy-deep)' : 'var(--bp-ink-2)',
                borderRight: '1px solid var(--bp-hair)',
                cursor: 'pointer',
                transition: 'background 0.2s ease',
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Pill filter row */}
        <div className='flex flex-wrap gap-2 mb-10'>
          {pillsByTab[tab].map((p) => (
            <button
              key={p}
              className='bp-tag'
              data-active={pill === p}
              onClick={() => {
                setPill(p)
                triggerPause()
              }}
            >
              {p}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div
          id='capability-grid'
          role='tabpanel'
          className='grid gap-0 sm:grid-cols-2 lg:grid-cols-4'
          style={{ border: '1px solid var(--bp-hair)' }}
        >
          {filtered.map((card, i) => (
            <div
              key={card.coord}
              className={
                'bp-card bp-frame-cell' + (i === spotlight ? ' is-spotlight' : '')
              }
              style={{
                border: 0,
                borderRight: '1px solid var(--bp-hair)',
                borderBottom: '1px solid var(--bp-hair)',
                minWidth: 0,
                maxWidth: 'none',
                transition: 'all 300ms var(--v11-ease)',
              }}
              onClick={() => {
                setSpotlight(i)
                triggerPause()
              }}
            >
              <span className='cell-bg' />
              <span className='cell-outline' />
              <div className='hd'>
                <span>{card.pill}</span>
                <span className='k'>{card.coord}</span>
              </div>
              <GeometricIcon
                name={card.icon}
                className='w-16 h-16 mb-4 opacity-60'
              />
              <h3>{card.title}</h3>
              <p>{card.body}</p>
              <p className='bp-mono-accent' style={{ marginTop: 14 }}>
                {card.meta}
              </p>
            </div>
          ))}
        </div>

        {/* Progress dots */}
        {filtered.length > 1 && (
          <div
            className='flex items-center gap-3 mt-8'
            style={{ fontFamily: 'var(--font-mono)', fontSize: '0.66rem', letterSpacing: '0.2em' }}
          >
            <span className='bp-mono'>FOCUS</span>
            {filtered.map((c, i) => (
              <button
                key={c.coord}
                aria-label={`Focus card ${i + 1}: ${c.title}`}
                onClick={() => {
                  setSpotlight(i)
                  triggerPause()
                }}
                style={{
                  color: i === spotlight ? 'var(--bp-accent)' : 'var(--bp-ink-3)',
                  cursor: 'pointer',
                  background: 'transparent',
                  border: 'none',
                  padding: 0,
                  fontSize: '0.9rem',
                }}
              >
                {i === spotlight ? '\u25c6' : '\u25cf'}
              </button>
            ))}
          </div>
        )}

        {/* aria-live announcer */}
        <div role='status' aria-live='polite' style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)' }}>
          Focused: {currentTitle}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Delete the old scaffolding**

```bash
rm src/app/v11/_components/ExpertiseSection.tsx
```

- [ ] **Step 3: Update `page.tsx`**

Open `src/app/v11/page.tsx`. Replace:

```tsx
import { ExpertiseSection } from './_components/ExpertiseSection'
```

with:

```tsx
import { CapabilitiesSection } from './_components/CapabilitiesSection'
```

Replace `<ExpertiseSection />` with `<CapabilitiesSection />` in the JSX.

- [ ] **Step 4: Verify**

Open `http://localhost:5555/v11`. Scroll to the Capabilities section. Expected:
- Kicker `N·04 · Capabilities`, headline with italic orange accent, lede.
- Segmented 3-tab row: By Industry (selected, orange-filled) · By Solution · By Technology.
- Pill row below shows 9 pills for Industry (All + 8).
- 4-column grid of 8 capability cards: coord in top-right, industry pill in top-left, GeometricIcon, title, body, meta.
- Every 4.5s, spotlight advances one card — that card gets its angle-brackets drawn bright, the dot-grid backdrop behind it lights up, kicker turns orange.
- Hover anywhere in the section: spotlight pauses.
- Click a pill (e.g., "Logistics"): pool narrows to 1 card, spotlight resets.
- Click a tab (e.g., "By Technology"): pool swaps to tech cards, spotlight resets, All pill selected.

- [ ] **Step 5: Lint + commit**

```bash
pnpm lint
git add src/app/v11/_components/CapabilitiesSection.tsx src/app/v11/page.tsx
git rm src/app/v11/_components/ExpertiseSection.tsx
git commit -m "$(cat <<'EOF'
V11: Capabilities — tabs + pill filters + auto-advancing spotlight

Replaces ExpertiseSection. Three tabs (Industry/Solution/Technology) each
with a pill filter row; auto-advances spotlight across the filtered pool
every 4.5s; pauses on hover/focus/interaction; jumps on dot click;
respects prefers-reduced-motion. aria-live announces spotlight changes.

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Phase 6 — Proven carousel

### Task 13: Build `ProvenSection`

**Files:**
- Create: `src/app/v11/_components/ProvenSection.tsx`

- [ ] **Step 1: Create `ProvenSection.tsx`**

```tsx
'use client'

import { useMemo, useRef, useState } from 'react'
import { Icon } from '@/components/icon'
import { cases } from '../_content/cases'
import { GeometricIcon } from './GeometricIcon'

const CARD_WIDTH = 360
const CARD_GAP = 24

// Pill list: "All" + the unique industries present on the case cards.
const INDUSTRIES = ['All', ...Array.from(new Set(cases.map((c) => c.industry)))] as const
type Pill = (typeof INDUSTRIES)[number]

export const ProvenSection = () => {
  const [pill, setPill] = useState<Pill>('All')
  const scrollRef = useRef<HTMLDivElement>(null)
  const [page, setPage] = useState(1)

  const filtered = useMemo(
    () => (pill === 'All' ? [...cases] : cases.filter((c) => c.industry === pill)),
    [pill],
  )

  const scrollBy = (delta: number) => {
    const el = scrollRef.current
    if (!el) return
    el.scrollBy({ left: delta, behavior: 'smooth' })
  }

  const onScroll = () => {
    const el = scrollRef.current
    if (!el) return
    const idx = Math.round(el.scrollLeft / (CARD_WIDTH + CARD_GAP))
    setPage(Math.min(filtered.length, idx + 1))
  }

  return (
    <section id='proven' className='bp-section'>
      <div className='bp-container'>
        <div className='bp-section-head'>
          <div className='bp-kicker'>N·07 · Proven where it matters</div>
          <h2>
            Proven where <em>it matters.</em>
          </h2>
          <p className='lead'>
            Evidence from the field. Eight industries, six countries, and
            hundreds of live agents.
          </p>
        </div>

        <div className='flex flex-wrap gap-2 mb-8'>
          {INDUSTRIES.map((p) => (
            <button
              key={p}
              className='bp-tag'
              data-active={pill === p}
              onClick={() => {
                setPill(p)
                scrollRef.current?.scrollTo({ left: 0, behavior: 'smooth' })
                setPage(1)
              }}
            >
              {p}
            </button>
          ))}
        </div>

        <div
          ref={scrollRef}
          onScroll={onScroll}
          className='overflow-x-auto pb-4'
          style={{
            scrollSnapType: 'x mandatory',
            scrollPaddingLeft: 0,
          }}
        >
          <div className='flex' style={{ gap: CARD_GAP }}>
            {filtered.map((c) => (
              <div
                key={c.coord}
                className='bp-card bp-frame-cell'
                style={{
                  flex: `0 0 ${CARD_WIDTH}px`,
                  scrollSnapAlign: 'start',
                  minWidth: CARD_WIDTH,
                  maxWidth: CARD_WIDTH,
                }}
              >
                <span className='cell-bg' />
                <span className='cell-outline' />
                <div className='hd'>
                  <span>{c.industry}</span>
                  <span className='k'>{c.coord}</span>
                </div>
                <GeometricIcon name={c.icon} className='w-16 h-16 mb-4 opacity-60' />
                <h3>{c.title}</h3>
                <p>{c.body}</p>
                <p className='bp-mono-accent' style={{ marginTop: 14 }}>
                  {c.metric}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className='flex items-center gap-6 mt-6'>
          <button
            className='bp-btn-text'
            onClick={() => scrollBy(-(CARD_WIDTH + CARD_GAP))}
            aria-label='Previous case'
          >
            <Icon icon='ph:arrow-left-bold' width={12} /> PREV
          </button>
          <span className='bp-mono-accent'>
            {String(page).padStart(2, '0')} / {String(filtered.length).padStart(2, '0')}
          </span>
          <button
            className='bp-btn-text'
            onClick={() => scrollBy(CARD_WIDTH + CARD_GAP)}
            aria-label='Next case'
          >
            NEXT <Icon icon='ph:arrow-right-bold' width={12} />
          </button>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Update `page.tsx`**

Ensure `page.tsx` imports and renders `ProvenSection`. If not already present (it was not in the original scaffolding), add the import and insert `<ProvenSection />` — full composition is reconciled in Task 19; for now just insert it somewhere in the returned JSX so we can verify visually.

- [ ] **Step 3: Verify**

Navigate to `http://localhost:5555/v11`. Expected:
- Kicker `N·07 · Proven where it matters`, headline with italic orange, lede.
- Pill row: All · Financial Services · Logistics · Aged Care · Banking · Real Estate · Retail · Public Sector (industry names derived from cases; All selected by default).
- Horizontal scroll strip of 7 cards, each 360px wide, snapping to each card on scroll.
- Mono `← PREV · 01/07 · NEXT →` row below strip.
- Click NEXT → scroll right one card, counter updates to 02/07.
- Click a pill → strip resets to left and filters.
- Hover a card → cell lights up.

- [ ] **Step 4: Lint + commit**

```bash
pnpm lint
git add src/app/v11/_components/ProvenSection.tsx src/app/v11/page.tsx
git commit -m "$(cat <<'EOF'
V11: Proven section — scroll-snap strip + pill filters + mono prev/next

Native horizontal scroll-snap with 7 cards (expanded from V4's 3).
Axis filter pills (All/Industry/Solution/Technology). Mono prev/next
text controls scroll-by one card-width. Counter tracks current snap.

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Phase 7 — Cadence & testimonial

### Task 14: Rewrite `HowWeWork`

**Files:**
- Modify: `src/app/v11/_components/HowWeWork.tsx`

- [ ] **Step 1: Replace `HowWeWork.tsx`**

```tsx
const phases = [
  {
    coord: 'P·01',
    days: '5',
    daysLabel: 'DAYS',
    title: 'Align & Assess',
    outcomes: ['Problem frame + north-star metrics', 'Capability + data readiness', 'Costed delivery plan'],
  },
  {
    coord: 'P·02',
    days: '15',
    daysLabel: 'DAYS',
    title: 'Specify & Validate',
    outcomes: ['Validated spec + MVP scope', 'Stakeholder signoff', 'Working slice in a test environment'],
  },
  {
    coord: 'P·03',
    days: '50',
    daysLabel: 'DAYS',
    title: 'Industrialise & Scale',
    outcomes: ['Live platform in production', 'Agents operating with oversight', 'Operational handover complete'],
  },
] as const

export const HowWeWork = () => (
  <section id='cadence' className='bp-section'>
    <div className='bp-container'>
      <div className='bp-section-head'>
        <div className='bp-kicker'>N·08 · Cadence</div>
        <h2>
          How we work. <em>Built for pace, not paperwork.</em>
        </h2>
        <p className='lead'>
          Every engagement is time-boxed. Milestones are fixed. Ambiguity gets
          eliminated early.
        </p>
      </div>

      {/* Rail */}
      <div className='relative'>
        <svg
          viewBox='0 0 1200 12'
          width='100%'
          height='12'
          preserveAspectRatio='none'
          className='hidden md:block'
          style={{ display: 'block', marginBottom: 16 }}
          aria-hidden
        >
          <line x1='40' y1='6' x2='1100' y2='6' stroke='var(--bp-accent)' strokeWidth='1' />
          <line x1='1100' y1='6' x2='1180' y2='6' stroke='var(--bp-orange-hair-soft)' strokeWidth='1' strokeDasharray='4 4' />
          {[0, 550, 1100].map((x) => (
            <g key={x}>
              <circle cx={x + 40} cy='6' r='3' fill='var(--bp-accent)' />
              <line x1={x + 40} y1='0' x2={x + 40} y2='12' stroke='var(--bp-accent)' strokeWidth='1' />
            </g>
          ))}
        </svg>

        <div className='grid gap-8 md:grid-cols-3'>
          {phases.map((p) => (
            <div key={p.coord} className='bp-card bp-frame-cell' style={{ maxWidth: 'none' }}>
              <span className='cell-bg' />
              <span className='cell-outline' />
              <div className='hd'>
                <span>Phase</span>
                <span className='k'>{p.coord}</span>
              </div>
              <div className='flex items-baseline gap-3 mb-2'>
                <span
                  style={{
                    fontSize: 'clamp(2.6rem, 4vw, 3.6rem)',
                    fontWeight: 800,
                    letterSpacing: '-0.04em',
                    lineHeight: 1,
                    color: 'var(--bp-accent)',
                  }}
                >
                  {p.days}
                </span>
                <span className='bp-mono-accent'>{p.daysLabel}</span>
              </div>
              <h3>{p.title}</h3>
              <ul className='flex flex-col gap-2 mt-4'>
                {p.outcomes.map((o) => (
                  <li key={o} className='bp-mono' style={{ color: 'var(--bp-ink-2)' }}>
                    · {o}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className='bp-mono' style={{ marginTop: 40, textAlign: 'center' }}>
          PERPETUAL ENGINEERING CONTINUES ——— NOT A CLIFF
        </p>
      </div>
    </div>
  </section>
)
```

- [ ] **Step 2: Verify**

Open `http://localhost:5555/v11`. Expected:
- Kicker `N·08 · Cadence`, headline with italic orange accent, lede.
- Horizontal orange rail (1px) with 3 tick-mark nodes, dashed extension to the right.
- 3 phase cards in a row: **5 DAYS** (Align & Assess) · **15 DAYS** (Specify & Validate) · **50 DAYS** (Industrialise & Scale). Each card: coord, day number in huge orange, DAYS label, title, 3-outcome bullet list.
- Mono `PERPETUAL ENGINEERING CONTINUES ——— NOT A CLIFF` label below.
- No "90 days" anywhere. No tabs. No workflow illustration image.

- [ ] **Step 3: Lint + commit**

```bash
pnpm lint
git add src/app/v11/_components/HowWeWork.tsx
git commit -m "$(cat <<'EOF'
V11: Cadence — horizontal 5/15/50 timeline with orange rail

Drops 90-day phase, replaces with 50. Removes old tabs (Timeline /
Methodology / Workflow) — cadence is a single clean story per spec §8.
Rail + tick marks drawn in SVG.

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

### Task 15: Rewrite `TestimonialSection` (beige)

**Files:**
- Modify: `src/app/v11/_components/TestimonialSection.tsx`

- [ ] **Step 1: Replace `TestimonialSection.tsx`**

```tsx
'use client'

import { useEffect, useRef, useState } from 'react'
import { Icon } from '@/components/icon'
import { testimonials } from '../_content/testimonials'

const CYCLE_MS = 6000

export const TestimonialSection = () => {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (paused) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length)
    }, CYCLE_MS)
    return () => clearInterval(id)
  }, [paused])

  const t = testimonials[index]

  return (
    <section
      data-surface='beige'
      className='bp-section'
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className='bp-container'>
        <div className='bp-section-head' style={{ textAlign: 'center', margin: '0 auto 56px' }}>
          <div className='bp-kicker' style={{ justifyContent: 'center' }}>
            N·06 · Voice of the practice
          </div>
        </div>

        <div
          ref={ref}
          className='bp-card'
          style={{ maxWidth: 820, margin: '0 auto', minHeight: 300 }}
        >
          <div className='hd'>
            <span>Testimonial</span>
            <span className='k'>{t.coord}</span>
          </div>
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: 'clamp(1.2rem, 2vw, 1.8rem)',
              lineHeight: 1.4,
              color: 'var(--bp-ink)',
              marginBottom: 28,
            }}
          >
            &ldquo;{t.quote}&rdquo;
          </p>
          <div className='bp-mono' style={{ color: 'var(--bp-ink-2)' }}>
            {t.name.toUpperCase()} · {t.role} · {t.company}
          </div>
        </div>

        <div
          className='flex items-center justify-center gap-6 mt-8'
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          <button
            className='bp-btn-text'
            aria-label='Previous testimonial'
            onClick={() => {
              setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)
              setPaused(true)
            }}
          >
            <Icon icon='ph:arrow-left-bold' width={12} /> PREV
          </button>
          <span className='bp-mono-accent'>
            {String(index + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
          </span>
          <button
            className='bp-btn-text'
            aria-label='Next testimonial'
            onClick={() => {
              setIndex((i) => (i + 1) % testimonials.length)
              setPaused(true)
            }}
          >
            NEXT <Icon icon='ph:arrow-right-bold' width={12} />
          </button>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verify**

Open `http://localhost:5555/v11`. Expected:
- Section surface flips to warm beige, navy ink. Dots on beige (darker).
- Centered kicker `N·06 · Voice of the practice`.
- Framed quote card in the middle with italic Instrument Serif quote, attribution in mono.
- Cycles every 6s; pauses on hover.
- Mono `← PREV · 01/04 · NEXT →` controls beneath.

- [ ] **Step 3: Lint + commit**

```bash
pnpm lint
git add src/app/v11/_components/TestimonialSection.tsx
git commit -m "$(cat <<'EOF'
V11: Testimonial — beige surface + carousel (V4 voice)

Section wrapper carries data-surface='beige' to flip tokens for
the palette break. Cycles 4 quotes, 6s interval, pauses on hover.

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Phase 8 — Beige "Why" section

### Task 16: Build `DuotoneIllustration` library

**Files:**
- Create: `src/app/v11/_components/DuotoneIllustration.tsx`

- [ ] **Step 1: Create `DuotoneIllustration.tsx`**

```tsx
import type { SVGProps } from 'react'

const ORANGE = 'var(--v11-duotone-orange)'
const BLUE = 'var(--v11-duotone-blue)'

type IlloProps = SVGProps<SVGSVGElement>

const defaults: IlloProps = {
  viewBox: '0 0 200 120',
  width: '100%',
  height: '100%',
  fill: 'none',
  strokeWidth: 1.25,
  strokeLinecap: 'round',
}

export const ExpertiseIllo = (props: IlloProps) => (
  <svg {...defaults} {...props} aria-hidden>
    <circle cx='70' cy='60' r='34' stroke={ORANGE} />
    <circle cx='130' cy='60' r='34' stroke={BLUE} />
    <line x1='70' y1='60' x2='130' y2='60' stroke={BLUE} strokeDasharray='3 4' />
    <line x1='50' y1='30' x2='150' y2='90' stroke={BLUE} strokeDasharray='3 4' />
    <circle cx='70' cy='60' r='3' fill={ORANGE} stroke='none' />
    <circle cx='130' cy='60' r='3' fill={BLUE} stroke='none' />
  </svg>
)

export const ScaleIllo = (props: IlloProps) => (
  <svg {...defaults} {...props} aria-hidden>
    <rect x='20' y='30' width='160' height='60' stroke={ORANGE} />
    <rect x='36' y='40' width='128' height='40' stroke={BLUE} />
    <rect x='52' y='50' width='96' height='20' stroke={BLUE} />
    {/* corner coord markers */}
    <g stroke={BLUE}>
      <line x1='14' y1='30' x2='20' y2='30' /><line x1='20' y1='24' x2='20' y2='30' />
      <line x1='186' y1='30' x2='180' y2='30' /><line x1='180' y1='24' x2='180' y2='30' />
      <line x1='14' y1='90' x2='20' y2='90' /><line x1='20' y1='96' x2='20' y2='90' />
      <line x1='186' y1='90' x2='180' y2='90' /><line x1='180' y1='96' x2='180' y2='90' />
    </g>
  </svg>
)

export const TimeboxIllo = (props: IlloProps) => (
  <svg {...defaults} {...props} aria-hidden>
    <line x1='20' y1='60' x2='180' y2='60' stroke={BLUE} />
    {[20, 60, 100, 140, 180].map((x) => (
      <line key={x} x1={x} y1='52' x2={x} y2='68' stroke={ORANGE} />
    ))}
    <line x1='20' y1='44' x2='60' y2='44' stroke={ORANGE} strokeDasharray='2 3' />
    <line x1='60' y1='44' x2='140' y2='44' stroke={ORANGE} />
    <line x1='140' y1='44' x2='180' y2='44' stroke={ORANGE} strokeDasharray='2 3' />
    <text x='20' y='86' fontFamily='var(--font-mono)' fontSize='8' letterSpacing='1' fill={BLUE}>5D</text>
    <text x='100' y='86' fontFamily='var(--font-mono)' fontSize='8' letterSpacing='1' fill={BLUE} textAnchor='middle'>15D</text>
    <text x='180' y='86' fontFamily='var(--font-mono)' fontSize='8' letterSpacing='1' fill={BLUE} textAnchor='end'>50D</text>
  </svg>
)

export const ProductionIllo = (props: IlloProps) => (
  <svg {...defaults} {...props} aria-hidden>
    <rect x='30' y='26' width='140' height='20' stroke={ORANGE} />
    <rect x='30' y='50' width='140' height='20' stroke={BLUE} />
    <rect x='30' y='74' width='140' height='20' stroke={BLUE} />
    <line x1='40' y1='36' x2='160' y2='36' stroke={ORANGE} strokeDasharray='2 3' />
    <line x1='40' y1='60' x2='160' y2='60' stroke={BLUE} strokeDasharray='2 3' />
    <line x1='40' y1='84' x2='160' y2='84' stroke={BLUE} strokeDasharray='2 3' />
    {/* seams */}
    <line x1='30' y1='46' x2='170' y2='46' stroke={BLUE} strokeDasharray='4 3' />
    <line x1='30' y1='70' x2='170' y2='70' stroke={BLUE} strokeDasharray='4 3' />
  </svg>
)
```

- [ ] **Step 2: Typecheck**

```bash
pnpm tsc --noEmit
```

Expected: pass.

- [ ] **Step 3: Commit**

```bash
git add src/app/v11/_components/DuotoneIllustration.tsx
git commit -m "$(cat <<'EOF'
V11: duotone line-illustration library for beige sections

Four hairline-only SVGs (expertise, scale, timebox, production) in
orange + blue. No fills, no gradients — pure lines per spec §9 and
Kavya's Palantir-style direction.

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

### Task 17: Rewrite `WhyDbiz` (beige)

**Files:**
- Modify: `src/app/v11/_components/WhyDbiz.tsx`

- [ ] **Step 1: Replace `WhyDbiz.tsx`**

```tsx
import {
  ExpertiseIllo,
  ScaleIllo,
  TimeboxIllo,
  ProductionIllo,
} from './DuotoneIllustration'

const reasons = [
  {
    coord: 'W·01',
    title: 'Expertise that works together',
    body: 'Strategy, data, engineering, and operations under one roof, with one delivery cadence. The studio that specs a system is the team that ships it.',
    Illo: ExpertiseIllo,
  },
  {
    coord: 'W·02',
    title: 'Transformation at scale',
    body: '50+ enterprise clients. 150+ solutions in production. Six countries. We have built the muscle to industrialise AI across thousands of workflows.',
    Illo: ScaleIllo,
  },
  {
    coord: 'W·03',
    title: 'Time-boxed delivery. Every engagement.',
    body: '5 days to validate, 15 days to MVP, 50 days to production. Milestones are promises. Paperwork is not the product.',
    Illo: TimeboxIllo,
  },
  {
    coord: 'W·04',
    title: 'Production platforms. Not presentations.',
    body: 'We deliver platforms your team operates, not decks to read. Handover is a feature; perpetual engineering is the practice that keeps them sharp.',
    Illo: ProductionIllo,
  },
] as const

export const WhyDbiz = () => (
  <section data-surface='beige' className='bp-section'>
    <div className='bp-container'>
      <div className='bp-section-head'>
        <div className='bp-kicker'>N·09 · Why enterprises choose dBiz.</div>
        <h2>
          Why enterprises choose dBiz.{' '}
          <em>Four reasons — all evidenced by delivery, not brochures.</em>
        </h2>
      </div>

      <div className='grid gap-6 md:grid-cols-2'>
        {reasons.map(({ coord, title, body, Illo }) => (
          <div key={coord} className='bp-card bp-frame-cell' style={{ maxWidth: 'none' }}>
            <span className='cell-bg' />
            <span className='cell-outline' />
            <div className='hd'>
              <span>Reason</span>
              <span className='k'>{coord}</span>
            </div>
            <div
              style={{
                height: 160,
                marginBottom: 20,
                border: '1px dashed var(--bp-hair)',
                padding: 16,
              }}
            >
              <Illo />
            </div>
            <h3>{title}</h3>
            <p>{body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)
```

- [ ] **Step 2: Verify**

Open `http://localhost:5555/v11`. Expected:
- Section flips to warm beige, navy ink, beige dot grid.
- Kicker `N·09 · Why enterprises choose dBiz.` (with period, not question mark).
- Headline "Why enterprises choose dBiz. *Four reasons — all evidenced by delivery, not brochures.*"
- 2×2 grid of 4 cards.
- Each card has a dashed hairline illustration frame containing an orange+blue line illustration (overlapping circles / nested rectangles / segmented bar / stacked slabs). Only hairlines — no fills, no gradients.
- No stat numbers anywhere in this section.
- Hover a card → beige cell light brightens around it.

- [ ] **Step 3: Lint + commit**

```bash
pnpm lint
git add src/app/v11/_components/WhyDbiz.tsx
git commit -m "$(cat <<'EOF'
V11: Why dBiz — beige surface, 4 duotone-line cards (statement not stats)

Replaces the glow-era numbered stat treatment. Each card pairs a
duotone orange+blue line illustration with a statement body — per
Kavya's 'illustrative, not numbered' direction. Kicker ends with a
period, not a question mark.

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Phase 9 — Close

### Task 18: Rewrite `CtaSection`

**Files:**
- Modify: `src/app/v11/_components/CtaSection.tsx`

- [ ] **Step 1: Replace `CtaSection.tsx`**

```tsx
import { Icon } from '@/components/icon'

export const CtaSection = () => (
  <section id='cta' className='bp-section' style={{ paddingTop: 'clamp(96px, 12vw, 160px)', paddingBottom: 'clamp(96px, 12vw, 160px)' }}>
    <div className='bp-container'>
      <div className='bp-section-head' style={{ textAlign: 'center', margin: '0 auto 48px', maxWidth: 720 }}>
        <div className='bp-kicker' style={{ justifyContent: 'center' }}>
          N·10 · Contact
        </div>
        <h2>
          Start with a <em>working week.</em>
        </h2>
        <p className='lead' style={{ margin: '0 auto' }}>
          5 days to validate. 15 days to MVP. 50 days to production.
        </p>
      </div>
      <div className='flex flex-wrap items-center justify-center gap-4'>
        <a href='mailto:hello@dbiz.ai' className='bp-btn'>
          Talk to a lead <Icon icon='ph:arrow-right-bold' width={14} />
        </a>
        <a href='#framework' className='bp-btn-ghost'>
          Read the brief <Icon icon='ph:arrow-up-right-bold' width={12} />
        </a>
      </div>
    </div>
  </section>
)
```

- [ ] **Step 2: Verify**

Open `http://localhost:5555/v11`. Expected:
- Navy-deep CTA section near the bottom.
- Kicker `N·10 · Contact`.
- Centered headline "Start with a *working week.*" with italic orange.
- Subtext "5 days to validate. 15 days to MVP. 50 days to production."
- Primary `bp-btn` "Talk to a lead" + ghost "Read the brief".
- No `cta-visual.jpg` background.

- [ ] **Step 3: Lint + commit**

```bash
pnpm lint
git add src/app/v11/_components/CtaSection.tsx
git commit -m "$(cat <<'EOF'
V11: CTA — blueprint paper, buttons-only (no glow jpg)

Deferred inline form per spec §10 open question — buttons-only
acceptable for UAT. Cadence numbers correct (5/15/50).

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

### Task 19: Final page composition

**Files:**
- Modify: `src/app/v11/page.tsx`

- [ ] **Step 1: Rewrite `page.tsx` with final section order**

```tsx
import { Navbar } from './_components/Navbar'
import { HeroSection } from './_components/HeroSection'
import { TrustBar } from './_components/TrustBar'
import { StatsSection } from './_components/StatsSection'
import { CapabilitiesSection } from './_components/CapabilitiesSection'
import { AiFrameworkSection } from './_components/AiFrameworkSection'
import { TestimonialSection } from './_components/TestimonialSection'
import { ProvenSection } from './_components/ProvenSection'
import { HowWeWork } from './_components/HowWeWork'
import { WhyDbiz } from './_components/WhyDbiz'
import { CtaSection } from './_components/CtaSection'
import { Footer } from './_components/Footer'

export default function V11Page() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <TrustBar />
      <StatsSection />
      <CapabilitiesSection />
      <AiFrameworkSection />
      <TestimonialSection />
      <ProvenSection />
      <HowWeWork />
      <WhyDbiz />
      <CtaSection />
      <Footer />
    </>
  )
}
```

Section sequence per spec §Section-by-section:
1. Hero · 2. Trust · 3. Stats · 4. Capabilities · 5. AI Framework · 6. Testimonial (BEIGE) · 7. Proven · 8. How We Work · 9. Why DBiz (BEIGE) · 10. CTA · Footer.

- [ ] **Step 2: Typecheck + lint**

```bash
pnpm tsc --noEmit
pnpm lint
```

Expected: both pass. If any import resolves to a file that was deleted (`FrontierSection`, `ExpertiseSection`), fix it by re-checking earlier tasks' deletions.

- [ ] **Step 3: Full-page visual check**

Open `http://localhost:5555/v11`. Scroll top to bottom. Verify every section renders in the correct order with no broken layouts, no "Cannot find module" overlays, no missing images (the only legitimate image references are the Iconify icons).

- [ ] **Step 4: Commit**

```bash
git add src/app/v11/page.tsx
git commit -m "$(cat <<'EOF'
V11: final page composition — 10 sections in spec order

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Phase 10 — Polish

### Task 20: Responsive + reduced-motion + accessibility pass

**Goal:** Verify every breakpoint, confirm reduced-motion works, check lint and Lighthouse, and catch any remaining reference to the old glow tokens.

- [ ] **Step 1: Grep for leftover `v11-*` token references (non-scope)**

```bash
grep -rn "v11-primary\|v11-muted\|v11-navy\|v11-card\|v11-accent\|v11-border\|v11-foreground\|v11-background\|v11-orange-hover" src/app/v11/ || echo OK
```

Expected: only references should be CSS variable definitions inside `theme.css` (e.g. `--v11-duotone-orange`, `--v11-ease`, `--v11-dur-fast`). Any references inside component JSX to `v11-primary`, `v11-muted-foreground`, etc., need to be replaced with `bp-*` classes or inline `style` referencing `var(--bp-*)`. If `grep` returns nothing, move on.

- [ ] **Step 2: Grep for hero-glow.jpg, cta-visual.jpg, frontier-visual.jpg, workflow-illustration.png**

```bash
grep -rn "hero-glow\|cta-visual\|frontier-visual\|workflow-illustration" src/app/v11/ || echo OK
```

Expected: no matches. The JPG/PNG assets stay in `public/v11/` (we don't delete them — other variants may reuse), but no v11 component should reference them. If grep finds matches, open those files and remove the reference.

- [ ] **Step 3: Responsive check — 4 breakpoints**

Open `http://localhost:5555/v11` in Chrome DevTools. For each width, scroll full-page and confirm:

- **375px (mobile):** Nav collapses to hamburger. Hero stacks (copy above SVG). Stats = 1 col or 2×2. Capabilities cards = 1 col, pills wrap. AI Framework scrolls horizontally in its SVG container (cannot collapse to vertical in this build — that was the spec's "below lg" behavior; acceptable here since AI Framework is `<svg viewBox>` and scales). Proven strip scrolls. Cadence stacks. Why DBiz = 1 col. CTA centered.
- **768px (tablet):** Nav still hamburger. Hero still stacks. Stats = 2×2 or 2 cols. Capabilities = 2 cols. AI Framework scrolls horizontally. Proven strip scrolls. Cadence = 3 cols. Why DBiz = 2 cols.
- **1024px (small desktop):** Full nav. Hero side-by-side. Stats 4 cols. Capabilities 4 cols. AI Framework still needs horizontal scroll (wider than 1200 viewBox). Cadence 3 cols. Why DBiz 2 cols.
- **1440px+ (desktop):** AI Framework renders full horizontal without scroll. Everything else fully expanded.

Take notes on anything that looks broken. If any issue blocks, fix it in a small dedicated step before moving on.

- [ ] **Step 4: Reduced-motion check**

On macOS: System Settings → Accessibility → Display → Reduce Motion **on**. Reload `http://localhost:5555/v11`. Expected:
- Stats counters snap to final values instantly.
- Capabilities spotlight does not auto-advance.
- Testimonial carousel does not auto-cycle.
- TrustBar marquee still scrolls at reduced rate (CSS `animation-duration: 0.001ms` in the reduced-motion block basically freezes it — acceptable).

Turn Reduce Motion off.

- [ ] **Step 5: Keyboard-only walkthrough**

Keyboard Tab from the top of `http://localhost:5555/v11` to the bottom. Confirm:
- Every link, button, tab, pill, card (capabilities), framework layer (SVG `<g role='button'>`) is reachable.
- Focus ring visible on each focused element.
- Enter/Space activates buttons/tabs/pills.
- Arrow keys: (a) within AI Framework move focus between layers. (b) within tablist (capabilities tabs) move between tabs (native `role='tablist'` handles this if focus is within).

- [ ] **Step 6: Run lint and typecheck one last time**

```bash
pnpm lint
pnpm tsc --noEmit
```

Expected: both pass.

- [ ] **Step 7: Lighthouse**

In Chrome DevTools → Lighthouse → Desktop → Run analysis on `http://localhost:5555/v11`. Target scores:
- Accessibility ≥ 95
- Best Practices ≥ 95
- CLS (Cumulative Layout Shift) < 0.05

If accessibility drops below 95, open the audit details, fix any critical issues (likely color-contrast on a specific element or missing `alt` on an image), and re-run.

- [ ] **Step 8: Screenshot and send to user**

Take full-page screenshots at 1440 and 375 widths. Drop them in the reply to the user along with a handoff summary. Consider also using Playwright to capture both widths automatically:

```bash
# Optional: use the playwright MCP to grab screenshots if available.
# Otherwise, take them manually in Chrome's device toolbar.
```

- [ ] **Step 9: Final commit + summary**

```bash
pnpm lint
pnpm tsc --noEmit
git log --oneline -30
git status
```

Write a short handoff summary in the reply, noting:
- Any deferred items from Appendix C (testimonial copy, form wiring, real logos)
- Any responsive issues found and fixed vs. deferred
- Lighthouse scores
- Remaining items before Kavya UAT

If everything is clean, commit no changes (the previous task's commit was the last real change). If fixes were needed during polish, commit them:

```bash
git add [...affected files...]
git commit -m "$(cat <<'EOF'
V11: polish pass — responsive, reduced-motion, accessibility

[describe each specific fix]

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Self-review checklist

After completing all tasks, run through the spec section by section and confirm:

- [ ] §1 Hero — meta strip + eyebrow + headline + tagline + lede + buttons + inline SVG (no hero-glow.jpg)
- [ ] §2 Trust bar — kicker + marquee + subcaption
- [ ] §3 Stats — 4 cards: 50+, 150+, 6, 500+ (no "10+ years delivery")
- [ ] §4 Capabilities — 3 tabs + pill filter + auto-spotlight (4.5s, pause on hover, cards not dimmed)
- [ ] §5 AI Framework — horizontal 4-layer exploded SVG + hover-to-focus + side panel + keyboard
- [ ] §6 Testimonial — BEIGE, carousel, 6s, pause on hover, PREV/NEXT mono
- [ ] §7 Proven — scroll-snap strip, 7 cards, pill axis filter, mono prev/next
- [ ] §8 How We Work — 5/15/50 days, horizontal rail (no 90 days anywhere)
- [ ] §9 Why DBiz — BEIGE, 4 cards, period not question mark, duotone orange+blue line illos
- [ ] §10 CTA — navy-deep, "Start with a working week.", 5/15/50 subtext
- [ ] Footer — 5 cols, hatch divider, meta strip with REV
- [ ] Logo casing: "dBiz" everywhere (nav, footer, body copy)
- [ ] Grid overlay: base dots visible on navy, beige sections use beige-tinted dots
- [ ] Per-card hover cell-light works on every `.bp-frame-cell`
- [ ] `versions.ts` has `v11` entry with `status: 'draft'`
- [ ] `public/v11/*.jpg`, `*.png` unused by v11 but preserved
- [ ] `pnpm lint` passes
- [ ] `pnpm tsc --noEmit` passes
- [ ] Lighthouse accessibility ≥ 95
- [ ] Reduced-motion disables auto-cycles and counter animations

If any item unchecked, return to the relevant task and fix.

---

## Execution handoff

After all tasks complete, report back to the user with:
- Final section count and what's in each
- Any open questions that surfaced during implementation (Appendix C items)
- Commit range for easy review (`git log --oneline main..HEAD`)
- A screenshot at 1440px width
- A note on what's deferred vs. done vs. needs-UAT-decision

*End of plan · V11 Frontier · REV 2026-04-15*
