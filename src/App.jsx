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
import AnteChapel from './components/Ante-Chapel';
import Graffiti from './components/graffiti';
import ChoirStalls from './components/ChoirStallsSection';
import LargePulpit from './components/largePulpit';
import ElphinstoneGrave from './components/elphinstoneGrave';
import ChapelCeiling from './components/chapelCeiling';
import Mary from './components/goodbyeMary';
import StainedGlass from './components/stainedGlass';




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
          <Route path="/anteChapel" element={
            <Layout>

              <AnteChapel />

            </Layout>
           }
          />
          <Route path="/graffiti" element={
            <Layout>

              <Graffiti />

            </Layout>
           }
          />
          <Route path="/choirStalls" element={
            <Layout>

              <ChoirStalls />

            </Layout>
           }
          />
          <Route path="/largePulpit" element={
            <Layout>

              <LargePulpit />

            </Layout>
           }
          />
          <Route path="/elphinstoneGrave" element={
            <Layout>

              <ElphinstoneGrave />

            </Layout>
           }
          />
           <Route path="/chapelCeiling" element={
            <Layout>

              <ChapelCeiling />

            </Layout>
           }
          />
          <Route path="/mary" element={
            <Layout>

              <Mary />

            </Layout>
           }
          />
          <Route path="/stainedGlass" element={
            <Layout>

              <StainedGlass />

            </Layout>
           }
          />
        </Routes>
      </Router>
  );
}

export default App;

