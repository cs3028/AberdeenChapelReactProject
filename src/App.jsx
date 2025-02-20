import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MapComponent from './components/ChapelComponent'; // Adjust the path as necessary
import Layout from './components/Layout';
import Info from './components/Info';
import About from './components/About';
import Landing from './components/Landing';



function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={
            <Layout>
              <Landing />
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

