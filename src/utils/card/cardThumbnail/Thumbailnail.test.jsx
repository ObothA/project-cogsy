import React from 'react';
import { render, screen } from '@testing-library/react';

import Thumbail from './Thumbail';

test('Card renders correctly.', () => {
  render(<Thumbail />);
  const thumbnailContainer = screen.getByTestId('thumbnail');

  expect(thumbnailContainer).toBeInTheDocument();
});
