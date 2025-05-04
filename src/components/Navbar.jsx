import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(window.scrollY);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

useEffect(() => {
    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY) {
            setIsOpen(false);
        }
        setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
}, [lastScrollY]);



    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/" onClick={closeMenu}>
                    <img src="/images/logo2.png" alt="University of Aberdeen" />
                </Link>
            </div>

            {/* Toggle menu on click */}
            <div className={`menu-icon ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
                <div className="menu-icon-bar"></div>
                <div className="menu-icon-bar"></div>
                <div className="menu-icon-bar"></div>
            </div>

            <ul className={`navbar-links ${isOpen ? "active" : ""}`}>

                <li><Link to="/panorama" onClick={closeMenu}>Ante-Chapel</Link></li>
                <li><Link to="/choirStallsPanorama" onClick={closeMenu}>Choir Stalls</Link></li>
                <li><Link to="/sanctuaryPanorama" onClick={closeMenu}>Sanctuary</Link></li>
                <li><Link to="/Feedback" onClick = {closeMenu}>Feedback</Link></li>
                <li><Link to="/help" onClick = {closeMenu}>Help</Link></li>

            </ul>
            
        </nav>
    );
};

export default Navbar;
