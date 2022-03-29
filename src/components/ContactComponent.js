import React from 'react';
import { Container, Button, 
    Form, FormGroup, Label, Input } from 'reactstrap';
import emailjs from 'emailjs-com';
import { Fade, Stagger, FadeTransform } from 'react-animation-components';

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
        <>
            <Container className="container-vh bg px-5" fluid>
                <Fade in>
                    <h1 className="text-center title">Contact Me</h1>
                </Fade>
                <Form onSubmit={sendEmail} className="py-4">
                    <Stagger in>
                        <FadeTransform in>
                            <FormGroup className="row px-3">
                                <Label for="subject" className="col-xs-12 col-md-1 offset-md-1">Subject:</Label>
                                <Input type="text" name="subject" id="subject" className="col-xs-12 col-md-9" placeholder="Subject" />
                            </FormGroup>
                        </FadeTransform>
                        <FadeTransform in>
                            <FormGroup className="row px-3">
                                <Label for="name" className="col-xs-12 col-md-1 offset-md-1">Name:</Label>
                                <Input type="text" name="name" id="name" className="col-xs-12 col-md-9" placeholder="Your name" />
                            </FormGroup>
                        </FadeTransform>
                        <FadeTransform in>
                            <FormGroup className="row px-3">
                                <Label for="email" className="col-xs-12 col-md-1 offset-md-1">Email:</Label>
                                <Input type="email" name="email" id="email" className="col-xs-12 col-md-9" placeholder="Your email" />
                            </FormGroup>
                        </FadeTransform>
                        <FadeTransform in>
                        <FormGroup className="row px-3">
                            <Label for="message" className="col-xs-12 col-md-1 offset-md-1">Message:</Label>
                            <Input type="textarea" rows="4" name="message" id="message" className="col-xs-12 col-md-9" placeholder="Your message" />
                        </FormGroup>
                        </FadeTransform>
                        <FadeTransform in>
                            <div className="col-xs-12 text-center">
                                <Button type="submit">Send Message</Button>
                            </div>
                        </FadeTransform>
                    </Stagger>
                </Form>
            </Container>
        </>
    )
}

export default Contact;