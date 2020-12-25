import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import HeroImgLeft from '../assets/hero-graphic-left.svg';
import HeroImgBottom from '../assets/hero-graphic-bottom.svg';

const Hero = ({ isCompany }) => {
    return (
        <section className="decaf-hero">
            <Container>
                <Row>
                    <Col xl={5} md={7}>
                        <img src={HeroImgLeft} alt="" width="100%" />
                    </Col>
                    <Col className="decaf-hero__content">
                        <div>
                            <h1>DECAF</h1>
                            <h2>FOR COMPANIES</h2>
                            <p>
                                Disciplines of Engineering Career Fair
                                <br />
                                On Discord, January 19-21, 2021
                            </p>
                            <Button>Register Your Company</Button>
                        </div>
                        <img src={HeroImgBottom} alt="" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;
