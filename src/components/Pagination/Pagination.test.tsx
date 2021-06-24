import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Pagination from './Pagination';

describe('<Pagination />', () => {
  it('should render a list of all available pages', () => {
    render(<Pagination page={1} setPage />);
    expect(screen.getByTitle('pagination')).toBeTruthy();
  });
});
