import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import $ from 'jquery';

import BearIsland from '../svg/bear-island.svg';
import CloudTopLeft from '../svg/cloud-top-left.svg';
import CloudTopRight from '../svg/cloud-top-right.svg';
import CloudBottomLeft from '../svg/cloud-bottom-left.svg';
import CloudBottomRight from '../svg/cloud-bottom-right.svg';

class Hero extends React.Component {
    scrollAnimation() {
        $('html, body').animate(
            {
                scrollTop: $('#about').offset().top,
            },
            800
        );
    }

    render() {
        return (
            <section className="eotg-hero">
                <Container className="text-center eotg-hero__container" fluid>
                    <Row className="eotg-hero__clouds-top">
                        <Col xs={6}>
                            <img src={CloudTopLeft} alt="" />
                        </Col>
                        <Col>
                            <img src={CloudTopRight} alt="" />
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col md={6}>
                            <img
                                src={BearIsland}
                                alt=""
                                className="eotg-hero__graphic"
                            />
                        </Col>
                        <Col
                            md="6"
                            className="d-flex align-items-center justify-content-center"
                        >
                            <div>
                                <div className="eotg-hero__title pb-2">
                                    <b> Engineers on the Green </b>
                                </div>
                                <div className="eotg-hero__detail">
                                    October 5th - 9th // 2-6 PM each day
                                </div>
                                <div className="eotg-hero__button_div mb-5">
                                    <a
                                        className="eotg-hero__button"
                                        href="https://www.facebook.com/events/638144703462548/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Facebook Event Page
                                    </a>
                                </div>
                                <div className="eotg-hero__button_div">
                                    <a
                                        className="eotg-hero__button"
                                        href="https://discord.gg/WBaecP2"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Discord
                                    </a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="eotg-hero__clouds-bottom">
                        <Col xs={6}>
                            <img src={CloudBottomLeft} alt="" />
                        </Col>
                        <Col className="cloud-bottom-right">
                            <img src={CloudBottomRight} alt="" />
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default Hero;
