import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Menu from './Menu';

describe('Menu renders correctly', () => {
  test('Menu has correct class', () => {
    render(<Menu />);
    const menuContainer = screen.getByTestId('menu-container');
    expect(menuContainer).toHaveClass('menu-container');
  });
});
