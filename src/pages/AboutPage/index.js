import React from 'react';
import AboutBlurb from './components/AboutBlurb';
import Board from './components/Board';

class AboutPage extends React.Component {

    render() {
        return (
            <>
                <AboutBlurb />
                <Board />
            </>
        );
    }
}

export default AboutPage;