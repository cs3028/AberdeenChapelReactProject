import React from 'react';
import Footer from './Footer'; 
import { useNavigate } from "react-router-dom";
import "./moreInfo.css";


  function Graffiti() {
  const navigate = useNavigate() ;
  return (
    <div className="graffiti">
      <h1>Ancient Graffiti Within The Chapel</h1>
      <p>The Antechapel serves as a space to honor University members who lost their lives in World War I and II, with a commemorative window and names displayed around the room. While its structure has remained largely unchanged, it has become smaller due to the addition of the Rood Screen. The Antechapel now welcomes visitors into the Chapel, where services and events continue to be held.</p>
      <button className="backButton" onClick={() => navigate(-1)}>
        Back to Tour
      </button>
      <Footer />
    </div>
  );
}



export default Graffiti;


