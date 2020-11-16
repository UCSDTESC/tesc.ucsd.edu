import React from 'react';
import { Row, Col } from 'reactstrap';

const CalendarEvent = ({ title, organizer, start, end, type }) => {
    if (type === 'org')
        return (
            <div className="matcha-calendar-event-org">
                <Row>
                    <Col md={4}>
                        <h1 className="matcha-calendar-event-org__time">
                            {start}
                        </h1>
                        <h1 className="matcha-calendar-event-org__time">
                            {end}
                        </h1>
                    </Col>
                    <Col md={8}>
                        <h1 className="matcha-calendar-event-org__title text-center text-md-left">
                            {title}
                        </h1>
                        <h2 className="matcha-calendar-event-org__organizer text-center text-md-left">
                            {organizer}
                        </h2>
                    </Col>
                </Row>
            </div>
        );

    if (type === 'com')
        return (
            <div className="matcha-calendar-event-com">
                <Row>
                    <Col md={4}>
                        <h1 className="matcha-calendar-event-com__time">
                            {start}
                        </h1>
                        <h1 className="matcha-calendar-event-com__time">
                            {end}
                        </h1>
                    </Col>
                    <Col md={8}>
                        <h1 className="matcha-calendar-event-com__title">
                            {title}
                        </h1>
                        <h2 className="matcha-calendar-event-com__organizer">
                            {organizer}
                        </h2>
                    </Col>
                </Row>
            </div>
        );
};

export default CalendarEvent;
