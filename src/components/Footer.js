import React from 'react';

function Footer() {
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
                <div class="container-fluid">
                    <ul class="footer__links flex-column ml-md-auto d-flex flex-md-row justify-content-between text-center align-items-center text-md-left">
                    <li class="footer__link-item">
                        <a class="footer__link" target="_new" href="https://www.facebook.com/ucsd.tesc/">
                        <i class="fab fa-facebook-square"></i>
                        </a>
                    </li>
                    <li class="footer__link-item">
                        <a class="footer__link" target="_new" href="https://twitter.com/ucsdtesc">
                        <i class="fab fa-twitter"></i>
                        </a>
                    </li>
                    <li class="footer__link-item footer__link-item--logo">
                        <a class="footer__link" href="http://tesc.ucsd.edu" target="_new">
                        <img src="/tesc-logo.png" />
                        </a>
                    </li>
                    <li class="footer__link-item">
                        <a class="footer__link" target="_new" href="https://instagram.com/ucsdtesc/">
                        <i class="fab fa-instagram"></i>
                        </a>
                    </li>
                    <li class="footer__link-item">
                        <a class="footer__link" target="_new" href="mailto:hello@tesc.ucsd.edu">
                        <i class="fas fa-envelope-square"></i>
                        </a>
                    </li>
                    </ul>
                </div>
            </footer>
        </div>
    );
}

export default Footer;