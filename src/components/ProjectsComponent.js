import React, { useState } from 'react';
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Element } from 'react-scroll';

function Projects() {
    return (
        <Element id="projects">
            <Container>
                <Row>
                    <h1 className="px-3">Projects</h1>
                </Row>
            </Container>
        </Element>
    )
}

export default Projects;