import React from 'react';
import Footer from './Footer';
import { useNavigate } from "react-router-dom";
import "./moreInfo.css";

function RoodScreen() {
  const navigate = useNavigate() ;
  return (
    <div className="RoodScreen">
      <h1>Rood Screen</h1>
      <button className="backButton" onClick={() => navigate(-1)}>
        Back to Tour
      </button>
      <Footer />
    </div>
  );
}

export default RoodScreen;
