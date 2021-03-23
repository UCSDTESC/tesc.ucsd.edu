import React from 'react';

const oldReqs = [
    {
        title: 'TESC Funding Cycle Eligibility',
        content: [
            <div>
                Must be an undergraduate student engineering organization within
                the Jacobs School of Engineering.
            </div>,
            <div>
                Must be registered as an active student organization with the
                Center for Student Involvement (CSI).
            </div>,
            <div>Must be an active TESC full member organization.</div>,
        ],
    },
    {
        title: 'Funding Rules',
        content: [
            <div>
                Funds requested for any event, project, or equipment must relate
                to the mission of the organization.
            </div>,
            <div>
                TESC will not fund any food items in cases where AS funding
                could be used for your event.
            </div>,
            <div>We do not fund sales tax or shipping costs.</div>,
            <div>
                For travel related expenses, please apply to the{' '}
                <a
                    href="https://jacobsschool.ucsd.edu/idea/resources/student-travel"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Student Travel Fund
                </a>{' '}
                AS TCF cannot be used for conferences, but can be used for
                competitions/tournaments that occur while school is in-session
                (i.e. not during spring, summer, or winter break).
            </div>,
            <div>
                Apply for{' '}
                <a
                    href="https://finance.ucsd.edu/Home/FundingGuide"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    AS Tournament & Competition Funding
                </a>{' '}
                to request funding to apply to competitions.
            </div>,
            <div>
                Any request for an event or project must be done at least 4
                weeks in advance, with exceptions granted for extraordinary
                circumstances at the discretion of the VP Finance.
            </div>,
            <div>
                We approve funding requests based on the list of expenses
                submitted during the funding request process. This means we will
                not reimburse you for expenses that were not included in that
                list. If small changes need to be made to the initial budget
                (ie. different supplier), email the{' '}
                <a
                    href="mailto:robert@tesc.ucsd.edu"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    VP Finance
                </a>{' '}
                for approval.
            </div>,
            <div>
                For projects that will take longer than 10 weeks to complete, a
                funding request is required at least once a quarter.
            </div>,
        ],
    },
    {
        title: 'Process for Funding and Reimbursement',
        content: [
            <div>
                Create an itemized budget of expected expenses, such as the one
                below.
                <img src="/tesc-itemized-budget-example.png" alt="" />
            </div>,
            <div>
                Submit a funding request through{' '}
                <a
                    href="https://tesc.typeform.com/to/oco7hH4j"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Typeform
                </a>
                . This Typeform will be opened once allocations have been
                distributed.
            </div>,
            <div>
                You will receive an email from the{' '}
                <a
                    href="mailto:robert@tesc.ucsd.edu"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    VP Finance
                </a>{' '}
                within two weeks of submitting the funding request either
                approving, partially approving, or denying your funding request.
                If you have not received an email from the VP Finance within two
                weeks, send an email to{' '}
                <a
                    href="mailto:pvp@tesc.ucsd.edu"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    pvp@tesc.ucsd.edu
                </a>
                .
            </div>,
            <div>
                Spend your organization’s money to host the event/buy the
                materials.
            </div>,
            <div>
                Submit a reimbursement request on{' '}
                <a
                    href="https://tesc.typeform.com/to/hbcRPIPu"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Typeform
                </a>{' '}
                with a scan/photo/screenshot of your receipt. This Typeform will
                be opened once allocations have been distributed.
            </div>,
            <div>
                You will receive an email from TESC within two weeks of
                submitting the reimbursement request informing you of how you
                can collect your payment. If you have not received an email
                within two weeks, send an email to{' '}
                <a
                    href="mailto:pvp@tesc.ucsd.edu"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    pvp@tesc.ucsd.edu
                </a>
                .
            </div>,
        ],
    },
];

const newReqs = {
    title: 'What’s Required',
    content: [
        <div>
            A budget with all of your (planned) expenses from Fall 2020 to the
            end of Summer 2021. It doesn’t need to be completely exhaustive for
            future expenses, but it should have all the money spent so far (in
            fall quarter 2020). Please provide as many details as you can, but
            we understand this budget is a prediction - ideally yours will be
            based off of previous years’ expenses.
        </div>,
        <div>
            A member list. Please provide a roster of the active UCSD students
            in your org. You will also need their UCSD email address.
        </div>,
        <div>
            An outreach event/initiative plan. Outreach events/initiatives are
            those where your goal is to interact with the future generation of
            engineers and/or historically underrepresented groups in
            engineering/STEM. For an outreach event to count, it must be on the{' '}
            <a
                href="http://bit.ly/TESCcaladd"
                target="_blank"
                rel="noopener noreferrer"
            >
                Council events calendar
            </a>{' '}
            (email{' '}
            <a
                href="mailto:callie@tesc.ucsd.edu"
                target="_blank"
                rel="noopener noreferrer"
            >
                callie@tesc.ucsd.edu
            </a>{' '}
            if your org does not have access) three weeks before the event
            happens. The calendar post needs to have the location, hosting
            organization, and someone to contact.
            <ul type="a">
                <li>
                    An example may be putting on an event bringing high school
                    students to UCSD or consistently visiting high schools.
                </li>
                <li>
                    General Body Meetings will not be considered as outreach
                    events, nor are workshops where your target audience is your
                    own organization.
                </li>
                <li>
                    If you don’t plan on running any outreach events, then do
                    not submit a schedule.
                </li>
                <li>
                    <i>
                        We understand that some orgs do not schedule their
                        outreach events far in advance. To accommodate these
                        clubs, a simple statement of commitment to outreach
                        events will suffice. (For instance, an org commits to 2
                        outreach events Fall quarter, 1 in Winter, 4 in Spring,
                        etc.) Do not get too caught up on your Outreach Schedule
                        - what is more important is that your outreach events go
                        on the TESC Calendar, and that you follow through on
                        your commitments!
                    </i>
                </li>
            </ul>
        </div>,
        <div>
            The Funding Cycle application also contains questions about your
            organization. Do not wait until the last minute to fill it out.
        </div>,
    ],
};

export { oldReqs, newReqs };
