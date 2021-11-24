import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import SponsorLogos from '../data/SponsorLogos';

import potHead from '../assets/pot-head.svg';
import buford from '../assets/buford.svg';
import shadow from '../assets/pot-head-shadow.svg';

const Sponsors = () => {
    return (
        <section className="decaf-sponsors">
            <Container>
                <h1 className="decaf-sponsors__title">
                    ATTENDING
                    <br />
                    <span>SPONSORS</span>
                </h1>

		{/*
                <Row>
                    <Col>
                        <img
                            src={potHead}
                            className="decaf-sponsors__pot-head"
                            alt=""
                        />
                        <img
                            src={shadow}
                            className="decaf-sponsors__shadow"
                            alt=""
                        />
                    </Col>

                    <Col xs={8}>
                         <div className="decaf-sponsors__logo-container">
                            <Row>
                                {SponsorLogos.map((src, i) => (
                                    <Col key={i} xs={12} md={6}> 
                                        <img
                                            src={src}
                                            alt=""
                                            width="100%"
                                            className="mb-5"
                                        />
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    </Col>
                     <Col>
                        <img
                            src={buford}
                            className="decaf-sponsors__buford"
                            alt=""
                        />
                    </Col>
                </Row>
		*/}
                <Row>
                    <p className="decaf-sponsors__contact">
                        Contact us at{' '}
                        <a
                            href="mailto:sponsor@tesc.ucsd.edu"
                            style={{ color: '#29193E' }}
                        >
                            sponsor@tesc.ucsd.edu
                        </a>{' '}
                        if you have any questions!
                    </p>
                </Row>
            </Container>
        </section>
    );
};

export default Sponsors;
