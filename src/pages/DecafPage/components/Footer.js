import React from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import $ from 'jquery';

class Footer extends React.Component {

    componentDidMount() {
        const {hash} = this.props.location;

        if (hash) {
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 450);
        }
    }

    render() {

        const isCompany = this.props.match.path === "/decaf/companies"
        const bg = isCompany ? "decaf-green-gradient" : "decaf-gradient-bg"
        return (
            <div id="footer">
                <section className={`contact ${bg}`} id="contact">
                <div className="container-fluid d-flex align-items-center h-100">
                    <h1 className="contact__header m-auto">
                    Talk to us at <a className="contact__link" href="mailto:hello@tesc.ucsd.edu">sergio@tesc.ucsd.edu</a> if you have any questions.
                    </h1>
                </div>
                </section>
                <footer className="footer px-5" id="footer">
                <div className="container-fluid">
                    <ul className="footer__links flex-column ml-md-auto d-flex flex-md-row justify-content-between text-center text-md-left">
                    <li className="footer__link-item">
                        <NavLink className="footer__link" to="/decaf">Home</NavLink>
                    </li>
                    <li className="footer__link-item">
                        <NavLink className="footer__link" to="/decaf#about">About</NavLink>
                    </li>
                    <li className="footer__link-item footer__link-item--logo">
                        Made with ❤️ by <a className="footer__link" href="http://tesc.ucsd.edu" target="_new">
                            <img src="/tesc-logo.png" />
                            <div className="footer__sm">
                            We empower UC San Diego engineering students by connecting them with impactful communities, projects, and career building opportunities.
                            </div>
                        </a>
                    </li>
                    <li className="footer__link-item">
                        {this.props.isCompany ?
                            <a className="footer__link" href="http://tinyurl.com/decaf2019" target="_blank">Register</a> :
                            <a className="footer__link" href="https://goo.gl/forms/EC6CpTcFhfhNEFwD2" target="_blank">Volunteer</a>
                        }
                    </li>
                    <li className="footer__link-item">
                        <NavLink className="footer__link" to="/decaf#faq">FAQ</NavLink>
                    </li>
                    </ul>
                </div>
                </footer>
            </div>
        );
    }
}

export default withRouter(Footer);