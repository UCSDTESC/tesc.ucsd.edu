import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import BorderTop from '../assets/border-faq-top.svg';
import BorderBottom from '../assets/border-faq-bottom.svg';
import Spotlight from '../assets/spotlight.svg';
import studentFaq from '../data/DecafFaq';
import FaqItem from './FaqItem';
const Faq = () => {
    return (
        
        <section className="decaf-faq">
            <img src={BorderTop} alt="" className="decaf-faq__border-top" />
            <img src={Spotlight} alt="" />
            <Container>
                <h1 className="decaf-faq__title">
                    frequently asked
                    <br />
                    <em>QUESTIONS</em>
                </h1>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 my-auto">
                            <div className="content pb-4">
                                {studentFaq.map((d, i) => (
                                    <FaqItem {...d} key={i} idx={i} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </Container>
            <img
                src={BorderBottom}
                alt=""
                className="decaf-faq__border-bottom"
            />
        </section>
    );
};

export default Faq;
