import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const Menu = require('react-icons/lib/md/menu');

export default class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: true,
            height: '0px'
        };
    }

    toggleNavbar = () => {
        let height;
        // flip it around since you're calculating it before updating the state
        if (!this.state.collapsed) {
            height = '0px';
        } else {
            height = '288px'
        }
        this.setState({
            collapsed: !this.state.collapsed,
            height
        });
    }

    render() {
        return (
            <div className="navbar">
                <div className="content-container-fluid">
                    <div className="navbar__content">
                        <div className="navbar-brand">
                            <Link className="navbar__title" to="/">
                                <h1>Jake Tripp</h1>
                            </Link>
                        </div>
                        <div className="navbar-links">

                            <div className="links">
                                <Link to="/">Home</Link>
                                <a href="/#about">About</a>
                                <a href="/#skills">Skills</a>
                                <a href="/#work">Work</a>
                                <Link to="/contact">Contact</Link>
                            </div>

                            <button className="icon" onClick={this.toggleNavbar}><Menu/></button>
                        </div>
                    </div>
                </div>
                <div className="mobile-navbar-links" style={{ height: this.state.height }}>
                    <Link to="/">Home</Link>
                    <a href="/#about">About</a>
                    <a href="/#skills">Skills</a>
                    <a href="/#work">Work</a>
                    <Link to="/contact">Contact</Link>
                </div>
                
            </div>
        );
    }
}

// <div>
//     <Navbar color="faded" light>
//         <NavbarBrand href="/" className="mr-auto">reactstrap</NavbarBrand>
//         <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
//         <Collapse isOpen={!this.state.collapsed} navbar>
//             <Nav navbar>
//                 <NavItem>
//                     <NavLink href="/components/">Components</NavLink>
//                 </NavItem>
//                 <NavItem>
//                     <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
//                 </NavItem>
//             </Nav>
//         </Collapse>
//     </Navbar>
// </div>

// you might need toggleNav & updateDocWidth function to change state:

// this.state = {
//     doc_width: document.body.clientWidth,
//     show_nav: false
// }
// and add window.onresize = this.updateDocWidth before the return in render(), and all of rest is about rendering.