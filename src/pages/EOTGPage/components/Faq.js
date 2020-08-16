import React from 'react';
import studentFaq from '../../../data/EOTGfaq';
import FaqItem from './FaqItem';

class Faq extends React.Component {

    render() {
        
        const data = studentFaq;
        return (
          
            <div className={`eotg-hero`} id="faq">
                <div className="eotg-faq__head mb-5">
                    Frequently Asked Questions
                </div>
                
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 my-auto">
                            <div className="content pb-4">
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