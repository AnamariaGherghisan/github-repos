import { render, screen } from "@testing-library/react";
import { App } from "./App";

it("should render component", () => {
  render(<App />);
  expect(screen.getByTestId("app")).toBeInTheDocument();
});
