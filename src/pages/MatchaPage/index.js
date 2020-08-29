import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Row, Col, Button } from 'reactstrap';

import Layout from '../../layouts/MatchaLayout';

import HeroPattern from './static/hero-pattern.svg';
import TescLogo from './static/tesc-logo-white.svg';

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
                                <Button outline className="matcha-hero__btn">
                                    Attending Companies
                                </Button>
                            </Col>
                            <Col>
                                <Button outline className="matcha-hero__btn">
                                    Submit Resume
                                </Button>
                            </Col>
                        </Row>
                        <img src={TescLogo} alt="TESC logo" className="mt-5" />
                    </Col>
                </Row>
            </Container>

            <Container fluid className="matcha__px-std">
                <Row>
                    <Col md={8}>
                        <h1>What's Matcha</h1>
                        <p>
                            The Disciplines of Engineering Career Fair, or
                            Decaf, is an annual student-run career fair.
                        </p>
                        <p>
                            Attending Decaf will provide you with the
                            opportunity to meet and connect with representatives
                            from some of the top companies in engineering.
                        </p>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>

            <section>
                <h1>FLO</h1>
                <h2>Early Access Events</h2>
                <p>
                    F.L.O - Early Access events let you into Matcha an hour
                    earlier allowing you to get the first crack at speaking with
                    representatives from every company attending.
                </p>
            </section>

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