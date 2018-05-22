import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
const Menu = require('react-icons/lib/md/menu');

export default class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar = () => {
        this.setState({ collapsed: !this.state.collapsed });
    }

    render() {
        return (
            <div className="navbar">
                <div className="content-container-fluid">
                    <div className="navbar__content">
                        <div className="navbar-brand">
                            <Link className="navbar__title" to="/">
                                <img src="/images/jt_logo.svg" alt="Jake Tripp Logo" />
                                <h1>Jake Tripp</h1>
                            </Link>
                        </div>
                        <div className="navbar-links">

                            <div className="links">
                                <Link to="/">Home</Link>
                                <Link to="/#about">About</Link>
                                <Link to="/#skills">Skills</Link>
                                <Link to="/#work">Work</Link>
                                <Link to="/#contact">Contact</Link>
                            </div>

                            <button className="icon" onClick={this.toggleNavbar} aria-label="Toggle nav bar"><Menu /></button>
                        </div>
                    </div>
                </div>
                <div className={`mobile-navbar-links ${this.state.collapsed ? 'collapsed' : 'expanded'}`}>
                    <Link to="/">Home</Link>
                    <Link to="/#about">About</Link>
                    <Link to="/#skills">Skills</Link>
                    <Link to="/#work">Work</Link>
                    <Link to="/#contact">Contact</Link>
                </div>
            </div>
        );
    }
}