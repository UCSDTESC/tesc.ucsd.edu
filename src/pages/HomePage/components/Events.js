import React from 'react';
import events from '../../../data/CurrentEvents';
import {Link} from 'react-router-dom';
 
function Event(props) {

    let withWrapper = null
    if (props.isInternalLink) {
        withWrapper = (jsx) => {
            return (
                <Link to={props.link}>
                    {jsx}
                </Link>
            )
        }
    }
    else {
        withWrapper = (jsx) => {
            return (
                <a href={props.link} target="_blank">
                    {jsx}
                </a>
            )
        }
    }

    return withWrapper(
        <div className="col-md events__card">
            <img className="w-100 h-100" src={props.img}/>
        </div>
    );
}

class Events extends React.Component {

    renderEvents() {

        let currEvents = events.filter(({date}) => Date.now() < new Date(date));

        if (currEvents.length == 0) {
            return (
                <div className="events__none">
                    Nothing Yet, Stay Tuned For More
                </div>
            )
        }
        return currEvents.map((c, i) => <Event {...c} key={i} />);

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
                <div className="row justify-content-center flex-row events__cards">
                    {this.renderEvents()}
                </div>
                </div>
            </section>
        );
    }
}

export default Events;