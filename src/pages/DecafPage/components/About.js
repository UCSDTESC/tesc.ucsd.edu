import React from 'react';

class About extends React.Component {

    render() {
        return (
            <div className="decaf-about">
                <div className="decaf-about__head">
                    What's <b>Decaf</b> ☕?
                </div>

                <div className="decaf-about__container">
                    <p>
                        <b> Decaf, </b> or <b>Disciplines of Engineering Career Fair, </b> is an annual student-run career fair.
                    </p>

                    <p>
                        <b>Decaf</b> provides company representatives with a unique opportunity to interact and engage with UC San Diego's talented engineering students regarding career options, internships and permanent or summer employment opportunities.
                    </p>
                </div>

                <img className="d-block mx-auto py-5 decaf-about__graphic" src="/decaf-about.svg"/>
            </div>
        )
    }
}

export default About;