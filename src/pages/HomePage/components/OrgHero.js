import React from 'react';
import $ from 'jquery';

class OrgHero extends React.Component {

    componentDidMount() {
        $('#calendar').fullCalendar({
            googleCalendarApiKey: 'AIzaSyBFA-QZSbpnCJ_qcC82PHtlv_qaltzybr8',
            header: {
              left: 'prev,next today',
              center: 'title',
              right: 'month,listWeek'
            },
            events: {
              googleCalendarId: 'tesc.ucsd.edu_l62l0g9gertfd7rel7ksgrgq6k@group.calendar.google.com'
            },
            eventClick: function(event) {
              // opens events in a popup window
              window.open(event.url, '_blank', 'width=700,height=600');
              return false;
            },
            defaultView: 'listWeek'  
        });
    }

    render() {
        return (
            <section className="hero h-100">
                <div className="container-fluid w-100 p-0 h-100 ml-0">
                <div className="row h-100 hero__row w-100 mx-0">
                    <div className="col-md-6 d-flex mb-4">
                    <div className="align-self-start calendar">
                        <div className="hero__copy-orgs">
                        Upcoming Events & Deadlines
                        </div>
                        <div id="calendar" />
                    </div>
                    </div>
                    <div className="col-md-6">
                        <img className="hero__graphic img-fluid" src="/hero.png"/>
                    </div>
                </div>
                </div>
            </section>
        );
    }
}

export default OrgHero;