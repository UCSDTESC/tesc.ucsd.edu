import React, {Component} from 'react';
import {NavLink, withRouter} from 'react-router-dom';

class Nav extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg w-75 enspire-nav sticky-top">
                <div className="navbar-brand"><img src="/Enspire-logo-text-blue.svg" className="enspire-nav__logo"/></div>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item text-center">
                        <NavLink className="nav-link text-blue" to="/enspire">Home</NavLink>
                    </li>
                    <li className="nav-item text-center">
                        <NavLink className="nav-link text-blue" to="/enspire#about">About</NavLink>
                    </li>
                    <li className="nav-item text-center">
                        <NavLink className="nav-link text-blue" to="/enspire">Register</NavLink>
                    </li>
                    <li className="nav-item text-center">
                        <NavLink className="nav-link text-blue" to="/enspire#schedule">Schedule</NavLink>
                    </li>
                    <li className="nav-item text-center">
                        <NavLink className="nav-link text-blue" to="/enspire#contact">Contact</NavLink>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default withRouter(Nav);