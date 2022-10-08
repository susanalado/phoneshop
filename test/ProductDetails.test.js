import React from 'react';
import { render } from '@testing-library/react';
import { Router, Route } from "react-router-dom";
import { createMemoryHistory } from "history";
import ProductDetail from '../src/Components/ProductDetail';

describe('ProductDetail', () => {
  test('renders ProductDetail component', () => {
    renderWithRouterMatch(ProductDetail, {
      route: "/products/cGjFJlmqNPIwU59AOcY8H",
      path: "/products/:productId"
    });
  });
});


// Helper function
export function renderWithRouterMatch(
  ui,
  {
    path = "/",
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] })
  } = {}
) {
  return {
    ...render(
      <Router history={history}>
        <Route path={path} component={ui} />
      </Router>
    )
  };
}