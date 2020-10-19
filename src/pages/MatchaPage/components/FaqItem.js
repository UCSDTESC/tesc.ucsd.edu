import React from 'react';

class FaqItem extends React.Component {
    render() {
        const { idx } = this.props;

        return (
            <div
                className="panel-group"
                id="accordion"
                role="tablist"
                aria-multiselectable="true"
            >
                <div className="panel panel-default matcha-question">
                    <div
                        className="panel-heading"
                        id={`heading-${idx}`}
                        role="tab"
                    >
                        <div className="panel-title matcha-question__heading">
                            <a
                                className="collapsed w-100 d-inline-flex flex-wrap justify-content-center"
                                role="button"
                                data-toggle="collapse"
                                data-parent="#accordion"
                                href={`#collapse-${idx}`}
                                aria-expanded="false"
                                aria-controls={`collapse-${idx}`}
                            >
                                <span className="mx-auto">
                                    {this.props.question}
                                </span>
                                <i className="fa fa-plus mt-1 question__icon"></i>
                            </a>
                        </div>
                    </div>
                    <div
                        className="panel-collapse collapse in matcha-question__content"
                        id={`collapse-${idx}`}
                        role="tabpanel"
                        aria-labelledby={`heading-${idx}`}
                    >
                        <div className="panel-body">
                            <p>{this.props.answer}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FaqItem;
