import React from 'react';
import {ReactComponent as AboutGraphic} from '../svg/decaf-about.svg';

function CompanyCopy(props) {
    return (
        <>
            <p>
                The <b>Disciplines of Engineering Career Fair</b>, or <b>Decaf</b>, is an annual student-run career fair.
            </p>

            <p>
                Attending <b>Decaf</b> will provide you with the opportunity to interact and engage with UC San Diego's talented engineering students regarding career options, internships and permanent or summer employment opportunities.
            </p>
        </>
    )
}

function StudentCopy(props) {
    return (
        <>
            <p>
                The <b>Disciplines of Engineering Career Fair</b>, or <b>Decaf</b>, is an annual student-run career fair.
            </p>

            <p>
                Attending <b>Decaf</b> will provide you with the opportunity to meet and connect with representatives from some of the top companies in engineering.
            </p>
        </>
    )
}

class About extends React.Component {

    render() {
        return (
            <div className="decaf-about" id="about">
                <div className="decaf-about__head">
                    What's <b>Decaf</b> ☕?
                </div>

                <div className="decaf-about__container text-center">
                    {this.props.isCompany ? <CompanyCopy /> : <StudentCopy />}
                </div>

                <AboutGraphic className="d-block mx-auto py-5 decaf-about__graphic"/>
            </div>
        )
    }
}

export default About;