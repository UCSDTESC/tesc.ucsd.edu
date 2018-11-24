import React from 'react';

import Hero from './components/Hero';
import About from './components/About';
import Faq from './components/Faq';
import Sponsors from './components/Sponsors';

class DecafPage extends React.Component {

    render() {
        return (
            <>
                <Hero isCompany={this.props.isCompany} />
                <About />
                <Faq />
                <Sponsors />
            </>
        )
    }
}

export default DecafPage;