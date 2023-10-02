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
        question: 'How can I get the most up to date information about DECaF?',
        answer: (
            <>
                Follow our{' '}
                <a
                    href="https://www.instagram.com/ucsdtesc/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Instagram 
                </a>{' '}
                to stay up to date with DECaF!
            </>
        ),
        bgColor: '#64CD6E',
        img: Drum,
    },
    {
        question: 'Who can attend DECaF?',
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
                Registration details coming soon!
            </>
        ),
        bgColor: '#8C74B7',
        img: RunWithIt,
    },
    {
        question: 'What can I expect from DECaF?',
        answer:
            'Attending DECaF will provide you with the opportunity to meet and connect with representatives from some of the top companies in engineering.',
        bgColor: '#FFF',
        img: Jazz,
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
