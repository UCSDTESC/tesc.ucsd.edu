import React from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import $ from 'jquery';

class DecafNav extends React.Component {

    everyoneLinks() {
        return (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item nav__item text-center">
                    <NavLink className="nav-link text-white" to="/decaf">HOME</NavLink>
                </li>
                <li className="nav-item nav__item text-center">
                    <NavLink className="nav-link text-white" to="/decaf#about">ABOUT</NavLink>
                </li>
                <li className="nav-item text-center">
                    <NavLink className="nav-link text-white" to="/decaf#flo">FLO</NavLink>
                </li>
                <li className="nav-item nav__item text-center">
                    <NavLink className="nav-link text-white" to="/decaf/attending">ATTENDING</NavLink>
                </li>
                <li className="nav-item text-center">
                    <NavLink className="nav-link text-white" to="/decaf#faq">FAQ</NavLink>
                </li>
                <li className="nav-item nav__item text-center">
                    <NavLink className="nav-link text-white" to="/decaf#contact">CONTACT</NavLink>
                </li>
                <li className="nav-item text-center">
                    <NavLink className="nav-link btn nav__toggle decaf-toggle" to="/decaf/companies">SWITCH TO COMPANY VIEW</NavLink>
                </li>
            </ul>
        );
    }

    companyLinks() {
        return (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item nav__item text-center">
                    <NavLink className="nav-link text-white" to="/decaf/companies">HOME</NavLink>
                </li>
                <li className="nav-item nav__item text-center">
                    <NavLink className="nav-link text-white" to="/decaf/companies#about">ABOUT</NavLink>
                </li>
                <li className="nav-item nav__item text-center">
                    <a className="nav-link text-white" href="https://events.eventzilla.net/e/decaf-2020-2138755381" target="_blank">REGISTER</a>
                </li>
                <li className="nav-item text-center">
                    <NavLink className="nav-link text-white" to="/decaf/companies#faq">FAQ</NavLink>
                </li>
                <li className="nav-item nav__item text-center">
                    <NavLink className="nav-link text-white" to="/decaf/companies#contact">CONTACT</NavLink>
                </li>
                <li className="nav-item text-center">
                    <NavLink className="nav-link btn nav__toggle decaf-toggle decaf-green-text" to="/decaf">SWITCH TO STUDENT VIEW</NavLink>
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