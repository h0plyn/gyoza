import List from '../src/components/List';
import SingleCoin from '../src/components/SingleCoin';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <header>🥟 Gyoza</header>
      <Switch>
        <Route exact path="/" render={() => <List />} />
        <Route path="/:coin" render={() => <SingleCoin />} />
      </Switch>
    </Router>
  );
};

export default App;
