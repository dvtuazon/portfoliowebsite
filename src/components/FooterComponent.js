import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-scroll';

function Footer() {
    return (
        <footer className="site-footer" fluid>
            <div className="footer">
                <Container>
                    <Row>
                        <Col xs="6" md="3">
                            <h5 className="title">Links</h5>
                            <ul className="list-unstyled">
                                <li><Link to='home' className="link" smooth offset={-135}><i className="fa fa-home fa-fw" /> Home</Link></li>
                                <li><Link to='about' className="link" smooth offset={-73}><i className="fa fa-info fa-fw" /> About</Link></li>
                                <li><Link to='projects' className="link" smooth offset={-73}><i className="fa fa-briefcase fa-fw" /> Projects</Link></li>
                                <li><Link to='contact' className="link" smooth offset={-73}><i className="fa fa-phone fa-fw" /> Contact</Link></li>
                            </ul>
                        </Col>
                        <Col xs="6" md={{ size: 3, offset: 6}}>
                            <h5 className="title">Socials</h5>
                            <ul className="list-unstyled">
                                <li><a href='https://github.com/dvtuazon' target="_blank" rel="noopener noreferrer" className="link" smooth offset={-79}><i className="fa fa-github fa-fw" /> GitHub</a></li>
                                <li><a href='https://www.linkedin.com/in/david-tuazon-60105a1a4/' target="_blank" rel="noopener noreferrer" className="link" smooth offset={-79}><i className="fa fa-linkedin fa-fw" /> LinkedIn</a></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    );
}

export default Footer;