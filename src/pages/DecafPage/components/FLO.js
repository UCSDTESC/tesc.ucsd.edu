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
                            <a href="https://www.facebook.com/events/2305606929674201/" target="_blank">
                                <img src="/flo-1.svg" className="w-100 h-100"/>
                            </a>
                        </div>
                        <div className="col-md events__card">
                            <a href="https://www.facebook.com/events/545829875915573/" target="_blank">
                                <img src="/flo-3.svg" className="w-100 h-100"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FLO;