# MANEKI — Asset Register

## Status definitions

- **APPROVED PRODUCTION ASSET:** explicitly approved, owned/cleared, and ready for the website.
- **CONCEPTUAL BRAND REFERENCE:** useful for direction or art direction; not production content.
- **THIRD-PARTY VISUAL REFERENCE:** external image used to study composition, architecture, packaging, or tone.
- **REQUIRES RIGHTS/APPROVAL:** potentially usable only after ownership, permission, and brand approval are established.
- **MISSING:** required for the first release but not present in the reference directory or destination repository.

The prototype now includes a small, optimized subset of the supplied conceptual references. Original reference files remain untouched in `/Users/jresendiz/Workspaces/Maneki/Referencias`.

## Phase 5F menu photography (superseded by Phase 5K)

The original verified package was `/Users/jresendiz/Workspaces/Maneki/Referencias/MANEKI_menu_web_assets`. Phase 5H replaced those derivatives with the preferred V2 package at `/Users/jresendiz/Workspaces/Maneki/Referencias/MANEKI_Menu_V2`. This is the historical 13-image baseline; Phase 5K supersedes it with the complete corrected set documented below. These historical files remain in the repository for traceability but are no longer referenced by the active menu.

| Source photograph | Destination asset | Menu use | Mapping status | Notes |
|---|---|---|---|---|
| `01-cafe-frio-cajeta.webp` | `public/images/menu/kohi-rocks.webp` | Kohi Rocks | PROBABLE PRODUCT MATCH | Cajeta coffee appearance; recipe still requires final confirmation. |
| `02-frappe-chocolate-oreo.webp` | `public/images/menu/tokyo-frappe.webp` | Tokyo Frappé | PROBABLE PRODUCT MATCH | Chocolate and cookie presentation; exact topping not claimed. |
| `03-matcha-frio-clasico.webp` | `public/images/menu/matcha-kiss.webp` | Matcha Kiss | PROBABLE PRODUCT MATCH | Plain cold matcha presentation. |
| `04-matcha-frio-crema-galleta.webp` | `public/images/menu/midori-cloud.webp` | Midori Cloud | PROBABLE PRODUCT MATCH | Cream and dark cookie elements are visible. |
| `06-refresher-frutos-rojos.webp` | `public/images/menu/kuro-berry.webp` | Kuro Berry | PROBABLE PRODUCT MATCH | Red-fruit presentation; exact flavor combination is not asserted. |
| `07-limonada-limon.webp` | `public/images/menu/limon-neko.webp` | Limón Neko | PROBABLE PRODUCT MATCH | Lemon slices and mineral-lemonade appearance. |
| `09-cafe-caliente-americano.webp` | `public/images/menu/kohi-americano.webp` | Kohi Americano | PROBABLE PRODUCT MATCH | Black hot coffee. |
| `10-cafe-caliente-latte.webp` | `public/images/menu/kohi-latte.webp` | Kohi Latte | PROBABLE PRODUCT MATCH | Latte-art coffee. |
| `11-matcha-caliente-latte.webp` | `public/images/menu/matcha-cloud.webp` | Matcha Cloud | PROBABLE PRODUCT MATCH | Hot matcha latte presentation. |
| `17-pancakes-chocolate.webp` | `public/images/menu/pancake-neko.webp` | Pancake Neko | PROBABLE PRODUCT MATCH | Chocolate pancake family presentation. |
| `18-pancakes-fruta.webp` | `public/images/menu/pancake-fruity.webp` | Pancake Fruity | PROBABLE PRODUCT MATCH | Strawberry and banana are visible. |
| `19-mantou-crema.webp` | `public/images/menu/mantou-cloud.webp` | Mantou Cloud | PROBABLE PRODUCT MATCH | Cream-filled mantou presentation. |
| `22-sando-chocolate-platano.webp` | `public/images/menu/sando-choco.webp` | Sando Choco | PROBABLE PRODUCT MATCH | Chocolate and banana are visible. |

The V2 package's other supplied photographs remain excluded from individual product cards. The three onigiri images visibly include seaweed, which conflicts with the documented “sin alga” menu; the pink/tropical refreshers, teas, mantou-chocolate, fruit-sando, and extras images are family-level or ingredient-ambiguous references. The eight transparent cutouts were inspected and excluded because their glass, ice, and edge segmentation remains too provisional for these compact product rows. The older V1 package remains available in `Referencias` for comparison and fallback.

The historical V2 small derivatives and 1200px candidates are retained for traceability only; active menu rendering now uses `public/images/menu/corrected/`.

Confirmed prices are now rendered publicly in `src/data/menu.js` as MXN values, including explicit ranges and extra charges. No “Precio por confirmar” state remains in the customer-facing menu.

## Phase 5G brand and collectible integration

The verified source package is `/Users/jresendiz/Workspaces/Maneki/Referencias/MANEKI_Brand_Merch_Web_2026`. Only eight optimized WebP derivatives were copied into `public/images/maneki/brand/`; the source package, originals, PNG cutouts, contact sheets, and unselected references remain outside the application. Every integrated file is conceptual prototype artwork and is not evidence of an operating location, staff, inventory, an active loyalty program, or commercially approved merchandise.

| Source reference | Optimized derivative | Section | Use and status | Replacement / limitation |
|---|---|---|---|---|
| `neko-neko-caja-sorpresa-sin-fondo.webp` | `public/images/maneki/brand/neko-neko-box.webp` | Neko Neko Adventures | Main surprise-box anchor; CONCEPTUAL BRAND REFERENCE | Provisional alpha edges; replace with cleared packaging artwork before public merchandise claims. |
| `neko-neko-llavero-negro-clasico-sin-fondo.webp` | `public/images/maneki/brand/neko-neko-black.webp` | Neko Neko and Neko Neko Adventures | Primary transparent Neko Neko character visual and black classic collectible variant; CONCEPTUAL BRAND REFERENCE | Provisional transparent cutout; not a purchasable product or approved mascot master. |
| `neko-neko-llavero-negro-gafas-sin-fondo.webp` | `public/images/maneki/brand/neko-neko-glasses.webp` | Neko Neko Adventures | Black glasses collectible variant; CONCEPTUAL BRAND REFERENCE | Provisional transparent cutout; not a purchasable product. |
| `neko-neko-llavero-rosa-sin-fondo.webp` | `public/images/maneki/brand/neko-neko-pink.webp` | Neko Neko Adventures | Pink collectible variant; CONCEPTUAL BRAND REFERENCE | Provisional transparent cutout; not a purchasable product. |
| `Phase 5J original conceptual illustration` | `public/images/maneki/brand/maneki-mini-illustration.svg` | Maneki Mini | Purpose-built physical kiosk illustration with sign, service window, awning, menu marks, and wheels; CONCEPTUAL BRAND REFERENCE | Prototype illustration only. It does not depict an operating location, inventory, or a confirmed university installation. |
| `maneki-uniformes-frente.webp` | `public/images/maneki/brand/uniform-front.webp` | Community / identity | Front view paired with back view; CONCEPTUAL BRAND REFERENCE | Proposed staff identity, not merchandise or evidence of current staff. |
| `maneki-uniformes-espalda.webp` | `public/images/maneki/brand/uniform-back.webp` | Community / identity | Back view paired with front view; CONCEPTUAL BRAND REFERENCE | Proposed staff identity, not merchandise or evidence of current staff. |
| `maneki-tarjeta-lealtad-sin-fondo.webp` | `public/images/maneki/brand/loyalty-card.webp` | Community / identity | Future loyalty-card concept; CONCEPTUAL BRAND REFERENCE | No active rewards program or enrollment is offered. |

The circular signage cutout, assembled campaign-packaging photograph, full cart photograph, weak cart crop, original contextual photographs, and alternate PNG/WebP exports were intentionally excluded from this historical package. Phase 5K uses only the separately supplied corrected menu package.

## Phase 5K corrected menu photography

The supplied `/Users/jresendiz/Workspaces/Maneki/Referencias/Imagenes Corregidas` package was inspected visually before integration. All 38 menu PNGs are 1024×1536 with alpha; no image was reused across product IDs. The derivatives are 768×1152 WebP files in `public/images/menu/corrected/`, generated at quality 84. They are corrected conceptual menu photographs, not commercial approval or proof of current inventory.

| Product ID | Source reference | Optimized derivative | Section |
|---|---|---|---|
| `kohi-rocks` | `Menu/Bebidas Frias/koshi-rocks.png` | `menu/corrected/kohi-rocks.webp` | Cold drinks |
| `tokyo-frappe` | `Menu/Bebidas Frias/tokyo-frappe.png` | `menu/corrected/tokyo-frappe.webp` | Cold drinks |
| `yume-latte` | `Menu/Bebidas Frias/yumme-latte.png` | `menu/corrected/yume-latte.webp` | Cold drinks |
| `matcha-kiss` | `Menu/Bebidas Frias/matcha-kiss.png` | `menu/corrected/matcha-kiss.webp` | Cold drinks |
| `midori-cloud` | `Menu/Bebidas Frias/midori-cloud.png` | `menu/corrected/midori-cloud.webp` | Cold drinks |
| `hanami-dream` | `Menu/Bebidas Frias/hanami-dream.png` | `menu/corrected/hanami-dream.webp` | Cold drinks |
| `zen-citrus` | `Menu/Bebidas Frias/zen-citrus.png` | `menu/corrected/zen-citrus.webp` | Cold drinks |
| `kuro-berry` | `Menu/Bebidas Frias/kuro-berry.png` | `menu/corrected/kuro-berry.webp` | Cold drinks |
| `yuzu-bloom` | `Menu/Bebidas Frias/yuzu-bloom.png` | `menu/corrected/yuzu-bloom.webp` | Cold drinks |
| `limon-neko` | `Menu/Bebidas Frias/lomin-neko.png` | `menu/corrected/limon-neko.webp` | Cold drinks |
| `maneki-lime` | `Menu/Bebidas Frias/maneki-lime.png` | `menu/corrected/maneki-lime.webp` | Cold drinks |
| `yuzu-breeze` | `Menu/Bebidas Frias/yuzu-breeze.png` | `menu/corrected/yuzu-breeze.webp` | Cold drinks |
| `bubble-pop` | `Menu/Bebidas Frias/bubble-pop.png` | `menu/corrected/bubble-pop.webp` | Cold drinks |
| `kohi-americano` | `Menu/Bebidas Calientes/kohi-americano.png` | `menu/corrected/kohi-americano.webp` | Hot drinks |
| `kohi-latte` | `Menu/Bebidas Calientes/kohi-latte.png` | `menu/corrected/kohi-latte.webp` | Hot drinks |
| `dalgona-warm` | `Menu/Bebidas Calientes/dalgona-warm.png` | `menu/corrected/dalgona-warm.webp` | Hot drinks |
| `ocha-classic` | `Menu/Bebidas Calientes/ocha-classic.png` | `menu/corrected/ocha-classic.webp` | Hot drinks |
| `ocha-bloom` | `Menu/Bebidas Calientes/ocha-bloom.png` | `menu/corrected/ocha-bloom.webp` | Hot drinks |
| `matcha-cloud` | `Menu/Bebidas Calientes/matcha-cloud.png` | `menu/corrected/matcha-cloud.webp` | Hot drinks |
| `onigiri-crunch` | `Menu/Comida Salada/onigiri-crunch.png` | `menu/corrected/onigiri-crunch.webp` | Savory |
| `onigiri-ocean` | `Menu/Comida Salada/onigiri-ocean.png` | `menu/corrected/onigiri-ocean.webp` | Savory |
| `onigiri-teri` | `Menu/Comida Salada/onigiri-teri.png` | `menu/corrected/onigiri-teri.webp` | Savory |
| `pancake-neko` | `Menu/Comida Dulce/pancake-neko.png` | `menu/corrected/pancake-neko.webp` | Sweet |
| `pancake-fruity` | `Menu/Comida Dulce/pancake-fruity.png` | `menu/corrected/pancake-fruity.webp` | Sweet |
| `pancake-dream` | `Menu/Comida Dulce/pancake-dream.png` | `menu/corrected/pancake-dream.webp` | Sweet |
| `mantou-cloud` | `Menu/Comida Dulce/mantou-cloud.png` | `menu/corrected/mantou-cloud.webp` | Sweet |
| `mantou-choco` | `Menu/Comida Dulce/mantout-choco.png` | `menu/corrected/mantou-choco.webp` | Sweet |
| `mantou-crunch` | `Menu/Comida Dulce/mantou-crunch.png` | `menu/corrected/mantou-crunch.webp` | Sweet |
| `sando-cloud` | `Menu/Comida Dulce/sando-cloud.png` | `menu/corrected/sando-cloud.webp` | Sweet |
| `sando-choco` | `Menu/Comida Dulce/sando-choco.png` | `menu/corrected/sando-choco.webp` | Sweet |
| `sando-biscoff` | `Menu/Comida Dulce/sando-biscoff.png` | `menu/corrected/sando-biscoff.webp` | Sweet |
| `cloud-foam` | `Menu/Extras/cloud-foam.png` | `menu/corrected/cloud-foam.webp` | Extras |
| `pop-pearls` | `Menu/Extras/pop-pearls.png` | `menu/corrected/pop-pearls.webp` | Extras |
| `bubble-tapioca` | `Menu/Extras/bubble-tapioca.png` | `menu/corrected/bubble-tapioca.webp` | Extras |
| `combo-neko` | `Menu/Combos/combo-neko.png` | `menu/corrected/combo-neko.webp` | Combos |
| `combo-maneki` | `Menu/Combos/combo-maneki.png` | `menu/corrected/combo-maneki.webp` | Combos |
| `combo-yume` | `Menu/Combos/combo-yume.png` | `menu/corrected/combo-yume.webp` | Combos |
| `combo-matcha-lover` | `Menu/Combos/combo-matcha-lover.png` | `menu/corrected/combo-matcha-lover.webp` | Combos |

The corrected logo variants were inspected but are not substituted into the global Navbar, Hero, or Footer in this phase. `logo-black.webp` is the preferred variant for ivory/paper menu surfaces; `logo-white.webp` is preferred for ink/burgundy surfaces. The discontinued `Combo Onigiri + Bebida` has no active mapping and is not rendered.

### Phase 5L visual treatment

The 38 corrected source PNGs and their 38 WebP derivatives were rechecked for alpha data: all 38 source PNGs and all 38 derivatives report an alpha channel. The visible catalog rectangles were caused by the CSS photo frame background, not by a missing image cutout. No product image was reprocessed; `.phase5f-menu-photo` now uses a transparent background while preserving the existing 768×1152 `object-fit: contain` derivatives. The discovery stage adds scoped ScrollTrigger entrance motion plus hover/focus feedback; reduced-motion users receive the fully visible static state.

## Phase 4C–5A prototype integration

These files are conceptual brand artwork for an academic prototype. They are not approved commercial assets, proof of operating locations, available inventory, or final logo masters.

| Original reference | Optimized derivative | Section | Selection rationale | Status / replacement requirement |
|---|---|---|---|---|
| `Imagenes/WhatsApp Image 2026-10-26 at 18.46.55 (1).jpeg` (938×976, 55,403 bytes) | `public/images/maneki/hero-matcha-concept.webp` (900×937, 32,324 bytes) | Hero | Neutral background, recognizable transparent matcha can, strong product silhouette, minimal crop risk. | CONCEPTUAL BRAND REFERENCE. Replace with approved product photography before commercial publication. |
| `Imagenes/Gemini_Generated_Image_xnqlrxnqlrxnqlrx.jpg` (1024×1024, 562,717 bytes) | `public/images/maneki/neko-plush-concept.webp` (800×800, 33,356 bytes) | Neko Neko | Consistent black-cat silhouette, red collar, bell, expressive face, and clear subject separation. | CONCEPTUAL BRAND REFERENCE. Replace with cleared Neko Neko artwork or approved photography. |
| `Imagenes/Gemini_Generated_Image_7yty3k7yty3k7yty.jpg` (704×1522, 673,952 bytes) | `public/images/maneki/collectible-box-concept.webp` (640×1384, 69,294 bytes) | Neko Neko Adventures | Strongest readable blind-box presentation and cohesive line-art language. | CONCEPTUAL BRAND REFERENCE. Replace with approved packaging artwork before merchandise claims. |
| `Imagenes/WhatsApp Image 2026-10-26 at 19.09.26 (1).jpeg` (1179×1162, 118,123 bytes; tightly cropped) | `public/images/maneki/seasonal-pink-drink-concept.webp` (700×819, 32,460 bytes) | Seasonal collections | Pink fruit-inspired drink provides a controlled seasonal accent without adding a product name, price, date, or promotion. | CONCEPTUAL BRAND REFERENCE. Replace with an approved seasonal image if a specific collection becomes public. |
| `Imagenes/Gemini_Generated_Image_sas8n2sas8n2sas8.jpg` (704×1522, 710,053 bytes) | `public/images/maneki/neko-adventures-display-concept.webp` (540×1080, 67,858 bytes) | Neko Neko Adventures | A vertically readable display concept that expands the collectible world without being confused for an active storefront or shop listing. | CONCEPTUAL BRAND REFERENCE. Contains generated/mockup copy and must be replaced with cleared packaging art before merchandise claims. |

### Phase 5C asset-first derivatives

These derivatives were generated from the supplied Maneki concepts or created as new conceptual prototype artwork to solve the rejected photographic-background problem. They are intentionally not labeled as approved product photography.

| Source / method | Optimized derivative | Section | Selection rationale | Status / replacement requirement |
|---|---|---|---|---|
| Existing `hero-matcha-concept.webp`, edited with the built-in image tool | `public/images/maneki/hero-matcha-cutout.webp` (1024×1536, transparent WebP) | Hero and Featured Matcha | Removes the hand and baked white field so the can can sit inside a layered campaign composition. | CONCEPTUAL BRAND REFERENCE. Verify label, packaging, and commercial clearance before launch. |
| Existing `seasonal-pink-drink-concept.webp`, edited with the built-in image tool | `public/images/maneki/seasonal-pink-cutout.webp` (1159×1356, transparent WebP) | Featured seasonal beverage | Provides a clean pink beverage silhouette without presenting the reference café background as a Maneki location. | CONCEPTUAL BRAND REFERENCE. Replace with approved seasonal photography/artwork before public availability claims. |
| New conceptual beverage artwork generated with the built-in image tool | `public/images/maneki/coffee-concept-cutout.webp` (1024×1536, transparent WebP) | Featured coffee beverage | Supplies the third distinct beverage state required for a coherent drink selector; no suitable coffee product photo was present. | GENERATED CONCEPTUAL ARTWORK. Not an approved product image or launch commitment. |

### Excluded from prototype integration

Storefronts, full coffee-trailer photographs, interiors, signage, third-party café photography, and architectural references remain excluded. The selected cropped cart detail and uniform concepts are documented separately as non-operational identity concepts. They could imply an existing Maneki location or carry rights limitations. The product menu is now fully photographed from the separately supplied corrected menu package; all remaining source references stay excluded.

## Reference inventory

### Conceptual/generated references

| Material | Status | Notes |
|---|---|---|
| `Imagenes/Gemini_Generated_Image_*.jpg` (5 files) | CONCEPTUAL BRAND REFERENCE | Generated packaging, plush, and blind-box direction. Not evidence of production stock or final artwork. |
| `Imagenes/90ad6c02-d607-476d-b418-688cf268da2f.jpeg` | CONCEPTUAL BRAND REFERENCE | Blind-box packaging visualization; ownership and final design are unverified. |
| Maneki-branded can/storefront/plush images in the 2026-10-26 WhatsApp set | REQUIRES RIGHTS/APPROVAL | Some appear composited or generated. Do not present as an existing Maneki location or approved product photo. |
| Maneki uniform and kiosk visualizations in the 2026-10-26 WhatsApp set | REQUIRES RIGHTS/APPROVAL | Useful for future environmental/merch direction only. |

### Third-party visual references

| Material | Status | Notes |
|---|---|---|
| 2026-10-24 coffee-trailer, kiosk, interior, counter, tile, and furniture photos | THIRD-PARTY VISUAL REFERENCE | Use only to study warm minimalism, compact service counters, lighting, materials, and editorial composition. |
| 2026-10-24 maneki-neko line-art and mascot images | REQUIRES RIGHTS/APPROVAL | Cultural/illustration references; not approved Neko Neko artwork. |
| 2026-10-24 uniform and café-sign references | THIRD-PARTY VISUAL REFERENCE | Do not reuse without clearance. |

## Production readiness

Current approved production assets in `Referencias`: **none confirmed**.

### Minimum first-release asset set

1. Final MANEKI wordmark in SVG, plus monochrome and reversed variants.
2. Approved Neko Neko line-art SVG and at least three approved poses.
3. One hero product photograph, preferably a transparent cold beverage with visible texture/condensation.
4. Product images for at least matcha, coffee/refresher, one savory item, and one sweet item.
5. Optional approved seasonal/collectible image if those sections make specific visual claims.

### Fallback strategy

If approved product imagery is unavailable, ship an editorial ivory/ink hero using the approved wordmark and a restrained Neko line-art asset only if that artwork is cleared. Do not substitute generated storefronts, fake product photography, stock images presented as Maneki, or unapproved packaging mockups.

## Optimization guidance

- Export production images in AVIF/WebP with JPEG fallback where required.
- Generate responsive widths for hero and product images.
- Keep decorative illustrations as optimized SVG.
- Use stable aspect-ratio boxes to prevent layout shift.
- Preserve a clear source/rights record for every non-original image.
