import { screen, render, fireEvent, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Search from './Search';

describe('<Search />', () => {
  afterEach(() => {
    cleanup();
  });

  const query = 'Ethereum';

  const setup = () => {
    const utils = render(<Search />);
    const input = utils.getByPlaceholderText('Coin Name');
    return { input, ...utils };
  };

  test('it should render the Search component without crashing', () => {
    render(<Search />);
  });

  test('it matches the snapshot of Search', () => {
    const tree = renderer.create(<Search />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('it renders an input field with a descriptive placeholder', () => {
    const { input } = setup();
    expect(input).toBeTruthy();
  });

  test('it calls the handleChange function on change', () => {
    const spy = jest.fn();
    render(<Search handleChange={spy} />);
    const input = screen.getByPlaceholderText('Coin Name');
    fireEvent.change(input, { target: { value: query } });
    expect(spy).toHaveBeenCalledTimes(1);
  });

  test('it takes user entered text', () => {
    const spy = jest.fn();
    render(<Search handleChange={spy} />);
    const input = screen.getByPlaceholderText('Coin Name');
    expect(input.value).toBe('');
    fireEvent.change(input, { target: { value: query } });
    expect(input.value).toBe(query);
  });
});
