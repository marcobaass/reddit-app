import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import testStore from "../redux/testStore";

const renderWithProviders = (ui, { preloadedState, ...renderOptions } = {}) => {
  const store = testStore(preloadedState);
  const Wrapper = ({ children }) => (
    <Provider store={store}>{children}</Provider>
  );
  return render(ui, { wrapper: Wrapper, ...renderOptions });
};

export * from "@testing-library/react";
export { renderWithProviders as render };
