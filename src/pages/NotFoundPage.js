import React from 'react';
import hero from '../svg/hero.svg';

class NotFoundPage extends React.Component {
    render() {
        return (
            <section className="hero">
                <div className="container-fluid p-0 h-100 mx-0">
                    <div className="row h-100 hero__row w-100 mx-0">
                        <div className="col-md-6 d-flex">
                            <div className="align-self-center hero__fix">
                                <div className="hero__copy">
                                    404: Page Not Found
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 p-0 d-flex">
                            <img
                                src={hero}
                                className="hero__graphic w-100 align-self-center"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default NotFoundPage;
