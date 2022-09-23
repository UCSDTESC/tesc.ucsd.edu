import React from 'react';

class About extends React.Component {
    render() {
        return (
            <section
                className="w-100 eotg-about d-flex flex-column align-items-center justify-content-center"
                id="abouteotg"
            >
                <div className="container">
                    <div className="row text-center">
                        <h1 className="floating text-center w-100">
                            About Engineers on the Green
                        </h1>
                        <p className="mt-5">
                            Engineers on the Green is an annual event held in Fall and Winter quarter 
                            where students can network with the various engineering orgs on campus. 
                            This event will take place in person at the Warren Bear Courtyard 
                            on September 29th, 2022, from 11 AM to 2 PM.
                        </p>
                        
                    </div>
                </div>
            </section>
        );
    }
}

export default About;
