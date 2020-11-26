import React from 'react';

const FaqItem = ({ question, answer }) => {
    return (
        <div className="enspire-faq-item">
            <h2>Q: {question}</h2>
            <p>{answer}</p>
        </div>
    );
};

export default FaqItem;
