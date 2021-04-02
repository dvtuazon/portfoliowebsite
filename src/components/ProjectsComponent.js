import React, { useState } from 'react';
import { Container, Row, Col, 
    Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Element } from 'react-scroll';

import nucamppic from '../nucamppic.png';

function Projects() {
    return (
        <Element id="projects">
            <Container className="dark-bg container-2 text-center" fluid>
                <h1 className="title">Projects</h1>
                    <Col xs="12" md="2">
                        <img src={nucamppic} width="150%" />
                    </Col>
            </Container>
        </Element>
    )
}

export default Projects;