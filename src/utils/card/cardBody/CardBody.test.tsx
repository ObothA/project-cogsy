import React from 'react';
import { render, screen } from '@testing-library/react';

import CardBody from './CardBody';

test('Card body renders correctly.', () => {
  render(<CardBody />);
  const cardBody = screen.getByTestId('card-body');
  expect(cardBody).toBeInTheDocument();

  const cardHeader = screen.getByTestId('card-header');
  expect(cardHeader).toBeInTheDocument();

  const mainHeading = screen.getByTestId('main-heading');
  expect(mainHeading).toHaveClass('heading');
});
