import React from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent.js';
import Projects from './ProjectsComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import Footer from './FooterComponent';
import { Routes, Route } from 'react-router-dom';

function Main() {

    return (
        <>
            <Header />
            <Routes>
                <Route path='/portfoliowebsite' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='*' element={<Home />} />
            </Routes>
            <Footer />
        </>
    )
}

export default Main;