import { render, cleanup, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import CoinCard from './CoinCard';
import { fakeCoin } from '../../utils/testUtils';

describe('<CoinCard />', () => {
  afterEach(cleanup);

  const mockCoin = fakeCoin();

  const setup = () => {
    const setCurrentCoin = jest.fn();
    const utils = render(
      <Router>
        <CoinCard coin={mockCoin} setCurrentCoin={setCurrentCoin} />
      </Router>
    );
    const rank = utils.getByTestId('coin-rank').textContent;
    const name = utils.getByTestId('coin-name');
    const image = utils.getByTestId('coin-image');
    const price = utils.getByTestId('coin-price').textContent;
    const marketCap = utils.getByTestId('coin-market-cap').textContent;
    return { setCurrentCoin, rank, name, image, price, marketCap, ...utils };
  };

  it('should render the CoinCard component without crashing', () => {
    setup();
  });

  it('should match the CoinCard snapshot', () => {
    const tree = renderer.create(
      <Router>
        <CoinCard coin={mockCoin} />
      </Router>
    );
    expect(tree).toMatchSnapshot();
  });

  it('should contain information on the current coin', () => {
    const { rank, name, image, price, marketCap } = setup();
    expect(rank).toBe('2');
    expect(name.textContent).toBe('Ethereum');
    expect(image).toHaveAttribute(
      'src',
      'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880'
    );
    expect(image).toHaveAttribute('alt', 'Ethereum');
    expect(price).toBe('$2,012.98');
    expect(marketCap).toBe('$235,151,119,166');
  });

  it('should set the current coin when the name is clicked', async () => {
    const { setCurrentCoin, name } = setup();
    expect(setCurrentCoin).not.toBeCalled();
    fireEvent.click(name);
    expect(setCurrentCoin).toBeCalledTimes(1);
  });
});
