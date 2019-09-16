import React from "react";
import LazyLoad from "react-lazyload";
import Placeholder from "./Placeholder";
import Radium from "radium";
import { Link } from "react-router-dom";
import techObj from "../data/tech";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const AppInfo = ({ app, prevHref, nextHref }) => {
	const { color, backgroundColor } = app.style;
	const btnStyle = {
		backgroundColor: color,
		color: backgroundColor,
		border: `2px solid ${backgroundColor}`,

		":hover": {
			backgroundColor,
			color,
		},
	};
	const { title, screenshot, demoURL, githubURL } = app;
	return (
		<div className="app-info">
			<div className="content-container">
				<h1 style={{ color: backgroundColor }}>{title}</h1>
				<div className="content">
					<div className="screenshot">
						<LazyLoad
							height={"100%"}
							placeholder={<Placeholder src={screenshot} />}
							once
						>
							<img src={`/images/${screenshot}`} alt={`${title} screenshot`} />
						</LazyLoad>
						<a href={demoURL}>
							<div className="gradient"></div>
						</a>
					</div>
					<div className="text">
						<div className="buttons">
							<a
								className="card__links__button"
								style={btnStyle}
								key={demoURL}
								href={demoURL}
							>
								Demo
							</a>
							{githubURL && (
								<a
									className="card__links__button"
									style={btnStyle}
									key={githubURL}
									href={githubURL}
								>
									GitHub
								</a>
							)}
						</div>
						<div className="app-info__description">
							<p>
								<strong>Description: </strong>
								{app.description}
							</p>
						</div>
						<div className="app-info__why">
							<p>
								<strong>
									Why I made <em>{title}</em>:{" "}
								</strong>
								{app.why}
							</p>
						</div>
						<div className="app-info__coolFeature">
							<p>
								<strong>What I'm proud of: </strong>
								{app.coolFeature}
							</p>
						</div>
						<div className="app-info__date">
							<p>
								<strong>Date: </strong>
								{app.date}
							</p>
							<p id="tech-p">
								<strong>Tech: </strong>
							</p>
						</div>
						<div className="app-info__tech">
							{app.techList.map((tech, i) => {
								return (
									<img
										src={techObj[tech].logo}
										alt={`${techObj[tech].name} logo`}
										title={`${techObj[tech].name}`}
										key={i}
										id={tech}
										className="tech-icon"
									/>
								);
							})}
						</div>
					</div>
				</div>
				<div className="nextOrPrev">
					<div className="prev">
						<Link to={`/about/${prevHref}`}>
							<MdKeyboardArrowLeft />
							<span>Previous</span>
						</Link>
					</div>
					<div className="next">
						<Link to={`/about/${nextHref}`}>
							<span>Next</span>
							<MdKeyboardArrowRight />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Radium(AppInfo);
