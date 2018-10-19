import React from 'react';
import Hero from './components/Hero';
import Events from './components/Events';
import Join from './components/Join';

class HomePage extends React.Component {

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

export default HomePage