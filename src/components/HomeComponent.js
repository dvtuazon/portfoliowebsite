import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-scroll';
import profilepic from '../profilepic.jpg';
import { Element } from 'react-scroll';

function Home() {
    return (
        <Element id="home">
            <Container className="container-home dark-bg" fluid>
                <Row>
                    <Col xs="12" md="4">
                        <img src={profilepic} className="pic mx-auto" alt="profile" />
                    </Col>
                    <Col xs="12" md="8" className="center-home home-text text-center">
                        <h1 className="big-text pt-5">Front End Engineer</h1>
                        <p>
                            Hello there! I'm David. <br /> I use React and other web technologies.
                        </p>
                        <Row className="mt-5 mb-5">
                            <Col xs="12" lg="5">
                                <Link to="projects" className="btn btn-secondary no-wrap" smooth offset={-79}>My Work &rarr;</Link>
                            </Col>
                            <Col xs="12" lg="2">
                                <p className="my-1">or</p>
                            </Col>
                            <Col xs="12" lg="5">
                                <Link to="contact" className="btn btn-secondary no-wrap" smooth offset={-89}>Contact Me &rarr;</Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Element>
    );
}

export default Home;