import React, {Component} from 'react';

import Hero from './components/Hero';
import About from './components/About';
import Orgs from './components/Orgs';
import Footer from './components/Footer';

import './js/sortElements';
import './js/company-table';

class EOTGPage extends Component {

    componentDidMount() {
        document.title = "EOTG 2020 | UCSD TESC";
    }

    render() {
        return (
            <>       
                <Hero />         
                <About />
                <Orgs />
                <Footer />
            </>
        )
    }
}

export default EOTGPage;