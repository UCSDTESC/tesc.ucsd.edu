import React from 'react';

const oldReqs = [
    {
        title: 'Organization Eligibility to Apply for TESC Funds',
        content: [
            <div>Must be an undergraduate student engineering organization within the Jacobs School of Engineering.</div>,
            <div>Must be registered as an active student organization with the Center for Student Involvement (CSI).</div>,
            <div>Must be an active TESC organization. <i>Probationary organizations are not eligible for funding</i></div>
        ]
    },
    {
        title: 'Funding Rules',
        content: [
            <div>Funds requested for any event, project, or equipment must relate to the mission of the organization. </div>,
            <div>TESC will not fund any food items in cases where AS funding could be used for your event.</div>,
            <div>We do not fund sales tax or shipping costs.</div>,
            <div>For travel related expenses, please apply to the <a target="_blank" href="http://jacobsschool.ucsd.edu/idea/resources/travel.shtml" >Student Travel Fund</a> or AS competition funds to request funding for travel. TESC will take requests for travel/competition funding only after an organization applies to the Student Travel Fund and AS Competition Funding</div>,
            <div>Any request for an event or project must be done at least 4 weeks in advance, with exceptions granted for extraordinary circumstances at the discretion of the VP Finance.</div>,
            <div>We approve funding requests based on the list of expenses submitted during the funding request process. This means we will not reimburse you for expenses that were not included in that list. If small changes need to be made to the initial budget (ie. different supplier), <a href="mailto:callie@tesc.ucsd.edu" target="_blank">email the VP Finance</a> for approval.</div>,
            <div>For projects that will take longer than 10 weeks to complete, a funding request is required at least once a quarter.</div>
        ]
    },
    {
        title: 'Process for Funding and Reimbursement',
        content: [
            <div>Create an itemized budget of expected expenses, such as the one <a target="_blank" href="">here</a></div>,
            <div>Submit a funding request through <a href="http://bit.ly/FundingRequestForm" target="_blank">Typeform</a></div>,
            <div>You will receive an email from the <a href="mailto:callie@tesc.ucsd.edu" target="_blank">VP Finance</a> within two weeks of submitting the funding request either approving, partially approving, or denying your funding request.</div>,
            <div>Spend your organization’s money to host the event/buy the materials.</div>,
            <div>Submit a reimbursement request on typeform with a scan/photo/screenshot of your receipt <a href="https://tesc.typeform.com/to/l7YNMz" target="_blank"> here. </a></div>,
            <div>You will receive an email from TESC within two weeks of submitting the reimbursement request informing you of how you can collect your payment.</div>

        ]
    }
]

const newReqs = {
    title: 'What’s Required',
    content: [
        <div>A budget with all of your (planned) expenses from Fall 2018 to the end of Summer 2019. It doesn’t need to be completely exhaustive for future expenses, but it should have all money spent so far (in fall quarter 2018). Please provide as many details as you can, but we understand this budget is a prediction - ideally yours will be based off of previous years’ expenses.</div>,
        <div>A member list. Please provide a roster of the active UCSD students in your org. You will also need their UCSD email address.</div>,
        <div>
            An outreach event schedule. Outreach events are those where your primary goal is to interact with students or individuals OUTSIDE of your organization. For an outreach event to count, it must be on the <a className="finance__em" href="http://tesc.ucsd.edu/orgs">TESC PROGRAM AND EVENTS CALENDAR</a> three weeks before the event happens. The calendar post needs to have the location, hosting organization, and someone to contact.
            <ol type='a'>

                <li>
                    An example may be tabling at HackXX, or putting on an event bringing high school students to UCSD for an event.     
                </li>    
                <li>
                    General Body Meetings <b className="finance__em">will not</b> be considered as outreach events, nor are workshops where your target audience is your own organization.
                </li>
                <li>
                If you don’t plan on running any outreach events, then do not submit a schedule. 
                </li>
            </ol>
        </div>,

    ]
}

export {oldReqs, newReqs};