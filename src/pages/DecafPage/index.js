import React from 'react';

import TopAlert from './components/TopAlert';
import Hero from './components/Hero';
import About from './components/About';
import Faq from './components/Faq';
import Sponsors from './components/Sponsors';
import FLO from './components/FLO';

import $ from 'jquery';

import Attending from './components/Attending';
import {withRouter} from 'react-router-dom';

class DecafPage extends React.Component {

    componentDidMount() {
        document.title = "Decaf 2020 | UCSD TESC";

        //TODO: remove jQuery here
        $("link[rel='shortcut icon']").attr("href", "/decaf-icon.png");

        const {hash} = this.props.location;
        window.scrollTo(0,0);


        if (!$(hash).offset()) return;
        if (hash) {
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 450);
        }

    }

    componentWillUnmount() {
        document.title = 'UCSD TESC | 2019'
    }

    render() {
        return (
            <>
                {/*<TopAlert copy={
                    <div className="text-center lead">
                        <span>Looks like it's going to rain 🌧 ️on Thursday - Remember to bring an umbrella <span role="img" aria-label="Umbrella Emoji" className="">☔</span> with you to Decaf!</span>
                    </div>
                } />*/}
                <Hero isCompany={this.props.isCompany} />
                <About isCompany={this.props.isCompany} />
                {!this.props.isCompany && <FLO/>}
                {/*<Attending />*/}
                <Faq isCompany={this.props.isCompany} />
                {/*<Sponsors />*/}
            </>
        )
    }
}

export default withRouter(DecafPage);