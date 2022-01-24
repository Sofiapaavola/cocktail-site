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

// const addTask = (tasks) => {
//   const inputElement = screen.getByPlaceholderText(/search for a cocktail.../i);
//   const buttonElement = screen.getByRole("button", { name: /Search/i} );
//   tasks.forEach((task) => {
//       fireEvent.change(inputElement, { target: { value: task } });
//       fireEvent.click(buttonElement);
//   })
// }

// it('should be able to type into input', () => {
//   render(
//       <MockApp />
//   );
//   addTask(["Kiwi"])
//   const divElement = screen.getByText(/Kiwi/i);
//   expect(divElement).toBeInTheDocument()
// });

