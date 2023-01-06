import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import SponsorLogos from '../data/SponsorLogos';

import potHead from '../assets/pot-head.svg';
import buford from '../assets/buford.svg';
import shadow from '../assets/pot-head-shadow.svg';

import Seismic from '../assets/sponsors/seismic.svg';
import AppliedMedical from '../assets/sponsors/appliedmedical.svg';
import Dynovas from '../assets/sponsors/dynovas.svg';
import Viasat from '../assets/sponsors/viasat.svg';
import HughesNetworkSystem from '../assets/sponsors/hughes_network_system.svg';
import L3Harris from '../assets/sponsors/l3harris.svg';
import GeneralAtomics from '../assets/sponsors/general_atomics.svg';
import Leidos from '../assets/sponsors/leidoslogo.png';

const Sponsors = () => {
    return (
        <section className="decaf-sponsors">
            <Container>
                <h1 className="decaf-sponsors__title">
                    ATTENDING
                    <br />
                    <span>SPONSORS</span>
                </h1>
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
                            <Row style={{ padding: 20 }}>
                                <Col key={2} xs={12} md={6}>
                                    <img src={ AppliedMedical } alt="Applied Medical" width="100%" className='mb-5' />
                                </Col>
                                <Col key={1} xs={12} md={6}>
                                    <img src={ Dynovas } alt="Dynovas" width="100%" className='mb-5' />
                                </Col>
                                <Col key={3} xs={12} md={6}>
                                    <img src={ Seismic } alt="Seismic Software" width="100%" className='mb-5' />
                                </Col>
                                <Col key={6} xs={12} md={6}>
                                    <img src={ GeneralAtomics } alt="General Atomics" width="100%" className='mb-5' />
                                </Col>
                                <Col key={4} xs={12} md={6}>
                                    <img src={ Viasat } alt="Viasat" width="100%" className='mb-5' />
                                </Col>
                                <Col key={6} xs={12} md={6}>
                                    <img src={ Leidos } alt="Leidos" width="100%" className='mb-5' />
                                </Col>
                                <Col key={5} xs={12} md={6}>
                                    <img src={ HughesNetworkSystem } alt="Hughes Network Systems" width="100%" className='mb-5' />
                                </Col>
                                <Col key={6} xs={12} md={6}>
                                    <img src={ L3Harris } alt="L3Harris" width="100%" className='mb-5' />
                                </Col>
                                <Col key={6} xs={12} md={6}>
                                    <h1>Lockheed Martin</h1>
                                </Col>
                                <Col key={6} xs={12} md={6}>
                                    <h1>412th Test Engineering Group</h1>
                                </Col>
                                <Col key={6} xs={12} md={6}>
                                    <h1>Keller North America</h1>
                                </Col>
                                {SponsorLogos.map((src, i) => (
                                    <Col key={i} xs={12} md={6}> 
                                        {/* <img
                                            src={src}
                                            alt=""
                                            width="100%"
                                            className="mb-5"
                                        />
		    			*/
                                        <p>Dynovas</p>}
		    		<h3 className="mb-5">{src}</h3>
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
