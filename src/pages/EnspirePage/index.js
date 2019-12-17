import React, {Component} from 'react';

import Hero from './components/Hero';
import About from './components/About';
import Pictures from './components/Pictures';
import Register from './components/Register';
import Faq from './components/Faq';
import Schedule from './components/Schedule';
import Footer from './components/Footer';
import Nav from './components/Nav';
import $ from 'jquery';

class EnspirePage extends Component {

    componentDidMount() {
        document.title = "Enspire 2020 | UCSD TESC";
    }

    componentWillUnmount() {
        document.title = 'UCSD TESC | 2019'
    }

    render() {
        return (
            <>
                {/*<Nav />*/}
                <Hero />
                <About />
                <Register />
                <Schedule />
                <Faq />
                <Pictures />
                {/*<Footer />*/}
            </>
        )
    }
}

export default EnspirePage;