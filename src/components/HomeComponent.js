import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-scroll';
import profilepic from '../profilepic.jpg';

function Home() {
    return (
        <Container className="container-home dark-bg px-5" fluid>
            <Row className="pt-5">
                <Col xs="12" xl="4" className="text-center">
                    <img src={profilepic} width="350" className="pic" />
                </Col>
                <Col xs="12" xl="8" className="home-text text-center align-self-center pt-5">
                    <h1 className="big-text">Front End Engineer</h1>
                    <p>
                        Hello there! I'm David. <br /> I use React and other web technologies.
                    </p>
                    <Row className="mt-5 mb-5">
                        <Col xs="12" md={{size: 3, offset: 2}}>
                            <Link to="projects" className="btn btn-secondary" smooth offset={-79}>See my work &rarr;</Link>
                        </Col>
                        <Col xs="12" md="2" className="text-center"> - or -</Col>
                        <Col xs="12" md="3">
                            <Link to="contact" className="btn btn-secondary" smooth>Contact me &rarr;</Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;