import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Nav, Navbar, NavbarBrand, NavLink, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <>
                <Container className="p-5" fluid={true}>
                    <Navbar sticky="top" expand="md">
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <div className="container-fluid">
                                    <div className="row">
                                        <NavbarBrand className="col">
                                            <h1 className="name">David Tuazon</h1>
                                        </NavbarBrand>
                                        <NavItem>
                                            <NavLink className="nav-link" to="/work">
                                                Work
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className="nav-link" to="/about">
                                                About
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className="nav-link" to="/contact">
                                                Contact
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className="nav-link" to="/resume">
                                                Resume
                                            </NavLink>
                                        </NavItem>
                                    </div>
                                </div>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </Container>
            </>
        )
    }
}

export default Header;