import React from 'react';
import events from '../../../data/CurrentEvents';
import { Link } from 'react-router-dom';

function Event(props) {
    let withWrapper = null;
    if (props.isInternalLink) {
        withWrapper = (jsx) => {
            return <Link to={props.link}>{jsx}</Link>;
        };
    } else {
        withWrapper = (jsx) => {
            return (
                <a href={props.link} target="_blank" rel="noopener noreferrer">
                    {jsx}
                </a>
            );
        };
    }

    return (
        <div className="col-md events__card">
            {withWrapper(
                <img className="w-100 h-100" src={props.img} alt="" />
            )}
        </div>
    );
}

class Events extends React.Component {
    renderCurrEvents() {
        let currEvents = events.filter(
            ({ date }) => Date.now() < new Date(date)
        );

        if (currEvents.length === 0) {
            return (
                <div className="events__none text-center">
                    Nothing Yet, Stay Tuned For More
                </div>
            );
        }
        return currEvents.map((c, i) => <Event {...c} key={i} />);
    }

    renderPastEvents() {
        let pastEvents = events.filter(
            ({ date }) => Date.now() > new Date(date)
        );

        if (pastEvents.length === 0) {
            return (
                <div className="events__none text-center">
                    Nothing Yet, Stay Tuned For More
                </div>
            );
        }

        // limit number of past events to max 5
        return pastEvents.slice(0, 5).map((c, i) => <Event {...c} key={i} />);
    }

    render() {
        return (
            <section className="events mb-5" id="events">
                <div className="text-center events__red">What's Happening?</div>
                <div className="text-center events__header">
                    Upcoming Events
                </div>
                <div className="container events__container">
                    <div className="row justify-content-center flex-row events__section events__cards">
                        {this.renderCurrEvents()}
                    </div>
                    <div className="text-center events__header">
                        Past Events
                    </div>
                    <div className="row justify-content-center flex-row events__section events__cards">
                        {this.renderPastEvents()}
                    </div>
                </div>
            </section>
        );
    }
}

export default Events;
