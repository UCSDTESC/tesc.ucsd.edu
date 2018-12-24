import React from 'react';
import data from '../../../data/decaf/faq';
import FaqItem from './FaqItem';

class Faq extends React.Component {

    render() {
        return (
            <div className="decaf-faq" id="faq">
                <div className="decaf-faq__head">
                    Frequently Asked Questions
                </div>
                <div className="decaf-faq__head-sub mb-5">
                    for companies
                </div>
                
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 my-auto">
                            <div className="content pb-3">
                                {data.map((d, i) => <FaqItem {...d} key={i} idx={i}/>)}
                            </div>
                        </div>
                    </div> 
                </div>

            </div>
        )
    }
}

export default Faq;