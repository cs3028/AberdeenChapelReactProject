import React, { useState, useEffect } from 'react';
import Carousel from '../Carousel';
import "../info.css";
import Footer from './Footer';

function Landing() {
    const images = [
      "/images/chapel_1.jpg",
      "/images/inside.jpg",
      "/images/right.jpg",
    ];
  // State to store the carousel's opacity
  const [carouselOpacity, setCarouselOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = 800;
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
        <Carousel images={images} interval={3200} />
      </div>
    <Footer/>
    </div>
  );
}
      export default Landing; 