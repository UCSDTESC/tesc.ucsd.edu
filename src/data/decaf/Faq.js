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
        answer: "The best place to get dropped off is at Croutons on Rupertus Lane/Myers Dr., and then you can follow the walking instructions to the Price Center Ballrooms. This is same as the drop-off point for shuttles running between parking garages and the venue."
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
    },
    {
        question: "How do I get a ticket?",
        answer: <div>Just inside the West Ballroom Foyer entrance by the Bookstore, there will be a ticket issuance table. We'll be issuing tickets until we reach our maximum capacity for the day. You <b>MUST</b> bring your <b>UCSD ID</b> and <b>TICKET</b>.</div>
    },
    {
        question: "What do I do with the ticket that I received?",
        answer: <div>This year, we are implementing a ticketing system for Decaf to cut down the amount of time you need to wait in line. The ticket (the sticker with a ticket number and QR code) represents your place in line. Once you have a ticket, you can leave (go to class, get food, etc.) and come back when your ticket number is eligible to enter the line for each ballroom. <b>DO NOT LOSE YOUR TICKET!</b></div>
    },
    {
        question: "How do I know when I am eligible to get into each ballroom?",
        answer: <div>Subscribe at <a href="https://decaf.live" target="_blank">decaf.live</a> to receive a message (SMS and/or email) when your ticket is called for each ballroom. The two lines might move at different speeds. If you don't want to receive notifications, you can just check this page. If your ticket number is within the number range for a ballroom, you'll be allowed to enter the line for that ballroom.</div>
    },
    {
        question: "What do I do once my number is \"called\"?",
        answer: <div>When your ticket number is in the range for a specific ballroom, you may join the entry line for that ballroom. You must bring back your <b>UCSD ID</b>, <b>TICKET</b>, and <b>WRISTBAND</b> at this time. A volunteer will validate your ticket and mark one checkbox on your wristband before allowing you to enter the ballroom.</div>
    },
    {
        question: "How many times can I go into each ballroom?",
        answer: "You are allowed a total of three entries into any combination of the ballrooms. You can choose to spend all three (re-)entries on one ballroom or use your three entries to visit some combination of the two ballrooms. Note: If you enter West Ballroom and then enter East Ballroom, these count as two separate entries out of your three."
    },
    {
        question: "What if I want to enter the ballroom(s) more than three times?",
        answer: "You will need to wait in line for another ticket and wristband if you want another ticket."
    },
    {
        question: "What do I do while waiting for my ticket to be called?",
        answer: <div>We strongly recommend uploading your resume with this <a href="https://tesc.typeform.com/to/hwNBpM" target="_blank">form</a> and also signing up for <a href="https://ripplematch.com/index?r=7qszUz" target="_blank">RippleMatch</a>. Feel free to go to class or otherwise relax. If you've subscribed for notifications, we'll let you know when to come back. Note: the sooner you come back after your ticket number is called, the less time you’ll need to wait in the per-ballroom line.</div>
    },
    {
        question: "What is RippleMatch?",
        answer: <div>RippleMatch is sponsoring Decaf this year! The RippleMatch job-matching platform helps you land more interviews at top companies like Citadel, Pfizer, NASA, IBM, and TripAdvisor. Can’t make it to Decaf, bored of waiting in line, or didn’t find the job opportunity you wanted? Want companies to contact you? You can go to <a href="http://bit.ly/rmdecaf" target="_blank">bit.ly/rmdecaf</a> to register for RippleMatch.</div>
    },
    {
        question: "What companies are attending/which ballroom are they in?",
        answer: <div>Check out the list of attending companies <a href="https://tesc.ucsd.edu/decaf/attending" target="_blank">here</a>. See the map <a href="/decaf2020-map.pdf" target="_blank">here</a> for East and West Ballrooms to find out where companies are located.</div>
    }
]

export {companyFaq, studentFaq};