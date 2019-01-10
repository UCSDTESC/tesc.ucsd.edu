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
    this.handleSearchChange = this.handleSearchChange.bind(this);

    // Parse in the json date and filter it accordingly and add to the state then
    let companies = updatedDECAForders.companies

    // Filter out the industries and the possibleWA's 
    const dropdownValues = this.filterDropdowns(companies);

    // TODO: Wrap this in a function
    // REVIEW: Make this method efficient for bigger data
    const possibleWA = ['U.S. Citizen', 'U.S. Permanent Resident' ,'DACA/Other', 'International Student Visa'];
    const possiblePositions = ['Part-Time', 'Full-Time', 'Internship'];

    for (let company of companies) {
      let waString = company['Work Authorizations'];
      let position = company['Position Types'];

      let waArray = []
      let posArray = []

      for (const wa of possibleWA) {
        if (waString.search(wa) !== -1) {
          waArray.push(wa);
        }
      }

      for (const pos of possiblePositions) {
        if (position.search(pos) !== -1) {
          posArray.push(pos);
        }
      }
    
      company['Work Authorizations'] = waArray;
      company['Position Types'] = posArray;
    }

    this.state = {
      companies: companies,
      rows: Math.ceil(companies.length / 4),      // subtract 1 to suit array indices that start with 1
      dropdownValues: dropdownValues,
      filters: {positions: [], fields: [], workAuths: [], search: ''} // Default: Filters are empty
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
    const fieldFilters = newValue.map((objFilter) => objFilter.value);
    
    console.log('Position filters: ', fieldFilters);

    // let filterState = {
    //   ...this.state.filters,
    //   workAuths: fieldFilters,
    // }

    // this.setState({
    //   filters: filterState
    // });
  }

  handleSearchChange(event) {
    let searchFilter = {
      ...this.state.filters,
      search: event.target.value.toLowerCase()
    }

    this.setState({
      filters: searchFilter
    })
  }

  handlePositionChange(newValue, metaAction) {
    const positionFilter = newValue.map((objFilter) => objFilter.value);
    
    console.log('Position filters: ', positionFilter);

    let filterState = {
      ...this.state.filters,
      positions: positionFilter,
    }

    this.setState({
      filters: filterState
    });
  
  }

  handleWorkAuthChange(newValue, metaAction) {
    const waFilter = newValue.map((objFilter) => objFilter.value);
    
    console.log('Work auth filters: ', waFilter);

    let filterState = {
      ...this.state.filters,
      workAuths: waFilter,
    }

    this.setState({
      filters: filterState
    });

  }

  createCompanyRows = (displayCompanies, displayRows) => {
    let rowCounter = 0;
    let arraySliceCounter = 0;
    let companyRows = [];           // JSX prints array, so store in the companies as components in this

    while (rowCounter < displayRows) {
      const rowView = 
      <div className="decaf-companies__container">
        <CardDeck>
          {
            displayCompanies.slice(arraySliceCounter, arraySliceCounter + 4).map(company =>
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

  filterCompaniesByKeys = (companies, keys, keyName) => companies.filter((company) => {    // Filter on all the companies everytime
      for (let filter of keys) {
        if (keyName === 'Work Authorizations') {
          if (company['Work Authorizations'].includes(filter) === false) {
            return false;
          }
        } else if (keyName === 'Position Types') {
          if (company['Position Types'].includes(filter) === false) {
            return false;
          }
        }
      }
      return true;
    });

  filterCompaniesBySearchText = (companies, text) => companies.filter((company) => {
    return company['Organization'].toLowerCase().indexOf(text) === 0;
  });

  render() {
    // Use the filters stored in the state to filter out the companies
    // Apply a total of 4 filter() methods

    const { companies, filters } = this.state;
    let filteredCompanies;

    // filtered wa
    filteredCompanies = this.filterCompaniesByKeys(companies, filters.workAuths, 'Work Authorizations');
    console.log('Filter by wa: ', filteredCompanies, filters.workAuths);
    
    // filtered positions
    filteredCompanies = this.filterCompaniesByKeys(filteredCompanies, filters.positions, 'Position Types');
    console.log('Filter by position: ', filteredCompanies, filters.positions);
    
    // filter by the input text too
    filteredCompanies = this.filterCompaniesBySearchText(filteredCompanies, filters.search);

    let displayRows = Math.ceil(filteredCompanies.length / 4);
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
          handleSearchChange={this.handleSearchChange}
          searchValue={this.state.filters.search}
          />
        </div>
        {
          this.createCompanyRows(filteredCompanies, displayRows)
        }
      </div>
    )
  }
}

export default AttendingCompanies;