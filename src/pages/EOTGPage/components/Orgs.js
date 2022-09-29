import React from 'react';

import { orgGalleries } from '../data/OrgGalleries';

const Orgs = () => {
    // Renders a single day of orgs
    const renderDay = (day) => {
        return (
            <iframe
                className="airtable-embed"
                src={`${orgGalleries[day]}?backgroundColor=green`}
                title={`orgs on ${day}`}
                frameBorder="0"
                width="100%"
                height="585"
                style={{ background: 'transparent', border: '1px solid #ccc' }}
            />
        );
    };

    return (
        <section className="eotg-attending-orgs" id="orgs">
            <h1 className="floating eotg-attending-orgs__header mb-5">
                Attending Organizations
            </h1>
            <div className="container">
                <div className="row justify-content-center eotg-attending-orgs__blurb">
                    Engineers on the Green will be in person at Warren Bear Courtyard this fall, 
                    and we have the following organizations on the roster!
                </div>
                
                <div className="row justify-content-center">
                    {/* The nav bar tabs that display days */}
                    <ul className="nav nav-tabs eotg-attending-orgs__tabs justify-content-center align-items-end mt-4">
                        {/*
                        <li className="active">
                            <a data-toggle="tab" href="#wednesday">
                                Wednesday, Sep. 29th
                            </a>
                        </li>
                        */}
                        <li className="active">
                            <a data-toggle="tab" href="#thursday">
                                Thursday, Sep. 29th
                            </a>
                        </li>
                    </ul>
                    {/* The info that appears when you click each tab */}
                    <div className="tab-content w-100">
                        {/*
                        <div id="wednesday" className="tab-pane fade show active">
                            <div className="eotg-attending-orgs__day">
                                Wednesday, Sep. 29th
                            </div>
                            {renderDay('wed')}
                        </div>
                        */}
                        <div id="thursday" className="tab-pane fade show active">
                            <div className="eotg-attending-orgs__day">
                                Thursday, Sep. 29th
                            </div>
                            {renderDay('thu')}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Orgs;
