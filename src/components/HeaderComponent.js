import React, { useState } from 'react';
import { Container, Col } from 'reactstrap';
import { Nav, Navbar, NavbarBrand, NavLink, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';

function Header() {
    const [collapsed, setCollapsed] = useState(false);

    const toggleNavbar = () => setCollapsed(!collapsed);
    
    return (
        <>
            <div className="jumbotron jumbotron-fluid typewriter">
                <h1 className="name typing-erase pl-2">
                    <span style={{ color: 'rgb(64, 130, 161)' }}>const</span>
                    <span style={{ color: 'rgb(46, 92, 114)' }}> name</span> <span style={{ color: 'rgb(219, 219, 219);' }}> =</span>
                    <span style={{ color: 'rgb(179, 116, 74)' }}> 'David Tuazon'</span><span style={{ color: 'rgb(219, 219, 219)' }}>;</span>
                </h1>
            </div>
            <Container fluid>
                <Navbar sticky="top">
                    <Nav navbar className="header bg-dark">
                        <Container>
                            <Col xs="3">
                                <NavItem>
                                    <NavLink className="nav-link header-item" href="/projects">
                                        &#60;<span style={{ color: 'rgb(54, 190, 150)'}}>Projects</span> /&#62;
                                    </NavLink>
                                </NavItem>
                            </Col>
                            <Col xs="3">
                                <NavItem>
                                    <NavLink className="nav-link header-item" href="/about">
                                        &#60;<span style={{ color: 'rgb(54, 190, 150)'}}>About</span> /&#62;
                                    </NavLink>
                                </NavItem>
                            </Col>
                            <Col xs="3">
                                <NavItem>
                                    <NavLink className="nav-link header-item" href="/contact">
                                        &#60;<span style={{ color: 'rgb(54, 190, 150)'}}>Contact</span> /&#62;
                                    </NavLink>
                                </NavItem>
                            </Col>
                            <Col xs="3">
                                <NavItem>
                                    <NavLink className="nav-link header-item" href="/resume">
                                        &#60;<span style={{ color: 'rgb(54, 190, 150)'}}>Resume</span> /&#62;
                                    </NavLink>
                                </NavItem>
                            </Col>
                        </Container>
                    </Nav>
                </Navbar>
            </Container>
        </>
    )
}

export default Header;