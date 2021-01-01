import React from 'react';
import { withRouter } from 'react-router-dom';
import $ from 'jquery';

import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';

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
                <Stats />
            </>
        );
    }
}

export default withRouter(DecafPage);
