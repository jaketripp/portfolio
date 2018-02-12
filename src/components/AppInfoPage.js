import React from 'react';
import { Link } from 'react-router-dom';

import Footer from './Footer';
import AppInfo from './AppInfo';
import Header from './Header';
import NotFoundPage from './NotFoundPage';
import { apps } from '../data/apps';

const AppInfoPage = (props) => {
    const appName = props.match.params.name;
    if (!!apps[appName]) {
        return (
            <div>
                <Header />
                <AppInfo app={apps[appName]}/>
                <Footer />
            </div>
        );
    } else {
        return (
            <NotFoundPage />
        )
    }
}

export default AppInfoPage;
