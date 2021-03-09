import React, { useState } from 'react';
import { Container, Col } from 'reactstrap';
import { Nav, Navbar, NavbarBrand, NavLink, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';

function Header() {
    const [collapsed, setCollapsed] = useState(false);

    const toggleNavbar = () => setCollapsed(!collapsed);
    
    return (
        <>
            <Container className="p-5" fluid={true}>
                <Navbar sticky="top" expand="md">
                    <NavbarToggler onClick={toggleNavbar} className=" navbar-light" />
                    <Collapse isOpen={collapsed} navbar>
                        <Nav navbar>
                            <Container>
                                <Col>
                                <NavItem>
                                    <h1 className="name">David Tuazon</h1>
                                </NavItem>
                                </Col>
                                <NavItem>
                                    <NavLink className="nav-link" href="/projects">
                                        Projects
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" href="/about">
                                        About
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" href="/contact">
                                        Contact
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" href="/resume">
                                        Resume
                                    </NavLink>
                                </NavItem>
                            </Container>
                        </Nav>
                    </Collapse>
                </Navbar>
            </Container>
        </>
    )
}

export default Header;