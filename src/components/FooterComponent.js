import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';

function Footer() {
    return (
        <footer className="site-footer" fluid>
            <div className="footer">
                <Container>
                    <Row>
                        <Col xs="12" md="3" className="text-center">
                            <i className="fa fa-github" /> <a href="https://github.com/dvtuazon" className="footer-link">My GitHub here!</a>
                        </Col>
                        <Col xs="12" md={{ size: 3, offset: 6 }} className="text-center">
                            <i className="fa fa-envelope" /> <a href="mailto:dvtuazon@gmail.com" className="footer-link">dvtuazon@gmail.com</a>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    );
}

export default Footer;