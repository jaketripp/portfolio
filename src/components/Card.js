import React, { Component } from "react";
import LazyLoad from "react-lazyload";
import Placeholder from "./Placeholder";
import Radium from "radium";
import { Link } from "react-router-dom";
const RadiumLink = Radium(Link);

class Card extends Component {
	constructor(props) {
		super(props);
		this.state = {
			blockStyle: {
				display: "block",
			},
			...props,
		};
	}

	// block buttons until 10 ms after mouse has entered card or 10ms after mouse has clicked card (for weird mobile bug)
	// to reproduce bug on mobile, click more info on one
	// click back
	// click to induce hover
	// try to click more info, doesn't work
	// onMouseUp event fixed it
	// block buttons on mouseLeave
	restoreBlock = () => {
		this.setState({
			blockStyle: {
				display: "block",
			},
		});
	};

	removeBlock = () => {
		setTimeout(() => {
			this.setState({
				blockStyle: {
					display: "none",
				},
			});
		}, 100);
	};

	render() {
		const { color, backgroundColor } = this.state.data.style;

		const cardStyle = { color };
		const overlayStyle = { backgroundColor };

		const btnStyle = {
			backgroundColor,
			color,
			border: `2px solid ${color}`,

			":hover": {
				backgroundColor: color,
				color: backgroundColor,
			},
		};

		const { logo, title, demoURL, githubURL, infoURLName } = this.state.data;
		return (
			<div
				className="card"
				style={cardStyle}
				onMouseEnter={this.removeBlock}
				onMouseLeave={this.restoreBlock}
				onMouseUp={this.removeBlock}
			>
				<LazyLoad
					height={"100%"}
					placeholder={<Placeholder src={logo} dataAlt={title} />}
					once
					offset={600}
				>
					<img src={`/images/${logo}`} alt={`${title} logo`} className="image" />
				</LazyLoad>
				<div className="overlay" style={overlayStyle}>
					<h3>{title}</h3>
					<div className="text">
						<div className="block" style={this.state.blockStyle}></div>
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
						<RadiumLink
							className="card__links__button"
							style={btnStyle}
							to={`/about/${infoURLName}`}
						>
							More Info
						</RadiumLink>
					</div>
				</div>
			</div>
		);
	}
}

export default Radium(Card);
