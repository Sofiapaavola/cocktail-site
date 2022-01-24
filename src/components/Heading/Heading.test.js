import { render, screen } from '@testing-library/react';
import Heading from './Heading';
import '@testing-library/jest-dom/extend-expect';

it('should render same text passed into heading prop', async () => {
  render(<Heading  title="My Header"/>);
  const title = screen.getByText(/My Header/i); 
  expect(title).toBeInTheDocument();
});
