import React from 'react';
import logo from '../../../data/decaf/SponsorLogos/SeismicLogo.svg'

function Sponsors() {
    return (
        <section className="sponsors" id="sponsors">
            <div className="text-center join__header pt-5">Very Special Thanks to These Sponsors</div>
            <div className="sponsor__container">
                <div className="margin-bottom 6rem">
                    <div className="col-md text-center">
                    <img
                        className="align-self-center justify-self-center"
                        style={{ maxHeight: '8rem', width: 'auto', maxWidth: '100%', marginBottom: '8rem', marginTop: '3rem' }}
                        src={logo}
                        alt="logo"
                    />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Sponsors;