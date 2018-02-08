import React from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

const NotFoundPage = () => (
	<div>
		<Header />
		<div className="content-container">
			<div className="not-found-page">
				<h1>404 - <Link to="/">Go home</Link></h1>
			</div>
		</div>
		<Footer />
	</div>
);

export default NotFoundPage;
