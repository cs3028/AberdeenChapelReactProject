import React from 'react';
import Carousel from '../Carousel';


function Info  () {
  const images = [
    "/images/chapel_1.jpg",
    "/images/inside.jpg",
    "/images/right.jpg",
  ];

  
  return (
    <div classname = "Info">
    
    
      <Carousel images={images} interval={3000} />
      <h1> info </h1>
    </div>
  );
};

export default Info;







