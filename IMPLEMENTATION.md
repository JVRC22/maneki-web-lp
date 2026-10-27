# MANEKI — Implementation Plan

## Constraints

- Keep React 19, JavaScript/JSX, Create React App, Framer Motion, Lucide React, React Hook Form, and custom CSS.
- Avoid framework migration, dependency upgrades, and unrelated refactors.
- Keep the single-page architecture unless a concrete content or accessibility need requires a small component split.
- Treat the current Sakura visual layer as an anti-reference while preserving useful behavior and data-driven patterns.

## P0 — Critical

| Task | Expected result | Affected files/components | Dependencies | Acceptance criteria |
|---|---|---|---|---|
| Restructure application content | Customer-facing IA replaces investor-pitch sequence. | `src/App.js`, component imports | Approved `PRODUCT.md` | Sections follow approved narrative; no investor-only content remains. |
| Establish Maneki identity | Ivory/ink foundation, approved wordmark, taglines, truthful copy. | `src/styles/globals.css`, `src/index.css`, `Navbar.jsx`, `Footer.jsx` | Final wordmark or approved fallback | No Sakura identity, unsupported location, or fake opening claim. |
| Rebuild navbar | Short navigation and functional mobile menu. | `Navbar.jsx`, global CSS | Final section IDs | Keyboard navigation, Escape, focus management, 44px targets, mobile tested. |
| Rebuild hero | Product-led Counter Edition composition. | `Hero.jsx`, global CSS, image data | Approved hero image or cleared fallback | Brand and proposition are understandable within five seconds; primary CTA reaches menu. |
| Implement complete menu | All documented categories, products, flavors, extras, combos, and classification. | `MenuShowcase.jsx`, `src/data/menu.js`, CSS | Final price approval or pending-price rendering | No documented item silently omitted; categories work on desktop/mobile. |
| Replace brand story | Concise fusion story, mission/vision only where customer-relevant. | `AboutSection.jsx` or replacement story component | Approved copy review | No fictional Sakura origin or unsupported financial targets. |
| Add Neko Neko introduction | Explain cultural inspiration and fictional character distinction. | New/reworked story component, data | Cleared mascot asset | Accessible, restrained illustration usage, culturally clear. |
| Add seasonal and merchandise sections | Required sections exist without false availability. | `ExperienceSection.jsx` or new sections, data | Content-status decisions | Concepts are visibly marked as proposed/unavailable when necessary. |
| Add Maneki Mini invitation | University proposition exists without fake contact. | `LeadForm.jsx` replacement or new CTA component | Verified phone/WhatsApp required for active link | No placeholder number, dead link, or implied active kiosk. |
| Truthful contact behavior | No localStorage-only VIP promise. | `LeadForm.jsx`, footer/contact component | Real backend or verified contact channel | No CRM, mailing-list, discount, or contact claim without mechanism. |
| Core responsive pass | Mobile-first composition works at 390px and desktop widths. | All redesigned components, global CSS | P0 layout | No horizontal overflow, clipping, hidden CTA, or unreadable menu. |

## P1 — High-impact refinement

| Task | Expected result | Affected files/components | Dependencies | Acceptance criteria |
|---|---|---|---|---|
| Product image integration | Approved product and Neko assets replace placeholders. | `src/data/images.js`, public asset paths, product components | Cleared assets | Correct crops, alt text, responsive loading, stable aspect ratios. |
| Image optimization | Smaller responsive image payload. | Public images and component attributes | Approved exports | Responsive sizes, no avoidable multi-megabyte images, no layout shift. |
| Editorial polish | Section-specific compositions and stronger rhythm. | Global CSS and section components | P0 visual baseline | No repeated SaaS card grid, glass, gradients, or decorative clutter. |
| Typography refinement | Archivo Black/DM Sans hierarchy is visually balanced. | Global CSS, document/head metadata | Fonts available/approved | Headlines do not clip or wrap awkwardly at required breakpoints. |
| Accessibility hardening | Focus, semantics, labels, and states are production-ready. | Navbar, menu controls, forms, all sections | P0 interaction model | Keyboard and reduced-motion checks pass; contrast verified. |
| Animation refinement | Purposeful Framer Motion only. | Components using `motion` | `useReducedMotion` strategy | No perpetual decorative movement; reduced motion renders final state. |

## P2 — Optional enhancements

| Task | Expected result | Affected files/components | Dependencies | Acceptance criteria |
|---|---|---|---|---|
| Collection interactions | Seasonal/collectible presentation feels richer. | Collection components and data | Confirmed collection content | No shopping implication without commerce support. |
| Mascot animation | One or two restrained Neko interactions. | Neko component, Framer Motion | Cleared artwork | Motion is optional, keyboard-safe, and disabled under reduced motion. |
| Menu transitions | Subtle filtering or category transitions. | Menu explorer | Complete menu data | Content remains accessible without animation or swipe. |
| Loyalty functionality | Real loyalty flow when approved. | New feature boundary | Backend and privacy approval | No localStorage-only customer-data promise. |

## Structural implementation order

1. Replace content model and section order.
2. Establish global tokens and typography.
3. Rebuild navbar and hero.
4. Implement the complete menu explorer.
5. Add story, Neko Neko, seasonal, collectibles, and Maneki Mini states.
6. Replace misleading lead capture/contact behavior.
7. Complete responsive and accessibility behavior.
8. Integrate cleared imagery and refine motion.

Keep implementation changes local to the existing section/component architecture. Do not rewrite the application around a new framework or design library.

## Skill invocation strategy

The installed skills and valid syntax are:

- **Impeccable:** run setup once with `/Users/jresendiz/.agents/skills/impeccable/scripts/impeccable context --target src`. For review, `$impeccable critique src` is valid. Use `$impeccable shape [feature]` only when planning a new surface and when its artifact requirements are acceptable.
- **Brand:** the documented subcommand is `brand update`. Treat it as a potentially mutating workflow; use the brand references read-only unless a later task explicitly authorizes synchronizing brand files/tokens.
- **Design Taste Frontend:** use the skill guidance directly. Its documented gates are `node /Users/jresendiz/.agents/skills/design-taste-frontend/scripts/lint.mjs <target>`, `inspect.mjs <url-or-path>`, and `scenes.mjs <url-or-path>`. These write `.taste-skill/`, so run them only when that output is authorized.
- **UI/UX Pro Max:** use read-only searches such as `python3 /Users/jresendiz/.agents/skills/ui-ux-pro-max/scripts/search.py "<query>" --domain typography -n 5` or `--stack react`. For a system query, use `--design-system`; do not use `--persist` unless generated design-system files are explicitly requested.

Recommended smallest combination:

1. React structure/content: no additional design skill; implement against `PRODUCT.md`.
2. Hero/layout: Impeccable critique principles plus the approved `DESIGN.md` direction.
3. Typography: UI/UX Pro Max typography search, then DESIGN.md tokens.
4. Visual polish: Design Taste Frontend inspection only if `.taste-skill/` output is approved.
5. Accessibility/responsive verification: Impeccable critique/audit principles, browser QA, and focused UI/UX Pro Max UX searches.

## Phase 3A acceptance gate

- Production build passes.
- Existing smoke test passes without suppressing runtime errors.
- Menu renders all documented entries and states pending prices honestly.
- No unsupported operational claims remain.
- Desktop and 390px mobile layouts are reviewed visually.
- Keyboard, focus, contrast, alt text, and reduced-motion behavior are verified.
- Browser console has no new errors.
- Sakura source repository remains unchanged.
