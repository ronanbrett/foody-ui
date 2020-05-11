import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { APP_ROUTES, RouteWithSubRoutes } from '../../app-routes';
import Box from '../Box';
import Button from '../Button/Button';
import SideNav from '../SideNav';
import TopNav from '../TopNav';
import './app.css';
import Theme from '../Theme';

function App() {
  return (
    <Router>
      <Theme>
        <div className="App">
          <TopNav></TopNav>
          <Box display={'flex'} flex={'1 1 auto'} flexDirection={'row'}>
            <SideNav routes={APP_ROUTES} />
            <div className="container">
              <Switch>
                {APP_ROUTES.map((route, i) => (
                  <RouteWithSubRoutes key={i} {...route} />
                ))}
              </Switch>
            </div>
          </Box>
        </div>
      </Theme>
    </Router>
  );
}

export default App;
