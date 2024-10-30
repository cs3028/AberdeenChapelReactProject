import React from 'react';
import MapComponent from './components/ChapelComponent'; // Adjust the path as necessary
import Navbar from './Navbar';
import Carousel from './Carousel';

function App() {
  const images = [

    "https://c8.alamy.com/comp/PK3K2X/inside-the-chapel-of-kings-college-at-aberdeen-university-scotland-PK3K2X.jpg",
    "https://via.placeholder.com/800x400/7f7fff",
    "https://via.placeholder.com/800x400/7fff7f",
  ];

  return (
    <div className="App">
      <Navbar />
      <MapComponent />
      <Carousel images={images} interval={3000} />
    </div>
  );
}

export default App;

