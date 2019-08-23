import React, {Component} from 'react';

import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';

class EOTGPage extends Component {

    render() {
        return (
            <>       
                <Hero />         
                <About />
                <Footer />
            </>
        )
    }
}

export default EOTGPage;