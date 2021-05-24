import { useState, useEffect } from 'react';
import { Asset } from '../types';
import useFetch from '../hooks/useFetch';
import Pagination from './Pagination';
import { Link } from 'react-router-dom';
import { useCoin } from '../context/coin';
import { CoinCard } from '.';

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
            <h3>Logo</h3>
            <h3>Name</h3>
            <h3>Symbol</h3>
            <h3>Current Price</h3>
          </div>
          {!loading &&
            allCoins
              .slice(firstCoinIdx, lastCoinIdx)
              .map((coin: Asset) => (
                <CoinCard coin={coin} setCurrentCoin={setCurrentCoin} />
              ))}
        </div>
      </div>
      <Pagination page={page} setPage={setPage} />
    </div>
  );
}
