import React, { useState, useRef } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Navbar.css';
import logo from '../../assets/logo2.svg';
import underline from '../../assets/nav_underline.svg';
import menu_icon from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
    const [menu, setMenu] = useState("home");
    const menuRef = useRef();

    const openMenu  = () => {
        menuRef.current.style.right='0';
    }
    const closeMenu  = () => {
        menuRef.current.style.right='-350px';
    }
    const navItems = [
        { id: "home", label: "Home" },
        { id: "about", label: "About Me" },
        { id: "services", label: "Services" },
        { id: "work", label: "Portfolio" },
        { id: "contact", label: "Contact" },
    ];

    return (
        <div className='navbar'>
            <img src={logo} alt="Logo" className="nav-logo" />
            <img src={menu_icon} alt="" onClick={openMenu} className='nav-mob-open' />
            <ul ref={menuRef} className="nav-menu">
                <img src={menu_close} alt="" onClick={closeMenu} className='nav-mob-close' />
                {navItems.map((item) => (
                    <li key={item.id}>
                        <AnchorLink className='anchor-link' offset={50} href={`#${item.id}`} onClick={() => setMenu(item.id)}><p>{item.label}</p>{menu === item.id && <img src={underline} alt="underline" />}</AnchorLink></li>))}
            </ul>
            <div className="nav-conncet">
                <AnchorLink className="anchor-link" offset={50} href="#contact">Connect With Me </AnchorLink>
            </div>

        </div>
    );
};

export default Navbar;
