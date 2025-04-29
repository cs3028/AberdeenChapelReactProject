import React from 'react';
import Footer from './Footer'; 
import { useNavigate } from "react-router-dom";
import "../info.css";


function Mary() {
  const navigate = useNavigate() ;
  return (
    <div>
      <div className="two-column-section">
        <div className="column">
          <h2>Good Bye To Mary</h2>
          <p>
          The work which hangs over the old Library access door, and our exit today, was not an original part of the Chapels furniture but was a later addition which was brought from Germany and is contemporary to the construction of the Chapel. It became an important feature of the chapel as a final stop for Catholic Christian visitors to say Goodbye and pray for safety and health on their journey ahead. 
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



export default Mary;


