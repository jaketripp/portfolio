import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import createHistory from 'history/createBrowserHistory';

import HomePage from '../components/HomePage';
import NotFoundPage from '../components/NotFoundPage';
import AppInfoPage from '../components/AppInfoPage';
import ScrollToTop from '../components/ScrollToTop';

export const history = createHistory();

const AppRouter = () => (
  <BrowserRouter history={history}>
    <ScrollToTop>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about/:name" component={AppInfoPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </ScrollToTop>
  </BrowserRouter>
);



export default AppRouter;
