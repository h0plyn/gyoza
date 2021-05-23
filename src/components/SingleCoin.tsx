import React, { useEffect, Fragment, useState } from 'react';
import useFetch from '../hooks/useFetch';
import { Asset } from '../types';
import { useParams, useHistory } from 'react-router';

interface Coin {
  coin: string;
}

const SingleCoin = (props: any) => {
  const { coin }: Coin = useParams();
  const [currentCoin, setCurrentCoin] = useState<string>(coin);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>({});
  const history = useHistory();

  useEffect(() => {
    setLoading(true);
    async function fetchCoin() {
      const coin = await fetch(
        `https://api.coingecko.com/api/v3/coins/${currentCoin}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log('inside chain', data);
          setData(data);
        });
    }
    fetchCoin();
    setLoading(false);
  }, [currentCoin, coin]);

  return (
    <Fragment>
      {!loading && data ? (
        <Fragment>
          <div className="single">Single Coin Info</div>
          <div className="single">{data.id}</div>
          <div className="single">{data.symbol}</div>
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
