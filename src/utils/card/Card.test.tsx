import React from 'react';
import { render, screen } from '@testing-library/react';

import Card from './Card';

test('Card renders correctly.', () => {
  render(<Card />);
  const cardArticle = screen.getByRole('article');

  expect(cardArticle).toBeInTheDocument();
});
