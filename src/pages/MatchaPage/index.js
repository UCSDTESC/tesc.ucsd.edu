import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Row, Col, Button } from 'reactstrap';

import Layout from '../../layouts/MatchaLayout';

const MatchaPage = () => {
    useEffect(() => {
        document.title = 'Matcha | UCSD TESC';
    });

    return (
        <Layout>
            <Container
                fluid
                className="matcha-hero matcha__p-std"
                style={{ paddingTop: '8rem' }}
            >
                <Row>
                    <Col></Col>
                    <Col className="matcha-hero__content">
                        <h1 className="display-3">Matcha</h1>
                        <h2>TESC's Virtual Career Fair</h2>
                        <p className="text-italic">
                            Matching Students with Engineering Jobs
                        </p>
                        <Button>Attending Companies</Button>
                        <Button>Submit Resume</Button>
                        <p>TESC</p>
                    </Col>
                </Row>
            </Container>

            <Container fluid className="matcha__p-std">
                <h1>What's Matcha</h1>
                <p>
                    The Disciplines of Engineering Career Fair, or Decaf, is an
                    annual student-run career fair.
                </p>
                <p>
                    Attending Decaf will provide you with the opportunity to
                    meet and connect with representatives from some of the top
                    companies in engineering.
                </p>
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
