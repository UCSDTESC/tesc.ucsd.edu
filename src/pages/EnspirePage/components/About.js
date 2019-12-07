import React, {Component} from 'react';
import Nav from './Nav';

class About extends Component {

    render() {
        return (
            <section className="w-100 enspire-about d-flex flex-column  align-items-center justify-content-center" id="about">
                <div className="container">
                    <div className="enspire-about__head">
                        <b>About Enspire</b>
                    </div>
                    <div className="row text-center">
                        <p>
                            Enspire is UC San Diego’s Triton Engineering Student Council (TESC) annual outreach event for high school students in the Greater San Diego Area. Enspire seeks to provide engaging and informational workshops that will encourage students to pursue a path in college education. Enspire’s goal is to give students the opportunity to see themselves going to college and becoming a part of the STEM community, hopefully realizing that they too can succeed in these challenging fields.
                        </p>
                        <p>
                            To achieve this goal, this year Enspire will be hosting informational sessions by UC San Diego’s Financial Aid office to inform students about the many ways to make college more affordable. In addition, a panel by members of UC San Diego’s diversity organizations will show how students of many different backgrounds can thrive in college. Finally, we have several activities planned by the member organizations of the Triton Engineering Student Council that seek to engage students while introducing concepts taught in UC San Diego’s introductory engineering courses.
                        </p>
                    </div>
                </div>
            </section>
        )
    }
}

export default About;