import React from "react";
import { render, queryByText, getByTestId, getByPlaceholderText } from "@testing-library/react";
import "mutationobserver-shim";
import App from "./App";
import Players from "./components/Players"
import NavBar from "./components/Navbar"



test("renders App without crashing", () => {
  render(<App />);
});
  
it('renders "name" text', () => {
  const { queryByText } = render(
    <App />
    );
    const name = queryByText(/Name/i);
  });
  it('renders "country" text', () => {
    const { queryByText } = render(
      <App />
      );
      const country = queryByText(/Country/i);
    });
    it('renders "searches" text', () => {
      const { queryByText } = render(
        <App />
        );
        const searches = queryByText(/Searches/i);
      });
 
  
  /* 
 */

/* it('input for first name required" text', () => {
  const firstNameInput = render(
    <App />);
  expect(firstNameInput.getByPlaceholderText("bill")).toBeRequired();
});

it('input for last name required" text', () => {
 const lastNameInput = render(<App />);
   expect(lastNameInput.getByPlaceholderText("luo")).toBeRequired();

});
 */