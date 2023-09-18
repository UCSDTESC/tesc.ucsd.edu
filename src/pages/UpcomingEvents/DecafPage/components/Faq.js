import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import BorderTop from '../assets/border-faq-top.svg';
import BorderBottom from '../assets/border-faq-bottom.svg';
import Spotlight from '../assets/spotlight.svg';
import StickersAll from '../assets/stickers-all.svg';

import companyFaq from '../data/FaqCompany';
import studentFaq from '../data/FaqStudent';
import FaqItem from './FaqItem';

const Faq = ({ isCompany }) => {
    const data = isCompany ? companyFaq : studentFaq;

    return (
        <section className="decaf-faq">
            <img
                src={isCompany ? BorderTop : BorderBottom}
                alt=""
                className="decaf-faq__border-top"
            />
            <img src={Spotlight} alt="" className="decaf-faq__spotlight" />
            <Container>
                <h1 className="decaf-faq__title">
                    frequently asked
                    <br />
                    <em>QUESTIONS</em>
                </h1>
                <Row>
                    <Col lg={8} xs={12}>
                        <div className="content pb-4">
                            {data.map((d, i) => (
                                <FaqItem {...d} key={i} idx={i} />
                            ))}
                        </div>
                    </Col>
                </Row>
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
