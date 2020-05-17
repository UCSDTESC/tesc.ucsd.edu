import React from 'react';
import AboutBlurb from './components/AboutBlurb';
import Board from './components/Board';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

function AboutPage() {

    return (
        <>
            <Nav />
            <AboutBlurb />
            <Board />
            <Footer />
        </>
    );
}

export default AboutPage;