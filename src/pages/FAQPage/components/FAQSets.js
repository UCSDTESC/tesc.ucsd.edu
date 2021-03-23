import React from 'react';

class FAQSets extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <>
                <div className="text-center faq__header" style={{marginTop: '3rem'}}>
                    {data.title}
                </div>
                {data.content.map((c, i) => {
                    return (
                        <>
                            <div className="faq__question mt-4 mb-2 text-left">
                                <b key={i}>{c.question}</b>
                            </div>
                            <div className="faq__text text-left">
                                {c.answer}
                            </div>
                        </>
                    );
                })}
            </>
        );
    }
}

export default FAQSets;