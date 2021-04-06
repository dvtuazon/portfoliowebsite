import React, { useState } from 'react';
import { Col } from 'reactstrap';
import { Nav, Navbar, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { Link } from 'react-scroll';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => setIsOpen(!isOpen);

    const closeNav = () => setIsOpen(false);

    return (
        <>
            <Jumbotron fluid className="typewriter">
                <Col xs="12" lg="8">
                <h1 className="typing-erase pl-2">
                    Lifelong learning
                </h1>
                </Col>
            </Jumbotron>
            <Navbar dark sticky="top" expand="md">
                <Col>
                    <NavbarToggler onClick={toggleNavbar} className="navbar-dark" />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav navbar className="header">
                            <Col xs="12" md="4">
                                <NavItem>
                                    <Link onClick={closeNav} className="nav-link header-item text-center" to="about" smooth offset={-79}>
                                        &#60;<span style={{ color: 'rgb(54, 190, 150)'}}>About</span> /&#62;
                                    </Link>
                                </NavItem>
                            </Col>
                            <Col xs="12" md="4">
                                <NavItem>
                                    <Link onClick={closeNav} className="nav-link header-item text-center" to="projects" smooth offset={-79}>
                                        &#60;<span style={{ color: 'rgb(54, 190, 150)'}}>Projects</span> /&#62;
                                    </Link>
                                </NavItem>
                            </Col>
                            <Col xs="12" md="4">
                                <NavItem>
                                    <Link onClick={closeNav} className="nav-link header-item text-center" to="contact" smooth offset={-89}>
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
                            <Link to="home" className="link" offset={-140} smooth>
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