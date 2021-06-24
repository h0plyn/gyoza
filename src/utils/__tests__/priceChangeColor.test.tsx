import { priceChangeColor } from '../priceChangeColor';
import { fakeCoin } from '../../utils/testUtils';

describe('priceChangeColor', () => {
  const mockCoin = fakeCoin();

  it('should return a boolean', () => {
    expect(typeof priceChangeColor(mockCoin)).toBe('boolean');
  });

  it('should return false if it receives a positive number', () => {
    expect(priceChangeColor(mockCoin)).toBe(false);
  });

  it('should return true if it receives a negative number', () => {
    const testCoin = {
      price_change_percentage_24h: -1.65181,
    };
    expect(priceChangeColor(testCoin)).toBe(true);
  });
});
