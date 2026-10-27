import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the landing page baseline and its primary conversion path', () => {
  render(<App />);

  expect(
    screen.getByRole('heading', { level: 1, name: /Sakura Brew Café/i })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('link', { name: /Quiero mi invitación de apertura/i })
  ).toHaveAttribute('href', '#lista-vip');
  expect(
    screen.getByRole('heading', { level: 2, name: /probar Sakura Brew/i })
  ).toBeInTheDocument();
});
