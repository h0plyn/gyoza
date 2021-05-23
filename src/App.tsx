import List from '../src/components/List';
import SingleCoin from '../src/components/SingleCoin';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from './components';
import { CoinProvider } from './context/coin';

const App = () => {
  return (
    <Router>
      <Layout>
        <header>🥟 Gyoza</header>
        <Switch>
          <CoinProvider>
            <Route exact path="/" render={() => <List />} />
            <Route path="/:coin" render={() => <SingleCoin />} />
          </CoinProvider>
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
