import { createContext, useContext, FC, useState } from 'react';
import { SingleCoin } from '../types';

const CoinContext = createContext<any>(null);

export function useCoin() {
  return useContext(CoinContext);
}

export const CoinProvider: FC = ({ children }) => {
  const [currentCoin, setCurrentCoin] = useState<SingleCoin>();

  const value = { currentCoin, setCurrentCoin };

  return <CoinContext.Provider value={value}>{children}</CoinContext.Provider>;
};
