import React from 'react';
import { Link } from 'react-router-dom';

import Nav from './Nav';
import Footer from './Footer';

const NotFoundPage = () => (
	<div>
		<Nav />
		<div className="content-container-fluid not-found-page">
			<div className="backdrop"></div>
			<div className="app-info">
				<h1 data-shadow='404!'>404!</h1>
				<Link to="/">Go home</Link>
			</div>
		</div>
		<Footer />
	</div>
);

export default NotFoundPage;
