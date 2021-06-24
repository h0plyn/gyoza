import { formatMoney } from '../formatMoney';

describe('formatMoney', () => {
  it('should add the full value when the price is less that 0.01 USD', () => {
    expect(formatMoney(0.00000362626326)).toBe('$0.00000362626326');
    expect(formatMoney(0.001)).toBe('$0.001');
  });

  it('should format the price when dealing with values greater than 0.01 USD', () => {
    expect(formatMoney(2036.7)).toBe('$2,036.70');
    expect(formatMoney(35034.0)).toBe('$35,034.00');
  });

  it('should add a $ sign to each input', () => {
    expect(formatMoney(10000.0)).toContain('$');
    expect(formatMoney(0.01)).toContain('$');
    expect(formatMoney(0.00000362626326)).toContain('$');
  });
});
