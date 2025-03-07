import React from 'react';

function Footer() {
  return (
    <div className="Footer">

      {/* Footer segment below the map */}
      <div style={footerStyle}>
        <img src="/images/UoA.svg" alt="University of Aberdeen" style={logoStyle} />
        
        {/* Text and UK.png container */}
        <div style={contentContainerStyle}>
          {/* Text Section */}
          <div style={textContainerStyle}>
            {/* First section with tighter spacing */}
            <div style={tightSpacingStyle}>
              <p>University of Aberdeen</p>
              <p>King's College,</p>
              <p>Aberdeen,</p>
              <p style={postcodeStyle}>AB24 3FX</p>
            </div>

            {/* Second section with normal spacing */}
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

// Define footer styles
const footerStyle = {
  backgroundColor: '#272727',
  color: 'white',
  textAlign: 'left',
  height: '350px',
  fontSize: '0.9rem',
  paddingTop: '10px',
  paddingBottom: '10px',
  paddingLeft: '20px',
};

// Define logo styles
const logoStyle = {
  display: 'block',
  margin: '40px auto 30px',
  height: '50px',
};

// Define styles for content container to align text and image
const contentContainerStyle = {
  display: 'flex',
  flexDirection: 'column', // Stack items vertically
  position: 'relative',
};

// Define style to shift only the text slightly to the right
const textContainerStyle = {
  marginLeft: '20px', // Shift text content to the right
};

// Define tight line spacing for the first section
const tightSpacingStyle = {
  lineHeight: '0.2',
};

// Define normal line spacing for the second section
const normalSpacingStyle = {
  lineHeight: '1.0',
  marginTop: '10px',
};

// Define highlight color and bold style for specific text
const highlightStyle = {
  color: '#FFD414',
  fontWeight: 600,
};

// Define specific spacing for postcode
const postcodeStyle = {
  marginBottom: '25px',
};

// Define UK image styles for right alignment
const ukImageStyle = {
  position: 'absolute',
  right: '20px',
  top: '0px', // Adjust as needed for vertical position
  height: '220px', // Adjust height as needed
  filter: 'grayscale(100%)',
};

export default Footer;


