import React from 'react';
import { render, screen } from '@testing-library/react';

import Favourite from './Favourite';

test('Favourite renders correctly', () => {
  render(<Favourite />);
  const favourite = screen.getByTestId('favourite');
  expect(favourite).toBeInTheDocument();
});
