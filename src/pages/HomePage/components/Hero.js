import React from 'react';

class Hero extends React.Component {

    componentDidMount() {
        /*let tl = new TimelineMax();
        tl.staggerFrom('#laptop_text_copy_2 > g > g path', 0.1, {scaleX: 0}, 0.1)
            .from('#XMLID_123_', 1, {scaleY: 0, transformOrigin: "50% 50%", ease: Power2.easeOut});*/
    }

    render() {
        return (
            <section className="hero">
                <div className="container-fluid p-0 h-100 mx-0">
                    <div className="row h-100 hero__row w-100 mx-0">
                        <div className="col-md-6 d-flex">
                            <div className="align-self-center hero__fix">
                            <div className="hero__copy">
                                We empower engineers.
                            </div>
                            <div className="hero__cta">
                                <a className="btn hero__cta-btn text-white" href="http://eepurl.com/gFrQpH" target="_blank"> Subscribe <i className="fa fa-envelope" /> </a>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-6 p-0 d-flex">
                            {/*<div className="hero__graphic w-100">
                                <HeroGraphic className="w-100"/>
                            </div>*/}
                            <img className="hero__graphic img-fluid" src="/hero.png"/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Hero;