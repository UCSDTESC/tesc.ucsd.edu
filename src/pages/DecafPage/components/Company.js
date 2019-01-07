import React from 'react';
import { Card, CardBody, CardTitle, CardText, Badge, CardSubtitle } from 'reactstrap';

const Company = (props) => (
  <Card className="decaf-company">
    <CardBody>
      <CardTitle className="decaf-company__name">{ props.name }</CardTitle>
      <CardSubtitle className="decaf-company__positions">{ props.positions.toString().replace(/, /g, ",").replace(/,/g, ", ") }</CardSubtitle>
      <div className="decaf-company__fields">
        {
          props.fields.map((field) => <Badge className="decaf-company__field" color="info">{field}</Badge>)
        }
      </div>
      <div className="decaf-company__nationalities">
        {
          props.nationalities.map((nationality) => <Badge className="decaf-company__nationality" color="secondary">{nationality}</Badge>)
        }
      </div>
      <CardText cla>{props.description}</CardText>
    </CardBody>
  </Card>
)

export default Company;