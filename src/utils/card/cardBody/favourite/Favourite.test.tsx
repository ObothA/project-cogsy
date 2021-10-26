import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Favourite from './Favourite';

describe('Favourite renders correctly', () => {
  test('Has the correct class', () => {
    render(<Favourite favourite={true} />);
    const favourite = screen.getByTestId('favourite');
    expect(favourite).toHaveClass('col');
  });

  test('On click of inactive Favourite, renders filled star icon.', () => {
    render(<Favourite favourite={true} />);
    const iconSpan = screen.getByTestId('star-icon-span');
    userEvent.click(iconSpan);
    expect(iconSpan).toHaveClass('star-active-true');
  });

  test('On click of active Favourite, renders an outline star', () => {
    render(<Favourite defaultActive={true} favourite={true} />);
    const iconSpan = screen.getByTestId('star-icon-span');
    userEvent.click(iconSpan);
    expect(iconSpan).toHaveClass('star-active-false');
  });

  test('With favourite false prop', () => {
    render(<Favourite favourite={false} />);
    const iconSpan = screen.queryByTestId('star-icon-span');
    expect(iconSpan).toBeNull();
  });
});
