import React from 'react';
import {
  Button, Badge, Card, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';

import Company from './Company';

class AttendingCompanies extends React.Component {

  render() {
    return (
      <div className="decaf-companies" id="about">
        <div className="decaf-companies__head">
          Attending Companies
        </div>
        <div className="decaf-companies__container">
          <CardDeck>
            <Company name="Astrani" 
                     positions={["Part-Time", "Internship", "Full-Time"]} 
                     fields={["Aeronautical", "Mechanical", "Aeros"]}
                     nationalities={["US Citizen", "International"]}
                     description="Info about the cool company"
            />
            <Card className="decaf-company">
              <CardBody>
                <CardTitle className="decaf-company__name">Astranis</CardTitle>
                <CardSubtitle className="decaf-compay__position">Full-Time, Internship</CardSubtitle>
                <div className="decaf-company__fields">
                  <Badge className="decaf-company__field" color="info">Mechanical</Badge>
                  <Badge className="decaf-company__field" color="info">Aerospace</Badge>
                  <Badge className="decaf-company__field" color="info">Aerospace</Badge> 
                </div>
                <div className="decaf-company__nationalities">
                  <Badge className="decaf-company__nationality" color="secondary">US Citizen</Badge>
                  <Badge className="decaf-company__nationality" color="secondary">International</Badge>
                </div>
                <CardText cla>This is some text about the company</CardText>
              </CardBody>
            </Card>
            <Card className="decaf-company">
              <CardBody>
                <CardTitle className="decaf-company__name">Astranis</CardTitle>
                <CardSubtitle className="decaf-compay__position">Full-Time, Internship</CardSubtitle>
                <div className="decaf-company__fields">
                  <Badge className="decaf-company__field" color="info">Mechanical</Badge>
                  <Badge className="decaf-company__field" color="info">Aerospace</Badge>
                  <Badge className="decaf-company__field" color="info">Aerospace</Badge> 
                </div>
                <div className="decaf-company__nationalities">
                  <Badge className="decaf-company__nationality" color="secondary">US Citizen</Badge>
                  <Badge className="decaf-company__nationality" color="secondary">International</Badge>
                </div>
                <CardText cla>This is some text about the company</CardText>
              </CardBody>
            </Card>
            <Card className="decaf-company">
              <CardBody>
                <CardTitle className="decaf-company__name">Astranis</CardTitle>
                <CardSubtitle className="decaf-compay__position">Full-Time, Internship</CardSubtitle>
                <div className="decaf-company__fields">
                  <Badge className="decaf-company__field" color="info">Mechanical</Badge>
                  <Badge className="decaf-company__field" color="info">Aerospace</Badge>
                  <Badge className="decaf-company__field" color="info">Aerospace</Badge> 
                </div>
                <div className="decaf-company__nationalities">
                  <Badge className="decaf-company__nationality" color="secondary">US Citizen</Badge>
                  <Badge className="decaf-company__nationality" color="secondary">International</Badge>
                </div>
                <CardText cla>This is some text about the company</CardText>
              </CardBody>
            </Card>
            
          </CardDeck>
        </div>
      </div>
    )
  }
}

export default AttendingCompanies;