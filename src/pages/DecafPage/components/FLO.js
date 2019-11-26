import React, {Component} from 'react';

class FLO extends Component {

    render() {
        return (
            <div className="decaf-flo" id="flo">
                <div className="decaf-faq__head text-white">
                    FLO - Early Access Events
                </div>
                <div className="decaf-faq__head-sub w-75 p-3 mx-auto text-white ">
                    F.L.O - Early Access events let you into Decaf an hour earlier allowing you to get the first crack at speaking with representatives from every company attending. 
                </div>
                <div className="container events__container">
                    <div className="row justify-content-center flex-row events__cards">
                        <div className="col-md events__card">
                            <a href="https://www.facebook.com/events/2774240862607284/" target="_blank">
                                <img src="/decaf2020/flo-aiche-ispe-0.svg" className="w-100 h-100"/>
                            </a>
                        </div>
                        <div className="col-md events__card">
                            <a href="https://www.facebook.com/events/2493851977558282/" target="_blank">
                                <img src="/decaf2020/flo-cses-ieee-1.svg" className="w-100 h-100"/>
                            </a>
                        </div>
                        <div className="col-md events__card">
                            <a href="https://www.facebook.com/events/303170183899680/" target="_blank">
                                <img src="/decaf2020/flo-swe-eceusc-2.svg" className="w-100 h-100"/>
                            </a>
                        </div>
                        <div className="col-md events__card">
                            <a href="https://www.facebook.com/events/465278830787035/" target="_blank">
                                <img src="/decaf2020/flo-tbp-tt-3.svg" className="w-100 h-100"/>
                            </a>
                        </div>
                        <div className="col-md events__card">
                            <a href="https://www.facebook.com/events/272593493694400/" target="_blank">
                                <img src="/decaf2020/flo-acm-ds3-4.svg" className="w-100 h-100"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FLO;