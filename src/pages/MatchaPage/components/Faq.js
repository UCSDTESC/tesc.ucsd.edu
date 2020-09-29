import React from 'react';
import { Container } from 'reactstrap';

import studentFaq from '../data/MatchaFaq.js';
import FaqItem from './FaqItem';

import Teapot from '../static/teapot.svg';
import FaqPattern from '../static/faq-pattern.svg';

class Faq extends React.Component {
    render() {
        const data = studentFaq;

        return (
            <section className="matcha-faq" id="faq">
                <Container>
                    <div className="matcha-faq__head mb-5">
                        <h1>FAQ</h1>
                        <h2>Frequently Asked Questions</h2>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 my-auto">
                                <div className="content pb-4">
                                    {data.map((d, i) => (
                                        <FaqItem {...d} key={i} idx={i} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
                <img src={Teapot} alt="" className="matcha-faq__teapot" />
                <img src={FaqPattern} alt="" className="matcha-faq__pattern" />
            </section>
        );
    }
}

export default Faq;
