import React, {Component} from 'react';
import {attendingOrgs} from '../data/Orgs';

function IndividualOrg(props) {
  //const col = props.col || 'col-md-4 col-lg-4';
  console.log(props);

  return (
    <div className="eotg-org__content col-md-3 align-self-center">
        <h4 className="eotg-org__name">{props.name}</h4>
        <div className="eotg-org__department">
            Department: <span>{props.department}</span>
        </div>
    </div>
  )
  }

  /*if (props.size === "small") {
      return (
          <SponsorContainer className={`${col} my-5 d-block`} href={props.link} target="_blank">
              <SmallImg src={props.logo} className={`img-fluid d-block m-auto  ${props.className}`} alt="" />
          </SponsorContainer>
      )
  } else  if (props.size === "medium") {
      return (
          <SponsorContainer className={`${col} my-5 d-block`} href={props.link} target="_blank">
              <MediumImg src={props.logo} className={`img-fluid d-block m-auto  ${props.className}`} alt="" />
          </SponsorContainer>
      )
  } else {
      return (
          <SponsorContainer className={`${col} my-5 d-block`} href={props.link} target="_blank">
              <LargeImg src={props.logo} className={`img-fluid d-block m-auto  ${props.className}`} alt="" width="110%"/>
          </SponsorContainer>
      )
  }
}*/

class Orgs extends React.Component {
  renderOrgs(attendingOrgs) {
    return attendingOrgs.map(x => <IndividualOrg {...x} />)
  }

    render() {
        return (
        <section className="eotg-attending-orgs" id="orgs">
            <div className="container">
                <h1 className="eotg-attending-orgs__header mb-5">Attending Organizations</h1>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md mt-3">
                        <input type="text" placeholder="Organization Name" className="form-control eotg-org-table__search"/>
                    </div>

                    <div className="col-md mt-3">
                        <div className="dropdown">
                          <button className="eotg-filter eotg-department-filter btn dropdown-toggle" type="button" id="departmentDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              Department
                          </button>
                          <div className="eotg-filter__options dropdown-menu eotg-department-filter__options" aria-labelledby="departmentDropdown">
                          </div>
                        </div>
                    </div>           
                </div>
            </div>

            <div id="eotg-orgs">
                <div className="container p-0 mt-5 eotg-org">
                <div className="row justify-content-center">
                    {/*<div className="col-md-4 align-self-center">
                        <div className="eotg-org__content">
                          <h3 className="eotg-org__name">Lego Club</h3>
                          <div className="eotg-org__department">
                              Department: <span>Fun</span>
                          </div>
                        </div>
                    </div>*/}
                    {this.renderOrgs(attendingOrgs)}
                </div>
                </div>
            </div>

          </section>
        )
    }
}

export default Orgs;