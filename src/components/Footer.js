import React from 'react';

class Footer extends React.Component {

    render() {
        return (
            <div id="footer">
                <section className="contact" id="contact">
                <div className="container-fluid d-flex align-items-center h-100">
                    <h1 className="contact__header m-auto">
                    Talk to us at <a className="contact__link" href="mailto:hello@tesc.ucsd.edu">hello@tesc.ucsd.edu</a> if you have any questions.
                    </h1>
                </div>
                </section>
                <footer className="footer" id="footer">
                <div className="container-fluid">
                    <ul className="footer__links flex-column ml-md-auto d-flex flex-md-row justify-content-between text-center text-md-left">
                    <li className="footer__link-item">
                        <a className="footer__link" target="_new" href="https://www.facebook.com/ucsd.tesc/">
                        <i className="fab fa-facebook-square" />
                        </a>
                    </li>
                    <li className="footer__link-item">
                        <a className="footer__link" target="_new" href="https://twitter.com/ucsdtesc">
                        <i className="fab fa-twitter-square" />
                        </a>
                    </li>
                    <li className="footer__link-item footer__link-item--logo">
                        <a className="footer__link" href="http://tesc.ucsd.edu" target="_new">
                        <img src="/tesc-logo.png" />
                        </a>
                    </li>
                    <li className="footer__link-item">
                        <a className="footer__link" target="_new" href="https://medium.com/triton-engineering-student-council">
                        <i className="fab fa-medium" />
                        </a>
                    </li>
                    <li className="footer__link-item">
                        <a className="footer__link" target="_new" href="mailto://hello@tesc.ucsd.edu">
                        <i className="fas fa-envelope-square" />
                        </a>
                    </li>
                    </ul>
                </div>
                </footer>
            </div>
        );
    }
}

export default Footer;