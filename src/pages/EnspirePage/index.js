import React, { useEffect } from 'react';
import $ from 'jquery';

import Hero from './components/Hero';
import About from './components/About';
import Register from './components/Register';
import Faq from './components/Faq';
import Timeline from './components/Timeline';

const EnspirePage = () => {
    useEffect(() => {
        document.title = 'Enspire 2021 | UCSD TESC';
        $("link[rel='shortcut icon']").attr('href', '/enspire-favicon.svg');

        return () => {
            document.title = 'UCSD TESC';
            $("link[rel='shortcut icon']").attr('href', '/favicon.png');
        };
    });

    return (
        <>
            <Hero />
            <About />
            <Register />
            <Faq />
            <Timeline />
        </>
    );
};

export default EnspirePage;
