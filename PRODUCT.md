# MANEKI — Product Specification

## Product identity

**Brand:** MANEKI  
**Primary line:** “Asia interpretada por México”  
**Supporting line:** “El gato te trae suerte”

Maneki is a contemporary Asian-Mexican fusion café concept for Torreón, Coahuila. It interprets Asian-inspired drinks and food through familiar Mexican flavors and accessible formats: matcha with lechera, breaded onigiri, fruit refreshers, pancakes, mantou, creamy sando, coffee, tea, and portable cold drinks.

Maneki is not positioned as a traditional Japanese restaurant, an anime merchandise store, or a generic premium café. The brand combines gastronomic confidence with a warm, playful character world.

### Audience

- Primary: young adults and students in Torreón who are curious about Asian culture, specialty drinks, café experiences, and portable food.
- Secondary: adults seeking approachable, visually distinctive drinks and food without requiring deep familiarity with Asian cuisine.
- Contexts: university, work, social visits, take-away, and browsing for something new to try.

### Personality and tone

Maneki is contemporary, confident, welcoming, playful without being childish, premium without being inaccessible, and culturally curious without relying on clichés.

Customer-facing copy should be concise, warm, direct, and sensory. Explain unfamiliar products in plain Spanish. Avoid investor language, unsupported urgency, exaggerated claims, and fake social proof.

### Neko Neko

Neko Neko is Maneki’s fictional black-cat character universe. It is inspired by the Japanese maneki-neko, a symbol associated with luck and welcome, but it is not a substitute for explaining that cultural background accurately.

Use Neko Neko strategically in the hero, cultural explanation, seasonal storytelling, and collectible content. Do not saturate the interface with mascot illustrations.

## Product goals

1. Communicate Maneki and its Asian-Mexican proposition immediately.
2. Encourage menu exploration without requiring the visitor to understand internal business terminology.
3. Present the documented gastronomic offering clearly.
4. Introduce seasonal collections without inventing products, dates, or promotions.
5. Explain the brand story in customer-facing language.
6. Introduce Neko Neko and its cultural inspiration with an explicit distinction between fact and fiction.
7. Present collectibles and merchandise as future-facing unless availability is confirmed.
8. Explain the Maneki Mini university proposition without creating a non-functional contact promise.
9. Provide truthful community and contact information.

## Information architecture

1. Hero
2. Short fusion concept
3. Menu explorer
4. Seasonal collections
5. Brand story
6. Neko Neko
7. Collectible universe
8. Maneki Mini
9. Community and footer

Related story content may be combined on mobile or in a two-column editorial section. The menu must remain easy to reach from the first viewport.

Primary CTA: **Explorar menú**.  
Secondary CTA: **Conoce a Neko Neko** or **Ver colecciones**.  
Do not use “Ordena ahora” until a real ordering mechanism exists.

## Menu specification

The following is extracted from the supplied business documentation. Prices are documented commercial projections, not automatically launch-approved prices. The UI must support a pending-price state such as “Precio por confirmar” and must never silently omit an item.

Customer-facing discovery labels:

- **Para empezar** — internal `Safe Food` classification; this label does not make a food-safety claim.
- **Para explorar** — internal `Nicho` classification.
- **Algo distinto** — internal `Novedad` classification.

### Bebidas frías

| Category | Product | Flavor variants | Internal level | Documented price |
|---|---|---|---|---:|
| Café frío | Kohi Rocks | Vainilla, lechera, cajeta | Safe Food | $75 |
| Café frío | Tokyo Frappé | Nutella, Biscoff, Oreo | Nicho | $80 |
| Café frío | Yume Latte | Mazapán, pistache, tiramisú | Novedad | $85 |
| Matcha frío | Matcha Kiss | Clásico | Safe Food | $75 |
| Matcha frío | Midori Cloud | Nutella, lechera, Oreo | Nicho | $80 |
| Matcha frío | Hanami Dream | Frutas de temporada | Novedad | $85 |
| Refreshers asiáticos | Zen Citrus | Limón, mango, fresa | Safe Food | $65–75 |
| Refreshers asiáticos | Kuro Berry | Durazno, lichi, frutos rojos | Nicho | $70–75 |
| Refreshers asiáticos | Yuzu Bloom | Lychee, pera, uva | Novedad | $80–85 |
| Limonadas minerales | Limón Neko | Limón, miel, clásico | Safe Food | $65 |
| Limonadas minerales | Maneki Lime | Fresa, mango, maracuyá | Nicho | $70 |
| Limonadas minerales | Yuzu Breeze | Yuzu, lychee, pepino | Novedad | $75 |
| Otras bebidas frías | Bubble Pop | Té negro, tapioca, frutas | Nicho | $80 |

### Bebidas calientes

| Category | Product | Flavor variants | Internal level | Documented price |
|---|---|---|---|---:|
| Café caliente | Kohi Americano | Clásico | Safe Food | $50 |
| Café caliente | Kohi Latte | Clásico | Nicho | $65 |
| Café caliente | Dalgona Warm | Lechera, cajeta, Nutella | Novedad | $70–72 |
| Tés calientes | Ocha Classic | Limón, miel, clásico | Safe Food | $55 |
| Tés calientes | Ocha Bloom | Limón, miel, clásico | Nicho | $65 |
| Tés calientes | Matcha Cloud | Clásico | Novedad | $75–80 |

### Food

| Category | Product | Flavor variants | Internal level | Documented price |
|---|---|---|---|---:|
| Onigiris empanizados, sin alga | Onigiri Crunch | Carne empanizada, aguacate, pepino, queso crema | Safe Food | $100 |
| Onigiris empanizados, sin alga | Onigiri Ocean | Surimi, aguacate, pepino, queso crema | Nicho | $95 |
| Onigiris empanizados, sin alga | Onigiri Teri | Pollo teriyaki, aguacate, pepino, queso crema | Novedad | $100 |
| Hot cakes tipo Asia | Pancake Neko | Nutella, lechera, honey butter | Safe Food | $65–75 |
| Hot cakes tipo Asia | Pancake Fruity | Plátano, fresa, almendras | Nicho | $75 |
| Hot cakes tipo Asia | Pancake Dream | Matcha, ube, chocolate, cajeta, temporada | Novedad | $95–110 |
| Mantou dulces | Mantou Cloud | Crema de vainilla, azúcar glass | Safe Food | $70 |
| Mantou dulces | Mantou Choco | Nutella, plátano, almendras | Nicho | $75 |
| Mantou dulces | Mantou Crunch | Crema de Oreo, galleta triturada | Novedad | $75 |
| Creamy sando | Sando Cloud | Crema de vainilla, azúcar glass | Safe Food | $65 |
| Creamy sando | Sando Choco | Nutella, plátano, almendras | Nicho | $75 |
| Creamy sando | Sando Biscoff | Crema de Biscoff, galleta triturada | Novedad | $85 |

### Extras

| Extra | Options | Documented price |
|---|---|---:|
| Cloud Foam | Vainilla, cajeta, lechera, plátano, fresa, Biscoff, Nutella, Oreo, mazapán, pistache | +$10–12 |
| Pop Pearls | Bolitas que explotan | +$10 |
| Bubble Tapioca | Tapioca | +$10 |

### Combos

| Combo | Description | Documented price |
|---|---|---:|
| Combo Neko | 1 bebida fría + 1 onigiri | $160 |
| Combo Maneki | 1 bebida fría + 1 postre | $130 |
| Combo Yume | 2 postres + 2 bebidas | $220 |
| Combo Matcha Lover | Matcha Kiss + Matcha Cloud | $150 |

## Public-content status

| Offering or claim | Status | UI rule |
|---|---|---|
| Maneki brand and taglines | CONFIRMED | May appear publicly. |
| Asian-Mexican fusion proposition | CONFIRMED | May appear publicly. |
| Documented menu names and categories | CONFIRMED as documented concept | Show only after final business review; preserve pending state where needed. |
| Documented prices | PROPOSED | Label internally as documented; publish only after launch approval. |
| Torreón market concept | CONFIRMED as market context | Do not convert into a confirmed address. |
| Opening status | PENDING APPROVAL | Do not say open, launching, or pre-opening without a decision. |
| Physical location and hours | UNAVAILABLE | Do not publish an address or hours. |
| WhatsApp/contact number | UNAVAILABLE | Maneki Mini and contact actions remain non-actionable until verified. |
| Online ordering/delivery | PROPOSED | No order CTA or checkout. |
| Seasonal beverages and collections | PROPOSED | Show a collection concept or approved items only; no invented dates/promotions. |
| Merchandise and blind boxes | PROPOSED | Present as collectible universe/concepts, not purchasable stock. |
| Loyalty program | PROPOSED | No loyalty signup or benefits claim. |
| University kiosks / Maneki Mini | PROPOSED | Explain the proposition; add contact action only after a real number exists. |
| Signup/VIP form | UNAVAILABLE | Do not represent browser localStorage as CRM, mailing list, or contact service. |

## Scope exclusions

This product surface excludes investor presentations, market sizing, cost analysis, profitability projections, payroll, organizational charts, operational logistics, admin dashboards, checkout, user accounts, invented testimonials, and invented sales metrics.
