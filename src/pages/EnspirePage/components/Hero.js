import React, {Component} from 'react';

import Nav from './Nav';

class Hero extends Component {

    render() {

        //write your css in src/scss/apps/enspire/components/_hero.scss
        // temporarily removed <Nav /> because it was messing up with the layout
        return (
            <section className="w-100 h-100 d-flex align-items-center justify-content-center enspire-hero">
                <div className="container-fluid text-center enspire-contents">
                    <img src="/Enspire-logo-text-blue.svg" />
                    <p>
                        <br />
                        UC San Diego &#9679; January 28, 2019
                        <br />
                        Explore UCSD for a day of fun and engaging engineering activities.
                    </p>
                    <button type="button" class="btn btn-outline-primary btn-custom-large btn-space-right">Register now</button>
                    <button type="button" class="btn btn-outline-primary btn-custom-large btn-space-left">Volunteer sign-up</button>
                </div>
            </section>
        )
    }
}

export default Hero;