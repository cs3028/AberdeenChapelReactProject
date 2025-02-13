import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MapComponent from './components/ChapelComponent'; // Adjust the path as necessary
import Layout from './components/Layout';
import Info from './components/Info';
import About from './components/About';
import Panorama from './components/Panorama';



function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={
            <Layout>
              <MapComponent />
            </Layout>
           }
          />
          <Route path="/info" element={
            <Layout>
              <Info />
            </Layout>
           }
          />
          <Route path="/about" element={
            <Layout>
              <About />
            </Layout>
           }
          />
          <Route path="/panorama" element={
            <Layout>
              <Panorama />
            </Layout>
           }
          />
        </Routes>
      </Router>
  );
}

export default App;

