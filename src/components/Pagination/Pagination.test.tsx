import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Pagination from './Pagination';

describe('<Pagination />', () => {
  afterEach(() => {
    cleanup();
  });

  const setup = () => {
    let page = 1;
    const setPage = jest.fn();
    const utils = render(<Pagination page={page} setPage={setPage} />);
    const button = utils.getByRole('button');
    const pages = utils.getAllByTestId('page');
    return { page, setPage, pages, button, ...utils };
  };

  it('should render the Pagination component without crashing', () => {
    render(<Pagination />);
  });

  it('matches the snapshot of Pagination', () => {
    const tree = renderer.create(<Pagination />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render a button', () => {
    const { button } = setup();
    expect(button).toBeDefined();
  });

  it('should display numbers representing 10 pages of coins', () => {
    const { pages } = setup();
    expect(pages.length).toBe(10);
    expect(screen.queryByText('0')).not.toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('10')).toBeInTheDocument();
    expect(screen.queryByText('11')).not.toBeInTheDocument();
  });

  it('the button should fire a click handler', () => {
    const { button, setPage } = setup();
    fireEvent.click(button);
    expect(setPage).toHaveBeenCalled();
  });
});
