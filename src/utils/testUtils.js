import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import testStore from "../redux/testStore";

const renderWithProviders = (
  ui,
  { preloadedState = {}, ...renderOptions } = {}
) => {
  // console.log("preloadedState: ", preloadedState);
  const store = testStore(preloadedState);
  // console.log("Store state", store.getState());
  const Wrapper = ({ children }) => (
    <Provider store={store}>{children}</Provider>
  );
  return render(ui, { wrapper: Wrapper, ...renderOptions });
};

export * from "@testing-library/react";
export { renderWithProviders as render };
