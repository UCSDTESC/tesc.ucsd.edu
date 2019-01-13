import React, {Component} from 'react';
import Nav from './Nav';

class About extends Component {

    render() {
        return (
            <section className="w-100 enspire-about d-flex flex-column  align-items-center justify-content-center" id="about">
            
                <div className="container">
                    <div className="row text-center">
                        <h1 className="text-center w-100">About ENSPIRE</h1>

                        <p className="mt-5">
                            Enspire is an annual outreach event that the Triton Engineering Student Council (TESC) holds for local underprivileged middle school students, and this will be our 12th year hosting the event.
                        </p>
                        <p>
                            We bring them to UCSD for a day of engineering including student orgs demonstrating some of the cool projects that they work on and activities to engage students in engineering. The purpose of the program is to get students interested in engineering who might not have access to the resources at their school or in their community to do so otherwise.
                        </p>
                    </div>
                </div>
            </section>
        )
    }
}

export default About;