import React from 'react';
import MapComponent from './components/ChapelComponent';
import Navbar from './Navbar';
import './App.css';
import ARViewer from './components/ar'; // Ensure the ARViewer component is imported correctly

function App() {
  return (
    <div className="App">
      <Navbar />
      <MapComponent />

      {/* AR Component Section */}
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <h2>Augmented Reality Experience</h2>
        <ARViewer /> {/* Replace placeholder with the actual ARViewer component */}
      </div>

      {/* Footer segment below the map */}
      <div style={footerStyle}>
        <img src="/images/UoA.svg" alt="University of Aberdeen" style={logoStyle} />
        
        {/* Text and UK.png container */}
        <div style={contentContainerStyle}>
          {/* Text Section */}
          <div style={textContainerStyle}>
            <div style={tightSpacingStyle}>
              <p>University of Aberdeen</p>
              <p>King's College,</p>
              <p>Aberdeen,</p>
              <p style={postcodeStyle}>AB24 3FX</p>
            </div>

            <div style={normalSpacingStyle}>
              <p>Tel: <span style={highlightStyle}>+44 (0)1224 272000</span></p>
              <p style={highlightStyle}>Contacts</p>
              <p style={highlightStyle}>A to Z</p>
              <p style={highlightStyle}>Maps and Directions</p>
              <p style={highlightStyle}>Staff Directory</p>
            </div>
          </div>

          {/* UK Flag Image positioned on the right */}
          <img src="/images/UK.png" alt="UK Flag" style={ukImageStyle} />
        </div>
      </div>
    </div>
  );
}

// Define footer styles and other styles here as needed

const footerStyle = {
  backgroundColor: '#272727',
  color: 'white',
  textAlign: 'left',
  height: '350px',
  marginTop: '70px',
  fontSize: '0.9rem',
  paddingTop: '10px',
  paddingBottom: '20px',
  paddingLeft: '20px',
};

const logoStyle = {
  display: 'block',
  margin: '40px auto 30px',
  height: '50px',
};

const contentContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
};

const textContainerStyle = {
  marginLeft: '20px',
};

const tightSpacingStyle = {
  lineHeight: '0.2',
};

const normalSpacingStyle = {
  lineHeight: '1.0',
  marginTop: '10px',
};

const highlightStyle = {
  color: '#FFD414',
  fontWeight: 600,
};

const postcodeStyle = {
  marginBottom: '25px',
};

const ukImageStyle = {
  position: 'absolute',
  right: '20px',
  top: '0px',
  height: '220px',
  filter: 'grayscale(100%)',
};

export default App;
