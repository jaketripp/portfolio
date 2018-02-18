import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import HomePage from '../components/HomePage';
import ContactPage from '../components/ContactPage';
import NotFoundPage from '../components/NotFoundPage';
import AppInfoPage from '../components/AppInfoPage';
import ScrollToTop from '../components/ScrollToTop';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <ScrollToTop>
      <div>
        <Switch>
          <Route path="/" component={HomePage} exact={true} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/about/:name" component={AppInfoPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </ScrollToTop>
  </Router>
);



export default AppRouter;
