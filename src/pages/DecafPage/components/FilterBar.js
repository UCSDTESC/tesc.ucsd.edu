import React, { Component } from 'react'
import { Row, Col, Container, Input } from 'reactstrap';
import CreatableSelect from 'react-select/lib/Creatable';

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
          <Col>
          <Input name="company" placeholder="Company" />
          </Col>
          <Col>
            <CreatableSelect
              isMulti
              options={this.props.data.fields}
              onChange={this.props.handleFieldChange}
            />
          </Col>
          <Col>
            <CreatableSelect
              isMulti
              options={this.props.data.positions}
              onChange={this.props.handlePositionChange}
            />
          </Col>
          <Col>
            <CreatableSelect
              isMulti
              options={this.props.data.workAuths}
              onChange={this.props.handleWorkAuthChange}
            />
          </Col>
        </Row>

    );
  }
}

export default FilterBar;