import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  it("render Reddit App as header", () => {
    render(<Header />);
    const title = screen.getAllByText("Reddit App");
    expect(title).toExist;
  });
});
