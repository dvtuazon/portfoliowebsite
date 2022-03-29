import React from 'react';
import { Container, Row, Col,
    Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { Fade, Stagger, FadeTransform } from 'react-animation-components';

function Projects() {

    return (
        <>
            <Fade in>
                <Container className="container-vh bg px-5" fluid>
                    <Stagger in>
                        <Fade in>
                            <h1 className="text-center title">Projects</h1>
                        </Fade>
                        <FadeTransform
                            in
                            transformProps={{
                                exitTransform: 'scale(0.5) translateY(50%)'
                            }}>
                            <Row className='justify-content-center'>
                                <Col xs="12" md="3">
                                    <Fade in>
                                    <a href="https://github.com/dvtuazon/nucampsitefrontend" target="_blank" rel="noopener noreferrer" className="link">
                                        <Card>
                                            <div className='cropper'>
                                                <CardImg src={process.env.PUBLIC_URL + '/images/nucamppic.png'} width="318" height="160" alt="nucamp react project" />
                                            </div>
                                            <CardBody>
                                                <CardTitle tag="h5">NuCamp Website</CardTitle>
                                                <CardSubtitle tag="h6" className="text-muted">React + Node.js</CardSubtitle>
                                                <CardText>
                                                    Full stack mockup website with Redux.
                                                    Includes a contact form, comment form, favorites, and authorization. 
                                                </CardText>
                                            </CardBody>
                                        </Card>
                                    </a>
                                    </Fade>
                                </Col>
                                <Col xs="12" md="3">
                                    <Fade in>
                                    <a href="https://github.com/dvtuazon/bootstrap-project" target="_blank" rel="noopener noreferrer" className="link">
                                        <Card>
                                            <div className="cropper overflow">
                                                <CardImg src={process.env.PUBLIC_URL + '/images/bootstrappic.png'} width="318" height="160" alt="beverly laurel mockup project" className="project-pic" />
                                            </div>
                                            <CardBody>
                                                <CardTitle tag="h5">Hotel Website Mockup</CardTitle>
                                                <CardSubtitle tag="h6" className="text-muted">Bootstrap</CardSubtitle>
                                                <CardText>
                                                    Bootstrap mockup based on a hotel I used to work at.
                                                    Created to practice pixel-perfect, mobile-first, responsive design.
                                                </CardText>
                                            </CardBody>
                                        </Card>
                                    </a>
                                    </Fade>
                                </Col>
                                <Col xs="12" md="3">
                                    <Fade in>
                                    <a href="https://daves-weather-search.netlify.app" target="_blank" rel="noopener noreferrer" className="link">
                                        <Card>
                                            <div className='cropper'>
                                                <CardImg src={process.env.PUBLIC_URL + '/images/weatherapp.png'} width="318" height="160" alt="weather search react project" />
                                            </div>
                                            <CardBody>
                                                <CardTitle tag="h5">Weather Search App</CardTitle>
                                                <CardSubtitle tag="h6" className="text-muted">React</CardSubtitle>
                                                <CardText>
                                                    Simple weather application built with React.
                                                    Utilizes the Fetch API to request data from OpenWeatherMap's API.
                                                </CardText>
                                            </CardBody>
                                        </Card>
                                    </a>
                                    </Fade>
                                </Col>
                            </Row>
                        </FadeTransform>
                    </Stagger>
                </Container>
            </Fade>
        </>
    )
}

export default Projects;