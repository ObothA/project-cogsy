import React from 'react';
import { render, screen } from '@testing-library/react';

import CardBody from './CardBody';

describe('Card body renders correctly', () => {
  test('with all props.', () => {
    render(
      <CardBody
        heading={'Important Announcement'}
        subHeading={'Last edited 6 days ago'}
        description={'This is the test description'}
        favourite={true}
        menu={true}
        randomMenuIdentifier={'menu-id-unique-1'}
      />
    );
    const cardBody = screen.getByTestId('card-body');
    expect(cardBody).toBeInTheDocument();

    const cardHeader = screen.getByTestId('card-header');
    expect(cardHeader).toBeInTheDocument();

    const mainHeading = screen.getByTestId('main-heading');
    expect(mainHeading).toHaveClass('heading');

    const subHeading = screen.getByTestId('sub-heading');
    expect(subHeading).toHaveClass('sub-heading');

    const description = screen.getByTestId('description');
    expect(description).toHaveClass('description');

    const cardActions = screen.getByTestId('card-actions');
    expect(cardActions).toBeInTheDocument();
  });

  test('without description.', () => {
    render(
      <CardBody
        heading={'Important Announcement'}
        subHeading={'Last edited 6 days ago'}
        favourite={true}
        menu={true}
        randomMenuIdentifier={'menu-id-unique-2'}
      />
    );

    const description = screen.queryByTestId('description');
    expect(description).toBeNull();
  });
});
