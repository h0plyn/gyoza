import { useState, useEffect } from 'react';
import { Asset } from '../types';
import useFetch from '../hooks/useFetch';
import Pagination from './Pagination';
import { useCoin } from '../context/coin';
import { CoinCard } from '.';
import '../styles/cardheader.css';
import '../styles/card.css';

export default function List() {
  const { data, loading, error } = useFetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false'
  );

  const [allCoins, setAllCoins] = useState<Asset[]>([]);
  const [page, setPage] = useState<number>(1);
  const [coinsPerPage, setCoinsPerPage] = useState<number>(10);
  const lastCoinIdx = page * coinsPerPage;
  const firstCoinIdx = lastCoinIdx - coinsPerPage;
  const { setCurrentCoin }: { setCurrentCoin(coin: Asset): void } = useCoin();

  useEffect(() => {
    if (data) setAllCoins(data);
  }, [data]);

  return (
    <div>
      {error && <div>Something went wrong fetching data...</div>}
      <div data-testid="div">
        <div>
          <div className="card-header">
            <h3 className="rank">Rank</h3>
            <h3 className="f1">Coin</h3>
            <h3 className="price">Price</h3>
            <h3 className="daily-change">24hr</h3>
            <h3 className="f1">Market Cap</h3>
          </div>
          {!loading &&
            allCoins
              .slice(firstCoinIdx, lastCoinIdx)
              .map((coin: Asset, idx: number) => (
                <CoinCard
                  coin={coin}
                  setCurrentCoin={setCurrentCoin}
                  idx={idx}
                  key={coin.id}
                />
              ))}
        </div>
      </div>
      <Pagination page={page} setPage={setPage} />
    </div>
  );
}
