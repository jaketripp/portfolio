import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collapsed: true
        };
    }

    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed
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
                            <Link to="/">Home</Link>
                            <a href="/#about">About</a>
                            <a href="/#skills">Skills</a>
                            <a href="/#work">Work</a>
                            <Link to="/contact">Contact</Link>
                        </div>
                    </div>
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