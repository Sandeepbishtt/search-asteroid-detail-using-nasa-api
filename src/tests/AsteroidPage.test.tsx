import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "../Redux/Store";
import React from "react";
import SearchAsteroid from "../Components/SearchAsteroid";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom/extend-expect';
describe("Home Component tests", () => {
  let container: HTMLDivElement;
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    ReactDOM.render(
      <React.StrictMode>
        <BrowserRouter>
          <Provider store={store}>
            <SearchAsteroid />
          </Provider>
        </BrowserRouter>
      </React.StrictMode>,
      container
    );
  });
  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });
  it("Render correctly initial document", () => {
    expect(container).toMatchSnapshot();
  });
});

