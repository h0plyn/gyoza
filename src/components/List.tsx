import { useState, useEffect } from 'react';
import { Asset } from '../types';
import useFetch from '../hooks/useFetch';

export default function List() {
  const { data, loading, error } = useFetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false'
  );
  const [allCoins, setAllCoins] = useState<Asset[]>([]);
  const [page, setPage] = useState<number>(1);

  const coinsPerPage = 20;
  const totalPages = 100 / coinsPerPage;
  const pagination = new Array(totalPages).fill(0);
  const lastCoinIdx = page * coinsPerPage;
  const firstCoinIdx = lastCoinIdx - coinsPerPage;

  useEffect(() => {
    if (data) setAllCoins(data);
  }, [data, allCoins]);

  function nextPage() {
    setPage((prevPage) => prevPage + 1);
  }

  function skipToPage(pageNum: number) {
    setPage(pageNum);
  }

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
          {!loading &&
            allCoins.slice(firstCoinIdx, lastCoinIdx).map((coin) => {
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
