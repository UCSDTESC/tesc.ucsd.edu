import React from 'react';

class About extends React.Component {

    render() {
        return (
            <section className="w-100 eotg-about d-flex flex-column align-items-center justify-content-center" id="abouteotg">
            
                <div className="container">
                    <div className="row text-center">
                        <h1 className="text-center w-100">About Engineers on the Green</h1>
                        <p className="mt-5">
                            Engineers on the Green is traditionally an engineering org fair where students can network with the various engineering orgs on campus. Although this event typically takes place in person, TESC has organized this online event to provide the opportunity for org involvement.
                        </p>
                        <p>
                            This website displays information about the attending orgs, and the Discord server is a platform for communication between orgs and students.
                        </p>
                    </div>
                </div>
                
            </section>
        )
    }
}

export default About;