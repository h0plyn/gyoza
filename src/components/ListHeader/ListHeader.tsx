import { ListHeaderProps } from '../../types';
import './listheader.css';

const ListHeader = ({ sortBy }: ListHeaderProps) => {
  return (
    <div className="card-header" data-testid='listheader'>
      <h3 className="rank" onClick={(e) => sortBy(e)}>
        Rank
      </h3>
      <h3 className="f1" onClick={(e) => sortBy(e)}>
        Coin
      </h3>
      <h3 className="price" onClick={(e) => sortBy(e)}>
        Price
      </h3>
      <h3 className="daily-change" onClick={(e) => sortBy(e)}>
        24hr
      </h3>
      <h3 className="f1" onClick={(e) => sortBy(e)}>
        Market Cap
      </h3>
    </div>
  );
};

export default ListHeader;
