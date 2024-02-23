import React from 'react';
import FinanceReq from './FinanceReq';
import { oldReqs, newReqs } from '../../../data/FinanceReqs';
import { withRouter } from 'react-router-dom';

class FinanceBlurb extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            leftActive: true,
        };

        this.togglePill = this.togglePill.bind(this);
    }

    togglePill(toVal) {
        this.setState({ leftActive: toVal });
    }

    showOldRequirements() {
        return oldReqs.map((r, i) => {
            return <FinanceReq data={r} key={i} />;
        });
    }

    showNewRequirements() {
        return (
            <>
                <div className="row finance">
                    <h1 className="text-center w-100 mt-5 finance__em">
                        How It Works
                    </h1>

                    <p>
                        TESC allocates funds to orgs on a yearly cycle. Orgs
                        should expect to receive an email with an amount
                        allocated to them by the end of week 7, FA20. If your
                        organization fails to join the funding cycle before the
                        week 5 deadline, there will be no way of receiving TESC
                        funds until next year.
                    </p>

                    <p>
                        The deadline to submit for funds for the 2020-2021
                        school year is{' '}
                        <b className="finance__em">
                            SUNDAY, NOVEMBER 8 at 11:59 PM PST
                        </b>
                        .
                    </p>

                    <p>
                        WE ENCOURAGE EVERY ORG TO JOIN THE TESC FUNDING CYCLE.
                        Even if you’re not sure you will need funding at any
                        point during the year, we can still set aside part of
                        our funding for your org!
                    </p>

                    <p>
                        By joining the cycle, your org will receive a portion of
                        the TESC Org Fund. You will still need to submit funding
                        requests per event/project as before, and follow the
                        guidelines. If your event is eligible for funding, you
                        can be sure that you will receive up to the amount
                        allocated to you. For example, if org A is allocated
                        $1,500, they will need to submit for Event A funding for
                        $800. If Event A follows funding guidelines, the
                        proposal will be accepted, and TESC will fund that event
                        for $800. If they want to fund Event B for another $800,
                        TESC will fund up to $700 (if Event B is eligible)
                        guaranteed.
                    </p>

                    <FinanceReq data={newReqs} />

                    <h3 className="text-center w-100 mt-5">
                        Things to submit by{' '}
                        <b className="finance__em">
                            Sunday, November 8 at 11:59 PM PST
                        </b>
                    </h3>

                    <p>
                        Fill out this{' '}
                        <a
                            href="https://tesc.typeform.com/to/ZTJJFkRB"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Typeform
                        </a>
                        , to do so please have available the following:
                        <br />
                        <i>
                            Note that this typeform is comprehensive, and will
                            take around an hour
                        </i>
                    </p>

                    <ul className="px-5 finance__list">
                        <li>
                            Budgets
                            <ul>
                                <li>2019-2020 (Final)</li>
                                <li>2020-2021 (Prospective)</li>
                            </ul>
                        </li>
                        <li>
                            Member List
                            <ul>
                                <li>2019-2020 (Final)</li>
                                <li>2020-2021 (Prospective)</li>
                            </ul>
                        </li>
                        <li>
                            Outreach events - general schedule per quarter as
                            stated above
                        </li>
                    </ul>

                    <p>
                        After all organizations submit the required information,
                        we will allocate a portion of TESC funds to each
                        organization.{' '}
                        <i>
                            This does not mean we are writing you a check for
                            that amount.
                        </i>{' '}
                        You will still need to submit funding requests each time
                        you want funding (per event/project). However, if your
                        funding request is eligible and submitted correctly, you
                        will be guaranteed that amount as long as the total
                        you’re already received is less than your allotted
                        amount.
                    </p>

                    <p>
                        If you don’t submit org information before the deadline,
                        you will not receive an allocation of TESC funds for the
                        current cycle.
                    </p>
                </div>
            </>
        );
    }

    buttonClick() {
        
    }

    render() {
        const { leftActive } = this.state;

        return (
            <section className="about">
                <div className="text-center about__header-red">Finance</div>
                <div className="text-center about__header mb-5">
                    TESC Funding Cycle Information
                </div>
                <div className="button">
                    <a href='https://docs.google.com/document/d/1leQFiSATp0BVYnK3mgn7DlMdogLTwtSJSN8qwT0lp84/edit' target="_blank" rel="noopener noreferrer">Click Here</a>
                </div>
            </section>
        );
    }
}

export default withRouter(FinanceBlurb);
