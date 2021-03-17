import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap'

function Contact() {
    return (
        <Container>
            <Row>
                <Col><h1 className="title">Contact</h1></Col>
            </Row> <br />
            <Row>
                Email:<a href="mailto:dvtuazon@gmail.com">dvtuazon@gmail.com</a>
            </Row>
            <Row>
                GitHub:<a href="https://github.com/dvtuazon">Over here!</a>
            </Row>
        </Container>
    )
}

export default Contact;