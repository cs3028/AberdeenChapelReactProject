import React from 'react';
import Footer from './Footer';
import { useNavigate } from "react-router-dom";
import "../info.css";

function RoodScreen() {
  const navigate = useNavigate() ;
  return (
    <div>
      <div className="two-column-section">
        <div className="column">
          <h2>The Chapel's Rood Screen</h2>
          <p>
          To adapt to changing needs, the Rood Screen, the wooden structure holding the organ above, was moved from its original position to line up with the current entrance. Originally, the antechapel’s purpose was to divide worshipers from the clergy and choir. Historically, members of this collegiate chapel were made up of those connected to the King’s College and not for the public. In the early days the small student body would have joined in services and the rood screen acted as a barrier to separate those in leadership roles within the chapel from themselves those in the Antechapel. Later after the rood screen was moved to its current position. This meant that to accommodate a growing student body, students would walk to St. Machers. This was done under careful eye of professors to make sure no one snuck away during their journey to worship.
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

export default RoodScreen;
