import { Provider } from "react-redux";
import store from "../Redux/Store";
import React from "react";
import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import "@testing-library/jest-dom";
import AsteroidDetail from "../Components/AsteroidDetail";
import {Router } from "react-router-dom";

it("renders location state", () => {
    const history = createMemoryHistory();
    const data = {
     val:{
      absolute_magnitude_h: 10.43,
      designation: "433",
      id: "2000433",
      is_potentially_hazardous_asteroid: false,
      is_sentry_object: false,
      name: "433 Eros (A898 PA)",
      name_limited: "Eros",
      nasa_jpl_url: "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2000433",
      neo_reference_id: "2000433",
     }
    };
    history.push(`./AsteroidDetail/`, data);
    
    const { getByTestId } = render(
      <Router history={history}>
        <Provider store={store}>
          <AsteroidDetail />
        </Provider>
      </Router>
    );
  getByTestId(`location`);
  expect('name:433 Eros (A898 PA)').toBe(`name:${data.val.name}`)
  });
  