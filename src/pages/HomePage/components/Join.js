import React from 'react';

function Hero() {
    return (
        <section className="join" id="join">
            <div className="text-center join__header pt-5">Join TESC</div>
            <div className="join__container">
                <div className="text-center"></div>
                <div className="join__btns row">
                    <div className="col-md text-center">
                        <a
                            className="btn join__cta"
                            href="https://tesc.typeform.com/to/bAqdgm"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            TESC Committees
                        </a>
                    </div>
                    <div className="col-md text-center">
                        <a
                            className="btn join__cta"
                            href="https://tesc.typeform.com/to/GeFYtC"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Council Organization
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
