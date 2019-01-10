import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const Attending = (props) => {

    return (
        <div className="decaf-companies" id="about">
            <div className="decaf-companies__head">
            Attending Companies
            </div>
            <div className="my-5 text-center decaf-company__body">
                <Link to="/decaf/attending"> Click Here </Link> to see companies attending Decaf 2019!
            </div>
        </div>
    )
}

export default Attending;