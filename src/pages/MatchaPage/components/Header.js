import React, { useState, useEffect } from 'react';
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
    const navLinks = [
        { name: 'home', href: '#' },
        { name: 'about', href: '#' },
        { name: 'attending', href: '#' },
        { name: 'flo', href: '#' },
        { name: 'faq', href: '#' },
        { name: 'contact', href: '#' },
    ];
    const toggle = () => setIsOpen(!isOpen);

    const handleScroll = () => {
        let _nav = $('#top-nav');
        const SCROLL_THRESHOLD = 2 * _nav.height();

        if ($(window).scrollTop() > SCROLL_THRESHOLD) {
            // if user scrolled down enough, make the nav gray
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

    // This function handle the scroll performance issue
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

    useEffect(() => {
        $(window).scroll(debounce(handleScroll, 15));
        $('.navbar-toggler').on('click', handleTogglerClick);

        return () => {
            $(window).off('scroll', handleScroll);
            $('.navbar-toggler').off('click', handleTogglerClick);
        };
    }, [debounce, handleScroll, handleTogglerClick]);

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
