import React from 'react';
import Footer from './Footer'; 
import { useNavigate } from "react-router-dom";
import "./moreInfo.css";


function WarMemorial() {
  const navigate = useNavigate() ;
  return (
    <div className="WarMemorial">
      <h1>War Memorial</h1>
      <button className="backButton" onClick={() => navigate(-1)}>
        Back to Tour
      </button>
      <Footer />
    </div>
  );
}

export default WarMemorial;
