import React, { Component } from 'react';
import Header from './HeaderComponent';
import Work from './WorkComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import Resume from './ResumeComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class Main extends Component {
    render() {
        return (
            <>
                <Header />
                <TransitionGroup>
                    <CSSTransition /*key={this.props.location.key}*/ classNames="page" timeout={300}>
                        <Switch>
                            <Route path='/work' render={() => <Work />}/*component={HomePage}*/ />
                            <Route exact path='/about' render={() => <About />} />
                            <Route exact path='/contact' render={() => <Contact />}/*render={() => <Contact postFeedback={this.props.postFeedback} resetFeedbackForm={this.props.resetFeedbackForm} />}*/ />
                            <Route exact path='/resume' render={() => <Resume />} />
                            <Redirect to='/work' />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            </>
        )
    }
}

export default Main;