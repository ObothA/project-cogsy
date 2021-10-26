import React from 'react';
import { render, screen } from '@testing-library/react';

import Thumbail from './Thumbail';

test('Thumbnail renders correctly.', () => {
  render(<Thumbail />);
  const thumbnailContainer = screen.getByTestId('thumbnail');
  expect(thumbnailContainer).toBeInTheDocument();

  const assetLink = screen.getByRole('link');
  expect(assetLink).toBeInTheDocument();

  const thumbnailImage = screen.getByRole('img');
  expect(thumbnailImage).toBeInTheDocument();
});
