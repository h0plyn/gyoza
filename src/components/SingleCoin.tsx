import { Fragment, useState } from 'react';
import useFetch from '../hooks/useFetch';
import { Asset } from '../types';
import { useHistory } from 'react-router';
import { useCoin } from '../context/coin';

interface Coin {
  coin: string;
}

const SingleCoin = () => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { currentCoin } = useCoin();

  console.log('test useCoin in single coin', currentCoin);
  return (
    <Fragment>
      {!loading && currentCoin ? (
        <Fragment>
          <div className="single">Single Coin Info</div>
          <div className="single">{currentCoin.id}</div>
          <div className="single">{currentCoin.symbol}</div>
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
