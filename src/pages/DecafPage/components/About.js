import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import AboutGraphicCompany from '../assets/company/about-graphic.svg';
import AboutGraphicStudent from '../assets/student/about-graphic.svg';

const About = ({ isCompany }) => {
    return (
        <section
            className={`decaf-about ${
                isCompany ? 'decaf-bg-orange' : 'decaf-bg-purple'
            }`}
        >
            <Container>
                <Row>
                    <Col>
                        <img
                            src={
                                isCompany
                                    ? AboutGraphicCompany
                                    : AboutGraphicStudent
                            }
                            alt=""
                            width="80%"
                        />
                    </Col>
                    <Col md={6} xs={12}>
                        <h1 className="section-title">
                            what is
                            <br />
                            <em style={{ textShadow: !isCompany && 'none' }}>
                                DECAF
                            </em>
                        </h1>
                        <p>
                            {isCompany
                                ? 'The Disciplines of Engineering Career Fair, or DECaF, is an annual career fair organized by the Triton Engineering Student Council. Established in 1998, DECaF aims to make it easy for you to break through directly to prospective talent.'
                                : 'The Disciplines of Engineering Career Fair, or DECaF, is an annual student-run career fair hosted by the Triton Engineering Student Council. Come by to have the opportunity to attend recruiting and information sessions, receive feedback on your resume, and more!'}
                        </p>
                        <p>
                            {isCompany
                                ? 'Attending Decaf will provide you with the opportunity to draw from a broad pool of UC San Diego’s talented engineering students. Join our growing list of sponsors to ensure you get a chance to interact with students and fulfill your hiring goals.'
                                : 'The event will take place on November 6, 2023.'}
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;
