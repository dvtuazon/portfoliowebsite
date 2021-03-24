import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Nav, Navbar, NavbarBrand, NavLink, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => setIsOpen(!isOpen);
    
    return (
        <>
            <div className="jumbotron jumbotron-fluid typewriter">
                <h1 className="name typing-erase pl-2">
                    <span style={{ color: 'rgb(64, 130, 161)' }}>const</span>
                    <span style={{ color: 'rgb(46, 92, 114)' }}> name</span> <span style={{ color: 'rgb(219, 219, 219);' }}> =</span>
                    <span style={{ color: 'rgb(179, 116, 74)' }}> 'David Tuazon'</span><span style={{ color: 'rgb(219, 219, 219)' }}>;</span>
                </h1>
            </div>
            <Navbar dark sticky="top" expand="md">
                <Container fluid>
                    <NavbarToggler onClick={toggleNavbar} className="navbar-dark" />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav navbar className="header bg-dark">
                            <Row>
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
                            </Row>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;