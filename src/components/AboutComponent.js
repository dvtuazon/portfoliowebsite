import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';

function About() {
    return (
        <Container>
            <Row>
                <Col><h1 className="title">About Me</h1></Col>
            </Row> <br />
            <Row>
                Hello there! I'm David, an aspiring front end engineer. I mostly 
                use JavaScript-based technologies such as React.js and React Native. 
                Although I specialize in front end, I am familiar with Node.js, 
                Express, and MongoDB, allowing me to create a back end as well.
            </Row> <br />
            <Row>
                I began teaching myself web development languages after high school 
                on Udemy. I learned HTML and CSS, but I felt that I wanted a good structure
                for learning code, so I ended up taking a bootcamp with NuCamp. 
                Through it I was introduced to JavaScript and the JS technologies I 
                previously mentioned.
            </Row> <br />
            <Row>
                I'm a believer of lifelong learning, and I will always want to expand 
                my skillset. After bootcamp, learning other languages on my own is not 
                as big of a stretch. My goal is to become flexible within the tech 
                industry, and I'm confident that my hunger for knowledge will help me 
                in that feat.
            </Row>
        </Container>
    )
}

export default About;