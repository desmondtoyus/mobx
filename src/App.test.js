import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "mobx-react";
import { store } from "./store";

test("renders learn react link", () => {
  render(
    <Provider store={store}>
      (<App />
    </Provider>
  );
  const linkElement = screen.getByText(/MobX/i);
  expect(linkElement).toBeInTheDocument();
});
