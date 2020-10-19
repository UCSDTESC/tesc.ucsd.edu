import React from 'react';
import { Container } from 'reactstrap';
import { AiFillHome, AiFillFacebook } from 'react-icons/ai';
import FooterPattern from '../static/footer-pattern.svg';

const Footer = () => {
    return (
        <footer className="matcha-footer">
            <img
                src={FooterPattern}
                alt=""
                className="matcha-footer__pattern"
            />
            <Container>
                <h1 className="mb-4">
                    Have a different question? <br />
                    Contact us!
                </h1>

                <p>
                    <a href="mailto:sponsorship@tesc.ucsd.edu">
                        sponsorship@tesc.ucsd.edu
                    </a>
                </p>
                <p>
                    <AiFillHome />{' '}
                    <a
                        href="https://tesc.ucsd.edu"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        https://tesc.ucsd.edu
                    </a>
                </p>
                <p>
                    <AiFillFacebook />{' '}
                    <a
                        href="https://www.facebook.com/events/3775389302477501/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Visit our Facebook Page!
                    </a>
                </p>
            </Container>
        </footer>
    );
};

export default Footer;
