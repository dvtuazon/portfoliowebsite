import React from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent.js';
import Projects from './ProjectsComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import Footer from './FooterComponent';

function Main() {

    return (
        <>
            <Header />
            <Home />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </>
    )
}

export default Main;