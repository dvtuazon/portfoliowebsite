import React, { useState } from 'react';
import { Container, Col } from 'reactstrap';
import { Nav, Navbar, NavbarBrand, NavLink, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
const name = 'david tuazon'
function Header() {
    const [collapsed, setCollapsed] = useState(false);

    const toggleNavbar = () => setCollapsed(!collapsed);
    
    return (
        <>
            <div className="jumbotron jumbotron-fluid typewriter">
                <h1 className="name typing-erase">
                    <span style={{ color: 'rgb(64, 130, 161)' }}>const</span>
                    <span style={{ color: 'rgb(46, 92, 114)' }}> name</span> <span style={{ color: 'white' }}> =</span>
                    <span style={{ color: 'rgb(179, 116, 74)' }}> 'David Tuazon'</span>
                </h1>
            </div>
            <Container fluid>
                <Navbar sticky="top">
                    <Nav navbar className="header">
                        <Container>
                            <NavItem>
                                <NavLink className="nav-link header-item" href="/projects">
                                    &#60;<span style={{ color: 'rgb(54, 190, 150)'}}>Projects</span> /&#62;
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link header-item" href="/about">
                                    &#60;<span style={{ color: 'rgb(54, 190, 150)'}}>About</span> /&#62;
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link header-item" href="/contact">
                                    &#60;<span style={{ color: 'rgb(54, 190, 150)'}}>Contact</span> /&#62;
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link header-item" href="/resume">
                                    &#60;<span style={{ color: 'rgb(54, 190, 150)'}}>Resume</span> /&#62;
                                </NavLink>
                            </NavItem>
                        </Container>
                    </Nav>
                </Navbar>
            </Container>
        </>
    )
}

export default Header;