const familyById = {
  'kohi-rocks': 'Café frío',
  'tokyo-frappe': 'Café frío',
  'yume-latte': 'Café frío',
  'matcha-kiss': 'Matcha frío',
  'midori-cloud': 'Matcha frío',
  'hanami-dream': 'Matcha frío',
  'zen-citrus': 'Refreshers asiáticos',
  'kuro-berry': 'Refreshers asiáticos',
  'yuzu-bloom': 'Refreshers asiáticos',
  'limon-neko': 'Limonadas minerales',
  'maneki-lime': 'Limonadas minerales',
  'yuzu-breeze': 'Limonadas minerales',
  'bubble-pop': 'Bubble tea',
  'kohi-americano': 'Café caliente',
  'kohi-latte': 'Café caliente',
  'dalgona-warm': 'Café caliente',
  'ocha-classic': 'Tés calientes',
  'ocha-bloom': 'Tés calientes',
  'matcha-cloud': 'Tés calientes',
  'onigiri-crunch': 'Onigiri empanizado',
  'onigiri-ocean': 'Onigiri empanizado',
  'onigiri-teri': 'Onigiri empanizado',
  'pancake-neko': 'Pancakes',
  'pancake-fruity': 'Pancakes',
  'pancake-dream': 'Pancakes',
  'mantou-cloud': 'Mantou dulces',
  'mantou-choco': 'Mantou dulces',
  'mantou-crunch': 'Mantou dulces',
  'sando-cloud': 'Creamy sando',
  'sando-choco': 'Creamy sando',
  'sando-biscoff': 'Creamy sando',
};

const confirmedPrice = (display) => {
  const numericValue = display.replace(/\+/g, '').replace(/\$/g, '').replace('–', '-');
  const [minimum, maximum] = numericValue.split('-').map(Number);

  return {
    currency: 'MXN',
    display,
    minimum,
    maximum: maximum || minimum,
    isRange: Boolean(maximum),
  };
};

const product = (id, category, name, flavors, level, documentedPrice, description) => ({
  id,
  category,
  family: familyById[id] || category,
  name,
  flavors,
  level,
  discoveryLabel: {
    'Safe Food': 'Para empezar',
    Nicho: 'Para explorar',
    Novedad: 'Algo distinto',
  }[level],
  documentedPrice,
  publicPrice: documentedPrice,
  price: confirmedPrice(documentedPrice),
  priceStatus: 'CONFIRMED',
  description,
  type: 'product',
});

export const menuCategories = [
  { id: 'all', label: 'Todo el menú' },
  { id: 'cold-drinks', label: 'Bebidas frías' },
  { id: 'hot-drinks', label: 'Bebidas calientes' },
  { id: 'savory', label: 'Comida salada' },
  { id: 'sweet', label: 'Comida dulce' },
  { id: 'extras', label: 'Extras' },
  { id: 'combos', label: 'Combos' },
];

export const menuItems = [
  product('kohi-rocks', 'cold-drinks', 'Kohi Rocks', ['Vainilla', 'Lechera', 'Cajeta'], 'Safe Food', '$75', 'Café frío pensado para empezar con un sabor familiar.'),
  product('tokyo-frappe', 'cold-drinks', 'Tokyo Frappé', ['Nutella', 'Biscoff', 'Oreo'], 'Nicho', '$80', 'Una bebida fría cremosa con sabores conocidos y un giro asiático.'),
  product('yume-latte', 'cold-drinks', 'Yume Latte', ['Mazapán', 'Pistache', 'Tiramisú'], 'Novedad', '$85', 'Café frío para explorar combinaciones más intensas.'),
  product('matcha-kiss', 'cold-drinks', 'Matcha Kiss', ['Clásico'], 'Safe Food', '$75', 'Matcha frío en su versión más directa y accesible.'),
  product('midori-cloud', 'cold-drinks', 'Midori Cloud', ['Nutella', 'Lechera', 'Oreo'], 'Nicho', '$80', 'Matcha frío con opciones familiares para descubrirlo a tu ritmo.'),
  product('hanami-dream', 'cold-drinks', 'Hanami Dream', ['Frutas de temporada'], 'Novedad', '$85', 'Matcha frío con una combinación frutal de temporada.'),
  product('zen-citrus', 'cold-drinks', 'Zen Citrus', ['Limón', 'Mango', 'Fresa'], 'Safe Food', '$65–75', 'Refresher ligero, frío y fácil de elegir.'),
  product('kuro-berry', 'cold-drinks', 'Kuro Berry', ['Durazno', 'Lichi', 'Frutos rojos'], 'Nicho', '$70–75', 'Fruta y té en una mezcla de perfil más expresivo.'),
  product('yuzu-bloom', 'cold-drinks', 'Yuzu Bloom', ['Lychee', 'Pera', 'Uva'], 'Novedad', '$80–85', 'Refresher inspirado en notas florales y frutales.'),
  product('limon-neko', 'cold-drinks', 'Limón Neko', ['Limón', 'Miel', 'Clásico'], 'Safe Food', '$65', 'Limonada mineral fresca para cualquier momento.'),
  product('maneki-lime', 'cold-drinks', 'Maneki Lime', ['Fresa', 'Mango', 'Maracuyá'], 'Nicho', '$70', 'Una limonada mineral con fruta y acidez brillante.'),
  product('yuzu-breeze', 'cold-drinks', 'Yuzu Breeze', ['Yuzu', 'Lychee', 'Pepino'], 'Novedad', '$75', 'Limonada mineral para quienes quieren probar algo distinto.'),
  product('bubble-pop', 'cold-drinks', 'Bubble Pop', ['Té negro', 'Tapioca', 'Frutas'], 'Nicho', '$80', 'Té frío con textura y fruta.'),
  product('kohi-americano', 'hot-drinks', 'Kohi Americano', ['Clásico'], 'Safe Food', '$50', 'Café caliente de perfil familiar.'),
  product('kohi-latte', 'hot-drinks', 'Kohi Latte', ['Clásico'], 'Nicho', '$65', 'Café caliente suave y cremoso.'),
  product('dalgona-warm', 'hot-drinks', 'Dalgona Warm', ['Lechera', 'Cajeta', 'Nutella'], 'Novedad', '$70–72', 'Café caliente con sabores dulces de inspiración asiática.'),
  product('ocha-classic', 'hot-drinks', 'Ocha Classic', ['Limón', 'Miel', 'Clásico'], 'Safe Food', '$55', 'Té caliente para empezar por lo conocido.'),
  product('ocha-bloom', 'hot-drinks', 'Ocha Bloom', ['Limón', 'Miel', 'Clásico'], 'Nicho', '$65', 'Una pausa caliente con perfil floral y cítrico.'),
  product('matcha-cloud', 'hot-drinks', 'Matcha Cloud', ['Clásico'], 'Novedad', '$75–80', 'Matcha caliente para descubrir otra temperatura y textura.'),
  product('onigiri-crunch', 'savory', 'Onigiri Crunch', ['Carne empanizada', 'Aguacate', 'Pepino', 'Queso crema'], 'Safe Food', '$100', 'Onigiri empanizado, sin alga, con sabores familiares.'),
  product('onigiri-ocean', 'savory', 'Onigiri Ocean', ['Surimi', 'Aguacate', 'Pepino', 'Queso crema'], 'Nicho', '$95', 'Una interpretación fresca y cremosa del onigiri.'),
  product('onigiri-teri', 'savory', 'Onigiri Teri', ['Pollo teriyaki', 'Aguacate', 'Pepino', 'Queso crema'], 'Novedad', '$100', 'Pollo teriyaki y contrastes frescos en formato empanizado.'),
  product('pancake-neko', 'sweet', 'Pancake Neko', ['Nutella', 'Lechera', 'Honey butter'], 'Safe Food', '$65–75', 'Hot cakes suaves con toppings familiares.'),
  product('pancake-fruity', 'sweet', 'Pancake Fruity', ['Plátano', 'Fresa', 'Almendras'], 'Nicho', '$75', 'Hot cakes con fruta y textura crujiente.'),
  product('pancake-dream', 'sweet', 'Pancake Dream', ['Matcha', 'Ube', 'Chocolate', 'Cajeta', 'Temporada'], 'Novedad', '$95–110', 'Una versión más aventurada de los hot cakes tipo Asia.'),
  product('mantou-cloud', 'sweet', 'Mantou Cloud', ['Crema de vainilla', 'Azúcar glass'], 'Safe Food', '$70', 'Mantou dulce de textura suave y sabor familiar.'),
  product('mantou-choco', 'sweet', 'Mantou Choco', ['Nutella', 'Plátano', 'Almendras'], 'Nicho', '$75', 'Mantou dulce con chocolate, fruta y textura.'),
  product('mantou-crunch', 'sweet', 'Mantou Crunch', ['Crema de Oreo', 'Galleta triturada'], 'Novedad', '$75', 'Una versión crujiente y más intensa del mantou dulce.'),
  product('sando-cloud', 'sweet', 'Sando Cloud', ['Crema de vainilla', 'Azúcar glass'], 'Safe Food', '$65', 'Creamy sando ligero y dulce.'),
  product('sando-choco', 'sweet', 'Sando Choco', ['Nutella', 'Plátano', 'Almendras'], 'Nicho', '$75', 'Sando cremoso con chocolate, fruta y almendras.'),
  product('sando-biscoff', 'sweet', 'Sando Biscoff', ['Crema de Biscoff', 'Galleta triturada'], 'Novedad', '$85', 'Creamy sando con notas especiadas y textura crujiente.'),
];

export const menuExtras = [
  { id: 'cloud-foam', category: 'extras', family: 'Extras', name: 'Cloud Foam', description: 'Foam opcional para personalizar tu bebida.', options: ['Vainilla', 'Cajeta', 'Lechera', 'Plátano', 'Fresa', 'Biscoff', 'Nutella', 'Oreo', 'Mazapán', 'Pistache'], documentedPrice: '+$10–12', publicPrice: '+$10–12', price: confirmedPrice('+$10–12'), priceStatus: 'CONFIRMED', type: 'extra' },
  { id: 'pop-pearls', category: 'extras', family: 'Extras', name: 'Pop Pearls', description: 'Bolitas que explotan como adicional.', options: [], documentedPrice: '+$10', publicPrice: '+$10', price: confirmedPrice('+$10'), priceStatus: 'CONFIRMED', type: 'extra' },
  { id: 'bubble-tapioca', category: 'extras', family: 'Extras', name: 'Bubble Tapioca', description: 'Tapioca como adicional.', options: [], documentedPrice: '+$10', publicPrice: '+$10', price: confirmedPrice('+$10'), priceStatus: 'CONFIRMED', type: 'extra' },
];

export const menuCombos = [
  { id: 'combo-neko', category: 'combos', family: 'Combos', name: 'Combo Neko', description: '1 bebida fría + 1 onigiri.', documentedPrice: '$160', publicPrice: '$160', price: confirmedPrice('$160'), priceStatus: 'CONFIRMED', type: 'combo' },
  { id: 'combo-maneki', category: 'combos', family: 'Combos', name: 'Combo Maneki', description: '1 bebida fría + 1 postre.', documentedPrice: '$130', publicPrice: '$130', price: confirmedPrice('$130'), priceStatus: 'CONFIRMED', type: 'combo' },
  { id: 'combo-yume', category: 'combos', family: 'Combos', name: 'Combo Yume', description: '2 postres + 2 bebidas.', documentedPrice: '$220', publicPrice: '$220', price: confirmedPrice('$220'), priceStatus: 'CONFIRMED', type: 'combo' },
  { id: 'combo-matcha-lover', category: 'combos', family: 'Combos', name: 'Combo Matcha Lover', description: 'Matcha Kiss + Matcha Cloud.', documentedPrice: '$150', publicPrice: '$150', price: confirmedPrice('$150'), priceStatus: 'CONFIRMED', type: 'combo' },
];

export const allMenuItems = [...menuItems, ...menuExtras, ...menuCombos];

const starterMenuItemIds = [
  'kohi-rocks',
  'matcha-kiss',
  'zen-citrus',
  'onigiri-crunch',
  'pancake-neko',
  'sando-cloud',
];

export const starterMenuItems = starterMenuItemIds.map((id) => allMenuItems.find((item) => item.id === id));

export const menuMeta = {
  documentedProductCount: 31,
  extraCount: menuExtras.length,
  comboCount: menuCombos.length,
  starterCount: starterMenuItems.length,
  documentedBaseVariantCount: 60,
  publicPriceStatus: 'CONFIRMED',
};
