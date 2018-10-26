import React from 'react';
import OrgHero from './components/OrgHero';
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
                <OrgHero />
            </>
        );
    }
}

export default withRouter(HomePage);