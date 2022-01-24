import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';
import '@testing-library/jest-dom/extend-expect';

test('renders title sofias cocktail site', () => {
  const {getByTestId} = render(<Navbar />);
  const title = getByTestId("title"); 
  expect(title.textContent).toBe("sofia's cocktail site")
});
