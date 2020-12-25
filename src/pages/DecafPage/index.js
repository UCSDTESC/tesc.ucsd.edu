import React from 'react';

import Hero from './components/Hero';
import About from './components/About';
import Faq from './components/Faq';
import Sponsors from './components/Sponsors';
import FLO from './components/FLO';

import $ from 'jquery';

import Attending from './components/Attending';
import { withRouter } from 'react-router-dom';

class DecafPage extends React.Component {
    componentDidMount() {
        document.title = 'Decaf 2021 | UCSD TESC';

        //TODO: remove jQuery here
        $("link[rel='shortcut icon']").attr('href', '/decaf-logo.svg');

        const { hash } = this.props.location;
        window.scrollTo(0, 0);

        if (!$(hash).offset()) return;
        if (hash) {
            $('html, body').animate(
                {
                    scrollTop: $(hash).offset().top,
                },
                450
            );
        }
    }

    componentWillUnmount() {
        document.title = 'UCSD TESC';
        $("link[rel='shortcut icon']").attr('href', '/favicon.png');
    }

    render() {
        return (
            <>
                <Hero isCompany={this.props.isCompany} />
                <About isCompany={this.props.isCompany} />
                <Attending />
                {!this.props.isCompany && <FLO />}
                <Faq isCompany={this.props.isCompany} />
                <Sponsors />
            </>
        );
    }
}

export default withRouter(DecafPage);
