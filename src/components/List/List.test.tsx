import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import List from './List';

describe('<List />', () => {
  test('it should render the List component without crashing', () => {
    render(<List />)
  })

  test('it matches the snapshot of List', () => {
    const tree = renderer.create(<List />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('it renders the Search, ListHeader, and Pagination components in a container', () => {
    render(<List />);
    expect(screen.getByTestId('container')).toBeInTheDocument()
    expect(screen.getByTestId('search')).toBeInTheDocument()
    expect(screen.getByTestId('listheader')).toBeInTheDocument()
    expect(screen.getByTestId('pagination')).toBeInTheDocument()
  });
});
