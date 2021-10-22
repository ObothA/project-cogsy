import React from 'react';
import { render, screen } from '@testing-library/react';

import Cards from './Cards';

test('Cards page renders correctly.', () => {
  render(<Cards />);
  const cardsContainer = screen.getByTestId('cards-section');

  expect(cardsContainer).toBeInTheDocument();
});
