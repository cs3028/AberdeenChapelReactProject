import React from 'react';
import MapComponent from './components/ChapelComponent'; // Adjust the path as necessary
import Navbar from './Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Google Maps in React</h1>
      <MapComponent />
    </div>
  );
}

export default App;
