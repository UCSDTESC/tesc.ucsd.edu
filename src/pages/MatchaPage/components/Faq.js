import React from 'react';
import studentFaq from '../data/MatchaFaq.js';
import FaqItem from './FaqItem';

class Faq extends React.Component {
    render() {
        const data = studentFaq;

        return (
            <section className="matcha-faq" id="faq">
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
            </section>
        );
    }
}

export default Faq;
