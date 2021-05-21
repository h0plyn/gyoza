import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './List';

describe('List Component', () => {
  test('it displays a table', () => {
    render(<App />);
    expect(screen.getByTestId('table')).toBeInTheDocument();
  });
});
