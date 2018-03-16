import React from 'react';

import Footer from './Footer';
import AppInfo from './AppInfo';
import Nav from './Nav';
import NotFoundPage from './NotFoundPage';
import { apps } from '../data/apps';

const AppInfoPage = (props) => {
    const appName = props.match.params.name;
    if (!!apps[appName]) {
        return (
            <div>
                <Nav />
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
