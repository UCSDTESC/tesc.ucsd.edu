import React, {Component} from 'react';

class About extends React.Component {

    render() {
        return (
            <section className="w-100 eotg-about d-flex flex-column  align-items-center justify-content-center" id="about">
            
                <div className="container">
                    <div className="row text-center">
                        <h1 className="text-center w-100">About Engineers on the Green</h1>

                        <p className="mt-5">
                        Enginners on the Green is a great opportunity to learn more about the different engineering organizations on campus and how you can get involved.
                        </p>
                        
                    </div>
                </div>
            </section>
        )
    }
}

export default About;