import { useState, useEffect } from 'react';
import { Asset } from '../types';
import useFetch from '../hooks/useFetch';

export default function List() {
  const [allCoins, setAllCoins] = useState<Asset[]>([]);
  const [currentCoins, setCurrentCoins] = useState<Asset[]>([]);
  const [page, setPage] = useState<number>(1);
  const coinsPerPage = 10;
  const totalPages = 100 / coinsPerPage;
  const lastCoinIdx = page * coinsPerPage;
  const firstCoinIdx = lastCoinIdx - coinsPerPage;
  const pagination = new Array(totalPages).fill(0);
  const { data } = useFetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false'
  );

  useEffect(() => {
    let isMounted = true;
    if (data) {
      if (isMounted) setAllCoins(data);
      const current = allCoins.slice(firstCoinIdx, lastCoinIdx);
      if (isMounted) setCurrentCoins(current);
    }
    return () => {
      isMounted = false;
    };
  }, [data, firstCoinIdx, lastCoinIdx, allCoins]);

  const nextPage = () => {
    const nextView: Asset[] = allCoins.slice(firstCoinIdx, lastCoinIdx);
    setPage(page + 1);
    setCurrentCoins(nextView);
  };

  const skipToPage = (pageNum: number) => {
    setPage(pageNum);
  };

  return (
    <div>
      <table data-testid="table">
        <tbody>
          <tr>
            <th>Logo</th>
            <th>Symbol</th>
            <th>Name</th>
            <th>Current Price</th>
          </tr>
          {currentCoins.map((coin) => {
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
      <div className="pagination">
        {pagination.map((_, idx) => {
          const pageNumber = idx + 1;
          const currentPage = page === pageNumber;
          return (
            <div
              key={pageNumber}
              className="pagination-numbers"
              id={currentPage ? 'current-page' : ''}
              onClick={() => skipToPage(pageNumber)}
            >
              {pageNumber}
            </div>
          );
        })}
      </div>
      <button
        disabled={page > totalPages - 1 ? true : false}
        onClick={() => nextPage()}
      >
        Next
      </button>
    </div>
  );
}
