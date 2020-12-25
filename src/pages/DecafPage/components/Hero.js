import React from 'react';
import { ReactComponent as DecafHero } from '../svg/decaf20-hero.svg';

import { Link } from 'react-router-dom';

class Hero extends React.Component {
    renderCTA() {
        const { isCompany } = this.props;

        if (isCompany) {
            return (
                <a
                    className="btn decaf-hero__cta decaf-green-text"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://events.eventzilla.net/e/decaf-2020-2138755381"
                    id="hero-cta"
                >
                    Register your company{' '}
                    <span role="img" aria-label="emoji-suitcase">
                        💼
                    </span>
                </a>
            );
        } else {
            return (
                <>
                    <a
                        className="btn decaf-hero__cta mr-3"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://tesc.typeform.com/to/hwNBpM"
                        id="hero-cta"
                    >
                        Submit Resume{' '}
                        <span role="img" aria-label="emoji-note">
                            📝
                        </span>
                    </a>
                    <Link
                        className="btn decaf-hero__cta"
                        to="/decaf/attending"
                        id="hero-cta"
                    >
                        <span> Attending Companies</span>
                    </Link>
                </>
            );
        }
    }

    renderLogo() {
        const { isCompany } = this.props;

        if (isCompany) {
            return (
                <img
                    className="decaf-hero__logo"
                    src="/decaf2020/decaf-logo-companies.svg"
                    alt="Decaf logo companies"
                />
            );
        } else {
            return (
                <img
                    className="decaf-hero__logo"
                    src="/decaf2020/decaf-logo-students.svg"
                    alt="Decaf logo students"
                />
            );
        }
    }

    render() {
        const bgColor = this.props.isCompany ? 'decaf-hero__green' : '';
        return (
            <div className={`w-100 decaf-hero ${bgColor}`}>
                <div className="decaf-hero__container">
                    <div className="container-fluid h-100 px-0 mx-0">
                        <div className="row h-100">
                            <div className="col-md-6 d-flex align-items-center decaf-hero__left">
                                <div className="w-100">
                                    {this.renderLogo()}
                                    <div className="decaf-hero__title pb-2">
                                        <b>
                                            {' '}
                                            Disciplines of Engineering Career
                                            Fair{' '}
                                        </b>
                                    </div>
                                    <div className="decaf-hero__detail">
                                        PC Ballrooms, UC San Diego
                                    </div>
                                    <div className="decaf-hero__detail">
                                        January 16, 2020 // 8AM - 2PM
                                    </div>
                                    {this.renderCTA()}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <DecafHero className="decaf-hero__graphic" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Hero;
