export interface Asset {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  roi?: null;
  last_updated: string;
}

export interface Page {
  page: number;
  setPage(num: number): void;
}

export interface useSingleCoin {
  setCurrentCoin(coin: Asset): void;
}

export interface SingleCoinContext {
  currentCoin: Asset;
  setCurrentCoin: React.Dispatch<React.SetStateAction<Asset>>;
}

export interface CoinCard {
  coin: Asset;
  setCurrentCoin(coin: Asset): void;
  idx: number;
}

export interface ListHeaderProps {
  sortBy(e: any): void;
}

export interface SearchProps {
  query: string;
  children?: Element;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
