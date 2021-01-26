import React from 'react';
import { Container } from 'reactstrap';
import Divider from './Divider';

import JellyLeft from '../static/jelly-about-left.svg';
import JellyRight from '../static/jelly-about-right.svg';

const About = () => {
    return (
        <section className="enspire-about">
            <img src={JellyLeft} alt="" className="jelly-left" />
            <img src={JellyRight} alt="" className="jelly-right" />
            <h1 className="section-title">about</h1>
            <Divider />
            <Container>
                <p>
                    Enspire is UC San Diego’s Triton Engineering Student Council
                    (TESC) annual outreach event for high school students in the
                    Greater San Diego Area.
                </p>
                <p>
                    With Enspire, TESC seeks to introduce high school students
                    to college-level education with engaging, informational
                    workshops focused on engineering. We hope to give students a
                    taste of college life and inspire them to join the STEM
                    community.
                </p>
            </Container>
        </section>
    );
};

export default About;
