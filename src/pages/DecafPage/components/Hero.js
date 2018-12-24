import React from 'react';
import Nav from './Nav';

class Hero extends React.Component {

    renderCTA() {
        const {isCompany} = this.props;

        if (isCompany) {
            return (
                <a className="btn decaf-hero__cta" target="_blank" href="http://tinyurl.com/decaf2019">
                    Register your company 💼
                </a>
            );
        }
        else {
            return (
                <a className="btn decaf-hero__cta" target="_blank" href="http://tinyurl.com/decaf2019">
                    Submit Resume Here
                </a>
            );
        }
    }

    render() {
        const bgColor = this.props.isCompany ? 'decaf-hero__green' : '';

        return (
            <div className={`w-100 decaf-hero ${bgColor}`}>
                <Nav isCompany={this.props.isCompany}/>
                <div className="decaf-hero__container">
                    <div className="container-fluid h-100 px-0 mx-0">
                        <div className="row h-100">
                            <div className="col-md-6 d-flex align-items-center decaf-hero__left">
                                <div className="w-100">
                                    <img className="decaf-hero__logo" src="/decaf-logo.svg"/>
                                    <div className="decaf-hero__title pb-2">
                                       <b> Disciplines in Engineering Career Fair </b>
                                    </div>
                                    <div className="decaf-hero__detail">
                                        PC Ballrooms, UC San Diego
                                    </div>
                                    <div className="decaf-hero__detail">
                                        January 17, 2019 // 10AM - 3PM
                                    </div>
                                    {this.renderCTA()}
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