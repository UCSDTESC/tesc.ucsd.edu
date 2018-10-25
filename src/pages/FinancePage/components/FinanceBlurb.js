import React from 'react';
import FinanceReq from './FinanceReq';
import reqs from '../../../data/FinanceReqs';

class FinanceBlurb extends React.Component {


    showRequirements() {
        return reqs.map(r => {
            return <FinanceReq data={r}/>
        })
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