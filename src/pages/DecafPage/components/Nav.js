import React, { useState, useEffect, useMemo } from 'react';
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
import $ from 'jquery';

import LogoCompany from '../assets/company/logo-header.svg';
import LogoStudent from '../assets/student/logo-header.svg';

const DecafNav = ({ isCompany }) => {
    const [isOpen, setIsOpen] = useState(false);
    const navLinks = useMemo(() => ['about', 'faq', 'sponsors'], []);

    const toggle = () => setIsOpen(!isOpen);

    useEffect(() => {
        navLinks.forEach((name) => {
            $(`a[href='#${name}']`).on('click', () => {
                $('html,body').animate(
                    {
                        scrollTop: $(`.decaf-${name}`).offset().top,
                    },
                    'slow'
                );
            });
        });

        return () => {
            navLinks.forEach(({ href }) => $(`a[href='${href}']`).off());
        };
    }, [navLinks]);

    return (
        <header className="decaf-nav">
            <Navbar expand="lg" light>
                <NavbarBrand>
                    <img
                        src={isCompany ? LogoCompany : LogoStudent}
                        alt="logo"
                    />
                    <span
                        className={isCompany ? 'logo-company' : 'logo-student'}
                    >
                        DECAF
                    </span>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav
                        navbar
                        className={`ml-auto ${
                            isCompany ? 'nav-company' : 'nav-student'
                        }`}
                    >
                        {navLinks.map((name, i) => (
                            <NavItem key={i}>
                                <NavLink href={`#${name}`}>
                                    {name.toUpperCase()}
                                </NavLink>
                            </NavItem>
                        ))}
                    </Nav>
                </Collapse>
            </Navbar>
        </header>
    );
};

export default withRouter(DecafNav);
