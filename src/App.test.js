import { act, fireEvent, render, screen, within } from '@testing-library/react';
import App from './App';
import { allMenuItems, menuCombos, menuExtras, menuItems, menuMeta, starterMenuItems } from './data/menu';
import { menuPhotoAssets } from './data/assets';

test('renders the Maneki customer journey and primary menu path', () => {
  render(<App />);

  expect(screen.getByRole('heading', { level: 1, name: /MANEKI/i })).toBeInTheDocument();
  expect(within(screen.getByRole('main')).getAllByRole('link', { name: 'Explorar menú' })[0]).toHaveAttribute('href', '#menu');
  expect(screen.getByRole('heading', { level: 2, name: /elige con curiosidad/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { level: 2, name: /El gato te trae suerte/i })).toBeInTheDocument();
  expect(screen.queryByText(/lista VIP/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/Sakura Brew/i)).not.toBeInTheDocument();
});

test('filters the complete menu by category using accessible tabs', () => {
  render(<App />);

  const menuResults = screen.getByRole('tabpanel', { name: 'Todo el menú' });
  expect(within(menuResults).getByText('Kohi Rocks')).toBeInTheDocument();
  fireEvent.click(screen.getByRole('tab', { name: 'Bebidas calientes' }));

  expect(screen.getByText('Kohi Americano')).toBeInTheDocument();
  expect(screen.getByText('Dalgona Warm')).toBeInTheDocument();
  expect(within(menuResults).queryByText('Kohi Rocks')).not.toBeInTheDocument();
  expect(screen.getByRole('tab', { name: 'Bebidas calientes' })).toHaveAttribute('aria-selected', 'true');
});

test('renders confirmed prices and preserves family details across filters', () => {
  render(<App />);

  expect(screen.getByText(/Cada precio está expresado en pesos mexicanos\./)).toBeInTheDocument();
  expect(screen.queryByText('Precio por confirmar')).not.toBeInTheDocument();
  expect(screen.getAllByLabelText('Precio $75 pesos mexicanos').length).toBeGreaterThan(0);
  expect(screen.getByText(/Vainilla · Lechera · Cajeta/)).toBeInTheDocument();

  fireEvent.click(screen.getByRole('tab', { name: 'Combos' }));
  expect(screen.getByRole('heading', { level: 3, name: 'Combos' })).toBeInTheDocument();
  expect(screen.queryByText('Combo Onigiri + Bebida')).not.toBeInTheDocument();
  expect(screen.getAllByLabelText('Precio $160 pesos mexicanos').length).toBeGreaterThan(0);

  fireEvent.click(screen.getByRole('tab', { name: 'Extras' }));
  expect(screen.getByRole('heading', { level: 3, name: 'Extras' })).toBeInTheDocument();
  expect(screen.getByText(/Vainilla · Cajeta · Lechera/)).toBeInTheDocument();
  expect(screen.getByLabelText('Precio +$10–12 pesos mexicanos')).toBeInTheDocument();
});

test('starts with a concise menu discovery set without hiding the full catalog', () => {
  render(<App />);

  const results = screen.getByRole('tabpanel', { name: 'Todo el menú' });
  expect(within(results).getAllByRole('article')).toHaveLength(starterMenuItems.length);

  fireEvent.click(screen.getByRole('button', { name: 'Explorar el menú completo' }));

  expect(within(results).getAllByRole('article')).toHaveLength(allMenuItems.length);
  expect(screen.queryByText('Combo Onigiri + Bebida')).not.toBeInTheDocument();
  expect(screen.getByRole('status')).toHaveTextContent('38 opciones');
});

test('routes every discovery card to its documented menu family', () => {
  render(<App />);

  const discoveryButtons = screen.getAllByRole('button', { name: 'Explorar familia' });
  expect(discoveryButtons).toHaveLength(4);

  fireEvent.click(discoveryButtons[0]);
  expect(screen.getByRole('tab', { name: 'Bebidas frías' })).toHaveAttribute('aria-selected', 'true');

  fireEvent.click(discoveryButtons[3]);
  expect(screen.getByRole('tab', { name: 'Comida salada' })).toHaveAttribute('aria-selected', 'true');
});

test('supports arrow-key movement between menu categories', () => {
  render(<App />);

  const allMenuTab = screen.getByRole('tab', { name: 'Todo el menú' });
  act(() => allMenuTab.focus());
  fireEvent.keyDown(allMenuTab, { key: 'ArrowRight' });

  expect(screen.getByRole('tab', { name: 'Bebidas frías' })).toHaveAttribute('aria-selected', 'true');
  expect(screen.getByRole('tab', { name: 'Bebidas frías' })).toHaveFocus();
});

test('keeps all documented menu entries and confirmed price data', () => {
  expect(menuItems).toHaveLength(menuMeta.documentedProductCount);
  expect(menuExtras).toHaveLength(menuMeta.extraCount);
  expect(menuCombos).toHaveLength(menuMeta.comboCount);
  expect(allMenuItems).toHaveLength(38);
  expect(menuCombos.map((item) => item.id)).toEqual(['combo-neko', 'combo-maneki', 'combo-yume', 'combo-matcha-lover']);
  expect(allMenuItems.every((item) => menuPhotoAssets[item.id])).toBe(true);
  expect(new Set(Object.keys(menuPhotoAssets)).size).toBe(allMenuItems.length);
  expect(starterMenuItems).toHaveLength(menuMeta.starterCount);
  expect(menuMeta.publicPriceStatus).toBe('CONFIRMED');
  expect(allMenuItems.every((item) => item.publicPrice && item.priceStatus === 'CONFIRMED')).toBe(true);
  expect(allMenuItems.every((item) => item.price.currency === 'MXN' && item.price.display === item.publicPrice)).toBe(true);

  const expectedPrices = {
    'kohi-rocks': '$75', 'tokyo-frappe': '$80', 'yume-latte': '$85',
    'matcha-kiss': '$75', 'midori-cloud': '$80', 'hanami-dream': '$85',
    'zen-citrus': '$65–75', 'kuro-berry': '$70–75', 'yuzu-bloom': '$80–85',
    'limon-neko': '$65', 'maneki-lime': '$70', 'yuzu-breeze': '$75', 'bubble-pop': '$80',
    'kohi-americano': '$50', 'kohi-latte': '$65', 'dalgona-warm': '$70–72',
    'ocha-classic': '$55', 'ocha-bloom': '$65', 'matcha-cloud': '$75–80',
    'onigiri-crunch': '$100', 'onigiri-ocean': '$95', 'onigiri-teri': '$100',
    'pancake-neko': '$65–75', 'pancake-fruity': '$75', 'pancake-dream': '$95–110',
    'mantou-cloud': '$70', 'mantou-choco': '$75', 'mantou-crunch': '$75',
    'sando-cloud': '$65', 'sando-choco': '$75', 'sando-biscoff': '$85',
    'cloud-foam': '+$10–12', 'pop-pearls': '+$10', 'bubble-tapioca': '+$10',
    'combo-neko': '$160', 'combo-maneki': '$130', 'combo-yume': '$220',
    'combo-matcha-lover': '$150',
  };
  expect(Object.fromEntries(allMenuItems.map((item) => [item.id, item.publicPrice]))).toEqual(expectedPrices);
});

test('uses only verified menu-photo mappings for product imagery', () => {
  render(<App />);

  const menuResults = screen.getByRole('tabpanel', { name: 'Todo el menú' });
  expect(within(menuResults).getByRole('img', { name: /Kohi Rocks: Café frío Maneki/i })).toHaveAttribute('loading', 'lazy');
  expect(within(menuResults).getByRole('img', { name: /Matcha Kiss: Matcha frío Maneki/i })).toHaveAttribute('loading', 'lazy');
  expect(within(menuResults).getAllByRole('img', { name: /Onigiri/i }).length).toBeGreaterThan(0);
});

test('uses the corrected discovery image set in the intended order', () => {
  render(<App />);

  const discovery = screen.getByTestId('menu-discovery');
  const imageSources = within(discovery).getAllByRole('presentation').map((image) => image.getAttribute('src'));

  expect(imageSources).toEqual([
    '/images/menu/corrected/matcha-kiss.webp',
    '/images/menu/corrected/kohi-rocks.webp',
    '/images/menu/corrected/hanami-dream.webp',
    '/images/menu/corrected/onigiri-crunch.webp',
  ]);
});

test('isolates the mobile navigation and restores focus after closing', () => {
  render(<App />);

  const openButton = screen.getByRole('button', { name: 'Abrir navegación' });
  fireEvent.click(openButton);

  const appShell = screen.getByTestId('app-shell');
  expect(screen.getByRole('dialog', { name: 'Navegar' })).toBeInTheDocument();
  expect(appShell).toHaveAttribute('aria-hidden', 'true');
  expect(appShell).toHaveProperty('inert', true);
  expect(document.body.style.overflow).toBe('hidden');

  fireEvent.keyDown(window, { key: 'Escape' });

  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  expect(appShell).not.toHaveAttribute('aria-hidden');
  expect(appShell).toHaveProperty('inert', false);
  expect(document.body.style.overflow).toBe('');
  expect(openButton).toHaveFocus();
});

test('integrates conceptual visuals with truthful alternative text and loading policy', () => {
  render(<App />);

  const matchaImages = screen.getAllByRole('img', { name: /Matcha Kiss: Matcha frío Maneki/i });
  expect(matchaImages.some((image) => image.getAttribute('src') === '/images/menu/corrected/matcha-kiss.webp')).toBe(true);
  expect(screen.getByRole('heading', { level: 3, name: 'Neko Neko Adventures' })).toBeInTheDocument();
  expect(screen.getByRole('img', { name: /gato negro de peluche/i })).toHaveAttribute('loading', 'lazy');
  expect(screen.getByRole('img', { name: /caja conceptual armada de neko neko adventures/i })).toHaveAttribute('loading', 'lazy');
  expect(screen.getByRole('img', { name: /variante conceptual de llavero neko neko negro con gafas/i })).toHaveAttribute('loading', 'lazy');
  expect(screen.getByRole('img', { name: /variante conceptual de llavero neko neko rosa/i })).toHaveAttribute('loading', 'lazy');
  expect(screen.getAllByRole('img', { name: /Hanami Dream: Matcha frío Maneki con fruta de temporada/i })
    .some((image) => image.getAttribute('loading') === 'lazy')).toBe(true);
  expect(screen.getByRole('img', { name: /ilustración conceptual de un carrito móvil maneki/i })).toHaveAttribute('src', '/images/maneki/brand/maneki-mini-illustration.svg');
});

test('switches the featured specimen without changing the menu state', () => {
  render(<App />);

  fireEvent.click(screen.getByRole('tab', { name: 'Por temporada' }));

  expect(screen.getByRole('tab', { name: 'Por temporada' })).toHaveAttribute('aria-selected', 'true');
  expect(screen.getByRole('tabpanel', { name: 'Por temporada' })).toHaveTextContent('Colección conceptual en evaluación.');
  expect(screen.getByRole('tabpanel', { name: 'Todo el menú' })).toBeInTheDocument();
});

test('autoplays featured specimens and resets the timer after a manual selection', () => {
  jest.useFakeTimers();

  try {
    render(<App />);

    expect(screen.getByRole('tab', { name: 'Matcha frío' })).toHaveAttribute('aria-selected', 'true');

    act(() => jest.advanceTimersByTime(5000));
    expect(screen.getByRole('tab', { name: 'Por temporada' })).toHaveAttribute('aria-selected', 'true');

    fireEvent.click(screen.getByRole('tab', { name: 'Café frío' }));
    act(() => jest.advanceTimersByTime(4999));
    expect(screen.getByRole('tab', { name: 'Café frío' })).toHaveAttribute('aria-selected', 'true');

    act(() => jest.advanceTimersByTime(1));
    expect(screen.getByRole('tab', { name: 'Matcha frío' })).toHaveAttribute('aria-selected', 'true');
  } finally {
    jest.useRealTimers();
  }
});

test('pauses autoplay only while the featured controls are hovered', () => {
  jest.useFakeTimers();

  try {
    render(<App />);
    const controls = screen.getByTestId('featured-controls');

    fireEvent.mouseEnter(controls);
    act(() => jest.advanceTimersByTime(5000));
    expect(screen.getByRole('tab', { name: 'Matcha frío' })).toHaveAttribute('aria-selected', 'true');

    fireEvent.mouseLeave(controls);
    act(() => jest.advanceTimersByTime(5000));
    expect(screen.getByRole('tab', { name: 'Por temporada' })).toHaveAttribute('aria-selected', 'true');
  } finally {
    jest.useRealTimers();
  }
});

test('validates the clearly labeled contact demonstration without sending data', () => {
  render(<App />);

  fireEvent.click(screen.getByRole('button', { name: 'Validar demostración' }));
  expect(screen.getByRole('alert')).toHaveTextContent('Revisa los campos marcados');

  fireEvent.change(screen.getByLabelText(/^Nombre/), { target: { value: 'Mariana' } });
  fireEvent.change(screen.getByLabelText(/^Correo electrónico/), { target: { value: 'mariana@example.com' } });
  fireEvent.change(screen.getByLabelText(/^Motivo de contacto/), { target: { value: 'mini' } });
  fireEvent.change(screen.getByLabelText(/^Mensaje/), { target: { value: 'Me interesa llevar Maneki Mini a mi universidad.' } });
  fireEvent.click(screen.getByRole('button', { name: 'Validar demostración' }));

  expect(screen.getByText(/Demostración completada\./)).toHaveTextContent('no se envió a ningún destinatario');
});

test('presents the approved story content and routes Maneki Mini to the demo contact reason', () => {
  render(<App />);

  expect(screen.getByText(/Posicionar a Maneki como la cafetería de fusión asiática-mexicana/)).toBeInTheDocument();
  expect(screen.getByText(/Para 2031, Maneki será la cafetería de fusión asiática-mexicana/)).toBeInTheDocument();
  expect(screen.getByText('2031')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('¿Cómo te llamas?')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('tu-correo@ejemplo.com')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Cuéntanos un poco sobre tu idea...')).toBeInTheDocument();
  expect(screen.getByRole('option', { name: 'Eventos' })).toBeInTheDocument();

  fireEvent.click(screen.getByRole('link', { name: 'Proponer Maneki Mini' }));

  expect(screen.getByLabelText(/^Motivo de contacto/)).toHaveValue('mini');
});
