import React from 'react';
import MapComponent from './components/ChapelComponent'; // Adjust the path as necessary
import Navbar from './Navbar'
import ImageCarousel from './imageCarousel';

function App() {
  return (
    <div className="App">
      <Navbar />
     
      <MapComponent />

      <Link to="/ImageCarousel">Go to the Carousel Page</Link>
    </div>
  );
}

export default App;
