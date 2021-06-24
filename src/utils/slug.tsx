import { Asset } from '../types';

export const slug = (coin: Asset): string =>
  coin.id.replace(/\s+/g, '').toLowerCase();
