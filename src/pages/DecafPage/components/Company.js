import React from 'react';
import { Card, CardTitle, CardSubtitle } from 'reactstrap';

const Company = (props) => (
  <Card className='company'>
    <CardTitle className='company__name'></CardTitle>
    <CardSubtitle className='company__position'></CardSubtitle>
  </Card>
)

export default Company;