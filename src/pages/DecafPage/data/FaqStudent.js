import React from 'react';
import { Link } from 'react-router-dom';
import EighthNote from '../assets/sticker-8th-note.svg';
import Drum from '../assets/sticker-drum.svg';
import Jazz from '../assets/sticker-jazz.svg';
import RunWithIt from '../assets/sticker-run-with-it.svg';
import Sax from '../assets/sticker-sax.svg';
import Violin from '../assets/sticker-violin.svg';

const studentFaq = [
    {
        question: 'How can I get the most up to date information above Decaf?',
        answer: (
            <>
                Follow our{' '}
                <a
                    href="https://www.facebook.com/events/1045225139323545"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Facebook event page
                </a>{' '}
                and join our{' '}
                <a
                    href="http://tesc.link/decafDC"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Discord server
                </a>{' '}
                to stay up to date with Decaf.
            </>
        ),
        bgColor: '#64CD6E',
        img: Drum,
    },
    {
        question: 'Who can attend Decaf?',
        answer:
            'All UCSD students (undergraduate and graduate students) and alumni with a valid UCSD ID.',
        bgColor: '#FA7B5A',
        img: Violin,
    },
    {
        question: 'What is the dress code for the event?',
        answer:
            'There is no dress code for the event, but business casual is recommended.',
        bgColor: '#EFC404',
        img: Sax,
    },
    {
        question: 'How can I register for the event?',
        answer: (
            <>
                You can register for the event by joining our{' '}
                <a
                    href="http://tesc.link/decafDC"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Discord server
                </a>{' '}
                .
            </>
        ),
        bgColor: '#8C74B7',
        img: RunWithIt,
    },
    {
        question: 'What can I expect from Decaf?',
        answer:
            'Attending Decaf will provide you with the opportunity to meet and connect with representatives from some of the top companies in engineering.',
        bgColor: '#FFF',
        img: Jazz,
    },
    {
        question: 'What is the schedule of events?',
        answer: (
            <>
                You can find the schedule{' '}
                <a
                    href="http://tesc.link/decafDC"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    here
                </a>
                .
            </>
        ),
        bgColor: '#64CD6E',
        img: Drum,
    },
    {
        question: 'Is there any way I can get early access?',
        answer: (
            <>
                Yes, there is. You can either: attend one of our front-of-line
                opportunities (F.L.O.) events for early access (attendance is
                limited per event), or volunteer for Decaf (
                <a
                    href="http://tesc.link/decafDC"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    sign up to volunteer
                </a>
                ). You can find more information by going to our{' '}
                <a
                    href="https://www.facebook.com/events/1045225139323545"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Facebook event page
                </a>
                .
            </>
        ),
        bgColor: '#FA7B5A',
        img: Violin,
    },
    {
        question: 'What does FLO give me?',
        answer:
            'FLO allows you to schedule meetings with companies earlier than general admission attendees.',
        bgColor: '#EFC404',
        img: Sax,
    },
    {
        question: 'What companies are attending?',
        answer: (
            <>
                Check out the list of attending companies{' '}
                <Link to="/decaf/attending">here</Link> .
            </>
        ),
        bgColor: '#8C74B7',
        img: RunWithIt,
    },
];

export default studentFaq;
