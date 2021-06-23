import { render, screen } from '@testing-library/react';
import Search from './Search';

describe('Search Component', () => {
  test('it displays an input', () => {
    render(<Search />);
    const searchElement = screen.getByTestId('search')
    expect(searchElement).toBeInTheDocument();
    expect(screen.getByTestId('input')).toBeTruthy()
  });
});
