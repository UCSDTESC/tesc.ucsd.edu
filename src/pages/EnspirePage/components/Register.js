import React from 'react';
import { Container, Button } from 'reactstrap';
import Divider from './Divider';

const Register = () => {
    return (
        <section className="enspire-register">
            <h1 className="section-title">register</h1>
            <Divider />
            <Container>
                <div className="enspire-register__title">
                    <h2 className="sup">held virtually on</h2>
                    <h1 className="main">January 30, 2021</h1>
                    <h2 className="sub">9-3PM PST</h2>
                </div>
                {/* <Button className="d-block" href="">
                    Visit our Facebook
                </Button> */}
                <Button
                    className="d-block"
                    href="https://tesc.link/EnspireStudentSignUp"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Register
                </Button>
            </Container>
        </section>
    );
};

export default Register;
