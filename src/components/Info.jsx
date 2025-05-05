import React, { useState, useEffect } from 'react';
import Carousel from '../Carousel';
import "../info.css";
import Footer from './Footer';
import { Link } from "react-router-dom";

function Info() {
  // Images for mobile and desktop
  const mobileImages = [
    "/images/chapel1M.png",
    "/images/chapel2M.png",
    "/images/chapel3M.png",
  ];
  
  const desktopImages = [
    "/images/Desktop1.png",
    "/images/Desktop2.png",
    "/images/Desktop3.png",
    "/images/Desktop4.png",
    "/images/Desktop5.png",
  ];
  
  // State to track which set of images to use
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
  const [images, setImages] = useState(isDesktop ? desktopImages : mobileImages);

  // button to start the tour (just a link to the panorama page)
  function StartTour(){
    return(
    <Link to = "/panorama" className = "Start-Tour-Button">Tour Start
      <img src="/images/eye.png" alt = "Eye Icon" className = "eye-icon"/>
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

  // state to store the carousel's opacity
  const [carouselOpacity, setCarouselOpacity] = useState(1);

  useEffect(() => {
    // Handle scroll for carousel opacity
    const handleScroll = () => {
      const maxScroll = 800;
      const scrolled = window.scrollY;
      let newOpacity = 1 - scrolled / maxScroll;
      if (newOpacity < 0.2) {
        newOpacity = 0.2;
      }
      setCarouselOpacity(newOpacity);
    };

    // Handle window resize for responsive images
    const handleResize = () => {
      const desktop = window.innerWidth > 768;
      setIsDesktop(desktop);
      setImages(desktop ? desktopImages : mobileImages);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    // Initial check to set the correct images on component mount
    handleResize();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="info-container" style={{ minHeight: '150vh' }}>
      <div
        className="carousel-container"
        style={{
          opacity: carouselOpacity,
          transition: 'opacity 0.2s ease-out'
        }}
      >
        <Carousel images={images} interval={3200} />
      </div>
      <div className = "Start-Tour">
      <StartTour/>
      </div>
      <div className="two-column-section">
        <div className="column">
          <h2>Welcome!</h2>
          <p>
          'Good day to you' or as we say in Doric: 'Fit Like'. Welcome to the King's Chapel one of the oldest surviving buildings on our Aberdeen Campus founded in 1495 and began construction in 1500. We are happy to have you today and hope that you will enjoy exploring with our app. As you move around the chapel use your phone to look for areas highlighted by unique links to find out more.
          </p>
        </div>
        <div className="column">
          
        </div>
      </div>  
       <div className="services-container">
        {services.map((service, i) => (
          <div key={i} className="service-item">
            <img
              src={service.icon}
              alt={service.title}
              className="service-icon"
            />
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