import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { MdMenu } from "react-icons/md";

export default class Nav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			expanded: false,
		};
	}

	toggleNavbar = () => {
		this.setState({ expanded: !this.state.expanded });
	};

	scroll = el => {
		el.scrollIntoView({ behavior: "smooth", block: "start" });
	};

	render() {
		const navLinksState = this.state.expanded ? " expanded" : "";
		return (
			<div className="navbar">
				<div className="navbar__content content-container-fluid">
					<Link className="navbar__title" to="/">
						<img src="/images/jt_logo.svg" alt="Jake Tripp Logo" />
						<h1>Jake Tripp</h1>
					</Link>
					<button
						className="navbar__menu"
						onClick={this.toggleNavbar}
						aria-label="Toggle nav bar"
					>
						<MdMenu />
					</button>
					<div className={`navbar-links${navLinksState}`}>
						<Link to="/">Home</Link>
						<Link to="/#about" scroll={this.scroll}>
							About
						</Link>
						<Link to="/#skills" scroll={this.scroll}>
							Skills
						</Link>
						<Link to="/#work" scroll={this.scroll}>
							Work
						</Link>
						<Link to="/#contact" scroll={this.scroll}>
							Contact
						</Link>
					</div>
				</div>
			</div>
		);
	}
}
