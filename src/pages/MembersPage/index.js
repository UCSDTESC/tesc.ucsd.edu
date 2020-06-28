import React, { useState, useEffect, useRef } from 'react';
import Airtable from '../../data/airtableConnection';
import {Badge, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

function Member(props) {
    return (
        <div className="col-md-3 d-flex flex-column p-3 about__member" onClick={props.toggleModal}>
            <img className="align-self-center justify-self-center" style={{maxHeight: '8rem', width: 'auto', maxWidth: '100%'}} src={props.logo.url}/>
            <div className="text-center d-md-none">{props.useAcronym ? props.acronym : props.name}</div>
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
            .then(records => records.filter(r => r.validated))
            .then(records => records.map(r => ({...r, logo: r.logo[0]})))
            .then(records => records.sort((a, b) => a.name.localeCompare(b.name)))
            .then(records => setRecords(records))
    }, []);

    const renderMembers = () => {
        const rows = records.reduce((a,b,i,g) => {
            let tmp = g.slice(i,i+4);
            if (tmp.length < 4) {
                tmp = tmp.concat(new Array(4 - tmp.length).fill(null));
            }
            return !(i % 4) ? a.concat([tmp]) : a
        }, []);        
        
        return rows.map(r => (
            <>
            <div className="row justify-content-center">
                {r.map(m => m ? <Member {...m} toggleModal={() => setCurrOrg(m)}/> : <div className="col-md-3"></div>)}
            </div>
            <div className="row mb-5 d-none d-md-flex">
                {r.map(m => m ? <div className="col text-center">{m.useAcronym ? m.acronym : m.name}</div> : <div className="col-md-3"></div>)}
            </div>
            </>
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