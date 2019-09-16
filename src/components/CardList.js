import React from "react";
import Card from "./Card";
import { apps } from "../data/apps";

const CardList = () => {
	return (
		<div className="card-list" id="work">
			{Object.keys(apps).map((project, i) => {
				return <Card key={i} data={apps[project]} />;
			})}
		</div>
	);
};

export default CardList;
