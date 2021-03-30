import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Element } from 'react-scroll';

function Projects() {
    return (
        <Element id="projects">
            <Container className="home" fluid>
                <Row>
                    <h1 className="title px-3">Projects</h1>
                </Row>
            </Container>
        </Element>
    )
}

export default Projects;