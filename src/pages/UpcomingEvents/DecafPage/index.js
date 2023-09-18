import React from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Row, Col, Button } from 'reactstrap';
import $ from 'jquery';

import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Faq from './components/Faq';
import Sponsors from './components/Sponsors';

import BobbyBassCompany from './assets/company/bobby-bass.svg';
import BobbyBassStudent from './assets/student/bobby-bass.svg';

class DecafPage extends React.Component {
    componentDidMount() {
	document.title = 'Decaf 2023 | UCSD TESC';

        //TODO: remove jQuery here
        $("link[rel='shortcut icon']").attr(
            'href',
            `/decaf-logo-${this.props.isCompany ? 'company' : 'student'}.svg`
        );

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
        const desStyle = {
            fontFamily: 'Woodchuck',
            fontStyle: 'normal',
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
        };

        const imgStyle = {
            transform: 'rotate(10deg)',
            width: '100%',
        };
        return (
            <>
                <Hero isCompany={this.props.isCompany} />
                <About isCompany={this.props.isCompany} />
                {this.props.isCompany && <Stats />}
                <section
                    className={`decaf-announcement ${
                        this.props.isCompany
                            ? 'decaf-bg-orange'
                            : 'decaf-bg-purple'
                    }`}
                >
                    <Container>
                        <Row>
                            <Col
                                md={8}
                                xs={12}
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                }}
                            >
                                <h1 style={desStyle}>
                                    Decaf 23 will be hosted on November 6, 2023.
                                </h1>
                                {!this.props.isCompany && (
                                    <Button href="/decaf/attending">
                                        View Attending Companies
                                    </Button>
                                )}
                            </Col>
                            <Col>
                                <img
                                    src={
                                        this.props.isCompany
                                            ? BobbyBassCompany
                                            : BobbyBassStudent
                                    }
                                    alt="bobby bass"
                                    style={imgStyle}
                                />
                            </Col>
                        </Row>
                    </Container>
                </section>

                <Faq isCompany={this.props.isCompany} />
                <Sponsors />
            </>
        );
    }
}

export default withRouter(DecafPage);
