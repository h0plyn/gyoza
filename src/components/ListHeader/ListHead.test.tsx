import { screen, render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import ListHeader from './ListHeader';

describe('<ListHeader />', () => {
  afterEach(() => {
    cleanup();
  });

  const setup = () => {
    const utils = render(<ListHeader />);
    return { ...utils };
  };

  test('it should render the ListHeader component without crashing', () => {
    render(<ListHeader />);
  });

  test('it matches the snapshot of ListHeader', () => {
    const tree = renderer.create(<ListHeader />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('it should render colum titles', () => {
    const { container } = setup();
    expect(container.textContent).toBe('RankCoinPrice24hrMarket Cap');
  });
});
