import React, { useState, useEffect, useCallback } from 'react';
import Carousel from '../Carousel';
import "../info.css";
import Footer from './Footer';
import { Link } from "react-router-dom";
import eyeIcon from './eye.png';
import menuArrow from './arrow-icon.png';

function Info() {
  const videoSrc = "/chapel.mp4";

  const [menuOpen, setMenuOpen] = useState(false);
  const [carouselImages, setCarouselImages] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Update screen size (mobile vs desktop)
  const updateScreenSize = useCallback(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  useEffect(() => {
    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);

    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
  }, [updateScreenSize]);

  // Button to start the tour
  function StartTour() {
    return (
      <Link to="/panorama" className="Start-Tour-Button">
        Start Tour
        <img src={eyeIcon} alt="Eye Icon" className="eye-icon" />
      </Link>
    );
  }

  const services = [
    {
      title: "Alter",
      content: "The altar is a sacred table used for worship or sacrifice, typically serving as the focal point during religious rites such as the Eucharist.",
      icon: "/images/alter.jpg"
    },
    {
      title: "Cross",
      content: "The cross stands as a central symbol of Christianity, representing the sacrificial death and resurrection of Jesus Christ.",
      icon: "/images/cross.jpg"
    },
    {
      title: "Chapel",
      content: "A chapel is a smaller place of worship intended for private prayer, reflection, or more intimate religious gatherings.",
      icon: "/images/chapel_icon.jpg"
    },
    {
      title: "Bible",
      content: "The Bible is the holy scripture of Christianity, encompassing sacred texts that guide believers in faith, doctrine, and morality.",
      icon: "/images/bible.jpg"
    },
    {
      title: "Chalice",
      content: "The chalice is a consecrated cup used in Christian liturgy to hold wine, symbolizing the blood of Christ.",
      icon: "/images/challace.jpg"
    }
  ];

  const updateCarouselImages = useCallback(() => {
    if (window.innerWidth <= 768) {
      setCarouselImages([
        "/images/chapel1M.png",
        "/images/chapel2M.png",
        "/images/chapel3M.png"
      ]);
    } else {
      setCarouselImages([
        "/images/chapel1.png",
        "/images/chapel2.png",
        "/images/chapel3.png"
      ]);
    }
  }, []);

  useEffect(() => {
    updateCarouselImages();
    window.addEventListener('resize', updateCarouselImages);

    return () => {
      window.removeEventListener('resize', updateCarouselImages);
    };
  }, [updateCarouselImages]);

  return (
    <div className="info-container" style={{ minHeight: '150vh' }}>
      <div className={`menu-icon ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
        <img src={menuArrow} alt="Menu Arrow" className="menu-arrow" />
      </div>

      {/* Navigation Menu */}
      <nav className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <ul>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/gallery" onClick={toggleMenu}>Gallery</Link></li>
          <li><Link to="/map" onClick={toggleMenu}>Map</Link></li>
          <li><Link to="/tour" onClick={toggleMenu}>Tour</Link></li>
          <li><Link to="/audio" onClick={toggleMenu}>Audio</Link></li>
          <li><Link to="/info" onClick={toggleMenu}>Info</Link></li>
        </ul>
      </nav>

      {/* Conditional rendering of video or carousel based on screen size */}
      {isMobile ? (
        // Show Carousel (Slideshow) for mobile
        <div className="carousel-container">
          <Carousel images={carouselImages} />
        </div>
      ) : (
        // Show Video for larger screens
        <div className="video-container">
          <video autoPlay muted loop className="video-background" style={{ width: '100%', height: 'auto' }}>
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      <div className="Start-Tour">
        <StartTour />
      </div>

      {/* Two-Column Section */}
      <div className="two-column-section">
        <div className="column">
          <h2>KING'S COLLEGE DESIGN</h2>
          <p>
            The Chapel sanctuary which sits beneath the Tower is a space of beauty, tranquillity, and peace.
            Worship services are held every Wednesday during the academic term in King's College Chapel. This service starts at 5.15pm unless otherwise indicated.
            Find out all you need to know about our Worship services as well as occasional services, recitals, tours and other events. Please contact us should you be planning a significant service for yourself or someone you love.
          </p>
          <p>
            Aberdeen’s King’s College, founded in 1495 by William Elphinstone, is at the heart of the University of Aberdeen—one of Scotland’s oldest and most distinguished universities.
          </p>
        </div>

        <div className="column">
          <h2>KING'S COLLEGE EVENTS</h2>
          <p>
            King's College Chapel is a beautiful place to be married and holds great significance for many people. The Chapel is an ancient and beautiful building, the perfect setting for your ceremony.
          </p>
          <img className="priest" src="/images/priest.jpg" alt="priest" />
        </div>
      </div>

      {/* Services Section */}
      <div className="services-container">
        {services.map((service, i) => (
          <div key={i} className="service-item">
            <img src={service.icon} alt={service.title} className="service-icon" />
            <h3>{service.title}</h3>
            <p>{service.content}</p>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default Info;