import React from 'react';
import EighthNote from '../assets/sticker-8th-note.svg';
import Drum from '../assets/sticker-drum.svg';
import Jazz from '../assets/sticker-jazz.svg';
import RunWithIt from '../assets/sticker-run-with-it.svg';
import Sax from '../assets/sticker-sax.svg';
import Violin from '../assets/sticker-violin.svg';

const companyFaq = [
    {
        question: 'When and where is the career fair?',
        answer: (
            <>
                This year Decaf is on January 11th and it will run from
                10am-2pm. Decaf will be held at the Price Center Ballroom and recruiters will be able to have close networking
                sessions with engineering students.{' '}
                .
            </>
        ),
        bgColor: '#FFF',
        img: EighthNote,
    },
    {
        question: 'What kind of students can I expect to see at the event?',
        answer:
            'Students at the undergraduate and graduate level, in a variety of majors primarily affiliated with the Jacobs School of Engineering (such as Mechanical Engineering, Computer Science, etc.)',
        bgColor: '#64CD6E',
	img: RunWithIt,
    },
    {
        question: 'How do I register my company?',
        answer:
            'Please click ‘Register Your Company’ at the top of the page to go to our registration website where you will complete a form and make a payment.',
        bgColor: '#FA7B5A',
        img: Violin,
    },
    {
        question:
            'I registered my company but didn’t see a confirmation email.',
        answer:
            'If you did not receive a confirmation after you registered, please email sponsor@tesc.ucsd.edu and let us know.',
        bgColor: '#EFC404',
        img: Sax,
    },
    {
        question: 'How can I check in on the day of the event?',
        answer:
            'To Be Announced!',
        bgColor: '#FFF',
        img: Jazz,
    },
];

export default companyFaq;
