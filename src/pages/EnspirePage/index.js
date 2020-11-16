import React, { useEffect } from 'react';
import $ from 'jquery';

import Hero from './components/Hero';
import About from './components/About';
import Register from './components/Register';
import Faq from './components/Faq';

const EnspirePage = () => {
    useEffect(() => {
        document.title = 'Enspire 2021 | UCSD TESC';
        $("link[rel='shortcut icon']").attr(
            'href',
            'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>⚙️</text></svg>'
        );

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
        </>
    );
};

export default EnspirePage;
