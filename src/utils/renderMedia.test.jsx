import { render, screen } from "@testing-library/react";
import RenderMedia from "./renderMedia";

// Test to check if Swiper renders correctly
test("renders Swiper component with slides", () => {
  render(<RenderMedia />);

  // Check if Swiper exists in the DOM
  const swiper = screen.getByTestId("swiper-testid");
  expect(swiper).toBeInTheDocument();

  // Check if at least one SwiperSlide exists
  const slides = screen.getAllByTestId("swiper-slide-testid");
  expect(slides.length).toBeGreaterThan(0);
});
