import React from 'react';
import { Row, Col } from 'reactstrap';

import Pattern from '../static/session-pattern.svg';
import Teacup from '../static/teacup.svg';

const SessionCard = ({ title, organizer, index }) => {
    return (
        <div className="matcha-session-card">
            <Row>
                <Col md={8}>
                    <h1 className="matcha-session-card__title">{title}</h1>
                    <h2 className="matcha-session-card__organizer">
                        {organizer}
                    </h2>
                </Col>
            </Row>
            <img
                src={Pattern}
                alt=""
                className="matcha-session-card__pattern"
                style={{ transform: `rotate(${(index % 4) * 90}deg)` }}
            />
            <img
                src={Teacup}
                alt=""
                className="matcha-session-card__teacup"
                style={{
                    transform: `rotate(${
                        (index % 4) * 7 * Math.pow(-1, index % 4)
                    }deg)`,
                }}
            />
        </div>
    );
};

export default SessionCard;
