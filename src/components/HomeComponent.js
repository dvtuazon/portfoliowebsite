import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Fade, Stagger, FadeTransform } from 'react-animation-components';

function Home() {
    return (
        <>
            <Container className="container-vh center bg" fluid>
                <Row className='justify-content-center'>
                    <Col xs="12" md="10" className="center-home home-text text-center">
                        <Stagger in>
                            <Fade in>
                                <h1 className="big-text pt-5">Front End Engineer</h1>
                            </Fade>
                            <Fade in>
                                <p>
                                    Hello there! I'm David. <br /> I use JavaScript to build fast, responsive web applications.
                                </p>
                            </Fade>
                            <FadeTransform
                                in
                                transformProps={{
                                    exitTransform: 'translateY(50%)'
                                }}>
                                <Row className="mt-5 mb-5">
                                    <Col xs="12" md={{ size: 3, offset: 2 }}>
                                        <Link to="projects" className="btn btn-secondary no-wrap">My Work &rarr;</Link>
                                    </Col>
                                    <Col xs="12" md="2">
                                        <p className="my-1">or</p>
                                    </Col>
                                    <Col xs="12" md="3">
                                        <Link to="contact" className="btn btn-secondary no-wrap">Contact Me &rarr;</Link>
                                    </Col>
                                </Row>
                            </FadeTransform>
                        </Stagger>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Home;