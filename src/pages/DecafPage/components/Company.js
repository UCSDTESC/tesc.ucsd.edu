import React from 'react';
import { Card, CardBody, CardTitle, CardText, Badge, CardSubtitle, CardFooter } from 'reactstrap';
import Avatar from 'react-avatar';

const Company = (props) => (
  <Card className="decaf-company">
    <CardBody>
      <CardTitle className="decaf-company__name">{ props.name }</CardTitle>
      {/* <CardSubtitle className="decaf-company__positions">{ props.positions.toString().replace(/, /g, ",").replace(/,/g, ", ") }</CardSubtitle> */}
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
    <CardFooter className="decaf-company__footer">
        {
          props.positions.map(position => <Avatar name={position} size={25} round={true} textSizeRatio="2.00" className="decaf-company__avatar" />)
        }
    </CardFooter>
  </Card>
)

export default Company;