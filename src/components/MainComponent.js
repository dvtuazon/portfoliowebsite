import React, { useState } from 'react';
import Header from './HeaderComponent';
import Projects from './ProjectsComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import Resume from './ResumeComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

function Main() {

    return (
        <>
            <Header />
            <TransitionGroup>
                <CSSTransition /*key={this.props.location.key}*/ classNames="page" timeout={300}>
                    <Switch>
                        <Route path='/projects' render={() => <Projects />}/*component={HomePage}*/ />
                        <Route exact path='/about' render={() => <About />} />
                        <Route exact path='/contact' render={() => <Contact />}/*render={() => <Contact postFeedback={this.props.postFeedback} resetFeedbackForm={this.props.resetFeedbackForm} />}*/ />
                        <Route exact path='/resume' render={() => <Resume />} />
                        <Redirect to='/projects' />
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        </>
    )
}

export default Main;