import React from 'react';
import Nav from './Nav';

class Hero extends React.Component {

    render() {
        return (
            <div className="w-100 decaf-hero">
                <Nav isCompany={this.props.isCompany}/>
                <div className="decaf-hero__container">
                    <div className="container-fluid h-100 px-0 mx-0">
                        <div className="row h-100">
                            <div className="col-md-6 d-flex align-items-center decaf-hero__left">
                                <div className="w-100">
                                    <img className="decaf-hero__logo" src="/decaf-logo.svg"/>
                                    <div className="decaf-hero__title pb-2">
                                        Disciplines in Engineering Career Fair 
                                    </div>
                                    <div className="decaf-hero__detail">
                                        PC Ballrooms, UC San Diego
                                    </div>
                                    <div className="decaf-hero__detail">
                                        January 18, 2018 // 10AM - 3PM
                                    </div>
                                    <a className="btn decaf-hero__cta">
                                        Register your company 💼
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <img className="decaf-hero__graphic" src="/decaf-hero.svg"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Hero;