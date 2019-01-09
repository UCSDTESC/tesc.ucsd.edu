import React from 'react';
import { Card, CardBody, CardTitle, CardText, Badge, CardSubtitle } from 'reactstrap';

const Company = (props) => (
  <Card className="decaf-company">
    <CardBody>
      <CardTitle className="decaf-company__name">{ props.name }</CardTitle>
      <CardSubtitle className="decaf-company__positions">{ props.positions.split(/[ ,]+/).join(', ') }</CardSubtitle>
      <div className="decaf-company__fields">
          <Badge className="decaf-company__field" color="info">{props.field}</Badge>
      </div>
      <div className="decaf-company__nationalities">
        {
          props.nationalities.map((nationality) => <Badge className="decaf-company__nationality" color="secondary">{nationality}</Badge>)
        }
      </div>
      <CardText>{props.description}</CardText>
    </CardBody>
  </Card>
)

export default Company;