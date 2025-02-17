import { render, screen } from "@testing-library/react";
import { Banner } from ".";

describe("Banner", () => {
  it("should render the component", () => {
    render(<Banner />);
    expect(screen.getByTestId("header")).toBeInTheDocument();
  });

  it("should render the expected title", () => {
    render(<Banner />);
    expect(screen.getByTestId("title")).toHaveTextContent("GitHub Directory");
  });

  it("should render the expected sub-title", () => {
    render(<Banner />);
    expect(screen.getByTestId("sub-title")).toHaveTextContent(
      "A list of all your GitHub repositories"
    );
  });
});
