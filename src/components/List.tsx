import { useState, useEffect } from 'react';
import axios from 'axios';

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
  const [displayIdx, setDisplayIdx] = useState<[number, number]>([0, 25]);
  const [page, setPage] = useState<number>(1);
  const pagination = new Array(4).fill(0);

  useEffect(() => {
    async function getCoins() {
      const { data: list } = await axios.get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      );
      setAllCoins(list);
      const current = list.slice(displayIdx[0], displayIdx[1]);
      setCurrentCoins(current);
    }
    getCoins();
  }, []);

  const nextPage = () => {
    const nextStart: number = displayIdx[1];
    const nextEnd: number = displayIdx[1] + 25;
    const nextView: Asset[] = allCoins.slice(nextStart, nextEnd);
    setDisplayIdx([nextStart, nextEnd]);
    setPage(page + 1);
    setCurrentCoins(nextView);
  };

  const skipToPage = (pageNum: number) => {
    let skipTo;
    const startingIdx = (pageNum - 1) * 25;
    const endingIdx = startingIdx + 25;
    if (pageNum === 1) {
      skipTo = allCoins.slice(0, 25);
    } else {
      skipTo = allCoins.slice(startingIdx, endingIdx);
    }

    setCurrentCoins(skipTo);
    setPage(pageNum);
    setDisplayIdx([startingIdx, endingIdx]);
  };

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Logo</th>
            <th>Symbol</th>
            <th>Name</th>
            <th>Current Price</th>
          </tr>
          {currentCoins.map((coin) => {
            return (
              <tr key={coin.name}>
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
              className="pagination-numbers"
              onClick={() => skipToPage(pageNumber)}
            >
              {pageNumber}
            </div>
          );
        })}
      </div>
      <button disabled={page > 3 ? true : false} onClick={() => nextPage()}>
        Next
      </button>
    </div>
  );
}
