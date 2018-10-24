import React from 'react';

class FinanceBlurb extends React.Component {

    render() {
        return (
            <section className="about">
                <div className="text-center about__header-red">
                    Finance
                </div>
                <div className="text-center about__header mb-5">
                    TESC Council Funding Requirements
                </div>
                <section className="req pt-1">
                    <div className="container">
                        <div className="row">
                            <div className="req__item">
                                <div className="req__item-header">
                                    Organization Eligibility to Apply for TESC Funds
                                </div>
                            </div>
                        </div>
                    </div>
                </section>  
            </section>
        );
    }
}

export default FinanceBlurb;