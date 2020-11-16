import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import CalendarCard from '../components/CalendarCard';

import FloIntroPattern from '../static/flo-intro-pattern.svg';
import MantisTea from '../static/mantis-tea.svg';

const DailyRundown = () => {
    return (
        <section className="matcha-calendar">
            <Container fluid>
                <h1 className="matcha-calendar__title">Daily Rundown</h1>
                <h2 className="matcha-calendar__week">
                    November 16 - 20, 2020
                </h2>
                <Row>
                    <Col lg={4} md={6} sm={12}>
                        <CalendarCard today={'Monday'} date={'November 16'} />
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <CalendarCard today={'Tuesday'} date={'November 17'} />
                    </Col>
                    <Col lg={4} md={6}>
                        <CalendarCard
                            today={'Wednesday'}
                            date={'November 18'}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col lg={4} md={6} sm={12}>
                        <CalendarCard today={'Thursday'} date={'November 19'} />
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <CalendarCard today={'Friday'} date={'November 20'} />
                    </Col>
                </Row>
            </Container>

            <img
                src={FloIntroPattern}
                alt=""
                className="matcha-calendar__pattern"
            />
            <img src={MantisTea} alt="" className="matcha-calendar__mantis" />
        </section>
    );
};

export default DailyRundown;
