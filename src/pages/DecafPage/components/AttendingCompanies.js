import React from 'react';
import {
  Button, Badge, Card, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';

import Company from './Company';
import updatedDECAForders from '../../../data/updatedDECAForders.json'

class AttendingCompanies extends React.Component {
  constructor(props) {
    super(props);
  
    // Parse in the json date and filter it accordingly and add to the state then
    let companies = updatedDECAForders.companies

    // TODO: Wrap this in a function
    // REVIEW: Make this method efficient for bigger data
    const possibleWA = ['U.S. Citizen', 'U.S. Permanent Resident' ,'DACA/Other', 'International Student Visa']
    for (let company of companies) {
      let waString = company['Work Authorizations']
      let waArray = []

      for (const wa of possibleWA) {
        if (waString.search(wa) !== -1) {
          waArray.push(wa);
        }
      }
    
      company['Work Authorizations'] = waArray;
    }

    this.state = {
      companies: companies
    }
  }

  render() {
    return (
      <div className="decaf-companies" id="about">
        <div className="decaf-companies__head">
          Attending Companies
        </div>
        <div className="decaf-companies__container">
          <CardDeck>
            <Company name="Astrani" 
                     positions={["Part-Time", "Internship", "Full-Time"]} 
                     fields={["Aeronautical", "Mechanical", "Aeros"]}
                     nationalities={["US Citizen", "International"]}
                     description="Info about the cool company"
            />
            
          </CardDeck>
        </div>
      </div>
    )
  }
}

export default AttendingCompanies;