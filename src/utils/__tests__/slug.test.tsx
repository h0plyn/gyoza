import { slug } from '../slug';
import { fakeCoin } from '../../utils/testUtils';

describe('slug', () => {
  const mockCoin = fakeCoin();

  it('should return a string', () => {
    expect(typeof slug(mockCoin)).toBe('string');
  });

  it('should return a slugified string of the given coin', () => {
    const bnb = { id: 'Binance Coin' };
    const theGraph = { id: 'The Graph' };
    const synthetix = { id: 'Synthetix Network Token' };

    expect(slug(mockCoin)).toBe('ethereum');
    expect(slug(bnb)).toBe('binancecoin');
    expect(slug(synthetix)).toBe('synthetixnetworktoken');
    expect(slug(theGraph)).toBe('thegraph');
  });
});
