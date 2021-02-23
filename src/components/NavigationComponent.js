import React, { Component } from 'react';
import { Container } from 'reactstrap';

class Navigation extends Component {

    render() {
        return (
            <>
                <Container>
                    <div className="center">
                        <button
                            className="btn"
                            onMouseEnter={() => {
                                document.body.querySelector('#name').style.transform = "scale(1.25,1.25)"
                            }}
                            onMouseLeave={() => {
                                document.body.querySelector('#name').style.transform = "scale(1,1)"
                            }}>
                            <h1 id='name'>David Tuazon</h1>
                        </button>
                    </div>
                </Container>
            </>
        )
    }
}

export default Navigation;