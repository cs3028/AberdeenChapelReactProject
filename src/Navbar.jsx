import React, { useState } from 'react';

const Navbar = () => {

    const [isNavMenuOpen, setNavMenuOpen] = useState(false);

    const navMenu = [
        { label: 'Study', link: '#study' },
        { label: 'About', link: '#about' },
        { label: 'Research', link: '#research' },
        { label: 'Alumni & Giving', link: '#alumni' },
        { label: 'Business', link: '#business' },
        { label: 'Quick Links', link: '#quicklinks' }
    ];

    const toggleNavMenu = () => {

        setNavMenuOpen(prevState => !prevState);  // Toggle the menu state
    };

    return (
        <nav className="navbar">
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

            {/* Conditionally render the mobile menu */}
            {isNavMenuOpen && (
                <ul className="navbar-links mobile active">
                    {navMenu.map((item, index) => (
                        <li key={index}>
                            <a href={item.link} onClick={toggleNavMenu}>
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            )}

        </nav>
    );
};

export default Navbar;
