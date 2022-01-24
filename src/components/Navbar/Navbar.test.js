import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';
import '@testing-library/jest-dom/extend-expect';

test('renders title sofias cocktail site', () => {
  const {getByTestId} = render(<Navbar />);
  const title = getByTestId("title"); 
  expect(title.textContent).toBe("sofia's cocktail site")
});

test('renders home table on nav', () => {
  const {getByTestId} = render(<Navbar />);
  const title = getByTestId("home"); 
  expect(title.textContent).toBe("Home")
});

test('renders about table on nav', () => {
  const {getByTestId} = render(<Navbar />);
  const title = getByTestId("about"); 
  expect(title.textContent).toBe("About")
});

test('renders support table on nav', () => {
  const {getByTestId} = render(<Navbar />);
  const title = getByTestId("support"); 
  expect(title.textContent).toBe("Support")
});
