import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from './components/Layout';
import Info from './components/Info';
import About from './components/About';
import Organ from './components/Organ';
import SmallPulpit from './components/SmallPulpit' ;
import WarMemorial from './components/WarMemorial' ;
import RoodScreen from './components/RoodScreen' ;
import Panorama from './components/Panorama';



function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={
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
          <Route path="/organ" element={
            <Layout>

              <Organ />

            </Layout>
           }
          />
          <Route path="/smallPulpit" element={
            <Layout>

              <SmallPulpit />

            </Layout>
           }
          />
          <Route path="/warMemorial" element={
            <Layout>

              <WarMemorial />

            </Layout>
           }
          />
          <Route path="/roodScreen" element={
            <Layout>

              <RoodScreen />

            </Layout>
           }
          />
        </Routes>
      </Router>
  );
}

export default App;

