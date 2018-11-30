import React from 'react';
import FinanceReq from './FinanceReq';
import {oldReqs, newReqs} from '../../../data/FinanceReqs';

class FinanceBlurb extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            leftActive: false
        }

        this.togglePill = this.togglePill.bind(this);
    }

    togglePill(toVal) {
        this.setState({leftActive: toVal})
    }

    showOldRequirements() {
        return oldReqs.map(r => {
            return <FinanceReq data={r}/>
        })
    }

    showNewRequirements() {
        return (
            <>
                <div className="row finance">
                    <div className="text-center finance__head">
                        We are changing the process by which TESC provides funding to orgs to make it more predictable and hopefully more useful for orgs! 
                    </div>

                    <h1 className="text-center w-100 mt-5 finance__em">
                        How It Works
                    </h1>

                    <p>
                        From now on, TESC will allocate funds to orgs on a yearly cycle. Orgs should expect to receive an email with an amount allocated to them Winter Quarter of the 2018 - 2019 academic year, and mid-Fall Quarter for following years. <u>It is imperative that orgs join the funding cycle prior to requesting funds from TESC - we cannot guarantee money to orgs who do not join the cycle.</u>
                    </p>

                    <p>
                        The deadline to submit for funds between Winter 2019 and Summer 2019 is <b className="finance__em">DECEMBER 22, 2018</b>. The amount allocated to each org will become available by the start of Winter quarter. 
                    </p>

                    <p>
                        WE ENCOURAGE <u>EVERY ORG</u> TO JOIN THE TESC FUNDING CYCLE. Even if you’re not sure you will need funding at any point during the year, we can still set aside part of our funding for your org! 
                    </p>

                    <p>
                        By joining the cycle, your org will receive a portion of the TESC funding pool. You will still need to submit funding requests per event/project as before, and follow the guidelines. (Think of the Funding Cycle as a supplement to the existing funding request process.) If your event is eligible for funding, you can be sure that you will receive up to the amount allocated to you.
                        For example, if org A is allocated $1,500, they will need to submit for Event A funding for $800. If Event A follows <a className="finance__em" href="https://docs.google.com/document/d/1RHUpAcD9Cyz-2R2qE096NgB5aPt4KgteyObEi29mbDQ/edit">funding guidelines</a>, the proposal will be accepted, and TESC will fund that event for $800. If they want to fund Event B for another $800, TESC will fund up to $700 (if Event B is eligible) guaranteed. 
                    </p>

                    <FinanceReq data={newReqs} />

                    <h3 className="text-center w-100">
                        Regarding Outreach Schedules
                    </h3>

                    <p>
                    We understand that some orgs do not schedule their outreach events far in advance. To 	accommodate these clubs, a simple statement of commitment to outreach events will suffice. (For instance, SLEEPy org commits to 2 outreach events Fall quarter, 1 in Winter, 4 in Spring, etc.) Do not get too caught up on your Outreach Schedule - what is more important is that your outreach events go on the TESC Calendar, and that you follow through on your commitments!
                    </p>

                    <h3 className="text-center w-100 mt-5">Things to submit by December 22, 2018 (with examples)</h3>

                    <ol className="px-5 finance__list">
                        <li><a href="https://docs.google.com/spreadsheets/d/1s3oHOICt0OGsMJIwwIqCNzgSBkoospehVV9PhjXOBXY/edit#gid=1453067410">Budget for ALL Org Expenses from Fall 2018 - End of Summer 2019</a></li>
                        <li><a href="https://docs.google.com/spreadsheets/d/1VLnZtw8bm5yiYPb-r1HrG0rp3WbBcsPKN7iirPKl1WE/edit#gid=0">Org Member List with Members active between Fall 2018 - End of Summer 2019, their UCSD emails, and PIDS</a></li>
                        <li><a href="https://docs.google.com/spreadsheets/d/1QYCfwCK2vOdW8emryJZLjRd2lt78zLj9LIPO0JjfkTk/edit#gid=0">Outreach Events Attended by your Organization between Fall 2018 - End of Summer 2019</a></li>
                    </ol>

                    <p>
                        <i>
                        It is OK if your information does not match the examples exactly this is just a suggestion to show you what type of information we are looking for. That being said, any organization caught misrepresenting their information may lose the ability to apply for funding in future cycles. Play fair! 
                        </i>
                    </p>

                    <p>
                    After all organizations submit the required information, we will allocate a portion of TESC funds to each organization. THIS DOES NOT MEAN WE ARE WRITING YOU A CHECK FOR THAT AMOUNT. You will still need to submit funding requests each time you want funding (per event/project). However, if your funding request is eligible and submitted correctly, you will be guaranteed that amount as long as the total you’re already received is less than your allotted amount. 
                    </p>

                    <p>
                        <u>
                            If you don’t submit org information before the deadline, you will not receive a pre-allocation of TESC funds for the current cycle. HOWEVER, you will still able to submit funding requests for small events/projects, but there will be no guarantee of TESC granting these requests. When you do submit these small funding requests, you will also be required to explain why you were unable to join the current TESC Funding Cycle.
                        </u>

                    </p>
                </div>
            </>
        )
    }

    render() {

        const {leftActive} = this.state;

        return (
            <section className="about">
                <div className="text-center about__header-red">
                    Finance
                </div>
                <div className="text-center about__header mb-5">
                    TESC Council Funding Requirements
                </div>
                <section className="req pt-1">
                    <div className="text-center pb-5">
                        <span className={`finance__pill finance__pill-l ${leftActive ? 'finance__pill-active' : ''}`}
                            onClick={() => this.togglePill(true)}>
                                Old Requirements
                        </span>
                        <span className={`finance__pill finance__pill-r ${!leftActive ? 'finance__pill-active' : ''}`}
                            onClick={() => this.togglePill(false)}>
                                New Requirements
                        </span>
                    </div>
                    <div>
                        <div className="container">
                            {leftActive && this.showOldRequirements()}
                            {!leftActive && this.showNewRequirements()}
                        </div>
                    </div>
                </section>  
            </section>
        );
    }
}

export default FinanceBlurb;