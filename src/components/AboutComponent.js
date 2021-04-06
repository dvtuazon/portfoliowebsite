import React, { useState } from 'react';
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Element } from 'react-scroll';

function About() {
    return (
        <Element id="about">
            <Container className="container-2">
                <div className="home-text">
                    <h1 className="title col-xs-12 col-md-4 offset-md-4 text-center">About Me</h1>
                    <p className="mx-3">
                        My name is David Tuazon, and I am a front end developer. I
                        use JavaScript-based front end technologies such as React and React
                        Native, and I am also familiar with Node.js, Express, and MongoDB,
                        allowing me to build a back end as well.
                        </p>
                    <br />
                    <p className="mx-3">
                        I began teaching myself web development languages on Udemy after being 
                        introduced to them in high school. I learned HTML and CSS, but I felt 
                        that I wanted a good structure for learning programming, so I decided 
                        to a bootcamp with NuCamp. Through it I was introduced to JavaScript 
                        and the MERN stack.
                        </p>
                    <br />
                    <p className="mx-3">
                        I am good at picking up new concepts, identifying patterns, and integrating it 
                        into my work. As a naturally curious person, I am a believer of lifelong learning
                        and will always want to expand my skillset. My goal is to become flexible engineer
                        within the tech industry, and I am confident that my curiosity can
                        take me there.
                    </p>
                </div>
            </Container>
        </Element>
    )
}

export default About;