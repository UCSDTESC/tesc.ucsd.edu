import React from 'react';
import Nav from './Nav';
import {ReactComponent as DecafHero} from '../../../svg/decaf-hero.svg';
import {
    Elastic,
    TimelineMax,
    TweenMax,
    Linear,
    TimelineLite
} from 'gsap';

const PLAY_ANIM = true
class Hero extends React.Component {

    renderCTA() {
        const {isCompany} = this.props;

        if (isCompany) {
            return (
                <a className="btn decaf-hero__cta" target="_blank" href="http://tinyurl.com/decaf2019">
                    Register your company 💼
                </a>
            );
        }
        else {
            return (
                <a className="btn decaf-hero__cta" target="_blank" href="http://tinyurl.com/decaf2019">
                    Submit Resume Here
                </a>
            );
        }
    }

    componentDidMount() {

        if (PLAY_ANIM) {
            const Anims = {
                Gear: {
                    elem: "#XMLID_5_ g",
                    yStart: 6,
                    yEnd: -5,
                    duration: 2,
                    rotationDuration: 4
                },
                Beaker: {
                    elem: "#XMLID_12_ g",
                    duration: 0.5,
                    degree: 6
                },
                BeakerBubbles: {
                    elem: "#XMLID_12_ circle",
                    duration: 100
                },
                Spanner: {
                    elem: "#XMLID_6_ g",
                    duration: 1,
                    degree: 360
                },
                Window: {
                    elem: ".num"
                },
                Beams: {
                    elem: '#HERO rect'
                }
            }

            //Gear
            new TimelineMax({repeat: -1, yoyo:true})
                .fromTo(Anims.Gear.elem, Anims.Gear.duration, {y: Anims.Gear.yStart}, {y: Anims.Gear.yEnd, ease:Linear.easeInOut})
                .fromTo(Anims.Gear.elem, Anims.Gear.duration, {y: Anims.Gear.yEnd}, {y: Anims.Gear.yStart, ease:Linear.easeInOut})
        
            TweenMax.to(Anims.Gear.elem, Anims.Gear.rotationDuration, {rotation:360, ease:Linear.easeNone, repeat: -1, transformOrigin: "50% 50%"});

            //Beaker
            TweenMax
                .to(Anims.Beaker.elem, Anims.Beaker.duration, {rotation: Anims.Beaker.degree, ease:Linear.easeNone, repeat: -1, yoyo: true, transformOrigin: "100% 50%"})
            
            //Spanner
            TweenMax
                .to(Anims.Spanner.elem, Anims.Spanner.duration, {rotation: Anims.Spanner.degree, delay: 1, ease:Linear.easeInOut, repeat: -1, repeatDelay: 2, transformOrigin: "50% 50%"})

            new TimelineLite().staggerFrom(Anims.Window.elem, 1, {
				repeatDelay: 1, 
				y: "-100%", 
				opacity: 0, 
                ease: Elastic.easeOut.config(1, 0.5),
                repeat: -1
            }, 0.5)
            
            new TimelineLite().staggerFrom(Anims.Beams.elem, 0.1, {
				y: "-100%", 
				opacity: 0, 
                ease: Elastic.easeOut.config(1, 0.5),
			}, 0.1)
        }
    }

    render() {
        const bgColor = this.props.isCompany ? 'decaf-hero__green' : '';
        return (
            <div className={`w-100 decaf-hero ${bgColor}`}>
                <Nav isCompany={this.props.isCompany}/>
                <div className="decaf-hero__container">
                    <div className="container-fluid h-100 px-0 mx-0">
                        <div className="row h-100">
                            <div className="col-md-6 d-flex align-items-center decaf-hero__left">
                                <div className="w-100">
                                    <img className="decaf-hero__logo" src="/decaf-logo.svg"/>
                                    <div className="decaf-hero__title pb-2">
                                       <b> Disciplines in Engineering Career Fair </b>
                                    </div>
                                    <div className="decaf-hero__detail">
                                        PC Ballrooms, UC San Diego
                                    </div>
                                    <div className="decaf-hero__detail">
                                        January 17, 2019 // 10AM - 3PM
                                    </div>
                                    {this.renderCTA()}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <DecafHero className="decaf-hero__graphic" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Hero;