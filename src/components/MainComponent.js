import React, { useState } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent.js';
import Projects from './ProjectsComponent';
import About from './AboutComponent';
import Resume from './ResumeComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

function Main() {

    return (
        <>
            <Header />
            <TransitionGroup>
                <CSSTransition /*key={this.props.location.key}*/ classNames="page" timeout={300}>
                    <Switch>
                        <Route path='/home' render={() => <Home />} />
                        <Route path='/projects' render={() => <Projects />}/*component={HomePage}*/ />
                        <Route exact path='/about' render={() => <About />} />
                        <Route exact path='/resume' render={() => <Resume />} />
                        <Redirect to='/home' />
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
            <Footer />
        </>
    )
}

export default Main;