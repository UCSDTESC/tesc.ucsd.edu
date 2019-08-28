import React, {Component} from 'react';
import {NavLink, withRouter} from 'react-router-dom';

class Nav extends Component {

    render() {
        /*return (
            <nav className="navbar navbar-expand-lg w-75 eotg-nav sticky-top">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link text-white" to="/eotg">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link text-white" to="/eotg#about">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link text-white" to="/eotg#orgs">Schedule</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link text-white" to="/eotg#contact">Contact</NavLink>
                    </li>
                </ul>
            </nav>
        )*/

        return (
            <header>
                <div className="pt-3" id="top-nav">
            <nav className="navbar navbar-expand-lg navbar-light nav__items sticky-top eotg-nav">
                {/*<NavLink to="/decaf"><img className="nav__logo w-50" href="#" src="/decaf-icon.svg" /></NavLink>*/}
                <button className="navbar-toggler nav__toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item nav__item text-center">
                            <NavLink className="nav-link text-white" to="/">HOME</NavLink>
                        </li>
                        <li className="nav-item nav__item text-center">
                            <NavLink className="nav-link text-white" to="/eotg#about">ABOUT</NavLink>
                        </li>
                        <li className="nav-item nav__item text-center">
                            <NavLink className="nav-link text-white" to="/eotg#orgs">ATTENDING</NavLink>
                        </li>
                        <li className="nav-item nav__item text-center">
                            <NavLink className="nav-link text-white" to="/eotg#contact">CONTACT</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            </div>
            </header>
        )
    }
}

export default withRouter(Nav);