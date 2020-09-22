import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Row, Col, Button } from 'reactstrap';

import Layout from '../../layouts/MatchaLayout';

import HeroPattern from './static/hero-pattern.svg';
import TescLogo from './static/tesc-logo-white.svg';
import AboutPattern from './static/about-pattern.svg';
import MantisTop from './static/mantis-top.svg';

const MatchaPage = () => {
    useEffect(() => {
        document.title = 'Matcha | UCSD TESC';
    });

    return (
        <Layout>
            <Container fluid className="matcha-hero matcha__px-std">
                <Row className="h-100">
                    <Col className="align-self-end">
                        <img src={HeroPattern} alt="hero pattern" />
                    </Col>
                    <Col className="matcha-hero__content align-self-center">
                        <h1 className="matcha-hero__title">matcha</h1>
                        <h2 className="matcha-hero__subtitle">
                            TESC's Virtual Career Fair
                        </h2>
                        <h3 className="matcha-hero__slogan">
                            Matching Students with Engineering Jobs
                        </h3>
                        <Row className="flex-column">
                            <Col className="mb-3">
                                <Button
                                    outline
                                    className="matcha-btn matcha-btn-outline"
                                >
                                    Attending Companies
                                </Button>
                            </Col>
                            <Col>
                                <Button
                                    outline
                                    className="matcha-btn matcha-btn-outline"
                                >
                                    Submit Resume
                                </Button>
                            </Col>
                        </Row>
                        <img src={TescLogo} alt="TESC logo" className="mt-5" />
                    </Col>
                </Row>
            </Container>

            <Container fluid className="matcha-about">
                <Row>
                    <Col md={8}>
                        <h1 className="matcha-about__title">What's Matcha?</h1>
                        <p>
                            Matcha is a Fall annual student-run engineering
                            career fair at UCSD. Open exclusively to UCSD
                            students, it is coordinated by the Trition
                            Engineering Student Council, which represents the
                            wide spectrum of disciplines within the Jacobs
                            School, and advocates for the interest of UCSD’s
                            6500+ engineers.
                        </p>
                        <p>
                            The event will be taken place virtually via the
                            online platform Symplicity, on{' '}
                            <b>
                                Thursday, October 22nd, 2020 from 9 AM - 4 PM.
                            </b>
                        </p>
                        <Button className="matcha-btn">
                            Attending Companies
                        </Button>
                    </Col>
                    <Col>
                        <img
                            src={AboutPattern}
                            alt="about pattern"
                            className="matcha-about__pattern"
                        />
                    </Col>
                </Row>
                <img
                    src={MantisTop}
                    alt="mantis top view"
                    className="matcha-about__mantis"
                />
            </Container>

            <div className="matcha-flo-intro">
                <Container>
                    <h1>FLO</h1>
                    <h2>Early Access Events</h2>
                    <p>
                        F.L.O - Early Access events let you into Matcha an hour
                        earlier allowing you to get the first crack at speaking
                        with representatives from every company attending.
                    </p>
                </Container>
            </div>

            <section>
                <h1>FLO Events</h1>
                <p>To be Announced</p>
            </section>

            <section>
                <h1>FAQ</h1>
                <h2>Frequently Asked Questions</h2>
            </section>
        </Layout>
    );
};

export default withRouter(MatchaPage);
