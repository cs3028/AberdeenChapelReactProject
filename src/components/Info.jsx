import React, { useState, useEffect } from 'react';
import Carousel from '../Carousel';
import "../info.css";

function Info() {
  const images = [
    "/images/chapel_1.jpg",
    "/images/inside.jpg",
    "/images/right.jpg",
  ];

  const infoColumns = [
    { title: "History", content: "Around for many years" },
    { title: "Architecture", content: "Old and sacred" },
    { title: "Artifacts", content: "Artifacts from many different types of eras" },
  ];

  // Example new array for your circular “solutions” or “services”
  const services = [
    {
      title: "Branding",
      content: "Craft identity, establish recognition, foster trust—effective branding builds a strong, memorable business presence.",
      icon: "/images/alter.jpg" // update path
    },
    {
      title: "Google Ads",
      content: "Target keywords, create compelling ad copy, set budgets, and monitor performance for effective campaigns.",
      icon: "/images/cross.jpg"
    },
    {
      title: "Social Media",
      content: "Engage audience, share relevant content, utilize visuals, and analyze metrics for successful social media marketing.",
      icon: "/images/chapel_icon.jpg"
    },
    {
      title: "Direct Marketing",
      content: "Personalized messages, targeted campaigns, and measurable results—connect directly with customers to increase engagement.",
      icon: "/images/bible.jpg"
    },
    {
      title: "SEO", // example fifth item
      content: "Improve search engine rankings, drive organic traffic, and boost online visibility with effective SEO strategies.",
      icon: "/images/challace.jpg"
    }
  ];

  // State to store the carousel's opacity
  const [carouselOpacity, setCarouselOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = 100;
      const scrolled = window.scrollY;
      let newOpacity = 1 - scrolled / maxScroll;

      if (newOpacity < 0.2) {
        newOpacity = 0.2;
      }
      setCarouselOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="info-container" style={{ minHeight: '150vh' }}>
      {/* Top Carousel */}
      <div
        className="carousel-container"
        style={{
          opacity: carouselOpacity,
          transition: 'opacity 0.2s ease-out'
        }}
      >
        <Carousel images={images} interval={4000} />
      </div>

       {/* New services section */}
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


       {/* Information Columns */}
      <div className="info-columns">
        {infoColumns.map((column, index) => (
          <div key={index} className="info-column">
            <h2>{column.title}</h2>
            <p>{column.content}</p>
          </div>
        ))}
      </div>

     
    </div>
  );
}

export default Info;














