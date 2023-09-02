import React from 'react';
import { Row, Col } from 'reactstrap';
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
                <div
                    className="panel panel-default decaf-question"
                    style={{
                        backgroundColor: this.props.bgColor,
                        borderColor: this.props.bgColor,
                    }}
                >
                    <div
                        className="panel-heading"
                        id={`heading-${idx}`}
                        role="tab"
                    >
                        <div className="panel-title decaf-question__heading">
                            <a
                                className="collapsed w-100 d-inline-flex flex-wrap justify-content-center"
                                role="button"
                                data-toggle="collapse"
                                data-parent="#accordion"
                                href={`#collapse-${idx}`}
                                aria-expanded="false"
                                aria-controls={`collapse-${idx}`}
                            >
                                <span className="mr-auto">
                                    {this.props.question}
                                </span>
                                <i className="fas fa-chevron-down mt-1 question__icon"></i>
                            </a>
                        </div>
                    </div>
                    <div
                        className="panel-collapse collapse in decaf-question__content"
                        id={`collapse-${idx}`}
                        role="tabpanel"
                        aria-labelledby={`heading-${idx}`}
                    >
                        <div className="panel-body">
                            <Row>
                                <Col lg={8} xs={6} className="panel-answer">
                                    <p>{this.props.answer}</p>
                                </Col>
                                <Col lg={4} xs={6}>
                                    <img
                                        src={this.props.img}
                                        alt="sticker"
                                        width="100%"
                                    ></img>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FaqItem;
