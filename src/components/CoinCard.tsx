import React, { FC } from 'react';
import { Asset } from '../types';
import { Link } from 'react-router-dom';
import '../styles/card.css';

const CoinCard: FC<{ coin: Asset; setCurrentCoin(coin: Asset): void }> =
  (props: { coin: Asset; setCurrentCoin(coin: Asset): void }) => {
    const { coin, setCurrentCoin } = props;
    const slug = coin.id.replace(/\s+/g, '').toLowerCase();

    console.log(props);
    return (
      <div className="card-container" key={coin.name}>

          {' '}
          <img
            src={coin.image}
            alt={coin.name}
            style={{ maxWidth: 20, maxHeight: 20 }}
          />
        <div onClick={() => setCurrentCoin(coin)}>
          <Link to={`${slug}`}>{coin.name}</Link>
        </div>
        <div>{coin.symbol.toUpperCase()}</div>
        <div>${coin.current_price}</div>
      </div>
    );
  };

export default CoinCard;
