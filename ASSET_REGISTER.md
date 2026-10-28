# MANEKI — Asset Register

## Status definitions

- **APPROVED PRODUCTION ASSET:** explicitly approved, owned/cleared, and ready for the website.
- **CONCEPTUAL BRAND REFERENCE:** useful for direction or art direction; not production content.
- **THIRD-PARTY VISUAL REFERENCE:** external image used to study composition, architecture, packaging, or tone.
- **REQUIRES RIGHTS/APPROVAL:** potentially usable only after ownership, permission, and brand approval are established.
- **MISSING:** required for the first release but not present in the reference directory or destination repository.

The prototype now includes a small, optimized subset of the supplied conceptual references. Original reference files remain untouched in `/Users/jresendiz/Workspaces/Maneki/Referencias`.

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

Storefronts, coffee trailers, interiors, uniforms, signage, third-party café photography, and architectural references remain excluded. They could imply an existing Maneki location or carry rights limitations. The product menu also remains family-level and typography-led because no remaining reference can be matched confidently to the documented 39 entries without misrepresenting the product.

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
