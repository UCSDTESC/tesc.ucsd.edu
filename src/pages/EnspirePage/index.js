import React, {Component} from 'react';

import Hero from './components/Hero';
import About from './components/About';
import Pictures from './components/Pictures';

class EnspirePage extends Component {

    render() {
        return (
            <>
                <Hero />
                <About />
                <Pictures />
            </>
        )
    }
}

export default EnspirePage;