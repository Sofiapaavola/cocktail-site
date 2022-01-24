import { render, screen } from '@testing-library/react';
import App from './App';

describe("<App />", () => {
  it("Renders <App /> component correctly", () => {
    render(<App />);
    expect(
      screen.getByText(/sofia's cocktail site/i)
    ).toBeInTheDocument();
  });
});

