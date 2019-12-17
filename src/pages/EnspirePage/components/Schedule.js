import React, {Component} from 'react';

class Schedule extends Component {

    render() {
        return (
            <section className="w-100 enspire-about d-flex flex-column align-items-center justify-content-center" id="schedule">
                <div className="container">
                    <div className="enspire-schedule__head">
                        <b>Schedule</b>
                    </div>
                    <div className="row justify-content-center text-center">
                        <p>
                            8:30 AM: Check In<br/>
                            9:15 AM: Kickoff<br/>
                            9:45 AM: Informational Talks<br/>
                            10:30 AM: First Workshop<br/>
                            12 PM: Lunch<br/>
                            12:45 PM: Second Workshop<br/>
                            2:15 PM: Closing Remarks/Dismissal
                        </p>
                    </div>
                </div>
            </section>
        )
    }
}

export default Schedule;