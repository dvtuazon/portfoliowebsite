import React, { useState } from 'react';
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';
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
        </Container>
    )
}

export default Resume;