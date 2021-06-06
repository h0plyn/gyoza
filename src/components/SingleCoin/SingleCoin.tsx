import { Fragment, useState } from 'react';
import { useHistory } from 'react-router';
import { useCoin } from '../../context/coin';
import './singlecoin.css';

const SingleCoin = () => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { currentCoin } = useCoin();

  return (
    <Fragment>
      {!loading && currentCoin ? (
        <Fragment>
          <div className="coin-container">
            <div className="content-area">
              <img
                className="single-coin-logo"
                src={currentCoin.image}
                alt={currentCoin.name}
              />
              <h1>{currentCoin.name}</h1>
            </div>
            <div className="content-area">
              <div className="">${currentCoin.symbol}</div>

              <div className="">Current Price: {currentCoin.current_price}</div>
            </div>
            <div className="content-area">
              <div className="">Market Cap Rank: {currentCoin.market_cap}</div>
              <div className="">
                24 hr: {currentCoin.price_change_percentage_24h}
              </div>
            </div>
            <div className="content-area">
              <div className="">ATH: {currentCoin.ath}</div>
            </div>
          </div>
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
