import React from 'react';

const FaqItem = ({ question, answer, idx }) => {
    return (
        <div
            className="panel-group"
            id="accordion"
            role="tablist"
            aria-multiselectable="true"
        >
            <div className="panel panel-default enspire-question">
                <div className="panel-heading" id={`heading-${idx}`} role="tab">
                    <div className="panel-title enspire-question__heading">
                        <a
                            className="collapsed w-100 d-block"
                            role="button"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href={`#collapse-${idx}`}
                            aria-expanded="false"
                            aria-controls={`collapse-${idx}`}
                        >
                            {question}
                            <i className="pull-right fa fa-plus float-right mt-1 enspire-question__icon"></i>
                        </a>
                    </div>
                </div>
                <div
                    className="panel-collapse collapse in enspire-question__content"
                    id={`collapse-${idx}`}
                    role="tabpanel"
                    aria-labelledby={`heading-${idx}`}
                >
                    <div className="panel-body">
                        <p>{answer}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaqItem;
