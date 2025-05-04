import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  // show the button when scrolling down 100px
  const handleScroll = () => {
    if (document.documentElement.scrollTop > 100 || document.body.scrollTop > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // smooth scrolling effect
    });
  };

  // add scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="Footer">
      <div style={footerStyle}>
        <img src="/images/UoA.svg" alt="University of Aberdeen" style={logoStyle} />

        <div style={contentContainerStyle}>
          <div style={textContainerStyle}>
            <div style={tightSpacingStyle}>
              <p>University of Aberdeen</p>
              <p>King's College,</p>
              <p>Aberdeen,</p>
              <p style={postcodeStyle}>AB24 3FX</p>
            </div>

            <div style={normalSpacingStyle}>
              <p>Tel: <span style={highlightStyle}>+44 (0)1224 272000</span></p>
              <Link to="/login" style={highlightStyle} >Staff Login</Link>
            </div>
          </div>

          <img src="/images/UK.png" alt="UK Flag" style={ukImageStyle} />
          <img src="/images/pointer.png" alt="Pointer" style={PointerStyle} />
        </div>
      </div>

      {isVisible && (
        <button onClick={scrollToTop} style={backToTopButtonStyle}>
          Top Of Page    
        </button>
      )}
    </div>
  );
}

// footer styles
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

// logo styles
const logoStyle = {
  display: 'block',
  margin: '20px',
  height: '50px',
};

// styles for content container to align text and image
const contentContainerStyle = {
  display: 'flex',
  flexDirection: 'column', // stack items vertically
  position: 'relative',
  zIndex: 1,
};

// style to shift only the text slightly to the right
const textContainerStyle = {
  marginLeft: '20px', // shift text content to the right
  zIndex: 1, // bring text to the front
};

// tight line spacing for the first section
const tightSpacingStyle = {
  lineHeight: '0.2',
};

// normal line spacing for the second section
const normalSpacingStyle = {
  lineHeight: '1.0',
  marginTop: '10px',
};

// highlight color and bold style for specific text
const highlightStyle = {
  color: '#FFD414',
  fontWeight: 600,
  zIndex: 1, // bring text to the front
};

// specific spacing for postcode
const postcodeStyle = {
  marginBottom: '25px',
};

// UK image styles
const ukImageStyle = {
  position: 'absolute',
  left: '130px',
  top: '10px',
  height: '220px',
  filter: 'grayscale(100%)',
  zIndex: -0, // send image to the back
};

const PointerStyle = {
  position: 'absolute',
  left: '260px',
  top: '40px',
  height: '25px',
  width: '20px',
  filter: 'grayscale(0%)',
  zIndex: 1, // send image to the front
};

// styles for the back to top button
const backToTopButtonStyle = {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  backgroundColor: '#8A2F2F',
  color: 'white',
  border: 'none',
  padding: '10px 15px',
  fontSize: '16px',
  borderRadius: '5px',
  cursor: 'pointer',
  zIndex: 2,
};

export default Footer;


