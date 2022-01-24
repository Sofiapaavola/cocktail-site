import { render, screen } from '@testing-library/react';
import CocktailInstructionsComponent from './CocktailInstructionsComponent';
import '@testing-library/jest-dom/extend-expect';

test('renders correct titles for the instructions page', () => {
  const {getByTestId} = render(<CocktailInstructionsComponent />);
  const title = getByTestId("ingredientsTitle"); 
  expect(title.textContent).toBe("Ingredients")

  const title2 = getByTestId("instructionsCardTitle"); 
  expect(title2.textContent).toBe("Instructions")
});
