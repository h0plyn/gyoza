import { Fragment, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useCoin } from '../../context/singleCoin';
import useFetch from '../../hooks/useFetch';
import { formatMoney } from '../../utils/formatMoney';
import { priceChangeColor } from '../../utils/priceChangeColor';
import {
  SingleCoinStyles,
  SingleCoinGrid,
  DataBox,
  Logo,
  Price,
} from './singleCoinStyles';

export default function SingleCoin() {
  const [loading, setLoading] = useState(false);
  const [suppData, setSuppData] = useState<any>({});
  const history = useHistory();
  const { currentCoin } = useCoin();
  const { data, loading: supplementaryDataLoading } = useFetch(
    `https://api.coingecko.com/api/v3/coins/${currentCoin.id}?sparkline=true`
  );

  useEffect(() => {
    if (!suppData.id) {
      setSuppData(data);
    }
  }, [data, suppData.id]);

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
            <DataBox className="graph">
              <p>Graph Placeholder</p>
            </DataBox>
            <DataBox className="mktcap">
              <p className="datapoint">{formatMoney(currentCoin.market_cap)}</p>
              <p className="title">Total Market Cap </p>
            </DataBox>
            <DataBox className="ath">
              <p className="datapoint">{formatMoney(currentCoin.ath)}</p>
              <p className="title">All-time High</p>
            </DataBox>
            <DataBox className="priceChange">
              <p
                className={`${
                  priceChangeColor(currentCoin) ? 'down' : 'up'
                } size`}
              >
                {currentCoin.price_change_percentage_24h.toFixed(2)}%
              </p>
              <p className="title">24 hr Change</p>
            </DataBox>

            <DataBox className="desc">
              {!supplementaryDataLoading && suppData ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: suppData?.description?.en,
                  }}
                ></div>
              ) : (
                'Loading...'
              )}
            </DataBox>
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
