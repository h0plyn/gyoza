import React, { FC } from 'react';
import { Asset } from '../types';
import { Link } from 'react-router-dom';
import '../styles/card.css';

const CoinCard: FC<{
  coin: Asset;
  setCurrentCoin(coin: Asset): void;
  idx: number;
}> = (props: {
  coin: Asset;
  setCurrentCoin(coin: Asset): void;
  idx: number;
}) => {
  const { coin, idx, setCurrentCoin } = props;
  const slug = coin.id.replace(/\s+/g, '').toLowerCase();
  const mkt_cap_pos = idx + 1;
  const changeColor: boolean = coin.price_change_percentage_24h
    .toString()
    .includes('-');

  return (
    <div className="card-container" key={coin.name}>
      <div className="content-box">{mkt_cap_pos}</div>
      <div
        onClick={() => setCurrentCoin(coin)}
        className="coin-name content-box"
      >
        <img
          src={coin.image}
          alt={coin.name}
          style={{ maxWidth: 20, maxHeight: 20 }}
        />
        <Link to={`${slug}`}>{coin.name}</Link>
      </div>
      <div className="content-box flex card-price">
        ${coin.current_price.toLocaleString()}
      </div>
      <div className={`${changeColor ? 'down' : 'up'} content-box`}>
        {coin.price_change_percentage_24h.toFixed(1)}%
      </div>
      <div className="content-box mkt-cap">
        ${coin.market_cap.toLocaleString()}
      </div>
    </div>
  );
};

export default CoinCard;
