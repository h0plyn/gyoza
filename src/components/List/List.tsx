import React, { useState, useEffect } from 'react';
import { useCoin } from '../../context/singleCoin';
import { CoinCard, Pagination, ListHeader, Search } from '../../components';
import { Asset, useSingleCoin } from '../../types';
import useFetch from '../../hooks/useFetch';
import useDebounce from '../../hooks/useDebounce';

export default function List() {
  const { data, loading, error } = useFetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false'
  );
  const [allCoins, setAllCoins] = useState<Asset[]>([]);
  const [page, setPage] = useState<number>(1);
  const [coinsPerPage, setCoinsPerPage] = useState<number>(10);
  const lastCoinIdx = page * coinsPerPage;
  const firstCoinIdx = lastCoinIdx - coinsPerPage;
  const [query, setQuery] = useState('');
  const [queryResults, setQueryResults] = useState<Asset[]>([]);
  const debouncedQuery = useDebounce(query, 500);
  const [ascending, setAscending] = useState<boolean>(true);
  const { setCurrentCoin }: useSingleCoin = useCoin();

  useEffect(() => {
    if (data && !allCoins.length) setAllCoins(data);
  }, [data, allCoins]);

  useEffect(() => {
    const searchTerm = debouncedQuery.toLowerCase();
    const results = allCoins.filter((coin: Asset) =>
      coin.name.toLowerCase().includes(searchTerm)
    );
    setQueryResults(results);
  }, [debouncedQuery, allCoins]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
  }

  function sortBy(e: React.ChangeEvent) {
    const target = e.target;
    let sorted = [...allCoins];

    if (target.innerHTML === '24hr') {
      if (ascending) {
        sorted = allCoins.sort(
          (a, b) =>
            b.price_change_percentage_24h - a.price_change_percentage_24h
        );
        setQueryResults(sorted);
        setAscending(!ascending);
      } else {
        sorted = allCoins.sort(
          (a, b) =>
            a.price_change_percentage_24h - b.price_change_percentage_24h
        );
        setQueryResults(sorted);
        setAscending(!ascending);
      }
    }
  }

  return (
    <div>
      {error && <div>Something went wrong fetching data...</div>}
      <div data-testid="container">
        <Search query={query} handleChange={handleChange} />
        <div>
          <ListHeader sortBy={sortBy} />
          {!loading &&
            queryResults
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
