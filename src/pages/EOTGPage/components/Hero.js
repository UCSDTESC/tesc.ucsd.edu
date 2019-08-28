import React, {Component} from 'react';
import $ from 'jquery';
import Nav from './Nav';
import {NavLink, withRouter} from 'react-router-dom';

import {ReactComponent as HeroPic} from '../svg/eotg.svg';

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
            <section className="w-100 h-100 d-flex justify-content-center eotg-hero">
                {/*<div>
            <nav className="navbar navbar-expand-lg navbar-light nav__items sticky-top eotg-nav">
                {/*<NavLink to="/decaf"><img className="nav__logo w-50" href="#" src="/decaf-icon.svg" /></NavLink>
                <button className="navbar-toggler nav__toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item nav__item text-center">
                            <NavLink className="nav-link text-white" to="/">HOME</NavLink>
                        </li>
                        <li className="nav-item nav__item text-center">
                            <NavLink className="nav-link text-white" to="/decaf#about">ABOUT</NavLink>
                        </li>
                        <li className="nav-item nav__item text-center">
                            <NavLink className="nav-link text-white" to="/decaf#attending">ATTENDING</NavLink>
                        </li>
                        <li className="nav-item text-center">
                            <NavLink className="nav-link text-white" to="/decaf#flo">FLO</NavLink>
                        </li>
                        <li className="nav-item text-center">
                            <NavLink className="nav-link text-white" to="/decaf#faq">FAQ</NavLink>
                        </li>
                        <li className="nav-item nav__item text-center">
                            <NavLink className="nav-link text-white" to="/decaf#contact">CONTACT</NavLink>
                        </li>
                        <li className="nav-item text-center">
                            <NavLink className="nav-link btn nav__toggle decaf-toggle" to="/decaf/companies">FOR COMPANIES</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            </div> */}


                <div className="container-fluid text-center eotg-contents">
                    <Nav />
                    <div className="row h-100">
                        
                        <div className="col-md-6">
                            <HeroPic className="eotg-hero__graphic" />
                            {/*<img src="../svg/logo.svg" />*/}
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
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Hero;