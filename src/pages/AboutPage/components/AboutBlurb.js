import React from 'react';

function AboutBlurb() {

    return (
        <section class="about mb-5 mt-5">
            <div class="text-center about__header-red">
            About TESC
            </div>
            <div class="text-center about__header">
            Our Mission Statement
            </div>
            <div class="about__text mt-5 text-center">
            <p class="about__copy">
                The <span class="about__blue">Triton Engineering Student Council (TESC) </span> empowers UC San Diego engineering students by connecting them with impactful communities, projects, and career building opportunities.
            </p>
            </div>
        </section>
    );
}

export default AboutBlurb;