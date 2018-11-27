import React from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import $ from 'jquery';

class DecafNav extends React.Component {


    componentDidMount() {
        const {hash} = this.props.location;

        if (hash) {
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 450);
        }
    }

    everyoneLinks() {
        return (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item nav__item text-center">
                    <NavLink className="nav-link" to="/about">ABOUT</NavLink>
                </li>
                <li className="nav-item nav__item text-center">
                    <NavLink className="nav-link" to="/#events">EVENTS</NavLink>
                </li>
                <li className="nav-item nav__item text-center">
                    <NavLink className="nav-link" to="/#join">JOIN</NavLink>
                </li>
                <li className="nav-item nav__item text-center">
                    <NavLink className="nav-link" to="/#contact">CONTACT</NavLink>
                </li>
                <li className="nav-item text-center">
                    <NavLink className="nav-link btn nav__toggle" to="/orgs">For TESC Orgs</NavLink>
                </li>
            </ul>
        );
    }

    companyLinks() {
        return (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item nav__item text-center">
                    <NavLink className="nav-link text-white" to="/decaf">HOME</NavLink>
                </li>
                <li className="nav-item nav__item text-center">
                    <NavLink className="nav-link text-white" to="/decaf#about">ABOUT</NavLink>
                </li>
                <li className="nav-item nav__item text-center">
                    <a className="nav-link text-white" href="http://tinyurl.com/decaf2019" target="_blank">REGISTER</a>
                </li>
                <li className="nav-item text-center">
                    <NavLink className="nav-link text-white" to="/decaf#faq">FAQ</NavLink>
                </li>
                <li className="nav-item nav__item text-center">
                    <NavLink className="nav-link text-white" to="/decaf#contact">CONTACT</NavLink>
                </li>
            </ul>
        )
    }


    render() {

        const {isCompany} = this.props;

        return (
            <header>
                <div className="pt-3" id="top-nav">
                    <nav className="navbar navbar-expand-lg navbar-light nav__items">
                        <NavLink to="/decaf"><img className="nav__logo w-50" href="#" src="/decaf-icon.svg" /></NavLink>
                        <button className="navbar-toggler nav__toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            {isCompany ? this.companyLinks() : this.everyoneLinks()} 
                        </div>
                    </nav>
                </div>
            </header>
        );
    }
}   

export default withRouter(DecafNav);