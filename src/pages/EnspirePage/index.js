import React, {Component} from 'react';

import Hero from './components/Hero';
import About from './components/About';
import Pictures from './components/Pictures';
import Register from './components/Register';
import Nav from './components/Nav';

class EnspirePage extends Component {

    render() {
        return (
            <>
                <Hero />
                {/*<Nav />*/}
                <About />
                <Register />
                <Pictures />
            </>
        )
    }
}

export default EnspirePage;