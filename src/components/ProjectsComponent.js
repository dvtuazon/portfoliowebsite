import React, { useState } from 'react';
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function Projects() {
    return (
        <Container>
            <Row>
                <Breadcrumb className="breadcrumb">
                    <BreadcrumbItem><Link to="/home" className="footer-link">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Projects</BreadcrumbItem>
                    <Link to="/home" className="close-btn"><i className="fa fa-times fa-lg ml-3" /></Link>
                </Breadcrumb>
            </Row>
        </Container>
    )
}

export default Projects;