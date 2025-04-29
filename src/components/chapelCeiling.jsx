import React from 'react';
import Footer from './Footer'; 
import { useNavigate } from "react-router-dom";
import "../info.css";


function ChapelCeiling() {
  const navigate = useNavigate() ;
  return (
    <div>
      <div className="chapelCeiling">
        <h1>The Chapel Ceiling</h1>
        <button className="backButton" onClick={() => navigate(-1)}>
          Back to Tour
        </button>
      </div>
      <Footer />
    </div>
  );
}



export default ChapelCeiling;


