import { Fragment, useState } from 'react';
import { useHistory } from 'react-router';
import { useCoin } from '../context/coin';
import { CoinCard } from '.';
import { Asset } from '../types';

const SingleCoin = () => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { currentCoin } = useCoin();

  return (
    <Fragment>
      {!loading && currentCoin ? (
        <Fragment>
          <div className="single">Single Coin Info</div>
          <div className="single">{currentCoin.name}</div>
          <div className="single">${currentCoin.symbol}</div>
          <img src={currentCoin.image} alt={currentCoin.name} />
          <div className="single">
            Current Price: {currentCoin.current_price}
          </div>
          <div className="single">
            Market Cap Rank: {currentCoin.market_cap}
          </div>
          <div className="single">
            24 hr: {currentCoin.price_change_percentage_24h}
          </div>
          <div className="single">ATH: {currentCoin.ath}</div>
        </Fragment>
      ) : (
        ''
      )}
      <button title="back" onClick={() => history.push('/')}>
        Back
      </button>
    </Fragment>
  );
};

export default SingleCoin;
