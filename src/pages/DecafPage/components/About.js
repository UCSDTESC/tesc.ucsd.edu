import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import AboutGraphic from '../assets/about-graphic.svg';

const About = ({ isCompany }) => {
    return (
        <section className="decaf-about">
            <Container>
                <Row>
                    <Col>
                        <img
                            src={AboutGraphic}
                            alt=""
                            className="d-block mx-auto"
                        />
                    </Col>
                    <Col>
                        <h1>
                            what is
                            <br />
                            DECAF
                        </h1>
                        <p>
                            The Disciplines of Engineering Career Fair, or
                            Decaf, is an annual career fair organized by the
                            Triton Engineering Student Council. Established in
                            1998, Decaf aims to make it easy for you to break
                            through directly to prospective talent.
                        </p>
                        <p>
                            Attending Decaf will provide you with the
                            opportunity to draw from a broad pool of UC San
                            Diego’s talented engineering students. Join our
                            growing list of sponsors to ensure you get a chance
                            to interact with students and fulfill your hiring
                            goals.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;
