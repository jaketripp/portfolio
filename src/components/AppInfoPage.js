import React from 'react';

import Footer from './Footer';
import AppInfo from './AppInfo';
import Nav from './Nav';
import NotFoundPage from './NotFoundPage';
import { apps } from '../data/apps';

const AppInfoPage = (props) => {
    const appName = props.match.params.name;
    const projectList = Object.keys(apps);
    let { prevHref, nextHref } = getPrevAndNext(projectList, appName);

    if (!!apps[appName]) {
        return (
            <div>
                <Nav />
                <AppInfo app={apps[appName]} prevHref={prevHref} nextHref={nextHref}/>
                <Footer />
            </div>
        );
    } else {
        return (
            <NotFoundPage />
        )
    }
}

function getPrevAndNext(projectList, appName) {
    const currentProjectIndex = projectList.findIndex(project => project === appName);

    let nextIndex = projectList[currentProjectIndex + 1] ? currentProjectIndex + 1 : 0;
    let nextHref = projectList[nextIndex];

    let prevIndex = projectList[currentProjectIndex - 1] ? currentProjectIndex - 1 : projectList.length - 1;
    let prevHref = projectList[prevIndex];

    return { prevHref, nextHref };
}

export default AppInfoPage;
