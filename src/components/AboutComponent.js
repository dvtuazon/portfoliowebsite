import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import profilepic from '../profilepic.jpg';
import { Fade, Stagger, FadeTransform } from 'react-animation-components';

function About() {
    return (
        <>
            <Container className="container-vh bg px-5" fluid>
                <Fade in>
                    <h1 className="text-center title">About Me</h1>
                </Fade>
                <Row className="about-font align-items-center">
                    <Col xs='12' md={{ size: 4, offset: 1 }}>
                        <Fade in>
                            <img src={profilepic} alt="me" className="pic mx-auto" />
                        </Fade>
                    </Col>
                    <Col xs='12' md='6'>
                        <Stagger in>
                            <FadeTransform
                                in
                                transformProps={{
                                    exitTransform: 'translateY(-50%)'
                                }}>
                            <p>
                                My name is David Tuazon, and I am a front end developer. I
                                use JavaScript-based technologies such as React and React
                                Native. Despite my focus on front end, I am also familiar with Node.js, Express, and MongoDB,
                                allowing me to create a back end as well.
                            </p>
                            </FadeTransform>
                            <FadeTransform
                                in
                                transformProps={{
                                    exitTransform: 'translateY(-50%)'
                                }}>
                            <p>
                                I began my journey with software on Udemy. After learning HTML and CSS, I wanted a good structure for learning programming, so I decided 
                                to attend a bootcamp with NuCamp. Through bootcamp I was introduced to JavaScript 
                                and other tools to create full stack applications.
                            </p>
                            </FadeTransform>
                            <FadeTransform
                                in
                                transformProps={{
                                    exitTransform: 'translateY(-50%)'
                                }}>
                            <p>
                                I am good at picking up new concepts and integrating it into my work. I am a firm 
                                believer of lifelong learning and will always want to expand my skillset. 
                                I am passionate about making positive contributions to the world
                                and I am determined to do it as a flexible engineer.
                            </p>
                            </FadeTransform>
                        </Stagger>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default About;