import React from 'react';
import { Container, Row } from 'reactstrap';

import potHead from '../assets/pot-head.svg';
import buford from '../assets/buford.svg';
import shadow from '../assets/pot-head-shadow.svg';
import Col from 'reactstrap/lib/Col';

const Sponsors = () => {
    const asStyle = {
        fontFamily: 'Woodchuck',
        fontStyle: 'normal',
        fontWeight: '900',
        lineHeight: '150%',
        color: '#8C74B7',
        margin: 'auto',
    };

    const TBDStyle = {
        color: '#291637',
        fontFamily: 'Woodchuck',
        fontStyle: 'normal',
        fontWeight: '900',
        margin: 'auto -30%',
        fontSize: '20vw',
        position: 'relative',
        zIndex: '5',
    };

    const shadowStyle = {
        position: 'absolute',
        zIndex: '1',
        width: '22%',
        height: 'auto',
        marginTop: '5%',
        marginLeft: '-2%',
    };

    const potHeadStyle = {
        marginTop: '35%',
        marginLeft: '-25%',
        position: 'absolute',
        zIndex: '12',
        width: '100%',
        height: 'auto',
    };

    const bufordStyle = {
        marginTop: '20%',
        marginLeft: '-20%',
        width: '100%',
        height: 'auto',
        position: 'absolute',
        zIndex: '12',
    };

    const contactStyle = {
        textAlign: 'center',
        color: '#29193E',
        fontFamily: 'Woodchuck',
        fontStyle: 'normal',
        fontWeight: 'bold',
        lineHeight: '150%',
        fontSize: '3vw',
        margin: '0 12%',
    };

    return (
        <section className="decaf-sponsors">
            <Container>
                <Row>
                    <h1 style={asStyle}>ATTENDING</h1>
                </Row>
                <Row>
                    <h1 style={asStyle}>
                        <span style={{ fontSize: '150%' }}>SPONSORS</span>
                    </h1>
                </Row>
                <Row>
                    <img src={shadow} style={shadowStyle} alt="" />
                    <Col>
                        <img src={potHead} style={potHeadStyle} alt="" />
                    </Col>
                    <Col xs={6}>
                        <h2 style={TBDStyle}>TBD</h2>
                    </Col>
                    <Col>
                        <img src={buford} style={bufordStyle} alt="" />
                    </Col>
                </Row>
                <Row>
                    <p style={contactStyle}>
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
