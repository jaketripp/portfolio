import React from "react";

import { apps } from "../data/apps";
import Nav from "./Nav";
import AppInfo from "./AppInfo";
import Footer from "./Footer";
import NotFoundPage from "./NotFoundPage";

function getPrevAndNext(projectList, appName) {
	const currentProjectIndex = projectList.findIndex(project => project === appName);

	// next or first
	let nextIndex = projectList[currentProjectIndex + 1] ? currentProjectIndex + 1 : 0;
	let nextHref = projectList[nextIndex];

	// previous or last
	let prevIndex = projectList[currentProjectIndex - 1]
		? currentProjectIndex - 1
		: projectList.length - 1;
	let prevHref = projectList[prevIndex];

	return { prevHref, nextHref };
}

const AppInfoPage = props => {
	const appName = props.match.params.name;
	const projectList = Object.keys(apps);
	const { prevHref, nextHref } = getPrevAndNext(projectList, appName);

	if (apps[appName]) {
		return (
			<div>
				<Nav />
				<AppInfo app={apps[appName]} prevHref={prevHref} nextHref={nextHref} />
				<Footer />
			</div>
		);
	} else {
		return <NotFoundPage />;
	}
};

export default AppInfoPage;
