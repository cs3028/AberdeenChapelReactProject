import React from 'react';
import Footer from './Footer'; 
import { useNavigate } from "react-router-dom";
import "../info.css";


function ElphinstoneGrave() {
  const navigate = useNavigate() ;
  return (
    <div>
      <div className="two-column-section">
        <div className="column">
          <h2>Elphinstone's Grave</h2>
          <p>
          What remains today is the original base and cover slab of the tomb Chest. It is made of Black marble which was brought from Tournai in Belgium. This same marble from Tourai can be seen in adjoining grave markers.  The Statue of Bishop Elphinstone and supporting figures were destroyed after the Reformation.
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



export default ElphinstoneGrave;


