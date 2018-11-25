import React from 'react';

class Sponsors extends React.Component {

    render() {
        return (
            <div className="decaf-sponsors">
                <div className="container-fluid h-100">
                    <div className="row h-100">
                        <div className="col-md-4 col-sm-0 decaf-sponsors__left h-100">
                            <img className="w-100" src="/decaf-sponsors-left.svg"/>
                        </div>
                        <div className="col-md-4 decaf-sponsors__content col-sm-12">
                            <div className="text-center mt-5 decaf-sponsors__content-head-sm">
                                Thank you to our
                            </div>
                            <div className="text-center decaf-sponsors__content-head">
                                Corporate Sponsors
                            </div>
                        </div>
                        <div className="col-md-4 decaf-sponsors__right h-100 col-sm-0">
                            <img className="w-100" src="/decaf-sponsors-right.svg"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sponsors;