import React, {Component} from 'react';
import {NavLink, withRouter} from 'react-router-dom';

class Nav extends Component {

    render() {
        return (
            <header>
                <div className="navbar-sections">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <ul className="navbar-nav mr-auto">
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
                </div>
            </header>
        )
    }
}

export default withRouter(Nav);