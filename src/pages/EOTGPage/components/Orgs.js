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
        return orgs.map((org, i) => (
            <IndividualOrg
                {...org}
                toggleModal={() => setCurrOrg(org)}
                key={i}
            />
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
                    what day they will be attending. Click on an organization's
                    name to learn more.
                </div>

                {/* Split five days into two rows because of spacing issues*/}
                <div className="row justify-content-center">
                    <div className="col-lg-4">
                        <div className="eotg-attending-orgs__day text-center">
                            Monday, Oct 5th
                        </div>
                        {renderDay(sortedOrgs['Monday'])}
                    </div>
                    <div className="col-lg-4">
                        <div className="eotg-attending-orgs__day text-center">
                            Tuesday, Oct 6th
                        </div>
                        {renderDay(sortedOrgs['Tuesday'])}
                    </div>
                    <div className="col-lg-4">
                        <div className="eotg-attending-orgs__day text-center">
                            Wednesday, Oct 7th
                        </div>
                        {renderDay(sortedOrgs['Wednesday'])}
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-4">
                        <div className="eotg-attending-orgs__day text-center">
                            Thursday, Oct 8th
                        </div>
                        {renderDay(sortedOrgs['Thursday'])}
                    </div>
                    <div className="col-lg-4">
                        <div className="eotg-attending-orgs__day text-center">
                            Friday, Oct 9th
                        </div>
                        {renderDay(sortedOrgs['Friday'])}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Orgs;
