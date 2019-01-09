import React from 'react';
import {
  Button, Badge, Card, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';

import Company from './Company';
import updatedDECAForders from '../../../data/updatedDECAForders.json'
import FilterBar from './FilterBar';

class AttendingCompanies extends React.Component {
  constructor(props) {
    super(props);
  
    // Parse in the json date and filter it accordingly and add to the state then
    let companies = updatedDECAForders.companies

    // Filter out the industries and the possibleWA's 
    const dropdownValues = this.filterDropdowns(companies);

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
      companies: companies,
      rows: Math.ceil(companies.length / 4),      // subtract 1 to suit array indices that start with 1
      dropdownValues: dropdownValues
    }
  }

  filterDropdowns(companies) {
    let fields = {};
    let positions = {};
    let workAuths = {};

    for (let company of companies) {
      let field = company['Industry Field'];
      let wa = company['Work Authorizations'];
      let position = company['Position Types'];

      // Create field dictionary
      fields.push({
        value: field, 
        label: field
      });

      // Create workAuths dictionary
      workAuths.push({
        value: wa,
        label: wa
      })      

      // Create positions dictionary
      positions.push({
        value: position, 
        label: position
      })
    }

    return {fields, positions, workAuths};
  }

  createCompanyRows = () => {
    let rowCounter = 0;
    let arraySliceCounter = 0;
    let companyRows = [];           // JSX prints array, so store in the companies as components in this

    while (rowCounter < this.state.rows) {
      const rowView = 
      <div className="decaf-companies__container">
        <CardDeck>
          {
            this.state.companies.slice(arraySliceCounter, arraySliceCounter + 4).map(company =>
            <Company 
              name={company["Organization"]}
              positions={company["Position Types"]}
              field={company["Industry Field"]}
              nationalities={company["Work Authorizations"]}
              description=""
            />)
          }
        </CardDeck>
      </div>
      
      companyRows.push(rowView);
      rowCounter += 1;
      arraySliceCounter += 4;
    }

    return companyRows;
  }

  render() {
    return (
      <div className="decaf-companies" id="about">
        <div className="decaf-companies__head">
          Attending Companies
        <FilterBar data={this.state.dropdownValues}/>
        </div>
        {
          this.createCompanyRows()
        }
      </div>
    )
  }
}

export default AttendingCompanies;