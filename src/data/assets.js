export const visualAssets = {
  heroCutout: {
    src: '/images/maneki/hero-matcha-cutout.webp',
    alt: 'Lata conceptual de matcha Maneki con textura verde, condensación y diseño de Neko Neko.',
    width: 1024,
    height: 1536,
  },
  seasonalCutout: {
    src: '/images/maneki/seasonal-pink-cutout.webp',
    alt: 'Bebida rosada conceptual de temporada Maneki con fruta y condensación.',
    width: 1159,
    height: 1356,
  },
  coffeeCutout: {
    src: '/images/maneki/coffee-concept-cutout.webp',
    alt: 'Lata conceptual de café frío Maneki con espuma, hielo y condensación.',
    width: 1024,
    height: 1536,
  },
  hero: {
    src: '/images/maneki/hero-matcha-concept.webp',
    alt: 'Bebida conceptual de matcha en lata transparente con diseño Maneki.',
    width: 900,
    height: 937,
  },
  neko: {
    src: '/images/maneki/brand/neko-neko-black.webp',
    alt: 'Gato negro de peluche Neko Neko con collar rojo, campana y una bebida Maneki.',
    width: 578,
    height: 773,
  },
  seasonal: {
    src: '/images/maneki/seasonal-pink-drink-concept.webp',
    alt: 'Bebida rosada conceptual de Maneki en lata transparente.',
    width: 700,
    height: 819,
  },
  collectibles: {
    src: '/images/maneki/collectible-box-concept.webp',
    alt: 'Empaque conceptual de Neko Neko Adventures con una figura de gato blanco.',
    width: 640,
    height: 1384,
  },
  collectibleDisplay: {
    src: '/images/maneki/neko-adventures-display-concept.webp',
    alt: 'Display conceptual de Neko Neko Adventures con cajas sorpresa y una figura de gato blanco.',
    width: 540,
    height: 1080,
  },
};

const menuPhotoDimensions = {
  '01-cafe-frio-cajeta.webp': [600, 895],
  '02-frappe-chocolate-oreo.webp': [600, 900],
  '03-matcha-frio-clasico.webp': [600, 1143],
  '04-matcha-frio-crema-galleta.webp': [600, 1111],
  '06-refresher-frutos-rojos.webp': [600, 1044],
  '07-limonada-limon.webp': [600, 1065],
  '09-cafe-caliente-americano.webp': [900, 803],
  '10-cafe-caliente-latte.webp': [900, 806],
  '11-matcha-caliente-latte.webp': [900, 825],
  '17-pancakes-chocolate.webp': [900, 532],
  '18-pancakes-fruta.webp': [900, 558],
  '19-mantou-crema.webp': [900, 607],
  '22-sando-chocolate-platano.webp': [900, 606],
};

const menuPhoto = (src, alt, source, confidence = 'probable') => {
  const [width, height] = menuPhotoDimensions[source] || [900, 900];
  const largeSrc = src.replace('.webp', '-1200.webp');

  return {
    src: `/images/menu/${src}`,
    srcSet: `/images/menu/${src} 600w, /images/menu/${largeSrc} 1200w`,
    sizes: '(max-width: 768px) 50vw, 25vw',
    alt,
    source,
    confidence,
    status: 'CONCEPTUAL MENU PHOTOGRAPH',
    width,
    height,
  };
};

// Only photographs with a defensible product or family relationship are mapped
// to individual entries. Ambiguous photos remain available in the reference
// package instead of being presented as exact menu claims.
export const menuPhotoAssets = {
  'kohi-rocks': menuPhoto(
    'kohi-rocks.webp',
    'Café frío Maneki con cajeta y hielo.',
    '01-cafe-frio-cajeta.webp'
  ),
  'tokyo-frappe': menuPhoto(
    'tokyo-frappe.webp',
    'Frappé frío Maneki de chocolate con galleta.',
    '02-frappe-chocolate-oreo.webp'
  ),
  'matcha-kiss': menuPhoto(
    'matcha-kiss.webp',
    'Matcha frío Maneki clásico con hielo.',
    '03-matcha-frio-clasico.webp'
  ),
  'midori-cloud': menuPhoto(
    'midori-cloud.webp',
    'Matcha frío Maneki con crema y galleta.',
    '04-matcha-frio-crema-galleta.webp'
  ),
  'kuro-berry': menuPhoto(
    'kuro-berry.webp',
    'Refresher Maneki de frutos rojos.',
    '06-refresher-frutos-rojos.webp'
  ),
  'limon-neko': menuPhoto(
    'limon-neko.webp',
    'Limonada mineral Maneki con limón.',
    '07-limonada-limon.webp'
  ),
  'kohi-americano': menuPhoto(
    'kohi-americano.webp',
    'Café americano caliente Maneki.',
    '09-cafe-caliente-americano.webp'
  ),
  'kohi-latte': menuPhoto(
    'kohi-latte.webp',
    'Café latte caliente Maneki con arte en espuma.',
    '10-cafe-caliente-latte.webp'
  ),
  'matcha-cloud': menuPhoto(
    'matcha-cloud.webp',
    'Matcha caliente Maneki con arte en espuma.',
    '11-matcha-caliente-latte.webp'
  ),
  'pancake-neko': menuPhoto(
    'pancake-neko.webp',
    'Hot cakes Maneki con chocolate y toppings.',
    '17-pancakes-chocolate.webp'
  ),
  'pancake-fruity': menuPhoto(
    'pancake-fruity.webp',
    'Hot cakes Maneki con fresa y plátano.',
    '18-pancakes-fruta.webp'
  ),
  'mantou-cloud': menuPhoto(
    'mantou-cloud.webp',
    'Mantou dulce Maneki relleno de crema.',
    '19-mantou-crema.webp'
  ),
  'sando-choco': menuPhoto(
    'sando-choco.webp',
    'Sando Maneki de chocolate y plátano.',
    '22-sando-chocolate-platano.webp'
  ),
};

const brandPhoto = (src, alt, source, width, height, status = 'CONCEPTUAL BRAND ARTWORK') => ({
  src: `/images/maneki/brand/${src}`,
  alt,
  source,
  width,
  height,
  status,
});

export const brandAssets = {
  collectibleBox: brandPhoto(
    'neko-neko-box.webp',
    'Caja conceptual armada de Neko Neko Adventures para el universo de cajas sorpresa.',
    'neko-neko-caja-sorpresa-sin-fondo.webp',
    587,
    807
  ),
  collectibleBlack: brandPhoto(
    'neko-neko-black.webp',
    'Variante conceptual de llavero Neko Neko negro con ojos amarillos.',
    'neko-neko-llavero-negro-clasico-sin-fondo.webp',
    578,
    773
  ),
  collectibleGlasses: brandPhoto(
    'neko-neko-glasses.webp',
    'Variante conceptual de llavero Neko Neko negro con gafas.',
    'neko-neko-llavero-negro-gafas-sin-fondo.webp',
    578,
    779
  ),
  collectiblePink: brandPhoto(
    'neko-neko-pink.webp',
    'Variante conceptual de llavero Neko Neko rosa.',
    'neko-neko-llavero-rosa-sin-fondo.webp',
    659,
    907
  ),
  manekiMiniIllustration: brandPhoto(
    'maneki-mini-illustration.svg',
    'Ilustración conceptual de un carrito móvil Maneki con toldo, ventanilla de servicio y ruedas.',
    'Phase 5I.1 original conceptual SVG treatment based on the authorized Maneki Mini direction.',
    960,
    620
  ),
  uniformFront: brandPhoto(
    'uniform-front.webp',
    'Uniforme conceptual Maneki con playeras blancas y mandiles negros.',
    'maneki-uniformes-frente.webp',
    1254,
    1254
  ),
  uniformBack: brandPhoto(
    'uniform-back.webp',
    'Uniforme conceptual Maneki visto desde atrás con mandiles rosa y oliva.',
    'maneki-uniformes-espalda.webp',
    1312,
    1199
  ),
  loyaltyCard: brandPhoto(
    'loyalty-card.webp',
    'Propuesta gráfica conceptual de tarjeta de lealtad Maneki y Neko Neko.',
    'maneki-tarjeta-lealtad-sin-fondo.webp',
    854,
    980
  ),
};
