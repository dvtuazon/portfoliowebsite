import React, { Component } from 'react';
import Header from './HeaderComponent';
import Navigation from './NavigationComponent';
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
                            <Route path='/work' /*component={HomePage}*/ />
                            <Route exact path='/about' /*render={() => <Directory campsites={this.props.campsites} />}*/ />
                            <Route exact path='/contact' /*render={() => <Contact postFeedback={this.props.postFeedback} resetFeedbackForm={this.props.resetFeedbackForm} />}*/ />
                            <Route exact path='/resume' /*render={() => <About partners={this.props.partners} /> }*/ />
                            <Redirect to='/work' />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            </>
        )
    }
}

export default Main;