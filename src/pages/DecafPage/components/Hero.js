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
                            On Discord, January 19-21, 2021
                        </p>
                        <Button
                            className="btn-1"
                            href={
                                isCompany
                                    ? 'http://www.tesc.link/registerDecaf'
                                    : 'http://www.tesc.link/decafReg'
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {isCompany
                                ? 'Register Your Company'
                                : 'Sign Up for Decaf'}
                        </Button>
                        {!isCompany && (
                            <Button className="btn-2">
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
