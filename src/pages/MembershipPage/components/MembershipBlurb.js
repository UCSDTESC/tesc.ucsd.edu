import React from 'react';

class MembershipBlurb extends React.Component {

    render() {
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
                <div className="row" style={{marginTop: '6rem'}}>
                <div className="col-md text-center btn-cta">
                    <a className="" href="https://tesc.typeform.com/to/GeFYtC">Join TESC</a>
                </div>
                </div>
            </section>
        );
    }
}

export default MembershipBlurb;