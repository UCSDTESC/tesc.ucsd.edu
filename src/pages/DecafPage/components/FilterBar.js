import React, { Component } from 'react'
import { Row, Col, Container, Input } from 'reactstrap';
import Select from 'react-select/';

class FilterBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
        <Row className="decaf-companies__filter">
          <Col md="3" className="my-2">
          <Input name="company" placeholder="Company" value={this.props.searchValue} onChange={this.props.handleSearchChange}/>
          </Col>
          <Col md="3" className="my-2">
            <Select
              isMulti
              options={this.props.data.fields}
              onChange={this.props.handleFieldChange}
              placeholder="Industry"
            />
          </Col>
          <Col md="3" className="my-2">
            <Select
              isMulti
              options={this.props.data.positions}
              onChange={this.props.handlePositionChange}
              placeholder="Work Type"
            />
          </Col>
          <Col md="3" className="my-2">
            <Select
              isMulti
              options={this.props.data.workAuths}
              onChange={this.props.handleWorkAuthChange}
              placeholder="Work Auth"
            />
          </Col>
        </Row>

    );
  }
}

export default FilterBar;