import React from 'react';
import Footer from './Footer'; 
import { useNavigate } from "react-router-dom";
import "../info.css";

function LargePulpit() {
  const navigate = useNavigate() ;
  return (
    <div>
      <div className="two-column-section">
        <div className="column">
          <h2>The Main Pulpit</h2>
          <p>
          The pulpit was originally a part of the St. Machar’s Cathedral but was moved here during the 1800s renovation. On it you can see the arms of Bishop William Stewart (d. 1545).
          </p>
        </div>

        <div className="column">
        </div>
      </div>
      <button className="backButton" onClick={() => navigate(-1)}>
          Back to Tour
        </button>
      <Footer />
    </div>
  );
}



export default LargePulpit;


