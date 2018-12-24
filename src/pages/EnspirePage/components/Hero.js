import React, {Component} from 'react';

import Nav from './Nav';

class Hero extends Component {

    render() {
        return (
            <section className="w-100 h-100 enspire-hero">
                <Nav />
                This is the Enspire Hero
            </section>
        )
    }
}

export default Hero;