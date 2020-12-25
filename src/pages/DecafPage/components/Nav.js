import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

import Logo from '../assets/logo-header.svg';

const DecafNav = ({ isCompany }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <header className="decaf-nav">
            <Navbar expand="md">
                <NavbarBrand href="/decaf/companies">
                    <img src={Logo} alt="logo" />
                    <span>DECAF</span>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="#">HOME</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">ABOUT</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">FAQ</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">SPONSORS</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </header>
    );
};

export default withRouter(DecafNav);
