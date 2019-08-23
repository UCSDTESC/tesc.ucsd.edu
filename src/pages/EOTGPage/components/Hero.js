import React, {Component} from 'react';
import {ReactComponent as EOTGHero} from '../svg/eotg-hero.svg';
import $ from 'jquery';

class Hero extends React.Component {

    // change #about later - i liked 800 ms over 450
    scrollAnimation() {
        // window.scrollTo(0,0)
        $('html, body').animate({
            scrollTop: $('#about').offset().top
        }, 800);
    }

    render() {
        return (
            <section className="w-100 h-100 d-flex align-items-center justify-content-center eotg-hero">
                <div className="container-fluid text-center eotg-contents">
                    <div className="row h-100">
                        <div className="col-md-6 d-flex align-items-center eotg-hero__left">
                            <div className="w-100">
                                <div className="eotg-hero__title pb-2">
                                <b> Engineers on the Green </b>
                                </div>
                                <div className="eotg-hero__detail">
                                    Warren Mall, UC San Diego
                                </div>
                                <div className="eotg-hero__detail">
                                    January 17, 2019 // 10AM - 3PM
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <EOTGHero className="eotg-hero__graphic" />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Hero;