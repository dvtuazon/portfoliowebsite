import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Nav, Navbar, NavbarBrand, NavLink, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => setIsOpen(!isOpen);
    
    return (
        <>
            <Jumbotron fluid className="typewriter">
                <h1 className="name typing-erase pl-2">
                    <span style={{ color: 'rgb(64, 130, 161)' }}>const</span>
                    <span style={{ color: 'rgb(46, 92, 114)' }}> name</span> <span style={{ color: 'rgb(219, 219, 219);' }}> =</span>
                    <span style={{ color: 'rgb(179, 116, 74)' }}> 'David Tuazon'</span><span style={{ color: 'rgb(219, 219, 219)' }}>;</span>
                </h1>
            </Jumbotron>
            <Navbar dark sticky="top" expand="md">
                <Col>
                    <NavbarToggler onClick={toggleNavbar} className="navbar-dark" />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav navbar className="header">
                            <Col xs="12" md="4">
                                <NavItem>
                                    <NavLink className="nav-link header-item text-center" href="/projects">
                                        &#60;<span style={{ color: 'rgb(54, 190, 150)'}}>Projects</span> /&#62;
                                    </NavLink>
                                </NavItem>
                            </Col>
                            <Col xs="12" md="4">
                                <NavItem>
                                    <NavLink className="nav-link header-item text-center" href="/about">
                                        &#60;<span style={{ color: 'rgb(54, 190, 150)'}}>About</span> /&#62;
                                    </NavLink>
                                </NavItem>
                            </Col>
                            <Col xs="12" md="4">
                                <NavItem>
                                    <NavLink className="nav-link header-item text-center" href="/resume">
                                        &#60;<span style={{ color: 'rgb(54, 190, 150)'}}>Resume</span> /&#62;
                                    </NavLink>
                                </NavItem>
                            </Col>
                        </Nav>
                    </Collapse>
                </Col>
                <Col>
                    <Nav>
                        <NavItem className="ml-auto">Lifelong Learning</NavItem>
                    </Nav>
                </Col>
            </Navbar>
        </>
    )
}

export default Header;