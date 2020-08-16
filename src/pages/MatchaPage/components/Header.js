import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navLinks = [
        { name: 'home', href: '#' },
        { name: 'about', href: '#' },
        { name: 'attending', href: '#' },
        { name: 'flo', href: '#' },
        { name: 'faq', href: '#' },
        { name: 'contact', href: '#' },
    ];
    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar expand="lg" className="matcha-header">
            <NavbarBrand href="/matcha" className="matcha-header__nav-brand">
                Matcha
            </NavbarBrand>
            <NavbarToggler
                onClick={toggle}
                className="matcha-header__nav-toggler"
            />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    {navLinks.map((link, i) => (
                        <NavItem
                            key={i}
                            className="matcha-header__nav-item px-lg-3"
                        >
                            <NavLink href={link.href}>
                                {link.name.toUpperCase()}
                            </NavLink>
                        </NavItem>
                    ))}
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default Header;
