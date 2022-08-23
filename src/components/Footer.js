import React from 'react';

function Footer() {
    return (
        <div id="footer">
            <footer className="footer" id="footer">
            <section className="contact" id="contact">
                <div className="container-fluid d-flex align-items-center h-100">
                    <h1 className="contact__footer">
                        Talk to us at{' '}
                        <a
                            className="contact__link"
                            href="mailto:hello@tesc.ucsd.edu"
                        >
                            hello@tesc.ucsd.edu
                        </a>{' '}
                        if you have any questions.
                    </h1>
                </div>
            </section>
                <div className="container-fluid">
                    <ul className="footer__links flex-column ml-md-auto d-flex flex-md-row justify-content-between text-center align-items-center text-md-left">
                        <li className="footer__link-item">
                            <a
                                className="footer__link"
                                target="_new"
                                href="https://www.facebook.com/ucsd.tesc/"
                            >
                                <i className="fab fa-facebook-square"></i>
                            </a>
                        </li>
                        <li className="footer__link-item">
                            <a
                                className="footer__link"
                                target="_new"
                                href="https://twitter.com/ucsdtesc"
                            >
                                <i className="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li className="footer__link-item footer__link-item--logo">
                            <a
                                className="footer__link"
                                href="http://tesc.ucsd.edu"
                                target="_new"
                            >
                                <img src="/tesc-logo.png" alt="TESC logo" />
                            </a>
                        </li>
                        <li className="footer__link-item">
                            <a
                                className="footer__link"
                                target="_new"
                                href="https://instagram.com/ucsdtesc/"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                        </li>
                        <li className="footer__link-item">
                            <a
                                className="footer__link"
                                target="_new"
                                href="mailto:hello@tesc.ucsd.edu"
                            >
                                <i className="fas fa-envelope-square"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
