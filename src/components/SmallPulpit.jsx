import React from 'react';
import Footer from './Footer'; 
import { useNavigate } from "react-router-dom";
import "./moreInfo.css";


  



function SmallPulpit() {
  const navigate = useNavigate() ;
  return (
    <div className="SmallPulpit">
      <h1>Small Pulpit</h1>
      <p>This small wooden structure today seems oddly out of place along the western wall. Although once it was an active part of the services. This was one of two pulpits that were on the upper part of the Rood Screen. Its matching pair were the position from which students would read from the New Testament Gospels and impart the words of God from a high place during services. These were removed when the organ was introduced to the chapel to accommodate the instrument.</p>
      <button className="backButton" onClick={() => navigate(-1)}>
        Back to Tour
      </button>
      <Footer />
    </div>
  );
}



export default SmallPulpit;


