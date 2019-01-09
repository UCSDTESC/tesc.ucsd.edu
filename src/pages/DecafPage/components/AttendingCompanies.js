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
  
    // Bind filter functions to this
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handlePositionChange = this.handlePositionChange.bind(this);
    this.handleWorkAuthChange = this.handleWorkAuthChange.bind(this);

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
      displayCompanies: companies,                // State that handles the filtered companies
      rows: Math.ceil(companies.length / 4),      // subtract 1 to suit array indices that start with 1
      displayRows: Math.ceil(companies.length / 4), // Filtered company rows
      dropdownValues: dropdownValues
    }
  }

  filterDropdowns(companies) {
    let fields = {};
    
    // NOTE: Hard-coded according to data. 
    const possibleWA = ['U.S. Citizen', 'U.S. Permanent Resident' ,'DACA/Other', 'International Student Visa'];
    let workAuths = {};
    for (let wa of possibleWA) {
      workAuths[wa] = {
        value: wa,
        label: wa[0].toUpperCase() + wa.substr(1), 
        count: 0,
      };
    }

    // NOTE: Hard-coded according to data. 
    const possiblePositions = ['Part-Time', 'Full-Time', 'Internship'];
    let positions = {};
    for (let position of possiblePositions) {
      positions[position] = {
        value: position,
        label: position[0].toUpperCase() + position.substr(1),
        count: 0,
      }
    }
    
    for (let company of companies) {
      let field = company['Industry Field'];
      let wa = company['Work Authorizations'];
      let position = company['Position Types'];

      // Create field dictionary
      if (fields[field] === undefined) {
        fields[field] = {
          value: field,
          label: field[0].toUpperCase() + field.substr(1),
          count: 1
        };
      } else {
        fields[field]['count'] += 1;
      }
      
      // Update the count of the workAuths
      for (let check of possibleWA) {
        if (wa.search(check) !== -1) {
          workAuths[check]['count'] += 1;
        }
      }

      // update the counts in the positions
      for (let pcheck of possiblePositions) {
        if (position.search(pcheck) !== -1) {
          positions[pcheck]['count'] += 1;  
        }
      } 
    }

    return { fields: Object.values(fields), 
             positions: Object.values(positions), 
             workAuths: Object.values(workAuths)
           };
  }

  // Dropdown event listeners
  handleFieldChange(newValue, metaAction) {
    console.log('Field changed: ', newValue);
  }

  handlePositionChange(newValue, metaAction) {
    console.log('Position changed: ', newValue);
  }

  handleWorkAuthChange(newValue, metaAction) {
    const filters = newValue.map((objFilter) => objFilter.value);
    
    console.log('Work auth filters: ', filters);

    // Update the displayed companies 
    console.log('Companies: ', this.state.displayCompanies);
    const filteredCompanies = this.state.displayCompanies.filter((company) => {
      let toDisplay = true;
      for (let filter of filters) {
        toDisplay = company['Work Authorizations'].includes(filter);
      }
      return toDisplay;
    });

    this.setState({
      displayCompanies: filteredCompanies,
      displayRows: Math.ceil(filteredCompanies.length / 4), 
    });
  }

  createCompanyRows = () => {
    let rowCounter = 0;
    let arraySliceCounter = 0;
    let companyRows = [];           // JSX prints array, so store in the companies as components in this

    while (rowCounter < this.state.displayRows) {
      const rowView = 
      <div className="decaf-companies__container">
        <CardDeck>
          {
            this.state.displayCompanies.slice(arraySliceCounter, arraySliceCounter + 4).map(company =>
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
        </div>
        <div className="decaf-companies__filterbar">
          <FilterBar 
          data={this.state.dropdownValues}   
          handleFieldChange={this.handleFieldChange}
          handlePositionChange={this.handlePositionChange}
          handleWorkAuthChange={this.handleWorkAuthChange}
          />
        </div>
        {
          this.createCompanyRows()
        }
      </div>
    )
  }
}

export default AttendingCompanies;