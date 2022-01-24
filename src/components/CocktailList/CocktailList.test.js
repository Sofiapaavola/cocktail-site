import { render, screen } from '@testing-library/react';
import CocktailList from './CocktailList';
import '@testing-library/jest-dom/extend-expect';

test('renders correct title for "View Instructions" button', () => {
  const {getByTestId} = render(<CocktailList />);
  const title = getByTestId("instructionsButton"); 
  expect(title.textContent).toBe("View Instructions")
});
