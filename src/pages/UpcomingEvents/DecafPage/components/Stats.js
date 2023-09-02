import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import { ReactComponent as Border } from '../assets/border-stats.svg';
import MajorChart from '../assets/stats-major-chart.svg';
import YearChart from '../assets/stats-year-chart.svg';

const Stats = () => {
    return (
        <section className="decaf-stats">
            <Container>
                <h1 className="section-title mx-auto text-center">
                    statistics from
                    <br />
                    <em>DECAF2022</em>
                </h1>
                {[
                    {
                        type: 'major',
                        chart: MajorChart,
                    },
                    {
                        type: 'year',
                        chart: YearChart,
                    },
                ].map(({ type, chart }, i) => [
                    <Row key={i}>
                        <Col
                            className="decaf-stats__group-title"
                            md="auto"
                            xs={12}
                        >
                            <div>
                                <h2>
                                    {type}
                                    <br />
                                    breakdown
                                </h2>
                                <p>
                                    {`${type}s`} of students who attended last
                                    year’s Decaf
                                </p>
                            </div>
                            <Border />
                        </Col>
                        <Col className="decaf-stats__chart">
                            <img
                                src={chart}
                                alt={`pie chart on ${type}s of students who attended Decaf 2020`}
                                width="100%"
                            />
                        </Col>
                    </Row>,
                ])}
            </Container>
        </section>
    );
};

export default Stats;
