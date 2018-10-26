import React from 'react';
import Hero from './components/Hero';
import Events from './components/Events';
import Join from './components/Join';
import {withRouter} from 'react-router-dom';

class HomePage extends React.Component {


    componentDidMount() {
        const {hash} = this.props.location;

        if (!hash) {
            return;
        }

        const elem = document.getElementById(hash.substring(1));

        if (!elem) {
            return;
        }

        elem.scrollIntoView();
    }

    render() {
        return (
            <>
                <Hero />
                <Events />
                <Join />
            </>
        );
    }
}

export default withRouter(HomePage);