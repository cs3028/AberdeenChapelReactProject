const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
               
               <img src="/images/logo.png" alt="University of Aberdeen" />
            </div>
            <ul className="navbar-links">
                <li><a href="#study">Study</a></li>
                <li><a href="#about">About</a></li>
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
};

export default Navbar;