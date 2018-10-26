import React from 'react';
import hero from '../../../hero.svg';

class Hero extends React.Component {

    render() {
        return (
            <section className="hero">
                <div className="container-fluid p-0 h-100 mx-0">
                    <div className="row h-100 hero__row w-100 mx-0">
                        <div className="col-md-6 d-flex">
                            <div className="align-self-center hero__fix">
                            <div className="hero__copy">
                                We empower engineers.
                            </div>
                            <div className="hero__cta">
                                <a className="btn hero__cta-btn text-white" href="http://eepurl.com/cEDIcb" target="_blank"> Subscribe <i className="fa fa-envelope" /> </a>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-6 p-0 d-flex">
                            <img src={hero} className="hero__graphic w-100 align-self-center" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Hero;