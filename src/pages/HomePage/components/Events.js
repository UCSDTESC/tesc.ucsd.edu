import React from 'react';
import currEvents from '../../../data/CurrentEvents';

function Event(props) {
    return (
        <div class="col-md events__card">
            {props.name}
        </div>
    );
}

class Events extends React.Component {

    renderEvents() {
        if (currEvents.length == 0) {
            return (
                <div className="events__none">
                    Nothing Yet, Stay Tuned For More
                </div>
            )
        }
        return currEvents.map(c => <Event {...c} />);

    }

    render() {
        return (
            <section className="events mb-5" id="events">
                <div className="text-center events__red">
                    What's Happening?
                </div>
                <div className="text-center events__header">
                    Upcoming Events
                </div>
                <div className="container events__container">
                <div className="row h-100 justify-content-center flex-row events__cards">
                    {this.renderEvents()}
                </div>
                </div>
            </section>
        );
    }
}

export default Events;