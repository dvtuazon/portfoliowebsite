import React, { Component } from 'react';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: 'David Tuazon',
            headerLinks: [
                { title: 'Home', path: '/'},
                { title: 'About', path: '/about'},
                { title: 'Projects', path: '/projects'},
                { title: 'Contact', path: '/contact'}
            ],
            home: {
                title: 'David Tuazon'
            }
        }
    }
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Main />
                </div>
            </BrowserRouter>
        );
    };
}

export default App;