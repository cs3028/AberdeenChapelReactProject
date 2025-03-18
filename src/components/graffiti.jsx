import React from 'react';
import Footer from './Footer'; 
import { useNavigate } from "react-router-dom";
import "./moreInfo.css";


  function Graffiti() {
  const navigate = useNavigate() ;
  return (
    <div className="graffiti">
      <h1>Ancient Graffiti Within The Chapel</h1>
      <button className="backButton" onClick={() => navigate(-1)}>
        Back to Tour
      </button>
      <Footer />
    </div>
  );
}



export default Graffiti;


