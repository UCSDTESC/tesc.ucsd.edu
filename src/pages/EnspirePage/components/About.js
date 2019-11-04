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
                            Enspire is an annual outreach event that the Triton Engineering Student Council (TESC) holds for local underprivileged students. This will be our 13th year hosting the event. We plan on having 200-250 high school students attend this event.
                        </p>
                        <p>
                            Our event consists of bringing high school students to UCSD for a day of Engineering and Educational activities, including cool projects run by on-campus organizations. The purpose of the program is to give students the opportunity to see themselves going to college and becoming part of the STEM community, realizing that they too can succeed in these challenging fields. In addition, we will have talks by the Society of Women Engineers as well as UCSD representatives to encourage students to really see STEM as a viable career path.
                        </p>
                    </div>
                </div>
            </section>
        )
    }
}

export default About;