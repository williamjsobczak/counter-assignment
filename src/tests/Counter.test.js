// import necessary react testing library helpers here
import { render, fireEvent, screen } from "@testing-library/react";
// import the Counter component here
import Counter from "../components/Counter.js";

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMsg = screen.getByText(/Counter/i);
  expect(counterMsg).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const initialCount = screen.getByTestId(/count/i);
  expect(initialCount).toHaveTextContent(/0/i);
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const incrementCount = screen.getByText("+");
  fireEvent.click(incrementCount);

  const incrementVal = screen.getByTestId(/count/i);
  expect(incrementVal).toHaveTextContent(/1/i);
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const decrementCount = screen.getByText("-");
  fireEvent.click(decrementCount);

  const decrementVal = screen.getByTestId(/count/i);
  expect(decrementVal).toHaveTextContent(/-1/i);
});
