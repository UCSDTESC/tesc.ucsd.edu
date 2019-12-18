import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {NavLink, withRouter} from 'react-router-dom';

const Attending = (props) => {

    return (
        <div className="decaf-companies" id="attending">
            <div className="decaf-companies__head">
                Attending Companies
            </div>
            <div className="my-5 text-center decaf-company__body">
                {/*<Link to="/decaf/attending"> Click Here</Link>*/}
                <a className="decaf-companies__button" href="/decaf/attending">Click Here</a><br/>
                {/*<a className="btn decaf-hero__cta decaf-green-text" target="_blank" href="https://events.eventzilla.net/e/decaf-2020-2138755381" id="hero-cta">
                    Register your company 💼
                </a>*/}
                to see companies attending Decaf 2020!
            </div>

            {/*<div className="decaf-companies__head">
                Room Map
            </div>

            <div className="my-5">
                <a href="/decaf2019_map-students.pdf" target="_blank" className="w-25 d-block mx-auto decaf-companies__map">
                    <img src="/map-preview.gif" className="img-fluid" />
                    <p>
                        Download Map
                    </p>
                </a>
            </div>*/}
        </div>
    )
}

export default Attending;