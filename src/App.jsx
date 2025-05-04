import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from './components/Layout';
import Info from './components/Info';
import About from './components/About';
import Organ from './components/Organ';
import SmallPulpit from './components/SmallPulpit' ;
import RoodScreen from './components/RoodScreen' ;
import Panorama from './components/Panorama';
import AnteChapel from './components/Ante-Chapel';
import Graffiti from './components/graffiti';
import ChoirStalls from './components/ChoirStallsSection';
import ElphinstoneGrave from './components/elphinstoneGrave';
import Mary from './components/goodbyeMary';
import StainedGlass from './components/stainedGlass';
import ChoirStallsPanorama from './components/choirStallsPanorama'
import SanctuaryPanorama from './components/sanctuaryPanorama';
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./components/Dashboard";
import Feedback from "./components/Feedback"; // Add this import
import Help from "./components/help";


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
          <Route path="/elphinstoneGrave" element={
            <Layout>
              <ElphinstoneGrave />
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
          <Route path="/choirStallsPanorama" element={
            <Layout>
              <ChoirStallsPanorama />
            </Layout>
           }
          />
          <Route path="/sanctuaryPanorama" element={
            <Layout>
              <SanctuaryPanorama />
            </Layout>
           }
          />
          {/* Add new feedback route */}
          <Route path="/feedback" element={
            <Layout>
              <Feedback />
            </Layout>
           }
          />
          <Route path="/help" element={
            <Layout>
              <Help/>
            </Layout>
          }
          />
          {/* login page - no layout, so it's a clean login screen */}
          <Route path="/login" element={<Login />} />

          {/* protected route - only logged-in users can see this */}
          <Route path="/dashboard" element={
              <ProtectedRoute>
                  <Layout>
                      <Dashboard />
                  </Layout>
              </ProtectedRoute>
          }/>
        </Routes>
      </Router>
  );
}

export default App;
