import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import HomePage from "./components/HomePage";
import NotFoundPage from "./components/NotFoundPage";
import AppInfoPage from "./components/AppInfoPage";
import ScrollToTop from "./components/ScrollToTop";

export const history = createBrowserHistory();

const AppRouter = () => (
	<Router history={history}>
		<ScrollToTop>
			<div>
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/about/:name" component={AppInfoPage} />
					<Route component={NotFoundPage} />
				</Switch>
			</div>
		</ScrollToTop>
	</Router>
);

export default AppRouter;
