import Home from "../pages/index";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Home", () => {
    it("renders home", () => {
        render(<Home />);
        expect(screen.getByTestId("result")).toBeInTheDocument();
        expect(screen.getByTestId("xxxxxx")).toBeInTheDocument();
    });
  });