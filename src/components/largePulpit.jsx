import React from 'react';
import Footer from './Footer'; 
import { useNavigate } from "react-router-dom";
import "./moreInfo.css";

function LargePulpit() {
  const navigate = useNavigate() ;
  return (
    <div className="largePulpit">
      <h1>The Main Chapel Pulpit</h1>
      <button className="backButton" onClick={() => navigate(-1)}>
        Back to Tour
      </button>
      <Footer />
    </div>
  );
}



export default LargePulpit;


