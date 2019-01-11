import React from 'react';
import {NavLink, withRouter} from 'react-router-dom';

class Nav extends React.Component {

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
                    <NavLink className="nav-link btn nav__toggle" to="/orgs">FOR TESC ORGS</NavLink>
                </li>
            </ul>
        );
    }

    orgLinks() {
        return (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item nav__item text-center">
                    <NavLink className="nav-link" to="/orgs/membership">MEMBERSHIP</NavLink>
                </li>
                <li className="nav-item nav__item text-center">
                    <NavLink className="nav-link" to="/orgs/finance">FINANCE</NavLink>
                </li>
                <li className="nav-item nav__item text-center">
                    <NavLink className="nav-link" to="/orgs/spaces">PROJECT SPACES</NavLink>
                </li>
                {/*<li class="nav-item nav__item text-center">
                        <a class="nav-link" href="">BRANDING</a>
                        </li>*/}
                <li className="nav-item nav__item text-center">
                    <NavLink className="nav-link" to="#contact">CONTACT</NavLink>
                </li>
                <li className="nav-item text-center">
                    <NavLink className="nav-link btn nav__toggle-active" to="/">FOR EVERYONE</NavLink>
                </li>
            </ul>
        )
    }


    render() {

        const {isOrgs} = this.props;

        return (
            <header>
                <div className="pt-3" id="top-nav">
                    <nav className="navbar navbar-expand-lg navbar-light nav__items">
                        <NavLink to="/"><img className="nav__logo" href="#" src="/tesc-logo.png" /></NavLink>
                        <button className="navbar-toggler nav__toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            {isOrgs ? this.orgLinks() : this.everyoneLinks()} 
                        </div>
                    </nav>
                </div>
            </header>
        );
    }
}   

export default withRouter(Nav);