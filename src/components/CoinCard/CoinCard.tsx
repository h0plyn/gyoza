import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CoinCard as CardProps } from '../../types';
import { formatMoney } from '../../utils/formatMoney';
import { slug } from '../../utils/slug';
import { priceChangeColor } from '../../utils/priceChangeColor';

const CardStyles = styled.div`
  display: flex;
  flex-direction: row;
  background-color: var(--card-bg);
  margin-bottom: 1rem;
  height: 5rem;
  width: 50vw;
  justify-content: space-around;
  align-items: center;
  transition: transform 0.25s cubic-bezier(0.17, 0.67, 0.83, 0.67) 0s;
  .content-box {
    flex: 1;
    justify-content: center;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  .card-container:hover {
    transform: scale(1.03);
    box-shadow: 0 0 40px rgb(192 219 255 / 28%), 0 0 22px var(--highlight);
  }
  .coin-name {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;
    padding-left: 2rem;
    font-size: 1.3rem;
    flex: 2;
  }
  .mkt-cap {
    flex: 2;
  }
  .card-price {
    display: flex;
    justify-content: flex-start;
  }
  .up {
    color: seagreen;
  }
  .down {
    color: lightcoral;
  }
`;

const CoinCard: FC<CardProps> = ({ coin, setCurrentCoin }: CardProps) => {
  return (
    <CardStyles key={coin.name}>
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
        <Link to={`${slug(coin)}`}>{coin.name}</Link>
      </div>
      <div className="content-box flex card-price" data-testid="coin-price">
        {formatMoney(coin.current_price)}
      </div>
      <div className={`${priceChangeColor(coin) ? 'down' : 'up'} content-box`}>
        {coin.price_change_percentage_24h.toFixed(1)}%
      </div>
      <div className="content-box mkt-cap" data-testid="coin-market-cap">
        ${coin.market_cap.toLocaleString('en-US')}
      </div>
    </CardStyles>
  );
};

export default CoinCard;
