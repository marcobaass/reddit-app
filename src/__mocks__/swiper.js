jest.mock('swiper/react', () => ({
  Swiper: ({ children }) => <div data-testid="swiper-testid">{children}</div>,
  SwiperSlide: ({ children }) => <div data-testid="swiper-slide-testid">{children}</div>,
}));

jest.mock('swiper/modules', () => ({
  Navigation: jest.fn(),
  Pagination: jest.fn(),
  Scrollbar: jest.fn(),
  A11y: jest.fn(),
}));
