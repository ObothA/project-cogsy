import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Menu from './Menu';

describe('Menu renders correctly', () => {
  test('Menu container has correct class', async () => {
    render(<Menu />);
    const menuContainer = screen.getByTestId('menu-container');
    expect(menuContainer).toHaveClass('menu-container');
  });

  test('Popover trigger works correctly', async () => {
    render(<Menu />);
    let menuTrigger = screen.getByTestId('popoverTrigger');
    expect(menuTrigger).toHaveClass('p-1 menu-active-false');
  });

  test('Hover triggers dropdown.', async () => {
    jest.spyOn(console, 'error').mockImplementation(() => {});

    render(<Menu />);
    let menuTrigger = screen.getByTestId('popoverTrigger');
    userEvent.click(menuTrigger);

    const dropdownMenu = await screen.findByTestId('dropdown-menu');
    expect(dropdownMenu).toBeInTheDocument();
    expect(menuTrigger).toHaveClass('menu-active-true');

    const dropdownItems = screen.getAllByTestId('dropdown-menu-items');
    expect(dropdownItems).toHaveLength(3);
  });
});
