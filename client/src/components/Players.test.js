
import React, {useEffect} from "react";
import { render, queryByText, getByTestId, getByPlaceholderText } from "@testing-library/react";
import "mutationobserver-shim";
import Navbar from "./Navbar"




test("renders Navbar without crashing", () => {
    render(<Navbar />);
  });