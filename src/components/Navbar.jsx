import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
               
             <Link to="/"><img src="/images/logo2.png" alt="University of Aberdeen" /></Link>
            </div>
            <ul className="navbar-links">
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
