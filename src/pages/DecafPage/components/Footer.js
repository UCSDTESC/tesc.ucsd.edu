import React from 'react';
import { Container } from 'reactstrap';

import TescLogo from '../assets/tesc-logo-expanded.svg';

const Footer = () => {
    return (
        <footer className="decaf-footer">
            <Container>
                <p>organized by</p>
                <img src={TescLogo} alt="TESC logo" />
                <p>
                    The Triton Engineering Student Council empowers UC San Diego
                    engineering students by connecting them with impactful
                    communities, projects, and career building opportunities.
                </p>
            </Container>
        </footer>
    );
};

export default Footer;
