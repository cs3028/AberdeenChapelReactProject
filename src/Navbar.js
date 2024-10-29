import React, { useState } from 'react';

const Navbar = () => {
    const [isNavMenuOpen, setNavMenuOpen] = useState(false); // State to toggle mobile menu
    const [isExiting, setExiting] = useState(false); // State for slide-out animation

    const navMenu = [
        { label: 'Study', link: '#study' },
        { label: 'About', link: '#about' },
        { label: 'Research', link: '#research' },
        { label: 'Alumni & Giving', link: '#alumni' },
        { label: 'Business', link: '#business' },
        { label: 'Quick Links', link: '#quicklinks' }
    ];

    const toggleNavMenu = () => {
        if (isNavMenuOpen) {
            setExiting(true); // Trigger slide-out animation
            setTimeout(() => {
                setNavMenuOpen(false);
                setExiting(false); // Reset for next opening
            }, 300); // Match this timeout to the CSS transition duration
        } else {
            setNavMenuOpen(true); // Show menu immediately
        }
    };

    return (
        <nav className="navbar" style={{ marginBottom: '25px' }}>
            <div className="navbar-logo">
                <img src="/images/UoA2.png" alt="University of Aberdeen" />
            </div>
    
            <ul className="navbar-links">
                {navMenu.map((item, index) => (
                    <li key={index}><a href={item.link}>{item.label}</a></li>
                ))}
                <div className="navbar-search">
                    <button className="search-button">Search</button>
                </div>
            </ul>

            <div className="menu-icon" onClick={toggleNavMenu}>
                <span className="menu-icon-bar"></span>
                <span className="menu-icon-bar"></span>
                <span className="menu-icon-bar"></span>
            </div>

            {/* Mobile Menu */}
            <ul className={`navbar-links mobile ${isNavMenuOpen ? 'active' : ''} ${isExiting ? 'exiting' : ''}`}>
                <button className="close-button" onClick={toggleNavMenu}><img src="/images/X.png" alt="Close" /></button>
                {navMenu.map((item, index) => (
                    <li key={index}>
                        <a href={item.link}>{item.label}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;