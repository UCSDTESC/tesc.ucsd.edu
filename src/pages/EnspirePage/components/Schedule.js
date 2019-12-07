import React, {Component} from 'react';
import Nav from './Nav';

class Schedule extends Component {

    render() {
        return (
            <section className="w-100 enspire-about d-flex flex-column  align-items-center justify-content-center" id="about">
                <div className="container">
                    <div className="enspire-about__head">
                        <b>Schedule</b>
                    </div>
                    <div className="row justify-content-center text-center">
                        <p>
                            8:30 AM: Check In
                            
                        </p>
                        <p>
                            9:15 AM: Kickoff
                        </p>
                    </div>
                </div>
            </section>
        )
    }
}

export default Schedule;