import React from 'react';

const companyFaq = [
    {
        question: "When and where is the career fair?",
        answer: "This year Decaf is on January 17th, 2019 and it will run from 9am-3pm. Please arrive around 8am to facilitate set-up and check-in. Decaf is hosted in the Price Center Ballrooms East and West in the center of UCSD campus"
    },
    {
        question: "What kind of students would be attending?",
        answer: "All Jacobs School of Engineering Students (including Mechanical Engineering, Computer Science, Chemical Engineering… etc) at both the undergraduate and graduate level "
    },
    {
        question: "How do I register my company?",
        answer: <div>Please click 'Register' at the top of the page to go to our registration website where you will complete a form and make payment. If you did not receive a confirmation please email <a href="mailto:sergio@tesc.ucsd.edu">sergio@tesc.ucsd.edu</a>  for help.</div>
    },
    {
        question: "Can I reserve private interview rooms?",
        answer: "We will provide private interview rooms for all the Corporate Sponsors, we will send out a form closer to the date for you to request them."
    }
]

const studentFaq = [
    {
        question: 'How can I get the most up to date information about Decaf?',
        answer: <div> Follow <a href="https://www.facebook.com/events/2461413517521931/" target="_blank">our Facebook page</a> to stay upto date with Decaf</div>
    },
    {
        question: 'What time should I get there?',
        answer: 'The door will open at 10:00 AM for general admission, and at 9:00 AM for F.L.O. early access.'
    },
    {
        question: 'What is the check-in procedure?',
        answer: ` We will be checking people in ONLY from the West Ballroom. Please come in through the stairs up to PC from the YogurtWorld side(near the Perks entrance). The line will be shaped like an ‘L’ along the Lyman Lane, bending around the Triton Statue and extend all the way to the Sixth college.
        After we’ve scanned your valid UCSD ID card from the West Ballroom, you will be given a wristband. The wristband will allow you to enter the PC West and East Ballroom. In order to control the number of people inside the East Ballroom, you might still need to wait in the line in front of the East Ballroom until one of our volunteers lets you in. `
    },
    {
        question: 'Is there any way I can get early access?',
        answer: 'Yes there is! Please attend at least one of our F.L.O. Early access events! More information coming soon!'
    },
    {
        question: 'I have FLO access. What next?',
        answer: 'If you have attended one of our F.L.O events and have received a ticket confirmation, you can come in to the West Ballroom from the libray walk side(It will be the same entrance as that of regular line, except that the regular line will go towards the sixth college). Your ticket will be verified at the door.'
    },
    {
        question: 'Who can attend?',
        answer: 'All UCSD students(both Undergraduate, Graduate and PHD students) and alumni with a valid UCSD ID.'
    },
    {
        question: 'What is the dress code for the event?',
        answer: 'There is no dress code for the event, but business casual is recommended.'
    }
]

export {companyFaq, studentFaq};