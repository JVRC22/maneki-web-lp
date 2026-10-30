import { fireEvent, render, screen } from '@testing-library/react';
import NekoNekoSection from './NekoNekoSection';

test('keeps the Neko Neko greeting accessible and presents feedback without a stage disclaimer', () => {
  render(<NekoNekoSection />);

  const greetingButton = screen.getByRole('button', { name: 'Saludar a Neko Neko' });

  expect(greetingButton).toHaveAttribute('aria-pressed', 'false');
  expect(screen.getByText('Un personaje para descubrir algo nuevo.')).toHaveAttribute('aria-live', 'polite');
  expect(screen.queryByText('Referencia conceptual de personaje.')).not.toBeInTheDocument();

  fireEvent.click(greetingButton);

  expect(greetingButton).toHaveAttribute('aria-pressed', 'true');
  expect(screen.getByText('Neko Neko te devuelve el saludo.')).toHaveAttribute('aria-live', 'polite');
});

test('keeps the character and greeting usable with reduced motion enabled', () => {
  const originalMatchMedia = window.matchMedia;
  window.matchMedia = (query) => ({
    matches: query === '(prefers-reduced-motion: reduce)',
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  });

  try {
    render(<NekoNekoSection />);

    const greetingButton = screen.getByRole('button', { name: 'Saludar a Neko Neko' });
    expect(greetingButton).toBeVisible();
    expect(screen.getByRole('img', { name: /Gato negro de peluche Neko Neko/i })).toBeVisible();

    fireEvent.click(greetingButton);

    expect(screen.getByText('Neko Neko te devuelve el saludo.')).toBeInTheDocument();
  } finally {
    window.matchMedia = originalMatchMedia;
  }
});
