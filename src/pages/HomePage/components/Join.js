import React from 'react';

class Hero extends React.Component {

    render() {
        return (
            <section className="join" id="join">
                <div className="text-center join__header pt-5">
                    Join TESC
                </div>
                <div className="join__container mt-5">
                <div className="text-center">
                </div>
                <div className="join__btns row">
                    <div className="col-md text-center">
                    <a className="btn join__cta" href="https://docs.google.com/forms/d/e/1FAIpQLScNK0mTKbkKciAnptEeCwjLmqlNUALrwHhJb6ABktlvqpF1kA/viewform?usp=sf_link"> TESC Committees</a>
                    </div>
                    <div className="col-md text-center">
                    <a className="btn join__cta" href="https://tesc.typeform.com/to/GeFYtC"> Council Organization</a>
                    </div>
                </div>
                </div>
            </section>
        );
    }
}

export default Hero;