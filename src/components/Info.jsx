import React from 'react';
import Carousel from '../Carousel';
import "../info.css";

function Info() {
  const images = [
    "/images/chapel_1.jpg",
    "/images/inside.jpg",
    "/images/right.jpg",
  ];

  const infoColumns = [
    { title: "History", content: "This chapel has a rich history dating back to the 1800s." },
    { title: "Architecture", content: "Features Gothic Revival design with intricate details." },
    { title: "Events", content: "Hosts weddings, concerts, and community events throughout the year." },
  ];

  return (
    <div className="info-container">
      {/* Top Carousel */}
      <div className="carousel-container">
        <Carousel images={images} interval={3000} />
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

      {/* Left Candle */}
      <div className="holder left">
        <div className="candle">
          <div className="blinking-glow"></div>
          <div className="thread"></div>
          <div className="glow"></div>
          <div className="flame"></div>
        </div>
      </div>

      {/* Right Candle */}
      <div className="holder right">
        <div className="candle">
          <div className="blinking-glow"></div>
          <div className="thread"></div>
          <div className="glow"></div>
          <div className="flame"></div>
        </div>
      </div>
    </div>
  );
}

export default Info;











