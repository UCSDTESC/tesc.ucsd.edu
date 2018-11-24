import React from 'react';
import {NavLink} from 'react-router-dom';

class DecafNav extends React.Component {

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
                    <NavLink className="nav-link text-white" to="/decaf">ABOUT</NavLink>
                </li>
                <li className="nav-item nav__item text-center">
                    <NavLink className="nav-link text-white" to="/decaf">REGISTER</NavLink>
                </li>
                {/*<li class="nav-item nav__item text-center">
                        <a class="nav-link" href="">BRANDING</a>
                        </li>*/}
                <li className="nav-item nav__item text-center">
                    <NavLink className="nav-link text-white" to="/decaf">CONTACT</NavLink>
                </li>
                <li className="nav-item text-center">
                    <NavLink className="nav-link text-white" to="/decaf">FAQ</NavLink>
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
                        <NavLink to="/"><img className="nav__logo w-50" href="#" src="/decaf-icon.svg" /></NavLink>
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

export default DecafNav;