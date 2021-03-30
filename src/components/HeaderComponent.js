import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Nav, Navbar, NavbarBrand, NavLink, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { Link } from 'react-scroll';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => setIsOpen(!isOpen);
    
    return (
        <>
            <Jumbotron fluid className="typewriter">
                <h1 className="typing-erase pl-2">
                    Lifelong learning
                </h1>
            </Jumbotron>
            <Navbar dark sticky="top" expand="md">
                <Col>
                    <NavbarToggler onClick={toggleNavbar} className="navbar-dark" />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav navbar className="header">
                            <Col xs="12" md="4">
                                <NavItem>
                                    <Link className="nav-link header-item text-center" to="about">
                                        &#60;<span style={{ color: 'rgb(54, 190, 150)'}}>About</span> /&#62;
                                    </Link>
                                </NavItem>
                            </Col>
                            <Col xs="12" md="4">
                                <NavItem>
                                    <Link className="nav-link header-item text-center" to="projects">
                                        &#60;<span style={{ color: 'rgb(54, 190, 150)'}}>Projects</span> /&#62;
                                    </Link>
                                </NavItem>
                            </Col>
                            <Col xs="12" md="4">
                                <NavItem>
                                    <Link className="nav-link header-item text-center" to="resume">
                                        &#60;<span style={{ color: 'rgb(54, 190, 150)'}}>Resume</span> /&#62;
                                    </Link>
                                </NavItem>
                            </Col>
                        </Nav>
                    </Collapse>
                </Col>
                <Col>
                    <Nav>
                        <NavItem className="ml-auto">David Tuazon</NavItem>
                    </Nav>
                </Col>
            </Navbar>
        </>
    )
}

export default Header;