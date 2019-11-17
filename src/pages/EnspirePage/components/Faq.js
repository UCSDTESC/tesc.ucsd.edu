import React from 'react';
import enspireFaq from '../../../data/EnspireFaq';
import FaqItem from '../components/FaqItem';

class Faq extends React.Component {

    render() {
        const data = enspireFaq;
        return (
            <div className="enspire-faq">
                <div className="enspire-faq__head">
                    <b>Frequently Asked Questions</b>
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