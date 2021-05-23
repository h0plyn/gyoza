import React, { useEffect, Fragment } from 'react';
import useFetch from '../hooks/useFetch';
import { Asset } from '../types';
import { useParams } from 'react-router';

const SingleCoin = (props: any) => {
  const { coin } = useParams();
  const { data, loading, error } = useFetch(
    `https://api.coingecko.com/api/v3/coins/${coin}`
  );

  console.log(coin);
  console.log(data);
  return (
    <Fragment>
      {error && <div>Something went wrong...</div>}
      {!loading ? (
        <Fragment>
          <div>Single Coin Info</div>
          <div>{coin.id}</div>
        </Fragment>
      ) : (
        ''
      )}
    </Fragment>
  );
};

export default SingleCoin;
