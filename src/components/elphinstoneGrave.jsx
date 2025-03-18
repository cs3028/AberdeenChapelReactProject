import React from 'react';
import Footer from './Footer'; 
import { useNavigate } from "react-router-dom";
import "./moreInfo.css";


function ElphinstoneGrave() {
  const navigate = useNavigate() ;
  return (
    <div className="ElphinstoneGrave">
      <h1>Elphinstone's Grave</h1>
      <button className="backButton" onClick={() => navigate(-1)}>
        Back to Tour
      </button>
      <Footer />
    </div>
  );
}



export default ElphinstoneGrave;


