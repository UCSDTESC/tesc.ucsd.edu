import React from 'react';

function SpacesBlurb() {
    return (
        <section className="about">
            <div className="text-center about__header-red">
            Project Spaces
            </div>
            <div className="text-center about__header">
            Storage &amp; Workspaces
            </div>
            <div className="about__text mt-5 text-center">
            <p className="about__copy">
                The goal of TESC Project Spaces is to provide UC San Diego's engineering student organizations with the physical spaces they need to complete their projects. This includes providing access to on campus storage facilities and work spaces, and collaborating with the Jacobs School of Engineering for project space development.
            </p></div>
            <div className="row" style={{marginTop: '6rem'}}>
            <div className="col-md-6 text-center btn-cta">
                <a href="http://tinyurl.com/projectspacescontract">Project Spaces Allocation Agreement</a>
            </div>
            <div className="col-md-6 text-center btn-cta">
                <a href="https://goo.gl/forms/hs0hsuzpMySiy9vi1">Project Space Request Form</a>
            </div>
            </div>
        </section>
    );
}

export default SpacesBlurb;