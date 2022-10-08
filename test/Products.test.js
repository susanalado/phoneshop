import React from 'react';
import { render } from '@testing-library/react';
import Products from '../src/Components/Products';

describe('Products', () => {
  test('renders Products component', () => {
    render(<Products />);
  });
});