import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './List';

describe('List Component', () => {
  test('it displays a table', () => {
    render(<App />);

    expect(screen.getByTestId('table')).toBeInTheDocument();
  });
  it('it renders a list', () => {
    const { queryByTitle } = render(<App />);
    const list = queryByTitle('coins');

    expect(list).toBeTruthy();
  });
});
