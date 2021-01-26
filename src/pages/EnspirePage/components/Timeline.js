import React from 'react';
import { Container, Table } from 'reactstrap';
import Divider from './Divider';

const Timeline = () => {
    return (
        <section className="enspire-timeline">
            <h1 className="section-title">timeline</h1>
            <Divider />
            <Container>
                <Table bordered>
                    <tbody>
                        <tr>
                            <td className="time"><p>9 : 00 am - 9 : 15 am</p></td>
                            <td><p className="event">Opening Ceremony</p></td>
                        </tr>
                        <tr>
                            <td><p>9 : 15 am - 9 : 30 am</p></td>
                            <td><p className="event">Info Session I: Financial Aid</p></td>
                        </tr>
                        <tr>
                            <td><p>9 : 30 am - 10 : 30 am</p></td>
                            <td><p className="event">Workshop I: Arduino</p></td>
                        </tr>
                        <tr>
                            <td><p>10 : 30 am - 11 : 15 am</p></td>
                            <td><p className="event">Info Session II: Admission Office</p></td>
                        </tr>
                        <tr>
                            <td><p>11 : 15 am - 11 : 45 am</p></td>
                            <td><p className="event">Workshop II: Chemistry Engineering Virtual Lab</p></td>
                        </tr>
                        <tr>
                            <td><p>11 : 45 am - 12 : 45 pm</p></td>
                            <td><p className="event">Lunch Break</p></td>
                        </tr>
                        <tr>
                            <td><p>12 : 45 pm - 1 : 45 pm</p></td>
                            <td><p className="event">Workshop III: Scratch</p></td>
                        </tr>
                        <tr>
                            <td><p>1 : 45 pm - 2 : 00 pm</p></td>
                            <td><p className="event">Info Session III: oSTEM</p></td>
                        </tr>
                        <tr>
                            <td><p>2 : 00 pm - 3 : 00 pm</p></td>
                            <td><p className="event">Workshop IV: 3D Modeling</p></td>
                        </tr>
                        <tr>
                            <td><p>3 : 00 pm - 3 : 05 pm</p></td>
                            <td><p className="event">Closing Ceremony</p></td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </section>
    );
}

export default Timeline;