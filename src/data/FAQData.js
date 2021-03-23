import React from 'react';

const FAQData = [
    {
        title: "For New Orgs",
        content: [
            {
                question: "What is the TESC?",
                answer:
                    <div>
                        TESC, or Triton Engineering Student Council, is a UCSD org that advocates opportunities for undergrad engineering students. We are made of several different engineering clubs, from organizations that specialize in different areas of engineering, to project and building teams, and more! We also host large scale events such as SDHacks, Engineers on the Green, and more to provide collaboration and networking opportunities to engineering students.
                    </div>
            },
            {
                question: "Why join the TESC council?",
                answer:
                    <div>
                        TESC provides a number of opportunities to engineering clubs and organizations. Active TESC orgs are given funding to host engineering events, access to event planning software, and the ability to collaborate with other TESC orgs and outside businesses. Overall, TESC provides social networking and financial support to orgs that may be hard to gain as a stand-alone org.
                    </div>
            },
            {
                question: "Who is currently in the TESC Council?",
                answer:
                    <div>
                        Currently, we have over 23 active orgs in the TESC Council! To view the full list of members, please visit:{' '}
                        <a
                            href="https://tesc.ucsd.edu/members"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://tesc.ucsd.edu/members
                        </a>.
                    </div>
            },
            {
                question: "What is the overall process/requirements for joining TESC?",
                answer:
                    <div>
                        An org is admitted into TESC after undergoing two stages of the application process. Before becoming a full member of TESC, orgs must apply to be a probationary member.
                    </div>
            },
            {
                question: "How does an org apply to be a probationary member?",
                answer:
                    <div>
                        An org can apply to be a probationary member of TESC after completing these requirements:
                        <ul>
                            <li>
                                The org must be CSI registered. For more information, please visit:{' '}
                                <a
                                    href="https://getinvolved.ucsd.edu/one-stop/register/index.html"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    https://getinvolved.ucsd.edu/one-stop/register/index.html
                                </a>.
                            </li>
                            <li>
                                Send application via Typeform:{' '}
                                <a
                                    href="https://tesc.typeform.com/to/GeFYtC"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    https://tesc.typeform.com/to/GeFYtC
                                </a>.
                            </li>
                            <li>
                                At the following council meeting, give a brief presentation about your org. Questions to answer are:
                                <ul>
                                    <li>Why do you want to be a member of TESC?</li>
                                    <li>How do you plan to meet the Diversity, Equity, and Inclusion (DEI) requirement?</li>
                                    <li>How do you plan to collaborate with other TESC orgs?</li>
                                </ul>
                            </li>
                            <li>After the org’s presentation, TESC members will vote on whether or not to allow the org into TESC. If 75% of members vote yes, the org will be admitted into TESC as a probationary member.</li>
                        </ul>
                    </div>       
            },
            {
                question: "How does an org apply to be a full member?",
                answer:
                    <div>
                        Once the org has been admitted into TESC as a probationary member, they can complete these requirements to become a full member:
                        <ul>
                            <li>The org must have at least one engineering-focused activity per year.</li>
                            <li>Have co-hosted an event with another TESC org.</li>
                            <li>Have volunteers at all required TESC events.</li>
                            <li>After a quarter, the org will give another presentation about the events the org has held as a probationary member of TESC.</li>
                            <li>After the org’s presentation, TESC members will vote on whether or not to allow the org to be a full member. If 75% of members vote yes, the org will be admitted into TESC as a full member.</li>
                        </ul>
                    </div>
            },
            {
                question: "What does being a full member of TESC mean?",
                answer:
                    <div>
                        A full member of TESC has full access to every service TESC provides, such as funding, voting representation, and event support. After becoming a full member, an org must continue to attend council meetings, host at least one engineering activity per academic year, co-host an event with another TESC org, and volunteer at least at half the number of TESC events.
                    </div>
            },
            {
                question: "What are some of the events TESC holds?",
                answer:
                    <div>
                        <ul>
                            <li>
                                Engineers on the Green
                                <ul>
                                    <li>
                                        Club fair for engineering clubs on campus. Happens once in fall, and once in winter.
                                    </li>
                                </ul>
                            </li>
                            
                            <li>
                                SD Hacks
                                <ul>
                                    <li>
                                        TESC’s annual hackathon! Happens in fall or winter.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Matcha, Decaf, and Espresso
                                <ul>
                                    <li>
                                        Career Fair and Networking events that happen in fall and winter.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                HackXX
                                <ul>
                                    <li>
                                        Women-centric Hackathon! Happens in spring.
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
            }
        ]
    },
    {
        title: "Current Active Orgs",
        content: [
            {
                question: "What happens if I miss a meeting?",
                answer:
                    <div>
                        An org is allowed to miss council meetings so long as they contact the Council Lead or the VP Internal at{' '}
                        <a
                            href="mailto:council@tesc.ucsd.edu"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            council@tesc.ucsd.edu
                        </a>{' '}before the meeting. If your org attends at least 75% of the council meetings, the org will still be listed as active. If not, the org will be listed as inactive, where the org will undergo another probationary period and will not be able to access funding.
                    </div>
            },
            {
                question: "What TESC resources do I have access to?",
                answer:
                    <div>
                        <ul>
                            <li>
                                Finances
                                <ul>
                                    <li>
                                        See{' '}
                                        <a
                                            href="https://tesc.ucsd.edu/orgs/finance"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            https://tesc.ucsd.edu/orgs/finance
                                        </a>{' '}for more information, or contact{' '}
                                        <a
                                            href="mailto:finance@tesc.ucsd.edu"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            finance@tesc.ucsd.edu
                                        </a>.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Project Spaces
                                <ul>
                                    <li>
                                        Information Coming Soon!
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
            }
        ]
    },
    {
        title: "Inactive Orgs",
        content: [
            {
                question: "I haven’t been attending TESC events or council meetings for 1 quarter/2 quarters/a year. Am I still affiliated with TESC/can I still access TESC resources?",
                answer:
                    <div>
                        If you’ve been inactive for over two quarters, you’ll be relegated to probationary status. This means you will have to present at the next TESC council meeting to gain full status. While probationary, you do not have access to TESC funding.
                    </div>
            },
            {
                question: "Who can I contact to make sure I am no longer considered an inactive org?",
                answer:
                    <div>
                        Please email{' '}
                        <a
                            href="mailto:council@tesc.ucsd.edu"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            council@tesc.ucsd.edu
                        </a>.
                    </div>
            }
        ]
    },
    {
        title: "General Questions",
        content: [
            {
                question: "Who can I contact if I have a question?",
                answer:
                    <div>
                        Please email{' '}
                        <a
                            href="mailto:council@tesc.ucsd.edu"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            council@tesc.ucsd.edu
                        </a>.
                    </div>
            },
            {
                question: "How to join the TESC email list?",
                answer:
                    <div>
                        To join the TESC email list, please fill out our form here:{' '}
                        <a
                            href="https://forms.gle/tV3SD6aFxwJHVvid7"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://forms.gle/tV3SD6aFxwJHVvid7
                        </a>.
                    </div>
            },
            {
                question: "Does TESC have social media?",
                answer:
                    <div>
                        Yes! Here is our Linktree:{' '}
                        <a
                            href="https://linktr.ee/tescucsd"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://linktr.ee/tescucsd
                        </a>.
                    </div>
            },
            {
                question: "Are you interested in joining TESC itself?",
                answer:
                    <div>
                        Apply here!{' '}
                        <a
                            href="https://tesc.typeform.com/to/bAqdgm"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://tesc.typeform.com/to/bAqdgm
                        </a>.
                    </div>
            }
        ]
    }
];

export default FAQData;