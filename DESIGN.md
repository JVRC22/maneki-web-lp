# MANEKI — Design Specification

## Direction

**Counter Edition — Warm Editorial × Playful Collectibles**

Maneki is a product-led gastronomic experience. The page should feel like a carefully printed café counter card expanded into a digital editorial surface: warm ivory, dark ink, oversized typography, strong product imagery, and occasional Neko Neko interventions.

## Design principles

- Editorial rather than template-driven.
- Product photography is the primary storytelling tool.
- Typography and spacing create distinction before decoration does.
- Warm minimalist surfaces replace dark tech-premium styling.
- Illustration is controlled and strategic.
- Playfulness must not become childishness.
- Copy remains readable, direct, and culturally respectful.
- Every layout must have a mobile composition, not merely a compressed desktop layout.
- No generic SaaS cards, glass panels, gradients, fake metrics, floating badges, or decorative motion loops.

## Tokens

### Color

| Token | Value | Responsibility |
|---|---|---|
| `--ink` | `#1E1D1A` | Primary text, wordmark, navigation, controls. |
| `--ground` | `#F6F1E7` | Main page background. |
| `--paper` | `#FFFDF8` | Product and editorial surface. |
| `--soft-ground` | `#EAE3D6` | Section changes and quiet surfaces. |
| `--olive` | `#515B3A` | Category and seasonal accent; usable for text on ground. |
| `--burgundy` | `#782F36` | Primary action, focus ring, collar/bell accent. |
| `--pink-fill` | `#DDA7B8` | Large background accent only. |
| `--pink-ink` | `#8E465D` | Pink-derived text or small accent where contrast is verified. |

Use ink and ground for most of the interface. Pink is not valid as small body text on ivory. The red/burgundy accent must not be the only indicator of state.

Accessible default pairings:

- Ink on ground or paper: primary body and display text.
- Burgundy on ground or paper: action text, focus ring, selected state.
- Olive on ground or paper: category labels and secondary accent text.
- White on burgundy or ink: filled button text.
- Pink fill: decorative/background surface only; use ink or pink ink for text.

### Typography

- **Archivo Black:** display headings and expressive brand typography.
- **DM Sans:** navigation, body, menu descriptions, prices, metadata, and controls.
- Do not add a third running typeface. Handwritten expression should come from approved artwork.

| Role | Desktop | Mobile | Leading |
|---|---:|---:|---:|
| Hero display | `clamp(72px, 10vw, 148px)` | `clamp(56px, 17vw, 84px)` | 0.86–0.94 |
| Section heading | `clamp(44px, 5vw, 72px)` | 36–48px | 0.94–1.02 |
| Product name | 24–30px | 22–26px | 1.05–1.15 |
| Body | 17–18px | 16–17px | 1.45–1.6 |
| Navigation/meta | 14–15px | 14–15px | 1.3–1.45 |

Display text uses tight tracking between `-0.04em` and `-0.02em`. Body text uses normal tracking. Keep headlines to two lines wherever possible; allow measured adjustments after browser review.

### Layout

- Maximum content width: 1240px.
- Desktop gutters: 24–48px; mobile gutter: 20px.
- Desktop grid: 12 columns; tablet: 6; mobile: 4.
- Spacing scale: 4, 8, 12, 16, 24, 32, 48, 72, 112, 160px.
- Section rhythm: 128–160px desktop; 80–96px mobile.
- Text measure: 560–640px.
- Breakpoints: 480, 768, 1024, and 1280px.
- Images: hero 4:5, product 4:5, environment 3:2, collectibles 1:1.

Measured values may be adjusted during visual QA to prevent clipping, accidental wrapping, or awkward empty space.

## Component specifications

### Navbar

Responsibility: identify Maneki and provide direct access to the menu and story.

Desktop: wordmark left, three to five plain links, one primary action. No glass, pill navigation, or bar chrome.

Mobile: full-width ivory/ink sheet or drawer with large links, 44px minimum targets, Escape support, focus trap, and focus restoration. Body scroll is locked while open.

States: default, scrolled, open, focus-visible, reduced-motion.

### Hero

Desktop: five-column editorial text block plus seven-column product image. Use the approved wordmark and one dominant product photograph. Neko Neko may appear as one restrained stamp or line-art intervention.

Mobile: text and primary CTA first, followed by a full-width product crop. Keep the image factual; use a neutral editorial surface if an approved product photo is unavailable.

### Buttons

Flat fill, near-square corners, 44px minimum height, visible hover/pressed/focus states, and no idle shadow. Primary: burgundy or ink fill. Secondary: text/outline treatment. No “Order now” without ordering infrastructure.

### Menu explorer

Responsibility: make the full documented menu understandable and scannable.

Desktop: category index followed by editorial product rows or asymmetric product groupings. Avoid a repeated six-card grid.

Mobile: horizontally scrollable category navigation or native tabs with visible selected state; product groups stack vertically. Provide a keyboard alternative and do not rely on swipe-only behavior.

### Product entries

Show name, plain-language flavor description, customer-facing discovery label, and price only when approved. Pending prices use “Precio por confirmar.” “Safe Food” must never be rendered as a food-safety certification.

### Category filters

Use semantic buttons or tabs with `aria-selected`, clear labels, and persistent selected styling. Categories should filter or jump to content; they should not hide products permanently.

### Seasonal showcase

Use one large collection plate with one or two supporting images. Distinguish “seasonal concept” from “available now.” Do not invent product names, availability windows, or promotions.

### Editorial story

Use a two-column text/image composition on desktop and a clear vertical reading order on mobile. Explain the fusion concept without reproducing investor-problem language.

### Neko Neko storytelling

Place cultural explanation and fictional character introduction side by side or sequentially. Use line art sparingly. Include alt text when the illustration conveys meaning; otherwise mark it decorative.

### Collectible display

Present blind boxes, plushes, stickers, and future merchandise as “universo coleccionable” or “concepto.” Do not use product-card pricing, shopping affordances, or “available” language until confirmed.

### Maneki Mini CTA

Explain the university kiosk proposition. Until a verified contact number exists, use a non-actionable “Contacto por confirmar” state. Never expose a placeholder phone number or dead WhatsApp link.

### Footer

Close with the Maneki wordmark, short proposition, real navigation, and only verified contact/social information. Do not repeat unsupported location or opening claims.

## Motion

Use existing Framer Motion selectively:

- Entrance transitions: opacity plus up to 12px vertical travel, 280–400ms.
- Interaction feedback: 160–240ms.
- Stagger only when it clarifies reading order.
- No perpetual floating cards, decorative loops, or unnecessary parallax.
- Use `useReducedMotion` to remove travel and looping behavior, not only CSS overrides.

## Accessibility

- Use one semantic `h1`; provide a heading for every major section.
- Maintain logical DOM and focus order on mobile and desktop.
- Provide a visible 3px burgundy focus ring with offset.
- Keep interactive targets at least 44×44px.
- Provide descriptive alt text for meaningful product and character imagery.
- Hide decorative icons/illustrations from assistive technology.
- Keep normal text at a verified 4.5:1 contrast minimum.
- Announce selected, expanded, and disabled states semantically.
- Support keyboard access for category navigation and mobile menus.
- Respect reduced motion and avoid content that is hidden until animation completes.
