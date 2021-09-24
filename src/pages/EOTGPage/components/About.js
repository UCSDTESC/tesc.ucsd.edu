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
                        <h1 className="text-center w-100">
                            About Engineers on the Green
                        </h1>
                        <p className="mt-5">
                            Engineers on the Green is an annual event held in Fall and Winter quarter where 
                            students can network with the various engineering orgs on campus. This event will 
                            take place online via <a target="_blank" className="text-center w-100" href="https://discord.gg/p43mZkva">
                            Discord</a> on September 29th and September 30th, from 12pm - 5pm 
                            each day.
                        </p>
                        <p>
                            This website displays information including: Attending 
                            Orgs and FAQ’s about the event.                            
                        </p>
                        
                    </div>
                </div>
            </section>
        );
    }
}

export default About;
