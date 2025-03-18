import React from 'react';
import Footer from './Footer'; 
import { useNavigate } from "react-router-dom";
import "./moreInfo.css";


function ChapelCeiling() {
  const navigate = useNavigate() ;
  return (
    <div className="chapelCeiling">
      <h1>The Chapel Ceiling</h1>
      <button className="backButton" onClick={() => navigate(-1)}>
        Back to Tour
      </button>
      <Footer />
    </div>
  );
}



export default ChapelCeiling;


