import React, { Component } from 'react'
import { Row, Col, Container } from 'reactstrap';
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

  handleFieldChange = (newValue, actionMeta) => {
    console.log('Value changed: ', newValue);
  }

  render() {
    return (
      <Container>
        <Row>
          <Col></Col>
          <Col>
            <CreatableSelect
              isMulti
              options={this.props.data.fields}
              onChange={this.handleFieldChange}
            />
          </Col>
          <Col>
            <CreatableSelect
              isMulti
              options={this.props.data.positions}
              onChange={this.handleFieldChange}
            />
          </Col>
          <Col>
            <CreatableSelect
              isMulti
              options={this.props.data.workAuths}
              onChange={this.handleFieldChange}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default FilterBar;