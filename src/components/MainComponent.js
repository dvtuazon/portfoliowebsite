import React, { useState } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent.js';
import Projects from './ProjectsComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

function Main() {

    return (
        <>
            <div className="container-scroll">
                <Header />
                <Home />
                <About />
                <Projects />
                <Contact />
                <Footer />
            </div>
        </>
    )
}

export default Main;