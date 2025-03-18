import React from 'react';
import Footer from './Footer'; 
import { useNavigate } from "react-router-dom";
import "./moreInfo.css";


function ChapelMouse() {
  const navigate = useNavigate() ;
  return (
    <div className="chapelMouse">
      <h1>The Chapel Mouse</h1>
      <button className="backButton" onClick={() => navigate(-1)}>
        Back to Tour
      </button>
      <Footer />
    </div>
  );
}



export default ChapelMouse;


