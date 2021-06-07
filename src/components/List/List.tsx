import { useState, useEffect } from 'react';
import { useCoin } from '../../context/singleCoin';
import { CoinCard, Pagination, ListHeader } from '../../components';
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
  const { setCurrentCoin }: useSingleCoin = useCoin();
  const [query, setQuery] = useState('');
  const [queryResults, setQueryResults] = useState<Asset[]>([]);
  const [ascending, setAscending] = useState<boolean>(true);
  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    if (data) setAllCoins(data);
    const searchTerm = debouncedQuery.toLowerCase();
    const results = allCoins.filter((coin: Asset) =>
      coin.name.toLowerCase().includes(searchTerm)
    );
    setQueryResults(results);
  }, [data, debouncedQuery, allCoins]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
  }

  function sortBy(e: any) {
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
      <div data-testid="div">
        <div
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'flex-end',
            height: '2.1rem',
          }}
        >
          <input
            style={{
              borderRadius: '5px',
              border: '1px solid var(--secondary)',
              backgroundColor: 'var(--card-bg)',
              color: 'var(--tertiary)',
              padding: '.5rem',
              fontSize: '1.2rem',
            }}
            type="text"
            name="query"
            value={query}
            onChange={(e) => handleChange(e)}
            placeholder="Coin Name"
          />
        </div>
        <div>
          <ListHeader sortBy={sortBy} />
          {/* <div className="card-header">
            <h3 className="rank" onClick={(e) => sortBy(e)}>
              Rank
            </h3>
            <h3 className="f1" onClick={(e) => sortBy(e)}>
              Coin
            </h3>
            <h3 className="price" onClick={(e) => sortBy(e)}>
              Price
            </h3>
            <h3 className="daily-change" onClick={(e) => sortBy(e)}>
              24hr
            </h3>
            <h3 className="f1" onClick={(e) => sortBy(e)}>
              Market Cap
            </h3>
          </div> */}
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
