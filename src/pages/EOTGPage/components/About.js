import React, {Component} from 'react';

class About extends React.Component {

    render() {
        return (
            <section className="w-100 eotg-about d-flex flex-column  align-items-center justify-content-center" id="about">
            
                <div className="container">
                    <div className="row text-center">
                        <h1 className="text-center w-100">About Engineers on the Green</h1>

                        <p className="mt-5">
                            Engineers on the Green is the best event ever!
                        </p>
                        
                    </div>
                </div>
            </section>
        )
    }
}

export default About;