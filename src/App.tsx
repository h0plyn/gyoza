import List from '../src/components/List';
import SingleCoin from '../src/components/SingleCoin';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from './components';

const App = () => {
  return (
    <Router>
      <Layout>
        <header>🥟 Gyoza</header>

        <Switch>
          <Route exact path="/" render={() => <List />} />
          <Route path="/:coin" render={(props) => <SingleCoin {...props} />} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
