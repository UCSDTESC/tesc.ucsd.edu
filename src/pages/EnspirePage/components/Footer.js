import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import { ReactComponent as Jellyfish } from '../static/jelly-footer.svg';

const Footer = () => {
    return (
        <footer className="enspire-footer">
            <Jellyfish className="enspire-footer__img" />
            <Container>
                <Row>
                    <Col md={5}>
                        <div className="enspire-footer__brand">
                            <h1>TESC</h1>
                            <h2>triton engineering student council</h2>
                        </div>
                    </Col>
                    <Col>
                        <div className="enspire-footer__contact">
                            <h1>
                                contact{' '}
                                <a href="mailto:emma@tesc.ucsd.edu">
                                    emma@tesc.ucsd.edu
                                </a>{' '}
                                for more information
                            </h1>
                            <h2>
                                learn more about TESC!
                                <br />
                                <a
                                    href="https://tesc.ucsd.edu"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    https://tesc.ucsd.edu
                                </a>
                            </h2>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
