import { Fragment, useState } from 'react';
import { useHistory } from 'react-router';
import { useCoin } from '../../context/singleCoin';
import { formatMoney } from '../../utils/formatMoney';
import { priceChangeColor } from '../../utils/priceChangeColor';
import {
  SingleCoinStyles,
  SingleCoinGrid,
  Logo,
  Price,
  MarketCap,
  ATH,
  PriceChange,
} from './singleCoinStyles';

export default function SingleCoin() {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { currentCoin } = useCoin();

  console.log(currentCoin);
  return (
    <Fragment>
      {!loading && currentCoin ? (
        <SingleCoinStyles>
          <SingleCoinGrid>
            <Logo>
              <img
                className="single-coin-logo"
                src={currentCoin.image}
                alt={currentCoin.name}
              />
              <div className="title">
                <h1>{currentCoin.name}</h1>
                <p>${currentCoin.symbol.toUpperCase()}</p>
              </div>
            </Logo>
            <Price>
              <p className="datapoint">
                {formatMoney(currentCoin.current_price)}
              </p>
              <p className="title">Current Price</p>{' '}
            </Price>
            <MarketCap>
              <p className="datapoint">{formatMoney(currentCoin.market_cap)}</p>
              <p className="title">Total Market Cap </p>
            </MarketCap>
            <ATH>
              <p className="datapoint">{formatMoney(currentCoin.ath)}</p>
              <p className="title">All-time High</p>
            </ATH>
            <PriceChange>
              <p
                className={`${
                  priceChangeColor(currentCoin) ? 'down' : 'up'
                } size`}
              >
                {currentCoin.price_change_percentage_24h.toFixed(2)}%
              </p>
              <p className="title">24 hr Change</p>
            </PriceChange>

            <div
              style={{
                gridArea: 'three',
                height: '100%',
                backgroundColor: 'var(--card-bg)',
              }}
            >
              Three
            </div>
          </SingleCoinGrid>
        </SingleCoinStyles>
      ) : (
        ''
      )}
      <button title="back" onClick={() => history.push('/')}>
        Back
      </button>
    </Fragment>
  );
}
