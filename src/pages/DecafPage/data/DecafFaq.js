import EighthNote from '../assets/sticker-8th-note.svg'; 
import Drum from '../assets/sticker-drum.svg'; 
import Jazz from '../assets/sticker-jazz.svg'; 
import RunWithIt from '../assets/sticker-run-with-it.svg'; 
import Sax from '../assets/sticker-sax.svg'; 
import Violin from '../assets/sticker-violin.svg'; 


const studentFaq = [
    {
        question: 'When and where is the career fair?',
        answer:
            'This year Decaf is on January 19th-21st and it will run from 9am-5pm. Decaf will be virtual and recruiters will have 1:1 sessions with students over Discord. Join our discord server at this [link].',
            bgColor:'#FFF',
            img:EighthNote,
    },
    {
        question: 'What kind of students can I expect to see at the event?',
        answer: 'Students at the undergraduate and graduate level, in a variety of majors primarily affiliated with the Jacobs School of Engineering (such as Mechanical Engineering, Computer Science, etc.)',
        bgColor:'#64CD6E',
        img:Drum,
    },
    {
        question: 'How do I register my company?',
        answer: 'Please click ‘Register’ at the top of the page to go to our registration website where you will complete a form and make a payment.',
        bgColor:'#FA7B5A',
        img:Violin,
    },
    {
        question: 'I registered my company but didn’t see a confirmation email. What do I do?',
        answer:
            'If you did not receive a confirmation after you registered, please email sponsor@tesc.ucsd.edu and let us know.',
            bgColor:'#EFC404',
            img:Sax,
    },
    {
        question: 'Can I reserve a private interview room?',
        answer:
            'We will provide private interview rooms for all Corporate Sponsors who request them. These rooms will be set up over Discord. ',
            bgColor:'#8C74B7',
            img:RunWithIt,
    },
    {
        question:
            'How can I check in on the day of the event?',
            answer:
            'Company representatives can check in on the Decaf Discord server with TESC before their event starts.',
            bgColor:'#FFF',
            img:Jazz,
    },
];

export default studentFaq;