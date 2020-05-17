import React from 'react';

function MembershipBlurb() {
    return (
        <section className="about">
            <div className="text-center about__header-red">
                Membership
            </div>
            <div className="text-center about__header">
                Become a TESC Organization
            </div>
            <div className="about__text mt-5 text-center">
                <p className="about__copy">
                    Become a member in the largest collaborative student network of engineering organizations at UC San Diego. TESC organizations gain the full support of the Triton Engineering Student Council. Member orgs can receive funding and spaces for projects along with logistical and financial support for their events.
                </p>
            </div>
            <div className="row mt-4">
                <div className="col-md text-center btn-cta">
                    <a className="" href="https://tesc.typeform.com/to/GeFYtC">Join TESC</a>
                </div>
            </div>
            <div className="text-center about__header" style={{marginTop: '3rem'}}>
                Member Status Definitions
            </div>
            <div className="about__text mt-4 text-center">
                <b>Probationary Member</b>
            </div>
            <div className="about__text text-center">
                Before they can become a Full Member or Affiliate Member, each applicant organization will go through a probationary period. Approval of a Probationary Member requires a three-fourths majority vote of the Council quorum. The vote to make a Probationary Member a Full Member or an Affiliate Member will occur at the  Council Meeting that is either 10 academic weeks after the Probationary Member was voted in or the first council meeting after one full academic quarter later (excluding summer quarters and week 0s), whichever occurs first.  Approval of a Full or Affiliate Memberships requires a three-fourths majority vote of the Council quorum. Any organization in this probationary period may designate one non-voting Representative to represent the organization at all TESC meetings. Current TESC Executive Board officers may not be designated as a non-voting Representative by any organization. Voting representatives may only represent one org. Probationary members will be given access to TESC event support. Probationary members are not eligible to apply for TESC funding or TESC project spaces.
            </div>
            <div className="about__text mt-4 text-center">
                <b>Full Member</b>
            </div>
            <div className="about__text text-center">
                Full Members are those that meet the criteria as defined in Article III, Section 1 of the TESC Constitution, and have been approved as voting members as outlined in the TESC Bylaws. Full Members shall designate one Voting Representative for voting purposes at all TESC meetings. Current TESC Executive Board officers may not be designated as Voting Representatives by any organization. Full members will be given access to TESC event support. Voting representatives may only represent one org.  Full members will be eligible to apply for TESC funding and TESC project spaces.
            </div>
            <div className="about__text mt-4 text-center">
                <b>Affiliate Member</b>
            </div>
            <div className="about__text text-center">
                A student organization may become an Affiliate Member if it does not meet the criteria to become a Full Member. An Affiliate Member organization must be approved as outlined in the TESC Bylaws. Affiliate Members shall designate one voting Representative to represent the organization at all TESC meetings. Current TESC Executive Board officers may not be designated as a voting Representative by any organization. Voting representatives may only represent one org.  Affiliate Members who can adequately prove that they meet the requirements to become a Full Member through an audit can apply to become Full Members at the discretion of the Council.  A short presentation about how the organization plans to continue to meet the Full Member requirements will be given at council and council will vote on whether or not the Affiliate Member should become a Full Member. One year after being elected into Full Member status, the organization must prove that they still meet the requirements to be a Full Member. Voting percentage to pass amendments  as well as Quorum will automatically be affected immediately after the organization is voted in and will require the usual ¾ for quorum with ⅔ for amendment voting.  Affiliate members will be given access to TESC event support. Affiliate members will not be eligible to apply for TESC funding or TESC project spaces.
            </div>
        </section>
    );
}

export default MembershipBlurb;