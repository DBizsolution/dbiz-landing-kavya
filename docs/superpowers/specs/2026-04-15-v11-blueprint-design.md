# V11 — Frontier: Blueprint Homepage

**Spec** · REV 2026-04-15 · Author: Rahul + Claude · Reviewer: Kavya (UAT Friday)
**Brief:** `/Users/rahul/Downloads/dbiz-homepage-claude-code-prompt.md`
**Deploy target:** home.dbiz.com (Vercel, existing project)
**Internal review:** Thursday evening · **Leadership UAT:** Friday

---

## Purpose

Consolidate every DBiz homepage iteration into one production-ready variant that Kavya/GK/Anoop signed off on in review: **V5 Blueprint aesthetic** (dark navy paper, orange hairlines, A·01 coordinate markers, dotted grid, angle-bracket corners) applied to **V4 Swiss content** (the reviewed/approved copy), with **corrected stats**, a **new horizontal AI Transformation Framework**, and **cycling capabilities with pill filters**. Two warm-beige palette breaks soften the dark-mode identity and ease transition to the existing light-themed inner pages.

The existing `src/app/v11/` scaffolding — ported from a Lovable/Vite "dbiz-glow" app — provides the component skeleton and a `GeometricIcon` library of intricate SVGs. We keep the skeleton and the icons, and rewrite everything else to the Blueprint vocabulary defined in `src/app/styleguide/blueprint/`.

## Non-goals

- No changes to existing inner-page URLs or routes. V11 lives at `/v11` until promoted.
- No supply-chain integration (analytics, CRM, form backends) — buttons are wired statically.
- No new product pages for Nexus / Perpetual Engineering / Feature Studio / TechOffice Foundry mentions. These are named on the homepage; detail pages come later.
- No replacement of the existing V5 Blueprint variant at `/v5` — it stays as a reference.
- No client logo procurement — use the existing grayscale placeholders from V4 (or synthesized SVGs if missing).

## Scope decisions (brainstorming outcomes)

| Decision | Resolved |
|---|---|
| Scaffolding treatment | Rewrite styles + tokens to Blueprint; keep the component skeleton + GeometricIcon library. No demolition. |
| AI Transformation Framework interactivity | **Hover-to-focus**: static at rest, hovering/focusing a layer dims the other three and populates a side panel with its full product list. No scroll-hijack, no parallax. |
| Grid overlay hover behavior | **Per-card enclosing-cell lighting**: grid dots brighten behind hovered cards; faint orange hairline rectangle traces the cell. Pure CSS. No cursor-follow spotlight. |
| Capabilities section mechanic | **Pill-filtered grid with auto-advancing spotlight**: all filtered cards visible, one card gets spotlight treatment, spotlight advances every 4.5s (pause on hover/focus/interaction, `prefers-reduced-motion`). |
| Light-section placement | **Two breaks**: Testimonials (§6) + Why DBiz (§9). Rest of page stays dark blueprint. |
| Logo casing | **"dBiz"** (lowercase-d, capital-B). Applied consistently in nav, footer, inline copy. |
| Case-studies carousel style | **Scroll-snap strip with mono prev/next markers**: native horizontal scroll + snap points, small `← PREV · 01/07 · NEXT →` mono links for discoverability. No heavy arrow buttons, no pagination dots on desktop. |

## Architecture

### Route and file structure

```
src/app/v11/
  layout.tsx                 (imports theme.css, wraps in .v11-scope)
  page.tsx                   (composes 10 sections + BlueprintGrid overlay)
  theme.css                  (REWRITTEN — Blueprint vocabulary + v11-local motion vars)
  _components/
    Navbar.tsx               (rewritten — bp-nav, dBiz wordmark, nav links, CTA)
    HeroSection.tsx          (rewritten — left copy column + right inline blueprint SVG)
    TrustBar.tsx             (grayscale client-logo marquee, 40s loop)
    StatsSection.tsx         (corrected 4 stats with on-scroll counters; salvages counter from existing)
    CapabilitiesSection.tsx  (NEW — replaces existing ExpertiseSection. Tabs + pills + spotlight cycle.)
    AiFrameworkSection.tsx   (NEW — replaces existing FrontierSection. Horizontal exploded 4-layer diagram.)
    AiFrameworkDiagram.tsx   (NEW — the SVG + hover-to-focus state machine)
    TestimonialSection.tsx   (rewritten — BEIGE surface, carousel, cycling)
    ProvenSection.tsx        (NEW — scroll-snap card strip, pill filters, mono prev/next)
    HowWeWork.tsx            (rewritten — horizontal 5d/15d/50d timeline, animated rail)
    WhyDbiz.tsx              (rewritten — BEIGE surface, 4-card grid with duotone illos)
    CtaSection.tsx           (rewritten — navy-deep, bp-btn, optional inline form)
    Footer.tsx               (rewritten — 4-column navy-deep, mono annotations)
    BlueprintGrid.tsx        (NEW — dotted background overlay + container guide rules)
    DuotoneIllustration.tsx  (NEW — library of orange+blue line illustrations for beige sections)
    GeometricIcon.tsx        (KEPT — existing Lovable SVG library; adapt classes for bp scope)
```

**Removed from scaffolding:**
- `FrontierSection.tsx` → replaced entirely by `AiFrameworkSection.tsx` (and its diagram component).
- `ExpertiseSection.tsx` → folded into `CapabilitiesSection.tsx` (same role, new mechanic).

**Kept from scaffolding (skeleton only; internals rewritten):**
- Navbar, HeroSection, TrustBar, StatsSection, TestimonialSection, HowWeWork, WhyDbiz, CtaSection, Footer, GeometricIcon.

**New files:** `BlueprintGrid`, `DuotoneIllustration`, `AiFrameworkSection`, `AiFrameworkDiagram`, `CapabilitiesSection`, `ProvenSection`.

### Index registration

Add entry to `src/lib/versions.ts`:
```ts
{
  slug: 'v11',
  name: 'V11 — Frontier',
  tagline: 'V5 Blueprint ethos, V4 content, cycling capabilities, horizontal framework',
  status: 'draft',
}
```

### Token and theme strategy

All brand hexes and font families reference CSS variables from `src/app/globals.css` per `BRAND.md`.

In `src/app/v11/theme.css`:

**Scope:** `.v11-scope { /* all v11 styles */ }` — prevents bleed.

**Variant-local tokens (all chain to brand tokens):**
```css
.v11-scope {
  --v11-paper:        var(--brand-navy-deep);
  --v11-paper-raised: var(--brand-navy);
  --v11-ink:          #ffffff;
  --v11-ink-2:        rgba(255, 255, 255, 0.72);
  --v11-ink-3:        rgba(255, 255, 255, 0.48);
  --v11-ink-4:        rgba(255, 255, 255, 0.22);
  --v11-hair:         rgba(255, 255, 255, 0.08);
  --v11-hair-strong:  rgba(255, 255, 255, 0.16);
  --v11-accent:       var(--brand-orange);
  --v11-accent-hover: var(--brand-orange-hover);
  --v11-orange-glow:  var(--brand-orange-glow);
  --v11-orange-hair:  rgba(232, 106, 42, 0.32);
  --v11-beige:        var(--brand-bg-warm);
  --v11-duotone-orange: #f97316;   /* Tailwind orange-500 — local derivation for line illos */
  --v11-duotone-blue:   #3b82f6;   /* Tailwind blue-500 — local derivation for line illos */
  --v11-ease:         cubic-bezier(0.4, 0, 0.2, 1);
  --v11-dur-fast:     300ms;
  --v11-dur-slow:     800ms;
  --v11-grid-pitch:   24px;
}
```

**Light-surface variant** — activated by `[data-surface='beige']` on a section wrapper:
```css
.v11-scope [data-surface='beige'] {
  --v11-paper:       var(--brand-bg-warm);
  --v11-ink:         #1d1b17;
  --v11-ink-2:       rgba(29, 27, 23, 0.72);
  --v11-ink-3:       rgba(29, 27, 23, 0.48);
  --v11-hair:        rgba(29, 27, 23, 0.08);
  --v11-hair-strong: rgba(29, 27, 23, 0.16);
}
```

**Utility classes** copied from `src/app/styleguide/blueprint/theme.css` (so v11 is self-contained):
`.bp-mono`, `.bp-coord`, `.bp-marker`, `.bp-frame`, `.bp-kicker`, `.bp-eyebrow`, `.bp-btn`, `.bp-btn-ghost`, `.bp-btn-text`, `.bp-tag`, `.bp-badge`, `.bp-card`, `.bp-hatch`, `.bp-section`, `.bp-container`, `.bp-field`, `.bp-input`, `.bp-surface`, `.bp-title`, `.bp-lede`, `.bp-section-head`, plus the angle-bracket `::before`/`::after` corner pattern.

All class names stay prefixed with `bp-` but are defined under `.v11-scope` — they're scoped-copies, not a cross-variant import.

## Visual grid system

### BlueprintGrid overlay

- A fixed-position `<div>` at `z-index: -1`, `position: fixed`, `inset: 0`, `pointer-events: none`. Single element per page, rendered once at the root of `.v11-scope`. The `.v11-scope` root is `position: relative` with `z-index: 0` so the grid sits beneath all section content without each section needing explicit stacking.
- CSS: `background-image: radial-gradient(circle, var(--v11-ink-4) 1px, transparent 1px); background-size: 24px 24px;` — dotted grid.
- Faint coarser hairlines at 1/3 and 2/3 of container width drawn as `::before`/`::after` on `.bp-container` (ported from styleguide).
- Disabled when `prefers-reduced-motion: reduce` or container width < 640px (mobile) — falls back to a solid navy backdrop.

### Per-card hover cell lighting

- Every card-like element (stat card, capability card, case-study card, why-dbiz card, testimonial card) uses the `.bp-frame` class. On `:hover`:
  - `::before` pseudo-element (sized `inset: -16px`, behind card content) fades from `opacity: 0` to `opacity: 1` over 300ms. It carries a higher-opacity dot-grid backdrop (`radial-gradient … var(--v11-ink-2)`).
  - `::after` pseudo-element draws a 1px dashed orange hairline rectangle around the card's cell bounds (also `inset: -16px`), fades in over 300ms.
  - Card itself: `transform: translateY(-1px)`, 1px border color shifts `--v11-hair` → `--v11-orange-hair`.
- Keyboard parity: `:focus-visible` triggers the same treatment.
- No JS. No mousemove. No shadow blur (stays quiet).

## Section-by-section

### §1 Hero
- Surface: navy-deep. Top strip: `DBiz · REV 2026-04-15 · SHEET 01/01 · SCALE 1:1` as a meta bar.
- Two columns on `md+`; stacked on mobile.
- **Left (~60%)**:
  - Eyebrow: `[N·01] · HOMEPAGE · REV 2026-04-15` (bp-marker row).
  - Mono label: `HUMAN-LED · AGENT-OPERATED · DATA-POWERED`.
  - Headline (bp-title): "Your enterprise. *Agent-operated.* Starting now." — Instrument Serif italic orange for "Agent-operated." (BRAND.md Instrument Serif rule.)
  - Lede (bp-lede): "Most enterprises have tried AI. Most of it didn't scale — not because the technology failed, but because no one connected ambition to what actually got built. We close that gap. We call the result a Frontier Organisation: human-led, agent-operated, data-powered." (V4 verbatim.)
  - Buttons: primary `bp-btn` "Talk to a lead → " + ghost `bp-btn-ghost` "Read the brief".
- **Right (~40%)**: inline SVG — blueprint mini-diagram. 4 stacked architectural layers (Strategy · Cloud · Data · AI) with mono `A·01`–`A·04` labels, orange hairline edges, a center orbital node, dashed crosshairs. Enter animation: stroke-draw, staggered 150ms. Replaces `hero-glow.jpg`.
- Remove reference to `hero-glow.jpg`.

### §2 Trust bar
- Surface: navy.
- Mono kicker `[N·02] · TRUSTED BY`.
- Marquee of 10–12 grayscale SVG client logos. 40s linear loop. Pauses on hover.
- Sub-caption (mono): `50+ ENTERPRISES · 6 COUNTRIES`.
- Logo assets: reuse from `src/components/` if present; otherwise synthesize simple SVG placeholders.

### §3 Stats
- Surface: navy.
- Mono kicker `[N·03] · BY THE NUMBERS`.
- 4 stat cards in a row (desktop) / 2×2 (tablet) / stacked (mobile):
  - `S·01` **50+** Enterprise clients
  - `S·02` **150+** Solutions in production
  - `S·03` **6** Countries
  - `S·04` **500+** Engineers
- Numbers animate from 0 on IntersectionObserver (salvage from existing `StatsSection.tsx`).
- Each card: `.bp-card` shell, dashed header rule, coord marker in top-right, big DM Sans 800 number, mono sub-label.
- Removes "10+ years delivery" completely — no ghost reference.
- Hover cell-light behavior (CSS only).

### §4 Capabilities
- Surface: navy.
- Mono kicker `[N·04] · CAPABILITIES`.
- Headline (bp-title): "The AI gap every enterprise hits. *And how we close it.*" (V4 verbatim).
- **Tab row** (segmented control, 3 tabs): `By Industry` | `By Solution` | `By Technology`. Default: Industry.
  - Implemented with `role="tablist"` semantics. Arrow keys cycle. `aria-selected`, `aria-controls`, `aria-labelledby`.
- **Pill filter row** (per tab, narrows card pool):
  - Industry: All · Financial Services · Logistics · Real Estate · Aged Care · Retail · Public Sector · High-street Banking
  - Solution: All · Data Platform · Agentic AI · Integration · Product & Experience · Managed Services · Governance
  - Technology: All · Cloud · Data Platforms · Integration · Business Apps · AI Models
- **Card grid**: 4 cols (desktop) / 2 cols (tablet) / 1 col (mobile). Auto-rows. Gap 24px.
- **Card template**: kicker `K·NN` coord, category tag, GeometricIcon (top), title (h3), 2-line body, metric/tag row. `.bp-frame` hover.
- **Spotlight state machine**:
  - `spotlightIndex` advances every **4500ms**.
  - Pause triggers: `:hover` within section, any `:focus-visible` inside section, `prefers-reduced-motion: reduce`, tab/pill click.
  - Resume: 2s after pause trigger clears (using `setTimeout` + cleanup on unmount).
  - On index change: spotlighted card gets additive treatment — brighter border, angle-brackets draw in, dot-grid backdrop lights (same as hover), kicker color flips to accent.
  - Non-spotlighted cards remain at rest (no dimming — Kavya: "cards should stand on their own").
  - Transition: 300ms cross-fade.
- **Progress dots** below grid: one dot per card in filtered pool. Active as `◆`, others as `●`. Click to jump → pauses 8s.
- **Card content source**: V4 content expanded from 3 to ~8 industry, ~6 solution, ~10 tech cards. Specific cards listed in appendix A.
- **Aria-live**: a `role="status"` `aria-live="polite"` region announces the current spotlighted card title to screen readers.

### §5 AI Transformation Framework
- Surface: navy.
- Mono kicker `[N·05] · THE FRAMEWORK`.
- Headline (bp-title): "The stack we build on. *Human-led, agent-operated, data-powered.*"
- Lede: "Four layers. One continuous system. Strategy sets direction. Cloud gives it a floor. Development turns it into software. Productivity puts it to work."
- **Diagram**: `AiFrameworkDiagram.tsx` — single SVG, `viewBox='0 0 1200 560'`, full container width at `lg+`.
- Four layer slabs, left-to-right, with slight 2.5D isometric shear (~15°), gaps between:

  | Layer | Coord | Theme | Tiles (mono labels, each with GeometricIcon) |
  |---|---|---|---|
  | Strategy & Architecture | L·01 | Human-led | Futures Studio · TechOffice Foundry · Enterprise Architecture · Architecture-as-a-Service |
  | Cloud Foundation | L·02 | Neutral | Compute · Data · Identity · Network · Governance |
  | Development | L·03 | Agent-operated | DBiz Canvas · Agent Studio · Spec-driven Dev · Dev Tooling |
  | Productivity / Platforms | L·04 | Data-powered | Automation · Orchestration · Data Insights · Decision Intelligence |

- **Each slab**:
  - Front face: 1px orange hairline rectangle, ~240×320.
  - Depth: 3–4 receding parallel hairlines behind (suggests 3D side face).
  - Header row: coord marker + layer name.
  - Tile grid inside: 4–6 1px hairline rectangles with GeometricIcon + mono label.
  - Footer row: one-line caption, mono.
- **Arrows between slabs**: orange hairline arrow glyph; mono labels above gaps: `HAND·OFF`, `DEPLOY`, `OPERATE`.
- **Floating annotations** (dashed leader lines):
  - Top: `NEXUS PLATFORM` → spans layers 2–3.
  - Top: `PERPETUAL ENGINEERING` → leader to layer 3.
  - Bottom axis: `HUMAN-LED ──── AGENT-OPERATED ──── DATA-POWERED` with tick marks under respective layers.
- **Cloud Foundation neutrality** — explicitly no AWS/Azure/GCP labels. Tiles name capability primitives. Caption: "Deploys on the right cloud for each workload · hyperscaler-neutral".
- **Hover-to-focus behavior** (see `AiFrameworkDiagram.tsx` state):
  - `focusedLayer: 0..3 | null`.
  - At rest (`null`): all layers at full stroke opacity (100% on primary lines, 40% on depth lines).
  - On hover/focus of a layer (React state + pointer events):
    - Focused layer: `--v11-accent` at 100%, `filter: drop-shadow(0 0 8px rgba(232,106,42,0.4))`, tile outlines strengthen to 100%.
    - Other three: `opacity: 0.35`, stroke-opacity 20%.
    - A side panel (absolute, top-right of section on desktop, below diagram on mobile) populates with: layer name (h3), full product list, 2-sentence description.
    - Relevant floating leader lines brighten.
  - On blur/leave: all restore over 300ms.
- **Keyboard**: each layer is `<g role='button' tabindex='0' aria-label='L·NN — [name]'>`. Arrow keys navigate. Enter/Space triggers focus state. Escape clears.
- **Enter animation** (on IntersectionObserver): stroke-draw slabs in sequence (200ms stagger, 600ms per draw), then arrows, then annotations. Total ~1.6s. Respects `prefers-reduced-motion`.
- **Responsive**: below `lg` (1200px), layers collapse to a vertical stack (still exploded, gaps preserved). Side panel becomes an inline expanded detail beneath the active slab. Below `md`, annotations simplify (drop floating leaders, keep inline captions).

### §6 Testimonial (BEIGE #1)
- Surface: **beige** — `[data-surface='beige']` wrapper flips ink/hair tokens.
- Mono kicker `[N·06] · VOICE OF THE PRACTICE`.
- One large framed quote card centered (`.bp-card` on beige), max-width 820px.
- Pull-quote in Instrument Serif italic, navy, ~1.8rem.
- Attribution in mono: name · role · company.
- **Carousel**: 4 testimonials. Cycle every 6s. Pause on hover/focus. `prefers-reduced-motion` disables auto-advance.
- Navigation: mono text `← PREV · 01/04 · NEXT →` beneath card. Arrow keys when focused. No dots.
- Duotone corner marks on card (tiny orange + blue hairline L-shapes) for palette-break signal.
- **Sources**:
  1. Priya Nair, Chief Data & AI Officer, Southern Cross Logistics (V4 verbatim).
  2. Synthesized — CIO, Fortune 200 insurer.
  3. Synthesized — CTO, global reinsurer.
  4. Synthesized — CEO, regional retailer.
  - All synthesized quotes marked as placeholders in source comments, flagged for copy-review.

### §7 Proven / Case Studies
- Surface: navy.
- Mono kicker `[N·07] · PROVEN WHERE IT MATTERS`.
- Headline (bp-title): "Proven where *it matters.*" (V4 verbatim).
- **Pill filter row** (single axis): `All · By Industry · By Solution · By Technology`. Pill click filters visible cards.
- **Scroll-snap strip**:
  - `overflow-x: auto; scroll-snap-type: x mandatory; scroll-padding-left: var(--container-padding);`
  - Cards: fixed width 360px, `scroll-snap-align: start`.
  - Overflows container into gutters (`margin-inline: calc(50% - 50vw + var(--container-padding))`) for "shelf" feel.
- **Cards (7 total)**:
  1. FS · 38% faster cycle time · Global insurer (V4)
  2. Logistics · $14M saved · Southern Cross Logistics (V4)
  3. Aged Care · 6× throughput (V4)
  4. Banking · 11 domains modernized · FactWeavers™
  5. Real Estate · 40+ agents in production · Agent Studio
  6. Retail · 5 days to validated MVP · DBiz Canvas
  7. Public Sector · 42% cycle-time reduction · FY26 H1
- Each card: `.bp-frame` shell, kicker `C·0N` + industry pill tag, GeometricIcon, title, one-liner, metric row in mono.
- Below strip: mono text `← PREV · 01 / 07 · NEXT →`. Click arrows scroll one card-width (`scrollBy({ left: ±cardWidth, behavior: 'smooth' })`).
- Native touch-drag on mobile/tablet.

### §8 How We Work
- Surface: navy.
- Mono kicker `[N·08] · CADENCE`.
- Headline (bp-title): "How we work. *Built for pace, not paperwork.*" (V4 verbatim).
- **Horizontal timeline**, 3 nodes connected by orange hairline rail:
  - `5 DAYS` · Align & Assess · outcomes: problem frame, north-star metrics, delivery plan.
  - `15 DAYS` · Specify & Validate · outcomes: validated spec, MVP scope, stakeholder signoff.
  - `50 DAYS` · Industrialise & Scale · outcomes: live platform, running agents, operations handover.
- Each node: large DM Sans 800 duration label (clamp 2.2–3.4rem), title (h3), 3-bullet outcome list in mono.
- Rail SVG: solid orange hairline between nodes, tick marks at each node, dashed segment extension beyond final node → mono label `PERPETUAL ENGINEERING CONTINUES…`.
- Enter animation: rail draws left-to-right (1.2s), nodes fade in staggered.
- **Replaces `90 Days` wherever it appears in the existing scaffolding with `50 Days`.**
- Below `lg`: collapses to vertical timeline.

### §9 Why DBiz (BEIGE #2)
- Surface: **beige** — `[data-surface='beige']` wrapper.
- Mono kicker `[N·09] · WHY ENTERPRISES CHOOSE DBIZ.` (**period, not question mark** per Kavya).
- Headline (bp-title): "Why enterprises choose DBiz. *Four reasons — all evidenced by delivery, not brochures.*"
- 2×2 grid of 4 statement cards, each topped with a **duotone orange+blue line illustration**:

  | Card | Headline | Illo description |
  |---|---|---|
  | W·01 | Expertise that works together | Overlapping circles with connecting hairlines. Orange for primary circle, blue for secondary, blue for connectors. No fills. |
  | W·02 | Transformation at scale | Nested rectangles opening outward. Orange outer frame, blue inner frames, blue coord markers at corners. |
  | W·03 | Time-boxed delivery. Every engagement. | Segmented bar with tick marks. Orange tick marks, blue baseline, blue labels. |
  | W·04 | Production platforms. Not presentations. | Stacked slab outlines (3 slabs). Orange top slab outline, blue middle, blue base. |

- Each illustration is a standalone SVG component in `DuotoneIllustration.tsx` with named exports (`<ExpertiseIllo />`, `<ScaleIllo />`, `<TimeboxIllo />`, `<ProductionIllo />`).
- **Hairlines only — no fills, no gradients. Exactly two colors: `--v11-duotone-orange` and `--v11-duotone-blue`.**
- Card body: DM Sans body copy (one paragraph per card, ~3 sentences). No metrics, no numbers, no stat counters.

### §10 CTA
- Surface: navy-deep, full-bleed.
- Mono kicker `[N·10] · CONTACT`.
- Centered block:
  - Instrument Serif italic phrase: "Start with a *working week.*"
  - Sub DM Sans body: "5 days to validate. 15 days to MVP. 50 days to production."
  - Buttons: primary `bp-btn` "Talk to a lead →", ghost `bp-btn-ghost` "Download brief".
- **Optional inline form** (decide during implementation — defer if time-pressured): work email `bp-input` + submit. If deferred, buttons-only is acceptable and the spec is satisfied.
- Replaces `cta-visual.jpg` background — CTA is blueprint paper, no photo.

### Footer
- Surface: navy-deep.
- 4 columns: **dBiz wordmark + tagline**, Company, Contact, Legal.
- Mono copy throughout (0.76rem).
- Navy hairline separators between columns.
- Copyright line with `REV 2026-04-15`.
- Contrast: ensure AA.

## Data model

Static content lives in `src/app/v11/_content/`:

```
_content/
  capabilities.ts   (cards for all 3 tabs, typed)
  cases.ts          (7 case-study cards)
  testimonials.ts   (4 quote entries)
  frameworkLayers.ts (4 AI-framework layer definitions)
  stats.ts          (4 stat entries)
```

Each file is a typed const-export consumed by its section component. No fetches, no dynamic data. This keeps the page a pure RSC render with only section components that need client interactivity (`'use client'`) opting in.

## Interactivity map

| Component | Runtime | Reason |
|---|---|---|
| `Navbar` | client | mobile menu toggle |
| `HeroSection` | server | static, with SVG enter animation done via CSS only |
| `TrustBar` | server | marquee is CSS-only |
| `StatsSection` | client | IntersectionObserver + counter animation |
| `CapabilitiesSection` | client | tabs, pills, spotlight timer |
| `AiFrameworkSection` | client | focus state + keyboard handling |
| `AiFrameworkDiagram` | client | same — imported as child |
| `TestimonialSection` | client | carousel timer |
| `ProvenSection` | client | scroll handlers for prev/next |
| `HowWeWork` | server | SVG animation is CSS-only |
| `WhyDbiz` | server | static |
| `CtaSection` | server (or client if form is added) | |
| `Footer` | server | static |
| `BlueprintGrid` | server | pure CSS |

## Animation budget

All animations globally gated by `@media (prefers-reduced-motion: no-preference)`. Under `reduce`, all motion degrades to opacity fade (or no animation).

| Animation | Duration | Trigger |
|---|---|---|
| Hero mini-diagram stroke-draw | 1.2s, 150ms stagger | mount |
| Stats counter | 1.6s | viewport enter |
| Spotlight cross-fade (capabilities) | 300ms | 4.5s interval |
| AI Framework slab stroke-draw | 600ms, 200ms stagger | viewport enter |
| AI Framework hover-focus transition | 300ms | pointer/keyboard |
| Testimonial cross-fade | 400ms | 6s interval |
| How We Work rail draw | 1.2s | viewport enter |
| Card hover cell-light | 300ms | `:hover` / `:focus-visible` |
| Enter fade-up for section heads | 500ms, 80ms stagger | viewport enter |

## Accessibility

- Color contrast AA minimum (navy-deep + ink-1 ≈ 18:1; beige + navy-ink ≈ 16:1).
- Keyboard: every interactive element reachable with Tab, operable with Enter/Space, visible focus ring (orange hairline outline; `:focus-visible` only).
- Screen reader: capabilities spotlight announced via `role='status' aria-live='polite'`.
- AI Framework layers are proper `<g role='button'>` with `aria-label` containing coord + name.
- Carousel respects `prefers-reduced-motion` — pauses auto-advance, keeps manual controls.
- No content conveyed by color alone — every colored signal also has text or icon.
- Skip-to-content link on the navbar.

## Responsive strategy

| Breakpoint | Behavior |
|---|---|
| `< 640` (mobile) | Single column. Grid overlay disabled. AI framework stacks vertically. Proven strip still scroll-snaps. Capabilities grid → 1 col. Pills wrap. |
| `640–960` (tablet) | 2-col layouts where appropriate. Grid overlay at reduced opacity. |
| `960–1200` | 3–4 col grids. AI framework still stacks vertically (it's a wide diagram; 1200+ needed for horizontal). |
| `≥ 1200` (desktop) | Full horizontal AI framework, 4-col capabilities grid, full grid overlay. |

Container padding: `clamp(24px, 4vw, 48px)`. Section vertical padding: `clamp(72px, 9vw, 120px)`. Grid pitch fixed at 24px.

## Testing strategy

This is visual work; TypeScript and ESLint catch structural issues but not UI correctness.

1. **Manual browser verification** at 4 widths (375, 768, 1024, 1440). Check every section visually.
2. **Interactive checks**:
   - Tabs switch, pills narrow pool, spotlight advances, spotlight pauses on hover.
   - AI Framework hover dims other layers, side panel updates, keyboard works.
   - Testimonial carousel cycles, prev/next work, pauses on hover.
   - Proven strip scrolls + snaps, prev/next button works.
   - All CTAs keyboard-focusable with visible focus ring.
3. **Reduced-motion**: toggle macOS reduce-motion, reload, verify no auto-cycling and no heavy transitions.
4. **Lighthouse**: accessibility ≥ 95, CLS < 0.05. Run before handing to Kavya.
5. **Lint + TypeScript**: `pnpm lint` clean (required by CLAUDE.md), `pnpm tsc --noEmit` clean.
6. **Cross-browser**: Chrome + Safari at minimum. Firefox if time.

## Implementation priority (Thursday deadline)

1. **Foundation** — theme.css rewrite, `BlueprintGrid`, page.tsx composition, versions.ts entry. (2h)
2. **Content files** — `_content/*.ts` scaffolded with V4 copy + corrected stats. (1h)
3. **Sections (rewrite in order)** — Navbar, Hero (with inline blueprint SVG), Trust, Stats, Footer. (3h)
4. **AI Framework** — diagram SVG + hover-to-focus. Largest net-new piece. (4h)
5. **Capabilities** — tabs, pills, spotlight cycle. (3h)
6. **Proven** — scroll-snap strip + pill filter + prev/next. (2h)
7. **How We Work** — horizontal timeline with animated rail. (1.5h)
8. **Testimonial** — beige surface, carousel. (1.5h)
9. **Why DBiz** — beige surface, 4 duotone illustrations. (3h — illustration work is detailed)
10. **CTA** — rewrite, decide on form. (0.5h)
11. **Polish pass** — responsive, accessibility, reduced-motion, Lighthouse. (3h)

Estimated total: **~25 hours of focused work**. Fits Thursday if started Monday.

## Out of scope (deferred)

- Final client logos (use placeholders).
- Form backend wiring.
- Testimonial copy beyond V4's one quote (synthesized placeholders, marked as such).
- Inner-page link targets for novel products.
- Analytics integration.
- Promotion of `/v11` to root `/` — a separate decision after UAT.

## Appendix A — Capabilities cards (content)

**Industry (8 cards)**
| Coord | Title | One-liner | Metric/tag |
|---|---|---|---|
| K·01 | Financial Services | 11 domains modernized across a global insurer, cycle times down 38%. | 38% faster |
| K·02 | Logistics & Fleet | $14M saved in year one through agent-operated routing. | $14M saved |
| K·03 | Real Estate | 40+ agents deployed across portfolio operations. | 40+ agents |
| K·04 | Aged Care | 6× throughput in clinical operations. | 6× throughput |
| K·05 | Retail | 5-day validated MVP, production in 50 days. | 5 days |
| K·06 | Public Sector | 42% cycle-time reduction in FY26 H1. | 42% faster |
| K·07 | High-street Banking | Core modernization + agent rollout on legacy platforms. | Core + agents |
| K·08 | Insurance | Claims triage automation, CSAT up 24 points. | +24 CSAT |

**Solution (6 cards)**
| Coord | Title | One-liner | Product |
|---|---|---|---|
| K·09 | Data Platform | Fact-graph data fabric across every domain. | FactWeavers™ |
| K·10 | Agentic AI | Production-grade agents, not demos. | Agent Studio |
| K·11 | Delivery Accelerator | Spec-driven dev on a shared design surface. | DBiz Canvas |
| K·12 | Navigation | Maturity assessment + roadmap in 5 days. | DBiz Compass |
| K·13 | Orchestration | Platform substrate that holds the system together. | Nexus Platform |
| K·14 | Managed Operations | Ongoing evolution, not maintenance. | Perpetual Engineering |

**Technology (10 cards)**
| Coord | Title | One-liner | Depth |
|---|---|---|---|
| K·15 | Cloud | Hyperscaler-neutral — deploys on the right cloud per workload. | Neutral |
| K·16 | Data Platforms | Snowflake, Databricks, Fabric, BigQuery. | 4 platforms |
| K·17 | Integration | Boomi, MuleSoft, Workato, n8n. | 4 stacks |
| K·18 | Business Apps | Salesforce, Dynamics 365, Power Platform. | 3 suites |
| K·19 | AI Models | Claude, GPT, Gemini, Bedrock, Azure OpenAI, Vertex. | 6 families |
| K·20 | Observability | Governed telemetry for agent workloads. | Built-in |
| K·21 | Identity | Enterprise IAM wired for agent access. | OIDC/SCIM |
| K·22 | Governance | AI risk + compliance frameworks. | Sovereign |
| K·23 | Edge | Low-latency inference at the edge. | Multi-region |
| K·24 | Security | Posture + supply-chain for agent-built software. | DevSecOps |

All coord markers are placeholders in the spec; actual assignment happens in `_content/capabilities.ts`.

## Appendix B — Files to change

**New:**
- `src/app/v11/_components/BlueprintGrid.tsx`
- `src/app/v11/_components/AiFrameworkSection.tsx`
- `src/app/v11/_components/AiFrameworkDiagram.tsx`
- `src/app/v11/_components/CapabilitiesSection.tsx`
- `src/app/v11/_components/ProvenSection.tsx`
- `src/app/v11/_components/DuotoneIllustration.tsx`
- `src/app/v11/_content/capabilities.ts`
- `src/app/v11/_content/cases.ts`
- `src/app/v11/_content/testimonials.ts`
- `src/app/v11/_content/frameworkLayers.ts`
- `src/app/v11/_content/stats.ts`

**Rewrite:**
- `src/app/v11/theme.css` (full rewrite to Blueprint vocabulary)
- `src/app/v11/page.tsx` (compose new section list)
- `src/app/v11/_components/Navbar.tsx`
- `src/app/v11/_components/HeroSection.tsx` (remove `hero-glow.jpg`, add inline SVG)
- `src/app/v11/_components/TrustBar.tsx`
- `src/app/v11/_components/StatsSection.tsx` (corrected stats, keep counter)
- `src/app/v11/_components/TestimonialSection.tsx` (beige, carousel)
- `src/app/v11/_components/HowWeWork.tsx` (90d→50d, horizontal rail)
- `src/app/v11/_components/WhyDbiz.tsx` (beige, duotone illos)
- `src/app/v11/_components/CtaSection.tsx` (remove `cta-visual.jpg`)
- `src/app/v11/_components/Footer.tsx`

**Delete:**
- `src/app/v11/_components/FrontierSection.tsx` (replaced by AiFrameworkSection)
- `src/app/v11/_components/ExpertiseSection.tsx` (folded into CapabilitiesSection)

**Edit (outside v11 scope):**
- `src/lib/versions.ts` (add v11 entry)

**Keep as-is:**
- `src/app/v11/layout.tsx` (already correct shape)
- `src/app/v11/_components/GeometricIcon.tsx` (adapt classes for bp scope; no structural change)
- `public/v11/industry-*.jpg` (available for optional decorative use in capability cards if time permits — not required)
- `public/v11/hero-glow.jpg`, `cta-visual.jpg`, `frontier-visual.jpg`, `workflow-illustration.png` — **unused by v11 after rewrite**; leave in place, no deletion (could be reused by other variants).

## Appendix C — Open questions flagged for UAT

1. Final client logos (placeholder vs. real).
2. Testimonial copy — synthesized placeholders flagged for replacement by Kavya/marketing.
3. CTA form wiring — static form acceptable for UAT? Or wire to existing contact endpoint?
4. Promotion of `/v11` to `/` — decision after UAT.
5. Whether to drop any of the 8 industry capability cards (some are synthesized from V4's shorter list).

---

*End of spec · DBiz · V11 Frontier · REV 2026-04-15*
