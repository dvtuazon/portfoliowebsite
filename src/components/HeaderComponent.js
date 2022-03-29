import React, { useState } from 'react';
import { Col, Nav, Navbar, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { Link } from 'react-router-dom';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => setIsOpen(!isOpen);

    const closeNav = () => setIsOpen(false);

    return (
        <>
            <Jumbotron fluid className="typewriter">
                <Col xs="12" lg="8">
                <h1 className="typing-erase">
                    Lifelong learning
                </h1>
                </Col>
            </Jumbotron>
            <Navbar dark sticky="top" expand="md">
                <Col>
                    <NavbarToggler onClick={toggleNavbar} className="navbar-dark" />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav navbar className="header">
                        <Col xs="12" md="3">
                                <NavItem>
                                    <Link onClick={closeNav} className="nav-link header-item text-left" to="/">
                                        &#60;<span style={{ color: 'rgb(54, 190, 150)'}}>Home</span> /&#62;
                                    </Link>
                                </NavItem>
                            </Col>
                            <Col xs="12" md="3">
                                <NavItem>
                                    <Link onClick={closeNav} className="nav-link header-item text-left" to="about">
                                        &#60;<span style={{ color: 'rgb(54, 190, 150)'}}>About</span> /&#62;
                                    </Link>
                                </NavItem>
                            </Col>
                            <Col xs="12" md="3">
                                <NavItem>
                                    <Link onClick={closeNav} className="nav-link header-item text-left" to="projects">
                                        &#60;<span style={{ color: 'rgb(54, 190, 150)'}}>Projects</span> /&#62;
                                    </Link>
                                </NavItem>
                            </Col>
                            <Col xs="12" md="3">
                                <NavItem>
                                    <Link onClick={closeNav} className="nav-link header-item text-left" to="contact">
                                        &#60;<span style={{ color: 'rgb(54, 190, 150)'}}>Contact</span> /&#62;
                                    </Link>
                                </NavItem>
                            </Col>
                        </Nav>
                    </Collapse>
                </Col>
                <Col>
                    <Nav>
                        <NavItem className="ml-auto">
                            <Link to="/" className="link">
                                David Tuazon
                            </Link>
                        </NavItem>
                    </Nav>
                </Col>
            </Navbar>
        </>
    )
}

export default Header;