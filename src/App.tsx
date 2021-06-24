import { List, SingleCoin } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from './components';
import { CoinProvider } from './context/singleCoin';
import { Header } from './components';
import { GlobalStyles } from './GlobalStyles';

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Layout>
        <Header />
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
