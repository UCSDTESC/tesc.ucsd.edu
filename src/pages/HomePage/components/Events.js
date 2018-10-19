import React from 'react';

class Hero extends React.Component {

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
                    {/*<div class="col-md events__card">
                        SD Hacks
                    </div>
                    </div>*/}
                    <div className="events__none">
                    Nothing Yet, Stay Tuned For More
                    </div>
                </div>
                </div>
            </section>
        );
    }
}

export default Hero;