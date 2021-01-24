import React from 'react';

class FinanceReq extends React.Component {
    render() {
        const { data } = this.props;
        if (
            data.title === 'Funding Rules' ||
            data.title === 'What’s Required'
        ) {
            return (
                <div className="req__item">
                    <div className="d-flex">
                        <div className="req__item-header ">{data.title}</div>
                    </div>
                    <div className="req__item-content px-5 py-3">
                        <ul>
                            {data.content.map((c, i) => {
                                return <li key={i}>{c}</li>;
                            })}
                        </ul>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="req__item">
                    <div className="d-flex">
                        <div className="req__item-header ">{data.title}</div>
                    </div>
                    <div className="req__item-content px-5 py-3">
                        <ol>
                            {data.content.map((c, i) => {
                                return <li key={i}>{c}</li>;
                            })}
                        </ol>
                    </div>
                </div>
            );
        }
    }
}

export default FinanceReq;
