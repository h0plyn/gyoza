import { Fragment, useState } from 'react';
import { useHistory } from 'react-router';
import { useCoin } from '../context/coin';

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
