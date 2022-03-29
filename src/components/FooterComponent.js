import React from 'react';
import { Container, Row, Col } from 'reactstrap';

function Footer() {
    return (
        <footer className="site-footer" fluid>
            <div className="footer">
                <Container fluid>
                    <Row>
                        <Col xs="6" md={{ size: 2, offset: 8 }} className='text-center'>
                            <a href='https://github.com/dvtuazon' target="_blank" rel="noopener noreferrer" className="link"><i className="fa fa-github fa-fw" /> GitHub</a>
                        </Col>
                        <Col xs="6" md="2" className='text-center'>
                            <a href='https://www.linkedin.com/in/david-tuazon-60105a1a4/' target="_blank" rel="noopener noreferrer" className="link"><i className="fa fa-linkedin fa-fw" /> LinkedIn</a>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    );
}

export default Footer;