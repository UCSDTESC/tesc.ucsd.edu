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
                                    September 29th // 12-5 pm <br></br>
                                    September 30th // 12-5 pm 
                                </div>
                                {/* <div className="eotg-hero__button_div mb-5">
                                    <a
                                        className="eotg-hero__button"
                                        href="https://fb.me/e/3z3trhAN8"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Facebook Event Page
                                    </a>
                                </div>
                                <div className="eotg-hero__button_div">
                                    <a
                                        className="eotg-hero__button"
                                        href="https://discord.gg/CmQU2x9bSF"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Discord
                                    </a>
                                </div> */}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default Hero;
