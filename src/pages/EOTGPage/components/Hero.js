import React, {Component} from 'react';
import $ from 'jquery';
import {NavLink, withRouter} from 'react-router-dom';

import {ReactComponent as HeroPic} from '../svg/eotg.svg';

class Hero extends React.Component {

    scrollAnimation() {
        $('html, body').animate({
            scrollTop: $('#about').offset().top
        }, 800);
    }

    render() {
        return (
            <section className="w-100 h-100 d-flex justify-content-center eotg-hero">
                <div className="container-fluid text-center eotg-contents">
                    <div className="row h-100">
                        <div className="col-md-6">
                            <HeroPic className="eotg-hero__graphic" />
                        </div>
                        <div className="col-md-4 d-flex align-items-center eotg-hero__left">
                            <div>
                                <div className="eotg-hero__title pb-2">
                                <b> Engineers on the Green </b>
                                </div>
                                <div className="eotg-hero__detail">
                                    Warren Mall, UC San Diego
                                </div>
                                <div className="eotg-hero__detail">
                                    September 30, 2019 // 2PM - 6PM
                                </div>
                                <div className="eotg-hero__button_div">
                                    <a className="eotg-hero__button" href="https://www.facebook.com/events/341443063439848/" target="_blank">Facebook Event Page</a>
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