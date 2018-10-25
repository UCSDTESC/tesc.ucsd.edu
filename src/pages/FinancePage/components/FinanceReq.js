import React from 'react';

class FinanceReq extends React.Component {


    render() {
        const {data} = this.props;

        return (
            <div className="req__item">
                <div className="d-flex" >
                    <div className="req__item-header ">
                        {data.title}
                    </div>
                </div>
                <div className="req__item-content px-5 py-3">
                    <ol>
                        {data.content.map(c => {
                            return (
                                <li>
                                    {c}
                                </li>
                            );
                        })}
                    </ol>
                </div>
            </div>
        );
    }
}

export default FinanceReq;