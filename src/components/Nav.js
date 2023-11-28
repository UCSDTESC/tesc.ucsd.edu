import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav(props) {
    const everyoneLinks = () => (
        <ul className="navbar-nav ml-auto">
            <li className="nav-item nav__item text-center">
                <NavLink className="nav-link" to="/about">
                    ABOUT
                </NavLink>
            </li>
            <li className="nav-item nav__item text-center">
                <NavLink className="nav-link" to="/members">
                    MEMBERS
                </NavLink>
            </li>
            <li className="nav-item nav__item text-center">
                <NavLink className="nav-link" to="/#events">
                    EVENTS
                </NavLink>
            </li>
            <li className="nav-item nav__item text-center">
                <NavLink className="nav-link" to="/#join">
                    JOIN
                </NavLink>
            </li>
            <li className="nav-item nav__item text-center">
                <NavLink className="nav-link" to="/#contact">
                    CONTACT
                </NavLink>
            </li>
            <li className="nav-item nav__item text-center">
                <NavLink className="nav-link" to="/signup">
                    NEWSLETTER
                </NavLink>
            </li>
            <li className="nav-item text-center">
                <NavLink className="nav-link btn nav__toggle-active" to="/orgs">
                    FOR TESC ORGS
                </NavLink>
            </li>
        </ul>
    );

    const orgLinks = () => (
        <ul className="navbar-nav ml-auto">
            <li className="nav-item nav__item text-center">
                <NavLink className="nav-link" to="/orgs/membership">
                    MEMBERSHIP
                </NavLink>
            </li>
            <li className="nav-item nav__item text-center">
                <NavLink className="nav-link" to="/orgs/faqs">
                    COUNCIL FAQS
                </NavLink>
            </li>
            <li className="nav-item nav__item text-center">
                <NavLink className="nav-link" to="/orgs/finance">
                    FINANCE
                </NavLink>
            </li>
            {/*<li className="nav-item nav__item text-center">
                <NavLink className="nav-link" to="/orgs/spaces">
                    PROJECT SPACES
                </NavLink>
    </li>*/}
            {/*<li class="nav-item nav__item text-center">
                    <a class="nav-link" href="">BRANDING</a>
                    </li>*/}
            <li className="nav-item nav__item text-center">
                <NavLink className="nav-link" to="#contact">
                    CONTACT
                </NavLink>
            </li>
            <li className="nav-item text-center">
                <NavLink className="nav-link btn nav__toggle-active" to="/">
                    FOR EVERYONE
                </NavLink>
            </li>
        </ul>
    );

    const { isOrgs } = props;

    return (
        <header>
            <div className="pt-3" id="top-nav">
                <nav className="navbar navbar-expand-lg navbar-light nav__items">
                    <NavLink to="/">
                        <img
                            className="nav__logo"
                            href="#"
                            src="/tesc-logo.png"
                            alt=""
                        />
                    </NavLink>
                    <button
                        className="navbar-toggler nav__toggler collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        {isOrgs ? orgLinks() : everyoneLinks()}
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Nav;
