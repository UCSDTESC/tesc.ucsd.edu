import React from 'react';
import FAQSets from './FAQSets';

import FAQData from '../../../data/FAQData';

function FAQBlurb() {
    return (
        <section className="faq">
            <div className="text-center faq__header-red" style={{marginBottom: '-3rem'}}>
                Council FAQs
            </div>

            {FAQData.map((d, i) => (
                <FAQSets data={d} key={i} />
            ))}

        </section>
    );
}

export default FAQBlurb;