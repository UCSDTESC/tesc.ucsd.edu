import React from 'react';

class FinanceReq extends React.Component {

    render() {
        return (
            <div className="req__item">
                <div className="d-flex" >
                    <div className="req__item-header ">
                        Organization Eligibility to Apply for TESC Funds
                    </div>
                </div>
                <div className="req__item-content px-5">
                    <ol>
                        <li>
                            Must be an undergraduate student engineering organization within the Jacobs School of Engineering. 
                        </li>
                        <li>
                            Must be registered as an active student organization with the Center for Student Involvement (CSI). 
                        </li>
                    </ol>
                </div>
            </div>
        );
    }
}

export default FinanceReq;