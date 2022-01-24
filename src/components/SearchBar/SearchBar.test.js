import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';
import '@testing-library/jest-dom/extend-expect';

it('should render correct placeholder text', async () => {
  render(<SearchBar cocktails={[]} placeholder="placeholder"/>);
  const placeholder = screen.getByPlaceholderText(/placeholder/i); 
  expect(placeholder).toBeInTheDocument();
});

it('should be able to type in input', async () => {
    render(<SearchBar cocktails={[]} placeholder="placeholder"/>);
    const input = screen.getByPlaceholderText(/placeholder/i); 
    fireEvent.change(input, { target: { value: "Kiwi"}})
    expect(input.value).toBe("Kiwi");
  });