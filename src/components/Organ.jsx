import React from 'react';
import Footer from './Footer';
import { useNavigate } from "react-router-dom";
import "./moreInfo.css";

function Organ() {
  const navigate = useNavigate() ;
  return (
    <div className="Organ">
      <h1>Organ</h1>
      <button className="backButton" onClick={() => navigate(-1)}>
        Back to Tour
      </button>
      <Footer />
    </div>
  );
}

export default Organ;
