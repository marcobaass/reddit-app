import { render, screen } from "@testing-library/react";
import { renderMedia } from "./renderMedia";

test("renders Swiper component with slides", () => {
  const mockPost = {
    media_metadata: {
      img1: { s: { u: "https://example.com/image1.jpg" } },
      img2: { s: { u: "https://example.com/image2.jpg" } },
    },
  };

  render(renderMedia(mockPost));

  const swiper = screen.getByTestId("swiper-testid");
  expect(swiper).toBeInTheDocument();

  const slides = screen.getAllByTestId("swiper-slide-testid");
  expect(slides.length).toBeGreaterThan(0);
});
