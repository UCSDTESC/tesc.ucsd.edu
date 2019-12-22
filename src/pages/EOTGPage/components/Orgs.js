import React, {Component} from 'react';
import {attendingOrgs} from '../data/Orgs';

function IndividualOrg(props) {
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

class Orgs extends React.Component {
  renderOrgs(attendingOrgs) {
    return attendingOrgs.map(x => <IndividualOrg {...x} />)
  }

    render() {
        return (
        <section className="eotg-attending-orgs" id="orgs">
            <div className="container">
              
                <h1 className="eotg-attending-orgs__header mb-5">Attending Organizations</h1>
                <p className="mt-5 text-center">
                  Coming soon!
                </p>
            </div>

            {/*<div className="container">
                <div className="row">
                    {/* search bar and filter 
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

            {/* render all the orgs 
            <div id="eotg-orgs">
                <div className="container p-0 mt-5 eotg-org">
                <div className="row justify-content-center">
                    {this.renderOrgs(attendingOrgs)}
                </div>
                </div>
            </div>*/}

          </section>
        )
    }
}

export default Orgs;