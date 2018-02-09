import React from 'react';
import { Link } from 'react-router-dom';

import Footer from './Footer';
import Header from './Header';
import NotFoundPage from './NotFoundPage';

const projectNames = ['asoftoday', 'seasonal', 'expensify'];

const AppInfo = (props) => {
    const appName = props.match.params.name;
    if (projectNames.includes(appName)) {
        return (
            <div>
                <Header />
                This is the App Info page
                <Link to="/">Go home</Link>
                <Footer />
            </div>
        );
    } else {
        return (
            <NotFoundPage />
        )
    }
}

export default AppInfo;
