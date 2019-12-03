import React from 'react';
import Nav from './Nav';
import {ReactComponent as DecafHero} from '../svg/decaf-hero.svg';

import {
    Elastic,
    TimelineMax,
    TweenMax,
    Linear,
    TimelineLite
} from 'gsap';

import {Link} from 'react-router-dom'

const PLAY_ANIM = true
class Hero extends React.Component {

    renderCTA() {
        const {isCompany} = this.props;

        if (isCompany) {
            return (
                <a className="btn decaf-hero__cta decaf-green-text" target="_blank" href="https://events.eventzilla.net/e/decaf-2020-2138755381" id="hero-cta">
                    Register your company 💼
                </a>
            );
        }
        else {
            return (
                <>
                    {/*<a className="btn decaf-hero__cta mr-3" target="_blank" href="https://tesc.typeform.com/to/AvDtNV" id="hero-cta">
                        <span>Submit Resume 📝</span> 
                    </a>
                    <Link className="btn decaf-hero__cta" to="/decaf#attending" id="hero-cta">
                        <span> Attending Companies</span>
                    </Link>*/}
                </>
            )
        }
    }

    renderLogo() {
        const {isCompany} = this.props;

        if (isCompany) {
            return (
                <img className="decaf-hero__logo" src="/decaf2020/decaf-logo-companies.svg"/>
            );
        } else {
            return (
                <img className="decaf-hero__logo" src="/decaf2020/decaf-logo-students.svg"/>
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
                    elem: "#flask",
                    duration: 0.5,
                    degree: 6
                },
                BeakerBubbles: {
                    elem: "#bubbles circle",
                    duration: 4,
                    yStart: 0,
                    yEnd: -30
                },
                Spanner: {
                    elem: "#XMLID_6_ g",
                    duration: 1,
                    degree: 360
                },
                Window: {
                    elem: "#Layer_23"
                },
                Beams: {
                    elem: '#HERO rect'
                },
                Coffee: {
                    elem: '#coffee g'
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
            
            new TimelineMax({repeat: -1})
                .fromTo(Anims.BeakerBubbles.elem, Anims.BeakerBubbles.duration, {y: Anims.BeakerBubbles.yStart}, {y: Anims.BeakerBubbles.yEnd, ease:Linear.easeInOut, opacity: 0})

            //Spanner
            TweenMax
                .to(Anims.Spanner.elem, Anims.Spanner.duration, {rotation: Anims.Spanner.degree, delay: 1, ease:Linear.easeInOut, repeat: -1, repeatDelay: 2, transformOrigin: "50% 50%"})

            //Window
            new TimelineLite().staggerFrom(Anims.Window.elem, 1, {
				repeatDelay: 1, 
				y: "-100%", 
				opacity: 0, 
                ease: Elastic.easeOut.config(1, 0.5),
                repeat: -1
            }, 0.5)
            
            //Background
            new TimelineLite().staggerFrom(Anims.Beams.elem, 0.1, {
				y: "-100%", 
				opacity: 0, 
                ease: Elastic.easeOut.config(1, 0.5),
            }, 0.1)
            
            //Coffee
            /*new TimelineLite().staggerFrom(Anims.Coffee.elem, 0.03, {
				y: "-100%", 
				opacity: 0, 
                ease: Elastic.easeOut.config(1, 0.5),
            }, 0.03)*/
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
                                    {this.renderLogo()}
                                    <div className="decaf-hero__title pb-2">
                                       <b> Disciplines of Engineering Career Fair </b>
                                    </div>
                                    <div className="decaf-hero__detail">
                                        PC Ballrooms, UC San Diego
                                    </div>
                                    <div className="decaf-hero__detail">
                                        January 16, 2020 // 8AM - 2PM
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