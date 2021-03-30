import React, { useState } from 'react';
import { Container, Row, Col, Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import * as Scroll from 'react-scroll';
import { Element } from 'react-scroll';

function Resume() {
    return (
        <Element id="resume">
            <Container>
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
        </Element>
    )
}

export default Resume;