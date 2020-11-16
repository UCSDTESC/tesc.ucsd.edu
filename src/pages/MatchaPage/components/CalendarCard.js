import React from 'react';
import { Row, Col } from 'reactstrap';

import calendarData from '../data/MatchaCalendarSessions';
import CalendarEvent from '../components/CalendarEvent';

const CalendarCard = ({ today, date }) => {
    return (
        <div className="matcha-calendar-card">
            <h1 className="matcha-calendar-card__title">{today}</h1>
            <h2 className="matcha-calendar-card__date">{date}</h2>
            {calendarData.map(
                ({ title, organizer, start, end, day, type }, i) => {
                    return (
                        today === day && (
                            <Row key={i}>
                                <Col md={12}>
                                    <CalendarEvent
                                        title={title}
                                        organizer={organizer}
                                        start={start}
                                        end={end}
                                        type={type}
                                    />
                                </Col>
                            </Row>
                        )
                    );
                }
            )}
        </div>
    );
};

export default CalendarCard;
