import React, { useState } from 'react';
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <Container>
            <Row>
                <Breadcrumb className="breadcrumb">
                    <BreadcrumbItem active>Home</BreadcrumbItem>
                </Breadcrumb>
            </Row>
        </Container>
    );
}

export default Home;