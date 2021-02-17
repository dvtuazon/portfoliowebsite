import React, { Component } from 'react';
import Main from './components/MainComponent';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: 'David Tuazon',
            headerLinks: [
                { title: 'Home', path: '/'},
                { title: 'About', path: '/about'},
                { title: 'Contact', path: '/contact'}
            ],
            home: {
                title: 'Lifelong Learning'
            }
        }
    }
    render() {
        return (
            <Router>
                <Main />
            </Router>
        );
    };
}

export default App;