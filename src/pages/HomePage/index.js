import React from 'react';
import {withRouter} from 'react-router-dom';
import $ from 'jquery';

import Sponsors from './components/Sponsors';
import Hero from './components/Hero';
import Events from './components/Events';
import Join from './components/Join';

class HomePage extends React.Component {

    // window.location.href = "https://tescucsd.org";
    // window.location.replace("https://stackoverflow.com");

    componentDidMount() {
        const {hash} = this.props.location;
        window.scrollTo(0,0);

        window.location.href = "https://tescucsd.org";

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
