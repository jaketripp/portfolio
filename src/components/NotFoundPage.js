import React from 'react';
import { Link } from 'react-router-dom';

import Nav from './Nav';
import Footer from './Footer';

const NotFoundPage = () => (
	<div>
		<Nav />
		<div className="content-container">
			<div className="not-found-page">
				<div className="app-info">
					<h1>404 - <Link to="/">Go home</Link></h1>
				</div>
			</div>
		</div>
		<Footer />
	</div>
);

export default NotFoundPage;
