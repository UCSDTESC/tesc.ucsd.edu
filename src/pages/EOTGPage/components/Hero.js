import React, {Component} from 'react';
import $ from 'jquery';
import {NavLink, withRouter} from 'react-router-dom';

import {ReactComponent as HeroPic} from '../svg/eotg-wi20.svg';

class Hero extends React.Component {

    scrollAnimation() {
        $('html, body').animate({
            scrollTop: $('#about').offset().top
        }, 800);
    }

    render() {
        return (
            <section className="w-100 h-100 d-flex justify-content-center eotg-hero">
                <div className="container-fluid text-center eotg-hero__container">
                    <div className="row h-100 justify-content-center">
                        <div className="col-md-6">
                            <HeroPic className="eotg-hero__graphic" />
                        </div>
                        <div className="col-md-6 d-flex align-items-center eotg-hero__right">
                            <div>
                                <div className="eotg-hero__title pb-2">
                                <b> Engineers on the Green </b>
                                </div>
                                <div className="eotg-hero__detail">
                                    October 5th - 9th // Time (TBD)
                                </div>
                                <div className="eotg-hero__button_div mb-5">
                                    <a className="eotg-hero__button" href="https://www.facebook.com/events/638144703462548/" target="_blank" rel="noopener noreferrer">
                                        Facebook Event Page
                                    </a>
                                </div>
                                <div className="eotg-hero__button_div">
                                    <a className="eotg-hero__button" href="https://discord.gg/WBaecP2" target="_blank" rel="noopener noreferrer">
                                        Discord
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Hero;