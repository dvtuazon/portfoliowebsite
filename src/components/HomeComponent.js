import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-scroll';
import profilepic from '../profilepic.jpg';

function Home() {
    return (
        <Container className="container-home home px-5" fluid>
            <Row className="pt-5">
                <Col xs="12" md="4" className="text-center">
                    <img src={profilepic} width="350" className="pic" />
                </Col>
                <Col xs="12" md="8" className="home-text text-center align-self-center pt-5">
                    <h1 className="big-text">Front End Engineer</h1>
                    <p>
                        Hello there! I'm David. <br /> I specialize in JavaScript and other web technologies.
                    </p>
                    <Link to="projects" className="btn btn-dark mt-5 mb-5">See my work &rarr;</Link>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;