import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Row, Col, Button } from 'reactstrap';
import $ from 'jquery';

import Layout from '../../layouts/MatchaLayout';
import FeaturedSessions from './components/Sessions';
import DailyRundown from './components/Calendar';
import Faq from './components/Faq';

import HeroPattern from './static/hero-pattern.svg';
import TescLogo from './static/tesc-logo-white.svg';
import AboutPattern from './static/about-pattern.svg';
import MantisTop from './static/mantis-top.svg';
const MatchaPage = () => {
    useEffect(() => {
        document.title = 'Matcha | UCSD TESC';
        $("link[rel='shortcut icon']").attr(
            'href',
            'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍵</text></svg>'
        );

        return () => {
            document.title = 'UCSD TESC';
            $("link[rel='shortcut icon']").attr('href', '/favicon.png');
        };
    });

    return (
        <Layout>
            <Container fluid className="matcha-hero matcha__px-std">
                <Row className="matcha-hero__row-main">
                    <Col className="align-self-end">
                        <img
                            src={HeroPattern}
                            alt="hero pattern"
                            className="matcha-hero__pattern"
                        />
                    </Col>
                    <Col
                        lg
                        xs={12}
                        className="text-center text-lg-right align-self-center"
                    >
                        <h1 className="matcha-hero__title">matcha</h1>
                        <h2 className="matcha-hero__subtitle">
                            TESC's Virtual Engineering Conference
                        </h2>
                        <h3 className="matcha-hero__slogan">
                            Matching Students with Engineering Jobs
                        </h3>
                        <Row className="flex-column">
                            <Col className="mb-3">
                                <Button
                                    outline
                                    className="matcha-btn matcha-btn-outline"
                                    href="http://www.tesc.link/drinkMatcha"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Register Now
                                </Button>
                            </Col>
                        </Row>
                        <img src={TescLogo} alt="TESC logo" className="mt-5" />
                    </Col>
                </Row>
            </Container>

            <Container fluid className="matcha-about">
                <Row>
                    <Col lg={8} xs={12}>
                        <h1 className="matcha-about__title">What's Matcha?</h1>
                        <p>
                            Matcha is our first ever fully virtual career
                            conference. Open exclusively to UCSD students, it is
                            coordinated by the Trition Engineering Student
                            Council, which represents the wide spectrum of
                            disciplines within the Jacobs School, and advocates
                            for the interest of UCSD’s 6500+ engineers.
                        </p>
                        <p>
                            The event will be taken place virtually via the
                            online platform Symplicity, on{' '}
                            <b>November 16 - 20, 2020 from 9 AM - 5 PM.</b>
                        </p>
                        {/* <Button className="matcha-btn">
                            Attending Companies
                        </Button> */}
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
            
            <DailyRundown />
            <FeaturedSessions />
            <Faq />
        </Layout>
    );
};

export default withRouter(MatchaPage);
