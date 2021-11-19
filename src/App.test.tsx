import React from 'react';
import { render, screen } from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './Redux/Store'
import SearchAsteroid from './Components/SearchAsteroid';
import "@testing-library/jest-dom";
test('renders learn react link', () => {
  render( <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <SearchAsteroid/>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,);
  const linkElement = screen.getByText(/Search Asteroid/i);
  expect(linkElement).toBeInTheDocument();
});