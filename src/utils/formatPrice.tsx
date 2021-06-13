export function formatMoney(amount: number) {
  if (amount < 0.01) {
    return `$${amount}`;
  } else {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  }
}
