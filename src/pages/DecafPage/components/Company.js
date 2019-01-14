import React from 'react';
import { Card, CardBody, CardTitle, CardText, Badge, CardSubtitle, CardFooter, UncontrolledTooltip } from 'reactstrap';

const Avatar = (props) => {

  const {name, company} = props;

  const styles = {
    'U.S. Citizen': ['US', 'decaf-company__avatar-blue'],
    'U.S. Permanent Resident': ['PR', 'decaf-company__avatar-green'],
    'DACA/Other': ['D/O', 'decaf-company__avatar-yellow'],
    'International Student Visa': ['I', 'decaf-company__avatar-purple']
  }

  const [short, style] = styles[name]
  return (
    <>
      <span className={`decaf-company__avatar ${style} text-center`}>
        {short}
      </span>
    </>
  )
}

const Company = (props) => (
  <Card className="decaf-company__card">
    <CardBody>
      <CardTitle className="decaf-company__name">{ props.name }</CardTitle>
      <CardSubtitle className="decaf-company__positions">{ props.positions.toString().replace(/, /g, ",").replace(/,/g, ", ") }</CardSubtitle>
      <div className="decaf-company__fields">
          
          {props.field.map(f => <Badge className="decaf-company__field" color="info">{f}</Badge>)}
      </div>
      {/*<div className="decaf-company__nationalities">
        {
          props.nationalities.map((nationality) => <Badge className="decaf-company__nationality" color="secondary">{nationality}</Badge>)
        }
      </div>*/}
      <CardText>{props.description}</CardText>
    </CardBody>
    <CardFooter className="decaf-company__footer">
        {
          props.nationalities.map(position => <Avatar name={position} company={props.name} className="decaf-company__avatar" />)
        }
    </CardFooter>
  </Card>
)

export {Company, Avatar};