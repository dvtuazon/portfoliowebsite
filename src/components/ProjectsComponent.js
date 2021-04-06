import React from 'react';
import { Container, Row, Col,
    Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { Element } from 'react-scroll';

function Projects() {

    return (
        <Element id="projects">
            <Container className="dark-bg container-3" fluid>
                <Container className="text-center p-0">
                    <h1 className="title col-xs-12 col-md-6 offset-md-3 col-lg-4 offset-lg-4">Projects</h1>
                    <Row>
                        <Col xs="12" md="4">
                            <a href="https://github.com/dvtuazon/nucampsitefrontend" target="_blank" rel="noopener noreferrer" className="link">
                                <Card>
                                    <CardImg src={process.env.PUBLIC_URL + '/images/nucamppic.png'} width="318" height="180" alt="nucamp react project" />
                                    <CardBody>
                                        <CardTitle tag="h5">NuCamp Course Website</CardTitle>
                                        <CardSubtitle tag="h6" className="text-muted">MERN Stack</CardSubtitle>
                                        <CardText>
                                            A full stack website project from NuCamp created by integrating React and Node.js. 
                                            It includes a functioning contact form, comment form, favorites, and authorization (admin or registered account). 
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </a>
                        </Col>
                        <Col xs="12" md="4">
                            <a href="https://github.com/dvtuazon/bootstrap-project" target="_blank" rel="noopener noreferrer" className="link">
                                <Card>
                                    <div className="cropper">
                                        <CardImg src={process.env.PUBLIC_URL + '/images/bootstrappic.png'} width="318" height="180" alt="beverly laurel mockup project" className="project-pic" />
                                    </div>
                                    <CardBody>
                                        <CardTitle tag="h5">Hotel Website Mockup</CardTitle>
                                        <CardSubtitle tag="h6" className="text-muted">Bootstrap</CardSubtitle>
                                        <CardText>
                                            A simple Bootstrap mockup based on a hotel I used to work at.
                                            I created it to practice layouts through Bootstrap, which helped a lot 
                                            because I heavily use Reactstrap and/or React Bootstrap for styling.
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </a>
                        </Col>
                        <Col xs="12" md="4">
                            <a href="https://github.com/dvtuazon/reactnative" target="_blank" rel="noopener noreferrer" className="link">
                                <Card>
                                    <div className="cropper">
                                        <CardImg src={process.env.PUBLIC_URL + '/images/nucampnative.png'} width="318" height="180" alt="nucamp react native project" className="project-pic" />
                                    </div>
                                    <CardBody>
                                        <CardTitle tag="h5">NuCamp React Native App</CardTitle>
                                        <CardSubtitle tag="h6" className="text-muted">React Native</CardSubtitle>
                                        <CardText>
                                            The mobile development project from NuCamp. Uses stack navigation, 
                                            drawer navigation, favorites, comments, register/login functionality, 
                                            and camera/gallery usage.
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </a>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </Element>
    )
}

export default Projects;