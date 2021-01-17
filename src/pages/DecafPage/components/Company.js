import React from 'react';
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    Badge,
    CardSubtitle,
    CardFooter,
} from 'reactstrap';

const Avatar = (props) => {
    const { name } = props;

    const styles = {
        'U.S. Citizen': ['US', 'decaf-company__avatar-us'],
        'U.S. Permanent Resident': ['PR', 'decaf-company__avatar-pr'],
        'DACA/Other': ['D/O', 'decaf-company__avatar-do'],
        'International Student Visa': ['I', 'decaf-company__avatar-i'],
    };

    const [short, style] = styles[name];
    return (
        <>
            <span className={`decaf-company__avatar ${style} text-center`}>
                {short}
            </span>
        </>
    );
};

const Company = (props) => (
    <Card className="decaf-company">
        <CardBody>
            <CardTitle className="decaf-company__name">
                <a href={props.link} target="_blank" rel="noopener noreferrer">
                    {props.name}
                </a>
            </CardTitle>
            <CardSubtitle className="decaf-company__positions">
                {props.positions
                    .toString()
                    .replace(/, /g, ',')
                    .replace(/,/g, ', ')}
            </CardSubtitle>
            <div className="decaf-company__fields">
                {props.field.map((f, i) => (
                    <Badge
                        className="decaf-company__field"
                        color="info"
                        key={i}
                    >
                        {f}
                    </Badge>
                ))}
            </div>
            {/*<div className="decaf-company__nationalities">
        {
          props.nationalities.map((nationality) => <Badge className="decaf-company__nationality" color="secondary">{nationality}</Badge>)
        }
      </div>*/}
            <CardText>{props.description}</CardText>
        </CardBody>
        <CardFooter className="decaf-company__footer">
            {props.nationalities.map((position, i) => (
                <Avatar
                    name={position}
                    company={props.name}
                    className="decaf-company__avatar"
                    key={i}
                />
            ))}
        </CardFooter>
    </Card>
);

export { Company, Avatar };
