import React, { useState, useEffect, useRef } from 'react';
import Airtable from '../../data/airtableConnection';
import {Badge, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

function Member(props) {
    return (
        <div className="col-md-3 d-flex p-3 about__member" onClick={props.toggleModal}>
            <img className="img-responsive w-100 align-self-center justify-self-center" src={props.logo.url}/>
        </div>
    )
}

function MembersPage() {

    const [records, setRecords] = useState([]);
    const [currOrg, setCurrOrg] = useState(null);
    const base = useRef(Airtable.base('appFhSHX6s9v3csVC'));

    useEffect(() => {
        base.current('Council Members Form Responses')
            .select()
            .all()
            .then(records => records.map(r => r._rawJson.fields))
            .then(records => records.map(r => ({...r, logo: r.logo[0]})))
            .then(records => records.sort((a, b) => a.name.localeCompare(b.name)))
            .then(records => setRecords(records))
    });

    const renderMembers = () => {
        const rows = records.reduce((a,b,i,g) => !(i % 4) ? a.concat([g.slice(i,i+4)]) : a, []);        
        
        return rows.map(r => (
            <div className="row justify-content-center">
                {r.map(m => <Member {...m} toggleModal={() => setCurrOrg(m)}/>)}
            </div>
        ));
    }

    return (
        <>
        <section className="about">
            <Modal 
                isOpen={currOrg != null} centered={true}
                toggle={() => setCurrOrg(null)}>
                {currOrg && 
                    <>
                        <ModalHeader>
                            {currOrg.name} ({currOrg.acronym && currOrg.acronym})
                        </ModalHeader>
                        <ModalBody>
                            <p>{currOrg.bio}</p>
                            <div>
                                {currOrg.fields && currOrg.fields.map(f => <Badge className="mr-2">{f}</Badge>)}
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <a className="btn nav__toggle" href={currOrg.website} target="_blank">
                                <i className="fa fa-link"></i>  Website
                            </a>
                            <a className="btn nav__toggle" href={`mailto:${currOrg.email}`}>
                                <i className="fa fa-envelope"></i>  Email
                            </a>
                        </ModalFooter>
                    </>}
            </Modal>
            <div className="text-center about__header-red">
                Members
            </div>
            <div className="text-center about__header">
                Members of the Council
            </div>
            <div className="about__text mt-5 text-center">
                <p className="about__copy">
                TESC is proud to support its student run council orgs. TESC council orgs work hard to support the engineering community through a combination of outreach events, technical workshops, student run projects and research, social events, and professional development workshops. Learn more about our council below.
                </p>
            </div>
            <div className="container">
                {renderMembers()}
                <h1 className="text-center">
                    ...and many more!
                </h1> 
            </div>
        </section>
        </>
    )
}

export default MembersPage;