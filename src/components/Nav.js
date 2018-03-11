import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const Menu = require('react-icons/lib/md/menu');

export default class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: '0px'
        };
    }

    toggleNavbar = () => {
        if (this.state.height === '0px') {
            this.setState({ height: '288px' });
        } else {
            this.setState({ height: '0px' });
        }
    }

    render() {
        return (
            <div className="navbar">
                <div className="content-container-fluid">
                    <div className="navbar__content">
                        <div className="navbar-brand">
                            <Link className="navbar__title" to="/">
                                <img src="/images/jt_logo.svg" alt="Jake Tripp Logo" />
                                <h1>JAKE TRIPP</h1>
                            </Link>
                        </div>
                        <div className="navbar-links">

                            <div className="links">
                                <Link to="/">Home</Link>
                                <a href="/#about">About</a>
                                <a href="/#skills">Skills</a>
                                <a href="/#work">Work</a>
                                <a href="/#contact">Contact</a>
                            </div>

                            <button className="icon" onClick={this.toggleNavbar} aria-label="Toggle nav bar"><Menu /></button>
                        </div>
                    </div>
                </div>
                <div className="mobile-navbar-links" style={{ height: this.state.height }}>
                    <Link to="/" onClick={this.toggleNavbar}>Home</Link>
                    <a href="/#about" onClick={this.toggleNavbar}>About</a>
                    <a href="/#skills" onClick={this.toggleNavbar}>Skills</a>
                    <a href="/#work" onClick={this.toggleNavbar}>Work</a>
                    <a href="/#contact" onClick={this.toggleNavbar}>Contact</a>
                </div>

            </div>
        );
    }
}