import React, { useState, useEffect } from "react";
import "./carousel.css"; // Import the CSS file for styling

const Carousel = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change slides after the interval
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  // Go to the previous slide
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Go to the next slide
  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Go to a specific slide based on the index
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-container">
      <button
        onClick={goToPrevious}
        className="nav-button left"
        aria-label="Previous Slide"
      >
        &#10094;
      </button>

      {/* Wrapper for images with sliding effect */}
      <div className="carousel-images" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className="carousel-image"
          />
        ))}
      </div>

      <button
        onClick={goToNext}
        className="nav-button right"
        aria-label="Next Slide"
      >
        &#10095;
      </button>

      {/* Carousel Indicators */}
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`carousel-indicator ${
              index === currentIndex ? "active" : ""
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;