import { useState, useEffect } from 'react';
import { Asset } from '../types';
import useFetch from '../hooks/useFetch';
import Pagination from './Pagination';

export default function List() {
  const { data, loading, error } = useFetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false'
  );
  const [allCoins, setAllCoins] = useState<Asset[]>([]);
  const [page, setPage] = useState<number>(1);
  const [coinsPerPage, setCoinsPerPage] = useState<number>(10);
  const lastCoinIdx = page * coinsPerPage;
  const firstCoinIdx = lastCoinIdx - coinsPerPage;

  useEffect(() => {
    if (data) setAllCoins(data);
  }, [data]);

  return (
    <div>
      {error && <div>Something went wrong fetching data...</div>}
      <table data-testid="table">
        <tbody>
          <tr>
            <th>Logo</th>
            <th>Symbol</th>
            <th>Name</th>
            <th>Current Price</th>
          </tr>
          {!loading &&
            allCoins.slice(firstCoinIdx, lastCoinIdx).map((coin: Asset) => {
              return (
                <tr key={coin.name} title="coins">
                  <td>
                    {' '}
                    <img
                      src={coin.image}
                      alt={coin.name}
                      style={{ maxWidth: 20, maxHeight: 20 }}
                    />
                  </td>
                  <td>${coin.symbol.toUpperCase()}</td>
                  <td>{coin.name}</td>
                  <td>{coin.current_price}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <Pagination page={page} setPage={setPage} />
    </div>
  );
}
