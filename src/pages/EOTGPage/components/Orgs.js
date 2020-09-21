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
            <h1 className="eotg-attending-orgs__header mb-5">
                Attending Organizations
            </h1>
            <div className="container">
                <div className="row justify-content-center eotg-attending-orgs__blurb">
                    This year, Engineers on the Green will take place over five
                    days. Below are the participating organziations grouped by
                    what day they will be attending. Click on each day to see
                    the organizations that will be attending, and click on an
                    organization's name to learn more.
                </div>

                <div className="row justify-content-center">
                    {/* The nav bar tabs that display days */}
                    <ul className="nav nav-tabs justify-content-center align-items-end mt-4">
                        <li className="active">
                            <a data-toggle="tab" href="#monday">
                                Monday, Oct 5th
                            </a>
                        </li>
                        <li>
                            <a data-toggle="tab" href="#tuesday">
                                Tuesday, Oct 6th
                            </a>
                        </li>
                        <li>
                            <a data-toggle="tab" href="#wednesday">
                                Wednesday, Oct 7th
                            </a>
                        </li>
                        <li>
                            <a data-toggle="tab" href="#thursday">
                                Thursday, Oct 8th
                            </a>
                        </li>
                        <li>
                            <a data-toggle="tab" href="#friday">
                                Friday, Oct 9th
                            </a>
                        </li>
                    </ul>

                    {/* The info that appears when you click each tab */}
                    <div className="tab-content w-100">
                        <div id="monday" className="tab-pane fade show active">
                            <div className="eotg-attending-orgs__day">
                                Monday, Oct 5th
                            </div>
                            {renderDay('mon')}
                        </div>
                        <div id="tuesday" className="tab-pane fade">
                            <div className="eotg-attending-orgs__day">
                                Tuesday, Oct 6th
                            </div>
                            {renderDay('tue')}
                        </div>
                        <div id="wednesday" className="tab-pane fade">
                            <div className="eotg-attending-orgs__day">
                                Wednesday, Oct 7th
                            </div>
                            {renderDay('wed')}
                        </div>
                        <div id="thursday" className="tab-pane fade">
                            <div className="eotg-attending-orgs__day">
                                Thursday, Oct 8th
                            </div>
                            {renderDay('thu')}
                        </div>
                        <div id="friday" className="tab-pane fade">
                            <div className="eotg-attending-orgs__day">
                                Friday, Oct 9th
                            </div>
                            {renderDay('fri')}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Orgs;
