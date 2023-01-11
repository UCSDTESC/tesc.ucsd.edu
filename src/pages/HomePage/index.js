import React from 'react';
import {withRouter} from 'react-router-dom';
import $ from 'jquery';

import Sponsors from './components/Sponsors';
import Hero from './components/Hero';
import Events from './components/Events';
import Join from './components/Join';

class HomePage extends React.Component {

    componentDidMount() {
        const {hash} = this.props.location;
        window.scrollTo(0,0);

        if (hash) {
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 450);
        }
    }

    render() {
        return (
            <>
                <Hero />
                <Events />
                <Join />
                <Sponsors />
            </>
        );
    }
}

export default withRouter(HomePage);