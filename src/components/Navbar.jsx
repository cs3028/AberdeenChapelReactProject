import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/"><img src="/images/logo2.png" alt="University of Aberdeen" /></Link>
            </div>

            {/* Add active class to menu-icon when clicked */}
            <div className={`menu-icon ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
                <div className="menu-icon-bar"></div>
                <div className="menu-icon-bar"></div>
                <div className="menu-icon-bar"></div>
            </div>

            <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
                <li><Link to="/info">Info</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><a href="#research">Research</a></li>
                <li><a href="#alumni">Alumni & Giving</a></li>
                <li><a href="#business">Business</a></li>
                <li><a href="#quicklinks">Quick Links</a></li>
            </ul>
            <div className="navbar-search">
                <button className="search-button">Search</button>
            </div>
        </nav>
    );
}

export default Navbar;
