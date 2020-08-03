import React, {Component} from 'react';

class About extends React.Component {

    render() {
        return (
            <section className="w-100 eotg-about d-flex flex-column align-items-center justify-content-center" id="abouteotg">
            
                <div className="container">
                    <div className="row text-center">
                        <h1 className="text-center w-100">About Engineers on the Green</h1>

                        <p className="mt-5">
                            Engineers on the Green is a great opportunity to learn more about the different engineering organizations on campus and how you can get involved. Check out the Facebook event page <a href="https://www.facebook.com/events/638144703462548/" target="_blank" rel="noopener noreferrer">here</a>.
                        </p>
                        
                    </div>
                </div>
                
            </section>
        )
    }
}

export default About;