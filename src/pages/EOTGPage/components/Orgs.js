import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { attendingOrgs } from '../data/Orgs';

// Sort orgs by day
let sortedOrgs = {};
function sortOrgs() {
    attendingOrgs.forEach((org) => {
        if (!sortedOrgs[org.day]) {
            sortedOrgs[org.day] = [];
        }
        sortedOrgs[org.day].push(org);
    });
}
sortOrgs();

function IndividualOrg(props) {
    return (
        <div className="eotg-org__content" onClick={props.toggleModal}>
            {props.name}
        </div>
    );
}

const Orgs = () => {
    const [currOrg, setCurrOrg] = useState(null);

    // Renders a single day of orgs
    const renderDay = (orgs) => {
        return orgs.map((org) => (
            <IndividualOrg {...org} toggleModal={() => setCurrOrg(org)} />
        ));
    };

    return (
        <section className="eotg-attending-orgs" id="orgs">
            {/* Modal that pops up when an org is clicked on */}
            <Modal
                isOpen={currOrg != null}
                centered={true}
                toggle={() => setCurrOrg(null)}
            >
                {currOrg && (
                    <>
                        <ModalHeader>{currOrg.name}</ModalHeader>
                        <ModalBody>
                            {currOrg.acronym && (
                                <p>
                                    <b>Acronym:</b> {currOrg.acronym}
                                </p>
                            )}
                            {currOrg.description && (
                                <p>
                                    <b>Description:</b> {currOrg.description}
                                </p>
                            )}
                            {currOrg.department && (
                                <p>
                                    <b>Departments:</b> {currOrg.department}
                                </p>
                            )}
                        </ModalBody>
                        <ModalFooter>
                            {currOrg.link && (
                                <a
                                    className="btn nav__toggle"
                                    href={currOrg.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fa fa-link"></i> Website
                                </a>
                            )}
                            {currOrg.email && (
                                <a
                                    className="btn nav__toggle"
                                    href={`mailto:${currOrg.email}`}
                                    rel="noopener noreferrer"
                                >
                                    <i className="fa fa-envelope"></i> Email
                                </a>
                            )}
                        </ModalFooter>
                    </>
                )}
            </Modal>

            <h1 className="eotg-attending-orgs__header mb-5">
                Attending Organizations
            </h1>
            <div className="container eotg-org">
                <div className="row justify-content-center eotg-attending-orgs__blurb">
                    This year, Engineers on the Green will take place over five
                    days. Below are the participating organziations grouped by
                    what day they will be attending. Click on each day to see the
                    organizations that will be attending, and click on an 
                    organization's name to learn more.
                </div>

                <div className="row justify-content-center">
                    {/* The nav bar tabs that display days */}
                    <ul className="nav nav-tabs justify-content-center align-items-end mt-4">
                        <li className="active"><a data-toggle="tab" href="#monday">Monday, Oct 5th</a></li>
                        <li><a data-toggle="tab" href="#tuesday">Tuesday, Oct 6th</a></li>
                        <li><a data-toggle="tab" href="#wednesday">Wednesday, Oct 7th</a></li>
                        <li><a data-toggle="tab" href="#thursday">Thursday, Oct 8th</a></li>
                        <li><a data-toggle="tab" href="#friday">Friday, Oct 9th</a></li>
                    </ul>

                    {/* The info that appears when you click each tab */}
                    <div class="tab-content">
                        <div id="monday" className="tab-pane fade show active">
                            <div className="eotg-attending-orgs__day">Monday, Oct 5th</div>
                            {renderDay(sortedOrgs['Monday'])}
                        </div>
                        <div id="tuesday" className="tab-pane fade">
                            <div className="eotg-attending-orgs__day">Tuesday, Oct 6th</div>
                            {renderDay(sortedOrgs['Tuesday'])}
                        </div>
                        <div id="wednesday" className="tab-pane fade">
                            <div className="eotg-attending-orgs__day">Wednesday, Oct 7th</div>
                            {renderDay(sortedOrgs['Wednesday'])}
                        </div>
                        <div id="thursday" className="tab-pane fade">
                            <div className="eotg-attending-orgs__day">Thursday, Oct 8th</div>
                            {renderDay(sortedOrgs['Thursday'])}
                        </div>
                        <div id="friday" className="tab-pane fade">
                            <div className="eotg-attending-orgs__day">Friday, Oct 9th</div>
                            {renderDay(sortedOrgs['Friday'])}
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default Orgs;
