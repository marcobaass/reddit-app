import { render, screen } from "../../utils/testUtils"; // Import custom render
import { MemoryRouter } from "react-router-dom";
import Header from "./Header";

describe("Header", () => {
  it("Have reddish as title", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const title = screen.getAllByText("reddish");
    expect(title).toExist;
  });
  it("On click navigate to home page", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const link = screen.getByRole("link", { name: /reddish/ });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/");
  });
});
