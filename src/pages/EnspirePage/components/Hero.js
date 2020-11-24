import React from 'react';
import { Container } from 'reactstrap';

const Hero = () => {
    return (
        <Container className="enspire-hero">
            <div className="enspire-hero__content">
                <p className="enspire-hero__sup">
                    <b>TESC</b> presents
                </p>
                <h1 className="enspire-hero__title">
                    <sup className="text-elevated">en</sup>spire
                </h1>
                <div className="enspire-hero__sub">
                    <ul>
                        {['white', '#DA5AE3', '#358EA7'].map((color, i) => (
                            <li key={i} style={{ color }}>
                                explore STEM at UCSD
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Container>
    );
};

export default Hero;
