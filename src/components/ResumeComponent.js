import React, { useState } from 'react';
import { Container, Row, Col, Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

function Resume() {
    return (
        <Container>
            <Row>
                <Breadcrumb className="breadcrumb">
                    <BreadcrumbItem><Link to="/home" className="link">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Resume</BreadcrumbItem>
                    <Link to="/home" className="close-btn"><i className="fa fa-times fa-lg ml-3" /></Link>
                </Breadcrumb>
            </Row>
            <Row className="px-3">
                <h2>Objective</h2>
                <p>
                    I am searching for a position where I can learn how to work with other 
                    developers to contribute to real world projects.
                </p>
            </Row>
            <Row className="px-3">
                <h2>
                    Skills
                </h2>
            </Row>
            <Row className="px-3">
                <Button className="skill">HTML</Button>
                <Button className="skill">CSS</Button>
                <Button className="skill">JavaScript</Button>
                <Button className="skill">Git</Button>
                <Button className="skill">Bootstrap</Button>
                <Button className="skill">React</Button>
                <Button className="skill">React Native</Button>
                <Button className="skill">Node</Button>
            </Row>
        </Container>
    )
}

export default Resume;