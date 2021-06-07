import { createContext, useContext, FC, useState } from 'react';
import { Asset, SingleCoinContext } from '../types';

const CoinContext = createContext<SingleCoinContext>({} as SingleCoinContext);

export function useCoin() {
  if (CoinContext === undefined) throw new Error('Coin Context is undefined');
  return useContext(CoinContext);
}

export const CoinProvider: FC = ({ children }) => {
  const [currentCoin, setCurrentCoin] = useState<Asset>({} as Asset);

  const value: SingleCoinContext = {
    currentCoin,
    setCurrentCoin,
  };

  return <CoinContext.Provider value={value}>{children}</CoinContext.Provider>;
};
