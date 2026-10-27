import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { allMenuItems, menuCombos, menuExtras, menuItems, menuMeta } from './data/menu';

test('renders the Maneki customer journey and primary menu path', () => {
  render(<App />);

  expect(screen.getByRole('heading', { level: 1, name: 'MANEKI' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Explorar menú' })).toHaveAttribute('href', '#menu');
  expect(screen.getByRole('heading', { level: 2, name: /Empieza por lo conocido/i })).toBeInTheDocument();
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

test('keeps the documented menu families and pending price policy in data', () => {
  expect(menuItems).toHaveLength(menuMeta.documentedProductCount);
  expect(menuExtras).toHaveLength(menuMeta.extraCount);
  expect(menuCombos).toHaveLength(menuMeta.comboCount);
  expect(allMenuItems).toHaveLength(39);
  expect(allMenuItems.every((item) => item.publicPrice === null)).toBe(true);
});
