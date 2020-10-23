import React from 'react';
import { companies, partners } from '../../../data/decaf/Sponsor';

function Sponsor(props) {
    return (
        <a
            className="col-md-4 decaf-sponsor"
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
        >
            <img
                src={props.img}
                className="decaf-sponsor__img"
                alt={props.name}
            />
        </a>
    );
}

function Partner(props) {
    return (
        <a
            className={`col-md-6 decaf-sponsor`}
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
        >
            <img
                src={props.img}
                className={`decaf-sponsor__img ${
                    props.className ? props.className : ''
                }`}
                alt={props.name}
            />
        </a>
    );
}

class Sponsors extends React.Component {
    renderCompanies() {
        return companies.map((c) => <Sponsor {...c} />);
    }

    renderPartners() {
        return partners.map((c) => <Partner {...c} />);
    }

    render() {
        return (
            <div className="decaf-sponsors">
                <div className="container-fluid h-100">
                    <div className="row h-100">
                        <div className="col-md-2 decaf-sponsors__left"></div>
                        <div className="col-md-8 decaf-sponsors__content col-sm-12">
                            <div className="text-center decaf-sponsors__content-head">
                                Sponsors
                            </div>
                            <div className="text-center mt-5 decaf-sponsors__content-head-sm">
                                Thank you to all of our sponsors! Here are just
                                a few:
                            </div>
                            <div className="row mt-5 justify-content-center align-items-center">
                                {this.renderPartners()}
                            </div>
                            <div className="row mt-5 justify-content-center align-items-center">
                                {this.renderCompanies()}
                            </div>
                        </div>
                        <div className="col-md-2 decaf-sponsors__right"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sponsors;
