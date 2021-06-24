import { FC } from 'react';
import { Link } from 'react-router-dom';
import { CoinCard as CardProps } from '../../types';
import { formatMoney } from '../../utils/formatPrice';
import './card.css';

const CoinCard: FC<CardProps> = (props: CardProps) => {
  const { coin, setCurrentCoin } = props;
  const slug = coin.id.replace(/\s+/g, '').toLowerCase();
  const priceChangeColor: boolean = coin.price_change_percentage_24h
    .toString()
    .includes('-');

  return (
    <div className="card-container" key={coin.name}>
      <div className="content-box" data-testid="coin-rank">
        {coin.market_cap_rank}
      </div>
      <div
        data-testid="coin-name"
        onClick={() => setCurrentCoin(coin)}
        className="coin-name content-box"
      >
        <img
          data-testid="coin-image"
          src={coin.image}
          alt={coin.name}
          style={{ maxWidth: 20, maxHeight: 20 }}
        />
        <Link to={`${slug}`}>{coin.name}</Link>
      </div>
      <div className="content-box flex card-price" data-testid="coin-price">
        {formatMoney(coin.current_price)}
      </div>
      <div className={`${priceChangeColor ? 'down' : 'up'} content-box`}>
        {coin.price_change_percentage_24h.toFixed(1)}%
      </div>
      <div className="content-box mkt-cap" data-testid="coin-market-cap">
        ${coin.market_cap.toLocaleString('en-US')}
      </div>
    </div>
  );
};

export default CoinCard;
