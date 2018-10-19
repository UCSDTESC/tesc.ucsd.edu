import React from 'react';
import $ from 'jquery'; 

class OrgHero extends React.Component {

    componentDidMount() {
    }

    render() {
        return (
            <section className="hero h-100">
                <div className="container-fluid w-100 p-0 h-100 ml-0">
                <div className="row h-100 hero__row w-100 mx-0">
                    <div className="col-md-6 d-flex">
                    <div className="align-self-center calendar">
                        <div className="hero__copy-orgs">
                        Upcoming Events & Deadlines
                        </div>
                        <div id="calendar" />
                    </div>
                    </div>
                    <div className="col-md-6 p-0 d-flex">
                    <img src="/hero.svg" className="hero__graphic w-100 align-self-center" />
                    </div>
                </div>
                </div>
            </section>
        );
    }
}

export default OrgHero;