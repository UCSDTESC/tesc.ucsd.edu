import React from 'react';
import { Container } from 'reactstrap';
import enspireFaq from '../data/EnspireFaq';
import Divider from './Divider';
import FaqItem from '../components/FaqItem';

import Jelly from '../static/jelly-faq.svg';

const Faq = () => {
    const data = enspireFaq;

    return (
        <div className="enspire-faq">
            <h1 className="section-title">FAQs</h1>
            <Divider />
            <Container>
                {data.map((d, i) => (
                    <FaqItem {...d} key={i} />
                ))}

                <img src={Jelly} alt="" width="40%" />
            </Container>
        </div>
    );
};

export default Faq;
