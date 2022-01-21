import { render, screen } from '@testing-library/react';
import App from './App';

test('renders title sofias cocktail site', () => {
  render(<App />);
  const linkElement = screen.getByText(/sofia's cocktail site/i);
  expect(linkElement).toBeInTheDocument();
});
