import React, {Component} from 'react';

import Hero from './components/Hero';
import About from './components/About';
import Orgs from './components/Orgs';
import Footer from './components/Footer';

import './js/sortElements';
import './js/company-table';

class EOTGPage extends Component {

    componentDidMount() {
<<<<<<< HEAD
        document.title = "EOTG 2020 | UCSD TESC";
=======
        document.title = "EOTG | UCSD TESC";
>>>>>>> 70877487a73311612e278f67d968763b632f75d4
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