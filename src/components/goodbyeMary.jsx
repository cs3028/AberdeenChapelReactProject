import React from 'react';
import Footer from './Footer'; 
import { useNavigate } from "react-router-dom";
import "./moreInfo.css";


function Mary() {
  const navigate = useNavigate() ;
  return (
    <div className="mary">
      <h1>Saying Goodbye to Mary</h1>
      <button className="backButton" onClick={() => navigate(-1)}>
        Back to Tour
      </button>
      <Footer />
    </div>
  );
}



export default Mary;


