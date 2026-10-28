import { fireEvent, render, screen, within } from '@testing-library/react';
import App from './App';
import { allMenuItems, menuCombos, menuExtras, menuItems, menuMeta, starterMenuItems } from './data/menu';

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

  expect(screen.getByText('Kohi Rocks')).toBeInTheDocument();
  fireEvent.click(screen.getByRole('tab', { name: 'Bebidas calientes' }));

  expect(screen.getByText('Kohi Americano')).toBeInTheDocument();
  expect(screen.getByText('Dalgona Warm')).toBeInTheDocument();
  expect(screen.queryByText('Kohi Rocks')).not.toBeInTheDocument();
  expect(screen.getByRole('tab', { name: 'Bebidas calientes' })).toHaveAttribute('aria-selected', 'true');
});

test('keeps pending prices concise and preserves family details across filters', () => {
  render(<App />);

  expect(screen.getByText(/Los precios se publicarán cuando estén aprobados\./)).toBeInTheDocument();
  expect(screen.queryByText('Precio por confirmar')).not.toBeInTheDocument();
  expect(screen.getByText(/Vainilla · Lechera · Cajeta/)).toBeInTheDocument();

  fireEvent.click(screen.getByRole('tab', { name: 'Combos' }));
  expect(screen.getByRole('heading', { level: 3, name: 'Combos' })).toBeInTheDocument();
  expect(screen.getByText('Combo Onigiri + Bebida')).toBeInTheDocument();

  fireEvent.click(screen.getByRole('tab', { name: 'Extras' }));
  expect(screen.getByRole('heading', { level: 3, name: 'Extras' })).toBeInTheDocument();
  expect(screen.getByText(/Vainilla · Cajeta · Lechera/)).toBeInTheDocument();
});

test('starts with a concise menu discovery set without hiding the full catalog', () => {
  render(<App />);

  const results = screen.getByRole('tabpanel', { name: 'Todo el menú' });
  expect(within(results).getAllByRole('article')).toHaveLength(starterMenuItems.length);

  fireEvent.click(screen.getByRole('button', { name: 'Explorar el menú completo' }));

  expect(within(results).getAllByRole('article')).toHaveLength(allMenuItems.length);
  expect(screen.getByText('Combo Onigiri + Bebida')).toBeInTheDocument();
  expect(screen.getByRole('status')).toHaveTextContent('39 opciones');
});

test('supports arrow-key movement between menu categories', () => {
  render(<App />);

  const allMenuTab = screen.getByRole('tab', { name: 'Todo el menú' });
  allMenuTab.focus();
  fireEvent.keyDown(allMenuTab, { key: 'ArrowRight' });

  expect(screen.getByRole('tab', { name: 'Bebidas frías' })).toHaveAttribute('aria-selected', 'true');
  expect(screen.getByRole('tab', { name: 'Bebidas frías' })).toHaveFocus();
});

test('keeps the documented menu families and pending price policy in data', () => {
  expect(menuItems).toHaveLength(menuMeta.documentedProductCount);
  expect(menuExtras).toHaveLength(menuMeta.extraCount);
  expect(menuCombos).toHaveLength(menuMeta.comboCount);
  expect(allMenuItems).toHaveLength(39);
  expect(starterMenuItems).toHaveLength(menuMeta.starterCount);
  expect(allMenuItems.every((item) => item.publicPrice === null)).toBe(true);
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

  const matchaImages = screen.getAllByRole('img', { name: /lata conceptual de matcha/i });
  expect(matchaImages.find((image) => image.getAttribute('fetchpriority') === 'high')).toBeTruthy();
  expect(screen.getByRole('img', { name: /gato negro de peluche/i })).toHaveAttribute('loading', 'lazy');
  expect(screen.getByRole('img', { name: /empaque conceptual de neko neko adventures/i })).toHaveAttribute('loading', 'lazy');
  expect(screen.getByRole('img', { name: /display conceptual de neko neko adventures/i })).toHaveAttribute('loading', 'lazy');
  expect(screen.getByRole('img', { name: /bebida rosada conceptual/i })).toHaveAttribute('loading', 'lazy');
});

test('switches the featured specimen without changing the menu state', () => {
  render(<App />);

  fireEvent.click(screen.getByRole('tab', { name: 'Por temporada' }));

  expect(screen.getByRole('tab', { name: 'Por temporada' })).toHaveAttribute('aria-selected', 'true');
  expect(screen.getByRole('tabpanel', { name: 'Por temporada' })).toHaveTextContent('Colección conceptual en evaluación.');
  expect(screen.getByRole('tabpanel', { name: 'Todo el menú' })).toBeInTheDocument();
});
