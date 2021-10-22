import React from 'react';
import { render, screen } from '@testing-library/react';

import Cards from './Cards';

test('', () => {
  render(<Cards />);
  const cardsContainer = screen.getByTestId('cards-section');
  expect(cardsContainer).toBeInTheDocument();
});
