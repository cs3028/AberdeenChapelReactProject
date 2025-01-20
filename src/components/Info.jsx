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

  // State to store the carousel's opacity
  const [carouselOpacity, setCarouselOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      
      const maxScroll = 100; 

      
      const scrolled = window.scrollY;

      
      let newOpacity = 1 - scrolled / maxScroll;

      
      if (newOpacity < 0.2) {
        newOpacity = 0.2
      }

      setCarouselOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);

    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="info-container" style={{ minHeight: '100vh' }}>
      {/* Top Carousel */}
      <div
        className="carousel-container"
        style={{
          opacity: carouselOpacity,
          transition: 'opacity 0.2s ease-out' // smooth out opacity changes
        }}
      >
        <Carousel images={images} interval={4000} />
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













