import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, NavLink } from 'reactstrap';

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
        return(
            <>
                <Container className="p-0" fluid={true}>
                    <Navbar className="border-bottom" dark sticky="top" expand="md">
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar className="ml-auto">
                                <NavLink className="nav-link px-3" to="/contact">
                                    <i className="fa fa-envelope fa-lg" /> dvtuazon@gmail.com
                                </NavLink>
                                <NavLink className="nav-link px-3">
                                    <i className="fa fa-github fa-lg" /> https://github.com/dvtuazon
                                </NavLink>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </Container>
            </>
        )
    }
}

export default Header;