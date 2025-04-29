import React from 'react';
import Footer from './Footer'; 
import { useNavigate } from "react-router-dom";
import "../info.css";


  function ChoirStallsSection() {
  const navigate = useNavigate() ;
  return (
    <div>
      <div className="two-column-section">
        <div className="column">
          <h2>The Choir Stalls Section</h2>
          <p>
          In 1497, the Founder Bishop Elphinstone gave direction that ‘everyday, by the Grace of God there be singing with note: mattins, evensong, mass of our Lady and High mass’ and more so on Sundays and feast days. It can be imagined that this was to be a place of near continuous song and praise in his planned purpose for King’s college. This singing would be made up of six priests, eight prebendaries, four choir boys. These numbers growing over time.
          </p>
        </div>

        <div className="column">
          <p>
          The Choir seats are one piece in connection with the Rood Screen that we discovered in the antechapel. Which means that when it moved so did the choir seats. It is easy to imagine their original position by looking at the shape of the windows. The first section is the original and another section was added during the 1800s renovation. 
          </p>
        </div>
      </div>
      <button className="backButton" onClick={() => navigate(-1)}>
          Back to Tour
        </button>
        <Footer />
    </div>
  );
}



export default ChoirStallsSection;


