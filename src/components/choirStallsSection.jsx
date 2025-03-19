import React from 'react';
import Footer from './Footer';
import { useNavigate } from "react-router-dom";
import "./moreInfo.css";

function ChoirStallsSection() {
  const navigate = useNavigate() ;
  return (
    <div className="choirStallsSection">
      <h1>Choir Stalls Information</h1>
      <p> </p>
      <button className="backButton" onClick={() => navigate(-1)}>
        Back to Tour
      </button>
      <Footer />
    </div>
  );
}

export default ChoirStallsSection;