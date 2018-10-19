import React from 'react';
import {NavLink} from 'react-router-dom';

class Nav extends React.Component {

    everyoneLinks() {
        return (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item nav__item text-center" style={{margin: '0 0.5rem'}}>
                <a className="nav-link" href="/">HOME</a>
                </li>
                <li className="nav-item nav__item text-center">
                <a className="nav-link" href="/about">ABOUT</a>
                </li>
                <li className="nav-item nav__item text-center">
                <a className="nav-link" href="/#events">EVENTS</a>
                </li>
                <li className="nav-item nav__item text-center">
                <a className="nav-link" href="/#join">JOIN</a>
                </li>
                <li className="nav-item nav__item text-center">
                <a className="nav-link" href="/#contact">CONTACT</a>
                </li>
                <li className="nav-item text-center">
                <NavLink className="nav-link btn nav__toggle" to="/orgs">For TESC Orgs</NavLink>
                </li>
            </ul>
        );
    }

    orgLinks() {
        return (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item nav__item text-center" style={{margin: '0 0.5rem'}}>
                <a className="nav-link" href="/">HOME</a>
                </li>
                <li className="nav-item nav__item text-center">
                <NavLink className="nav-link" to="/orgs/membership">MEMBERSHIP</NavLink>
                </li>
                <li className="nav-item nav__item text-center">
                <a className="nav-link" href="/orgs/finance.html">FINANCE</a>
                </li>
                <li className="nav-item nav__item text-center">
                <a className="nav-link" href="/orgs/spaces.html">PROJECT SPACES</a>
                </li>
                {/*<li class="nav-item nav__item text-center">
                        <a class="nav-link" href="">BRANDING</a>
                        </li>*/}
                <li className="nav-item nav__item text-center">
                <a className="nav-link" href="/#contact">CONTACT</a>
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
                <div className="nav" id="top-nav">
                    <nav className="navbar navbar-expand-lg navbar-light nav__items">
                        <img className="ml-auto mr-auto nav__logo" href="#" src="/tesc-logo.png" />
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

export default Nav;