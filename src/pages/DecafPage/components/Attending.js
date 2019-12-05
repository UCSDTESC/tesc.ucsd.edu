import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const Attending = (props) => {

    return (
        <div className="decaf-companies" id="attending">
            <div className="decaf-companies__head">
                Attending Companies
            </div>
            <div className="my-5 text-center decaf-company__body">
                <Link to="/decaf/attending"> Click Here</Link> to see companies attending Decaf 2020!
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