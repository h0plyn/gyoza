import { Asset } from '../types';
export const priceChangeColor = (coin: Asset): boolean =>
  coin.price_change_percentage_24h.toString().includes('-');
