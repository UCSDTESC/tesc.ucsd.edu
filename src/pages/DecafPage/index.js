import React from 'react';

import Hero from './components/Hero';
import About from './components/About';
import Faq from './components/Faq';
import Sponsors from './components/Sponsors';
import $ from 'jquery';
import AttendingCompanies from './components/AttendingCompanies';

class DecafPage extends React.Component {

    componentDidMount() {
        document.title = "Decaf 2019 | UCSD TESC";

        //TODO: remove jQuery here
        $("link[rel='shortcut icon']").attr("href", "decaf-icon.svg");

    }

    render() {
        return (
            <>
                <Hero isCompany={this.props.isCompany} />
                <About />
                <AttendingCompanies />
                <Faq />
            </>
        )
    }
}

export default DecafPage;