import React, {Component} from 'react';
import $ from 'jquery';
// import Nav from './Nav';

class Hero extends Component {

    // change #about later - i liked 800 ms over 450
    scrollAnimation() {
        // window.scrollTo(0,0)
        $('html, body').animate({
            scrollTop: $('#about').offset().top
        }, 800);
    }

    render() {
        return (
            <section className="w-100 h-100 d-flex align-items-center justify-content-center enspire-hero">
                <div className="container-fluid text-center enspire-contents">
                    <img className="enspire-hero__logo" src="/Enspire-logo-text-blue.svg" />
                    <p>
                        <br />
                        UC San Diego &#9679; January 27, 2020
                        <br />
                        Explore UCSD for a day of fun and engaging engineering activities.
                        <br />
                        Registration deadline is December 14.
                    </p>
                    <a href="https://forms.gle/pmTdHGC7gmA6MdE2A" target="_blank"><button type="button" className="btn btn-outline-primary btn-custom-large btn-space-right" >Register Now</button></a>
                    {/*<button type="button" className="btn btn-outline-primary btn-custom-large btn-space-left">Volunteer sign-up</button>*/}
                    {/*<br /><br />
                    <button type="button" className="btn btn-custom-chevron" onClick={this.scrollAnimation}><i className="fas fa-chevron-down fa-5x"></i></button>*/}
                </div>
            </section>
        )
    }
}

export default Hero;