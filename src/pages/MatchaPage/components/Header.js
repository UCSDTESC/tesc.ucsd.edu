import React, { useState, useEffect, useMemo } from 'react';
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

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    // className is (one of) the class name of the respective section on page
    const navLinks = useMemo(
        () => [
            { name: 'home', href: '#', className: 'matcha-hero' },
            { name: 'about', href: '#about', className: 'matcha-about' },
            // {
            //     name: 'attending',
            //     href: '#attending',
            //     className: 'matcha-attending',
            // },
            {
                name: 'sessions',
                href: '#sessions',
                className: 'matcha-sessions',
            },
            { name: 'faq', href: '#faq', className: 'matcha-faq' },
            { name: 'contact', href: '#contact', className: 'matcha-footer' },
        ],
        []
    );

    const toggle = () => setIsOpen(!isOpen);

    useEffect(() => {
        // handle navbar color change when scrolled down
        const handleScroll = () => {
            let _nav = $('#top-nav');
            const SCROLL_THRESHOLD = 2 * _nav.height();

            if ($(window).scrollTop() > SCROLL_THRESHOLD) {
                // if user scrolled down enough, make the nav green
                _nav.addClass('matcha__bg-dark-green shadow');
            } else {
                if (
                    $(window).width() > 768 ||
                    $('.navbar-toggler').attr('aria-expanded') === 'false'
                ) {
                    _nav.removeClass('matcha__bg-dark-green shadow');
                }
            }
        };

        const handleTogglerClick = (e) => {
            let _nav = $('#top-nav');
            const SCROLL_THRESHOLD = 2 * _nav.height();

            if ($('.navbar-toggler').scrollTop() < SCROLL_THRESHOLD) {
                if (_nav.hasClass('matcha__bg-dark-green')) {
                    _nav.removeClass('matcha__bg-dark-green');
                } else {
                    _nav.addClass('matcha__bg-dark-green');
                }
            }
        };

        // handle the scroll performance issue
        const debounce = (func, wait = 20, immediate = true) => {
            let timeOut;

            return () => {
                let context = this,
                    args = arguments;
                const later = () => {
                    timeOut = null;
                    if (!immediate) func.apply(context, args);
                };
                const callNow = immediate && !timeOut;
                clearTimeout(timeOut);
                timeOut = setTimeout(later, wait);
                if (callNow) func.apply(context, args);
            };
        };

        $(window).on('scroll', debounce(handleScroll, 15));
        $('.navbar-toggler').on('click', handleTogglerClick);

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
            $(window).off('scroll', handleScroll);
            $('.navbar-toggler').off('click', handleTogglerClick);
            navLinks.forEach(({ href }) => $(`a[href='${href}']`).off());
        };
    }, [navLinks]);

    return (
        <Navbar
            expand="lg"
            className="matcha-header matcha__px-std"
            id="top-nav"
        >
            <NavbarBrand href="/matcha" className="matcha-header__nav-brand">
                matcha
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
}

export default Header;
