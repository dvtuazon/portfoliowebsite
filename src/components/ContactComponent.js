import React, { useState } from 'react';
import { Container, Row, Col, Breadcrumb, BreadcrumbItem, Button, 
    Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link } from 'react-router-dom';
import * as Scroll from 'react-scroll';
import { Element } from 'react-scroll';
import emailjs from 'emailjs-com';
import { nominalTypeHack } from 'prop-types';

function Contact() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_2pk891g', 'template_vpj3i8f', e.target, 'user_UknWbXIUmDpP0zlmK3bJu')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();
    }

    return (
        <Element id="contact">
            <Container className="container-3 text-center">
                <h1 className="title col-xs-12 col-md-4 offset-md-4">Contact Me</h1>
                <Form onSubmit={sendEmail}>
                    <FormGroup className="row my-3">
                        <Label for="subject" className="col-xs-12 col-md-1 text-left">Subject:</Label>
                        <Input type="text" name="subject" id="subject" className="col-xs-12 col-md-5 mx-3" placeholder="Subject" />
                    </FormGroup>
                    <FormGroup className="row my-3">
                        <Label for="name" className="col-xs-12 col-md-1 text-left">Name:</Label>
                        <Input type="text" name="name" id="name" className="col-xs-12 col-md-5 mx-3" placeholder="Your name" />
                    </FormGroup>
                    <FormGroup className="row my-3">
                        <Label for="email" className="col-xs-12 col-md-1 text-left">Email:</Label>
                        <Input type="email" name="email" id="email" className="col-xs-12 col-md-5 mx-3" placeholder="Your email" />
                    </FormGroup>
                    <FormGroup className="row my-3">
                        <Label for="message" className="col-xs-12 col-md-1 text-left">Message:</Label>
                        <Input type="textarea" rows="4" name="message" id="message" className="col-xs-12 col-md-5 mx-3" placeholder="Your message" />
                    </FormGroup>
                    <div className="col-xs-12 col-md-6 text-right">
                        <Button type="submit">Send Message</Button>
                    </div>
                </Form>
            </Container>
        </Element>
    )
}

export default Contact;