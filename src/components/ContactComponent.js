import React, { useState } from 'react';
import { Container, Row, Col, Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import * as Scroll from 'react-scroll';
import { Element } from 'react-scroll';

function Contact() {
    return (
        <Element id="contact">
            <Container className="container-2 text-center">
                <h1 className="title">Contact Me</h1>
            </Container>
        </Element>
    )
}

export default Contact;