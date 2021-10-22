import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders App correctly.', () => {
  render(<App />);
  const appContainer = screen.getByRole('main');

  expect(appContainer).toHaveClass('app-container');
});
