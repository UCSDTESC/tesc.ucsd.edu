import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import $ from 'jquery';

import BearIsland from '../svg/bear-island.svg';

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
                                    January 4th <br></br> 
                                    11 AM - 3 PM <br></br>
                                    Marshall College Field
                                </div>
                                {/* FOR FACEBOOK BUTTON:
                                <div className="eotg-hero__button_div mb-5">
                                    <a
                                        className="eotg-hero__button"
                                        href="https://fb.me/e/3z3trhAN8"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Facebook Event Page
                                    </a>
                                </div>
                                */}
                                {/* FOR DISCORD BUTTON:
                                <div className="eotg-hero__button_div">
                                    <a
                                        className="eotg-hero__button"
                                        href="https://discord.gg/p43mZkva"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Discord
                                    </a>
                                </div>
                                */}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default Hero;
