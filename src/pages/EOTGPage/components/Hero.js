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
                <div className="container-fluid text-center eotg-hero__container">
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
                                    January 13, 2020 // 1PM - 5PM
                                </div>
                                <div className="eotg-hero__button_div">
                                    <a className="eotg-hero__button" href="https://www.facebook.com/events/988688638175276/?notif_t=event_friend_going&notif_id=1576989295206656" target="_blank">Facebook Event Page</a>
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