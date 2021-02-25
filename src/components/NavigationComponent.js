import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class Navigation extends Component {

    renderNavItems() {
        return(
            <Container>
                <Row>
                    <Col>
                        <button
                            className='btn'>
                            <h3>Work</h3>
                        </button>
                    </Col>
                    <Col>
                        <button
                            className='btn'>
                                <h3>About</h3>
                        </button>
                    </Col>
                    <Col>
                        <button
                            className='btn'>
                            <h3>Contact</h3>
                        </button>
                    </Col>
                    <Col>
                        <button
                            className='btn'>
                            <h3>Resume</h3>
                        </button>
                    </Col>
                </Row>
            </Container>
        );
    }

    render() {

        return (
            <>
                <Container>
                    <div className="center">
                        <button
                            className="btn"
                            onClick={this.renderNavItems}>
                            <h1 className='name'>David Tuazon</h1>
                        </button>
                    </div>
                </Container>
            </>
        )
    }
}

export default Navigation;