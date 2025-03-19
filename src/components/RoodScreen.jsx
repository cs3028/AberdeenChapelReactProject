import React from 'react';
import Footer from './Footer';
import { useNavigate } from "react-router-dom";
import "./moreInfo.css";

function RoodScreen() {
  const navigate = useNavigate() ;
  return (
    <div className="RoodScreen">
      <h1>Rood Screen</h1>
      <p>The Rood Screen, originally a divider between worshipers and the clergy, was moved to align with the current entrance to accommodate changing needs. Initially, the chapel was reserved for King’s College members, with the screen separating students from leadership. After its relocation, the growing student body had to attend services at St. Machar’s, monitored by professors to ensure no one strayed.</p>
      <button className="backButton" onClick={() => navigate(-1)}>
        Back to Tour
      </button>
      <Footer />
    </div>
  );
}

export default RoodScreen;
