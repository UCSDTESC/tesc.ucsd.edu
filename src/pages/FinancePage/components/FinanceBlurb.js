import React from 'react';

class FinanceBlurb extends React.Component {


    showRequirements() {
        
    }

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
                        {this.showRequirements()}
                    </div>
                </section>  
            </section>
        );
    }
}

export default FinanceBlurb;