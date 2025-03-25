import React, { useState, useEffect, useRef } from 'react';
import Airtable from '../../../data/airtableConnection';
import { Link } from 'react-router-dom';
import moment from 'moment';

// functional comp for an Event card with a link to its image
function Event(props) {
    let withWrapper = null;
    if (props.isInternalLink) {
        withWrapper = (jsx) => {
            return <Link to={props['Link']}>{jsx}</Link>;
        };
    } else {
        withWrapper = (jsx) => {
            return (
                <a
                    href={props['Link']}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {jsx}
                </a>
            );
        };
    }
    return (
        <div className="col-md-3 align-self-center d-flex flex-column p-3 events__card">
            {/* attach link to image and print name/dates */}
            {props['Event Name']}
            {withWrapper(
                <img
                    className="align-self-center justify-self-center"
                    alt={props['Event Name']}
                    src={props['Image'] !== undefined && props['Image'][0].url}
                    style={{
                        maxHeight: '8rem',
                        width: 'auto',
                        maxWidth: '100%',
                    }}
                />
            )}

            {moment(props['Start Date']).format('MMMM Do YYYY')}
        </div>
    );
}

// functional comp for all events
function Events() {
    // control record as a state
    const [records, setRecords] = useState([]);
    const base = useRef(Airtable.base('appFhSHX6s9v3csVC'));

    // filter through validated events and sort in chronological order
    useEffect(() => {
        base.current('Council Org Events')
            .select()
            .all()
            .then((records) => records.map((r) => r._rawJson.fields))
            .then((records) => records.filter((r) => r.Validated))
            .then((records) =>
                records.sort((a, b) => {
                    return new Date(a['Start Date']) - new Date(b['End Date']);
                })
            )
            .then((records) => setRecords(records));
    }, []);

    // render current events by creating event cards
    function renderCurrEvents() {
        let currEvents = records;
        if (currEvents.length === 0) {
            return (
                <div className="events__none text-center">
                    Nothing Yet, Stay Tuned For More
                </div>
            );
        }
        currEvents = currEvents
            .filter((event) => {
                return new Date(event['Start Date']) - new Date() > 0;
            })
            .sort((event, event2) => {
                return (
                    new Date(event['Start Date']) -
                    new Date(event2['Start Date'])
                );
            });
        return currEvents.map((c, i) => <Event {...c} key={i} />);
    }
    // render past events by creating event cards
    function renderPastEvents() {
        let pastEvents = records;
        if (pastEvents.length === 0) {
            return (
                <div className="events__none text-center">
                    Nothing Yet, Stay Tuned For More
                </div>
            );
        }
        pastEvents = pastEvents.filter((event) => {
            return new Date(event['Start Date']) - new Date() < 0;
        });
        // limit number of past events to max 5
        return pastEvents.slice(0, 5).map((c, i) => <Event {...c} key={i} />);
    }
    return (
        <section className="events mb-5" id="events">
            <div className="text-center events__red">What's Happening?</div>
            <div className="text-center events__header">Upcoming Events</div>
            <div className="container events__container">
                <div className="row justify-content-center flex-row events__section events__cards">
                    {renderCurrEvents()}
                </div>
                <div className="text-center events__header">Past Events</div>
                <div className="row justify-content-center flex-row events__section events__cards">
                    {renderPastEvents()}
                </div>
            </div>
        </section>
    );
}

export default Events;
