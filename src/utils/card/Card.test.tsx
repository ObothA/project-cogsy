import React from 'react';
import { render, screen } from '@testing-library/react';

import Card from './Card';

test('Card renders correctly.', () => {
  render(<Card />);
  const cardArticle = screen.getByRole('article');

  expect(cardArticle).toHaveClass(
    'article-card col-xs-12 col-sm-5 col-md-4 col-lg-4 col-xl-3 col-xxl-2'
  );
});
