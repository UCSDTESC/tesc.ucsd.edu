import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import sessionsData from '../data/MatchaSessions';
import FloPatternTop from '../static/flo-pattern-top.svg';
import FloPatternBottom from '../static/flo-pattern-bottom.svg';
import SessionCard from '../components/SessionCard';

const FeaturedSessions = () => {
    return (
        <section className="matcha-sessions">
            <Container fluid>
                <h1 className="matcha-sessions__title">Featured Sessions</h1>
                <Row>
                    {sessionsData.map(({ title, organizer }, i) => {
                        return (
                            <Col key={i} md={6}>
                                <SessionCard
                                    title={title}
                                    organizer={organizer}
                                    index={i}
                                />
                            </Col>
                        );
                    })}
                </Row>
            </Container>

            <img
                src={FloPatternTop}
                alt=""
                className="matcha-sessions__pattern-t"
            />
            <img
                src={FloPatternBottom}
                alt=""
                className="matcha-sessions__pattern-b"
            />
        </section>
    );
};

export default FeaturedSessions;
