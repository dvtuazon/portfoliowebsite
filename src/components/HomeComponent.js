import React, { useState } from 'react';
import { Container, Row, Col, Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';
import { Link } from 'react-scroll';
import profilepic from '../profilepic.jpg';

function Home() {
    return (
        <Container className="container-home home pt-5" fluid>
            <Row>
                <Col xs="12" md="5" className="text-center">
                    <img src={profilepic} width="350" className="pic" />
                </Col>
                <Col xs="12" md="7" className="text-center align-self-center pt-5">
                    <h1 className="big-text">Front End Engineer</h1>
                    <p>
                        Hello there! I'm David. <br /> I specialize in JavaScript and other web technologies.
                    </p>
                    <Link to="projects" className="work mt-5 mb-5">See my work &rarr;</Link>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;