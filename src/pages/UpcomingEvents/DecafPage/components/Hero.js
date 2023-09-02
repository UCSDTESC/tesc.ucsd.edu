import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

import HeroImgLeftCompany from '../assets/company/hero-graphic-left.svg';
import HeroImgBottomCompany from '../assets/company/hero-graphic-bottom.svg';
import HeroImgLeftStudent from '../assets/student/hero-graphic-left.svg';
import HeroImgBottomStudent from '../assets/student/hero-graphic-bottom.svg';

const Hero = ({ isCompany }) => {
    return (
        <section
            className={`decaf-hero ${
                isCompany ? 'decaf-hero--company' : 'decaf-hero--student'
            }`}
        >
            <Container>
                <Row>
                    <Col xl={5} lg={7} md={6}>
                        <img
                            src={
                                isCompany
                                    ? HeroImgLeftCompany
                                    : HeroImgLeftStudent
                            }
                            alt=""
                            width="100%"
                            className="hero-img-l"
                        />
                    </Col>
                    <Col className="decaf-hero__content">
                        <h1>DECAF</h1>
                        <h2>FOR {isCompany ? 'COMPANIES' : 'STUDENTS'}</h2>
                        <p>
                            Disciplines of Engineering Career Fair
                            <br />
                            November 6, 2023
                        </p>
                        <Button
                            className="btn-1"
                            href={
                                isCompany
                                    ? 'https://events.eventzilla.net/e/decaf-2023-2138571703'
                                    : 'https://www.eventbrite.com/e/decaf-2023-tickets-475639569757'
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {isCompany
                                ? 'Register Your Company'
                                : 'Sign Up for Decaf'}
                        </Button>
                        {!isCompany && (
                            <Button className="btn-2" href="/decaf/attending">
                                Attending Companies
                            </Button>
                        )}
                        <img
                            src={
                                isCompany
                                    ? HeroImgBottomCompany
                                    : HeroImgBottomStudent
                            }
                            alt=""
                            width="85%"
                            className="hero-img-b"
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;
