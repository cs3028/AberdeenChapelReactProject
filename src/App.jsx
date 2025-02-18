import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MapComponent from './components/ChapelComponent'; // Adjust the path as necessary
import Layout from './components/Layout';
import Info from './components/Info';
import About from './components/About';



function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={
            <Layout>

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
        </Routes>
      </Router>
  );
}

export default App;

