import React, { useMemo, useEffect } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import $ from 'jquery';

const Header = () => {
    // className is (one of) the class name of the respective section on page
    const navLinks = useMemo(
        () => [
            {
                name: 'home',
                href: '#',
                className: 'enspire-hero',
            },
        ],
        []
    );

    useEffect(() => {
        navLinks.forEach(({ href, className }) => {
            $(`a[href='${href}']`).on('click', () => {
                $('html,body').animate(
                    {
                        scrollTop: $(`.${className}`).offset().top,
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
        <header className="enspire-header">
            <Nav vertical>
                {navLinks.map(({ name, href }, i) => (
                    <NavItem key={i}>
                        <NavLink href={href}>{name}</NavLink>
                    </NavItem>
                ))}
            </Nav>
        </header>
    );
};

export default Header;
