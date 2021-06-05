import React from 'react';
import { render, screen } from '@testing-library/react';
import List from './List';

describe('List Component', () => {
  test('it displays a table', () => {
    render(<List />);
    expect(screen.getByTestId('table')).toBeInTheDocument();
  });
});
