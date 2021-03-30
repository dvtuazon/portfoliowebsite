import React, { useState } from 'react';
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Element } from 'react-scroll';

function About() {
    return (
        <Element id="about">
            <Container className="container-2">
                <Row>
                    <h1 className="mx-3">About Me</h1>
                </Row>
                <Row>
                    <p className="mx-3">
                        My name is David Tuazon, and I am a front end web developer. I  
                        use JavaScript-based front end technologies such as React and React 
                        Native, but I am also familiar with Node.js, Express, and MongoDB, 
                        allowing me to build a back end as well.
                    </p>
                </Row> <br />
                <Row>
                    <p className="mx-3">
                        I began teaching myself web development languages after high school 
                        on Udemy. I learned HTML and CSS, but I felt that I wanted a good structure
                        for learning code, so I ended up taking a bootcamp with NuCamp. 
                        Through it I was introduced to JavaScript and the JS technologies I 
                        previously mentioned.
                    </p>
                </Row> <br />
                <Row>
                    <p className="mx-3">
                        I am a believer of lifelong learning. As a naturally curious person, 
                        I will always want to expand my skillset. It became much easier to learn other 
                        languages after attending a bootcamp. My goal is to become flexible 
                        within the tech industry, and I am confident that my curiosity can 
                        take me there.
                    </p>
                </Row>
            </Container>
        </Element>
    )
}

export default About;