import { createContext, useContext, FC, useState } from 'react';
import { SingleCoin, Asset, SingleCoinContext } from '../types';

const CoinContext = createContext<any | undefined>(undefined);

export function useCoin() {
  if (CoinContext === undefined) throw new Error('Coin Context is undefined');
  return useContext(CoinContext);
}

export const CoinProvider: FC = ({ children }) => {
  const [currentCoin, setCurrentCoin] = useState<Asset | undefined>({
    id: '',
    symbol: '',
    name: '',
    image: '',
    current_price: 0,
    market_cap: 0,
    market_cap_rank: 0,
    fully_diluted_valuation: 0,
    total_volume: 0,
    high_24h: 0,
    low_24h: 0,
    price_change_24h: 0,
    price_change_percentage_24h: 0,
    market_cap_change_24h: 0,
    market_cap_change_percentage_24h: 0,
    circulating_supply: 0,
    total_supply: 0,
    max_supply: 0,
    ath: 0,
    ath_change_percentage: 0,
    ath_date: '',
    atl: 0,
    atl_change_percentage: 0,
    atl_date: '',
    roi: null,
    last_updated: '',
  });

  const value: any = { currentCoin, setCurrentCoin };

  return <CoinContext.Provider value={value}>{children}</CoinContext.Provider>;
};
