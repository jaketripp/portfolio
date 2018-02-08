import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import AppInfo from '../components/AppInfo';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" component={DashboardPage} exact={true}/>
        <Route path="/apps/info/:name" component={AppInfo}  />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
