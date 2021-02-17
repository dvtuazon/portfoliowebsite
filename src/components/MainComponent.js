import React, { Component } from 'react';
import Header from './HeaderComponent';
import Navigation from './NavigationComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

class Main extends Component {
    render() {
        return (
            <>
                <Header />
                <Navigation />
            </>
        )
    }
}

export default Main;