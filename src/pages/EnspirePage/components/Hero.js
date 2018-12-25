import React, {Component} from 'react';

import Nav from './Nav';

class Hero extends Component {

    render() {

        //write your css in src/scss/apps/enspire/components/_hero.scss
        return (
            <section className="w-100 h-100 enspire-hero">
                <Nav />
                This is the Enspire Hero
            </section>
        )
    }
}

export default Hero;