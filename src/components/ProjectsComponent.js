import React, { useState } from 'react';
import { Container, Row, Col, 
    Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Element } from 'react-scroll';

import nucamppic from '../nucamppic.png';

function Projects() {
    return (
        <Element id="projects">
            <Container className="dark-bg container-3" fluid>
                <Container className="text-center p-1">
                    <h1 className="title col-xs-12 col-md-4 offset-md-4">Projects</h1>
                    <Col>
                        <img src={nucamppic} height="200" className="project-pic" />
                    </Col>
                </Container>
            </Container>
        </Element>
    )
}

export default Projects;