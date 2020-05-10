import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import './app.css';
import TopNav from '../TopNav';
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import theme from '../../common/theme/theme';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const Blah = () => (
  <div>
    <h2>Blah</h2>
  </div>
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <TopNav>
            <Link to="/">Homes</Link>
            <Link to="/blah">Blah</Link>
          </TopNav>
          <Switch>
            <Route path="/blah">
              <Blah />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
