import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Nav, Navbar, NavbarToggler, Collapse, NavItem } from 'reactstrap';

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
                                <NavItem className="nav-link px-3" to="/contact">
                                    <i className="fa fa-envelope fa-lg" /> <a href="mailto:dvtuazon@gmail.com">dvtuazon@gmail.com</a>
                                </NavItem>
                                <a href="https://github.com/dvtuazon" target="_blank" className="nav-link px-3">
                                    <i className="fa fa-github fa-lg" /> My GitHub
                                </a>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </Container>
            </>
        )
    }
}

export default Header;