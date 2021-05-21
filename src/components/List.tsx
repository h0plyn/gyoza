import { useState, useEffect } from 'react';

interface Asset {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  roi?: null;
  last_updated: string;
}

export default function List() {
  const [allCoins, setAllCoins] = useState<Asset[]>([]);
  const [currentCoins, setCurrentCoins] = useState<Asset[]>([]);
  const [page, setPage] = useState<number>(1);
  const coinsPerPage = 10;
  const totalPages = 100 / coinsPerPage;
  const lastCoinIdx = page * coinsPerPage;
  const firstCoinIdx = lastCoinIdx - coinsPerPage;
  const pagination = new Array(totalPages).fill(0);

  useEffect(() => {
    let isMounted = true;

    async function getCoins() {
      const list = await fetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      )
        .then((res) => res.json())
        .then((coinList) => {
          setAllCoins(coinList);
          const current = coinList.slice(firstCoinIdx, lastCoinIdx);
          setCurrentCoins(current);
        });

      console.log(list);
    }

    getCoins();
    return () => {
      isMounted = false;
    };
  }, [firstCoinIdx, lastCoinIdx]);

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
