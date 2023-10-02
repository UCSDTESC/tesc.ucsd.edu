import React from 'react';
import { Row, Col, CardDeck, Button } from 'reactstrap';

import { Company, Avatar } from './Company';
import FilterBar from './FilterBar';
import updatedDECAForders from '../data/AttendingCompanies.json';

import CoffeCup from '../assets/attending/cup.svg';
import EighthNotes from '../assets/attending/notes.svg';

class AttendingCompanies extends React.Component {
    constructor(props) {
        super(props);

        // Bind filter functions to this
        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.handlePositionChange = this.handlePositionChange.bind(this);
        this.handleWorkAuthChange = this.handleWorkAuthChange.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);

        // Parse in the json date and filter it accordingly and add to the state then
        let companies = updatedDECAForders.companies;

        // TODO: Wrap this in a function
        // REVIEW: Make this method efficient for bigger data
        const possibleWA = [
            'U.S. Citizen',
            'U.S. Permanent Resident',
            'DACA/Other',
            'International Student Visa',
        ];
        const possiblePositions = ['Part-Time', 'Full-Time', 'Internship'];

        for (let company of companies) {
            let waString = company['Work Authorizations'];
            let position = company['Position Types'];
            let fieldStr = company['Industry Field'];

            let waArray = [];
            let posArray = [];

            for (const wa of possibleWA) {
                // added undefined check due to absence of WA data in DECAF 2021
                if (waString !== undefined && waString.indexOf(wa) !== -1) {
                    waArray.push(wa);
                }
            }

            for (const pos of possiblePositions) {
                if (position.indexOf(pos) !== -1) {
                    posArray.push(pos);
                }
            }

            company['Work Authorizations'] = waArray;
            company['Position Types'] = posArray;
            if (typeof company['Industry Field'] === 'string')
                company['Industry Field'] = new Set(
                    fieldStr.split(',').map((x) => x.trim())
                );
        }

        // Filter out the industries and the possibleWA's
        const dropdownValues = this.filterDropdowns(companies);

        this.state = {
            companies: companies,
            rows: Math.ceil(companies.length / 4), // subtract 1 to suit array indices that start with 1
            dropdownValues: dropdownValues,
            filters: { positions: [], fields: [], workAuths: [], search: '' }, // Default: Filters are empty
        };
    }

    filterDropdowns(companies) {
        let fields = {};

        // NOTE: Hard-coded according to data.
        const possibleWA = [
            'U.S. Citizen',
            'U.S. Permanent Resident',
            'DACA/Other',
            'International Student Visa',
        ];
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
            };
        }

        for (let company of companies) {
            let fieldSet = company['Industry Field'];
            let wa = company['Work Authorizations'];
            let position = company['Position Types'];

            for (let field of fieldSet) {
                // Create field dictionary
                field = field.trim();
                if (fields[field] === undefined) {
                    fields[field] = {
                        value: field,
                        label:
                            field[0] !== undefined
                                ? field[0].toUpperCase() + field.substr(1)
                                : '', // added undefined check due to absence of Industry Field data in DECAF 2021
                        count: 1,
                    };
                } else {
                    fields[field]['count'] += 1;
                }
            }

            // Update the count of the workAuths
            for (let check of possibleWA) {
                if (wa.indexOf(check) !== -1) {
                    workAuths[check]['count'] += 1;
                }
            }

            // update the counts in the positions
            for (let pcheck of possiblePositions) {
                if (position.indexOf(pcheck) !== -1) {
                    positions[pcheck]['count'] += 1;
                }
            }
        }
        return {
            fields: Object.values(fields).sort((a, b) =>
                a.label < b.label ? -1 : 1
            ),
            positions: Object.values(positions),
            workAuths: Object.values(workAuths),
        };
    }

    // Dropdown event listeners
    handleFieldChange(newValue, metaAction) {
        const fieldFilters = newValue.map((objFilter) => objFilter.value);

        // let filterState = {
        //   ...this.state.filters,
        //   workAuths: fieldFilters,
        // }

        this.setState({
            filters: {
                ...this.state.filters,
                fields: fieldFilters,
            },
        });
    }

    handleSearchChange(event) {
        let searchFilter = {
            ...this.state.filters,
            search: event.target.value.toLowerCase(),
        };

        this.setState({
            filters: searchFilter,
        });
    }

    handlePositionChange(newValue, metaAction) {
        const positionFilter = newValue.map((objFilter) => objFilter.value);

        let filterState = {
            ...this.state.filters,
            positions: positionFilter,
        };

        this.setState({
            filters: filterState,
        });
    }

    handleWorkAuthChange(newValue, metaAction) {
        const waFilter = newValue.map((objFilter) => objFilter.value);

        let filterState = {
            ...this.state.filters,
            workAuths: waFilter,
        };

        this.setState({
            filters: filterState,
        });
    }

    createCompanyRows = (displayCompanies, displayRows) => {
        let rowCounter = 0;
        let arraySliceCounter = 0;
        let numInRow = 3;
        let companyRows = []; // JSX prints array, so store in the companies as components in this

        while (rowCounter < displayRows) {
            const rowView = (
                <div className="decaf-companies__container" key={rowCounter}>
                    <div className="card-deck-wrapper">
                        <CardDeck>
                            {displayCompanies
                                .slice(
                                    arraySliceCounter,
                                    arraySliceCounter + numInRow
                                )
                                .map((company, i) => (
                                    <Company
                                        name={company['Organization']}
                                        positions={company['Position Types']}
                                        field={[...company['Industry Field']]}
                                        nationalities={
                                            company['Work Authorizations']
                                        }
                                        description=""
                                        link={company['Link']}
                                        key={i}
                                    />
                                ))}
                        </CardDeck>
                    </div>
                </div>
            );

            companyRows.push(rowView);
            rowCounter += 1;
            arraySliceCounter += numInRow;
        }

        return companyRows;
    };

    filterCompaniesByKeys = (companies, keys, keyName) =>
        companies.filter((company) => {
            // Filter on all the companies everytime

            // if there are no filters, return true for every company so that every company is displayed
            if (keys.length === 0) {
                return true;
            }

            for (let filter of keys) {
                filter = filter.trim();

                // if any of the filters match the company, return true to display it
                // this is OR filtering
                if (keyName === 'Work Authorizations') {
                    if (company['Work Authorizations'].includes(filter)) {
                        return true;
                    }
                } else if (keyName === 'Position Types') {
                    if (company['Position Types'].includes(filter)) {
                        return true;
                    }
                } else if (keyName === 'Industry Field') {
                    if (company['Industry Field'].has(filter)) {
                        return true;
                    }
                }
            }
            return false;
        });

    filterCompaniesBySearchText = (companies, text) =>
        companies.filter((company) => {
            return company['Organization'].toLowerCase().indexOf(text) === 0;
        });

    renderKey() {
        const auths = [
            'U.S. Citizen',
            'U.S. Permanent Resident',
            'DACA/Other',
            'International Student Visa',
        ];

        return (
            <>
                {auths.map((x, i) => (
                    <Col key={i} xs="auto">
                        <span className="decaf-company__keyname">
                            {x}&nbsp;
                        </span>
                        <Avatar name={x} />
                    </Col>
                ))}
            </>
        );
    }

    componentDidMount() {
        window.scroll(0, 0);
    }

    render() {
        // Use the filters stored in the state to filter out the companies
        // Apply a total of 4 filter() methods

        const { companies, filters } = this.state;
        let filteredCompanies;

        // filtered wa
        filteredCompanies = this.filterCompaniesByKeys(
            companies,
            filters.workAuths,
            'Work Authorizations'
        );

        // filtered positions
        filteredCompanies = this.filterCompaniesByKeys(
            filteredCompanies,
            filters.positions,
            'Position Types'
        );

        // filter by the input text too
        filteredCompanies = this.filterCompaniesBySearchText(
            filteredCompanies,
            filters.search
        );

        //filter by industry
        filteredCompanies = this.filterCompaniesByKeys(
            filteredCompanies,
            filters.fields,
            'Industry Field'
        );

        filteredCompanies = filteredCompanies.sort((a, b) =>
            a.Organization.toLowerCase() < b.Organization.toLowerCase() ? -1 : 1
        );

        let displayRows = Math.ceil(filteredCompanies.length / 3);
        return (
            <div className="decaf-companies">
                <div className="decaf-companies__nav">
                    <Row className="mb-4 justify-content-between decaf-companies__container">
                        <Col xs="auto d-flex flex-column justify-content-center">
                            <Button href="/decaf">Back to MAIN SITE</Button>
                        </Col>
                        {/* {this.renderKey()} */}
                    </Row>
                </div>

                <div className="decaf-companies__head">
                    <div className="decaf-companies__container">
                        <Row>
                            <Col>
                                <h1>
                                    Companies <br />
                                    <span>Attending</span>{' '}
                                </h1>
                                <Row>
                                    <Col>
                                        <h1 className="coffee">DECAF</h1>
                                    </Col>
                                    <Col>
                                        <h1 className="year">
                                            FALL
                                            <br />
                                            2023
                                        </h1>
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <img className="cup" src={CoffeCup} alt="" />
                                <img
                                    className="notes"
                                    src={EighthNotes}
                                    alt=""
                                />
                            </Col>
                        </Row>
                    </div>
                </div>

                <div className="decaf-companies__filterbar">
                    <div className="decaf-companies__container">
                        <FilterBar
                            data={this.state.dropdownValues}
                            handleFieldChange={this.handleFieldChange}
                            handlePositionChange={this.handlePositionChange}
                            handleWorkAuthChange={this.handleWorkAuthChange}
                            handleSearchChange={this.handleSearchChange}
                            searchValue={this.state.filters.search}
                        />
                    </div>
                </div>

                {this.createCompanyRows(filteredCompanies, displayRows)}

            </div>
        );
    }
}

export default AttendingCompanies;
