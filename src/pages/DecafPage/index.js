import React from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import $ from 'jquery';

import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Faq from './components/Faq';
import Sponsors from './components/Sponsors';

import BobbyBass from './assets/bobby-bass.svg';

class DecafPage extends React.Component {
    componentDidMount() {
        document.title = 'Decaf 2021 | UCSD TESC';

        //TODO: remove jQuery here
        $("link[rel='shortcut icon']").attr('href', '/decaf-logo.svg');

        const { hash } = this.props.location;
        window.scrollTo(0, 0);

        if (!$(hash).offset()) return;
        if (hash) {
            $('html, body').animate(
                {
                    scrollTop: $(hash).offset().top,
                },
                450
            );
        }
    }

    componentWillUnmount() {
        document.title = 'UCSD TESC';
        $("link[rel='shortcut icon']").attr('href', '/favicon.png');
    }

    render() {
        return (
            <>
                <Hero isCompany={this.props.isCompany} />
                <About isCompany={this.props.isCompany} />
                <Stats />

                <section className="decaf-announcement">
                    <Container>
                        <Row>
                            <Col>
                                <p>
                                    Decaf 21 will be hosted virtually this year.
                                    The primary platform for the event will be
                                    Discord!
                                </p>
                            </Col>
                            <Col>
                                <img src={BobbyBass} alt="bobby bass" />
                            </Col>
                        </Row>
                    </Container>
                </section>

                <Faq />
                <Sponsors />
            </>
        );
    }
}

export default withRouter(DecafPage);
