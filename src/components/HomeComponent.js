import React, { useState } from 'react';
import { Container, Row, Col, Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import profilepic from '../profilepic.jpg';

function Home() {
    return (
        <Container>
            <Row>
                <Breadcrumb className="breadcrumb">
                    <BreadcrumbItem active>Home</BreadcrumbItem>
                </Breadcrumb>
            </Row>
            <Container className="me">
                <Row>
                    <Col xs="12" md ="4" className="text-center">
                        <img src={profilepic} width="300" className="pic" />
                    </Col>
                    <Col xs="12" md="auto" className="text-center">
                        <Container className="media-text">
                            <Row>
                                <Col>Hello there!</Col>
                            </Row>
                            <Row className="big-text">
                                <Col>Front End Engineer</Col>
                            </Row>
                            <Row className="mt-5">
                                <Col><Button href="/projects">See my work &rarr;</Button></Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Home;