import React from 'react';

const companyFaq = [
    {
        question: "When and where is the career fair?",
        answer: "This year Decaf is on January 16, 2020 and it will run from 8am-2pm. Please arrive around 7am to facilitate set-up and check-in. Decaf will be in the Price Center East and West Ballrooms in the center of the UCSD campus."
    },
    {
        question: "What kinds of students can I expect to see at the event?",
        answer: "Students at the undergraduate and graduate level, in a variety of majors primarily inside of the Jacobs School of Engineering (ranging from Mechanical Engineering to Computer Science)."
    },
    {
        question: "How do I register my company?",
        answer: "Please click 'Register' at the top of the page to go to our registration website where you will complete a form and make a payment."
    },
    {
        question: "I registered my company but didn’t receive a confirmation email. What do I do?",
        answer: <div>If you did not receive a confirmation after you registered, please email <a href="mailto:sponsor@tesc.ucsd.edu" target="_blank">sponsor@tesc.ucsd.edu</a> and let us know!</div>
    },
    {
        question: "Can I reserve private interview rooms?",
        answer: <div>We will provide private interview rooms for all Corporate Sponsors who request them. Please email <a href="mailto:jocelyn@tesc.ucsd.edu" target="_blank">jocelyn@tesc.ucsd.edu</a> if you are a Corporate Sponsor and would like to reserve interview room(s)!</div>
    },
    {
        question: "Where do I check in?",
        answer: "After you’ve arrived at Rupertus Lane/Myers Dr, go north along Myers Dr towards the Price Center. Walk up the stairs past the student check-in line, and into Price Center. You’ll check in inside of the West Ballroom."
    },
    {
        question: "Where do I park?",
        answer: <div>Your company should have received (or will receive) an email containing event logistics details. Please send Jocelyn an email at <a href="mailto:jocelyn@tesc.ucsd.edu" target="_blank">jocelyn@tesc.ucsd.edu</a> if you did not receive this information.</div>
    },
    {
        question: "Are food and coffee provided?",
        answer: "Yes! We will provide coffee and bagels in the morning, as well as a catered lunch."
    },
    {
        question: "I would like to use rideshare to get to the event - where should I get dropped off?",
        answer: "The best place to get dropped off is the same as the drop-off point for shuttles running between parking garages and the venue: You can navigate to Croutons on Rupertus Lane/Myers Dr., and then follow the walking instructions to the Price Center Ballrooms."
    }
]

const studentFaq = [
    {
        question: "How can I get the most up to date information about Decaf?",
        answer: <div>Follow our <a href="https://www.facebook.com/events/2457677007678696/" target="_blank">Facebook event page</a> to stay up to date with Decaf.</div>
    },
   {
        question: "What time should I get there?",
        answer: "The ballroom doors will open at 9:00 AM for general admission, and at 8:00 AM for F.L.O. early access. You can arrive early to line up outside before doors open. We will begin issuing general admission tickets at around 8:30 AM."
    },
   {
        question: "Who can attend Decaf?",
        answer: "All UCSD students (undergraduate and graduate students) and alumni with a valid UCSD ID."
    },
   {
        question: "Is there any way I can get early access?",
        answer: <div>Yes, there is. You can either: attend one of our front-of-line opportunity (F.L.O.) events for early access (attendance is limited per event), or volunteer for Decaf (sign up to volunteer at <a href="https://forms.gle/gM97ZupMhfFsLLgF9" target="_blank">this link</a>). You can find more information by going to our <a href="https://www.facebook.com/events/2457677007678696/" target="_blank">Facebook event page</a>.</div>
    },
   {
        question: "I have F.L.O. access. What next?",
        answer: "If you have attended one of our F.L.O. events and have your FLO ticket, you can come in to the West Ballroom from the library walk side (it will be the same entrance as that of regular line, except that the regular line will go towards Sixth College). Your FLO status will be verified at the door when you show us your ticket, at which point you will be given a wristband. Note: You will need to bring your UCSD ID and your Decaf ticket in order to check in."
    },
   {
        question: "What is the dress code for the event?",
        answer: "There is no dress code for the event, but business casual is recommended."
    }
]

export {companyFaq, studentFaq};